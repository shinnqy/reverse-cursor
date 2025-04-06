// @ts-check

export function createFastEditService(params) {
  const { Re, rt, LRUCache, fu, vze, zr, extUri, F$, wn, fs, JC, Va, nm, cb, LKn, Es, Qb, aG, x1t, Kf, J, SYe, _Ui, EFt, PKn, V$i, Pn, pm, VC, AVe, s7, l$i, c$i, h$i, __decorate, __param, A_, Br, rU, ft, g2, ei, nl, Xt, oy, ve, st, cv, it, Ac, Z, _C, Na, Ve } = params;

  var x5 = Re("fastEditService"),
    OP = "speculative-full-file",
    IFt = class {
      constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y) {
        ;(this.b = e),
          (this.c = t),
          (this.f = s),
          (this.g = n),
          (this.h = r),
          (this.j = o),
          (this.k = a),
          (this.l = l),
          (this.m = c),
          (this.n = h),
          (this.o = u),
          (this.q = d),
          (this.t = g),
          (this.u = p),
          (this.v = b),
          (this.w = y),
          (this.x = new LRUCache(10)),
          (this.a = m.createInstance(fu, { service: vze }))
      }
      async performChatEditFinetunedModel(e) {
        const t = rt()
        this.j.setNonPersistentStorage(
          "nonPersistentChatMetadata",
          ({ bubbleId: b, tabId: y }) =>
            b === e.generationMetadata.bubbleId &&
            y === e.generationMetadata.tabId,
          "editUuid",
          t,
        )
        const [s, n] = this.c.registerNewGeneration({
          metadata: { ...e.generationMetadata, type: "apply" },
          generationUUID: e.generationUUID,
        })
        this.f.setIntentDetermined(
          e.generationMetadata.bubbleId,
          e.generationMetadata.tabId,
        )
        const r = new zr({ modelName: e.privateFtModel.modelName })
        this.g.publicLogCapture("Submitted /edit")
        const o = this.c.getLastActiveFileEditor()?.input?.resource
        if (o === void 0) throw new Error("Failed to get last active file editor")
        const a = this.j.nonPersistentStorage.inlineDiffs
          .filter((b) => extUri.isEqual(b.uri, o))
          .map((b) => b.id)
        for (const b of a)
          this.m.cancelDiff(b), this.m.rejectDiff(b, { close: !0 })
        let l = `
  `,
          c
        try {
          ;(c = await this.l.createModelReference(o)),
            (l = c.object.textEditorModel.getEOL())
        } catch (b) {
          console.warn("modelReference couldnt be created", b)
        } finally {
          c?.dispose()
        }
        const h = {
            currentFile: await this.c.getCurrentFileInfo(o, {
              includeNotebookCells: !0,
            }),
            conversation: e.conversationHistory,
            modelDetails: r,
            explicitContext: await this.c.getExplicitContext(),
            summary: e.generationMetadata.summaryText,
            summaryUpUntilIndex: e.generationMetadata.summaryUpUntilIndex,
            isCmdI: !1,
            files: [],
            useFastApply: !1,
            fastApplyModelType: F$.DEFAULT,
          },
          d = (await this.c.aiClient()).slashEdit(h, {
            signal: n.signal,
            headers: wn(e.generationUUID),
          })
        let g = ""
        for (const [b, y] of [...e.conversationHistory.entries()].reverse())
          if (y.type === fs.HUMAN && y.text !== "") {
            g = e.conversationHistory[b].text
            break
          }
        this.c.addToPromptHistory({ prompt: g, commandType: JC.CHAT })
        const p = this.handleSlashEditResponseSingleDiff({
            streamer: d,
            eol: l,
            editUuid: t,
            generationMetadata: e.generationMetadata,
            generationUUID: e.generationUUID,
            request: h,
            abortController: n,
            uri: o,
          }),
          m = Va.typeName + "/" + Va.methods.slashEdit.name
        return this.c.streamResponse({
          modelDetails: r,
          generationUUID: e.generationUUID,
          source: "chat",
          streamer: p,
          streamerURL: m,
          rethrowCancellation: !0,
          rerun: e.options?.rerun,
          failSilently: e.options?.failSilently,
        })
      }
      async warmFastApply(e) {
        const t = e.uri ?? this.c.getLastActiveFileEditor()?.input?.resource
        if (t === void 0) throw new Error("Failed to get last active file editor")
        const s = {
          conversation: e.conversationHistory,
          currentFile: await this.c.getCurrentFileInfo(t, {
            actuallyReadFromOverrideURI: !0,
            includeNotebookCells: !0,
          }),
          explicitContext: await this.c.getExplicitContext(),
          source: e.source,
          willingToPayExtraForSpeed: !0,
        }
        await (await this.a.get()).warmApply(s, { headers: wn(e.generationUUID) })
      }
      async performChatEdit(e) {
        const t = await this.performAndYieldChatEdit(e)
        if (t !== void 0) for await (const s of t);
      }
      async performAndYieldChatEdit(e) {
        const t = rt()
        e.generationMetadata &&
          this.j.setNonPersistentStorage(
            "nonPersistentChatMetadata",
            ({ bubbleId: H, tabId: B }) =>
              H === e.generationMetadata.bubbleId &&
              B === e.generationMetadata.tabId,
            "editUuid",
            t,
          )
        const s =
            e.options?.overrideCurrentFileURI ??
            this.c.getLastActiveFileEditor()?.input?.resource,
          [n, r] = this.c.registerNewGeneration({
            metadata: e.generationMetadata
              ? { ...e.generationMetadata, type: "apply" }
              : {
                  type: "apply",
                  textDescription: s && this.t.asRelativePath(s).split("/").pop(),
                },
            generationUUID: e.generationUUID,
          })
        e.generationMetadata &&
          this.f.setIntentDetermined(
            e.generationMetadata.bubbleId,
            e.generationMetadata.tabId,
          )
        const o =
          e.options?.overrideModelDetails ||
          this.c.getModelDetails({ specificModelField: "regular-chat" })
        if ((this.g.publicLogCapture("Submitted /edit"), s === void 0))
          throw new Error("Failed to get last active file editor")
        const a = () =>
            this.j.nonPersistentStorage.inlineDiffs
              .filter((H) => extUri.isEqual(H.uri, s))
              .map((H) => H.id),
          l = (H) => {
            const B = a()
            for (const z of B)
              this.m.cancelDiff(z),
                this.m.rejectDiff(z, {
                  close: !0,
                  rejectSilently: !0,
                  dontBreakConsolidation: H?.dontBreakConsolidation,
                }),
                e.onPreviousDiffReject?.(z)
          },
          c = a().length > 0,
          h = e.shouldChainPrevious && c && !e.options?.rejectChangesInURI
        let u = ""
        if (!h) {
          e.options?.rejectChangesInURI !== !1 && l()
          const H = await this.l.createModelReference(s)
          ;(u = H.object.textEditorModel.getValue()), H.dispose()
        }
        let d = `
  `,
          g
        try {
          ;(g = await this.l.createModelReference(s)),
            (d = g.object.textEditorModel.getEOL())
        } catch (H) {
          console.warn("modelReference couldnt be created", H)
        } finally {
          g?.dispose()
        }
        console.log(
          "using fast apply model type",
          this.j.applicationUserPersistentStorage.fastApplyModelType,
        )
        const p = e.isBackgroundApply !== !0,
          m = {
            currentFile: await this.c.getCurrentFileInfo(s, {
              actuallyReadFromOverrideURI: !0,
              includeNotebookCells: !0,
            }),
            conversation: e.conversationHistory,
            modelDetails: o,
            parentRequestId: e.parentRequestId,
            source: e.source,
            explicitContext: await this.c.getExplicitContext(),
            summary: e.generationMetadata?.summaryText ?? "",
            summaryUpUntilIndex: e.generationMetadata?.summaryUpUntilIndex ?? 0,
            isCmdI: !1,
            shouldUseTurboDebugPrompt: !0,
            editSelection: e.options?.overrideLineRange
              ? {
                  startLineNumber: e.options?.overrideLineRange.startLineNumber,
                  endLineNumberInclusive:
                    e.options?.overrideLineRange.endLineNumberExclusive - 1,
                }
              : void 0,
            files: [],
            clickedCodeBlockContents: e.clickedCodeBlockContents,
            specificInstructions: e.specificInstructions,
            isAnOptimisticRequestForCachingAndLinting:
              e.inlineDiffServiceLookalike !== void 0 ||
              e.source === nm.CACHED_APPLY,
            useFastApply: !1,
            fastApplyModelType: F$.DEFAULT,
            useChunkSpeculationForLongFiles: p,
            isReapply: e.isReapply,
            willingToPayExtraForSpeed: e.willingToPayExtraForSpeed,
          }
        let b = "",
          y = "",
          w
        if (h) {
          ;(w = new cb(
            "Undo Chain Diff",
            "undo-chain-diff",
            void 0,
            s,
            () => {},
            () => {},
          )),
            this.m.pushUndoElement(w, { breakConsolidation: !0 })
          const H = await this.l.createModelReference(s),
            B = H.object.textEditorModel,
            z = B.getValue()
          l({ dontBreakConsolidation: !0 }), (b = B.getValue()), (y = z)
          const K = B.getLineCount(),
            Q = {
              startLineNumber: 1,
              endLineNumber: K,
              startColumn: 1,
              endColumn: B.getLineMaxColumn(K),
            },
            se = B.applyEdits([{ range: Q, text: z }], !0)
          w.push(
            new cb(
              "Undo Chain Diff",
              "undo-chain-diff",
              void 0,
              s,
              () => {
                B.applyEdits(se, !1)
              },
              () => {
                B.applyEdits([{ range: Q, text: z }], !1)
              },
            ),
          ),
            H.dispose()
        }
        let C
        if (e.existingStreamer !== void 0) C = e.existingStreamer
        else {
          const B = (await this.c.aiClient()).slashEdit(m, {
            signal: r.signal,
            headers: wn(e.generationUUID),
          })
          if (e.onStreamerCreated) {
            const z = LKn(B)
            ;(C = z()), e.onStreamerCreated(z())
          } else C = B
        }
        let S = ""
        for (const [H, B] of [...e.conversationHistory.entries()].reverse())
          if (B.type === fs.HUMAN && B.text !== "") {
            S = e.conversationHistory[H].text
            break
          }
        e.skipAddToPromptHistory ||
          this.c.addToPromptHistory({ prompt: S, commandType: JC.CHAT })
        let x
        if (e.shouldComputeOriginalLineTokens) {
          const H = await this.l.createModelReference(s),
            B = H.object.textEditorModel,
            K = {
              startLineNumber: 1,
              endLineNumberExclusive: B.getLineCount() + 1,
            }
          x = []
          for (let Q = K.startLineNumber; Q < K.endLineNumberExclusive; Q++)
            x.push(B.tokenization.getLineTokens(Q).extractObject())
          H.dispose()
        }
        const k = async (H) => {
            const B = this.applyDiffToLines(u.split(d), H)
            e.onApplyDone?.({ newModelLines: B, originalModelLines: u.split(d) })
          },
          E = async (H) => {
            let B
            try {
              B = await this.l.createModelReference(s)
              const z = B.object.textEditorModel,
                K = z.getValue()
              l({ dontBreakConsolidation: !0 })
              const Q = z.getLinesContent(),
                se = z.getLineCount(),
                he = {
                  startLineNumber: 1,
                  endLineNumber: se,
                  startColumn: 1,
                  endColumn: z.getLineMaxColumn(se),
                },
                ae = z.applyEdits([{ range: he, text: b }], !0)
              w.push(
                new cb(
                  "Undo Chain Diff",
                  "undo-chain-diff",
                  void 0,
                  s,
                  () => {
                    z.applyEdits(ae, !1)
                  },
                  () => {
                    z.applyEdits([{ range: he, text: b }], !1)
                  },
                ),
              )
              const Ee = {
                  startLineNumber: 1,
                  endLineNumberExclusive: z.getLineCount() + 1,
                },
                ke = z
                  .getLinesContent()
                  .slice(Ee.startLineNumber - 1, Ee.endLineNumberExclusive - 1),
                Ae = []
              for (
                let at = Ee.startLineNumber;
                at < Ee.endLineNumberExclusive;
                at++
              )
                Ae.push(z.tokenization.getLineTokens(at).extractObject())
              const Pe = {
                  uri: s,
                  generationUUID: e.generationUUID,
                  currentRange: Ee,
                  originalTextLines: ke,
                  prompt: "hi",
                  isHidden: !1,
                  attachedToPromptBar: !1,
                  source: OP,
                  createdAt: Date.now(),
                  composerMetadata: e.composerMetadata,
                },
                ze = (
                  await (
                    e.inlineDiffServiceLookalikePure ?? this.m
                  ).addActiveDiff(Pe)
                ).id
              ;(e.inlineDiffServiceLookalikePure ?? this.m).addLinesToDiff(
                ze,
                K.split(d),
              ),
                (e.inlineDiffServiceLookalikePure ?? this.m).finishDiffSuccess(
                  ze,
                ),
                e.onCreateInlineDiff?.(s, ze),
                e.onApplyDone?.({
                  newModelLines: K.split(d),
                  originalModelLines: Q,
                  isChained: !0,
                })
            } finally {
              B?.dispose()
            }
          },
          D = async (H) => {
            e.onApplyFailed?.(), !H && e.cleanUpOnFail && l()
          },
          P = async (H) => {
            let B
            try {
              B = await this.l.createModelReference(s)
              const z = B.object.textEditorModel
              let K = ""
              H && (K = z.getValue()),
                l({ dontBreakConsolidation: !0 }),
                !H && e.cleanUpOnFail && (K = z.getValue())
              const Q = z.getLineCount(),
                se = {
                  startLineNumber: 1,
                  endLineNumber: Q,
                  startColumn: 1,
                  endColumn: z.getLineMaxColumn(Q),
                },
                he = z.applyEdits([{ range: se, text: b }], !0)
              w.push(
                new cb(
                  "Undo Chain Diff",
                  "undo-chain-diff",
                  void 0,
                  s,
                  () => {
                    z.applyEdits(he, !1)
                  },
                  () => {
                    z.applyEdits([{ range: se, text: b }], !1)
                  },
                ),
              )
              const de = {
                  startLineNumber: 1,
                  endLineNumberExclusive: z.getLineCount() + 1,
                },
                Ee = z
                  .getLinesContent()
                  .slice(de.startLineNumber - 1, de.endLineNumberExclusive - 1),
                ke = rt(),
                Ae = {
                  uri: s,
                  generationUUID: ke,
                  currentRange: de,
                  originalTextLines: Ee,
                  prompt: "hi",
                  isHidden: !1,
                  attachedToPromptBar: !1,
                  source: OP,
                  createdAt: Date.now(),
                  composerMetadata: e.composerMetadata,
                },
                Pe = (
                  await (
                    e.inlineDiffServiceLookalikePure ?? this.m
                  ).addActiveDiff(Ae)
                ).id
              ;(e.inlineDiffServiceLookalikePure ?? this.m).addLinesToDiff(
                Pe,
                K.split(d),
              ),
                (e.inlineDiffServiceLookalikePure ?? this.m).finishDiffSuccess(
                  Pe,
                ),
                e.onCreateInlineDiff?.(s, Pe),
                e.onApplyFailed?.()
            } finally {
              B?.dispose()
            }
          },
          L = {
            streamer: C,
            eol: d,
            editUuid: t,
            generationMetadata: e.generationMetadata,
            generationUUID: e.generationUUID,
            request: m,
            abortController: r,
            uri: s,
            lineRange: e.options?.overrideLineRange,
            source: e.options?.overrideSource,
            inlineDiffServiceLookalike: e.inlineDiffServiceLookalike,
            composerMetadata: e.composerMetadata,
            onCreateInlineDiff: h ? void 0 : e.onCreateInlineDiff,
            linesDiffComputerOptions: e.linesDiffComputerOptions,
            originalLineTokens: x,
            onFailed: h ? P : D,
            onFinish: h ? E : k,
          }
        let A
        e.inlineDiffServiceLookalikePure === void 0
          ? (A = this.handleSlashEditResponseSingleDiff(L))
          : (A = this.handleSlashEditResponseSingleDiffPure({
              ...L,
              inlineDiffServiceLookalike: e.inlineDiffServiceLookalikePure,
            }))
        const F = Va.typeName + "/" + Va.methods.slashEdit.name
        return this.c.streamResponse({
          modelDetails: o,
          generationUUID: e.generationUUID,
          source: "other",
          streamer: A,
          streamerURL: F,
          rethrowCancellation: !0,
          rerun: e.options?.rerun,
          failSilently: e.options?.failSilently,
        })
      }
      rejectSlashEdit(e) {
        const t = this.x.get(e)
        t !== void 0 && this.m.rejectDiff(t.diffId)
      }
      getDiffId(e) {
        const t = this.x.get(e)
        if (t !== void 0) return t.diffId
      }
      acceptSlashEdit(e) {
        const t = this.x.get(e)
        t !== void 0 && this.m.acceptDiff(t.diffId)
      }
      async *handleSlashEditResponseSingleDiffPure({
        eol: e,
        editUuid: t,
        generationMetadata: s,
        composerMetadata: n,
        streamer: r,
        request: o,
        generationUUID: a,
        abortController: l,
        uri: c,
        lineRange: h,
        source: u,
        inlineDiffServiceLookalike: d,
        onCreateInlineDiff: g,
        linesDiffComputerOptions: p,
        onFinish: m,
        onFailed: b,
        originalLineTokens: y,
      }) {
        let w = !1,
          C = !1,
          S
        yield "Performing edit..."
        const x =
            h ?? new Es(1, (o.currentFile?.contents.split(e).length ?? 1) + 1),
          k = o.currentFile?.contents
            .split(e)
            .slice(x.startLineNumber - 1, x.endLineNumberExclusive - 1),
          E = []
        let D = 1
        const P = []
        let L = Date.now()
        const A = () => {
            S !== void 0 && d.addLinesToDiff(S, P),
              (P.length = 0),
              (L = Date.now())
          },
          F = () => {
            Date.now() - L < 250 || A()
          }
        try {
          if (k === void 0) throw new Error("Failed to get current file info")
          const H = {
            uri: c,
            generationUUID: a,
            currentRange: x,
            originalTextLines: k,
            prompt: "hi4",
            isHidden: !1,
            attachedToPromptBar: !1,
            source: u ?? OP,
            createdAt: Date.now(),
            composerMetadata: n,
            originalLineTokens: y,
          }
          ;(S = (await d.addActiveDiff(H)).id),
            S !== void 0 && (this.x.set(t, { diffId: S }), g && g(c, S))
          let B = ""
          for await (const z of r) {
            if (
              this.j.nonPersistentStorage.composerState.shouldSimulateApplyHanging
            ) {
              await new Promise((Q) => setTimeout(Q, 1e5))
              continue
            }
            if (
              this.j.nonPersistentStorage.composerState.shouldSimulateApplyError
            )
              throw (
                (this.j.setNonPersistentStorage(
                  "composerState",
                  "shouldSimulateApplyError",
                  !1,
                ),
                new Error("Simulated apply error"))
              )
            yield ""
            const K = z.cmdKResponse?.response
            if (
              !(
                K?.case !== "editEnd" &&
                K?.case !== "editStart" &&
                K?.case !== "editStream"
              )
            )
              switch (K.case) {
                case "editStart": {
                  for (; D < K.value.startLineNumber; D++) {
                    const Q = D - x.startLineNumber + 1
                    Q <= k.length && (P.push(k[Q - 1]), F(), E.push(k[Q - 1]))
                  }
                  break
                }
                case "editStream": {
                  for (
                    B += K.value.text;
                    B.includes(`
  `);

                  ) {
                    const Q = B.slice(
                      0,
                      B.indexOf(`
  `),
                    )
                    P.push(Q),
                      F(),
                      E.push(Q),
                      (B = B.slice(
                        B.indexOf(`
  `) + 1,
                      ))
                  }
                  break
                }
                case "editEnd": {
                  B.length > 0 && (P.push(B), F(), E.push(B)),
                    (B = ""),
                    (D = K.value.endLineNumberExclusive)
                  break
                }
              }
          }
          for (; D <= k.length; D++) P.push(k[D - 1]), F(), E.push(k[D - 1])
          A(), (w = !0), S !== void 0 && d.finishDiffSuccess(S)
        } catch (H) {
          H.message === "[canceled] This operation was aborted" && (C = !0),
            console.error(
              "[composer] error in handleSlashEditResponseSingleDiffPure",
              H,
            )
        } finally {
          if (w) {
            if ((yield " done!", k !== void 0)) {
              const H = await this.k.computeLinesDiff(k, E, {
                ignoreTrimWhitespace: !1,
                computeMoves: !1,
                maxComputationTimeMs: 500,
                ...p,
              })
              let B = H.changes
              H.hitTimeout && (B = [new Qb(x, new Es(1, E.length + 1), void 0)])
              const z = B.map((Q) => ({
                original: Q.original,
                modified: E.slice(
                  Q.modified.startLineNumber - 1,
                  Q.modified.endLineNumberExclusive - 1,
                ),
              }))
              m?.(z),
                s &&
                  this.q.setChatData(
                    "tabs",
                    (Q, se) => Q.tabId === s.tabId,
                    "bubbles",
                    (Q) => Q.id === s.aiBubbleId && Q.type === "ai",
                    "suggestedDiffs",
                    [
                      new aG({
                        relativeWorkspacePath:
                          o.currentFile?.relativeWorkspacePath ?? "",
                        chunks: B.map((Q) => {
                          let se = new x1t()
                          return (
                            (se.oldLines = k.slice(
                              Q.original.startLineNumber - 1,
                              Q.original.endLineNumberExclusive - 1,
                            )),
                            (se.newLines = E.slice(
                              Q.modified.startLineNumber - 1,
                              Q.modified.endLineNumberExclusive - 1,
                            )),
                            (se.oldRange = new Kf({
                              startLineNumber: Q.original.startLineNumber,
                              endLineNumberInclusive:
                                Q.original.endLineNumberExclusive - 1,
                            })),
                            (se.newRange = new Kf({
                              startLineNumber: Q.modified.startLineNumber,
                              endLineNumberInclusive:
                                Q.modified.endLineNumberExclusive - 1,
                            })),
                            se
                          )
                        }),
                      }).toJson(),
                    ],
                  )
            }
          } else yield " failed.", b?.(C)
          l.abort(),
            w || (S !== void 0 && (A(), d.cancelDiff(S))),
            (S === void 0 ||
              this.j.nonPersistentStorage.inlineDiffs.find((H) => H.id === S) ===
                void 0) &&
              s &&
              this.j.setNonPersistentStorage(
                "nonPersistentChatMetadata",
                ({ bubbleId: H, tabId: B }) => H === s.bubbleId && B === s.tabId,
                "editUuid",
                void 0,
              )
        }
      }
      async *handleSlashEditResponseSingleDiff({
        eol: e,
        editUuid: t,
        generationMetadata: s,
        composerMetadata: n,
        streamer: r,
        request: o,
        generationUUID: a,
        abortController: l,
        uri: c,
        lineRange: h,
        source: u,
        inlineDiffServiceLookalike: d,
        onCreateInlineDiff: g,
        linesDiffComputerOptions: p,
        onFinish: m,
        onFailed: b,
      }) {
        let y = !1,
          w = !1,
          C
        yield "Performing edit..."
        const S =
            h ?? new Es(1, (o.currentFile?.contents.split(e).length ?? 1) + 1),
          x = o.currentFile?.contents
            .split(e)
            .slice(S.startLineNumber - 1, S.endLineNumberExclusive - 1)
        d && o.currentFile && d.usedCurrentFileInfo(o.currentFile)
        const k = []
        let E = 1
        const D = []
        let P = Date.now()
        const L = () => {
            C !== void 0 && this.m.addLinesToDiff(C, D),
              (D.length = 0),
              (P = Date.now())
          },
          A = () => {
            Date.now() - P < 250 || L()
          }
        try {
          if (x === void 0) throw new Error("Failed to get current file info")
          const F = {
            uri: c,
            generationUUID: a,
            currentRange: S,
            originalTextLines: x,
            prompt: "hi5",
            isHidden: !1,
            attachedToPromptBar: !1,
            source: u ?? OP,
            createdAt: Date.now(),
            composerMetadata: n,
          }
          ;(C = d ? void 0 : (await this.m.addActiveDiff(F)).id),
            C !== void 0 && (this.x.set(t, { diffId: C }), g && g(c, C))
          let H = ""
          for await (const B of r) {
            const z = B.cmdKResponse?.response
            if (
              !(
                z?.case !== "editEnd" &&
                z?.case !== "editStart" &&
                z?.case !== "editStream"
              )
            )
              switch (z.case) {
                case "editStart": {
                  for (; E < z.value.startLineNumber; E++) {
                    const K = E - S.startLineNumber + 1
                    K <= x.length && (D.push(x[K - 1]), A(), k.push(x[K - 1]))
                  }
                  break
                }
                case "editStream": {
                  for (
                    H += z.value.text;
                    H.includes(`
  `);

                  ) {
                    const K = H.slice(
                      0,
                      H.indexOf(`
  `),
                    )
                    D.push(K),
                      A(),
                      k.push(K),
                      (H = H.slice(
                        H.indexOf(`
  `) + 1,
                      ))
                  }
                  break
                }
                case "editEnd": {
                  H.length > 0 && (D.push(H), A(), k.push(H)),
                    (H = ""),
                    (E = z.value.endLineNumberExclusive)
                  break
                }
              }
          }
          for (; E <= x.length; E++) D.push(x[E - 1]), A(), k.push(x[E - 1])
          L(), (y = !0), C !== void 0 && this.m.finishDiffSuccess(C)
        } catch (F) {
          F.message === "[canceled] This operation was aborted" && (w = !0),
            console.error(
              "[composer] error in handleSlashEditResponseSingleDiff",
              F,
            )
        } finally {
          if (y) {
            if ((yield " done!", x !== void 0)) {
              const F = await this.k.computeLinesDiff(x, k, {
                ignoreTrimWhitespace: !1,
                computeMoves: !1,
                maxComputationTimeMs: 500,
                ...p,
              })
              let H = F.changes
              F.hitTimeout && (H = [new Qb(S, new Es(1, k.length + 1), void 0)])
              const B = H.map((K) => ({
                original: K.original,
                modified: k.slice(
                  K.modified.startLineNumber - 1,
                  K.modified.endLineNumberExclusive - 1,
                ),
              }))
              m?.(B),
                d && d.finish(B),
                s &&
                  this.q.setChatData(
                    "tabs",
                    (K, Q) => K.tabId === s.tabId,
                    "bubbles",
                    (K) => K.id === s.aiBubbleId && K.type === "ai",
                    "suggestedDiffs",
                    [
                      new aG({
                        relativeWorkspacePath:
                          o.currentFile?.relativeWorkspacePath ?? "",
                        chunks: H.map((K) => {
                          let Q = new x1t()
                          return (
                            (Q.oldLines = x.slice(
                              K.original.startLineNumber - 1,
                              K.original.endLineNumberExclusive - 1,
                            )),
                            (Q.newLines = k.slice(
                              K.modified.startLineNumber - 1,
                              K.modified.endLineNumberExclusive - 1,
                            )),
                            (Q.oldRange = new Kf({
                              startLineNumber: K.original.startLineNumber,
                              endLineNumberInclusive:
                                K.original.endLineNumberExclusive - 1,
                            })),
                            (Q.newRange = new Kf({
                              startLineNumber: K.modified.startLineNumber,
                              endLineNumberInclusive:
                                K.modified.endLineNumberExclusive - 1,
                            })),
                            Q
                          )
                        }),
                      }).toJson(),
                    ],
                  )
            }
          } else yield " failed.", b?.(w)
          l.abort(),
            y || (C !== void 0 ? (L(), this.m.cancelDiff(C)) : d && d.cancel()),
            d === void 0 &&
              (C === void 0 ||
                this.j.nonPersistentStorage.inlineDiffs.find(
                  (F) => F.id === C,
                ) === void 0) &&
              s &&
              this.j.setNonPersistentStorage(
                "nonPersistentChatMetadata",
                ({ bubbleId: F, tabId: H }) => F === s.bubbleId && H === s.tabId,
                "editUuid",
                void 0,
              )
        }
      }
      async y({
        streamer: e,
        request: t,
        generationUUID: s,
        abortController: n,
        uri: r,
      }) {
        const o = new J()
        try {
          const a = await this.l.createModelReference(r)
          o.add(a)
          const l = new SYe(a, [a.object.textEditorModel.getFullModelRange()])
          o.add(l)
          const c = new Map(),
            h = new Set(),
            u = t.currentFile?.contents.split(`
  `) ?? [""],
            d = u.length
          for await (const g of e) {
            const p = g.cmdKResponse?.response
            if (
              (p?.case !== "editEnd" &&
                p?.case !== "editStart" &&
                p?.case !== "editStream") ||
              h.has(p.value.editId)
            )
              continue
            let m = c.get(p.value.editId),
              b = m?.diffId,
              y = m?.active
            switch (p.case) {
              case "editStart": {
                if (b !== void 0 || y !== void 0)
                  throw new Error("BAD BAD BAD YELL AT ARVID PLS")
                let w = l.getUpdatedLineNumber(p.value.startLineNumber),
                  C = p.value.maxEndLineNumberExclusive
                    ? l.getUpdatedLineNumber(p.value.maxEndLineNumberExclusive)
                    : void 0
                if (
                  (C === null &&
                    p.value.maxEndLineNumberExclusive !== void 0 &&
                    ((C = l.getUpdatedLineNumber(d)), C !== null && (C += 1)),
                  w === null &&
                    ((w = l.getUpdatedLineNumber(d)), w !== null && (w += 1)),
                  C === void 0 &&
                    ((C = l.getUpdatedLineNumber(d)), C !== null && (C += 1)),
                  w === null || C === null)
                ) {
                  h.add(p.value.editId),
                    console.error(
                      "BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
                      p.value.editId,
                    )
                  continue
                }
                const S = new Es(w, C),
                  x = u.slice(p.value.startLineNumber - 1),
                  k = {
                    uri: r,
                    generationUUID: s,
                    currentRange: S,
                    originalTextLines: x,
                    prompt: "hi6",
                    isHidden: !1,
                    attachedToPromptBar: !1,
                  },
                  E = await this.m.addActiveDiff(k)
                c.set(p.value.editId, {
                  diffId: E.id,
                  active: !0,
                  lineBuffer: "",
                  startLine: p.value.startLineNumber,
                }),
                  (b = E.id),
                  a.object.textEditorModel.setNonPersistentReactiveStorage(
                    "topPromptBarData",
                    "diffIds",
                    (P) => [...P, E.id],
                  ),
                  (y = !0),
                  c.size === 1 && this.m.revealDiff(E.id)
                const D = Array.from(c.values()).map((P) => P.diffId)
                this.potentiallyFold(D, E.id)
                break
              }
              case "editStream": {
                const w = c.get(p.value.editId)
                if (w === void 0) throw new Error("BAD BAD BAD YELL AT ARVID PLS")
                for (
                  w.lineBuffer += p.value.text;
                  w.lineBuffer.includes(`
  `);

                ) {
                  const C = w.lineBuffer.slice(
                    0,
                    w.lineBuffer.indexOf(`
  `),
                  )
                  this.m.addLineToDiff(w.diffId, C),
                    (w.lineBuffer = w.lineBuffer.slice(
                      w.lineBuffer.indexOf(`
  `) + 1,
                    ))
                }
                break
              }
              case "editEnd": {
                const w = c.get(p.value.editId)
                if (w === void 0) throw new Error("BAD BAD BAD YELL AT ARVID PLS")
                w.lineBuffer.length > 0 &&
                  this.m.addLineToDiff(w.diffId, w.lineBuffer)
                const C =
                  this.j.nonPersistentStorage.inlineDiffs.find((A) => A.id === b)
                    ?.currentRange.startLineNumber ?? null
                if (C === null) throw new Error("BAD BAD BAD YELL AT ARVID PLS")
                const S = _Ui(
                    this.j.nonPersistentStorage.inlineDiffs.find(
                      (A) => A.id === b,
                    ),
                  ),
                  x = p.value.endLineNumberExclusive,
                  k = l.getUpdatedLineNumber(x) ?? u.length,
                  E = new Es(C, k),
                  D = u.slice(w.startLine, x)
                this.m.rejectDiff(w.diffId),
                  a.object.textEditorModel.setNonPersistentReactiveStorage(
                    "topPromptBarData",
                    "diffIds",
                    (A) => A.filter((F) => F !== w.diffId),
                  )
                const P = {
                    uri: r,
                    generationUUID: s,
                    currentRange: E,
                    originalTextLines: D,
                    prompt: "hi",
                    isHidden: !1,
                    attachedToPromptBar: !1,
                  },
                  L = await this.m.addActiveDiff(P)
                ;(b = L.id),
                  a.object.textEditorModel.setNonPersistentReactiveStorage(
                    "topPromptBarData",
                    "diffIds",
                    (A) => [...A, L.id],
                  )
                for (const A of S) this.m.addLineToDiff(L.id, A)
                this.m.finishDiffSuccess(b)
                break
              }
            }
          }
        } finally {
          o.dispose(), n.abort()
        }
      }
      async cancelEdit(e) {
        const t = await this.l.createModelReference(e)
        try {
          const s =
            t.object.textEditorModel.nonPersistentReactiveStorage.topPromptBarData
              .lastGenerationUUID
          s !== void 0 &&
            this.j.setNonPersistentStorage("inprogressAIGenerations", (n) =>
              n.filter((r) => r.generationUUID !== s),
            )
        } finally {
          t.dispose()
        }
        this.o.executeCommand("editor.unfoldAll")
      }
      async acceptEdit(e) {
        this.v.trackEvent("composer.accept_diff", { source: "editor" }),
          await this.cancelEdit(e)
        const t = await this.l.createModelReference(e)
        try {
          const s = EFt(t.object.textEditorModel, this.j)
          for (let n = 0; n < s.length; n++)
            this.m.acceptDiff(s[n], { dontBreakConsolidation: n !== 0 })
        } finally {
          t.dispose()
        }
        this.o.executeCommand("editor.unfoldAll")
      }
      async hasRunningOrPendingEdit(e) {
        const t = await this.l.createModelReference(e)
        try {
          return !!(
            EFt(t.object.textEditorModel, this.j).length > 0 ||
            PKn(t.object.textEditorModel, this.j)
          )
        } finally {
          t.dispose()
        }
      }
      async clearAndMoveFocusToEditor(e) {
        const t = await this.l.createModelReference(e)
        try {
          ;(await this.hasRunningOrPendingEdit(e)) ||
            (t.object.textEditorModel.nonPersistentReactiveStorage.topPromptBarData.userBubbleDelegate.clear(),
            t.object.textEditorModel.setNonPersistentReactiveStorage(
              "topPromptBarData",
              "shown",
              !1,
            ),
            t.object.textEditorModel.setNonPersistentReactiveStorage(
              "topPromptBarData",
              "initText",
              "",
            ))
        } finally {
          t.dispose()
        }
        await new Promise((s) => setTimeout(s, 10)),
          this.n.activeEditorPane?.focus()
      }
      async maybeCancelAndDefinitelyRejectEdit(e) {
        await this.cancelEdit(e)
        const t = await this.l.createModelReference(e)
        try {
          const s = EFt(t.object.textEditorModel, this.j)
          for (let n = 0; n < s.length; n++)
            this.m.rejectDiff(s[n], { dontBreakConsolidation: n !== 0 })
        } finally {
          t.dispose()
        }
        this.o.executeCommand("editor.unfoldAll")
      }
      async performFastEdit({ query: e, uri: t }) {
        const [s, n] = this.c.registerNewGeneration({ metadata: void 0 }),
          r = new J(),
          o = await this.l.createModelReference(t)
        r.add(o),
          o.object.textEditorModel.setNonPersistentReactiveStorage(
            "topPromptBarData",
            "lastGenerationUUID",
            s,
          )
        try {
          this.g.publicLogCapture("Submitted fast edit")
          const a = this.c.getModelDetails({
              specificModelField: "regular-chat",
            }),
            l = new V$i({
              query: e,
              currentFile: await this.c.getCurrentFileInfo(t, {
                includeNotebookCells: !0,
              }),
              repositories: this.c.repositories.map((p) => p.repoInfo),
              explicitContext: await this.c.getExplicitContext(),
              workspaceRootPath: this.b.getWorkspaceRootPath(),
              modelDetails: a,
            })
          if (l.currentFile === void 0)
            throw new Error("Failed to get current file info")
          const c = new SYe(o, [o.object.textEditorModel.getFullModelRange()])
          this.c.addToPromptHistory({ prompt: e, commandType: JC.CHAT })
          const u = (await this.c.aiClient()).streamFastEdit(l, {
              signal: n.signal,
              headers: wn(s),
            }),
            d = new Map(),
            g = new Set()
          for await (const p of u) {
            if (g.has(p.editUuid)) continue
            let m = d.get(p.editUuid),
              b = m?.diffId,
              y = m?.active
            if (b === void 0 || y === void 0) {
              let w = c.getUpdatedLineNumber(p.lineNumber),
                C = c.getUpdatedLineNumber(p.lineNumber + p.replaceNumLines)
              if (
                (C === null &&
                  ((C = c.getUpdatedLineNumber(
                    l.currentFile.contents.split(`
  `).length,
                  )),
                  C !== null && (C += 1)),
                w === null &&
                  ((w = c.getUpdatedLineNumber(
                    l.currentFile.contents.split(`
  `).length,
                  )),
                  w !== null && (w += 1)),
                w === null || C === null)
              ) {
                g.add(p.editUuid),
                  console.error(
                    "BAD BAD BAD YELL AT ARVID PLS Failed to update line numbers for edit",
                    p.editUuid,
                  )
                continue
              }
              const S = new Es(w, C),
                x = l.currentFile.contents
                  .split(
                    `
  `,
                  )
                  .slice(p.lineNumber - 1, p.lineNumber + p.replaceNumLines - 1),
                k = {
                  uri: t,
                  generationUUID: s,
                  currentRange: S,
                  originalTextLines: x,
                  prompt: l.query,
                  isHidden: !1,
                  attachedToPromptBar: !1,
                },
                E = await this.m.addActiveDiff(k)
              d.set(p.editUuid, { diffId: E.id, active: !0 }),
                (b = E.id),
                o.object.textEditorModel.setNonPersistentReactiveStorage(
                  "topPromptBarData",
                  "diffIds",
                  (P) => [...P, E.id],
                ),
                (y = !0),
                d.size === 1 && this.m.revealDiff(E.id)
              const D = Array.from(d.values()).map((P) => P.diffId)
              this.potentiallyFold(D, E.id)
            }
            y
              ? (p.newLine !== void 0 && this.m.addLineToDiff(b, p.newLine),
                p.done === !0 &&
                  (this.m.finishDiffSuccess(b),
                  d.set(p.editUuid, { diffId: b, active: !1 })))
              : console.log("Skipping inactive edit FOR NOW", p.editUuid)
          }
        } finally {
          r.dispose(),
            this.j.setNonPersistentStorage("inprogressAIGenerations", (a) =>
              a.filter((l) => l.generationUUID !== s),
            )
        }
      }
      async potentiallyFold(e, t) {
        const s = this.j.nonPersistentStorage.inlineDiffs.find((C) => C.id === t)
        if (s === void 0) return
        const n = e.filter((C) => C !== t)
        if (n.length === 0) return
        const r = n.map((C) => {
          const S = this.j.nonPersistentStorage.inlineDiffs.find(
            (P) => P.id === C,
          )
          if (S === void 0) return 1 / 0
          const x = S.currentRange,
            k = s.currentRange,
            E = Math.abs(x.endLineNumberExclusive - k.startLineNumber),
            D = Math.abs(x.startLineNumber - k.endLineNumberExclusive)
          return Math.min(E, D)
        })
        let o = 0,
          a = r[0]
        for (let C = 1; C < r.length; C++) r[C] < a && ((o = C), (a = r[C]))
        const l = n[o],
          c = this.j.nonPersistentStorage.inlineDiffs.find((C) => C.id === l)
        if (c === void 0 || a < 10) return
        const h = this.n.activeEditorPane
        if (h === void 0) return
        const u = h.getControl()
        if (u === void 0 || !Pn(u)) return
        const d = pm.get(u)
        if (!d) return
        const g = d.getFoldingModel()
        if (!g) return
        const p = await g
        if (!p) return
        const m =
            s.currentRange.startLineNumber < c.currentRange.startLineNumber
              ? s
              : c,
          b =
            s.currentRange.startLineNumber < c.currentRange.startLineNumber
              ? c
              : s,
          y = {
            startLineNumber: m.currentRange.endLineNumberExclusive + 5,
            endLineNumber: b.currentRange.startLineNumber - 5,
            type: void 0,
            isCollapsed: !0,
            source: 1,
          },
          w = VC.sanitizeAndMerge(p.regions, [y], u.getModel()?.getLineCount())
        p.updatePost(VC.fromFoldRanges(w))
      }
      applyDiffToLines(e, t) {
        const s = []
        let n = 0
        for (let r = 0; r < e.length; r++) {
          const o = e[r]
          if (n < t.length) {
            const { original: a, modified: l } = t[n]
            if (
              r === a.startLineNumber - 1 &&
              (s.push(...l), n++, a.endLineNumberExclusive !== a.startLineNumber)
            ) {
              r += a.endLineNumberExclusive - a.startLineNumber - 1
              continue
            }
          }
          s.push(o)
        }
        for (; n < t.length; ) {
          const { original: r, modified: o } = t[n]
          s.push(...o), n++
        }
        return s
      }
      z(e) {
        const t = e.split(`
  `),
          s = t.findIndex((o) => o.trim() !== ""),
          n = [...t].reverse().findIndex((o) => o.trim() !== ""),
          r = t.length - 1 - n
        return s === -1 || n === -1
          ? ""
          : t.slice(s, r + 1).join(`
  `)
      }
      A(e, t) {
        return {
          [Symbol.asyncIterator]: async function* () {
            yield new AVe({
              cmdKResponse: new s7({
                response: {
                  case: "editStart",
                  value: new l$i({ startLineNumber: 1 }),
                },
              }),
            }),
              yield new AVe({
                cmdKResponse: new s7({
                  response: {
                    case: "editStream",
                    value: new c$i({ text: e, editId: 0 }),
                  },
                }),
              }),
              yield new AVe({
                cmdKResponse: new s7({
                  response: {
                    case: "editEnd",
                    value: new h$i({
                      editId: 0,
                      endLineNumberExclusive:
                        t.split(`
  `).length + 2,
                    }),
                  },
                }),
              })
          },
        }
      }
    }
  ;(IFt = __decorate(
    [
      __param(0, A_),
      __param(1, Br),
      __param(2, rU),
      __param(3, ft),
      __param(4, g2),
      __param(5, ei),
      __param(6, nl),
      __param(7, Xt),
      __param(8, oy),
      __param(9, ve),
      __param(10, st),
      __param(11, cv),
      __param(12, it),
      __param(13, Ac),
      __param(14, Z),
      __param(15, _C),
      __param(16, Na),
    ],
    IFt,
  )),
    Ve(x5, IFt, 1);
  var xYe = Re("lspSubgraphService"),
    DFt = class {
      constructor(e) {
        this.b = e
      }
      registerProvider(e) {
        this.a = e
      }
      unregisterProvider() {
        this.a = void 0
      }
    }
  ;(DFt = __decorate([__param(0, ei)], DFt)), Ve(xYe, DFt, 1);

  return {
    x5,
    OP,
    xYe,
  }
}
