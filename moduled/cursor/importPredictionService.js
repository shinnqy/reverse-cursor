// @ts-check

export function createImportPredictionService(params) {
  const {V, __decorate, __param, Pt: themeService, ue: configurationService, ei: reactiveStorageService, Ve, it: contextService, mo: markerService, Z: instantiationService, metricsService, cppTypeService, everythingProviderService, yi: codeEditorService, Xt: textModelService, cl: statusbarService, cppEventLoggerService, zi: ILanguageFeaturesService, aiFeatureStatusService, st: commandService, aiAssertService, importPredictionService, LRUCache, DYe, fu, rt, q, W, Un, Va, Ri: MarkerSeverity, extUri, MAX_DIAGNOSTIC_DISTANCE, DHe, Ze, gI, G, mp, lp, Me, GB, CppIntent, P1t, HMi, hG, y7, g1, Kh, U, pm } = params;

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
          markersToProcess.length > 0 && (await this.U(openEditor, markersToProcess))
        } catch {}
      }
      async U(e, t) {
        if (!this.isEnabled()) return
        const s = e.getModel()
        if (s === null) return
        const n = s.uri,
          r = performance.now(),
          o = new DHe(s, Ze.None),
          a = 250
        await new Promise((c) => setTimeout(c, a))
        const l = s.getVersionId()
        await Promise.all(
          t.map(async (c) => {
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
                  G.lift(c),
                  { type: 2, triggerAction: mp.QuickFix },
                  lp.None,
                  Ze.None,
                ))
            } catch (w) {
              const C = this._getMarkerStateFromCache(e, c)
              throw (C && (C.status = "debouncing"), w)
            } finally {
              this.R--
            }
            if (h === undefined)
              throw new Error(
                "no code actions found - this should be unreachable",
              )
            const u = (w) =>
                w !== undefined &&
                Array.isArray(w.arguments) &&
                w.arguments.length === 1 &&
                typeof w.arguments[0] == "string" &&
                w.arguments[0].startsWith("python.addImport"),
              d = h.allActions.filter(
                (w) =>
                  !w.action.disabled &&
                  (w.action.title.includes("Add import from") ||
                    w.action.title.includes("Update import from") ||
                    u(w.action.command)),
              ),
              g = new Map()
            d.filter(
              (w) =>
                w.action.edit?.edits.at(0) !== undefined &&
                "textEdit" in w.action.edit.edits[0],
            ).forEach((w) => {
              w.action.edit !== undefined && g.set(w, w.action.edit)
            })
            const m = d.flatMap((w) =>
                u(w.action.command)
                  ? [{ action: w, command: w.action.command }]
                  : [],
              ),
              b = this._getMarkerStateFromCache(e, c)
            this.O() &&
              m.length <= Wgo &&
              (await Promise.allSettled(
                m.map(async ({ action: w, command: C }) => {
                  if (b === undefined) return
                  const S = await this.Lb(w, C, b.symbolName)
                  S !== undefined && g.set(w, S)
                }),
              ))
            const y = [...g.entries()].flatMap(([w, C]) => {
              if (C === undefined) return []
              const S = C.edits.flatMap((x) =>
                "textEdit" in x
                  ? extUri.isEqual(x.resource, e.getModel()?.uri)
                    ? e.getModel()?.getValueInRange(x.textEdit.range) ===
                      x.textEdit.text
                      ? []
                      : [{ edit: x, action: w }]
                    : []
                  : [],
              )
              return S.length === 1
                ? { edit: S[0].edit, action: w }
                : S.every(
                      (x) =>
                        x.edit.textEdit.range.startLineNumber ===
                          S[0].edit.textEdit.range.startLineNumber &&
                        x.edit.textEdit.range.endLineNumber ===
                          S[0].edit.textEdit.range.endLineNumber &&
                        x.edit.textEdit.range.startColumn ===
                          S[0].edit.textEdit.range.startColumn &&
                        x.edit.textEdit.range.endColumn ===
                          S[0].edit.textEdit.range.endColumn,
                    )
                  ? {
                      edit: {
                        ...S[0].edit,
                        textEdit: {
                          ...S[0].edit.textEdit,
                          text: S.map((x) => x.edit.textEdit.text)
                            .reverse()
                            .join(""),
                        },
                      },
                      action: w,
                    }
                  : []
            })
            if (y.length > 0 && b !== undefined) {
              if (y.length > Vgo)
                if (b) {
                  ;(b.status = "error"),
                    (b.errorReason = new Error(
                      "too many code actions, not doing anything",
                    ))
                  return
                } else
                  throw new Error(
                    "lintError is undefined, this should not happen",
                  )
              const w = await this.W(n, e, y, c, b)
              if (b)
                (b.versionComputedAt = l),
                  (b.status = w.status),
                  w.status === "error" && (b.errorReason = w.reason)
              else
                throw new Error("lintError is undefined, this should not happen")
            } else if (b) b.status = "no-actions"
            else throw new Error("lintError is undefined, this should not happen")
          }),
        )
      }
      async W(e, t, s, n, r) {
        if (!this.isEnabled())
          return {
            status: "error",
            reason: new Error("importPredictionEnabled is false"),
          }
        if (s.length === 0)
          return {
            status: "error",
            reason: new Error("no edits with actions, this should not happen"),
          }
        try {
          if (this.n.find((se) => this._generateMarkerCacheKey(t, se.marker) === this._generateMarkerCacheKey(t, n)))
            return { status: "pending" }
          const a = t.getModel()
          if (a === null) throw new Error("model is null")
          const l = a.getValue(),
            c = a.getVersionId()
          if (a.uri !== e)
            throw new Error("model uri is different from uri, not doing anything")
          let h = this.reactiveStorageService.workspaceUserPersistentStorage.uniqueCppWorkspaceId
          if (
            (h === undefined &&
              ((h =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)),
              this.reactiveStorageService.setWorkspaceUserPersistentStorage(
                "uniqueCppWorkspaceId",
                h,
              )),
            !s.every(
              (se) =>
                se.edit.textEdit.range.startColumn === 1 &&
                se.edit.textEdit.range.endColumn === 1 &&
                se.edit.textEdit.text.includes(`
  `),
            ) && n.source === "ts")
          )
            return (
              await this.Y(t, e, s[0].action, s[0].edit.textEdit, n),
              { status: "pending" }
            )
          const d = s
              .map((se) => se.edit.textEdit.range.startLineNumber)
              .reduce((se, he) => ((se[he] = (se[he] || 0) + 1), se), {}),
            g = Object.entries(d).reduce(
              (se, [he, ae]) => (ae > se[1] ? [parseInt(he + ""), ae] : se),
              [0, 0],
            )[0],
            p = await this.moveLineToEndOfImportsSectionExclusive(t, g),
            m = new Me(p, 1)
          if (this.cppMethods?.getPartialCppRequest === undefined)
            throw new Error(
              "getPartialCppRequest is undefined, this should not happen",
            )
          const b =
              (await this.everythingProviderService.onlyLocalProvider?.runCommand(
                GB.ShouldRelyOnFileSyncForFile,
                {
                  relativeWorkspacePath: this.contextService.asRelativePath(e),
                  modelVersion: a.getVersionId(),
                },
              )) ?? false,
            y = await this.cppMethods
              .getPartialCppRequest({
                editor: t,
                uri: e,
                modelValue: l,
                modelVersion: c,
                position: m,
                source: CppIntent.Typing,
                shouldRelyOnFileSyncForFile: b,
              })
              .catch((se) => {
                throw se
              })
          if (t.getModel()?.uri !== e)
            throw new Error("model uri is different from uri, not doing anything")
          const w = s.map(
              (se) =>
                new P1t({
                  text: se.edit.textEdit.text,
                  editRange: {
                    startLineNumber: m.lineNumber,
                    startColumn: 1,
                    endLineNumberInclusive: m.lineNumber,
                    endColumn: 1,
                  },
                }),
            ),
            { getModelName: C } = this.cppMethods
          if (C === undefined)
            throw new Error("getModelName is undefined, this should not happen")
          const S = this.cppMethods?.getRecentAndNearLocationLinterErrors?.(e, n),
            x = S && { ...S, errors: S.errors.slice(0, Hgo) },
            k = this.Bb(n),
            E = new HMi({
              cppRequest: {
                ...y,
                controlToken: hG.LOUD,
                modelName: C(),
                diffHistoryKeys: [],
                contextItems: [],
                parameterHints: this.cppTypeService.getRelevantParameterHints(t),
                lspContexts: [],
                filesyncUpdates: [],
                workspaceId: h,
                timeAtRequestSend: Date.now(),
                linterErrors: x,
              },
              suggestedEdits: w,
              markerTouchesGreen: k,
              currentFileContentsForLinterErrors: this.cppMethods?.truncateCurrentFile(
                l,
                n.startLineNumber,
                a.getEOL(),
                a,
              ),
            }),
            D = performance.now(),
            P = await this.Ob(),
            L = await (
              await this.aiClient()
            ).getCppEditClassification(E, { headers: { ...P } }),
            { scoredEdits: A, shouldNoop: F, generationEdit: H } = L,
            B = i$s(A.at(0)),
            z = s.find(({ edit: se }) => se.textEdit.text === B.edit?.text)
          if (z === undefined) throw new Error("bestImport is undefined")
          const K = i$s(B?.logProbs)
          return (F ??
            this.X({
              bestEditLogprobs: K,
              generationEditLogprobs: H?.logProbs,
              opEditString: z.edit.textEdit.text,
              symbolName: r.symbolName,
              markerTouchesGreen: k,
            }))
            ? { status: "noop" }
            : (await this.Y(t, e, z.action, z.edit.textEdit, n),
              { status: "pending" })
        } catch (o) {
          return { status: "error", reason: o }
        } finally {
        }
      }
      X({
        bestEditLogprobs: e,
        generationEditLogprobs: t,
        opEditString: s,
        symbolName: n,
        markerTouchesGreen: r,
      }) {
        const a = ((p, m) => {
            for (let b = p.length - 1; b >= 0; b--) if (m(p[b], b)) return b
            return -1
          })(e.tokens, (p, m) =>
            e.tokens.slice(m).join("").trim().startsWith(s.trim()),
          ),
          l = e.tokens.findIndex(
            (p, m) =>
              m >= a &&
              !!e.tokens
                .slice(a, m)
                .join("")
                .trim()
                .match(new RegExp(`\\b${n}\\b`)),
          ),
          c = e.tokenLogprobs[a],
          h = Math.min(0, ...e.tokenLogprobs.slice(a + 1, l)),
          u = t?.tokens.join("").match(/(\w+)/g),
          d = r ? 2 : 1
        return u && u.includes(n) && Math.exp(c) * d > 0.1
          ? false
          : Math.exp(c + h) * d < 0.02
      }
      async Y(e, t, s, n, r) {
        if (!this.isEnabled()) return
        const a = [...this.n]
            .sort(
              (c, h) =>
                (this._getMarkerStateFromCache(e, h.marker)?.seenAt.getTime() ?? 0) -
                (this._getMarkerStateFromCache(e, c.marker)?.seenAt.getTime() ?? 0),
            )
            .slice(0, 20),
          l = this.textModelService.createModelReference(t)
        try {
          const c = (await l).object.textEditorModel
          this.n = [
            ...a,
            {
              uri: t,
              action: s,
              edit: n,
              lineContentsAtStartOfEdit: c.getValueInRange(
                new G(n.range.startLineNumber, 1, n.range.startLineNumber, 1 / 0),
              ),
              marker: r,
            },
          ]
          const h = this.cppMethods?.getFocusedCodeEditor()
          h && this.showCorrectUI(h)
        } finally {
          ;(await l).dispose()
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
      bb(e, t) {
        return extUri.isEqual(e.uri, t.getModel()?.uri)
      }
      maybeAcceptShownImport(e) {
        if (!this.isEnabled()) return false
        const { q: t } = this
        if (t === undefined) return false
        if (!this.bb(t.shownImport, e)) return this.hideShownImport(e), false
        const s = e.getVisibleRanges(),
          n = e.getModel()?.getDecorationRange(t.decorationId)
        if (!n || !s.some((a) => this.Cb(a, n)))
          return this.hideShownImport(e), false
        const r = this._getMarkerStateFromCache(e, t.shownImport.marker)
        r !== undefined &&
          ((r.status = "accepted"),
          (r.seenAt = new Date()),
          (async () => {
            try {
              if (this.zb(e, t.shownImport)) {
                const a =
                  (await Promise.race([
                    this.cb(e, t.shownImport),
                    (async () => {
                      await new Promise((l) => setTimeout(l, 75))
                    })(),
                  ])) ?? t.shownImport.action
                await this.instantiationService.invokeFunction(
                  y7,
                  a,
                  g1.FromAILightbulb,
                  undefined,
                  Ze.None,
                )
              } else
                await this.instantiationService.invokeFunction(
                  y7,
                  t.shownImport.action,
                  g1.FromAILightbulb,
                  undefined,
                  Ze.None,
                )
              this.reactiveStorageService.setApplicationUserPersistentStorage(
                "howManyTimesHasUserAcceptedImportPrediction",
                (a) => (a ?? 0) + 1,
              )
            } catch {}
          })()),
          this.db(e, t.shownImport),
          this.yb(e, t.shownImport.edit)
        const o = e.getModel()?.uri
        return o !== undefined && this.Hb(o), this.showCorrectUI(e), true
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
        return s === undefined || !this.bb(s, e) || this.wb()
          ? false
          : (this.rejectImport(e, s), this.showCorrectUI(e), true)
      }
      async cb(e, t) {
        const s = e.getModel()
        if (!s)
          throw new Error(
            "model is undefined, so we can't get the matching code action",
          )
        const n = performance.now()
        return (
          await gI(
            this.ILanguageFeaturesService.codeActionProvider,
            s,
            G.lift(t.marker),
            { type: 2, triggerAction: mp.QuickFix },
            lp.None,
            Ze.None,
          )
        ).allActions.find((o) => o.action.title === t.action.action.title)
      }
      async rejectImport(e, t) {
        if (!this.isEnabled()) return
        const s = this._getMarkerStateFromCache(e, t.marker)
        s && ((s.status = "rejected"), (s.seenAt = new Date())), this.db(e, t)
      }
      db(e, t) {
        this.isEnabled() &&
          (this.vb === t && this.hideShownImport(e),
          (this.n = this.n.filter((s) => s !== t)))
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
            e !== undefined && this.bb(s, e))
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
      fb(e, t) {
        if (!this.isEnabled()) return
        if (!this.bb(t, e))
          throw new Error(
            "renderImportAtLocation called with wrong editor - this should never happen",
          )
        const s = this.q
        if (s?.shownImport === t && this.eb(e, s)) {
          const n = e.getModel()
          if (!n)
            throw new Error(
              "model is undefined, so we couldn't remove decoration - this should never happen",
            )
          const r = n.getDecorationRange(s.decorationId)
          if (r === null)
            throw new Error("decorationRange is null, this should not happen")
          const o = {
            startLineNumber: t.marker.startLineNumber,
            startColumn: t.marker.startColumn,
            endLineNumber: t.marker.endLineNumber,
            endColumn: t.marker.endColumn,
          }
          if (
            o.endLineNumber - o.startLineNumber !==
              r.endLineNumber - r.startLineNumber ||
            o.endColumn - o.startColumn !== r.endColumn - r.startColumn
          ) {
            this.hideShownImport(e)
            return
          } else s.importWidget.show()
        } else {
          this.hideShownImport(e)
          const n = e.getModel()
          if (!n)
            throw new Error(
              "model is undefined, so we couldn't remove decoration - this should never happen",
            )
          const r =
              this.reactiveStorageService.applicationUserPersistentStorage
                .cppAutoImportDecorationStyle,
            o = [
              {
                range: new G(
                  t.marker.startLineNumber,
                  t.marker.startColumn,
                  t.marker.endLineNumber,
                  t.marker.endColumn,
                ),
                options: {
                  className:
                    r === "squiggle"
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
            [a] = n.deltaDecorations([], o)
          ;(this.q = {
            shownImport: t,
            decorationId: a,
            importWidget: this.instantiationService.createInstance(
              vdi,
              e,
              a,
              t.action.action.title,
              this._getSymbolFromMarker(t.marker),
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
              r !== null && this.Cb(S, new G(r.lineNumber, 1, r.lineNumber, 1)),
          )
        n.push({ name: "visibleRangesTime", time: performance.now() })
        const l = (S) => {
            if (this.bb(S, e) && this.kb(e, S, r) < this.ib) {
              const x = this._getMarkerStateFromCache(e, S.marker)
              if (x !== undefined && x.currentMarkers.length > 0)
                return x.currentMarkers.some(
                  (k) =>
                    this._getCurrentSymbolByMarker(e, k) === x.symbolName &&
                    (!a || o.some((E) => this.Cb(E, k))),
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
            this.fb(e, C),
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
      yb(editor, t) {
        const { startLineNumber, endLineNumber } = t.range,
          originalLineCount = endLineNumber - startLineNumber + 1,
          // 计算新增/删除的行数差
          lineDelta =
            t.text.split(`
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
      zb(e, t) {
        const s = e.getModel()
        if (!s)
          throw new Error(
            "model is undefined, so we can't check if the version is the same",
          )
        const n = s.getVersionId(),
          r = this.markerStateCache.get(this._generateMarkerCacheKey(e, t.marker))
        if (!r)
          throw new Error(
            "seenLintError is undefined, so we can't check if the version is the same",
          )
        if (r.versionComputedAt === n) return false
        const o = t.action.action.command !== undefined,
          a =
            t.edit.text.split(`
  `).length === 2 &&
            t.edit.text.trim().split(`
  `).length === 1
        return o || !a
      }
      isShowingImportSuggestion() {
        return false
      }
      hideWidgetsIfConflictsWithCppSuggestion(e, t) {
        const s = this.q
        if (s) {
          const { shownImport: n, decorationId: r } = s
          if (this.bb(n, e)) {
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
              this.Cb(n.range, {
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
      Cb(e, t) {
        return !(
          e.endLineNumber < t.startLineNumber ||
          e.startLineNumber > t.endLineNumber ||
          (e.endLineNumber === t.startLineNumber &&
            e.endColumn < t.startColumn) ||
          (e.startLineNumber === t.endLineNumber && e.startColumn > t.endColumn)
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
                cancellationToken: Ze.None,
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
