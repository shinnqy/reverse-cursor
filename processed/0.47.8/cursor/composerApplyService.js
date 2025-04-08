// @ts-check

export function createComposerApplyService(params) {
  const {Ve, V, II, __addDisposableResource, __disposeResources, vc, Db, Mt, H, Jit, nce, _P, jYe, pce, bn, $0, OP, Ln, Dw, YYe } = params;

  var bDs = { shouldGracefullyFallBackOnTimeout: !0 },
  lhr = 10,
  j4 = Ve("composerApplyService"),
  T2 = class extends V {
    constructor(e, t, s, n, r, o, a, l, c, u, h, d, g, p, m, v, y, w, C) {
      super(),
        (this._composerDataService = e),
        (this._composerUtilsService = t),
        (this._composerViewsService = s),
        (this._composerFileService = n),
        (this._fileService = r),
        (this._fastEditService = o),
        (this._textModelService = a),
        (this._aiApplyToFileActionsService = l),
        (this._inlineDiffService = c),
        (this._composerEventService = u),
        (this._workspaceContextService = h),
        (this._everythingProviderService = d),
        (this._editorWorkerService = g),
        (this._commandService = p),
        (this._reactiveStorageService = m),
        (this._languageService = v),
        (this._configurationService = y),
        (this._editorService = w),
        (this._composerModesService = C),
        (this._fastApplyQueue = new II(lhr)),
        (this._composerEditingStates = new Map()),
        (this._composerApplyingDiffsState = new Map())
      const S = (P, N, R) => {
          const B = { stack: [], error: void 0, hasError: !1 }
          try {
            const W = __addDisposableResource(
              B,
              vc("ComposerApplyService.abortAndRemoveApplyGenerationUUID"),
              !1,
            )
            if (!this._composerDataService.getComposerFromIdOrHandle(P)) return
            const te = this._composerDataService.getComposerCodeBlock(P, N, R)
            te?.applyGenerationUUID &&
              (this._composerUtilsService.abortGenerationUUID(
                te.applyGenerationUUID,
              ),
              this._composerDataService.updateComposerCodeBlock(P, N, R, {
                applyGenerationUUID: void 0,
              }))
          } catch (W) {
            ;(B.error = W), (B.hasError = !0)
          } finally {
            __disposeResources(B)
          }
        },
        x = (P) => {
          const N = { stack: [], error: void 0, hasError: !1 }
          try {
            const R = __addDisposableResource(
              N,
              vc("ComposerService.handleDiffRemoval"),
              !1,
            )
            if (!P.composerId) return
            P.accepted ? E(P.diffInfo, !1) : k(P.diffInfo, !1)
          } catch (R) {
            ;(N.error = R), (N.hasError = !0)
          } finally {
            __disposeResources(N)
          }
        },
        k = (P, N = !0) => {
          const R = { stack: [], error: void 0, hasError: !1 }
          try {
            const B = __addDisposableResource(
                R,
                vc("ComposerService.handleDiffReject"),
                !1,
              ),
              { composerId: W, version: G } = P.composerMetadata ?? {}
            if (
              !W ||
              G === void 0 ||
              !this._composerDataService.getComposerFromIdOrHandle(W) ||
              !this._composerDataService.getComposerCodeBlock(W, P.uri, G)
            )
              return
            this._composerFileService.isCodeBlockRegisteredAsCached(
              W,
              P.uri,
              G,
            ) ||
              (this._composerDataService.setCodeBlockStatusIncludingPreviouslyChained(
                W,
                P.uri,
                G,
                "rejected",
              ),
              S(W, P.uri, G)),
              this._composerFileService
                .deleteNewFileAndMaybeFolder(W, P.uri)
                .then((he) => {
                  he ||
                    (N &&
                      this._composerFileService.saveFile(P.uri, { force: !0 }))
                })
          } catch (B) {
            ;(R.error = B), (R.hasError = !0)
          } finally {
            __disposeResources(R)
          }
        },
        E = (P, N = !0) => {
          const R = { stack: [], error: void 0, hasError: !1 }
          try {
            const B = __addDisposableResource(
                R,
                vc("ComposerService.handleDiffAccept"),
                !1,
              ),
              { composerId: W, version: G } = P.composerMetadata ?? {}
            if (
              !W ||
              G === void 0 ||
              !this._composerDataService.getComposerFromIdOrHandle(W) ||
              !this._composerDataService.getComposerCodeBlock(W, P.uri, G)
            )
              return
            N && this._composerFileService.saveFile(P.uri, { force: !0 }),
              this._composerDataService.setCodeBlockStatusIncludingPreviouslyChained(
                W,
                P.uri,
                G,
                "accepted",
              ),
              S(W, P.uri, G),
              this._composerFileService.removeFileFromNewlyCreatedFilesAndFolders(
                W,
                P.uri,
              )
          } catch (B) {
            ;(R.error = B), (R.hasError = !0)
          } finally {
            __disposeResources(R)
          }
        },
        I = (P, N) => {
          const R = { stack: [], error: void 0, hasError: !1 }
          try {
            const B = __addDisposableResource(
                R,
                vc("ComposerService.handlePartialDiff"),
                !1,
              ),
              { composerId: W, version: G } = P.diffInfo.composerMetadata ?? {}
            if (
              !W ||
              G === void 0 ||
              !this._composerDataService.getComposerFromIdOrHandle(W)
            )
              return
            const { diffInfo: re, isDone: Z } = P
            Z && (N === "accepted" ? E(re) : k(re))
          } catch (B) {
            ;(R.error = B), (R.hasError = !0)
          } finally {
            __disposeResources(R)
          }
        },
        L = (P) => {
          const N = { stack: [], error: void 0, hasError: !1 }
          try {
            const R = __addDisposableResource(
                N,
                vc("ComposerService.handleAddDiffFromUndoRedo"),
                !1,
              ),
              { composerId: B, version: W } = P.composerMetadata ?? {}
            if (
              !B ||
              W === void 0 ||
              !this._composerDataService.getComposerFromIdOrHandle(B) ||
              !this._composerDataService.getComposerCodeBlock(B, P.uri, W)
            )
              return
            this._composerDataService.updateComposerCodeBlock(B, P.uri, W, {
              status: "completed",
            }),
              console.log(
                `[composer] Restored diff for ${P.uri.toString()} with version ${W}`,
              )
          } catch (R) {
            ;(N.error = R), (N.hasError = !0)
          } finally {
            __disposeResources(N)
          }
        }
      this.D(this._inlineDiffService.onDidAcceptDiff(E)),
        this.D(this._inlineDiffService.onDidRejectDiff((P) => k(P))),
        this.D(
          this._inlineDiffService.onDidRemoveDiffFromUndoRedo((P) => x(P)),
        ),
        this.D(this._inlineDiffService.onDidAddDiffFromUndoRedo((P) => L(P))),
        this.D(
          this._inlineDiffService.onDidAcceptPartialDiff((P) =>
            I(P, "accepted"),
          ),
        ),
        this.D(
          this._inlineDiffService.onDidRejectPartialDiff((P) =>
            I(P, "rejected"),
          ),
        )
    }
    async warmFastApply(e, t) {
      const s = this._composerDataService.getComposerFromIdOrHandle(e),
        n = this._composerModesService.getComposerUnifiedMode(e)
      if (!s) {
        console.error("[composer] No composer found for warmFastApply")
        return
      }
      if (
        !this._composerDataService.getComposerCodeBlock(e, t.uri, t.version)
      ) {
        console.error(
          "[composer] No reactive code block found for warmFastApply",
        )
        return
      }
      if (!this._composerDataService.getLastHumanBubble(e)) {
        console.error("[composer] No last user message found for warmFastApply")
        return
      }
      if (!(await this._fileService.exists(t.uri))) return
      let a
      n === "chat"
        ? (a = Db.CACHED_APPLY)
        : (a = this._composerUtilsService.isAgenticComposer(e)
            ? Db.COMPOSER_AGENT
            : Db.COMPOSER)
      try {
        await this._fastEditService.warmFastApply({
          uri: t.uri,
          conversationHistory:
            this._composerUtilsService.processConversationForFastEdit(
              e,
              s.conversation,
              t,
            ),
          generationUUID: Mt(),
          source: a,
        })
      } catch (l) {
        console.error("[composer] Error in warmFastApply:", l)
      }
    }
    async runFastApplyOnCodeBlock(e, t, s) {
      const n = this._composerDataService.getCodeBlockStatus(
        e,
        t.uri,
        t.version,
      )
      if (
        (this._composerDataService.setCodeBlockStatus(
          e,
          t.uri,
          t.version,
          "apply_pending",
        ),
        s?.isBackground === !0)
      )
        return this._fastApplyQueue.queue(() =>
          this.runFastApplyOnCodeBlockInternal(e, t, {
            ...s,
            cameFromGenerating: n === "generating" || s?.cameFromGenerating,
            isReapply: s?.isReapply,
          }),
        )
      const r = t.uri.toString(),
        o = this.getComposerEditingState(e)
      o.fastApplyQueue[r] || (o.fastApplyQueue[r] = new II(1))
      const a = o.fastApplyQueue[r].queue(() =>
        this._fastApplyQueue.queue(() =>
          this.runFastApplyOnCodeBlockInternal(e, t, {
            ...s,
            cameFromGenerating: n === "generating" || s?.cameFromGenerating,
            isReapply: s?.isReapply,
          }),
        ),
      )
      return (
        (o.fastApplyRunningMap[r] = !0),
        o.fastApplyQueue[r].whenIdle().then(() => {
          ;(o.fastApplyRunningMap[r] = !1), delete o.fastApplyQueue[r]
        }),
        a
      )
    }
    async runFastApplyOnCodeBlockInternal(e, t, s) {
      s = { ...(s ?? {}) }
      let n = this._composerDataService.getComposerFromIdOrHandle(e)
      if (!n) {
        console.log("[composer] no state")
        return
      }
      let r = t.uri
      if (
        (r ||
          (n &&
            n.context.fileSelections.length === 1 &&
            (r = H.revive(n.context.fileSelections[0].uri))),
        !r)
      ) {
        console.log("[composer] no path found for codeblock")
        return
      }
      const o = !1
      !o &&
        !this._composerDataService.selectedComposerIds.includes(e) &&
        (s.isBackground = !0)
      let a = n.codeBlockData?.[r.toString()]?.find((m) => m.isCached)
      for (; a; )
        this._composerFileService.unregisterCachedCodeBlock(e, r, a.version),
          (a = n.codeBlockData?.[r.toString()]?.find((m) => m.isCached))
      const l = t.version,
        c = r.toString()
      let u = Mt()
      const d = !(await this._fileService.exists(r))
      let g = []
      if (d && s?.isBackground !== !0)
        g = await this._composerFileService.checkToCreateNewFile(e, r, !0)
      else if (d && s?.isBackground === !0) {
        this._composerDataService.setCodeBlockStatus(e, r, l, "completed")
        return
      }
      console.log("[composer] running fast apply on", c, l),
        this._composerDataService.setCodeBlockStatus(e, r, l, "applying")
      let p = !1
      try {
        if (!o) {
          const I = this._composerDataService.getLastBubbleWhere(
              e,
              (P) => !!P.checkpoint,
            ),
            L = I?.checkpoint
          if (I && s?.cameFromGenerating) {
            const P = L?.files.some(
              (R) => R.uri.toString() === t.uri.toString(),
            )
            let N = [" "]
            if (!P) {
              let R
              try {
                ;(R = await this._textModelService.createModelReference(t.uri)),
                  (N = R.object.textEditorModel.getLinesContent())
              } finally {
                R?.dispose()
              }
              const B = await this._composerUtilsService.computeLineDiffs(
                  e,
                  t.uri,
                  N,
                ),
                W = [
                  "conversation",
                  (G) => G.bubbleId === I.bubbleId,
                  "checkpoint",
                ]
              L === void 0 &&
                this._composerDataService.updateComposerDataSetStore(e, (G) =>
                  G(...W, Jit()),
                ),
                this._composerDataService.updateComposerDataSetStore(e, (G) =>
                  G(
                    ...W,
                    nce((te) => {
                      te &&
                        (te.files.push({
                          uri: t.uri,
                          originalModelDiffWrtV0: B,
                          isNewlyCreated: d,
                        }),
                        te.newlyCreatedFolders.push(...g))
                    }),
                  ),
                )
            }
          }
        }
        const m = t.content
        let v,
          y = new Promise((I) => {
            v = I
          }),
          w,
          C = !1
        const x =
            (this._composerDataService.getInlineDiff(e, r, l) !== void 0 &&
              !t.isChained) ||
            s?.isBackground === !0,
          k = async ({
            newModelLines: I,
            originalModelLines: L,
            isChained: P,
          }) => {
            if ((console.log("[composer] apply done"), !o)) {
              const [N, R] = await Promise.all([
                  this._composerUtilsService.computeLineDiffs(e, r, I),
                  this._composerUtilsService.computeLineDiffs(e, r, L),
                ]),
                B = [
                  { key: "isChained", value: P ?? !1 },
                  { key: "newModelDiffWrtV0", value: N ?? [] },
                  { key: "originalModelDiffWrtV0", value: R ?? [] },
                ]
              for (const W of B)
                this._composerDataService.updateComposerDataSetStore(e, (G) =>
                  G("codeBlockData", r.toString(), l, W.key, W.value),
                )
            }
            ;(C = !0), (p = !1), v()
          },
          E = () => {
            console.log("[composer] apply failed"), (C = !0), (p = !0), v()
          }
        if (o) {
          C = !0
          const I = this._composerDataService.getComposerFromIdOrHandle(e)
          if (!I) {
            console.log("[composer] no state")
            return
          }
          const L = s?.overrideUri ?? t.uri
          let P = !0
          if (s?.isBackground === !0) {
            this._aiApplyToFileActionsService.cacheCodeBlockApplyComposer({
              uri: L,
              codeblock: t.content,
              source: Db.CACHED_APPLY,
              parentRequestId:
                I?.latestChatGenerationUUID ?? I?.chatGenerationUUID,
              conversationHistory:
                this._composerUtilsService.processConversationForFastEdit(
                  e,
                  I.conversation,
                  t,
                ),
              onApplyDone: k,
              onApplyFailed: E,
            })
            return
          } else
            s?.range === void 0 &&
              s?.isReapply !== !0 &&
              (await this._aiApplyToFileActionsService.maybeApplyCachedEntry({
                uri: L,
                codeblockContent: t.content,
                menuString: _P,
                range: "fullfile",
                composerMetadata: { composerId: e, version: l },
              })) === "didApply" &&
              ((P = !1), (y = Promise.resolve()))
          P &&
            (await this._aiApplyToFileActionsService.applyComposerMaybeWithExistingStreamer(
              {
                uri: L,
                codeblock: t.content,
                source: Db.CLICKED_APPLY,
                parentRequestId:
                  I?.latestChatGenerationUUID ?? I?.chatGenerationUUID,
                conversationHistory:
                  this._composerUtilsService.processConversationForFastEdit(
                    e,
                    I.conversation,
                    t,
                  ),
                isReapply: s?.isReapply ?? !1,
                range: s?.range,
                onApplyDone: k,
                onApplyFailed: E,
                composerMetadata: { composerId: e, version: l },
              },
            ))
        } else {
          const I = this._composerUtilsService.isAgenticComposer(e)
            ? Db.COMPOSER_AGENT
            : Db.COMPOSER
          w = await this._fastEditService.performAndYieldChatEdit({
            skipAddToPromptHistory: !0,
            composerMetadata: { composerId: e, version: l },
            conversationHistory:
              this._composerUtilsService.processConversationForFastEdit(
                e,
                n.conversation,
                t,
              ),
            source: I,
            generationUUID: u,
            parentRequestId:
              n?.latestChatGenerationUUID ?? n?.chatGenerationUUID,
            clickedCodeBlockContents: m,
            options: {
              overrideCurrentFileURI: s?.overrideUri ?? r,
              overrideLineRange: s?.range,
              rejectChangesInURI: s?.isBackground === !0 ? !1 : void 0,
              rerun: () => {
                this._commandService.executeCommand(jYe, e, r, l)
              },
            },
            shouldChainPrevious: !x,
            linesDiffComputerOptions: bDs,
            inlineDiffServiceLookalikePure:
              this.getInlineDiffServiceLookalikePure(e, r, l),
            onApplyDone: k,
            onApplyFailed: E,
            isReapply: s?.isReapply,
            cleanUpOnFail: s?.isBackground !== !0,
            retryOnTimeout: s?.isBackground !== !0,
          })
        }
        if (
          (this._composerDataService.updateComposerCodeBlock(
            e,
            t.uri,
            t.version,
            { applyGenerationUUID: u, latestApplyGenerationUUID: u },
          ),
          w)
        )
          try {
            for await (const I of w);
          } catch (I) {
            console.error("[composer] error in apply stream", I)
          }
        await y,
          this._composerDataService.getCodeBlockStatus(e, r, l) !==
            "outdated" &&
            this._composerDataService.setCodeBlockStatus(e, r, l, "completed"),
          this._composerFileService.shouldCache(e, { uri: r, version: l }) ||
            this._composerEventService.fireDidAiEditFile({
              path: r,
              version: l,
            })
      } catch (m) {
        ;(p = !0),
          console.error("[composer] error in runFastApplyOnCodeBlock", m)
      } finally {
        p
          ? (this._composerDataService.setCodeBlockStatus(e, r, l, "cancelled"),
            (s.skipOnSettled = !0))
          : (this._configurationService.getValue(pce) ?? !0) &&
            !o &&
            !s?.isBackground &&
            this._composerFileService.saveFile(r, {
              force: !0,
              waitForEditorToOpen: !0,
            }),
          this._composerDataService.updateComposerDataSetStore(e, (y) =>
            y("codeBlockData", r.toString(), l, "intermediateModelLines", []),
          )
        const m = this._composerDataService.getInlineDiff(e, r, l),
          v = m && m.changes.length === 0
        v && this._inlineDiffService.remove(m.id),
          this._composerDataService.updateComposerCodeBlock(
            e,
            t.uri,
            t.version,
            { applyGenerationUUID: void 0, isNoOp: v },
          ),
          await this.runAfterApply(e, u),
          s?.cameFromGenerating &&
            !s?.skipOnSettled &&
            this._composerEventService.fireMaybeRunOnComposerSettled({
              composerId: e,
            }),
          console.log("[composer] fast apply done", e, c, l)
      }
    }
    getInlineDiffServiceLookalikePure(e, t, s) {
      return {
        addLinesToDiff: (n, r) => {
          this._composerDataService.updateComposerDataSetStore(e, (a) =>
            a(
              "codeBlockData",
              t.toString(),
              (l) => l.status === "applying",
              "intermediateModelLines",
              (l) => [...(l ?? []), ...r],
            ),
          )
          const o = this.getApplyingDiffsState(e)
          if (!this._composerFileService.shouldCache(e, { uri: t, version: s }))
            if (o.isReactivatingApplyingDiffs[t.toString()])
              o.applyingDiffsBacklogLines[t.toString()] ||
                (o.applyingDiffsBacklogLines[t.toString()] = []),
                o.applyingDiffsBacklogLines[t.toString()].push(...r)
            else {
              if (!this._composerDataService.getComposerFromIdOrHandle(e))
                throw new Error("[composer] composer not found")
              const l = this._composerDataService.getInlineDiff(e, t)
              if (l) {
                const c = o.applyingDiffsBacklogLines[t.toString()]
                return (
                  c &&
                    c.length > 0 &&
                    (console.log("[composer] backlog lines", c),
                    (r = [...c, ...r]),
                    (o.applyingDiffsBacklogLines[t.toString()] = [])),
                  this._inlineDiffService.addLinesToDiff(l.id, r)
                )
              } else console.error("[composer] no diff id for uri", t)
            }
        },
        addActiveDiff: async (n) => {
          const r = { stack: [], error: void 0, hasError: !1 }
          try {
            const o = __addDisposableResource(
              r,
              vc(
                "ComposerService.getInlineDiffServiceLookalikePure.addActiveDiff",
              ),
              !1,
            )
            this._composerDataService.updateComposerDataSetStore(e, (l) =>
              l(
                "codeBlockData",
                t.toString(),
                (c) => c.status === "applying",
                "intermediateModelLines",
                [],
              ),
            )
            const a = this.getApplyingDiffsState(e)
            if (
              ((a.applyingDiffsBacklogLines[t.toString()] = []),
              (a.isReactivatingApplyingDiffs[t.toString()] = !1),
              this._composerFileService.shouldCache(e, { uri: t, version: s }))
            ) {
              const l = Mt()
              return (
                this._composerFileService.registerCachedCodeBlock(e, t, s),
                { id: l }
              )
            } else {
              const l = await this._inlineDiffService.addActiveDiff(n)
              return (
                this._composerDataService.updateComposerCodeBlock(e, t, s, {
                  lastDiffId: l.id,
                }),
                l
              )
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = !0)
          } finally {
            __disposeResources(r)
          }
        },
        finishDiffSuccess: (n) => {
          const r = { stack: [], error: void 0, hasError: !1 }
          try {
            const o = __addDisposableResource(
              r,
              vc(
                "ComposerService.getInlineDiffServiceLookalikePure.finishDiffSuccess",
              ),
              !1,
            )
            if (
              !this._composerFileService.shouldCache(e, { uri: t, version: s })
            ) {
              if (!this._composerDataService.getComposerFromIdOrHandle(e))
                throw new Error("[composer] composer not found")
              const l = this._composerDataService.getInlineDiff(e, t)
              if (l) return this._inlineDiffService.finishDiffSuccess(l.id)
              console.error("[composer] no diff id for uri", t)
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = !0)
          } finally {
            __disposeResources(r)
          }
        },
        cancelDiff: (n) => {
          const r = { stack: [], error: void 0, hasError: !1 }
          try {
            const o = __addDisposableResource(
              r,
              vc(
                "ComposerService.getInlineDiffServiceLookalikePure.cancelDiff",
              ),
              !1,
            )
            if (
              !this._composerFileService.shouldCache(e, { uri: t, version: s })
            ) {
              if (!this._composerDataService.getComposerFromIdOrHandle(e))
                throw new Error("[composer] composer not found")
              const l = this._composerDataService.getInlineDiff(e, t)
              if (l) return this._inlineDiffService.cancelDiff(l.id)
              console.error("[composer] no diff id for uri", t)
            }
          } catch (o) {
            ;(r.error = o), (r.hasError = !0)
          } finally {
            __disposeResources(r)
          }
        },
      }
    }
    getComposerEditingState(e) {
      let t = this._composerEditingStates.get(e)
      return (
        t ||
          ((t = { fastApplyQueue: {}, fastApplyRunningMap: {} }),
          this._composerEditingStates.set(e, t)),
        t
      )
    }
    resetComposerEditingState(e) {
      this._composerEditingStates.delete(e)
    }
    getApplyingDiffsState(e) {
      let t = this._composerApplyingDiffsState.get(e)
      return (
        t ||
          ((t = {
            isReactivatingApplyingDiffs: {},
            applyingDiffsBacklogLines: {},
          }),
          this._composerApplyingDiffsState.set(e, t)),
        t
      )
    }
    resetComposerApplyingDiffsState(e) {
      this._composerApplyingDiffsState.delete(e)
    }
    async runAfterApply(e, t) {
      const s = this._composerDataService.getLastHumanBubbleId(e),
        n = s ? this._composerDataService.getComposerBubble(e, s) : void 0,
        r = this._composerDataService.getLastBubbleId(e),
        o = this._composerDataService.getLastBubble(e)
      if (!s || !n) {
        console.error(
          "[composer] after apply was run without a previous human bubble",
        )
        return
      }
      if (!r || !o || o.type !== bn.AI) {
        console.error(
          "[composer] after apply was run without a previous ai bubble",
        )
        return
      }
      await this._composerUtilsService.runCapabilitiesForProcess(
        e,
        "after-apply",
        { composerId: e, humanBubbleId: s, aiBubbleId: r },
      )
    }
    async applyCachedCodeBlocksOfLastMessage(e) {
      const t = this._composerDataService.getLastAiBubble(e)
      if (t)
        for (const s of t.codeBlocks ?? [])
          s.unregistered ||
            (await this.applyCachedCodeBlock(e, s.uri, s.version))
    }
    async applyCachedCodeBlock(e, t, s, n) {
      const r = n?.applyToCurrentFile
        ? this._editorService.activeEditor?.resource
        : t
      if (!r) return
      let o = this._composerDataService.getComposerCodeBlock(e, t, s)
      if (
        !(!o || !o.isNotApplied) &&
        (o.uri.toString() !== r.toString() &&
          (s = this._composerUtilsService.changeCodeBlockUri(e, t, r, s)),
        (o = this._composerDataService.getComposerCodeBlock(e, r, s)),
        !!o)
      )
        if (
          (this._composerFileService.unregisterCachedCodeBlock(e, r, s),
          this._composerDataService.updateComposerCodeBlock(e, r, s, {
            isNotApplied: !1,
          }),
          o.status === "applying")
        )
          await this.reactivateApplyingCodeBlock(e, o, { shouldChain: !0 })
        else {
          let a = !1
          const l = !!o.newModelDiffWrtV0,
            c =
              this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
                (d) => d.uri.toString() === r.toString(),
              )?.id,
            u = await this._composerUtilsService.getContentsOfFile(r),
            h = this._composerUtilsService.getCodeBlockOriginalModelLines(
              e,
              r,
              s,
            )
          u &&
            h &&
            u.join(`
`) !==
              h.join(`
`) &&
            (a = !0),
            l && !a
              ? c
                ? await this.turnApplyToInlineDiff(e, t, s, { shouldChain: !0 })
                : await this.turnApplyToInlineDiff(e, t, s)
              : this.runFastApplyOnCodeBlock(e, o, { range: n?.range })
        }
    }
    async turnApplyToInlineDiff(e, t, s, n) {
      const r = this._composerDataService.getComposerCodeBlock(e, t, s)
      if (!r) {
        console.error("[composer] no code block for uri", t)
        return
      }
      if (n?.shouldChain) {
        const v = new $0(
          "Undo Chain Diff",
          "undo-chain-diff",
          void 0,
          t,
          () => {},
          () => {},
        )
        this._inlineDiffService.pushUndoElement(v, { breakConsolidation: !0 })
        const y =
          this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
            (w) => w.uri.toString() === t.toString(),
          )
        if (!y) {
          console.error(
            "[composer] cannot chain apply without prev inline diff",
            t,
          )
          return
        }
        this._inlineDiffService.cancelDiff(y.id),
          this._inlineDiffService.rejectDiff(y.id, {
            close: !0,
            rejectSilently: !0,
            dontBreakConsolidation: !0,
          })
      } else {
        const v =
          this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
            (y) => y.uri.toString() === t.toString(),
          )
        v && this._inlineDiffService.remove(v.id)
      }
      console.log("[composer] turning cached to diff", t, r.status),
        (await this._fileService.exists(t)) ||
          (await this._composerFileService.checkToCreateNewFile(e, t, !0))
      let a, l, c
      try {
        c = await this._textModelService.createModelReference(t)
        const v = c.object
        if (n?.overwriteOriginalTextLines)
          (a = n.overwriteOriginalTextLines),
            (l = { startLineNumber: 1, endLineNumberExclusive: a.length + 1 }),
            n?.setOriginalModelLines &&
              v.textEditorModel.setValue(
                n.overwriteOriginalTextLines.join(`
`),
              )
        else {
          if (n?.setOriginalModelLines) {
            const w =
              await this._composerUtilsService.getCodeBlockOriginalModelLines(
                e,
                t,
                s,
                { shouldChain: !0 },
              )
            w &&
              v.textEditorModel.setValue(
                w.join(`
`),
              )
          }
          ;(l = {
            startLineNumber: 1,
            endLineNumberExclusive: v.textEditorModel.getLineCount() + 1,
          }),
            (a = v.textEditorModel
              .getLinesContent()
              .slice(l.startLineNumber - 1, l.endLineNumberExclusive - 1))
        }
      } finally {
        c?.dispose()
      }
      const u = Mt(),
        h = {
          uri: t,
          generationUUID: u,
          currentRange: l,
          originalTextLines: a,
          prompt: "hi2",
          isHidden: !1,
          attachedToPromptBar: !1,
          source: OP,
          createdAt: Date.now(),
          composerMetadata: {
            composerId: this._composerDataService.getComposerId(e),
            version: s,
          },
        },
        g = (await this._inlineDiffService.addActiveDiff(h)).id
      let p
      if (n?.overwriteNewTextLines) p = n.overwriteNewTextLines
      else {
        const v = this._composerUtilsService.getCodeBlockNewModelLines(e, t, s)
        if (!v) {
          console.error("[composer] no new model lines for", t, s)
          return
        }
        p = v
      }
      this._inlineDiffService.addLinesToDiff(g, p),
        this._inlineDiffService.finishDiffSuccess(g),
        this._composerDataService.updateComposerCodeBlock(e, t, s, {
          lastDiffId: g,
        }),
        this._composerDataService.setCodeBlockStatus(
          e,
          t,
          r.version,
          "completed",
        ),
        this._composerEventService.fireDidAiEditFile({
          path: t,
          version: r.version,
        }),
        (this._configurationService.getValue(pce) ?? !0) &&
          this._composerFileService.saveFile(t, {
            force: !0,
            waitForEditorToOpen: !0,
          })
    }
    async reactivateApplyingCodeBlock(e, t, s) {
      if (!t || t.status !== "applying") {
        console.error("[composer] no latest code block for", t)
        return
      }
      console.log(
        "[composer] reactivating applying code block",
        t.uri,
        t.status,
      )
      const n =
        this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
          (p) => p.uri.toString() === t.uri.toString(),
        )?.id
      if (n)
        if (s?.shouldChain) {
          const p = new $0(
            "Undo Chain Diff",
            "undo-chain-diff",
            void 0,
            t.uri,
            () => {},
            () => {},
          )
          this._inlineDiffService.pushUndoElement(p, {
            breakConsolidation: !0,
          }),
            this._inlineDiffService.cancelDiff(n),
            this._inlineDiffService.rejectDiff(n, {
              close: !0,
              rejectSilently: !0,
              dontBreakConsolidation: !0,
            })
        } else this._inlineDiffService.remove(n)
      this._composerFileService.unregisterCachedCodeBlock(e, t.uri, t.version)
      const r = t.uri
      ;(await this._fileService.exists(r)) ||
        (await this._composerFileService.checkToCreateNewFile(e, r, !0))
      let a, l, c, u
      try {
        a = await this._textModelService.createModelReference(r)
        const p = a.object
        u = p.textEditorModel.getValue()
        const m = p.textEditorModel.getLineCount()
        ;(l = new Ln(1, m + 1)),
          (c = p.textEditorModel
            .getLinesContent()
            .slice(l.startLineNumber - 1, l.endLineNumberExclusive - 1))
      } finally {
        a?.dispose()
      }
      const h = Mt(),
        d = {
          uri: r,
          generationUUID: h,
          currentRange: l,
          originalTextLines: c,
          prompt: "hi3",
          isHidden: !1,
          attachedToPromptBar: !1,
          source: OP,
          createdAt: Date.now(),
          composerMetadata: {
            composerId: typeof e == "string" ? e : e.data.composerId,
            version: t.version,
          },
        },
        g = this.getApplyingDiffsState(
          typeof e == "string" ? e : e.data.composerId,
        )
      g.isReactivatingApplyingDiffs[r.toString()] = !0
      try {
        const p = t.intermediateModelLines ?? []
        let m = []
        if (p.length > 0) {
          const w = await this._editorWorkerService.computeLinesDiff(c, p, {
            ignoreTrimWhitespace: !1,
            computeMoves: !1,
            maxComputationTimeMs: 500,
            ...bDs,
          })
          let C = w.changes
          w.hitTimeout && (C = [new Dw(l, new Ln(1, p.length + 1), void 0)])
          const S = C.map((x) => ({
            original: x.original,
            modified: p.slice(
              x.modified.startLineNumber - 1,
              x.modified.endLineNumberExclusive - 1,
            ),
          }))
          m = this._fastEditService.applyDiffToLines(
            u.split(`
`),
            S,
          )
        }
        if (
          !t.isNotApplied &&
          (this._composerFileService.shouldCache(e, {
            uri: r,
            version: t.version,
          }) ||
            g.isReactivatingApplyingDiffs[r.toString()] === !1)
        ) {
          ;(g.applyingDiffsBacklogLines[r.toString()] = []),
            (g.isReactivatingApplyingDiffs[r.toString()] = !1)
          return
        }
        const y = (await this._inlineDiffService.addActiveDiff(d)).id
        this._inlineDiffService.addLinesToDiff(y, m)
      } catch (p) {
        console.error("[composer] error in reactivateApplyingCodeBlock", p)
      } finally {
        g.isReactivatingApplyingDiffs[r.toString()] = !1
      }
    }
    async shouldAutoApplyURI(e, t) {
      return this._reactiveStorageService.nonPersistentStorage.inlineDiffs
        .filter((o) => o.uri.toString() === t.toString())
        .some(
          (o) =>
            o.composerMetadata?.composerId !== void 0 &&
            o.composerMetadata?.composerId !== e,
        ) || !this._composerDataService.getComposerFromIdOrHandle(e)
        ? !1
        : this._reactiveStorageService.applicationUserPersistentStorage
              .composerState.autoApplyFilesOutsideContext ||
            this._composerDataService
              .getAssociatedFileUris(e)
              .some((o) => o.toString() === t.toString())
          ? !0
          : !(await this._fileService.exists(t))
    }
    async *processCodeBlocks(e, t, s) {
      let n = null,
        r = !1,
        o = "",
        a,
        l,
        c = 0,
        u = 0,
        h = !1
      const d = async (m) => {
        const v = o.slice(0, m),
          y = n !== null,
          w = n?.uri === void 0,
          C = s?.aiBubbleId || this._composerDataService.getLastAiBubbleId(e)
        if (y)
          if (((n.content += v), w)) {
            if (
              (this._composerDataService.updateComposerDataSetStore(e, (S) =>
                S(
                  "conversation",
                  (x) => x.bubbleId === C,
                  "codeBlocks",
                  (x) => x.codeBlockIdx === c,
                  "content",
                  n.content,
                ),
              ),
              this._composerDataService.updateComposerDataSetStore(e, (S) =>
                S(
                  "conversation",
                  (x) => x.bubbleId === C,
                  "codeBlocks",
                  (x) => x.codeBlockIdx === c,
                  "isGenerating",
                  !1,
                ),
              ),
              n.isClickable && n.filePath)
            )
              try {
                const S = this._workspaceContextService.resolveRelativePath(
                  n.filePath,
                )
                if (S) {
                  const x =
                    await this._composerUtilsService.getContentsOfFile(S)
                  if (!x) return
                  const k = n.content?.trim()
                  if (k) {
                    const E = k.split(/\r?\n/).map((I) => I.trim())
                    if (E.length > 0) {
                      let I = -1,
                        L = -1,
                        P = 0
                      for (let N = 0; N < x.length; N++) {
                        let R = 0
                        for (let W = 0; W < E.length && N + W < x.length; W++) {
                          const G = x[N + W].trim(),
                            te = E[W]
                          ;(G.includes(te) || te.includes(G)) && R++
                        }
                        const B = R / E.length
                        R > P &&
                          B >= 0.4 &&
                          ((P = R), (I = N), (L = N + E.length - 1))
                      }
                      I >= 0 &&
                        L >= 0 &&
                        this._composerDataService.updateComposerDataSetStore(
                          e,
                          (N) =>
                            N(
                              "conversation",
                              (R) => R.bubbleId === C,
                              "codeBlocks",
                              (R) =>
                                R.codeBlockIdx === c && R.unregistered === !0,
                              (R) => ({
                                ...R,
                                clickableRange: {
                                  startLine: I + 1,
                                  endLine: L + 1,
                                },
                              }),
                            ),
                        )
                    }
                  }
                }
              } catch (S) {
                console.error(
                  "[composer] Error processing clickable codeblock:",
                  S,
                )
              }
          } else {
            this._composerDataService.updateComposerCodeBlock(
              e,
              n.uri,
              n.version,
              { content: n.content },
            )
            const S = this._composerDataService.getComposerCodeBlock(
              e,
              n.uri,
              n.version,
            )
            ;(n.isNotApplied && S?.status !== "generating") ||
              this.runFastApplyOnCodeBlock(
                e,
                {
                  uri: n.uri,
                  version: n.version,
                  content: n.content,
                  status: "generating",
                },
                {
                  isBackground: n.isNotApplied,
                  skipOnSettled: s?.skipOnSettled,
                },
              )
          }
        c++, (n = null)
      }
      for await (const m of t) {
        const v =
            s?.aiBubbleId || this._composerDataService.getLastAiBubbleId(e),
          y =
            s?.humanBubbleId ||
            this._composerDataService.getLastHumanBubbleId(e)
        if (!v || !y) throw new Error("[composer] No ai or human bubble id")
        const { text: w } = m
        if (w === void 0) {
          s?.passTimingInfo && m.timingInfo !== void 0 && (yield m)
          continue
        }
        for (
          w.trim() === "<think>" && (h = !0),
            w.trim() === "</think>" && (h = !1),
            o += w;
          o.length > 0;

        )
          if (r) {
            const C = n !== null,
              S = n?.uri === void 0
            if (YYe) {
              const P = new RegExp(
                `^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}\\S+`,
              ).exec(o)
              if (P) {
                u++,
                  C &&
                    ((n.content += o.slice(0, P.index + P[0].length)),
                    S
                      ? this._composerDataService.updateComposerDataSetStore(
                          e,
                          (N) =>
                            N(
                              "conversation",
                              (R) => R.bubbleId === v,
                              "codeBlocks",
                              (R) =>
                                R.codeBlockIdx === c && R.unregistered === !0,
                              "content",
                              n.content,
                            ),
                        )
                      : this._composerDataService.updateComposerCodeBlock(
                          e,
                          n.uri,
                          n.version,
                          { content: n.content },
                        )),
                  (o = o.slice(P.index + P[0].length))
                continue
              }
            }
            const x = new RegExp(
                `^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}\\s*(?:\\r?\\n)`,
              ),
              k = /^(?:\r?\n)[\t ]*`*\s*/,
              E = new RegExp(`^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}`),
              I = x.exec(o)
            if (I) {
              if (YYe && u > 0) {
                u--,
                  C &&
                    ((n.content += o.slice(0, I.index + I[0].length)),
                    S
                      ? this._composerDataService.updateComposerDataSetStore(
                          e,
                          (L) =>
                            L(
                              "conversation",
                              (P) => P.bubbleId === v,
                              "codeBlocks",
                              (P) =>
                                P.codeBlockIdx === c && P.unregistered === !0,
                              "content",
                              n.content,
                            ),
                        )
                      : this._composerDataService.updateComposerCodeBlock(
                          e,
                          n.uri,
                          n.version,
                          { content: n.content },
                        )),
                  (o = o.slice(I.index + I[0].length))
                continue
              }
              ;(r = !1),
                n && (await d(I.index)),
                (o = o.slice(I.index + I[0].length)),
                (a = void 0),
                (l = void 0)
            } else {
              const L = k.exec(o),
                P = E.exec(o)
              if ((L && L[0].length === o.length) || P) break
              {
                const N = o.charAt(0)
                C &&
                  ((n.content += N),
                  S
                    ? this._composerDataService.updateComposerDataSetStore(
                        e,
                        (R) =>
                          R(
                            "conversation",
                            (B) => B.bubbleId === v,
                            "codeBlocks",
                            (B) =>
                              B.codeBlockIdx === c && B.unregistered === !0,
                            "content",
                            n.content,
                          ),
                      )
                    : this._composerDataService.updateComposerCodeBlock(
                        e,
                        n.uri,
                        n.version,
                        { content: n.content },
                      )),
                  (o = o.slice(N.length))
              }
            }
          } else {
            const C = /^(\n|\n\n)?[\t ]*```+([^\n]*)\n/,
              S = /^(\n|\n\n)?[\t ]*```+[^\n]*$/,
              x = C.exec(o)
            if (x) {
              r = !0
              const k = x[0],
                E = x[2]
              ;(a = /^(\n|\n\n)?(```+)/.exec(k)?.[2]?.length ?? 3),
                (l = /^(\n|\n\n)?([\t ]*)```+/m.exec(k)?.[2]?.length ?? 0)
              let P = "",
                N = null,
                R,
                B = !1
              if (E.includes(":")) {
                const W = E.split(":")
                if (W.length === 3) {
                  const G = W[2].trim()
                  G.includes(".") && (P = G.split(".").pop()?.trim() ?? "")
                } else if (
                  W.length === 2 &&
                  ((P = W[0].trim()), (N = W[1].trim()), N.includes("!"))
                ) {
                  const [G, te] = N.split("!")
                  ;(N = G), te === "citation" ? (B = !0) : (R = te)
                }
              } else if (E?.includes(".")) {
                if (
                  ((P = E.split(".").pop()?.trim() ?? ""),
                  (N = E),
                  N.includes("!"))
                ) {
                  const [W, G] = N.split("!")
                  ;(N = W), G === "citation" ? (B = !0) : (R = G)
                }
              } else if (((P = E?.trim() ?? ""), P.includes("!"))) {
                const [W, G] = P.split("!")
                ;(P = W), G === "citation" ? (B = !0) : (R = G)
              }
              if (
                ((o = o.slice(x[0].length)),
                (n = {
                  language: P,
                  filePath: N,
                  content: "",
                  autoApplyType: R,
                  isClickable: B,
                }),
                N && !B)
              ) {
                const W = this._workspaceContextService.resolveRelativePath(N),
                  G = await this.shouldAutoApplyURI(e, W),
                  { languageId: te } =
                    this._languageService.createByLanguageNameOrFilepathOrFirstLine(
                      P ?? "",
                      null,
                      void 0,
                    )
                let re = s?.forceIsNotApplied
                G || (re = !0), h && (re = !0)
                const Z = this._composerUtilsService.registerNewCodeBlock(
                  e,
                  W,
                  n.content,
                  c,
                  {
                    languageId: te,
                    status: "generating",
                    isNotApplied: re,
                    bubbleId: v,
                  },
                )
                this.warmFastApply(e, {
                  uri: Z.uri,
                  version: Z.version,
                  content: n.content,
                  status: "generating",
                }),
                  (n.uri = Z.uri),
                  (n.version = Z.version),
                  (n.isNotApplied = Z.isNotApplied)
              } else {
                const W = this._composerDataService.getComposerData(e)
                if (!W) throw new Error("[composer] Composer not found")
                const G = W.conversation.findIndex((re) => re.bubbleId === v)
                if (G === -1) throw new Error("[composer] Message not found")
                const { languageId: te } =
                  this._languageService.createByLanguageNameOrFilepathOrFirstLine(
                    P ?? "",
                    null,
                    void 0,
                  )
                this._composerUtilsService.addNewCodeBlockToBubble(e, c, G, {
                  unregistered: !0,
                  content: n.content,
                  languageId: te,
                  isGenerating: !0,
                  isClickable: B,
                  filePath: N ?? void 0,
                })
              }
            } else {
              if (S.exec(o)) break
              {
                const E = o.indexOf(`
`)
                if (E !== -1) o = o.slice(E + 1)
                else break
              }
            }
          }
        yield m
      }
      const g = s?.aiBubbleId || this._composerDataService.getLastAiBubbleId(e),
        p =
          s?.humanBubbleId || this._composerDataService.getLastHumanBubbleId(e)
      if (!g || !p) throw new Error("[composer] No ai or human bubble id")
      if (r) {
        const m = n !== null,
          v = n?.uri === void 0,
          w = new RegExp(`^(?:\\r?\\n)([\\t ]{${l}})\`{${a}}$`).exec(o)
        w
          ? ((r = !1),
            m && (await d(w.index)),
            (o = o.slice(w.index + w[0].length)),
            (a = void 0),
            (l = void 0))
          : m &&
            (v
              ? this._composerDataService.updateComposerDataSetStore(e, (C) =>
                  C(
                    "conversation",
                    (S) => S.bubbleId === g,
                    "codeBlocks",
                    (S) => S.codeBlockIdx === c && S.unregistered === !0,
                    "content",
                    n.content,
                  ),
                )
              : (this._composerDataService.updateComposerCodeBlock(
                  e,
                  n.uri,
                  n.version,
                  { content: n.content },
                ),
                this._composerDataService.setCodeBlockStatus(
                  e,
                  n.uri,
                  n.version,
                  "aborted",
                )))
      }
    }
    async registerAndApplyUnregisteredCodeBlock(e, t, s, n) {
      const r = this._composerDataService.getComposerBubble(e, t)
      if (!r) throw new Error("[composer] AI bubble not found")
      const o = r.codeBlocks?.find((l) => l.codeBlockIdx === s)
      if (!o) throw new Error("[composer] Message code block not found")
      if (o.unregistered !== !0)
        throw new Error("[composer] Message code block is not unregistered")
      const a = this._composerUtilsService.registerNewCodeBlock(
        e,
        n,
        o.content,
        s,
        { languageId: o.languageId, status: "none", bubbleId: r.bubbleId },
      )
      this.runFastApplyOnCodeBlock(e, a)
    }
  }

  return {
    j4,
    T2,
  }
}
