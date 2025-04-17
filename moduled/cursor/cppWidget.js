// @ts-check

export function createCppWidget(params) {
  const { V, CYe, FFt, KS, oR, N, zT, Ye, f_, g_, p_, G, q, W, Yy, U, hu, __decorate, __param, Pt, ve, Z: instantiationService, ei: reactiveStorageService, si, qi, Hi, Ds, Ce: contextKeyService, Me, DKi, eI, ge, R, rt, Jl, pl, Ic, a0, oT, f3, b4, np, K3, J3, B4, bf, _v, OFt, CppIntent, k7, f: getMessage, ss, aiFeatureStatusService, ue, cppService, st, cursorPredictionService, importPredictionService, Ai, Jon, Zt, so, me, Tn, Fcr, ZXe } = params;

  // var Acr = new CYe()
  // function WBt(i, e, t) {
  //   return i.length > 2e3 || e.length > 2e3
  //     ? (console.error(
  //         "BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffChars received strings that were too long. Returning the trivial diff.",
  //         i.length,
  //         e.length,
  //       ),
  //       [
  //         { value: i, removed: true },
  //         { value: e, added: true },
  //       ])
  //     : Acr.diff(i, e, t)
  // }
  // function Mcr(i) {
  //   let e = "",
  //     t = "",
  //     s = "",
  //     n = 0
  //   const r = [],
  //     o = [],
  //     a = (l) => {
  //       let c = s.split(`
  // `),
  //         h =
  //           e.split(`
  // `).length - 1
  //       if (
  //         l !== "" &&
  //         !l.startsWith(`
  // `) &&
  //         c.length > 0
  //       ) {
  //         const u = c.pop()
  //         let d
  //         c.length > 0
  //           ? (d = 1)
  //           : (d =
  //               (e
  //                 .split(
  //                   `
  // `,
  //                 )
  //                 .at(-1)?.length ?? 0) + 1),
  //           u !== undefined &&
  //             u !== "" &&
  //             r.push({ lineNumber: h, column: d, value: u }),
  //           (h -= 1)
  //       } else {
  //         const u = c.shift()
  //         if (u !== undefined && u !== "") {
  //           const g =
  //             e
  //               .split(
  //                 `
  // `,
  //               )
  //               .at(-1)?.length ?? 0
  //           r.push({ lineNumber: h, column: g + 1, value: u })
  //         }
  //       }
  //       if (c.length > 0)
  //         for (const u of c)
  //           o.push({
  //             beforeLineNumber: h,
  //             indexInMultilineAddition: n++,
  //             value: u,
  //           })
  //     }
  //   for (const l of i)
  //     l.added
  //       ? (s += l.value)
  //       : (s !== "" && (a(l.value), (t += s), (s = "")),
  //         (e += l.value),
  //         (t += l.value))
  //   return s !== "" && a(""), { inlineModifications: r, fullLineModifications: o }
  // }
  // function $cr(i, e) {
  //   return !!(
  //     i.fullLineModifications.some((s) => s.beforeLineNumber < e.lineNumber) ||
  //     i.inlineModifications
  //       .filter((s) => s.lineNumber === e.lineNumber)
  //       .some((s) => s.startColumn < e.column)
  //   )
  // }
  // function Fcr(i, e, t, s, n) {
  //   const { inlineModifications: r, fullLineModifications: o } = Mcr(i),
  //     a = []
  //   for (const c of o)
  //     a.push({
  //       beforeLineNumber: c.beforeLineNumber + e,
  //       indexInMultilineAddition: c.indexInMultilineAddition,
  //       content: c.value,
  //       decorations: [new KS(1, c.value.length + 1, "ghost-text", 0)],
  //     })
  //   const l = r.map((c) => ({
  //     lineNumber: c.lineNumber + e,
  //     startColumn: c.column,
  //     newValue: c.value,
  //     oldValue: "",
  //   }))
  //   return $cr({ inlineModifications: l, fullLineModifications: a }, t)
  //     ? { success: false, inlineModifications: l, fullLineModifications: a }
  //     : { success: true, inlineModifications: l, fullLineModifications: a }
  // }

  var qBt,
    Wcr = 10
  function Mes() {
    let i = "abcdefghijklmnopqrstuvwxyz",
      e = ""
    for (let t = 0; t < 10; t++)
      e += i.charAt(Math.floor(Math.random() * i.length))
    return e
  }
  var CppDiffPeekViewWidget = class extends oR {
    static {
      qBt = this
    }
    static {
      this.TitleMenu = new N("cpp-diff-peek-view/title")
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g) {
      super(
        e,
        { showFrame: true, showArrow: false, isResizeable: true, isAccessible: true },
        a,
      ),
        (this.r = t),
        (this.bb = s),
        (this.cb = n),
        (this.db = l),
        (this.eb = c),
        (this.fb = h),
        (this.gb = u),
        (this.hb = d),
        (this.ib = g),
        (this.a = e),
        (this.b = r),
        (this.c = o),
        this.create(),
        this.jb(this.b.getColorTheme()),
        this.q.add(this.b.onDidColorThemeChange(this.jb, this)),
        this.q.add(this.eb.onDidChangeActiveGroup(() => this.dispose())),
        this.q.add(this.a.onDidDispose(() => this.dispose())),
        this.q.add(this.a.onDidChangeModel(() => this.dispose())),
        this.q.add(
          this.db.onChangeEffectManuallyDisposed({
            deps: [
              () => this.db.nonPersistentStorage.cppState?.peekViewSuggestion,
            ],
            onChange: ({ prevDeps: p, deps: m }) => {
              const b = p?.[0],
                y = m?.[0]
              !b && !y && this.dispose()
            },
          }),
        ),
        this.q.add(
          this.db.onChangeEffectManuallyDisposed({
            deps: [() => this.db.nonPersistentStorage.cppState?.suggestion],
            onChange: ({ prevDeps: p, deps: m }) => {
              m?.[0] && this.dispose()
            },
          }),
        ),
        this.kb()
    }
    dispose() {
      this.q.dispose(), super.dispose()
    }
    jb(e) {
      const t = e.getColor(zT) || Ye.transparent
      this.style({
        arrowColor: t,
        frameColor: t,
        headerBackgroundColor: e.getColor(f_) || Ye.transparent,
        primaryHeadingColor: e.getColor(g_),
        secondaryHeadingColor: e.getColor(p_),
      })
    }
    kb() {
      this.y || super.show(G.fromPositions(this.r), Wcr), (this.y = true)
    }
    T(e) {
      const t = q(".cpp-peek-view-title", {})
      e.appendChild(t),
        (e.style.zIndex = "1000"),
        (e.style.position = "relative"),
        (e.style.padding = "0 8px")
      const s = W(t, q("div.cpp-peek-view-title-text"))
      ;(s.textContent = "Cursor Tab Preview"),
        (this.d = t),
        super.T(e),
        this.q.add(this.O.actionRunner.onWillRun(() => this.editor.focus()))
      const n = this.hb.createMenu(qBt.TitleMenu, this.ib),
        r = () => {
          const o = Yy(n.getActions()),
            a = this.O.getAction(this.O.viewItems.length - 1)
          this.O.clear(),
            this.O.push(o, { label: false, icon: true }),
            a && this.O.push([a], { label: false, icon: true })
        }
      this.q.add(n), this.q.add(n.onDidChange(r)), r()
    }
    X(e) {
      this.m = e
      const t = this.a.getModel()
      if (!t) return
      const s = this.gb.createById(t.getLanguageId()),
        n = this.fb.createModel(
          this.bb.original,
          s,
          U.parse(`cpp-diff-peek-view-widget-anysphere://${Mes()}`),
        ),
        r = this.gb.createById(n.getLanguageId()),
        o = this.fb.createModel(
          this.bb.new,
          r,
          U.parse(`cpp-diff-peek-view-widget-anysphere://${Mes()}`),
        ),
        a = this.editor.getLayoutInfo(),
        l = this.Q.createInstance(
          hu,
          e,
          {
            stickyScroll: { enabled: false },
            readOnly: true,
            renderSideBySide: false,
            dimension: { width: this.u(a), height: e.clientHeight },
          },
          {
            originalEditor: { isSimpleWidget: true, contributions: [] },
            modifiedEditor: { isSimpleWidget: true, contributions: [] },
          },
        )
      l.setModel({ original: n, modified: o }),
        l.waitForDiff().then(() => {
          l.revealFirstDiff()
        })
      const c = new ResizeObserver(() => {
        const h = this.editor.getLayoutInfo()
        l.layout({ width: this.u(h), height: e.clientHeight })
      })
      c.observe(e),
        this.q.add({
          dispose: () => {
            c.disconnect()
          },
        }),
        (this.diffEditor = l)
    }
  }
  CppDiffPeekViewWidget = qBt = __decorate(
    [
      __param(4, Pt),
      __param(5, ve),
      __param(6, instantiationService),
      __param(7, reactiveStorageService),
      __param(8, si),
      __param(9, qi),
      __param(10, Hi),
      __param(11, Ds),
      __param(12, contextKeyService),
    ],
    CppDiffPeekViewWidget,
  )
  function createDiffPeekView(i, e, t, s, n) {
    return n.createInstance(CppDiffPeekViewWidget, i, e, t, s)
  }
  var tQe = class {
    constructor(i, e, t) {
      ;(this.a = i), (this.uri = e), (this.b = t)
    }
    getValueInRange(i, e) {
      return Kcr(this.a, i)
    }
    getLineMaxColumn(i) {
      return Gcr(this.a, i)
    }
    getPositionAt(i) {
      return jcr(this.a, i)
    }
    getOffsetAt(i) {
      return zcr(this.a, i)
    }
    getValue(i, e) {
      return this.a
    }
    getLineCount() {
      return this.a.split(`
  `).length
    }
    getVersionId() {
      return this.b ?? 0
    }
  }
  function jcr(i, e) {
    const t = i.split(`
  `)
    let s = 0,
      n = 1
    for (const r of t) {
      if (s + r.length + 1 > e) return new Me(n, e - s + 1)
      ;(s += r.length + 1), n++
    }
    return new Me(t.length, t[t.length - 1].length + 1)
  }
  function zcr(i, e) {
    const t = i.split(`
  `)
    let s = 0
    if (e.lineNumber > t.length || e.lineNumber < 1) return -1
    for (let n = 0; n < e.lineNumber - 1; n++) s += t[n].length + 1
    return (s += Math.min(e.column - 1, t[e.lineNumber - 1].length)), s
  }
  function Gcr(i, e) {
    if (e < 1) return 0
    const t = i.split(`
  `)
    return e > t.length ? t[t.length - 1].length + 1 : t[e - 1].length + 1
  }
  function Jcr(i, e) {
    const t = i.split(`
  `),
      s = e.startLineNumber - 1,
      n = e.endLineNumberInclusive - 1,
      r = e.startColumn - 1
    let o = e.endColumn - 1
    const a = t.slice(s, n + 1)
    return a.length === 0
      ? ""
      : (n >= t.length && (o = undefined),
        a.length === 1
          ? (a[0] = a[0].slice(r, o))
          : ((a[0] = a[0].slice(r)),
            (a[a.length - 1] = a[a.length - 1].slice(0, o))),
        a.join(`
  `))
  }
  function Kcr(i, e) {
    return Jcr(i, {
      startColumn: e.startColumn,
      startLineNumber: e.startLineNumber,
      endColumn: e.endColumn,
      endLineNumberInclusive: e.endLineNumber,
    })
  }
  function jBt(i, e) {
    return new tQe(i, e)
  }
  function Ycr(i) {
    const e = i.uri,
      t = i.getValue(),
      s = i.getVersionId()
    return new tQe(t, e, s)
  }
  function Xcr(i, e) {
    const t = e.reduce((s, n) => DKi(s, n), i.getValue())
    return new tQe(t, i.uri, i.getVersionId() + 1)
  }
  function Qcr(i, e) {
    const t = DKi(i.getValue(), e)
    return new tQe(t, i.uri, i.getVersionId() + 1)
  }
  var Zcr = false,
    ehr = false,
    ch = Zcr ? console.log : () => {},
    $es = (i, e) => {
      const t = i.split(e),
        n = t.length.toString().length
      return t
        .map((r, o) => `${(o + 1).toString().padStart(n, " ")}: ${r}`)
        .join(e)
    },
    kF = (i, e, t, s = false) => {
      ch("[ian] text", JSON.stringify(i)), ch("[ian] startLineNumber", e)
      const n = i.split(t)
      if (s) {
        const r = n[0]
        r !== undefined &&
          r === "" &&
          i !==
            `
  ` &&
          n.shift()
        const o = n[n.length - 1]
        if (
          (o !== undefined &&
            o === "" &&
            i !==
              `
  ` &&
            n.pop(),
          n.length === 0)
        )
          return { lineNumber: e, column: 1 }
      }
      return { lineNumber: e + n.length - 1, column: n[n.length - 1].length + 1 }
    }
  function thr(i, e, t, s, n = false) {
    let r = "",
      o = "",
      a,
      l,
      c
    const h = [],
      u = (g) => {
        if (c !== undefined) {
          const p = kF(g, s.startLineNumber, t, n)
          h.push({
            startLineNumber: c.lineNumber,
            startColumn: c.column,
            endLineNumber: p.lineNumber,
            endColumn: p.column,
          })
        }
        c = undefined
      }
    for (const g of e)
      g.removed
        ? ((c = kF(r, s.startLineNumber, t, n)),
          a === undefined && (a = c),
          (l = kF(r + g.value, s.startLineNumber, t, n)))
        : u(r),
        g.added || (r += g.value),
        g.removed || (o += g.value)
    if ((u(r), a === undefined || l === undefined))
      throw new Error(
        "firstRemovedPositionInFullBeforeModel or lastRemovedPositionInFullBeforeModel is undefined",
      )
    let d
    return (
      (d = zBt(i, a, l, true, true)),
      {
        changesRangeInBeforeFullModel: d,
        selectiveNewText: "",
        addedRangesInNewFullModel: [],
        lineCount: 0,
        deletion: true,
        deletedRanges: h,
      }
    )
  }
  function Fes(i, e, t, s, n = false) {
    const r = []
    if (i.some((k) => k.removed) && !i.some((k) => k.added))
      return thr(e, i, t, s, n)
    ch("[ian] changes", i)
    let o = "",
      a = "",
      l,
      c,
      h,
      u,
      d,
      g,
      p
    const m = (k) => {
      if (l !== undefined) {
        const E = kF(k, s.startLineNumber, t)
        r.push({
          startLineNumber: l.lineNumber,
          startColumn: l.column,
          endLineNumber: E.lineNumber,
          endColumn: E.column,
        })
      }
      l = undefined
    }
    for (const k of i) {
      if (k.added) {
        l = kF(a, s.startLineNumber, t, n)
        const E = kF(o, s.startLineNumber, t, n)
        if (c === undefined) {
          let D = o
          p !== undefined && o.endsWith(p) && (D = o.slice(0, -p.length)),
            (c = kF(D, s.startLineNumber, t, n)),
            (g = k.value)
        }
        ;(h = E),
          u === undefined && (u = kF(a, 1, t, n)),
          (d = kF(a + k.value, 1, t, n))
      } else m(a), k.removed && (p = k.value)
      k.added || (o += k.value), k.removed || (a += k.value)
    }
    m(a)
    const b =
      g !== undefined &&
      g.startsWith(`
  `)
    ch("[ian] firstAddedPositionInFullBeforeModel", c),
      ch("[ian] lastAddedPositionInFullBeforeModel", h),
      ch("[ian] firstAddedPositionInSubsetAfterModel", u),
      ch("[ian] lastAddedPositionInSubsetAfterModel", d),
      ch("[ian] trimStart", b)
    let y = s
    h !== undefined && c !== undefined && (y = zBt(e, c, h, b, false))
    const w = jBt(a, U.parse(""))
    let C
    d !== undefined && u !== undefined && (C = zBt(w, u, d, b, true)),
      ch(
        `[ian] afterModel value:
  ` + $es(w.getValue(), t),
      ),
      ch("[ian] afterRange", C)
    const S = C ? w.getValueInRange(C) : ""
    return {
      changesRangeInBeforeFullModel: y,
      selectiveNewText: S,
      addedRangesInNewFullModel: r.map((k) => G.lift(k)),
      lineCount: S.split(t).length,
      deletion: false,
    }
  }
  function ihr(i, e) {
    return e.column > i.getLineMaxColumn(e.lineNumber)
      ? e.lineNumber < i.getLineCount()
        ? new Me(e.lineNumber + 1, 1)
        : e
      : new Me(e.lineNumber, 1)
  }
  function shr(i, e) {
    return e.column === 1 && e.lineNumber > 1
      ? new Me(e.lineNumber - 1, i.getLineMaxColumn(e.lineNumber - 1))
      : e
  }
  function zBt(i, e, t, s, n) {
    if (e.lineNumber === t.lineNumber && e.column === t.column)
      return new G(e.lineNumber, e.column, t.lineNumber, t.column)
    if (e.lineNumber === t.lineNumber)
      return new G(
        e.lineNumber,
        1,
        t.lineNumber,
        i.getLineMaxColumn(t.lineNumber),
      )
    let r = e
    if ((s && (r = ihr(i, e)), r.lineNumber === t.lineNumber))
      return new G(
        r.lineNumber,
        1,
        t.lineNumber,
        i.getLineMaxColumn(t.lineNumber),
      )
    let o = t
    return (
      n && (o = shr(i, t)),
      new G(r.lineNumber, 1, o.lineNumber, i.getLineMaxColumn(o.lineNumber))
    )
  }
  var nhr = "cpp-suggestion-red-background"
  function Oes() {
    let i = "abcdefghijklmnopqrstuvwxyz",
      e = ""
    for (let t = 0; t < 10; t++)
      e += i.charAt(Math.floor(Math.random() * i.length))
    return e
  }
  var Bes = eI("editorCppGhostText", { createHTML: (i) => i }),
    zY
  ;(function (i) {
    let e
    ;(function (s) {
      ;(s[(s.Hidden = 0)] = "Hidden"), (s[(s.Showing = 1)] = "Showing")
    })((e = i.Type || (i.Type = {}))),
      (i.Hidden = { type: 0 })
    class t {
      constructor(n, r) {
        ;(this.editorPosition = n), (this.widgetPosition = r), (this.type = 1)
      }
    }
    i.Showing = t
  })(zY || (zY = {}))
  var GhostTextWidget = class extends V {
    createActionButtons(container) {
      const buttonContainer = W(container, q("div"))
      ;(buttonContainer.style.display = "flex"),
        (buttonContainer.style.alignItems = "center"),
        (buttonContainer.style.gap = "4px")
      const viewButton = W(buttonContainer, q("button"))
      viewButton.classList.add("cpp-suggestion-action-button"), (viewButton.textContent = "View")
      const acceptButton = W(buttonContainer, q("button"))
      acceptButton.classList.add("cpp-suggestion-action-button"), (acceptButton.textContent = "Accept")
      const tabHint = W(acceptButton, q("span"))
      ;(tabHint.textContent = "Tab"),
        tabHint.classList.add("cpp-suggestion-tab-button"),
        (tabHint.style.marginLeft = "4px"),
        this.D(
          ge(viewButton, "mousedown", (event) => {
            const suggestion = this.reactiveStorageService.nonPersistentStorage.cppState?.suggestion
            if (suggestion) {
              event.stopPropagation()
              const { originalText: l, replaceText, decorationId } = suggestion,
                model = this.editor.getModel()
              if (model) {
                const decorationRange = model.getDecorationRange(decorationId)
                if (decorationRange) {
                  const startOffset = model.getOffsetAt(decorationRange.getStartPosition()),
                    endOffset = model.getOffsetAt(decorationRange.getEndPosition()),
                    originalText = model.getValue(),
                    newText = originalText.substring(0, startOffset) + replaceText + originalText.substring(endOffset),
                    suggestionCopy = { ...suggestion },
                    newDecorationId = model.changeDecorations((changeAccessor) =>
                      changeAccessor.addDecoration(decorationRange, { description: "duplicatedSuggestion" }),
                    )
                  newDecorationId && (suggestionCopy.decorationId = newDecorationId),
                    this.reactiveStorageService.setNonPersistentStorage(
                      "cppState",
                      "peekViewSuggestion",
                      suggestionCopy,
                    )
                  const diffPeekView = createDiffPeekView(
                    this.editor,
                    { lineNumber: decorationRange.endLineNumber - 1, column: decorationRange.endColumn },
                    { original: originalText, new: newText },
                    suggestionCopy,
                    this.instantiationService,
                  )
                  this.R.executeCommand("editor.action.setCppDiffPeekView", diffPeekView)
                }
              }
            }
          }),
        ),
        this.D(
          ge(acceptButton, "mousedown", (event) => {
            event.stopPropagation(),
              console.log("acceptFullSuggestion"),
              this.cppService.acceptFullSuggestion()
          }),
        )
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u) {
      super(),
        (this.I = e), (this.editor = this.I),
        (this.J = t), (this.reactiveStorageService = this.J),
        (this.L = s),
        (this.M = n),
        (this.N = r), (this.instantiationService = this.N),
        (this.O = o),
        (this.P = a),
        (this.Q = l), (this.cppService = this.Q),
        (this.R = c),
        (this.S = h), (this.cursorPredictionService = this.S),
        (this.U = u), (this.importPredictionService = this.U),
        (this.allowEditorOverflow = true),
        (this.h = []),
        (this.ghostTextDecorations = []),
        (this.j = this.D(new R())),
        (this.onClick = this.j.event),
        (this.q = U.parse(`cpp-ghost-text-preview-widget-anysphere://${Oes()}`)),
        (this.r = zY.Hidden),
        (this.F = null),
        (this.G = null),
        (this.H = null),
        (this.lastSuggestion = undefined),
        (this.c = q("div.cursorGhostTextWidget")), (this.container = this.c),
        this._updateFontStyles(),
        (this.uuid = rt())
      const lineHeight = this.editor.getOption(68)
      this.container.style.marginTop = -lineHeight + "px"
      const zIndex = 2e11,
        outerContainer = W(this.container, q("div.cppOuter"))
      ;(outerContainer.style.pointerEvents = "none"), (outerContainer.style.position = "relative")
      const innerContainer = W(outerContainer, q("div.cppInner"))
      ;(innerContainer.style.position = "absolute"),
        (innerContainer.style.width = "100000px"),
        (this.g = W(innerContainer, q("div.cppButtonContainer"))), (this.buttonContainer = this.g),
        (this.buttonContainer.style.pointerEvents = "auto"),
        (this.buttonContainer.style.zIndex = `${zIndex + 1}`),
        (this.f = W(this.buttonContainer, q("div"))), (this.buttonPanel = this.f),
        (this.buttonPanel.style.border =
          "1px solid var(--vscode-editorSuggestWidget-border)"),
        (this.buttonPanel.style.backgroundColor =
          "var(--vscode-editorSuggestWidget-background)"),
        (this.buttonPanel.style.borderRadius = "2px"),
        (this.buttonPanel.style.pointerEvents = "auto"),
        (this.buttonPanel.style.zIndex = `${zIndex + 2}`),
        (this.m = W(this.buttonPanel, q("div"))), (this.editorContainer = this.m),
        (this.editorContainer.style.position = "relative")
      let actionButtons
      this.D({
        dispose: () => {
          actionButtons && actionButtons.remove()
        },
      }),
        this.D(
          ge(this.buttonPanel, "mousemove", () => {
            actionButtons && actionButtons.remove(),
              (actionButtons = W(this.buttonPanel, q("div"))),
              (actionButtons.style.display = "flex"),
              (actionButtons.style.justifyContent = "space-between"),
              (actionButtons.style.alignItems = "center"),
              (actionButtons.style.borderTop =
                "1px solid var(--vscode-editorSuggestWidget-border)"),
              (actionButtons.style.padding = "0px 4px"),
              (actionButtons.style.fontSize = "10px"),
              (actionButtons.style.gap = "8px"),
              this.createActionButtons(actionButtons),
              this.buttonPanel.appendChild(actionButtons)
          }),
        ),
        this.D(
          ge(this.buttonPanel, "mouseleave", () => {
            actionButtons && actionButtons.remove()
          }),
        ),
        this.D(Jl.ignoreTarget(this.container)),
        this.editor.addContentWidget(this),
        this.D(
          this.editor.onDidChangeModel((w) => {
            const model = this.editor.getModel()
            model !== null && this._clearModelDecorations(model)
          }),
        ),
        this.D(
          this.editor.onDidChangeModelContent((w) => {
            const model = this.editor.getModel()
            ;(this.db.type !== 1 ||
              !model ||
              this.db.editorPosition.lineNumber >= model.getLineCount()) &&
              this.hideAllInEditor_doesntChangeModel()
          }),
        ),
        this.D(
          ge(this.container, "mouseenter", (event) => {
            ;(event.buttons & 1) === 1 && this.hideAllInEditor_doesntChangeModel()
          }),
        ),
        this.D(
          this.editor.onDidBlurEditorText(() =>
            this.hideAllInEditor_doesntChangeModel(),
          ),
        )
      const options = {
        readOnly: true,
        wordWrap: "off",
        wordWrapOverride1: "off",
        wordWrapOverride2: "off",
        glyphMargin: false,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
        lineNumbers: "off",
        folding: false,
        scrollBeyondLastLine: false,
        renderLineHighlight: "none",
        renderWhitespace: "none",
        minimap: { enabled: false },
        quickSuggestions: false,
        automaticLayout: false,
        automaticLayoutIgnoreHeight: true,
        guides: { indentation: false },
        scrollbar: {
          horizontal: undefined,
          vertical: undefined,
          horizontalScrollbarSize: 0,
          verticalScrollbarSize: 0,
          arrowSize: 0,
          verticalSliderSize: 0,
          horizontalSliderSize: 0,
          ignoreVerticalScrolling: true,
          useShadows: false,
        },
        hover: { enabled: false },
      }
      ;(this.n = this.instantiationService.createInstance(
        Ic,
        this.editorContainer,
        { ...this.editor.getRawOptions(), ...options },
        {
          isSimpleWidget: true,
          contributions: pl.getSomeEditorContributions([a0.ID]),
          cursorCodeBlockType: "cppPreviewBox",
        },
      )),
        this.D(
          this.editor.onDidChangeConfiguration(() => {
            this.n.updateOptions({ ...this.editor.getRawOptions(), ...options })
          }),
        ),
        this.D({
          dispose: () => {
            this.editorContainer.remove(),
              this.n.getModel()?.dispose(),
              this.n.dispose(),
              this._clearAllViewZones(),
              this._clearGhostTextDecorations(),
              this.w?.getModel()?.dispose(),
              this.w?.dispose(),
              this._clearViewZoneAndDecorations()
          },
        }),
        (this.C = document.createElement("div")), (this.wrapper = this.C),
        (this.wrapper.className = "cpp-ghost-text-view-zone-wrapper"),
        (this.w = this.instantiationService.createInstance(
          Ic,
          this.wrapper,
          { ...this.editor.getRawOptions(), ...options },
          {
            isSimpleWidget: true,
            contributions: pl.getSomeEditorContributions([a0.ID]),
            cursorCodeBlockType: "cppPreviewBox",
          },
        )),
        this.D({
          dispose: () => {
            this.w.getModel()?.dispose(), this.w.dispose(), this._clearViewZoneAndDecorations()
          },
        })
    }
    _clearGhostTextDecorations() {
      return this.W();
    }
    W() {
      const model = this.editor.getModel()
      model !== null &&
        (model.deltaDecorations(this.ghostTextDecorations, []),
        (this.ghostTextDecorations = []))
    }
    _clearAllDecorations() {
      return this.X();
    }
    X() {
      const model = this.editor.getModel()
      if (model === null) return
      this.ghostTextDecorations.length > 0 &&
        (this.ghostTextDecorations = model.deltaDecorations(
          this.ghostTextDecorations,
          [],
        ))
      const errorDecorationIds = this.cppService.getRedDecorationIds(model.id)
      errorDecorationIds &&
        errorDecorationIds.length > 0 &&
        (model.deltaDecorations(errorDecorationIds, []),
        this.cppService.setRedDecorationIds(model.id, (existingIds) => existingIds.filter((id) => !errorDecorationIds.includes(id))))
    }
    _clearModelDecorations(model) {
      return this.Y(model);
    }
    Y(model) {
      const inlineSuggestions = model
        .getAllDecorations()
        .filter((n) => n.options.className === "cpp-inline-suggestion")
      inlineSuggestions.length > 0 &&
        model.deltaDecorations(
          inlineSuggestions.map((decoration) => decoration.id),
          [],
        )
      const errorDecorationIds = this.cppService.getRedDecorationIds(model.id)
      errorDecorationIds &&
        errorDecorationIds.length > 0 &&
        (model.deltaDecorations(errorDecorationIds, []),
        this.cppService.setRedDecorationIds(model.id, (existingIds) => existingIds.filter((id) => !errorDecorationIds.includes(id))))
    }
    _clearAllViewZones() {
      return this.Z();
    }
    Z() {
      this.h.length > 0 &&
        this.editor.changeViewZones((changeAccessor) => {
          // this.h => this.viewZoneIds
          for (const zoneId of this.h) changeAccessor.removeZone(zoneId)
          this.h = []
        }),
        this._clearViewZoneAndDecorations()
    }
    ab(e, t, s, n, r, o = false, a = "view-line") {
      const l = n.get(33),
        c = n.get(122),
        h = "none",
        u = n.get(99),
        d = n.get(53),
        g = n.get(52),
        p = n.get(68),
        m = new oT(1e4)
      m.appendString('<div class="suggest-preview-text">')
      for (let w = 0, C = s.length; w < C; w++) {
        const S = s[w],
          x = S.content
        if (o && x === "") {
          m.appendString("<br>")
          continue
        }
        m.appendString('<div class="' + a),
          m.appendString('" style="top:'),
          m.appendString(String(w * p)),
          o ? m.appendString('px;">') : m.appendString('px;width:1000000px;">')
        const k = f3(x),
          E = b4(x),
          D = np.createEmpty(x, r)
        K3(
          new J3(
            g.isMonospace && !l,
            g.canUseHalfwidthRightwardsArrow,
            x,
            false,
            k,
            E,
            0,
            D,
            S.decorations,
            t,
            0,
            g.spaceWidth,
            g.middotWidth,
            g.wsmiddotWidth,
            c,
            h,
            u,
            d !== B4.OFF,
            null,
          ),
          m,
        ),
          m.appendString("</div>")
      }
      m.appendString("</div>"), bf(e, g)
      const b = m.build(),
        y = Bes ? Bes.createHTML(b) : b
      e.innerHTML = y
    }
    bb(e, t, s) {
      this._clearViewZoneAndDecorations()
      const n = this.editor.getModel()
      if (!n) return
      const { tabSize: r } = n.getOptions()
      this.editor.changeViewZones((o) => {
        const a = Math.max(t.length, s)
        if (a > 0) {
          const l = document.createElement("div")
          this.ab(l, r, t, this.editor.getOptions(), this.L.languageIdCodec),
            this.h.push(
              o.addZone({
                afterLineNumber: e,
                heightInLines: a,
                domNode: l,
                afterColumnAffinity: 0,
              }),
            )
        }
      })
    }
    dispose() {
      super.dispose(),
        this.editor.removeContentWidget(this),
        this._clearViewZoneAndDecorations(),
        this.w?.dispose()
    }
    getId() {
      return "GhostTextWidget" + this.uuid
    }
    getDomNode() {
      return this.container
    }
    getPosition() {
      return this.r.type === 1 ? this.r.widgetPosition : null
    }
    _updateLineModificationDecorations(e) {
      const t = []
      for (const n of e)
        if (n.newValue.startsWith(n.oldValue))
          t.push({
            range: G.fromPositions(new Me(n.lineNumber, n.startColumn)),
            options: {
              description: "ghost-text",
              after: {
                content: n.newValue.slice(n.oldValue.length),
                inlineClassName: "ghost-text-decoration",
                cursorStops: _v.Left,
              },
              showIfCollapsed: true,
              className: "cpp-inline-suggestion",
            },
          })
        else {
          const o = n.newValue.indexOf(n.oldValue)
          t.push({
            range: G.fromPositions(new Me(n.lineNumber, n.startColumn)),
            options: {
              description: "ghost-text",
              after: {
                content: o !== -1 ? n.newValue.slice(0, o) : n.newValue,
                inlineClassName: "ghost-text-decoration",
                cursorStops: _v.Left,
              },
              showIfCollapsed: true,
              className: "cpp-inline-suggestion",
            },
          })
        }
      const s = this.editor.getModel()
      s !== null &&
        (this.ghostTextDecorations.length > 0 || t.length > 0) &&
        (this.ghostTextDecorations = s.deltaDecorations(
          this.ghostTextDecorations,
          t,
        ))
    }
    updatePosition(e) {
      const t = this.r.type === 1 ? this.r.widgetPosition.position : null
      if (e && t) {
        const s = this.editor.getModel()?.getDecorationRange(e.decorationId)
        if (s) {
          const n = { lineNumber: s.startLineNumber, column: t.column }
          this.r = new zY.Showing(n, { position: n, preference: [2] })
        }
      }
      this.editor.layoutContentWidget(this)
    }
    showChangesOnTheRightAndMaybeShowReds(e, t, s, n, r) {
      const { greenRanges: o } = OFt(
        e.map((a) =>
          a.removed
            ? { value: a.value, added: true }
            : a.added
              ? { value: a.value, removed: true }
              : a,
        ),
        n,
        "post-change",
      )
      if (o.length > 0) {
        const a = this.cppService.getRedDecorationIds(t.id) ?? [],
          l = t.deltaDecorations(
            a,
            o.map((c) => ({
              range: {
                startLineNumber: c.startLineNumber,
                startColumn: c.startColumn,
                endLineNumber: c.endLineNumber,
                endColumn: c.endColumn,
              },
              options: { description: "red", className: nhr, stickiness: 1 },
            })),
          )
        this.cppService.setRedDecorationIds(t.id, (c) => {
          const h = c.filter((d) => !a.includes(d)),
            u = new Set([...h, ...l])
          return Array.from(u)
        })
      }
      this.showChangesOnTheRight(e, t, s, n, r)
    }
    showChangesOnTheRight(e, t, s, n, r) {
      try {
        for (; this.buttonPanel.firstChild; ) this.buttonPanel.removeChild(this.buttonPanel.firstChild)
        const o = Fes(e, t, s, n)
        if ((ch("[ian] changesOnTheRight", o), !this.editor.getPosition())) return
        const l = Ues(this.editor),
          c = (D, P) => {
            let L = -1
            for (let A = D; A <= P; A += 1) {
              const F = t.getLineMaxColumn(A),
                H = this.editor.getStatusbarColumn(new Me(A, F))
              H > L && (L = H)
            }
            return L
          },
          h = o.changesRangeInBeforeFullModel
        this.cursorPredictionService.hideWidgetsIfConflictsWithCppSuggestion(this.editor, {
          startLineNumber: h.startLineNumber,
          endLineNumberExclusive: h.endLineNumber + 1,
        }),
          this.reactiveStorageService.applicationUserPersistentStorage.cppAutoImportEnabled &&
            this.importPredictionService.hideWidgetsIfConflictsWithCppSuggestion(this.editor, {
              startLineNumber: h.startLineNumber,
              endLineNumberExclusive: h.endLineNumber + 1,
            })
        let u = h.startLineNumber,
          d = n.startLineNumber,
          g = 0,
          p = 0
        for (const D of e) {
          const P = D.value.split(s).length - 1,
            L = d + P
          if (
            (D.removed && P > 0 && L <= u && (g += P),
            D.added &&
              D.value ===
                `
  ` &&
              L > u &&
              d <= u &&
              (p += 1),
            L > u)
          )
            break
          d = L
        }
        ;(u = u - g + p),
          ch("[ian] added ranges", o.addedRangesInNewFullModel),
          ch("[ian] new changes range in old model", h),
          ch("[ian] original changes range", n),
          ch("[ian] total reduction", g),
          ch("[ian] total pure added lines", p)
        const m = h.startLineNumber - g,
          b = this.editor.getOption(52).spaceWidth
        ch("[ian] line to render", m)
        const y = c(h.startLineNumber, h.endLineNumber)
        ch("[ian] maxColumn", y), ch("[ian] editorWidthInColumns", l)
        const w = t.getLineMaxColumn(m),
          S = 24 + Math.max(0, (y - w) * b)
        this.buttonContainer.style.marginLeft = `${S}px`
        const x = this.editor.getOption(137) === "on",
          k = { lineNumber: m, column: x ? y : Math.min(y, l - 2) },
          E = () => {
            ;(this.db = new zY.Showing(k, { position: k, preference: [2] })),
              ch("[ian] state", this.db)
          }
        if (
          (ch("[ian] startLineInNewModel", u),
          ch(
            `[ian] new value:
  ` + $es(r.newValue, s),
          ),
          ch("[ian] position", k),
          ch("[ian] totalMarginLeft", S),
          o.deletion)
        ) {
          if (((this.buttonPanel.style.padding = "0px"), o.deletedRanges.length > 1)) return
          if (o.deletedRanges.length === 0) return
          const D = o.deletedRanges[0],
            P = t.getValueInRange(D)
          if (P.trim() === "") return
          const L = o.changesRangeInBeforeFullModel,
            A = new G(
              L.startLineNumber,
              1,
              L.endLineNumber,
              t.getLineMaxColumn(L.endLineNumber),
            )
          if (t.getValueInRange(A).trim() !== P.trim()) return
          E()
          for (let H = L.startLineNumber; H <= L.endLineNumber; H++) {
            const B = t.getLineContent(H),
              z = W(this.buttonPanel, q("div.cppCodeLine")),
              K = this.editor.getOption(54)
            ;(z.style.fontSize = `${K}px`), (z.style.height = `${K * 1.5}px`)
            const Q = B.length - B.trimStart().length,
              se = B.length - B.trimEnd().length,
              he = B.trim()
            this._createSpaceElement(z, Q, "ghost-text-decoration-remove"),
              he &&
                (this._createTextElement(z, he, "ghost-text-decoration-inline-remove"),
                this._createSpaceElement(z, se, "ghost-text-decoration-inline-remove"))
          }
        } else {
          const D = this.nb(o, k, S)
          if (
            (ch("[ian] isClipped", D),
            r.forceViewZones || ehr || (this.mb() && D))
          ) {
            const P = e[0] ?? { value: "", added: false, removed: false },
              L =
                P.value ===
                  `
  ` &&
                !P.added &&
                !P.removed
                  ? o
                  : Fes(e, t, s, n, true),
              A = L.changesRangeInBeforeFullModel.startLineNumber - g
            ch("[ian] changesOnTheRightForViewZone", L),
              ch("[ian] startLineNumberForViewZone", A),
              this._renderViewZone(r.newValue, L, A)
          } else {
            E(), this.buttonPanel.appendChild(this.editorContainer), this._clearViewZoneAndDecorations()
            const P = this.n.getOption(68)
            let L = false,
              A = this.n.getModel()
            if (A) {
              const B = t.getLanguageId()
              A.getLanguageId() !== B && (A.setLanguage(B), (L = true)),
                A.getValue() !== r.newValue && (A.setValue(r.newValue), (L = true)),
                r.changesSinceLastUpdate && (L = true)
            } else {
              const B = this.L.createById(t.getLanguageId())
              ;(A = this.P.createModel(r.newValue, B, this.q, false)),
                this.n.setModel(A),
                (L = true)
            }
            if ((ch("[ian] language", A.getLanguageId()), L)) {
              if (!A) {
                console.error("Failed to get cpp model")
                return
              }
              A.changeDecorations((Q) => {
                A &&
                  (A.getAllDecorations()
                    .map((se) => se.id)
                    .forEach((se) => Q.removeDecoration(se)),
                  o.addedRangesInNewFullModel.forEach((se) => {
                    Q.addDecoration(G.lift(se), {
                      description: "ghost-text-decoration",
                      className: "ghost-text-decoration-inline-add",
                    })
                  }))
              })
              let B = 0
              const z = A.getOptions().tabSize
              Array.from({ length: o.lineCount }, (Q, se) => u + se).forEach(
                (Q) => {
                  if (!A) return
                  const se = A.getLineContent(Q)
                  let he = 0
                  for (let ae = 0; ae < se.length; ae++)
                    se[ae] === "	" ? (he += z) : (he += 1)
                  B = Math.max(B, he)
                },
              ),
                (this.editorContainer.style.width = `${B * b}px`),
                (this.editorContainer.style.height = `${P * o.lineCount}px`)
            }
            const F = this.editor.getModel()?.uri,
              H = F ? ahr(F) : false
            if ((ch("[ian] isIPyNotebook", H), H)) {
              const B = this.editor.getTopForLineNumber(u)
              this.n.setScrollTop(B)
            } else
              ch("[ian] setting to line", Math.max(u - 1, 0)),
                this.n.setScrollTop(Math.max(u - 1, 0) * P)
          }
        }
      } catch (o) {
        console.error(o)
      }
    }
    showChangesAutoCompleteInline(e, t, s, n, r) {
      const o = Fcr(e, t, s, n, r),
        { success: a, inlineModifications: l, fullLineModifications: c } = o
      if (a === false) return { success: false }
      l !== undefined && this._updateLineModificationDecorations(l)
      const h = {},
        u = new Set()
      return (
        c !== undefined &&
          c.forEach((g) => {
            u.add(g.beforeLineNumber),
              h[g.beforeLineNumber] === undefined && (h[g.beforeLineNumber] = []),
              h[g.beforeLineNumber].push({
                content: g.content,
                decorations: g.decorations,
                indexInMultilineAddition: g.indexInMultilineAddition,
              })
          }),
        Array.from(u)
          .sort((g, p) => g - p)
          .forEach((g) => {
            const p = h[g]
            p.sort(
              (m, b) => m.indexInMultilineAddition - b.indexInMultilineAddition,
            ),
              this.bb(
                g,
                p.map((m) => ({
                  content: m.content,
                  decorations: m.decorations,
                })),
                0,
              )
          }),
        { success: true, inlineModifications: l, fullLineModifications: c }
      )
    }
    _updateFontStyles() {
      const t = this.editor.getOptions().get(52)
      ;(this.container.style.fontFamily = t.fontFamily),
        (this.container.style.fontSize = t.fontSize + "px")
    }
    _updateTextContent(suggestion, options) {
      this._updateFontStyles(), this.s?.abort(), (this.s = new AbortController())
      let isAborted = false
      for (
        this.s.signal.addEventListener("abort", () => {
          isAborted = true
        });
        this.buttonPanel.firstChild;

      )
        this.buttonPanel.removeChild(this.buttonPanel.firstChild)
      const editorModel = this.editor.getModel(),
        decorationId = suggestion?.decorationId
      if (editorModel === null || decorationId === undefined) return
      const eol = editorModel.getEOL()
      let decorationRange = editorModel.getDecorationRange(decorationId)
      if (decorationRange === null) return
      decorationRange.endLineNumber === editorModel.getLineCount() &&
        decorationRange.endColumn === editorModel.getLineMaxColumn(decorationRange.endLineNumber) &&
        (decorationRange = new G(decorationRange.startLineNumber, decorationRange.startColumn, decorationRange.endLineNumber + 1, 1))
      let originalText = editorModel.getValueInRange(decorationRange),
        replacementText = suggestion?.replaceText ?? ""
      const startOffset = editorModel.getOffsetAt(decorationRange.getStartPosition()),
        endOffset = editorModel.getOffsetAt(decorationRange.getEndPosition()),
        fullText = editorModel.getValue(),
        newFullText = fullText.substring(0, startOffset) + replacementText + fullText.substring(endOffset),
        {
          singleLineCharChanges,
          charChanges,
          wordChanges,
          isOnlyAddingToEachChar,
        } = rhr(originalText, replacementText, decorationRange.startLineNumber, eol),
        isOnlyAddingText = singleLineCharChanges.every((D) => D.removed !== true)
      if (isAborted) {
        this._clearAllViewZones()
        return
      }
      let hasComplexMultilineChanges = false,
        hasNonEmptyLine = false,
        hasLineBreak = false
      for (let i = 0; i < singleLineCharChanges.length; i++)
        if (
          (singleLineCharChanges[i].added === true && singleLineCharChanges[i].value === eol && (hasLineBreak = true),
          !singleLineCharChanges[i].added && !singleLineCharChanges[i].removed)
        )
          if (singleLineCharChanges[i].value === eol) (hasNonEmptyLine = false), (hasLineBreak = false)
          else {
            if (hasNonEmptyLine && hasLineBreak) {
              hasComplexMultilineChanges = true
              break
            }
            hasNonEmptyLine = true
          }
      const updateInfo = {
          newValue: newFullText,
          changesSinceLastUpdate: options?.changesSinceLastUpdate ?? false,
          source: suggestion?.source ?? CppIntent.Unknown,
          forceViewZones: options?.forceViewZones ?? false,
        },
        cursorPosition = this.editor.getPosition()
      if (
        cursorPosition &&
        isOnlyAddingText &&
        isOnlyAddingToEachChar &&
        !hasComplexMultilineChanges &&
        charChanges.length <= 20 &&
        wordChanges.length <= 20 &&
        options?.forceDiffBox !== true
      ) {
        const {
          success,
          inlineModifications,
          fullLineModifications,
        } = this.showChangesAutoCompleteInline(
          singleLineCharChanges,
          decorationRange.startLineNumber,
          cursorPosition,
          editorModel.getValue(),
          eol,
        )
        if (!success)
          this.showChangesOnTheRightAndMaybeShowReds(wordChanges, editorModel, eol, decorationRange, updateInfo),
            this.cppService.setSuggestionType(decorationId, k7.PreviewBox)
        else {
          if (inlineModifications) {
            let lineWidthChanges = {}
            for (const modification of inlineModifications)
              lineWidthChanges[modification.lineNumber] = Math.max(
                lineWidthChanges[modification.lineNumber] ?? 0,
                modification.newValue.length - modification.oldValue.length,
              )
            this.cursorPredictionService.updateHintLineWidgetMarginLeft(lineWidthChanges)
          }
          ;((fullLineModifications && fullLineModifications.length > 0) || (inlineModifications && inlineModifications.length > 0)) &&
            this.cppService.setSuggestionType(decorationId, k7.GhostText)
        }
      } else
        this.showChangesOnTheRightAndMaybeShowReds(wordChanges, editorModel, eol, decorationRange, updateInfo),
          this.cppService.setSuggestionType(decorationId, k7.PreviewBox)
    }
    update(suggestion, options) {
      options?.avoidEditorWideRemovals !== true && this.removeAllInEditorNotModel()
      const model = this.editor.getModel(),
        uri = suggestion?.uri,
        isEditorFocused = this.cppService.isTextFocusedOrSimilarlyFocused(this.editor)
      if (model === null || uri === undefined)
        return this.hideAllInEditor_doesntChangeModel()
      if (
        !(isEditorFocused && model.uri.toString() === uri.toString()) &&
        options?.ignoreFocusCheck !== true
      ) {
        options?.avoidEditorWideRemovals !== true &&
          this.hideAllInEditor_doesntChangeModel()
        return
      }
      if (
        (options?.avoidEditorWideRemovals !== true && this._clearModelDecorations(model),
        this.reactiveStorageService.applicationUserPersistentStorage.cppConfig?.isGhostText !== true ||
          suggestion === undefined ||
          suggestion.immediatelySeen === true)
      ) {
        options?.avoidEditorWideRemovals !== true &&
          this.hideAllInEditor_doesntChangeModel()
        return
      }
      ;(this.buttonPanel.style.opacity = "1"),
        this.cb(),
        this._updateTextContent(suggestion, options),
        this.editor.layoutContentWidget(this)
    }
    cb() {
      this._clearViewZoneAndDecorations(), this._clearGhostTextDecorations(), this._clearAllViewZones()
    }
    removeAllInEditorNotModel() {
      this._clearAllDecorations(), this._clearAllViewZones()
    }
    hideAllInEditor_doesntChangeModel() {
      for (; this.buttonPanel.firstChild; ) this.buttonPanel.removeChild(this.buttonPanel.firstChild)
      ;(this.db = zY.Hidden),
        this.editor.layoutContentWidget(this),
        (this.buttonPanel.style.opacity = "0")
    }
    get db() {
      return this.r
    }
    set db(e) {
      ;(this.r = e), this._updateTitle()
    }
    _updateTitle() {
      this.eb();
    }
    eb() {
      if (this.db.type === 1 && this.t) {
        this._title = getMessage(890, null, this.t)
        return
      }
      this.u ? (this._title = getMessage(891, null, this.u)) : (this._title = getMessage(892, null))
    }
    set _title(newTitle) {
      this.fb = newTitle;
    }
    set fb(e) {
      this.container.title = e
    }
    _createSpaceElement(parentElement, spaceCount, className) {
      return this.gb(parentElement, spaceCount, className);
    }
    gb(parentElement, spaceCount, className = "ghost-text-decoration") {
      const spanElement = document.createElement("span"),
        spaceWidth = this.editor.getOption(52).spaceWidth
      ;(spanElement.className = className),
        (spanElement.textContent = " ".repeat(spaceCount)),
        (spanElement.style.width = `${spaceWidth * spaceCount}px`),
        (spanElement.style.display = "inline-block"),
        parentElement.appendChild(spanElement)
    }
    _createTextElement(parentElement, text, className) {
      return this.hb(parentElement, text, className);
    }
    hb(parentElement, text, className) {
      const spanElement = document.createElement("span")
      ;(spanElement.className = className), (spanElement.textContent = text), (spanElement.style.whiteSpace = "nowrap")
      const r = this.editor.getOption(54)
      ;(spanElement.style.fontSize = `${r}px`),
        (spanElement.style.height = `${r * 1.5}px`),
        (spanElement.style.display = "inline-flex"),
        (spanElement.style.alignItems = "center"),
        parentElement.appendChild(spanElement)
    }
    _clearViewZoneAndDecorations() {
      return this.ib();
    }
    ib() {
      if (this.z !== undefined) {
        const viewState = this.editor.saveViewState()
        this.editor.changeViewZones((accessor) => {
          accessor.removeZone(this.z), (this.z = undefined)
        }),
        viewState && this.editor.restoreViewState(viewState)
      }
      this.F &&
        this.editor.changeDecorations((accessor) => {
          accessor.removeDecoration(this.F), (this.F = null)
        })
    }
    _renderViewZone(newContent, changeInfo, scrollPosition) {
      return this.jb(newContent, changeInfo, scrollPosition);
    }
    jb(newContent, changeInfo, scrollPosition) {
      const n = changeInfo.lineCount * this.editor.getOption(68)
      this._clearAllViewZones()
      const r = this.editor.getModel()
      if (!r) return
      const o = this.L.createById(r.getLanguageId())
      let a = this.w.getModel()
      a
        ? (a.getValue() !== newContent && a.setValue(newContent),
          a.getLanguageId() !== o.languageId && a.setLanguage(o.languageId))
        : ((a = this.P.createModel(
            newContent,
            o,
            U.parse(`cpp-ghost-text-viewzone-anysphere://${Oes()}`),
          )),
          this.w.setModel(a))
      const l = this.w.getOption(68),
        c = Math.max(scrollPosition - 1, 0)
      this.w.setScrollTop(c * l),
        a.changeDecorations((u) => {
          a &&
            (a
              .getAllDecorations()
              .map((d) => d.id)
              .forEach((d) => u.removeDecoration(d)),
            changeInfo.addedRangesInNewFullModel.forEach((d) => {
              u.addDecoration(G.lift(d), {
                description: "ghost-text-decoration",
                className: "ghost-text-decoration-inline-add",
              })
            }),
            (this.G = u.addDecoration(new G(c + 1, 1, c + 1 + changeInfo.lineCount, 1), {
              className: "view-zone-in-view-zone-decoration",
              description: "decoration for view zone in view zone",
              isWholeLine: true,
            })))
        }),
        this.w.layout({ width: this.w.getLayoutInfo().contentWidth, height: n }),
        (this.wrapper.style.height = `${n + 2}px`)
      const h = this.editor.saveViewState()
      this.editor.changeViewZones((u) => {
        this.z !== undefined && u.removeZone(this.z),
          this.kb(),
          (this.z = u.addZone({
            afterLineNumber: changeInfo.changesRangeInBeforeFullModel.endLineNumber,
            heightInPx: n,
            domNode: this.wrapper,
            marginDomNode: this.H,
          }))
      }),
        h && this.editor.restoreViewState(h),
        this.kb(),
        this.editor.changeDecorations((u) => {
          if (
            (this.F && (u.removeDecoration(this.F), (this.F = null)),
            !this.editor.getModel())
          )
            return
          const g = changeInfo.changesRangeInBeforeFullModel.startLineNumber,
            p = changeInfo.changesRangeInBeforeFullModel.endLineNumber
          this.F = u.addDecoration(new G(g, 1, p, 1), {
            className: "view-zone-original-range-decoration",
            description: "decoration for view zone original range",
            isWholeLine: true,
          })
        })
    }
    kb() {
      this.H || (this.H = this.lb()), (this.H.style.height = "100%")
    }
    lb() {
      const e = document.createElement("div")
      e.className = "cpp-ghost-text-view-zone-margin"
      const t = document.createElement("span")
      return (
        (t.className = "cpp-ghost-text-view-zone-text"),
        (t.textContent = "\u21E5"),
        (t.title = "Tab to accept suggestion"),
        e.appendChild(t),
        e
      )
    }
    mb() {
      return (
        this.reactiveStorageService.applicationUserPersistentStorage
          .shouldShowViewZoneWhenPreviewBoxIsClipped4 ?? true
      )
    }
    nb(e, t, s) {
      const n = this.editor.getDomNode()
      if (!n) return false
      const r = ss().document
      if (!r) return false
      const o = n.getBoundingClientRect(),
        a = this.editor.getVisibleRanges()
      if (a.length === 0) return false
      const l = this.editor.getOption(68),
        c = this.editor.getOption(52).typicalHalfwidthCharacterWidth,
        h = a[0].startLineNumber,
        u = o.left + (t.column - 1) * c + s,
        d = o.top + (t.lineNumber - h) * l,
        p =
          Math.max(
            ...e.selectiveNewText
              .split(
                `
  `,
              )
              .map((S) => S.length),
          ) * c,
        m = e.lineCount * l,
        b = u + p > r.documentElement.clientWidth,
        y = d + m > r.documentElement.clientHeight,
        w = d < 0,
        C = b || y || w
      return (
        ch("[ian] isClippedRight", b),
        ch("[ian] isClippedBottom", y),
        ch("[ian] isClippedTop", w),
        ch("[ian] isClippedOutsideViewport", C),
        C
      )
    }
    ob(e, t) {
      const s = Ues(this.editor),
        n = this.editor.getModel() ?? this.w.getModel(),
        { tabSize: r } = n ? n.getOptions() : { tabSize: 4 },
        o = ohr(e.selectiveNewText, r)
      return t.column + o > s
    }
  }
  GhostTextWidget = __decorate(
    [
      __param(1, reactiveStorageService),
      __param(2, Hi),
      __param(3, aiFeatureStatusService),
      __param(4, instantiationService),
      __param(5, ue),
      __param(6, qi),
      __param(7, cppService),
      __param(8, st),
      __param(9, cursorPredictionService),
      __param(10, importPredictionService),
    ],
    GhostTextWidget,
  )
  function _es(i, e) {
    const t = i
      .map((s) => {
        const n = s.value.split(e)
        return n
          .map((o, a) =>
            a < n.length - 1
              ? [
                  { value: o, added: s.added, removed: s.removed },
                  { value: e, added: s.added, removed: s.removed },
                ]
              : { value: o, added: s.added, removed: s.removed },
          )
          .flat()
      })
      .flat()
      .filter((s) => s.value !== "")
    for (let s = 0; s < t.length - 1; s++)
      t[s].removed &&
        t[s + 1].added &&
        t[s + 1].value.startsWith(t[s].value) &&
        ((t[s].added = true), (t[s].removed = true))
    return t
  }
  function rhr(i, e, t, s) {
    let { wordDiffs: n, charDiffs: r } = ZXe(i, e, s)
    const o = _es(n, s)
    let a = true
    for (let h = 0; h < o.length; h++)
      if (o[h].added !== true && o[h].removed === true && o[h].value !== s) {
        a = false
        break
      }
    const l = _es(r, s)
    let c = true
    for (let h = 0; h < l.length; h++)
      if (l[h].added !== true && l[h].removed === true && l[h].value !== s) {
        c = false
        break
      }
    return {
      singleLineCharChanges: l,
      singleLineWordChanges: o,
      charChanges: r,
      wordChanges: n,
      isOnlyAddingToEachChar: c,
      isOnlyAddingToEachWord: a,
    }
  }
  function Ues(i) {
    const e = i.getLayoutInfo(),
      t = i.getOption(52).typicalHalfwidthCharacterWidth
    return Math.floor(e.contentWidth / t)
  }
  function ohr(i, e) {
    const t = i.split(`
  `)
    let s = 0
    for (const n of t) {
      let r = 0
      for (let o = 0; o < n.length; o++)
        n[o] === "	" ? (r += e - (r % e)) : (r += 1)
      r > s && (s = r)
    }
    return s
  }
  var ahr = (i) =>
      i.scheme === "vscode-notebook-cell" ||
      i.scheme === "ipynb" ||
      i.path.toLowerCase().endsWith(".ipynb"),
    GBt,
    lhr = class extends Ai {
      constructor() {
        super({
          id: Jon,
          label: "Update Ghost Text",
          alias: "Update Ghost Text",
          precondition: undefined,
        })
      }
      run(i, e, t) {
        const s = GhostTextController.get(e)
        s && s.update()
      }
    }
  Zt(lhr)
  var GhostTextController = class extends V {
    static {
      GBt = this
    }
    static {
      this.ID = "editor.contrib.ghosttextController"
    }
    static get(e) {
      return e.getContribution(GBt.ID)
    }
    constructor(e, t, s, n) {
      super(),
        (this.n = s), (this.instantiationService = this.n),
        (this.q = n), (this.reactiveStorageService = this.q),
        (this.f = false),
        (this.g = false),
        (this.j = false),
        (this.m = false),
        (this.a = e), (this.editor = this.a),
        this.D(
          this.editor.onDidChangeModel(() => {
            this.update()
          }),
        ),
        this.D(this.editor.onDidChangeModelLanguage(() => this.update())),
        this.D(this.editor.onDidChangeCursorPosition(() => this.update())),
        this.D(
          this.editor.onMouseDown(() => {
            ;(this.g = true), this.update()
          }),
        ),
        this.D(
          this.editor.onMouseUp(() => {
            ;(this.g = false), this.update()
          }),
        ),
        (this.b = new so(() => this.D(s.createInstance(GhostTextWidget, this.editor)))), (this.mainGhostTextWidget = this.b),
        (this.c = []), (this.additionalGhostTexts = this.c),
        this.D(
          t.onDidChangeContext((r) => {
            r.affectsSome(new Set([me.hasActivelyGeneratingDiff.key])) &&
              me.hasActivelyGeneratingDiff.getValue(t)
          }),
        ),
        (this.reactiveStorageRoot = this.D(this.reactiveStorageService.createScoped(this))),
        this.reactiveStorageRoot.onChangeEffect({
          deps: [
            () => this.reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip,
          ],
          onChange: () => {
            this.update()
          },
        }),
        this.reactiveStorageRoot.onChangeEffect({
          deps: [
            () => this.reactiveStorageService.nonPersistentStorage.cppState,
            () => this.reactiveStorageService.nonPersistentStorage.cppState?.suggestion,
            () => this.reactiveStorageService.nonPersistentStorage.cppState?.additionalSuggestions,
          ],
          onChange: () => {
            this.refreshAdditionalWidgets(), this.update()
          },
          runNowToo: true,
        }),
        this.update()
    }
    get cppPeekView() {
      return this.h
    }
    set cppPeekView(e) {
      ;(this.h || !e) && this.disposeCppPeekView(), (this.h = e)
    }
    disposeCppPeekView() {
      this.h && (this.h.dispose(), (this.h = undefined))
    }
    shouldShowHoverAt(e) {
      const model = this.editor.getModel()
      return model
        ? this.mainGhostTextWidget.value.ghostTextDecorations.some((decorationId) => {
            const decorationRange = model.getDecorationRange(decorationId)
            return decorationRange && decorationRange.intersectRanges(e)
          })
        : false
    }
    r() {
      if (!this.editor.hasModel()) return
      const model = this.editor.getModel(),
        selection = this.editor.getSelection()
      if (selection.isEmpty()) {
        const { lineNumber, column } = selection.getPosition(),
          lineContent = model.getLineContent(lineNumber)
        if (lineContent.length === 0) return
        if (column === 1) {
          if (/\s/.test(lineContent[0])) return
        } else if (column === model.getLineMaxColumn(lineNumber)) {
          if (/\s/.test(lineContent[lineContent.length - 1])) return
        } else if (/\s/.test(lineContent[column - 2]) && /\s/.test(lineContent[column - 1])) return
      }
      return selection
    }
    s(e) {
      return e.startLineNumber !== e.endLineNumber
    }
    refreshAdditionalWidgets() {
      for (const widget of this.additionalGhostTexts) widget.value.dispose()
      this.c = []; this.additionalGhostTexts = this.c;
      for (const suggestion of this.reactiveStorageService.nonPersistentStorage.cppState
        ?.additionalSuggestions || []) {
        const widget = new so(() => {
          const ghostTextWidget = this.D(this.instantiationService.createInstance(GhostTextWidget, this.editor))
          return this.D(ghostTextWidget.onClick((n) => {})), ghostTextWidget
        })
        this.additionalGhostTexts.push(widget),
          widget.value.update(suggestion, {
            avoidEditorWideRemovals: suggestion !== undefined,
            forceDiffBox: true,
          })
      }
    }
    update() {
      const suggestion = this.reactiveStorageService.nonPersistentStorage.cppState?.suggestion
      if (this.j) return // this.j => this.updating
      const range = this.editor.getPosition()
      if (range !== null && suggestion !== undefined && suggestion.source !== CppIntent.CursorPrediction) {
        const decorationRange = this.editor.getModel()?.getDecorationRange(suggestion.decorationId)
        if (decorationRange == null) return
        if (
          range.lineNumber < suggestion.startingSuggestionRange.startLineNumber ||
          range.lineNumber > decorationRange.endLineNumber
        ) {
          console.log(
            "[Cpp] Bad Case: Cursor is not in the range of the suggestion",
          )
          return
        }
      }
      this.j = true // this.j => this.updating
      try {
        this.mainGhostTextWidget.value.update(suggestion, { changesSinceLastUpdate: this.m })
      } catch (error) {
        console.error("[Cpp] Error updating ghost text", error)
      } finally {
        // this.j => this.updating
        ;(this.j = false), suggestion !== undefined && (this.m = false) // this.m => this.hasChanges
      }
      if (this.additionalGhostTexts.length > 0) {
        let visibleRange
        if (suggestion !== undefined) {
          const mainRange =
            this.editor.getModel()?.getDecorationRange(suggestion.decorationId) ?? undefined
          mainRange &&
            (visibleRange = new G(
              Math.max(mainRange.startLineNumber - 2, 1),
              mainRange.startColumn,
              Math.min(
                mainRange.endLineNumber + 2,
                this.editor.getModel()?.getLineCount() ?? 1,
              ),
              mainRange.endColumn,
            ))
        }
        for (let i = this.additionalGhostTexts.length - 1; i >= 0; i--) {
          const additionalSuggestion = this.reactiveStorageService.nonPersistentStorage.cppState?.additionalSuggestions[i]
          ;(() => {
            if (visibleRange !== undefined && additionalSuggestion !== undefined) {
              const suggestionRange = this.editor.getModel()?.getDecorationRange(additionalSuggestion.decorationId)
              return !suggestionRange || !visibleRange || !visibleRange.intersectRanges(suggestionRange)
            }
            return true
          })()
            ? this.additionalGhostTexts[i].value.updatePosition(additionalSuggestion)
            : (this.additionalGhostTexts[i].value.dispose(), this.additionalGhostTexts.splice(i, 1))
        }
      }
    }
    updatePositions() {
      for (let i = 0; i < this.additionalGhostTexts.length; i++)
        this.additionalGhostTexts[i].value.updatePosition(
          this.reactiveStorageService.nonPersistentStorage.cppState?.additionalSuggestions[i],
        )
    }
    setChangesSinceLastUpdate(hasChanges) {
      this.m = hasChanges // this.m => this.hasChanges
    }
  }
  ;(GhostTextController = GBt = __decorate([__param(1, contextKeyService), __param(2, instantiationService), __param(3, reactiveStorageService)], GhostTextController)),
    Tn(GhostTextController.ID, GhostTextController, 3);

  return {
    // WBt,
    // ZXe,
    CppDiffPeekViewWidget,
    jBt,
    Ycr,
    Xcr,
    Qcr,
    GhostTextController,
  };
}
