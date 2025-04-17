// @ts-check

// 254623
export function createUI(params) {
  const { X, le, XI, De, Gt, M, I, te, Y, xe, Bi, dt, jDi, nr, fu, Vje, X3i, Y3i, Xl, as, $, $o, Pi, Wje, _n, U, ie, tt, du, dp, dP, qDi, _l, Rs, tn, RT, al, q, $n, Os, zy, Sw, vm, hb, Zb, wt, Zn, Is, zle, jne, r4t, W$, C9, kue, ud, GYe, bb, h0t, ss, Yo, Zen, Oa, KM, oi, li } = params;

  var ier = X("<span>"),
    ser = X(
      "<div><span>Consider <span>enabling Composer Turbo Mode</span> for lower wait times and faster edits.</span><a href=#><span>Dismiss",
    ),
    ner = X("<span>Update Fast Requests:"),
    rer = X("<div class=request-adjuster><span>"),
    p4t = X("<div>"),
    oer = X("<span>Loading..."),
    aer = X("<span class=success-message>"),
    ler = X("<span class=price-info>"),
    cer = X("<span>Error, please add requests <span>here</span>."),
    her = X("<div>Error, add requests <span>here</span>."),
    nf = (i) => {
      const [e, t] = le(1),
        s = XI()
      return (
        De(() => {
          if (i.show === !1) return
          t(1)
          const n = s.window.setInterval(
            () => {
              t((r) => (r === 3 ? 0 : r + 1))
            },
            i.speed === "slow" ? 350 : 175,
          )
          Gt(() => {
            s.window.clearInterval(n)
          })
        }),
        (() => {
          var n = ier()
          return (
            M(
              n,
              I(te, {
                get when() {
                  return i.show !== !1
                },
                get fallback() {
                  return "\xA0"
                },
                get children() {
                  return [
                    Y(() => ".".repeat(e())),
                    I(te, {
                      get when() {
                        return e() === 0
                      },
                      children: "\xA0",
                    }),
                  ]
                },
              }),
            ),
            xe((r) => Bi(n, { "user-select": "text", ...i.style }, r)),
            n
          )
        })()
      )
    }
  function uer() {
    const i = dt(),
      [e, t] = le(!1)
    return I(te, {
      get when() {
        return !e()
      },
      get children() {
        var s = ser(),
          n = s.firstChild,
          r = n.firstChild,
          o = r.nextSibling,
          a = n.nextSibling,
          l = a.firstChild
        return (
          s.style.setProperty("display", "flex"),
          s.style.setProperty("justify-content", "space-between"),
          s.style.setProperty("align-items", "center"),
          s.style.setProperty("gap", "16px"),
          s.style.setProperty("padding-bottom", "10px"),
          o.addEventListener("click", () => {
            i.commandService.executeCommand(jDi)
          }),
          o.style.setProperty("display", "inline"),
          o.style.setProperty("color", "var(--vscode-textLink-foreground)"),
          o.style.setProperty("cursor", "pointer"),
          a.addEventListener("click", (c) => {
            c.preventDefault(), t(!0)
          }),
          a.style.setProperty("font-size", "0.75rem"),
          a.style.setProperty("color", "var(--vscode-textLink-foreground)"),
          a.style.setProperty("text-decoration", "none"),
          a.style.setProperty("display", "flex"),
          a.style.setProperty("align-items", "center"),
          a.style.setProperty("flex-shrink", "0"),
          a.style.setProperty("cursor", "pointer"),
          l.style.setProperty("font-size", "0.75rem"),
          l.style.setProperty("flex-shrink", "0"),
          s
        )
      },
    })
  }
  function nXe(i) {
    const e = dt(),
      [t, s] = le(500),
      [n, r] = le("idle"),
      [o, a] = le(500)
    let l
    nr(async () => {
      try {
        const h = e.instantiationService.createInstance(fu, { service: Vje })
        h.createServer(), (l = await h.get())
        const u = await l.getFastRequests(new X3i({}))
        a(u.requestQuota)
      } catch (h) {
        console.error("Error in UpsellFastRequests onMount:", h), r("error")
      }
    }),
      De(() => {
        s(o())
      })
    const c = async () => {
      if ((r("loading"), l !== void 0))
        try {
          await l.updateFastRequests(new Y3i({ requestQuota: t() })),
            r("done"),
            a(t()),
            setTimeout(() => {
              i.setIsUpsellFastRequestsShowing(!1)
            }, 2e3)
        } catch (h) {
          console.error("Error in handleUpgrade:", h), r("error")
        }
    }
    return (() => {
      var h = p4t()
      return (
        h.style.setProperty("display", "flex"),
        h.style.setProperty("justify-content", "space-between"),
        h.style.setProperty("align-items", "center"),
        h.style.setProperty("gap", "16px"),
        M(
          h,
          I(te, {
            get when() {
              return n() !== "error"
            },
            get fallback() {
              return I(te, {
                get when() {
                  return !i.conciseMessage
                },
                get fallback() {
                  return (() => {
                    var u = her(),
                      d = u.firstChild,
                      g = d.nextSibling
                    return (
                      u.style.setProperty(
                        "color",
                        "var(--vscode-editorError-foreground)",
                      ),
                      Xl(g, "click", e.cursorAuthenticationService.settings),
                      g.style.setProperty("display", "inline"),
                      g.style.setProperty(
                        "color",
                        "var(--vscode-textLink-foreground)",
                      ),
                      g.style.setProperty("cursor", "pointer"),
                      u
                    )
                  })()
                },
                get children() {
                  var u = cer(),
                    d = u.firstChild,
                    g = d.nextSibling
                  return (
                    u.style.setProperty(
                      "color",
                      "var(--vscode-editorError-foreground)",
                    ),
                    Xl(g, "click", e.cursorAuthenticationService.settings),
                    g.style.setProperty("display", "inline"),
                    g.style.setProperty(
                      "color",
                      "var(--vscode-textLink-foreground)",
                    ),
                    g.style.setProperty("cursor", "pointer"),
                    u
                  )
                },
              })
            },
            get children() {
              return [
                (() => {
                  var u = rer(),
                    d = u.firstChild
                  return (
                    u.style.setProperty("display", "flex"),
                    u.style.setProperty("align-items", "center"),
                    u.style.setProperty("gap", "8px"),
                    M(
                      u,
                      I(te, {
                        get when() {
                          return !i.conciseMessage
                        },
                        get fallback() {
                          return "\xA0"
                        },
                        get children() {
                          return ner()
                        },
                      }),
                      d,
                    ),
                    M(
                      u,
                      I(as, {
                        onClick: () => s((g) => Math.max(500, g - 500)),
                        get disabled() {
                          return t() <= 500
                        },
                        get style() {
                          return {
                            "background-color": "var(--vscode-editor-background)",
                            color: "var(--vscode-editor-foreground)",
                            border: "none",
                            cursor: t() <= 500 ? "default" : "pointer",
                            opacity: t() <= 500 ? "0.5" : "1",
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "12px",
                            "box-sizing": "border-box",
                          }
                        },
                        get codicon() {
                          return $.dash
                        },
                        codiconStyle: {
                          color: "var(--vscode-editor-foreground)",
                        },
                      }),
                      d,
                    ),
                    M(d, t),
                    M(
                      u,
                      I(as, {
                        onClick: () => s((g) => Math.min(5e3, g + 500)),
                        get disabled() {
                          return t() >= 5e3
                        },
                        get style() {
                          return {
                            "background-color": "var(--vscode-editor-background)",
                            color: "var(--vscode-editor-foreground)",
                            border: "none",
                            cursor: t() >= 5e3 ? "default" : "pointer",
                            opacity: t() >= 5e3 ? "0.5" : "1",
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "12px",
                            "box-sizing": "border-box",
                          }
                        },
                        get codicon() {
                          return $.plus
                        },
                        codiconStyle: {
                          color: "var(--vscode-editor-foreground)",
                        },
                      }),
                      null,
                    ),
                    u
                  )
                })(),
                I(te, {
                  get when() {
                    return !i.conciseMessage
                  },
                  get children() {
                    var u = p4t()
                    return u.style.setProperty("flex", "1"), u
                  },
                }),
                I($o, {
                  get children() {
                    return [
                      I(Pi, {
                        get when() {
                          return n() === "loading"
                        },
                        get children() {
                          return oer()
                        },
                      }),
                      I(Pi, {
                        get when() {
                          return n() === "done"
                        },
                        get children() {
                          var u = aer()
                          return (
                            M(
                              u,
                              I(te, {
                                get when() {
                                  return !i.conciseMessage
                                },
                                get fallback() {
                                  return "Updated successfully!"
                                },
                                get children() {
                                  return [
                                    "Updated successfully! You now have ",
                                    Y(() => t()),
                                    " fast requests.",
                                  ]
                                },
                              }),
                            ),
                            u
                          )
                        },
                      }),
                      I(Pi, {
                        get when() {
                          return n() === "idle"
                        },
                        get children() {
                          var u = ler()
                          return (
                            M(
                              u,
                              I(as, {
                                type: "primary",
                                onClick: c,
                                get style() {
                                  return {
                                    "font-size": "12px",
                                    padding: "2px 4px",
                                    cursor: t() === o() ? "default" : "pointer",
                                    opacity:
                                      t() === o() || i.conciseMessage
                                        ? "0.5"
                                        : "1",
                                  }
                                },
                                get disabled() {
                                  return t() === o()
                                },
                                get children() {
                                  return [
                                    Y(() =>
                                      Y(() => t() > o())()
                                        ? "+"
                                        : t() < o()
                                          ? "-"
                                          : "",
                                    ),
                                    "$",
                                    Y(() => (Math.abs(t() - o()) / 500) * 20),
                                    I(te, {
                                      get when() {
                                        return !i.conciseMessage
                                      },
                                      get fallback() {
                                        return "/mo"
                                      },
                                      children: "/mo Confirm",
                                    }),
                                  ]
                                },
                              }),
                            ),
                            u
                          )
                        },
                      }),
                    ]
                  },
                }),
                I(te, {
                  get when() {
                    return i.conciseMessage
                  },
                  get children() {
                    var u = p4t()
                    return u.style.setProperty("flex", "1"), u
                  },
                }),
              ]
            },
          }),
        ),
        h
      )
    })()
  }
  function dXi() {
    const i = dt(),
      e = (r) => {
        if (r && Wje(r.scheme)) return r
      },
      [t, s] = le(e(i.aiService.getLastActiveFileEditor()?.input?.resource)),
      n = i.editorService.onDidActiveEditorChange(() => {
        s(e(i.aiService.getLastActiveFileEditor()?.input?.resource))
      })
    return (
      Gt(() => {
        n.dispose()
      }),
      t
    )
  }
  var rXe = X("<span class=infotext>"),
    der = X("<span>Increase hard limit."),
    fer = X("<span>Enable usage-based pricing for unlimited fast requests"),
    ger = X(
      "<div><div><span class=slow-gen-info-icon><span></span></span><span>Using slow request</span></div><span></span><span>",
    ),
    per = X(
      "<div><span>Slow request<span></span><span>(<!>)</span><span>Skip the wait.</span></span><span>",
    ),
    mer = X("<span class=slow-gen-info-icon><span>"),
    ber = X("<span>Using slow request"),
    ver = X("<span>usage-based pricing for unlimited fast requests"),
    m4t = X("<span>"),
    Pue = X("<span>here"),
    yer = X("<div><span>Slow request, "),
    fXi = X("<div>"),
    wer = X("<span>usage-based pricing"),
    Cer = X("<span>Upgrade to Pro"),
    gXi = X("<span>fast requests"),
    oXe = (i) => {
      const e = dt(),
        t = e.cursorAuthenticationService.membershipType(),
        s = Y(() => !(i.hideDotsLoading ?? !1)),
        [n, r] = le(!1),
        o = Y(
          () =>
            i.queuePositionResponse !== void 0 &&
            (i.queuePositionResponse.position !== -1 ||
              i.queuePositionResponse.secondsLeftToWait !== void 0 ||
              i.queuePositionResponse.newQueuePosition !== void 0),
        )
      let a
      const l = Y(() => i.queuePositionResponse !== void 0)
      De(() => {
        const u = l()
        pXi(e)
          .then(
            ({
              usageBasedPremiumRequestsEnabled: d,
              isUsagePricingEnabled: g,
            }) => {
              r(d),
                e.reactiveStorageService.setApplicationUserPersistentStorage(
                  "aiSettings",
                  { isUsagePricingEnabled: g },
                )
            },
          )
          .catch((d) => {
            console.error(d)
          })
      })
      const c = () => {
          i.setIsUpsellingUsageBasedPricing?.(!0)
        },
        h = async () => {
          i.setIsUpsellingHardLimit?.(!0)
        }
      return I(te, {
        get when() {
          return o()
        },
        get fallback() {
          return I(te, {
            get when() {
              return s() && i.isLoading
            },
            get children() {
              var u = fXi()
              return (
                u.style.setProperty(
                  "color",
                  "var(--vscode-input-placeholderForeground)",
                ),
                M(
                  u,
                  I(te, {
                    get when() {
                      return i.statusMessages?.at(0)
                    },
                    children: (d) =>
                      (() => {
                        var g = m4t()
                        return (
                          g.style.setProperty("font-size", "10px"), M(g, d), g
                        )
                      })(),
                  }),
                  null,
                ),
                M(u, I(nf, { show: !0 }), null),
                u
              )
            },
          })
        },
        get children() {
          return I($o, {
            get children() {
              return [
                I(Pi, {
                  get when() {
                    return (
                      i.queuePositionResponse?.secondsLeftToWait !== void 0 ||
                      i.queuePositionResponse?.newQueuePosition !== void 0
                    )
                  },
                  get children() {
                    return [
                      I(te, {
                        get when() {
                          return !i.conciseMessage
                        },
                        get children() {
                          var u = ger(),
                            d = u.firstChild,
                            g = d.firstChild,
                            p = g.firstChild,
                            m = g.nextSibling,
                            b = m.firstChild,
                            y = d.nextSibling,
                            w = y.nextSibling
                          return (
                            u.style.setProperty("display", "flex"),
                            u.style.setProperty("flex-direction", "column"),
                            u.style.setProperty("align-items", "left"),
                            u.style.setProperty("gap", "0.25rem"),
                            d.style.setProperty("display", "flex"),
                            d.style.setProperty("flex-direction", "row"),
                            d.style.setProperty("align-items", "center"),
                            d.style.setProperty("gap", "0.25rem"),
                            g.style.setProperty("font-size", "0.8rem"),
                            g.style.setProperty("height", "1rem"),
                            g.style.setProperty("max-width", "100%"),
                            M(
                              g,
                              I(te, {
                                get when() {
                                  return t === _n.FREE
                                },
                                get children() {
                                  var C = rXe()
                                  return (
                                    M(
                                      C,
                                      I(te, {
                                        get when() {
                                          return i.spaceBelow !== !1
                                        },
                                        get fallback() {
                                          return "Consider upgrading to get fast access."
                                        },
                                        children:
                                          "During times of high demand, free users are given slower requests. Consider upgrading to get fast access.",
                                      }),
                                    ),
                                    C
                                  )
                                },
                              }),
                              null,
                            ),
                            M(
                              g,
                              I(te, {
                                get when() {
                                  return t !== _n.FREE
                                },
                                get children() {
                                  var C = rXe()
                                  return (
                                    M(
                                      C,
                                      I(te, {
                                        get when() {
                                          return i.spaceBelow !== !1
                                        },
                                        get fallback() {
                                          return "You have reached your included limit."
                                        },
                                        children:
                                          "You have reached your included limit, so subsequent requests will be slow. You can get more fast requests with usage-based pricing.",
                                      }),
                                    ),
                                    C
                                  )
                                },
                              }),
                              null,
                            ),
                            M(
                              m,
                              (() => {
                                var C = Y(() => !i.isLoading)
                                return () => C() && ". "
                              })(),
                              null,
                            ),
                            M(
                              d,
                              I(te, {
                                get when() {
                                  return i.isLoading
                                },
                                get children() {
                                  return I(nf, {
                                    get show() {
                                      return s()
                                    },
                                  })
                                },
                              }),
                              null,
                            ),
                            y.style.setProperty("opacity", "0.75"),
                            M(
                              y,
                              I(te, {
                                get when() {
                                  return i.isLoading
                                },
                                get children() {
                                  return [
                                    I(te, {
                                      get when() {
                                        return (
                                          i.queuePositionResponse
                                            ?.secondsLeftToWait !== void 0
                                        )
                                      },
                                      get children() {
                                        return [
                                          "Wait time: approximately",
                                          " ",
                                          Y(
                                            () =>
                                              i.queuePositionResponse
                                                ?.secondsLeftToWait,
                                          ),
                                          " ",
                                          "second",
                                          Y(() =>
                                            i.queuePositionResponse
                                              ?.secondsLeftToWait !== void 0 &&
                                            i.queuePositionResponse
                                              ?.secondsLeftToWait !== 1
                                              ? "s"
                                              : "",
                                          ),
                                          ".",
                                          " ",
                                        ]
                                      },
                                    }),
                                    I(te, {
                                      get when() {
                                        return (
                                          i.queuePositionResponse
                                            ?.newQueuePosition !== void 0
                                        )
                                      },
                                      get children() {
                                        return [
                                          "Queue position:",
                                          " ",
                                          Y(
                                            () =>
                                              i.queuePositionResponse
                                                ?.newQueuePosition,
                                          ),
                                          ".",
                                          " ",
                                        ]
                                      },
                                    }),
                                  ]
                                },
                              }),
                            ),
                            w.style.setProperty("opacity", "0.75"),
                            M(
                              w,
                              I($o, {
                                get children() {
                                  return [
                                    I(Pi, {
                                      get when() {
                                        return i.queuePositionResponse
                                          ?.hitHardLimit
                                      },
                                      get children() {
                                        return [
                                          "Monthly hard limit reached.",
                                          " ",
                                          (() => {
                                            var C = der()
                                            return (
                                              C.addEventListener("click", () => {
                                                e.reactiveStorageService.setNonPersistentStorage(
                                                  "showUsageBasedPricingModal",
                                                  i.queuePositionResponse
                                                    ?.usageEventDetails ??
                                                    "justshow",
                                                )
                                              }),
                                              C.style.setProperty(
                                                "display",
                                                "inline",
                                              ),
                                              C.style.setProperty(
                                                "color",
                                                "var(--vscode-textLink-foreground)",
                                              ),
                                              C.style.setProperty(
                                                "cursor",
                                                "pointer",
                                              ),
                                              C
                                            )
                                          })(),
                                        ]
                                      },
                                    }),
                                    I(Pi, {
                                      get when() {
                                        return i.queuePositionResponse
                                          ?.couldEnableUsageBasedPricingToSkip
                                      },
                                      get children() {
                                        var C = fer()
                                        return (
                                          C.addEventListener("click", c),
                                          C.style.setProperty(
                                            "display",
                                            "inline",
                                          ),
                                          C.style.setProperty(
                                            "color",
                                            "var(--vscode-textLink-foreground)",
                                          ),
                                          C.style.setProperty(
                                            "cursor",
                                            "pointer",
                                          ),
                                          C
                                        )
                                      },
                                    }),
                                    I(Pi, {
                                      get when() {
                                        return i.queuePositionResponse?.customLink
                                      },
                                      children: (C) =>
                                        (() => {
                                          var S = m4t()
                                          return (
                                            S.addEventListener("click", () => {
                                              try {
                                                let x = U.parse(C().address)
                                                e.openerService.open(x, {
                                                  fromUserGesture: !0,
                                                })
                                              } catch (x) {
                                                console.error(
                                                  "error in slow pool component",
                                                  x,
                                                )
                                              }
                                            }),
                                            S.style.setProperty(
                                              "display",
                                              "inline",
                                            ),
                                            S.style.setProperty(
                                              "color",
                                              "var(--vscode-textLink-foreground)",
                                            ),
                                            S.style.setProperty(
                                              "cursor",
                                              "pointer",
                                            ),
                                            M(S, () => C().message),
                                            S
                                          )
                                        })(),
                                    }),
                                  ]
                                },
                              }),
                            ),
                            xe(
                              (C) => {
                                var S = i.spaceBelow === !1 ? "nowrap" : void 0,
                                  x = ie.asClassName($.info)
                                return (
                                  S !== C.e &&
                                    ((C.e = S) != null
                                      ? g.style.setProperty("white-space", S)
                                      : g.style.removeProperty("white-space")),
                                  x !== C.t && tt(p, (C.t = x)),
                                  C
                                )
                              },
                              { e: void 0, t: void 0 },
                            ),
                            u
                          )
                        },
                      }),
                      I(te, {
                        get when() {
                          return i.conciseMessage
                        },
                        get children() {
                          var u = per(),
                            d = u.firstChild,
                            g = d.firstChild,
                            p = g.nextSibling,
                            m = p.nextSibling,
                            b = m.firstChild,
                            y = b.nextSibling,
                            w = y.nextSibling,
                            C = m.nextSibling
                          return (
                            u.style.setProperty("display", "flex"),
                            u.style.setProperty("flex-direction", "column"),
                            p.style.setProperty("width", "15px"),
                            p.style.setProperty("display", "inline-block"),
                            M(p, I(nf, { show: !0 })),
                            m.style.setProperty("display", "inline-block"),
                            M(
                              m,
                              () =>
                                i.queuePositionResponse?.secondsLeftToWait ??
                                i.queuePositionResponse?.newQueuePosition,
                              y,
                            ),
                            C.addEventListener("click", () => {
                              e.reactiveStorageService.setNonPersistentStorage(
                                "showUsageBasedPricingModal",
                                i.queuePositionResponse?.usageEventDetails ??
                                  "justshow",
                              )
                            }),
                            C.style.setProperty("display", "inline"),
                            C.style.setProperty(
                              "color",
                              "var(--vscode-textLink-foreground)",
                            ),
                            C.style.setProperty("cursor", "pointer"),
                            xe((S) =>
                              (S = `${String(i.queuePositionResponse?.secondsLeftToWait ?? i.queuePositionResponse?.newQueuePosition).length * 10 + 10}px`) !=
                              null
                                ? m.style.setProperty("width", S)
                                : m.style.removeProperty("width"),
                            ),
                            u
                          )
                        },
                      }),
                    ]
                  },
                }),
                I(Pi, {
                  when: !0,
                  get children() {
                    var u = fXi()
                    return (
                      u.style.setProperty("display", "flex"),
                      u.style.setProperty("flex-direction", "row"),
                      u.style.setProperty("align-items", "center"),
                      u.style.setProperty("gap", "0.25rem"),
                      M(
                        u,
                        I(te, {
                          get when() {
                            return !i.conciseMessage
                          },
                          get children() {
                            return [
                              (() => {
                                var d = mer(),
                                  g = d.firstChild
                                return (
                                  d.style.setProperty("font-size", "0.8rem"),
                                  d.style.setProperty("height", "1rem"),
                                  d.style.setProperty("max-width", "100%"),
                                  M(
                                    d,
                                    I(te, {
                                      get when() {
                                        return t === _n.FREE
                                      },
                                      get children() {
                                        var p = rXe()
                                        return (
                                          M(
                                            p,
                                            I(te, {
                                              get when() {
                                                return i.spaceBelow !== !1
                                              },
                                              get fallback() {
                                                return "Consider upgrading to get fast access."
                                              },
                                              children:
                                                "During times of high demand, free users are given slower access to premium models. Consider upgrading to get fast access.",
                                            }),
                                          ),
                                          p
                                        )
                                      },
                                    }),
                                    null,
                                  ),
                                  M(
                                    d,
                                    I(te, {
                                      get when() {
                                        return t !== _n.FREE
                                      },
                                      get children() {
                                        var p = rXe()
                                        return (
                                          M(
                                            p,
                                            I(te, {
                                              get when() {
                                                return i.spaceBelow !== !1
                                              },
                                              get fallback() {
                                                return "Your account is above its fast premium model access quota for the month."
                                              },
                                              children:
                                                "Your account is above its fast premium model (GPT-4/GPT-4o/Claude 3.5 Sonnet) request quota for the month. During times of high demand, requests will be delayed.",
                                            }),
                                          ),
                                          p
                                        )
                                      },
                                    }),
                                    null,
                                  ),
                                  xe(
                                    (p) => {
                                      var m =
                                          i.spaceBelow === !1 ? "nowrap" : void 0,
                                        b = ie.asClassName($.info)
                                      return (
                                        m !== p.e &&
                                          ((p.e = m) != null
                                            ? d.style.setProperty(
                                                "white-space",
                                                m,
                                              )
                                            : d.style.removeProperty(
                                                "white-space",
                                              )),
                                        b !== p.t && tt(g, (p.t = b)),
                                        p
                                      )
                                    },
                                    { e: void 0, t: void 0 },
                                  ),
                                  d
                                )
                              })(),
                              (() => {
                                var d = ber(),
                                  g = d.firstChild
                                return (
                                  M(
                                    d,
                                    (() => {
                                      var p = Y(() => !i.isLoading)
                                      return () => p() && ". "
                                    })(),
                                    null,
                                  ),
                                  d
                                )
                              })(),
                              (() => {
                                var d = m4t()
                                return (
                                  d.style.setProperty("opacity", "0.75"),
                                  M(
                                    d,
                                    I(te, {
                                      get when() {
                                        return (
                                          i.isLoading &&
                                          i.queuePositionResponse?.position !== -1
                                        )
                                      },
                                      get children() {
                                        return [
                                          "Position ",
                                          Y(
                                            () =>
                                              i.queuePositionResponse?.position,
                                          ),
                                          ".",
                                          " ",
                                        ]
                                      },
                                    }),
                                    null,
                                  ),
                                  M(
                                    d,
                                    I(te, {
                                      get when() {
                                        return t === _n.PRO
                                      },
                                      get fallback() {
                                        return I(te, {
                                          get when() {
                                            return t === _n.ENTERPRISE
                                          },
                                          get fallback() {
                                            return [
                                              (() => {
                                                var g = Cer()
                                                return (
                                                  Xl(
                                                    g,
                                                    "click",
                                                    e.cursorAuthenticationService
                                                      .settings,
                                                  ),
                                                  g.style.setProperty(
                                                    "display",
                                                    "inline",
                                                  ),
                                                  g.style.setProperty(
                                                    "color",
                                                    "var(--vscode-textLink-foreground)",
                                                  ),
                                                  g.style.setProperty(
                                                    "cursor",
                                                    "pointer",
                                                  ),
                                                  g
                                                )
                                              })(),
                                              " ",
                                              "to get fast access.",
                                            ]
                                          },
                                          get children() {
                                            return I(te, {
                                              get when() {
                                                return n()
                                              },
                                              get fallback() {
                                                return [
                                                  "Add fast requests",
                                                  " ",
                                                  (() => {
                                                    var g = Pue()
                                                    return (
                                                      Xl(
                                                        g,
                                                        "click",
                                                        e
                                                          .cursorAuthenticationService
                                                          .settings,
                                                      ),
                                                      g.style.setProperty(
                                                        "display",
                                                        "inline",
                                                      ),
                                                      g.style.setProperty(
                                                        "color",
                                                        "var(--vscode-textLink-foreground)",
                                                      ),
                                                      g.style.setProperty(
                                                        "cursor",
                                                        "pointer",
                                                      ),
                                                      g
                                                    )
                                                  })(),
                                                  ".",
                                                ]
                                              },
                                              get children() {
                                                return [
                                                  "Enable",
                                                  " ",
                                                  (() => {
                                                    var g = wer()
                                                    return (
                                                      g.addEventListener(
                                                        "click",
                                                        c,
                                                      ),
                                                      g.style.setProperty(
                                                        "display",
                                                        "inline",
                                                      ),
                                                      g.style.setProperty(
                                                        "color",
                                                        "var(--vscode-textLink-foreground)",
                                                      ),
                                                      g.style.setProperty(
                                                        "cursor",
                                                        "pointer",
                                                      ),
                                                      g
                                                    )
                                                  })(),
                                                ]
                                              },
                                            })
                                          },
                                        })
                                      },
                                      get children() {
                                        return I(te, {
                                          get when() {
                                            return n()
                                          },
                                          get fallback() {
                                            return [
                                              "If you'd like, you can add more",
                                              " ",
                                              (() => {
                                                var g = gXi()
                                                return (
                                                  g.addEventListener(
                                                    "click",
                                                    () => {
                                                      i.setIsUpsellFastRequestsShowing(
                                                        !0,
                                                      )
                                                    },
                                                  ),
                                                  g.style.setProperty(
                                                    "display",
                                                    "inline",
                                                  ),
                                                  g.style.setProperty(
                                                    "color",
                                                    "var(--vscode-textLink-foreground)",
                                                  ),
                                                  g.style.setProperty(
                                                    "cursor",
                                                    "pointer",
                                                  ),
                                                  g
                                                )
                                              })(),
                                              ".",
                                            ]
                                          },
                                          get children() {
                                            return [
                                              "If you'd like, you can enable",
                                              " ",
                                              (() => {
                                                var g = ver()
                                                return (
                                                  g.addEventListener("click", c),
                                                  g.style.setProperty(
                                                    "display",
                                                    "inline",
                                                  ),
                                                  g.style.setProperty(
                                                    "color",
                                                    "var(--vscode-textLink-foreground)",
                                                  ),
                                                  g.style.setProperty(
                                                    "cursor",
                                                    "pointer",
                                                  ),
                                                  g
                                                )
                                              })(),
                                              ".",
                                            ]
                                          },
                                        })
                                      },
                                    }),
                                    null,
                                  ),
                                  d
                                )
                              })(),
                              I(te, {
                                get when() {
                                  return i.isLoading
                                },
                                get children() {
                                  return I(nf, {
                                    get show() {
                                      return s()
                                    },
                                  })
                                },
                              }),
                            ]
                          },
                        }),
                        null,
                      ),
                      M(
                        u,
                        I(te, {
                          get when() {
                            return i.conciseMessage
                          },
                          get children() {
                            var d = yer(),
                              g = d.firstChild,
                              p = g.firstChild
                            return (
                              M(
                                g,
                                I(te, {
                                  get when() {
                                    return t === _n.PRO
                                  },
                                  get fallback() {
                                    return I(te, {
                                      get when() {
                                        return t === _n.ENTERPRISE
                                      },
                                      get fallback() {
                                        return [
                                          "upgrade",
                                          " ",
                                          (() => {
                                            var m = Pue()
                                            return (
                                              Xl(
                                                m,
                                                "click",
                                                e.cursorAuthenticationService
                                                  .settings,
                                              ),
                                              m.style.setProperty(
                                                "display",
                                                "inline",
                                              ),
                                              m.style.setProperty(
                                                "color",
                                                "var(--vscode-textLink-foreground)",
                                              ),
                                              m.style.setProperty(
                                                "cursor",
                                                "pointer",
                                              ),
                                              m
                                            )
                                          })(),
                                          " ",
                                        ]
                                      },
                                      get children() {
                                        return I(te, {
                                          get when() {
                                            return n()
                                          },
                                          get fallback() {
                                            return [
                                              "add fast requests",
                                              " ",
                                              (() => {
                                                var m = Pue()
                                                return (
                                                  Xl(
                                                    m,
                                                    "click",
                                                    e.cursorAuthenticationService
                                                      .settings,
                                                  ),
                                                  m.style.setProperty(
                                                    "display",
                                                    "inline",
                                                  ),
                                                  m.style.setProperty(
                                                    "color",
                                                    "var(--vscode-textLink-foreground)",
                                                  ),
                                                  m.style.setProperty(
                                                    "cursor",
                                                    "pointer",
                                                  ),
                                                  m
                                                )
                                              })(),
                                              ".",
                                            ]
                                          },
                                          get children() {
                                            return [
                                              "get fast access",
                                              " ",
                                              (() => {
                                                var m = Pue()
                                                return (
                                                  m.addEventListener("click", c),
                                                  m.style.setProperty(
                                                    "display",
                                                    "inline",
                                                  ),
                                                  m.style.setProperty(
                                                    "color",
                                                    "var(--vscode-textLink-foreground)",
                                                  ),
                                                  m.style.setProperty(
                                                    "cursor",
                                                    "pointer",
                                                  ),
                                                  m
                                                )
                                              })(),
                                            ]
                                          },
                                        })
                                      },
                                    })
                                  },
                                  get children() {
                                    return I(te, {
                                      get when() {
                                        return n()
                                      },
                                      get fallback() {
                                        return [
                                          "add",
                                          " ",
                                          (() => {
                                            var m = gXi()
                                            return (
                                              m.addEventListener("click", () => {
                                                i.setIsUpsellFastRequestsShowing(
                                                  !0,
                                                )
                                              }),
                                              m.style.setProperty(
                                                "display",
                                                "inline",
                                              ),
                                              m.style.setProperty(
                                                "color",
                                                "var(--vscode-textLink-foreground)",
                                              ),
                                              m.style.setProperty(
                                                "cursor",
                                                "pointer",
                                              ),
                                              m
                                            )
                                          })(),
                                          ".",
                                        ]
                                      },
                                      get children() {
                                        return [
                                          "get fast access",
                                          " ",
                                          (() => {
                                            var m = Pue()
                                            return (
                                              m.addEventListener("click", () => {
                                                e.reactiveStorageService
                                                  .applicationUserPersistentStorage
                                                  .aiSettings
                                                  .isUsagePricingEnabled
                                                  ? (aXe(e), h())
                                                  : c()
                                              }),
                                              m.style.setProperty(
                                                "display",
                                                "inline",
                                              ),
                                              m.style.setProperty(
                                                "color",
                                                "var(--vscode-textLink-foreground)",
                                              ),
                                              m.style.setProperty(
                                                "cursor",
                                                "pointer",
                                              ),
                                              m
                                            )
                                          })(),
                                        ]
                                      },
                                    })
                                  },
                                }),
                                null,
                              ),
                              M(d, I(nf, { show: !0 }), null),
                              d
                            )
                          },
                        }),
                        null,
                      ),
                      u
                    )
                  },
                }),
              ]
            },
          })
        },
      })
    },
    Ser = async (i) => {
      const { isUsagePricingEnabled: e } = await pXi(i)
      i.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", {
        isUsagePricingEnabled: e,
      })
    },
    pXi = async (i) => {
      try {
        const e = await i.cursorAuthenticationService.dashboardClient(),
          t =
            i.cursorAuthenticationService.membershipType() === _n.ENTERPRISE
              ? i.reactiveStorageService.applicationUserPersistentStorage
                  .aiSettings.teamIds
              : [],
          s = await e.getUsageBasedPremiumRequests({ teamId: t?.at(0) })
        return (
          await aXe(i),
          {
            usageBasedPremiumRequestsEnabled: !0,
            isUsagePricingEnabled: s.usageBasedPremiumRequests,
          }
        )
      } catch {
        return { usageBasedPremiumRequestsEnabled: !1, isUsagePricingEnabled: !1 }
      }
    },
    aXe = async (i) => {
      const e = await i.cursorAuthenticationService.dashboardClient(),
        t =
          i.cursorAuthenticationService.membershipType() === _n.ENTERPRISE
            ? i.reactiveStorageService.applicationUserPersistentStorage.aiSettings
                .teamIds
            : [],
        s = await e.getHardLimit({ teamId: t?.at(0) })
      return (
        i.reactiveStorageService.setApplicationUserPersistentStorage(
          "aiSettings",
          { usageHardLimit: s.hardLimit },
        ),
        s.hardLimit
      )
    },
    xer = X(
      "<div><div>Confirm to enable usage-based pricing with a $20 monthly limit.</div><div>",
    ),
    ker = X("<div><div>Or set a  <span>custom limit</span>.</div><div>"),
    Eer = X("<br>")
  function lXe(i) {
    const e = dt(),
      t = async () => {
        try {
          const n = await e.cursorAuthenticationService.dashboardClient(),
            r =
              e.cursorAuthenticationService.membershipType() === _n.ENTERPRISE
                ? e.reactiveStorageService.applicationUserPersistentStorage
                    .aiSettings.teamIds
                : []
          await n.setHardLimit({
            teamId: r?.at(0),
            hardLimit: 20,
            noUsageBasedAllowed: !1,
          }),
            await Ser(e),
            e.notificationService.info(
              "Usage-based pricing enabled successfully. You can manage this setting at cursor.com/settings",
            ),
            i.setIsUpsellingUsageBasedPricing(!1)
        } catch (n) {
          let r = "Failed to enable usage-based pricing. Please try again."
          if (n instanceof du) {
            const o = dP(n)
            o?.details && (r = `${o.details.title} ${o.details.detail}`)
          }
          e.notificationService.error(r), i.setIsUpsellingUsageBasedPricing(!1)
        }
      },
      s = Y(() =>
        i.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
      )
    return (() => {
      var n = xer(),
        r = n.firstChild,
        o = r.nextSibling
      return (
        M(
          o,
          I(as, {
            onClick: () => i.setIsUpsellingUsageBasedPricing(!1),
            title: "Cancel",
            type: "secondary",
            get style() {
              return { "font-size": "12px", padding: "4px 8px", ...s() }
            },
          }),
          null,
        ),
        M(
          o,
          I(as, {
            onClick: t,
            title: "Confirm",
            get style() {
              return { "font-size": "12px", padding: "4px 8px", ...s() }
            },
          }),
          null,
        ),
        xe(
          (a) => {
            var l = {
                padding: "8px",
                display: "flex",
                "flex-direction": "column",
                gap: "8px",
                ...(i.isCompact && {
                  "flex-direction": "row",
                  "justify-content": "space-between",
                  padding: "0px",
                  "padding-left": "8px",
                  "border-left": "2px solid var(--vscode-textBlockQuote-border)",
                }),
              },
              c = {
                "font-size": "12px",
                color: "var(--vscode-editor-foreground)",
                ...(i.isCompact && { "font-size": "11px" }),
              },
              h = {
                display: "flex",
                "justify-content": "flex-end",
                gap: "6px",
                ...(i.isCompact && { gap: "4px" }),
              }
            return (
              (a.e = Bi(n, l, a.e)),
              (a.t = Bi(r, c, a.t)),
              (a.a = Bi(o, h, a.a)),
              a
            )
          },
          { e: void 0, t: void 0, a: void 0 },
        ),
        n
      )
    })()
  }
  function cXe(i) {
    const e = dt(),
      t = Y(
        () =>
          e.reactiveStorageService.applicationUserPersistentStorage.aiSettings
            .usageHardLimit,
      ),
      s = async (r) => {
        try {
          const o = await e.cursorAuthenticationService.dashboardClient(),
            a =
              e.cursorAuthenticationService.membershipType() === _n.ENTERPRISE
                ? e.reactiveStorageService.applicationUserPersistentStorage
                    .aiSettings.teamIds
                : []
          if (r)
            await o.setHardLimit({
              teamId: a?.at(0),
              hardLimit: r * 2,
              noUsageBasedAllowed: !1,
            }),
              e.notificationService.info(
                `Monthly limit increased to $${r * 2}. You can manage this setting at cursor.com/settings`,
              )
          else {
            const l = await aXe(e)
            await o.setHardLimit({
              teamId: a?.at(0),
              hardLimit: l + 20,
              noUsageBasedAllowed: !1,
            }),
              e.notificationService.info(
                "Monthly limit increased by $20. You can manage this setting at cursor.com/settings",
              )
          }
          i.setIsUpsellingHardLimit(!1)
        } catch (o) {
          let a = "Failed to increase usage limit. Please try again."
          if (o instanceof du) {
            const l = dP(o)
            l?.details && (a = `${l.details.title} ${l.details.detail}`)
          }
          e.notificationService.error(a), i.setIsUpsellingHardLimit(!1)
        } finally {
          aXe(e)
        }
      },
      n = Y(() =>
        i.isCompact ? { padding: "0px 4px", "font-size": "10px" } : {},
      )
    return (() => {
      var r = ker(),
        o = r.firstChild,
        a = o.firstChild,
        l = a.nextSibling,
        c = o.nextSibling
      return (
        M(
          o,
          I(te, {
            get when() {
              return t()
            },
            fallback: "Confirm to increase your monthly limit by another $20.",
            children: (h) =>
              `Confirm to increase your monthly limit from $${h()} to $${h() * 2}.`,
          }),
          a,
        ),
        M(
          o,
          I(te, {
            get when() {
              return !i.isCompact
            },
            get fallback() {
              return Eer()
            },
            children: " ",
          }),
          a,
        ),
        l.addEventListener("click", () => {
          e.commandService.executeCommand(qDi), i.setIsUpsellingHardLimit(!1)
        }),
        l.style.setProperty("color", "var(--vscode-textLink-foreground)"),
        l.style.setProperty("cursor", "pointer"),
        M(
          c,
          I(as, {
            onClick: () => i.setIsUpsellingHardLimit(!1),
            title: "Cancel",
            type: "secondary",
            get style() {
              return { "font-size": "12px", padding: "4px 8px", ...n() }
            },
          }),
          null,
        ),
        M(
          c,
          I(as, {
            onClick: () => s(t()),
            title: "Confirm",
            get style() {
              return { "font-size": "12px", padding: "4px 8px", ...n() }
            },
          }),
          null,
        ),
        xe(
          (h) => {
            var u = {
                padding: "8px",
                display: "flex",
                "flex-direction": "column",
                gap: "8px",
                ...(i.isCompact && {
                  padding: "0px",
                  "padding-left": "8px",
                  "border-left": "2px solid var(--vscode-textBlockQuote-border)",
                  "flex-direction": "row",
                  "justify-content": "space-between",
                }),
              },
              d = {
                "font-size": "12px",
                color: "var(--vscode-editor-foreground)",
                ...(i.isCompact && { "font-size": "11px" }),
              },
              g = {
                display: "flex",
                "justify-content": "flex-end",
                gap: "6px",
                ...(i.isCompact && { gap: "4px", "align-items": "center" }),
              }
            return (
              (h.e = Bi(r, u, h.e)),
              (h.t = Bi(o, d, h.t)),
              (h.a = Bi(c, g, h.a)),
              h
            )
          },
          { e: void 0, t: void 0, a: void 0 },
        ),
        r
      )
    })()
  }
  function Ier(i, e) {
    nr(() => {
      const t = i()
      if (!t) return
      const s = new ResizeObserver(() => {
        e()
      })
      s.observe(t), Gt(() => s.disconnect())
    })
  }
  function qk(i = null) {
    const [e, t] = le(i)
    return [
      e,
      (o) => {
        t(o)
      },
      () => t(null),
      () => {
        t(e() ? null : i)
      },
    ]
  }
  function mXi(i, e, t = 100, s = () => !1) {
    const n = dt()
    let r,
      o = !1
    const a = (c) => {
        const h = i()
        h && (h.contains(c.target) || e(c))
      },
      l = () => {
        r !== void 0 && (clearTimeout(r), (r = void 0)),
          o &&
            n.window?.document &&
            (n.window.document.removeEventListener("mouseup", a), (o = !1))
      }
    return (
      De(() => {
        if (s()) {
          l()
          return
        }
        const c = () => {
          n.window?.document &&
            (n.window.document.addEventListener("mouseup", a), (o = !0))
        }
        l(),
          nr(() => {
            r = setTimeout(c, t)
          }),
          Gt(l)
      }),
      l
    )
  }
  var bXi = X("<div>"),
    vXi = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }
  function eD(i) {
    const e = dt()
    let t
    const [s, n] = qk()
    let r = !1
    De(() => {
      i.reactiveCloser && r && i.close()
    }),
      De(() => {
        nr(() => {
          r = !0
        })
      }),
      De(() => {
        i.shouldAutoFocus && t?.focus()
      })
    const o = () => {
      const c = e.window,
        h = i.marginToOverflowRoot ?? 2,
        u = i.marginToNonBlockingRoot ?? 2,
        d = i.anchor ?? "top-left",
        g = i.isRelative ?? !1,
        p = i.nonBlockingDirection ?? "horizontal",
        m = i.preventOverflow ?? !0,
        b = i.overflowRoot ?? c.document.body
      if (!m) {
        n(i.position)
        return
      }
      const y = { ...i.position },
        w = t?.getBoundingClientRect() ?? { ...vXi },
        C = t?.parentElement?.getBoundingClientRect() ?? { ...vXi }
      switch ((g && ((y.x += C.left), (y.y += C.top)), d)) {
        case "top":
          y.x -= w.width / 2
          break
        case "bottom":
          ;(y.x -= w.width / 2), (y.y -= w.height)
          break
        case "left":
          y.y -= w.height / 2
          break
        case "right":
          ;(y.x -= w.width), (y.y -= w.height / 2)
          break
        case "top-right":
          y.x -= w.width
          break
        case "bottom-left":
          y.y -= w.height
          break
        case "bottom-right":
          ;(y.x -= w.width), (y.y -= w.height)
          break
      }
      const S = b?.getBoundingClientRect() ?? {
        top: 0,
        left: 0,
        right: c.innerWidth,
        bottom: c.innerHeight,
        width: c.innerWidth,
        height: c.innerHeight,
      }
      let x = {
        ...y,
        x: Math.max(Math.min(y.x, S.right - w.width - h), h),
        y: Math.max(Math.min(y.y, S.bottom - w.height - h), h),
      }
      if (i.nonBlockingRoot) {
        const k =
          typeof i.nonBlockingRoot == "string"
            ? c.document.querySelector(i.nonBlockingRoot)?.getBoundingClientRect()
            : i.nonBlockingRoot.getBoundingClientRect()
        k &&
          (p === "horizontal"
            ? x.x < k.right + u
              ? (x = { ...x, x: k.left - u - w.width })
              : x.x + w.width > k.left - u && (x = { ...x, x: k.right + u })
            : p === "vertical" &&
              (x.y < k.bottom + u
                ? (x = { ...x, y: k.top - u - w.height })
                : x.y + w.height > k.top - u && (x = { ...x, y: k.bottom + u })))
      }
      g && (x = { ...x, x: x.x - C.left, y: x.y - C.top }), n(x)
    }
    Ier(() => t, o),
      De(() => {
        _l([() => i.position], o)
      }),
      De(() => {
        const c = i.close,
          h = (u) => {
            u.key === "Escape" && (u.preventDefault(), c())
          }
        e.window.document.addEventListener("keydown", h),
          Gt(() => {
            e.window.document.removeEventListener("keydown", h)
          })
      }),
      mXi(
        () => t,
        (c) => {
          !c ||
            e.window.document
              .querySelector(i.nonBlockingRoot)
              ?.contains(c.target) ||
            i.close(!0)
        },
        300,
      )
    const a = {
        "box-sizing": "border-box",
        padding: "2px",
        "border-radius": "4px",
        "background-color": "var(--vscode-settings-dropdownBackground)",
        border: "1px solid var(--vscode-settings-dropdownBorder)",
        "align-items": "stretch",
        "font-size": "10px",
        display: "flex",
        "flex-direction": "column",
        gap: "2px",
      },
      l = (() => {
        var c = bXi()
        return (
          Rs((h) => {
            i.setRef?.(h), (t = h)
          }, c),
          dp(
            c,
            tn(i, {
              get class() {
                return (
                  (i.animationType === "scale"
                    ? "scale-in-fast"
                    : i.animationType === "fade"
                      ? "fade-in-fast"
                      : "") + (i.class ? ` ${i.class}` : "")
                )
              },
              get style() {
                return {
                  ...a,
                  position: i.isRelative ? "absolute" : "fixed",
                  visibility: s() ? "visible" : "hidden",
                  ...(s() && { top: `${s().y}px`, left: `${s().x}px` }),
                  width: typeof i.width == "number" ? `${i.width}px` : i.width,
                  height:
                    typeof i.height == "number" ? `${i.height}px` : i.height,
                  "z-index": 100 + (i.zIndexModifier ?? 0),
                  "transform-origin": (i.anchor ?? "top-left").replace("-", " "),
                  "box-shadow": "2px 4px 10px 0px rgba(89, 89, 89, 0.10)",
                  ...(typeof i.style == "string" ? {} : (i.style ?? {})),
                }
              },
            }),
            !1,
            !0,
          ),
          M(c, () => i.children),
          c
        )
      })()
    return [
      I(te, {
        get when() {
          return i.shouldUseBackdrop ?? !1
        },
        get children() {
          var c = bXi()
          return (
            c.addEventListener("click", () => i.close()),
            xe((h) =>
              Bi(
                c,
                {
                  "z-index": 100 + (i.zIndexModifier ?? 0) - 1,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  ...(i.shouldShadeOverlay
                    ? { "background-color": "rgba(0, 0, 0, 0.3)" }
                    : {}),
                },
                h,
              ),
            ),
            c
          )
        },
      }),
      I(te, {
        get when() {
          return i.shouldMountInPortal
        },
        fallback: l,
        get children() {
          return I(RT, {
            get mount() {
              return e.portalElement
            },
            children: l,
          })
        },
      }),
    ]
  }
  var Der = X("<span class=monaco-highlighted-label>")
  function jk(i) {
    let e, t
    const s = (r, o = []) => {
        let a = 0,
          l = 0
        return r.replace(/\r\n|\r|\n/g, (c, h) => {
          ;(l =
            c ===
            `\r
`
              ? -1
              : 0),
            (h += a)
          for (const u of o)
            u.end <= h ||
              (u.start >= h && (u.start += l), u.end >= h && (u.end += l))
          return (a += l), "\u23CE"
        })
      },
      n = () => {
        if (!e) return
        const r = i.escapeNewLines ? s(i.text, i.highlights) : i.text,
          o = i.highlights || [],
          a = []
        let l = 0
        for (const c of o) {
          if (c.end === c.start) continue
          if (l < c.start) {
            const d = r.substring(l, c.start)
            i.supportIcons ? a.push(...al(d)) : a.push(d), (l = c.start)
          }
          const h = r.substring(l, c.end),
            u = q("span.highlight", void 0, ...(i.supportIcons ? al(h) : [h]))
          a.push(u), (l = c.end)
        }
        if (l < r.length) {
          const c = r.substring(l)
          i.supportIcons ? a.push(...al(c)) : a.push(c)
        }
        $n(e, ...a)
      }
    return (
      De(() => {
        if ((n(), i.hoverDelegate?.showNativeHover))
          e && (e.title = i.title || "")
        else if (i.title) {
          const r = i.hoverDelegate || Os("mouse")
          t?.dispose(), (t = zy().setupManagedHover(r, e, i.title))
        }
      }),
      Gt(() => {
        t?.dispose()
      }),
      (() => {
        var r = Der(),
          o = e
        return (
          typeof o == "function" ? Rs(o, r) : (e = r),
          xe((a) => Bi(r, { ...i.style }, a)),
          r
        )
      })()
    )
  }
  function yXi({ position: i = 3 } = {}) {
    const { showHover: e, hideHover: t } = Sw(300)
    return {
      showHover: (n, r) => {
        e({
          target: n.currentTarget,
          appearance: { compact: !0, showPointer: !0 },
          content: r,
          position: { hoverPosition: i },
          additionalClasses: ["chat-hover-tooltip"],
        })
      },
      hideHover: t,
    }
  }
  var Lue = X("<span>"),
    Ter = X("<div class=ya-solid-dropdown tabindex=-1><button tabindex=-1>"),
    Per = X("<input type=text>"),
    Ler = X("<li><div>"),
    wXi = (i) => {
      const e = dt(),
        [t, s] = le(""),
        [n, r, o] = qk(),
        { showHover: a, hideHover: l } = yXi()
      let c, h
      const u = (x) => {
          r(x)
          const k = i.items.findIndex((E) => E.id === i.value)
          y(k !== -1 ? k : null), i.onOpen?.()
        },
        d = (x) => {
          o(), s(""), y(null), x || i.onCloseIgnoresClicking?.()
        },
        g = (x) => {
          i.onSelect(x), d()
        },
        p = Y(() => {
          const x = t().toLowerCase()
          if (!x)
            return i.items.map((E) => ({
              ...E,
              score: 1,
              labelMatch: void 0,
              descriptionMatch: void 0,
            }))
          const k = vm(x)
          return i.items
            .map((E) => {
              const { score: D, labelMatch: P } = hb(
                  { label: E.label },
                  k,
                  !0,
                  Zb,
                  {},
                ),
                { score: L, descriptionMatch: A } = E.description
                  ? hb(
                      { label: E.label, description: E.description },
                      k,
                      !0,
                      Zb,
                      {},
                    )
                  : { score: 0, descriptionMatch: void 0 },
                F = E.keywords
                  ? Math.max(
                      ...E.keywords.map(
                        (B) => hb({ label: B }, k, !0, Zb, {}).score,
                      ),
                    )
                  : 0,
                H = Math.max(D, L, F)
              return { ...E, score: H, labelMatch: P, descriptionMatch: A }
            })
            .filter((E) => E.score > 0)
            .sort((E, D) => D.score - E.score)
        }),
        m = "dropdown-input-" + Math.random().toString(36).substring(2, 15),
        [b, y] = le(null),
        w = (x) => {
          if (!n()) return
          const k = (E) => {
            x.preventDefault(),
              y((D) =>
                D === null
                  ? E === "down"
                    ? 0
                    : p().length - 1
                  : E === "down"
                    ? D === p().length - 1
                      ? 0
                      : D + 1
                    : D === 0
                      ? p().length - 1
                      : D - 1,
              )
          }
          switch (x.key) {
            case "ArrowDown":
              k("down")
              break
            case "ArrowUp":
              k("up")
              break
            case "Enter":
              x.preventDefault(), b() !== null && g(p()[b()].id)
              break
            case "Escape":
              x.preventDefault(), d()
              break
            default:
              wt &&
                ((x.altKey || x.ctrlKey) && x.key === "j"
                  ? k("down")
                  : (x.altKey || x.ctrlKey) && x.key === "k" && k("up"))
              break
          }
        },
        C = Y(() =>
          i.useLabel
            ? i.items.find((x) => x.id === i.value)?.label
            : i.value
              ? i.value
              : i.origLabel
                ? i.origLabel
                : i.emptyStateText || "",
        )
      De(() => {
        const x = i.setTriggerFn
        nr(() => {
          x?.(() => {
            h && h.click()
          })
        })
      })
      const S = Y(() => ({
        ...i.labelStyle,
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        overflow: "hidden",
      }))
      return (() => {
        var x = Ter(),
          k = x.firstChild,
          E = c
        typeof E == "function" ? Rs(E, x) : (c = x),
          k.addEventListener("click", (P) => {
            if (i.cannotToggle === !0) return
            if (n()) {
              d()
              return
            }
            const L = P.currentTarget.getBoundingClientRect(),
              A = i.isRelative === void 0 ? !0 : i.isRelative
            P.stopImmediatePropagation(),
              u(
                A
                  ? { x: i.anchor === "top-right" ? L.width : 0, y: L.height + 5 }
                  : {
                      x: L.left + (i.anchor === "top-right" ? L.width : 0),
                      y: L.bottom + 5,
                    },
              )
          })
        var D = h
        return (
          typeof D == "function" ? Rs(D, k) : (h = k),
          dp(
            k,
            tn(
              {
                get id() {
                  return i.buttonId ?? m
                },
                get class() {
                  return "input-box-button " + (i.class ?? "")
                },
                get style() {
                  return {
                    "background-color": "rgba(0, 0, 0, 0)",
                    color:
                      C() === i.emptyStateText
                        ? "var(--vscode-descriptionForeground)"
                        : "var(--vscode-foreground)",
                    "padding-left": "0px",
                    display: "flex",
                    outline: "none",
                    gap: "2px",
                    "user-select": "none",
                    "align-items": "center",
                    cursor: i.cannotToggle === !0 ? "default" : "pointer",
                    width: "100%",
                    "min-width": 0,
                    opacity: n() ? 1 : void 0,
                    ...i.buttonStyle,
                  }
                },
              },
              () =>
                i.buttonHint
                  ? { onMouseEnter: (P) => a(P, i.buttonHint), onMouseLeave: l }
                  : {},
            ),
            !1,
            !0,
          ),
          M(
            k,
            I(te, {
              get when() {
                return i.chevronRight === !0
              },
              get children() {
                var P = Lue()
                return M(P, C), xe((L) => Bi(P, S(), L)), P
              },
            }),
            null,
          ),
          M(
            k,
            I(te, {
              get when() {
                return i.cannotToggle !== !0
              },
              get children() {
                var P = Lue()
                return (
                  xe(
                    (L) => {
                      var A = {
                          "font-size": "10px",
                          "padding-left": i.chevronRight ? "2px" : void 0,
                          "flex-shrink": 0,
                          ...i.labelStyle,
                        },
                        F = n()
                          ? ie.asClassName(
                              i.reverseChevron ? $.chevronDown : $.chevronUp,
                            )
                          : ie.asClassName(
                              i.reverseChevron ? $.chevronUp : $.chevronDown,
                            )
                      return (
                        (L.e = Bi(P, A, L.e)), F !== L.t && tt(P, (L.t = F)), L
                      )
                    },
                    { e: void 0, t: void 0 },
                  ),
                  P
                )
              },
            }),
            null,
          ),
          M(
            k,
            I(te, {
              get when() {
                return i.chevronRight !== !0
              },
              get children() {
                var P = Lue()
                return M(P, C), xe((L) => Bi(P, S(), L)), P
              },
            }),
            null,
          ),
          M(
            x,
            I(te, {
              get when() {
                return n()
              },
              children: (P) => {
                const L = Y(() => (i.isRelative === void 0 ? !0 : i.isRelative))
                return I(eD, {
                  get shouldMountInPortal() {
                    return !L()
                  },
                  get isRelative() {
                    return L()
                  },
                  nonBlockingDirection: "vertical",
                  get nonBlockingRoot() {
                    return `#${i.buttonId ?? m}`
                  },
                  get anchor() {
                    return i.anchor
                  },
                  get width() {
                    return i.menuWidth ?? "max-content"
                  },
                  class: "ya-solid-dropdown-menu",
                  style: {
                    gap: "1px",
                    "background-color":
                      "var(--vscode-settings-dropdownBackground)",
                    border:
                      "1px solid var(--vscode-commandCenter-inactiveBorder)",
                    "border-radius": "3px",
                    "min-width": "45px",
                    "box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
                    "z-index": "10000000000000000",
                    "align-items": "flex-start",
                  },
                  get position() {
                    return P()
                  },
                  close: d,
                  get children() {
                    return [
                      (() => {
                        var A = Per()
                        return (
                          A.addEventListener("keydown", w),
                          A.addEventListener("input", (F) => {
                            const H = F.target.value
                            s(H), y(p().length > 0 ? 0 : null), i.onSearch?.(H)
                          }),
                          Rs((F) => {
                            const H = async (B = 0) => {
                              await new Promise((z) => setTimeout(z, 0)),
                                F?.focus(),
                                await new Promise((z) => setTimeout(z, 0)),
                                F !== e?.window.document.activeElement &&
                                  B < 10 &&
                                  H(B + 1)
                            }
                            H()
                          }, A),
                          A.style.setProperty(
                            "background-color",
                            "var(--vscode-editor-background)",
                          ),
                          A.style.setProperty(
                            "color",
                            "var(--vscode-input-foreground)",
                          ),
                          A.style.setProperty(
                            "border",
                            "1px solid var(--vscode-input-border)",
                          ),
                          A.style.setProperty("border-radius", "2px"),
                          A.style.setProperty("margin", "2px"),
                          A.style.setProperty("padding", "2px 2px"),
                          A.style.setProperty("outline", "none"),
                          A.style.setProperty("align-self", "stretch"),
                          xe(() =>
                            Zn(A, "placeholder", i.placeholder ?? "Search..."),
                          ),
                          xe(() => (A.value = t())),
                          A
                        )
                      })(),
                      I(Is, {
                        get each() {
                          return p()
                        },
                        children: (A, F) =>
                          (() => {
                            var H = Ler(),
                              B = H.firstChild
                            return (
                              H.addEventListener("click", (z) => {
                                z.stopImmediatePropagation(), g(A.id)
                              }),
                              B.style.setProperty("display", "flex"),
                              B.style.setProperty("flex-direction", "column"),
                              B.style.setProperty("align-items", "flex-start"),
                              B.style.setProperty("flex-grow", "1"),
                              M(
                                B,
                                I(jk, {
                                  get text() {
                                    return A.label
                                  },
                                  get highlights() {
                                    return A.labelMatch
                                  },
                                  get style() {
                                    return {
                                      "font-size": A.description
                                        ? "11px"
                                        : "10px",
                                      "line-height": A.description
                                        ? "18px"
                                        : void 0,
                                    }
                                  },
                                }),
                                null,
                              ),
                              M(
                                B,
                                I(te, {
                                  get when() {
                                    return A.description
                                  },
                                  get children() {
                                    var z = Lue()
                                    return (
                                      z.style.setProperty("font-size", "9px"),
                                      z.style.setProperty("line-height", "12px"),
                                      z.style.setProperty("opacity", "0.7"),
                                      z.style.setProperty("max-width", "160px"),
                                      M(
                                        z,
                                        I(jk, {
                                          get text() {
                                            return A.description
                                          },
                                          get highlights() {
                                            return A.descriptionMatch
                                          },
                                        }),
                                      ),
                                      z
                                    )
                                  },
                                }),
                                null,
                              ),
                              M(
                                H,
                                I(te, {
                                  get when() {
                                    return A.id === i.value
                                  },
                                  get children() {
                                    var z = Lue()
                                    return (
                                      z.style.setProperty("font-size", "10px"),
                                      z.style.setProperty("margin-left", "auto"),
                                      xe(
                                        (K) => {
                                          var Q =
                                              F() === b()
                                                ? "var(--vscode-list-activeSelectionForeground)"
                                                : "var(--vscode-testing-iconPassed)",
                                            se = ie.asClassName($.check)
                                          return (
                                            Q !== K.e &&
                                              ((K.e = Q) != null
                                                ? z.style.setProperty("color", Q)
                                                : z.style.removeProperty(
                                                    "color",
                                                  )),
                                            se !== K.t && tt(z, (K.t = se)),
                                            K
                                          )
                                        },
                                        { e: void 0, t: void 0 },
                                      ),
                                      z
                                    )
                                  },
                                }),
                                null,
                              ),
                              xe((z) =>
                                Bi(
                                  H,
                                  {
                                    ...i.liStyles,
                                    "background-color":
                                      F() === b()
                                        ? "var(--vscode-list-activeSelectionBackground)"
                                        : void 0,
                                    color:
                                      F() === b()
                                        ? "var(--vscode-list-activeSelectionForeground)"
                                        : void 0,
                                    display: "flex",
                                    "align-items": "center",
                                    gap: "4px",
                                    padding: A.description
                                      ? "2px 6px 5px 6px"
                                      : "1px 4px",
                                    "border-radius": "2px",
                                  },
                                  z,
                                ),
                              ),
                              H
                            )
                          })(),
                      }),
                      I(te, {
                        get when() {
                          return i.belowListComponent
                        },
                        get children() {
                          return i.belowListComponent
                        },
                      }),
                    ]
                  },
                })
              },
            }),
            null,
          ),
          xe((P) =>
            Bi(
              x,
              {
                outline: "none",
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap",
                ...i.containerStyle,
              },
              P,
            ),
          ),
          x
        )
      })()
    },
    Ner = X("<div> toggle, <!> open")
  function CXi(i) {
    const e = dt(),
      t = e.reactiveStorageService,
      s = Y(() => i.specificModelField ?? "regular-chat"),
      n = Y(() =>
        e.aiSettingsService.getAvailableModelsReactive({
          isLongContextOrDebuggerMode: i.isLongContextMode || i.isDebuggerMode,
          isChat: i.isChat,
        }),
      )
    t.setApplicationUserPersistentStorage("aiSettings", (o) => {
      let a = o.modelOverrideEnabled ?? []
      for (const l of i.additionalModels ?? []) a.push(l)
      return { ...o, modelOverrideEnabled: a }
    }),
      Gt(() => {
        t.setApplicationUserPersistentStorage("aiSettings", (o) => {
          const a = o.modelOverrideEnabled ?? [],
            l = i.additionalModels ?? [],
            c = a.filter((h) => !l.includes(h))
          return { ...o, modelOverrideEnabled: c }
        }),
          i.additionalModels?.includes(r()) &&
            e.reactiveStorageService.setApplicationUserPersistentStorage(
              "aiSettings",
              (o) => ({
                ...o,
                openAIModel: n()[0],
                longContextOpenAIModel: n()[0],
              }),
            )
      })
    const r = Y(() =>
      zle(e.reactiveStorageService, n(), i.isLongContextMode, s()),
    )
    return { availableModels: n, currentPersistentModel: r }
  }
  function Nue(i) {
    const e = dt(),
      { availableModels: t, currentPersistentModel: s } = CXi({
        isLongContextMode: i.isLongContextMode,
        isDebuggerMode: i.isDebuggerMode,
        isChat: i.isChat,
        additionalModels: i.additionalModels,
        specificModelField: i.specificModelField,
      }),
      n = (r) => (r === "gpt-3.5-turbo" ? "gpt-3.5" : r)
    return I(wXi, {
      isRelative: !1,
      get buttonHint() {
        return i.buttonHint
      },
      get setTriggerFn() {
        return i.setTriggerFn
      },
      get value() {
        return n(s())
      },
      get forceRerender() {
        return i.forceRerender
      },
      get class() {
        return i.class
      },
      get reverseChevron() {
        return i.reverseChevron
      },
      get buttonId() {
        return i.buttonId
      },
      get buttonStyle() {
        return {
          "max-width": "100%",
          display: "inline-flex",
          "min-width": "0",
          "flex-shrink": 1,
          ...i.style,
        }
      },
      get anchor() {
        return i.anchor
      },
      labelStyle: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
      },
      containerStyle: {
        "flex-shrink": 1,
        overflow: "hidden",
        display: "flex",
        "align-items": "center",
      },
      get onOpen() {
        return i.onOpen
      },
      get onCloseIgnoresClicking() {
        return i.onClose
      },
      get items() {
        return t().map((r) => ({ id: r, label: n(r) }))
      },
      get origLabel() {
        return n(s())
      },
      onSelect: (r) => {
        i.onOverwriteSelectBehavior?.(r) ||
          (e.commandService.executeCommand(
            jne,
            r,
            i.isLongContextMode,
            i.specificModelField,
          ),
          i.onSelect?.(r))
      },
      get belowListComponent() {
        return (() => {
          var r = Ner(),
            o = r.firstChild,
            a = o.nextSibling,
            l = a.nextSibling
          return (
            r.style.setProperty("font-size", "8px"),
            r.style.setProperty("line-height", "150%"),
            r.style.setProperty(
              "color",
              "var(--vscode-input-placeholderForeground)",
            ),
            r.style.setProperty("padding", "0px 4px"),
            r.style.setProperty("text-align", "right"),
            r.style.setProperty("width", "100%"),
            r.style.setProperty("box-sizing", "border-box"),
            M(r, `${wt ? "\u2318" : "ctrl+"}/`, o),
            M(r, `${wt ? "\u2318\u2325" : "ctrl+alt+"}/`, a),
            r
          )
        })()
      },
    })
  }
  function Rer(i) {
    const e = dt(),
      t = Y(() =>
        e.aiSettingsService.getAvailableModelsReactive({
          isLongContextOrDebuggerMode: !1,
          isChat: !1,
        }),
      ),
      s = (n) => (n === "gpt-3.5-turbo" ? "gpt-3.5" : n)
    return I(wXi, {
      isRelative: !1,
      get buttonHint() {
        return i.buttonHint
      },
      get value() {
        return s(i.value)
      },
      get class() {
        return i.class
      },
      get reverseChevron() {
        return i.reverseChevron
      },
      get buttonStyle() {
        return {
          ...i.style,
          "max-width": "100%",
          display: "inline-flex",
          "min-width": "0",
          "flex-shrink": 1,
        }
      },
      labelStyle: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
      },
      containerStyle: {
        "flex-shrink": 1,
        overflow: "hidden",
        display: "flex",
        "align-items": "center",
      },
      get items() {
        return t().map((n) => ({ id: n, label: s(n) }))
      },
      get origLabel() {
        return s(i.value)
      },
      get onSelect() {
        return i.onSelect
      },
    })
  }
  var SXi = X("<div>"),
    Aer = X("<span>"),
    Mer = X("<div><div>"),
    $er = (i) =>
      I(as, {
        get title() {
          return (
            (i.isFocused ? "\u2318\u23CE " : "") +
            (i.currentModel.length < 10
              ? "in background"
              : i.currentModel.length < 15
                ? "background"
                : "in bg")
          )
        },
        onClick: () => i.onImplementInBackgroundSubmit(),
        type: "secondary",
        get disabled() {
          return i.plainText.length === 0
        },
        style: { "margin-left": "8px" },
      })
  function Fer(i) {
    const e = dt(),
      t = r4t(),
      s = () => {
        const d = t.nonPersistentStorage.inlineDiffs,
          p = t.nonPersistentStorage.promptBars.find((m) => m.id === i.id)?.diffId
        return d.find((m) => m.id === p)
      },
      n = Y(
        () =>
          e.reactiveStorageService.applicationUserPersistentStorage.aiSettings
            .cmdKModel ??
          e.reactiveStorageService.applicationUserPersistentStorage.aiSettings
            .openAIModel ??
          W$,
      ),
      [r, o] = le(!1),
      [a, l] = le(!1),
      [c, h] = le(!1),
      u = (() => {
        var d = Mer(),
          g = d.firstChild
        return (
          d.style.setProperty("display", "flex"),
          d.style.setProperty("justify-content", "flex-start"),
          d.style.setProperty("align-items", "center"),
          d.style.setProperty("margin", "4px 0px 6px 0px"),
          M(
            d,
            I($o, {
              get children() {
                return [
                  I(Pi, {
                    get when() {
                      return Y(() => !i.generating)() && s() === void 0
                    },
                    get children() {
                      return I(te, {
                        get when() {
                          return i.plainText.length > 0
                        },
                        get fallback() {
                          return I(Oer, tn(i, { vsContext: e }))
                        },
                        get children() {
                          return [
                            I(Ber, i),
                            I(xXi, i),
                            I(te, {
                              get when() {
                                return (
                                  e.reactiveStorageService
                                    .applicationUserPersistentStorage
                                    .hallucinatedFunctionsEnabled === !0
                                )
                              },
                              get children() {
                                return I(
                                  $er,
                                  tn(i, {
                                    get currentModel() {
                                      return n()
                                    },
                                  }),
                                )
                              },
                            }),
                            I(te, {
                              get when() {
                                return i.fastModeEnabled
                              },
                              get children() {
                                return I(Uer, i)
                              },
                            }),
                          ]
                        },
                      })
                    },
                  }),
                  I(Pi, {
                    get when() {
                      return i.generating
                    },
                    get children() {
                      return [
                        I(qer, tn(i, { vsContext: e })),
                        (() => {
                          var p = Aer()
                          return (
                            p.style.setProperty("margin-left", "3px"),
                            p.style.setProperty("padding", "0px 3px"),
                            p.style.setProperty(
                              "color",
                              "var(--vscode-input-placeholderForeground)",
                            ),
                            M(
                              p,
                              I($o, {
                                get fallback() {
                                  return [
                                    I(oXe, {
                                      get queuePositionResponse() {
                                        return i.queuePositionResponse
                                      },
                                      hideDotsLoading: !1,
                                      isLoading: !0,
                                      spaceBelow: !0,
                                      statusMessages: void 0,
                                      conciseMessage: !0,
                                      setIsUpsellFastRequestsShowing: o,
                                      setIsUpsellingUsageBasedPricing: l,
                                      setIsUpsellingHardLimit: h,
                                    }),
                                    I(te, {
                                      get when() {
                                        return r()
                                      },
                                      get children() {
                                        return I(nXe, {
                                          setIsUpsellFastRequestsShowing: o,
                                          conciseMessage: !0,
                                        })
                                      },
                                    }),
                                  ]
                                },
                                get children() {
                                  return I(Pi, {
                                    get when() {
                                      return i.statusUpdateMessages.length > 0
                                    },
                                    get children() {
                                      var m = SXi()
                                      return (
                                        m.style.setProperty(
                                          "color",
                                          "var(--vscode-input-placeholderForeground)",
                                        ),
                                        m.style.setProperty("font-size", "10px"),
                                        M(
                                          m,
                                          () => i.statusUpdateMessages[0],
                                          null,
                                        ),
                                        M(m, I(nf, { show: !0 }), null),
                                        m
                                      )
                                    },
                                  })
                                },
                              }),
                            ),
                            p
                          )
                        })(),
                      ]
                    },
                  }),
                  I(Pi, {
                    get when() {
                      return Y(() => !i.generating)() && s()
                    },
                    get children() {
                      return I(te, {
                        get when() {
                          return i.plainText.length > 0
                        },
                        get fallback() {
                          return [
                            I(Her, tn(i, { vsContext: e })),
                            I(Ver, tn(i, { vsContext: e })),
                          ]
                        },
                        get children() {
                          return [I(_er, i), I(xXi, i)]
                        },
                      })
                    },
                  }),
                ]
              },
            }),
            g,
          ),
          g.style.setProperty("flex-grow", "1"),
          M(
            d,
            I(te, {
              get when() {
                return i.hasStackedInputBox && i.containerWidth > 350
              },
              get children() {
                return I(Nue, {
                  style: {
                    color: "var(--vscode-input-placeholderForeground)",
                    opacity: 1,
                  },
                  get onOverwriteSelectBehavior() {
                    return i.onOverwriteModelSelect
                  },
                  additionalModels: [],
                  specificModelField: "cmd-k",
                  get setTriggerFn() {
                    return i.setTriggerFn
                  },
                  get buttonHint() {
                    return i.buttonHint
                  },
                  get onClose() {
                    return i.onModelToggleClose
                  },
                })
              },
            }),
            null,
          ),
          M(
            d,
            I(te, {
              get when() {
                return (
                  Y(() => !i.readonly)() &&
                  !(!i.generating && s() && i.plainText.length === 0)
                )
              },
              get children() {
                return I(Wer, tn(i, { vsContext: e }))
              },
            }),
            null,
          ),
          xe(() =>
            tt(
              d,
              "inline-prompt-button-area" +
                (s() !== void 0 || i.plainText.length > 0
                  ? " inline-prompt-button-area-with-primary"
                  : ""),
            ),
          ),
          d
        )
      })()
    return [
      I(te, {
        get when() {
          return Y(() => !!i.generating)() && (a() || c())
        },
        get children() {
          var d = SXi()
          return (
            d.style.setProperty("margin-top", "8px"),
            d.style.setProperty("margin-bottom", "8px"),
            d.style.setProperty("padding", "0px 8px"),
            M(
              d,
              I(te, {
                get when() {
                  return a()
                },
                get children() {
                  return I(lXe, {
                    setIsUpsellingUsageBasedPricing: l,
                    isCompact: !0,
                  })
                },
              }),
              null,
            ),
            M(
              d,
              I(te, {
                get when() {
                  return c()
                },
                get children() {
                  return I(cXe, { setIsUpsellingHardLimit: h, isCompact: !0 })
                },
              }),
              null,
            ),
            d
          )
        },
      }),
      u,
    ]
  }
  var Oer = (i) =>
      I(as, {
        get title() {
          return `${i.vsContext.keybindingService.lookupKeybinding(C9)?.getLabel()} to close`
        },
        get onClick() {
          return i.removePromptBar
        },
        type: "secondary",
      }),
    Ber = (i) =>
      I(as, {
        get title() {
          return (
            (i.isFocused ? "\u23CE " : "") +
            (i.isEdit ? "Submit Edit" : "Generate")
          )
        },
        onClick: () => i.onSubmit({ fastMode: !1, chatMode: !1 }),
        type: "primary",
        get disabled() {
          return i.plainText.length === 0
        },
        style: { "margin-left": "4px" },
      }),
    _er = (i) =>
      I(as, {
        get title() {
          return (i.isFocused ? "\u23CE " : "") + "Submit Edit"
        },
        onClick: () => i.onSubmit({ fastMode: !1, chatMode: !1 }),
        type: "primary",
        extras: { style: { "margin-left": "4px" } },
      }),
    xXi = (i) =>
      I(as, {
        get title() {
          return (
            (i.isFocused ? "\u2325\u23CE " : "") + (i.isEdit, "quick question")
          )
        },
        onClick: () => {
          i.onSubmit({ fastMode: !1, chatMode: !0 })
        },
        type: "secondary",
        get disabled() {
          return i.plainText.length === 0
        },
        extras: { style: { "margin-left": "8px" } },
      }),
    Uer = (i) =>
      I(as, {
        get title() {
          return (i.isFocused ? "\u2325\u23CE " : "") + (i.isEdit, "fast mode")
        },
        onClick: () => i.onSubmit({ fastMode: !0, chatMode: !1 }),
        type: "secondary",
        get disabled() {
          return i.plainText.length === 0
        },
        extras: { style: { "margin-left": "8px" } },
      }),
    Her = (i) => {
      const e = r4t()
      return I($o, {
        get fallback() {
          return I(as, {
            get title() {
              return `${i.vsContext.keybindingService?.lookupKeybinding(kue)?.getLabel() ?? ""} Accept`
            },
            onClick: () => {
              i.acceptCurrentDiff()
            },
            type: "primary",
            style: { "margin-left": "4px" },
          })
        },
        get children() {
          return I(Pi, {
            get when() {
              return e.isNotebook
            },
            get children() {
              return [
                I(as, {
                  get title() {
                    return `${i.vsContext.keybindingService?.lookupKeybinding(kue)?.getLabel() ?? ""} Accept`
                  },
                  onClick: () => {
                    i.acceptCurrentDiff()
                  },
                  type: "primary",
                  style: { "margin-left": "4px" },
                }),
                I(as, {
                  title: "Accept & Run",
                  onClick: () => {
                    i.acceptCurrentDiff(),
                      e.runCurrentlyActiveCell(i.vsContext.editorService)
                  },
                  type: "secondary",
                  style: { "margin-left": "8px" },
                }),
              ]
            },
          })
        },
      })
    },
    Ver = (i) => {
      const e = ud(GYe, { useDefaultKeybindingEvenIfNotActive: !0 })
      return I(as, {
        get title() {
          return Y(() => !!e())() ? `${e()} Reject` : "Reject"
        },
        onClick: () => i.rejectCurrentDiff(),
        type: "secondary",
        extras: { style: { "margin-left": "8px" } },
      })
    },
    Wer = (i) =>
      I(as, {
        get title() {
          return (
            i.vsContext.keybindingService
              ?.lookupKeybindings(bb)
              .at(-1)
              ?.getLabel() + " to toggle"
          )
        },
        isNotClickable: !0,
        type: "secondary",
      }),
    qer = (i) =>
      I(as, {
        get title() {
          return (
            i.vsContext.keybindingService?.lookupKeybinding(h0t)?.getLabel() +
            " Cancel"
          )
        },
        onClick: () => {
          i.cancelCurrentDiff()
        },
        type: "secondary",
      }),
    jer = X("<div><div>"),
    zer = X("<div>")
  function Wo(i) {
    const e = i.scrollable ?? zk(i.stableScrollable)
    Gt(() => {
      e.dispose()
    })
    let t,
      s,
      n = { value: void 0 }
    const r = ss()?.ResizeObserver
    let o = 0
    const [a, l] = le(void 0)
    De(() => {
      i.scrollingDirection === "vertical"
        ? l({ width: "100%", "min-height": "100%" })
        : i.scrollingDirection === "horizontal"
          ? l({ height: "100%", "min-width": "100%" })
          : l(void 0)
    })
    const c = i.triggerOnHeightChange,
      h = Y(() => {
        const C = i.onScroll
        return () => {
          if (!t) return
          const S = t.getBoundingClientRect().height
          let x = !0
          S !== o ? ((o = S), (x = c ?? !1)) : g(), x && C && C()
        }
      }),
      [u, d] = le(!1),
      g = () => {
        if (!n.value) return
        const C = n.value.getBoundingClientRect(),
          { scrollHeight: S } = e.getScrollDimensions(),
          { scrollTop: x } = e.getCurrentScrollPosition()
        d(x + C.height >= S - 4)
      },
      p = () => {
        e.setScrollPositionNow({ scrollTop: e.getScrollHeight() })
      },
      m = () => {
        const C = e.getScrollHeight(),
          S = e.getScrollDimensions().height,
          x = C - S
        e.setScrollPositionNow({ scrollTop: Math.max(0, x) })
      }
    De(
      _l(
        () => i.scrollToBottomTrigger,
        (C) => {
          C !== void 0 &&
            setTimeout(() => {
              i.autoScrollToBottom ? p() : m()
            }, 0)
        },
      ),
    ),
      e.onScroll((C) => {
        h()(),
          n.value &&
            (C.scrollTopChanged && (n.value.scrollTop = C.scrollTop),
            C.scrollLeftChanged && (n.value.scrollLeft = C.scrollLeft))
      }),
      De(
        _l(
          () => i.resetScrollable,
          () => {
            e.setScrollPositionNow({ scrollLeft: 0, scrollTop: 0 })
          },
        ),
      ),
      De(
        _l(
          () => i.resetScrollableSize,
          () => {
            if (!t) return
            const C = t.parentElement
            if (!C) return
            const S = C.getBoundingClientRect()
            S &&
              e.setScrollDimensions(
                { scrollWidth: S.width, scrollHeight: S.height },
                !0,
              )
          },
        ),
      ),
      nr(() => {
        const C = new r((S) => {
          for (const x of S) {
            const { width: k, height: E } = x.contentRect
            e.setScrollDimensions({ scrollWidth: k, scrollHeight: E }, !0)
          }
        })
        t && C.observe(t),
          Gt(() => {
            C.disconnect()
          })
      }),
      nr(() => {
        const C = new r((S) => {
          for (const x of S) {
            const { width: k, height: E } = x.contentRect
            e.setScrollDimensions({ width: k, height: E }, !0),
              n.value &&
                (i.scrollingDirection === "horizontal"
                  ? (n.value.style.width = `${k}px`)
                  : i.scrollingDirection === "vertical"
                    ? (n.value.style.height = `${E}px`)
                    : ((n.value.style.width = `${k}px`),
                      (n.value.style.height = `${E}px`)))
          }
        })
        s && C.observe(s),
          Gt(() => {
            C.disconnect()
          })
      }),
      nr(() => {
        const C = new r(() => {
          const S = u()
          g(), i.autoScrollToBottom && S && p()
        })
        t && C.observe(t),
          Gt(() => {
            C.disconnect()
          })
      })
    const b = Y(() =>
        i.scrollingDirection === "both"
          ? { overflow: "hidden" }
          : i.scrollingDirection === "horizontal"
            ? { overflowX: "hidden", height: "100%" }
            : { overflowY: "hidden", width: "100%" },
      ),
      y = Yo(() =>
        (() => {
          var C = jer(),
            S = C.firstChild
          Rs((k) => (n.value = k), C),
            dp(
              C,
              tn(
                {
                  get style() {
                    return { ...b(), ...i.contentStyle }
                  },
                },
                () => i.innerContainerDivProps,
              ),
              !1,
              !0,
            )
          var x = t
          return (
            typeof x == "function" ? Rs(x, S) : (t = S),
            M(S, () => i.children),
            xe(
              (k) => {
                var E = {
                    display: "inline-block",
                    ...(a() ?? {}),
                    ...(i.innerContainerStyle ?? {}),
                  },
                  D = i.innerContainerClass
                return (k.e = Bi(S, E, k.e)), D !== k.t && tt(S, (k.t = D)), k
              },
              { e: void 0, t: void 0 },
            ),
            C
          )
        })(),
      )(),
      w = new Zen(
        y,
        { mouseWheelSmoothScroll: !1, ...(i.nonReactiveElementOptions ?? {}) },
        e,
      )
    if (i.childStyle)
      for (const [C, S] of Object.entries(i.childStyle)) {
        const x = C
        w.getDomNode().style[x] = S
      }
    return (
      De(() => {
        i.disableScroll
          ? w.updateOptions({ horizontal: 2, vertical: 2, handleMouseWheel: !1 })
          : w.updateOptions({
              horizontal:
                i.scrollingDirection === "horizontal" ||
                i.scrollingDirection === "both"
                  ? 1
                  : void 0,
              vertical:
                i.scrollingDirection === "vertical" ||
                i.scrollingDirection === "both"
                  ? 1
                  : void 0,
              handleMouseWheel: !0,
            })
      }),
      De(() => {
        i.scrollingDirection === "horizontal"
          ? ((w.getDomNode().style.height = "100%"),
            (w.getDomNode().style.width = "unset"))
          : i.scrollingDirection === "vertical"
            ? ((w.getDomNode().style.width = "100%"),
              (w.getDomNode().style.height = "unset"))
            : ((w.getDomNode().style.width = "unset"),
              (w.getDomNode().style.height = "unset"))
      }),
      De(() => {
        i.reactiveElementOptions && w.updateOptions(i.reactiveElementOptions)
      }),
      (() => {
        var C = zer(),
          S = s
        return (
          typeof S == "function" ? Rs(S, C) : (s = C),
          M(C, () => w.getDomNode()),
          xe(
            (x) => {
              var k = `scrollable-div-container ${i.class} ${i.onlyShowScrollbarOnHover ? "show-only-on-hover" : ""}`,
                E = { ...i.style }
              return k !== x.e && tt(C, (x.e = k)), (x.t = Bi(C, E, x.t)), x
            },
            { e: void 0, t: void 0 },
          ),
          C
        )
      })()
    )
  }
  function kXi(i) {
    const e = XI()
    return {
      forceIntegerValues: !1,
      smoothScrollDuration: 0,
      scheduleAtNextAnimationFrame: (t) => Oa(e.window, t),
      stickyScrollVertical: i ? "down" : void 0,
    }
  }
  function zk(i) {
    return new KM(kXi(i))
  }
  var Ger = X("<div>Context shown to model"),
    EXi = X("<div>"),
    Jer = X("<div><span></span><br><br>"),
    Ker = X("<div>NONE<br>")
  function Yer(i) {
    const e = dt(),
      t = Y(() =>
        i.contextSessionUuid
          ? e.aiContextSessionService.getReactiveReadonlyContextSession(
              i.contextSessionUuid,
            )
          : null,
      ),
      [s, n] = le({})
    return (
      De(() => {
        ;(async () => {
          const o = t()
          if (!o) return
          const a = {}
          for (const l of o.intents) {
            if (
              l.intent.intent.case !== "codeSelection" &&
              l.intent.intent.case !== "file"
            )
              continue
            const c = l.intent.intent,
              h = e.workspaceContextService.resolveRelativePath(
                c.value.relativeWorkspacePath,
              ),
              u = await e.textModelService.createModelReference(h)
            let d
            if (c.case === "file") d = u.object.textEditorModel
            else {
              const w = u.object.textEditorModel.getLanguageId(),
                C = e.languageService.createById(w)
              d = e.modelService.createModel(
                c.value.text
                  .split(
                    `
`,
                  )
                  .slice(1, -1).join(`
`),
                C,
              )
            }
            const p = new oi().token,
              b = (await e.outlineService.getOrCreate(d, p)).getTopLevelSymbols()
            let y
            c.case === "file" ? (y = `@${li(h)}`) : (y = `@${b[0].name}`),
              (a[y] = [])
            for (const w of l.items.filter(
              (C) => C.status?.shownToTheModel === !0,
            )) {
              const C = w.item.item.value
              b.forEach((S) => {
                C.chunkContents.includes(S.name) &&
                  !a[y].includes(S.name) &&
                  a[y].push(S.name)
              })
            }
          }
          n(a)
        })().catch((o) => console.error(o))
      }),
      I(Wo, {
        get style() {
          return {
            width: "400px",
            "background-color": "var(--vscode-editor-background)",
            border: "1px solid var(--vscode-commandCenter-activeBorder)",
            position: "absolute",
            left: `${i.leftOffset + 15}px`,
            bottom: `${i.contentHeight + 40}px`,
            "z-index": 1000002,
            height: `${Object.entries(s()).length * 40 + Object.entries(s()).flatMap((r) => r[1]).length * 25 + 40}px`,
            "max-height": `${i.containerHeight - 100}px`,
            "min-height": "300px",
          }
        },
        get children() {
          return [
            (() => {
              var r = Ger()
              return (
                r.style.setProperty("width", "392px"),
                r.style.setProperty("padding", "2px 4px 2px 4px"),
                r.style.setProperty(
                  "border-bottom",
                  "1px solid var(--vscode-commandCenter-activeBorder)",
                ),
                r.style.setProperty("font-size", "0.8em"),
                r
              )
            })(),
            (() => {
              var r = EXi()
              return (
                r.style.setProperty("padding", "8px"),
                M(
                  r,
                  I(Is, {
                    get each() {
                      return Object.entries(s())
                    },
                    children: ([o, a]) =>
                      (() => {
                        var l = Jer(),
                          c = l.firstChild,
                          h = c.nextSibling,
                          u = h.nextSibling
                        return (
                          c.style.setProperty("padding", "2px"),
                          c.style.setProperty("padding-left", "4px"),
                          c.style.setProperty("padding-right", "4px"),
                          c.style.setProperty("border-radius", "4px"),
                          c.style.setProperty(
                            "background-color",
                            "rgba(24, 119, 232, 0.2)",
                          ),
                          M(c, o),
                          M(
                            l,
                            I(Is, {
                              each: a,
                              children: (d) =>
                                (() => {
                                  var g = EXi()
                                  return M(g, d), g
                                })(),
                            }),
                            u,
                          ),
                          M(
                            l,
                            (() => {
                              var d = Y(() => a.length === 0)
                              return () => d() && Ker()
                            })(),
                            u,
                          ),
                          l
                        )
                      })(),
                  }),
                ),
                r
              )
            })(),
          ]
        },
      })
    )
  }

  return {
    nf,
    uer,
    nXe,
    dXi,
    per,
    oXe,
    aXe,
    cXe,
    qk,
    mXi,
    eD,
    Der,
    jk,
    yXi,
    CXi,
    Nue,
    Rer,
    Fer,
    Wo,
    kXi,
    zk,
    Yer,
  }
}
