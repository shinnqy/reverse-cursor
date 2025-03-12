// @ts-check

class _A {
  async immediatelyFireCppWithSpecifiedPosition({
    uri: uri,
    editor: editor,
    position: position,
    abortController: abortController,
    generationUUID: generationUUID,
    modelValue: modelValue,
    modelVersion: modelVersion,
    context: context,
    source: source,
  }) {
    if (this.S === void 0)
      return (
        oa("[Cpp] Bad Case: diffingProvider is undefined"), { success: !1 }
      )
    this.fastPeriodicallyReloadCppConfig()
    const shouldRelyOnFileSync =
        (await this.Db.onlyLocalProvider?.runCommand(
          GB.ShouldRelyOnFileSyncForFile,
          {
            relativeWorkspacePath: this.mb.asRelativePath(uri),
            modelVersion: modelVersion,
          },
        )) ?? !1,
      cppConfig = this.Ob().cppConfig
    if (
      (!shouldRelyOnFileSync || !cppConfig?.enableFilesyncDebounceSkipping) &&
      (await this.Z.shouldDebounce(generationUUID))
    )
      return { success: !1 }
    const startTime = performance.now()
    let partialCppRequest
    try {
      partialCppRequest = await this.getPartialCppRequest({
        editor: editor,
        uri: uri,
        modelValue: modelValue,
        modelVersion: modelVersion,
        position: position,
        source: source,
        shouldRelyOnFileSyncForFile: shouldRelyOnFileSync,
      })
    } catch (e) {
      return (
        oa(`[Cpp] Bad Case: Error in getPartialCppRequest: ${e}`),
        { success: !1 }
      )
    }
    const model = editor.getModel()
    if (model === null)
      return oa("[Cpp] Bad Case: model is null"), { success: !1 }
    let workspaceId = this.hb.workspaceUserPersistentStorage.uniqueCppWorkspaceId
    workspaceId === void 0 &&
      ((workspaceId =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)),
      this.hb.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", workspaceId)),
      source !== ll.CursorPrediction &&
        !this.Bb.onlyTriggerOnCppAccept() &&
        this.Bb.getAndShowNextPrediction({
          editor: editor,
          triggerCppCallback: this.fireCppSuggestionFromTrigger.bind(this),
          getLinterErrors:
            this.getRecentAndNearLocationLinterErrors.bind(this),
          source: QN.ALWAYS_ON,
        })
    const modelVersionId = model.getVersionId(),
      modelSnapshot = Ycr(model)
    abortController.signal.addEventListener("abort", () => {
      this.S?.cancelCpp(generationUUID)
    }),
      this.X !== void 0 &&
        this.tb.distribution({
          stat: "cppclient.beforeStreamCpp",
          value: performance.now() - this.X,
        }),
      (this.y = generationUUID)
    const relevantSuggestions = this.wb.getRelevantSuggestions(model, this.mb.asRelativePath(model.uri))
    relevantSuggestions.suggestions.length > 0 &&
      (oa("Recording event...."),
      this.qb.recordLspSuggestionEvent(
        model,
        editor.getId(),
        relevantSuggestions.suggestions.map((Ee) => Ee.label),
        generationUUID,
      )),
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          partialData: {
            ...partialCppRequest,
            modelName: this.getModelName(),
            diffHistoryKeys: [],
            contextItems: [],
            parameterHints: this.wb.getRelevantParameterHints(editor),
            lspSuggestedItems: relevantSuggestions,
            lspContexts: [],
            filesyncUpdates: [],
            workspaceId: workspaceId,
            timeSinceRequestStart:
              performance.now() + performance.timeOrigin - context.startOfCpp,
            timeAtRequestSend: Date.now(),
          },
          generateUuid: generationUUID
        })
      }),
      await this.S.streamCpp(
        Yt.wrap(
          new D1t({
            ...partialCppRequest,
            modelName: this.getModelName(),
            diffHistoryKeys: [],
            contextItems: [],
            parameterHints: this.wb.getRelevantParameterHints(editor),
            lspSuggestedItems: relevantSuggestions,
            lspContexts: [],
            filesyncUpdates: [],
            workspaceId: workspaceId,
            timeSinceRequestStart:
              performance.now() + performance.timeOrigin - context.startOfCpp,
            timeAtRequestSend: Date.now(),
          }).toBinary(),
        ),
        { generateUuid: generationUUID, startOfCpp: context.startOfCpp },
      )
    const cppProvider = this.S,
      cppStream = this.streamCpp(abortController, cppProvider, generationUUID)
    if (cppStream == null)
      return (
        oa("[Cpp] Bad Case: cppStream is null or undefined"), { success: !1 }
      )
    const streamIterator = cppStream[Symbol.asyncIterator]()
    let firstChunkValue,
      fusedCursorPrediction = null,
      fullText,
      rangeToReplace,
      modelInfo,
      textToReplace
    for (;;) {
      const nextValue = await streamIterator.next()
      if (nextValue.done) {
        if (abortController.signal.aborted) return { success: !1 }
        zdt("[Cpp] Bad Case: stream ended before finding range")
        break
      }
      const value = nextValue.value
      if (value.case === "modelInfo") modelInfo = value.modelInfo
      else if (value.case === "rangeToReplaceOneIndexed") {
        ;(rangeToReplace = new Kf(value.range)),
          (textToReplace = model.getValueInRange({
            startLineNumber: rangeToReplace.startLineNumber,
            startColumn: 1,
            endLineNumber: rangeToReplace.endLineNumberInclusive,
            endColumn: model.getLineMaxColumn(rangeToReplace.endLineNumberInclusive),
          }))
        break
      }
    }
    if (textToReplace === void 0 || rangeToReplace === void 0)
      return (
        zdt("[Cpp] Bad Case: did not find rewriteRange from stream"),
        { success: !1 }
      )
    const isFusedCursorPredictionModel = modelInfo
        ? modelInfo.isFusedCursorPredictionModel
        : this.usingFusedCursorPredictionModel(),
      predictionId = rt()
    if (((this.cb = predictionId), isFusedCursorPredictionModel)) {
      const predictionStream = dgo(streamIterator, textToReplace, (position.lineNumber ?? 1) - rangeToReplace.startLineNumber),
        { firstChunk: ke, fullText: Ae } = await predictionStream.text
      ;(firstChunkValue = ke), (fullText = Ae), (fusedCursorPrediction = predictionStream.fusedCursorPrediction)
    } else
      this.Ob().chunkedStreamingEnabledV2 === !0
        ? ([firstChunkValue, fullText] = await ugo(streamIterator, textToReplace, (position.lineNumber ?? 1) - rangeToReplace.startLineNumber))
        : (firstChunkValue = await qMs(streamIterator))
    const range = new Hu({
      startLineNumber: rangeToReplace.startLineNumber,
      startColumn: 1,
      endLineNumberInclusive: rangeToReplace.endLineNumberInclusive,
      endColumn: model.getLineMaxColumn(rangeToReplace.endLineNumberInclusive),
    })

    fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({
        firstChunkValue: firstChunkValue,
        generationUUID: generationUUID,
      }),
    });

    if (typeof firstChunkValue === 'string') {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          fullText: firstChunkValue,
          generationUUID: generationUUID,
        }),
      });
    } else {
      firstChunkValue && firstChunkValue.then((text) => {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            fullText: text,
            generationUUID: generationUUID,
          }),
        });
      })
    }


    fullText && fullText.then((text) => {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          fusedCursorPrediction: text,
          generationUUID: generationUUID,
        }),
      });
    })

    if (abortController.signal.aborted) return { success: !1 }
    if (
      ((this.w = generationUUID),
      this.qb.recordCppTriggerEvent(
        model,
        generationUUID,
        new Aoe({
          lineNumberOneIndexed: position.lineNumber,
          columnOneIndexed: position.column,
        }),
        source,
      ),
      this
        .pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
        !0)
    )
      return oa("[Cpp] Bad Case: triggering is paused"), { success: !1 }
    const eol = model.getEOL(),
      notebookInfo = this.getNotebookCellInfo(model, editor, eol),
      isValidCase = await this.Fb.isValidCppCase({
        model: model,
        modelOutputText: firstChunkValue,
        startingRange: new Hu(range),
        notebookInfo: notebookInfo,
        eol: eol,
      }),
      recordFinishedGeneration = (diffText) => {
        abortController.signal.aborted ||
          this.qb.recordFinishedCppGeneration(
            model,
            this.createRecoverableData({
              requestId: generationUUID,
              diffText: diffText,
              startingRange: range,
              selection: range,
            }),
          )
      }
    if (!isValidCase.valid) {
      const cursorPredictionResult = await fusedCursorPrediction
      return predictionId !== this.cb
        ? { success: !1 }
        : (cursorPredictionResult !== null &&
            (this.ab
              ? oa(
                  "[Cpp] Suppressing cursor prediction because the last cursor movement was a cursor prediction",
                )
              : this.isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(
                    cursorPredictionResult,
                  )
                ? oa(
                    `[Cpp] Suppressing cursor prediction because it is too close to a previously accepted suggestion (previous: ${JSON.stringify(this.bb)})`,
                  )
                : this.cursorPredictorWouldTabInsteadOfAccepting()
                  ? oa(
                      "[Cpp] Suppressing cursor prediction because pressing Tab would not accept it",
                    )
                  : (oa(
                      "[Cpp] Showing cursor prediction immediately because the edit suggestion was suppressed",
                    ),
                    source !== ll.CursorPrediction
                      ? await this.displayFusedCursorPrediction({
                          editor: editor,
                          model: model,
                          oldText: "",
                          newText: "",
                          fusedCursorPrediction: cursorPredictionResult,
                        })
                      : oa(
                          "[Cpp] Not displaying fused NCP because the source was cursor prediction",
                        ))),
          { success: !1 })
    }
    ;(firstChunkValue = isValidCase.modelOutputText),
      fusedCursorPrediction?.then((prediction) => (this.uponFusedCursorPredictionReady(predictionId, prediction), !0))
    const suggestion = this.Gb.createUnseenSuggestion({
      model: modelSnapshot,
      diffText: firstChunkValue,
      startingRange: range,
      eol: eol,
      requestId: generationUUID,
      modelVersionWhenInvoked: modelVersionId,
      selection: range,
      source: source,
      suggestionTriggerTime: context.startOfCpp,
      fusedCursorPredictionId: fullText === void 0 ? predictionId : void 0,
    })
    if (suggestion === void 0)
      return oa("[Cpp] Bad Case: cppSuggestion is undefined"), { success: !1 }
    const endTime = performance.now()
    this.tb.distribution({ stat: "cppclient.immediatelyFire", value: endTime - startTime })
    let isSuggestionDisplayed
    return (
      this.y !== generationUUID ||
      this.getCurrentSuggestion() !== void 0 ||
      model.getVersionId() !== modelVersionId ||
      (this.Ob().cppAutoImportEnabled && this.Ib.isShowingImportSuggestion())
        ? ((isSuggestionDisplayed = !0),
          this.N.addSuggestion({ ...suggestion, abortController: abortController }, model, editor))
        : (this.Vb(suggestion), (isSuggestionDisplayed = this.displayCppSuggestion(editor, model, suggestion))),
      fullText !== void 0 && isSuggestionDisplayed && !abortController.signal.aborted
        ? fullText.then((Ee) => {
            abortController.signal.aborted ||
              (recordFinishedGeneration(Ee),
              this.generateFollowupSuggestion(editor, Ee, model, suggestion, position, eol, predictionId),
              (this.R = this.R.filter((ke) => ke.generationUUID !== generationUUID)))
          })
        : fullText === void 0 &&
          (recordFinishedGeneration(firstChunkValue), (this.R = this.R.filter((Ee) => Ee.generationUUID !== generationUUID))),
      { success: isSuggestionDisplayed }
    )
  }
}