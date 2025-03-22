// @ts-check

async immediatelyFireCppWithSpecifiedPosition({
  uri: fileUri,
  editor: editor,
  position: cursorPosition,
  abortController: abortController,
  generationUUID: generationUUID,
  modelValue: modelValue,
  modelVersion: modelVersion,
  context: context,
  source: source,
}) {
  if (this.diffingProvider === undefined)
    return (
      logError("[Cpp] Bad Case: diffingProvider is undefined"), { success: false }
    );

  this.fastPeriodicallyReloadCppConfig();

  const shouldRelyOnFileSync =
    (await this.localProvider?.runCommand(
      Command.ShouldRelyOnFileSyncForFile,
      {
        relativeWorkspacePath: this.pathHelper.asRelativePath(fileUri),
        modelVersion: modelVersion,
      },
    )) ?? false;

  const cppConfig = this.getCppConfig();

  if (
    (!shouldRelyOnFileSync || !cppConfig?.enableFilesyncDebounceSkipping) &&
    (await this.debouncer.shouldDebounce(generationUUID))
  )
    return { success: false };

  const startTime = performance.now();
  let partialCppRequest;

  try {
    partialCppRequest = await this.getPartialCppRequest({
      editor: editor,
      uri: fileUri,
      modelValue: modelValue,
      modelVersion: modelVersion,
      position: cursorPosition,
      source: source,
      shouldRelyOnFileSyncForFile: shouldRelyOnFileSync,
    });
  } catch (error) {
    return (
      logError(`[Cpp] Bad Case: Error in getPartialCppRequest: ${error}`),
      { success: false }
    );
  }

  const model = editor.getModel();
  if (model === null)
    return logError("[Cpp] Bad Case: model is null"), { success: false };

  let workspaceId = this.workspaceStorage.uniqueCppWorkspaceId;
  if (workspaceId === undefined) {
    workspaceId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    this.workspaceStorage.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", workspaceId);
  }

  if (source !== Source.CursorPrediction && !this.triggerHandler.onlyTriggerOnCppAccept()) {
    this.triggerHandler.getAndShowNextPrediction({
      editor: editor,
      triggerCppCallback: this.fireCppSuggestionFromTrigger.bind(this),
      getLinterErrors: this.getRecentAndNearLocationLinterErrors.bind(this),
      source: Source.ALWAYS_ON,
    });
  }

  const modelVersionId = model.getVersionId();
  const modelSnapshot = createModelSnapshot(model);

  abortController.signal.addEventListener("abort", () => {
    this.diffingProvider?.cancelCpp(generationUUID);
  });

  if (this.lastRequestTime !== undefined) {
    this.telemetry.distribution({
      stat: "cppclient.beforeStreamCpp",
      value: performance.now() - this.lastRequestTime,
    });
  }

  this.currentGenerationUUID = generationUUID;

  const relevantSuggestions = this.suggestionProvider.getRelevantSuggestions(model, this.pathHelper.asRelativePath(model.uri));
  if (relevantSuggestions.suggestions.length > 0) {
    log("Recording event....");
    this.eventRecorder.recordLspSuggestionEvent(
      model,
      editor.getId(),
      relevantSuggestions.suggestions.map(suggestion => suggestion.label),
      generationUUID,
    );
  }

  await this.diffingProvider.streamCpp(
    wrapRequest(
      new CppRequest({
        ...partialCppRequest,
        modelName: this.getModelName(),
        diffHistoryKeys: [],
        contextItems: [],
        parameterHints: this.suggestionProvider.getRelevantParameterHints(editor),
        lspSuggestedItems: relevantSuggestions,
        lspContexts: [],
        filesyncUpdates: [],
        workspaceId: workspaceId,
        timeSinceRequestStart: performance.now() + performance.timeOrigin - context.startOfCpp,
        timeAtRequestSend: Date.now(),
      }).toBinary(),
    ),
    { generateUuid: generationUUID, startOfCpp: context.startOfCpp },
  );

  const cppStream = this.diffingProvider;
  const stream = this.streamCpp(abortController, cppStream, generationUUID);
  if (stream == null)
    return (
      logError("[Cpp] Bad Case: cppStream is null or undefined"), { success: false }
    );

  const streamIterator = stream[Symbol.asyncIterator]();
  let firstChunk, fullText, fusedCursorPrediction, modelInfo, rangeToReplace, textToReplace;

  for (;;) {
    const nextValue = await streamIterator.next();
    if (nextValue.done) {
      if (abortController.signal.aborted) return { success: false };
      logWarning("[Cpp] Bad Case: stream ended before finding range");
      break;
    }
    const value = nextValue.value;
    if (value.case === "modelInfo") modelInfo = value.modelInfo;
    else if (value.case === "rangeToReplaceOneIndexed") {
      rangeToReplace = new Range(value.range);
      textToReplace = model.getValueInRange({
        startLineNumber: rangeToReplace.startLineNumber,
        startColumn: 1,
        endLineNumber: rangeToReplace.endLineNumberInclusive,
        endColumn: model.getLineMaxColumn(rangeToReplace.endLineNumberInclusive),
      });
      break;
    }
  }

  if (textToReplace === undefined || rangeToReplace === undefined)
    return (
      logWarning("[Cpp] Bad Case: did not find rewriteRange from stream"),
      { success: false }
    );

  const isFusedCursorPredictionModel = modelInfo
    ? modelInfo.isFusedCursorPredictionModel
    : this.usingFusedCursorPredictionModel();

  const predictionId = generateId();
  if ((this.currentPredictionId = predictionId), isFusedCursorPredictionModel) {
    const predictionStream = handleStreamWithPredictions(streamIterator, textToReplace, (cursorPosition.lineNumber ?? 1) - rangeToReplace.startLineNumber);
    const { firstChunk: chunk, fullText: text } = await predictionStream.text;
    firstChunk = chunk;
    fullText = text;
    fusedCursorPrediction = predictionStream.fusedCursorPrediction;
  } else {
    if (this.getCppConfig().chunkedStreamingEnabledV2 === true) {
      [firstChunk, fullText] = await handleChunkedStream(streamIterator, textToReplace, (cursorPosition.lineNumber ?? 1) - rangeToReplace.startLineNumber);
    } else {
      firstChunk = await consumeRemainingStream(streamIterator);
    }
  }

  const range = new Range({
    startLineNumber: rangeToReplace.startLineNumber,
    startColumn: 1,
    endLineNumberInclusive: rangeToReplace.endLineNumberInclusive,
    endColumn: model.getLineMaxColumn(rangeToReplace.endLineNumberInclusive),
  });

  fetch('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({
      modelOutputText: firstChunk,
    }),
  });

  if (abortController.signal.aborted) return { success: false };

  if (
    (this.currentGenerationUUID = generationUUID),
    this.eventRecorder.recordCppTriggerEvent(
      model,
      generationUUID,
      new Position({
        lineNumberOneIndexed: cursorPosition.lineNumber,
        columnOneIndexed: cursorPosition.column,
      }),
      source,
    ),
    this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING === true)
  )
    return logError("[Cpp] Bad Case: triggering is paused"), { success: false };

  const eol = model.getEOL();
  const notebookInfo = this.getNotebookCellInfo(model, editor, eol);
  const isValidCase = await this.validationHandler.isValidCppCase({
    model: model,
    modelOutputText: firstChunk,
    startingRange: new Range(range),
    notebookInfo: notebookInfo,
    eol: eol,
  });

  const recordFinishedGeneration = (diffText) => {
    if (!abortController.signal.aborted) {
      this.eventRecorder.recordFinishedCppGeneration(
        model,
        this.createRecoverableData({
          requestId: generationUUID,
          diffText: diffText,
          startingRange: range,
          selection: range,
        }),
      );
    }
  };

  if (!isValidCase.valid) {
    const prediction = await fusedCursorPrediction;
    if (predictionId !== this.currentPredictionId) return { success: false };

    if (prediction !== null) {
      if (this.suppressCursorPrediction) {
        logError("[Cpp] Suppressing cursor prediction because the last cursor movement was a cursor prediction");
      } else if (this.isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(prediction)) {
        logError(`[Cpp] Suppressing cursor prediction because it is too close to a previously accepted suggestion (previous: ${JSON.stringify(this.lastAcceptedSuggestion)})`);
      } else if (this.cursorPredictorWouldTabInsteadOfAccepting()) {
        logError("[Cpp] Suppressing cursor prediction because pressing Tab would not accept it");
      } else {
        log("[Cpp] Showing cursor prediction immediately because the edit suggestion was suppressed");
        if (source !== Source.CursorPrediction) {
          await this.displayFusedCursorPrediction({
            editor: editor,
            model: model,
            oldText: "",
            newText: "",
            fusedCursorPrediction: prediction,
          });
        } else {
          log("[Cpp] Not displaying fused NCP because the source was cursor prediction");
        }
      }
    }
    return { success: false };
  }

  firstChunk = isValidCase.modelOutputText;
  if (fusedCursorPrediction) {
    fusedCursorPrediction.then((prediction) => {
      this.uponFusedCursorPredictionReady(predictionId, prediction);
    });
  }

  const suggestion = this.suggestionCreator.createUnseenSuggestion({
    model: modelSnapshot,
    diffText: firstChunk,
    startingRange: range,
    eol: eol,
    requestId: generationUUID,
    modelVersionWhenInvoked: modelVersionId,
    selection: range,
    source: source,
    suggestionTriggerTime: context.startOfCpp,
    fusedCursorPredictionId: fullText === undefined ? predictionId : undefined,
  });

  if (suggestion === undefined)
    return logError("[Cpp] Bad Case: cppSuggestion is undefined"), { success: false };

  const endTime = performance.now();
  this.telemetry.distribution({ stat: "cppclient.immediatelyFire", value: endTime - startTime });

  let isSuggestionDisplayed;
  if (
    this.currentGenerationUUID !== generationUUID ||
    this.getCurrentSuggestion() !== undefined ||
    model.getVersionId() !== modelVersionId ||
    (this.getCppConfig().cppAutoImportEnabled && this.importHandler.isShowingImportSuggestion())
  ) {
    isSuggestionDisplayed = true;
    this.suggestionManager.addSuggestion({ ...suggestion, abortController: abortController }, model, editor);
  } else {
    this.setCurrentSuggestion(suggestion);
    isSuggestionDisplayed = this.displayCppSuggestion(editor, model, suggestion);
  }

  if (fullText !== undefined && isSuggestionDisplayed && !abortController.signal.aborted) {
    fullText.then((text) => {
      if (!abortController.signal.aborted) {
        recordFinishedGeneration(text);
        this.generateFollowupSuggestion(editor, text, model, suggestion, cursorPosition, eol, predictionId);
        this.pendingGenerations = this.pendingGenerations.filter((gen) => gen.generationUUID !== generationUUID);
      }
    });
  } else if (fullText === undefined) {
    recordFinishedGeneration(firstChunk);
    this.pendingGenerations = this.pendingGenerations.filter((gen) => gen.generationUUID !== generationUUID);
  }

  return { success: isSuggestionDisplayed };
}