// @ts-check

export function createComposerParallelApplyToolCallBlock(params) {
  const {i3r, vc, Ot, Q, D, ae, t3r, F, kA, e3r, qW, jse, Z8r, wr } = params;

  function FUs(i) {
    try {
      var e = i3r()
      const t = e.u(vc("ComposerParallelApplyToolCallBlock")),
        s = Ot(),
        n = Q(() => ({ planText: i.planText, filesToEdit: i.filesToEdit })),
        r = Q(() => i.decision() === "rejected" || i.hasPendingDecision)
      return D(ae, {
        get when() {
          return r()
        },
        get fallback() {
          return (() => {
            var o = t3r(),
              a = o.firstChild
            return (
              F(
                o,
                D(kA, {
                  text: "Parallel Edit",
                  type: "subtle",
                  size: "small",
                  class: "parallel-edit-badge",
                }),
                a,
              ),
              F(
                a,
                () =>
                  n()?.planText ||
                  (i.isLoading ? "Generating plan" : "No plan available"),
              ),
              F(
                o,
                D(ae, {
                  get when() {
                    return (n()?.filesToEdit?.length ?? 0) > 0
                  },
                  get children() {
                    var l = e3r()
                    return (
                      F(
                        l,
                        D(qW, {
                          get each() {
                            return n()?.filesToEdit
                          },
                          children: (c) => {
                            const u = Q(() =>
                              s.composerDataService.getCodeBlockStatus(
                                i.composerDataHandle,
                                c().uri,
                                c().version,
                              ),
                            )
                            return D(ae, {
                              get when() {
                                return u()
                              },
                              get children() {
                                return D(jse, {
                                  get composerDataHandle() {
                                    return i.composerDataHandle
                                  },
                                  get codeBlock() {
                                    return c()
                                  },
                                  style: { margin: "0px" },
                                  maxCollapsedHeight: 120,
                                  maxExpandedHeight: 380,
                                  get forceStatus() {
                                    return Q(() => u() === "none")()
                                      ? i.isLoading
                                        ? "generating"
                                        : "cancelled"
                                      : u()
                                  },
                                })
                              },
                            })
                          },
                        }),
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
        get children() {
          return D(
            Z8r,
            wr(i, {
              get files() {
                return i.filesToEdit ?? []
              },
              actionText: "Apply changes",
              loadingText: "Applying changes",
              get onAccept() {
                return i.onAccept
              },
              get onReject() {
                return i.onReject
              },
              get decision() {
                return i.decision
              },
              get unclickable() {
                return i.decision() !== void 0
              },
            }),
          )
        },
      })
    } catch (t) {
      e.e = t
    } finally {
      e.d()
    }
  }

  return {
    FUs
  }
}
