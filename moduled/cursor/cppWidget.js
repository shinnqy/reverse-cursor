// @ts-check

import { createZXe } from './diff.utils.js';

export function createCppWidget(params) {
  const { V, CYe, FFt, KS, oR, N, zT, Ye, f_, g_, p_, G, q, W, Yy, U, hu, __decorate, __param, Pt, ve, Z, ei, si, qi, Hi, Ds, Ce, Me, DKi, eI, ge, R, rt, Jl, pl, Ic, a0, oT, f3, b4, np, K3, J3, B4, bf, _v, OFt, ll, k7, f, ss, aiFeatureStatusService, ue, cppService, st, cursorPredictionService, importPredictionService, Ai, Jon, Zt, so, me, Tn } = params;

  var Acr = new CYe()
  function WBt(i, e, t) {
    return i.length > 2e3 || e.length > 2e3
      ? (console.error(
          "BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffChars received strings that were too long. Returning the trivial diff.",
          i.length,
          e.length,
        ),
        [
          { value: i, removed: !0 },
          { value: e, added: !0 },
        ])
      : Acr.diff(i, e, t)
  }
  function Mcr(i) {
    let e = "",
      t = "",
      s = "",
      n = 0
    const r = [],
      o = [],
      a = (l) => {
        let c = s.split(`
  `),
          h =
            e.split(`
  `).length - 1
        if (
          l !== "" &&
          !l.startsWith(`
  `) &&
          c.length > 0
        ) {
          const u = c.pop()
          let d
          c.length > 0
            ? (d = 1)
            : (d =
                (e
                  .split(
                    `
  `,
                  )
                  .at(-1)?.length ?? 0) + 1),
            u !== void 0 &&
              u !== "" &&
              r.push({ lineNumber: h, column: d, value: u }),
            (h -= 1)
        } else {
          const u = c.shift()
          if (u !== void 0 && u !== "") {
            const g =
              e
                .split(
                  `
  `,
                )
                .at(-1)?.length ?? 0
            r.push({ lineNumber: h, column: g + 1, value: u })
          }
        }
        if (c.length > 0)
          for (const u of c)
            o.push({
              beforeLineNumber: h,
              indexInMultilineAddition: n++,
              value: u,
            })
      }
    for (const l of i)
      l.added
        ? (s += l.value)
        : (s !== "" && (a(l.value), (t += s), (s = "")),
          (e += l.value),
          (t += l.value))
    return s !== "" && a(""), { inlineModifications: r, fullLineModifications: o }
  }
  function $cr(i, e) {
    return !!(
      i.fullLineModifications.some((s) => s.beforeLineNumber < e.lineNumber) ||
      i.inlineModifications
        .filter((s) => s.lineNumber === e.lineNumber)
        .some((s) => s.startColumn < e.column)
    )
  }
  function Fcr(i, e, t, s, n) {
    const { inlineModifications: r, fullLineModifications: o } = Mcr(i),
      a = []
    for (const c of o)
      a.push({
        beforeLineNumber: c.beforeLineNumber + e,
        indexInMultilineAddition: c.indexInMultilineAddition,
        content: c.value,
        decorations: [new KS(1, c.value.length + 1, "ghost-text", 0)],
      })
    const l = r.map((c) => ({
      lineNumber: c.lineNumber + e,
      startColumn: c.column,
      newValue: c.value,
      oldValue: "",
    }))
    return $cr({ inlineModifications: l, fullLineModifications: a }, t)
      ? { success: !1, inlineModifications: l, fullLineModifications: a }
      : { success: !0, inlineModifications: l, fullLineModifications: a }
  }
  const ZXe = createZXe({ FFt, WBt });


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
        { showFrame: !0, showArrow: !1, isResizeable: !0, isAccessible: !0 },
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
      this.y || super.show(G.fromPositions(this.r), Wcr), (this.y = !0)
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
            this.O.push(o, { label: !1, icon: !0 }),
            a && this.O.push([a], { label: !1, icon: !0 })
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
            stickyScroll: { enabled: !1 },
            readOnly: !0,
            renderSideBySide: !1,
            dimension: { width: this.u(a), height: e.clientHeight },
          },
          {
            originalEditor: { isSimpleWidget: !0, contributions: [] },
            modifiedEditor: { isSimpleWidget: !0, contributions: [] },
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
      __param(6, Z),
      __param(7, ei),
      __param(8, si),
      __param(9, qi),
      __param(10, Hi),
      __param(11, Ds),
      __param(12, Ce),
    ],
    CppDiffPeekViewWidget,
  )
  function qcr(i, e, t, s, n) {
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
      : (n >= t.length && (o = void 0),
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
  var Zcr = !1,
    ehr = !1,
    ch = Zcr ? console.log : () => {},
    $es = (i, e) => {
      const t = i.split(e),
        n = t.length.toString().length
      return t
        .map((r, o) => `${(o + 1).toString().padStart(n, " ")}: ${r}`)
        .join(e)
    },
    kF = (i, e, t, s = !1) => {
      ch("[ian] text", JSON.stringify(i)), ch("[ian] startLineNumber", e)
      const n = i.split(t)
      if (s) {
        const r = n[0]
        r !== void 0 &&
          r === "" &&
          i !==
            `
  ` &&
          n.shift()
        const o = n[n.length - 1]
        if (
          (o !== void 0 &&
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
  function thr(i, e, t, s, n = !1) {
    let r = "",
      o = "",
      a,
      l,
      c
    const h = [],
      u = (g) => {
        if (c !== void 0) {
          const p = kF(g, s.startLineNumber, t, n)
          h.push({
            startLineNumber: c.lineNumber,
            startColumn: c.column,
            endLineNumber: p.lineNumber,
            endColumn: p.column,
          })
        }
        c = void 0
      }
    for (const g of e)
      g.removed
        ? ((c = kF(r, s.startLineNumber, t, n)),
          a === void 0 && (a = c),
          (l = kF(r + g.value, s.startLineNumber, t, n)))
        : u(r),
        g.added || (r += g.value),
        g.removed || (o += g.value)
    if ((u(r), a === void 0 || l === void 0))
      throw new Error(
        "firstRemovedPositionInFullBeforeModel or lastRemovedPositionInFullBeforeModel is undefined",
      )
    let d
    return (
      (d = zBt(i, a, l, !0, !0)),
      {
        changesRangeInBeforeFullModel: d,
        selectiveNewText: "",
        addedRangesInNewFullModel: [],
        lineCount: 0,
        deletion: !0,
        deletedRanges: h,
      }
    )
  }
  function Fes(i, e, t, s, n = !1) {
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
      if (l !== void 0) {
        const E = kF(k, s.startLineNumber, t)
        r.push({
          startLineNumber: l.lineNumber,
          startColumn: l.column,
          endLineNumber: E.lineNumber,
          endColumn: E.column,
        })
      }
      l = void 0
    }
    for (const k of i) {
      if (k.added) {
        l = kF(a, s.startLineNumber, t, n)
        const E = kF(o, s.startLineNumber, t, n)
        if (c === void 0) {
          let D = o
          p !== void 0 && o.endsWith(p) && (D = o.slice(0, -p.length)),
            (c = kF(D, s.startLineNumber, t, n)),
            (g = k.value)
        }
        ;(h = E),
          u === void 0 && (u = kF(a, 1, t, n)),
          (d = kF(a + k.value, 1, t, n))
      } else m(a), k.removed && (p = k.value)
      k.added || (o += k.value), k.removed || (a += k.value)
    }
    m(a)
    const b =
      g !== void 0 &&
      g.startsWith(`
  `)
    ch("[ian] firstAddedPositionInFullBeforeModel", c),
      ch("[ian] lastAddedPositionInFullBeforeModel", h),
      ch("[ian] firstAddedPositionInSubsetAfterModel", u),
      ch("[ian] lastAddedPositionInSubsetAfterModel", d),
      ch("[ian] trimStart", b)
    let y = s
    h !== void 0 && c !== void 0 && (y = zBt(e, c, h, b, !1))
    const w = jBt(a, U.parse(""))
    let C
    d !== void 0 && u !== void 0 && (C = zBt(w, u, d, b, !0)),
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
      deletion: !1,
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
  var iQe = class extends V {
    createActionButtons(e) {
      const t = W(e, q("div"))
      ;(t.style.display = "flex"),
        (t.style.alignItems = "center"),
        (t.style.gap = "4px")
      const s = W(t, q("button"))
      s.classList.add("cpp-suggestion-action-button"), (s.textContent = "View")
      const n = W(t, q("button"))
      n.classList.add("cpp-suggestion-action-button"), (n.textContent = "Accept")
      const r = W(n, q("span"))
      ;(r.textContent = "Tab"),
        r.classList.add("cpp-suggestion-tab-button"),
        (r.style.marginLeft = "4px"),
        this.D(
          ge(s, "mousedown", (o) => {
            const a = this.J.nonPersistentStorage.cppState?.suggestion
            if (a) {
              o.stopPropagation()
              const { originalText: l, replaceText: c, decorationId: h } = a,
                u = this.I.getModel()
              if (u) {
                const d = u.getDecorationRange(h)
                if (d) {
                  const g = u.getOffsetAt(d.getStartPosition()),
                    p = u.getOffsetAt(d.getEndPosition()),
                    m = u.getValue(),
                    b = m.substring(0, g) + c + m.substring(p),
                    y = { ...a },
                    w = u.changeDecorations((S) =>
                      S.addDecoration(d, { description: "duplicatedSuggestion" }),
                    )
                  w && (y.decorationId = w),
                    this.J.setNonPersistentStorage(
                      "cppState",
                      "peekViewSuggestion",
                      y,
                    )
                  const C = qcr(
                    this.I,
                    { lineNumber: d.endLineNumber - 1, column: d.endColumn },
                    { original: m, new: b },
                    y,
                    this.N,
                  )
                  this.R.executeCommand("editor.action.setCppDiffPeekView", C)
                }
              }
            }
          }),
        ),
        this.D(
          ge(n, "mousedown", (o) => {
            o.stopPropagation(),
              console.log("acceptFullSuggestion"),
              this.Q.acceptFullSuggestion()
          }),
        )
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u) {
      super(),
        (this.I = e),
        (this.J = t),
        (this.L = s),
        (this.M = n),
        (this.N = r),
        (this.O = o),
        (this.P = a),
        (this.Q = l),
        (this.R = c),
        (this.S = h),
        (this.U = u),
        (this.allowEditorOverflow = !0),
        (this.h = []),
        (this.ghostTextDecorations = []),
        (this.j = this.D(new R())),
        (this.onClick = this.j.event),
        (this.q = U.parse(`cpp-ghost-text-preview-widget-anysphere://${Oes()}`)),
        (this.r = zY.Hidden),
        (this.F = null),
        (this.G = null),
        (this.H = null),
        (this.lastSuggestion = void 0),
        (this.c = q("div.cursorGhostTextWidget")),
        this._updateFontStyles(),
        (this.uuid = rt())
      const d = this.I.getOption(68)
      this.c.style.marginTop = -d + "px"
      const g = 2e11,
        p = W(this.c, q("div.cppOuter"))
      ;(p.style.pointerEvents = "none"), (p.style.position = "relative")
      const m = W(p, q("div.cppInner"))
      ;(m.style.position = "absolute"),
        (m.style.width = "100000px"),
        (this.g = W(m, q("div.cppButtonContainer"))),
        (this.g.style.pointerEvents = "auto"),
        (this.g.style.zIndex = `${g + 1}`),
        (this.f = W(this.g, q("div"))),
        (this.f.style.border =
          "1px solid var(--vscode-editorSuggestWidget-border)"),
        (this.f.style.backgroundColor =
          "var(--vscode-editorSuggestWidget-background)"),
        (this.f.style.borderRadius = "2px"),
        (this.f.style.pointerEvents = "auto"),
        (this.f.style.zIndex = `${g + 2}`),
        (this.m = W(this.f, q("div"))),
        (this.m.style.position = "relative")
      let b
      this.D({
        dispose: () => {
          b && b.remove()
        },
      }),
        this.D(
          ge(this.f, "mousemove", () => {
            b && b.remove(),
              (b = W(this.f, q("div"))),
              (b.style.display = "flex"),
              (b.style.justifyContent = "space-between"),
              (b.style.alignItems = "center"),
              (b.style.borderTop =
                "1px solid var(--vscode-editorSuggestWidget-border)"),
              (b.style.padding = "0px 4px"),
              (b.style.fontSize = "10px"),
              (b.style.gap = "8px"),
              this.createActionButtons(b),
              this.f.appendChild(b)
          }),
        ),
        this.D(
          ge(this.f, "mouseleave", () => {
            b && b.remove()
          }),
        ),
        this.D(Jl.ignoreTarget(this.c)),
        this.I.addContentWidget(this),
        this.D(
          this.I.onDidChangeModel((w) => {
            const C = this.I.getModel()
            C !== null && this.Y(C)
          }),
        ),
        this.D(
          this.I.onDidChangeModelContent((w) => {
            const C = this.I.getModel()
            ;(this.db.type !== 1 ||
              !C ||
              this.db.editorPosition.lineNumber >= C.getLineCount()) &&
              this.hideAllInEditor_doesntChangeModel()
          }),
        ),
        this.D(
          ge(this.c, "mouseenter", (w) => {
            ;(w.buttons & 1) === 1 && this.hideAllInEditor_doesntChangeModel()
          }),
        ),
        this.D(
          this.I.onDidBlurEditorText(() =>
            this.hideAllInEditor_doesntChangeModel(),
          ),
        )
      const y = {
        readOnly: !0,
        wordWrap: "off",
        wordWrapOverride1: "off",
        wordWrapOverride2: "off",
        glyphMargin: !1,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
        lineNumbers: "off",
        folding: !1,
        scrollBeyondLastLine: !1,
        renderLineHighlight: "none",
        renderWhitespace: "none",
        minimap: { enabled: !1 },
        quickSuggestions: !1,
        automaticLayout: !1,
        automaticLayoutIgnoreHeight: !0,
        guides: { indentation: !1 },
        scrollbar: {
          horizontal: void 0,
          vertical: void 0,
          horizontalScrollbarSize: 0,
          verticalScrollbarSize: 0,
          arrowSize: 0,
          verticalSliderSize: 0,
          horizontalSliderSize: 0,
          ignoreVerticalScrolling: !0,
          useShadows: !1,
        },
        hover: { enabled: !1 },
      }
      ;(this.n = this.N.createInstance(
        Ic,
        this.m,
        { ...this.I.getRawOptions(), ...y },
        {
          isSimpleWidget: !0,
          contributions: pl.getSomeEditorContributions([a0.ID]),
          cursorCodeBlockType: "cppPreviewBox",
        },
      )),
        this.D(
          this.I.onDidChangeConfiguration(() => {
            this.n.updateOptions({ ...this.I.getRawOptions(), ...y })
          }),
        ),
        this.D({
          dispose: () => {
            this.m.remove(),
              this.n.getModel()?.dispose(),
              this.n.dispose(),
              this.Z(),
              this.W(),
              this.w?.getModel()?.dispose(),
              this.w?.dispose(),
              this.ib()
          },
        }),
        (this.C = document.createElement("div")),
        (this.C.className = "cpp-ghost-text-view-zone-wrapper"),
        (this.w = this.N.createInstance(
          Ic,
          this.C,
          { ...this.I.getRawOptions(), ...y },
          {
            isSimpleWidget: !0,
            contributions: pl.getSomeEditorContributions([a0.ID]),
            cursorCodeBlockType: "cppPreviewBox",
          },
        )),
        this.D({
          dispose: () => {
            this.w.getModel()?.dispose(), this.w.dispose(), this.ib()
          },
        })
    }
    W() {
      const e = this.I.getModel()
      e !== null &&
        (e.deltaDecorations(this.ghostTextDecorations, []),
        (this.ghostTextDecorations = []))
    }
    X() {
      const e = this.I.getModel()
      if (e === null) return
      this.ghostTextDecorations.length > 0 &&
        (this.ghostTextDecorations = e.deltaDecorations(
          this.ghostTextDecorations,
          [],
        ))
      const t = this.Q.getRedDecorationIds(e.id)
      t &&
        t.length > 0 &&
        (e.deltaDecorations(t, []),
        this.Q.setRedDecorationIds(e.id, (s) => s.filter((n) => !t.includes(n))))
    }
    Y(e) {
      const t = e
        .getAllDecorations()
        .filter((n) => n.options.className === "cpp-inline-suggestion")
      t.length > 0 &&
        e.deltaDecorations(
          t.map((n) => n.id),
          [],
        )
      const s = this.Q.getRedDecorationIds(e.id)
      s &&
        s.length > 0 &&
        (e.deltaDecorations(s, []),
        this.Q.setRedDecorationIds(e.id, (n) => n.filter((r) => !s.includes(r))))
    }
    Z() {
      this.h.length > 0 &&
        this.I.changeViewZones((e) => {
          for (const t of this.h) e.removeZone(t)
          this.h = []
        }),
        this.ib()
    }
    ab(e, t, s, n, r, o = !1, a = "view-line") {
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
            !1,
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
      this.ib()
      const n = this.I.getModel()
      if (!n) return
      const { tabSize: r } = n.getOptions()
      this.I.changeViewZones((o) => {
        const a = Math.max(t.length, s)
        if (a > 0) {
          const l = document.createElement("div")
          this.ab(l, r, t, this.I.getOptions(), this.L.languageIdCodec),
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
        this.I.removeContentWidget(this),
        this.ib(),
        this.w?.dispose()
    }
    getId() {
      return "GhostTextWidget" + this.uuid
    }
    getDomNode() {
      return this.c
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
              showIfCollapsed: !0,
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
              showIfCollapsed: !0,
              className: "cpp-inline-suggestion",
            },
          })
        }
      const s = this.I.getModel()
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
        const s = this.I.getModel()?.getDecorationRange(e.decorationId)
        if (s) {
          const n = { lineNumber: s.startLineNumber, column: t.column }
          this.r = new zY.Showing(n, { position: n, preference: [2] })
        }
      }
      this.I.layoutContentWidget(this)
    }
    showChangesOnTheRightAndMaybeShowReds(e, t, s, n, r) {
      const { greenRanges: o } = OFt(
        e.map((a) =>
          a.removed
            ? { value: a.value, added: !0 }
            : a.added
              ? { value: a.value, removed: !0 }
              : a,
        ),
        n,
        "post-change",
      )
      if (o.length > 0) {
        const a = this.Q.getRedDecorationIds(t.id) ?? [],
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
        this.Q.setRedDecorationIds(t.id, (c) => {
          const h = c.filter((d) => !a.includes(d)),
            u = new Set([...h, ...l])
          return Array.from(u)
        })
      }
      this.showChangesOnTheRight(e, t, s, n, r)
    }
    showChangesOnTheRight(e, t, s, n, r) {
      try {
        for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild)
        const o = Fes(e, t, s, n)
        if ((ch("[ian] changesOnTheRight", o), !this.I.getPosition())) return
        const l = Ues(this.I),
          c = (D, P) => {
            let L = -1
            for (let A = D; A <= P; A += 1) {
              const F = t.getLineMaxColumn(A),
                H = this.I.getStatusbarColumn(new Me(A, F))
              H > L && (L = H)
            }
            return L
          },
          h = o.changesRangeInBeforeFullModel
        this.S.hideWidgetsIfConflictsWithCppSuggestion(this.I, {
          startLineNumber: h.startLineNumber,
          endLineNumberExclusive: h.endLineNumber + 1,
        }),
          this.J.applicationUserPersistentStorage.cppAutoImportEnabled &&
            this.U.hideWidgetsIfConflictsWithCppSuggestion(this.I, {
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
          b = this.I.getOption(52).spaceWidth
        ch("[ian] line to render", m)
        const y = c(h.startLineNumber, h.endLineNumber)
        ch("[ian] maxColumn", y), ch("[ian] editorWidthInColumns", l)
        const w = t.getLineMaxColumn(m),
          S = 24 + Math.max(0, (y - w) * b)
        this.g.style.marginLeft = `${S}px`
        const x = this.I.getOption(137) === "on",
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
          if (((this.f.style.padding = "0px"), o.deletedRanges.length > 1)) return
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
              z = W(this.f, q("div.cppCodeLine")),
              K = this.I.getOption(54)
            ;(z.style.fontSize = `${K}px`), (z.style.height = `${K * 1.5}px`)
            const Q = B.length - B.trimStart().length,
              se = B.length - B.trimEnd().length,
              he = B.trim()
            this.gb(z, Q, "ghost-text-decoration-remove"),
              he &&
                (this.hb(z, he, "ghost-text-decoration-inline-remove"),
                this.gb(z, se, "ghost-text-decoration-inline-remove"))
          }
        } else {
          const D = this.nb(o, k, S)
          if (
            (ch("[ian] isClipped", D),
            r.forceViewZones || ehr || (this.mb() && D))
          ) {
            const P = e[0] ?? { value: "", added: !1, removed: !1 },
              L =
                P.value ===
                  `
  ` &&
                !P.added &&
                !P.removed
                  ? o
                  : Fes(e, t, s, n, !0),
              A = L.changesRangeInBeforeFullModel.startLineNumber - g
            ch("[ian] changesOnTheRightForViewZone", L),
              ch("[ian] startLineNumberForViewZone", A),
              this.jb(r.newValue, L, A)
          } else {
            E(), this.f.appendChild(this.m), this.ib()
            const P = this.n.getOption(68)
            let L = !1,
              A = this.n.getModel()
            if (A) {
              const B = t.getLanguageId()
              A.getLanguageId() !== B && (A.setLanguage(B), (L = !0)),
                A.getValue() !== r.newValue && (A.setValue(r.newValue), (L = !0)),
                r.changesSinceLastUpdate && (L = !0)
            } else {
              const B = this.L.createById(t.getLanguageId())
              ;(A = this.P.createModel(r.newValue, B, this.q, !1)),
                this.n.setModel(A),
                (L = !0)
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
                (this.m.style.width = `${B * b}px`),
                (this.m.style.height = `${P * o.lineCount}px`)
            }
            const F = this.I.getModel()?.uri,
              H = F ? ahr(F) : !1
            if ((ch("[ian] isIPyNotebook", H), H)) {
              const B = this.I.getTopForLineNumber(u)
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
      if (a === !1) return { success: !1 }
      l !== void 0 && this._updateLineModificationDecorations(l)
      const h = {},
        u = new Set()
      return (
        c !== void 0 &&
          c.forEach((g) => {
            u.add(g.beforeLineNumber),
              h[g.beforeLineNumber] === void 0 && (h[g.beforeLineNumber] = []),
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
        { success: !0, inlineModifications: l, fullLineModifications: c }
      )
    }
    _updateFontStyles() {
      const t = this.I.getOptions().get(52)
      ;(this.c.style.fontFamily = t.fontFamily),
        (this.c.style.fontSize = t.fontSize + "px")
    }
    _updateTextContent(e, t) {
      this._updateFontStyles(), this.s?.abort(), (this.s = new AbortController())
      let s = !1
      for (
        this.s.signal.addEventListener("abort", () => {
          s = !0
        });
        this.f.firstChild;

      )
        this.f.removeChild(this.f.firstChild)
      const n = this.I.getModel(),
        r = e?.decorationId
      if (n === null || r === void 0) return
      const o = n.getEOL()
      let a = n.getDecorationRange(r)
      if (a === null) return
      a.endLineNumber === n.getLineCount() &&
        a.endColumn === n.getLineMaxColumn(a.endLineNumber) &&
        (a = new G(a.startLineNumber, a.startColumn, a.endLineNumber + 1, 1))
      let l = n.getValueInRange(a),
        c = e?.replaceText ?? ""
      const h = n.getOffsetAt(a.getStartPosition()),
        u = n.getOffsetAt(a.getEndPosition()),
        d = n.getValue(),
        g = d.substring(0, h) + c + d.substring(u),
        {
          singleLineCharChanges: p,
          charChanges: m,
          wordChanges: b,
          isOnlyAddingToEachChar: y,
        } = rhr(l, c, a.startLineNumber, o),
        w = p.every((D) => D.removed !== !0)
      if (s) {
        this.Z()
        return
      }
      let C = !1,
        S = !1,
        x = !1
      for (let D = 0; D < p.length; D++)
        if (
          (p[D].added === !0 && p[D].value === o && (x = !0),
          !p[D].added && !p[D].removed)
        )
          if (p[D].value === o) (S = !1), (x = !1)
          else {
            if (S && x) {
              C = !0
              break
            }
            S = !0
          }
      const k = {
          newValue: g,
          changesSinceLastUpdate: t?.changesSinceLastUpdate ?? !1,
          source: e?.source ?? ll.Unknown,
          forceViewZones: t?.forceViewZones ?? !1,
        },
        E = this.I.getPosition()
      if (
        E &&
        w &&
        y &&
        !C &&
        m.length <= 20 &&
        b.length <= 20 &&
        t?.forceDiffBox !== !0
      ) {
        const {
          success: D,
          inlineModifications: P,
          fullLineModifications: L,
        } = this.showChangesAutoCompleteInline(
          p,
          a.startLineNumber,
          E,
          n.getValue(),
          o,
        )
        if (!D)
          this.showChangesOnTheRightAndMaybeShowReds(b, n, o, a, k),
            this.Q.setSuggestionType(r, k7.PreviewBox)
        else {
          if (P) {
            let A = {}
            for (const F of P)
              A[F.lineNumber] = Math.max(
                A[F.lineNumber] ?? 0,
                F.newValue.length - F.oldValue.length,
              )
            this.S.updateHintLineWidgetMarginLeft(A)
          }
          ;((L && L.length > 0) || (P && P.length > 0)) &&
            this.Q.setSuggestionType(r, k7.GhostText)
        }
      } else
        this.showChangesOnTheRightAndMaybeShowReds(b, n, o, a, k),
          this.Q.setSuggestionType(r, k7.PreviewBox)
    }
    update(e, t) {
      t?.avoidEditorWideRemovals !== !0 && this.removeAllInEditorNotModel()
      const s = this.I.getModel(),
        n = e?.uri,
        r = this.Q.isTextFocusedOrSimilarlyFocused(this.I)
      if (s === null || n === void 0)
        return this.hideAllInEditor_doesntChangeModel()
      if (
        !(r && s.uri.toString() === n.toString()) &&
        t?.ignoreFocusCheck !== !0
      ) {
        t?.avoidEditorWideRemovals !== !0 &&
          this.hideAllInEditor_doesntChangeModel()
        return
      }
      if (
        (t?.avoidEditorWideRemovals !== !0 && this.Y(s),
        this.J.applicationUserPersistentStorage.cppConfig?.isGhostText !== !0 ||
          e === void 0 ||
          e.immediatelySeen === !0)
      ) {
        t?.avoidEditorWideRemovals !== !0 &&
          this.hideAllInEditor_doesntChangeModel()
        return
      }
      ;(this.f.style.opacity = "1"),
        this.cb(),
        this._updateTextContent(e, t),
        this.I.layoutContentWidget(this)
    }
    cb() {
      this.ib(), this.W(), this.Z()
    }
    removeAllInEditorNotModel() {
      this.X(), this.Z()
    }
    hideAllInEditor_doesntChangeModel() {
      for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild)
      ;(this.db = zY.Hidden),
        this.I.layoutContentWidget(this),
        (this.f.style.opacity = "0")
    }
    get db() {
      return this.r
    }
    set db(e) {
      ;(this.r = e), this.eb()
    }
    eb() {
      if (this.db.type === 1 && this.t) {
        this.fb = f(890, null, this.t)
        return
      }
      this.u ? (this.fb = f(891, null, this.u)) : (this.fb = f(892, null))
    }
    set fb(e) {
      this.c.title = e
    }
    gb(e, t, s = "ghost-text-decoration") {
      const n = document.createElement("span"),
        o = this.I.getOption(52).spaceWidth
      ;(n.className = s),
        (n.textContent = " ".repeat(t)),
        (n.style.width = `${o * t}px`),
        (n.style.display = "inline-block"),
        e.appendChild(n)
    }
    hb(e, t, s) {
      const n = document.createElement("span")
      ;(n.className = s), (n.textContent = t), (n.style.whiteSpace = "nowrap")
      const r = this.I.getOption(54)
      ;(n.style.fontSize = `${r}px`),
        (n.style.height = `${r * 1.5}px`),
        (n.style.display = "inline-flex"),
        (n.style.alignItems = "center"),
        e.appendChild(n)
    }
    ib() {
      if (this.z !== void 0) {
        const e = this.I.saveViewState()
        this.I.changeViewZones((t) => {
          t.removeZone(this.z), (this.z = void 0)
        }),
          e && this.I.restoreViewState(e)
      }
      this.F &&
        this.I.changeDecorations((e) => {
          e.removeDecoration(this.F), (this.F = null)
        })
    }
    jb(e, t, s) {
      const n = t.lineCount * this.I.getOption(68)
      this.Z()
      const r = this.I.getModel()
      if (!r) return
      const o = this.L.createById(r.getLanguageId())
      let a = this.w.getModel()
      a
        ? (a.getValue() !== e && a.setValue(e),
          a.getLanguageId() !== o.languageId && a.setLanguage(o.languageId))
        : ((a = this.P.createModel(
            e,
            o,
            U.parse(`cpp-ghost-text-viewzone-anysphere://${Oes()}`),
          )),
          this.w.setModel(a))
      const l = this.w.getOption(68),
        c = Math.max(s - 1, 0)
      this.w.setScrollTop(c * l),
        a.changeDecorations((u) => {
          a &&
            (a
              .getAllDecorations()
              .map((d) => d.id)
              .forEach((d) => u.removeDecoration(d)),
            t.addedRangesInNewFullModel.forEach((d) => {
              u.addDecoration(G.lift(d), {
                description: "ghost-text-decoration",
                className: "ghost-text-decoration-inline-add",
              })
            }),
            (this.G = u.addDecoration(new G(c + 1, 1, c + 1 + t.lineCount, 1), {
              className: "view-zone-in-view-zone-decoration",
              description: "decoration for view zone in view zone",
              isWholeLine: !0,
            })))
        }),
        this.w.layout({ width: this.w.getLayoutInfo().contentWidth, height: n }),
        (this.C.style.height = `${n + 2}px`)
      const h = this.I.saveViewState()
      this.I.changeViewZones((u) => {
        this.z !== void 0 && u.removeZone(this.z),
          this.kb(),
          (this.z = u.addZone({
            afterLineNumber: t.changesRangeInBeforeFullModel.endLineNumber,
            heightInPx: n,
            domNode: this.C,
            marginDomNode: this.H,
          }))
      }),
        h && this.I.restoreViewState(h),
        this.kb(),
        this.I.changeDecorations((u) => {
          if (
            (this.F && (u.removeDecoration(this.F), (this.F = null)),
            !this.I.getModel())
          )
            return
          const g = t.changesRangeInBeforeFullModel.startLineNumber,
            p = t.changesRangeInBeforeFullModel.endLineNumber
          this.F = u.addDecoration(new G(g, 1, p, 1), {
            className: "view-zone-original-range-decoration",
            description: "decoration for view zone original range",
            isWholeLine: !0,
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
        this.J.applicationUserPersistentStorage
          .shouldShowViewZoneWhenPreviewBoxIsClipped4 ?? !0
      )
    }
    nb(e, t, s) {
      const n = this.I.getDomNode()
      if (!n) return !1
      const r = ss().document
      if (!r) return !1
      const o = n.getBoundingClientRect(),
        a = this.I.getVisibleRanges()
      if (a.length === 0) return !1
      const l = this.I.getOption(68),
        c = this.I.getOption(52).typicalHalfwidthCharacterWidth,
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
      const s = Ues(this.I),
        n = this.I.getModel() ?? this.w.getModel(),
        { tabSize: r } = n ? n.getOptions() : { tabSize: 4 },
        o = ohr(e.selectiveNewText, r)
      return t.column + o > s
    }
  }
  iQe = __decorate(
    [
      __param(1, ei),
      __param(2, Hi),
      __param(3, aiFeatureStatusService),
      __param(4, Z),
      __param(5, ue),
      __param(6, qi),
      __param(7, cppService),
      __param(8, st),
      __param(9, cursorPredictionService),
      __param(10, importPredictionService),
    ],
    iQe,
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
        ((t[s].added = !0), (t[s].removed = !0))
    return t
  }
  function (i, e, t, s) {
    let { wordDiffs: n, charDiffs: r } = ZXe(i, e, s)
    const o = _es(n, s)
    let a = !0
    for (let h = 0; h < o.length; h++)
      if (o[h].added !== !0 && o[h].removed === !0 && o[h].value !== s) {
        a = !1
        break
      }
    const l = _es(r, s)
    let c = !0
    for (let h = 0; h < l.length; h++)
      if (l[h].added !== !0 && l[h].removed === !0 && l[h].value !== s) {
        c = !1
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
          precondition: void 0,
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
        (this.n = s),
        (this.q = n),
        (this.f = !1),
        (this.g = !1),
        (this.j = !1),
        (this.m = !1),
        (this.a = e),
        this.D(
          this.a.onDidChangeModel(() => {
            this.update()
          }),
        ),
        this.D(this.a.onDidChangeModelLanguage(() => this.update())),
        this.D(this.a.onDidChangeCursorPosition(() => this.update())),
        this.D(
          this.a.onMouseDown(() => {
            ;(this.g = !0), this.update()
          }),
        ),
        this.D(
          this.a.onMouseUp(() => {
            ;(this.g = !1), this.update()
          }),
        ),
        (this.b = new so(() => this.D(s.createInstance(iQe, this.a)))),
        (this.c = []),
        this.D(
          t.onDidChangeContext((r) => {
            r.affectsSome(new Set([me.hasActivelyGeneratingDiff.key])) &&
              me.hasActivelyGeneratingDiff.getValue(t)
          }),
        ),
        (this.reactiveStorageRoot = this.D(this.q.createScoped(this))),
        this.reactiveStorageRoot.onChangeEffect({
          deps: [
            () => this.q.applicationUserPersistentStorage.hideChatEditTooltip,
          ],
          onChange: () => {
            this.update()
          },
        }),
        this.reactiveStorageRoot.onChangeEffect({
          deps: [
            () => this.q.nonPersistentStorage.cppState,
            () => this.q.nonPersistentStorage.cppState?.suggestion,
            () => this.q.nonPersistentStorage.cppState?.additionalSuggestions,
          ],
          onChange: () => {
            this.refreshAdditionalWidgets(), this.update()
          },
          runNowToo: !0,
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
      this.h && (this.h.dispose(), (this.h = void 0))
    }
    shouldShowHoverAt(e) {
      const t = this.a.getModel()
      return t
        ? this.b.value.ghostTextDecorations.some((s) => {
            const n = t.getDecorationRange(s)
            return n && n.intersectRanges(e)
          })
        : !1
    }
    r() {
      if (!this.a.hasModel()) return
      const e = this.a.getModel(),
        t = this.a.getSelection()
      if (t.isEmpty()) {
        const { lineNumber: s, column: n } = t.getPosition(),
          r = e.getLineContent(s)
        if (r.length === 0) return
        if (n === 1) {
          if (/\s/.test(r[0])) return
        } else if (n === e.getLineMaxColumn(s)) {
          if (/\s/.test(r[r.length - 1])) return
        } else if (/\s/.test(r[n - 2]) && /\s/.test(r[n - 1])) return
      }
      return t
    }
    s(e) {
      return e.startLineNumber !== e.endLineNumber
    }
    refreshAdditionalWidgets() {
      for (const e of this.c) e.value.dispose()
      this.c = []
      for (const e of this.q.nonPersistentStorage.cppState
        ?.additionalSuggestions || []) {
        const t = new so(() => {
          const s = this.D(this.n.createInstance(iQe, this.a))
          return this.D(s.onClick((n) => {})), s
        })
        this.c.push(t),
          t.value.update(e, {
            avoidEditorWideRemovals: e !== void 0,
            forceDiffBox: !0,
          })
      }
    }
    update() {
      const e = this.q.nonPersistentStorage.cppState?.suggestion
      if (this.j) return
      const t = this.a.getPosition()
      if (t !== null && e !== void 0 && e.source !== ll.CursorPrediction) {
        const s = this.a.getModel()?.getDecorationRange(e.decorationId)
        if (s == null) return
        if (
          t.lineNumber < e.startingSuggestionRange.startLineNumber ||
          t.lineNumber > s.endLineNumber
        ) {
          console.log(
            "[Cpp] Bad Case: Cursor is not in the range of the suggestion",
          )
          return
        }
      }
      this.j = !0
      try {
        this.b.value.update(e, { changesSinceLastUpdate: this.m })
      } catch (s) {
        console.error("[Cpp] Error updating ghost text", s)
      } finally {
        ;(this.j = !1), e !== void 0 && (this.m = !1)
      }
      if (this.c.length > 0) {
        let s
        if (e !== void 0) {
          const n =
            this.a.getModel()?.getDecorationRange(e.decorationId) ?? void 0
          n &&
            (s = new G(
              Math.max(n.startLineNumber - 2, 1),
              n.startColumn,
              Math.min(
                n.endLineNumber + 2,
                this.a.getModel()?.getLineCount() ?? 1,
              ),
              n.endColumn,
            ))
        }
        for (let n = this.c.length - 1; n >= 0; n--) {
          const r = this.q.nonPersistentStorage.cppState?.additionalSuggestions[n]
          ;(() => {
            if (s !== void 0 && r !== void 0) {
              const a = this.a.getModel()?.getDecorationRange(r.decorationId)
              return !a || !s || !s.intersectRanges(a)
            }
            return !0
          })()
            ? this.c[n].value.updatePosition(r)
            : (this.c[n].value.dispose(), this.c.splice(n, 1))
        }
      }
    }
    updatePositions() {
      for (let e = 0; e < this.c.length; e++)
        this.c[e].value.updatePosition(
          this.q.nonPersistentStorage.cppState?.additionalSuggestions[e],
        )
    }
    setChangesSinceLastUpdate(e) {
      this.m = e
    }
  }
  ;(GhostTextController = GBt = __decorate([__param(1, Ce), __param(2, Z), __param(3, ei)], GhostTextController)),
    Tn(GhostTextController.ID, GhostTextController, 3);

  return {
    WBt,
    ZXe,
    CppDiffPeekViewWidget,
    jBt,
    Ycr,
    Xcr,
    Qcr,
    GhostTextController,
  }
}
