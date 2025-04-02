// @ts-check


export function createCppService(params) {
  const {V, EYe, G, yo, Qfo, ngo, rgo, zt, J, R_n, um, hF, ss, ll, JB, onDidRegisterWindow, fu, Va, nze, WEn, m2i, qEn, b2i, S9, $, Hae, m0t, Ad, fUe, Sp, VB, replaceTextInRange, generateModifiedText, EditHistoryDiffFormatter, VS, NYi, CUe, Ri, ce, Pn, Cg, EF, MMs, U, mu, Me, ys, $fo, qdt, Ffo, dze, uI, BMs, Cf, hG, mR, fm, gle, xr, Gr, GB, QN, Ycr, Yt, D1t, Kf, rt, handleStreamWithPredictions, handleChunkedStream, consumeRemainingStream, Hu, Aoe, Qcr, TKn, F_, tdi, _fo, rge, OFt, Xfo, Ui, ZXe: computeDiffs, k7, RKi, jBt, qfo, Ho, Qm, T1t, Xf, oj, ee, j, Je, eQe, cppService, ei, wf, yi, Ci, $h} = params;

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
        menu: { id: eQe.TitleMenu, order: 1 },
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
    return (t && EF.get(t)) || undefined
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
    hdi = 5e6,
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
    Lgo = 10,
    Ngo = 10,
    Rgo = 1e3 * 60 * 15,
    QMs = 1e5,
    ZMs = 1e4,
    ddi = 20,
    e$s = 3,
    Ave = 300,
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
      this.S = e
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
        (this.j = new yo(20)),
        (this.m = new Map()), (this.editorListenersMap = this.m),
        (this.n = new Map()),
        (this.q = undefined),
        (this.u = undefined),
        (this.w = undefined),
        (this.y = undefined),
        (this.z = undefined),
        (this.C = new yo(10)), (this.formattedDiffCache = this.C),
        (this.G = new yo(3)), (this.modelValueCache = this.G),
        (this.I = []),
        (this.J = []),
        (this.L = new Qfo(2)),
        (this.M = new ngo(5)),
        (this.N = new rgo(5, 6)),
        (this.O = new yo(3)),
        (this.Q = new yo(10)),
        (this.editorThatWeHidGhostTextOn = undefined),
        (this.R = []),
        (this.holdDownAbortController = undefined),
        (this.S = undefined),
        (this.numberOfClearedSuggestionsSinceLastAccept = 0),
        (this.lastEditTime = undefined),
        (this.U = undefined), (this.lastProcessedModel = this.U),
        (this.W = this.D(new zt())),
        (this.Y = { fire: false, acceptedRange: undefined }), (this.pendingSuggestion = this.Y),
        (this.$ = {}),
        (this.ab = false),
        (this.bb = []),
        (this.cb = undefined),
        (this.db = new yo(5)),
        (this.eb = undefined),
        (this.fb = false),
        (this.Mb = new J()),
        (this.Nb = document.createElement("div")),
        (this.handleKeyDownForCppKeys = (se) => {
          if (this.Ob().cppEnabled === true) {
            if (se.key === "Tab" && se.shiftKey) {
              if (this.Ob().cppManualTriggerWithOpToken) {
                const ae = this.gb.getActiveCodeEditor()
                if (ae === null) return
                const Ee = ae.getModel()?.uri
                if (!Ee) {
                  oa("[handleKeyDownForCppKeys] Tab: no uri")
                  return
                }
                this.fireCppSuggestionFromTrigger(Ee, ae, ll.ManualTrigger)
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
              if (this.Ob().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                if (he !== null && this.importPredictionService.maybeAcceptShownImport(he)) {
                  se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation()
                  return
                }
              }
              if (!this.shouldTabInsteadOfAccepting()) {
                const he = this.Pb().cppState?.suggestion;
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
                  (this.Pb().cppState?.additionalSuggestions?.length ?? 0) > 0
                ) {
                  const ae = this.gb.getActiveCodeEditor(),
                    de = ae?.getModel() ?? undefined,
                    Ee = ae?.getPosition(),
                    ke = this.Pb().cppState?.additionalSuggestions.filter(
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
                          this.Ob().cppAutoImportEnabled &&
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
              this.Pb().cppState?.suggestion !== undefined
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
              if (this.Ob().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                he !== null && this.importPredictionService.maybeRejectShownImport(he)
                  ? (se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation())
                  : this.Pb().cursorPrediction !== undefined &&
                    this.cursorPredictionService.clearCursorPrediction()
              } else
                this.Pb().cursorPrediction !== undefined &&
                  this.cursorPredictionService.clearCursorPrediction()
          }
        }),
        (this.triggerCppOnLintErrorAbortControllers = new Map()),
        (this.Xb = 6),
        (this.latestGenerationUUID = undefined),
        (this.Yb = undefined),
        (this.Zb = (se, he, ae, de) => {
          const Ee = se.split(ae)
          if (Ee.length < Ave * 2) return se
          let ke = Math.max(0, he - Ave),
            Ae = Math.min(Ee.length, he + Ave)
          const Pe = Ave - he,
            ze = he - (Ee.length - Ave)
          Pe > 0
            ? (Ae = Math.min(Ee.length, Ae + Pe))
            : ze > 0 && (ke = Math.max(0, ke - ze))
          const at = this.O.get(de.uri),
            we = 20
          if (at && at.length > 0) {
            let vt = false
            for (const { decorationId: lt, originalWidth: Xe } of at) {
              const Oe = de.getDecorationRange(lt)
              if (!Oe) continue
              const Fe =
                  Math.abs(Oe.startLineNumber - ke) < we &&
                  (ke !== 0 || Oe.startLineNumber === 1),
                ut =
                  Math.abs(Oe.endLineNumber - Ae) < we &&
                  (Ae !== Ee.length || Oe.endLineNumber === Ee.length)
              if (Oe && Fe && ut && Math.abs(Ae - ke - Xe) < we) {
                ;(ke = Oe.startLineNumber), (Ae = Oe.endLineNumber), (vt = true)
                break
              }
            }
            if (!vt) {
              const lt = de.deltaDecorations(
                [],
                [
                  {
                    range: new G(ke, 1, Ae, 1),
                    options: { description: "cpp-truncation-cache" },
                  },
                ],
              )[0]
              at.push({ decorationId: lt, originalWidth: Ae - ke })
              for (const Xe of at.slice(0, -e$s))
                de.deltaDecorations([Xe.decorationId], [])
              this.O.set(de.uri, at.slice(-e$s))
            }
          } else {
            const vt = de.deltaDecorations(
              [],
              [
                {
                  range: new G(ke, 1, Ae, 1),
                  options: { description: "cpp-truncation-cache" },
                },
              ],
            )[0]
            this.O.set(de.uri, [{ decorationId: vt, originalWidth: Ae - ke }])
          }
          for (let vt = 0; vt < ke; vt++) Ee[vt] = ""
          for (let vt = Ae; vt < Ee.length; vt++) Ee[vt] = ""
          return Ee.join(ae)
        }),
        (this.decIdsThatAreNotInReactiveStorage = { green: [] }),
        (this.didShowGreenHighlights = false),
        (this.removedCppNoopGenerationUUIDS = []),
        (this.generationStartTimes = {}),
        (this.c = this.D(this.hb.createScoped(this))),
        (this.W.value = this.ub.addEntry(
          this.statusBarElementProps(),
          "Cursor Tab",
          1,
          100,
        )),
        this.updateStatusBarElement(),
        (this.P = this.sb.createInstance(fu, { service: Va })),
        (this.g = this.sb.createInstance(fu, { service: nze })),
        this.Pb().cppState === undefined &&
          this.hb.setNonPersistentStorage("cppState", {}),
        this.loadCopilotPlusPlusConfigFromGithubCopilot(),
        this.Lb(),
        this.D(
          onDidRegisterWindow(() => {
            this.mainRegisterCppListenersToEditorIfCppEnabled()
          }),
        ),
        this.updateShouldNotTryToGetThemToNoticeCpp(),
        this.c.onChangeEffect({
          deps: [() => this.Ob().cppEnabled],
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
          deps: [() => this.Ob().cppConfig],
          onChange: async () => {
            this.updateStatusBarElement()
          },
        }),
        this.nb.onDidChangeSubscription(() => {
          this.updateStatusBarElement(),
            this.loadCppConfigIncludingHandlingProAccess()
        }),
        this.D(
          this.zb.onDidActiveEditorChange(() => {
            this.updateStatusBarElement()
          }),
        ),
        this.nb.addLoginChangedListener(() => {
          this.updateStatusBarElement()
        }),
        this.nb.addSubscriptionChangedListener(() => {
          this.updateStatusBarElement(),
            this.loadCppConfigIncludingHandlingProAccess()
        }),
        this.Ab.onDidChangeConfiguration((se) => {
          se.affectsConfiguration(JB) && this.updateStatusBarElement()
        }),
        this.loadCppConfigIncludingHandlingProAccess(),
        this.mainRegisterCppListenersToEditorIfCppEnabled(),
        this.N.addListener((se, he, ae) => {
          if (
            this.getCurrentSuggestion() === undefined &&
            !(
              this.Ob().cppAutoImportEnabled &&
              this.importPredictionService.isShowingImportSuggestion()
            )
          ) {
            this.Vb(se),
              this.displayCppSuggestion(ae, he, se),
              this.N.removeSuggestion(se)
            return
          }
        })
      const { clientDebounceDuration: K, totalDebounceDuration: Q } =
        this.getNewDebounceDurations()
      ;(this.Z = new R_n(K, Q, 1e3)),
        (this.fb = !this.Jb.isBuilt || this.Jb.isExtensionDevelopment),
        this.importPredictionService.registerCppMethods({
          getPartialCppRequest: this.getPartialCppRequest.bind(this),
          getModelName: this.getModelName.bind(this),
          getCurrentSuggestion: this.getCurrentSuggestion.bind(this),
          getRecentAndNearLocationLinterErrors:
            this.getRecentAndNearLocationLinterErrors.bind(this),
          truncateCurrentFile: this.Zb.bind(this),
          getFocusedCodeEditor: this.getFocusedCodeEditor.bind(this),
          isTextFocusedOrSimilarlyFocused:
            this.isTextFocusedOrSimilarlyFocused.bind(this),
        })
    }
    Lb() {
      const e = this.hb.applicationUserPersistentStorage.cppSnoozed
      if (
        e !== undefined &&
        this.hb.applicationUserPersistentStorage.cppEnabled === false
      ) {
        const t = Date.now(),
          s = e + GMs
        s < t
          ? (this.hb.setApplicationUserPersistentStorage("cppSnoozed", undefined),
            this.hb.setApplicationUserPersistentStorage("cppEnabled", true))
          : setTimeout(() => {
              this.hb.setApplicationUserPersistentStorage("cppSnoozed", undefined),
                this.hb.setApplicationUserPersistentStorage("cppEnabled", true)
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
      const e = this.hb.applicationUserPersistentStorage.cppConfig
      if (e === undefined)
        return { clientDebounceDuration: Igo, totalDebounceDuration: Dgo }
      const t = e.clientDebounceDurationMillis,
        s = e.globalDebounceDurationMillis
      return { clientDebounceDuration: t, totalDebounceDuration: s }
    }
    setSuggestionType(e, t) {
      this.Q.set(e, t)
    }
    async dispose() {
      const e = new J()
      try {
        for (const [t, s] of this.O.entries()) {
          const n = await this.ib.createModelReference(t)
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
      this.Ob().cppEnabled
        ? this.ob.publicLogCapture("cpp.cppUpdate.cppEnabled")
        : this.ob.publicLogCapture("cpp.cppUpdate.cppDisabled")
    }
    async keepCppModelStateUpdated() {
      const e = await (await this.g.get()).availableModels({})
      this.hb.setApplicationUserPersistentStorage("cppModelsState", (t) => ({
        cppModels: e.models,
        defaultModel: e.defaultModel ?? t.defaultCppModel,
      }))
    }
    async updateShouldNotTryToGetThemToNoticeCpp() {
      this.Ob().cppEnabled === true &&
        this.hb.setApplicationUserPersistentStorage(
          "shouldNotTryToGetThemToNoticeCpp",
          true,
        )
      const e = this.nb.isAuthenticated()
      await this.aiFeatureStatusService.maybeRefreshFeatureStatus("cppExistingUserMarketingPopup"),
        e &&
          this.Ob().shouldNotTryToGetThemToNoticeCpp !== true &&
          this.aiFeatureStatusService.getCachedFeatureStatus("cppExistingUserMarketingPopup") ===
            true &&
          this.isAllowedCpp() &&
          (this.ob.publicLogCapture("cppMarketingPopup.shownPopup"),
          this.hb.setApplicationUserPersistentStorage(
            "shouldNotTryToGetThemToNoticeCpp",
            true,
          ),
          this.hb.setNonPersistentStorage(
            "cppPopupState",
            "cardState",
            "first",
          ))
    }
    isAllowedCpp() {
      return WEn(
        this.Ob().cppConfig,
        this.nb.isAuthenticated(),
        m2i(this.nb.membershipType()),
      )
    }
    isCppEnabledForEditor(e) {
      let t
      if (e !== null) {
        const n = e.getModel()
        if (n == null || this.Wb(n) || this.selectedContextService.shouldIgnoreUri(n.uri)) return false
        t = { languageId: KMs(n), fsPath: this.mb.asRelativePath(n.uri) }
      }
      let s
      try {
        s = this.Ab.getValue(JB)
      } catch {
        s = []
      }
      return qEn(this.Ob().cppEnabled, t, s)
    }
    setCppDisabledForLanguage(e, t) {
      const s = this.Ab.getValue(JB)
      Array.isArray(s)
        ? this.Ab.updateValue(
            JB,
            t === "enabled" ? s.filter((n) => n !== e) : [...s, e],
            2,
          )
        : this.Ab.updateValue(JB, t === "enabled" ? [] : [e], 2)
    }
    isCppDisabledForLanguage(e) {
      try {
        const t = this.Ab.getValue(JB)
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
    filterLinterErrors(e, t = Ri.Error) {
      return e
        .filter((s) => s.severity >= t)
        .filter(
          (s) =>
            s.startLineNumber < QMs &&
            s.endLineNumber < QMs &&
            s.startColumn < ZMs &&
            s.endColumn < ZMs,
        )
    }
    loadCopilotPlusPlusConfigFromGithubCopilot() {
      if (this.Ob().cppHasLoadedConfigFromCopilot !== true)
        try {
          const e = this.Ab.getValue("github.copilot.enable")
          if (e !== null && typeof e == "object") {
            const t = Object.keys(e)
              .filter((s) => e[s] === false)
              .filter((s) => s !== "*")
            t.length > 0 && this.Ab.updateValue(JB, t, 2)
          }
        } catch {
        } finally {
          this.hb.setApplicationUserPersistentStorage(
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
          this.hb.setApplicationUserPersistentStorage(
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
        o = this.hb.applicationUserPersistentStorage.cppModel || S9
      ;[
        S9,
        ...this.hb.applicationUserPersistentStorage.cppModelsState.cppModels,
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
            ? this.hb.setApplicationUserPersistentStorage("cppModel", undefined)
            : this.hb.setApplicationUserPersistentStorage("cppModel", h),
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
      const n = t ? this.isCppDisabledForLanguage(t) : !this.Ob().cppEnabled,
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
              : (this.hb.setApplicationUserPersistentStorage("cppEnabled", !l),
                l &&
                  this.hb.setApplicationUserPersistentStorage(
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
      for (this.nb.refreshAuthService(), this.Mb.clear(); this.Nb.firstChild; )
        this.Nb.removeChild(this.Nb.firstChild)
      const e = Xf(this.zb.activeTextEditorControl)
      e?.onDidChangeModelLanguage(this.updateStatusBarElement, this, this.Mb)
      const t = e?.getModel(),
        s = this.nb.isAuthenticated(),
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
            l.preventDefault(), this.nb.pay()
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
      return this.z
    }
    getMostRecentNonAbortedRequestId() {
      return this.w
    }
    eventShouldKillPrevCpp(e) {
      return e.altKey === true
    }
    Ob() {
      return this.hb.applicationUserPersistentStorage
    }
    Pb() {
      return this.hb.nonPersistentStorage
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
      const e = this.ub.getViewModel()
      for (const t of [...e.getEntries(0), ...e.getEntries(1)])
        if (
          t.id === "vscodevim.vim.primary" &&
          !["INSERT"].some((s) => t.container.innerText.includes(s))
        )
          return true
      return false
    }
    selectionIsNotMultipleLines() {
      const e = this.gb.getActiveCodeEditor(),
        t = e?.getSelection()
      return (
        e === null ||
        t === null ||
        t === undefined ||
        t.startLineNumber === t.endLineNumber
      )
    }
    cursorPredictorWouldTabInsteadOfAccepting() {
      const e = this.gb.getActiveCodeEditor()
      if (!e) return false
      const t = e.getModel()
      return t ? this.cursorPredictionService.shouldTabInsteadOfAccepting(e, t) : false
    }
    shouldTabInsteadOfAccepting() {
      if (this.isInVimNonInsertMode()) return false
      const e = this.gb.getActiveCodeEditor()
      if (!e) return false
      const t = e.getPosition(),
        s = e.getModel()
      if (!t || !s) return false
      const n = s.getEOL()
      if (s.getLineContent(t.lineNumber).trim() !== "") return false
      const r = this.Pb().cppState?.suggestion
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
      if (this.Ab.getValue(fUe) !== true) return false
      const t = this.Pb().cppState?.suggestion
      if (t !== undefined) {
        this.dontTriggerCppBecauseChangeIsFromCpp = true
        const s = await this.acceptNextWordSuggestion(
          this.holdDownAbortController,
        )
        if (s.type === Sp.AcceptedWord) {
          const n = this.gb.getActiveCodeEditor()
          return (
            n !== null && this.cleanupAfterNextWordSuggestion(n, s.edit), true
          )
        } else if (s.type === Sp.AcceptedAll) {
          const n = this.gb.getActiveCodeEditor()
          return n !== null && this.cleanupAfterAcceptSuggestion(n, t), true
        }
      }
      return false
    }
    markEditAsRejected(e, t) {
      const s = this.Ob().cppConfig
      if (
        s === undefined ||
        s.heuristics.includes(VB.SUGGESTING_RECENTLY_REJECTED_EDIT) === false ||
        s.recentlyRejectedEditThresholds === undefined
      )
        return
      const n = e.getModel()
      if (n === null) return
      const r = this.Pb().cppState?.suggestion
      if (r === undefined) return
      const o = r.uri,
        a = this.mb.asRelativePath(o)
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
        this.Ob().cppEnabled === true
          ? this.registerAllCppListeners()
          : this.reallowCopilotIfWePreviousHidCopilotSuggestions()
    }
    clearEditorListeners() {
      this.n.forEach((e) => e.forEach((t) => t.dispose())), this.n.clear()
    }
    async registerAllCppListeners() {
      let e = 0
      for (
        ;
        (await this.everythingProviderService.onlyLocalProvider?.runCommand(EditHistoryDiffFormatter.Ack, null)) !== true &&
        e < 1e3;

      )
        await new Promise((s) => setTimeout(s, 100))
      for (let s of this.gb.listCodeEditors())
        this.registerEditorListenersToEditor(s)
      this.n.set("global", [
        this.D(
          this.gb.onCodeEditorAdd((s) => {
            this.registerEditorListenersToEditor(s)
          }),
        ),
      ]),
        this.D(
          this.zb.onDidActiveEditorChange(() => {
            oa("onDidActiveEditorChange:")
            const s = this.gb.getActiveCodeEditor()
            if (s === null) {
              oa("onDidActiveEditorChange: editor is null")
              return
            }
            if (s.getModel() === null) {
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
              this.fireCppSuggestionDebounced(s, ll.EditorChange)
          }),
        )
      const t = VS()
      this.n.set("window", [
        this.D({
          dispose: () => {
            for (const s of t)
              s.window.document.removeEventListener(
                "keydown",
                this.handleKeyDownForCppKeys,
              )
          },
        }),
      ])
      for (const s of t)
        s.window.document.addEventListener(
          "keydown",
          this.handleKeyDownForCppKeys,
        )
    }
    async registerEditorListenersToEditor(e) {
      const t = e.getId()
      this.n.set(t, [
        e.onDidDispose(() => {
          this.n.get(t)?.forEach((s) => s.dispose()), this.n.delete(t)
        }),
      ])
      try {
        this.n.has(t) || this.n.set(t, []),
          this.n.get(t).push(
            this.D(
              e.onDidBlurEditorText(() => {
                oa("[Cpp] onDidBlurEditorText: resetting suggestions"),
                  this.rejectAndResetAllCppSuggestions(),
                  (this.numberOfClearedSuggestionsSinceLastAccept = 0)
              }),
            ),
          )
        const s = this.D(new NYi(e, this.xb.signatureHelpProvider))
        this.n.get(t).push(s),
          s !== undefined &&
            this.n.get(t).push(
              this.D(
                s.onChangedHints((r) => {
                  const o = this.cppTypeService.getRelevantParameterHints(e)
                  this.cppTypeService.onChangedParameterHints(e, r),
                    o.length === 0 &&
                      r !== undefined &&
                      this.fireCppSuggestionDebounced(e, ll.ParameterHints)
                }),
              ),
            )
        const n = e.getModel()
        n !== null && (await this.registerModelListenerToEditorModel(e, n)),
          this.n.has(t) || this.n.set(t, []),
          this.n.get(t).push(
            this.D(
              e.onDidChangeModel(() => {
                const r = e.getModel()
                r !== null && this.registerModelListenerToEditorModel(e, r)
              }),
            ),
          ),
          this.n.has(t) || this.n.set(t, []),
          this.n.get(t).push(
            this.D(
              e.onDidChangeCursorPosition((r) => {
                if (
                  this.gb.getActiveCodeEditor() !== e &&
                  !this.isReferenceFocused(e) &&
                  !this.isFindFocused(e)
                ) {
                  oa(
                    "[Cpp] onDidChangeCursorPosition: Suppressing trigger because editor is not active",
                  )
                  return
                }
                if (
                  ((this.ab = r.source === CUe),
                  r.source === CUe && this.Qb(e, r.position),
                  r.source === "cpp-peek" ||
                    r.source === "cpp-next-suggestion" ||
                    r.source === "cpp-revert" ||
                    r.source === CUe)
                ) {
                  oa(
                    `[Cpp] onDidChangeCursorPosition: exiting listener because source is ${r.source}`,
                  )
                  return
                } else if (r.reason === 2 && r.source === "modelChange") {
                  oa(
                    `[Cpp] onDidChangeCursorPosition: suppress b/c reason is ${r.reason} and source is ${r.source}`,
                  )
                  return
                }
                this.usingFusedCursorPredictionModel() &&
                  ((this.eb = undefined),
                  (this.cb = undefined),
                  this.cursorPredictionService.clearCursorPrediction())
                const o = e.getModel()?.uri
                if (
                  o === undefined ||
                  (this.updateRecentDiagnostics(o, r.position),
                  this.holdDownAbortController?.abort(),
                  (this.holdDownAbortController = undefined),
                  r.source === "restoreState")
                )
                  return
                let c = this.rb
                  .read({ resource: o })
                  .filter(
                    (h) =>
                      [Ri.Error, Ri.Warning].includes(h.severity) &&
                      Math.abs(h.startLineNumber - r.position.lineNumber) <=
                        ddi,
                  )
                  .filter(
                    (h) =>
                      h.severity === Ri.Error &&
                      Math.abs(h.startLineNumber - r.position.lineNumber) <= 1,
                  )
                if (this.Ob().cppEnabled === true) {
                  const h = e.getSelection()
                  if (h === null) {
                    oa("[Cpp] onDidChangeCursorPosition: selection is null")
                    return
                  }
                  const u = this.getCurrentSuggestion()
                  let d = false
                  const g = e.getModel()
                  if (g === null) return
                  if (u === undefined)
                    this.didShowGreenHighlights
                      ? ((this.didShowGreenHighlights = false),
                        this.clearDecorationsSlowEnumeratesAllDecorations())
                      : this.clearDecorationsFast()
                  else {
                    const y = {
                      range: g.getDecorationRange(u.decorationId),
                      id: u.decorationId,
                    }
                    if (y === undefined || y.range === null) return
                    const w = {
                      ...y.range,
                      endColumn: 1e4,
                      startLineNumber:
                        u.startingSuggestionRange.startLineNumber,
                      startColumn: u.startingSuggestionRange.startColumn,
                    }
                    ;(d = !!(y.range !== null && h.intersectRanges(w))),
                      d ||
                        (this.markEditAsRejected(e, false),
                        this.rejectAndResetAllCppSuggestions(),
                        this.cursorPredictionService.maybeShowHintLineWidget())
                  }
                  if (
                    !this.R.find(
                      (b) =>
                        b.modelId === g.id &&
                        b.modelVersion === g.getVersionId() &&
                        b.position !== undefined &&
                        b.position.equals(r.position),
                    ) &&
                    !d
                  )
                    if (this.Ob().cppFireOnEveryCursorChange === true)
                      this.fireCppSuggestionDebounced(e, ll.LineChange)
                    else if (
                      (c.length > 0 || Ago) &&
                      this.q !== r.position.lineNumber
                    )
                      this.fireCppSuggestionDebounced(e, ll.LinterErrors)
                    else {
                      const b = this.q === r.position.lineNumber,
                        y = this.Rb(),
                        w = this.Sb()
                      !b && !y && !w
                        ? this.fireCppSuggestionDebounced(e, ll.LineChange)
                        : oa(
                            "[Cpp] Suppressed cursor movement trigger. Conditions (all should be false to trigger):",
                            JSON.stringify({
                              linesAreTheSame: b,
                              hasRejectedTooManySuggestions: y,
                              isUserReadingCode: w,
                            }),
                          )
                    }
                  else
                    oa(
                      "[Cpp] onDidChangeCursorPosition: suppress b/c shouldTrigger is false",
                    )
                  this.q = r.position.lineNumber
                }
                this.Ob().cppAutoImportEnabled &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: e,
                    uri: o,
                    source: "onDidChangeCursorPosition",
                  })
              }),
            ),
          ),
          this.Tb(e)
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
        (this.Ob().cppConfig?.maxNumberOfClearedSuggestionsSinceLastAccept ??
          20)
      )
    }
    Sb() {
      return (
        this.lastEditTime === undefined || Date.now() - this.lastEditTime >= 6e4
      )
    }
    Tb(e) {
      const t = e.getId(),
        s = this.Ob().cppConfig?.excludeRecentlyViewedFilesPatterns ?? []
      this.n.has(t) || this.n.set(t, []),
        this.n.get(t).push(
          this.D(
            e.onDidFocusEditorText(() => {
              const n = e.getModel()
              if (n == null) return
              const r = this.mb.asRelativePath(n.uri),
                o = [
                  ce.file,
                  ce.inMemory,
                  ce.vscodeNotebookCell,
                  ce.vscodeFileResource,
                  ce.vscodeRemote,
                  ce.vscodeRemoteResource,
                  ce.vscodeManagedRemoteResource,
                ]
              if (
                !Pn(e) ||
                s.some((c) => r.includes(c)) ||
                !o.some((c) => Cg(n.uri, c))
              )
                return
              const a = e.getVisibleRanges(),
                l = n.uri
              this.j.set(l, { visibleRanges: a, lastViewedAt: Date.now() }),
                this.Ob().cppAutoImportEnabled &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: e,
                    uri: l,
                    source: "onDidFocusEditorText",
                  })
            }),
          ),
        ),
        this.n.has(t) || this.n.set(t, []),
        this.n.get(t).push(
          this.D(
            e.onDidScrollChange(() => {
              const n = e.getModel(),
                r = n?.uri
              if (n == null || r == null) return
              const o = this.mb.asRelativePath(r),
                a = [
                  ce.file,
                  ce.inMemory,
                  ce.vscodeNotebookCell,
                  ce.vscodeFileResource,
                  ce.vscodeRemote,
                  ce.vscodeRemoteResource,
                  ce.vscodeManagedRemoteResource,
                ]
              !Pn(e) ||
                s.some((l) => o.includes(l)) ||
                !a.some((l) => Cg(r, l)) ||
                this.j.set(r, {
                  visibleRanges: e.getVisibleRanges(),
                  lastViewedAt: Date.now(),
                })
            }),
          ),
        )
    }
    async fireOnCacheMiss(contentChangeEvent, editor, model, EOL, options) {
      editor !== null
        ? await this.fireCppSuggestionDebouncedDiffHistory(contentChangeEvent, editor, ll.Typing, EOL)
        : await this.formatDiffHistory(contentChangeEvent, editor, model, EOL)
    }
    async triggerCppIfLintErrorComesUp(e, t, s, n, r, o) {
      const a = this.mb.asRelativePath(s?.uri ?? U.file("")),
        l = new AbortController()
      this.triggerCppOnLintErrorAbortControllers.set(a, l)
      let c = false
      l.signal.addEventListener("abort", () => {
        c = true
      })
      for (let h = 0; h < r / 50; h++) {
        if ((await new Promise((p) => setTimeout(p, 50)), c)) return
        const u = this.rb.read({ resource: s.uri }),
          d = t.getPosition()
        if (d === null) return
        if (
          u.filter(
            (p) =>
              p.severity === Ri.Error &&
              Math.abs(p.startLineNumber - d.lineNumber) <= 1,
          ).length > 0
        ) {
          this.fireCppSuggestionFromTrigger(s.uri, t, ll.LinterErrors)
          break
        }
      }
    }
    async continueModelChangeListener(contentChangeEvent, editor, model, EOL, options = { removeGreens: true }, context) {
      if (this.Pb().cppState?.shouldNotTrigger === true) {
        oa("[Cpp] continueModelChangeListener - shouldNotTrigger is true")
        return
      }
      if (this.Wb(model)) return
      const formatAndUpdate = async () => {
        await this.formatDiffHistory(contentChangeEvent, editor, model, EOL), EF.get(editor)?.update()
      }
      this.ab = false
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
        return MMs(contentChangeEvent.changes) && adjustSuggestionPosition(), formatAndUpdate()
      const shouldAbortAll = this.Ub(contentChangeEvent) || this.Ob().cppCachedTypeaheadEnabled !== true
      if (
        (this.markEditAsRejected(editor, true),
        this.rejectAndResetAllCppSuggestions({ removeGreens: false, abortAll: shouldAbortAll }),
        (!this.Ob().cppAutoImportEnabled ||
          !this.importPredictionService.isShowingImportSuggestion()) &&
          this.allowCppTriggerInComments(editor))
      ) {
        const cachedSuggestion = this.N.popCacheHit(model)
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
    Vb(e) {
      const t =
          performance.now() + performance.timeOrigin - e.suggestionTriggerTime,
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
      if (this.Wb(model)) {
        oa(
          `[Cpp] registerModelListenerToEditorModel: Suppressing trigger because file is too large: filename: ${model.uri.fsPath}, length: ${model.getValueLength()}`,
        )
        return
      }
      const relativePath = this.mb.asRelativePath(model?.uri ?? U.file(""))
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
      this.editorListenersMap.forEach((listenersMap) => {
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
                this.editorListenersMap.has(relativePath) &&
                  this.editorListenersMap.get(relativePath).size > 1 &&
                  editor.getId() !== this.gb.getActiveCodeEditor()?.getId())
              ) {
                oa(
                  "[Cpp] onDidChangeModelContent: Suppressing trigger because editor is not active",
                )
                return
              }
              if (
                ((this.bb = []),
                this.N.addEditAndUpdateCachedSuggestions(contentChangeEvent, model),
                this.triggerCppOnLintErrorAbortControllers.get(relativePath)?.abort(),
                this.Ob().cppEnabled !== false)
              ) {
                if (
                  this.Ob().cppAutoImportEnabled &&
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
                  (EF.get(editor)?.setChangesSinceLastUpdate(true),
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
            this.fireCppSuggestionDebounced(editor, ll.LspSuggestions)
          }),
        ),
        disposables.push(this.cppTypeService.registerCancelListener(editor, model, relativePath, r))),
        this.editorListenersMap.has(relativePath) || this.editorListenersMap.set(relativePath, new Map())
      const editorListeners = this.editorListenersMap.get(relativePath),
        editorId = editor.getId()
      editorListeners?.has(editorId) || editorListeners?.set(editorId, []),
        editorListeners?.get(editorId)?.push(...disposables),
        this.Ob().cppAutoImportEnabled &&
          editorListeners?.get(editorId)?.push(
            this.D(
              this.rb.onMarkerChanged(async (changedUris) => {
                this.gb.getActiveCodeEditor()?.getId() === editor.getId() &&
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
    Wb(e) {
      return e.getValueLength() > hdi
    }
    fireCppSuggestionDebounced(e, t) {
      if (!e) return
      const s = e.getModel(),
        n = s?.uri
      if (!n || this.Wb(s)) return
      const { requestIdsToCancel: r, ...o } = this.Z.runRequest()
      this.R.forEach((l) => {
        r.includes(l.generationUUID) && l.abortController.abort()
      }),
        oa(`[Cpp] fireDebounced post-abort with source: ${t}`)
      const a = e.getSelection()
      if (
        a !== null &&
        !this.isFindFocused(e) &&
        (a.startLineNumber !== a.endLineNumber || a.startColumn !== a.endColumn)
      ) {
        oa("skipping due to selection")
        return
      }
      this.fireCppSuggestionFromTrigger(n, e, t, undefined, {
        ...o,
        modelVersion: s.getVersionId(),
        modelId: s.id,
        position: e.getPosition() ?? undefined,
      })
    }
    async fireCppSuggestionDebouncedDiffHistory(contentChangeEvent, editor, intent, EOL) {
      if (!editor) return
      const model = editor.getModel(),
        uri = model?.uri
      if (!uri || this.Wb(model)) return
      const selectionRange = editor.getSelection()
      if (
        selectionRange !== null &&
        (selectionRange.startLineNumber !== selectionRange.endLineNumber || selectionRange.startColumn !== selectionRange.endColumn)
      )
        return
      const { requestIdsToCancel: requestIdsToCancel, ...restRequestOpts } = this.Z.runRequest()
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
    async fireCppSuggestionFromTrigger(e, t, s, n, r) {
      if (!this.isCppEnabled(t)) {
        this.reallowCopilotIfWePreviousHidCopilotSuggestions()
        return
      }
      const o = t.getModel()
      if (o === null || this.Wb(o)) return
      if (
        this.getCurrentSuggestion() !== undefined &&
        s !== ll.LinterErrors &&
        s !== ll.CursorPrediction &&
        s !== ll.LspSuggestions
      ) {
        EF.get(t)?.update()
        return
      }
      let a
      try {
        if (
          (s !== ll.CursorPrediction &&
            this.Ob().cppCachedTypeaheadEnabled !== true &&
            (this.R.forEach((p) => {
              p.source !== ll.CursorPrediction && p.abortController.abort()
            }),
            (this.R = this.R.filter((p) => p.source === ll.CursorPrediction))),
          this.R.length > this.Xb && this.fb)
        ) {
          const p = performance.now() + performance.timeOrigin
          oa(
            `[Cpp] stream debug info: Too many streams (${this.R.length}) streams (now: ${p})`,
            JSON.stringify(
              this.R.map((m) => ({
                uuid: m.generationUUID,
                source: m.source,
                startTime: m.startTime,
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
        let l, c, h, u, d
        r !== undefined
          ? ((l = r.abortController),
            (a = r.generationUUID),
            (c = r.startTime),
            (h = r.modelVersion),
            (u = r.modelId),
            (d = r.position),
            this.R.push({ ...r, source: s }))
          : ((a = rt()),
            (l = new AbortController()),
            (c = performance.now() + performance.timeOrigin),
            (h = o.getVersionId()),
            (u = o.id),
            (d = t.getPosition() ?? undefined),
            this.R.push({
              startTime: c,
              generationUUID: a,
              abortController: l,
              source: s,
              modelVersion: h,
              modelId: u,
              position: d,
            })),
          (this.latestGenerationUUID = a)
        let g = false
        if (
          (l.signal.addEventListener("abort", () => {
            ;(g = true), (this.R = this.R.filter((p) => p.generationUUID !== a))
          }),
          g)
        )
          return
        await this.immediatelyFireCppFromTrigger(e, t, l, a, c, s, {
          overridePosition: n,
        })
      } catch (l) {
        console.error("Cpp: error when triggering from source", s, l, l?.stack),
          (this.R = this.R.filter((c) => c.generationUUID !== a))
      }
    }
    isCppEnabled(e) {
      return this.isAllowedCpp() && this.isCppEnabledForEditor(e)
    }
    async immediatelyFireCppFromTrigger(e, t, s, n, r, o, a) {
      if (
        this.hb.applicationUserPersistentStorage.oneTimeSettings
          .shouldDisableGithubCopilot === true
      )
        try {
          const p = this.Ab.getValue("github.copilot")
          p !== null &&
            typeof p == "object" &&
            p.enable["*"] === true &&
            this.kb.executeCommand("github.copilot.toggleCopilot")
        } finally {
          this.hb.setApplicationUserPersistentStorage(
            "oneTimeSettings",
            "shouldDisableGithubCopilot",
            false,
          )
        }
      this.disableAndHideCopilotSuggestion(t)
      const l = t.getModel()
      if (l === null || this.Wb(l)) return
      const c = l.getValue(),
        h = l.getVersionId(),
        u = a?.overridePosition ?? t.getPosition()
      if (u === null || c === undefined) {
        oa("[Cpp] Bad Case: position or modelValue is undefined"),
          this.reallowCopilotIfWePreviousHidCopilotSuggestions()
        return
      }
      if (
        (this.usingFusedCursorPredictionModel() &&
          this.cursorPredictionService.isShowingCursorPrediction(t) &&
          o !== ll.CursorPrediction &&
          o !== ll.LineChange) ||
        (!this.allowCppTriggerInComments(t, u) && o !== ll.CursorPrediction)
      )
        return
      if (
        this.overlapsInlineDiff(e, u.lineNumber, {
          onlyCheckCurrentlyGenerating: true,
        })
      ) {
        oa("[Cpp] Skipping because we are in an inline diff.")
        return
      }
      if (
        this.hb.nonPersistentStorage.cppState
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
          intent: o,
          generationUUID: n,
        })
      });
      const d = performance.now(),
        { success: g } = await this.immediatelyFireCppWithSpecifiedPosition({
          uri: e,
          editor: t,
          position: u,
          abortController: s,
          generationUUID: n,
          modelValue: c,
          modelVersion: h,
          context: { startOfCpp: r },
          source: o,
        })
      g
        ? this.disableAndHideCopilotSuggestion(t)
        : (this.latestGenerationUUID === n &&
            this.reallowCopilotIfWePreviousHidCopilotSuggestions(),
          (this.R = this.R.filter((p) => p.generationUUID !== n))),
        this.metricsService.distribution({
          stat: "cppclient.immediatelyFire.getExpandedRange",
          value: d - r,
        })
    }
    allowCppTriggerInComments(e, t) {
      if (
        this.hb.applicationUserPersistentStorage.cppTriggerInComments === false
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
      return !!this.Ob()?.cppConfig?.isFusedCursorPredictionModel
    }
    overlapsInlineDiff(e, t, { onlyCheckCurrentlyGenerating: s }) {
      const n = this.hb.nonPersistentStorage.inlineDiffs
      if (n === undefined) return false
      const r = this.hb.nonPersistentStorage.inprogressAIGenerations.map(
        (o) => o.generationUUID,
      )
      return n.some((o) => {
        if (s && !r.includes(o.generationUUID)) return false
        const a =
            t >= o.currentRange.startLineNumber &&
            t <= o.currentRange.endLineNumberExclusive,
          l = ys.isEqual(o.uri, e) || e.fsPath === o.uri.fsPath
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
    updateRecentDiagnostics(e, t) {
      const s = this.rb.read({ resource: e })
      let n,
        r = this.filterLinterErrors(s).map((l) => ({
          message: l.message,
          relatedInformation: l.relatedInformation ?? [],
          source: l.source,
          severity: dze(l.severity),
          uri: e.toString(),
          range: {
            startPosition: { line: l.startLineNumber, column: l.startColumn },
            endPosition: { line: l.endLineNumber, column: l.endColumn },
          },
        }))
      r.length > 0 &&
        ((r = r.filter(
          (l, c, h) =>
            c ===
            h.findIndex(
              (u) =>
                u.range.startPosition.line === l.range.startPosition.line &&
                u.range.startPosition.column === l.range.startPosition.column &&
                u.range.endPosition.line === l.range.endPosition.line &&
                u.range.endPosition.column === l.range.endPosition.column &&
                u.message === l.message,
            ),
        )),
        (n = new Cf({
          relativeWorkspacePath: this.mb.asRelativePath(e),
          errors: r,
          fileContents: undefined,
        })))
      const o = n
      o !== undefined &&
        o.errors.length > 0 &&
        this.J.push(
          ...o.errors
            .filter((l) => l.range !== undefined)
            .map((l) => ({
              errors: [
                {
                  ...l,
                  source: "",
                  uri: e.toString(),
                  relatedInformation: l.relatedInformation,
                  severity: l.severity ?? uI.UNSPECIFIED,
                  range: {
                    startPosition: {
                      line: l.range?.startPosition?.line || 0,
                      column: l.range?.startPosition?.column || 0,
                    },
                    endPosition: {
                      line: l.range?.endPosition?.line || 0,
                      column: l.range?.endPosition?.column || 0,
                    },
                  },
                },
              ],
              timestamp: Date.now(),
            })),
        ),
        this.J.sort((l, c) => c.timestamp - l.timestamp),
        (this.J = this.J.filter(
          (l, c, h) =>
            c ===
            h.findIndex(
              (u) =>
                u.errors[0].range.startPosition.line ===
                  l.errors[0].range.startPosition.line &&
                u.errors[0].range.startPosition.column ===
                  l.errors[0].range.startPosition.column &&
                u.errors[0].range.endPosition.line ===
                  l.errors[0].range.endPosition.line &&
                u.errors[0].range.endPosition.column ===
                  l.errors[0].range.endPosition.column &&
                u.errors[0].message === l.errors[0].message &&
                u.errors[0].uri === l.errors[0].uri,
            ),
        ))
      const a = s.map((l) => ({
        message: l.message,
        relatedInformation: BMs(l.relatedInformation),
        source: l.source,
        uri: e.toString(),
        range: {
          startPosition: { line: l.startLineNumber, column: l.startColumn },
          endPosition: { line: l.endLineNumber, column: l.endColumn },
        },
      }))
      ;(this.J = this.J.filter((l) =>
        a.some(
          (c) =>
            c.message === l.errors[0].message &&
            c.uri === l.errors[0].uri &&
            c.range.startPosition.line ===
              l.errors[0].range.startPosition.line &&
            c.range.startPosition.column ===
              l.errors[0].range.startPosition.column &&
            c.range.endPosition.line === l.errors[0].range.endPosition.line &&
            c.range.endPosition.column === l.errors[0].range.endPosition.column,
        ),
      )),
        (this.J = this.J.filter((l) => Date.now() - l.timestamp < 1e3 * 20)),
        (this.J = this.J.slice(0, Math.min(this.J.length, 10)))
    }
    getRecentAndNearLocationLinterErrors(e, t) {
      const s = this.rb.read({ resource: e })
      let n
      const r = this.filterLinterErrors(s)
      let a = (t !== undefined ? [t, ...r.filter((c) => c !== t)] : r)
        .map((c) => ({
          message: c.message,
          relatedInformation: BMs(c.relatedInformation),
          source: c.source,
          range: {
            startPosition: { line: c.startLineNumber, column: c.startColumn },
            endPosition: { line: c.endLineNumber, column: c.endColumn },
          },
          severity: dze(c.severity),
          uri: e.toString(),
        }))
        .slice(0, Ngo)
      const l = Date.now() - 2e4
      return (
        a.push(
          ...this.J.filter((c) => c.timestamp > l)
            .map((c) => c.errors)
            .flat()
            .slice(0, Lgo),
        ),
        (a = a.filter(
          (c, h, u) =>
            h ===
            u.findIndex(
              (d) =>
                d.range.startPosition.line === c.range.startPosition.line &&
                d.range.startPosition.column === c.range.startPosition.column &&
                d.range.endPosition.line === c.range.endPosition.line &&
                d.range.endPosition.column === c.range.endPosition.column &&
                d.message === c.message &&
                d.uri === c.uri,
            ),
        )),
        a.length > 0 &&
          (n = new Cf({
            relativeWorkspacePath: this.mb.asRelativePath(e),
            errors: a,
            fileContents: undefined,
          })),
        n
      )
    }
    showNearLocationLintErrorsToImportPredictionService({
      editor: e,
      uri: t,
      source: s,
    }) {
      const n = e.getPosition()
      if (n === null) return
      const r = this.rb.read({ resource: t })
      let a = this.filterLinterErrors(r, Ri.Warning).filter(
        (l) => Math.abs(l.startLineNumber - n.lineNumber) <= ddi,
      )
      this.importPredictionService.handleUpdatedLintErrors({
        openEditor: e,
        uri: t,
        position: n,
        allMarkers: a,
        source: s,
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
      editor: e,
      uri: t,
      modelValue: s,
      modelVersion: n,
      position: r,
      source: o,
      shouldRelyOnFileSyncForFile: a,
    }) {
      const l = this.getRecentAndNearLocationLinterErrors(t),
        c = e.getModel()
      if (c === null) throw new Error("Model is null")
      const h = c.getEOL()
      let u
      if (
        (t.scheme === "vscode-notebook-cell" && r !== null
          ? (u = await this.fastCurrentFileInfoForNotebooks(c, e, r, a))
          : (u = await this.fastCurrentFileInfoDoesNotWorkForNotebooks(
              t,
              s,
              r,
              a,
              n,
            )),
        u !== undefined && u.cursorPosition !== undefined)
      ) {
        const D = !a
          ? this.Zb(u?.contents ?? "", u.cursorPosition.line, h, c)
          : u?.contents
        u.contents = D ?? ""
      }
      if (this.S === undefined) throw new Error("Diffing provider is undefined")
      let d
      const g = performance.now()
      let p
      const m = this.formattedDiffCache.get(this.getModelKey(c))
      if (m === undefined) {
        const E = await this.getGlobalDiffTrajectories()
        if (E === undefined)
          throw new Error(
            "Compile Diff Trajectories not registered in extension host",
          )
        ;(p = E), this.formattedDiffCache.set(this.getModelKey(c), p)
      } else p = m
      const b = this.mb.asRelativePath(c.uri),
        y = p.find((E) => E.fileName === b)
      if (y) {
        const E = y.diffHistory.at(-1)
      }
      d = {
        fileDiffHistories: p,
        diffHistory: [],
        blockDiffPatches: [],
        mergedDiffHistories: [],
      }
      const w = performance.now()
      this.metricsService.distribution({
        stat: "cppclient.immediatelyFire.diffHistory",
        value: w - g,
      })
      const C = performance.now(),
        S =
          this.Ob().cppConfig?.enableRvfTracking === true
            ? await this.$b(e, t)
            : [],
        x = performance.now()
      this.metricsService.distribution({
        stat: "cppclient.immediatelyFire.additionalFiles",
        value: x - C,
      })
      const k =
        o === ll.ManualTrigger
          ? hG.OP
          : (this.hb.applicationUserPersistentStorage.cppControlToken ?? undefined)
      return {
        ...d,
        linterErrors: l,
        currentFile: u,
        enableMoreContext: this.Ob().cppExtraContextEnabled,
        additionalFiles: S,
        controlToken: k,
        cppIntentInfo: { source: o },
        clientTime: Date.now(),
        clientTimezoneOffset: new Date().getTimezoneOffset(),
      }
    }
    async $b(e, t) {
      try {
        const s = this.zb.visibleEditorPanes,
          n = [],
          r = this.mb.asRelativePath(t),
          o = this.Ob().cppConfig?.shouldFetchRvfText === true,
          a = (u, d) =>
            d.map((g) => ({
              startLineNumber: g.startLineNumber,
              startColumn: g.startColumn,
              endLineNumber: g.endLineNumber,
              endColumn: g.endColumn,
              content:
                u !== null
                  ? u
                      .getValueInRange(g)
                      .split(u.getEOL())
                      .map((p) =>
                        p.length > 512 ? p.substring(0, 512) + "..." : p,
                      ).join(`
`)
                  : "",
            }))
        for (const u of s) {
          const d = u.getControl()
          if (d !== undefined && Pn(d)) {
            if (d.getId() === e.getId()) continue
            const g = d.getModel()
            if (g === null) continue
            const p = a(g, d.getVisibleRanges())
            n.push({
              relativeWorkspacePath: this.mb.asRelativePath(g.uri),
              visibleRangeContent: p.map((m) => m.content),
              startLineNumberOneIndexed: p.map((m) => m.startLineNumber),
              visibleRanges: p.map((m) => ({
                startLineNumber: m.startLineNumber,
                endLineNumberInclusive: m.endLineNumber,
              })),
              isOpen: true,
              lastViewedAt: undefined,
            })
          }
        }
        const l = [],
          c = new J()
        try {
          for (const [u, d] of this.j.entries())
            if (t !== u)
              try {
                const g = this.mb.asRelativePath(u)
                if (
                  g === undefined ||
                  n.find((p) => p.relativeWorkspacePath === g) ||
                  r === g
                )
                  continue
                if (d.lastViewedAt < Date.now() - Rgo) l.push(u)
                else if (this.ib.canHandleResource(u)) {
                  let p = null
                  if (o) {
                    const b = await this.ib.createModelReference(u)
                    if (
                      (c.add(b), (p = b.object.textEditorModel), p === undefined)
                    )
                      continue
                    if (p.getValueLength() > hdi) {
                      l.push(u)
                      continue
                    }
                  }
                  const m = a(p, d.visibleRanges)
                  n.push({
                    relativeWorkspacePath: g,
                    isOpen: false,
                    visibleRangeContent: m.map((b) => b.content),
                    startLineNumberOneIndexed: m.map((b) => b.startLineNumber),
                    visibleRanges: m.map((b) => ({
                      startLineNumber: b.startLineNumber,
                      endLineNumberInclusive: b.endLineNumber,
                    })),
                    lastViewedAt: d.lastViewedAt,
                  })
                }
              } catch (g) {
                zdt(
                  `[Cpp] Additional file info: error in recentlyViewedFileURI error: ${g} ${g.stack}`,
                ),
                  l.push(u)
                continue
              }
        } finally {
          c.dispose()
        }
        for (const u of l) this.j.delete(u)
        return n.sort((u, d) =>
          u.isOpen !== d.isOpen
            ? u.isOpen
              ? 1
              : -1
            : u.lastViewedAt === undefined || d.lastViewedAt === undefined
              ? 0
              : u.lastViewedAt - d.lastViewedAt,
        )
      } catch (s) {
        return (
          zdt(
            `[Cpp] Bad Case: Error in getAdditionalFilesInfo: ${s} stack: ${s.stack}`,
          ),
          []
        )
      }
    }
    getWorkspaceId() {
      let e = this.hb.workspaceUserPersistentStorage.uniqueCppWorkspaceId
      return (
        e === undefined &&
          ((e =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)),
          this.hb.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", e)),
        `${e}-${Tgo}`
      )
    }
    isReferenceFocused(e) {
      if (!this.hb.applicationUserPersistentStorage.cppInPeek) return false
      const t = this.gb.getActiveCodeEditor()
      if (t === null) return false
      const s = mR.get(t)?.getWidget()
      return s !== undefined && s.hasFocus() && s.getPreviewEditor() === e
    }
    isFindActive(e) {
      if (
        this.hb.applicationUserPersistentStorage.cppInCmdF !== true ||
        e === undefined
      )
        return false
      const t = fm.get(e)
      return t instanceof gle && t.isActive()
    }
    isFindFocused(e) {
      if (!this.hb.applicationUserPersistentStorage.cppInCmdF || e === undefined)
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
      if (!this.hb.applicationUserPersistentStorage.cppInCmdF) return
      const e = this.gb.getActiveCodeEditor()
      if (e !== null && this.isFindActive(e)) {
        const t = fm.get(e)
        t instanceof gle && t.focusFindInputWithoutSelecting()
      }
    }
    isProblemFocused(e) {
      if (!this.hb.applicationUserPersistentStorage.cppInPeek || !e) return false
      const t = this.gb.getActiveCodeEditor()
      return e !== t
        ? false
        : (this.Eb.getActiveViewWithId(xr.MARKERS_VIEW_ID)?.isFocused() ?? false)
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
      const e = this.gb.getActiveCodeEditor()
      return e?.hasTextFocus() === true
        ? e
        : (this.gb
            .listCodeEditors()
            .find((t) => this.isTextFocusedOrSimilarlyFocused(t)) ?? e)
    }
    getNotebookCellInfo(e, t, s) {
      if (!e.uri.scheme.startsWith("vscode-notebook-cell")) return null
      const n = Gr.parse(e.uri),
        r = this.yb.getNotebookEditorByCellEditorId(t.getId())
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
      return this.Ob().cppModel !== "" ? this.Ob().cppModel : undefined
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
      if (this.S === undefined)
        return (
          oa("[Cpp] Bad Case: diffingProvider is undefined"), { success: false }
        )
      this.fastPeriodicallyReloadCppConfig()
      const shouldRelyOnFileSync =
          (await this.everythingProviderService.onlyLocalProvider?.runCommand(
            GB.ShouldRelyOnFileSyncForFile,
            {
              relativeWorkspacePath: this.mb.asRelativePath(uri),
              modelVersion: modelVersion,
            },
          )) ?? false,
        cppConfig = this.Ob().cppConfig
      if (
        (!shouldRelyOnFileSync || !cppConfig?.enableFilesyncDebounceSkipping) &&
        (await this.Z.shouldDebounce(generationUUID))
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
      let workspaceId = this.hb.workspaceUserPersistentStorage.uniqueCppWorkspaceId
      workspaceId === undefined &&
        ((workspaceId =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)),
        this.hb.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", workspaceId)),
        source !== ll.CursorPrediction &&
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
        this.S?.cancelCpp(generationUUID)
      }),
        this.X !== undefined &&
          this.metricsService.distribution({
            stat: "cppclient.beforeStreamCpp",
            value: performance.now() - this.X,
          }),
        (this.y = generationUUID)
      const relevantSuggestions = this.cppTypeService.getRelevantSuggestions(model, this.mb.asRelativePath(model.uri))
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
        await this.S.streamCpp(
          Yt.wrap(
            new D1t({
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
      const cppProvider = this.S,
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
        this.Ob().chunkedStreamingEnabledV2 === true
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
        ((this.w = generationUUID),
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
        (this.Ob().cppAutoImportEnabled && this.importPredictionService.isShowingImportSuggestion())
          ? ((isSuggestionDisplayed = true),
            this.N.addSuggestion({ ...suggestion, abortController: abortController }, model, editor))
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
        if (this.N.getMatchingSuggestion(suggestion.uniqueId) !== undefined) {
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
          this.N.replaceSuggestionOnChunkedFollowup(suggestion.uniqueId, newSuggestion)
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
        this.M.addSuggestion(newSuggestion),
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
            t && this.Ob().cppConfig?.isGhostText !== true
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
        this.Ob().cppHighlightCursor === true &&
          ((s = false), this.showCursorHighlight()),
        e.deltaDecorations([], [this.getSuggestionDecorationOptions(t, s)])[0]
      )
    }
    removeStreamingBackgroundDecoration(e, t) {
      e.deltaDecorations([t], [])
    }
    updateSuggestionStateHalfSilently(e) {
      const t = this.Pb().cppState
      if (!(t === undefined || t.suggestion === undefined))
        return this.createOrUpdateSuggestionStateHalfSilently(e)
    }
    createOrUpdateSuggestionStateHalfSilently(e) {
      this.Pb().cppState !== undefined &&
        this.hb.setNonPersistentStorage("cppState", "suggestion", (s) =>
          s === undefined ? e : { ...s, ...e },
        )
    }
    updateSuggestionState(e) {
      if (this.Pb().cppState?.suggestion !== undefined)
        return this.createOrUpdateSuggestionState(e)
    }
    createOrUpdateSuggestionState(e) {
      this.Pb().cppState !== undefined &&
        this.hb.setNonPersistentStorage("cppState", (s) => {
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
        currentSuggestion.source !== ll.CursorPrediction &&
        suggestion.source === ll.CursorPrediction
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
        (this.z = recoverableData.requestId),
        this.Ob().cppAutoImportEnabled && this.importPredictionService.showCorrectUI(editor),
        true
      )
    }
    getCurrentSuggestion() {
      return this.Pb().cppState?.suggestion
    }
    updateSuggestionGreenHighlights(editorModel, suggestion, diffs, shouldUpdateUI = true) {
      const suggestionRange = F_(editorModel, suggestion)
      if (suggestionRange === null) return
      const { greenRanges: greenRanges } = OFt(diffs, suggestionRange, "post-change")
      this.getCurrentSuggestion() &&
        (this.updateSuggestionStateHalfSilently({ greens: greenRanges }),
        this.Ob().cppAutoImportEnabled && this.importPredictionService.handleNewGreens(editorModel, greenRanges),
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
      const l = this.Cb.getLanguageConfiguration(e.getLanguageId()),
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
            this.L.addEdit(c.edit),
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
            diffsToUse = this.Q.get(suggestion.decorationId) === k7.PreviewBox ? wordDiffs : charDiffs
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
              diffsToUse = this.Q.get(suggestion.decorationId) === k7.PreviewBox ? wordDiffs : charDiffs
            return this.updateSuggestionGreenHighlights(editorModel, suggestion, diffsToUse), nextWordResult
          }
        }
      return onlyAcceptFirstWord ? await acceptNextWord(suggestionRange) : await acceptAllChanges(suggestionRange)
    }
    increaseCppUsage() {
      this.hb.setApplicationUserPersistentStorage(
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
      this.ob.publicLogCapture("cursor.peekcppsuggestion"),
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
      const o = this.mb.resolveRelativePath(fusedCursorPrediction.relativePath)
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
        u = ys.isEqual(t.uri, l.uri)
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
          ? (g, p, m, b) => {
              this.fireCppSuggestionFromTrigger(g, p, m, b)
            }
          : null,
      })
    }
    removeSuggestion() {
      const e = this.Pb().cppState
      e !== undefined &&
        this.hb.setNonPersistentStorage("cppState", {
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
            this.Ob().cppConfig?.isGhostText &&
              !this.Pb().cppState?.suggestion?.immediatelySeen,
          ),
          this.cppEventLoggerService.recordAcceptSuggestionEvent(model, visibleSuggestion),
          this.hb.applicationUserPersistentStorage.checklistState
            ?.doneAutoComplete !== true)
        ) {
          const checklistState = this.hb.applicationUserPersistentStorage.checklistState
          this.hb.setApplicationUserPersistentStorage(
            "checklistState",
            (state) => ({ ...(state ?? {}), doneAutoComplete: true }),
          )
        }
        if (visibleSuggestion.onAcceptDisplayId !== undefined) {
          const matchingSuggestion = this.M.getAndEvictMatchingSuggestion(visibleSuggestion.onAcceptDisplayId)
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
        (this.ob.publicLogCapture("cursor.revertcppsuggestion"),
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
        this.ob.publicLogCapture("cursor.rejectcppsuggestion"))
    }
    rejectAndResetAllCppSuggestions(e = { removeGreens: true, abortAll: true }) {
      e.abortAll && this.abortAllCppRequests()
      const t = this.gb.getActiveCodeEditor()
      t != null &&
        (this.rejectSuggestionForTelemetryIfExists(t),
        this.revertSuggestion(t, e),
        this.clearSuggestions(undefined, e))
    }
    clearDecorationsSlowEnumeratesAllDecorations() {
      const e = this.gb.getActiveCodeEditor(),
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
      r.length > 0 && t.deltaDecorations(r, []), this.O.delete(t.uri)
      const o = this.getCurrentSuggestion()
      o !== undefined &&
        o.decorationId !== undefined &&
        t.deltaDecorations([o.decorationId], [])
    }
    clearDecorationsFast(e = { removeGreens: true }) {
      const s = this.gb.getActiveCodeEditor()?.getModel()
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
        this.Pb().cppState?.suggestion !== undefined &&
          (this.numberOfClearedSuggestionsSinceLastAccept += 1),
        this.hb.setNonPersistentStorage("cppState", "suggestion", undefined)
    }
    removeAllHighlights(e, t = { removeGreens: true }) {
      this.hideCursorHighlight(),
        t.removeGreens !== false && this.clearAllGreenHighlights(e)
    }
    isOnShortestEditPath({ event: e, model: t }, s) {
      const n = this.gb.getActiveCodeEditor()
      if (n == null || n.getModel()?.id !== t.id) return false
      const r = this.getCurrentSuggestion()
      if (r === undefined) return false
      let o
      if (s === undefined) {
        const l = this.getPreviousModelValue(t)
        if (l === undefined) return false
        o = l
      } else o = s
      const a = jBt(o, t.uri)
      return this.L.checkChangeExists(e, true)
        ? true
        : qfo({
            event: e,
            model: t,
            proposedSuggestion: r,
            previousModelValue: a,
          })
    }
    async formatDiffHistory(contentChangeEvent, editor, model, eol) {
      if (model.getValueLength() > hdi || model.isDisposed()) return
      const formattedDiff = await this.everythingProviderService.onlyLocalProvider?.runCommand(
        EditHistoryDiffFormatter.FormatDiffHistory,
        {
          uri: model.uri.toString(),
          changes: contentChangeEvent.changes,
          behavior: this.Ob().cppConfig?.mergeBehavior,
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
    async *streamCpp(signal, cppHandler, context) {
      let hasYieldedRange = false,
        hasYieldedDoneEdit = false,
        hasYieldedModelInfo = false,
        hasSeenEndMarker = false
      for (;;) {
        if (signal.signal.aborted) return
        const cppResult = await cppHandler.flushCpp(context)
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
        Math.random() < (this.Ob().cppConfig?.checkFilesyncHashPercent ?? 0)
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
      return new Ho({
        relativeWorkspacePath: this.mb.asRelativePath(e.uri),
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
        workspaceRootPath: this.mb.getWorkspaceFolder(e.uri)?.uri.fsPath,
      })
    }
    async fastCurrentFileInfoDoesNotWorkForNotebooks(e, t, s, n, r) {
      if (e.scheme !== ce.aiChat && s !== null)
        return new Ho({
          relativeWorkspacePath: this.mb.asRelativePath(e),
          contents: t,
          sha256Hash: n ? await this.bc(t, this.fb) : undefined,
          cursorPosition: new Qm({
            line: s.lineNumber - 1,
            column: s.column - 1,
          }),
          selection: undefined,
          languageId: "",
          fileVersion: r,
          workspaceRootPath: this.mb.getWorkspaceFolder(e)?.uri.fsPath,
        })
    }
    async fastPeriodicallyReloadCppConfig() {
      Date.now() - this.h > 1e3 * 60 &&
        (await this.loadCppConfigIncludingHandlingProAccess(),
        this.Z.setDebouncingDurations(this.getNewDebounceDurations()),
        this.importPredictionService.handleNewImportPredictionConfig())
    }
    async loadCppConfigIncludingHandlingProAccess() {
      ;(this.h = Date.now()), await this.keepCppModelStateUpdated()
      const t = await (
        await this.aiClient()
      ).cppConfig(new T1t({ model: this.Ob().cppModel ?? "" }))
      this._applyConfig(t), this.cursorCredsService.setGeoCppBackendUrl(t.geoCppBackendUrl)
    }
    async forceApplyCppConfig() {
      const t = await (await this.aiClient()).cppConfig(new T1t({}))
      this._applyConfig(t)
    }
    async _applyConfig(e) {
      const t =
        this.hb.applicationUserPersistentStorage.cppConfig
          ?.shouldLetUserEnableCppEvenIfNotPro
      this.Ob().cppEnabled === true &&
        e.shouldLetUserEnableCppEvenIfNotPro === false &&
        t === true &&
        m2i(this.nb.membershipType()) === false &&
        this.hb.setNonPersistentStorage("showingCppUpsell", true),
        this.hb.setApplicationUserPersistentStorage("cppConfig", e),
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
      if (this.S !== undefined) return await this.S.getCppReport()
    }
  };

  return {
    CppService,
    ddi,
  };
}