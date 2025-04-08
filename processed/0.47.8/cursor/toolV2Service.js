// @ts-check

export function createToolV2Service(params) {
  const { Ve, V, Et, mjt, bjt, Nat, Sjt, kjt, Ejt, Ijt, Djt, Tjt, Pjt, yjt, Ljt, Njt, Rjt, Mjt, gjt, $jt, Fjt, Ojt, IDs, ic, Ml, Mte, Ra, xn, p9, $O, fvs, eH, RO, JGe, F6, Sue, mue, __decorate, __param, Pat, kl, $i, st} = params;

  var EDs = Ve("toolV2Service"),
    _jt = class extends V {
      constructor(e, t, s) {
        super(),
          (this.a = e),
          (this.b = t),
          (this.c = s),
          this.a.registerHandler(Et.READ_SEMSEARCH_FILES, mjt),
          this.a.registerHandler(Et.RIPGREP_SEARCH, bjt),
          this.a.registerHandler(Et.READ_FILE, Nat),
          this.a.registerHandler(Et.LIST_DIR, Sjt),
          this.a.registerHandler(Et.EDIT_FILE, kjt),
          this.a.registerHandler(Et.FILE_SEARCH, Ejt),
          this.a.registerHandler(Et.SEMANTIC_SEARCH_FULL, Ijt),
          this.a.registerHandler(Et.DELETE_FILE, Djt),
          this.a.registerHandler(Et.REAPPLY, Tjt),
          this.a.registerHandler(Et.PARALLEL_APPLY, Pjt),
          this.a.registerHandler(Et.RUN_TERMINAL_COMMAND_V2, yjt),
          this.a.registerHandler(Et.FETCH_RULES, Ljt),
          this.a.registerHandler(Et.PLANNER, Njt),
          this.a.registerHandler(Et.WEB_SEARCH, Rjt),
          this.a.registerHandler(Et.WEB_VIEWER, Mjt),
          this.a.registerHandler(Et.MCP, gjt),
          this.a.registerHandler(Et.DIFF_HISTORY, $jt),
          this.a.registerHandler(Et.IMPLEMENTER, Fjt),
          this.a.registerHandler(Et.SEARCH_SYMBOLS, Ojt),
          this.a.registerHandler(
            Et.RUN_TERMINAL_COMMAND,
            IDs(Et.RUN_TERMINAL_COMMAND),
            !0,
          ),
          this.a.registerHandler(
            Et.READ_FILE_FOR_IMPORTS,
            IDs(Et.READ_FILE_FOR_IMPORTS),
            !0,
          )
      }
      async runStreamingTool(e, t, s, n) {
        if (e.tool === Et.UNSPECIFIED)
          throw new Error("[composer] ToolFormer: tool call is unspecified")
        await this.a
          .getHandler(e.tool)
          .streamedCall(e.params.value, t, e.toolCallId, s, n)
      }
      async finishStreamingTool(e, t, s) {
        if (e.tool === Et.UNSPECIFIED)
          throw new Error("[composer] ToolFormer: tool call is unspecified")
        const n = this.a.getHandler(e.tool),
          r = await Promise.race([
            n.finishStream(e.params.value, t, e.toolCallId, s),
            new Promise((o, a) => {
              t.signal.addEventListener("abort", () => {
                a(
                  new ic({
                    clientVisibleErrorMessage: "Tool call errored or timed out",
                    modelVisibleErrorMessage: "Tool call errored or timed out",
                    actualErrorMessage: "Tool call errored or timed out",
                  }),
                )
              })
            }),
          ])
        return new Ml({
          tool: e.tool,
          result: { case: Mte[e.tool].returnName, value: r },
        })
      }
      async runTool(e, t, s, n) {
        const r = this.b.getToolFormer(s)
        if (!r) throw new Error("[composer] ToolFormer: capability not found")
        const o = r.getAbortSignal()
        return new Promise((a, l) => {
          ;(async () => {
            try {
              if (e.tool === Et.UNSPECIFIED)
                throw new Error("[composer] ToolFormer: tool call is unspecified")
              const u = this.a.getHandler(e.tool),
                h = await Promise.race([
                  u.call(e.params.value, t, e.toolCallId, s, n),
                  new Promise((g, p) => {
                    t.signal.addEventListener("abort", () =>
                      p(
                        new ic({
                          clientVisibleErrorMessage:
                            "Tool call errored or timed out",
                          modelVisibleErrorMessage:
                            "Tool call errored or timed out",
                          actualErrorMessage: "Tool call errored or timed out",
                        }),
                      ),
                    )
                  }),
                ]),
                d = new Ml({
                  tool: e.tool,
                  result: { case: Mte[e.tool].returnName, value: h },
                })
              a(d)
            } catch (u) {
              l(u)
            }
          })(),
            o.addEventListener("abort", () => {
              try {
                if (e.tool === Et.UNSPECIFIED)
                  throw new Error(
                    "[composer] ToolFormer: tool call is unspecified",
                  )
                const u = r.getBubbleDataByToolCallId(e.toolCallId)
                u
                  ? a(
                      new Ml({
                        tool: e.tool,
                        result: { case: Mte[e.tool].returnName, value: u.result },
                      }),
                    )
                  : l(new Ra())
              } catch (u) {
                l(u)
              }
            })
        })
      }
      async setupTool(e, t, s) {
        if (e.tool === Et.UNSPECIFIED)
          throw new Error("[composer] ToolFormer: tool call is unspecified")
        return await this.a
          .getHandler(e.tool)
          .setup(e.params.value, t, e.toolCallId, s)
      }
      async *toolWrappedStream(e, t, s, n) {
        const o = (n?.composerId ? this.b.getComposerData(n.composerId) : void 0)
          ? this.b.getComposerCapability(n?.composerId, xn.TOOL_FORMER)
          : void 0
        if (!o) throw new Error("[composer] ToolFormer: capability not found")
        let a, l
        try {
          for await (const c of t)
            if (c.response.case === "conversationSummary") {
              const u = c.response.value
              this.b.updateComposerDataSetStore(n?.composerId || "", (h) =>
                h(
                  "conversation",
                  (d) =>
                    d.serverBubbleId === u.truncationLastBubbleIdInclusive ||
                    d.bubbleId === u.truncationLastBubbleIdInclusive,
                  "cachedConversationSummary",
                  u,
                ),
              )
            } else if (c.response.case === "clientSideToolV2Call") {
              const u = c.response.value
              try {
                if (u.tool === Et.UNSPECIFIED)
                  throw new Error(
                    "[composer] ToolFormer: tool call is unspecified",
                  )
                if (a !== u.toolCallId) {
                  fetch('http://localhost:3000', {
                    method: 'POST',
                    body: JSON.stringify({
                      toolWrappedStream: 'toolWrappedStream',
                      c
                    }),
                  });
                  await o.handleInitialToolCall({
                    toolCallId: u.toolCallId,
                    toolCallType: u.tool,
                    params: u.params,
                    name: u.name,
                    rawArgs: u.rawArgs,
                    isStreaming: u.isStreaming,
                  })
                  try {
                    l = await this.setupTool(u, s, n?.composerId || "")
                  } catch (d) {
                    if (d instanceof p9) {
                      e.push(
                        new $O({
                          request: {
                            case: "clientSideToolV2Result",
                            value: this.g(u),
                          },
                        }),
                      )
                      continue
                    }
                    throw d
                  }
                  fvs.includes(u.tool) &&
                    e.push(
                      new $O({
                        request: {
                          case: "clientSideToolV2Result",
                          value: this.f(u),
                        },
                      }),
                    ),
                    o.startShowCancelAndResumeTimeout(u.isStreaming)
                }
                let h = s
                if (
                  (u.timeoutMs &&
                    ((h = new AbortController()),
                    s.signal.addEventListener("abort", () => {
                      h.abort()
                    }),
                    setTimeout(() => {
                      h.abort()
                    }, u.timeoutMs)),
                  this.c.nonPersistentStorage.composerState
                    .shouldSimulateToolFormerError)
                )
                  throw new ic({
                    clientVisibleErrorMessage: "Simulated tool call error",
                    modelVisibleErrorMessage: "Simulated tool call error",
                    actualErrorMessage: "Simulated tool call error",
                  })
                if (u.isStreaming)
                  if (a === void 0)
                    if (u.isLastMessage) {
                      a = void 0
                      const d = await this.runTool(u, h, n?.composerId || "", l)
                      o.handleToolResult(d, u.toolCallId),
                        e.push(
                          new $O({
                            request: { case: "clientSideToolV2Result", value: d },
                          }),
                        )
                    } else
                      (a = u.toolCallId),
                        this.runStreamingTool(u, h, n?.composerId || "", !0)
                  else if (!u.isLastMessage)
                    this.runStreamingTool(u, h, n?.composerId || "", !1)
                  else {
                    a = void 0
                    const d = await this.finishStreamingTool(
                      u,
                      h,
                      n?.composerId || "",
                    )
                    o.handleToolResult(d, u.toolCallId),
                      e.push(
                        new $O({
                          request: { case: "clientSideToolV2Result", value: d },
                        }),
                      )
                  }
                else {
                  const d = await this.runTool(u, h, n?.composerId || "", l)
                  d.result.case !== void 0 && o.handleToolResult(d, u.toolCallId),
                    e.push(
                      new $O({
                        request: { case: "clientSideToolV2Result", value: d },
                      }),
                    )
                }
              } catch (h) {
                const d = u.tool,
                  g = d in Mte ? Mte[d]?.paramName : "unknown"
                console.error(
                  `[ToolV2Service] Error executing tool ${u.tool} (${g}):`,
                  {
                    toolCallId: u.toolCallId,
                    name: u.name,
                    isStreaming: u.isStreaming,
                    error:
                      h instanceof Error
                        ? { name: h.name, message: h.message, stack: h.stack }
                        : h,
                  },
                )
                let p = h.message,
                  m = h.message,
                  v = h.message
                h instanceof ic &&
                  ((p = h.modelVisibleErrorMessage),
                  (m = h.clientVisibleErrorMessage),
                  (v = h.actualErrorMessage),
                  console.error("[ToolV2Service] ToolCallError details:", {
                    clientMessage: m,
                    modelMessage: p,
                    actualError: v,
                  }))
                const y = new Ml({
                  tool: u.tool,
                  error: {
                    clientVisibleErrorMessage: m,
                    modelVisibleErrorMessage: p,
                    actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk:
                      v,
                  },
                })
                e.push(
                  new $O({
                    request: { case: "clientSideToolV2Result", value: y },
                  }),
                )
              }
            } else
              c.response.case === "streamUnifiedChatResponse" &&
                (yield c.response.value)
        } catch (c) {
          throw (
            (console.error(
              "[composer] ToolFormer: error in toolWrappedStream",
              a,
            ),
            o.handleToolError(c),
            c)
          )
        }
      }
      f(e) {
        switch (e.tool) {
          case Et.WEB_SEARCH:
            return new Ml({
              tool: e.tool,
              result: {
                case: "webSearchResult",
                value: new eH({ references: [], isFinal: !0 }),
              },
            })
          case Et.EDIT_FILE:
            return new Ml({
              tool: e.tool,
              result: { case: "editFileResult", value: new RO() },
            })
          default:
            throw new Error(
              `[composer] ToolFormer: no accepted tool result for tool ${e.tool}`,
            )
        }
      }
      g(e) {
        switch (e.tool) {
          case Et.RUN_TERMINAL_COMMAND_V2:
            return new Ml({
              tool: e.tool,
              result: {
                case: "runTerminalCommandV2Result",
                value: new JGe({ output: "", rejected: !0 }),
              },
            })
          case Et.DELETE_FILE:
            return new Ml({
              tool: e.tool,
              result: {
                case: "deleteFileResult",
                value: new F6({ rejected: !0 }),
              },
            })
          case Et.MCP:
            return new Ml({
              tool: e.tool,
              result: {
                case: "mcpResult",
                value: { result: JSON.stringify({ rejected: !0 }) },
              },
            })
          case Et.WEB_SEARCH:
            return new Ml({
              tool: e.tool,
              result: {
                case: "webSearchResult",
                value: new eH({ references: [], isFinal: !0, rejected: !0 }),
              },
            })
          case Et.EDIT_FILE:
            return new Ml({
              tool: e.tool,
              result: { case: "editFileResult", value: new RO({ rejected: !0 }) },
            })
          case Et.PARALLEL_APPLY:
            return new Ml({
              tool: e.tool,
              result: {
                case: "parallelApplyResult",
                value: new Sue({ rejected: !0 }),
              },
            })
          case Et.REAPPLY:
            return new Ml({
              tool: e.tool,
              result: { case: "reapplyResult", value: new mue({ rejected: !0 }) },
            })
          default:
            throw new Error(
              `[composer] ToolFormer: no rejected tool result for tool ${e.tool}`,
            )
        }
      }
    }
  ;(_jt = __decorate([__param(0, Pat), __param(1, kl), __param(2, $i)], _jt)),
    st(EDs, _jt, 1);

  return {
    EDs,
  }
}
