// @ts-check

export function createImportPredictionService(params) {
  const {V, __decorate, __param, Pt: themeService, ue: configurationService, ei: reactiveStorageService, Ve, it: contextService, mo: markerService, Z: instantiationService, metricsService, cppTypeService, everythingProviderService, yi: codeEditorService, Xt: textModelService, cl: statusbarService, cppEventLoggerService, zi: ILanguageFeaturesService, aiFeatureStatusService, st: commandService, aiAssertService, importPredictionService, LRUCache, DYe, fu, rt, q, W, Un, Va, Ri: MarkerSeverity, extUri, MAX_DIAGNOSTIC_DISTANCE, DHe, Ze: CancellationToken, gI, G, mp, lp, Me, GB, CppIntent, P1t, HMi, hG, applyCodeAction, ApplyCodeActionReason, Kh, U, pm } = params;

  var bdi,
    vdi = class extends V {
      static {
        bdi = this
      }
      static {
        this.a = [0]
      }
      constructor(e, t, s, n, r, o, a) {
        super(),
          (this.h = e),
          (this.j = t),
          (this.m = s),
          (this.n = n),
          (this.q = o),
          (this.r = a),
          (this.g = false),
          (this.f = "importPredictionWidget." + rt()),
          (this.b = q("div.importPredictionWidgetBackground")),
          (this.c = q("span", {}, "")),
          W(this.b, this.c)
        const l = r.getColorTheme().getColor(Un),
          c = (h) => {
            h &&
              ((this.b.style.backgroundColor = h.toString()),
              (this.b.style.zIndex = "1"),
              (this.b.style.width = "1000px"),
              (this.b.style.marginLeft = "0px"),
              (this.b.style.whiteSpace = "pre"),
              (this.b.style.fontFamily = "monospace"),
              (this.b.style.zIndex = "4"),
              (this.b.className = "import-prediction-widget"),
              this.s(),
              this.b.classList.add("fancy"))
          }
        this.D(
          r.onDidColorThemeChange((h) => {
            const u = h.getColor(Un)
            c(u)
          }),
        ),
          c(l),
          (this.c.style.fontSize = this.h.getOption(54) + "px"),
          this.D(
            this.q.onDidChangeConfiguration((h) => {
              h.affectsConfiguration("editor.fontSize") &&
                (this.c.style.fontSize =
                  this.q.getValue("editor.fontSize") + "px")
            }),
          ),
          this.h.addContentWidget(this),
          this.D(this.h.onDidChangeModelContent(() => this.t())),
          this.D(this.h.onDidChangeCursorPosition(() => this.t())),
          this.b.addEventListener("mouseenter", () => {
            ;(this.g = true), this.s()
          }),
          this.b.addEventListener("mouseleave", () => {
            ;(this.g = false), this.s()
          })
      }
      s() {
        const e = this.m.match(
            /import from "([^"]*)"|"from ((?:\w|\.|:)+) import |"import ((?:\w|\.|:)+)"|"import ((?:\w|\.|:)+) as ((?:\w|\.|:)+)"/,
          ),
          t = e ? (e[1] ?? e[2] ?? e[3] ?? e[4] ?? "") : "",
          s =
            this.r.applicationUserPersistentStorage
              .howManyTimesHasUserAcceptedImportPrediction ?? 0
        this.g || s < 3
          ? this.n
            ? (this.c.textContent = `import ${this.n} (press TAB or ESC)`)
            : t.length > 0
              ? (this.c.textContent = `import from "${t}" (press TAB or ESC)`)
              : (this.c.textContent = "import (press TAB or ESC)")
          : t.length > 0
            ? (this.c.textContent = `\u2191 import from "${t}"`)
            : (this.c.textContent = "\u2191 import")
      }
      dispose() {
        super.dispose(), this.h.removeContentWidget(this), this.b.remove()
      }
      hide() {
        this.h.removeContentWidget(this)
      }
      show() {
        this.h.addContentWidget(this)
      }
      getId() {
        return this.f
      }
      getDomNode() {
        return this.b
      }
      getPosition() {
        const e = this.h.getModel()
        if (e === null) return null
        const t = e.getDecorationRange(this.j)
        if (
          t === null ||
          (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn)
        )
          return this.hide(), null
        const s = e.getLineMaxColumn(t.startLineNumber)
        return {
          position: { lineNumber: t.startLineNumber, column: s },
          preference: bdi.a,
        }
      }
      t() {
        this.getPosition() && this.h.layoutContentWidget(this)
      }
    }
  vdi = bdi = __decorate([__param(4, themeService), __param(5, configurationService), __param(6, reactiveStorageService)], vdi)
  var Hgo = 5,
    Vgo = 7,
    Wgo = 4,
    qgo = 5,
    DEBOUNCE_TIME_MS = 5e3 * 60,
    ImportPredictionService = class extends V {
      aiClient() {
        return this.c.get()
      }
      constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m) {
        super(),
          (this.s = e), (this.reactiveStorageService = this.s),
          (this.t = t), (this.contextService = this.t),
          (this.u = s), (this.markerService = this.u),
          (this.w = n), (this.instantiationService = this.w),
          (this.y = r), (this.metricsService = this.y),
          (this.z = o), (this.cppTypeService = this.z),
          (this.C = a), (this.everythingProviderService = this.C),
          (this.F = l), (this.codeEditorService = this.F),
          (this.G = c), (this.textModelService = this.G),
          (this.H = h), (this.statusbarService = this.H),
          (this.I = u), (this.cppEventLoggerService = this.I),
          (this.J = d), (this.ILanguageFeaturesService = this.J),
          (this.L = g), (this.aiFeatureStatusService = this.L),
          (this.M = p), (this.commandService = this.M),
          (this.N = m), (this.aiAssertService = this.N),
          (this.g = undefined), (this.cppMethods = this.g),
          (this.h = new Map()),
          (this.m = new LRUCache(100)), (this.markerStateCache = this.m),
          (this.n = []),
          (this.r = []),
          (this.Q = [
            {
              source: "ts",
              codeMatches: (b) => ["2304", "2503", "2552"].includes(b),
              getSymbolName: (b) => {
                const y = b.match(/^Cannot find name '(.*?)'/)
                if (y) return y[1]
              },
            },
            {
              source: "Pylance",
              codeMatches: (b) => b?.value === "reportUndefinedVariable",
              getSymbolName: (b) => {
                const y = b.match(/^"(.*?)" is not defined$/)
                if (y) return y[1]
              },
            },
          ]), (this.registeredParsers = this.Q),
          (this.R = 0),
          (this.S = 5),
          (this.hb = 10),
          (this.ib = 35),
          (this.lb = 50),
          (this.mb = 1.5),
          (this.nb = []),
          (this.ob = []),
          (this.pb = 50),
          (this.qb = 10),
          (this.rb = false),
          (this.Eb = []),
          (this.Fb = 10),
          (this.Gb = 6e4),
          (this.Ib = 1e4),
          (this.Kb = new DYe(1)),
          (this.c = this.instantiationService.createInstance(fu, { service: Va }))
      }
      registerCppMethods(e) {
        this.g = e;
        this.cppMethods = this.g;
      }
      handleNewImportPredictionConfig() {
        const importPredictionConfig =
          this.reactiveStorageService.applicationUserPersistentStorage.cppConfig
            ?.importPredictionConfig
        importPredictionConfig !== undefined &&
          (this.reactiveStorageService.setApplicationUserPersistentStorage(
            "backendHasDisabledCppAutoImport",
            importPredictionConfig.isDisabledByBackend,
          ),
          this.reactiveStorageService.applicationUserPersistentStorage.cppAutoImportEnabled ===
            undefined &&
            importPredictionConfig.shouldTurnOnAutomatically &&
            this.reactiveStorageService.setApplicationUserPersistentStorage(
              "cppAutoImportEnabled",
              true,
            ))
      }
      O() {
        return (
          this.reactiveStorageService.applicationUserPersistentStorage.cppConfig
            ?.importPredictionConfig?.pythonEnabled === true ||
          this.reactiveStorageService.applicationUserPersistentStorage
            .userHasEnabledImportPredictionForPython === true
        )
      }
      P(uri) {
        return [".js", ".ts", ".jsx", ".tsx", ...(this.O() ? [".py"] : [])].some(
          (ext) => uri.toString().endsWith(ext),
        )
      }
      _isSupportedFileType(uri) {
        return this.P(uri);
      }
      async handleUpdatedLintErrors({
        openEditor: openEditor,
        uri: uri,
        position: position,
        allMarkers: allMarkers,
        source: source,
      }) {
        if (
          !this.isEnabled() ||
          !this._isSupportedFileType(uri) ||
          !this.cppMethods?.isTextFocusedOrSimilarlyFocused(openEditor) ||
          !openEditor.getModel()
        )
          return
        // 过滤出当前文件的错误/警告
        const relevantMarkers = allMarkers.filter(
          (marker) =>
            [MarkerSeverity.Error, MarkerSeverity.Warning].includes(marker.severity) &&
            extUri.isEqual(marker.resource, uri),
        )
        this.Db(openEditor)
        const shouldProcessMarker = (marker) => {
            const symbolName = this._getSymbolFromMarker(marker),
              currentSymbol = this._getCurrentSymbolByMarker(openEditor, marker)
            if (symbolName === undefined || currentSymbol !== symbolName) return false
            const existingState = this._getMarkerStateFromCache(openEditor, marker)
            return existingState !== undefined && existingState.seenAt.getTime() > Date.now() - DEBOUNCE_TIME_MS // DEBOUNCE_TIME_MS状态防抖
              ? (existingState.currentMarkers.push(marker),
                existingState.status === "debouncing" ? ((existingState.status = "computing"), true) : false)
              : Math.abs(marker.startLineNumber - position.lineNumber) >= MAX_DIAGNOSTIC_DISTANCE // 忽略距离光标过远的错误
                ? false
                : (this.markerStateCache.set(this._generateMarkerCacheKey(openEditor, marker), {
                    uri: uri,
                    symbolName: symbolName,
                    currentMarkers: [marker],
                    status: "computing",
                    seenAt: new Date(),
                    versionComputedAt: openEditor.getModel()?.getVersionId() ?? 0,
                  }),
                  true)
          },
          markersToProcess = relevantMarkers
            .sort(
              (a, b) =>
                Math.abs(a.startLineNumber - position.lineNumber) -
                Math.abs(b.startLineNumber - position.lineNumber),
            )
            .filter(shouldProcessMarker)
        this._updateMarkerStateCache(openEditor, allMarkers),
          this.showCorrectUI(openEditor, {
            hideIfSameState: source === "onDidChangeCursorPosition",
          })
        try {
          markersToProcess.length > 0 && (await this._processDiagnosticsForImports(openEditor, markersToProcess))
        } catch {}
      }
      async _processDiagnosticsForImports(editor, allMarkers) {
        return await this.U(editor, allMarkers);
      }
      async U(editor, allMarkers) {
        if (!this.isEnabled()) return
        const s = editor.getModel()
        if (s === null) return
        const uri = s.uri,
          r = performance.now(),
          o = new DHe(s, CancellationToken.None),
          a = 250
        await new Promise((resolve) => setTimeout(resolve, a))
        const currentVersionId = s.getVersionId()
        await Promise.all(
          allMarkers.map(async (marker) => {
            let h
            try {
              if (o.token.isCancellationRequested)
                throw new Error("cts.token.isCancellationRequested")
              if (this.R >= this.S)
                throw new Error("too many code actions requests in flight")
              this.R++,
                (h = await gI(
                  this.ILanguageFeaturesService.codeActionProvider,
                  s,
                  G.lift(marker),
                  { type: 2, triggerAction: mp.QuickFix },
                  lp.None,
                  CancellationToken.None,
                ))
            } catch (error) {
              const C = this._getMarkerStateFromCache(editor, marker)
              throw (C && (C.status = "debouncing"), error)
            } finally {
              this.R--
            }
            if (h === undefined)
              throw new Error(
                "no code actions found - this should be unreachable",
              )
            const isPythonImportCommand = (action) =>
                action !== undefined &&
                Array.isArray(action.arguments) &&
                action.arguments.length === 1 &&
                typeof action.arguments[0] == "string" &&
                action.arguments[0].startsWith("python.addImport"),
              importActions = h.allActions.filter(
                (action) =>
                  !action.action.disabled &&
                  (action.action.title.includes("Add import from") ||
                    action.action.title.includes("Update import from") ||
                    isPythonImportCommand(action.action.command)),
              ),
              textEditsMap = new Map()
            importActions.filter(
              (action) =>
                action.action.edit?.edits.at(0) !== undefined &&
                "textEdit" in action.action.edit.edits[0],
            ).forEach((action) => {
              action.action.edit !== undefined && textEditsMap.set(action, action.action.edit)
            })
            const pythonImportCommands = importActions.flatMap((action) =>
                isPythonImportCommand(action.action.command)
                  ? [{ action: action, command: action.action.command }]
                  : [],
              ),
              markerState = this._getMarkerStateFromCache(editor, marker)
            this.O() &&
              pythonImportCommands.length <= Wgo &&
              (await Promise.allSettled(
                pythonImportCommands.map(async ({ action: action, command: command }) => {
                  if (markerState === undefined) return
                  const edit = await this.Lb(action, command, markerState.symbolName)
                  edit !== undefined && textEditsMap.set(action, edit)
                }),
              ))
            const validEdits = [...textEditsMap.entries()].flatMap(([action, editValue]) => {
              if (editValue === undefined) return []
              const applicableEdits = editValue.edits.flatMap((edit) =>
                "textEdit" in edit
                  ? extUri.isEqual(edit.resource, editor.getModel()?.uri)
                    ? editor.getModel()?.getValueInRange(edit.textEdit.range) ===
                      edit.textEdit.text
                      ? []
                      : [{ edit: edit, action: action }]
                    : []
                  : [],
              )
              return applicableEdits.length === 1
                ? { edit: applicableEdits[0].edit, action: action }
                : applicableEdits.every(
                      (edit) =>
                        edit.edit.textEdit.range.startLineNumber ===
                          applicableEdits[0].edit.textEdit.range.startLineNumber &&
                        edit.edit.textEdit.range.endLineNumber ===
                          applicableEdits[0].edit.textEdit.range.endLineNumber &&
                        edit.edit.textEdit.range.startColumn ===
                          applicableEdits[0].edit.textEdit.range.startColumn &&
                        edit.edit.textEdit.range.endColumn ===
                          applicableEdits[0].edit.textEdit.range.endColumn,
                    )
                  ? {
                      edit: {
                        ...applicableEdits[0].edit,
                        textEdit: {
                          ...applicableEdits[0].edit.textEdit,
                          text: applicableEdits.map((edit) => edit.edit.textEdit.text)
                            .reverse()
                            .join(""),
                        },
                      },
                      action: action,
                    }
                  : []
            })
            if (validEdits.length > 0 && markerState !== undefined) {
              if (validEdits.length > Vgo)
                if (markerState) {
                  ;(markerState.status = "error"),
                    (markerState.errorReason = new Error(
                      "too many code actions, not doing anything",
                    ))
                  return
                } else
                  throw new Error(
                    "lintError is undefined, this should not happen",
                  )
              const result = await this._applyBestImportEdit(uri, editor, validEdits, marker, markerState)
              if (markerState)
                (markerState.versionComputedAt = currentVersionId),
                  (markerState.status = result.status),
                  result.status === "error" && (markerState.errorReason = result.reason)
              else
                throw new Error("lintError is undefined, this should not happen")
            } else if (markerState) markerState.status = "no-actions"
            else throw new Error("lintError is undefined, this should not happen")
          }),
        )
      }
      async _applyBestImportEdit(uri, editor, validEdits, marker, markerState) {
        return await this.W(uri, editor, validEdits, marker, markerState);
      }
      async W(uri, editor, validEdits, marker, markerState) {
        if (!this.isEnabled())
          return {
            status: "error",
            reason: new Error("importPredictionEnabled is false"),
          }
        if (validEdits.length === 0)
          return {
            status: "error",
            reason: new Error("no edits with actions, this should not happen"),
          }
        try {
          if (this.n.find((se) => this._generateMarkerCacheKey(editor, se.marker) === this._generateMarkerCacheKey(editor, marker)))
            return { status: "pending" }
          const model = editor.getModel()
          if (model === null) throw new Error("model is null")
          const modelValue = model.getValue(),
            modelVersion = model.getVersionId()
          if (model.uri !== uri)
            throw new Error("model uri is different from uri, not doing anything")
          let uniqueCppWorkspaceId = this.reactiveStorageService.workspaceUserPersistentStorage.uniqueCppWorkspaceId
          if (
            (uniqueCppWorkspaceId === undefined &&
              ((uniqueCppWorkspaceId =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)),
              this.reactiveStorageService.setWorkspaceUserPersistentStorage(
                "uniqueCppWorkspaceId",
                uniqueCppWorkspaceId,
              )),
            !validEdits.every(
              (edit) =>
                edit.edit.textEdit.range.startColumn === 1 &&
                edit.edit.textEdit.range.endColumn === 1 &&
                edit.edit.textEdit.text.includes(`
    `),
            ) && marker.source === "ts")
          )
            return (
              await this._recordEdit(editor, uri, validEdits[0].action, validEdits[0].edit.textEdit, marker),
              { status: "pending" }
            )
          // 统计编辑行频率，确定最佳插入位置
          const lineFrequencyMap = validEdits
              .map((edit) => edit.edit.textEdit.range.startLineNumber)
              .reduce((map, lineNum) => ((map[lineNum] = (map[lineNum] || 0) + 1), map), {}),
            mostFrequentLine = Object.entries(lineFrequencyMap).reduce(
              (mostFrequentLineAndCount, [lineNum, lineCount]) => (lineCount > mostFrequentLineAndCount[1] ? [parseInt(lineNum + ""), lineCount] : mostFrequentLineAndCount),
              [0, 0],
            )[0],
            // 定位到导入区域的末尾行
            importSectionEndLine = await this.moveLineToEndOfImportsSectionExclusive(editor, mostFrequentLine),
            insertPosition = new Me(importSectionEndLine, 1)
          if (this.cppMethods?.getPartialCppRequest === undefined)
            throw new Error(
              "getPartialCppRequest is undefined, this should not happen",
            )
          const shouldRelyOnFileSyncForFile =
              (await this.everythingProviderService.onlyLocalProvider?.runCommand(
                GB.ShouldRelyOnFileSyncForFile,
                {
                  relativeWorkspacePath: this.contextService.asRelativePath(uri),
                  modelVersion: model.getVersionId(),
                },
              )) ?? false,
            cppPartialRequest = await this.cppMethods
              .getPartialCppRequest({
                editor: editor,
                uri: uri,
                modelValue: modelValue,
                modelVersion: modelVersion,
                position: insertPosition,
                source: CppIntent.Typing,
                shouldRelyOnFileSyncForFile: shouldRelyOnFileSyncForFile,
              })
              .catch((error) => {
                throw error
              })
          if (editor.getModel()?.uri !== uri)
            throw new Error("model uri is different from uri, not doing anything")
          const suggestedEdits = validEdits.map(
              (edit) =>
                new P1t({
                  text: edit.edit.textEdit.text,
                  editRange: {
                    startLineNumber: insertPosition.lineNumber,
                    startColumn: 1,
                    endLineNumberInclusive: insertPosition.lineNumber,
                    endColumn: 1,
                  },
                }),
            ),
            { getModelName: getModelName } = this.cppMethods
          if (getModelName === undefined)
            throw new Error("getModelName is undefined, this should not happen")
          const nearbyLinterErrors = this.cppMethods?.getRecentAndNearLocationLinterErrors?.(uri, marker),
            filteredLinterErrors = nearbyLinterErrors && { ...nearbyLinterErrors, errors: nearbyLinterErrors.errors.slice(0, Hgo) },
            markerTouchesGreen = this.Bb(marker),
            cppEditClassificationRequest = new HMi({
              cppRequest: {
                ...cppPartialRequest,
                controlToken: hG.LOUD,
                modelName: getModelName(),
                diffHistoryKeys: [],
                contextItems: [],
                parameterHints: this.cppTypeService.getRelevantParameterHints(editor),
                lspContexts: [],
                filesyncUpdates: [],
                workspaceId: uniqueCppWorkspaceId,
                timeAtRequestSend: Date.now(),
                linterErrors: filteredLinterErrors,
              },
              suggestedEdits: suggestedEdits,
              markerTouchesGreen: markerTouchesGreen,
              currentFileContentsForLinterErrors: this.cppMethods?.truncateCurrentFile(
                modelValue,
                marker.startLineNumber,
                model.getEOL(),
                model,
              ),
            }),
            D = performance.now(),
            authHeaders = await this.Ob(),
            cppEditClassificationResponse = await (
              await this.aiClient()
            ).getCppEditClassification(cppEditClassificationRequest, { headers: { ...authHeaders } }),
            { scoredEdits: scoredEdits, shouldNoop: shouldNoop, generationEdit: generationEdit } = cppEditClassificationResponse,
            bestEdit = i$s(scoredEdits.at(0)),
            matchingEdit = validEdits.find(({ edit: edit }) => edit.textEdit.text === bestEdit.edit?.text)
          if (matchingEdit === undefined) throw new Error("bestImport is undefined")
          const bestEditLogprobs = i$s(bestEdit?.logProbs)
          return (shouldNoop ??
            this._shouldSkipEdit({
              bestEditLogprobs: bestEditLogprobs,
              generationEditLogprobs: generationEdit?.logProbs,
              opEditString: matchingEdit.edit.textEdit.text,
              symbolName: markerState.symbolName,
              markerTouchesGreen: markerTouchesGreen,
            }))
            ? { status: "noop" }
            : (await this._recordEdit(editor, uri, matchingEdit.action, matchingEdit.edit.textEdit, marker),
              { status: "pending" })
        } catch (error) {
          return { status: "error", reason: error }
        } finally {
        }
      }
      _shouldSkipEdit(params) {
        return this.X(params);
      }
      X({
        bestEditLogprobs,
        generationEditLogprobs,
        opEditString,
        symbolName,
        markerTouchesGreen,
      }) {
        // 找到最后一个与提议编辑匹配的token的索引
        const lastMatchingTokenIndex = ((tokens, predicate) => {
            for (let i = tokens.length - 1; i >= 0; i--) if (predicate(tokens[i], i)) return i
            return -1
          })(bestEditLogprobs.tokens, (token, index) =>
            bestEditLogprobs.tokens.slice(index).join("").trim().startsWith(opEditString.trim()),
          ),
          // 查找符号名出现的索引
          symbolNameIndex = bestEditLogprobs.tokens.findIndex(
            (token, index) =>
              index >= lastMatchingTokenIndex &&
              !!bestEditLogprobs.tokens
                .slice(lastMatchingTokenIndex, index)
                .join("")
                .trim()
                .match(new RegExp(`\\b${symbolName}\\b`)),
          ),
          firstTokenProbability = bestEditLogprobs.tokenLogprobs[lastMatchingTokenIndex],
          minIntermediateProbability = Math.min(0, ...bestEditLogprobs.tokenLogprobs.slice(lastMatchingTokenIndex + 1, symbolNameIndex)),
          generatedSymbols = generationEditLogprobs?.tokens.join("").match(/(\w+)/g),
          touchFactor = markerTouchesGreen ? 2 : 1
        return generatedSymbols && generatedSymbols.includes(symbolName) && Math.exp(firstTokenProbability) * touchFactor > 0.1
          ? false
          : Math.exp(firstTokenProbability + minIntermediateProbability) * touchFactor < 0.02
      }
      async _recordEdit(editor, uri, action, edit, marker) {
        return await this.Y(editor, uri, action, edit, marker);
      }
      async Y(editor, uri, action, edit, marker) {
        if (!this.isEnabled()) return
        // 获取最近20个编辑记录，按时间排序（从旧到新）
        const recentEdits = [...this.n]
            .sort(
              (a, b) =>
                (this._getMarkerStateFromCache(editor, b.marker)?.seenAt.getTime() ?? 0) -
                (this._getMarkerStateFromCache(editor, a.marker)?.seenAt.getTime() ?? 0),
            )
            .slice(0, 20),
          modelRef = this.textModelService.createModelReference(uri)
        try {
          const textModel = (await modelRef).object.textEditorModel
          this.n = [
            ...recentEdits,
            {
              uri: uri,
              action: action,
              edit: edit,
              lineContentsAtStartOfEdit: textModel.getValueInRange(
                new G(edit.range.startLineNumber, 1, edit.range.startLineNumber, 1 / 0),
              ),
              marker: marker,
            },
          ]
          const focusedEditor = this.cppMethods?.getFocusedCodeEditor()
          focusedEditor && this.showCorrectUI(focusedEditor)
        } finally {
          ;(await modelRef).dispose()
        }
      }
      _generateMarkerCacheKey(editor, marker) {
        return this.Z(editor, marker);
      }
      Z(e, t) {
        return JSON.stringify({
          owner: t.owner,
          uri: t.resource.toString(),
          symbolName: this._getSymbolFromMarker(t),
        })
      }
      _getSymbolFromMarker(marker) {
        return this.$(marker);
      }
      $(marker) {
        const matchedParser = this.registeredParsers.find(
          (parser) => parser.source === marker.source && parser.codeMatches(marker.code),
        )
        if (matchedParser !== undefined) return matchedParser.getSymbolName(marker.message)
      }
      _getMarkerStateFromCache(editor, marker) {
        return this.ab(editor, marker);
      }
      ab(editor, marker) {
        return this.markerStateCache.get(this._generateMarkerCacheKey(editor, marker))
      }
      _isImportForCurrentEditor(shownImport, editor) {
        return this.bb(shownImport, editor);
      }
      bb(shownImport, editor) {
        return extUri.isEqual(shownImport.uri, editor.getModel()?.uri)
      }
      maybeAcceptShownImport(editor) {
        if (!this.isEnabled()) return false
        const { q: currentSuggestionState } = this
        if (currentSuggestionState === undefined) return false
        if (!this._isImportForCurrentEditor(currentSuggestionState.shownImport, editor)) return this.hideShownImport(editor), false
        const visibleRanges = editor.getVisibleRanges(),
          decorationRange = editor.getModel()?.getDecorationRange(currentSuggestionState.decorationId)
        if (!decorationRange || !visibleRanges.some((range) => this._isRangeOverlapping(range, decorationRange)))
          return this.hideShownImport(editor), false
        const markerState = this._getMarkerStateFromCache(editor, currentSuggestionState.shownImport.marker)
        markerState !== undefined &&
          ((markerState.status = "accepted"),
          (markerState.seenAt = new Date()),
          (async () => {
            try {
              if (this.zb(editor, currentSuggestionState.shownImport)) {
                // 如果需要跳过，尝试获取替代操作
                const alternativeAction =
                  (await Promise.race([
                    this._getMatchingCodeAction(editor, currentSuggestionState.shownImport),
                    (async () => {
                      await new Promise((resolve) => setTimeout(resolve, 75))
                    })(),
                  ])) ?? currentSuggestionState.shownImport.action
                await this.instantiationService.invokeFunction(
                  applyCodeAction,
                  alternativeAction,
                  ApplyCodeActionReason.FromAILightbulb,
                  undefined,
                  CancellationToken.None,
                )
              } else
                await this.instantiationService.invokeFunction(
                  applyCodeAction,
                  currentSuggestionState.shownImport.action,
                  ApplyCodeActionReason.FromAILightbulb,
                  undefined,
                  CancellationToken.None,
                )
              this.reactiveStorageService.setApplicationUserPersistentStorage(
                "howManyTimesHasUserAcceptedImportPrediction",
                (count) => (count ?? 0) + 1,
              )
            } catch {}
          })()),
          this._cleanupImportSuggestion(editor, currentSuggestionState.shownImport),
          this._adjustMarkersForEdit(editor, currentSuggestionState.shownImport.edit)
        const uri = editor.getModel()?.uri
        return uri !== undefined && this.Hb(uri), this.showCorrectUI(editor), true
      }
      maybeRejectShownImport(e) {
        if (!this.isEnabled() || !e.hasTextFocus()) return false
        const t = e.getSelection()
        if (
          t !== null &&
          (t.startLineNumber !== t.endLineNumber || t.startColumn !== t.endColumn)
        )
          return false
        const s = this.vb
        return s === undefined || !this._isImportForCurrentEditor(s, e) || this.wb()
          ? false
          : (this.rejectImport(e, s), this.showCorrectUI(e), true)
      }
      async _getMatchingCodeAction(editor, shownImport) {
        return await this.cb(editor, shownImport);
      }
      async cb(editor, shownImport) {
        const model = editor.getModel()
        if (!model)
          throw new Error(
            "model is undefined, so we can't get the matching code action",
          )
        const n = performance.now()
        return (
          await gI(
            this.ILanguageFeaturesService.codeActionProvider,
            model,
            G.lift(shownImport.marker),
            { type: 2, triggerAction: mp.QuickFix },
            lp.None,
            CancellationToken.None,
          )
        ).allActions.find((o) => o.action.title === shownImport.action.action.title)
      }
      async rejectImport(editor, shownImport) {
        if (!this.isEnabled()) return
        const markerState = this._getMarkerStateFromCache(editor, shownImport.marker)
        markerState && ((markerState.status = "rejected"), (markerState.seenAt = new Date())), this._cleanupImportSuggestion(editor, shownImport)
      }
      _cleanupImportSuggestion(editor, shownImport) {
        return this.db(editor, shownImport);
      }
      db(editor, shownImport) {
        this.isEnabled() &&
          (this.vb === shownImport && this.hideShownImport(editor),
          (this.n = this.n.filter((s) => s !== shownImport)))
      }
      hideShownImport(e) {
        if (!this.isEnabled()) return
        const t = this.q
        if (t) {
          const { shownImport: s, decorationId: n, importWidget: r } = t
          if (
            (r.hide(),
            r.dispose(),
            (this.q = undefined),
            e !== undefined && this._isImportForCurrentEditor(s, e))
          ) {
            const o = e.getModel()
            o && o.deltaDecorations([n], [])
          } else {
            const o = this.textModelService.createModelReference(s.uri)
            ;(async () => {
              try {
                ;(await o).object.textEditorModel.deltaDecorations([n], [])
              } finally {
                ;(await o).dispose()
              }
            })()
          }
        }
      }
      eb(e, t) {
        const s = e.getModel()
        if (!s)
          throw new Error("model is undefined, so we can't get the import range")
        const n = s.getDecorationRange(t.decorationId)
        if (n === null)
          throw new Error("decorationRange is null, this should not happen")
        const {
          startLineNumber: r,
          startColumn: o,
          endLineNumber: a,
          endColumn: l,
        } = t.shownImport.marker
        return (
          n.startLineNumber === r &&
          n.startColumn === o &&
          n.endLineNumber === a &&
          n.endColumn === l
        )
      }
      _renderImportAtLocation(editor, shownImport) {
        return this.fb(editor, shownImport);
      }
      fb(editor, shownImport) {
        if (!this.isEnabled()) return
        if (!this._isImportForCurrentEditor(shownImport, editor))
          throw new Error(
            "renderImportAtLocation called with wrong editor - this should never happen",
          )
        const currentSuggestionState = this.q
        // 如果当前显示的建议与要渲染的建议相同且编辑器状态有效
        if (currentSuggestionState?.shownImport === shownImport && this.eb(editor, currentSuggestionState)) {
          const model = editor.getModel()
          if (!model)
            throw new Error(
              "model is undefined, so we couldn't remove decoration - this should never happen",
            )
          const decorationRange = model.getDecorationRange(currentSuggestionState.decorationId)
          if (decorationRange === null)
            throw new Error("decorationRange is null, this should not happen")
          const markerRange = {
            startLineNumber: shownImport.marker.startLineNumber,
            startColumn: shownImport.marker.startColumn,
            endLineNumber: shownImport.marker.endLineNumber,
            endColumn: shownImport.marker.endColumn,
          }
          if (
            markerRange.endLineNumber - markerRange.startLineNumber !==
              decorationRange.endLineNumber - decorationRange.startLineNumber ||
            markerRange.endColumn - markerRange.startColumn !== decorationRange.endColumn - decorationRange.startColumn
          ) {
            this.hideShownImport(editor)
            return
          } else currentSuggestionState.importWidget.show()
        } else {
          this.hideShownImport(editor)
          const model = editor.getModel()
          if (!model)
            throw new Error(
              "model is undefined, so we couldn't remove decoration - this should never happen",
            )
          const cppAutoImportDecorationStyle =
              this.reactiveStorageService.applicationUserPersistentStorage
                .cppAutoImportDecorationStyle,
            decorations = [
              {
                range: new G(
                  shownImport.marker.startLineNumber,
                  shownImport.marker.startColumn,
                  shownImport.marker.endLineNumber,
                  shownImport.marker.endColumn,
                ),
                options: {
                  className:
                    cppAutoImportDecorationStyle === "squiggle"
                      ? "squiggly-ai cpp-pending-import-decoration"
                      : "auto-import-suggestion-blue-background",
                  stickiness: 1,
                  zIndex: 5,
                  description: "Pending import decoration",
                  isWholeLine: false,
                  collapseOnReplaceEdit: true,
                },
              },
            ],
            [decorationId] = model.deltaDecorations([], decorations)
          ;(this.q = {
            shownImport: shownImport,
            decorationId: decorationId,
            importWidget: this.instantiationService.createInstance(
              vdi,
              editor,
              decorationId,
              shownImport.action.action.title,
              this._getSymbolFromMarker(shownImport.marker),
            ),
          }),
            this.q.importWidget.show()
        }
      }
      _updateMarkerStateCache(editor, marker) {
        return this.gb(editor, marker);
      }
      gb(e, t) {
        if (!this.isEnabled()) return
        for (const [n, r] of this.markerStateCache.entries()) r.currentMarkers = []
        if (!e.getModel())
          throw new Error("model is undefined, so we can't update cached markers")
        for (const n of t) {
          const r = this._getMarkerStateFromCache(e, n)
          r !== undefined && r.currentMarkers.push(n)
        }
        this.h.set(e.getModel()?.uri?.toString() ?? "", t)
      }
      jb(e, t) {
        if (!t)
          throw new Error("position is undefined, so we can't score the import")
        const { startLineNumber: s, startColumn: n } = e
        return (
          Math.abs(t.lineNumber - s) +
          Math.abs(Math.floor(t.column - n) / this.hb)
        )
      }
      kb(e, t, s) {
        const n = this._getMarkerStateFromCache(e, t.marker)?.currentMarkers
        return n === undefined
          ? 1 / 0
          : Math.min(1 / 0, ...n.map((r) => this.jb(r, s)))
      }
      showCorrectUI(e, t) {
        const s = performance.now(),
          n = []
        if ((n.push({ name: "start", time: s }), !this.isEnabled())) return
        const r = e.getPosition()
        if (r === null) return
        if (t?.hideIfSameState && r !== null) {
          const S = e.getModel(),
            x = S?.uri
          if (S !== null && x !== undefined) {
            const k = S.getVersionId()
            if (
              k === this.j?.modelVersion &&
              extUri.isEqual(this.j?.uri, x) &&
              r?.lineNumber === this.j?.cursorPosition?.lineNumber &&
              r?.column === this.j?.cursorPosition?.column
            )
              return
            this.j = { uri: x, modelVersion: k, cursorPosition: r }
          }
        }
        n.push({ name: "preProcessingTime", time: performance.now() })
        const o = e.getVisibleRanges(),
          a = o.some(
            (S) =>
              r !== null && this._isRangeOverlapping(S, new G(r.lineNumber, 1, r.lineNumber, 1)),
          )
        n.push({ name: "visibleRangesTime", time: performance.now() })
        const l = (S) => {
            if (this._isImportForCurrentEditor(S, e) && this.kb(e, S, r) < this.ib) {
              const x = this._getMarkerStateFromCache(e, S.marker)
              if (x !== undefined && x.currentMarkers.length > 0)
                return x.currentMarkers.some(
                  (k) =>
                    this._getCurrentSymbolByMarker(e, k) === x.symbolName &&
                    (!a || o.some((E) => this._isRangeOverlapping(E, k))),
                )
            }
            return false
          },
          c = this.n.filter(l)
        n.push({ name: "validImportsTime", time: performance.now() })
        const h = this.vb,
          u = c.filter((S) => S !== h),
          d =
            r === null
              ? []
              : u.sort((S, x) => this.kb(e, S, r) - this.kb(e, x, r)),
          p =
            h === undefined ||
            (d.length > 0 && this.kb(e, d[0], r) + qgo < this.kb(e, h, r))
              ? d.at(0)
              : h
        n.push({ name: "nextPossiblyShownImportTime", time: performance.now() })
        const m = e.getModel()?.uri
        if (m === undefined)
          throw new Error("uri is undefined, so we can't check if cpp is showing")
        const b = p && this.tb(m, p.marker.startLineNumber)
        n.push({
          name: "cppIsShowingOrIsInlineDiffTime",
          time: performance.now(),
        })
        const y = p && this._getMarkerStateFromCache(e, p.marker),
          w = y?.currentMarkers
            .sort((S, x) => this.jb(S, r) - this.jb(x, r))
            .find((S) => this._getCurrentSymbolByMarker(e, S) === y.symbolName)
        n.push({ name: "matchingMarkerTime", time: performance.now() })
        const C = b ? undefined : w && p
        C === undefined
          ? (this.hideShownImport(e),
            n.push({ name: "hideShownImportTime", time: performance.now() }))
          : l(C) &&
            ((C.marker = w ?? C.marker),
            this._renderImportAtLocation(e, C),
            n.push({ name: "showImportTime", time: performance.now() })),
          this.sb(performance.now() - s, n)
      }
      sb(e, t) {
        this.nb.push(e),
          e > this.qb &&
            (this.ob.push(t), this.ob.length > this.pb && this.ob.shift()),
          this.aiAssertService.assert(
            e < this.qb,
            `showCorrectUI took too long: ${JSON.stringify({ latency: e, evtTimes: t.slice(1).map((s, n) => ({ name: s.name, latency: Math.round(s.time - t[n].time) })) })}`,
          ),
          this.nb.length > this.lb &&
            (this.nb.shift(),
            this.nb.reduce((n, r) => n + r, 0) / this.nb.length > this.mb &&
              !this.rb &&
              ((this.rb = true),
              (async () => {
                try {
                  ;(await this.aiClient()).reportBug({
                    bug: `average onChangeCursorPrediction latency is too high for import prediction: ${JSON.stringify({ lastLatencies: this.nb.map((n) => Math.round(n)), lastLongEventLatencies: this.ob.map((n) => n.slice(1).map((r, o) => ({ name: r.name, latency: Math.round(r.time - n[o].time) }))) })}`,
                    bugType: Kh.MISC_AUTOMATIC_ERROR,
                  })
                } catch {}
              })()))
      }
      tb(e, t) {
        const s = this.reactiveStorageService.nonPersistentStorage.inlineDiffs
        if (s !== undefined) {
          const a = this.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.map(
            (c) => c.generationUUID,
          )
          if (
            s.some((c) => {
              const h = a.includes(c.generationUUID),
                u =
                  t >= c.currentRange.startLineNumber &&
                  t <= c.currentRange.endLineNumberExclusive,
                d = extUri.isEqual(c.uri, e) || e.fsPath === c.uri.fsPath
              return h && u && d
            })
          )
            return true
        }
        const n = this.cppMethods?.getCurrentSuggestion?.()
        if (n === undefined) return false
        const { originalText: r, replaceText: o } = n
        return r.trim() !== o.trim()
      }
      ub(e, t) {
        const s = this.reactiveStorageService.nonPersistentStorage.inlineDiffs
        if (s === undefined) return false
        const n = this.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.map(
          (r) => r.generationUUID,
        )
        return s.some((r) => {
          const o = n.includes(r.generationUUID),
            a =
              t >= r.currentRange.startLineNumber &&
              t < r.currentRange.endLineNumberExclusive,
            l = extUri.isEqual(r.uri, e) || e.fsPath === r.uri.fsPath
          return !o && a && l
        })
      }
      get vb() {
        return this.q?.shownImport
      }
      wb() {
        const e = this.statusbarService.getViewModel()
        for (const t of [...e.getEntries(0), ...e.getEntries(1)])
          if (
            t.id === "vscodevim.vim.primary" &&
            ["INSERT"].some((s) => t.container.innerText.includes(s))
          )
            return true
        return false
      }
      _getCurrentSymbolByMarker(editor, marker) {
        return this.xb(editor, marker);
      }
      xb(editor, marker) {
        const model = editor.getModel()
        if (!marker)
          throw new Error(
            "model is undefined, so we can't get the marker contents",
          )
        return marker.getValueInRange({
          startLineNumber: marker.startLineNumber,
          startColumn: marker.startColumn,
          endLineNumber: marker.endLineNumber,
          endColumn: marker.endColumn,
        })
      }
      handleNewGreens(editor, newRanges) {
        const currentTime = Date.now()
        this.r = this.r
          .filter((marker) => currentTime - marker.timestamp <= 3e4)
          .concat(newRanges.map((range) => ({ uri: editor.uri, range, timestamp: currentTime })))
      }
      _adjustMarkersForEdit(editor, textEdit) {
        return this.yb(editor, textEdit);
      }
      yb(editor, textEdit) {
        const { startLineNumber, endLineNumber } = textEdit.range,
          originalLineCount = endLineNumber - startLineNumber + 1,
          // 计算新增/删除的行数差
          lineDelta =
            textEdit.text.split(`
  `).length - originalLineCount
        this.r = this.r.map((marker) =>
          marker.range.startLineNumber > startLineNumber && extUri.isEqual(marker.uri, editor.getModel()?.uri)
            ? {
                ...marker,
                range: {
                  ...marker.range,
                  startLineNumber: marker.range.startLineNumber + lineDelta,
                  endLineNumber: marker.range.endLineNumber + lineDelta,
                },
              }
            : marker,
        )
      }
      zb(editor, editInfo) {
        const model = editor.getModel()
        if (!model)
          throw new Error(
            "model is undefined, so we can't check if the version is the same",
          )
        const modelVersion = model.getVersionId(),
          markerState = this.markerStateCache.get(this._generateMarkerCacheKey(editor, editInfo.marker))
        if (!markerState)
          throw new Error(
            "seenLintError is undefined, so we can't check if the version is the same",
          )
        if (markerState.versionComputedAt === modelVersion) return false
        const isCommandAction = editInfo.action.action.command !== undefined,
          isSingleLineEdit =
            editInfo.edit.text.split(`
    `).length === 2 &&
            editInfo.edit.text.trim().split(`
    `).length === 1
        return isCommandAction || !isSingleLineEdit
      }
      isShowingImportSuggestion() {
        return false
      }
      hideWidgetsIfConflictsWithCppSuggestion(e, t) {
        const s = this.q
        if (s) {
          const { shownImport: n, decorationId: r } = s
          if (this._isImportForCurrentEditor(n, e)) {
            const o = e.getModel()
            if (o === null) return
            const a = o.getDecorationRange(r)
            a !== null &&
              t.startLineNumber <= a.startLineNumber &&
              t.endLineNumberExclusive > a.startLineNumber &&
              this.hideShownImport(e)
          }
        }
      }
      Ab(e) {
        const t = Date.now(),
          s = 3e4
        return (
          (this.r = this.r.filter((n) => t - n.timestamp <= s)),
          this.r.some(
            (n) =>
              extUri.isEqual(n.uri, e.resource) &&
              this._isRangeOverlapping(n.range, {
                startLineNumber: e.startLineNumber,
                startColumn: e.startColumn,
                endLineNumber: e.endLineNumber,
                endColumn: e.endColumn,
              }),
          )
        )
      }
      Bb(e) {
        return this.Ab(e) || this.ub(e.resource, e.startLineNumber)
      }
      _isRangeOverlapping(range, decorationRange) {
        return this.Cb(range, decorationRange);
      }
      Cb(range, decorationRange) {
        return !(
          range.endLineNumber < decorationRange.startLineNumber ||
          range.startLineNumber > decorationRange.endLineNumber ||
          (range.endLineNumber === decorationRange.startLineNumber &&
            range.endColumn < decorationRange.startColumn) ||
          (range.startLineNumber === decorationRange.endLineNumber && range.startColumn > decorationRange.endColumn)
        )
      }
      isEnabled() {
        return !!(
          this.reactiveStorageService.applicationUserPersistentStorage.cppAutoImportEnabled &&
          !this.reactiveStorageService.applicationUserPersistentStorage
            .backendHasDisabledCppAutoImport &&
          this.reactiveStorageService.applicationUserPersistentStorage.cppEnabled
        )
      }
      Db(e) {
        for (const [t, s] of [...this.markerStateCache.entries()]) {
          const { status: n, seenAt: r, uri: o } = s
          extUri.isEqual(o, e.getModel()?.uri) &&
            n === "no-actions" &&
            this.Eb.filter((l) => l.time > +r && l.uri !== e.getModel()?.uri + "")
              .length > 0 &&
            this.markerStateCache.delete(t)
        }
      }
      markFileAsUpdated(e) {
        this.Eb.push({ uri: e.toString(), time: Date.now() }),
          this.Eb.length > this.Fb && this.Eb.shift()
      }
      Hb(e) {
        for (const [t, s] of [...this.markerStateCache.entries()])
          extUri.isEqual(s.uri, e) &&
            s.status === "noop" &&
            +s.seenAt > Date.now() - this.Gb &&
            this.markerStateCache.delete(t)
      }
      async Lb(e, t, s) {
        let n
        const r = await this.Kb.withSemaphore(
          () =>
            new Promise((l, c) => {
              n = Date.now()
              const h = {
                action: e,
                cancellationToken: CancellationToken.None,
                resolveEdits: l,
                rejectEdits: c,
                appliedAt: Date.now(),
                symbolName: s,
              }
              ;(this.Jb = h),
                setTimeout(() => {
                  this.Jb === h &&
                    ((this.Jb = undefined), c("action was not applied in time"))
                }, this.Ib),
                (async () => {
                  try {
                    const d = (
                      await this.commandService.executeCommand(t.id, ...(t.arguments || []))
                    ).changes
                    if (d === undefined)
                      throw new Error("command returned no changes")
                    if (h === this.Jb) {
                      this.Jb = undefined
                      const g = {
                        edits: Object.entries(d).flatMap(([p, m]) =>
                          m.map((b) => ({
                            resource: U.parse(p),
                            textEdit: {
                              range: new G(
                                b.range.start.line,
                                b.range.start.character,
                                b.range.end.line,
                                b.range.end.character,
                              ),
                              text: b.newText,
                            },
                            versionId: -1,
                          })),
                        ),
                      }
                      l(g)
                    }
                  } catch (u) {
                    this.Jb === h && ((this.Jb = undefined), c(u)),
                      (async () => {
                        try {
                          ;(await this.aiClient()).reportBug({
                            bug: "Command execution for import prediction threw an error.",
                            bugType: Kh.MISC_AUTOMATIC_ERROR,
                          })
                        } catch {}
                      })(),
                      this.aiAssertService.assert(
                        false,
                        `command execution for import prediction threw an error: ${u}`,
                      )
                    return
                  }
                })()
            }),
        )
        if (n === undefined) throw new Error("startTime is undefined")
        const o = Date.now() - n
        return (
          o > 250 &&
            (async () => {
              try {
                ;(await this.aiClient()).reportBug({
                  bug: `Command execution for import prediction took too long: ${o}`,
                  bugType: Kh.MISC_AUTOMATIC_ERROR,
                })
              } catch {}
            })(),
          r
        )
      }
      Mb() {
        const e = this.Jb
        if (e !== undefined) {
          if (e.appliedAt < Date.now() - this.Ib) {
            ;(this.Jb = undefined), e.rejectEdits("action was not applied in time")
            return
          }
          return e
        }
      }
      maybeInterceptBulkEdit(e) {
        const t = this.Mb(),
          s = 250
        return t !== undefined &&
          e.edits.some(
            (n) =>
              "textEdit" in n &&
              n.textEdit.text.match(new RegExp("(?<!\\w)" + t.symbolName)),
          )
          ? (e.edits.length > 0 && (t.resolveEdits(e), (this.Jb = undefined)), true)
          : t !== undefined && Date.now() - t.appliedAt < s
      }
      async moveLineToEndOfImportsSectionExclusive(e, t) {
        const s = pm.get(e)
        if (!s) return t
        const n = await s.getFoldingModel()
        if (!n) return t
        const r = n.getAllRegionsAtLine(t)
        if (r.length === 0) return this.Nb(e, t) ? t + 1 : t
        const o = r[r.length - 1]
        return this.Nb(e, o.startLineNumber) ? o.endLineNumber + 1 : t
      }
      Nb(e, t) {
        const s = e.getModel()?.getLineContent(t)
        return s === undefined
          ? false
          : s.startsWith("from ") ||
              s.startsWith("import ") ||
              s.includes("= require(") ||
              s.startsWith("use ")
      }
      async Ob() {
        const e = await this.everythingProviderService.onlyLocalProvider?.runCommand(
          GB.GetFileSyncEncryptionHeader,
          null,
        )
        if (e === undefined)
          throw new Error("Could not retrieve file sync encryption header")
        return e
      }
    }
  ImportPredictionService = __decorate(
    [
      __param(0, reactiveStorageService),
      __param(1, contextService),
      __param(2, markerService),
      __param(3, instantiationService),
      __param(4, metricsService),
      __param(5, cppTypeService),
      __param(6, everythingProviderService),
      __param(7, codeEditorService),
      __param(8, textModelService),
      __param(9, statusbarService),
      __param(10, cppEventLoggerService),
      __param(11, ILanguageFeaturesService),
      __param(12, aiFeatureStatusService),
      __param(13, commandService),
      __param(14, aiAssertService),
    ],
    ImportPredictionService,
  )
  var i$s = (i) => {
    if (i === undefined) throw new Error("x is undefined")
    return i
  }
  Ve(importPredictionService, ImportPredictionService, 1)
}
