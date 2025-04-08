// @ts-check

export function createMarkdownJSX(params) {
  const { Ot, Q, le, $e, Oc, D, Ka, k5r, Xi, jse, wr, E5r, F, dNs} = params;

  function I5r(i) {
    const e = Ot(),
      t = Q(() => i.message().thinking?.text || ""),
      s = Q(() => i.hasFinishedThinking),
      [n, r] = le(!s())
    $e(() => {
      s() && r(!1)
    })
    const [o, a] = le(0),
      { currentComposer: l } = Oc(() => i.composerDataHandle),
      c = Q(() => i.message()),
      u = Q(() => i.messageIndex()),
      h = Q(() => {
        const { composerId: g } = l(),
          p = c().bubbleId
        return !g || !p
          ? 0
          : (e.composerDataService.getComposerBubble(g, p)?.thinkingDurationMs ??
              1) / 1e3
      }),
      d = {
        rawText: t(),
        codeBlockProps: {
          shouldRecompute: l().shouldRecomputeCodeBlock ?? 0,
          onNewCodeBlock: (g) => {
            const { codeBlockIdx: p, languageAlias: m } = g
            if (c().codeBlocks?.find((y) => y.codeBlockIdx === p) === void 0) {
              const y =
                e.languageService.createByLanguageNameOrFilepathOrFirstLine(
                  m ?? "",
                  null,
                  void 0,
                )
              let w
              y.languageId === "plaintext" &&
                (w = y.onDidChange((C) => {
                  C !== "plaintext" &&
                    (e.composerDataService.updateComposerDataSetStore(
                      l().composerId,
                      (S) =>
                        S(
                          "conversation",
                          (x) => x.bubbleId === c().bubbleId,
                          "codeBlocks",
                          (x) => x.codeBlockIdx === p && x.unregistered === !0,
                          "languageId",
                          C,
                        ),
                    ),
                    w?.dispose(),
                    (w = void 0))
                })),
                e.composerUtilsService.addNewCodeBlockToBubble(
                  l().composerId,
                  p,
                  u(),
                  {
                    unregistered: !0,
                    content: "",
                    needsUpdate: !0,
                    languageId: y.languageId,
                    isGenerating: !1,
                  },
                )
            }
          },
          renderCodeBlock: (g) => {
            let {
              codeBlockIdx: p,
              languageAlias: m,
              predictedUri: v,
              startLine: y,
              endLine: w,
              clickableUri: C,
              noModifyCodeblock: S,
            } = g
            const x = Q(() => c().codeBlocks?.find((L) => L.codeBlockIdx === p)),
              k = Q(() => x()?.unregistered === !0),
              E = Q(() => k() && x())
            $e(() => {
              if (k() && v !== void 0 && x().needsUpdate !== !0) {
                const P = x()
                e.composerUtilsService.registerNewCodeBlock(
                  l().composerId,
                  v,
                  P.content ?? "",
                  p,
                  {
                    languageId: P.languageId ?? "",
                    status: "completed",
                    bubbleId: c().bubbleId,
                    isNotApplied: !0,
                  },
                )
              }
            })
            const I = Q(() => {
              const L = x()
              return L?.uri
                ? e.composerDataService.getComposerCodeBlock(
                    l().composerId,
                    L.uri,
                    L.version,
                  )
                : void 0
            })
            return D(Ka, {
              get fallback() {
                return (() => {
                  var L = k5r()
                  return L.style.setProperty("display", "none"), L
                })()
              },
              get children() {
                return [
                  D(Xi, {
                    get when() {
                      return Q(() => !!x())() && I()
                    },
                    children: (L) => {
                      const P = Q(() => ({
                        codeBlock: L(),
                        renderHint:
                          L().version === 0 && !i.hideHints && i.isInputFocused,
                        isInputFocused: i.isInputFocused,
                      }))
                      return D(
                        jse,
                        wr(P, {
                          get composerDataHandle() {
                            return i.composerDataHandle
                          },
                          get bubbleId() {
                            return c().bubbleId
                          },
                          noModifyCodeblock: S,
                        }),
                      )
                    },
                  }),
                  D(Xi, {
                    get when() {
                      return E()
                    },
                    children: (L) => {
                      const P = Q(() => {
                        if (!(C === void 0 || y === void 0 || w === void 0))
                          return {
                            uri: e.workspaceContextService.resolveRelativePath(C),
                            startLine: y,
                            endLine: w,
                          }
                      })
                      return D(jse, {
                        get codeBlock() {
                          return L()
                        },
                        get composerDataHandle() {
                          return i.composerDataHandle
                        },
                        languageAlias: m,
                        get bubbleId() {
                          return c().bubbleId
                        },
                        get clickableOptions() {
                          return P()
                        },
                        noModifyCodeblock: S,
                      })
                    },
                  }),
                ]
              },
            })
          },
          appendText: (g, p) => {
            const m = c().codeBlocks?.find((v) => v.codeBlockIdx === p)
            m &&
              "needsUpdate" in m &&
              m.needsUpdate === !0 &&
              e.composerDataService.updateComposerDataSetStore(
                l().composerId,
                (v) =>
                  v(
                    "conversation",
                    (y) => y.bubbleId === c().bubbleId,
                    "codeBlocks",
                    (y) => y.codeBlockIdx === p && y.unregistered === !0,
                    "content",
                    (y) => y + g,
                  ),
              )
          },
          onCodeBlockEnd(g) {
            const { codeBlockIdx: p } = g,
              m = c().codeBlocks?.find((v) => v.codeBlockIdx === p)
            m &&
              "needsUpdate" in m &&
              m.needsUpdate === !0 &&
              e.composerDataService.updateComposerDataSetStore(
                l().composerId,
                (v) =>
                  v(
                    "conversation",
                    (y) => y.bubbleId === c().bubbleId,
                    "codeBlocks",
                    (y) => y.codeBlockIdx === p && y.unregistered === !0,
                    "needsUpdate",
                    !1,
                  ),
              )
          },
        },
        composerExtras: {
          composerId: l().composerId,
          bubbleId: c().bubbleId,
          messageIndex: u(),
        },
        showSectionToolbar: !1,
        canQuoteMessages: !1,
        symbolLinks: c().symbolLinks,
        fileLinks: c().fileLinks,
        shouldFade: !1,
        finished: s(),
        codeBlockCount: o,
        setCodeBlockCount: a,
      }
    return (() => {
      var g = E5r()
      return (
        g.style.setProperty("padding", "0"),
        g.style.setProperty("margin", "6px 0"),
        F(
          g,
          D(dNs, {
            text: t,
            isOpen: n,
            setIsOpen: r,
            get isLoading() {
              return !s()
            },
            thinkingTime: h,
            markdownProps: d,
          }),
        ),
        g
      )
    })()
  }

  return {
    I5r
  }
}
