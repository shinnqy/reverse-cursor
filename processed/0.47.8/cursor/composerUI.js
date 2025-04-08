// @ts-check

// 526673
export function createComposerUI(params) {
  const { Ot, Oc, j0, le, Q, ePs, Y4r, $e, q4r, ae, Jt, D, F, J4r, Gs, Pe, tt, oe, tgt, A, jr, z4r, G4r, Oi, j4r, X4r, ie, Qft, g7s, pi, o4r, uS, zc, _, Ke, zv, Pn, SJ, el, fsi, Z_r, p7s, gNs, bn, CC, mr, SE, tL, X_r, W_r, J_r, yw, Y_r, __r, lo, Wve, O_r, z_r, AB, jf, VJe, z_, Mt, XMt, r$t, QMt, IO, e$t, ZMt, t$t, i$t, s$t, n$t, JYe, TX, uYe, Yn, Om, Hhe, Zve, JMt, r8, YMt, fYe, SX, Oq, l7s, l4r, Ajt, kvs, a4r, zO, Q_r, Ka, Xi, Xs, NP, r4r} = params;

  function Q4r(i) {
    const e = Ot(),
      { unifiedMode: t } = Oc(() => i.composerDataHandle),
      [s, n, r] = j0(),
      [o, a] = le(!1),
      l = () => {
        r(), a(!1)
      },
      c = Q(() => i.modes.find((x) => x.id === i.selectedModeId)),
      { availableModels: u, currentPersistentModel: h } = ePs({
        composerModeId: t,
      }),
      { showHover: d, hideHover: g } = Y4r()
    $e(() => {
      const x = i.reactiveMenuCloser
      l()
    })
    const p = (x) => (x === "gpt-3.5-turbo" ? "gpt-3.5" : x),
      m = Q(() =>
        h() === "default"
          ? "Auto"
          : h() === "claude-3.7-sonnet-thinking-max" ||
              h() === "claude-3.7-sonnet-max" ||
              h() === "claude-3.7-sonnet-thinking"
            ? "claude-3.7-sonnet"
            : p(h()),
      ),
      v = Q(() => ({
        "text-overflow": "ellipsis",
        overflow: "hidden",
        "white-space": "nowrap",
        "line-height": "normal",
      })),
      y = Q(() => ({
        "font-size": "12px",
        "flex-shrink": 0,
        "vertical-align": "middle",
        position: "relative",
        top: "-1px",
        "margin-right": "1px",
        display: "inline-flex",
        "align-items": "center",
        "justify-content": "center",
      })),
      w = Q(
        () =>
          h() === "claude-3.7-sonnet-thinking-max" ||
          h() === "claude-3.7-sonnet-thinking",
      ),
      C = Q(
        () =>
          h() === "claude-3.7-sonnet-thinking-max" ||
          h() === "claude-3.7-sonnet-max",
      ),
      S = Q(() => (C() ? "continuous-gradient-container gradient-high" : ""))
    return D(ae, {
      get when() {
        return c()
      },
      children: (x) => [
        (() => {
          var k = q4r(),
            E = k.firstChild,
            I = E.firstChild,
            L = I.firstChild,
            P = E.nextSibling
          return (
            k.addEventListener("mouseleave", (N) => {
              s() || g()
            }),
            k.addEventListener("mouseenter", (N) => {
              s() || d(N, Jt ? "\u2318." : "\u2303.")
            }),
            k.addEventListener("click", (N) => {
              if (s()) {
                l()
                return
              }
              const R = N.currentTarget.getBoundingClientRect()
              i.role === "bottom"
                ? n({ x: R.left - 6, y: R.top - 3 })
                : n({ x: R.left - 6, y: R.bottom + 3 })
            }),
            k.style.setProperty("display", "flex"),
            k.style.setProperty("gap", "4px"),
            k.style.setProperty("font-size", "11px"),
            k.style.setProperty("align-items", "center"),
            k.style.setProperty("line-height", "12px"),
            k.style.setProperty("cursor", "pointer"),
            k.style.setProperty("min-width", "0"),
            k.style.setProperty("max-width", "100%"),
            k.style.setProperty("padding", "2.5px 6px"),
            k.style.setProperty("border-radius", "23px"),
            k.style.setProperty("flex-shrink", "0"),
            E.style.setProperty("display", "flex"),
            E.style.setProperty("align-items", "center"),
            E.style.setProperty("gap", "3px"),
            E.style.setProperty("min-width", "0"),
            E.style.setProperty("max-width", "100%"),
            E.style.setProperty("overflow", "hidden"),
            F(
              E,
              D(ae, {
                get when() {
                  return x().icon
                },
                children: (N) =>
                  (() => {
                    var R = J4r()
                    return (
                      R.style.setProperty("font-size", "11px"),
                      R.style.setProperty("flex-shrink", "0"),
                      R.style.setProperty("width", "13px"),
                      R.style.setProperty("height", "13px"),
                      R.style.setProperty("display", "flex"),
                      R.style.setProperty("align-items", "center"),
                      R.style.setProperty("justify-content", "center"),
                      R.style.setProperty("opacity", "0.5"),
                      (Gs ? "16px" : void 0) != null
                        ? R.style.setProperty("line-height", Gs ? "16px" : void 0)
                        : R.style.removeProperty("line-height"),
                      Pe(() => tt(R, oe.asClassName(N()))),
                      R
                    )
                  })(),
              }),
              I,
            ),
            I.style.setProperty("min-width", "0"),
            I.style.setProperty("max-width", "100%"),
            I.style.setProperty("overflow", "hidden"),
            I.style.setProperty("text-overflow", "ellipsis"),
            I.style.setProperty("white-space", "nowrap"),
            I.style.setProperty("line-height", "12px"),
            I.style.setProperty("display", "flex"),
            I.style.setProperty("align-items", "baseline"),
            I.style.setProperty("gap", "3px"),
            I.style.setProperty("height", "13px"),
            I.style.setProperty("font-weight", "510"),
            L.style.setProperty("opacity", "0.8"),
            L.style.setProperty("max-width", "120px"),
            F(L, () => x().label),
            F(
              I,
              D(ae, {
                get when() {
                  return x().keybinding
                },
                get children() {
                  var N = tgt()
                  return (
                    N.style.setProperty("opacity", "0.5"),
                    N.style.setProperty("font-size", "0.8em"),
                    N.style.setProperty("font-feature-settings", '"cv05" on'),
                    F(N, () => x().keybinding),
                    N
                  )
                },
              }),
              null,
            ),
            P.style.setProperty("font-size", "9px"),
            P.style.setProperty("flex-shrink", "0"),
            P.style.setProperty("opacity", "0.5"),
            Pe(
              (N) => {
                var R = i.uniqueDropdownId,
                  B = oe.asClassName(
                    i.shouldFlipChevron ? A.chevronUp : A.chevronDown,
                  )
                return (
                  R !== N.e && jr(k, "id", (N.e = R)),
                  B !== N.t && tt(P, (N.t = B)),
                  N
                )
              },
              { e: void 0, t: void 0 },
            ),
            k
          )
        })(),
        D(ae, {
          get when() {
            return !i.shouldCollapseModelToggleIn
          },
          get children() {
            var k = z4r(),
              E = k.firstChild,
              I = E.firstChild,
              L = E.nextSibling
            return (
              k.addEventListener("mouseleave", (P) => {
                s() || g()
              }),
              k.addEventListener("mouseenter", (P) => {
                s() || d(P, Jt ? "\u2318\u2325/" : "\u2303\u2387/")
              }),
              k.addEventListener("click", (P) => {
                if (s()) {
                  l()
                  return
                }
                const N = P.currentTarget.getBoundingClientRect()
                a(!0), n({ x: N.left + N.width / 2, y: N.bottom + 3 }), g()
              }),
              k.style.setProperty("display", "flex"),
              k.style.setProperty("gap", "2px"),
              k.style.setProperty("font-size", "11px"),
              k.style.setProperty("align-items", "center"),
              k.style.setProperty("line-height", "12px"),
              k.style.setProperty("cursor", "pointer"),
              k.style.setProperty("min-width", "0"),
              k.style.setProperty("max-width", "100%"),
              k.style.setProperty("padding", "2.5px 6px"),
              k.style.setProperty("border-radius", "23px"),
              k.style.setProperty("border", "none"),
              k.style.setProperty("background", "transparent"),
              E.style.setProperty("display", "flex"),
              E.style.setProperty("align-items", "center"),
              E.style.setProperty("color", "var(--vscode-foreground)"),
              E.style.setProperty("gap", "3px"),
              E.style.setProperty("min-width", "0"),
              E.style.setProperty("max-width", "100%"),
              E.style.setProperty("overflow-x", "hidden"),
              I.style.setProperty("min-width", "0"),
              I.style.setProperty("text-overflow", "ellipsis"),
              I.style.setProperty("vertical-align", "middle"),
              I.style.setProperty("white-space", "nowrap"),
              I.style.setProperty("line-height", "12px"),
              I.style.setProperty("color", "var(--vscode-input-foreground)"),
              I.style.setProperty("display", "flex"),
              I.style.setProperty("align-items", "center"),
              I.style.setProperty("gap", "2px"),
              I.style.setProperty("overflow", "hidden"),
              I.style.setProperty("height", "15px"),
              F(
                I,
                D(ae, {
                  get when() {
                    return w()
                  },
                  get fallback() {
                    return (() => {
                      var P = G4r(),
                        N = P.firstChild
                      return (
                        P.style.setProperty("overflow-x", "hidden"),
                        F(N, m),
                        Pe(
                          (R) => {
                            var B = S(),
                              W = v()
                            return (
                              B !== R.e && tt(P, (R.e = B)),
                              (R.t = Oi(N, W, R.t)),
                              R
                            )
                          },
                          { e: void 0, t: void 0 },
                        ),
                        P
                      )
                    })()
                  },
                  get children() {
                    var P = j4r(),
                      N = P.firstChild,
                      R = N.nextSibling
                    return (
                      P.style.setProperty("overflow-x", "hidden"),
                      P.style.setProperty("display", "inline-flex"),
                      P.style.setProperty("gap", "2px"),
                      F(R, m),
                      Pe(
                        (B) => {
                          var W = S(),
                            G = y(),
                            te = `${oe.asClassName(A.brain)}`,
                            re = v()
                          return (
                            W !== B.e && tt(P, (B.e = W)),
                            (B.t = Oi(N, G, B.t)),
                            te !== B.a && tt(N, (B.a = te)),
                            (B.o = Oi(R, re, B.o)),
                            B
                          )
                        },
                        { e: void 0, t: void 0, a: void 0, o: void 0 },
                      ),
                      P
                    )
                  },
                }),
              ),
              L.style.setProperty("font-size", "9px"),
              L.style.setProperty("flex-shrink", "0"),
              L.style.setProperty("color", "var(--vscode-foreground)"),
              L.style.setProperty("opacity", "0.5"),
              Pe(
                (P) => {
                  var N = `composer-unified-dropdown-model !border-none !px-1 !rounded-[8px]
                  ${C() ? " !opacity-80 hover:!opacity-95" : ""}`,
                    R = i.uniqueModelDropdownId,
                    B = oe.asClassName(
                      i.shouldFlipChevron ? A.chevronUp : A.chevronDown,
                    )
                  return (
                    N !== P.e && tt(k, (P.e = N)),
                    R !== P.t && jr(k, "id", (P.t = R)),
                    B !== P.a && tt(L, (P.a = B)),
                    P
                  )
                },
                { e: void 0, t: void 0, a: void 0 },
              ),
              k
            )
          },
        }),
        D(ae, {
          get when() {
            return s()
          },
          children: (k) =>
            D(X4r, {
              get position() {
                return k()
              },
              get composerDataHandle() {
                return i.composerDataHandle
              },
              get bubbleId() {
                return i.bubbleId
              },
              get anchor() {
                return o()
                  ? i.role === "bottom"
                    ? "bottom"
                    : "top"
                  : i.role === "bottom"
                    ? "bottom-left"
                    : "top-left"
              },
              get onSelectMode() {
                return i.onSelectMode
              },
              onSelectModel: (E) => {
                let I = E
                const L = t()
                e.composerModesService.setModeModel(L, I), i.onSelectModel?.(E)
              },
              close: (E) => {
                E || i.onCloseIgnoreClick?.(), i.onClose?.(), l()
              },
              get availableModels() {
                return u()
              },
              get selectedModelId() {
                return h()
              },
              get modes() {
                return i.modes
              },
              get selectedModeId() {
                return i.selectedModeId
              },
              get openModelToggleDirectly() {
                return i.openModelToggleDirectly || o()
              },
              get shouldShowModelToggleInMain() {
                return i.shouldCollapseModelToggleIn
              },
              get dropdownId() {
                return i.uniqueDropdownId
              },
              get uniqueModelDropdownId() {
                return i.uniqueModelDropdownId
              },
              transformModel: p,
              shouldAllowSearchMode: !0,
            }),
        }),
      ],
    })
  }
  var Z4r = ie("<input type=file accept=image/*>"),
    eBr = ie(
      '<div class=composer-bar-input-buttons><div></div><div class="button-container composer-button-area">',
    )
  function tBr(i) {
    const e = Ot(),
      {
        currentComposer: t,
        composerDataHandle: s,
        model: n,
        unifiedMode: r,
      } = Oc(() => i.composerDataHandle),
      o = e.analyticsService,
      a = Qft(s),
      l = Q(() => " \u23CE"),
      c = Q(
        () =>
          !e.composerService.canComposerSubmit(s(), i.bubbleId) &&
          (!a() || !!i.bubbleId),
      ),
      { mode: u, onSelectMode: h } = g7s(s, () => i.bubbleId),
      [d, g] = le(0)
    $e(() => {
      const m = e.keybindingService.onDidUpdateKeybindings(() => {
        g(Date.now())
      })
      pi(() => {
        m.dispose()
      })
    })
    const p = Q(() => {
      const m = d()
      return e.composerModesService.getAllModes().map((y) => {
        const w = y.actionId
          ? (e.keybindingService
              .lookupKeybindings(y.actionId)
              .at(0)
              ?.getLabel() ?? void 0)
          : void 0
        return {
          icon: y.icon ? A[y.icon] : void 0,
          label: y.name,
          id: y.id,
          description: y.description,
          keybinding: w,
        }
      })
    })
    return (() => {
      var m = eBr(),
        v = m.firstChild,
        y = v.nextSibling
      return (
        m.addEventListener("click", (w) => {
          w.target === w.currentTarget && i.onContainerClick()
        }),
        v.style.setProperty("display", "flex"),
        v.style.setProperty("align-items", "center"),
        v.style.setProperty("gap", "4px"),
        v.style.setProperty("margin-right", "4px"),
        v.style.setProperty("min-width", "0px"),
        v.style.setProperty("flex-basis", "0"),
        v.style.setProperty("flex-grow", "1"),
        v.style.setProperty("height", "20px"),
        F(
          v,
          D(Q4r, {
            get uniqueDropdownId() {
              return i.uniqueDropdownId
            },
            get uniqueModelDropdownId() {
              return i.uniqueModelDropdownId
            },
            get modes() {
              return p()
            },
            get selectedModeId() {
              return u()
            },
            onSelectMode: (w) => {
              h(w)
            },
            onCloseIgnoreClick: () => {
              e.composerViewsService.focus(s().data.composerId, !1)
            },
            get openModelToggleDirectly() {
              return i.shouldOpenModelToggleDirectly
            },
            get onClose() {
              return i.onCloseDropdown
            },
            get shouldFlipChevron() {
              return i.role === "bottom"
            },
            get shouldCollapseModelToggleIn() {
              return i.shouldCollapseModelToggleIn
            },
            get reactiveMenuCloser() {
              return i.reactiveMenuCloser
            },
            get shouldAllowSearchMode() {
              return i.shouldAllowSearchMode
            },
            get composerDataHandle() {
              return i.composerDataHandle
            },
            get bubbleId() {
              return i.bubbleId
            },
            get role() {
              return i.role ?? "bottom"
            },
          }),
        ),
        y.style.setProperty("margin-left", "auto"),
        y.style.setProperty("display", "flex"),
        y.style.setProperty("align-items", "center"),
        y.style.setProperty("gap", "8px"),
        F(
          y,
          D(o4r, {
            composerDataHandle: () => i.composerDataHandle,
            get setForceShowLargeContextWarning() {
              return i.setForceShowLargeContextWarning
            },
            bubbleId: () => i.bubbleId,
            style: { "font-size": "12px", color: "var(--vscode-foreground)" },
          }),
          null,
        ),
        F(
          y,
          D(ae, {
            get when() {
              return (
                n() === "gpt-4" ||
                n() === "gpt-4o" ||
                n()?.includes("claude") ||
                n() === "default" ||
                n() === "gpt-4o-mini"
              )
            },
            get children() {
              return D(uS, {
                get codicon() {
                  return A.imageTwo
                },
                style: { opacity: 0.5, color: "var(--vscode-input-foreground)" },
                onClick: (w) => {
                  const C = w.currentTarget.querySelector("input[type=file]")
                  C && C.click()
                },
                get children() {
                  var w = Z4r()
                  return (
                    w.addEventListener("change", (C) => {
                      const S = C.target.files?.[0]
                      if (!S || !S.type.startsWith("image/")) return
                      const x = new Image()
                      ;(x.src = URL.createObjectURL(S)),
                        (x.onload = () => {
                          i.onImageUpload(x, S)
                        })
                    }),
                    w.style.setProperty("display", "none"),
                    w
                  )
                },
              })
            },
          }),
          null,
        ),
        F(
          y,
          D(zc, {
            get style() {
              return { opacity: c() ? 0.5 : 1 }
            },
            get keybinding() {
              return l()
            },
            onClick: () => {
              c() ||
                (o.trackEvent("composer.submit", {
                  mode: "edit",
                  entry: "click",
                  useCodebase: !1,
                  isAgentic: r() === "agent",
                  isEditing: r() === "edit",
                  composerType: i.location,
                  model: n() ?? "unknown",
                  thinkingLevel: "none",
                }),
                i.onSubmit())
            },
            children: "Send",
          }),
          null,
        ),
        Pe((w) =>
          Oi(
            m,
            {
              overflow: "hidden",
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center",
              ...i.style,
            },
            w,
          ),
        ),
        m
      )
    })()
  }
  _(), _(), _(), _(), _(), _(), _(), Ke()
  var iBr = ie(
      '<div><div class="px-2 py-1.5 flex gap-1.5"><div></div><div class="text-[11px] select-text [color:var(--vscode-foreground)]"></div></div><div class="p-1 flex gap-0.5 items-center justify-end pt-0">',
    ),
    sBr = ie(
      '<div class="absolute inset-0 bg-black/10 z-10 pointer-events-none">',
    )
  function k7s(i) {
    return [
      Q(() => Q(() => !!i.showBackdrop)() && sBr()),
      (() => {
        var e = iBr(),
          t = e.firstChild,
          s = t.firstChild,
          n = s.nextSibling,
          r = t.nextSibling
        return (
          s.style.setProperty("padding-top", "3px"),
          s.style.setProperty("font-size", "12px"),
          s.style.setProperty("opacity", "0.8"),
          F(
            n,
            (() => {
              var o = Q(() => typeof i.message == "string")
              return () =>
                o()
                  ? D(zv, {
                      get rawText() {
                        return i.message
                      },
                      finished: !0,
                      codeBlockProps: { shouldRecompute: 0 },
                      get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
                        return i.allowCommandLinksPotentiallyUnsafe
                      },
                      class:
                        "text-[11px] select-text [color:var(--vscode-foreground)]",
                      markdownSectionClass: "my-0",
                    })
                  : i.message
            })(),
          ),
          F(
            r,
            D(Pn, {
              get each() {
                return i.buttons
              },
              children: (o) =>
                D(zc, {
                  get variant() {
                    return o.variant || "text"
                  },
                  get onClick() {
                    return o.onClick
                  },
                  get style() {
                    return { "flex-shrink": 1, "min-width": 0, ...o.style }
                  },
                  get textStyle() {
                    return {
                      overflow: "hidden",
                      "text-overflow": "ellipsis",
                      "min-width": 0,
                      flex: 1,
                      ...o.textStyle,
                    }
                  },
                  get class() {
                    return o.class
                  },
                  get "data-testid"() {
                    return o.testId
                  },
                  get children() {
                    return o.label
                  },
                }),
            }),
          ),
          Pe(
            (o) => {
              var a = [
                  "bg-dropdown-background border-dropdown-border border border-solid absolute -left-px -right-px z-[11]",
                  "p-0.5 rounded-lg shadow-md fade-in-fast",
                  i.positionBottom ? "bottom-full mb-1" : "top-full mt-1",
                  i.class || "",
                ].join(" "),
                l = {
                  "box-shadow":
                    "0px 36px 50px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(255, 255, 255, 0.05) inset",
                  ...i.style,
                },
                c = i.icon
              return (
                a !== o.e && tt(e, (o.e = a)),
                (o.t = Oi(e, l, o.t)),
                c !== o.a && tt(s, (o.a = c)),
                o
              )
            },
            { e: void 0, t: void 0, a: void 0 },
          ),
          e
        )
      })(),
    ]
  }
  var nBr = ie("<div><div>"),
    rBr = ie("<span class=composer-popup-message-model>"),
    E7s = ie("<span>"),
    oBr = ie("<span>Skip and Continue"),
    xsi = ie("<div>"),
    aBr = ie("<span>Cancel apply"),
    lBr = !1
  function ksi(i) {
    const e = Ot(),
      { composerDataService: t, composerService: s } = e,
      n = e.analyticsService,
      [r] = SJ(),
      [o, a] = le(!1),
      {
        composerDataHandle: l,
        currentComposer: c,
        updateCurrentComposer: u,
        isAgentic: h,
        unifiedMode: d,
        model: g,
        thinkingLevel: p,
        setThinkingLevel: m,
        composerMode: v,
        updateComposerModeSetStore: y,
      } = Oc(() => i.composerDataHandle),
      w = Q(() => c().composerId),
      C = Q(() =>
        i.nonReactiveInputBoxDelegate
          ? i.nonReactiveInputBoxDelegate
          : e.composerViewsService.getInputDelegate(w()),
      ),
      [S, x] = le(!1),
      [k, E] = le(!1),
      [I, L] = le(-1),
      [P, N] = le(void 0),
      [R, B] = le(!1),
      [W, G] = le(-1),
      [te, re] = le(!1),
      [Z, he] = le(void 0),
      [ve, pe] = le(void 0)
    $e(() => {
      const pn = () => {
        e.aiService.refreshDefaultModels(),
          e.aiService.checkLastDefaultModelNudge()
      }
      e.cursorAuthenticationService.addLoginChangedListener(pn),
        pi(() => {
          e.cursorAuthenticationService.removeLoginChangedListener(pn)
        })
    }),
      $e(
        el(
          () => g(),
          (pn) => {
            Z() !== pn && he(void 0)
          },
        ),
      )
    const ge = () => g() ?? "unknown",
      Oe = () => {
        const pn = g()
        return pn ? e.aiSettingsService.doesModelSupportAgent(pn) : !0
      }
    $e(
      el(d, (pn) => {
        const vr = pn === "agent",
          qr = Oe()
        he(vr && !qr ? ge() : void 0)
      }),
    )
    const Ie = Q(() => (i.isInputFocused !== void 0 ? i.isInputFocused() : S())),
      qe = (pn) => {
        i.setIsInputFocused ? i.setIsInputFocused(pn) : x(pn)
      },
      et = Q(() => i.bubbleId),
      We = (pn) => {
        et() ? t.updateComposerBubble(l(), et(), pn) : u(pn)
      },
      xe = Q(() =>
        i.bubbleId
          ? (t.getComposerBubble(l(), i.bubbleId)?.richText ?? "")
          : c()?.richText,
      ),
      lt = Q(() =>
        i.bubbleId
          ? (t.getComposerBubble(l(), i.bubbleId)?.text ?? "")
          : c()?.text,
      ),
      { shouldShowAcceptAll: Ut, shouldShowRejectAll: Ye } = fsi(l),
      Fe = Qft(l),
      Xe = Z_r(l),
      zt = p7s(l),
      {
        retryable: dt,
        showRequestId: ut,
        detail: ht,
        allowCommandLinksPotentiallyUnsafe: ti,
        buttons: ot,
        icon: Ct,
      } = gNs(() => Xe()?.error, Xe()?.generationUUID, e.commandService, zt),
      ii = Q(() => {
        if (!Xe()) return !1
        const pn = c(),
          vr = pn.conversation
        let qr = -1,
          Dn = -1
        for (let Cn = vr.length - 1; Cn >= 0; Cn--) {
          const Ur = vr[Cn]
          if (
            (qr === -1 && Ur.type === bn.AI && (qr = Cn),
            Dn === -1 && Ur.type === bn.HUMAN && (Dn = Cn),
            qr !== -1 && Dn !== -1)
          )
            break
        }
        if (qr === -1) return !1
        if (Dn === -1) return !i.bubbleId
        const Pi = vr[Dn].bubbleId
        return i.bubbleId === Pi
          ? !0
          : i.bubbleId
            ? !1
            : !(pn.editingBubbleId === Pi)
      }),
      fi = Q(() => {
        if (!Z()) return !1
        const pn = c()
        return i.bubbleId === pn.editingBubbleId
      }),
      [si, ft] = le(null),
      Ri = async (pn) => {
        if (!r()) {
          e.cursorAuthenticationService.login(),
            e.commandService.executeCommand(CC, "general")
          return
        }
        const vr = l().clone()
        try {
          let qr = lt()
          const Dn = i.bubbleId
          let Pi = !0,
            Cn = !0
          const Ur = Dn ? s.canComposerSubmit(vr, Dn) : s.canComposerSubmit(vr)
          if (!i.bubbleId && (!qr || qr.trim().length === 0)) {
            const du = t.getActionButtons(vr)
            if (du.length > 0) {
              if (pn?.keyboardEvent?.altKey) {
                if (
                  pn?.keyboardEvent?.altKey &&
                  du.length > 1 &&
                  du[1].onClick() === !0
                )
                  return
              } else if (du[0].onClick() === !0) return
            }
          }
          if (!Ur) return
          if (Dn) {
            Pi = await e.composerCheckpointService.isCheckpointSameAsCurrent(
              vr,
              Dn,
            )
            const du =
              vr.data.currentBubbleId === void 0
                ? vr.data.conversation.length
                : vr.data.conversation.findIndex((Ho) => Ho.bubbleId === Dn)
            if (du === -1) throw new Error("Bubble not found")
            const Ei = vr.data.conversation.findIndex((Ho) => Ho.bubbleId === Dn)
            if (Ei === -1) throw new Error("Bubble not found")
            let ts = Math.min(du, Ei),
              xi = Math.max(du, Ei)
            const Bi = []
            for (let Ho = ts + 1; Ho < xi; Ho++) {
              const Sa = vr.data.conversation[Ho]
              Sa.type === bn.AI && Bi.push(Sa)
            }
            const Kn = Bi.map((Ho) =>
              Ho.codeBlocks
                ?.map((Sa) => {
                  if (Sa.uri)
                    return e.composerDataService.getComposerCodeBlock(
                      vr,
                      Sa.uri,
                      Sa.version,
                    )
                })
                .filter(mr),
            )
              .flat()
              .filter(mr)
              .every((Ho) => Ho.isNotApplied)
            if (!Pi && c().currentBubbleId !== Dn) {
              const Ho = await e.prettyDialogService.openDialog({
                title: "Submit from a previous message?",
                message:
                  "Submitting from a previous message will revert file changes to before this message and clear the messages after this one.",
                cancelButton: { id: "cancel", label: "Cancel" },
                primaryButton: { id: "continue", label: "Continue and revert" },
                extraButtons: [
                  {
                    id: "continue-without-reverting",
                    label: "Continue without reverting",
                    type: "secondary",
                  },
                ],
                onCancel: () => {
                  C().focus()
                },
                dialogKey: "submit-from-previous-message-2",
                shouldShowDontAskAgain: !0,
              })
              if (((Cn = Ho === "continue-without-reverting"), Ho === "cancel"))
                return
            }
            u({ editingBubbleId: void 0 }),
              e.composerViewsService.focus(w()),
              e.composerViewsService.triggerScrollToBottom(w())
          }
          i.onSubmit && (await i.onSubmit()),
            e.aiService.addToPromptHistory({
              prompt: qr,
              commandType: SE.COMPOSER,
            })
          const wl = xe()
          await e.composerChatService.submitChatMaybeAbortCurrent(
            vr.data.composerId,
            qr,
            {
              richText: wl,
              usesCodebase: h() ? !1 : pn?.useCodebase,
              bubbleId: Dn,
              shouldCheckout: !Cn && !Pi,
            },
          )
        } finally {
          vr.dispose()
        }
      }
    let Rt
    const us = tL()
    let nt
    const jt = X_r({ composerDataHandle: l, bubbleId: et }),
      $s = W_r(l, jt, et() ? et : void 0),
      {
        allPills: Ss,
        selectedPillIndex: vt,
        setSelectedPillIndex: gi,
        generatePillIdByIndex: Ht,
        deleteLastPill: Zt,
      } = J_r(l, $s, {
        filePickerOpen: () => !1,
        handleAddPillClick: () => {},
        barRef: () => Rt,
        inputDelegate: C(),
        bubbleId: et(),
      }),
      Wi = Q(() => {
        if (i.bubbleId) {
          const pn = t.getComposerBubble(l(), i.bubbleId)
          return !pn || !pn.context ? yw() : pn.context
        }
        return c().context
      }),
      { suggestedPills: on } = Y_r(
        l,
        Wi,
        et(),
        () => i.disableSuggestedPills ?? !1,
      ),
      Js = Q(() => __r(l, et))
    $e(() => {
      const pn = c().composerId
      E(!0)
    }),
      $e(() => {
        lo(() => {
          const pn = e.composerEventService.onContextRemoved((Dn) => {
              const { composerId: Pi, bubbleId: Cn, removedMentionIds: Ur } = Dn
              Pi !== l().data.composerId || Cn !== et() || N(Ur)
            }),
            vr = e.composerEventService.onShouldShowPreview((Dn) => {
              const {
                composerId: Pi,
                bubbleId: Cn,
                contextType: Ur,
                index: wl,
              } = Dn
              if (Pi !== l().data.composerId || Cn !== et()) return
              const du = Ss()
              let Ei
              wl !== void 0
                ? (Ei = du.findIndex((xi) => xi.type === Wve[Ur]) + wl)
                : (Ei = du.findIndex((ts) => ts.type === Wve[Ur])),
                Ei !== void 0 && Ei !== -1 && L(Ei)
            }),
            qr = e.composerEventService.onShouldForceText((Dn) => {
              const { composerId: Pi, bubbleId: Cn } = Dn
              Pi !== w() || Cn !== et() || E(!0)
            })
          pi(() => {
            pn.dispose(), vr.dispose(), qr.dispose()
          })
        })
      })
    const Cr = Q(() =>
        i.bubbleId
          ? (t.getComposerBubble(l(), i.bubbleId)?.context ?? yw())
          : c().context,
      ),
      ma = (...pn) => {
        et()
          ? l().setData(
              "conversation",
              (vr) => vr.bubbleId === et(),
              "context",
              ...pn,
            )
          : l().setData("context", ...pn)
      }
    O_r(
      us,
      () => nt,
      () => Ht(vt(), Ss()[vt()]),
      () => [vt()],
    )
    const wt = AB(() => Rt, { width: 1e3, height: 0 }),
      Ne = z_r(l, et() ? et : void 0),
      [ze] = jf(VJe, e.configurationService, !1),
      Vt = () => {
        const pn = xe(),
          vr = lt(),
          qr = c().conversation.length === 0
        e.composerDataService.updateComposerData(w(), { richText: "", text: "" })
        const Dn = qr
          ? void 0
          : { richText: pn, text: vr, context: z_(c().context) }
        s.createComposer({ partialState: Dn })
      },
      [wi, Fs] = le(!1),
      [Zi, Nn] = le(!1),
      pr = Q(
        () =>
          `f${c().composerId.replaceAll("-", "")}${Mt().replaceAll("-", "")}unifieddropdown`,
      ),
      Br = Q(
        () =>
          `f${c().composerId.replaceAll("-", "")}${Mt().replaceAll("-", "")}unifiedmodeldropdown`,
      ),
      Xo = (pn) => {
        if (pn.altKey) {
          const wl = e.window.document.getElementById(pr())
          wl && (Fs(!1), Nn(!0), wl.click())
          return
        }
        const vr = e.composerModesService.getComposerUnifiedMode(w()),
          qr = e.composerModesService.getAllModes()
        if (!qr.length) return
        const Dn = qr.map((wl) => wl.id),
          Cn = (Dn.indexOf(vr) + (pn.shiftKey ? -1 : 1) + Dn.length) % Dn.length,
          Ur = Dn[Cn]
        u({ unifiedMode: Ur })
      },
      Hr = [
        { command: XMt, callback: (pn) => (Xo(pn), !0) },
        {
          command: r$t,
          callback: (pn) => {
            const vr = e.window.document.getElementById(pr())
            return vr && (Fs(!1), Nn(!0), vr.click()), !0
          },
        },
        {
          command: QMt,
          callback: (pn) => {
            if (c().unifiedMode === "chat") return !1
            const vr = e.composerViewsService.getComposerLocation(w()),
              qr = ["pane", "editor"],
              Dn = qr[(qr.indexOf(vr) + 1) % qr.length]
            return (
              Dn === "pane"
                ? s.handleOpenComposerPane(w())
                : Dn === "editor" && s.handleOpenComposerEditor(w()),
              !0
            )
          },
        },
        { command: IO, callback: (pn) => (Vt(), !0) },
        { command: e$t, callback: (pn) => (s.closeComposer(w()), !0) },
        {
          command: ZMt,
          callback: (pn) => (s.maybeUpdateFileSelectionsFromCmdI(w()), !0),
        },
        {
          command: t$t,
          callback: () => (
            e.composerUtilsService.selectPrevComposer(),
            setTimeout(() => {
              e.composerViewsService.focus(t.selectedComposerId, !0)
            }),
            !0
          ),
        },
        {
          command: i$t,
          callback: () => (
            e.composerUtilsService.selectNextComposer(),
            setTimeout(() => {
              e.composerViewsService.focus(t.selectedComposerId, !0)
            }),
            !0
          ),
        },
        {
          command: s$t,
          callback: (pn) => {
            if (pn.altKey) {
              const vr = Rh() ? pr() : Br(),
                qr = e.window.document.getElementById(vr)
              if (qr) return Fs(!0), qr.click(), !0
            }
            return !0
          },
        },
        {
          command: n$t,
          callback: (pn) => {
            const vr = d(),
              qr = vr === "agent"
            let Dn = e.aiSettingsService.getAvailableModelsReactive({
              isLongContextOrDebuggerMode: !1,
            })
            if (qr) {
              const du = Dn.filter((Ei) =>
                e.aiSettingsService.doesModelSupportAgent(Ei),
              )
              du.length > 0 && (Dn = du)
            }
            const Pi = g(),
              Ur = (Dn.findIndex((du) => du === Pi) + 1) % Dn.length,
              wl = Dn[Ur]
            return e.composerModesService.setModeModel(vr, wl), !0
          },
        },
        { command: JYe, callback: (pn) => (pe(Date.now()), !0) },
        {
          command: TX,
          callback: (pn) =>
            e.composerUtilsService.shouldShowCancel(w())
              ? (e.analyticsService.trackEvent("composer.cancel_chat", {
                  source: "cmd_backspace",
                }),
                s.cancelCurrentStep(w()),
                !0)
              : Ye()
                ? (s.rejectAll(w()), !0)
                : !1,
        },
      ],
      Jo = Q(() => [
        {
          command: uYe,
          callback: (pn) => {
            const vr = new Yn(pn),
              qr = e.keybindingService.softDispatch(vr, vr.target)
            if (qr.kind !== 2) return !1
            const Dn = [
              "workbench.action.toggleSidebarVisibility",
              Om,
              Hhe,
              Zve,
              JMt,
              r8,
              YMt,
            ]
            if (
              qr.commandId?.startsWith(e.composerModesService.getActionIdPrefix())
            )
              return (
                setTimeout(() => {
                  e.commandService.executeCommand(qr.commandId)
                }, 0),
                !0
              )
            if (Dn.includes(qr.commandId))
              return (
                setTimeout(() => {
                  e.commandService.executeCommand(qr.commandId)
                }, 0),
                !0
              )
            for (const Cn of Hr)
              if (Cn.command === qr.commandId && Cn.callback(pn))
                return pn.stopPropagation(), pn.preventDefault(), !0
            return !1
          },
        },
        {
          command: fYe,
          callback: (pn) => {
            const vr = e.keybindingService.lookupKeybinding(IO)
            return vr?.getDispatchChords()[0] === "meta+[KeyN]" ||
              vr?.getDispatchChords()[0] === "ctrl+[KeyN]"
              ? (Vt(), !0)
              : !1
          },
        },
        {
          command: SX,
          callback: (pn) => {
            if (R()) return !1
            const vr = c()
            if (!vr) return !1
            const qr = i.bubbleId,
              Dn = i.bubbleId
                ? vr.conversation.findIndex((Cn) => Cn.bubbleId === qr)
                : -1,
              Pi = (Cn) => {
                u({ selectedBubbleId: void 0, editingBubbleId: Cn }),
                  Oq(Cn),
                  setTimeout(() => {
                    e.composerViewsService
                      .getPrevEditingBubbleInputDelegate(w())
                      ?.focus()
                  })
              }
            if (pn.shiftKey) {
              const Cn = Dn === -1 ? vr.conversation.length - 1 : Dn - 1
              for (let Ur = Cn; Ur >= 0; Ur--) {
                const wl = vr.conversation[Ur]
                if (wl.type === bn.HUMAN && !wl.isCapabilityIteration)
                  return Pi(wl.bubbleId), !0
              }
              return !1
            }
            if (Dn !== -1) {
              for (let Cn = Dn + 1; Cn < vr.conversation.length; Cn++) {
                const Ur = vr.conversation[Cn]
                if (Ur.type === bn.HUMAN && !Ur.isCapabilityIteration)
                  return Pi(Ur.bubbleId), !0
              }
              return (
                u({ selectedBubbleId: void 0, editingBubbleId: void 0 }),
                e.composerViewsService.focus(w(), !0),
                !0
              )
            }
            return !1
          },
        },
      ]),
      Dc = Q(() =>
        e.composerDataService.getPendingUserDecisionGroup(l().data.composerId),
      ),
      Rh = Q(() => wt().width < 200)
    let Zh
    const Qg = D(l7s, {
        openAddPillMenuTrigger: ve,
        closeFilePickerMenuTrigger: () =>
          i.role === "top" && c().conversation.length > 0
            ? (e.reactiveStorageService.nonPersistentStorage
                .forceComposerDropdownRerender ?? 0)
            : 0,
        isMentionsMenuOpen: R,
        setIsMentionsMenuOpen: B,
        get composerDataHandle() {
          return l()
        },
        get id() {
          return `${c().composerId}-pane`
        },
        setContainerRef: (pn) => {
          ;(Rt = pn), i.setRef?.(pn)
        },
        allPills: Ss,
        get capabilityProvidedPills() {
          return Js()
        },
        suggestedPills: on,
        mentionIdsToDelete: P,
        setMentionIdsToDelete: N,
        setCodebaseSearchSettings: (pn) => {
          u({ codebaseSearchSettings: pn })
        },
        getCodebaseSearchSettings: () => c().codebaseSearchSettings,
        getContext: Cr,
        setContext: ma,
        get forceText() {
          return k()
        },
        setForceText: E,
        getPickerMenuProps: Ne,
        get richText() {
          return xe()
        },
        setRichText: (pn) => {
          We({ richText: pn })
        },
        get text() {
          return lt()
        },
        setText: (pn) => {
          We({ text: pn }), s.handleUserDidType(l())
        },
        sideEffects: $s,
        supports: jt,
        onFurtherArrowUp: () => (
          t.selectLastHumanBubbleAboveInput(l().data.composerId), !0
        ),
        onFurtherArrowDown: () =>
          i.location === "bar"
            ? !1
            : !i.bubbleId &&
                i.setSelectedPreviousComposerIndex &&
                c().conversation.length === 0
              ? (C().getRef()?.blur(), i.setSelectedPreviousComposerIndex(0), !0)
              : !1,
        get shouldDisplayMultiRowPills() {
          return Q(() => i.overrideShouldCollapse !== void 0)()
            ? !i.overrideShouldCollapse
            : !ze()
        },
        get style() {
          return {
            contain: "unset",
            background: "var(--vscode-input-background)",
            transition:
              "box-shadow 0.1s ease-in-out, border-color 0.1s ease-in-out",
            position: "relative",
            ...i.style,
          }
        },
        get role() {
          return i.role ?? (c().conversation.length === 0 ? "top" : "bottom")
        },
        bottomContainerStyle: { height: "unset" },
        get bottomContent() {
          return Q(() => !!i.hideBottomBar)()
            ? void 0
            : (() => {
                var pn = nBr(),
                  vr = pn.firstChild
                return (
                  pn.style.setProperty("flex", "1"),
                  pn.style.setProperty("width", "100%"),
                  pn.style.setProperty("height", "100%"),
                  pn.style.setProperty("display", "flex"),
                  pn.style.setProperty("align-items", "center"),
                  pn.style.setProperty("flex-shrink", "0"),
                  pn.style.setProperty("flex-direction", "column"),
                  pn.style.setProperty("margin-top", "17.695px"),
                  pn.style.setProperty("gap", "4px"),
                  vr.addEventListener("click", (qr) => {
                    qr.target === qr.currentTarget &&
                      !e.window.getSelection()?.toString() &&
                      C().focus()
                  }),
                  vr.style.setProperty("display", "flex"),
                  vr.style.setProperty("align-items", "center"),
                  vr.style.setProperty("justify-content", "space-between"),
                  vr.style.setProperty("gap", "0.25rem"),
                  vr.style.setProperty("flex-shrink", "0"),
                  vr.style.setProperty("width", "100%"),
                  F(
                    vr,
                    D(ae, {
                      get when() {
                        return r() && !lBr
                      },
                      get fallback() {
                        return D(l4r, {})
                      },
                      get children() {
                        return D(tBr, {
                          get shouldAllowSearchMode() {
                            return Zi()
                          },
                          setForceShowLargeContextWarning: re,
                          get bubbleId() {
                            return i.bubbleId
                          },
                          get location() {
                            return i.location
                          },
                          get shouldCollapseModelToggleIn() {
                            return Rh()
                          },
                          get shouldShowAgentic() {
                            return wt().width > 120
                          },
                          get showCancelledWhenGenerating() {
                            return i.role === "bottom"
                          },
                          get composerDataHandle() {
                            return l()
                          },
                          get role() {
                            return i.role
                          },
                          get isFocused() {
                            return Ie()
                          },
                          onSubmit: Ri,
                          get plainText() {
                            return lt()
                          },
                          get uniqueDropdownId() {
                            return pr()
                          },
                          get uniqueModelDropdownId() {
                            return Br()
                          },
                          get reactiveMenuCloser() {
                            return W()
                          },
                          get shouldShowModel() {
                            return wt().width > 260
                          },
                          get shouldOpenModelToggleDirectly() {
                            return wi()
                          },
                          onContainerClick: () => {
                            C().focus()
                          },
                          onCloseDropdown: () => {
                            Fs(!1), Nn(!1)
                          },
                          get shouldShowHints() {
                            return wt().width > 260
                          },
                          style: { flex: 1, "justify-content": "space-between" },
                          onImageUpload: (qr, Dn) => {
                            Ajt([Dn], e, $s().addImage), C().focus()
                          },
                        })
                      },
                    }),
                  ),
                  pn
                )
              })()
        },
        placeholder: "Plan, search, build anything",
        get undoRedoUri() {
          return e.selectedContextService.getUndoRedoUri(
            e.composerContextService.getContextId(l().data.composerId, et()),
          )
        },
        onFocus: () => {
          gi(-1),
            qe(!0),
            G(Date.now()),
            et()
              ? u({ lastFocusedBubbleId: et() })
              : u({ lastFocusedBubbleId: void 0 }),
            kvs.bindTo(e.contextKeyService).set(!0)
        },
        onBlur: () => {
          i.onBlur && i.onBlur(), qe(!1), kvs.bindTo(e.contextKeyService).set(!1)
        },
        onSubmit: (pn) => {
          n.trackEvent("composer.submit", {
            mode: "edit",
            entry: "keyboard",
            useCodebase: !1,
            isAgentic: e.composerDataService.getComposerIsAgentic(l()),
            isEditing:
              e.composerModesService.getComposerUnifiedMode(l()) === "edit",
            composerType: i.location,
            model: g() ?? "unknown",
            thinkingLevel: p() ?? "none",
          }),
            Ri({ useCodebase: !1, keyboardEvent: pn }),
            he(void 0)
        },
        onEscape: (pn) => {
          pn.stopImmediatePropagation(),
            pn.preventDefault(),
            i.onEscape
              ? i.onEscape()
              : i.location === "bar"
                ? s.close(w())
                : e.composerViewsService.blur(w())
        },
        get inputBoxDelegate() {
          return C()
        },
        setEditor: (pn) => {
          ft(pn), i.setLexicalEditor?.(pn)
        },
        onTryDeleteContext: Zt,
        onReset: Vt,
        onResetContext: () => {
          e.composerContextService.resetContext(l().data.composerId, et())
        },
        get forceShouldShowPillPreview() {
          return I()
        },
        resetForceShouldShowPillPreview: () => L(-1),
        onReferenceOpenEditors: () => {
          e.composerService.referenceOpenEditors(w())
        },
        onReferenceActiveEditors: () => {
          e.composerService.referenceOpenEditors(w(), !0)
        },
        get isLoopOnLintsEnabled() {
          return v()?.autoFix ?? !1
        },
        get onToggleAgentLoopOnLints() {
          return h()
            ? () => {
                e.composerModesService.setComposerAutoFix(l(), !v()?.autoFix)
              }
            : void 0
        },
        get extraPlugins() {
          return [D(a4r, {})]
        },
        get extraCommandListeners() {
          return [
            ...Jo(),
            {
              command: zO,
              callback: (pn) => {
                if (pn.repeat) return !0
                if (pn.shiftKey && (pn.metaKey || pn.ctrlKey)) {
                  if (
                    s.shouldShowAcceptRejectAll(w()) &&
                    Fe() &&
                    lt().trim() === ""
                  )
                    return s.acceptAll(w()), !0
                  if (ql()) {
                    const qr = e.composerDataService.getToolFormer(w())
                    if (qr) return qr.cancel(), !0
                  }
                  return !1
                }
                const vr = Dc()
                if (vr.length > 0) for (const qr of vr) qr.accept()
                else
                  Fe() && lt().trim() === ""
                    ? e.composerApplyService.applyCachedCodeBlocksOfLastMessage(
                        w(),
                      )
                    : Ut() && lt().trim() === ""
                      ? s.acceptAll(w())
                      : Ri({ useCodebase: !0 })
                return !0
              },
            },
          ]
        },
        get maxHeight() {
          return i.maxHeight
        },
        get minHeight() {
          return i.minHeight
        },
        disableUglyPreview: !0,
        get buttonArea() {
          return i.buttonArea
        },
        get onStartDrag() {
          return i.location === "bar" ? i.onStartDrag : void 0
        },
        enableAddFilePlugin: !0,
        get children() {
          return [
            Q(() => i.children),
            D(ae, {
              get when() {
                return ii()
              },
              get children() {
                return D(k7s, {
                  get icon() {
                    return `${oe.asClassName(Ct())} text-[var(--vscode-editorWarning-foreground)]`
                  },
                  get message() {
                    return ht()
                  },
                  get positionBottom() {
                    return i.role === "bottom"
                  },
                  get showBackdrop() {
                    return i.role === "bottom"
                  },
                  get allowCommandLinksPotentiallyUnsafe() {
                    return ti()
                  },
                  get buttons() {
                    return [
                      ...ot(),
                      ...(ut()
                        ? [
                            {
                              label: o() ? "Copied!" : "Copy request ID",
                              variant: "text",
                              onClick: () => {
                                e.clipboardService.writeText(
                                  Xe()?.generationUUID || "",
                                ),
                                  a(!0),
                                  setTimeout(() => {
                                    a(!1)
                                  }, 2e3)
                              },
                            },
                          ]
                        : []),
                      ...(dt() && Xe()?.resume
                        ? [
                            {
                              label: "Resume",
                              variant: "secondary",
                              onClick: Xe()?.resume,
                            },
                          ]
                        : []),
                      ...(dt() && !Xe()?.resume && Xe()?.rerun
                        ? [
                            {
                              label: "Try again",
                              variant: "secondary",
                              onClick: Xe()?.rerun,
                            },
                          ]
                        : []),
                    ]
                  },
                })
              },
            }),
            D(ae, {
              get when() {
                return Q(() => !ii())() && fi()
              },
              get children() {
                return D(k7s, {
                  get icon() {
                    return oe.asClassName(A.warning)
                  },
                  get message() {
                    return [
                      "Model",
                      " ",
                      (() => {
                        var pn = rBr()
                        return F(pn, Z), pn
                      })(),
                      " ",
                      "doesn't have good agent support yet. Start a new thread",
                      Q(() => (d() === "agent" ? " using edit or ask mode" : "")),
                      " for better results.",
                    ]
                  },
                  get buttons() {
                    return [
                      {
                        label: "Continue",
                        variant: "text",
                        onClick: () => {
                          he(void 0), C().focus()
                        },
                      },
                      {
                        label:
                          d() !== "agent"
                            ? "Start new thread"
                            : "Start new thread with Edit mode",
                        variant: "secondary",
                        class: "py-0.5",
                        onClick: () => {
                          s.createComposer({
                            partialState: {
                              unifiedMode: d() === "chat" ? "chat" : "edit",
                            },
                          }),
                            he(void 0)
                        },
                      },
                    ]
                  },
                  get positionBottom() {
                    return i.role === "bottom"
                  },
                  get showBackdrop() {
                    return i.role === "bottom"
                  },
                })
              },
            }),
          ]
        },
      }),
      r0 = Q(() =>
        c()
          ? e.composerDataService
              .getCodeBlocksOfStatuses(w(), "applying")
              .filter((qr) => !qr.isNotApplied).length > 0
          : !1,
      ),
      ql = Q_r(l),
      o0 = {
        position: "absolute",
        bottom: "100%",
        "margin-bottom": "8px",
        left: "50%",
        "z-index": 1e3,
        transform: "translateX(-50%)",
        "border-radius": "0.25rem",
        width: "fit-content",
        display: "flex",
        "align-items": "center",
        "max-width": "calc(100% - 32px)",
        padding: "4px",
        gap: "4px",
      },
      a0 = {
        padding: "2px 4px",
        transition: "100ms",
        "border-radius": "0.25rem",
        cursor: "pointer",
        "margin-left": "auto",
        "margin-right": "auto",
        "text-align": "center",
        "font-size": "12px",
        "flex-shrink": 0,
        gap: "4px",
        display: "flex",
        "align-items": "center",
        "white-space": "nowrap",
        overflow: "hidden",
        "text-overflow": "ellipsis",
      }
    return (() => {
      var pn = xsi()
      return (
        F(pn, () => i.aboveContent, null),
        F(pn, Qg, null),
        F(
          pn,
          D(ae, {
            get when() {
              return i.location !== "bar" && !i.bubbleId
            },
            get children() {
              return D(Ka, {
                get children() {
                  return [
                    D(Xi, {
                      get when() {
                        return ql()
                      },
                      get children() {
                        var vr = xsi()
                        return (
                          Oi(vr, o0),
                          F(
                            vr,
                            D(Xs, {
                              type: "true-secondary",
                              style: a0,
                              onClick: () => {
                                const qr =
                                  e.composerDataService.getToolFormer(w())
                                qr && qr.cancel()
                              },
                              get children() {
                                return [
                                  (() => {
                                    var qr = E7s()
                                    return F(qr, () => NP("\u21E7\u23CE")), qr
                                  })(),
                                  (() => {
                                    var qr = oBr()
                                    return (
                                      qr.style.setProperty("flex-shrink", "0"), qr
                                    )
                                  })(),
                                ]
                              },
                            }),
                          ),
                          vr
                        )
                      },
                    }),
                    D(Xi, {
                      get when() {
                        return r0()
                      },
                      get children() {
                        var vr = xsi()
                        return (
                          Oi(vr, o0),
                          F(
                            vr,
                            D(Xs, {
                              style: a0,
                              onClick: () => {
                                e.composerService.cancelAllApplies(w())
                              },
                              class: "composer-float-button",
                              get children() {
                                return [
                                  (() => {
                                    var qr = E7s()
                                    return F(qr, () => NP("\u232B")), qr
                                  })(),
                                  (() => {
                                    var qr = aBr()
                                    return (
                                      qr.style.setProperty("flex-shrink", "0"), qr
                                    )
                                  })(),
                                ]
                              },
                            }),
                          ),
                          vr
                        )
                      },
                    }),
                    "*/}",
                  ]
                },
              })
            },
          }),
          null,
        ),
        F(
          pn,
          D(ae, {
            get when() {
              return p() !== "high"
            },
            get children() {
              return D(r4r, {
                get role() {
                  return i.role
                },
                composerDataHandle: l,
                get forceShow() {
                  return te()
                },
                setForceShow: re,
                bubbleId: () => i.bubbleId,
                get style() {
                  return {
                    background:
                      i.role === "bottom"
                        ? "var(--vscode-dropdown-background)"
                        : void 0,
                  }
                },
              })
            },
          }),
          null,
        ),
        Pe((vr) =>
          Oi(
            pn,
            {
              display: "flex",
              "flex-direction": "column",
              "align-items": "stretch",
              "justify-content": "center",
              position: "relative",
              ...i.containerStyle,
            },
            vr,
          ),
        ),
        pn
      )
    })()
  }

  return {
    ksi,
  }
}
