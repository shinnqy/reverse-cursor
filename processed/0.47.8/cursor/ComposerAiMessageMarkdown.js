// @ts-check

export function createComposerAiMessageMarkdown(params) {
  const {vc, RBr, Ot, Oc, D, Q, zv, $e, Ka, NBr, Xi, jse, wr,} = params;

  var N7s = (i) => {
    try {
      var e = RBr()
      const t = e.u(vc("ComposerAiMessageMarkdown")),
        s = Ot(),
        { currentComposer: n } = Oc(() => i.composerDataHandle),
        r = Q(() => i.message, void 0, { equals: (o, a) => o === a })
      return D(zv, {
        get rawText() {
          return r().text
        },
        showSectionToolbar: !1,
        canQuoteMessages: !1,
        get composerExtras() {
          return {
            composerId: n().composerId,
            bubbleId: r().bubbleId,
            messageIndex: i.index(),
          }
        },
        get symbolLinks() {
          return r().symbolLinks
        },
        get fileLinks() {
          return r().fileLinks
        },
        get codeBlockProps() {
          return {
            shouldRecompute: n().shouldRecomputeCodeBlock ?? 0,
            onNewCodeBlock: (o) => {
              const { codeBlockIdx: a, languageAlias: l } = o
              if (r().codeBlocks?.find((u) => u.codeBlockIdx === a) === void 0) {
                const u =
                  s.languageService.createByLanguageNameOrFilepathOrFirstLine(
                    l ?? "",
                    null,
                    void 0,
                  )
                let h
                u.languageId === "plaintext" &&
                  (h = u.onDidChange((d) => {
                    d !== "plaintext" &&
                      (s.composerDataService.updateComposerDataSetStore(
                        n().composerId,
                        (g) =>
                          g(
                            "conversation",
                            (p) => p.bubbleId === r().bubbleId,
                            "codeBlocks",
                            (p) => p.codeBlockIdx === a && p.unregistered === !0,
                            "languageId",
                            d,
                          ),
                      ),
                      h?.dispose(),
                      (h = void 0))
                  })),
                  s.composerUtilsService.addNewCodeBlockToBubble(
                    n().composerId,
                    a,
                    i.index(),
                    {
                      unregistered: !0,
                      content: "",
                      needsUpdate: !0,
                      languageId: u.languageId,
                      isGenerating: !1,
                    },
                  )
              }
            },
            renderCodeBlock: (o) => {
              let {
                codeBlockIdx: a,
                languageAlias: l,
                predictedUri: c,
                startLine: u,
                endLine: h,
                clickableUri: d,
                noModifyCodeblock: g,
              } = o
              const p = Q(() =>
                  r().codeBlocks?.find((C) => C.codeBlockIdx === a),
                ),
                m = Q(() => p()?.unregistered === !0),
                v = Q(() => {
                  const C = p()
                  return C && "isClickable" in C && C.isClickable === !0
                }),
                y = Q(() => m() && p())
              $e(() => {
                if (m() && !v() && c !== void 0 && p().needsUpdate !== !0) {
                  const S = p()
                  s.composerUtilsService.registerNewCodeBlock(
                    n().composerId,
                    c,
                    S.content ?? "",
                    a,
                    {
                      languageId: S.languageId ?? "",
                      status: "completed",
                      bubbleId: r().bubbleId,
                      isNotApplied: !0,
                    },
                  )
                }
              })
              const w = Q(() => {
                const C = p()
                return C?.uri
                  ? s.composerDataService.getComposerCodeBlock(
                      n().composerId,
                      C.uri,
                      C.version,
                    )
                  : void 0
              })
              return D(Ka, {
                get fallback() {
                  return (() => {
                    var C = NBr()
                    return C.style.setProperty("display", "none"), C
                  })()
                },
                get children() {
                  return [
                    D(Xi, {
                      get when() {
                        return Q(() => !!p())() && w()
                      },
                      children: (C) => {
                        const S = Q(() => ({
                          codeBlock: C(),
                          renderHint:
                            C().version === 0 && !i.hideHints && i.isInputFocused,
                          isInputFocused: i.isInputFocused,
                        }))
                        return D(
                          jse,
                          wr(S, {
                            get composerDataHandle() {
                              return i.composerDataHandle
                            },
                            get bubbleId() {
                              return r().bubbleId
                            },
                            noModifyCodeblock: g,
                          }),
                        )
                      },
                    }),
                    D(Xi, {
                      get when() {
                        return y()
                      },
                      children: (C) => {
                        const S = Q(() => {
                          if (!(d === void 0 || u === void 0 || h === void 0))
                            return {
                              uri: s.workspaceContextService.resolveRelativePath(
                                d,
                              ),
                              startLine: u,
                              endLine: h,
                            }
                        })
                        return D(jse, {
                          get codeBlock() {
                            return C()
                          },
                          get composerDataHandle() {
                            return i.composerDataHandle
                          },
                          languageAlias: l,
                          get bubbleId() {
                            return r().bubbleId
                          },
                          get clickableOptions() {
                            return S()
                          },
                          noModifyCodeblock: g,
                        })
                      },
                    }),
                  ]
                },
              })
            },
            appendText: (o, a) => {
              const l = r().codeBlocks?.find((c) => c.codeBlockIdx === a)
              l &&
                "needsUpdate" in l &&
                l.needsUpdate === !0 &&
                s.composerDataService.updateComposerDataSetStore(
                  n().composerId,
                  (c) =>
                    c(
                      "conversation",
                      (u) => u.bubbleId === r().bubbleId,
                      "codeBlocks",
                      (u) => u.codeBlockIdx === a && u.unregistered === !0,
                      "content",
                      (u) => u + o,
                    ),
                )
            },
            onCodeBlockEnd(o) {
              const { codeBlockIdx: a } = o,
                l = r().codeBlocks?.find((c) => c.codeBlockIdx === a)
              l &&
                "needsUpdate" in l &&
                l.needsUpdate === !0 &&
                s.composerDataService.updateComposerDataSetStore(
                  n().composerId,
                  (c) =>
                    c(
                      "conversation",
                      (u) => u.bubbleId === r().bubbleId,
                      "codeBlocks",
                      (u) => u.codeBlockIdx === a && u.unregistered === !0,
                      "needsUpdate",
                      !1,
                    ),
                )
            },
          }
        },
        shouldFade: !1,
        get finished() {
          return !n().generatingBubbleIds?.includes(r().bubbleId)
        },
      })
    } catch (t) {
      e.e = t
    } finally {
      e.d()
    }
  }

  return {
    N7s,
  }
}
