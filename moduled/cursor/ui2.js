// @ts-check

// 257924
export function createUI2(params) {
  const {gBi, Vu, X, tn, dp, M, xe, Bi, Je, $, Y, dt, a$, Rs, I, te, tt, ie, Zn, U, le, Yo, Rh, De, Gt, $o, Pi, zoe, bs, da, Tt, rJ, Is, hl, wt, x4t, G, _qe, Cu, J, jo, jS, wHe, No, Wr, ZB, fI, Aue, om, $c, cc, JLn, i7, lc, rt, kf, Jk, KWe, Xn, qn, _In, gG, kir, JXi, xir, Sir, Eir, Nir, Rir, Cir, Iir, Tir, Pir, Dir, Lir, qZn, BXi, PXi, gF, DG, Xv, _xt, uXe, dXe, NG, tw, Yt, Kt, Mr, oae, dWe, cOi, IOi, eR, I7, nr, qXi, aLt, i1, DXi, IXi, OXi, RXi, Dtr, KFi, GZn, Ct, Itr, kG, EG, Uxt, co, WKi, UVe, XI, Kxt, dOi, IG, UMn, XFi, fWe, gWe, AG, eI, MM, sze, Xle, ADi,  } = params;

  var k4t = ["edit"],
    Air = class extends gBi {
      constructor(i, e, t, s, n) {
        super(i),
          (this.type = t),
          (this.score = s),
          (this.secondaryText = n),
          (this.name = i),
          (this.picture = e),
          (this.score = s)
      }
    },
    E4t = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`,
    Mir = "\\b[A-Z][^\\s" + E4t + "]",
    KXi = { NAME: Mir, PUNCTUATION: E4t },
    YXi = KXi.PUNCTUATION,
    I4t = ["@"].join(""),
    pXe = "[^" + I4t + YXi + "\\s]",
    D4t = "(?:\\.[ |$]| |[" + YXi + "/]|)",
    T4t = 120,
    $ir = new RegExp(
      "(^|\\s|\\()([" + I4t + "]((?:" + pXe + D4t + "){0," + T4t + "}))$",
    ),
    Fir = 50,
    Oir = new RegExp(
      "(^|\\s|\\()([" + I4t + "]((?:" + pXe + "){0," + Fir + "}))$",
    ),
    Bir = new RegExp("(^|\\s)(#((?:" + pXe + D4t + "){0," + T4t + "}))$"),
    _ir = new RegExp("(^|\\s)(\\$((?:" + pXe + D4t + "){0," + T4t + "}))$")
  function Uir(i, e) {
    const t = Bir.exec(i)
    if (t !== null) {
      const s = t[1],
        n = t[3]
      if (n.length >= e)
        return {
          leadOffset: t.index + s.length,
          matchingString: n,
          replaceableString: t[2],
        }
    }
    return null
  }
  function Hir(i, e) {
    const t = _ir.exec(i)
    if (t !== null) {
      const s = t[1],
        n = t[3]
      if (n.length >= e)
        return {
          leadOffset: t.index + s.length,
          matchingString: n,
          replaceableString: t[2],
        }
    }
    return null
  }
  function Vir(i, e) {
    let t = $ir.exec(i)
    if ((t === null && (t = Oir.exec(i)), t !== null)) {
      const s = t[1],
        n = t[3]
      if (n.length >= e)
        return {
          leadOffset: t.index + s.length,
          matchingString: n,
          replaceableString: t[2],
        }
    }
    return null
  }
  function Wir(i, e) {
    const t = i.trimEnd().match(/[^\s]+$/)
    return t
      ? {
          leadOffset: i.length - t[0].length,
          matchingString: t[0],
          replaceableString: t[0],
        }
      : null
  }
  function qir(i) {
    return Wir(i, 0)
  }
  function LY(i) {
    return Vir(i, 0)
  }
  function XXi(i) {
    return Uir(i, 0)
  }
  function jir(i) {
    return Hir(i, 0)
  }
  function Fue(i, e) {
    let t = { current: !1 }
    if (
      (e.getEditorState().read(() => {
        const a = Vu().getTextContent()
        t.current = a.length > i.length + 2
      }),
      t.current)
    )
      return null
    const s = "[^/" + E4t + "\\s]",
      r = new RegExp(
        "(^|\\s)([/]((?:" +
          s +
          "){0," +
          (k4t.reduce((o, a) => Math.max(o, a.length), 0) + 1) +
          "}))$",
      ).exec(i)
    if (r !== null) {
      const o = r[1],
        a = r[3]
      if (a.length >= 0)
        return {
          leadOffset: r.index + o.length,
          matchingString: a,
          replaceableString: r[2],
        }
    }
    return null
  }
  var zir = X("<span>"),
    Kk = (i) => {
      const e = tn({ type: "default", size: "medium" }, i),
        { type: t, size: s, text: n, style: r, class: o, ...a } = e
      return (() => {
        var l = zir()
        return (
          dp(
            l,
            tn(
              {
                get class() {
                  return [
                    "cursor-badge",
                    `cursor-badge-${t}`,
                    `cursor-badge-${s}`,
                    o,
                  ]
                    .filter(Boolean)
                    .join(" ")
                },
              },
              a,
            ),
            !1,
            !0,
          ),
          M(l, n),
          xe((c) => Bi(l, r, c)),
          l
        )
      })()
    },
    Gir = X("<span><span>"),
    Jir = X("<span class=sizePreview> "),
    Kir = X("<i>"),
    P4t = X("<span>"),
    Yir = X("<li tabindex=-1 role=option><span></span><span>"),
    QXi = X("<div>"),
    Xir = X("<div class=input-box-code-selection-collapse-toggle>"),
    Qir = X("<div class=input-box-code-selection><div>"),
    Zir = X("<span>No code to show"),
    esr = X("<span> to add<span></span> to multi-add"),
    tsr = X("<div id=mention-selection-preview><div><div><div><div></div><span>"),
    isr = X("<div><span><span>"),
    ssr = X("<div id=mention-selection-preview>"),
    nsr = X("<li class=item><span class=text>No available options"),
    rsr = X("<ul>"),
    osr = Je(
      "chatinputbox-expand-selection",
      $.chevronDown,
      "Icon for removing a selection in the input box in AI chat.",
    ),
    asr = Je(
      "chatinputbox-collapse-selection",
      $.chevronUp,
      "Icon for collapsing a selection in the input box in AI chat.",
    ),
    lsr = [
      "node_modules",
      "__tests__",
      ".git",
      "dist",
      "out",
      "bin",
      "site-packages",
      "__pycache__",
    ],
    LMo = new RegExp("(^|\\/)" + lsr.join("|") + "(\\/|$)"),
    NMo = new RegExp("(^|[^#])((?:" + KXi.NAME + "{1,})$)"),
    ZXi = (i) => {
      const e = Y(() => (i.isSelected ? "item selected" : "item")),
        s = dt().themeService.getColorTheme(),
        n = s.getColor("menu.selectionBackground"),
        r = s.getColor("menu.selectionForeground"),
        o = s.getColor("menu.inactiveSelectionForeground"),
        a = s.getColor("editorOverviewRuler.bracketMatchForeground"),
        l = (d) => {
          if (typeof d == "string") return d
          const g = d / 4,
            p = [
              [1e6, "M toks"],
              [1e3, "K toks"],
              [1, " toks"],
            ],
            [m, b] = p.find((C) => C[0] < g) ?? p[p.length - 1]
          return `${(Math.round(g / m) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${b}`
        },
        [c, { refetch: h }] = a$(() => i.option.sizeBytes),
        u = Y(() =>
          c.loading || c.error || c() === void 0 ? "" : "(" + l(c() ?? 0) + ")",
        )
      return (() => {
        var d = Yir(),
          g = d.firstChild,
          p = g.nextSibling
        d.addEventListener("click", () => {
          i.onClick()
        }),
          d.addEventListener("mousemove", (b) => {
            i.onMouseEnterOrMove(b)
          }),
          d.addEventListener("mouseenter", (b) => {
            i.onMouseEnterOrMove(b)
          })
        var m = i.option.setRefElement
        return (
          typeof m == "function" ? Rs(m, d) : (i.option.setRefElement = d),
          g.style.setProperty("display", "flex"),
          M(
            g,
            (() => {
              var b = Y(() => typeof i.option.picture == "function")
              return () => (b() ? i.option.picture() : i.option.picture)
            })(),
          ),
          M(p, () => i.option.name),
          M(
            d,
            I(te, {
              get when() {
                return i.option.secondaryText
              },
              get children() {
                return [
                  (() => {
                    var b = Gir(),
                      y = b.firstChild
                    return (
                      y.style.setProperty("direction", "ltr"),
                      y.style.setProperty("unicode-bidi", "embed"),
                      M(y, () => i.option.secondaryText),
                      xe(
                        (w) => {
                          var C =
                              "secondary-text" +
                              (i.option.type === "staticheading"
                                ? " heading"
                                : ""),
                            S = i.isSelected
                              ? (o?.toString() ?? "")
                              : (a?.toString() ?? "")
                          return (
                            C !== w.e && tt(b, (w.e = C)),
                            S !== w.t &&
                              ((w.t = S) != null
                                ? b.style.setProperty("color", S)
                                : b.style.removeProperty("color")),
                            w
                          )
                        },
                        { e: void 0, t: void 0 },
                      ),
                      b
                    )
                  })(),
                  I(te, {
                    get when() {
                      return i.option.sizeBytes !== void 0
                    },
                    get children() {
                      var b = Jir(),
                        y = b.firstChild
                      return M(b, u, null), b
                    },
                  }),
                ]
              },
            }),
            null,
          ),
          M(
            d,
            I(te, {
              get when() {
                return i.option.type === "heading"
              },
              get children() {
                var b = Kir()
                return (
                  b.style.setProperty("margin-left", "auto"),
                  xe(() => tt(b, ie.asClassName($.arrowRight))),
                  b
                )
              },
            }),
            null,
          ),
          M(
            d,
            I(te, {
              get when() {
                return i.option.onSettingClick !== void 0
              },
              get children() {
                var b = P4t()
                return (
                  b.addEventListener("click", (y) => {
                    y.stopPropagation(),
                      i.option.onSettingClick && i.option?.onSettingClick()
                  }),
                  xe(
                    (y) => {
                      var w = ie.asClassName($.settingsGear),
                        C = i.option.secondaryText ? "4px" : "auto"
                      return (
                        w !== y.e && tt(b, (y.e = w)),
                        C !== y.t &&
                          ((y.t = C) != null
                            ? b.style.setProperty("margin-left", C)
                            : b.style.removeProperty("margin-left")),
                        y
                      )
                    },
                    { e: void 0, t: void 0 },
                  ),
                  b
                )
              },
            }),
            null,
          ),
          M(
            d,
            I(te, {
              get when() {
                return i.isSelected && i.option.type === "auto_context"
              },
              get children() {
                return I(Kk, {
                  size: "small",
                  get text() {
                    return Y(() => i.option.score !== void 0)()
                      ? `semantic (${i.option.score.toFixed(2)})`
                      : "semantic"
                  },
                  style: { "margin-left": "6px" },
                })
              },
            }),
            null,
          ),
          xe(
            (b) => {
              var y = e(),
                w = i.isSelected,
                C = "typeahead-item-" + i.index,
                S = {
                  ...(i.isSelected
                    ? {
                        "background-color": n?.toString() ?? "",
                        color: r?.toString() ?? "",
                      }
                    : {}),
                  cursor:
                    i.option.type === "staticheading" ? "default" : "pointer",
                },
                x = i.isSelected ? (o?.toString() ?? "") : (a?.toString() ?? ""),
                k =
                  (i.option.type === "heading" ||
                    i.option.type === "staticheading",
                  "0px"),
                E = "text" + (i.option.type === "staticheading" ? " heading" : "")
              return (
                y !== b.e && tt(d, (b.e = y)),
                w !== b.t && Zn(d, "aria-selected", (b.t = w)),
                C !== b.a && Zn(d, "id", (b.a = C)),
                (b.o = Bi(d, S, b.o)),
                x !== b.i &&
                  ((b.i = x) != null
                    ? g.style.setProperty("color", x)
                    : g.style.removeProperty("color")),
                k !== b.n &&
                  ((b.n = k) != null
                    ? g.style.setProperty("margin-left", k)
                    : g.style.removeProperty("margin-left")),
                E !== b.s && tt(p, (b.s = E)),
                b
              )
            },
            {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
            },
          ),
          d
        )
      })()
    }
  function csr() {
    let i = "abcdefghijklmnopqrstuvwxyz",
      e = ""
    for (let t = 0; t < 10; t++)
      e += i.charAt(Math.floor(Math.random() * i.length))
    return U.parse(`aichat-code-block-anysphere://${e}`)
  }
  var L4t = (i, e, t) => {
      const s = t ?? 12,
        n = 18,
        [r, o] = le(!1),
        a = i.text,
        l = Yo(() =>
          (() => {
            var y = QXi()
            return (
              y.style.setProperty("width", "100%"),
              y.style.setProperty("height", "100%"),
              y.style.setProperty("box-sizing", "border-box"),
              y
            )
          })(),
        )(),
        c = e.instantiationService.createInstance(
          Rh,
          l,
          {
            ...Rh.getEditorOptions(e.configurationService),
            fontSize: 10,
            lineHeight: 1.5,
          },
          {},
        ),
        h = new RegExp(/```[\w\s]*\nundefined\n```/),
        u = a.match(/```(\w*)/)?.[1] || "",
        d = e.languageService.createByLanguageNameOrFilepathOrFirstLine(
          u,
          null,
          void 0,
        ),
        g = csr(),
        p = a
          .split(
            `
  `,
          )
          .slice(1, -1),
        m = p.length > n,
        b = e.modelService.createModel(
          p.join(`
  `),
          d,
          g,
          !1,
        )
      return (
        c.setModel(b),
        De(() => {
          r()
            ? c.updateOptions({
                scrollbar: {
                  vertical: "auto",
                  verticalScrollbarSize: 10,
                  horizontal: "auto",
                  handleMouseWheel: !0,
                  alwaysConsumeMouseWheel: !0,
                  horizontalScrollbarSize: 10,
                  ignoreHorizontalScrollbarInContentHeight: !0,
                },
              })
            : (c.updateOptions({
                scrollbar: {
                  vertical: "hidden",
                  verticalScrollbarSize: 0,
                  horizontal: "hidden",
                  handleMouseWheel: !1,
                  alwaysConsumeMouseWheel: !1,
                  horizontalScrollbarSize: 0,
                  ignoreHorizontalScrollbarInContentHeight: !0,
                },
              }),
              c.setScrollTop(0),
              c.setScrollLeft(0))
        }),
        Gt(() => {
          c.dispose(), b.dispose(), l.remove()
        }),
        (() => {
          var y = Qir(),
            w = y.firstChild
          return (
            y.style.setProperty(
              "background-color",
              "var(--vscode-editor-background)",
            ),
            y.style.setProperty(
              "border",
              "1px solid var(--vscode-commandCenter-inactiveBorder)",
            ),
            y.style.setProperty("border-radius", "2px"),
            y.style.setProperty("position", "relative"),
            y.style.setProperty("overflow", "hidden"),
            w.style.setProperty("white-space", "pre"),
            w.style.setProperty("padding", "0.25rem 0.4rem"),
            M(
              w,
              (() => {
                var C = Y(() => !!h.test(a))
                return () =>
                  C()
                    ? (() => {
                        var S = Zir()
                        return (
                          S.style.setProperty(
                            "color",
                            "var(--vscode-input-placeholderForeground)",
                          ),
                          S
                        )
                      })()
                    : l
              })(),
              null,
            ),
            M(
              w,
              I(te, {
                when: m,
                get children() {
                  var C = Xir()
                  return (
                    C.addEventListener("click", () => {
                      o(!r())
                    }),
                    M(
                      C,
                      I($o, {
                        get children() {
                          return [
                            I(Pi, {
                              get when() {
                                return !r()
                              },
                              get children() {
                                var S = P4t()
                                return xe(() => tt(S, ie.asClassName(osr))), S
                              },
                            }),
                            I(Pi, {
                              get when() {
                                return r()
                              },
                              get children() {
                                var S = P4t()
                                return xe(() => tt(S, ie.asClassName(asr))), S
                              },
                            }),
                          ]
                        },
                      }),
                    ),
                    xe((S) =>
                      Bi(
                        C,
                        {
                          right: r() ? "10px" : 0,
                          bottom: r() ? "10px" : 0,
                          ...(r() ? { "background-color": "transparent" } : {}),
                        },
                        S,
                      ),
                    ),
                    C
                  )
                },
              }),
              null,
            ),
            xe((C) =>
              (C = m
                ? r()
                  ? `${15 * n}px`
                  : `${15 * s}px`
                : `${15 * p.length}px`) != null
                ? w.style.setProperty("height", C)
                : w.style.removeProperty("height"),
            ),
            y
          )
        })()
      )
    },
    hsr = (i) => {
      const [n, r] = le(),
        [o, a] = le(),
        l = dt()
      De(async () => {
        if (
          i.selectedOption.type === "file" ||
          i.selectedOption.type === "auto_context"
        ) {
          r(void 0)
          const p = i.selectedOption.selectionPrecursor?.uri.fsPath
          if (!p) return
          const m = await l.everythingProviderService.provider?.runCommand(
            zoe.GetDirectory,
            { fsPath: p },
          )
          if (!m) {
            a(void 0)
            return
          }
          const b = l.workspaceContextService.asRelativePath(U.file(p)),
            y = bs(b),
            w = b.replace(y, "")
          a({ basePath: w, relativeWorkspacePath: b, neighboringFiles: m })
          return
        }
        a(void 0)
        const g = await Oue(i.selectedOption, l)
        if (
          g.type === da.Failure ||
          g.type === da.None ||
          g.type === da.Image ||
          g.type === da.Folder ||
          g.type === da.Docs ||
          g.type === da.CursorRule ||
          i.selectedOption.type !== Tt.code
        ) {
          r(void 0)
          return
        }
        if (g.type === da.File) {
          const p = await rJ(
            l.textModelService,
            l.dataScrubbingService,
            g.selectionWithoutUuid,
          )
          r(p)
          return
        }
        r(g.selectionWithoutUuid)
      })
      const [c, h] = le({ top: i.selectedIndex * 24, right: -364 })
      De(() => {
        const g = o() ? 300 : 360
        let p = i.selectedIndex * 20,
          m = -(g + 4)
        const b = i.optionsListRef,
          y = i.selectedIndex,
          w = b?.getBoundingClientRect()
        if (!w) return
        w.right - m > l.window.document.body.clientWidth && (m = w.width + 4)
        const S = l.window.document.getElementById(
          `typeahead-item-${i.selectedIndex}`,
        )
        if (S) {
          const x = S.getBoundingClientRect(),
            k = i.optionsListRef?.getBoundingClientRect()
          k && (p = x.top - k.top)
        }
        h({ top: p, right: m }),
          l.window.requestIdleCallback(() => {
            const k = l.window.document
              .getElementById("mention-selection-preview")
              ?.getBoundingClientRect()
            if (!k) return
            const E = l.window.document.getElementById(`typeahead-item-${y}`)
            if (E && b) {
              const D = E.getBoundingClientRect(),
                P = b.getBoundingClientRect()
              ;(p = D.top - P.top),
                D.top + k.height > l.window.document.body.clientHeight &&
                  (p = D.top - P.top - k.height + D.height),
                h({ top: p, right: m })
            }
          })
      }, [i.selectedIndex])
      const u = Y(
          () =>
            o()
              ?.basePath.split("/")
              .filter((g) => !!g.trim()) ?? [],
        ),
        d = 12
      return [
        I(te, {
          get when() {
            return o()
          },
          children: (g) =>
            (() => {
              var p = tsr(),
                m = p.firstChild,
                b = m.firstChild,
                y = b.firstChild,
                w = y.firstChild,
                C = w.nextSibling
              return (
                p.style.setProperty("width", "300px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                p.style.setProperty("overflow", "hidden"),
                p.style.setProperty("font-size", "11px"),
                m.style.setProperty(
                  "background-color",
                  "var(--vscode-editor-background)",
                ),
                m.style.setProperty(
                  "border",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                m.style.setProperty("border-radius", "3px"),
                m.style.setProperty("display", "flex"),
                m.style.setProperty("flex-direction", "column"),
                m.style.setProperty("gap", "2px"),
                m.style.setProperty("position", "relative"),
                m.style.setProperty("overflow", "hidden"),
                b.style.setProperty("display", "flex"),
                b.style.setProperty("flex-direction", "column"),
                b.style.setProperty("gap", "4px"),
                b.style.setProperty("padding", "0.25rem 0.4rem"),
                M(
                  b,
                  I(Is, {
                    get each() {
                      return u()
                    },
                    children: (S, x) =>
                      (() => {
                        var k = isr(),
                          E = k.firstChild,
                          D = E.firstChild
                        return (
                          k.style.setProperty("display", "flex"),
                          k.style.setProperty("align-items", "center"),
                          k.style.setProperty("overflow", "hidden"),
                          k.style.setProperty("text-overflow", "ellipsis"),
                          k.style.setProperty("white-space", "nowrap"),
                          M(
                            k,
                            I(Is, {
                              get each() {
                                return Array(x())
                              },
                              children: (P) =>
                                (() => {
                                  var L = QXi()
                                  return (
                                    L.style.setProperty("margin-left", "12px"),
                                    L.style.setProperty(
                                      "border-left",
                                      "1px solid var(--vscode-commandCenter-inactiveBorder)",
                                    ),
                                    L.style.setProperty(
                                      "display",
                                      "inline-block",
                                    ),
                                    L
                                  )
                                })(),
                            }),
                            E,
                          ),
                          E.style.setProperty("display", "flex"),
                          E.style.setProperty("align-items", "center"),
                          E.style.setProperty("gap", "4px"),
                          E.style.setProperty("overflow", "hidden"),
                          E.style.setProperty("text-overflow", "ellipsis"),
                          E.style.setProperty("white-space", "nowrap"),
                          M(E, S, null),
                          xe(
                            (P) => {
                              var L = x() === u().length - 1 ? 1 : 0.5,
                                A = "calc(100% - " + d * x() + "px)",
                                F = ie.asClassName($.folder)
                              return (
                                L !== P.e &&
                                  ((P.e = L) != null
                                    ? E.style.setProperty("opacity", L)
                                    : E.style.removeProperty("opacity")),
                                A !== P.t &&
                                  ((P.t = A) != null
                                    ? E.style.setProperty("max-width", A)
                                    : E.style.removeProperty("max-width")),
                                F !== P.a && tt(D, (P.a = F)),
                                P
                              )
                            },
                            { e: void 0, t: void 0, a: void 0 },
                          ),
                          k
                        )
                      })(),
                  }),
                  y,
                ),
                y.style.setProperty("display", "flex"),
                y.style.setProperty("align-items", "center"),
                y.style.setProperty("overflow", "hidden"),
                y.style.setProperty("text-overflow", "ellipsis"),
                y.style.setProperty("white-space", "nowrap"),
                w.style.setProperty(
                  "border-left",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                w.style.setProperty("display", "inline-block"),
                C.style.setProperty("display", "flex"),
                C.style.setProperty("align-items", "center"),
                C.style.setProperty("gap", "4px"),
                C.style.setProperty("overflow", "hidden"),
                C.style.setProperty("text-overflow", "ellipsis"),
                C.style.setProperty("white-space", "nowrap"),
                M(
                  C,
                  I(hl, {
                    get fileName() {
                      return bs(g().relativeWorkspacePath)
                    },
                    get workspaceContextService() {
                      return l.workspaceContextService
                    },
                    get modelService() {
                      return l.modelService
                    },
                    get languageService() {
                      return l.languageService
                    },
                  }),
                  null,
                ),
                M(C, () => bs(g().relativeWorkspacePath), null),
                M(
                  m,
                  I(te, {
                    get when() {
                      return (
                        i.selectedOption.type !== "staticheading" &&
                        i.selectedOption.type !== "heading" &&
                        !i.selectedOption.isSlash
                      )
                    },
                    get children() {
                      var S = esr(),
                        x = S.firstChild,
                        k = x.nextSibling,
                        E = k.nextSibling
                      return (
                        S.style.setProperty("line-height", "14px"),
                        S.style.setProperty("justify-self", "flex-end"),
                        S.style.setProperty("width", "100%"),
                        S.style.setProperty("opacity", "0.7"),
                        S.style.setProperty("box-sizing", "border-box"),
                        S.style.setProperty("font-size", "0.9em"),
                        S.style.setProperty(
                          "color",
                          "var(--vscode-input-placeholderForeground)",
                        ),
                        S.style.setProperty("flex-shrink", "0"),
                        S.style.setProperty("display", "flex"),
                        S.style.setProperty("align-items", "center"),
                        S.style.setProperty("gap", "4px"),
                        S.style.setProperty(
                          "background-color",
                          "var(--vscode-dropdown-background)",
                        ),
                        S.style.setProperty("padding", "0.15rem 0.4rem"),
                        S.style.setProperty("justify-content", "flex-end"),
                        M(S, "\u23CE", x),
                        k.style.setProperty("width", "2px"),
                        k.style.setProperty("height", "2px"),
                        k.style.setProperty(
                          "background-color",
                          "var(--vscode-input-placeholderForeground)",
                        ),
                        k.style.setProperty("border-radius", "50%"),
                        k.style.setProperty("display", "inline-block"),
                        M(S, wt ? "\u21E7\u23CE" : "Shift+\u23CE", E),
                        S
                      )
                    },
                  }),
                  null,
                ),
                xe(
                  (S) => {
                    var x = c().top + "px",
                      k = c().right + "px",
                      E = d * u().length + "px"
                    return (
                      x !== S.e &&
                        ((S.e = x) != null
                          ? p.style.setProperty("top", x)
                          : p.style.removeProperty("top")),
                      k !== S.t &&
                        ((S.t = k) != null
                          ? p.style.setProperty("right", k)
                          : p.style.removeProperty("right")),
                      E !== S.a &&
                        ((S.a = E) != null
                          ? w.style.setProperty("margin-left", E)
                          : w.style.removeProperty("margin-left")),
                      S
                    )
                  },
                  { e: void 0, t: void 0, a: void 0 },
                ),
                p
              )
            })(),
        }),
        I(te, {
          get when() {
            return n()
          },
          children: (g) =>
            (() => {
              var p = ssr()
              return (
                p.style.setProperty("width", "360px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                M(p, () => L4t(g(), l)),
                xe(
                  (m) => {
                    var b = c().top + "px",
                      y = c().right + "px"
                    return (
                      b !== m.e &&
                        ((m.e = b) != null
                          ? p.style.setProperty("top", b)
                          : p.style.removeProperty("top")),
                      y !== m.t &&
                        ((m.t = y) != null
                          ? p.style.setProperty("right", y)
                          : p.style.removeProperty("right")),
                      m
                    )
                  },
                  { e: void 0, t: void 0 },
                ),
                p
              )
            })(),
        }),
      ]
    }
  async function usr(i, e) {
    if (i.selectionPrecursor === void 0)
      return { type: da.Failure, message: "No selection precursor" }
    if (x4t.test(i.selectionPrecursor.uri.fsPath))
      return { type: da.Image, imageUri: i.selectionPrecursor.uri }
    if (i.selectionPrecursor.uri.fsPath.endsWith(".mdc"))
      return {
        type: da.CursorRule,
        selectionWithoutUuid: { filename: bs(i.selectionPrecursor.uri.fsPath) },
      }
    const t = e.modelService.getModel(i.selectionPrecursor.uri)
    if (t !== null) {
      if (t.getValueLength() > 1e6)
        return { type: da.Failure, message: "File too large - over 1M chars" }
    } else {
      const { size: n } = await e.fileService.stat(i.selectionPrecursor.uri)
      if (n > 2e6) return { type: da.Failure, message: "File too large" }
    }
    const s = i.selectionPrecursor.uri
    return { type: da.File, selectionWithoutUuid: { uri: s } }
  }
  async function dsr(i, e) {
    return i.docSelection
      ? { type: da.Docs, selectionWithoutUuid: i.docSelection }
      : { type: da.None }
  }
  async function fsr(i, e) {
    return i.secondaryText
      ? {
          type: da.Folder,
          selectionWithoutUuid: {
            relativePath:
              typeof i.secondaryText == "string" ? i.secondaryText : "",
          },
        }
      : { type: da.Failure, message: "No secondary text" }
  }
  async function gsr(i, e) {
    if (i.selectionPrecursor === void 0)
      return { type: da.Failure, message: "No selection precursor" }
    let t
    i.selectionPrecursor.initialRange !== void 0 &&
      (t = new G(
        i.selectionPrecursor.initialRange.startLineNumber - 0,
        1,
        i.selectionPrecursor.initialRange.endLineNumber + 0,
        1,
      ))
    const s = await _qe(
      e.textModelService,
      e.dataScrubbingService,
      i.selectionPrecursor.uri,
      t,
    )
    return s === void 0
      ? { type: da.Failure, message: "Unable to get code selection" }
      : { type: da.Code, selectionWithoutUuid: s }
  }
  async function Oue(i, e) {
    return i.type === "file" || i.type === "auto_context"
      ? await usr(i, e)
      : i.type === "code"
        ? await gsr(i, e)
        : i.type === "folder"
          ? await fsr(i, e)
          : i.type === "doc"
            ? await dsr(i, e)
            : { type: da.None }
  }
  function psr(i, e, t, s) {
    if (e.removeMention && e.removeMention(s)) return
    const n = i.selections.findIndex((u) => u.uuid === s),
      r = i.fileSelections.findIndex((u) => u.uuid === s),
      o = i.commits.findIndex((u) => u.uuid === s),
      a = i.pullRequests.findIndex((u) => u.uuid === s),
      l = i.folderSelections.findIndex((u) => u.uuid === s),
      c = i.imageUuids.findIndex((u) => u === s),
      h = i.links.findIndex((u) => u.uuid === s)
    s === i.gitDiffUuid
      ? e.removeGitDiff()
      : s === i.diffToMainUuid
        ? e.removeDiffToMain()
        : n !== -1
          ? e.removeSelection(n)
          : r !== -1
            ? e.removeFileSelection(r)
            : o !== -1
              ? e.removeCommit(o)
              : a !== -1
                ? e.removePullRequest(a)
                : t in i.lintKeys
                  ? e.removeLinterErrors()
                  : t in i.webKeys
                    ? e.removeWeb()
                    : t in i.repoMapKeys
                      ? e.removeRepoMap?.()
                      : t in i.currentFileKeys
                        ? e.removeCurrentFile()
                        : t in i.codebaseKeys
                          ? e.removeCodebase()
                          : l !== -1
                            ? e.removeFolderSelection(l)
                            : c !== -1
                              ? e.removeImage(s)
                              : h !== -1
                                ? e.removeLink(s)
                                : e.removeDocs(s)
  }
  function msr(i) {
    const e = dt(),
      [t] = Cu(),
      [s, n] = le(Tt.none),
      [r, o] = le(!1),
      [a, l] = le(null),
      [c, h] = le(""),
      u = new J()
    Gt(() => {
      u.dispose()
    })
    const d = Y(() =>
        i.contextSessionUuid
          ? e.aiContextSessionService.getReactiveReadonlyContextSession(
              i.contextSessionUuid,
            )
          : void 0,
      ),
      [g, p] = le(!1)
    function m(_e) {
      let Nt = A.get(_e)
      return (
        Nt ||
          A.forEach((ni) => {
            ni.storedKey === _e && (Nt = ni)
          }),
        Nt
      )
    }
    De(() => {
      const _e = d()
      if (_e === void 0) return
      const Nt = _e.intents.map((ni) => ni.intent.uuid)
      A.forEach((ni, ri) => {
        const dn = ni.__contextIntent?.uuid
        dn &&
          !Nt.includes(dn) &&
          t.update(() => {
            const xi = m(ri)
            xi && (xi.remove(), A.delete(xi.__key))
          })
      })
    }),
      De(() => {
        const _e = i.mentionToAdd,
          Nt = i.setMentionToAdd
        _e &&
          _e.type === "file" &&
          t.update(() => {
            const ni = _e.relativePath.split("/").pop() ?? _e.relativePath,
              ri = [],
              dn = new jo(
                ni,
                ri,
                Tt.file,
                0,
                { uri: _e.uri },
                void 0,
                _e.relativePath,
              )
            z(dn, void 0, _e.defaultCollapsed), Nt?.(null)
          })
      }),
      De(() => {
        const _e = i.mentionIdToDelete,
          Nt = i.setMentionIdToDelete
        _e !== null &&
          t.update(() => {
            const ni = m(_e)
            ni && (ni.remove(), A.delete(ni.__key)), Nt(null)
          })
      }),
      De(() => {
        const _e = t.getRootElement()
        if (!_e) return
        const Nt = e.fileService,
          ni = new jS(_e, {
            onDrop: async (ri) => {
              const dn = ri.dataTransfer?.files[0]?.type
              if (dn !== void 0 && dn !== "text/plain" && dn !== "") return
              const xi = [],
                Bs = await e.instantiationService.invokeFunction((yt) =>
                  wHe(yt, ri),
                )
              ;(ri.hardcodedStopper = !0), ri.preventDefault()
              for (const yt of Bs) {
                const je = yt.resource
                if (!je) continue
                const St = e.workspaceContextService.asRelativePath(je),
                  Ie =
                    St.split("/")
                      .filter((ki) => ki !== "")
                      .pop() ?? St
                if ((await e.fileService.resolve(je)).isDirectory) {
                  const ki = new jo(Ie, xi, Tt.folder, 0, { uri: je }, void 0, St)
                  z(ki)
                } else {
                  const ki = St.split("/").pop() ?? St,
                    Ii = new jo(ki, xi, Tt.file, 0, { uri: je }, void 0, St)
                  z(Ii)
                }
              }
            },
            onDragEnter: async (ri) => {},
            onDragLeave: (ri) => {},
            onDragEnd: (ri) => {},
          })
        u.add(ni)
      }),
      De(() => {
        const _e = t.getRootElement()
        if (!_e) return
        const Nt = (ni) => {
          const ri = ni.target
          if (!No(ri)) return
          const dn = ri.getAttribute("data-typeahead-type")
          if (dn && dn === Tt.link) {
            const xi = ri.getAttribute("data-mention-key"),
              Bs = ri.getAttribute("data-mention-name")
            if (!xi || !Bs) return
            ni.stopPropagation(), ni.preventDefault()
            const yt = ri.getBoundingClientRect()
            e.commandService.executeCommand("cursor.mentionLinkToolbar", {
              x: yt.left,
              y: yt.bottom + 2,
              link: Bs,
              onRemove: () => {
                t.update(() => {
                  const je = Wr()
                  je &&
                    (je.insertText(Bs),
                    A.get(xi)?.remove(),
                    i.removeLink(xi),
                    t.focus())
                })
              },
            })
          }
        }
        _e.addEventListener("click", Nt),
          Gt(() => {
            _e.removeEventListener("click", Nt)
          })
      })
    const b = t.registerCommand(
      ZB,
      (_e) =>
        r() && Mi().length > 0
          ? (o(!1), qe([]), i.onMentionsMenuClose?.(), !0)
          : !1,
      fI,
    )
    Gt(() => {
      b()
    })
    const [y, w] = le([]),
      [C, S] = le([]),
      [x, k] = le([]),
      [E, D] = le([]),
      [P, L] = le([]),
      A = new Map(),
      F = t.registerMutationListener(Aue, (_e) => {
        for (let [Nt, ni] of _e)
          if (ni === "created")
            t.update(() => {
              const ri = om(Nt)
              ri &&
                (A.set(Nt, ri),
                ri.metadata?.selectedOption && z(ri.metadata.selectedOption, ri))
            })
          else if (ni === "destroyed") {
            he(!1), n(Tt.none)
            const ri = m(Nt)
            if (ri) {
              const dn = ri.__contextIntent
              if (dn) {
                const xi = d()
                xi !== void 0 &&
                  e.aiContextSessionService.updateContextSession(xi.uuid, {
                    removedIntentUuids: [dn.uuid],
                    upsertedIntents: [],
                    rerankEndpoint: void 0,
                  })
              }
            }
            A.delete(Nt),
              B.delete(Nt),
              ri &&
                psr(
                  {
                    fileSelections: i.fileSelections,
                    selections: i.selections,
                    folderSelections: i.folderSelections,
                    commits: i.commits,
                    pullRequests: i.pullRequests,
                    diffToMainUuid: i.diffToMainUuid,
                    gitDiffUuid: i.gitDiffUuid,
                    imageUuids: i.imageUuids,
                    links: i.linksSelections,
                    lintKeys: y(),
                    currentFileKeys: C(),
                    codebaseKeys: x(),
                    webKeys: E(),
                    repoMapKeys: P(),
                    notepadIds: i.notepadIds,
                  },
                  i,
                  Nt,
                  ri.storedKey,
                )
          }
      })
    Gt(() => {
      F()
    })
    const H = (_e, Nt, ni, ri, dn) => {
        const xi = $c(""),
          Bs =
            dn?.shiftKey && _e.type !== Tt.staticheading && _e.type !== Tt.heading
        if (
          (Nt &&
            !Bs &&
            (Nt.select(),
            _e.type === "heading"
              ? (_e.name === cc[Tt.folder]
                  ? Nt.setTextContent("@/")
                  : Nt.setTextContent("@"),
                Nt.select())
              : _e.type === Tt.toggle_commit_options || Nt.replace(xi)),
          Bs)
        ) {
          z(_e, void 0, void 0, !0, !0)
          return
        }
        ni(), z(_e)
      },
      B = new Set(),
      z = async (_e, Nt, ni, ri = !1, dn = !1) => {
        if (
          (console.log("[balta] finishSelectingOption", _e),
          Nt && B.has(Nt.__key))
        )
          return
        if (
          (Nt ||
            (_e.type !== Tt.heading &&
              e.telemetryService.publicLogCapture(
                `mention_node.created.${_e.type}`,
                { type: _e.type },
              )),
          _e.type === Tt.toggle_commit_options)
        ) {
          p(!g())
          return
        }
        he(!1), dn || n(Tt.none)
        let xi = _e.name
        if (_e.type === Tt.folder) {
          const Dt = typeof _e.secondaryText == "string" ? _e.secondaryText : xi
          xi.length >= Dt.length && (xi = Dt)
        }
        _e.type === Tt.link && (xi = K() ?? "")
        let Bs = _e.docSelection,
          yt = !0
        if (_e.name === "Add new doc") {
          if (
            (Nt === void 0 &&
              (e.reactiveStorageService.setNonPersistentStorage("newDoc", void 0),
              await e.commandService.executeCommand("cursor.newdocs")),
            (yt =
              e.reactiveStorageService.nonPersistentStorage.newDoc !== void 0),
            (xi =
              e.reactiveStorageService.nonPersistentStorage.newDoc?.name ?? ""),
            !xi)
          ) {
            t.focus(), console.error("no name for doc, skipping")
            return
          }
          e.reactiveStorageService.nonPersistentStorage.newDoc &&
            (Bs = {
              docId:
                e.reactiveStorageService.nonPersistentStorage.newDoc.identifier,
              name: xi,
            }),
            t.focus(),
            await new Promise((Dt) => {
              setTimeout(() => {
                Dt(null)
              }, 100)
            })
        }
        const je = Y(() => i.showErrorMessage),
          St = await Oue(_e, e)
        let Ie
        _e.selectionPrecursor &&
          St.type !== da.Image &&
          St.type !== da.CursorRule &&
          _e.type !== Tt.folder &&
          (Ie = await e.textModelService.createModelReference(
            _e.selectionPrecursor.uri,
          )),
          t.update(() => {
            if (_e.type === "heading") {
              for (const Bn of JLn)
                if (_e.name === cc[Bn]) {
                  n(Bn)
                  break
                }
              he(!0), de(Date.now())
              return
            }
            let Dt
            const Mt = d()
            if (
              (typeof _e.type == "object" &&
                "case" in _e.type &&
                _e.type.case === "simple_mentions_handler" &&
                ((Dt = new i7(_e.type.contextIntent())),
                Mt !== void 0 &&
                  e.aiContextSessionService.updateContextSession(Mt.uuid, {
                    removedIntentUuids: [],
                    upsertedIntents: [Dt],
                    rerankEndpoint: void 0,
                  })),
              _e.type === "file" &&
                Mt !== void 0 &&
                _e.selectionPrecursor !== void 0)
            )
              (Dt = new i7({
                type: lc.USER_ADDED,
                uuid: rt(),
                intent: {
                  case: "file",
                  value: {
                    relativeWorkspacePath:
                      e.workspaceContextService.asRelativePath(
                        _e.selectionPrecursor.uri,
                      ),
                    mode: kf.UNSPECIFIED,
                  },
                },
              })),
                e.aiContextSessionService.updateContextSession(Mt.uuid, {
                  removedIntentUuids: [],
                  upsertedIntents: [Dt],
                  rerankEndpoint: void 0,
                })
            else if (
              _e.type === Tt.code &&
              Mt !== void 0 &&
              Ie !== void 0 &&
              _e.selectionPrecursor !== void 0 &&
              _e.selectionPrecursor.initialRange !== void 0
            ) {
              if (!_e.selectionPrecursor?.initialRange)
                throw new Error("No selection precursor initial range")
              const Bn = Ie.object.textEditorModel.getValueInRange(
                  _e.selectionPrecursor.initialRange,
                ),
                jr = Ie.object.getLanguageId()
              ;(Dt = new i7({
                type: lc.USER_ADDED,
                uuid: rt(),
                intent: {
                  case: "codeSelection",
                  value: {
                    relativeWorkspacePath:
                      e.workspaceContextService.asRelativePath(
                        _e.selectionPrecursor.uri,
                      ),
                    text: `\`\`\`${jr}
  ${Bn}\`\`\``,
                    potentiallyOutOfDateRange: _e.selectionPrecursor.initialRange,
                  },
                },
              })),
                e.aiContextSessionService.updateContextSession(Mt.uuid, {
                  removedIntentUuids: [],
                  upsertedIntents: [Dt],
                  rerankEndpoint: void 0,
                })
            }
            if (_e.type === Tt.reset) {
              i.onReset?.()
              return
            } else if (_e.type === Tt.reference_open_editors) {
              i.onReferenceOpenEditors?.()
              return
            } else if (_e.type === Tt.reference_active_editors) {
              i.onReferenceActiveEditors?.()
              return
            } else if (_e.type === Tt.reset_context) {
              i.onResetContext?.()
              return
            }
            t.focus()
            const ki =
              Nt ??
              Jk(
                xi,
                Dt,
                void 0,
                _e.type === Tt.link || KWe.includes(_e.type) ? _e.type : void 0,
                St,
                void 0,
                _e,
              )
            if ((B.add(ki.__key), !Nt)) {
              const Bn = $c(" "),
                jr = $c("")
              if (
                (jr.setMode("segmented").toggleDirectionless(),
                St.type === da.Failure && Dt === void 0)
              ) {
                je()(St.message)
                return
              }
              if (ri) {
                const $e = Wr()
                if (Xn($e)) {
                  const be = $e.anchor,
                    We = be.getNode()
                  if (qn(We)) {
                    const kt = We.getTextContent(),
                      qt = be.offset,
                      Yi = kt.lastIndexOf("@", qt)
                    if (Yi !== -1) {
                      const Ji = kt.slice(0, Yi),
                        Us = kt.slice(Yi)
                      We.setTextContent(Ji)
                      const Mn = $c(Us)
                      We.insertAfter(Mn),
                        We.insertAfter(ki),
                        Us.startsWith(" ") || ki.insertAfter($c(" ")),
                        Mn.select()
                    }
                  }
                }
              } else _In([ki, jr, Bn])
            }
            const Ii = K()
            if (St.type === da.File && !Dt) {
              const Bn = {
                ...St.selectionWithoutUuid,
                uuid: ki.storedKey,
                collapseByDefault: ni ?? !1,
              }
              i.insertFileSelection(Bn)
            } else if (St.type === da.Image && !Dt)
              i.insertImage({ uri: St.imageUri, uuid: ki.storedKey })
            else if (St.type === da.Code && !Dt) {
              const Bn = { ...St.selectionWithoutUuid, uuid: ki.storedKey }
              i.insertSelection(Bn)
            } else if (St.type === da.CursorRule)
              i.insertCursorRule({
                filename: St.selectionWithoutUuid.filename,
                uuid: ki.storedKey,
              })
            else if (Bs !== void 0 && yt)
              i.insertDocs({ ...Bs, uuid: ki.storedKey })
            else if (_e.type === Tt.text_search)
              i.insertTextSearch({
                query: _e.name,
                uuid: ki.storedKey,
                files: e.sourceFilesService.getFilesOfSearch(_e.name),
              })
            else if (_e.type === Tt.git_commit)
              i.insertCommit({
                sha: typeof _e.secondaryText == "string" ? _e.secondaryText : "",
                message: _e.name,
                uuid: ki.storedKey,
              })
            else if (_e.type === Tt.git_pr)
              i.insertPullRequest({ ..._e.pr, uuid: ki.storedKey })
            else if (_e.type === Tt.git_diff) {
              const Bn = _e.diff
              Bn === gG.TO_HEAD
                ? i.insertGitDiff(ki.storedKey)
                : Bn === gG.TO_MAIN_FROM_BRANCH &&
                  i.insertDiffToMain(ki.storedKey)
            } else if (_e.type === Tt.lint)
              i.addLinterErrors(ki.storedKey),
                w((Bn) => ({ ...Bn, [ki.storedKey]: !0 }))
            else if (_e.type === Tt.current_file)
              i.addCurrentFile(), S((Bn) => ({ ...Bn, [ki.storedKey]: !0 }))
            else if (_e.type === Tt.web)
              i.addWeb(ki.storedKey), D((Bn) => ({ ...Bn, [ki.storedKey]: !0 }))
            else if (_e.type === Tt.recent_changes)
              i.addRecentChanges(ki.storedKey)
            else if (_e.type === Tt.repo_map)
              i.addRepoMap?.(ki.storedKey),
                L((Bn) => ({ ...Bn, [ki.storedKey]: !0 }))
            else if (_e.type === Tt.codebase)
              i.addCodebase(ki.storedKey),
                k((Bn) => ({ ...Bn, [ki.storedKey]: !0 }))
            else if (_e.type === Tt.folder)
              i.insertFolderSelection({
                relativePath:
                  typeof _e.secondaryText == "string"
                    ? _e.secondaryText
                    : "not_defined_should_not_happen",
                uuid: ki.storedKey,
              })
            else if (_e.type === Tt.link && Ii)
              i.insertLink({ url: Ii, uuid: ki.storedKey })
            else if (_e.type === Tt.commit_notes) i.addCommitNotes()
            else if (_e.type === Tt.notepad)
              i.insertNotepad({ notepadId: _e.notepadId, uuid: ki.storedKey })
            else if (_e.type === Tt.composer)
              i.insertComposer({ composerId: _e.composerId, uuid: ki.storedKey })
            else if (_e.type === Tt.cursor_rules) {
              i.insertCursorRule({
                filename: _e.cursorRuleFilename,
                uuid: ki.storedKey,
              })
              return
            } else if (_e.type === Tt.diff_review) {
              i.addDiffReview(ki.storedKey)
              return
            } else if (_e.type === Tt.context_picking) {
              i.addContextPicking?.(ki.storedKey)
              return
            } else if (_e.type === Tt.remember_this) {
              i.addRememberThis(ki.storedKey)
              return
            }
          })
      },
      [K, Q] = le(null),
      [se, he] = le(!1),
      [ae, de] = le(0)
    De(() => {
      const _e = K()
      Date.now() - ae() > 100 && he(!1),
        (_e === null || _e === "") && Date.now() - ae() > 100 && n(Tt.none)
    })
    const Ee = Y(() => (r() ? K() : c()) ?? ""),
      ke = {
        queryString: Ee,
        justClickedIntoMenu: se,
        mode: s,
        props: i,
        vsContext: e,
      },
      { symbolOptions: Ae } = kir(ke),
      { fileOptions: Pe } = JXi(ke),
      { docsOptions: ze } = xir(ke),
      { textSearchOptions: at } = Sir(ke),
      { commitOptions: we } = Eir(ke),
      { prOptions: vt } = Nir(ke),
      { diffOptions: lt } = Rir(ke),
      { folderOptions: Xe } = Cir(ke),
      { notepadOptions: Oe } = Iir(ke),
      { composerOptions: Fe } = Tir(ke),
      { cursorRuleOptions: ut } = Pir(ke),
      { autoContextOptions: Ue, autoContextLoading: Ke } = Dir(ke),
      mt = (_e) => (r() ? _e : []),
      { options: Mi, setOptions: qe } = Lir({
        mode: s,
        queryString: Ee,
        fileOptions: Pe,
        symbolOptions: Ae,
        folderOptions: () => mt(Xe()),
        docsOptions: () => mt(ze()),
        textSearchOptions: () => mt(at()),
        commitOptions: () => mt(we()),
        prOptions: () => mt(vt()),
        diffOptions: () => mt(lt()),
        notepadOptions: () => mt(Oe()),
        composerOptions: () => mt(Fe()),
        cursorRuleOptions: () => mt(ut()),
        contextSession: d,
        autoContextOptions: () => mt(Ue()),
        showCommitOptions: () => (r() ? g() : !1),
        autoContextLoading: Ke,
        props: i,
      })
    De(() => {
      if (r()) {
        l(null), i.setGhostText("")
        return
      }
      const _e = c()
      if (_e.length <= 2) {
        l(null), i.setGhostText("")
        return
      }
      const Nt = Mi()
          .sort((ri, dn) => dn.score - ri.score)
          .filter(
            (ri) =>
              ri.name.startsWith(_e) &&
              ri.name.length > _e.length &&
              ri.type !== Tt.staticheading &&
              ri.type !== Tt.toggle_commit_options &&
              ri.type !== Tt.heading &&
              ri.type !== Tt.none &&
              ri.type !== Tt.repo_map &&
              ri.type !== Tt.doc &&
              ri.type !== Tt.web &&
              ri.type !== Tt.recent_changes &&
              ri.type !== Tt.codebase,
          ),
        ni = Nt.length > 0 ? Nt[0] : null
      if (Nt.length === 0 || !ni || ni.name.length === _e.length) {
        i.setGhostText(""), l(null)
        return
      }
      l(ni), i.setGhostText(ni.name.substring(c().length))
    })
    const Be = (_e) => {
      const Nt = qir(_e),
        ni = LY(_e),
        ri = Fue(_e, t),
        dn = XXi(_e)
      return !ri && !ni && !dn && Nt ? Nt : null
    }
    function Ge(_e) {
      if (!Xn(_e) || !_e.isCollapsed()) return [!1, ""]
      const Nt = _e.getNodes()[0],
        ni = _e.anchor
      if (!qn(Nt) || !Nt.isSimpleText() || !qZn(ni)) return [!1, ""]
      const ri = [],
        dn = Nt.getTextContent()
      let xi = Nt.getTextContentSize(),
        Bs
      for (; xi-- && xi >= 0 && (Bs = dn[xi]) !== " "; ) ri.push(Bs)
      return ri.length === 0 ? [!1, ""] : [!0, ri.reverse().join("")]
    }
    let Et = null
    De(() => {
      if (r() || !i.allowGhostTextAtSymbols) {
        i.setGhostText("")
        return
      }
      const _e = i.setGhostText,
        Nt = t.registerUpdateListener(() => {
          t.update(() => {
            const dn = Wr(),
              [xi] = Ge(dn)
            if (!xi) {
              _e("")
              return
            }
            const Bs = BXi(t)
            if (!Bs) return
            const yt = Be(Bs)
            yt && (h(yt.matchingString), (Et = yt))
          })
        })
      function ni() {
        const dn = a()
        if (dn === null) return !1
        const xi = Et ? PXi(Et) : null
        return i.setGhostText(""), H(dn, xi, () => {}), !0
      }
      function ri(dn) {
        return ni() ? (dn.preventDefault(), !0) : !1
      }
      return (
        Gt(gF(t.registerCommand(DG, ri, Xv), t.registerCommand(_xt, ri, Xv))), Nt
      )
    })
    const Bt = (_e) => {
      const Nt = LY(_e),
        ni = Fue(_e, t)
      return !ni && Nt ? Nt : ni
    }
    return (
      De(() => {
        const _e = t.registerUpdateListener(
          ({ editorState: Nt, dirtyElements: ni, prevEditorState: ri }) => {
            ni.size !== 0 &&
              Nt.read(() => {
                const dn = Wr()
                if (!Xn(dn) || !dn.isCollapsed()) return
                const xi = dn.anchor.getNode()
                if (!qn(xi)) return
                const Bs = xi.getTextContent(),
                  yt = Bs[dn.anchor.offset - 1],
                  je = Bs.slice(-2),
                  St = Bs.split(" "),
                  Ie = St[St.length - 1] ?? ""
                yt === "@" || (yt === "/" && Ie.startsWith("@"))
                  ? o("@")
                  : yt === "/" && je !== "@/"
                    ? o("/")
                    : ((yt === " " &&
                        s() !== Tt.auto_context &&
                        s() !== Tt.none) ||
                        yt === void 0) &&
                      o(!1)
              })
          },
        )
        Gt(() => {
          _e()
        })
      }),
      De(() => {
        !i.ghostText() && a() && l(null)
      }),
      I(uXe, {
        onQueryChange: Q,
        onSelectOption: H,
        triggerFn: Bt,
        get options() {
          return Y(() => r() === !1)()
            ? []
            : [...Mi()]
                .sort((_e, Nt) => Nt.score - _e.score)
                .filter((_e) => {
                  const Nt = r() === "/"
                  return (!Nt && !_e.isSlash) || (Nt && _e.isSlash)
                })
        },
        anchorClassName: "lookahead-anchor-element",
        menuRenderFn: bsr,
        get attachToElement() {
          return e.portalElement
        },
        get onOpen() {
          return i.onMentionsMenuOpen
        },
        get onClose() {
          return i.onMentionsMenuClose
        },
      })
    )
  }
  var bsr = (i) => {
    let e
    const s = dt().themeService.getColorTheme(),
      n = s.getColor("editor.foreground"),
      r = s.getColor("editor.background"),
      o = s.getColor("commandCenter.inactiveBorder"),
      [a, l] = le([]),
      [c, h] = le([]),
      [u, d] = le([])
    De(() => {
      const y = i.options
      l(
        y.filter(
          (w) =>
            w.type === Tt.file ||
            w.type === Tt.doc ||
            w.type === Tt.code ||
            w.type === Tt.git_commit ||
            w.type === Tt.git_pr ||
            w.type === Tt.folder ||
            w.type === Tt.git_diff ||
            w.type === Tt.toggle_commit_options ||
            w.type === Tt.link ||
            w.type === Tt.text_search ||
            w.type === Tt.notepad ||
            w.type === Tt.composer ||
            w.type === Tt.cursor_rules ||
            w.type === Tt.auto_context,
        ),
      ),
        h(
          y.filter(
            (w) =>
              w.type === Tt.heading ||
              w.type === Tt.lint ||
              w.type === Tt.current_file ||
              (typeof w.type == "object" &&
                "case" in w.type &&
                w.type.case === "simple_mentions_handler") ||
              w.type === Tt.web ||
              w.type === Tt.recent_changes ||
              w.type === Tt.repo_map ||
              w.type === Tt.codebase ||
              w.type === Tt.commit_notes ||
              w.type === Tt.diff_review ||
              w.type === Tt.context_picking ||
              w.type === Tt.remember_this ||
              w.isSlash,
          ),
        ),
        d(a().length === 0 ? [] : y.filter((w) => w.type === "staticheading"))
    })
    const g = Y(() => (i.selectedIndex === null ? null : a().at(i.selectedIndex)))
    let p
    const m = (y) => {
        const w = { x: y.clientX, y: y.clientY },
          C = p === void 0 || w.x !== p.x || w.y !== p.y
        return (p = w), C
      },
      b = (y, w) =>
        I(ZXi, {
          get index() {
            return w()
          },
          get isSelected() {
            return i.selectedIndex === w()
          },
          onClick: () => {
            y.type !== "staticheading" &&
              (i.setHighlightedIndex(w()), i.selectOptionAndCleanUp(y))
          },
          onMouseEnterOrMove: (C) => {
            y.type !== "staticheading" && m(C) && i.setHighlightedIndex(w())
          },
          option: y,
        })
    return I(dXe, {
      get show() {
        return i.options.length > 0
      },
      get anchorElementRef() {
        return i.anchorElementRef
      },
      get children() {
        return [
          I(te, {
            get when() {
              return g()
            },
            children: (y) =>
              I(hsr, {
                get selectedOption() {
                  return y()
                },
                get selectedIndex() {
                  return i.selectedIndex ?? 0
                },
                optionsListRef: e,
              }),
          }),
          I(te, {
            get when() {
              return (
                Y(() => c().length === 0 && u().length === 0)() &&
                a().length === 0
              )
            },
            get children() {
              var y = nsr()
              return y.style.setProperty("opacity", "0.3"), y
            },
          }),
          (() => {
            var y = rsr(),
              w = e
            return (
              typeof w == "function" ? Rs(w, y) : (e = y),
              M(
                y,
                I(Is, {
                  get each() {
                    return c()
                  },
                  children: (C, S) => b(C, S),
                }),
                null,
              ),
              M(
                y,
                I(Is, {
                  get each() {
                    return u()
                  },
                  children: (C, S) => b(C, () => -1),
                }),
                null,
              ),
              M(
                y,
                I(Is, {
                  get each() {
                    return a()
                  },
                  children: (C, S) =>
                    I(ZXi, {
                      get index() {
                        return S()
                      },
                      get isSelected() {
                        return i.selectedIndex === S()
                      },
                      onClick: () => {
                        C.type !== "staticheading" &&
                          (i.setHighlightedIndex(S()),
                          i.selectOptionAndCleanUp(C))
                      },
                      onMouseEnterOrMove: (x) => {
                        C.type !== "staticheading" &&
                          m(x) &&
                          i.setHighlightedIndex(S())
                      },
                      option: C,
                    }),
                }),
                null,
              ),
              y
            )
          })(),
        ]
      },
    })
  }
  function vsr(i) {
    const e = i.textContent
    return e !== null ? { node: mXe(e, void 0) } : null
  }
  var ysr = "background-color: rgba(24, 119, 232, 0.2)",
    N4t = class n_s extends NG {
      static getType() {
        return "slashCommand"
      }
      static clone(e) {
        return new n_s(e.__command, e.__text, e.__key)
      }
      static importJSON(e) {
        const t = mXe(e.commandName)
        return (
          t.setTextContent(e.text),
          t.setFormat(e.format),
          t.setDetail(e.detail),
          t.setMode(e.mode),
          t.setStyle(e.style),
          e.storedKey !== void 0 && (t.storedKey = e.storedKey),
          t
        )
      }
      constructor(e, t, s) {
        super(t ?? "/" + e, s),
          (this.__command = e),
          (this.storedKey = this.__key)
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          commandName: this.__command,
          type: "slashCommand",
          storedKey: this.storedKey,
          version: 1,
        }
      }
      setContextIntent(e) {
        const t = this.getWritable()
        t.__contextIntent = e
      }
      getContextIntent() {
        return this.getLatest().__contextIntent
      }
      createDOM(e) {
        const t = super.createDOM(e)
        return (
          (t.style.cssText = ysr),
          (t.className = "slashCommand"),
          t.setAttribute("contenteditable", "false"),
          t
        )
      }
      exportDOM() {
        const e = document.createElement("span")
        return (
          e.setAttribute("data-lexical-slashCommand", "true"),
          (e.textContent = this.__text),
          { element: e }
        )
      }
      isSegmented() {
        return !1
      }
      static importDOM() {
        return {
          span: (e) =>
            e.hasAttribute("data-lexical-slashCommand")
              ? { conversion: vsr, priority: 1 }
              : null,
        }
      }
      isTextEntity() {
        return !0
      }
      isToken() {
        return !0
      }
    }
  function mXe(i, e) {
    const t = k4t.includes(i) ? i : "unknown",
      s = new N4t(t, void 0, e)
    return s.setMode("segmented").toggleDirectionless(), s
  }
  var wsr = X("<i>"),
    Csr = new Air(
      "Edit",
      () =>
        (() => {
          var i = wsr()
          return xe(() => tt(i, ie.asClassName($.flame))), i
        })(),
      { case: "base_command", command: "edit" },
      9.7,
    ),
    Ssr = { edit: { typeaheadOption: Csr } },
    xsr = X("<span class=secondary-text>"),
    ksr = X("<li tabindex=-1 role=option><span></span><span class=text>"),
    Esr = X("<ul>"),
    Isr = (i) => {
      const e = Y(() => (i.isSelected ? "item selected" : "item")),
        s = dt().themeService.getColorTheme(),
        n = s.getColor("menu.selectionBackground"),
        r = s.getColor("menu.selectionForeground"),
        o = s.getColor("menu.inactiveSelectionForeground"),
        a = s.getColor("editorOverviewRuler.bracketMatchForeground")
      return (() => {
        var l = ksr(),
          c = l.firstChild,
          h = c.nextSibling
        l.addEventListener("click", () => {
          i.onClick()
        }),
          l.addEventListener("mouseenter", () => {
            i.onMouseEnter()
          })
        var u = i.option.setRefElement
        return (
          typeof u == "function" ? Rs(u, l) : (i.option.setRefElement = l),
          c.style.setProperty("display", "flex"),
          c.style.setProperty("margin-left", "0px"),
          M(c, () => i.option.picture()),
          M(h, () => i.option.name),
          M(
            l,
            I(te, {
              get when() {
                return i.option.secondaryText
              },
              get children() {
                var d = xsr()
                return (
                  M(d, () => i.option.secondaryText),
                  xe((g) =>
                    (g = i.isSelected
                      ? (o?.toString() ?? "")
                      : (a?.toString() ?? "")) != null
                      ? d.style.setProperty("color", g)
                      : d.style.removeProperty("color"),
                  ),
                  d
                )
              },
            }),
            null,
          ),
          xe(
            (d) => {
              var g = e(),
                p = i.isSelected,
                m = "typeahead-item-" + i.index,
                b = {
                  ...(i.isSelected
                    ? {
                        "background-color": n?.toString() ?? "",
                        color: r?.toString() ?? "",
                      }
                    : {}),
                  cursor:
                    i.option.type.case === "staticheading"
                      ? "default"
                      : "pointer",
                },
                y = i.isSelected ? (o?.toString() ?? "") : (a?.toString() ?? "")
              return (
                g !== d.e && tt(l, (d.e = g)),
                p !== d.t && Zn(l, "aria-selected", (d.t = p)),
                m !== d.a && Zn(l, "id", (d.a = m)),
                (d.o = Bi(l, b, d.o)),
                y !== d.i &&
                  ((d.i = y) != null
                    ? c.style.setProperty("color", y)
                    : c.style.removeProperty("color")),
                d
              )
            },
            { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 },
          ),
          l
        )
      })()
    }
  function Dsr(i) {
    const e = dt(),
      [t] = Cu(),
      s = new Map(),
      n = t.registerMutationListener(N4t, (u) => {
        for (let [d, g] of u)
          g === "created"
            ? t.update(() => {
                const p = om(d)
                p && s.set(d, p)
              })
            : g === "destroyed" && s.get(d) && i.removeCommand()
      })
    Gt(() => {
      n()
    })
    const [r, o] = le(null),
      a = Y(() =>
        k4t
          .filter((d) => i.commands.includes(d))
          .map((d) => Ssr[d].typeaheadOption),
      ),
      l = (u) => {
        const d = LY(u),
          g = Fue(u, t)
        return g && !d ? g : null
      },
      c = (u, d, g) => {
        const p = $c("")
        d && (d.select(), d.replace(p)), g(), h(u)
      }
    De(() => {
      if (i.delegate !== void 0) {
        const u = i.delegate.onFireEditNode((d) => {
          t.update(() => {
            const g = mXe("edit"),
              p = $c(" " + d),
              m = tw(),
              b = Vu()
            for (const y of b.getChildren()) y.remove()
            m.append(g, p), b.append(m), i.setCommand("edit")
          })
        })
        Gt(u)
      }
    })
    const h = async (u) => {
      t.update(() => {
        if (u.type.case === "staticheading") return
        const d = mXe(u.type.command),
          g = $c(" ")
        Wr()?.insertNodes([d, g]), i.setCommand(u.type.command)
      })
    }
    return I(uXe, {
      onQueryChange: o,
      onSelectOption: c,
      triggerFn: l,
      get options() {
        return [...a()].sort((u, d) => d.score - u.score)
      },
      anchorClassName: "lookahead-anchor-element",
      menuRenderFn: Tsr,
      get attachToElement() {
        return e.portalElement
      },
    })
  }
  var Tsr = (i) => {
    const e = dt()
    return I(dXe, {
      get show() {
        return i.options.length > 0
      },
      get anchorElementRef() {
        return i.anchorElementRef
      },
      get children() {
        var t = Esr()
        return (
          M(
            t,
            I(Is, {
              get each() {
                return i.options
              },
              children: (s, n) =>
                I(Isr, {
                  get index() {
                    return n()
                  },
                  get isSelected() {
                    return i.selectedIndex === n()
                  },
                  onClick: () => {
                    i.setHighlightedIndex(n()), i.selectOptionAndCleanUp(s)
                  },
                  onMouseEnter: () => {
                    i.setHighlightedIndex(n())
                  },
                  option: s,
                }),
            }),
          ),
          t
        )
      },
    })
  }
  function R4t(i, e, t) {
    ;(async () => {
      const s = await i.arrayBuffer(),
        n = new Uint8Array(s),
        r = Yt.wrap(n),
        o = Kt(
          e.environmentService.workspaceStorageHome,
          "images",
          `${Math.random()}-${i.name}`,
        )
      await e.fileService.writeFile(o, r)
      const a = new Image()
      ;(a.src = Mr.uriToBrowserUri(o).toString()),
        await new Promise(
          (l) =>
            (a.onload = () => {
              const c = a.naturalWidth,
                h = a.naturalHeight
              console.log({ width: c, height: h }),
                t(rt(), {
                  path: o.fsPath,
                  dimension: { width: c, height: h },
                  loadedAt: Date.now(),
                }),
                l()
            }),
        ),
        a.remove()
    })()
  }
  function Psr(i) {
    const [e] = Cu(),
      t = dt()
    return (
      De(() => {
        const s = i.addImage
        if (!s) return
        const n = e.registerCommand(
          oae,
          (r) => {
            if (r.clipboardData && r.clipboardData.items) {
              const o = r.clipboardData.items
              for (let a = 0; a < o.length; a++)
                if (o[a].type.indexOf("image") !== -1) {
                  const l = o[a].getAsFile()
                  return l ? (R4t(l, t, s), !0) : !1
                }
            }
            return !1
          },
          fI,
        )
        Gt(() => {
          n()
        })
      }),
      null
    )
  }
  function Lsr(i) {
    const [e] = Cu(),
      t = dt()
    return (
      De(() => {
        const s = i.addImage
        if (!s) return
        const n = e.registerCommand(
            dWe,
            (o) => {
              const a = Array.from(o.dataTransfer?.files || [])[0]
              return !a || !a?.type.startsWith("image")
                ? !1
                : (o.preventDefault(),
                  o.stopPropagation(),
                  o.stopImmediatePropagation(),
                  R4t(a, t, s),
                  !0)
            },
            Xv,
          ),
          r = e.registerCommand(
            cOi,
            (o) => (o.dataTransfer && (o.dataTransfer.dropEffect = "copy"), !0),
            fI,
          )
        Gt(() => {
          n(), r()
        })
      }),
      null
    )
  }
  var eQi = rt(),
    A4t = class r_s extends IOi {
      static clone(e) {
        return new r_s(e.__uuid, e.__key)
      }
      static getType() {
        return "ghosttext"
      }
      static importJSON(e) {
        return tQi(e.uuid, e.text)
      }
      exportJSON() {
        return {
          type: "ghosttext",
          uuid: this.__uuid,
          version: 1,
          text: this.__text,
        }
      }
      constructor(e, t, s) {
        super(s), (this.__uuid = e), (this.__text = t)
      }
      updateDOM(e, t, s) {
        return !1
      }
      createDOM(e) {
        const t = document.createElement("span")
        return (
          (t.style.color = "var(--vscode-editorGhostText-foreground)"),
          (t.textContent = this.__text),
          t
        )
      }
      decorate(e, t) {
        return null
      }
    }
  function tQi(i, e) {
    return new A4t(i, e)
  }
  function Nsr(i) {
    const [e] = Cu()
    let t = null
    const s = () => {
        const r = t !== null ? om(t) : null
        r !== null && r.isAttached() && (r.remove(), (t = null))
      },
      n = (r) => {
        if (!r) return
        const o = Wr()
        if (!Xn(o)) return
        const a = o.clone()
        t !== null && om(t)?.remove()
        const l = tQi(eQi, r)
        ;(t = l.getKey()), o.insertNodes([l]), eR(a)
      }
    return (
      De(() => {
        const r = i.ghostText()
        if (r)
          e.update(() => {
            n(r)
          })
        else {
          e.update(() => {
            s()
          })
          return
        }
      }),
      De(() => {
        nr(() => {
          e.update(() => {
            s()
          })
        })
      }),
      De(() => {
        function r(a) {
          const l = a.getKey()
          a.__uuid === eQi && l !== t && s()
        }
        function o() {
          e.update(() => {
            s()
          })
        }
        Gt(gF(e.registerNodeTransform(A4t, r), o))
      }),
      null
    )
  }
  var Rsr = X("<span><span>"),
    Asr = X("<span class=sizePreview> "),
    Msr = X("<li tabindex=-1 role=option><span></span><span>"),
    $sr = X(
      "<div id=mention-selection-preview><div><div><div class=file-preview-container><div></div><span>",
    ),
    Fsr = X("<div><span><span>"),
    Osr = X("<div>"),
    Bsr = X("<div id=mention-selection-preview>"),
    _sr = X("<ul>"),
    Usr = (i) => {
      const e = Y(() => (i.isSelected ? "item selected" : "item")),
        s = dt().themeService.getColorTheme(),
        n = s.getColor("menu.selectionBackground"),
        r = s.getColor("menu.selectionForeground"),
        o = s.getColor("menu.inactiveSelectionForeground"),
        a = s.getColor("editorOverviewRuler.bracketMatchForeground"),
        l = (d) => {
          if (typeof d == "string") return d
          const g = d / 4,
            p = [
              [1e6, "M toks"],
              [1e3, "K toks"],
              [1, " toks"],
            ],
            [m, b] = p.find((C) => C[0] < g) ?? p[p.length - 1]
          return `${(Math.round(g / m) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${b}`
        },
        [c, { refetch: h }] = a$(() => i.option.sizeBytes),
        u = Y(() =>
          c.loading || c.error || c() === void 0 ? "" : "(" + l(c() ?? 0) + ")",
        )
      return (() => {
        var d = Msr(),
          g = d.firstChild,
          p = g.nextSibling
        d.addEventListener("click", () => {
          i.onClick()
        }),
          d.addEventListener("mouseenter", () => {
            i.onMouseEnter()
          })
        var m = i.option.setRefElement
        return (
          typeof m == "function" ? Rs(m, d) : (i.option.setRefElement = d),
          g.style.setProperty("display", "flex"),
          M(
            g,
            (() => {
              var b = Y(() => typeof i.option.picture == "function")
              return () => (b() ? i.option.picture() : i.option.picture)
            })(),
          ),
          M(p, () => i.option.name),
          M(
            d,
            I(te, {
              get when() {
                return i.option.secondaryText
              },
              get children() {
                return [
                  (() => {
                    var b = Rsr(),
                      y = b.firstChild
                    return (
                      y.style.setProperty("direction", "ltr"),
                      y.style.setProperty("unicode-bidi", "embed"),
                      M(y, () => i.option.secondaryText),
                      xe(
                        (w) => {
                          var C =
                              "secondary-text" +
                              (i.option.type === "staticheading"
                                ? " heading"
                                : ""),
                            S = i.isSelected
                              ? (o?.toString() ?? "")
                              : (a?.toString() ?? "")
                          return (
                            C !== w.e && tt(b, (w.e = C)),
                            S !== w.t &&
                              ((w.t = S) != null
                                ? b.style.setProperty("color", S)
                                : b.style.removeProperty("color")),
                            w
                          )
                        },
                        { e: void 0, t: void 0 },
                      ),
                      b
                    )
                  })(),
                  I(te, {
                    get when() {
                      return i.option.sizeBytes !== void 0
                    },
                    get children() {
                      var b = Asr(),
                        y = b.firstChild
                      return M(b, u, null), b
                    },
                  }),
                ]
              },
            }),
            null,
          ),
          xe(
            (b) => {
              var y = e(),
                w = i.isSelected,
                C = "typeahead-item-" + i.index,
                S = {
                  ...(i.isSelected
                    ? {
                        "background-color": n?.toString() ?? "",
                        color: r?.toString() ?? "",
                      }
                    : {}),
                  cursor:
                    i.option.type === "staticheading" ? "default" : "pointer",
                },
                x = i.isSelected ? (o?.toString() ?? "") : (a?.toString() ?? ""),
                k =
                  (i.option.type === "heading" ||
                    i.option.type === "staticheading",
                  "0px"),
                E = "text" + (i.option.type === "staticheading" ? " heading" : "")
              return (
                y !== b.e && tt(d, (b.e = y)),
                w !== b.t && Zn(d, "aria-selected", (b.t = w)),
                C !== b.a && Zn(d, "id", (b.a = C)),
                (b.o = Bi(d, S, b.o)),
                x !== b.i &&
                  ((b.i = x) != null
                    ? g.style.setProperty("color", x)
                    : g.style.removeProperty("color")),
                k !== b.n &&
                  ((b.n = k) != null
                    ? g.style.setProperty("margin-left", k)
                    : g.style.removeProperty("margin-left")),
                E !== b.s && tt(p, (b.s = E)),
                b
              )
            },
            {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
            },
          ),
          d
        )
      })()
    },
    Hsr = (i) => {
      const [n, r] = le(),
        [o, a] = le(),
        l = dt()
      De(async () => {
        if (i.selectedOption.type === "file") {
          r(void 0)
          const p = i.selectedOption.selectionPrecursor?.uri.fsPath
          if (!p) return
          const m = await l.everythingProviderService.provider?.runCommand(
            zoe.GetDirectory,
            { fsPath: p },
          )
          if (!m) {
            a(void 0)
            return
          }
          const b = l.workspaceContextService.asRelativePath(U.file(p)),
            y = bs(b),
            w = b.replace(y, "")
          a({ basePath: w, relativeWorkspacePath: b, neighboringFiles: m })
          return
        }
        a(void 0)
        const g = await Oue(i.selectedOption, l)
        if (
          g.type === da.Failure ||
          g.type === da.None ||
          g.type === da.Image ||
          g.type === da.Folder ||
          g.type === da.Docs ||
          g.type === da.CursorRule ||
          i.selectedOption.type !== Tt.code
        ) {
          r(void 0)
          return
        }
        if (g.type === da.File) {
          const p = await rJ(
            l.textModelService,
            l.dataScrubbingService,
            g.selectionWithoutUuid,
          )
          r(p)
          return
        }
        r(g.selectionWithoutUuid)
      })
      const [c, h] = le({ top: i.selectedIndex * 24, right: -454 })
      De(() => {
        const g = o() ? 300 : 450
        let p = i.selectedIndex * 24,
          m = -(g + 4)
        const b = i.optionsListRef?.getBoundingClientRect()
        if (!b) return
        b.right - m > l.window.document.body.clientWidth && (m = b.width + 4),
          h({ top: p, right: m }),
          l.window.requestIdleCallback(() => {
            const C = l.window.document
              .getElementById("mention-selection-preview")
              ?.getBoundingClientRect()
            if (!C) return
            const x = b.top + p + C.height - l.window.document.body.clientHeight
            x > 0 && (p -= x + 4), h({ top: p, right: m })
          })
      }, [i.selectedIndex])
      const u = Y(
          () =>
            o()
              ?.basePath.split("/")
              .filter((g) => !!g.trim()) ?? [],
        ),
        d = 14
      return [
        I(te, {
          get when() {
            return o()
          },
          children: (g) =>
            (() => {
              var p = $sr(),
                m = p.firstChild,
                b = m.firstChild,
                y = b.firstChild,
                w = y.firstChild,
                C = w.nextSibling
              return (
                p.style.setProperty("width", "300px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                p.style.setProperty("overflow", "hidden"),
                p.style.setProperty("font-size", "11px"),
                m.style.setProperty(
                  "background-color",
                  "var(--vscode-editor-background)",
                ),
                m.style.setProperty(
                  "border",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                m.style.setProperty("border-radius", "3px"),
                m.style.setProperty("display", "flex"),
                m.style.setProperty("flex-direction", "column"),
                m.style.setProperty("gap", "2px"),
                m.style.setProperty("position", "relative"),
                m.style.setProperty("overflow", "hidden"),
                b.style.setProperty("display", "flex"),
                b.style.setProperty("flex-direction", "column"),
                b.style.setProperty("gap", "4px"),
                b.style.setProperty("padding", "0.25rem 0.4rem"),
                M(
                  b,
                  I(Is, {
                    get each() {
                      return u()
                    },
                    children: (S, x) =>
                      (() => {
                        var k = Fsr(),
                          E = k.firstChild,
                          D = E.firstChild
                        return (
                          k.style.setProperty("display", "flex"),
                          k.style.setProperty("align-items", "center"),
                          k.style.setProperty("overflow", "hidden"),
                          k.style.setProperty("text-overflow", "ellipsis"),
                          k.style.setProperty("white-space", "nowrap"),
                          M(
                            k,
                            I(Is, {
                              get each() {
                                return Array(x())
                              },
                              children: (P) =>
                                (() => {
                                  var L = Osr()
                                  return (
                                    L.style.setProperty("margin-left", "14px"),
                                    L.style.setProperty(
                                      "border-left",
                                      "1px solid var(--vscode-commandCenter-inactiveBorder)",
                                    ),
                                    L.style.setProperty(
                                      "display",
                                      "inline-block",
                                    ),
                                    L
                                  )
                                })(),
                            }),
                            E,
                          ),
                          E.style.setProperty("display", "flex"),
                          E.style.setProperty("align-items", "center"),
                          E.style.setProperty("gap", "4px"),
                          E.style.setProperty("overflow", "hidden"),
                          E.style.setProperty("text-overflow", "ellipsis"),
                          E.style.setProperty("white-space", "nowrap"),
                          M(E, S, null),
                          xe(
                            (P) => {
                              var L = x() === u().length - 1 ? 1 : 0.5,
                                A = "calc(100% - " + d * x() + "px)",
                                F = ie.asClassName($.folder)
                              return (
                                L !== P.e &&
                                  ((P.e = L) != null
                                    ? E.style.setProperty("opacity", L)
                                    : E.style.removeProperty("opacity")),
                                A !== P.t &&
                                  ((P.t = A) != null
                                    ? E.style.setProperty("max-width", A)
                                    : E.style.removeProperty("max-width")),
                                F !== P.a && tt(D, (P.a = F)),
                                P
                              )
                            },
                            { e: void 0, t: void 0, a: void 0 },
                          ),
                          k
                        )
                      })(),
                  }),
                  y,
                ),
                y.style.setProperty("display", "flex"),
                y.style.setProperty("align-items", "center"),
                y.style.setProperty("overflow", "hidden"),
                y.style.setProperty("text-overflow", "ellipsis"),
                y.style.setProperty("white-space", "nowrap"),
                w.style.setProperty(
                  "border-left",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                w.style.setProperty("display", "inline-block"),
                C.style.setProperty("display", "flex"),
                C.style.setProperty("align-items", "center"),
                C.style.setProperty("gap", "4px"),
                C.style.setProperty("overflow", "hidden"),
                C.style.setProperty("text-overflow", "ellipsis"),
                C.style.setProperty("white-space", "nowrap"),
                M(
                  C,
                  I(hl, {
                    get fileName() {
                      return bs(g().relativeWorkspacePath)
                    },
                    get workspaceContextService() {
                      return l.workspaceContextService
                    },
                    get modelService() {
                      return l.modelService
                    },
                    get languageService() {
                      return l.languageService
                    },
                  }),
                  null,
                ),
                M(C, () => bs(g().relativeWorkspacePath), null),
                xe(
                  (S) => {
                    var x = c().top + "px",
                      k = c().right + "px",
                      E = d * u().length + "px"
                    return (
                      x !== S.e &&
                        ((S.e = x) != null
                          ? p.style.setProperty("top", x)
                          : p.style.removeProperty("top")),
                      k !== S.t &&
                        ((S.t = k) != null
                          ? p.style.setProperty("right", k)
                          : p.style.removeProperty("right")),
                      E !== S.a &&
                        ((S.a = E) != null
                          ? w.style.setProperty("margin-left", E)
                          : w.style.removeProperty("margin-left")),
                      S
                    )
                  },
                  { e: void 0, t: void 0, a: void 0 },
                ),
                p
              )
            })(),
        }),
        I(te, {
          get when() {
            return n()
          },
          children: (g) =>
            (() => {
              var p = Bsr()
              return (
                p.style.setProperty("width", "450px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                M(p, () => L4t(g(), l)),
                xe(
                  (m) => {
                    var b = c().top + "px",
                      y = c().right + "px"
                    return (
                      b !== m.e &&
                        ((m.e = b) != null
                          ? p.style.setProperty("top", b)
                          : p.style.removeProperty("top")),
                      y !== m.t &&
                        ((m.t = y) != null
                          ? p.style.setProperty("right", y)
                          : p.style.removeProperty("right")),
                      m
                    )
                  },
                  { e: void 0, t: void 0 },
                ),
                p
              )
            })(),
        }),
      ]
    }
  function Vsr(i) {
    const e = dt(),
      [t] = Cu(),
      [s, n] = le(null),
      r = {
        ...I7,
        ghostText: () => "",
        isLongContextMode: !1,
        insertTextSearch: () => {},
        selectedTextSearches: [],
        supportsGit: !1,
        supportsCommitNotes: !1,
        supportsWeb: !1,
        supportsFolderSelections: !1,
        supportsLint: !1,
        supportsCodebase: !1,
        supportsLink: !1,
        recentFiles: new Set(),
        setGhostText: () => {},
        showErrorMessage: () => {},
      },
      [o, a] = le(!1),
      c = {
        queryString: Y(() => (o() ? s() : "")),
        justClickedIntoMenu: () => !1,
        mode: () => Tt.file,
        props: r,
        vsContext: e,
      },
      { fileOptions: h, setFileOptions: u } = JXi(c),
      d = Y(() => (o() ? [...h()].sort((y, w) => w.score - y.score) : [])),
      g = (y) => {
        const w = LY(y),
          C = Fue(y, t),
          S = XXi(y)
        return S && !C && !w ? S : null
      },
      p = t.registerCommand(
        ZB,
        (y) => (o() && d().length > 0 ? (a(!1), u([]), !0) : !1),
        fI,
      )
    Gt(() => {
      p()
    }),
      De(() => {
        const y = t.registerUpdateListener(
          ({ editorState: w, dirtyElements: C, prevEditorState: S }) => {
            C.size !== 0 &&
              w.read(() => {
                const x = Wr()
                if (!Xn(x) || !x.isCollapsed()) return
                const k = x.anchor.getNode()
                if (!qn(k)) return
                k.getTextContent()[x.anchor.offset - 1] === "#" && a(!0)
              })
          },
        )
        Gt(() => {
          y()
        })
      })
    const m = (y, w, C) => {
        w && (w.select(), w.remove()), C(), b(y)
      },
      b = async (y) => {
        const w = await Oue(y, e)
        if (w.type === da.File) {
          const C = { ...w.selectionWithoutUuid, collapseByDefault: !1 }
          i.addFile && i.addFile(U.revive(C.uri))
        }
      }
    return I(uXe, {
      onQueryChange: n,
      onSelectOption: m,
      triggerFn: g,
      get options() {
        return Y(() => !!o())() ? d() : []
      },
      anchorClassName: "lookahead-anchor-element",
      menuRenderFn: Wsr,
      get attachToElement() {
        return e.portalElement
      },
    })
  }
  var Wsr = (i) => {
      let e
      const [t, s] = le(null)
      return (
        De(() => {
          s(i.selectedIndex === null ? null : i.options[i.selectedIndex])
        }),
        I(dXe, {
          get show() {
            return i.options.length > 0
          },
          get anchorElementRef() {
            return i.anchorElementRef
          },
          get children() {
            return [
              I(te, {
                get when() {
                  return t()
                },
                children: (n) =>
                  I(Hsr, {
                    get selectedOption() {
                      return n()
                    },
                    get selectedIndex() {
                      return i.selectedIndex ?? 0
                    },
                    optionsListRef: e,
                  }),
              }),
              (() => {
                var n = _sr(),
                  r = e
                return (
                  typeof r == "function" ? Rs(r, n) : (e = n),
                  M(
                    n,
                    I(Is, {
                      get each() {
                        return i.options
                      },
                      children: (o, a) =>
                        I(Usr, {
                          get index() {
                            return a()
                          },
                          get isSelected() {
                            return i.selectedIndex === a()
                          },
                          onClick: () => {
                            i.setHighlightedIndex(a()),
                              i.selectOptionAndCleanUp(o)
                          },
                          onMouseEnter: () => {
                            i.setHighlightedIndex(a())
                          },
                          option: o,
                        }),
                    }),
                  ),
                  n
                )
              })(),
            ]
          },
        })
      )
    },
    qsr = X("<span class=secondary-text>"),
    jsr = X("<span>View "),
    zsr = X("<i>"),
    Gsr = X("<span>"),
    Jsr = X("<li tabindex=-1 role=option><span></span><span class=text>"),
    Ksr = X("<div id=mention-selection-preview><div><div><div></div><span>"),
    Ysr = X("<div><span><span>"),
    Xsr = X("<div>"),
    Qsr = X("<div id=mention-selection-preview>"),
    Zsr = X("<ul>"),
    iQi = 10,
    enr = 10,
    tnr = (i) => {
      const e = Y(() => (i.isSelected ? "item selected" : "item")),
        s = dt().themeService.getColorTheme(),
        n = s.getColor("menu.selectionBackground"),
        r = s.getColor("menu.selectionForeground"),
        o = s.getColor("menu.inactiveSelectionForeground"),
        a = s.getColor("editorOverviewRuler.bracketMatchForeground")
      return (() => {
        var l = Jsr(),
          c = l.firstChild,
          h = c.nextSibling
        l.addEventListener("click", () => {
          i.onClick()
        }),
          l.addEventListener("mouseenter", () => {
            i.onMouseEnter()
          })
        var u = i.option.setRefElement
        return (
          typeof u == "function" ? Rs(u, l) : (i.option.setRefElement = l),
          c.style.setProperty("display", "flex"),
          M(
            c,
            (() => {
              var d = Y(() => typeof i.option.picture == "function")
              return () => (d() ? i.option.picture() : i.option.picture)
            })(),
          ),
          M(h, () => i.option.name),
          M(
            l,
            I(te, {
              get when() {
                return i.option.secondaryText
              },
              get children() {
                var d = qsr()
                return (
                  M(d, () => i.option.secondaryText),
                  xe((g) =>
                    (g = i.isSelected
                      ? (o?.toString() ?? "")
                      : (a?.toString() ?? "")) != null
                      ? d.style.setProperty("color", g)
                      : d.style.removeProperty("color"),
                  ),
                  d
                )
              },
            }),
            null,
          ),
          M(
            l,
            I(te, {
              get when() {
                return i.option.type === Tt.file && i.isSelected
              },
              get children() {
                var d = jsr(),
                  g = d.firstChild
                return (
                  d.style.setProperty("margin-left", "auto"),
                  d.style.setProperty("padding-left", "6px"),
                  d.style.setProperty("justify-self", "flex-end"),
                  d.style.setProperty("opacity", "0.7"),
                  d.style.setProperty("font-size", "90%"),
                  d.style.setProperty("flex-shrink", "0"),
                  M(d, wt ? "\u2325\u21B5" : "Alt+\u21B5", null),
                  xe((p) =>
                    (p = i.isSelected
                      ? (o?.toString() ?? "")
                      : (a?.toString() ?? "")) != null
                      ? d.style.setProperty("color", p)
                      : d.style.removeProperty("color"),
                  ),
                  d
                )
              },
            }),
            null,
          ),
          M(
            l,
            I(te, {
              get when() {
                return i.option.type === "heading"
              },
              get children() {
                var d = zsr()
                return xe(() => tt(d, ie.asClassName($.arrowRight))), d
              },
            }),
            null,
          ),
          M(
            l,
            I(te, {
              get when() {
                return i.option.onSettingClick !== void 0
              },
              get children() {
                var d = Gsr()
                return (
                  d.addEventListener("click", (g) => {
                    g.stopPropagation(),
                      i.option.onSettingClick && i.option?.onSettingClick()
                  }),
                  d.style.setProperty("margin-left", "auto"),
                  xe(() => tt(d, ie.asClassName($.settingsGear))),
                  d
                )
              },
            }),
            null,
          ),
          xe(
            (d) => {
              var g = e(),
                p = i.isSelected,
                m = "typeahead-item-" + i.index,
                b = {
                  ...(i.isSelected
                    ? {
                        "background-color": n?.toString() ?? "",
                        color: r?.toString() ?? "",
                      }
                    : {}),
                  cursor:
                    i.option.type === "staticheading" ? "default" : "pointer",
                },
                y = i.isSelected ? (o?.toString() ?? "") : (a?.toString() ?? ""),
                w =
                  (i.option.type === "heading" ||
                    i.option.type === "staticheading",
                  "0px")
              return (
                g !== d.e && tt(l, (d.e = g)),
                p !== d.t && Zn(l, "aria-selected", (d.t = p)),
                m !== d.a && Zn(l, "id", (d.a = m)),
                (d.o = Bi(l, b, d.o)),
                y !== d.i &&
                  ((d.i = y) != null
                    ? c.style.setProperty("color", y)
                    : c.style.removeProperty("color")),
                w !== d.n &&
                  ((d.n = w) != null
                    ? c.style.setProperty("margin-left", w)
                    : c.style.removeProperty("margin-left")),
                d
              )
            },
            { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 },
          ),
          l
        )
      })()
    },
    inr = (i) => {
      const [n, r] = le(),
        [o, a] = le(),
        l = dt()
      De(async () => {
        if (i.selectedOption.type === "file") {
          r(void 0)
          const p = i.selectedOption.selectionPrecursor?.uri.fsPath
          if (!p) return
          const m = await l.everythingProviderService.provider?.runCommand(
            zoe.GetDirectory,
            { fsPath: p },
          )
          if (!m) {
            a(void 0)
            return
          }
          const b = l.workspaceContextService.asRelativePath(U.file(p)),
            y = bs(b),
            w = b.replace(y, "")
          a({ basePath: w, relativeWorkspacePath: b, neighboringFiles: m })
          return
        }
        a(void 0)
        const g = await Oue(i.selectedOption, l)
        if (
          g.type === da.Failure ||
          g.type === da.None ||
          g.type === da.Image ||
          g.type === da.Folder ||
          g.type === da.Docs ||
          g.type === da.CursorRule ||
          i.selectedOption.type !== Tt.code
        ) {
          r(void 0)
          return
        }
        if (g.type === da.File) {
          const p = await rJ(
            l.textModelService,
            l.dataScrubbingService,
            g.selectionWithoutUuid,
          )
          r(p)
          return
        }
        r(g.selectionWithoutUuid)
      })
      const [c, h] = le({ top: i.selectedIndex * 24, right: -454 })
      De(() => {
        const g = o() ? 300 : 450
        let p = i.selectedIndex * 24,
          m = -(g + 4)
        const b = i.optionsListRef?.getBoundingClientRect()
        if (!b) return
        b.right - m > l.window.document.body.clientWidth && (m = b.width + 4),
          h({ top: p, right: m }),
          l.window.requestIdleCallback(() => {
            const C = l.window.document
              .getElementById("mention-selection-preview")
              ?.getBoundingClientRect()
            if (!C) return
            const x = b.top + p + C.height - l.window.document.body.clientHeight
            x > 0 && (p -= x + 4), h({ top: p, right: m })
          })
      }, [i.selectedIndex])
      const u = Y(
          () =>
            o()
              ?.basePath.split("/")
              .filter((g) => !!g.trim()) ?? [],
        ),
        d = 14
      return [
        I(te, {
          get when() {
            return o()
          },
          children: (g) =>
            (() => {
              var p = Ksr(),
                m = p.firstChild,
                b = m.firstChild,
                y = b.firstChild,
                w = y.nextSibling
              return (
                p.style.setProperty("width", "300px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                p.style.setProperty("overflow", "hidden"),
                m.style.setProperty(
                  "background-color",
                  "var(--vscode-editor-background)",
                ),
                m.style.setProperty(
                  "border",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                m.style.setProperty("border-radius", "2px"),
                m.style.setProperty("display", "flex"),
                m.style.setProperty("flex-direction", "column"),
                m.style.setProperty("gap", "4px"),
                m.style.setProperty("position", "relative"),
                m.style.setProperty("overflow", "hidden"),
                m.style.setProperty("padding", "0.5rem"),
                M(
                  m,
                  I(Is, {
                    get each() {
                      return u()
                    },
                    children: (C, S) =>
                      (() => {
                        var x = Ysr(),
                          k = x.firstChild,
                          E = k.firstChild
                        return (
                          x.style.setProperty("display", "flex"),
                          x.style.setProperty("align-items", "center"),
                          x.style.setProperty("overflow", "hidden"),
                          x.style.setProperty("text-overflow", "ellipsis"),
                          x.style.setProperty("white-space", "nowrap"),
                          M(
                            x,
                            I(Is, {
                              get each() {
                                return Array(S())
                              },
                              children: (D) =>
                                (() => {
                                  var P = Xsr()
                                  return (
                                    P.style.setProperty("margin-left", "14px"),
                                    P.style.setProperty(
                                      "border-left",
                                      "1px solid var(--vscode-commandCenter-inactiveBorder)",
                                    ),
                                    P.style.setProperty(
                                      "display",
                                      "inline-block",
                                    ),
                                    P
                                  )
                                })(),
                            }),
                            k,
                          ),
                          k.style.setProperty("display", "flex"),
                          k.style.setProperty("align-items", "center"),
                          k.style.setProperty("gap", "4px"),
                          k.style.setProperty("overflow", "hidden"),
                          k.style.setProperty("text-overflow", "ellipsis"),
                          k.style.setProperty("white-space", "nowrap"),
                          M(k, C, null),
                          xe(
                            (D) => {
                              var P = S() === u().length - 1 ? 1 : 0.5,
                                L = "calc(100% - " + d * S() + "px)",
                                A = ie.asClassName($.folder)
                              return (
                                P !== D.e &&
                                  ((D.e = P) != null
                                    ? k.style.setProperty("opacity", P)
                                    : k.style.removeProperty("opacity")),
                                L !== D.t &&
                                  ((D.t = L) != null
                                    ? k.style.setProperty("max-width", L)
                                    : k.style.removeProperty("max-width")),
                                A !== D.a && tt(E, (D.a = A)),
                                D
                              )
                            },
                            { e: void 0, t: void 0, a: void 0 },
                          ),
                          x
                        )
                      })(),
                  }),
                  b,
                ),
                b.style.setProperty("display", "flex"),
                b.style.setProperty("align-items", "center"),
                b.style.setProperty("overflow", "hidden"),
                b.style.setProperty("text-overflow", "ellipsis"),
                b.style.setProperty("white-space", "nowrap"),
                y.style.setProperty(
                  "border-left",
                  "1px solid var(--vscode-commandCenter-inactiveBorder)",
                ),
                y.style.setProperty("display", "inline-block"),
                w.style.setProperty("display", "flex"),
                w.style.setProperty("align-items", "center"),
                w.style.setProperty("gap", "4px"),
                w.style.setProperty("overflow", "hidden"),
                w.style.setProperty("text-overflow", "ellipsis"),
                w.style.setProperty("white-space", "nowrap"),
                M(
                  w,
                  I(hl, {
                    get fileName() {
                      return bs(g().relativeWorkspacePath)
                    },
                    get workspaceContextService() {
                      return l.workspaceContextService
                    },
                    get modelService() {
                      return l.modelService
                    },
                    get languageService() {
                      return l.languageService
                    },
                  }),
                  null,
                ),
                M(w, () => bs(g().relativeWorkspacePath), null),
                xe(
                  (C) => {
                    var S = c().top + "px",
                      x = c().right + "px",
                      k = d * u().length + "px"
                    return (
                      S !== C.e &&
                        ((C.e = S) != null
                          ? p.style.setProperty("top", S)
                          : p.style.removeProperty("top")),
                      x !== C.t &&
                        ((C.t = x) != null
                          ? p.style.setProperty("right", x)
                          : p.style.removeProperty("right")),
                      k !== C.a &&
                        ((C.a = k) != null
                          ? y.style.setProperty("margin-left", k)
                          : y.style.removeProperty("margin-left")),
                      C
                    )
                  },
                  { e: void 0, t: void 0, a: void 0 },
                ),
                p
              )
            })(),
        }),
        I(te, {
          get when() {
            return n()
          },
          children: (g) =>
            (() => {
              var p = Qsr()
              return (
                p.style.setProperty("width", "450px"),
                p.style.setProperty("border-radius", "2px"),
                p.style.setProperty("position", "absolute"),
                M(p, () => L4t(g(), l)),
                xe(
                  (m) => {
                    var b = c().top + "px",
                      y = c().right + "px"
                    return (
                      b !== m.e &&
                        ((m.e = b) != null
                          ? p.style.setProperty("top", b)
                          : p.style.removeProperty("top")),
                      y !== m.t &&
                        ((m.t = y) != null
                          ? p.style.setProperty("right", y)
                          : p.style.removeProperty("right")),
                      m
                    )
                  },
                  { e: void 0, t: void 0 },
                ),
                p
              )
            })(),
        }),
      ]
    },
    snr = (i) => {
      let e
      const [t, s] = le(null)
      return (
        De(() => {
          s(i.selectedIndex === null ? null : i.options[i.selectedIndex])
        }),
        I(dXe, {
          get show() {
            return i.options.length > 0
          },
          get anchorElementRef() {
            return i.anchorElementRef
          },
          get children() {
            return [
              I(te, {
                get when() {
                  return t()
                },
                children: (n) =>
                  I(inr, {
                    get selectedOption() {
                      return n()
                    },
                    get selectedIndex() {
                      return i.selectedIndex ?? 0
                    },
                    optionsListRef: e,
                  }),
              }),
              (() => {
                var n = Zsr(),
                  r = e
                return (
                  typeof r == "function" ? Rs(r, n) : (e = n),
                  n.style.setProperty("list-style", "none"),
                  n.style.setProperty("margin", "0"),
                  n.style.setProperty("padding", "0"),
                  M(
                    n,
                    I(Is, {
                      get each() {
                        return i.options
                      },
                      children: (o, a) =>
                        I(tnr, {
                          get index() {
                            return a()
                          },
                          option: o,
                          get isSelected() {
                            return i.selectedIndex === a()
                          },
                          onClick: () => {
                            i.setHighlightedIndex(a()),
                              i.selectOptionAndCleanUp(o)
                          },
                          onMouseEnter: () => i.setHighlightedIndex(a()),
                        }),
                    }),
                  ),
                  n
                )
              })(),
            ]
          },
        })
      )
    }
  function nnr(i) {
    const e = dt(),
      [t] = Cu(),
      [s, n] = le(null),
      [r, o] = le(!1),
      [a, l] = le(iQi),
      c = Y(() => i.excludeFiles ?? []),
      { options: h, isLoading: u } = qXi(s, {
        resultsLimit: a,
        excludeFiles: c,
        showLoadMore: !0,
        showLoading: !0,
        disabled: () => !r(),
      })
    De(() => {
      r() || l(iQi)
    })
    const d = (p, m, b, y, w) => {
        if (w?.altKey && p.selectionPrecursor?.uri) {
          const C = p.selectionPrecursor.uri,
            S = e.workspaceContextService.resolveRelativePath(C.path)
          aLt({
            uri: S,
            fileService: e.fileService,
            editorService: e.editorService,
            editorGroupsService: e.editorGroupService,
          })
          return
        }
        if (p.type === Tt.heading && p.isLoadMore) {
          l((C) => C + enr)
          return
        }
        m && (m.select(), m.remove()),
          i.addFile &&
            p.selectionPrecursor?.uri &&
            i.addFile(p.selectionPrecursor.uri),
          b()
      },
      g = t.registerCommand(
        ZB,
        (p) => (r() && h().length > 0 ? (o(!1), !0) : !1),
        fI,
      )
    return (
      Gt(() => {
        g()
      }),
      I(uXe, {
        onQueryChange: n,
        onSelectOption: d,
        triggerFn: (p) => {
          const m = LY(p),
            b = Fue(p, t),
            y = jir(p),
            w = y && !b && !m ? y : null
          return w ? (o(!0), w) : (o(!1), null)
        },
        get options() {
          return h()
        },
        anchorClassName: "lookahead-anchor-element",
        menuRenderFn: snr,
        get attachToElement() {
          return e.portalElement
        },
      })
    )
  }
  var rnr = X("<div><div class=aislash-editor-placeholder>"),
    onr = X("<div><div>"),
    PH = () => ({
      onError(e) {
        throw e
      },
      nodes: [Aue, N4t, A4t],
    })
  function sQi(i) {
    const [e, t] = i1(i, ["onSubmit"])
    return I(
      Bue,
      tn(
        I7,
        {
          readonly: !1,
          useArrowsForHistory: !1,
          supportsGit: !1,
          supportsCommitNotes: !1,
          supportsLint: !1,
          supportsCodebase: !1,
          supportsLink: !1,
          supportsFolderSelections: !1,
          supportsWeb: !1,
          showDocs: !1,
          atMentionsDisabled: !0,
          isLongContextMode: !1,
          source: "simple_input_box",
          editorConfig: () => ({
            ...PH(),
            namespace: "simple-input-box",
            onError: (s) => {
              console.error(s)
            },
          }),
          get onSubmit() {
            return e.onSubmit
          },
        },
        t,
      ),
    )
  }
  var Bue = (i) => {
    const e = "0 0.5rem 0 0.5rem"
    function t() {
      return (() => {
        var m = rnr(),
          b = m.firstChild
        return (
          m.style.setProperty("grid-area", "1 / 2 / 1 / 2"),
          M(b, () => i.placeholder),
          xe((y) =>
            Bi(
              b,
              {
                position: "relative",
                top: 0,
                left: "-100%",
                padding: e,
                "pointer-events": "none",
                "user-select": "none",
                color: "var(--vscode-input-placeholderForeground)",
                ...i.placeholderStyle,
              },
              y,
            ),
          ),
          m
        )
      })()
    }
    const s = dt()
    function n(m) {}
    const r = Y(() => {
        const b = s.editorService.editors
          .map((y) => y.resource)
          .map((y) => y?.fsPath ?? "")
        return new Set(b)
      }),
      [o, a] = le(!1),
      l = () =>
        I(DXi, {
          class: "aislash-editor-input",
          get style() {
            return {
              resize: "none",
              "grid-area": "1 / 1 / 1 / 1",
              overflow: "hidden",
              "line-height": "inherit",
              "font-family": "inherit",
              "font-size": "inherit",
              color: "var(--vscode-input-foreground)",
              "background-color": "transparent",
              display: "block",
              outline: "none",
              "scrollbar-width": "none",
              "box-sizing": "border-box",
              border: "none",
              "word-wrap": "break-word",
              "word-break": "break-word",
              padding: e,
              ...i.style,
            }
          },
          get turnOffCmdZ() {
            return i.externalHistoryBundle !== void 0
          },
          spellCheck: !1,
          autoCapitalize: "off",
        }),
      [c, h] = le(!1),
      [u, d] = le(""),
      [g, p] = le(null)
    return (() => {
      var m = onr(),
        b = m.firstChild
      return (
        m.addEventListener("click", (y) => {
          i.inputBoxDelegate &&
            y.target === y.currentTarget &&
            i.inputBoxDelegate.focus()
        }),
        b.style.setProperty("display", "grid"),
        b.style.setProperty("position", "relative"),
        b.style.setProperty("grid-template-rows", "1"),
        b.style.setProperty("grid-template-columns", "1fr 1fr"),
        b.style.setProperty("width", "200%"),
        M(
          b,
          I(IXi, {
            get initialConfig() {
              return i.editorConfig()
            },
            get children() {
              return [
                I(te, {
                  get when() {
                    return i.enableAutoContextPlugin
                  },
                  get children() {
                    return I(nnr, {
                      get addFile() {
                        return i.onAddFile
                      },
                      get excludeFiles() {
                        return i.fileSelections.map((y) => U.from(y.uri))
                      },
                    })
                  },
                }),
                I(te, {
                  get when() {
                    return i.enableAddFilePlugin
                  },
                  get children() {
                    return I(Vsr, {
                      get addFile() {
                        return i.onAddFile
                      },
                    })
                  },
                }),
                Y(() => i.extraPlugins),
                I(OXi, {
                  get contentEditable() {
                    return l()
                  },
                  get placeholder() {
                    return I(t, {})
                  },
                  errorBoundary: RXi,
                }),
                I(te, {
                  get when() {
                    return i.allowGhostTextAtSymbols
                  },
                  get children() {
                    return I(Nsr, { ghostText: u, onAccept: () => {} })
                  },
                }),
                I(te, {
                  get when() {
                    return i.externalHistoryBundle !== void 0
                  },
                  get fallback() {
                    return I(Dtr, {})
                  },
                  get children() {
                    return I(
                      lnr,
                      tn(() => i.externalHistoryBundle),
                    )
                  },
                }),
                I(te, {
                  get when() {
                    return i.atMentionsDisabled !== !0
                  },
                  get children() {
                    return I(
                      msr,
                      tn(i, {
                        ghostText: u,
                        setGhostText: d,
                        get mentionIdToDelete() {
                          return i.mentionIdToDelete
                        },
                        get setMentionIdToDelete() {
                          return i.setMentionIdToDelete
                        },
                        get mentionToAdd() {
                          return i.mentionToAdd
                        },
                        get setMentionToAdd() {
                          return i.setMentionToAdd
                        },
                        get insertSelection() {
                          return i.insertSelection
                        },
                        get selections() {
                          return i.selections
                        },
                        get removeSelection() {
                          return i.removeSelection
                        },
                        insertImage: (y) => {
                          if (i.insertImage !== void 0) return i.insertImage(y)
                          if (i.addImage === void 0) return
                          const w = new Image()
                          ;(w.src = Mr.uriToBrowserUri(U.from(y.uri)).toString()),
                            i.addImage(y.uuid, {
                              path: U.from(y.uri).fsPath,
                              dimension: {
                                width: w.naturalWidth,
                                height: w.naturalHeight,
                              },
                              loadedAt: Date.now(),
                            })
                        },
                        get removeImage() {
                          return i.removeImage
                        },
                        get imageUuids() {
                          return i.imageUuids
                        },
                        get insertLink() {
                          return i.insertLink
                        },
                        get removeLink() {
                          return i.removeLink
                        },
                        get insertFileSelection() {
                          return i.insertFileSelection
                        },
                        get fileSelections() {
                          return i.fileSelections
                        },
                        get removeFileSelection() {
                          return i.removeFileSelection
                        },
                        get insertCommit() {
                          return i.insertCommit
                        },
                        get commits() {
                          return i.commits
                        },
                        get removeCommit() {
                          return i.removeCommit
                        },
                        get insertDocs() {
                          return i.insertDocs
                        },
                        get removeDocs() {
                          return i.removeDocs
                        },
                        get addRecentChanges() {
                          return i.addRecentChanges
                        },
                        get removeRecentChanges() {
                          return i.removeRecentChanges
                        },
                        get removeCurrentFile() {
                          return i.removeCurrentFile ?? (() => {})
                        },
                        get addCurrentFile() {
                          return i.addCurrentFile ?? (() => {})
                        },
                        get removeLinterErrors() {
                          return i.removeLinterErrors ?? (() => {})
                        },
                        get addLinterErrors() {
                          return i.addLinterErrors ?? (() => {})
                        },
                        get addCodebase() {
                          return i.addCodebase ?? (() => {})
                        },
                        get removeCodebase() {
                          return i.removeCodebase ?? (() => {})
                        },
                        get recentFiles() {
                          return r()
                        },
                        get contextSessionUuid() {
                          return i.contextSessionUuid
                        },
                        showErrorMessage: n,
                        onMentionsMenuOpen: () => {
                          i.onMentionsMenuOpen?.(), h(!0)
                        },
                        onMentionsMenuClose: () => {
                          i.onMentionsMenuClose?.(), h(!1)
                        },
                        get addCommitNotes() {
                          return i.addCommitNotes
                        },
                        get removeCommitNotes() {
                          return i.removeCommitNotes
                        },
                      }),
                    )
                  },
                }),
                I(te, {
                  get when() {
                    return (
                      (i.slashCommandProps?.supportedCommands.length ?? 0) > 0 &&
                      i.slashCommandProps
                    )
                  },
                  children: (y) =>
                    I(Dsr, {
                      get delegate() {
                        return i.delegate
                      },
                      get setCommand() {
                        return y().setCommand
                      },
                      get removeCommand() {
                        return y().removeCommand
                      },
                      get commands() {
                        return y().supportedCommands
                      },
                    }),
                }),
                I(dnr, {
                  setIsFocused: (y) => {
                    y ? i.onFocus?.() : (d(""), i.onBlur?.()),
                      a(y),
                      i.setIsFocused?.(y)
                  },
                  get delegate() {
                    return i.delegate
                  },
                }),
                I(Psr, {
                  get addImage() {
                    return i.addImage ?? (() => {})
                  },
                }),
                I(Lsr, {
                  get addImage() {
                    return i.addImage ?? (() => {})
                  },
                }),
                I(fnr, { handleSubmit: (y) => (d(""), i.onSubmit(y)) }),
                I(gnr, {
                  get supportsLink() {
                    return (
                      (i.shouldAutoParseLink === void 0
                        ? !0
                        : i.shouldAutoParseLink) && i.supportsLink
                    )
                  },
                  get supportsCommitNotes() {
                    return i.supportsCommitNotes
                  },
                  get supportsCodebase() {
                    return i.supportsCodebase
                  },
                  get supportsWeb() {
                    return i.supportsWeb
                  },
                  get supportsDocs() {
                    return i.showDocs ?? !1
                  },
                  get supportsFolder() {
                    return i.supportsFolderSelections
                  },
                  get addCodebase() {
                    return i.addCodebase
                  },
                  get addFile() {
                    return i.insertFileSelection
                  },
                  get addFolder() {
                    return i.insertFolderSelection
                  },
                  get addDoc() {
                    return i.insertDocs
                  },
                  get addCode() {
                    return i.insertSelection
                  },
                  get addWeb() {
                    return i.addWeb
                  },
                  get addRecentChanges() {
                    return i.addRecentChanges
                  },
                  get addLinterErrors() {
                    return i.addLinterErrors
                  },
                  get insertSelection() {
                    return i.insertSelection
                  },
                  get insertDocs() {
                    return i.insertDocs
                  },
                  get insertLink() {
                    return i.insertLink
                  },
                  get removeLink() {
                    return i.removeLink
                  },
                  get insertTerminalSelection() {
                    return i.insertTerminalSelection
                  },
                  isMentionsMenuOpen: c,
                  get source() {
                    return i.source
                  },
                  get disableSelectionCopyPaste() {
                    return i.disableSelectionCopyPaste
                  },
                }),
                I(pnr, {
                  setIsTyping: () => i.setIsTyping,
                  get setText() {
                    return i.setText
                  },
                  get setRichText() {
                    return i.setRichText
                  },
                  get initText() {
                    return i.initText
                  },
                  onEscape: (y) => {
                    i.allowGhostTextAtSymbols && u() ? d("") : i.onEscape?.(y)
                  },
                  get setContentHeight() {
                    return i.setContentHeight
                  },
                }),
                I(mnr, {
                  get delegate() {
                    return i.delegate
                  },
                  get onSubmit() {
                    return i.onSubmit
                  },
                  get initText() {
                    return i.initText
                  },
                  get inputBoxDelegate() {
                    return i.inputBoxDelegate
                  },
                }),
                I(unr, {
                  removeSelection: () => i.removeSelection,
                  get selections() {
                    return i.selections
                  },
                  onTryDeleteContext: () => i.onTryDeleteContext,
                  get ignoreTextForLastSelectionRemoval() {
                    return i.ignoreTextForLastSelectionRemoval
                  },
                  get text() {
                    return i.text
                  },
                }),
                I(hnr, {
                  get commandListeners() {
                    return [
                      ...(i.extraCommandListeners ?? []),
                      {
                        command: KFi,
                        callback: (y) => (
                          g()?.update(() => {
                            const w = Wr()
                            return Xn(w) ? (GZn(w), !0) : !1
                          }),
                          !0
                        ),
                      },
                    ]
                  },
                }),
                Y(
                  () =>
                    Y(() => !!i.useArrowsForHistory)() &&
                    I(cnr, {
                      get setText() {
                        return i.setText
                      },
                    }),
                ),
                I(anr, {
                  setEditor: (y) => {
                    p(y), i.setEditor?.(y)
                  },
                  get readonly() {
                    return i.readonly ?? !1
                  },
                }),
              ]
            },
          }),
        ),
        xe((y) =>
          Bi(m, { width: "100%", overflow: "hidden", ...i.containerStyle }, y),
        ),
        m
      )
    })()
  }
  function bXe(i) {
    const e = Ct(i),
      t = e.getSelection()
    if (!t) return !1
    const s = t.getRangeAt(0),
      n = s.cloneRange()
    n.selectNodeContents(i), n.setEnd(s.endContainer, s.endOffset)
    const r = n.getBoundingClientRect().height,
      o = parseInt(e.getComputedStyle(i).lineHeight)
    let a = 0
    if (t && t.rangeCount > 0) {
      const u = t.getRangeAt(0),
        d = u.cloneRange()
      d.selectNodeContents(i),
        d.setEnd(u.startContainer, u.startOffset),
        (a = d.toString().length)
    }
    const c = i.innerText.substring(0, a + 1).includes(`
  `),
      h = i.innerText.trim() === ""
    return r <= o && (!c || h)
  }
  function vXe(i) {
    const e = Ct(i),
      t = e.getSelection()
    if (!t) return !1
    const s = t.getRangeAt(0),
      n = s.cloneRange()
    n.selectNodeContents(i), n.setStart(s.startContainer, s.startOffset)
    const r = n.getBoundingClientRect().height,
      o = parseInt(e.getComputedStyle(i).lineHeight)
    let a = 0
    if (t && t.rangeCount > 0) {
      const u = t.getRangeAt(0),
        d = u.cloneRange()
      d.selectNodeContents(i),
        d.setStart(u.endContainer, u.endOffset),
        (a = d.toString().length)
    }
    const c = i.innerText.substring(a).includes(`
  `),
      h = i.innerText.trim() === ""
    return r <= o && (!c || h)
  }
  var anr = (i) => {
      const [e] = Cu()
      return (
        De(() => {
          i.setEditor && (i.setEditor(e), e.setEditable(!(i.readonly ?? !1)))
        }),
        De(() => {
          i.readonly && e.setEditable(!1)
        }, [i.readonly]),
        null
      )
    },
    lnr = (i) => {
      const [e] = Cu()
      return (
        Itr(
          e,
          () => i.externalHistoryState,
          100,
          i.runExternalUndo,
          i.runExternalRedo,
          i.addToExternalUndoStack,
        ),
        null
      )
    },
    cnr = (i) => {
      const [e] = Cu(),
        t = dt(),
        [s, n] = le(-1),
        [r, o] = le([]),
        [a, l] = le("")
      De(() => {
        a().trim() === ""
          ? o([a(), ...t.aiService.getPreviousPrompts()])
          : o(t.aiService.getPreviousPrompts())
      })
      const c = e.registerCommand(
          kG,
          (u) => {
            const d = e.getRootElement()
            return (
              d !== null &&
                bXe(d) &&
                (s() === r().length - 1 ||
                  (s() === -1 && l(d.innerText), n((g) => g + 1))),
              !1
            )
          },
          Xv,
        ),
        h = e.registerCommand(
          EG,
          (u) => {
            const d = e.getRootElement()
            return d !== null && vXe(d) && s() !== -1 && n(s() - 1), !1
          },
          Xv,
        )
      return (
        De(() => {
          const u = r().length - 1 - s()
          r().length > 0 && u >= 0 && u < r().length
            ? (i.setText && i.setText(r()[u]),
              e.update(() => {
                const d = Vu(),
                  g = tw(),
                  p = $c(r()[u])
                g.append(p)
                for (const m of d.getChildren()) m.remove()
                d.append(g), d.selectEnd()
              }))
            : s()
        }),
        Gt(() => {
          c(), h()
        }),
        null
      )
    }
  function hnr(i) {
    const [e] = Cu(),
      t = []
    for (const { command: s, callback: n, priority: r } of i.commandListeners ??
      [])
      t.push(e.registerCommand(s, n, r ?? fI))
    return (
      Gt(() => {
        for (const s of t) s()
      }),
      null
    )
  }
  function unr(i) {
    const [e] = Cu(),
      [t, s] = le("")
    De(() => {
      i.text !== void 0 && s(i.text)
    })
    let n = !1
    const r = e.registerTextContentListener((l) => {
        s(l)
      }),
      o = e.registerCommand(
        Uxt,
        (l) => {
          const c = co(() => i.selections),
            h = e.getRootElement(),
            u = WKi(e)
          return l.repeat
            ? ((n = !0), !1)
            : (!l.repeat && n && (n = !1),
              !i.onTryDeleteContext &&
              c.length > 0 &&
              ((i.ignoreTextForLastSelectionRemoval && u) || t() === "")
                ? (i.removeSelection()(c.length - 1), !0)
                : (t() === "" || (i.ignoreTextForLastSelectionRemoval && u)) &&
                    i.onTryDeleteContext
                  ? i.onTryDeleteContext()?.()
                  : !1)
        },
        UVe,
      ),
      a = dt()
    return (
      Gt(() => {
        o(), r()
      }),
      null
    )
  }
  function dnr(i) {
    const [e] = Cu(),
      t = XI(),
      s = e.registerCommand(
        Kxt,
        (c) => (i.setIsFocused && i.setIsFocused(!0), !1),
        fI,
      ),
      n = e.registerCommand(
        dOi,
        (c) => (i.setIsFocused && i.setIsFocused(!1), !1),
        fI,
      )
    let r = 0
    const o = 100,
      a = (c) => {
        c.keyCode === 9 && (r = c.timeStamp)
      }
    De(() => {
      t.window.addEventListener("keydown", a, !0)
    })
    const l = e.registerCommand(
      Kxt,
      (c) => {
        const h = Wr()
        return Xn(h) && r + o > c.timeStamp && eR(h.clone()), !1
      },
      Xv,
    )
    return (
      De(() => {
        i.delegate !== void 0 &&
          i.delegate.setForceFocusNoScroll(() => {
            e.getRootElement().focus({ preventScroll: !0 })
          })
      }),
      Gt(() => {
        s(), n(), l(), t.window.removeEventListener("keydown", a, !0)
      }),
      null
    )
  }
  var fnr = (i) => {
      const [e] = Cu(),
        t = e.registerCommand(
          IG,
          (s) =>
            s.repeat
              ? !0
              : s.shiftKey || i.handleSubmit(s) === "do-not-stop-propagation"
                ? !1
                : (s.preventDefault(), !0),
          UVe,
        )
      return (
        Gt(() => {
          t()
        }),
        null
      )
    },
    gnr = (i) => {
      const [e] = Cu(),
        t = dt()
      let s = !1
      const n = (c) => {
          i.source === "chat" && t.tooltipService.registerEvent("chat.paste")
          let h = c.clipboardData?.getData("Text")
          if (
            !s &&
            t.reactiveStorageService.nonPersistentStorage.lastCopy &&
            t.reactiveStorageService.nonPersistentStorage.lastCopy.text === h &&
            h !== void 0 &&
            h.includes(`
  `) &&
            !i.disableSelectionCopyPaste
          ) {
            c.preventDefault()
            const g = i.insertTerminalSelection,
              p = i.insertSelection
            return (
              UMn(
                t.reactiveStorageService.nonPersistentStorage.lastCopy,
                t.dataScrubbingService,
              ).then((m) => {
                m &&
                  (m.text.trim().startsWith("```bash") && g !== void 0
                    ? g(m)
                    : p(m))
              }),
              !0
            )
          }
          if (s && h)
            return (
              c.preventDefault(),
              e.update(() => {
                const g = Wr()
                Xn(g) && g.insertText(h)
              }),
              !0
            )
          if (h !== void 0 && h.includes("@")) {
            for (let g = 0; g < h.length; g++) {
              const p = h.charAt(g)
              if (p === "@") {
                const m = "@" + cc[Tt.codebase],
                  b = "@" + cc[Tt.lint],
                  y = "@" + cc[Tt.web],
                  w = "@" + cc[Tt.recent_changes],
                  C = h.slice(g),
                  S = Wr()
                if (S === null) return !1
                if (C.startsWith(m))
                  if (i.supportsCodebase) {
                    const x = Jk(cc[Tt.codebase], void 0, void 0, Tt.codebase)
                    S.insertNodes([x]),
                      x.select(),
                      i.addCodebase(x.storedKey),
                      (g += m.length - 1)
                  } else g += m.length
                else if (C.startsWith(b)) {
                  const x = Jk(cc[Tt.lint], void 0, void 0, Tt.lint)
                  S.insertNodes([x]),
                    x.select(),
                    i.addLinterErrors(x.storedKey),
                    (g += b.length - 1)
                } else if (C.startsWith(y))
                  if (i.supportsWeb) {
                    const x = Jk(cc[Tt.web], void 0, void 0, Tt.web)
                    S.insertNodes([x]),
                      x.select(),
                      i.addWeb(x.storedKey),
                      (g += y.length - 1)
                  } else g += y.length
                else if (C.startsWith(w)) {
                  const x = Jk(
                    cc[Tt.recent_changes],
                    void 0,
                    void 0,
                    Tt.recent_changes,
                  )
                  S.insertNodes([x]),
                    x.select(),
                    i.addRecentChanges(x.storedKey),
                    (g += w.length - 1)
                } else {
                  const k =
                    t.reactiveStorageService.applicationUserPersistentStorage.aiFeaturesCopyPasteState.mentions
                      .slice()
                      .reverse()
                      .find((E) => C.startsWith(E.displayName))
                  if (k) {
                    const E = k.displayName.replace(/^@/, "")
                    if (k.selection.type === da.Code) {
                      const D = Jk(E, void 0, void 0, Tt.code, k.selection)
                      S.insertNodes([D]),
                        i.addCode({
                          ...k.selection.selectionWithoutUuid,
                          uuid: D.storedKey,
                        }),
                        (g += k.displayName.length - 1)
                    } else if (k.selection.type === da.File) {
                      const D = Jk(E, void 0, void 0, Tt.file, k.selection)
                      S.insertNodes([D]),
                        i.addFile({
                          ...k.selection.selectionWithoutUuid,
                          uuid: D.storedKey,
                        }),
                        (g += k.displayName.length - 1)
                    } else if (k.selection.type === da.Folder)
                      if (i.supportsFolder) {
                        const D = Jk(E, void 0, void 0, Tt.folder, k.selection)
                        S.insertNodes([D]),
                          i.addFolder({
                            ...k.selection.selectionWithoutUuid,
                            uuid: D.storedKey,
                          }),
                          (g += k.displayName.length - 1)
                      } else g += k.displayName.length
                    else if (k.selection.type === da.Docs)
                      if (i.supportsDocs) {
                        const D = Jk(E, void 0, void 0, Tt.doc, k.selection)
                        S.insertNodes([D]),
                          i.addDoc({
                            ...k.selection.selectionWithoutUuid,
                            uuid: D.storedKey,
                          }),
                          (g += k.displayName.length - 1)
                      } else g += k.displayName.length
                  } else S.insertText("@")
                }
              } else {
                const m = Wr()
                if (m === null) return !1
                m.insertText(p)
              }
            }
            return c.preventDefault(), c.stopPropagation(), !0
          }
          const u = Array.from(c.clipboardData?.items || []).find(
              (g) => g.kind === "file",
            ),
            d = (g) => {
              try {
                return new URL(g).hostname.includes(".")
              } catch {
                return !1
              }
            }
          if (u) {
            c.preventDefault()
            const g = u.getAsFile()
            if (g) {
              const p = g.name
              return (
                e.update(() => {
                  const m = Wr()
                  m !== null && m.insertText(p)
                }),
                !0
              )
            }
          } else if (
            i.supportsLink &&
            !i.isMentionsMenuOpen() &&
            h !== void 0 &&
            h.length < 2e3 &&
            d(h)
          )
            return (
              c.preventDefault(),
              e._rootElement?.blur(),
              e.update(() => {
                if (!h) return
                const g = Jk(h, void 0, void 0, Tt.link),
                  p = $c(" "),
                  m = Wr()
                m !== null &&
                  (m.insertNodes([g, p]),
                  p.select(),
                  i.insertLink({ url: h, uuid: g.storedKey }))
              }),
              !0
            )
          return !1
        },
        r = e.registerCommand(oae, (c) => n(c), UVe),
        o = e.registerCommand(
          XFi,
          (c) =>
            (c.metaKey || c.ctrlKey) && c.shiftKey
              ? (c.preventDefault(),
                e.getRootElement() &&
                  ((s = !0),
                  t.window.document.execCommand("paste"),
                  setTimeout(() => {
                    s = !1
                  }, 100)),
                !0)
              : !1,
          UVe,
        ),
        a = e.registerCommand(
          fWe,
          (c) => {
            const h = (d) => {
                if (d.getType() === "mention") {
                  const m =
                    "@" +
                    (d.__text.startsWith("@")
                      ? d.__text.replace(/^@/, "")
                      : d.__text)
                  d.metadata &&
                    t.reactiveStorageService.setApplicationUserPersistentStorage(
                      "aiFeaturesCopyPasteState",
                      "mentions",
                      (b) => [
                        ...b.filter(
                          (y) =>
                            y.displayName !== m &&
                            y.lastUsedAtUnixMs > Date.now() - 6048e5,
                        ),
                        {
                          displayName: m,
                          selection: d.metadata.selection,
                          lastUsedAtUnixMs: Date.now(),
                        },
                      ],
                    )
                } else d.getChildren && d.getChildren().forEach(h)
              },
              u = Wr()
            return u
              ? (u.getNodes().forEach((d) => {
                  h(d)
                }),
                !0)
              : !1
          },
          Xv,
        ),
        l = e.registerCommand(
          gWe,
          (c) => {
            const h = (d) => {
                if (d.getType() === "mention") {
                  const m =
                    "@" +
                    (d.__text.startsWith("@")
                      ? d.__text.replace(/^@/, "")
                      : d.__text)
                  d.metadata &&
                    t.reactiveStorageService.setApplicationUserPersistentStorage(
                      "aiFeaturesCopyPasteState",
                      "mentions",
                      (b) => [
                        ...b.filter(
                          (y) =>
                            y.displayName !== m &&
                            y.lastUsedAtUnixMs > Date.now() - 6048e5,
                        ),
                        {
                          displayName: m,
                          selection: d.metadata.selection,
                          lastUsedAtUnixMs: Date.now(),
                        },
                      ],
                    )
                } else d.getChildren && d.getChildren().forEach(h)
              },
              u = Wr()
            return u
              ? (u.getNodes().forEach((d) => {
                  h(d)
                }),
                !0)
              : !1
          },
          Xv,
        )
      return (
        Gt(() => {
          r(), o(), a(), l()
        }),
        null
      )
    },
    pnr = (i) => {
      const [e] = Cu(),
        [t, s] = le(!1),
        n = e.registerTextContentListener((o) => {
          const a = co(() => i.setIsTyping())
          a && a(o !== ""),
            i.setText !== void 0 && (i.setText?.(o), t() || s(!0)),
            i.setRichText !== void 0 &&
              i.setRichText?.(JSON.stringify(e.getEditorState()))
          const l = e.getRootElement()
          i.setContentHeight &&
            l &&
            i.setContentHeight(l.getBoundingClientRect().height)
        })
      De(() => {
        const o = i.setContentHeight
        t() &&
          setTimeout(() => {
            const a = e.getRootElement()
            o && a && o(a.getBoundingClientRect().height)
          })
      }),
        Gt(() => {
          n()
        })
      const r = dt()
      return (
        De(() => {
          const o = e.registerCommand(
            ZB,
            (a) => (i.onEscape ? (i.onEscape(a), !0) : !1),
            fI,
          )
          Gt(() => {
            o()
          })
        }),
        null
      )
    },
    mnr = (i) => {
      const [e] = Cu(),
        t = i.delegate?.getRichText() || i.initText || "",
        [s, n] = le(t),
        r = e.registerTextContentListener((c) => {
          const h = e.getEditorState(),
            u = JSON.stringify(h)
          n(u), i.delegate?.setText(c, u)
        }),
        o = (c) => {
          if (c !== "") {
            if (c.startsWith("{"))
              try {
                e.setEditorState(e.parseEditorState(c))
                return
              } catch (h) {
                console.error(h)
              }
            a(c)
          }
        },
        a = (c) => {
          e.update(() => {
            const h = Vu()
            if (
              !h
                .getChildren()
                .every((m) => (m instanceof AG ? m.getTextContent() === "" : !1))
            )
              return
            if (c.startsWith("{"))
              try {
                e.setEditorState(e.parseEditorState(c))
                return
              } catch (m) {
                console.error(m)
              }
            const g = tw(),
              p = $c(c)
            g.append(p)
            for (const m of h.getChildren()) m.remove()
            h.append(g), h.selectEnd()
          })
        }
      t.trim() !== "" && o(t)
      let l
      if (
        (De(() => {
          l?.(),
            i.delegate &&
              ((l = i.delegate.onSubmit(() => {
                const c = new KeyboardEvent("submit")
                i.onSubmit(c)
              })),
              Gt(l))
        }, [i.delegate, i.onSubmit]),
        i.delegate)
      ) {
        const c = i.delegate.onTextChange((u, d) => {
          ;(d ?? u) !== s() && a(d ?? u)
        })
        Gt(c)
        const h = i.delegate.onClear((u) => {
          if (u?.dontStealFocus === !0) {
            const d = e.parseEditorState(
              '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
            )
            e.setEditorState(d)
            return
          }
          e.update(() => {
            const d = Vu(),
              g = tw()
            for (const p of d.getChildren()) p.remove()
            d.append(g), d.selectEnd()
          })
        })
        Gt(h)
      }
      return (
        nr(() => {
          const c = e.getRootElement()
          c.addEventListener("focusin", () => {
            i.delegate?.notifyFocus()
          }),
            i.inputBoxDelegate?.registerTextAreaElement(c, e)
        }),
        Gt(() => {
          r()
        }),
        null
      )
    },
    bnr = X("<h1>"),
    vnr = X("<h2>"),
    ynr = X("<h3>"),
    wnr = X("<h4>"),
    Cnr = X("<h5>"),
    Snr = X("<h6>"),
    RMo = Je(
      "copy-aibubble-code",
      $.copy,
      "Icon for a copying code from the chat.",
    ),
    AMo = Je(
      "run-aibubble-code",
      $.play,
      "Icon for running code in the terminal.",
    ),
    xnr = "\u26E2Thought\u2624",
    knr = "\u26E2/Thought\u2624",
    M4t = (i) => `markdown-code-block-editor-${i}`,
    nQi = eI("streamingMarkdownPolicy", {
      createHTML: (i) => {
        const t = i
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/&lt;br \/&gt;/g, "<br />")
        return MM.sanitize(t)
      },
    }),
    ci
  ;(function (i) {
    ;(i[(i.ROOT = 0)] = "ROOT"),
      (i[(i.SECTION = 1)] = "SECTION"),
      (i[(i.INLINE_CODE = 2)] = "INLINE_CODE"),
      (i[(i.BLOCK_CODE = 3)] = "BLOCK_CODE"),
      (i[(i.BASH_RESPONSE = 4)] = "BASH_RESPONSE"),
      (i[(i.BOLD_TEXT = 5)] = "BOLD_TEXT"),
      (i[(i.ITALICS_TEXT = 6)] = "ITALICS_TEXT"),
      (i[(i.AI_THOUGHT = 7)] = "AI_THOUGHT"),
      (i[(i.AI_TOOL = 8)] = "AI_TOOL"),
      (i[(i.AI_TOOL_RAW = 9)] = "AI_TOOL_RAW"),
      (i[(i.BLOCK_CODE_LINE_NUMBER = 10)] = "BLOCK_CODE_LINE_NUMBER"),
      (i[(i.HEADER = 11)] = "HEADER"),
      (i[(i.LINK = 12)] = "LINK"),
      (i[(i.CITATION_LINK = 13)] = "CITATION_LINK"),
      (i[(i.CITATION_FOOTNOTE = 14)] = "CITATION_FOOTNOTE"),
      (i[(i.COMPONENT = 15)] = "COMPONENT"),
      (i[(i.BULLET_LIST = 16)] = "BULLET_LIST"),
      (i[(i.ORDERED_LIST = 17)] = "ORDERED_LIST"),
      (i[(i.INLINE_LATEX = 18)] = "INLINE_LATEX"),
      (i[(i.BLOCK_LATEX = 19)] = "BLOCK_LATEX"),
      (i[(i.DELETE_FILE = 20)] = "DELETE_FILE"),
      (i[(i.ADD_FILE = 21)] = "ADD_FILE")
  })(ci || (ci = {}))
  var Enr = {
      1: () =>
        Yo(() =>
          (() => {
            var i = bnr()
            return (
              i.style.setProperty("line-height", "1em"),
              i.style.setProperty("margin-bottom", "0px"),
              i
            )
          })(),
        )(),
      2: () =>
        Yo(() =>
          (() => {
            var i = vnr()
            return i.style.setProperty("margin-bottom", "0px"), i
          })(),
        )(),
      3: () =>
        Yo(() =>
          (() => {
            var i = ynr()
            return i.style.setProperty("margin-bottom", "0px"), i
          })(),
        )(),
      4: () =>
        Yo(() =>
          (() => {
            var i = wnr()
            return i.style.setProperty("margin-bottom", "0px"), i
          })(),
        )(),
      5: () =>
        Yo(() =>
          (() => {
            var i = Cnr()
            return i.style.setProperty("margin-bottom", "0px"), i
          })(),
        )(),
      6: () =>
        Yo(() =>
          (() => {
            var i = Snr()
            return i.style.setProperty("margin-bottom", "0px"), i
          })(),
        )(),
    },
    rQi = 8
  function oQi(i, e) {
    return `markdown-section-${e}-${i}`
  }
  var aQi = {
    H1: { top: "16px", bottom: "0px" },
    H2: { top: "16px", bottom: "0px" },
    H3: { top: "15px", bottom: "0px" },
    H4: { top: "17px", bottom: "0px" },
    H5: { top: "18px", bottom: "0px" },
    H6: { top: "20px", bottom: "0px" },
  }
  function yXe(i, e) {
    if (i.appendText !== void 0) i.appendText(e)
    else if (i.type === ci.BLOCK_CODE) {
      const t = i.codeTextModel
      t.applyEdits([
        {
          range: {
            startLineNumber: t.getLineCount(),
            startColumn: t.getLineMaxColumn(t.getLineCount()),
            endLineNumber: t.getLineCount(),
            endColumn: t.getLineMaxColumn(t.getLineCount()),
          },
          text: e,
          forceMoveMarkers: !0,
        },
      ])
    } else {
      const t = e.split(`
  `),
        s = document.createDocumentFragment()
      t.forEach((n, r) => {
        const o = document.createElement("span")
        ;(o.textContent = n),
          s.appendChild(o),
          r < t.length - 1 && s.appendChild(document.createElement("br"))
      }),
        i.ref.appendChild(s)
    }
  }
  var lQi = {
      elementType: ci.BULLET_LIST,
      start: (i, e, t) => {
        if (i[i.length - 1].type !== ci.SECTION) return { state: "failed" }
        const r = (t ? /^\n?[\t ]*[-*+] / : /^\n[\t ]*[-*+] /).exec(e)
        if (r)
          return {
            state: "success",
            length: r[0].length,
            elementType: ci.BULLET_LIST,
            startOrEnd: "start",
          }
        const a = (t ? /^\n?[\t ]*[-*+]/ : /^\n[\t ]*[-*+]/).exec(e)
        return a && a[0].length === e.length
          ? { state: "possible" }
          : { state: "failed" }
      },
      end: (i, e) => {
        let t = i.length - 1
        for (
          ;
          i.at(t)?.type === ci.ITALICS_TEXT || i.at(t)?.type === ci.BOLD_TEXT;

        )
          t--
        return i.at(t)?.type !== ci.BULLET_LIST
          ? { state: "failed" }
          : /^\n/.exec(e)
            ? {
                state: "success",
                length: 0,
                elementType: ci.BULLET_LIST,
                startOrEnd: "end",
              }
            : { state: "failed" }
      },
      createElement: (i, e, t, s) => {
        const n = document.createElement("li"),
          r = { type: ci.BULLET_LIST, ref: n }
        i[i.length - 1].ref.appendChild(n), i.push(r)
        const a = e.search(/[-+*]/),
          l = e.substring(0, a).split(" ").length - 1
        ;(n.style.paddingLeft = `${l * rQi}px`),
          (n.style.paddingTop = "2px"),
          (n.style.paddingBottom = "2px")
      },
    },
    cQi = {
      elementType: ci.ORDERED_LIST,
      start: (i, e, t) => {
        if (i[i.length - 1].type !== ci.SECTION) return { state: "failed" }
        const r = (t ? /^\n?[\t ]*\d+\. / : /^\n[\t ]*\d+\. /).exec(e)
        if (r)
          return {
            state: "success",
            length: r[0].length,
            elementType: ci.ORDERED_LIST,
            startOrEnd: "start",
          }
        const a = (t ? /^\n?[\t ]*\d+\./ : /^\n[\t ]*\d+\./).exec(e)
        return a && a[0].length === e.length
          ? { state: "possible" }
          : { state: "failed" }
      },
      end: (i, e) => {
        let t = i.length - 1
        for (
          ;
          i.at(t)?.type === ci.ITALICS_TEXT || i.at(t)?.type === ci.BOLD_TEXT;

        )
          t--
        return i.at(t)?.type !== ci.ORDERED_LIST
          ? { state: "failed" }
          : /^\n/.exec(e)
            ? {
                state: "success",
                length: 0,
                elementType: ci.ORDERED_LIST,
                startOrEnd: "end",
              }
            : { state: "failed" }
      },
      createElement: (i, e, t, s) => {
        const n = document.createElement("li")
        n.style.listStyleType = "decimal"
        const r = { type: ci.ORDERED_LIST, ref: n }
        i[i.length - 1].ref.appendChild(n), i.push(r)
        const a = e.match(/\d+\.\s*/),
          l = a ? parseInt(a[0]) : 1
        n.setAttribute("value", l.toString())
        const c = e.search(/\d+\.\s*/),
          h = e.substring(0, c).split(" ").length - 1
        ;(n.style.paddingLeft = `${h * rQi}px`),
          (n.style.paddingTop = "2px"),
          (n.style.paddingBottom = "2px")
      },
    },
    Inr = X("<div class=markdown-bash-response><div>See output"),
    Dnr = X("<div class=markdown-bash-response-output> "),
    Tnr = {
      elementType: ci.BASH_RESPONSE,
      start: (i, e, t) => {
        const s = i[i.length - 1]
        if (
          s.type === ci.BASH_RESPONSE ||
          s.type === ci.BLOCK_CODE ||
          s.type === ci.BLOCK_LATEX ||
          s.type === ci.INLINE_CODE
        )
          return { state: "failed" }
        const r = new RegExp(`^\\s*${sze}`).exec(e)
        if (r)
          return {
            state: "success",
            length: r[0].length,
            elementType: ci.BASH_RESPONSE,
            startOrEnd: "start",
          }
        for (let o = 1; o <= sze.length; o++) {
          const l = new RegExp(`^\\s*${sze.substring(0, o)}`).exec(e)
          if (l && l[0].length === e.length) return { state: "possible" }
        }
        return { state: "failed" }
      },
      end: (i, e) => {
        const s = new RegExp(`^\\s*${Xle}`).exec(e)
        if (s)
          return {
            state: "success",
            length: s[0].length,
            elementType: ci.BASH_RESPONSE,
            startOrEnd: "end",
          }
        for (let n = 1; n <= Xle.length; n++) {
          const o = new RegExp(`^\\s*${Xle.substring(0, n)}`).exec(e)
          if (o && o[0].length === e.length) return { state: "possible" }
        }
        return { state: "failed" }
      },
      createElement: (i, e, t, s, n) => {
        const r = Yo(() =>
            (() => {
              var c = Inr(),
                h = c.firstChild
              return (
                c.style.setProperty("margin-top", "12px"),
                h.addEventListener("click", () => {
                  const u = r.children,
                    d = u[u.length - 1]
                  d &&
                    (d.style.display =
                      d.style.display === "none" ? "block" : "none")
                }),
                h.style.setProperty("color", "var(--vscode-textLink-foreground)"),
                h.style.setProperty("cursor", "pointer"),
                h.style.setProperty("user-select", "none"),
                c
              )
            })(),
          )(),
          o = Yo(() =>
            (() => {
              var c = Dnr()
              return (
                c.style.setProperty("display", "none"),
                c.style.setProperty("padding", "12px"),
                c.style.setProperty(
                  "background-color",
                  "var(--vscode-editor-background)",
                ),
                c.style.setProperty(
                  "border",
                  "1px solid var(--vscode-editorWidget-border)",
                ),
                c
              )
            })(),
          )()
        r.appendChild(o)
        const a = { type: ci.BASH_RESPONSE, ref: o }
        i[i.length - 1].ref.appendChild(r), i.push(a)
      },
    },
    Pnr = X("<span class=markdown-inline-code>"),
    Lnr = {
      elementType: ci.INLINE_CODE,
      start: (i, e) => {
        if (i.length === 1) return { state: "failed" }
        const t = i[i.length - 1]
        return t.type === ci.INLINE_CODE ||
          t.type === ci.BLOCK_CODE ||
          t.type === ci.BLOCK_LATEX ||
          t.type === ci.BASH_RESPONSE
          ? { state: "failed" }
          : e.startsWith("`")
            ? {
                state: "success",
                length: 1,
                elementType: ci.INLINE_CODE,
                startOrEnd: "start",
              }
            : { state: "failed" }
      },
      end: (i, e) =>
        i[i.length - 1].type !== ci.INLINE_CODE
          ? { state: "failed" }
          : e.startsWith("`")
            ? {
                state: "success",
                length: 1,
                elementType: ci.INLINE_CODE,
                startOrEnd: "end",
              }
            : { state: "failed" },
      createElement: (i, e, t, s, n) => {
        const r = Yo(() =>
            (() => {
              var l = Pnr()
              return (
                l.style.setProperty(
                  "background-color",
                  "var(--vscode-textCodeBlock-background)",
                ),
                l.style.setProperty("border-radius", "4px"),
                l.style.setProperty("padding", "1px 4px"),
                l.style.setProperty("word-break", "break-word"),
                xe((c) =>
                  (c = s.configurationService.getValue("editor.fontFamily")) !=
                  null
                    ? l.style.setProperty("font-family", c)
                    : l.style.removeProperty("font-family"),
                ),
                l
              )
            })(),
          )(),
          o = {
            type: ci.INLINE_CODE,
            ref: r,
            endElementHook: () => {
              const l = async (g) => {
                  const p = s.workspaceContextService.resolveRelativePath(
                    g.relativeWorkspacePath,
                  )
                  let m
                  try {
                    m = await s.textModelService.createModelReference(p)
                    const b = m.object.textEditorModel,
                      y = g.roughLineNumber,
                      w = Math.max(1, y - 10),
                      C = Math.min(b.getLineCount(), y + 10),
                      S = b.getValueInRange({
                        startLineNumber: w,
                        startColumn: 1,
                        endLineNumber: C,
                        endColumn: b.getLineMaxColumn(C),
                      }).split(`
  `),
                      x = Math.floor(S.length / 2)
                    for (let k = 0; k < S.length; k++) {
                      let E = x
                      if (k % 2 === 0) {
                        let L = Math.floor(k / 2)
                        E = Math.min(S.length - 1, E + L)
                      } else {
                        let L = Math.floor(k / 2)
                        E = Math.max(0, E - L)
                      }
                      const P = S[E].indexOf(g.symbolSearchString)
                      if (P !== -1)
                        return {
                          location: {
                            uri: p,
                            range: {
                              startLineNumber: w + E,
                              startColumn: P + 1,
                              endLineNumber: w + E,
                              endColumn: P + g.symbolSearchString.length + 1,
                            },
                          },
                          good: !0,
                        }
                    }
                    return {
                      location: {
                        uri: p,
                        range: {
                          startLineNumber: y,
                          startColumn: 1,
                          endLineNumber: y,
                          endColumn: 1,
                        },
                      },
                      good: !1,
                    }
                  } catch {
                  } finally {
                    m?.dispose()
                  }
                },
                c = async (g) => {
                  const p = s.workspaceContextService.resolveRelativePath(g)
                  if (
                    (await s.fileService.exists(p)) &&
                    (await s.fileService.stat(p)).isFile
                  )
                    return p
                },
                h = (g) => {
                  if (!n.symbolLinks) return !1
                  let m
                  for (const b of n.symbolLinks ?? [])
                    b.symbolName === g && (m = b)
                  return m
                    ? ((r.onclick = () => {
                        l(m)
                          .then(async (b) => {
                            if (b) {
                              const { location: y, good: w } = b,
                                C = await s.commandService.executeCommand(
                                  ADi,
                                  y,
                                  m,
                                  !w,
                                )
                              C &&
                                ((m.relativeWorkspacePath =
                                  C.relativeWorkspacePath),
                                (m.roughLineNumber = C.roughLineNumber),
                                (m.symbolSearchString = C.symbolSearchString))
                            } else
                              (r.style.cursor = "default"),
                                (r.style.color = "inherit")
                          })
                          .catch(console.log)
                      }),
                      (r.style.cursor = "pointer"),
                      (r.style.color = "var(--vscode-textLink-foreground)"),
                      !0)
                    : !1
                },
                u = (g) => {
                  if (!n.fileLinks) return !1
                  let m
                  for (const b of n.fileLinks ?? [])
                    b.displayName === g && (m = b)
                  return m
                    ? ((r.onclick = () => {
                        const b = s.workspaceContextService.resolveRelativePath(
                          m.relativeWorkspacePath,
                        )
                        d2(s, { filePathOrUri: b })
                      }),
                      (r.style.cursor = "pointer"),
                      (r.style.color = "var(--vscode-textLink-foreground)"),
                      !0)
                    : !1
                }
              let d = { hasFound: !1 }
              return (
                Yx((g) => {
                  t.push({ dispose: () => g() }),
                    De(() => {
                      const p = r.textContent ?? r.innerHTML,
                        m = u(p)
                      if (((d.hasFound = m || d.hasFound), !m)) {
                        const b = h(p)
                        ;(d.hasFound = b || d.hasFound),
                          b ||
                            c(p)
                              .then((y) => {
                                d.hasFound ||
                                  (y && r.onclick === null
                                    ? ((r.onclick = () =>
                                        d2(s, { filePathOrUri: y })),
                                      (r.style.cursor = "pointer"),
                                      (r.style.color =
                                        "var(--vscode-textLink-foreground)"))
                                    : ((r.style.cursor = "default"),
                                      (r.style.color = "inherit")))
                              })
                              .catch(console.log)
                      }
                    })
                }),
                ""
              )
            },
          }
        i[i.length - 1].ref.appendChild(r), i.push(o)
      },
    },
    $4t = X("<div>"),
    Nnr = (i) => {
      const e = dt(),
        [t, s] = i1(i, [
          "children",
          "onClick",
          "icon",
          "iconStyle",
          "isSelected",
          "rightIcon",
        ])
      let n
      const r = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        width: "8px",
        height: "8px",
        "font-size": "10px",
        color: "var(--vscode-editor-foreground)",
      }
      return (() => {
        var o = $4t(),
          a = n
        return (
          typeof a == "function" ? Rs(a, o) : (n = o),
          dp(
            o,
            tn(
              {
                get onClick() {
                  return t.onClick
                },
                get class() {
                  return "menu-item" + (Gk(e.themeService) ? " dark" : " light")
                },
                get style() {
                  return {
                    padding: "0px 4px",
                    "border-radius": "2px",
                    display: "flex",
                    "align-items": "center",
                    gap: "4px",
                    "font-size": "10px",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-primary)",
                    outline: "none",
                    "flex-shrink": "0",
                    ...(t.isSelected && {
                      backgroundColor: Gk(e.themeService)
                        ? "rgba(255, 255, 255, 0.06)"
                        : "rgba(0, 0, 0, 0.06)",
                    }),
                  }
                },
              },
              s,
            ),
            !1,
            !0,
          ),
          M(
            o,
            I(te, {
              get when() {
                return t.icon
              },
              get children() {
                var l = $4t()
                return (
                  xe(
                    (c) => {
                      var h = ie.asClassName(t.icon),
                        u = { ...r }
                      return (
                        h !== c.e && tt(l, (c.e = h)), (c.t = Bi(l, u, c.t)), c
                      )
                    },
                    { e: void 0, t: void 0 },
                  ),
                  l
                )
              },
            }),
            null,
          ),
          M(o, () => t.children, null),
          M(
            o,
            I(te, {
              get when() {
                return t.rightIcon
              },
              get children() {
                var l = $4t()
                return (
                  xe(
                    (c) => {
                      var h = ie.asClassName(t.rightIcon),
                        u = { ...r, "margin-left": "auto" }
                      return (
                        h !== c.e && tt(l, (c.e = h)), (c.t = Bi(l, u, c.t)), c
                      )
                    },
                    { e: void 0, t: void 0 },
                  ),
                  l
                )
              },
            }),
            null,
          ),
          o
        )
      })()
    },
    F4t = Nnr,
    Rnr = X("<div>"),
    Anr = X("<div><div>"),
    Mnr = X("<span>")
  function O4t(i) {
    const [e, t] = le(!1)
    let s, n
    const r = XI(),
      o = () => {
        t(!e())
      },
      a = () => {
        t(!0)
      },
      l = (h) => {
        ;(n && n.contains(h.relatedTarget)) || t(!1)
      },
      c = () => {
        t(!1)
      }
    return [
      I(te, {
        get when() {
          return i.hidden
        },
        get children() {
          return i.children
        },
      }),
      I(te, {
        get when() {
          return i.hidden !== !0
        },
        get children() {
          return [
            (() => {
              var h = Rnr(),
                u = s
              return (
                typeof u == "function" ? Rs(u, h) : (s = h),
                h.addEventListener("mouseleave", l),
                h.addEventListener("mouseenter", a),
                h.addEventListener("click", o),
                M(h, () => i.children),
                xe((d) => Bi(h, i.parentStyle, d)),
                h
              )
            })(),
            I(te, {
              get when() {
                return e()
              },
              get children() {
                return I(RT, {
                  get mount() {
                    return r.portalElement
                  },
                  get children() {
                    var h = Anr(),
                      u = h.firstChild,
                      d = n
                    return (
                      typeof d == "function" ? Rs(d, h) : (n = h),
                      h.addEventListener("mouseleave", c),
                      h.style.setProperty("position", "absolute"),
                      h.style.setProperty("z-index", "1000"),
                      u.style.setProperty(
                        "background-color",
                        "var(--vscode-settings-dropdownBackground)",
                      ),
                      u.style.setProperty(
                        "border",
                        "1px solid var(--vscode-commandCenter-inactiveBorder)",
                      ),
                      u.style.setProperty("border-radius", "3px"),
                      u.style.setProperty(
                        "box-shadow",
                        "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
                      ),
                      u.style.setProperty("font-size", "10px"),
                      u.style.setProperty("width", "250px"),
                      u.style.setProperty("padding", "2px 6px"),
                      u.style.setProperty("user-select", "text"),
                      M(u, () => i.text),
                      xe(
                        (g) => {
                          var p = `${(s?.getBoundingClientRect().bottom ?? 0) - 3}px`,
                            m = `${Math.min(r.window.innerWidth - 275, (s?.getBoundingClientRect().left ?? 0) + (i.leftDelta ?? 0))}px`
                          return (
                            p !== g.e &&
                              ((g.e = p) != null
                                ? h.style.setProperty("top", p)
                                : h.style.removeProperty("top")),
                            m !== g.t &&
                              ((g.t = m) != null
                                ? h.style.setProperty("left", m)
                                : h.style.removeProperty("left")),
                            g
                          )
                        },
                        { e: void 0, t: void 0 },
                      ),
                      h
                    )
                  },
                })
              },
            }),
          ]
        },
      }),
    ]
  }
  function $nr(i) {
    return I(O4t, {
      get text() {
        return i.text
      },
      get parentStyle() {
        return i.parentStyle
      },
      get children() {
        var e = Mnr()
        return (
          xe(
            (t) => {
              var s = i.style,
                n = ie.asClassName($.info)
              return (t.e = Bi(e, s, t.e)), n !== t.t && tt(e, (t.t = n)), t
            },
            { e: void 0, t: void 0 },
          ),
          e
        )
      },
    })
  }

  return {
    Kk,
    R4t,
    PH,
    sQi,
    Bue,
    bXe,
    vXe,
    xnr,
    knr,
    M4t,
    nQi,
    ci,
    Enr,
    oQi,
    aQi,
    yXe,
    lQi,
    cQi,
    Tnr,
    Lnr,
    F4t,
    O4t,
    $nr,
  }
}

