// @ts-check


export function createCppService(params) {
  const {V, EYe, G, LRUCache, EditHistoryCache, SuggestionCache, SuggestionManager, MutableDisposable, J: DisposableStore, RequestDebouncer, um, hF, ss, CppIntent, JB, onDidRegisterWindow, fu, Va, nze, WEn, m2i, qEn, b2i, S9, $, Hae, m0t, Ad, fUe, Sp, VB, replaceTextInRange, generateModifiedText, EditHistoryDiffFormatter, VS: getWindows, NYi, CURSOR_PREDICTION, Ri: MarkerSeverity, ce: Schemas, Pn, Cg, GhostTextController, isPureEmptyLineInsertion, U, mu, Me, extUri, $fo, qdt, Ffo, normalizeSeverity, uI, formatRelatedInformation, Cf: LinterErrors, hG: StreamCppRequestControlToken, mR, fm, gle, xr, Gr, GB, QN, Ycr, Yt: VSBuffer, StreamCppRequest, Kf, rt, handleStreamWithPredictions, handleChunkedStream, consumeRemainingStream, Hu, Aoe, Qcr, TKn, F_, tdi, _fo, rge, OFt, Xfo, Ui, computeDiffs, k7: SUGGESTION_DISPLAY_TYPE, RKi, jBt, isEditOnShortestPath, Ho: CurrentFileInfo, Qm, T1t, Xf, oj, ee, j, Je, CppDiffPeekViewWidget, cppService, ei, wf, yi, Ci, $h} = params;

  var bgo = class zmi extends ee {
    static {
      this.ID = "editor.action.acceptCppSuggestion"
    }
    static {
      this.LABEL = "Accept Cursor Tab Suggestion"
    }
    constructor() {
      super({
        id: zmi.ID,
        title: { value: zmi.LABEL, original: "Accept Cursor Tab Suggestion" },
        icon: Je(
          "accept-cpp-suggestion",
          $.check,
          "Accept Cursor Tab Suggestion",
        ),
        menu: { id: CppDiffPeekViewWidget.TitleMenu, order: 1 },
      })
    }
    async run(e) {
      const t = e.get(cppService),
        s = e.get(ei),
        n = s.nonPersistentStorage.cppState?.peekViewSuggestion
      ;(await t.acceptFullSuggestion(undefined, n ? wf(n) : undefined)).type,
        Sp.NotAccepted,
        s.setNonPersistentStorage("cppState", "peekViewSuggestion", undefined)
    }
  }
  j(bgo)
  function zMs(i) {
    const e = i.get(yi),
      t = e.getActiveCodeEditor() || e.getFocusedCodeEditor()
    return (t && GhostTextController.get(t)) || undefined
  }
  function vgo(i) {
    return zMs(i)?.cppPeekView
  }
  var ygo = class Gmi extends ee {
    static {
      this.ID = "editor.action.configureCppDiffPeekView"
    }
    static {
      this.LABEL = "Configure Cursor Tab Diff Peek View"
    }
    constructor() {
      super({
        id: Gmi.ID,
        title: {
          value: Gmi.LABEL,
          original: "Configure Cursor Tab Diff Peek View",
        },
      })
    }
    async run(e, t) {
      const s = vgo(e)
      s && s.diffEditor?.updateOptions(t)
    }
  }
  j(ygo)
  var wgo = class Jmi extends ee {
    static {
      this.ID = "editor.action.setCppDiffPeekView"
    }
    static {
      this.LABEL = "Set Cursor Tab Diff Peek View"
    }
    constructor() {
      super({
        id: Jmi.ID,
        title: { value: Jmi.LABEL, original: "Set Cursor Tab Diff Peek View" },
      })
    }
    async run(e, t) {
      const s = zMs(e)
      s && (s.cppPeekView = t)
    }
  }
  j(wgo)
  var Cgo = class Kmi extends ee {
    static {
      this.LABEL = "Enable Cursor Tab"
    }
    constructor() {
      super({ id: m0t, title: { value: Kmi.LABEL, original: Kmi.LABEL }, f1: true })
    }
    async run(e, ...t) {
      e.get(ei).setApplicationUserPersistentStorage("cppEnabled", true)
    }
  }
  j(Cgo)
  var Sgo = class Ymi extends ee {
    static {
      this.LABEL = "Disable Cursor Tab"
    }
    constructor() {
      super({
        id: "editor.cpp.disableenabled",
        title: { value: Ymi.LABEL, original: Ymi.LABEL },
        f1: true,
      })
    }
    async run(e, ...t) {
      e.get(ei).setApplicationUserPersistentStorage("cppEnabled", false)
    }
  }
  j(Sgo)
  var GMs = 1e3 * 60 * 3,
    xgo = class Xmi extends ee {
      static {
        this.LABEL = "Snooze Cursor Tab"
      }
      constructor() {
        super({
          id: "editor.cpp.snooze",
          title: { value: Xmi.LABEL, original: Xmi.LABEL },
          f1: true,
        })
      }
      async run(e, ...t) {
        const s = e.get(ei)
        s.applicationUserPersistentStorage.cppEnabled &&
          (s.setApplicationUserPersistentStorage("cppSnoozed", Date.now()),
          s.setApplicationUserPersistentStorage("cppEnabled", false),
          setTimeout(() => {
            s.applicationUserPersistentStorage.cppSnoozed &&
              (s.setApplicationUserPersistentStorage("cppSnoozed", undefined),
              s.setApplicationUserPersistentStorage("cppEnabled", true))
          }, GMs))
      }
    }
  j(xgo)
  var kgo = class Qmi extends ee {
    static {
      this.LABEL = "Toggle Cursor Tab"
    }
    constructor() {
      super({
        id: "editor.cpp.toggle",
        title: { value: Qmi.LABEL, original: Qmi.LABEL },
        f1: true,
      })
    }
    async run(e) {
      const t = e.get(ei),
        s = t.applicationUserPersistentStorage.cppEnabled
      t.setApplicationUserPersistentStorage("cppEnabled", !s)
    }
  }
  j(kgo)
  var Ego = class ipt extends ee {
    static {
      this.ID = "editor.cpp.openPro"
    }
    static {
      this.LABEL = "Open Cursor Tab Pro Pricing"
    }
    constructor() {
      super({
        id: ipt.ID,
        title: { value: ipt.LABEL, original: ipt.LABEL },
        f1: false,
      })
    }
    async run(e) {
      e.get(Ci).open(U.parse("https://cursor.com/pricing"))
    }
  }
  j(Ego)
  var Igo = 25,
    Dgo = 60,
    MAX_FILE_SIZE_CHARS = 5e6,
    JMs = false,
    oa = JMs ? console.log : () => {},
    zdt = JMs ? console.error : () => {}
  function KMs(i) {
    return i.uri.scheme === "untitled" ? i.uri.scheme : i.getLanguageId()
  }
  var YMs = class spt extends ee {
    static {
      this.ID = "editor.cpp.login"
    }
    static {
      this.LABEL = "Log In to Cursor"
    }
    constructor() {
      super({
        id: spt.ID,
        title: { value: spt.LABEL, original: spt.LABEL },
        f1: true,
      })
    }
    async run(e) {
      e.get($h).login()
    }
  }
  j(YMs);

  var Tgo = "git30_000_bounded_auto",
    XMs = "cpp-suggestion-text-decoration-showing",
    udi = "cpp-suggestion-text-decoration-showing-streaming",
    Pgo = "cpp-suggestion-text-decoration-showing-gutter",
    MAX_HISTORIC_ERRORS = 10,
    MAX_CURRENT_ERRORS = 10,
    FIFTEEN_MINUTES_MS = 1e3 * 60 * 15,
    QMs = 1e5,
    ZMs = 1e4,
    MAX_DIAGNOSTIC_DISTANCE = 20,
    MAX_CACHE_SIZE = 3,
    AVERAGE_VISIBLE_LINES = 300,
    Ago = false,
    Mgo = "m4CoTMbqtR9vV1zd",
  CppService = class extends V {
    cppServerClient() {
      return this.g.get()
    }
    get dontTriggerCppBecauseChangeIsFromCpp() {
      return EYe.current
    }
    set dontTriggerCppBecauseChangeIsFromCpp(e) {
      EYe.current = e
    }
    F(e) {
      return `${e.id}-${e.getVersionId()}-${e.uri.fsPath}`
    }
    getModelKey(model) {
      return this.F(model);
    }
    H(e) {
      return `${e.id}-${e.uri.fsPath}`
    }
    getModelVersionKey(model) {
      return this.H(model);
    }
    aiClient() {
      return this.P.get()
    }
    registerDiffingProvider(e) {
      this.S = e;
      this.cppProvider = this.S;
    }
    constructor(
      e,
      t,
      s,
      n,
      r,
      o,
      a,
      l,
      c,
      h,
      u,
      d,
      g,
      p,
      m,
      b,
      y,
      w,
      C,
      S,
      x,
      k,
      E,
      D,
      P,
      L,
      A,
      F,
      H,
      B,
      z,
    ) {
      super(),
        (this.gb = e), (this.codeEditorService = this.gb),
        (this.hb = t), (this.reactiveStorageService = this.hb),
        (this.ib = s), (this.textModelService = this.ib),
        (this.jb = n), (this.aiFeatureStatusService = this.jb),
        (this.kb = r), (this.commandService = this.kb),
        (this.lb = o), (this.aiAssertService = this.lb),
        (this.mb = a), (this.contextService = this.mb),
        (this.nb = l), (this.authenticationService = this.nb),
        (this.ob = c), (this.telemetryService = this.ob),
        (this.pb = h), (this.productService = this.pd),
        (this.qb = u), (this.cppEventLoggerService = this.qb),
        (this.rb = d), (this.markerService = this.rb),
        (this.sb = g), (this.instantiationService = this.sb),
        (this.tb = p), (this.metricsService = this.tb),
        (this.ub = m), (this.statusbarService = this.ub),
        (this.vb = b), (this.diffingService = this.vb),
        (this.wb = y), (this.cppTypeService = this.wb),
        (this.xb = w), (this.ILanguageFeaturesService = this.xb),
        (this.yb = C), (this.INotebookEditorWidgetService = this.yb),
        (this.zb = S), (this.editorService = this.zb),
        (this.Ab = x), (this.configurationService = this.Ab),
        (this.Bb = k), (this.cursorPredictionService = this.Bb),
        (this.Cb = E), (this.languageConfigurationService = this.Cb),
        (this.Db = D), (this.everythingProviderService = this.Db),
        (this.Eb = P), (this.viewsService = this.Eb),
        (this.Fb = L), (this.cppBadHeuristics = this.Fb),
        (this.Gb = A), (this.cppSuggestionService = this.Gb),
        (this.Hb = F), (this.cursorCredsService = this.Hb),
        (this.Ib = H), (this.importPredictionService = this.Ib),
        (this.Jb = B), (this.environmentService = this.Jb),
        (this.Kb = z), (this.selectedContextService = this.Kb),
        (this.h = 0),
        (this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
          false),
        (this.j = new LRUCache(20)), (this.recentlyViewedFilesCache = this.j),
        (this.m = new Map()), (this.modelListeners2EditorMap = this.m),
        (this.n = new Map()), (this.editorListenersMap = this.n),
        (this.q = undefined),
        (this.u = undefined),
        (this.w = undefined), (this.mostRecentNonAbortedRequestId = this.w),
        (this.y = undefined),
        (this.z = undefined), (this.mostRecentShownRequestId = this.z),
        (this.C = new LRUCache(10)), (this.formattedDiffCache = this.C),
        (this.G = new LRUCache(3)), (this.modelValueCache = this.G),
        (this.I = []),
        (this.J = []),
        (this.L = new EditHistoryCache(2)), (this.editHistoryCache = this.L),
        (this.M = new SuggestionCache(5)), (this.suggestionCache = this.M),
        (this.N = new SuggestionManager(5, 6)), (this.suggestionManager = this.N),
        (this.O = new LRUCache(3)), (this.decorationCache = this.O),
        (this.Q = new LRUCache(10)), (this.suggestionTypeCache = this.Q),
        (this.editorThatWeHidGhostTextOn = undefined),
        (this.R = []),
        (this.holdDownAbortController = undefined),
        (this.S = undefined), (this.cppProvider = this.S),
        (this.numberOfClearedSuggestionsSinceLastAccept = 0),
        (this.lastEditTime = undefined),
        (this.U = undefined), (this.lastProcessedModel = this.U),
        (this.W = this.D(new MutableDisposable())),
        (this.Y = { fire: false, acceptedRange: undefined }), (this.pendingSuggestion = this.Y),
        (this.$ = {}),
        (this.ab = false), (this.lastCursorMovementIsCursorPrediction = this.ab),
        (this.bb = []),
        (this.cb = undefined),
        (this.db = new LRUCache(5)),
        (this.eb = undefined),
        (this.fb = false),
        (this.Mb = new DisposableStore()),
        (this.Nb = document.createElement("div")),
        (this.handleKeyDownForCppKeys = (se) => {
          if (this.getApplicationUserPersistentStorage().cppEnabled === true) {
            if (se.key === "Tab" && se.shiftKey) {
              if (this.getApplicationUserPersistentStorage().cppManualTriggerWithOpToken) {
                const editor = this.codeEditorService.getActiveCodeEditor()
                if (editor === null) return
                const uri = editor.getModel()?.uri
                if (!uri) {
                  oa("[handleKeyDownForCppKeys] Tab: no uri")
                  return
                }
                this.fireCppSuggestionFromTrigger(uri, editor, CppIntent.ManualTrigger)
              } else
                this.cursorPredictionService.maybeUndoCursorPrediction({
                  event: se,
                  triggerCppCallback:
                    this.fireCppSuggestionFromTrigger.bind(this),
                  getLinterErrors:
                    this.getRecentAndNearLocationLinterErrors.bind(this),
                })
              return
            }
            if (
              se.key === "Tab" &&
              se.shiftKey === false &&
              se.ctrlKey === false &&
              se.altKey === false &&
              se.metaKey === false &&
              this.selectionIsNotMultipleLines()
            ) {
              if (this.getApplicationUserPersistentStorage().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                if (he !== null && this.importPredictionService.maybeAcceptShownImport(he)) {
                  se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation()
                  return
                }
              }
              if (!this.shouldTabInsteadOfAccepting()) {
                const he = this.getNonPersistentStorage().cppState?.suggestion;
                fetch('http://localhost:3000', {
                  method: 'POST',
                  body: JSON.stringify({
                    action: 'press Tab to accept suggestion',
                    suggestion: he,
                    generationUUID: he?.requestId,
                  }),
                });
                if (
                  he !== undefined &&
                  !this.cursorPredictionService.tabToLineBeforeAcceptingCpp(he.source)
                )
                  (this.dontTriggerCppBecauseChangeIsFromCpp = true),
                    se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation(),
                    this.acceptFullSuggestion(
                      this.holdDownAbortController,
                    ).then(() => {
                      fetch('http://localhost:3000', {
                        method: 'POST',
                        body: JSON.stringify({
                          action: 'press Tab to acceptFullSuggestion and succeed',
                          condition: 'tabToLineBeforeAcceptingCpp == false',
                          suggestion: he,
                          generationUUID: he?.requestId,
                        }),
                      });
                      const ae = this.getFocusedCodeEditor()
                      ae !== null && this.cleanupAfterAcceptSuggestion(ae, he)
                    }),
                    this.ac()
                else if (
                  (this.getNonPersistentStorage().cppState?.additionalSuggestions?.length ?? 0) > 0
                ) {
                  const ae = this.codeEditorService.getActiveCodeEditor(),
                    de = ae?.getModel() ?? undefined,
                    Ee = ae?.getPosition(),
                    ke = this.getNonPersistentStorage().cppState?.additionalSuggestions.filter(
                      (Ae) => {
                        if (de === undefined || Ee === undefined || Ee === null)
                          return false
                        const Pe = de.getDecorationRange(Ae.decorationId)
                        return (
                          Pe !== null &&
                          Pe.intersectRanges({
                            startLineNumber: Math.max(0, Ee.lineNumber - 5),
                            startColumn: Ee.column,
                            endLineNumber: Math.min(
                              de.getLineCount(),
                              Ee.lineNumber + 5,
                            ),
                            endColumn: Ee.column,
                          })
                        )
                      },
                    )
                  if (ke !== undefined && ke.length > 0) {
                    ;(this.dontTriggerCppBecauseChangeIsFromCpp = true),
                      se.preventDefault(),
                      se.stopImmediatePropagation(),
                      se.stopPropagation()
                    const Ae = ke[0]
                    this.acceptFullSuggestion(this.holdDownAbortController, Ae)
                      .then(() => {
                        fetch('http://localhost:3000', {
                          method: 'POST',
                          body: JSON.stringify({
                            action: 'press Tab to acceptFullSuggestion and succeed',
                            condition: 'tabToLineBeforeAcceptingCpp == true && additionalSuggestions.length > 0',
                            suggestion: he,
                            generationUUID: he?.requestId,
                          }),
                        });
                        const Pe = this.getFocusedCodeEditor()
                        Pe !== null &&
                          (this.cleanupAfterAcceptSuggestion(Pe, Ae),
                          this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
                            this.importPredictionService.showCorrectUI(Pe))
                      })
                      .catch((Pe) => {
                        console.error(Pe)
                      }),
                      this.ac()
                  } else
                    this.cursorPredictionService.maybeAcceptCursorPrediction({
                      event: se,
                      triggerCppCallback:
                        this.fireCppSuggestionFromTrigger.bind(this),
                    })
                } else
                  this.cursorPredictionService.maybeAcceptCursorPrediction({
                    event: se,
                    triggerCppCallback:
                      this.fireCppSuggestionFromTrigger.bind(this),
                  })
              }
              return
            }
            if (
              se.key === "Escape" &&
              se.ctrlKey === false &&
              se.altKey === false &&
              se.metaKey === false &&
              this.getNonPersistentStorage().cppState?.suggestion !== undefined
            ) {
              const he = this.getFocusedCodeEditor()
              he !== null && this.markEditAsRejected(he, false),
                this.clearDecorationsSlowEnumeratesAllDecorations(),
                this.rejectAndResetAllCppSuggestions(),
                this.cursorPredictionService.maybeShowHintLineWidget(),
                this.cursorPredictionService.updateHintLineWidgetMarginLeft(undefined),
                he !== null && this.importPredictionService.showCorrectUI(he)
            } else if (
              se.key === "Escape" &&
              se.ctrlKey === false &&
              se.altKey === false &&
              se.metaKey === false
            )
              if (this.getApplicationUserPersistentStorage().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                he !== null && this.importPredictionService.maybeRejectShownImport(he)
                  ? (se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation())
                  : this.getNonPersistentStorage().cursorPrediction !== undefined &&
                    this.cursorPredictionService.clearCursorPrediction()
              } else
                this.getNonPersistentStorage().cursorPrediction !== undefined &&
                  this.cursorPredictionService.clearCursorPrediction()
          }
        }),
        (this.triggerCppOnLintErrorAbortControllers = new Map()),
        (this.Xb = 6),
        (this.latestGenerationUUID = undefined),
        (this.Yb = undefined),
        // 截断当前文件内容，保留光标附近的相关代码段
        (this.Zb = (fullContent, cursorLine, eol, model) => {
          const allLines = fullContent.split(eol)
          if (allLines.length < AVERAGE_VISIBLE_LINES * 2) return fullContent
          let startLine = Math.max(0, cursorLine - AVERAGE_VISIBLE_LINES),
            endLine = Math.min(allLines.length, cursorLine + AVERAGE_VISIBLE_LINES)
          const paddingStart = AVERAGE_VISIBLE_LINES - cursorLine,
            paddingEnd = cursorLine - (allLines.length - AVERAGE_VISIBLE_LINES)
          paddingStart > 0
            ? (endLine = Math.min(allLines.length, endLine + paddingStart))
            : paddingEnd > 0 && (startLine = Math.max(0, startLine - paddingEnd))
          const decorationCacheForURI = this.decorationCache.get(model.uri),
            DECORATION_MARGIN = 20
          if (decorationCacheForURI && decorationCacheForURI.length > 0) {
            let foundCachedRange = false
            for (const { decorationId, originalWidth: originalWidth } of decorationCacheForURI) {
              const decorationRange = model.getDecorationRange(decorationId)
              if (!decorationRange) continue
              const isStartNear =
                  Math.abs(decorationRange.startLineNumber - startLine) < DECORATION_MARGIN &&
                  (startLine !== 0 || decorationRange.startLineNumber === 1),
                isEndNear =
                  Math.abs(decorationRange.endLineNumber - endLine) < DECORATION_MARGIN &&
                  (endLine !== allLines.length || decorationRange.endLineNumber === allLines.length)
              if (decorationRange && isStartNear && isEndNear && Math.abs(endLine - startLine - originalWidth) < DECORATION_MARGIN) {
                ;(startLine = decorationRange.startLineNumber), (endLine = decorationRange.endLineNumber), (foundCachedRange = true)
                break
              }
            }
            if (!foundCachedRange) {
              const decorationId = model.deltaDecorations(
                [],
                [
                  {
                    range: new G(startLine, 1, endLine, 1),
                    options: { description: "cpp-truncation-cache" },
                  },
                ],
              )[0]
              decorationCacheForURI.push({ decorationId, originalWidth: endLine - startLine })
              for (const oldDecoration of decorationCacheForURI.slice(0, -MAX_CACHE_SIZE))
                model.deltaDecorations([oldDecoration.decorationId], [])
              this.decorationCache.set(model.uri, decorationCacheForURI.slice(-MAX_CACHE_SIZE))
            }
          } else {
            const newDecorationId = model.deltaDecorations(
              [],
              [
                {
                  range: new G(startLine, 1, endLine, 1),
                  options: { description: "cpp-truncation-cache" },
                },
              ],
            )[0]
            this.decorationCache.set(model.uri, [{ decorationId: newDecorationId, originalWidth: endLine - startLine }])
          }
          for (let i = 0; i < startLine; i++) allLines[i] = ""
          for (let i = endLine; i < allLines.length; i++) allLines[i] = ""
          return allLines.join(eol)
        }), (this.truncateCurrentFile = this.Zb),
        (this.decIdsThatAreNotInReactiveStorage = { green: [] }),
        (this.didShowGreenHighlights = false),
        (this.removedCppNoopGenerationUUIDS = []),
        (this.generationStartTimes = {}),
        (this.c = this.D(this.reactiveStorageService.createScoped(this))),
        (this.W.value = this.statusbarService.addEntry(
          this.statusBarElementProps(),
          "Cursor Tab",
          1,
          100,
        )),
        this.updateStatusBarElement(),
        (this.P = this.instantiationService.createInstance(fu, { service: Va })),
        (this.g = this.instantiationService.createInstance(fu, { service: nze })),
        this.getNonPersistentStorage().cppState === undefined &&
          this.reactiveStorageService.setNonPersistentStorage("cppState", {}),
        this.loadCopilotPlusPlusConfigFromGithubCopilot(),
        this.Lb(),
        this.D(
          onDidRegisterWindow(() => {
            this.mainRegisterCppListenersToEditorIfCppEnabled()
          }),
        ),
        this.updateShouldNotTryToGetThemToNoticeCpp(),
        this.c.onChangeEffect({
          deps: [() => this.getApplicationUserPersistentStorage().cppEnabled],
          onChange: async () => {
            this.sendCppEnabledUpdateRequest(),
              this.updateShouldNotTryToGetThemToNoticeCpp(),
              this.abortAllCppRequests()
            const se = performance.now()
            this.mainRegisterCppListenersToEditorIfCppEnabled(),
              this.rejectAndResetAllCppSuggestions(),
              this.loadCppConfigIncludingHandlingProAccess(),
              this.updateStatusBarElement()
            const he = performance.now()
            this.metricsService.distribution({ stat: "cppclient.reload", value: he - se })
          },
        }),
        this.c.onChangeEffect({
          deps: [() => this.getApplicationUserPersistentStorage().cppConfig],
          onChange: async () => {
            this.updateStatusBarElement()
          },
        }),
        this.authenticationService.onDidChangeSubscription(() => {
          this.updateStatusBarElement(),
            this.loadCppConfigIncludingHandlingProAccess()
        }),
        this.D(
          this.editorService.onDidActiveEditorChange(() => {
            this.updateStatusBarElement()
          }),
        ),
        this.authenticationService.addLoginChangedListener(() => {
          this.updateStatusBarElement()
        }),
        this.authenticationService.addSubscriptionChangedListener(() => {
          this.updateStatusBarElement(),
            this.loadCppConfigIncludingHandlingProAccess()
        }),
        this.configurationService.onDidChangeConfiguration((se) => {
          se.affectsConfiguration(JB) && this.updateStatusBarElement()
        }),
        this.loadCppConfigIncludingHandlingProAccess(),
        this.mainRegisterCppListenersToEditorIfCppEnabled(),
        this.suggestionManager.addListener((suggestion, model, editor) => {
          if (
            this.getCurrentSuggestion() === undefined &&
            !(
              this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
              this.importPredictionService.isShowingImportSuggestion()
            )
          ) {
            this.Vb(suggestion),
              this.displayCppSuggestion(editor, model, suggestion),
              this.suggestionManager.removeSuggestion(suggestion)
            return
          }
        })
      const { clientDebounceDuration, totalDebounceDuration } =
        this.getNewDebounceDurations()
      ;(this.Z = new RequestDebouncer(clientDebounceDuration, totalDebounceDuration, 1e3)), (this.requestDebouncer = this.Z),
        (this.fb = !this.environmentService.isBuilt || this.environmentService.isExtensionDevelopment),
        this.importPredictionService.registerCppMethods({
          getPartialCppRequest: this.getPartialCppRequest.bind(this),
          getModelName: this.getModelName.bind(this),
          getCurrentSuggestion: this.getCurrentSuggestion.bind(this),
          getRecentAndNearLocationLinterErrors:
            this.getRecentAndNearLocationLinterErrors.bind(this),
          truncateCurrentFile: this.truncateCurrentFile.bind(this),
          getFocusedCodeEditor: this.getFocusedCodeEditor.bind(this),
          isTextFocusedOrSimilarlyFocused:
            this.isTextFocusedOrSimilarlyFocused.bind(this),
        })
    }
    Lb() {
      const e = this.reactiveStorageService.applicationUserPersistentStorage.cppSnoozed
      if (
        e !== undefined &&
        this.reactiveStorageService.applicationUserPersistentStorage.cppEnabled === false
      ) {
        const t = Date.now(),
          s = e + GMs
        s < t
          ? (this.reactiveStorageService.setApplicationUserPersistentStorage("cppSnoozed", undefined),
            this.reactiveStorageService.setApplicationUserPersistentStorage("cppEnabled", true))
          : setTimeout(() => {
              this.reactiveStorageService.setApplicationUserPersistentStorage("cppSnoozed", undefined),
                this.reactiveStorageService.setApplicationUserPersistentStorage("cppEnabled", true)
            }, t - s)
      }
    }
    uponFusedCursorPredictionReady(predictionId, fusedCursorPrediction) {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          setIntoDB: 'predictionId',
          invokeReason: 'fusedCursorPrediction resolved & isValidCase is true',
          invokePlace: 'right after fusedCursorPrediction resolved',
          predictionId,
          fusedCursorPrediction
        }),
      });
      if (
        !(fusedCursorPrediction === null || !this.usingFusedCursorPredictionModel()) &&
        (this.db.set(predictionId, fusedCursorPrediction),
        this.eb !== undefined && this.eb.fusedCursorPredictionId === predictionId)
      ) {
        const editor = this.getFocusedCodeEditor()
        if (editor === null) return
        const n = editor.getModel()
        if (n === null || n.uri.toString() !== this.eb.uri.toString()) return
        this.displayFusedCursorPrediction({
          editor,
          model: n,
          fusedCursorPrediction,
          _predictionId_for_log: predictionId,
          oldText: this.eb.oldText,
          newText: this.eb.newText,
        })
      }
    }
    getLastAcceptedSuggestionDetails() {
      return this.u
    }
    getNewDebounceDurations() {
      const cppConfig = this.reactiveStorageService.applicationUserPersistentStorage.cppConfig
      if (cppConfig === undefined)
        return { clientDebounceDuration: Igo, totalDebounceDuration: Dgo }
      const clientDebounceDuration = cppConfig.clientDebounceDurationMillis,
        totalDebounceDuration = cppConfig.globalDebounceDurationMillis
      return { clientDebounceDuration, totalDebounceDuration }
    }
    setSuggestionType(decorationId, suggestionDisplayType) {
      this.suggestionTypeCache.set(decorationId, suggestionDisplayType)
    }
    async dispose() {
      const e = new DisposableStore()
      try {
        for (const [t, s] of this.decorationCache.entries()) {
          const n = await this.textModelService.createModelReference(t)
          e.add(n),
            n.object.textEditorModel.deltaDecorations(
              s.map((r) => r.decorationId),
              [],
            )
        }
      } finally {
        e.dispose()
      }
    }
    sendCppEnabledUpdateRequest() {
      this.getApplicationUserPersistentStorage().cppEnabled
        ? this.telemetryService.publicLogCapture("cpp.cppUpdate.cppEnabled")
        : this.telemetryService.publicLogCapture("cpp.cppUpdate.cppDisabled")
    }
    async keepCppModelStateUpdated() {
      const e = await (await this.g.get()).availableModels({})
      this.reactiveStorageService.setApplicationUserPersistentStorage("cppModelsState", (t) => ({
        cppModels: e.models,
        defaultModel: e.defaultModel ?? t.defaultCppModel,
      }))
    }
    async updateShouldNotTryToGetThemToNoticeCpp() {
      this.getApplicationUserPersistentStorage().cppEnabled === true &&
        this.reactiveStorageService.setApplicationUserPersistentStorage(
          "shouldNotTryToGetThemToNoticeCpp",
          true,
        )
      const e = this.authenticationService.isAuthenticated()
      await this.aiFeatureStatusService.maybeRefreshFeatureStatus("cppExistingUserMarketingPopup"),
        e &&
          this.getApplicationUserPersistentStorage().shouldNotTryToGetThemToNoticeCpp !== true &&
          this.aiFeatureStatusService.getCachedFeatureStatus("cppExistingUserMarketingPopup") ===
            true &&
          this.isAllowedCpp() &&
          (this.telemetryService.publicLogCapture("cppMarketingPopup.shownPopup"),
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "shouldNotTryToGetThemToNoticeCpp",
            true,
          ),
          this.reactiveStorageService.setNonPersistentStorage(
            "cppPopupState",
            "cardState",
            "first",
          ))
    }
    isAllowedCpp() {
      return WEn(
        this.getApplicationUserPersistentStorage().cppConfig,
        this.authenticationService.isAuthenticated(),
        m2i(this.authenticationService.membershipType()),
      )
    }
    isCppEnabledForEditor(e) {
      let t
      if (e !== null) {
        const n = e.getModel()
        if (n == null || this.isTextLengthTooLarge(n) || this.selectedContextService.shouldIgnoreUri(n.uri)) return false
        t = { languageId: KMs(n), fsPath: this.contextService.asRelativePath(n.uri) }
      }
      let s
      try {
        s = this.configurationService.getValue(JB)
      } catch {
        s = []
      }
      return qEn(this.getApplicationUserPersistentStorage().cppEnabled, t, s)
    }
    setCppDisabledForLanguage(e, t) {
      const s = this.configurationService.getValue(JB)
      Array.isArray(s)
        ? this.configurationService.updateValue(
            JB,
            t === "enabled" ? s.filter((n) => n !== e) : [...s, e],
            2,
          )
        : this.configurationService.updateValue(JB, t === "enabled" ? [] : [e], 2)
    }
    isCppDisabledForLanguage(e) {
      try {
        const t = this.configurationService.getValue(JB)
        return b2i(e, t)
      } catch {
        return false
      }
    }
    getRedDecorationIds(e) {
      return this.$[e]
    }
    setRedDecorationIds(e, t) {
      this.$[e] = t(this.$[e] || [])
    }
    pauseCppTriggeringUntilUnpaused() {
      return (
        (this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
          true),
        this.rejectAndResetAllCppSuggestions(),
        {
          dispose: () => {
            this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
              false
          },
        }
      )
    }
    filterLinterErrors(allMarkers, severityThreshold = MarkerSeverity.Error) {
      return allMarkers
        .filter((marker) => marker.severity >= severityThreshold)
        .filter(
          (marker) =>
            marker.startLineNumber < QMs &&
            marker.endLineNumber < QMs &&
            marker.startColumn < ZMs &&
            marker.endColumn < ZMs,
        )
    }
    loadCopilotPlusPlusConfigFromGithubCopilot() {
      if (this.getApplicationUserPersistentStorage().cppHasLoadedConfigFromCopilot !== true)
        try {
          const e = this.configurationService.getValue("github.copilot.enable")
          if (e !== null && typeof e == "object") {
            const t = Object.keys(e)
              .filter((s) => e[s] === false)
              .filter((s) => s !== "*")
            t.length > 0 && this.configurationService.updateValue(JB, t, 2)
          }
        } catch {
        } finally {
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "cppHasLoadedConfigFromCopilot",
            true,
          )
        }
    }
    _createTooltip(e, t) {
      const s = ss(),
        n = hF.get(s) ?? s.document.body,
        r = s.document.getElementById(
          "cpp-cursor-prediction-tooltip-hover-over-element-1234",
        )
      r && r.remove()
      const o = document.createElement("div")
      ;(o.id = "cpp-cursor-prediction-tooltip-hover-over-element-1234"),
        (o.textContent = t),
        (o.style.position = "absolute"),
        (o.style.backgroundColor = "var(--vscode-sideBar-background)"),
        (o.style.color = "var(--vscode-sideBar-foreground)"),
        (o.style.padding = "5px"),
        (o.style.borderRadius = "5px"),
        (o.style.display = "none"),
        (o.style.zIndex = "1000"),
        (o.style.width = "200px"),
        (o.style.marginLeft = "4px"),
        (o.style.fontSize = "10px"),
        n.appendChild(o),
        e.addEventListener("mouseenter", () => {
          s.requestAnimationFrame(() => {
            ;(o.style.display = "block"),
              (o.style.transform = "translate(-9999px, -9999px)"),
              s.requestAnimationFrame(() => {
                const a = o.getBoundingClientRect(),
                  l = e.getBoundingClientRect()
                o.style.transform = `translate(${l.left - a.width / 2}px, ${l.top - a.height - 5}px)`
                const c = s.setInterval(() => {
                  e.matches(":hover") ||
                    ((o.style.display = "none"), s.clearInterval(c))
                }, 1e3)
                setTimeout(() => s.clearInterval(c), 6e4)
              })
          })
        }),
        e.addEventListener("mouseleave", () => {
          o.style.display = "none"
        })
    }
    _renderCppToggleCursorPrediction(e) {
      const t = document.createElement("div")
      t.classList.add("cpp-status-bar-hover-element")
      const s = document.createElement("div")
      ;(s.style.display = "flex"),
        (s.style.alignItems = "center"),
        (s.style.justifyContent = "center"),
        (s.style.gap = "2px")
      const n = document.createElement("span")
      ;(n.textContent = "Cursor Prediction"), s.appendChild(n)
      const r = document.createElement("i")
      ;(r.className = "codicon codicon-info"),
        (r.style.color = "var(--vscode-descriptionForeground)"),
        (r.style.display = "flex"),
        (r.style.alignItems = "center"),
        (r.style.justifyContent = "center"),
        (r.style.marginLeft = "2px"),
        (r.style.marginRight = "10px"),
        (r.style.marginBottom = "-0.1rem"),
        (r.style.cursor = "pointer"),
        s.appendChild(r),
        this._createTooltip(
          r,
          "Predicts the next line your cursor will move to. Suggestions can be accepted by pressing Tab.",
        ),
        t.appendChild(s)
      const o = document.createElement("div"),
        a = document.createElement("select"),
        l = this.cursorPredictionService.isCursorPredictionEnabled() ? "enabled" : "disabled"
      ;["enabled", "disabled"].forEach((u) => {
        const d = document.createElement("option")
        ;(d.value = u),
          (d.textContent = u),
          (d.selected = u === l),
          a.appendChild(d)
      }),
        a.addEventListener("change", (u) => {
          const d = u.target.value
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "cursorPredictionEnabled",
            d === "enabled",
          )
        }),
        (a.style.background = "none"),
        (a.style.outline = "none"),
        (a.style.border = "none"),
        (a.style.color = "inherit"),
        (a.style.fontSize = "inherit"),
        o.appendChild(a)
      const h = document.createElement("span")
      return (
        (h.textContent = "\u25BC"),
        (h.style.marginLeft = "4px"),
        o.appendChild(h),
        (o.style.border = "1px solid var(--vscode-settings-checkboxBorder)"),
        (o.style.borderRadius = "4px"),
        (o.style.padding = "2px 4px"),
        (o.style.marginLeft = "4px"),
        t.appendChild(o),
        t
      )
    }
    _renderCppModelSelect(e) {
      const t = document.createElement("div")
      t.classList.add("cpp-status-bar-hover-element")
      const s = document.createElement("span")
      ;(s.textContent = "Model"),
        (s.style.marginRight = "10px"),
        t.appendChild(s)
      const n = document.createElement("div"),
        r = document.createElement("select"),
        o = this.reactiveStorageService.applicationUserPersistentStorage.cppModel || S9
      ;[
        S9,
        ...this.reactiveStorageService.applicationUserPersistentStorage.cppModelsState.cppModels,
      ].forEach((c) => {
        const h = document.createElement("option")
        ;(h.value = c),
          (h.textContent = c),
          (h.selected = c === o),
          r.appendChild(h)
      }),
        r.addEventListener("change", (c) => {
          const h = c.target.value
          h === S9
            ? this.reactiveStorageService.setApplicationUserPersistentStorage("cppModel", undefined)
            : this.reactiveStorageService.setApplicationUserPersistentStorage("cppModel", h),
            this.loadCppConfigIncludingHandlingProAccess()
        }),
        (r.style.background = "none"),
        (r.style.outline = "none"),
        (r.style.border = "none"),
        (r.style.color = "inherit"),
        (r.style.fontSize = "inherit"),
        n.appendChild(r)
      const l = document.createElement("span")
      return (
        (l.textContent = "\u25BC"),
        (l.style.marginLeft = "4px"),
        n.appendChild(l),
        (n.style.border = "1px solid var(--vscode-settings-checkboxBorder)"),
        (n.style.borderRadius = "4px"),
        (n.style.padding = "2px 4px"),
        (n.style.marginLeft = "4px"),
        t.appendChild(n),
        t
      )
    }
    _renderStatusCheckBox(e, t) {
      const s = document.createElement("div")
      s.classList.add("cpp-status-bar-hover-element")
      const n = t ? this.isCppDisabledForLanguage(t) : !this.getApplicationUserPersistentStorage().cppEnabled,
        r = t ? `Disable for ${t}` : "Disable globally",
        o = new um({
          isChecked: n,
          title: r,
          icon: n ? $.check : undefined,
          ...Hae,
          hoverDelegate: { showHover: () => {}, delay: 0 },
        })
      o.domNode.classList.add("cpp-status-bar-toggle-checkbox"),
        e.add(o),
        e.add(
          o.onChange(() => {
            const l = o.checked
            t
              ? this.setCppDisabledForLanguage(t, l ? "disabled" : "enabled")
              : (this.reactiveStorageService.setApplicationUserPersistentStorage("cppEnabled", !l),
                l &&
                  this.reactiveStorageService.setApplicationUserPersistentStorage(
                    "cppSnoozed",
                    undefined,
                  ))
          }),
        )
      const a = document.createElement("span")
      return (
        (a.textContent = r),
        (a.style.marginRight = "6px"),
        s.appendChild(a),
        s.appendChild(o.domNode),
        s
      )
    }
    statusBarElementProps() {
      for (this.authenticationService.refreshAuthService(), this.Mb.clear(); this.Nb.firstChild; )
        this.Nb.removeChild(this.Nb.firstChild)
      const e = Xf(this.editorService.activeTextEditorControl)
      e?.onDidChangeModelLanguage(this.updateStatusBarElement, this, this.Mb)
      const t = e?.getModel(),
        s = this.authenticationService.isAuthenticated(),
        n = this.isAllowedCpp(),
        r = this.isCppEnabledForEditor(e)
      if (n) {
        if (
          (this.Nb.appendChild(this._renderStatusCheckBox(this.Mb)), t != null)
        ) {
          const o = KMs(t)
          this.Nb.appendChild(this._renderStatusCheckBox(this.Mb, o))
        }
        this.Nb.appendChild(this._renderCppModelSelect(this.Mb)),
          this.Nb.appendChild(this._renderCppToggleCursorPrediction(this.Mb))
      } else if (s) {
        const o = document.createElement("div")
        o.classList.add("cpp-status-bar-hover-element"),
          o.appendChild(
            document.createTextNode("Requires pro (custom model). "),
          )
        const a = document.createElement("a")
        ;(a.href = "#"),
          (a.textContent = "Upgrade here."),
          (a.style.marginLeft = "4px"),
          (a.onclick = (l) => {
            l.preventDefault(), this.authenticationService.pay()
          }),
          o.appendChild(a),
          this.Nb.appendChild(o)
      } else {
        const o = document.createElement("div")
        o.classList.add("cpp-status-bar-hover-element"),
          o.appendChild(document.createTextNode("Please log in")),
          this.Nb.appendChild(o)
      }
      return {
        name: "Cursor Tab",
        text: "Cursor Tab",
        ariaLabel: "Cursor Tab",
        cssClass:
          n && r
            ? "copilot-plus-plus-status-on"
            : "copilot-plus-plus-status-off",
        tooltip: this.Nb,
        dontHideHoverOnClick: true,
        command: n ? m0t : s ? "" : YMs.ID,
      }
    }
    updateStatusBarElement() {
      this.updateShouldNotTryToGetThemToNoticeCpp(),
        this.W.value?.update(this.statusBarElementProps())
    }
    getMostRecentShownRequestId() {
      return this.mostRecentShownRequestId
    }
    getMostRecentNonAbortedRequestId() {
      return this.mostRecentNonAbortedRequestId
    }
    eventShouldKillPrevCpp(e) {
      return e.altKey === true
    }
    Ob() {
      return this.reactiveStorageService.applicationUserPersistentStorage
    }
    getApplicationUserPersistentStorage() {
      return this.Ob();
    }
    Pb() {
      return this.reactiveStorageService.nonPersistentStorage
    }
    getNonPersistentStorage() {
      return this.Pb();
    }
    reallowCopilotIfWePreviousHidCopilotSuggestions() {
      this.editorThatWeHidGhostTextOn !== undefined &&
        (this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
        Ad.get(this.editorThatWeHidGhostTextOn)
          ?.model.get()
          ?.triggerExplicitly(),
        (this.editorThatWeHidGhostTextOn = undefined))
    }
    isInVimNonInsertMode() {
      const e = this.statusbarService.getViewModel()
      for (const t of [...e.getEntries(0), ...e.getEntries(1)])
        if (
          t.id === "vscodevim.vim.primary" &&
          !["INSERT"].some((s) => t.container.innerText.includes(s))
        )
          return true
      return false
    }
    selectionIsNotMultipleLines() {
      const e = this.codeEditorService.getActiveCodeEditor(),
        t = e?.getSelection()
      return (
        e === null ||
        t === null ||
        t === undefined ||
        t.startLineNumber === t.endLineNumber
      )
    }
    cursorPredictorWouldTabInsteadOfAccepting() {
      const e = this.codeEditorService.getActiveCodeEditor()
      if (!e) return false
      const t = e.getModel()
      return t ? this.cursorPredictionService.shouldTabInsteadOfAccepting(e, t) : false
    }
    shouldTabInsteadOfAccepting() {
      if (this.isInVimNonInsertMode()) return false
      const e = this.codeEditorService.getActiveCodeEditor()
      if (!e) return false
      const t = e.getPosition(),
        s = e.getModel()
      if (!t || !s) return false
      const n = s.getEOL()
      if (s.getLineContent(t.lineNumber).trim() !== "") return false
      const r = this.getNonPersistentStorage().cppState?.suggestion
      if (r === undefined) return false
      const o = r.decorationId,
        a = e.getModel()?.getDecorationRange(o)
      if (a == null) return false
      const l = s.getValueInRange({
        startLineNumber: a.startLineNumber,
        startColumn: a.startColumn,
        endLineNumber: t.lineNumber,
        endColumn: t.column,
      })
      if (l === undefined) return false
      let c = r.replaceText
      t.lineNumber === a.endLineNumber &&
        a.endColumn === 1 &&
        (c = c + (s.getLineContent(t.lineNumber) ?? "") + n)
      const h = l.split(n).length - 1,
        u = l.split(n).at(-1)?.length
      if (u === undefined) return false
      let d = c.split(n)[h]
      return d === undefined ||
        d.slice(0, u).trim() !== "" ||
        ((d = d.slice(u)), d === undefined)
        ? false
        : d.trimStart() !== d
    }
    async acceptNextWord() {
      if (this.configurationService.getValue(fUe) !== true) return false
      const t = this.getNonPersistentStorage().cppState?.suggestion
      if (t !== undefined) {
        this.dontTriggerCppBecauseChangeIsFromCpp = true
        const s = await this.acceptNextWordSuggestion(
          this.holdDownAbortController,
        )
        if (s.type === Sp.AcceptedWord) {
          const n = this.codeEditorService.getActiveCodeEditor()
          return (
            n !== null && this.cleanupAfterNextWordSuggestion(n, s.edit), true
          )
        } else if (s.type === Sp.AcceptedAll) {
          const n = this.codeEditorService.getActiveCodeEditor()
          return n !== null && this.cleanupAfterAcceptSuggestion(n, t), true
        }
      }
      return false
    }
    markEditAsRejected(e, t) {
      const s = this.getApplicationUserPersistentStorage().cppConfig
      if (
        s === undefined ||
        s.heuristics.includes(VB.SUGGESTING_RECENTLY_REJECTED_EDIT) === false ||
        s.recentlyRejectedEditThresholds === undefined
      )
        return
      const n = e.getModel()
      if (n === null) return
      const r = this.getNonPersistentStorage().cppState?.suggestion
      if (r === undefined) return
      const o = r.uri,
        a = this.contextService.asRelativePath(o)
      let { isNoOp: l } = replaceTextInRange(
        n,
        r.startingSuggestionRange,
        r.replaceText,
        n.getEOL(),
      )
      if (l) return
      const c = generateModifiedText(
        n,
        r.startingSuggestionRange,
        r.replaceText,
        n.getEOL(),
        null,
      )
      for (const h of c)
        this.everythingProviderService.onlyLocalProvider?.runCommand(EditHistoryDiffFormatter.RecordRejectedEdit, {
          relativePath: a,
          modelValue: h,
          onlySoftRejected: t,
        })
    }
    mainRegisterCppListenersToEditorIfCppEnabled() {
      this.clearEditorListeners(),
        this.getApplicationUserPersistentStorage().cppEnabled === true
          ? this.registerAllCppListeners()
          : this.reallowCopilotIfWePreviousHidCopilotSuggestions()
    }
    clearEditorListeners() {
      this.editorListenersMap.forEach((e) => e.forEach((t) => t.dispose())), this.editorListenersMap.clear()
    }
    async registerAllCppListeners() {
      let e = 0
      for (
        ;
        (await this.everythingProviderService.onlyLocalProvider?.runCommand(EditHistoryDiffFormatter.Ack, null)) !== true &&
        e < 1e3;

      )
        await new Promise((s) => setTimeout(s, 100))
      for (let editor of this.codeEditorService.listCodeEditors())
        this.registerEditorListenersToEditor(editor)
      this.editorListenersMap.set("global", [
        this.D(
          this.codeEditorService.onCodeEditorAdd((editor) => {
            this.registerEditorListenersToEditor(editor)
          }),
        ),
      ]),
        this.D(
          this.editorService.onDidActiveEditorChange(() => {
            oa("onDidActiveEditorChange:")
            const editor = this.codeEditorService.getActiveCodeEditor()
            if (editor === null) {
              oa("onDidActiveEditorChange: editor is null")
              return
            }
            if (editor.getModel() === null) {
              oa("onDidActiveEditorChange: model is null")
              return
            }
            if (this.Rb() || this.Sb()) {
              oa(
                `onDidActiveEditorChange: Suppressing suggestion because ${this.Rb()} or ${this.Sb()}`,
              )
              return
            }
            oa("onDidActiveEditorChange: Triggering suggestion"),
              this.fireCppSuggestionDebounced(editor, CppIntent.EditorChange)
          }),
        )
      const windowList = getWindows()
      this.editorListenersMap.set("window", [
        this.D({
          dispose: () => {
            for (const windowItem of windowList)
              windowItem.window.document.removeEventListener(
                "keydown",
                this.handleKeyDownForCppKeys,
              )
          },
        }),
      ])
      for (const windowItem of windowList)
        windowItem.window.document.addEventListener(
          "keydown",
          this.handleKeyDownForCppKeys,
        )
    }
    async registerEditorListenersToEditor(editor) {
      const editorId = editor.getId()
      this.editorListenersMap.set(editorId, [
        editor.onDidDispose(() => {
          this.editorListenersMap.get(editorId)?.forEach((listener) => listener.dispose()), this.editorListenersMap.delete(editorId)
        }),
      ])
      try {
        this.editorListenersMap.has(editorId) || this.editorListenersMap.set(editorId, []),
          this.editorListenersMap.get(editorId).push(
            this.D(
              editor.onDidBlurEditorText(() => {
                oa("[Cpp] onDidBlurEditorText: resetting suggestions"),
                  this.rejectAndResetAllCppSuggestions(),
                  (this.numberOfClearedSuggestionsSinceLastAccept = 0)
              }),
            ),
          )
        const s = this.D(new NYi(editor, this.ILanguageFeaturesService.signatureHelpProvider))
        this.editorListenersMap.get(editorId).push(s),
          s !== undefined &&
            this.editorListenersMap.get(editorId).push(
              this.D(
                s.onChangedHints((hintsChanges) => {
                  const parameterHints = this.cppTypeService.getRelevantParameterHints(editor)
                  this.cppTypeService.onChangedParameterHints(editor, hintsChanges),
                    parameterHints.length === 0 &&
                      hintsChanges !== undefined &&
                      this.fireCppSuggestionDebounced(editor, CppIntent.ParameterHints)
                }),
              ),
            )
        const model = editor.getModel()
        model !== null && (await this.registerModelListenerToEditorModel(editor, model)),
          this.editorListenersMap.has(editorId) || this.editorListenersMap.set(editorId, []),
          this.editorListenersMap.get(editorId).push(
            this.D(
              editor.onDidChangeModel(() => {
                const r = editor.getModel()
                r !== null && this.registerModelListenerToEditorModel(editor, r)
              }),
            ),
          ),
          this.editorListenersMap.has(editorId) || this.editorListenersMap.set(editorId, []),
          this.editorListenersMap.get(editorId).push(
            this.D(
              editor.onDidChangeCursorPosition((event) => {
                if (
                  this.codeEditorService.getActiveCodeEditor() !== editor &&
                  !this.isReferenceFocused(editor) &&
                  !this.isFindFocused(editor)
                ) {
                  oa(
                    "[Cpp] onDidChangeCursorPosition: Suppressing trigger because editor is not active",
                  )
                  return
                }
                if (
                  ((this.lastCursorMovementIsCursorPrediction = event.source === CURSOR_PREDICTION),
                  event.source === CURSOR_PREDICTION && this.Qb(editor, event.position),
                  event.source === "cpp-peek" ||
                    event.source === "cpp-next-suggestion" ||
                    event.source === "cpp-revert" ||
                    event.source === CURSOR_PREDICTION)
                ) {
                  oa(
                    `[Cpp] onDidChangeCursorPosition: exiting listener because source is ${event.source}`,
                  )
                  return
                } else if (event.reason === 2 && event.source === "modelChange") {
                  oa(
                    `[Cpp] onDidChangeCursorPosition: suppress b/c reason is ${event.reason} and source is ${event.source}`,
                  )
                  return
                }
                this.usingFusedCursorPredictionModel() &&
                  ((this.eb = undefined),
                  (this.cb = undefined),
                  this.cursorPredictionService.clearCursorPrediction())
                const uri = editor.getModel()?.uri
                if (
                  uri === undefined ||
                  (this.updateRecentDiagnostics(uri, event.position),
                  this.holdDownAbortController?.abort(),
                  (this.holdDownAbortController = undefined),
                  event.source === "restoreState")
                )
                  return
                let nearbyMarkers = this.markerService
                  .read({ resource: uri })
                  .filter(
                    (marker) =>
                      [MarkerSeverity.Error, MarkerSeverity.Warning].includes(marker.severity) &&
                      Math.abs(marker.startLineNumber - event.position.lineNumber) <=
                        MAX_DIAGNOSTIC_DISTANCE,
                  )
                  .filter(
                    (marker) =>
                      marker.severity === MarkerSeverity.Error &&
                      Math.abs(marker.startLineNumber - event.position.lineNumber) <= 1,
                  )
                if (this.getApplicationUserPersistentStorage().cppEnabled === true) {
                  const selection = editor.getSelection()
                  if (selection === null) {
                    oa("[Cpp] onDidChangeCursorPosition: selection is null")
                    return
                  }
                  const currentSuggestion = this.getCurrentSuggestion()
                  let isWithinSuggestionRange = false
                  const model = editor.getModel()
                  if (model === null) return
                  if (currentSuggestion === undefined)
                    this.didShowGreenHighlights
                      ? ((this.didShowGreenHighlights = false),
                        this.clearDecorationsSlowEnumeratesAllDecorations())
                      : this.clearDecorationsFast()
                  else {
                    const suggestionDecoration = {
                      range: model.getDecorationRange(currentSuggestion.decorationId),
                      id: currentSuggestion.decorationId,
                    }
                    if (suggestionDecoration === undefined || suggestionDecoration.range === null) return
                    const w = {
                      ...suggestionDecoration.range,
                      endColumn: 1e4,
                      startLineNumber:
                        currentSuggestion.startingSuggestionRange.startLineNumber,
                      startColumn: currentSuggestion.startingSuggestionRange.startColumn,
                    }
                    ;(isWithinSuggestionRange = !!(suggestionDecoration.range !== null && selection.intersectRanges(w))),
                      isWithinSuggestionRange ||
                        (this.markEditAsRejected(editor, false),
                        this.rejectAndResetAllCppSuggestions(),
                        this.cursorPredictionService.maybeShowHintLineWidget())
                  }
                  // 1. 检查streamRequest得不一样，避免重复请求；2. 检查光标不在建议范围内，避免干扰用户操作
                  if (
                    // this.streams
                    !this.R.find(
                      (streamRequest) =>
                        streamRequest.modelId === model.id &&
                        streamRequest.modelVersion === model.getVersionId() &&
                        streamRequest.position !== undefined &&
                        streamRequest.position.equals(event.position),
                    ) &&
                    !isWithinSuggestionRange
                  )
                    if (this.getApplicationUserPersistentStorage().cppFireOnEveryCursorChange === true)
                      this.fireCppSuggestionDebounced(editor, CppIntent.LineChange)
                    else if (
                      (nearbyMarkers.length > 0 || Ago) &&
                      this.q !== event.position.lineNumber // this.p(lastTriggeredLine)
                    )
                      this.fireCppSuggestionDebounced(editor, CppIntent.LinterErrors)
                    else {
                      const linesAreTheSame = this.q === event.position.lineNumber, // this.p(lastTriggeredLine)
                        hasRejectedTooManySuggestions = this.Rb(),
                        isUserReadingCode = this.Sb()
                      !linesAreTheSame && !hasRejectedTooManySuggestions && !isUserReadingCode
                        ? this.fireCppSuggestionDebounced(editor, CppIntent.LineChange)
                        : oa(
                            "[Cpp] Suppressed cursor movement trigger. Conditions (all should be false to trigger):",
                            JSON.stringify({
                              linesAreTheSame,
                              hasRejectedTooManySuggestions,
                              isUserReadingCode,
                            }),
                          )
                    }
                  else
                    oa(
                      "[Cpp] onDidChangeCursorPosition: suppress b/c shouldTrigger is false",
                    )
                  this.q = event.position.lineNumber
                }
                this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: editor,
                    uri: uri,
                    source: "onDidChangeCursorPosition",
                  })
              }),
            ),
          ),
          this.Tb(editor)
      } catch (s) {
        console.error("Cpp: error", s)
      }
    }
    Qb(e, t) {
      const s = e.getModel()?.uri,
        n = e.getModel()?.getVersionId()
      s !== undefined &&
        n !== undefined &&
        (this.bb = [...this.bb, { uri: s, modelVersion: n, position: t }])
    }
    Rb() {
      return (
        this.numberOfClearedSuggestionsSinceLastAccept >
        (this.getApplicationUserPersistentStorage().cppConfig?.maxNumberOfClearedSuggestionsSinceLastAccept ??
          20)
      )
    }
    Sb() {
      return (
        this.lastEditTime === undefined || Date.now() - this.lastEditTime >= 6e4
      )
    }
    Tb(editor) {
      const editorId = editor.getId(),
        excludeRecentlyViewedFilesPatterns = this.getApplicationUserPersistentStorage().cppConfig?.excludeRecentlyViewedFilesPatterns ?? []
      this.editorListenersMap.has(editorId) || this.editorListenersMap.set(editorId, []),
        this.editorListenersMap.get(editorId).push(
          this.D(
            editor.onDidFocusEditorText(() => {
              const model = editor.getModel()
              if (model == null) return
              const relativePath = this.contextService.asRelativePath(model.uri),
                allowedSchemes = [
                  Schemas.file,
                  Schemas.inMemory,
                  Schemas.vscodeNotebookCell,
                  Schemas.vscodeFileResource,
                  Schemas.vscodeRemote,
                  Schemas.vscodeRemoteResource,
                  Schemas.vscodeManagedRemoteResource,
                ]
              if (
                !Pn(editor) ||
                excludeRecentlyViewedFilesPatterns.some((pattern) => relativePath.includes(pattern)) ||
                !allowedSchemes.some((scheme) => Cg(model.uri, scheme))
              )
                return
              const visibleRanges = editor.getVisibleRanges(),
                uri = model.uri
              this.recentlyViewedFilesCache.set(uri, { visibleRanges: visibleRanges, lastViewedAt: Date.now() }),
                this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: editor,
                    uri: uri,
                    source: "onDidFocusEditorText",
                  })
            }),
          ),
        ),
        this.editorListenersMap.has(editorId) || this.editorListenersMap.set(editorId, []),
        this.editorListenersMap.get(editorId).push(
          this.D(
            editor.onDidScrollChange(() => {
              const model = editor.getModel(),
                uri = model?.uri
              if (model == null || uri == null) return
              const relativePath = this.contextService.asRelativePath(uri),
                allowedSchemes = [
                  Schemas.file,
                  Schemas.inMemory,
                  Schemas.vscodeNotebookCell,
                  Schemas.vscodeFileResource,
                  Schemas.vscodeRemote,
                  Schemas.vscodeRemoteResource,
                  Schemas.vscodeManagedRemoteResource,
                ]
              !Pn(editor) ||
                excludeRecentlyViewedFilesPatterns.some((pattern) => relativePath.includes(pattern)) ||
                !allowedSchemes.some((scheme) => Cg(uri, scheme)) ||
                this.recentlyViewedFilesCache.set(uri, {
                  visibleRanges: editor.getVisibleRanges(),
                  lastViewedAt: Date.now(),
                })
            }),
          ),
        )
    }
    async fireOnCacheMiss(contentChangeEvent, editor, model, EOL, options) {
      editor !== null
        ? await this.fireCppSuggestionDebouncedDiffHistory(contentChangeEvent, editor, CppIntent.Typing, EOL)
        : await this.formatDiffHistory(contentChangeEvent, editor, model, EOL)
    }
    async triggerCppIfLintErrorComesUp(contentChangeEvent, editor, model, eol, timeoutDuration, previousModelValue) {
      const relativePath = this.contextService.asRelativePath(model?.uri ?? U.file("")),
        abortController = new AbortController()
      this.triggerCppOnLintErrorAbortControllers.set(relativePath, abortController)
      let isAborted = false
      abortController.signal.addEventListener("abort", () => {
        isAborted = true
      })
      for (let attempt = 0; attempt < timeoutDuration / 50; attempt++) {
        if ((await new Promise((p) => setTimeout(p, 50)), isAborted)) return
        const markers = this.markerService.read({ resource: model.uri }),
          cursorPosition = editor.getPosition()
        if (cursorPosition === null) return
        if (
          markers.filter(
            (marker) =>
              marker.severity === MarkerSeverity.Error &&
              Math.abs(marker.startLineNumber - cursorPosition.lineNumber) <= 1,
          ).length > 0
        ) {
          this.fireCppSuggestionFromTrigger(model.uri, editor, CppIntent.LinterErrors)
          break
        }
      }
    }
    async continueModelChangeListener(contentChangeEvent, editor, model, EOL, options = { removeGreens: true }, context) {
      if (this.getNonPersistentStorage().cppState?.shouldNotTrigger === true) {
        oa("[Cpp] continueModelChangeListener - shouldNotTrigger is true")
        return
      }
      if (this.isTextLengthTooLarge(model)) return
      const formatAndUpdate = async () => {
        await this.formatDiffHistory(contentChangeEvent, editor, model, EOL), GhostTextController.get(editor)?.update()
      }
      this.lastCursorMovementIsCursorPrediction = false
      const adjustSuggestionPosition = () => {
        const currentSuggestion = this.getCurrentSuggestion()
        if (currentSuggestion === undefined) return
        const decorationRange = model.getDecorationRange(currentSuggestion.decorationId)
        if (decorationRange === null) return
        const decorationOptions = model.getDecorationOptions(currentSuggestion.decorationId)
        if (
          decorationOptions === null ||
          decorationRange.startLineNumber <= (editor.getPosition()?.lineNumber ?? 0)
        )
          return
        const adjustedRange = { ...decorationRange, startLineNumber: decorationRange.startLineNumber - 1 }
        model.changeDecorations((changeAccessor) => {
          changeAccessor.removeDecoration(currentSuggestion.decorationId)
          const newDecorationId = changeAccessor.addDecoration(adjustedRange, decorationOptions)
          this.updateSuggestionState({ decorationId: newDecorationId })
        })
      }
      if (this.isOnShortestEditPath({ event: contentChangeEvent, model: model }, context))
        return isPureEmptyLineInsertion(contentChangeEvent.changes) && adjustSuggestionPosition(), formatAndUpdate()
      const shouldAbortAll = this.Ub(contentChangeEvent) || this.getApplicationUserPersistentStorage().cppCachedTypeaheadEnabled !== true
      if (
        (this.markEditAsRejected(editor, true),
        this.rejectAndResetAllCppSuggestions({ removeGreens: false, abortAll: shouldAbortAll }),
        (!this.getApplicationUserPersistentStorage().cppAutoImportEnabled ||
          !this.importPredictionService.isShowingImportSuggestion()) &&
          this.allowCppTriggerInComments(editor))
      ) {
        const cachedSuggestion = this.suggestionManager.popCacheHit(model)
        if (cachedSuggestion !== undefined)
          return this.Vb(cachedSuggestion), this.displayCppSuggestion(editor, model, cachedSuggestion), formatAndUpdate()
      }
      await this.fireOnCacheMiss(contentChangeEvent, editor, model, EOL, options)
    }
    Ub(e) {
      return e.changes.some(
        (t) =>
          t.text.includes(`
`) || t.rangeLength > 0,
      )
    }
    Vb(suggestion) {
      const t =
          performance.now() + performance.timeOrigin - suggestion.suggestionTriggerTime,
        s = performance.now() - (this.X ?? 0)
      console.info("[CPP TIMING]", `Time Since Start: ${t}`),
        console.info("[CPP TIMING]", `Time Since Trigger: ${s}`),
        this.metricsService.distribution({ stat: "cppclient.time_since_start", value: t }),
        this.metricsService.distribution({ stat: "cppclient.time_since_trigger", value: s })
    }
    onCommentLine(e, t) {
      const s = e.getPosition()
      if (s === null) return
      const n = s.lineNumber
      return t.getLineContent(n).trim().startsWith("//")
    }
    getPreviousModelValue(e) {
      const t = this.getModelVersionKey(e)
      return this.modelValueCache.get(t)
    }
    async registerModelListenerToEditorModel(editor, model) {
      if (this.isTextLengthTooLarge(model)) {
        oa(
          `[Cpp] registerModelListenerToEditorModel: Suppressing trigger because file is too large: filename: ${model.uri.fsPath}, length: ${model.getValueLength()}`,
        )
        return
      }
      const relativePath = this.contextService.asRelativePath(model?.uri ?? U.file(""))
      if (
        (await this.everythingProviderService.onlyLocalProvider?.runCommand(EditHistoryDiffFormatter.GetModelValue, {
          relativePath: relativePath,
        })) === undefined
      ) {
        let currentModelValue
        if (model.uri.scheme === "vscode-notebook-cell") {
          const EOL = model.getEOL(),
            cellInfo = this.getNotebookCellInfo(model, editor, EOL)
          cellInfo !== null && (currentModelValue = cellInfo.cellValues.join(EOL))
        } else currentModelValue = model.getValue()
        currentModelValue !== undefined &&
          (await this.everythingProviderService.onlyLocalProvider?.runCommand(EditHistoryDiffFormatter.InitModel, {
            relativePath: relativePath,
            currentModelValue: currentModelValue,
            modelVersion: model.getVersionId(),
          }))
      }
      if (
        !model ||
        (model.uri.scheme !== "vscode-notebook-cell" &&
          model.uri.scheme !== "file" &&
          model.uri.scheme !== "vscode-remote" &&
          model.uri.scheme !== "untitled")
      )
        return
      this.modelListeners2EditorMap.forEach((listenersMap) => {
        listenersMap.has(editor.getId()) &&
          (listenersMap.get(editor.getId())?.forEach((c) => c.dispose()), listenersMap.delete(editor.getId()))
      })
      const disposables = [
          this.D(
            model.onDidChangeContent(async (contentChangeEvent) => {
              this.X = performance.now()
              const EOL = model.getEOL()
              if (
                ((this.lastEditTime = Date.now()),
                this.modelListeners2EditorMap.has(relativePath) &&
                  this.modelListeners2EditorMap.get(relativePath).size > 1 &&
                  editor.getId() !== this.codeEditorService.getActiveCodeEditor()?.getId())
              ) {
                oa(
                  "[Cpp] onDidChangeModelContent: Suppressing trigger because editor is not active",
                )
                return
              }
              if (
                ((this.bb = []),
                this.suggestionManager.addEditAndUpdateCachedSuggestions(contentChangeEvent, model),
                this.triggerCppOnLintErrorAbortControllers.get(relativePath)?.abort(),
                this.getApplicationUserPersistentStorage().cppEnabled !== false)
              ) {
                if (
                  this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
                  (this.importPredictionService.markFileAsUpdated(model.uri),
                  contentChangeEvent.changes.length === 1 &&
                    contentChangeEvent.changes[0].text.length > 20 &&
                    contentChangeEvent.changes[0].text.length < 5e3)
                ) {
                  const change = contentChangeEvent.changes[0],
                    lines = change.text.split(`
`),
                    range = {
                      startLineNumber: change.range.startLineNumber,
                      startColumn: change.range.startColumn,
                      endLineNumber: change.range.endLineNumber + lines.length - 1,
                      endColumn:
                        lines.length === 1
                          ? change.range.endColumn + lines[0].length
                          : lines[lines.length - 1].length,
                    }
                  this.importPredictionService.handleNewGreens(model, [range]),
                    this.showNearLocationLintErrorsToImportPredictionService({
                      editor: editor,
                      uri: model.uri,
                      source: "onDidChangeContent",
                    })
                }
                if (
                  (GhostTextController.get(editor)?.setChangesSinceLastUpdate(true),
                  this.dontTriggerCppBecauseChangeIsFromCpp === true ||
                    this
                      .pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
                      true)
                ) {
                  const previousModelValue = this.getPreviousModelValue(model)
                  if (
                    (await this.formatDiffHistory(contentChangeEvent, editor, model, EOL),
                    (this.dontTriggerCppBecauseChangeIsFromCpp = false),
                    this
                      .pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
                      true || this.getCurrentSuggestion() !== undefined)
                  )
                    return
                  this.triggerCppIfLintErrorComesUp(contentChangeEvent, editor, model, EOL, 2e3, previousModelValue)
                  return
                }
                this.isAllowedCpp() &&
                  this.isCppEnabledForEditor(editor) &&
                  this.disableAndHideCopilotSuggestion(editor),
                  this.continueModelChangeListener(contentChangeEvent, editor, model, EOL)
              }
            }),
          ),
        ],
        r = mu.get(editor)
      r &&
        (disposables.push(
          this.cppTypeService.registerSuggestListener(editor, model, relativePath, r, () => {
            this.fireCppSuggestionDebounced(editor, CppIntent.LspSuggestions)
          }),
        ),
        disposables.push(this.cppTypeService.registerCancelListener(editor, model, relativePath, r))),
        this.modelListeners2EditorMap.has(relativePath) || this.modelListeners2EditorMap.set(relativePath, new Map())
      const modelListeners = this.modelListeners2EditorMap.get(relativePath),
        editorId = editor.getId()
      modelListeners?.has(editorId) || modelListeners?.set(editorId, []),
        modelListeners?.get(editorId)?.push(...disposables),
        this.getApplicationUserPersistentStorage().cppAutoImportEnabled &&
          modelListeners?.get(editorId)?.push(
            this.D(
              this.markerService.onMarkerChanged(async (changedUris) => {
                this.codeEditorService.getActiveCodeEditor()?.getId() === editor.getId() &&
                  changedUris.some((c) => c.toString() === model.uri.toString()) &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: editor,
                    uri: model.uri,
                    source: "onMarkerChanged",
                  })
              }),
            ),
          )
    }
    Wb(model) {
      return model.getValueLength() > MAX_FILE_SIZE_CHARS
    }
    isTextLengthTooLarge(model) {
      return this.Wb(model);
    }
    fireCppSuggestionDebounced(editor, intentSource) {
      if (!editor) return
      const model = editor.getModel(),
        uri = model?.uri
      if (!uri || this.isTextLengthTooLarge(model)) return
      const { requestIdsToCancel, ...restRequestOpts } = this.requestDebouncer.runRequest()
      this.R.forEach((streamRequest) => {
        requestIdsToCancel.includes(streamRequest.generationUUID) && streamRequest.abortController.abort()
      }),
        oa(`[Cpp] fireDebounced post-abort with source: ${intentSource}`)
      const selection = editor.getSelection()
      if (
        selection !== null &&
        !this.isFindFocused(editor) &&
        (selection.startLineNumber !== selection.endLineNumber || selection.startColumn !== selection.endColumn)
      ) {
        oa("skipping due to selection")
        return
      }
      this.fireCppSuggestionFromTrigger(uri, editor, intentSource, undefined, {
        ...restRequestOpts,
        modelVersion: model.getVersionId(),
        modelId: model.id,
        position: editor.getPosition() ?? undefined,
      })
    }
    async fireCppSuggestionDebouncedDiffHistory(contentChangeEvent, editor, intent, EOL) {
      if (!editor) return
      const model = editor.getModel(),
        uri = model?.uri
      if (!uri || this.isTextLengthTooLarge(model)) return
      const selectionRange = editor.getSelection()
      if (
        selectionRange !== null &&
        (selectionRange.startLineNumber !== selectionRange.endLineNumber || selectionRange.startColumn !== selectionRange.endColumn)
      )
        return
      const { requestIdsToCancel: requestIdsToCancel, ...restRequestOpts } = this.requestDebouncer.runRequest()
      this.R.forEach((h) => {
        requestIdsToCancel.includes(h.generationUUID) && h.abortController.abort()
      }),
        await this.formatDiffHistory(contentChangeEvent, editor, model, EOL),
        this.getCurrentSuggestion() === undefined &&
          this.fireCppSuggestionFromTrigger(uri, editor, intent, undefined, {
            ...restRequestOpts,
            modelVersion: model.getVersionId(),
            modelId: model.id,
            position: editor.getPosition() ?? undefined,
          })
    }
    async fireCppSuggestionFromTrigger(uri, editor, intentSource, overridePosition, requestOptions) {
      if (!this.isCppEnabled(editor)) {
        this.reallowCopilotIfWePreviousHidCopilotSuggestions()
        return
      }
      const model = editor.getModel()
      if (model === null || this.isTextLengthTooLarge(model)) return
      if (
        this.getCurrentSuggestion() !== undefined &&
        intentSource !== CppIntent.LinterErrors &&
        intentSource !== CppIntent.CursorPrediction &&
        intentSource !== CppIntent.LspSuggestions
      ) {
        GhostTextController.get(editor)?.update()
        return
      }
      let generationUUID
      try {
        if (
          (intentSource !== CppIntent.CursorPrediction &&
            this.getApplicationUserPersistentStorage().cppCachedTypeaheadEnabled !== true &&
            (this.R.forEach((streamRequest) => {
              streamRequest.source !== CppIntent.CursorPrediction && streamRequest.abortController.abort()
            }),
            (this.R = this.R.filter((streamRequest) => streamRequest.source === CppIntent.CursorPrediction))),
          this.R.length > this.Xb && this.fb)
        ) {
          const p = performance.now() + performance.timeOrigin
          oa(
            `[Cpp] stream debug info: Too many streams (${this.R.length}) streams (now: ${p})`,
            JSON.stringify(
              this.R.map((streamRequest) => ({
                uuid: streamRequest.generationUUID,
                source: streamRequest.source,
                startTime: streamRequest.startTime,
              })),
              null,
              2,
            ),
          ),
            this.aiAssertService.assert(
              this.R.length <= this.Xb,
              `The size of cppService this.streams is too big! ${this.R.length}`,
            )
        }
        for (; this.R.length >= this.Xb; )
          this.R.shift()?.abortController.abort()
        let abortController, startTimeOfCpp, modelVersion, modelId, position
        requestOptions !== undefined
          ? ((abortController = requestOptions.abortController),
            (generationUUID = requestOptions.generationUUID),
            (startTimeOfCpp = requestOptions.startTime),
            (modelVersion = requestOptions.modelVersion),
            (modelId = requestOptions.modelId),
            (position = requestOptions.position),
            this.R.push({ ...requestOptions, source: intentSource }))
          : ((generationUUID = rt()),
            (abortController = new AbortController()),
            (startTimeOfCpp = performance.now() + performance.timeOrigin),
            (modelVersion = model.getVersionId()),
            (modelId = model.id),
            (position = editor.getPosition() ?? undefined),
            this.R.push({
              startTime: startTimeOfCpp,
              generationUUID: generationUUID,
              abortController: abortController,
              source: intentSource,
              modelVersion: modelVersion,
              modelId: modelId,
              position: position,
            })),
          (this.latestGenerationUUID = generationUUID)
        let isAborted = false
        if (
          (abortController.signal.addEventListener("abort", () => {
            ;(isAborted = true), (this.R = this.R.filter((p) => p.generationUUID !== generationUUID))
          }),
          isAborted)
        )
          return
        await this.immediatelyFireCppFromTrigger(uri, editor, abortController, generationUUID, startTimeOfCpp, intentSource, {
          overridePosition: overridePosition,
        })
      } catch (error) {
        console.error("Cpp: error when triggering from source", intentSource, error, error?.stack),
          (this.R = this.R.filter((streamRequest) => streamRequest.generationUUID !== generationUUID))
      }
    }
    isCppEnabled(e) {
      return this.isAllowedCpp() && this.isCppEnabledForEditor(e)
    }
    async immediatelyFireCppFromTrigger(uri, editor, abortController, generationUUID, startOfCpp, intentSource, options) {
      if (
        this.reactiveStorageService.applicationUserPersistentStorage.oneTimeSettings
          .shouldDisableGithubCopilot === true
      )
        try {
          const copilotConfig = this.configurationService.getValue("github.copilot")
          copilotConfig !== null &&
            typeof copilotConfig == "object" &&
            copilotConfig.enable["*"] === true &&
            this.commandService.executeCommand("github.copilot.toggleCopilot")
        } finally {
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "oneTimeSettings",
            "shouldDisableGithubCopilot",
            false,
          )
        }
      this.disableAndHideCopilotSuggestion(editor)
      const model = editor.getModel()
      if (model === null || this.isTextLengthTooLarge(model)) return
      const modelValue = model.getValue(),
        modelVersion = model.getVersionId(),
        position = options?.overridePosition ?? editor.getPosition()
      if (position === null || modelValue === undefined) {
        oa("[Cpp] Bad Case: position or modelValue is undefined"),
          this.reallowCopilotIfWePreviousHidCopilotSuggestions()
        return
      }
      if (
        (this.usingFusedCursorPredictionModel() &&
          this.cursorPredictionService.isShowingCursorPrediction(editor) &&
          intentSource !== CppIntent.CursorPrediction &&
          intentSource !== CppIntent.LineChange) ||
        (!this.allowCppTriggerInComments(editor, position) && intentSource !== CppIntent.CursorPrediction)
      )
        return
      if (
        this.overlapsInlineDiff(uri, position.lineNumber, {
          onlyCheckCurrentlyGenerating: true,
        })
      ) {
        oa("[Cpp] Skipping because we are in an inline diff.")
        return
      }
      if (
        this.reactiveStorageService.nonPersistentStorage.cppState
          ?.shouldNotTriggerFromInlineDiffReject ??
        false
      ) {
        oa(
          "[Cpp] fireCppSuggestionFromTrigger: suppressing trigger because we are currently rejecting an inlineDiff",
        )
        return
      }
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          intent: intentSource,
          generationUUID: generationUUID,
        })
      });
      const d = performance.now(),
        { success: success } = await this.immediatelyFireCppWithSpecifiedPosition({
          uri: uri,
          editor: editor,
          position: position,
          abortController: abortController,
          generationUUID: generationUUID,
          modelValue: modelValue,
          modelVersion: modelVersion,
          context: { startOfCpp: startOfCpp },
          source: intentSource,
        })
      success
        ? this.disableAndHideCopilotSuggestion(editor)
        : (this.latestGenerationUUID === generationUUID &&
            this.reallowCopilotIfWePreviousHidCopilotSuggestions(),
          (this.R = this.R.filter((streamRequest) => streamRequest.generationUUID !== generationUUID))),
        this.metricsService.distribution({
          stat: "cppclient.immediatelyFire.getExpandedRange",
          value: d - startOfCpp,
        })
    }
    allowCppTriggerInComments(e, t) {
      if (
        this.reactiveStorageService.applicationUserPersistentStorage.cppTriggerInComments === false
      ) {
        const s = e.getModel()
        if (s === null) return true
        const n = s.getValue(),
          r = t ?? e.getPosition()
        if (r === null || n === undefined)
          return oa("[Cpp] Bad Case: position or modelValue is undefined"), true
        if (s.getLineContent(r.lineNumber).trim() === "") {
          let a = r.lineNumber - 1,
            l = r.lineNumber + 1
          for (; a > 0 && s.getLineContent(a).trim() === ""; ) a--
          for (; l <= s.getLineCount() && s.getLineContent(l).trim() === ""; )
            l++
          const c =
              a > 0
                ? s.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
                    new Me(a, s.getLineMaxColumn(a)),
                  )
                : null,
            h =
              l <= s.getLineCount()
                ? s.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
                    new Me(l, 1),
                  )
                : null
          if (c === 1 && h === 1)
            return (
              oa("[Cpp] suppressing trigger because we are in a comment"), false
            )
        } else if (
          s.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(r) === 1
        )
          return oa("[Cpp] suppressing trigger because we are in a comment"), false
      }
      return true
    }
    usingFusedCursorPredictionModel() {
      return !!this.getApplicationUserPersistentStorage()?.cppConfig?.isFusedCursorPredictionModel
    }
    overlapsInlineDiff(e, t, { onlyCheckCurrentlyGenerating: s }) {
      const n = this.reactiveStorageService.nonPersistentStorage.inlineDiffs
      if (n === undefined) return false
      const r = this.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.map(
        (o) => o.generationUUID,
      )
      return n.some((o) => {
        if (s && !r.includes(o.generationUUID)) return false
        const a =
            t >= o.currentRange.startLineNumber &&
            t <= o.currentRange.endLineNumberExclusive,
          l = extUri.isEqual(o.uri, e) || e.fsPath === o.uri.fsPath
        return a && l
      })
    }
    getModelValueAfterChange(e, t, s) {
      try {
        const n = new $fo("sample-path", e.getValue()),
          r = new qdt(
            t.startLineNumber,
            t.startColumn,
            t.endLineNumberInclusive,
            t.endColumn,
          ).asZeroIndexed()
        return (
          n.applyChange(new Ffo(s, r, "sample-path", new Date())), n.content
        )
      } catch (n) {
        return console.error("Cpp: error", n), "<ERRORED>"
      }
    }
    updateRecentDiagnostics(uri, position) {
      const allMarkers = this.markerService.read({ resource: uri }) // 1. 获取当前文件的所有诊断标记（错误/警告等）
      let linterErrorContext,
        filteredErrors = this.filterLinterErrors(allMarkers).map((marker) => ({ // 2. 过滤出Linter错误并格式化
          message: marker.message,
          relatedInformation: marker.relatedInformation ?? [],
          source: marker.source,
          severity: normalizeSeverity(marker.severity),
          uri: uri.toString(),
          range: {
            startPosition: { line: marker.startLineNumber, column: marker.startColumn },
            endPosition: { line: marker.endLineNumber, column: marker.endColumn },
          },
        }))
      filteredErrors.length > 0 && // 3. 如果有错误，去重后创建错误上下文
        ((filteredErrors = filteredErrors.filter( // 去重：相同位置和消息的错误只保留一个
          (error, index, array) =>
            index ===
            array.findIndex(
              (item) =>
                item.range.startPosition.line === error.range.startPosition.line &&
                item.range.startPosition.column === error.range.startPosition.column &&
                item.range.endPosition.line === error.range.endPosition.line &&
                item.range.endPosition.column === error.range.endPosition.column &&
                item.message === error.message,
            ),
        )),
        (linterErrorContext = new LinterErrors({
          relativeWorkspacePath: this.contextService.asRelativePath(uri),
          errors: filteredErrors,
          fileContents: undefined, // 不包含文件内容
        })))
      const _linterErrorContext = linterErrorContext
      _linterErrorContext !== undefined &&
        _linterErrorContext.errors.length > 0 &&
        this.J.push( // 4. 更新错误缓存（this.J -> recentErrorCache）
          ..._linterErrorContext.errors
            .filter((error) => error.range !== undefined)
            .map((error) => ({
              errors: [
                {
                  ...error,
                  source: "",
                  uri: uri.toString(),
                  relatedInformation: error.relatedInformation,
                  severity: error.severity ?? uI.UNSPECIFIED,
                  range: {
                    startPosition: {
                      line: error.range?.startPosition?.line || 0,
                      column: error.range?.startPosition?.column || 0,
                    },
                    endPosition: {
                      line: error.range?.endPosition?.line || 0,
                      column: error.range?.endPosition?.column || 0,
                    },
                  },
                },
              ],
              timestamp: Date.now(),
            })),
        ),
        this.J.sort((a, b) => b.timestamp - a.timestamp), // 按时间戳降序排序
        (this.J = this.J.filter( // 去重缓存
          (entry, index, array) =>
            index ===
            array.findIndex(
              (item) =>
                item.errors[0].range.startPosition.line ===
                  entry.errors[0].range.startPosition.line &&
                item.errors[0].range.startPosition.column ===
                  entry.errors[0].range.startPosition.column &&
                item.errors[0].range.endPosition.line ===
                  entry.errors[0].range.endPosition.line &&
                item.errors[0].range.endPosition.column ===
                  entry.errors[0].range.endPosition.column &&
                item.errors[0].message === entry.errors[0].message &&
                item.errors[0].uri === entry.errors[0].uri,
            ),
        ))
      const currentMarkersFormatted = allMarkers.map((marker) => ({ // 5. 清理缓存：移除已修复的错误和过期条目
        message: marker.message,
        relatedInformation: formatRelatedInformation(marker.relatedInformation),
        source: marker.source,
        uri: uri.toString(),
        range: {
          startPosition: { line: marker.startLineNumber, column: marker.startColumn },
          endPosition: { line: marker.endLineNumber, column: marker.endColumn },
        },
      }))
      ;(this.J = this.J.filter((cacheEntry) => // 移除已修复的错误（不在当前诊断结果中的）
        currentMarkersFormatted.some(
          (marker) =>
            marker.message === cacheEntry.errors[0].message &&
            marker.uri === cacheEntry.errors[0].uri &&
            marker.range.startPosition.line ===
              cacheEntry.errors[0].range.startPosition.line &&
            marker.range.startPosition.column ===
              cacheEntry.errors[0].range.startPosition.column &&
            marker.range.endPosition.line === cacheEntry.errors[0].range.endPosition.line &&
            marker.range.endPosition.column === cacheEntry.errors[0].range.endPosition.column,
        ),
      )),
        (this.J = this.J.filter((cacheEntry) => Date.now() - cacheEntry.timestamp < 1e3 * 20)), // 移除20秒前的旧记录
        (this.J = this.J.slice(0, Math.min(this.J.length, 10))) // 限制缓存大小（最多10条）
    }
    getRecentAndNearLocationLinterErrors(uri, t) {
      // 1. 获取当前文件的所有标记（包含错误、警告等）
      const allMarkers = this.markerService.read({ resource: uri })
      let resultContext
      const linterErrors = this.filterLinterErrors(allMarkers) // 2. 过滤出Linter错误（排除警告等其他类型）
      // 3. 处理错误列表：如果指定了光标位置，将光标处的错误置顶
      let processedErrors = (t !== undefined ? [t, ...linterErrors.filter((linterError) => linterError !== t)] : linterErrors)
        .map((linterError) => ({
          message: linterError.message,
          relatedInformation: formatRelatedInformation(linterError.relatedInformation),
          source: linterError.source,
          range: {
            startPosition: { line: linterError.startLineNumber, column: linterError.startColumn },
            endPosition: { line: linterError.endLineNumber, column: linterError.endColumn },
          },
          severity: normalizeSeverity(linterError.severity),
          uri: uri.toString(),
        }))
        .slice(0, MAX_CURRENT_ERRORS)
      const recentThreshold = Date.now() - 2e4 // 4. 添加最近20秒内的历史错误（来自缓存）
      return (
        processedErrors.push(
          ...this.J.filter((recentDiagnostic) => recentDiagnostic.timestamp > recentThreshold)
            .map((recentDiagnostic) => recentDiagnostic.errors)
            .flat()
            .slice(0, MAX_HISTORIC_ERRORS),
        ),
        // 5. 去重：确保相同位置和消息的错误只出现一次
        (processedErrors = processedErrors.filter(
          (error, index, array) =>
            index ===
            array.findIndex(
              (item) =>
                item.range.startPosition.line === error.range.startPosition.line &&
                item.range.startPosition.column === error.range.startPosition.column &&
                item.range.endPosition.line === error.range.endPosition.line &&
                item.range.endPosition.column === error.range.endPosition.column &&
                item.message === error.message &&
                item.uri === error.uri,
            ),
        )),
        // 6. 如果有错误，构建上下文对象
        processedErrors.length > 0 &&
          (resultContext = new LinterErrors({
            relativeWorkspacePath: this.contextService.asRelativePath(uri),
            errors: processedErrors,
            fileContents: undefined,
          })),
        resultContext
      )
    }
    showNearLocationLintErrorsToImportPredictionService({
      editor,
      uri,
      source: source,
    }) {
      const position = editor.getPosition()
      if (position === null) return
      const markers = this.markerService.read({ resource: uri })
      let allMarkers = this.filterLinterErrors(markers, MarkerSeverity.Warning).filter(
        (marker) => Math.abs(marker.startLineNumber - position.lineNumber) <= MAX_DIAGNOSTIC_DISTANCE,
      )
      this.importPredictionService.handleUpdatedLintErrors({
        openEditor: editor,
        uri: uri,
        position: position,
        allMarkers: allMarkers,
        source: source,
      })
    }
    overrideDiffHistory(e) {
      this.Yb = e
    }
    async getGlobalDiffTrajectoriesAllowEvalOverride() {
      return false
        ? this.Yb
          ? (console.warn("NOTE: Using overridden diff history"), this.Yb)
          : this.getGlobalDiffTrajectories()
        : this.getGlobalDiffTrajectories()
    }
    async getGlobalDiffTrajectories() {
      return await this.everythingProviderService.onlyLocalProvider?.runCommand(
        EditHistoryDiffFormatter.CompileGlobalDiffTrajectories,
        {},
      )
    }
    debugPrintDiffTrajectories(e) {
      oa("[--------------------------------"),
        oa("[Diff Trajectories]"),
        e?.forEach((t) => {
          oa(`File: ${t.fileName}`),
            t.diffHistory.forEach((s) => {
              oa(s)
            }),
            oa("---")
        })
    }
    async getPartialCppRequest({
      editor: editor,
      uri: uri,
      modelValue: modelValue,
      modelVersion: modelVersion,
      position: position,
      source: intentSource,
      shouldRelyOnFileSyncForFile: shouldRelyOnFileSyncForFile,
    }) {
      const nearbyLinterErrors = this.getRecentAndNearLocationLinterErrors(uri),
        model = editor.getModel()
      if (model === null) throw new Error("Model is null")
      const eol = model.getEOL()
      let currentFileInfo
      if (
        (uri.scheme === "vscode-notebook-cell" && position !== null
          ? (currentFileInfo = await this.fastCurrentFileInfoForNotebooks(model, editor, position, shouldRelyOnFileSyncForFile))
          : (currentFileInfo = await this.fastCurrentFileInfoDoesNotWorkForNotebooks(
              uri,
              modelValue,
              position,
              shouldRelyOnFileSyncForFile,
              modelVersion,
            )),
        currentFileInfo !== undefined && currentFileInfo.cursorPosition !== undefined)
      ) {
        const truncatedContent = !shouldRelyOnFileSyncForFile
          ? this.truncateCurrentFile(currentFileInfo?.contents ?? "", currentFileInfo.cursorPosition.line, eol, model)
          : currentFileInfo?.contents
        currentFileInfo.contents = truncatedContent ?? ""
      }
      if (this.cppProvider === undefined) throw new Error("Diffing provider is undefined")
      let diffContext
      const diffHistoryStartTime = performance.now()
      let fileDiffHistories
      const cachedFleDiffHistories = this.formattedDiffCache.get(this.getModelKey(model))
      if (cachedFleDiffHistories === undefined) {
        const globalDiffTrajectories = await this.getGlobalDiffTrajectories()
        if (globalDiffTrajectories === undefined)
          throw new Error(
            "Compile Diff Trajectories not registered in extension host",
          )
        ;(fileDiffHistories = globalDiffTrajectories), this.formattedDiffCache.set(this.getModelKey(model), fileDiffHistories)
      } else fileDiffHistories = cachedFleDiffHistories
      const relativePath = this.contextService.asRelativePath(model.uri),
        currentFileDiffHistories = fileDiffHistories.find((item) => item.fileName === relativePath)
      if (currentFileDiffHistories) {
        const latestDiff = currentFileDiffHistories.diffHistory.at(-1)
      }
      diffContext = {
        fileDiffHistories: fileDiffHistories,
        diffHistory: [],
        blockDiffPatches: [],
        mergedDiffHistories: [],
      }
      const diffHistoryEndTime = performance.now()
      this.metricsService.distribution({
        stat: "cppclient.immediatelyFire.diffHistory",
        value: diffHistoryEndTime - diffHistoryStartTime,
      })
      const additionalFilesStartTime = performance.now(),
        additionalFiles =
          this.getApplicationUserPersistentStorage().cppConfig?.enableRvfTracking === true
            ? await this.getAdditionalContextFiles(editor, uri)
            : [],
        additionalFilesEndTime = performance.now()
      this.metricsService.distribution({
        stat: "cppclient.immediatelyFire.additionalFiles",
        value: additionalFilesEndTime - additionalFilesStartTime,
      })
      const controlToken =
        intentSource === CppIntent.ManualTrigger
          ? StreamCppRequestControlToken.OP
          : (this.reactiveStorageService.applicationUserPersistentStorage.cppControlToken ?? undefined)
      return {
        ...diffContext,
        linterErrors: nearbyLinterErrors,
        currentFile: currentFileInfo,
        enableMoreContext: this.getApplicationUserPersistentStorage().cppExtraContextEnabled,
        additionalFiles: additionalFiles,
        controlToken: controlToken,
        cppIntentInfo: { source: intentSource },
        clientTime: Date.now(),
        clientTimezoneOffset: new Date().getTimezoneOffset(),
      }
    }
    async getAdditionalContextFiles(editor, uri) {
      return await this.$b(editor,uri);
    }
    async $b(editor, uri) {
      try {
        const visibleEditorPanes = this.editorService.visibleEditorPanes,
          contextFiles = [],
          currentFileRelativePath = this.contextService.asRelativePath(uri),
          shouldFetchFileContent = this.getApplicationUserPersistentStorage().cppConfig?.shouldFetchRvfText === true,
          getVisibleContent = (editorModel, visibleRanges) =>
            visibleRanges.map((range) => ({
              startLineNumber: range.startLineNumber,
              startColumn: range.startColumn,
              endLineNumber: range.endLineNumber,
              endColumn: range.endColumn,
              content:
                editorModel !== null
                  ? editorModel
                      .getValueInRange(range)
                      .split(editorModel.getEOL())
                      .map((line) =>
                        line.length > 512 ? line.substring(0, 512) + "..." : line,
                      ).join(`
  `)
                  : "",
            }))
        for (const visibleEditorPane of visibleEditorPanes) { // 1. 收集当前可见编辑器内容
          const editorControl = visibleEditorPane.getControl()
          if (editorControl !== undefined && Pn(editorControl)) {
            if (editorControl.getId() === editor.getId()) continue
            const editorModel = editorControl.getModel()
            if (editorModel === null) continue
            const visibleContent = getVisibleContent(editorModel, editorControl.getVisibleRanges())
            contextFiles.push({
              relativeWorkspacePath: this.contextService.asRelativePath(editorModel.uri),
              visibleRangeContent: visibleContent.map((m) => m.content),
              startLineNumberOneIndexed: visibleContent.map((m) => m.startLineNumber),
              visibleRanges: visibleContent.map((m) => ({
                startLineNumber: m.startLineNumber,
                endLineNumberInclusive: m.endLineNumber,
              })),
              isOpen: true,
              lastViewedAt: undefined,
            })
          }
        }
        const filesToRemove = [], // 2. 收集最近查看的文件内容
          modelReferences = new DisposableStore()
        try {
          for (const [fileUri, fileInfo] of this.recentlyViewedFilesCache.entries())
            if (uri !== fileUri)
              try {
                const relativePath = this.contextService.asRelativePath(fileUri)
                if (
                  relativePath === undefined ||
                  contextFiles.find((file) => file.relativeWorkspacePath === relativePath) ||
                  currentFileRelativePath === relativePath
                )
                  continue
                if (fileInfo.lastViewedAt < Date.now() - FIFTEEN_MINUTES_MS) filesToRemove.push(fileUri)
                else if (this.textModelService.canHandleResource(fileUri)) {
                  let fileModel = null
                  if (shouldFetchFileContent) {
                    const modelRef = await this.textModelService.createModelReference(fileUri)
                    if (
                      (modelReferences.add(modelRef), (fileModel = modelRef.object.textEditorModel), fileModel === undefined)
                    )
                      continue
                    if (fileModel.getValueLength() > MAX_FILE_SIZE_CHARS) {
                      filesToRemove.push(fileUri)
                      continue
                    }
                  }
                  const visibleContent = getVisibleContent(fileModel, fileInfo.visibleRanges)
                  contextFiles.push({
                    relativeWorkspacePath: relativePath,
                    isOpen: false,
                    visibleRangeContent: visibleContent.map((b) => b.content),
                    startLineNumberOneIndexed: visibleContent.map((b) => b.startLineNumber),
                    visibleRanges: visibleContent.map((b) => ({
                      startLineNumber: b.startLineNumber,
                      endLineNumberInclusive: b.endLineNumber,
                    })),
                    lastViewedAt: fileInfo.lastViewedAt,
                  })
                }
              } catch (error) {
                zdt(
                  `[Cpp] Additional file info: error in recentlyViewedFileURI error: ${error} ${error.stack}`,
                ),
                  filesToRemove.push(fileUri)
                continue
              }
        } finally {
          modelReferences.dispose()
        }
        for (const fileUri of filesToRemove) this.recentlyViewedFilesCache.delete(fileUri)
        return contextFiles.sort((a, b) =>
          a.isOpen !== b.isOpen
            ? a.isOpen
              ? 1
              : -1
            : a.lastViewedAt === undefined || b.lastViewedAt === undefined
              ? 0
              : a.lastViewedAt - b.lastViewedAt,
        )
      } catch (error) {
        return (
          zdt(
            `[Cpp] Bad Case: Error in getAdditionalFilesInfo: ${error} stack: ${error.stack}`,
          ),
          []
        )
      }
    }
    getWorkspaceId() {
      let e = this.reactiveStorageService.workspaceUserPersistentStorage.uniqueCppWorkspaceId
      return (
        e === undefined &&
          ((e =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)),
          this.reactiveStorageService.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", e)),
        `${e}-${Tgo}`
      )
    }
    isReferenceFocused(e) {
      if (!this.reactiveStorageService.applicationUserPersistentStorage.cppInPeek) return false
      const t = this.codeEditorService.getActiveCodeEditor()
      if (t === null) return false
      const s = mR.get(t)?.getWidget()
      return s !== undefined && s.hasFocus() && s.getPreviewEditor() === e
    }
    isFindActive(e) {
      if (
        this.reactiveStorageService.applicationUserPersistentStorage.cppInCmdF !== true ||
        e === undefined
      )
        return false
      const t = fm.get(e)
      return t instanceof gle && t.isActive()
    }
    isFindFocused(e) {
      if (!this.reactiveStorageService.applicationUserPersistentStorage.cppInCmdF || e === undefined)
        return false
      const t = fm.get(e)
      if (t === null) return false
      try {
        if (!t.isFindInputFocused()) return false
      } catch {
        return false
      }
      const s = e.getSelection()
      return s !== null && !s.isEmpty()
    }
    ac() {
      if (!this.reactiveStorageService.applicationUserPersistentStorage.cppInCmdF) return
      const e = this.codeEditorService.getActiveCodeEditor()
      if (e !== null && this.isFindActive(e)) {
        const t = fm.get(e)
        t instanceof gle && t.focusFindInputWithoutSelecting()
      }
    }
    isProblemFocused(e) {
      if (!this.reactiveStorageService.applicationUserPersistentStorage.cppInPeek || !e) return false
      const t = this.codeEditorService.getActiveCodeEditor()
      return e !== t
        ? false
        : (this.viewsService.getActiveViewWithId(xr.MARKERS_VIEW_ID)?.isFocused() ?? false)
    }
    isTextFocusedOrSimilarlyFocused(e) {
      return e
        ? e.hasTextFocus() ||
            this.isReferenceFocused(e) ||
            this.isProblemFocused(e) ||
            this.isFindFocused(e)
        : false
    }
    getFocusedCodeEditor() {
      const e = this.codeEditorService.getActiveCodeEditor()
      return e?.hasTextFocus() === true
        ? e
        : (this.codeEditorService
            .listCodeEditors()
            .find((t) => this.isTextFocusedOrSimilarlyFocused(t)) ?? e)
    }
    getNotebookCellInfo(e, t, s) {
      if (!e.uri.scheme.startsWith("vscode-notebook-cell")) return null
      const n = Gr.parse(e.uri),
        r = this.INotebookEditorWidgetService.getNotebookEditorByCellEditorId(t.getId())
      if (!n || !r)
        return (
          oa("[Cpp] Bad Case: cellUri or notebookEditor is undefined"), null
        )
      const o = r.getCellByHandle(n.handle)
      if (!o) return oa("[Cpp] Bad Case: cell is undefined"), null
      const l = r?.textModel?.cells?.map((p) => p.getValue()),
        c = r.getCellsBefore(o),
        u = r.getCellsAfter(o)?.map((p) => p.model.getValue()),
        d = c?.map((p) => p.model.getValue())
      return d === undefined
        ? (oa("[Cpp] Bad Case: prevCellValues is undefined"), null)
        : !l || !d
          ? (oa("[Cpp] Bad Case: cellValues or prevCellValues is undefined"),
            null)
          : {
              numLinesAddedBefore:
                d.length === 0 ? 0 : d.join(s).split(s).length,
              cellValues: l,
              prevCellValues: d,
              cell: o,
              afterCellValues: u,
            }
    }
    getModelName() {
      return this.getApplicationUserPersistentStorage().cppModel !== "" ? this.getApplicationUserPersistentStorage().cppModel : undefined
    }
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
      if (this.cppProvider === undefined)
        return (
          oa("[Cpp] Bad Case: diffingProvider is undefined"), { success: false }
        )
      this.fastPeriodicallyReloadCppConfig()
      const shouldRelyOnFileSync =
          (await this.everythingProviderService.onlyLocalProvider?.runCommand(
            GB.ShouldRelyOnFileSyncForFile,
            {
              relativeWorkspacePath: this.contextService.asRelativePath(uri),
              modelVersion: modelVersion,
            },
          )) ?? false,
        cppConfig = this.getApplicationUserPersistentStorage().cppConfig
      if (
        (!shouldRelyOnFileSync || !cppConfig?.enableFilesyncDebounceSkipping) &&
        (await this.requestDebouncer.shouldDebounce(generationUUID))
      )
        return { success: false }
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
          { success: false }
        )
      }
      const model = editor.getModel()
      if (model === null)
        return oa("[Cpp] Bad Case: model is null"), { success: false }
      let workspaceId = this.reactiveStorageService.workspaceUserPersistentStorage.uniqueCppWorkspaceId
      workspaceId === undefined &&
        ((workspaceId =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)),
        this.reactiveStorageService.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", workspaceId)),
        source !== CppIntent.CursorPrediction &&
          !this.cursorPredictionService.onlyTriggerOnCppAccept() &&
          this.cursorPredictionService.getAndShowNextPrediction({
            editor: editor,
            triggerCppCallback: this.fireCppSuggestionFromTrigger.bind(this),
            getLinterErrors:
              this.getRecentAndNearLocationLinterErrors.bind(this),
            source: QN.ALWAYS_ON,
          })
      const modelVersionId = model.getVersionId(),
        modelSnapshot = Ycr(model)
      abortController.signal.addEventListener("abort", () => {
        this.cppProvider?.cancelCpp(generationUUID)
      }),
        this.X !== undefined &&
          this.metricsService.distribution({
            stat: "cppclient.beforeStreamCpp",
            value: performance.now() - this.X,
          }),
        (this.y = generationUUID)
      const relevantSuggestions = this.cppTypeService.getRelevantSuggestions(model, this.contextService.asRelativePath(model.uri))
      relevantSuggestions.suggestions.length > 0 &&
        (oa("Recording event...."),
        this.cppEventLoggerService.recordLspSuggestionEvent(
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
              parameterHints: this.cppTypeService.getRelevantParameterHints(editor),
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
        await this.cppProvider.streamCpp(
          VSBuffer.wrap(
            new StreamCppRequest({
              ...partialCppRequest,
              modelName: this.getModelName(),
              diffHistoryKeys: [],
              contextItems: [],
              parameterHints: this.cppTypeService.getRelevantParameterHints(editor),
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
      const cppProvider = this.cppProvider,
        cppStream = this.streamCpp(abortController, cppProvider, generationUUID)
      if (cppStream == null)
        return (
          oa("[Cpp] Bad Case: cppStream is null or undefined"), { success: false }
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
          if (abortController.signal.aborted) return { success: false }
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
      if (textToReplace === undefined || rangeToReplace === undefined)
        return (
          zdt("[Cpp] Bad Case: did not find rewriteRange from stream"),
          { success: false }
        )
      const isFusedCursorPredictionModel = modelInfo
          ? modelInfo.isFusedCursorPredictionModel
          : this.usingFusedCursorPredictionModel(),
        predictionId = rt()
      if (((this.cb = predictionId), isFusedCursorPredictionModel)) {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            isFusedCursorPredictionModel: true,
            generationUUID: generationUUID,
          }),
        });
        const predictionStream = handleStreamWithPredictions(streamIterator, textToReplace, (position.lineNumber ?? 1) - rangeToReplace.startLineNumber),
          { firstChunk: ke, fullText: Ae } = await predictionStream.text
        ;(firstChunkValue = ke), (fullText = Ae), (fusedCursorPrediction = predictionStream.fusedCursorPrediction)
      } else {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            isFusedCursorPredictionModel: false,
            generationUUID: generationUUID,
          }),
        });
        this.getApplicationUserPersistentStorage().chunkedStreamingEnabledV2 === true
          ? ([firstChunkValue, fullText] = await handleChunkedStream(streamIterator, textToReplace, (position.lineNumber ?? 1) - rangeToReplace.startLineNumber))
          : (firstChunkValue = await consumeRemainingStream(streamIterator))
      }
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

      fullText && fullText.then((text) => {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            fullText: text,
            generationUUID: generationUUID,
          }),
        });
      })

      fusedCursorPrediction && fusedCursorPrediction.then((text) => {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            fusedCursorPrediction: text,
            predictionId,
            generationUUID: generationUUID,
          }),
        });
      })

      if (abortController.signal.aborted) return { success: false }
      if (
        ((this.mostRecentNonAbortedRequestId = generationUUID),
        this.cppEventLoggerService.recordCppTriggerEvent(
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
          true)
      )
        return oa("[Cpp] Bad Case: triggering is paused"), { success: false }
      const eol = model.getEOL(),
        notebookInfo = this.getNotebookCellInfo(model, editor, eol),
        isValidCase = await this.cppBadHeuristics.isValidCppCase({
          model: model,
          modelOutputText: firstChunkValue,
          startingRange: new Hu(range),
          notebookInfo: notebookInfo,
          eol: eol,
        }),
        recordFinishedGeneration = (diffText) => {
          abortController.signal.aborted ||
            this.cppEventLoggerService.recordFinishedCppGeneration(
              model,
              this.createRecoverableData({
                requestId: generationUUID,
                diffText: diffText,
                startingRange: range,
                selection: range,
              }),
            )
        }
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          isValidCase4firstChunkValue: isValidCase,
          generationUUID: generationUUID,
        }),
      });
      if (!isValidCase.valid) {
        const cursorPredictionResult = await fusedCursorPrediction
        return predictionId !== this.cb
          ? { success: false }
          : (cursorPredictionResult !== null &&
              (this.lastCursorMovementIsCursorPrediction
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
                      source !== CppIntent.CursorPrediction
                        ? ((fetch('http://localhost:3000', {
                          method: 'POST',
                          body: JSON.stringify({
                            invokeReason: 'fusedCursorPrediction resolved & isValidCase is false',
                            invokePlace: 'before this.displayFusedCursorPrediction, about to show prediction icon',
                            isValidCase4firstChunkValue: isValidCase,
                            fusedCursorPrediction: cursorPredictionResult,
                            predictionId,
                            generationUUID: generationUUID,
                          }),
                        })), (await this.displayFusedCursorPrediction({
                          editor: editor,
                          model: model,
                          oldText: "",
                          newText: "",
                          fusedCursorPrediction: cursorPredictionResult,
                          _predictionId_for_log: predictionId,
                        })))
                        : oa(
                            "[Cpp] Not displaying fused NCP because the source was cursor prediction",
                          ))),
            { success: false })
      }
      ;(firstChunkValue = isValidCase.modelOutputText),
        fusedCursorPrediction?.then((prediction) => {
          fetch('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify({
              invokeReason: 'fusedCursorPrediction resolved & isValidCase is true',
              invokePlace: 'before this.uponFusedCursorPredictionReady',
              isValidCase4firstChunkValue: isValidCase,
              fusedCursorPrediction: prediction,
              predictionId,
              generationUUID: generationUUID,
            }),
          });
          return (this.uponFusedCursorPredictionReady(predictionId, prediction), true)
        })
      const suggestion = this.cppSuggestionService.createUnseenSuggestion({
        model: modelSnapshot,
        diffText: firstChunkValue,
        startingRange: range,
        eol: eol,
        requestId: generationUUID,
        modelVersionWhenInvoked: modelVersionId,
        selection: range,
        source: source,
        suggestionTriggerTime: context.startOfCpp,
        fusedCursorPredictionId: fullText === undefined ? predictionId : undefined,
      })
      if (suggestion === undefined)
        return oa("[Cpp] Bad Case: cppSuggestion is undefined"), { success: false }
      const endTime = performance.now()
      this.metricsService.distribution({ stat: "cppclient.immediatelyFire", value: endTime - startTime })
      let isSuggestionDisplayed
      return (
        this.y !== generationUUID ||
        this.getCurrentSuggestion() !== undefined ||
        model.getVersionId() !== modelVersionId ||
        (this.getApplicationUserPersistentStorage().cppAutoImportEnabled && this.importPredictionService.isShowingImportSuggestion())
          ? ((isSuggestionDisplayed = true),
            this.suggestionManager.addSuggestion({ ...suggestion, abortController: abortController }, model, editor))
          : (this.Vb(suggestion), (isSuggestionDisplayed = this.displayCppSuggestion(editor, model, suggestion))),
        fullText !== undefined && isSuggestionDisplayed && !abortController.signal.aborted
          ? fullText.then((fullTextResult) => {
              abortController.signal.aborted ||
                (recordFinishedGeneration(fullTextResult),
                fetch('http://localhost:3000', {
                  method: 'POST',
                  body: JSON.stringify({
                    invokeReason: 'fullText resolved & isValidCase is true',
                    invokePlace: 'before this.generateFollowupSuggestion',
                    isValidCase4firstChunkValue: isValidCase,
                    fullText: fullTextResult,
                    generationUUID: generationUUID,
                  }),
                }),
                this.generateFollowupSuggestion(editor, fullTextResult, model, suggestion, position, eol, predictionId),
                (this.R = this.R.filter((ke) => ke.generationUUID !== generationUUID)))
            })
          : fullText === undefined &&
            (recordFinishedGeneration(firstChunkValue), (this.R = this.R.filter((Ee) => Ee.generationUUID !== generationUUID))),
        { success: isSuggestionDisplayed }
      )
    }
    isFusedCursorPredictionTooCloseToCursor(e, t) {
      return Math.abs(e.lineNumberOneIndexed - t.lineNumber) < 5
    }
    isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(e) {
      return this.bb.some(
        (t) =>
          Math.abs(t.position.lineNumber - e.lineNumberOneIndexed) < 5 &&
          t.uri.path.includes(e.relativePath),
      )
    }
    generateFollowupSuggestion(editor, fullTextResult, model, suggestion, position, eol, predictionId) {
      const modelCopy = Qcr(model, { range: TKn(suggestion.range), text: suggestion.replaceText })
      let currentRange = suggestion.startingSuggestionRange
      const adjustRange = () => {
          if (
            currentRange.endLineNumberInclusive >= modelCopy.getLineCount() &&
            position.lineNumber === currentRange.endLineNumberInclusive
          ) {
            const lastLineNumber = modelCopy.getLineCount(),
              lastLineText = modelCopy.getValueInRange({
                startLineNumber: lastLineNumber,
                startColumn: 1,
                endLineNumber: lastLineNumber + 1,
                endColumn: 1,
              })
            return new Hu({
              ...currentRange,
              endLineNumberInclusive: lastLineNumber,
              endColumn: lastLineText.length,
            })
          }
          return currentRange
        },
        currentSuggestion = this.getCurrentSuggestion()
      if (
        currentSuggestion === undefined &&
        this.u?.requestId === suggestion.requestId &&
        this.u?.modelVersion === model.getVersionId() &&
        this.u?.modelId === model.id
      ) {
        currentRange = adjustRange()
        const newSuggestion = this.cppSuggestionService.createUnseenSuggestion({
          model: modelCopy,
          diffText: fullTextResult,
          startingRange: currentRange,
          eol: eol,
          requestId: suggestion.requestId,
          selection: suggestion.selection,
          source: suggestion.source,
          modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
          suggestionTriggerTime: suggestion.suggestionTriggerTime,
          fusedCursorPredictionId: predictionId,
        })
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            invokeReason: 'fullText resolved & isValidCase is true && currentSuggestion is undefined && need to create newSuggestion according fullText',
            invokePlace: 'this.generateFollowupSuggestion',
            newSuggestion,
            generationUUID: suggestion.requestId,
          }),
        });
        if (newSuggestion === undefined) return
        this.displayCppSuggestion(editor, model, newSuggestion)
      } else if (currentSuggestion?.uniqueId !== suggestion.uniqueId)
        if (this.suggestionManager.getMatchingSuggestion(suggestion.uniqueId) !== undefined) {
          const newSuggestion = this.cppSuggestionService.createUnseenSuggestion({
            model: model,
            diffText: fullTextResult,
            source: suggestion.source,
            eol: eol,
            requestId: suggestion.requestId,
            selection: suggestion.selection,
            startingRange: currentRange,
            modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
            suggestionTriggerTime: suggestion.suggestionTriggerTime,
            fusedCursorPredictionId: predictionId,
          });
          fetch('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify({
              invokeReason: 'fullText resolved & isValidCase is true && currentSuggestion uniqueId is different && need to create newSuggestion according fullText',
              invokePlace: 'this.generateFollowupSuggestion',
              newSuggestion,
              generationUUID: suggestion.requestId,
            }),
          });
          if (newSuggestion === undefined) {
            predictionId !== undefined &&
              this.db.has(predictionId) &&
              this.displayFusedCursorPredictionIfAvailable(
                editor,
                model,
                predictionId,
                suggestion.replaceText ?? "",
                fullTextResult ?? "",
              )
            return
          }
          this.suggestionManager.replaceSuggestionOnChunkedFollowup(suggestion.uniqueId, newSuggestion)
        } else return
      else {
        currentRange = adjustRange()
        const newSuggestion = this.cppSuggestionService.createUnseenSuggestion({
          model: modelCopy,
          diffText: fullTextResult,
          startingRange: currentRange,
          eol: eol,
          requestId: suggestion.requestId,
          selection: suggestion.selection,
          source: suggestion.source,
          modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
          suggestionTriggerTime: suggestion.suggestionTriggerTime,
          fusedCursorPredictionId: predictionId,
        });
        fetch('http://localhost:3000', {
          method: 'POST',
          body: JSON.stringify({
            invokeReason: 'fullText resolved & isValidCase is true && remaining reason && need to create newSuggestion according fullText, will attach onAcceptDisplayId to currentSuggestion if newSuggestion is not undefined',
            invokePlace: 'this.generateFollowupSuggestion',
            newSuggestion,
            generationUUID: suggestion.requestId,
          }),
        });
        if (newSuggestion === undefined) {
          this.createOrUpdateSuggestionState({ fusedCursorPredictionId: predictionId })
          return
        }
        this.suggestionCache.addSuggestion(newSuggestion),
          this.createOrUpdateSuggestionState({ onAcceptDisplayId: newSuggestion.uniqueId })
      }
    }
    getCurrentReplaceText(e) {
      const t = this.getCurrentSuggestion()
      if (t === undefined) return
      const s = F_(e, t)
      return s === null
        ? undefined
        : e.getValueInRange({
            startLineNumber: s.startLineNumber,
            startColumn: s.startColumn,
            endLineNumber: s.endLineNumber,
            endColumn: s.endColumn,
          })
    }
    updateVisibleSuggestionText(editor, textChanges, range, editorModel, undoRedoGroup, eol) {
      let currentLine = range.startLineNumber,
        currentColumn = 1,
        editOperations = []
      for (const change of textChanges) {
        const lines = change.value.split(eol),
          endLine = currentLine + lines.length - 1,
          endColumn = lines.length > 1 ? lines[lines.length - 1].length + 1 : currentColumn + change.value.length
        change.added === true
          ? editOperations.push({ range: new G(currentLine, currentColumn, currentLine, currentColumn), text: change.value })
          : change.removed === true && editOperations.push({ range: new G(currentLine, currentColumn, endLine, endColumn), text: "" }),
          change.added !== true && ((currentColumn = endColumn), (currentLine = endLine))
      }
      // tdi: 把连续的行merge起来操作
      const mergedRange = tdi(editOperations, editorModel)
      if (
        (editorModel.pushEditOperations([], editOperations, () => null, undoRedoGroup),
        editorModel.pushStackElement(),
        editOperations.every(
          (op) =>
            op.range.endLineNumber === op.range.startLineNumber &&
            op.range.endColumn === op.range.startColumn,
        ))
      ) {
        if (
          mergedRange.range.startLineNumber === mergedRange.range.endLineNumber &&
          !mergedRange.text.includes(`
  `)
        )
          editor.setPosition(
            new Me(
              mergedRange.range.startLineNumber,
              mergedRange.range.startColumn + mergedRange.text.length,
            ),
          )
        else if (editOperations.length === 1) {
          const cursorPosition = editor.getPosition()
          if (cursorPosition === null) return
          const textRange = G.fromPositions(
            cursorPosition,
            new Me(mergedRange.range.startLineNumber, mergedRange.range.startColumn),
          )
          if (editorModel.getValueInRange(textRange).trim().length === 0) {
            const newPosition = _fo(mergedRange)
            editor.setPosition(newPosition)
          }
        }
      }
    }
    getStreamingSuggestionRange(e, t, s) {
      const n = e.split(s)
      return {
        startLineNumber: t.startLineNumber,
        startColumn: t.startColumn,
        endLineNumber: t.startLineNumber + n.length + 1,
        endColumn: n[n.length - 1].length,
      }
    }
    createOrUpdateStreamingBackgroundDecoration(e, t, s) {
      const n = e.getEOL(),
        r = this.getStreamingSuggestionRange(s.replaceText, t, n)
      return e.deltaDecorations(
        [],
        [
          {
            range: r,
            options: {
              description: "cpp suggestion streaming indicator",
              className: udi,
              stickiness: 1,
            },
          },
        ],
      )[0]
    }
    clearAllGreenHighlights(e) {
      this.decIdsThatAreNotInReactiveStorage.green.length > 0 &&
        (this.decIdsThatAreNotInReactiveStorage.green = e.deltaDecorations(
          this.decIdsThatAreNotInReactiveStorage.green,
          [],
        ))
    }
    getSuggestionDecorationOptions(e, t) {
      let s
      return (
        (s = {
          description: "cpp suggestion",
          className:
            t && this.getApplicationUserPersistentStorage().cppConfig?.isGhostText !== true
              ? XMs
              : "<NO_CLASS_DEFINED_CPP>",
          stickiness: 0,
        }),
        {
          range: {
            startLineNumber: e.startLineNumber,
            startColumn: e.startColumn,
            endLineNumber: e.endLineNumberInclusive,
            endColumn: e.endColumn,
          },
          options: s,
        }
      )
    }
    showCursorHighlight() {
      rge(
        `.monaco-editor .cursors-layer .cursor {
			background-color: var(--vscode-textLink-foreground) !important;
			border-color: var(--vscode-textLink-foreground) !important;
			color: var(--vscode-textLink-foreground) !important;
			animation: cursorBump 0.2s;
		}
		@keyframes cursorBump {
			0% { transform: scale(1) rotate(0deg); opacity: 1 !important; }
			50% { transform: scale(2) rotate(180deg); opacity: 1 !important; }
			100% { transform: scale(1) rotate(360deg); opacity: 1 !important; }
		}`,
        "cppCursorHighlightClassName",
      )
    }
    hideCursorHighlight() {
      rge("", "cppCursorHighlightClassName")
    }
    createSuggestionDecoration(e, t, s) {
      return (
        this.getApplicationUserPersistentStorage().cppHighlightCursor === true &&
          ((s = false), this.showCursorHighlight()),
        e.deltaDecorations([], [this.getSuggestionDecorationOptions(t, s)])[0]
      )
    }
    removeStreamingBackgroundDecoration(e, t) {
      e.deltaDecorations([t], [])
    }
    updateSuggestionStateHalfSilently(e) {
      const t = this.getNonPersistentStorage().cppState
      if (!(t === undefined || t.suggestion === undefined))
        return this.createOrUpdateSuggestionStateHalfSilently(e)
    }
    createOrUpdateSuggestionStateHalfSilently(e) {
      this.getNonPersistentStorage().cppState !== undefined &&
        this.reactiveStorageService.setNonPersistentStorage("cppState", "suggestion", (s) =>
          s === undefined ? e : { ...s, ...e },
        )
    }
    updateSuggestionState(e) {
      if (this.getNonPersistentStorage().cppState?.suggestion !== undefined)
        return this.createOrUpdateSuggestionState(e)
    }
    createOrUpdateSuggestionState(e) {
      this.getNonPersistentStorage().cppState !== undefined &&
        this.reactiveStorageService.setNonPersistentStorage("cppState", (s) => {
          if (s === undefined) return
          const n = s.suggestion
          return { ...s, suggestion: n ? { ...n, ...e } : e }
        })
    }
    textEqualsCurrentRange(e, t, s) {
      return (
        e.getValueInRange({
          startLineNumber: s.startLineNumber,
          startColumn: s.startColumn,
          endLineNumber: s.endLineNumberInclusive,
          endColumn: s.endColumn,
        }) === t
      )
    }
    createRecoverableData({
      requestId: e,
      diffText: t,
      startingRange: s,
      selection: n,
    }) {
      return {
        requestId: e,
        suggestionText: t,
        suggestionRange: {
          startLineNumber: s.startLineNumber,
          startColumn: s.startColumn,
          endLineNumber: s.endLineNumberInclusive,
          endColumn: s.endColumn,
        },
        position: {
          lineNumberOneIndexed: n.startLineNumber,
          columnOneIndexed: n.startColumn,
        },
      }
    }
    displayCppSuggestion(editor, model, suggestion) {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          action: 'displayCppSuggestion',
          suggestion,
          generationUUID: this.getMostRecentNonAbortedRequestId(),
        }),
      });
      if (this.textEqualsCurrentRange(model, suggestion.replaceText, suggestion.range))
        return oa("[Cpp] Bad Case: Suggestion text matches current text"), false
      if (
        this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING === true
      )
        return oa("[Cpp] Bad Case: triggering is paused"), false
      const currentSuggestion = this.getCurrentSuggestion()
      if (
        currentSuggestion !== undefined &&
        currentSuggestion.source !== CppIntent.CursorPrediction &&
        suggestion.source === CppIntent.CursorPrediction
      )
        return false
      currentSuggestion !== undefined &&
        (console.info(
          "[Cpp] Bad Case: Clearing suggestion because it already exists",
          currentSuggestion.source,
        ),
        this.clearSuggestions())
      const endColumn = model.getLineMaxColumn(
          suggestion.startingSuggestionRange.endLineNumberInclusive,
        ),
        adjustedRange = { ...suggestion.startingSuggestionRange, endColumn: endColumn },
        decorationId = this.createSuggestionDecoration(model, adjustedRange, true),
        decoratedSuggestion = { ...suggestion, decorationId: decorationId }
      this.createOrUpdateSuggestionState(decoratedSuggestion)
      const updatedSuggestion = this.getCurrentSuggestion(),
        startingRange = suggestion.startingSuggestionRange,
        recoverableData = this.createRecoverableData({
          requestId: suggestion.requestId,
          diffText: suggestion.diffText,
          startingRange: startingRange,
          selection: suggestion.selection,
        })
      return (
        updatedSuggestion
          ? this.cppEventLoggerService.recordCppSuggestionEvent(model, updatedSuggestion, recoverableData)
          : this.cppEventLoggerService.recordCppSuggestionEvent(model, decoratedSuggestion, recoverableData),
        (this.mostRecentShownRequestId = recoverableData.requestId),
        this.getApplicationUserPersistentStorage().cppAutoImportEnabled && this.importPredictionService.showCorrectUI(editor),
        true
      )
    }
    getCurrentSuggestion() {
      return this.getNonPersistentStorage().cppState?.suggestion
    }
    updateSuggestionGreenHighlights(editorModel, suggestion, diffs, shouldUpdateUI = true) {
      const suggestionRange = F_(editorModel, suggestion)
      if (suggestionRange === null) return
      const { greenRanges: greenRanges } = OFt(diffs, suggestionRange, "post-change")
      this.getCurrentSuggestion() &&
        (this.updateSuggestionStateHalfSilently({ greens: greenRanges }),
        this.getApplicationUserPersistentStorage().cppAutoImportEnabled && this.importPredictionService.handleNewGreens(editorModel, greenRanges),
        shouldUpdateUI &&
          ((this.didShowGreenHighlights = true),
          (this.decIdsThatAreNotInReactiveStorage.green = editorModel.deltaDecorations(
            this.decIdsThatAreNotInReactiveStorage.green,
            greenRanges.map((range) => ({
              range: {
                startLineNumber: range.startLineNumber,
                startColumn: range.startColumn,
                endLineNumber: range.endLineNumber,
                endColumn: range.endColumn,
              },
              options: { description: "green", className: RKi, stickiness: 1 },
            })),
          )),
          this.aiAssertService.assert(
            this.decIdsThatAreNotInReactiveStorage.green.length < 50,
            "Too many green decorations from cpp",
          )))
    }
    makeEditsForNextWordAccept({
      model: e,
      suggestion: t,
      editor: s,
      changes: n,
    }) {
      const r = s.getPosition()
      if (r === null) return { type: Sp.NotAccepted }
      const o = t.decorationId,
        a = e.getDecorationRange(o)
      if (a === null) return { type: Sp.NotAccepted }
      const l = this.languageConfigurationService.getLanguageConfiguration(e.getLanguageId()),
        c = Xfo(n, r, a.getStartPosition(), l)
      if (c.type === Sp.NotAccepted) return { type: Sp.NotAccepted }
      {
        if (c.edit.text === e.getValueInRange(c.edit.range))
          return { type: Sp.NotAccepted }
        const h = e.getValueInRange(
            G.fromPositions(
              a.getStartPosition(),
              c.edit.range.getStartPosition(),
            ),
          ),
          u = e.getValueInRange(
            G.fromPositions(c.edit.range.getEndPosition(), a.getEndPosition()),
          )
        if (h + c.edit.text + u === t.replaceText)
          return { type: Sp.AcceptedAll }
        {
          const g = e.pushEditOperations(
            [Ui.fromPositions(r, r)],
            [c.edit],
            (p) => {
              const m = p[0].range.getEndPosition()
              return [Ui.fromPositions(m, m)]
            },
          )
          return (
            this.editHistoryCache.addEdit(c.edit),
            g && s.setPosition(g[0].getSelectionStart()),
            c
          )
        }
      }
    }
    async makeChangesOnAcceptCppSuggestion({
      model: editorModel,
      eol,
      suggestion,
      editor,
      abortController,
      onlyAcceptFirstWord,
    }) {
      let isAborted = false
      abortController?.signal.addEventListener("abort", () => {
        isAborted = true
      })
      let suggestionRange = F_(editorModel, suggestion)
      if (!suggestionRange) return { type: Sp.NotAccepted }
      let originalText = suggestion.originalText ?? ""
      const replaceText = suggestion.replaceText ?? "",
        { changes: textChanges } = await this.diffingService.wordDiff(originalText, replaceText)
      if (isAborted) return { type: Sp.NotAccepted }
      const acceptAllChanges = async (range) => {
          this.updateVisibleSuggestionText(editor, textChanges, range, editorModel, suggestion.undoRedoGroup, eol)
          const { wordDiffs, charDiffs } = computeDiffs(
              suggestion.originalText ?? "",
              replaceText,
              eol,
            ),
            diffsToUse = this.suggestionTypeCache.get(suggestion.decorationId) === SUGGESTION_DISPLAY_TYPE.PreviewBox ? wordDiffs : charDiffs
          return (
            this.updateSuggestionGreenHighlights(editorModel, suggestion, diffsToUse),
            this.updateSuggestionState({
              suggestionIsCurrentlyHidden: false,
              hasBeenSeen: true,
            }),
            { type: Sp.AcceptedAll }
          )
        },
        acceptNextWord = async (range) => {
          const nextWordResult = this.makeEditsForNextWordAccept({
            model: editorModel,
            suggestion: suggestion,
            editor: editor,
            changes: textChanges,
          })
          if (nextWordResult.type === Sp.NotAccepted) return nextWordResult
          if (nextWordResult.type === Sp.AcceptedAll) return await acceptAllChanges(range)
          {
            this.updateSuggestionState({
              suggestionIsCurrentlyHidden: true,
              hasBeenSeen: true,
            })
            const currentTextInRange = editorModel.getValueInRange(range),
              { wordDiffs, charDiffs } = computeDiffs(suggestion.originalText ?? "", currentTextInRange, eol),
              diffsToUse = this.suggestionTypeCache.get(suggestion.decorationId) === SUGGESTION_DISPLAY_TYPE.PreviewBox ? wordDiffs : charDiffs
            return this.updateSuggestionGreenHighlights(editorModel, suggestion, diffsToUse), nextWordResult
          }
        }
      return onlyAcceptFirstWord ? await acceptNextWord(suggestionRange) : await acceptAllChanges(suggestionRange)
    }
    increaseCppUsage() {
      this.reactiveStorageService.setApplicationUserPersistentStorage(
        "cppShown",
        (e) => (e ?? 0) + 1,
      )
    }
    getHiddenSuggestion(e, t) {
      const s = this.getCurrentSuggestion()
      return s === undefined || !s.suggestionIsCurrentlyHidden ? null : s
    }
    getVisibleSuggestion() {
      const e = this.getCurrentSuggestion()
      return e === undefined || e.suggestionIsCurrentlyHidden ? null : e
    }
    disableAndHideCopilotSuggestion(e) {
      this.editorThatWeHidGhostTextOn !== undefined &&
        this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
        (this.editorThatWeHidGhostTextOn = e),
        Ad.get(this.editorThatWeHidGhostTextOn)
          ?.model.get()
          ?.clearCopilotSuggestions(),
        Ad.get(e)
          ?.model.get()
          ?.isHidden.set(true, undefined)
    }
    unhideCopilotSuggestion(e) {
      Ad.get(e)
        ?.model.get()
        ?.isHidden.set(false, undefined)
    }
    saveEditorSelectionInSuggestion(e, t, s) {
      const n = e.getSelection()
      this.updateSuggestionState({
        editorSelectionBeforePeek: n !== null ? n : undefined,
      })
    }
    saveCurrentTextIntoSuggestion(e, t) {
      const s = F_(e, t)
      if (s) {
        const n = e.getValueInRange(s),
          r = { ...t, originalText: n }
        return this.updateSuggestionState(r), r
      }
      return t
    }
    getEditorCurrentPositionRange(e) {
      const t = e.getPosition()
      return t === null
        ? null
        : new Hu({
            startLineNumber: t.lineNumber,
            startColumn: t.column,
            endLineNumberInclusive: t.lineNumber,
            endColumn: t.column,
          })
    }
    async acceptFullSuggestion(e, t) {
      // fetch('http://localhost:3000', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     action: 'press Tab to acceptFullSuggestion',
      //   }),
      // });
      return await this.acceptSuggestion(false, e, t)
    }
    async acceptNextWordSuggestion(e, t) {
      return await this.acceptSuggestion(true, e, t)
    }
    async acceptSuggestion(e, t, s) {
      let n = false
      t?.signal.addEventListener("abort", () => {
        n = true
      })
      const r = this.getFocusedCodeEditor(),
        o = r?.getModel()
      if (!r || !o) return { type: Sp.NotAccepted }
      const a = o.getEOL(),
        l = this.getEditorCurrentPositionRange(r)
      if (!this.isTextFocusedOrSimilarlyFocused(r) || l === null)
        return { type: Sp.NotAccepted }
      let c = s ?? this.getHiddenSuggestion(o, l)
      if (c === null) return { type: Sp.NotAccepted }
      this.telemetryService.publicLogCapture("cursor.peekcppsuggestion"),
        this.increaseCppUsage(),
        (c = this.saveCurrentTextIntoSuggestion(o, c)),
        this.saveEditorSelectionInSuggestion(r, o, c)
      const h = await this.makeChangesOnAcceptCppSuggestion({
        model: o,
        eol: a,
        suggestion: c,
        abortController: t,
        onlyAcceptFirstWord: e,
        editor: r,
      })
      return n
        ? { type: Sp.NotAccepted }
        : (this.disableAndHideCopilotSuggestion(r), h)
    }
    async displayFusedCursorPrediction({
      editor: e,
      model: t,
      fusedCursorPrediction: fusedCursorPrediction,
      oldText: n,
      newText: r,
      _predictionId_for_log,
    }) {
      // fetch('http://localhost:3000', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     action: 'displayFusedCursorPrediction',
      //     predictionId: _predictionId_for_log,
      //     fusedCursorPrediction,
      //     oldText: n,
      //     newText: r,
      //   }),
      // });
      const o = this.contextService.resolveRelativePath(fusedCursorPrediction.relativePath)
      if (!o) {
        oa("[fusedCursorPrediction] Could not resolve predicted file path")
        return
      }
      const a = await this.cursorPredictionService.getMultifileCursorPredictionEditor(o)
      if (!a) {
        oa("[fusedCursorPrediction] Could not get editor for predicted file")
        return
      }
      const l = a.getModel()
      if (!l) {
        oa("[fusedCursorPrediction] Could not get model for predicted file")
        return
      }
      let lineNumber = fusedCursorPrediction.lineNumberOneIndexed
      const h = e.getPosition(),
        u = extUri.isEqual(t.uri, l.uri)
      if (h && u && lineNumber > h.lineNumber) {
        const g = t.getEOL()
        lineNumber += r.split(g).length - n.split(g).length
      }
      if (
        this.overlapsInlineDiff(l.uri, lineNumber, { onlyCheckCurrentlyGenerating: false })
      )
        return
      const d = fusedCursorPrediction.shouldRetriggerCpp && n !== r
      await this.cursorPredictionService.manuallyCreateCursorPrediction({
        _predictionId_for_log,
        _fusedCursorPrediction: fusedCursorPrediction,
        editor: a,
        model: l,
        lineNumber: lineNumber,
        triggerCppCallback: d
          ? (uri, editor, intentSource, overridePosition) => {
              this.fireCppSuggestionFromTrigger(uri, editor, intentSource, overridePosition)
            }
          : null,
      })
    }
    removeSuggestion() {
      const e = this.getNonPersistentStorage().cppState
      e !== undefined &&
        this.reactiveStorageService.setNonPersistentStorage("cppState", {
          ...e,
          suggestion: undefined,
        })
    }
    cleanupAfterNextWordSuggestion(e, t) {
      const s = e.getModel()
      if (!s) return
      const n = this.getEditorCurrentPositionRange(e)
      if (n === null) return
      const r = this.getHiddenSuggestion(s, n)
      r !== null && this.cppEventLoggerService.recordPartialAcceptSuggestionEvent(s, r, t)
    }
    cleanupAfterAcceptSuggestion(editor, suggestion) {
      this.abortAllCppRequests(suggestion?.requestId)
      const positionRange = this.getEditorCurrentPositionRange(editor),
        model = editor.getModel()
      if (!model || positionRange === null) return
      const visibleSuggestion = suggestion ?? this.getVisibleSuggestion()
      if (visibleSuggestion !== null) {
        if (
          ((this.u = {
            requestId: visibleSuggestion.requestId,
            modelVersion: model.getVersionId(),
            modelId: model.id,
          }),
          (this.numberOfClearedSuggestionsSinceLastAccept = 0),
          this.clearSuggestions(
            this.getApplicationUserPersistentStorage().cppConfig?.isGhostText &&
              !this.getNonPersistentStorage().cppState?.suggestion?.immediatelySeen,
          ),
          this.cppEventLoggerService.recordAcceptSuggestionEvent(model, visibleSuggestion),
          this.reactiveStorageService.applicationUserPersistentStorage.checklistState
            ?.doneAutoComplete !== true)
        ) {
          const checklistState = this.reactiveStorageService.applicationUserPersistentStorage.checklistState
          this.reactiveStorageService.setApplicationUserPersistentStorage(
            "checklistState",
            (state) => ({ ...(state ?? {}), doneAutoComplete: true }),
          )
        }
        if (visibleSuggestion.onAcceptDisplayId !== undefined) {
          const matchingSuggestion = this.suggestionCache.getAndEvictMatchingSuggestion(visibleSuggestion.onAcceptDisplayId)
          if (matchingSuggestion) {
            this.displayCppSuggestion(editor, model, matchingSuggestion)
            return
          }
        }
        if (this.cursorPredictionService.isCursorPredictionEnabled()) {
          visibleSuggestion.fusedCursorPredictionId &&
            this.displayFusedCursorPredictionIfAvailable(
              editor,
              model,
              visibleSuggestion.fusedCursorPredictionId,
              visibleSuggestion.originalText,
              visibleSuggestion.replaceText,
            )
          const decorationRange = model.getDecorationRange(visibleSuggestion.decorationId) ?? undefined
          let suggestionRange = decorationRange
            ? {
                startLineNumber: decorationRange.startLineNumber,
                startColumn: decorationRange.startColumn,
                endLineNumberInclusive:
                  decorationRange.endColumn === 1 ? decorationRange.endLineNumber - 1 : decorationRange.endLineNumber,
                endColumn: decorationRange.endColumn,
              }
            : undefined
          this.lastProcessedModel?.modelVersion === model.getVersionId() && this.lastProcessedModel?.modelId === model.id
            ? ((this.pendingSuggestion = { fire: false, acceptedRange: undefined }),
              this.cursorPredictionService.getAndShowNextPrediction({
                editor,
                triggerCppCallback:
                  this.fireCppSuggestionFromTrigger.bind(this),
                getLinterErrors:
                  this.getRecentAndNearLocationLinterErrors.bind(this),
                source: QN.ACCEPT,
                cppSuggestionRange: suggestionRange,
              }))
            : (this.pendingSuggestion = { fire: true, acceptedRange: suggestionRange })
        } else this.cursorPredictionService.periodicallyReloadCursorPredictionConfig(false)
      }
    }
    displayFusedCursorPredictionIfAvailable(e, t, fusedCursorPredictionId, n, r) {
      const fusedCursorPrediction = this.db.get(fusedCursorPredictionId)
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          getFromDB: 'predictionId',
          possibleInvokeReason: 'no suggestion but has predictionId',
          predictionId: fusedCursorPredictionId,
          fusedCursorPrediction: fusedCursorPrediction ?? null,
          oldText: n,
          newText: r,
        }),
      });
      fusedCursorPrediction
        ? this.displayFusedCursorPrediction({
            editor: e,
            model: t,
            fusedCursorPrediction: fusedCursorPrediction,
            _predictionId_for_log: fusedCursorPredictionId,
            oldText: n,
            newText: r,
          })
        : (this.eb = {
            uri: t.uri,
            fusedCursorPredictionId: fusedCursorPredictionId,
            oldText: n,
            newText: r,
          })
    }
    revertSuggestion(e, t = { removeGreens: true }) {
      const s = this.getVisibleSuggestion()
      if (s === null) return
      const n = e.getModel(),
        r = this.getEditorCurrentPositionRange(e)
      e === null ||
        e.hasTextFocus() === false ||
        n === undefined ||
        n === null ||
        r === null ||
        (this.telemetryService.publicLogCapture("cursor.revertcppsuggestion"),
        this.cppEventLoggerService.recordRejectSuggestionEvent(n, s),
        this.removeAllHighlights(n, t),
        this.updateSuggestionStateHalfSilently({
          suggestionIsCurrentlyHidden: true,
          hasBeenSeen: true,
          editorSelectionBeforePeek: undefined,
        }),
        this.reallowCopilotIfWePreviousHidCopilotSuggestions())
    }
    abortAllCppRequests(e) {
      this.R.forEach((t) => {
        t.generationUUID !== e && t.abortController.abort()
      }),
        (this.R = this.R.filter((t) => t.generationUUID === e)),
        this.holdDownAbortController?.abort(),
        (this.holdDownAbortController = undefined)
    }
    rejectSuggestionForTelemetryIfExists(e) {
      const t = this.getCurrentSuggestion()
      if (t === undefined) return
      const s = e.getModel()
      s != null &&
        (this.cppEventLoggerService.recordRejectSuggestionEvent(s, t),
        this.telemetryService.publicLogCapture("cursor.rejectcppsuggestion"))
    }
    rejectAndResetAllCppSuggestions(e = { removeGreens: true, abortAll: true }) {
      e.abortAll && this.abortAllCppRequests()
      const t = this.codeEditorService.getActiveCodeEditor()
      t != null &&
        (this.rejectSuggestionForTelemetryIfExists(t),
        this.revertSuggestion(t, e),
        this.clearSuggestions(undefined, e))
    }
    clearDecorationsSlowEnumeratesAllDecorations() {
      const e = this.codeEditorService.getActiveCodeEditor(),
        t = e?.getModel()
      if (e == null || t === null || t === undefined) return
      this.removeAllHighlights(t)
      const s = t.getAllDecorations(),
        n = s
          .filter(
            (a) =>
              a.options.className === RKi ||
              a.options.className === XMs ||
              a.options.className === udi ||
              a.options.className === Pgo ||
              a.options.className === udi,
          )
          .map((a) => a.id)
      n.length > 0 && t.deltaDecorations(n, [])
      const r = s
        .filter((a) => a.options.description === "cpp-truncation-cache")
        .map((a) => a.id)
      r.length > 0 && t.deltaDecorations(r, []), this.decorationCache.delete(t.uri)
      const o = this.getCurrentSuggestion()
      o !== undefined &&
        o.decorationId !== undefined &&
        t.deltaDecorations([o.decorationId], [])
    }
    clearDecorationsFast(e = { removeGreens: true }) {
      const s = this.codeEditorService.getActiveCodeEditor()?.getModel()
      if (s == null) return
      const n = this.decIdsThatAreNotInReactiveStorage.green,
        r = Object.values(this.decIdsThatAreNotInReactiveStorage)
          .filter((c) => c !== n)
          .flat(),
        o = e.removeGreens ? [...this.I, ...n, ...r] : [...r]
      e.removeGreens === false ? this.I.push(...n) : (this.I = []),
        o.length > 0 && s.deltaDecorations(o, []),
        (this.decIdsThatAreNotInReactiveStorage = Object.fromEntries(
          Object.keys(this.decIdsThatAreNotInReactiveStorage).map((c) => [
            c,
            [],
          ]),
        ))
      const a = this.getCurrentSuggestion()
      if (a === undefined) return
      const l = [a.decorationId]
      l.length > 0 && s.deltaDecorations(l, [])
    }
    clearSuggestions(e, t = { removeGreens: true }) {
      e !== true && this.clearDecorationsFast(t),
        this.getNonPersistentStorage().cppState?.suggestion !== undefined &&
          (this.numberOfClearedSuggestionsSinceLastAccept += 1),
        this.reactiveStorageService.setNonPersistentStorage("cppState", "suggestion", undefined)
    }
    removeAllHighlights(e, t = { removeGreens: true }) {
      this.hideCursorHighlight(),
        t.removeGreens !== false && this.clearAllGreenHighlights(e)
    }
    isOnShortestEditPath({ event: event, model: model }, context) {
      const editor = this.codeEditorService.getActiveCodeEditor()
      if (editor == null || editor.getModel()?.id !== model.id) return false
      const proposedSuggestion = this.getCurrentSuggestion()
      if (proposedSuggestion === undefined) return false
      let previousContext
      if (context === undefined) {
        const cachedModelValue = this.getPreviousModelValue(model)
        if (cachedModelValue === undefined) return false
        previousContext = cachedModelValue
      } else previousContext = context
      const previousModelValue = jBt(previousContext, model.uri)
      return this.editHistoryCache.checkChangeExists(event, true)
        ? true
        : isEditOnShortestPath({
            event,
            model,
            proposedSuggestion,
            previousModelValue,
          })
    }
    async formatDiffHistory(contentChangeEvent, editor, model, eol) {
      if (model.getValueLength() > MAX_FILE_SIZE_CHARS || model.isDisposed()) return
      const formattedDiff = await this.everythingProviderService.onlyLocalProvider?.runCommand(
        EditHistoryDiffFormatter.FormatDiffHistory,
        {
          uri: model.uri.toString(),
          changes: contentChangeEvent.changes,
          behavior: this.getApplicationUserPersistentStorage().cppConfig?.mergeBehavior,
          modelVersion: model.getVersionId(),
          eol: eol,
        },
      )
      if (formattedDiff === undefined)
        throw new Error("Format Diff History not registered in extension host")
      ;(this.lastProcessedModel = { modelVersion: model.getVersionId(), modelId: model.id }),
        this.pendingSuggestion.fire === true &&
          (this.cursorPredictionService.getAndShowNextPrediction({
            editor: editor,
            triggerCppCallback: this.fireCppSuggestionFromTrigger.bind(this),
            getLinterErrors:
              this.getRecentAndNearLocationLinterErrors.bind(this),
            source: QN.ACCEPT,
            cppSuggestionRange: this.pendingSuggestion.acceptedRange,
          }),
          (this.pendingSuggestion = { fire: false, acceptedRange: undefined })),
        this.formattedDiffCache.set(this.getModelKey(model), formattedDiff),
        this.modelValueCache.set(this.getModelVersionKey(model), model.getValue())
    }
    checkOverlappingSuggestion(e, t) {
      const s = this.getCurrentSuggestion()
      if (s === undefined || s.uri.toString() !== e.uri.toString()) return null
      const n = e.getDecorationRange(s.decorationId)
      return n &&
        n.startLineNumber <= t.endLineNumberInclusive &&
        n.endLineNumber >= t.startLineNumber
        ? s
        : null
    }
    async *streamCpp(signal, cppProvider, context) {
      let hasYieldedRange = false,
        hasYieldedDoneEdit = false,
        hasYieldedModelInfo = false,
        hasSeenEndMarker = false
      for (;;) {
        if (signal.signal.aborted) return
        const cppResult = await cppProvider.flushCpp(context)
        if (cppResult.type === "failure") throw new Error(cppResult.reason)
        !hasYieldedModelInfo &&
          cppResult.modelInfo !== undefined &&
          ((hasYieldedModelInfo = true), yield { case: "modelInfo", modelInfo: cppResult.modelInfo }),
          !hasYieldedRange &&
            cppResult.rangeToReplaceOneIndexed !== undefined &&
            ((hasYieldedRange = true),
            yield {
              case: "rangeToReplaceOneIndexed",
              range: cppResult.rangeToReplaceOneIndexed,
            })
        const buffer = cppResult.buffer
        for (const chunk of buffer) {
          if (chunk === Mgo) {
            hasSeenEndMarker = true
            break
          }
          yield { case: "text", text: chunk }
        }
        if (
          (!hasYieldedDoneEdit && cppResult.doneEdit && ((hasYieldedDoneEdit = true), yield { case: "doneEdit" }),
          cppResult.cursorPredictionTarget !== undefined &&
            (yield {
              case: "fusedCursorPrediction",
              prediction: cppResult.cursorPredictionTarget,
            }),
          hasSeenEndMarker)
        )
          return
        await new Promise((resolve) => setTimeout(resolve, 5))
      }
    }
    async bc(e, t) {
      if (
        t ||
        Math.random() < (this.getApplicationUserPersistentStorage().cppConfig?.checkFilesyncHashPercent ?? 0)
      )
        return oj(e)
    }
    async fastCurrentFileInfoForNotebooks(e, t, s, n, r) {
      const o = e.getEOL(),
        a = this.getNotebookCellInfo(e, t, o)
      if (a === null) return
      const { numLinesAddedBefore: l, cellValues: c } = a
      let h = 0
      const u = [0]
      for (const d of c.slice(0, -1))
        (h += d.split(`
`).length),
          u.push(h)
      return new CurrentFileInfo({
        relativeWorkspacePath: this.contextService.asRelativePath(e.uri),
        contents: c.join(o),
        sha256Hash: n ? await this.bc(c.join(o), this.fb) : undefined,
        selection: undefined,
        cursorPosition: new Qm({
          line: s.lineNumber - 1 + l,
          column: s.column - 1,
        }),
        languageId: "",
        fileVersion: r,
        cellStartLines: u,
        workspaceRootPath: this.contextService.getWorkspaceFolder(e.uri)?.uri.fsPath,
      })
    }
    async fastCurrentFileInfoDoesNotWorkForNotebooks(e, t, s, n, r) {
      if (e.scheme !== Schemas.aiChat && s !== null)
        return new CurrentFileInfo({
          relativeWorkspacePath: this.contextService.asRelativePath(e),
          contents: t,
          sha256Hash: n ? await this.bc(t, this.fb) : undefined,
          cursorPosition: new Qm({
            line: s.lineNumber - 1,
            column: s.column - 1,
          }),
          selection: undefined,
          languageId: "",
          fileVersion: r,
          workspaceRootPath: this.contextService.getWorkspaceFolder(e)?.uri.fsPath,
        })
    }
    async fastPeriodicallyReloadCppConfig() {
      Date.now() - this.h > 1e3 * 60 &&
        (await this.loadCppConfigIncludingHandlingProAccess(),
        this.requestDebouncer.setDebouncingDurations(this.getNewDebounceDurations()),
        this.importPredictionService.handleNewImportPredictionConfig())
    }
    async loadCppConfigIncludingHandlingProAccess() {
      ;(this.h = Date.now()), await this.keepCppModelStateUpdated()
      const t = await (
        await this.aiClient()
      ).cppConfig(new T1t({ model: this.getApplicationUserPersistentStorage().cppModel ?? "" }))
      this._applyConfig(t), this.cursorCredsService.setGeoCppBackendUrl(t.geoCppBackendUrl)
    }
    async forceApplyCppConfig() {
      const t = await (await this.aiClient()).cppConfig(new T1t({}))
      this._applyConfig(t)
    }
    async _applyConfig(e) {
      const t =
        this.reactiveStorageService.applicationUserPersistentStorage.cppConfig
          ?.shouldLetUserEnableCppEvenIfNotPro
      this.getApplicationUserPersistentStorage().cppEnabled === true &&
        e.shouldLetUserEnableCppEvenIfNotPro === false &&
        t === true &&
        m2i(this.authenticationService.membershipType()) === false &&
        this.reactiveStorageService.setNonPersistentStorage("showingCppUpsell", true),
        this.reactiveStorageService.setApplicationUserPersistentStorage("cppConfig", e),
        this.everythingProviderService.onlyLocalProvider?.runCommand(
          EditHistoryDiffFormatter.SetEnableCppWhitespaceDiffHistoryMode,
          { enabled: e.useWhitespaceDiffHistory },
        ),
        this.everythingProviderService.onlyLocalProvider?.runCommand(
          EditHistoryDiffFormatter.SetEnableCppIncludeUnchangedLines,
          { enabled: e.includeUnchangedLines },
        ),
        this.cppTypeService.setSuggestionHintsConfig(e.suggestionHintConfig)
    }
    async getCppReport() {
      if (this.cppProvider !== undefined) return await this.cppProvider.getCppReport()
    }
  };

  return {
    CppService,
    MAX_DIAGNOSTIC_DISTANCE,
  };
}