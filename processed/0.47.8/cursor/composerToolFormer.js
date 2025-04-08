// @ts-check

export function createComposerToolFormer(params) {
  const { ie, Ot, Q, Oc, xn, ah, qd, zKn, bn, JKn, D, ae, F, Esi, Tsi, CUs, Et, Ka, Xi, DUs, k8r, jse, Pe, _Us, AP, WUs, wr, NUs, H, RUs, PUs, fgt, xUs, kUs, FUs, LUs, TUs, OUs, HUs, L3r, $Us, S8r, Jw, tt, oe, A, N7s, c3r, EJ, A7s} = params;

  var N3r = ie("<div class=composer-tool-former-message>"),
  IJ = ie("<div>"),
  VUs = !1,
  R3r = (i) => {
    const e = Ot(),

      {
        composerDataService: t,
        composerService: s,
        composerViewsService: n,
      } = e,
      {
        currentComposer: r,
        composerDataHandle: o,
        updateComposerModeSetStore: a,
      } = Oc(() => i.composerDataHandle),
      l = Q(() =>
        e.composerDataService.getComposerBubble(r().composerId, i.bubbleId),
      ),
      c = Q(() => t.getComposerCapability(r().composerId, xn.TOOL_FORMER)),
      u = Q(() => {
        const E = c()
        if (!E) return
        const I = E.getBubbleData(i.bubbleId)
        if (I) return I
      })
    function h(E) {
      const I = u()
      return I && I.tool === E ? I : !1
    }
    const d = (E, I) => {
        e.openerService.open(
          I
            ? ah(E, {
                startLineNumber: I.startLineNumber,
                startColumn: 1,
                endLineNumber: I.endLineNumber,
                endColumn: 1,
              })
            : E,
          {
            openToSide: !1,
            editorOptions: {
              revealIfVisible: !0,
              revealIfOpened: !0,
              source: qd.USER,
            },
            fromUserGesture: !0,
          },
        )
      },
      g = Q(() => {
        const E = u()
        if (E) return E.toolCallId
      }),
      p = Q(() =>
        e.composerDataService.getPendingUserDecisionGroup(r().composerId),
      ),
      m = Q(() => {
        const E = p()
        return E ? E.some((I) => I.toolCallId === g()) : !1
      }),
      v = Q(() => {
        if (VUs) return !1
        const E = u()
        if (!E || !zKn.includes(E.tool)) return !1
        const I = r().conversation.findIndex((P) => P.bubbleId === i.bubbleId)
        return !(I <= 0 || r().conversation[I - 1].type === bn.HUMAN)
      }),
      y = Q(() => {
        if (VUs) return !1
        const E = u()
        if (!E || !JKn.includes(E.tool)) return !1
        const I = r().conversation.findIndex((P) => P.bubbleId === i.bubbleId)
        if (I >= r().conversation.length - 1) return !1
        const L = r().conversation[I + 1]
        return !(L === void 0 || L.type === bn.HUMAN || L.text.length === 0)
      }),
      w = Q(() => {
        const E = r().conversation.findIndex((L) => L.bubbleId === i.bubbleId)
        if (E <= 0) return
        const I = r().conversation[E - 1]
        if (I.type === bn.HUMAN && I.skipRendering === !0) return I
      }),
      C = Q(() => {
        const E = r().conversation.findIndex((P) => P.bubbleId === i.bubbleId)
        if (E >= r().conversation.length - 1) return
        const I = r().conversation[E + 1]
        if (
          !(
            I === void 0 ||
            I.type !== bn.HUMAN ||
            I.skipRendering !== !0 ||
            r().conversation[E + 2]?.capabilityType === xn.TOOL_FORMER
          )
        )
          return I
      }),
      S = n.getPrevEditingBubbleInputDelegate(o().data.composerId),
      x = (E) => {
        if ((E.stopPropagation(), i.bubbleId)) {
          e.composerService.cancelChat(r().composerId)
          const I = e.composerUtilsService.resumeFromToolFormerBubble(
            r().composerId,
            i.bubbleId,
          )
          e.composerDataService.updateComposerData(r().composerId, {
            editingBubbleId: I,
          }),
            setTimeout(() => {
              S.focus()
            }, 0)
        }
      },
      k = (E) => {
        if ((E.stopPropagation(), i.bubbleId)) {
          e.composerService.cancelChat(r().composerId)
          const I = e.composerUtilsService.resumeFromToolFormerBubble(
            r().composerId,
            i.bubbleId,
            !0,
          )
          e.composerDataService.updateComposerData(r().composerId, {
            editingBubbleId: I,
          }),
            setTimeout(() => {
              S.focus()
            }, 0)
        }
      }
    return D(ae, {
      get when() {
        return c()
      },
      children: (E) =>
        (() => {
          var I = N3r()
          return (
            F(
              I,
              D(ae, {
                get when() {
                  return u()
                },
                children: (L) => [
                  D(ae, {
                    get when() {
                      return w()
                    },
                    children: (P) => {
                      const N = Esi(o, () => P().bubbleId)
                      return (() => {
                        var R = IJ()
                        return (
                          R.style.setProperty("padding-top", "0.4rem"),
                          R.style.setProperty("padding-bottom", "0.8rem"),
                          F(
                            R,
                            D(Tsi, {
                              get composerDataHandle() {
                                return o()
                              },
                              get message() {
                                return P()
                              },
                              get location() {
                                return i.location
                              },
                              get isBubbleSelected() {
                                return N()
                              },
                              get fontInfo() {
                                return i.fontInfo
                              },
                            }),
                          ),
                          R
                        )
                      })()
                    },
                  }),
                  D(ae, {
                    get when() {
                      return v()
                    },
                    get children() {
                      return D(CUs, {
                        onResume: x,
                        get style() {
                          return {
                            translate:
                              L().tool === Et.WEB_SEARCH
                                ? "0px -6px"
                                : "0px -10px",
                          }
                        },
                      })
                    },
                  }),
                  D(Ka, {
                    get children() {
                      return [
                        D(Xi, {
                          get when() {
                            return L().status === "error"
                          },
                          children: (P) =>
                            D(DUs, {
                              get error() {
                                return (
                                  L().error?.clientVisibleErrorMessage ||
                                  "An unknown error occurred"
                                )
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.EDIT_FILE)
                          },
                          children: (P) => {
                            const N = Q(() => {
                                const B =
                                    e.workspaceContextService.resolveRelativePath(
                                      P().params?.relativeWorkspacePath ?? "",
                                    ),
                                  W = P().additionalData?.version ?? -1
                                return t.getComposerCodeBlock(o(), B, W)
                                  ?.content
                              }),
                              R = Q(() => L().userDecision)
                            return D(ae, {
                              get when() {
                                return (
                                  (Q(() => N() !== void 0)() && N() !== "") ||
                                  P().additionalData?.version !== void 0
                                )
                              },
                              get fallback() {
                                return D(ae, {
                                  get when() {
                                    return (
                                      Object.keys(
                                        E().pendingDecisions().pendingDecisions,
                                      ).includes(i.bubbleId) ||
                                      L().userDecision === "rejected" ||
                                      L().status === "cancelled"
                                    )
                                  },
                                  get children() {
                                    return D(k8r, {
                                      get relativeWorkspacePath() {
                                        return P().params?.relativeWorkspacePath
                                      },
                                      onClick: () => {
                                        const B =
                                          e.workspaceContextService.resolveRelativePath(
                                            P().params?.relativeWorkspacePath ??
                                              "",
                                          )
                                        d(B)
                                      },
                                      get isLoading() {
                                        return L().status === "loading"
                                      },
                                      onAccept: () =>
                                        E().acceptToolCall(L().toolCallId),
                                      onReject: () =>
                                        E().rejectToolCall(L().toolCallId),
                                      decision: () =>
                                        L().status === "cancelled"
                                          ? "rejected"
                                          : R(),
                                      get composerId() {
                                        return r().composerId
                                      },
                                      get bubbleData() {
                                        return L()
                                      },
                                      get reasonForAcceptReject() {
                                        return P().additionalData
                                          ?.reasonForAcceptReject
                                      },
                                    })
                                  },
                                })
                              },
                              children: (B) =>
                                (() => {
                                  var W = IJ()
                                  return (
                                    W.style.setProperty("border-radius", "6px"),
                                    F(
                                      W,
                                      D(jse, {
                                        get codeBlock() {
                                          return {
                                            uri: e.workspaceContextService.resolveRelativePath(
                                              P().params
                                                ?.relativeWorkspacePath ?? "",
                                            ),
                                            version:
                                              P().additionalData?.version ?? -1,
                                          }
                                        },
                                        get composerDataHandle() {
                                          return i.composerDataHandle
                                        },
                                        get linterErrors() {
                                          return (
                                            P().additionalData
                                              ?.lintsForRendering ??
                                            P().result?.linterErrors
                                          )
                                        },
                                        get lintingStatus() {
                                          return P().additionalData
                                            ?.lintingStatus
                                        },
                                      }),
                                    ),
                                    Pe((G) =>
                                      (G = m()
                                        ? "1px solid var(--vscode-notebook-focusedCellBorder)"
                                        : "1px solid transparent") != null
                                        ? W.style.setProperty("outline", G)
                                        : W.style.removeProperty("outline"),
                                    ),
                                    W
                                  )
                                })(),
                            })
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.READ_FILE)
                          },
                          children: (P) =>
                            D(_Us, {
                              get relativeWorkspacePath() {
                                return P().params?.relativeWorkspacePath ?? ""
                              },
                              get startLine() {
                                return P().params?.startLineOneIndexed
                              },
                              get endLine() {
                                return P().params?.endLineOneIndexedInclusive
                              },
                              onClick: () => {
                                const N =
                                    e.workspaceContextService.resolveRelativePath(
                                      P().params?.relativeWorkspacePath ?? "",
                                    ),
                                  R = P().params?.startLineOneIndexed,
                                  B = P().params?.endLineOneIndexedInclusive
                                AP(e, {
                                  filePathOrUri: N,
                                  selection: R
                                    ? {
                                        startLineNumber: R,
                                        endLineNumber: B ?? R,
                                        startColumn: 1,
                                        endColumn: (B ?? R) - R > 0 ? 1e3 : 1,
                                      }
                                    : void 0,
                                })
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.RUN_TERMINAL_COMMAND_V2)
                          },
                          children: (P) => {
                            const N = Q(() => {
                                if (L().userDecision === "rejected")
                                  return {
                                    status: "cancelled",
                                    stdout: "",
                                    stderr: "",
                                  }
                                if (L().status === "cancelled")
                                  return {
                                    status: "cancelled",
                                    stdout: P().result?.output ?? "",
                                    stderr: "",
                                  }
                                switch (P().additionalData?.status) {
                                  case "pending":
                                  case "loading":
                                    return {
                                      status: P().additionalData?.status,
                                    }
                                  default:
                                    return {
                                      status: P().additionalData?.status,
                                      stdout: P().result?.output ?? "",
                                      stderr: "",
                                    }
                                }
                              }),
                              R = Q(() => {
                                const W = P().additionalData?.sessionId
                                if (
                                  !(
                                    !W ||
                                    E().getLastBubbleIdWithTerminalSessionIdShownReactive(
                                      W,
                                    ) === i.bubbleId
                                  )
                                )
                                  return "output"
                              }),
                              B = Q(() => {
                                const W = P().additionalData?.sessionId
                                if (W)
                                  return e.terminalExecutionService.getTerminalInstance(
                                    W,
                                  )
                              })
                            return D(
                              WUs,
                              wr(
                                {
                                  get command() {
                                    return P().params?.command
                                  },
                                  get root() {
                                    return e.labelService.getWorkspaceLabel(
                                      e.workspaceContextService.getWorkspace(),
                                      { verbose: 2 },
                                    )
                                  },
                                  get isBlocking() {
                                    return !P().params?.isBackground
                                  },
                                  onExecute: () => {
                                    E().acceptToolCall(L().toolCallId)
                                  },
                                  onCancel: () => {
                                    E().rejectToolCall(L().toolCallId),
                                      e.analyticsService.trackEvent(
                                        "composer.cancel_chat",
                                        { source: "cancel_tool_call" },
                                      ),
                                      e.composerService.cancelCurrentStep(
                                        r().composerId,
                                      ),
                                      e.composerViewsService.focus(
                                        r().composerId,
                                      )
                                    const W = P().additionalData?.sessionId
                                    if (W)
                                      try {
                                        e.terminalExecutionService.cancelStream(
                                          W,
                                        )
                                      } catch (G) {
                                        console.error(G)
                                      }
                                  },
                                  onReset: () => {
                                    const W = P().additionalData?.sessionId
                                    if (W)
                                      try {
                                        e.terminalExecutionService.cancelStream(
                                          W,
                                        )
                                      } catch (G) {
                                        console.error(G)
                                      }
                                  },
                                  get componentToShowInsteadOfTerminalInstance() {
                                    return R()
                                  },
                                  showOpenInExternalTerminalCallback: (W) => {
                                    e.terminalExecutionService.leakTerminalInstance(
                                      W,
                                    ),
                                      E().popOutTerminalIntoBackground()
                                  },
                                  get terminalInstance() {
                                    return B()
                                  },
                                  get startAtBufferLine() {
                                    return P().additionalData?.startAtBufferLine
                                  },
                                },
                                N,
                                {
                                  get composerId() {
                                    return r().composerId
                                  },
                                  get bubbleData() {
                                    return L()
                                  },
                                  onCommandChange: (W) => {
                                    E().updateToolCallParams(L().toolCallId, {
                                      ...P().params,
                                      command: W,
                                    })
                                  },
                                },
                              ),
                            )
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.RIPGREP_SEARCH)
                          },
                          children: (P) =>
                            D(NUs, {
                              get query() {
                                return P().params?.patternInfo?.pattern || ""
                              },
                              searchDirectory: "",
                              get matchPerLine() {
                                return (
                                  P().params?.patternInfo?.isWordMatch ?? !1
                                )
                              },
                              get caseInsensitive() {
                                return (
                                  P().params?.patternInfo?.isCaseSensitive ?? !0
                                )
                              },
                              get includes() {
                                return P().params?.options?.includePattern
                                  ?.pattern
                              },
                              onResultClick: (N) => {
                                d(N)
                              },
                              get results() {
                                return (
                                  P().result?.internal?.results ?? []
                                ).flatMap((N) =>
                                  N.results.flatMap((R) => {
                                    if (R.result && R.result.case === "match") {
                                      const B = R.result.value
                                      return B === void 0
                                        ? []
                                        : {
                                            uri: H.parse(N.resource),
                                            lineNumber:
                                              B.rangeLocations.at(0)?.source
                                                ?.startLineNumber,
                                            lineContent: B.previewText,
                                          }
                                    }
                                    return []
                                  }),
                                )
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.LIST_DIR)
                          },
                          children: (P) =>
                            D(RUs, {
                              get dirName() {
                                return P().params?.directoryPath ?? ""
                              },
                              get results() {
                                return (
                                  P().result?.files?.map((N) => ({
                                    uri: e.workspaceContextService.resolveRelativePath(
                                      `${P().params?.directoryPath}/${N.name}`,
                                    ),
                                    name: N.name,
                                    isDirectory: N.isDirectory,
                                    size:
                                      N.size !== void 0 ? Number(N.size) : 0,
                                    lastModified:
                                      N.lastModified !== void 0
                                        ? Number(N.lastModified.seconds) * 1e3
                                        : 0,
                                  })) ?? []
                                )
                              },
                              onResultClick: (N) => d(N),
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.FILE_SEARCH)
                          },
                          children: (P) =>
                            D(PUs, {
                              get query() {
                                return P().params?.query ?? ""
                              },
                              get results() {
                                return (
                                  P().result?.files?.map((N) => ({
                                    uri: e.workspaceContextService.resolveRelativePath(
                                      N.uri,
                                    ),
                                  })) ?? []
                                )
                              },
                              onResultClick: (N) => d(N),
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.READ_SEMSEARCH_FILES)
                          },
                          children: (P) =>
                            D(fgt, {
                              get query() {
                                return P().params?.query ?? ""
                              },
                              get results() {
                                return (
                                  P()
                                    .result?.codeResults.filter(
                                      (N) => !!N.codeBlock,
                                    )
                                    .map((N) => ({
                                      uri: e.workspaceContextService.resolveRelativePath(
                                        N.codeBlock?.relativeWorkspacePath ??
                                          "",
                                      ),
                                      score: N.score,
                                      range: N.codeBlock?.range,
                                    })) ?? []
                                )
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                              onResultClick: (N) =>
                                d(
                                  N.uri,
                                  N.range && {
                                    startLineNumber:
                                      N.range.startPosition?.line ?? 0,
                                    endLineNumber:
                                      N.range.endPosition?.line ?? 0,
                                  },
                                ),
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.SEMANTIC_SEARCH_FULL)
                          },
                          children: (P) =>
                            D(fgt, {
                              get query() {
                                return P().params?.query ?? ""
                              },
                              get includePattern() {
                                return P().params?.includePattern
                              },
                              get excludePattern() {
                                return P().params?.excludePattern
                              },
                              get results() {
                                return (
                                  P()
                                    .result?.codeResults.filter(
                                      (N) => !!N.codeBlock,
                                    )
                                    .map((N) => ({
                                      uri: e.workspaceContextService.resolveRelativePath(
                                        N.codeBlock?.relativeWorkspacePath ??
                                          "",
                                      ),
                                      score: N.score,
                                      range: N.codeBlock?.range,
                                    })) ?? []
                                )
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              onResultClick: (N) =>
                                d(
                                  N.uri,
                                  N.range && {
                                    startLineNumber:
                                      N.range.startPosition?.line ?? 0,
                                    endLineNumber:
                                      N.range.endPosition?.line ?? 0,
                                  },
                                ),
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.CREATE_FILE)
                          },
                          children: (P) =>
                            D(xUs, {
                              get relativeWorkspacePath() {
                                return P().params?.relativeWorkspacePath
                              },
                              onClick: () => {
                                const N =
                                  e.workspaceContextService.resolveRelativePath(
                                    P().params?.relativeWorkspacePath ?? "",
                                  )
                                d(N)
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.DELETE_FILE)
                          },
                          children: (P) => {
                            const N = Q(() => L().userDecision)
                            return D(kUs, {
                              get relativeWorkspacePath() {
                                return P().params?.relativeWorkspacePath
                              },
                              onClick: () => {
                                const R =
                                  e.workspaceContextService.resolveRelativePath(
                                    P().params?.relativeWorkspacePath ?? "",
                                  )
                                d(R)
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              onAccept: () =>
                                E().acceptToolCall(L().toolCallId),
                              onReject: () =>
                                E().rejectToolCall(L().toolCallId),
                              get decision() {
                                return L().status !== "loading"
                                  ? () => "rejected"
                                  : N
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            })
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.PARALLEL_APPLY)
                          },
                          children: (P) =>
                            D(FUs, {
                              get planText() {
                                return P().params?.editPlan
                              },
                              get filesToEdit() {
                                return Object.entries(
                                  P().additionalData?.codeBlockData ?? {},
                                ).map(([N, R]) => {
                                  const [B, W] = N.split("!")
                                  return {
                                    uri: H.parse(B),
                                    version: parseInt(W),
                                    range: {
                                      startLineNumber:
                                        R.range?.startLineNumber ?? 0,
                                      endLineNumber:
                                        R.range?.endLineNumberInclusive ?? 0,
                                    },
                                  }
                                })
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                              get composerDataHandle() {
                                return i.composerDataHandle
                              },
                              get decision() {
                                return Q(() => L().userDecision)
                              },
                              get hasPendingDecision() {
                                return (
                                  Object.keys(
                                    E().pendingDecisions().pendingDecisions,
                                  ).includes(i.bubbleId) ?? !1
                                )
                              },
                              onAccept: () => {
                                E().acceptToolCall(L().toolCallId)
                              },
                              onReject: () => {
                                E().rejectToolCall(L().toolCallId)
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.GET_RELATED_FILES)
                          },
                          children: (P) =>
                            (() => {
                              var N = IJ()
                              return (
                                N.style.setProperty("border-radius", "6px"),
                                F(
                                  N,
                                  D(LUs, {
                                    get targetFiles() {
                                      return P().params?.targetFiles ?? []
                                    },
                                    get results() {
                                      return (P().result?.files ?? []).map(
                                        (R) => ({
                                          uri: e.workspaceContextService.resolveRelativePath(
                                            R.uri,
                                          ),
                                          score: R.score,
                                        }),
                                      )
                                    },
                                    onResultClick: (R) => d(R),
                                    get isLoading() {
                                      return L().status === "loading"
                                    },
                                    get composerId() {
                                      return r().composerId
                                    },
                                    get bubbleData() {
                                      return L()
                                    },
                                  }),
                                ),
                                Pe((R) =>
                                  (R = m()
                                    ? "1px solid var(--vscode-notebook-focusedCellBorder)"
                                    : void 0) != null
                                    ? N.style.setProperty("outline", R)
                                    : N.style.removeProperty("outline"),
                                ),
                                N
                              )
                            })(),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.FETCH_RULES)
                          },
                          children: (P) =>
                            D(TUs, {
                              get rules() {
                                return P().result?.rules ?? []
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.PLANNER)
                          },
                          children: (P) =>
                            D(OUs, {
                              get instruction() {
                                return P().params?.instruction ?? ""
                              },
                              get plan() {
                                return P().result?.plan ?? ""
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.WEB_SEARCH)
                          },
                          children: (P) => {
                            const N = Q(() => L().userDecision)
                            return D(HUs, {
                              get query() {
                                return P().params?.searchTerm ?? ""
                              },
                              get results() {
                                return (P().result?.references ?? []).map(
                                  (R) => ({
                                    title: R.title ?? "",
                                    url: R.url ?? "",
                                    snippet: R.chunk ?? "",
                                  }),
                                )
                              },
                              onResultClick: (R) => {
                                const B = H.parse(R.url)
                                d(B)
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                              onAccept: (R) => {
                                E().acceptToolCall(L().toolCallId),
                                  R &&
                                    e.reactiveStorageService.setApplicationUserPersistentStorage(
                                      "composerState",
                                      (B) => ({
                                        ...B,
                                        autoAcceptWebSearchTool: !0,
                                      }),
                                    )
                              },
                              onReject: (R) => {
                                E().rejectToolCall(L().toolCallId),
                                  R &&
                                    a((B) => {
                                      B("enabledTools", (W) =>
                                        W.filter((G) => G !== Et.WEB_SEARCH),
                                      )
                                    })
                              },
                              decision: N,
                            })
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.WEB_VIEWER)
                          },
                          children: (P) =>
                            D(L3r, {
                              get url() {
                                return P().params?.url
                              },
                              get screenshots() {
                                return P().additionalData?.images
                              },
                              onUrlClick: () => {
                                const N = H.parse(P().params?.url ?? "")
                                d(N)
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get cancelled() {
                                return L().status === "cancelled"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.MCP)
                          },
                          children: (P) => {
                            const N = Q(() => L().userDecision)
                            return D($Us, {
                              get mcpData() {
                                return P()
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              onAccept: () =>
                                E().acceptToolCall(L().toolCallId),
                              onReject: () =>
                                E().rejectToolCall(L().toolCallId),
                              decision: N,
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                              get error() {
                                return L().error?.clientVisibleErrorMessage
                              },
                            })
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.DIFF_HISTORY)
                          },
                          children: (P) =>
                            D(S8r, {
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return P()
                              },
                              onResultClick: (N) => d(N),
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.IMPLEMENTER)
                          },
                          children: (P) =>
                            D(ae, {
                              get when() {
                                return l()
                              },
                              children: (N) => {
                                const R = Q(() => ({
                                  ...N(),
                                  text: P().params?.implementation ?? "",
                                }))
                                return D(ae, {
                                  get when() {
                                    return (
                                      Q(() => !!R().text)() &&
                                      R().text.length > 0
                                    )
                                  },
                                  get fallback() {
                                    return (() => {
                                      var B = IJ()
                                      return (
                                        B.style.setProperty("height", "19px"),
                                        B.style.setProperty(
                                          "padding-right",
                                          "6px",
                                        ),
                                        B.style.setProperty(
                                          "font-family",
                                          "monospace",
                                        ),
                                        B.style.setProperty(
                                          "font-size",
                                          "12px",
                                        ),
                                        B.style.setProperty(
                                          "color",
                                          "var(--vscode-input-placeholderForeground)",
                                        ),
                                        B.style.setProperty("display", "flex"),
                                        B.style.setProperty(
                                          "align-items",
                                          "center",
                                        ),
                                        B.style.setProperty("gap", "6px"),
                                        B.style.setProperty(
                                          "padding",
                                          "6px 8px",
                                        ),
                                        F(
                                          B,
                                          D(ae, {
                                            get when() {
                                              return L().status === "cancelled"
                                            },
                                            get fallback() {
                                              return [
                                                D(Jw, {}),
                                                "Generating implementation...",
                                              ]
                                            },
                                            get children() {
                                              return [
                                                (() => {
                                                  var W = IJ()
                                                  return (
                                                    W.style.setProperty(
                                                      "font-size",
                                                      "14px",
                                                    ),
                                                    W.style.setProperty(
                                                      "color",
                                                      "var(--vscode-errorForeground)",
                                                    ),
                                                    Pe(() =>
                                                      tt(
                                                        W,
                                                        oe.asClassName(A.close),
                                                      ),
                                                    ),
                                                    W
                                                  )
                                                })(),
                                                "Cancelled implementation",
                                              ]
                                            },
                                          }),
                                        ),
                                        B
                                      )
                                    })()
                                  },
                                  get children() {
                                    return D(N7s, {
                                      get message() {
                                        return R()
                                      },
                                      index: () => 0,
                                      hideHints: !1,
                                      isInputFocused: !1,
                                      scrollable: void 0,
                                      messagesContainerRef: void 0,
                                      get composerDataHandle() {
                                        return i.composerDataHandle
                                      },
                                      get location() {
                                        return i.location
                                      },
                                    })
                                  },
                                })
                              },
                            }),
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.REAPPLY)
                          },
                          children: (P) => {
                            const N = Q(() => L().userDecision)
                            return D(c3r, {
                              get relativeWorkspacePath() {
                                return P().params?.relativeWorkspacePath
                              },
                              onClick: () => {
                                const R =
                                  e.workspaceContextService.resolveRelativePath(
                                    P().params?.relativeWorkspacePath ?? "",
                                  )
                                d(R)
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              onAccept: () =>
                                E().acceptToolCall(L().toolCallId),
                              onReject: () =>
                                E().rejectToolCall(L().toolCallId),
                              decision: () =>
                                L().status === "cancelled" ? "rejected" : N(),
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                            })
                          },
                        }),
                        D(Xi, {
                          get when() {
                            return h(Et.SEARCH_SYMBOLS)
                          },
                          children: (P) =>
                            D(EJ, {
                              get results() {
                                return (
                                  P().result?.matches.map((N) => ({
                                    uri: e.workspaceContextService.resolveRelativePath(
                                      N.uri,
                                    ),
                                    score: N.score,
                                    metadata: {
                                      range: N.range,
                                      name: N.name,
                                      secondaryText: N.secondaryText,
                                    },
                                  })) ?? []
                                )
                              },
                              onResultClick: (N) => {
                                d(
                                  N.uri,
                                  N.metadata?.range && {
                                    startLineNumber:
                                      N.metadata.range.startLine + 1,
                                    endLineNumber: N.metadata.range.endLine + 1,
                                  },
                                )
                              },
                              formatResult: (N) => ({
                                label: N.metadata?.name ?? "",
                                description: N.metadata?.secondaryText,
                                score: N.score,
                              }),
                              get searchContext() {
                                return P().params?.query
                              },
                              get isLoading() {
                                return L().status === "loading"
                              },
                              get composerId() {
                                return r().composerId
                              },
                              get bubbleData() {
                                return L()
                              },
                              statusText: (N) =>
                                N ? "Searching symbols..." : "Searched symbols",
                            }),
                        }),
                      ]
                    },
                  }),
                  D(ae, {
                    get when() {
                      return y()
                    },
                    get children() {
                      return D(CUs, {
                        onResume: k,
                        isAfter: !0,
                        get style() {
                          return {
                            translate: (L().tool === Et.WEB_SEARCH, "0px -2px"),
                          }
                        },
                      })
                    },
                  }),
                  D(ae, {
                    get when() {
                      return C()
                    },
                    children: (P) => {
                      const N = Esi(o, () => P().bubbleId)
                      return [
                        D(ae, {
                          get when() {
                            return l()
                          },
                          children: (R) =>
                            (() => {
                              var B = IJ()
                              return (
                                B.style.setProperty("padding-top", "6px"),
                                F(
                                  B,
                                  D(A7s, {
                                    isLastMessage: !1,
                                    get composerDataHandle() {
                                      return i.composerDataHandle
                                    },
                                    get message() {
                                      return R()
                                    },
                                    getCopyText: () => {
                                      const W = r().conversation.findIndex(
                                        (te) => te.bubbleId === R().bubbleId,
                                      )
                                      let G = ""
                                      for (let te = W; te >= 0; te--) {
                                        const re = r().conversation[te]
                                        if (
                                          re.capabilityType === xn.TOOL_FORMER
                                        )
                                          G =
                                            t
                                              .getComposerCapability(
                                                o(),
                                                re.capabilityType,
                                              )
                                              ?.getBubbleDataAsPlainText(
                                                re.bubbleId,
                                              ) +
                                            `
` +
                                            G
                                        else if (!re || re.type !== bn.AI) break
                                        G =
                                          re.text +
                                          `
` +
                                          G
                                      }
                                      return G
                                    },
                                  }),
                                ),
                                B
                              )
                            })(),
                        }),
                        (() => {
                          var R = IJ()
                          return (
                            R.style.setProperty("padding-top", "0.8rem"),
                            R.style.setProperty("padding-bottom", "0.4rem"),
                            F(
                              R,
                              D(Tsi, {
                                get composerDataHandle() {
                                  return o()
                                },
                                get message() {
                                  return P()
                                },
                                get location() {
                                  return i.location
                                },
                                get isBubbleSelected() {
                                  return N()
                                },
                                get fontInfo() {
                                  return i.fontInfo
                                },
                              }),
                            ),
                            R
                          )
                        })(),
                      ]
                    },
                  }),
                ],
              }),
            ),
            I
          )
        })(),
    })
  }

  return {
    R3r,
  }
}
