// @ts-check


export function createFDIClass(params) {
  const {V, EYe, G, yo, Qfo, ngo, rgo, zt, J, R_n, um, hF, ss, oa, ll, Ave, JB, e$s, Fx, fu, Va, GMs, Igo, nze,Dgo, WEn, m2i, KMs, qEn, b2i, QMs, ZMs, S9, $, Hae, m0t, YMs, Ad, fUe, Sp, VB, replaceTextInRange, generateModifiedText, tv, VS, NYi, CUe, Ri, ddi, Ago, ce, Pn, Cg, EF, MMs, U, mu, hdi, Me, ys, $fo, qdt, Ffo, dze, uI, BMs, Ngo, Lgo, Cf, hG, Rgo, zdt, mR, fm, gle, xr, Gr, GB, QN, Ycr, Yt, D1t, Kf, rt, handleStreamWithPredictions, handleChunkedStream, consumeRemainingStream, Hu, Aoe, Qcr, TKn, F_, tdi, _fo, udi, XMs, rge, OFt, Xfo, Ui, ZXe: computeDiffs, k7, RKi, Pgo, jBt, qfo, Mgo, Ho, Qm, T1t, Xf, Tgo, oj} = params;

  const fdi = class extends V {
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
    H(e) {
      return `${e.id}-${e.uri.fsPath}`
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
        (this.gb = e),
        (this.hb = t),
        (this.ib = s),
        (this.jb = n),
        (this.kb = r),
        (this.lb = o),
        (this.mb = a),
        (this.nb = l),
        (this.ob = c),
        (this.pb = h),
        (this.qb = u),
        (this.rb = d),
        (this.sb = g),
        (this.tb = p),
        (this.ub = m),
        (this.vb = b),
        (this.wb = y),
        (this.xb = w),
        (this.yb = C),
        (this.zb = S),
        (this.Ab = x),
        (this.Bb = k),
        (this.Cb = E),
        (this.Db = D),
        (this.Eb = P),
        (this.Fb = L),
        (this.Gb = A),
        (this.Hb = F),
        (this.Ib = H),
        (this.Jb = B),
        (this.Kb = z),
        (this.h = 0),
        (this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
          !1),
        (this.j = new yo(20)),
        (this.m = new Map()),
        (this.n = new Map()),
        (this.q = void 0),
        (this.u = void 0),
        (this.w = void 0),
        (this.y = void 0),
        (this.z = void 0),
        (this.C = new yo(10)),
        (this.G = new yo(3)),
        (this.I = []),
        (this.J = []),
        (this.L = new Qfo(2)),
        (this.M = new ngo(5)),
        (this.N = new rgo(5, 6)),
        (this.O = new yo(3)),
        (this.Q = new yo(10)),
        (this.editorThatWeHidGhostTextOn = void 0),
        (this.R = []),
        (this.holdDownAbortController = void 0),
        (this.S = void 0),
        (this.numberOfClearedSuggestionsSinceLastAccept = 0),
        (this.lastEditTime = void 0),
        (this.U = void 0),
        (this.W = this.D(new zt())),
        (this.Y = { fire: !1, acceptedRange: void 0 }),
        (this.$ = {}),
        (this.ab = !1),
        (this.bb = []),
        (this.cb = void 0),
        (this.db = new yo(5)),
        (this.eb = void 0),
        (this.fb = !1),
        (this.Mb = new J()),
        (this.Nb = document.createElement("div")),
        (this.handleKeyDownForCppKeys = (se) => {
          if (this.Ob().cppEnabled === !0) {
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
                this.Bb.maybeUndoCursorPrediction({
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
              se.shiftKey === !1 &&
              se.ctrlKey === !1 &&
              se.altKey === !1 &&
              se.metaKey === !1 &&
              this.selectionIsNotMultipleLines()
            ) {
              if (this.Ob().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                if (he !== null && this.Ib.maybeAcceptShownImport(he)) {
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
                  he !== void 0 &&
                  !this.Bb.tabToLineBeforeAcceptingCpp(he.source)
                )
                  (this.dontTriggerCppBecauseChangeIsFromCpp = !0),
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
                    de = ae?.getModel() ?? void 0,
                    Ee = ae?.getPosition(),
                    ke = this.Pb().cppState?.additionalSuggestions.filter(
                      (Ae) => {
                        if (de === void 0 || Ee === void 0 || Ee === null)
                          return !1
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
                  if (ke !== void 0 && ke.length > 0) {
                    ;(this.dontTriggerCppBecauseChangeIsFromCpp = !0),
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
                            this.Ib.showCorrectUI(Pe))
                      })
                      .catch((Pe) => {
                        console.error(Pe)
                      }),
                      this.ac()
                  } else
                    this.Bb.maybeAcceptCursorPrediction({
                      event: se,
                      triggerCppCallback:
                        this.fireCppSuggestionFromTrigger.bind(this),
                    })
                } else
                  this.Bb.maybeAcceptCursorPrediction({
                    event: se,
                    triggerCppCallback:
                      this.fireCppSuggestionFromTrigger.bind(this),
                  })
              }
              return
            }
            if (
              se.key === "Escape" &&
              se.ctrlKey === !1 &&
              se.altKey === !1 &&
              se.metaKey === !1 &&
              this.Pb().cppState?.suggestion !== void 0
            ) {
              const he = this.getFocusedCodeEditor()
              he !== null && this.markEditAsRejected(he, !1),
                this.clearDecorationsSlowEnumeratesAllDecorations(),
                this.rejectAndResetAllCppSuggestions(),
                this.Bb.maybeShowHintLineWidget(),
                this.Bb.updateHintLineWidgetMarginLeft(void 0),
                he !== null && this.Ib.showCorrectUI(he)
            } else if (
              se.key === "Escape" &&
              se.ctrlKey === !1 &&
              se.altKey === !1 &&
              se.metaKey === !1
            )
              if (this.Ob().cppAutoImportEnabled) {
                const he = this.getFocusedCodeEditor()
                he !== null && this.Ib.maybeRejectShownImport(he)
                  ? (se.preventDefault(),
                    se.stopImmediatePropagation(),
                    se.stopPropagation())
                  : this.Pb().cursorPrediction !== void 0 &&
                    this.Bb.clearCursorPrediction()
              } else
                this.Pb().cursorPrediction !== void 0 &&
                  this.Bb.clearCursorPrediction()
          }
        }),
        (this.triggerCppOnLintErrorAbortControllers = new Map()),
        (this.Xb = 6),
        (this.latestGenerationUUID = void 0),
        (this.Yb = void 0),
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
            let vt = !1
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
                ;(ke = Oe.startLineNumber), (Ae = Oe.endLineNumber), (vt = !0)
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
        (this.didShowGreenHighlights = !1),
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
        this.Pb().cppState === void 0 &&
          this.hb.setNonPersistentStorage("cppState", {}),
        this.loadCopilotPlusPlusConfigFromGithubCopilot(),
        this.Lb(),
        this.D(
          Fx(() => {
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
            this.tb.distribution({ stat: "cppclient.reload", value: he - se })
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
            this.getCurrentSuggestion() === void 0 &&
            !(
              this.Ob().cppAutoImportEnabled &&
              this.Ib.isShowingImportSuggestion()
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
        this.Ib.registerCppMethods({
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
        e !== void 0 &&
        this.hb.applicationUserPersistentStorage.cppEnabled === !1
      ) {
        const t = Date.now(),
          s = e + GMs
        s < t
          ? (this.hb.setApplicationUserPersistentStorage("cppSnoozed", void 0),
            this.hb.setApplicationUserPersistentStorage("cppEnabled", !0))
          : setTimeout(() => {
              this.hb.setApplicationUserPersistentStorage("cppSnoozed", void 0),
                this.hb.setApplicationUserPersistentStorage("cppEnabled", !0)
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
        this.eb !== void 0 && this.eb.fusedCursorPredictionId === predictionId)
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
      if (e === void 0)
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
      this.Ob().cppEnabled === !0 &&
        this.hb.setApplicationUserPersistentStorage(
          "shouldNotTryToGetThemToNoticeCpp",
          !0,
        )
      const e = this.nb.isAuthenticated()
      await this.jb.maybeRefreshFeatureStatus("cppExistingUserMarketingPopup"),
        e &&
          this.Ob().shouldNotTryToGetThemToNoticeCpp !== !0 &&
          this.jb.getCachedFeatureStatus("cppExistingUserMarketingPopup") ===
            !0 &&
          this.isAllowedCpp() &&
          (this.ob.publicLogCapture("cppMarketingPopup.shownPopup"),
          this.hb.setApplicationUserPersistentStorage(
            "shouldNotTryToGetThemToNoticeCpp",
            !0,
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
        if (n == null || this.Wb(n) || this.Kb.shouldIgnoreUri(n.uri)) return !1
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
        return !1
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
          !0),
        this.rejectAndResetAllCppSuggestions(),
        {
          dispose: () => {
            this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
              !1
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
      if (this.Ob().cppHasLoadedConfigFromCopilot !== !0)
        try {
          const e = this.Ab.getValue("github.copilot.enable")
          if (e !== null && typeof e == "object") {
            const t = Object.keys(e)
              .filter((s) => e[s] === !1)
              .filter((s) => s !== "*")
            t.length > 0 && this.Ab.updateValue(JB, t, 2)
          }
        } catch {
        } finally {
          this.hb.setApplicationUserPersistentStorage(
            "cppHasLoadedConfigFromCopilot",
            !0,
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
        l = this.Bb.isCursorPredictionEnabled() ? "enabled" : "disabled"
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
            ? this.hb.setApplicationUserPersistentStorage("cppModel", void 0)
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
          icon: n ? $.check : void 0,
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
                    void 0,
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
        dontHideHoverOnClick: !0,
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
      return e.altKey === !0
    }
    Ob() {
      return this.hb.applicationUserPersistentStorage
    }
    Pb() {
      return this.hb.nonPersistentStorage
    }
    reallowCopilotIfWePreviousHidCopilotSuggestions() {
      this.editorThatWeHidGhostTextOn !== void 0 &&
        (this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
        Ad.get(this.editorThatWeHidGhostTextOn)
          ?.model.get()
          ?.triggerExplicitly(),
        (this.editorThatWeHidGhostTextOn = void 0))
    }
    isInVimNonInsertMode() {
      const e = this.ub.getViewModel()
      for (const t of [...e.getEntries(0), ...e.getEntries(1)])
        if (
          t.id === "vscodevim.vim.primary" &&
          !["INSERT"].some((s) => t.container.innerText.includes(s))
        )
          return !0
      return !1
    }
    selectionIsNotMultipleLines() {
      const e = this.gb.getActiveCodeEditor(),
        t = e?.getSelection()
      return (
        e === null ||
        t === null ||
        t === void 0 ||
        t.startLineNumber === t.endLineNumber
      )
    }
    cursorPredictorWouldTabInsteadOfAccepting() {
      const e = this.gb.getActiveCodeEditor()
      if (!e) return !1
      const t = e.getModel()
      return t ? this.Bb.shouldTabInsteadOfAccepting(e, t) : !1
    }
    shouldTabInsteadOfAccepting() {
      if (this.isInVimNonInsertMode()) return !1
      const e = this.gb.getActiveCodeEditor()
      if (!e) return !1
      const t = e.getPosition(),
        s = e.getModel()
      if (!t || !s) return !1
      const n = s.getEOL()
      if (s.getLineContent(t.lineNumber).trim() !== "") return !1
      const r = this.Pb().cppState?.suggestion
      if (r === void 0) return !1
      const o = r.decorationId,
        a = e.getModel()?.getDecorationRange(o)
      if (a == null) return !1
      const l = s.getValueInRange({
        startLineNumber: a.startLineNumber,
        startColumn: a.startColumn,
        endLineNumber: t.lineNumber,
        endColumn: t.column,
      })
      if (l === void 0) return !1
      let c = r.replaceText
      t.lineNumber === a.endLineNumber &&
        a.endColumn === 1 &&
        (c = c + (s.getLineContent(t.lineNumber) ?? "") + n)
      const h = l.split(n).length - 1,
        u = l.split(n).at(-1)?.length
      if (u === void 0) return !1
      let d = c.split(n)[h]
      return d === void 0 ||
        d.slice(0, u).trim() !== "" ||
        ((d = d.slice(u)), d === void 0)
        ? !1
        : d.trimStart() !== d
    }
    async acceptNextWord() {
      if (this.Ab.getValue(fUe) !== !0) return !1
      const t = this.Pb().cppState?.suggestion
      if (t !== void 0) {
        this.dontTriggerCppBecauseChangeIsFromCpp = !0
        const s = await this.acceptNextWordSuggestion(
          this.holdDownAbortController,
        )
        if (s.type === Sp.AcceptedWord) {
          const n = this.gb.getActiveCodeEditor()
          return (
            n !== null && this.cleanupAfterNextWordSuggestion(n, s.edit), !0
          )
        } else if (s.type === Sp.AcceptedAll) {
          const n = this.gb.getActiveCodeEditor()
          return n !== null && this.cleanupAfterAcceptSuggestion(n, t), !0
        }
      }
      return !1
    }
    markEditAsRejected(e, t) {
      const s = this.Ob().cppConfig
      if (
        s === void 0 ||
        s.heuristics.includes(VB.SUGGESTING_RECENTLY_REJECTED_EDIT) === !1 ||
        s.recentlyRejectedEditThresholds === void 0
      )
        return
      const n = e.getModel()
      if (n === null) return
      const r = this.Pb().cppState?.suggestion
      if (r === void 0) return
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
        this.Db.onlyLocalProvider?.runCommand(tv.RecordRejectedEdit, {
          relativePath: a,
          modelValue: h,
          onlySoftRejected: t,
        })
    }
    mainRegisterCppListenersToEditorIfCppEnabled() {
      this.clearEditorListeners(),
        this.Ob().cppEnabled === !0
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
        (await this.Db.onlyLocalProvider?.runCommand(tv.Ack, null)) !== !0 &&
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
          s !== void 0 &&
            this.n.get(t).push(
              this.D(
                s.onChangedHints((r) => {
                  const o = this.wb.getRelevantParameterHints(e)
                  this.wb.onChangedParameterHints(e, r),
                    o.length === 0 &&
                      r !== void 0 &&
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
                  ((this.eb = void 0),
                  (this.cb = void 0),
                  this.Bb.clearCursorPrediction())
                const o = e.getModel()?.uri
                if (
                  o === void 0 ||
                  (this.updateRecentDiagnostics(o, r.position),
                  this.holdDownAbortController?.abort(),
                  (this.holdDownAbortController = void 0),
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
                if (this.Ob().cppEnabled === !0) {
                  const h = e.getSelection()
                  if (h === null) {
                    oa("[Cpp] onDidChangeCursorPosition: selection is null")
                    return
                  }
                  const u = this.getCurrentSuggestion()
                  let d = !1
                  const g = e.getModel()
                  if (g === null) return
                  if (u === void 0)
                    this.didShowGreenHighlights
                      ? ((this.didShowGreenHighlights = !1),
                        this.clearDecorationsSlowEnumeratesAllDecorations())
                      : this.clearDecorationsFast()
                  else {
                    const y = {
                      range: g.getDecorationRange(u.decorationId),
                      id: u.decorationId,
                    }
                    if (y === void 0 || y.range === null) return
                    const w = {
                      ...y.range,
                      endColumn: 1e4,
                      startLineNumber:
                        u.startingSuggestionRange.startLineNumber,
                      startColumn: u.startingSuggestionRange.startColumn,
                    }
                    ;(d = !!(y.range !== null && h.intersectRanges(w))),
                      d ||
                        (this.markEditAsRejected(e, !1),
                        this.rejectAndResetAllCppSuggestions(),
                        this.Bb.maybeShowHintLineWidget())
                  }
                  if (
                    !this.R.find(
                      (b) =>
                        b.modelId === g.id &&
                        b.modelVersion === g.getVersionId() &&
                        b.position !== void 0 &&
                        b.position.equals(r.position),
                    ) &&
                    !d
                  )
                    if (this.Ob().cppFireOnEveryCursorChange === !0)
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
      s !== void 0 &&
        n !== void 0 &&
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
        this.lastEditTime === void 0 || Date.now() - this.lastEditTime >= 6e4
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
    async fireOnCacheMiss(e, t, s, n, r) {
      t !== null
        ? await this.fireCppSuggestionDebouncedDiffHistory(e, t, ll.Typing, n)
        : await this.formatDiffHistory(e, t, s, n)
    }
    async triggerCppIfLintErrorComesUp(e, t, s, n, r, o) {
      const a = this.mb.asRelativePath(s?.uri ?? U.file("")),
        l = new AbortController()
      this.triggerCppOnLintErrorAbortControllers.set(a, l)
      let c = !1
      l.signal.addEventListener("abort", () => {
        c = !0
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
    async continueModelChangeListener(e, t, s, n, r = { removeGreens: !0 }, o) {
      if (this.Pb().cppState?.shouldNotTrigger === !0) {
        oa("[Cpp] continueModelChangeListener - shouldNotTrigger is true")
        return
      }
      if (this.Wb(s)) return
      const a = async () => {
        await this.formatDiffHistory(e, t, s, n), EF.get(t)?.update()
      }
      this.ab = !1
      const l = () => {
        const u = this.getCurrentSuggestion()
        if (u === void 0) return
        const d = s.getDecorationRange(u.decorationId)
        if (d === null) return
        const g = s.getDecorationOptions(u.decorationId)
        if (
          g === null ||
          d.startLineNumber <= (t.getPosition()?.lineNumber ?? 0)
        )
          return
        const p = { ...d, startLineNumber: d.startLineNumber - 1 }
        s.changeDecorations((m) => {
          m.removeDecoration(u.decorationId)
          const b = m.addDecoration(p, g)
          this.updateSuggestionState({ decorationId: b })
        })
      }
      if (this.isOnShortestEditPath({ event: e, model: s }, o))
        return MMs(e.changes) && l(), a()
      const h = this.Ub(e) || this.Ob().cppCachedTypeaheadEnabled !== !0
      if (
        (this.markEditAsRejected(t, !0),
        this.rejectAndResetAllCppSuggestions({ removeGreens: !1, abortAll: h }),
        (!this.Ob().cppAutoImportEnabled ||
          !this.Ib.isShowingImportSuggestion()) &&
          this.allowCppTriggerInComments(t))
      ) {
        const u = this.N.popCacheHit(s)
        if (u !== void 0)
          return this.Vb(u), this.displayCppSuggestion(t, s, u), a()
      }
      await this.fireOnCacheMiss(e, t, s, n, r)
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
        this.tb.distribution({ stat: "cppclient.time_since_start", value: t }),
        this.tb.distribution({ stat: "cppclient.time_since_trigger", value: s })
    }
    onCommentLine(e, t) {
      const s = e.getPosition()
      if (s === null) return
      const n = s.lineNumber
      return t.getLineContent(n).trim().startsWith("//")
    }
    getPreviousModelValue(e) {
      const t = this.H(e)
      return this.G.get(t)
    }
    async registerModelListenerToEditorModel(e, t) {
      if (this.Wb(t)) {
        oa(
          `[Cpp] registerModelListenerToEditorModel: Suppressing trigger because file is too large: filename: ${t.uri.fsPath}, length: ${t.getValueLength()}`,
        )
        return
      }
      const s = this.mb.asRelativePath(t?.uri ?? U.file(""))
      if (
        (await this.Db.onlyLocalProvider?.runCommand(tv.GetModelValue, {
          relativePath: s,
        })) === void 0
      ) {
        let l
        if (t.uri.scheme === "vscode-notebook-cell") {
          const c = t.getEOL(),
            h = this.getNotebookCellInfo(t, e, c)
          h !== null && (l = h.cellValues.join(c))
        } else l = t.getValue()
        l !== void 0 &&
          (await this.Db.onlyLocalProvider?.runCommand(tv.InitModel, {
            relativePath: s,
            currentModelValue: l,
            modelVersion: t.getVersionId(),
          }))
      }
      if (
        !t ||
        (t.uri.scheme !== "vscode-notebook-cell" &&
          t.uri.scheme !== "file" &&
          t.uri.scheme !== "vscode-remote" &&
          t.uri.scheme !== "untitled")
      )
        return
      this.m.forEach((l) => {
        l.has(e.getId()) &&
          (l.get(e.getId())?.forEach((c) => c.dispose()), l.delete(e.getId()))
      })
      const n = [
          this.D(
            t.onDidChangeContent(async (l) => {
              this.X = performance.now()
              const c = t.getEOL()
              if (
                ((this.lastEditTime = Date.now()),
                this.m.has(s) &&
                  this.m.get(s).size > 1 &&
                  e.getId() !== this.gb.getActiveCodeEditor()?.getId())
              ) {
                oa(
                  "[Cpp] onDidChangeModelContent: Suppressing trigger because editor is not active",
                )
                return
              }
              if (
                ((this.bb = []),
                this.N.addEditAndUpdateCachedSuggestions(l, t),
                this.triggerCppOnLintErrorAbortControllers.get(s)?.abort(),
                this.Ob().cppEnabled !== !1)
              ) {
                if (
                  this.Ob().cppAutoImportEnabled &&
                  (this.Ib.markFileAsUpdated(t.uri),
                  l.changes.length === 1 &&
                    l.changes[0].text.length > 20 &&
                    l.changes[0].text.length < 5e3)
                ) {
                  const h = l.changes[0],
                    u = h.text.split(`
`),
                    d = {
                      startLineNumber: h.range.startLineNumber,
                      startColumn: h.range.startColumn,
                      endLineNumber: h.range.endLineNumber + u.length - 1,
                      endColumn:
                        u.length === 1
                          ? h.range.endColumn + u[0].length
                          : u[u.length - 1].length,
                    }
                  this.Ib.handleNewGreens(t, [d]),
                    this.showNearLocationLintErrorsToImportPredictionService({
                      editor: e,
                      uri: t.uri,
                      source: "onDidChangeContent",
                    })
                }
                if (
                  (EF.get(e)?.setChangesSinceLastUpdate(!0),
                  this.dontTriggerCppBecauseChangeIsFromCpp === !0 ||
                    this
                      .pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
                      !0)
                ) {
                  const h = this.getPreviousModelValue(t)
                  if (
                    (await this.formatDiffHistory(l, e, t, c),
                    (this.dontTriggerCppBecauseChangeIsFromCpp = !1),
                    this
                      .pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
                      !0 || this.getCurrentSuggestion() !== void 0)
                  )
                    return
                  this.triggerCppIfLintErrorComesUp(l, e, t, c, 2e3, h)
                  return
                }
                this.isAllowedCpp() &&
                  this.isCppEnabledForEditor(e) &&
                  this.disableAndHideCopilotSuggestion(e),
                  this.continueModelChangeListener(l, e, t, c)
              }
            }),
          ),
        ],
        r = mu.get(e)
      r &&
        (n.push(
          this.wb.registerSuggestListener(e, t, s, r, () => {
            this.fireCppSuggestionDebounced(e, ll.LspSuggestions)
          }),
        ),
        n.push(this.wb.registerCancelListener(e, t, s, r))),
        this.m.has(s) || this.m.set(s, new Map())
      const o = this.m.get(s),
        a = e.getId()
      o?.has(a) || o?.set(a, []),
        o?.get(a)?.push(...n),
        this.Ob().cppAutoImportEnabled &&
          o?.get(a)?.push(
            this.D(
              this.rb.onMarkerChanged(async (l) => {
                this.gb.getActiveCodeEditor()?.getId() === e.getId() &&
                  l.some((c) => c.toString() === t.uri.toString()) &&
                  this.showNearLocationLintErrorsToImportPredictionService({
                    editor: e,
                    uri: t.uri,
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
      this.fireCppSuggestionFromTrigger(n, e, t, void 0, {
        ...o,
        modelVersion: s.getVersionId(),
        modelId: s.id,
        position: e.getPosition() ?? void 0,
      })
    }
    async fireCppSuggestionDebouncedDiffHistory(e, t, s, n) {
      if (!t) return
      const r = t.getModel(),
        o = r?.uri
      if (!o || this.Wb(r)) return
      const a = t.getSelection()
      if (
        a !== null &&
        (a.startLineNumber !== a.endLineNumber || a.startColumn !== a.endColumn)
      )
        return
      const { requestIdsToCancel: l, ...c } = this.Z.runRequest()
      this.R.forEach((h) => {
        l.includes(h.generationUUID) && h.abortController.abort()
      }),
        await this.formatDiffHistory(e, t, r, n),
        this.getCurrentSuggestion() === void 0 &&
          this.fireCppSuggestionFromTrigger(o, t, s, void 0, {
            ...c,
            modelVersion: r.getVersionId(),
            modelId: r.id,
            position: t.getPosition() ?? void 0,
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
        this.getCurrentSuggestion() !== void 0 &&
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
            this.Ob().cppCachedTypeaheadEnabled !== !0 &&
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
            this.lb.assert(
              this.R.length <= this.Xb,
              `The size of cppService this.streams is too big! ${this.R.length}`,
            )
        }
        for (; this.R.length >= this.Xb; )
          this.R.shift()?.abortController.abort()
        let l, c, h, u, d
        r !== void 0
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
            (d = t.getPosition() ?? void 0),
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
        let g = !1
        if (
          (l.signal.addEventListener("abort", () => {
            ;(g = !0), (this.R = this.R.filter((p) => p.generationUUID !== a))
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
          .shouldDisableGithubCopilot === !0
      )
        try {
          const p = this.Ab.getValue("github.copilot")
          p !== null &&
            typeof p == "object" &&
            p.enable["*"] === !0 &&
            this.kb.executeCommand("github.copilot.toggleCopilot")
        } finally {
          this.hb.setApplicationUserPersistentStorage(
            "oneTimeSettings",
            "shouldDisableGithubCopilot",
            !1,
          )
        }
      this.disableAndHideCopilotSuggestion(t)
      const l = t.getModel()
      if (l === null || this.Wb(l)) return
      const c = l.getValue(),
        h = l.getVersionId(),
        u = a?.overridePosition ?? t.getPosition()
      if (u === null || c === void 0) {
        oa("[Cpp] Bad Case: position or modelValue is undefined"),
          this.reallowCopilotIfWePreviousHidCopilotSuggestions()
        return
      }
      if (
        (this.usingFusedCursorPredictionModel() &&
          this.Bb.isShowingCursorPrediction(t) &&
          o !== ll.CursorPrediction &&
          o !== ll.LineChange) ||
        (!this.allowCppTriggerInComments(t, u) && o !== ll.CursorPrediction)
      )
        return
      if (
        this.overlapsInlineDiff(e, u.lineNumber, {
          onlyCheckCurrentlyGenerating: !0,
        })
      ) {
        oa("[Cpp] Skipping because we are in an inline diff.")
        return
      }
      if (
        this.hb.nonPersistentStorage.cppState
          ?.shouldNotTriggerFromInlineDiffReject ??
        !1
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
        this.tb.distribution({
          stat: "cppclient.immediatelyFire.getExpandedRange",
          value: d - r,
        })
    }
    allowCppTriggerInComments(e, t) {
      if (
        this.hb.applicationUserPersistentStorage.cppTriggerInComments === !1
      ) {
        const s = e.getModel()
        if (s === null) return !0
        const n = s.getValue(),
          r = t ?? e.getPosition()
        if (r === null || n === void 0)
          return oa("[Cpp] Bad Case: position or modelValue is undefined"), !0
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
              oa("[Cpp] suppressing trigger because we are in a comment"), !1
            )
        } else if (
          s.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(r) === 1
        )
          return oa("[Cpp] suppressing trigger because we are in a comment"), !1
      }
      return !0
    }
    usingFusedCursorPredictionModel() {
      return !!this.Ob()?.cppConfig?.isFusedCursorPredictionModel
    }
    overlapsInlineDiff(e, t, { onlyCheckCurrentlyGenerating: s }) {
      const n = this.hb.nonPersistentStorage.inlineDiffs
      if (n === void 0) return !1
      const r = this.hb.nonPersistentStorage.inprogressAIGenerations.map(
        (o) => o.generationUUID,
      )
      return n.some((o) => {
        if (s && !r.includes(o.generationUUID)) return !1
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
          fileContents: void 0,
        })))
      const o = n
      o !== void 0 &&
        o.errors.length > 0 &&
        this.J.push(
          ...o.errors
            .filter((l) => l.range !== void 0)
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
      let a = (t !== void 0 ? [t, ...r.filter((c) => c !== t)] : r)
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
            fileContents: void 0,
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
      this.Ib.handleUpdatedLintErrors({
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
      return !1
        ? this.Yb
          ? (console.warn("NOTE: Using overridden diff history"), this.Yb)
          : this.getGlobalDiffTrajectories()
        : this.getGlobalDiffTrajectories()
    }
    async getGlobalDiffTrajectories() {
      return await this.Db.onlyLocalProvider?.runCommand(
        tv.CompileGlobalDiffTrajectories,
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
        u !== void 0 && u.cursorPosition !== void 0)
      ) {
        const D = !a
          ? this.Zb(u?.contents ?? "", u.cursorPosition.line, h, c)
          : u?.contents
        u.contents = D ?? ""
      }
      if (this.S === void 0) throw new Error("Diffing provider is undefined")
      let d
      const g = performance.now()
      let p
      const m = this.C.get(this.F(c))
      if (m === void 0) {
        const E = await this.getGlobalDiffTrajectories()
        if (E === void 0)
          throw new Error(
            "Compile Diff Trajectories not registered in extension host",
          )
        ;(p = E), this.C.set(this.F(c), p)
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
      this.tb.distribution({
        stat: "cppclient.immediatelyFire.diffHistory",
        value: w - g,
      })
      const C = performance.now(),
        S =
          this.Ob().cppConfig?.enableRvfTracking === !0
            ? await this.$b(e, t)
            : [],
        x = performance.now()
      this.tb.distribution({
        stat: "cppclient.immediatelyFire.additionalFiles",
        value: x - C,
      })
      const k =
        o === ll.ManualTrigger
          ? hG.OP
          : (this.hb.applicationUserPersistentStorage.cppControlToken ?? void 0)
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
          o = this.Ob().cppConfig?.shouldFetchRvfText === !0,
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
          if (d !== void 0 && Pn(d)) {
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
              isOpen: !0,
              lastViewedAt: void 0,
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
                  g === void 0 ||
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
                      (c.add(b), (p = b.object.textEditorModel), p === void 0)
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
                    isOpen: !1,
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
            : u.lastViewedAt === void 0 || d.lastViewedAt === void 0
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
        e === void 0 &&
          ((e =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)),
          this.hb.setWorkspaceUserPersistentStorage("uniqueCppWorkspaceId", e)),
        `${e}-${Tgo}`
      )
    }
    isReferenceFocused(e) {
      if (!this.hb.applicationUserPersistentStorage.cppInPeek) return !1
      const t = this.gb.getActiveCodeEditor()
      if (t === null) return !1
      const s = mR.get(t)?.getWidget()
      return s !== void 0 && s.hasFocus() && s.getPreviewEditor() === e
    }
    isFindActive(e) {
      if (
        this.hb.applicationUserPersistentStorage.cppInCmdF !== !0 ||
        e === void 0
      )
        return !1
      const t = fm.get(e)
      return t instanceof gle && t.isActive()
    }
    isFindFocused(e) {
      if (!this.hb.applicationUserPersistentStorage.cppInCmdF || e === void 0)
        return !1
      const t = fm.get(e)
      if (t === null) return !1
      try {
        if (!t.isFindInputFocused()) return !1
      } catch {
        return !1
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
      if (!this.hb.applicationUserPersistentStorage.cppInPeek || !e) return !1
      const t = this.gb.getActiveCodeEditor()
      return e !== t
        ? !1
        : (this.Eb.getActiveViewWithId(xr.MARKERS_VIEW_ID)?.isFocused() ?? !1)
    }
    isTextFocusedOrSimilarlyFocused(e) {
      return e
        ? e.hasTextFocus() ||
            this.isReferenceFocused(e) ||
            this.isProblemFocused(e) ||
            this.isFindFocused(e)
        : !1
    }
    getFocusedCodeEditor() {
      const e = this.gb.getActiveCodeEditor()
      return e?.hasTextFocus() === !0
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
      return d === void 0
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
      return this.Ob().cppModel !== "" ? this.Ob().cppModel : void 0
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
        this.Ob().chunkedStreamingEnabledV2 === !0
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
            { success: !1 })
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
          return (this.uponFusedCursorPredictionReady(predictionId, prediction), !0)
        })
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
          : fullText === void 0 &&
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
        currentSuggestion === void 0 &&
        this.u?.requestId === suggestion.requestId &&
        this.u?.modelVersion === model.getVersionId() &&
        this.u?.modelId === model.id
      ) {
        currentRange = adjustRange()
        const newSuggestion = this.Gb.createUnseenSuggestion({
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
        if (newSuggestion === void 0) return
        this.displayCppSuggestion(editor, model, newSuggestion)
      } else if (currentSuggestion?.uniqueId !== suggestion.uniqueId)
        if (this.N.getMatchingSuggestion(suggestion.uniqueId) !== void 0) {
          const newSuggestion = this.Gb.createUnseenSuggestion({
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
          if (newSuggestion === void 0) {
            predictionId !== void 0 &&
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
        const newSuggestion = this.Gb.createUnseenSuggestion({
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
        if (newSuggestion === void 0) {
          this.createOrUpdateSuggestionState({ fusedCursorPredictionId: predictionId })
          return
        }
        this.M.addSuggestion(newSuggestion),
          this.createOrUpdateSuggestionState({ onAcceptDisplayId: newSuggestion.uniqueId })
      }
    }
    getCurrentReplaceText(e) {
      const t = this.getCurrentSuggestion()
      if (t === void 0) return
      const s = F_(e, t)
      return s === null
        ? void 0
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
            t && this.Ob().cppConfig?.isGhostText !== !0
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
        this.Ob().cppHighlightCursor === !0 &&
          ((s = !1), this.showCursorHighlight()),
        e.deltaDecorations([], [this.getSuggestionDecorationOptions(t, s)])[0]
      )
    }
    removeStreamingBackgroundDecoration(e, t) {
      e.deltaDecorations([t], [])
    }
    updateSuggestionStateHalfSilently(e) {
      const t = this.Pb().cppState
      if (!(t === void 0 || t.suggestion === void 0))
        return this.createOrUpdateSuggestionStateHalfSilently(e)
    }
    createOrUpdateSuggestionStateHalfSilently(e) {
      this.Pb().cppState !== void 0 &&
        this.hb.setNonPersistentStorage("cppState", "suggestion", (s) =>
          s === void 0 ? e : { ...s, ...e },
        )
    }
    updateSuggestionState(e) {
      if (this.Pb().cppState?.suggestion !== void 0)
        return this.createOrUpdateSuggestionState(e)
    }
    createOrUpdateSuggestionState(e) {
      this.Pb().cppState !== void 0 &&
        this.hb.setNonPersistentStorage("cppState", (s) => {
          if (s === void 0) return
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
        return oa("[Cpp] Bad Case: Suggestion text matches current text"), !1
      if (
        this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING === true
      )
        return oa("[Cpp] Bad Case: triggering is paused"), !1
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
          ? this.qb.recordCppSuggestionEvent(model, updatedSuggestion, recoverableData)
          : this.qb.recordCppSuggestionEvent(model, decoratedSuggestion, recoverableData),
        (this.z = recoverableData.requestId),
        this.Ob().cppAutoImportEnabled && this.Ib.showCorrectUI(editor),
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
        this.Ob().cppAutoImportEnabled && this.Ib.handleNewGreens(editorModel, greenRanges),
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
          this.lb.assert(
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
        { changes: textChanges } = await this.vb.wordDiff(originalText, replaceText)
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
      return s === void 0 || !s.suggestionIsCurrentlyHidden ? null : s
    }
    getVisibleSuggestion() {
      const e = this.getCurrentSuggestion()
      return e === void 0 || e.suggestionIsCurrentlyHidden ? null : e
    }
    disableAndHideCopilotSuggestion(e) {
      this.editorThatWeHidGhostTextOn !== void 0 &&
        this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
        (this.editorThatWeHidGhostTextOn = e),
        Ad.get(this.editorThatWeHidGhostTextOn)
          ?.model.get()
          ?.clearCopilotSuggestions(),
        Ad.get(e)
          ?.model.get()
          ?.isHidden.set(!0, void 0)
    }
    unhideCopilotSuggestion(e) {
      Ad.get(e)
        ?.model.get()
        ?.isHidden.set(!1, void 0)
    }
    saveEditorSelectionInSuggestion(e, t, s) {
      const n = e.getSelection()
      this.updateSuggestionState({
        editorSelectionBeforePeek: n !== null ? n : void 0,
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
      return await this.acceptSuggestion(!1, e, t)
    }
    async acceptNextWordSuggestion(e, t) {
      return await this.acceptSuggestion(!0, e, t)
    }
    async acceptSuggestion(e, t, s) {
      let n = !1
      t?.signal.addEventListener("abort", () => {
        n = !0
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
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          action: 'displayFusedCursorPrediction',
          predictionId: _predictionId_for_log,
          fusedCursorPrediction,
          oldText: n,
          newText: r,
        }),
      });
      const o = this.mb.resolveRelativePath(fusedCursorPrediction.relativePath)
      if (!o) {
        oa("[fusedCursorPrediction] Could not resolve predicted file path")
        return
      }
      const a = await this.Bb.getMultifileCursorPredictionEditor(o)
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
        this.overlapsInlineDiff(l.uri, lineNumber, { onlyCheckCurrentlyGenerating: !1 })
      )
        return
      const d = fusedCursorPrediction.shouldRetriggerCpp && n !== r
      await this.Bb.manuallyCreateCursorPrediction({
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
      e !== void 0 &&
        this.hb.setNonPersistentStorage("cppState", {
          ...e,
          suggestion: void 0,
        })
    }
    cleanupAfterNextWordSuggestion(e, t) {
      const s = e.getModel()
      if (!s) return
      const n = this.getEditorCurrentPositionRange(e)
      if (n === null) return
      const r = this.getHiddenSuggestion(s, n)
      r !== null && this.qb.recordPartialAcceptSuggestionEvent(s, r, t)
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
          this.qb.recordAcceptSuggestionEvent(model, visibleSuggestion),
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
        if (this.Bb.isCursorPredictionEnabled()) {
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
          this.U?.modelVersion === model.getVersionId() && this.U?.modelId === model.id
            ? ((this.Y = { fire: false, acceptedRange: undefined }),
              this.Bb.getAndShowNextPrediction({
                editor,
                triggerCppCallback:
                  this.fireCppSuggestionFromTrigger.bind(this),
                getLinterErrors:
                  this.getRecentAndNearLocationLinterErrors.bind(this),
                source: QN.ACCEPT,
                cppSuggestionRange: suggestionRange,
              }))
            : (this.Y = { fire: true, acceptedRange: suggestionRange })
        } else this.Bb.periodicallyReloadCursorPredictionConfig(false)
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
    revertSuggestion(e, t = { removeGreens: !0 }) {
      const s = this.getVisibleSuggestion()
      if (s === null) return
      const n = e.getModel(),
        r = this.getEditorCurrentPositionRange(e)
      e === null ||
        e.hasTextFocus() === !1 ||
        n === void 0 ||
        n === null ||
        r === null ||
        (this.ob.publicLogCapture("cursor.revertcppsuggestion"),
        this.qb.recordRejectSuggestionEvent(n, s),
        this.removeAllHighlights(n, t),
        this.updateSuggestionStateHalfSilently({
          suggestionIsCurrentlyHidden: !0,
          hasBeenSeen: !0,
          editorSelectionBeforePeek: void 0,
        }),
        this.reallowCopilotIfWePreviousHidCopilotSuggestions())
    }
    abortAllCppRequests(e) {
      this.R.forEach((t) => {
        t.generationUUID !== e && t.abortController.abort()
      }),
        (this.R = this.R.filter((t) => t.generationUUID === e)),
        this.holdDownAbortController?.abort(),
        (this.holdDownAbortController = void 0)
    }
    rejectSuggestionForTelemetryIfExists(e) {
      const t = this.getCurrentSuggestion()
      if (t === void 0) return
      const s = e.getModel()
      s != null &&
        (this.qb.recordRejectSuggestionEvent(s, t),
        this.ob.publicLogCapture("cursor.rejectcppsuggestion"))
    }
    rejectAndResetAllCppSuggestions(e = { removeGreens: !0, abortAll: !0 }) {
      e.abortAll && this.abortAllCppRequests()
      const t = this.gb.getActiveCodeEditor()
      t != null &&
        (this.rejectSuggestionForTelemetryIfExists(t),
        this.revertSuggestion(t, e),
        this.clearSuggestions(void 0, e))
    }
    clearDecorationsSlowEnumeratesAllDecorations() {
      const e = this.gb.getActiveCodeEditor(),
        t = e?.getModel()
      if (e == null || t === null || t === void 0) return
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
      o !== void 0 &&
        o.decorationId !== void 0 &&
        t.deltaDecorations([o.decorationId], [])
    }
    clearDecorationsFast(e = { removeGreens: !0 }) {
      const s = this.gb.getActiveCodeEditor()?.getModel()
      if (s == null) return
      const n = this.decIdsThatAreNotInReactiveStorage.green,
        r = Object.values(this.decIdsThatAreNotInReactiveStorage)
          .filter((c) => c !== n)
          .flat(),
        o = e.removeGreens ? [...this.I, ...n, ...r] : [...r]
      e.removeGreens === !1 ? this.I.push(...n) : (this.I = []),
        o.length > 0 && s.deltaDecorations(o, []),
        (this.decIdsThatAreNotInReactiveStorage = Object.fromEntries(
          Object.keys(this.decIdsThatAreNotInReactiveStorage).map((c) => [
            c,
            [],
          ]),
        ))
      const a = this.getCurrentSuggestion()
      if (a === void 0) return
      const l = [a.decorationId]
      l.length > 0 && s.deltaDecorations(l, [])
    }
    clearSuggestions(e, t = { removeGreens: !0 }) {
      e !== !0 && this.clearDecorationsFast(t),
        this.Pb().cppState?.suggestion !== void 0 &&
          (this.numberOfClearedSuggestionsSinceLastAccept += 1),
        this.hb.setNonPersistentStorage("cppState", "suggestion", void 0)
    }
    removeAllHighlights(e, t = { removeGreens: !0 }) {
      this.hideCursorHighlight(),
        t.removeGreens !== !1 && this.clearAllGreenHighlights(e)
    }
    isOnShortestEditPath({ event: e, model: t }, s) {
      const n = this.gb.getActiveCodeEditor()
      if (n == null || n.getModel()?.id !== t.id) return !1
      const r = this.getCurrentSuggestion()
      if (r === void 0) return !1
      let o
      if (s === void 0) {
        const l = this.getPreviousModelValue(t)
        if (l === void 0) return !1
        o = l
      } else o = s
      const a = jBt(o, t.uri)
      return this.L.checkChangeExists(e, !0)
        ? !0
        : qfo({
            event: e,
            model: t,
            proposedSuggestion: r,
            previousModelValue: a,
          })
    }
    async formatDiffHistory(e, t, s, n) {
      if (s.getValueLength() > hdi || s.isDisposed()) return
      const r = await this.Db.onlyLocalProvider?.runCommand(
        tv.FormatDiffHistory,
        {
          uri: s.uri.toString(),
          changes: e.changes,
          behavior: this.Ob().cppConfig?.mergeBehavior,
          modelVersion: s.getVersionId(),
          eol: n,
        },
      )
      if (r === void 0)
        throw new Error("Format Diff History not registered in extension host")
      ;(this.U = { modelVersion: s.getVersionId(), modelId: s.id }),
        this.Y.fire === !0 &&
          (this.Bb.getAndShowNextPrediction({
            editor: t,
            triggerCppCallback: this.fireCppSuggestionFromTrigger.bind(this),
            getLinterErrors:
              this.getRecentAndNearLocationLinterErrors.bind(this),
            source: QN.ACCEPT,
            cppSuggestionRange: this.Y.acceptedRange,
          }),
          (this.Y = { fire: !1, acceptedRange: void 0 })),
        this.C.set(this.F(s), r),
        this.G.set(this.H(s), s.getValue())
    }
    checkOverlappingSuggestion(e, t) {
      const s = this.getCurrentSuggestion()
      if (s === void 0 || s.uri.toString() !== e.uri.toString()) return null
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
        sha256Hash: n ? await this.bc(c.join(o), this.fb) : void 0,
        selection: void 0,
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
          sha256Hash: n ? await this.bc(t, this.fb) : void 0,
          cursorPosition: new Qm({
            line: s.lineNumber - 1,
            column: s.column - 1,
          }),
          selection: void 0,
          languageId: "",
          fileVersion: r,
          workspaceRootPath: this.mb.getWorkspaceFolder(e)?.uri.fsPath,
        })
    }
    async fastPeriodicallyReloadCppConfig() {
      Date.now() - this.h > 1e3 * 60 &&
        (await this.loadCppConfigIncludingHandlingProAccess(),
        this.Z.setDebouncingDurations(this.getNewDebounceDurations()),
        this.Ib.handleNewImportPredictionConfig())
    }
    async loadCppConfigIncludingHandlingProAccess() {
      ;(this.h = Date.now()), await this.keepCppModelStateUpdated()
      const t = await (
        await this.aiClient()
      ).cppConfig(new T1t({ model: this.Ob().cppModel ?? "" }))
      this._applyConfig(t), this.Hb.setGeoCppBackendUrl(t.geoCppBackendUrl)
    }
    async forceApplyCppConfig() {
      const t = await (await this.aiClient()).cppConfig(new T1t({}))
      this._applyConfig(t)
    }
    async _applyConfig(e) {
      const t =
        this.hb.applicationUserPersistentStorage.cppConfig
          ?.shouldLetUserEnableCppEvenIfNotPro
      this.Ob().cppEnabled === !0 &&
        e.shouldLetUserEnableCppEvenIfNotPro === !1 &&
        t === !0 &&
        m2i(this.nb.membershipType()) === !1 &&
        this.hb.setNonPersistentStorage("showingCppUpsell", !0),
        this.hb.setApplicationUserPersistentStorage("cppConfig", e),
        this.Db.onlyLocalProvider?.runCommand(
          tv.SetEnableCppWhitespaceDiffHistoryMode,
          { enabled: e.useWhitespaceDiffHistory },
        ),
        this.Db.onlyLocalProvider?.runCommand(
          tv.SetEnableCppIncludeUnchangedLines,
          { enabled: e.includeUnchangedLines },
        ),
        this.wb.setSuggestionHintsConfig(e.suggestionHintConfig)
    }
    async getCppReport() {
      if (this.S !== void 0) return await this.S.getCppReport()
    }
  };

  return fdi;
}