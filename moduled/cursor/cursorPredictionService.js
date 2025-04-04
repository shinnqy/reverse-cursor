// @ts-check

// gdi,Bgo,df,Mve,$go,_go,Gdt,Fgo,Ugo

export function createCursorPredictionService(params) {
  const {V, fu, Va, k3t, ge, ss, Le, CppIntent, ys, ce, Ho, Qm, wf, CURSOR_PREDICTION, EditHistoryDiffFormatter, rt, Me, GB, cG, QN, L$i, N$i, Pn, Cg, EYe, q, W, __decorate, __param, Ve, Pt: themeService, ue: configurationService, ie, ei, $, Re, xfe: SUGGESTION_OPTS, Rh, U, G, pu, Qn, aLt, ue, Z, nt, ve, si, Xt, Hi, qi, Nh, cursorPredictionService, it, mo, metricsService, cppTypeService, everythingProviderService, yi, cl, cppEventLoggerService, Ci } = params;
  ////////

  var gdi = class extends V {
    static {
      this.a = [0]
    }
    constructor(e, t, s, n) {
      super(),
        (this.g = e),
        (this.h = t),
        (this.j = n),
        (this.f =
          "cursorPredictionHintLineWidget." +
          Math.random().toString(36).substring(2, 15)),
        (this.b = q("span.cursor-prediction-hint-line-widget")),
        (this.c = q("span", {}, "\u21E5 tab")),
        W(this.b, this.c),
        this.b.classList.add("fancy"),
        (this.c.style.fontSize = this.g.getOption(54) + "px"),
        this.D(
          this.j.onDidChangeConfiguration((r) => {
            r.affectsConfiguration("editor.fontSize") &&
              (this.c.style.fontSize = this.j.getValue("editor.fontSize") + "px")
          }),
        ),
        this.g.addContentWidget(this)
    }
    dispose() {
      super.dispose(), this.g.removeContentWidget(this), this.b.remove()
    }
    hide() {
      this.g.removeContentWidget(this)
    }
    show() {
      this.g.addContentWidget(this)
    }
    getId() {
      return this.f
    }
    getDomNode() {
      return this.b
    }
    getPosition() {
      const e = this.g.getModel()
      if (e === null) return null
      const t = e.getDecorationRange(this.h)
      return t === null
        ? null
        : {
            position: { lineNumber: t.startLineNumber, column: t.endColumn },
            preference: [0],
          }
    }
    updateMarginLeft(e) {}
  }
  gdi = __decorate([__param(2, themeService), __param(3, configurationService)], gdi)
  var Mve = 500,
    $go = "default",
    Fgo = class extends V {
      constructor(i, e) {
        super(),
          (this.g = i),
          (this.h = e),
          (this.c = !1),
          (this.allowEditorOverflow = !0),
          (this.f = "top")
        const t = this.g.getOptions().get(51)
        ;(this.a = q("div.tooltipEditorUiWidget")),
          this.g.addOverlayWidget(this),
          this.g.layoutOverlayWidget(this),
          (this.a.style.zIndex = "1000"),
          (this.a.style.display = "flex"),
          (this.a.style.flexDirection = "column"),
          (this.a.style.justifyContent = "flex-start"),
          (this.a.style.alignItems = "center"),
          (this.a.style.width = "100%"),
          (this.a.style.height = "100%"),
          (this.a.style.top = "0px"),
          (this.a.style.bottom = "0px"),
          (this.a.style.left = "0px"),
          (this.a.style.right = "0px"),
          (this.a.style.pointerEvents = "none"),
          (this.b = W(this.a, q("div.cursorPredictionOutOfRangeIndicator"))),
          (this.b.style.display = "flex"),
          (this.b.style.alignItems = "center"),
          (this.b.style.width = "fit-content"),
          (this.b.style.marginTop = "8px"),
          (this.b.style.marginBottom = "4px"),
          (this.b.style.padding = "0px 4px"),
          (this.b.style.lineHeight = "130%"),
          (this.b.style.borderRadius = "4px"),
          (this.b.style.backgroundColor = "var(--vscode-editor-background)"),
          (this.b.style.border =
            "1px solid var(--vscode-editorWarning-foreground)"),
          (this.b.style.color = "var(--vscode-editor-foreground)"),
          (this.b.style.zIndex = "1000"),
          (this.b.style.fontSize = "10px"),
          (this.b.style.gap = "4px"),
          (this.b.style.fontFamily = t)
        const s = W(this.b, q("div.cursorPredictionOutOfRangeIndicatorText"))
        s.textContent = "Tab to jump"
        const n = W(this.b, q("div.cursorPredictionOutOfRangeIndicatorIcon"))
        ;(n.className = ie.asClassName($.arrowDown)),
          (n.style.fontSize = "10px"),
          this.D(
            this.g.onDidChangeModelOptions((o) => {
              const a = this.g.getOptions().get(51)
              a && (this.b.style.fontFamily = a)
            }),
          )
        const r = () => {
          const o =
              this.g.getModel()?.getDecorationRange(this.h)?.startLineNumber ??
              -1,
            a = this.g.getVisibleRanges()
          if (o === -1) {
            this.b.style.visibility = "hidden"
            return
          }
          let l = a[0].startLineNumber,
            c = a[0].endLineNumber
          const h = a.some((u) =>
            u.startLineNumber <= o && o <= u.endLineNumber + 1
              ? !0
              : (u.startLineNumber < l && (l = u.startLineNumber),
                u.endLineNumber > c && (c = u.endLineNumber),
                !1),
          )
          h ||
            (a && a.length > 0
              ? (this.f = l > o ? "top" : "bottom")
              : (this.f = "bottom"),
            (n.style.transform =
              this.f === "top" ? "rotate(180deg)" : "rotate(0deg)"),
            (this.a.style.justifyContent =
              this.f === "top" ? "flex-start" : "flex-end")),
            (this.b.style.visibility = h ? "hidden" : "visible")
        }
        this.D(this.g.onDidScrollChange(r)),
          this.D(this.g.onDidChangeCursorPosition(r)),
          this.D(this.g.onDidChangeCursorSelection(r)),
          r()
      }
      getPosition() {
        return { preference: 2 }
      }
      dispose() {
        this.c ||
          (super.dispose(),
          this.g.removeOverlayWidget(this),
          this.a.remove(),
          (this.c = !0))
      }
      getId() {
        return "tooltip.editorUiWidget"
      }
      getDomNode() {
        return this.a
      }
    },
    t$s = Re("cursorPredictionBadHeuristics"),
    pdi = class {
      constructor(e) {
        this.a = e
      }
      isValidCursorPredictionCase(e) {
        return this.a.applicationUserPersistentStorage.cursorPredictionState?.heuristics?.includes(
          SUGGESTION_OPTS.DISABLE_IN_LAST_CPP_SUGGESTION,
        ) === !0 &&
          e.cppSuggestionRange !== void 0 &&
          e.predictedLineNumber >= e.cppSuggestionRange.startLineNumber &&
          e.predictedLineNumber <= e.cppSuggestionRange.endLineNumberInclusive
          ? (console.log(
              "[Cursor Prediction] Bad Case 1: Do not show prediction if it's in the accepted cpp suggestion range",
            ),
            { valid: !1 })
          : { valid: !0 }
      }
    }
  ;(pdi = __decorate([__param(0, ei)], pdi)), Ve(t$s, pdi, 1)
  var Gdt = class extends V {
    constructor(e, t, s, n, r, o, a, l, c, h, u) {
      super(),
        (this.j = e),
        (this.m = n),
        (this.n = r),
        (this.q = o),
        (this.r = a),
        (this.s = l),
        (this.t = c),
        (this.u = h),
        (this.w = u),
        (this.f = !1),
        (this.allowEditorOverflow = !0),
        console.log(
          "[CURSOR PREDICTION] Creating non-visible editor indicator",
          t.toString(),
        ),
        (this.g = t),
        (this.h = s),
        (this.a = q(".cursor-prediction-non-visible-editor-indicator")),
        (this.a.style.position = "absolute"),
        (this.a.style.right = "20px"),
        (this.a.style.bottom = "20px"),
        (this.a.style.zIndex = "1000"),
        (this.a.style.width = "400px"),
        (this.a.style.maxWidth = "40%"),
        (this.a.style.backgroundColor = "var(--vscode-editor-background)"),
        (this.a.style.border =
          "1px solid var(--vscode-editorWarning-foreground)"),
        (this.a.style.borderRadius = "4px"),
        (this.a.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)"),
        (this.a.style.overflow = "hidden"),
        (this.b = W(this.a, q(".indicator"))),
        (this.b.style.display = "flex"),
        (this.b.style.alignItems = "center"),
        (this.b.style.padding = "2px 4px"),
        (this.b.style.borderBottom =
          "1px solid var(--vscode-editorWarning-foreground)"),
        (this.b.style.cursor = "pointer"),
        (this.b.style.minWidth = "0"),
        (this.b.style.flexShrink = "1"),
        (this.b.style.overflow = "hidden"),
        (this.b.style.textOverflow = "ellipsis"),
        (this.b.style.whiteSpace = "nowrap")
      const d = W(this.b, q(".icon"))
      ;(d.textContent = "\u21E5"),
        (d.style.marginRight = "4px"),
        (d.style.fontSize = "16px")
      const g = W(this.b, q(".text"))
      ;(g.style.fontSize = "12px"),
        (g.style.overflow = "hidden"),
        (g.style.textOverflow = "ellipsis"),
        (g.style.whiteSpace = "nowrap"),
        (g.style.minWidth = "0"),
        (g.style.flexGrow = "1"),
        (g.textContent = "Jump to prediction")
      const p = W(this.a, q(".code-block-container"))
      ;(this.c = this.n.createInstance(
        Rh,
        p,
        { ...Rh.getEditorOptions(this.m), disableLayerHinting: !0 },
        { overwriteIsSimpleWidget: !0 },
      )),
        this.D(ge(this.b, "click", () => this.z())),
        this.j.addOverlayWidget(this),
        this.y()
    }
    updateContent(e, t) {
      ;(this.g = e), (this.h = t), this.y()
    }
    async y() {
      console.log("[CURSOR PREDICTION] Updating code block", this.g.toString())
      let e
      try {
        e = await this.t.createModelReference(this.g)
        const t = e.object.textEditorModel
        console.log("[CURSOR PREDICTION] Model retrieved", t.uri.toString())
        const s = t.getValue(),
          n = this.u.createByFilepathOrFirstLine(this.g),
          r = U.parse(`cursor-prediction-preview://${this.g.path}`)
        let o = this.w.getModel(r)
        o
          ? (o.setValue(s), o.setLanguage(n.languageId))
          : (o = this.w.createModel(s, n, r, !1)),
          this.c.setModel(o),
          this.c.updateOptions({ readOnly: !0 })
        const a = this.c.getOption(68),
          c = a * 4,
          h = this.c.getDomNode()
        h && (h.style.height = `${c}px`)
        const u = Math.max(this.h - 2, 0) * a
        this.c.setScrollTop(u)
        const d = [
          {
            range: new G(this.h, 1, this.h, 1),
            options: {
              isWholeLine: !0,
              className: "cursor-prediction-highlight-line",
              stickiness: 1,
              description: "cursor-prediction-highlight",
            },
          },
        ]
        this.c.deltaDecorations([], d), this.c.layout()
        const g = this.g.path.split("/").pop() || "",
          p = this.b.querySelector(".text")
        if (p) {
          for (; p.firstChild; ) p.removeChild(p.firstChild)
          p.appendChild(document.createTextNode("Tab to "))
          const m = document.createElement("div")
          ;(m.className = "show-file-icons"),
            (m.style.display = "inline-flex"),
            (m.style.alignItems = "center"),
            (m.style.justifyContent = "center"),
            (m.style.verticalAlign = "text-bottom"),
            (m.style.marginRight = "-2px"),
            (m.style.height = "16px")
          const b = document.createElement("div")
          ;(b.className = "monaco-icon-label"), (b.style.height = "100%")
          const y = () => {
            const C = pu(this.w, this.u, this.g, Qn.FILE)
            b.className = ["monaco-icon-label", "height-override-important"]
              .concat(C)
              .join(" ")
          }
          y()
          const w = setTimeout(() => {
            y()
          }, 3e3)
          this.D({ dispose: () => clearTimeout(w) }),
            m.appendChild(b),
            p.appendChild(m),
            p.appendChild(document.createTextNode(g))
        }
      } catch (t) {
        console.error("[CURSOR PREDICTION] Error updating code block:", t)
      } finally {
        e?.dispose()
      }
    }
    async z() {
      await aLt({
        uri: this.g,
        fileService: this.q,
        editorService: this.r,
        editorGroupsService: this.s,
      })
    }
    getId() {
      return "cursor-prediction-non-visible-editor-indicator"
    }
    getDomNode() {
      return this.a
    }
    getPosition() {
      return { preference: 1 }
    }
    dispose() {
      if (this.f) return
      super.dispose(), this.j.removeOverlayWidget(this)
      const e = this.c.getModel()
      e && e.dispose(), this.c.dispose(), this.a.remove(), (this.f = !0)
    }
  }
  Gdt = __decorate(
    [
      __param(3, ue),
      __param(4, Z),
      __param(5, nt),
      __param(6, ve),
      __param(7, si),
      __param(8, Xt),
      __param(9, Hi),
      __param(10, qi),
    ],
    Gdt,
  )
  var Ogo = !1,
    df = Ogo ? console.log : () => {},
    Bgo = async (i, e, t, s) => {
      ;(await e.exists(i)) &&
        (await t.open(i, {
          openToSide: s?.inNewTab ?? !1,
          editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: Nh.USER,
            preserveFocus: !0,
          },
          fromUserGesture: !0,
        }))
    }
  function _go(i) {
    return { "X-Request-ID": i, "X-Amzn-Trace-Id": `Root=${i}` }
  }

  var Ugo = 5,
  CursorPredictionService = class extends V {
    aiClient() {
      return this.a.get()
    }
    cursorPredictionClient() {
      return this.b.get()
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m) {
      super(),
        (this.F = e),
        (this.G = t),
        (this.H = s),
        (this.I = n),
        (this.J = r),
        (this.L = o),
        (this.M = a),
        (this.N = l),
        (this.O = c),
        (this.P = h),
        (this.Q = u),
        (this.R = d),
        (this.S = g),
        (this.U = p),
        (this.W = m),
        (this.c = !1),
        (this.g = []),
        (this.h = void 0),
        (this.j = new Map()),
        (this.q = void 0),
        (this.r = !1),
        (this.s = 0),
        (this.t = void 0),
        (this.w = void 0),
        (this.y = void 0),
        (this.z = 1),
        (this.C = !1),
        (this.a = this.I.createInstance(fu, { service: Va })),
        (this.b = this.I.createInstance(fu, { service: k3t })),
        this.periodicallyReloadCursorPredictionConfig(),
        this.D(
          ge(ss(), Le.RESIZE, () => {
            this.cb()
          }),
        )
    }
    clearCursorPrediction() {
      const e = this.N.getActiveCodeEditor()
      e && this.clearPrediction({ editor: e, registerReject: !0 })
    }
    set X(e) {
      ;(this.c = e), e || (this.g = [])
    }
    get X() {
      return this.c
    }
    Y() {
      return this.F.applicationUserPersistentStorage
    }
    get Z() {
      return (
        this.F.applicationUserPersistentStorage.cursorPredictionUIExperiments ??
        []
      )
    }
    async periodicallyReloadCursorPredictionConfig(e = !1) {
      ;(Date.now() - this.s < 1e3 * 60 * 30 && !e) ||
        ((this.s = Date.now()), this._refreshConfig())
    }
    cursorPredictionModel() {
      return (
        this.Y().cursorPredictionState?.model ?? this.Y().cursorPredictionModel
      )
    }
    cursorPredictionTabToLineFirst() {
      return (
        this.Y().cursorPredictionTabToLineFirst !== !1 ||
        this.Y().cursorPredictionState?.tabToLineFirst !== !1
      )
    }
    isCursorPredictionEnabled() {
      return (
        this.Y().cursorPredictionEnabled !== !1 &&
        this.Y().cursorPredictionState?.backendEnabled !== !1
      )
    }
    onlyTriggerOnCppAccept() {
      return !this.Z.includes("cursor-pred-always-on")
    }
    tabToLineBeforeAcceptingCpp(e) {
      return (
        this.isCursorPredictionEnabled() &&
        e === CppIntent.CursorPrediction &&
        this.cursorPredictionTabToLineFirst() &&
        this.F.nonPersistentStorage.cursorPrediction !== void 0
      )
    }
    maybeUndoCursorPrediction({
      event: e,
      triggerCppCallback: t,
      getLinterErrors: s,
    }) {
      if (!this.isCursorPredictionEnabled() || !this.X) return
      const n = this.N.getActiveCodeEditor(),
        r = n?.getModel()
      if (n && r) {
        if (this.shouldTabInsteadOfAccepting(n, r)) return
        const o = this.g.pop()
        o &&
          (n.setPosition(o.position),
          n.revealLineInCenterIfOutsideViewport(o.position.lineNumber),
          this.getAndShowNextPrediction({
            editor: n,
            triggerCppCallback: t,
            getLinterErrors: s,
            source: QN.UNDO,
          }),
          e.stopPropagation(),
          e.stopImmediatePropagation(),
          e.preventDefault(),
          this.clearPrediction({ editor: n, registerReject: !0 }),
          (this.r = !1))
      }
    }
    async maybeAcceptCursorPrediction({ event: e, triggerCppCallback: t }) {
      if (!this.isCursorPredictionEnabled()) return
      const s = this.F.nonPersistentStorage.cursorPrediction
      if (s === void 0) return
      const n = s.lineNumber
      let r
      const o = this.N.getActiveCodeEditor()
      if (o && o.getModel() && ys.isEqual(o.getModel().uri, s.uri)) r = o
      else {
        const l = this.W.groups.find(
          (c) =>
            c.activeEditor?.resource &&
            ys.isEqual(c.activeEditor.resource, s.uri),
        )
        if (((r = l?.activeEditorPane?.getControl()), !l || !r)) {
          await Bgo(s.uri, this.S, this.U, { inNewTab: !1 })
          const c = this.W.groups.find(
            (h) =>
              h.activeEditor?.resource &&
              ys.isEqual(h.activeEditor.resource, s.uri),
          )
          if (((r = c?.activeEditorPane?.getControl()), !c || !r)) {
            df("[CURSOR PREDICTION] Failed to open predicted file")
            return
          }
        }
      }
      const a = r.getModel()
      if (
        (df("[CURSOR PREDICTION] model.uri", a?.uri),
        df("[CURSOR PREDICTION] prediction.uri", s.uri),
        a && ys.isEqual(a.uri, s.uri))
      ) {
        if (
          (df("[CURSOR PREDICTION] Continuing to accept cursor prediction"),
          this.shouldTabInsteadOfAccepting(r, a))
        )
          return
        const l = Math.max(1, a.getLineFirstNonWhitespaceColumn(n)),
          c = r.getPosition()
        c && this.g.push({ position: c, prediction: wf(s) }),
          r.hasTextFocus() || r.focus(),
          r.setPosition({ lineNumber: n, column: l }, CURSOR_PREDICTION),
          r.revealLineInCenterIfOutsideViewport(n),
          e.stopPropagation(),
          e.stopImmediatePropagation(),
          e.preventDefault(),
          (this.X = !0),
          this.clearPrediction({ editor: r, registerReject: !1 }),
          this.Q.recordAcceptCursorPredictionEvent(a, s),
          this.r && t?.(a.uri, r, CppIntent.CursorPrediction),
          (this.r = !1)
      }
    }
    isInVimNonInsertMode() {
      const e = this.P.getViewModel()
      for (const t of [...e.getEntries(0), ...e.getEntries(1)])
        if (
          t.id === "vscodevim.vim.primary" &&
          !["INSERT"].some((s) => t.container.innerText.includes(s))
        )
          return !0
      return !1
    }
    shouldTabInsteadOfAccepting(e, t) {
      if (
        this.isInVimNonInsertMode() ||
        this.Y()?.cppConfig?.isFusedCursorPredictionModel
      )
        return !1
      const s = e.getPosition()?.lineNumber
      return s === void 0 ? !1 : t.getLineFirstNonWhitespaceColumn(s) === 0
    }
    fastCurrentFileInfoDoesNotWorkForNotebooks(e, t, s, n) {
      if (e.scheme !== ce.aiChat)
        return new Ho({
          relativeWorkspacePath: this.G.asRelativePath(e),
          contents: t,
          cursorPosition: new Qm({ line: n.lineNumber, column: n.column }),
          languageId: "",
          fileVersion: s,
          workspaceRootPath: this.G.getWorkspaceFolder(e)?.uri.fsPath,
        })
    }
    async getPartialCursorPredictionRequest({
      editor: e,
      uri: t,
      modelValue: s,
      getLinterErrors: n,
      modelVersion: r,
    }) {
      const o = n(t),
        a = e.getModel()
      if (a === null) throw new Error("Model is null")
      a.pushStackElement()
      const l = (m, b) => {
          const y = m.split(`
`)
          let w = Math.max(0, b - Mve),
            C = Math.min(y.length, b + Mve)
          const S = Mve - b,
            x = b - (y.length - Mve)
          S > 0
            ? (C = Math.min(y.length, C + S))
            : x > 0 && (w = Math.max(0, w - x))
          for (let k = 0; k < w; k++) y[k] = ""
          for (let k = C; k < y.length; k++) y[k] = ""
          return y.join(`
`)
        },
        c = e.getPosition()
      if (c === null)
        throw new Error("[CURSOR PREDICTION] Cursor position is undefined")
      s.split(`
`).length >
        Mve * 2 && (s = l(s, c.lineNumber))
      const h = this.fastCurrentFileInfoDoesNotWorkForNotebooks(t, s, r, c)
      let u
      const d = performance.now(),
        g = await this.M.onlyLocalProvider?.runCommand(
          EditHistoryDiffFormatter.CompileGlobalDiffTrajectories,
          {},
        )
      if (g === void 0)
        throw new Error(
          "Compile Diff Trajectories not registered in extension host",
        )
      u = {
        fileDiffHistories: g,
        diffHistory: [],
        blockDiffPatches: [],
        mergedDiffHistories: g,
      }
      const p = performance.now()
      return (
        this.J.distribution({
          stat: "cursorpredclient.immediatelyFire.diffHistory",
          value: p - d,
        }),
        {
          ...u,
          linterErrors: o,
          currentFile: h,
          enableMoreContext:
            this.F.applicationUserPersistentStorage.cppExtraContextEnabled,
          cppIntentInfo: { source: "line_change" },
        }
      )
    }
    async getAndShowNextPrediction({
      editor: e,
      triggerCppCallback: t,
      getLinterErrors: s,
      source: n,
      cppSuggestionRange: r,
    }) {
      if (
        (await this.periodicallyReloadCursorPredictionConfig(),
        df("[CURSOR PREDICTION] createPrediction: called"),
        !this.isCursorPredictionEnabled() || this.C === !0)
      ) {
        df(
          "[CURSOR PREDICTION] createPrediction: not enabled or currently clearing prediction",
        )
        return
      }
      if (this.Y()?.cppConfig?.isFusedCursorPredictionModel) {
        df(
          "[CURSOR PREDICTION] createPrediction: skipping because fused cursor prediction model is enabled",
        )
        return
      }
      try {
        df("[CURSOR PREDICTION] createPrediction: clearing prediction"),
          await this.clearPrediction({ editor: e, registerReject: !0 }),
          df("[CURSOR PREDICTION] createPrediction: cleared prediction")
        const o = e.getModel()
        if (!o) {
          df("[CURSOR PREDICTION] createPrediction: model is null")
          return
        }
        const a = e.getSelection()
        if (a === null) {
          df("[CURSOR PREDICTION] createPrediction: selection is null")
          return
        }
        if (this.overlapsInlineDiff(o.uri, a.startLineNumber) === !0) {
          df("[CURSOR PREDICTION] createPrediction: overlapsInlineDiff")
          return
        }
        if (o.getLineCount() < Ugo) {
          df(
            "[CURSOR PREDICTION] createPrediction: model.getLineCount() < CURSOR_PREDICTION_MIN_FILE_LINES",
          )
          return
        }
        let l =
          this.F.applicationUserPersistentStorage.cursorPredictionState?.model
        l === void 0 && (l = $go)
        let c = this.F.workspaceUserPersistentStorage.uniqueCppWorkspaceId
        if (
          (c === void 0 &&
            ((c =
              Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15)),
            this.F.setWorkspaceUserPersistentStorage(
              "uniqueCppWorkspaceId",
              c,
            )),
          o.uri.scheme === ce.vscodeNotebookCell)
        )
          return
        let h = []
        const u = await this.shouldRelyOnFileSyncForFile(
          this.G.asRelativePath(o.uri),
          o.getVersionId(),
        )
        u &&
          (h = await this.getFileSyncUpdates(
            this.G.asRelativePath(o.uri),
            o.getVersionId(),
          )),
          df(
            "[CURSOR PREDICTION] createPrediction: getting partial cursor prediction request",
          )
        const d = await this.getPartialCursorPredictionRequest({
          editor: e,
          uri: o.uri,
          modelVersion: o.getVersionId(),
          modelValue: u ? "" : o.getValue(),
          getLinterErrors: s,
        })
        d.currentFile !== void 0 && (d.currentFile.relyOnFilesync = u)
        const g = {
          ...d,
          modelName: l,
          diffHistoryKeys: [],
          contextItems: [],
          parameterHints: this.L.getRelevantParameterHints(e),
          lspContexts: [],
          workspaceId: c,
          fileSyncUpdates: h,
          fileVisibleRanges: this.getOpenVisibleRanges(),
        }
        this.h !== void 0 && this.h.abort(), (this.h = new AbortController())
        const p = await this.aiClient(),
          m = await this.$()
        let b = "",
          y,
          w = !1
        const C = rt(),
          S = p.streamNextCursorPrediction(g, {
            signal: this.h.signal,
            headers: { ..._go(C), ...m },
          })
        let x
        df("[CURSOR PREDICTION] createPrediction: starting to stream")
        for await (const E of S) {
          const D = E.response
          if (
            (D.case === "fileName" &&
              ((x = this.G.resolveRelativePath(D.value)),
              x === void 0 &&
                df("[CURSOR PREDICTION] predictedUri is undefined")),
            D.case === "lineNumber")
          ) {
            y = D.value
            break
          }
          if (D.case === "isNotInRange") {
            w = !0
            break
          }
        }
        if ((this.h?.abort(), (this.h = void 0), w)) {
          df("[CURSOR PREDICTION] createPrediction: isNoOp")
          return
        }
        if (y === void 0) {
          df("[CURSOR PREDICTION] predictedLineNumberInRange is undefined.")
          return
        }
        const k = await this.createPrediction({
          editor: e,
          model: o,
          predictedLineNumberInRange: y,
          predictionText: b,
          generationUuid: C,
          source: n,
          cppSuggestionRange: r,
          predictedUri: x,
        })
        if (
          t !== void 0 &&
          k?.lineNumber !== void 0 &&
          this.F.nonPersistentStorage.cppState?.suggestion === void 0
        ) {
          const E = new Me(k.lineNumber, 1)
          t(o.uri, e, CppIntent.CursorPrediction, E)
        }
      } catch {}
    }
    async getFileSyncUpdates(e, t) {
      try {
        return (
          (
            await this.M.onlyLocalProvider?.runCommand(GB.GetFileSyncUpdates, {
              relativeWorkspacePath: e,
              requestedModelVersion: t,
            })
          )?.map((n) => cG.fromJson(n)) ?? []
        )
      } catch (s) {
        return s("[CURSOR PREDICTION] error getting file sync updates", s), []
      }
    }
    async shouldRelyOnFileSyncForFile(e, t) {
      try {
        const s = await this.M.onlyLocalProvider?.runCommand(
          GB.ShouldRelyOnFileSyncForFile,
          { relativeWorkspacePath: e, modelVersion: t },
        )
        return (
          df("[CURSOR PREDICTION] should rely on file sync for file", e, s),
          s ?? !1
        )
      } catch (s) {
        return (
          s(
            "[CURSOR PREDICTION] error checking if should rely on file sync for file",
            s,
          ),
          !1
        )
      }
    }
    async $() {
      const e = await this.M.onlyLocalProvider?.runCommand(
        GB.GetFileSyncEncryptionHeader,
        null,
      )
      if (e === void 0)
        throw new Error("Could not retrieve file sync encryption header")
      return e
    }
    overlapsInlineDiff(e, t) {
      const s = this.F.nonPersistentStorage.inlineDiffs
      if (s === void 0) return !1
      const n = this.F.nonPersistentStorage.inprogressAIGenerations.map(
        (r) => r.generationUUID,
      )
      return s.some((r) => {
        const o = n.includes(r.generationUUID),
          a =
            t >= r.currentRange.startLineNumber &&
            t <= r.currentRange.endLineNumberExclusive,
          l = ys.isEqual(r.uri, e) || e.fsPath === r.uri.fsPath
        return o && a && l
      })
    }
    doesPredictionMatchUniqueLineInRange({
      model: e,
      range: t,
      predictionText: s,
    }) {
      const n = e
        .getValue()
        .split(
          `
`,
        )
        .slice(t.startLineNumber - 1, t.endLineNumberExclusive + 2)
      let r = 0,
        o = !1
      for (r = 0; r < n.length - 2; r++)
        if (
          n
            .slice(r, r + 3)
            .join(
              `
`,
            )
            .startsWith(s)
        ) {
          if (o) return !1
          o = !0
        }
      return o
    }
    async clearPrediction({
      editor: e,
      onlyRemoveOverlayWidget: t,
      registerReject: s,
    }) {
      const n = this.F.nonPersistentStorage.cursorPrediction
      if (n !== void 0) {
        this.C = !0
        try {
          if ((this.m?.dispose(), (this.m = void 0), t === !0)) return
          const r = e.getModel()
          if (r !== null && ys.isEqual(r.uri, n.uri))
            r.deltaDecorations([n.decorationId], []),
              this.t !== void 0 &&
                (r.deltaDecorations([this.t], []), (this.t = void 0)),
              this.w !== void 0 &&
                (r.deltaDecorations([this.w], []), (this.w = void 0)),
              s &&
                n !== void 0 &&
                this.Q.recordRejectCursorPredictionEvent(r, n)
          else {
            const o = await this.O.createModelReference(n.uri)
            try {
              const a = o.object.textEditorModel
              a.deltaDecorations([n.decorationId], []),
                s &&
                  n !== void 0 &&
                  this.Q.recordRejectCursorPredictionEvent(a, n)
            } finally {
              o.dispose()
            }
          }
          this.n && (this.n.dispose(), (this.n = void 0)),
            this.y?.dispose(),
            (this.y = void 0),
            this.F.setNonPersistentStorage("cursorPrediction", void 0)
        } catch (r) {
          r("[CURSOR PREDICTION] error clearing prediction", r)
        } finally {
          this.C = !1
        }
      }
    }
    hideWidgetsIfConflictsWithCppSuggestion(e, t) {
      if (!this.isCursorPredictionEnabled()) return
      const s = this.F.nonPersistentStorage.cursorPrediction
      if (s === void 0) return
      const n = e.getModel()
      n !== null &&
        ys.isEqual(n.uri, s.uri) &&
        s.lineNumber >= t.startLineNumber &&
        s.lineNumber < t.endLineNumberExclusive &&
        (this.clearPrediction({
          editor: e,
          onlyRemoveOverlayWidget: !0,
          registerReject: !1,
        }),
        this.n?.hide())
    }
    maybeShowHintLineWidget() {
      this.isCursorPredictionEnabled() &&
        (this.F.nonPersistentStorage.cursorPrediction === void 0 ||
          this.n === void 0 ||
          (this.n.show(), (this.r = !0)))
    }
    async getMultifileCursorPredictionEditor(e) {
      if (
        (df("[CursorPredictionService] createPredictionMultifile: called"),
        this.C === !0 || e === void 0)
      )
        return
      const t = this.G.asRelativePath(e)
      df("[CURSOR PREDICTION] createPredictionMultifile: to", t)
      const s = this.N.getActiveCodeEditor()
      if (s && ys.isEqual(s.getModel()?.uri, e)) return s
      const n = this.N.listCodeEditors()
      for (const r of n) if (ys.isEqual(r.getModel()?.uri, e)) return r
    }
    ab(e, t, s, n) {
      df(
        "[CURSOR PREDICTION] Updating non-visible editor indicator",
        t.toString(),
      ),
        this.y instanceof Gdt
          ? (df("[CURSOR PREDICTION] Updating existing indicator"),
            this.y.updateContent(t, s))
          : (df("[CURSOR PREDICTION] Creating new indicator"),
            this.y?.dispose(),
            (this.y = this.I.createInstance(Gdt, e, t, s)))
    }
    async createPrediction(e) {
      const {
        predictionText: t,
        generationUuid: s,
        source: n,
        cppSuggestionRange: r,
        predictedUri: o,
      } = e
      let a = e.editor,
        l = e.model,
        c = l.uri
      if (o !== void 0) {
        c = o
        const y = await this.getMultifileCursorPredictionEditor(o)
        if (y !== void 0) {
          a = y
          const w = a.getModel()
          if (w === null) return
          l = w
        }
      }
      let h = e.predictedLineNumberInRange
      if (this.C === !0) return
      await this.clearPrediction({ editor: a, registerReject: !0 })
      const u = a.getPosition()
      if (
        h === void 0 ||
        u === null ||
        Math.abs(u.lineNumber - h) <= 1 ||
        this.overlapsInlineDiff(l.uri, h) === !0 ||
        this.R.isValidCursorPredictionCase({
          predictedLineNumber: h,
          cppSuggestionRange: r,
        }).valid === !1
      )
        return
      const d = this.getDecoration({ model: l, lineNumber: h }),
        g = l.deltaDecorations([], [d]).at(0)
      if (g === void 0) return
      if (
        (this.q !== void 0 && clearTimeout(this.q),
        ys.isEqual(a.getModel()?.uri, c)
          ? ((this.y = this.I.createInstance(Fgo, a, g)),
            (this.n = this.I.createInstance(gdi, a, g)))
          : (df("[CURSOR PREDICTION] Prediction is in a non-visible editor"),
            this.ab(a, c, h, t)),
        this.j.get(a.getId()) === void 0)
      ) {
        const y = this.D(
            a.onDidChangeModel((x) => {
              ;(this.X = !1),
                this.clearPrediction({ editor: a, registerReject: !0 })
            }),
          ),
          w = this.D(
            a.onDidBlurEditorText(() => {
              ;(this.X = !1),
                this.clearPrediction({ editor: a, registerReject: !0 })
            }),
          ),
          C = this.D(
            a.onDidChangeModelContent(() => {
              ;(this.X = !1),
                !(
                  EYe.current === !0 &&
                  this.Y()?.cppConfig?.isFusedCursorPredictionModel === !0
                ) && this.clearPrediction({ editor: a, registerReject: !0 })
            }),
          ),
          S = this.D(
            a.onDidChangeCursorPosition((x) => {
              this.X && (this.X = !1)
            }),
          )
        this.j.set(a.getId(), [y, w, C, S])
      }
      const b = {
        source: n,
        monotonicallyIncreasingPredictionId: this.z++,
        requestId: s,
        decorationId: g,
        uri: c,
        lineNumber: h,
        text: t,
      }
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
          action: 'displayFusedCursorPrediction',
          predictionId: e._predictionId_for_log,
          fusedCursorPrediction: e._fusedCursorPrediction,
        }),
      });
      return (
        df(`Created Prediction with RequestId ${b.requestId}`),
        this.Q.recordSuggestCursorPredictionEvent(l, b),
        this.F.setNonPersistentStorage("cursorPrediction", b),
        b
      )
    }
    isShowingCursorPrediction(e) {
      const t = this.F.nonPersistentStorage.cursorPrediction
      return t === void 0 ? !1 : ys.isEqual(t.uri, e.getModel()?.uri)
    }
    async manuallyCreateCursorPrediction(e) {
      if (!this.isCursorPredictionEnabled()) return
      e.triggerCppCallback === null ? (this.r = !0) : (this.r = !1)
      const t = await this.getMultifileCursorPredictionEditor(e.model.uri)
      let s = e.editor,
        n = e.model
      if (t !== void 0) {
        s = t
        const o = s.getModel()
        if (o === null) return
        n = o
      }
      const r = await this.createPrediction({
        _predictionId_for_log: e._predictionId_for_log,
        _fusedCursorPrediction: e._fusedCursorPrediction,
        editor: s,
        model: n,
        predictedLineNumberInRange: e.lineNumber,
        predictionText: "",
        generationUuid: rt(),
        source: QN.UNSPECIFIED,
        predictedUri: e.model.uri,
      })
      if (r !== void 0 && e.triggerCppCallback !== null) {
        const o = new Me(r.lineNumber, 1)
        e.triggerCppCallback(n.uri, s, CppIntent.CursorPrediction, o)
      }
    }
    getDecoration({ model: e, lineNumber: t }) {
      return {
        range: {
          startLineNumber: t,
          startColumn: 1,
          endLineNumber: t,
          endColumn: e.getLineMaxColumn(t),
        },
        options: { description: "next cursor prediction", stickiness: 1 },
      }
    }
    dispose() {
      this.j.forEach((e) => e.forEach((t) => t.dispose())),
        this.j.clear(),
        super.dispose()
    }
    getModel() {
      return (
        this.Y().cursorPredictionState?.model ?? this.Y().cursorPredictionModel
      )
    }
    async _refreshConfig() {
      const t = await (
          await this.cursorPredictionClient()
        ).cursorPredictionConfig({}),
        s = t.models.filter((n) => n.name && n.radius)
      this.F.setApplicationUserPersistentStorage(
        "cursorPredictionState",
        (n) => ({
          ...(n ?? {}),
          modelConfigs: s,
          defaultModel: t.defaultModel,
          heuristics: t.heuristics,
        }),
      )
    }
    updateHintLineWidgetMarginLeft(e) {
      this.n?.updateMarginLeft(e)
    }
    getOpenVisibleRanges() {
      const e = [],
        t = this.Y().cppConfig?.excludeRecentlyViewedFilesPatterns ?? []
      for (const s of this.N.listCodeEditors()) {
        const n = s.getModel()
        if (Pn(s) && n) {
          const r = n.uri,
            o = this.G.asRelativePath(r),
            a = [
              ce.file,
              ce.inMemory,
              ce.vscodeNotebookCell,
              ce.vscodeFileResource,
              ce.vscodeRemote,
              ce.vscodeRemoteResource,
              ce.vscodeManagedRemoteResource,
            ]
          if (
            o === void 0 ||
            o === "" ||
            o.includes("anysphere") ||
            !a.some((c) => Cg(n.uri, c)) ||
            t.some((c) => o.includes(c))
          )
            continue
          const l = s
            .getVisibleRanges()
            .map(
              (c) =>
                new L$i({
                  startLineNumberInclusive: c.startLineNumber,
                  endLineNumberExclusive: c.endLineNumber,
                }),
            )
          e.push(new N$i({ filename: o, visibleRanges: l }))
        }
      }
      return e
    }
    async bb(e, t) {
      const s = await this.O.createModelReference(e)
      try {
        return s.object.textEditorModel.getLineContent(t)
      } finally {
        s.dispose()
      }
    }
    cb() {
      for (const e of this.N.listCodeEditors())
        this.clearPrediction({ editor: e, registerReject: !1 })
    }
  }
  ;(CursorPredictionService = __decorate(
    [
      __param(0, ei),
      __param(1, it),
      __param(2, mo),
      __param(3, Z),
      __param(4, metricsService),
      __param(5, cppTypeService),
      __param(6, everythingProviderService),
      __param(7, yi),
      __param(8, Xt),
      __param(9, cl),
      __param(10, cppEventLoggerService),
      __param(11, t$s),
      __param(12, nt),
      __param(13, Ci),
      __param(14, si),
    ],
    CursorPredictionService,
  )),
    Ve(cursorPredictionService, CursorPredictionService, 1)

  return CursorPredictionService;
}
