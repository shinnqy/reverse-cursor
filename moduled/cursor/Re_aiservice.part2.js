// @ts-check

export function create_Re_aiServicePart2(params) {
  const { Re, rt, lc, __param, __decorate, ei, Xt, $h, nt, Ve, k$, RC, lk, V, Br, A$, B1t, wn, ize, Ui, Cf, U, mPt, JC, Va, N1, eg, it, T1, A_, ft, yi, mo, ue, Ri} = params;

  var ece = Re("cursorEvalService"),
  fP = Re("aiContextSessionService"),
  L8n = () => ({
    case: "terminal-cmd-k",
    defaultIntents: [
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "terminalCmdKDefaults", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "recentLocations", value: {} },
      },
    ],
  }),
  mze = () => ({
    case: "cmd-k",
    defaultIntents: [
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "cmdKCurrentFile", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "cmdKQueryEtc", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: {
          case: "lints",
          value: {
            scope: { case: "cmdkScope", value: {} },
            filterToSeverities: [lk.ERROR],
          },
        },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "recentLocations", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "visibleTabs", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "diffHistory", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "pastCmdkMessagesInDiffSessions", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: { case: "chatHistory", value: {} },
      },
      {
        uuid: rt(),
        type: lc.AUTOMATIC,
        intent: {
          case: "terminalHistory",
          value: { useActiveInstanceAsFallback: !0 },
        },
      },
    ],
  }),
  xp = Re("aiFeatureStatusService"),
  iLt = class extends V {
    constructor(e, t) {
      super(),
        (this.a = e),
        (this.b = t),
        (this.lastPollTimeCache = new Map()),
        (this.shouldEnableCache = new Map()),
        (this.lastPollTimeCacheConfig = new Map()),
        (this.cachedConfigs = new Map())
    }
    async maybeRefreshFeatureStatus(e) {
      if (!(Date.now() - (this.lastPollTimeCache.get(e) ?? 0) < 5 * 60 * 1e3)) {
        this.lastPollTimeCache.set(e, Date.now())
        try {
          const s = await (
            await this.b.aiClient()
          ).checkFeatureStatus({ featureName: e })
          this.shouldEnableCache.set(e, s.enabled)
        } catch (t) {
          console.error(t)
        }
      }
    }
    getCachedFeatureStatus(e) {
      return this.shouldEnableCache.get(e)
    }
    async maybeRefreshConfig(e) {
      if (
        !(
          Date.now() - (this.lastPollTimeCacheConfig.get(e) ?? 0) <
          5 * 60 * 1e3
        )
      ) {
        this.lastPollTimeCacheConfig.set(e, Date.now())
        try {
          const s = await (
            await this.b.aiClient()
          ).checkNumberConfig({ key: e })
          this.cachedConfigs.set(e, s.value)
        } catch (t) {
          console.error(t)
        }
      }
    }
    getCachedConfig(e) {
      return this.cachedConfigs.get(e)
    }
  }
  ;(iLt = __decorate([__param(0, ei), __param(1, Br)], iLt)), Ve(xp, iLt, 1)
  var Sk = Re("cmdKService"),
  sLt = class extends V {
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b) {
      super(),
        (this.b = e),
        (this.c = t),
        (this.g = s),
        (this.h = n),
        (this.m = r),
        (this.n = o),
        (this.q = a),
        (this.r = l),
        (this.s = c),
        (this.t = h),
        (this.u = u),
        (this.w = d),
        (this.y = g),
        (this.z = p),
        (this.C = m),
        (this.F = b),
        (this.a = this.D(this.t.createScoped(this))),
        this.a.onChangeEffect({
          deps: [() => this.t.nonPersistentStorage.promptBars],
          onChange: ({ deps: y, prevDeps: w, prevReturnValue: C }) => {
            const S = y[0] ? Array.from(y[0].values()).flat() : [],
              x = w && w[0] ? Array.from(w[0].values()).flat() : []
            x.length > 0 &&
              x
                .filter(
                  (E) =>
                    !S.some(
                      (D) => D.contextSessionUuid === E.contextSessionUuid,
                    ),
                )
                .forEach((E) =>
                  this.w.removeContextSession(E.contextSessionUuid),
                ),
              S.length > 0 &&
                S.filter(
                  (E) =>
                    !x.some(
                      (D) => D.contextSessionUuid === E.contextSessionUuid,
                    ),
                ).forEach((E) => {
                  this.w.getReactiveReadonlyContextSession(
                    E.contextSessionUuid,
                  ) === void 0 &&
                    this.w.createContextSession({
                      ...mze(),
                      explicitUuid: E.contextSessionUuid,
                    })
                })
          },
        })
    }
    async rerankTerminalCmdK(e) {
      const t = await this.b.cmdKClient(),
        s = await this.b.getExplicitContext(),
        n = await (async () => new A$({ explicitContext: s }))(),
        r = new B1t({
          contextItems: e,
          legacyContext: n,
          cmdKOptions: {
            modelDetails: this.b.getModelDetails({
              specificModelField: "terminal-cmd-k",
            }),
          },
        })
      return t.rerankTerminalCmdKContext(r, { headers: wn(rt()) })
    }
    async rerankCmdK(e) {
      const t = await this.b.cmdKClient()
      this.F.maybeRefreshFeatureStatus("shouldUseReranking")
      const s = this.F.getCachedFeatureStatus("shouldUseReranking"),
        n = await this.b.getExplicitContext()
      n.context = n.context.trim() === "" ? "" : n.context
      const r = await (async () => new A$({ explicitContext: n }))(),
        o = new B1t({
          contextItems: e,
          legacyContext: r,
          cmdKOptions: {
            modelDetails: this.b.getModelDetails({
              specificModelField: "cmd-k",
            }),
            useReranker: s,
          },
        })
      return t.rerankCmdKContext(o, { headers: wn(rt()) })
    }
    async getPreparedImagesData(e, t, s = 512) {
      const n = []
      for (const r of e) {
        const o = await ize(r, () => t(r.uuid), this.C, s)
        n.push(o)
      }
      return n
    }
    async getPreparedEditRequest({
      query: e,
      fastMode: t,
      lineRange: s,
      codeBlocks: n,
      docs: r,
      spoofedSelection: o,
      spoofedDiagnostics: a,
      spoofedCellId: l,
      originalRequest: c,
      modelUriForEdit: h,
      images: u,
      links: d,
    }) {
      const g = e,
        p = this.r.getActiveCodeEditor()
      if (!p || !p.hasModel()) throw new Error("No model found, cannot edit.")
      h || (h = p.getModel().uri)
      const m = await this.y.createModelReference(h)
      try {
        const b = m.object.textEditorModel,
          y = Math.min(
            Math.max(s.endLineNumberExclusive - 1, s.startLineNumber),
            b.getLineCount(),
          ),
          w = b.getLineMaxColumn(y),
          C = new Ui(s.startLineNumber, 1, y, w),
          S = a ?? PUi(this.s, h, C),
          x =
            await this.b.getCurrentFileInfoFromRawWithScrubbingAndNotebookHandling(
              h,
              b.getValue(),
              C,
              o,
              l,
            ),
          k = new Cf({
            relativeWorkspacePath: this.g.asRelativePath(h),
            errors: S,
            fileContents: x?.contents,
          }),
          [E, D] = t
            ? [[], []]
            : await Promise.all([
                this.m.getEmbeddingsFromCache(g),
                this.m.getNonEmbeddingChunks(g),
              ]),
          P =
            n === void 0
              ? []
              : n.map((F) => ({
                  relativeWorkspacePath: this.g.asRelativePath(U.revive(F.uri)),
                  range: {
                    startPosition: {
                      line: F.range.selectionStartLineNumber,
                      column: F.range.selectionStartColumn,
                    },
                    endPosition: {
                      line: F.range.positionLineNumber,
                      column: F.range.positionColumn,
                    },
                  },
                  contents: F.rawText ?? F.text,
                  signatures: { ranges: [] },
                  detailedLines: F.rawText
                    ? F.rawText
                        .split(
                          `
`,
                        )
                        .map((H, B) => ({
                          text: H,
                          lineNumber: B + F.range.selectionStartLineNumber,
                          isSignature: !1,
                        }))
                    : [],
                })),
          L = await this.b.getExplicitContext()
        return (
          (L.context = L.context.trim() === "" ? "" : L.context),
          {
            conversation: [],
            repositories: [],
            sessionId: "",
            fastMode: t,
            query: g,
            currentFile: x,
            workspaceRootPath: this.n.getWorkspaceRootPath(),
            explicitContext: L,
            linterErrors: k,
            promptCodeBlocks: P,
            codeBlocks: [...E.map((F) => mPt(F)), ...D.map((F) => mPt(F))],
            documentationIdentifiers: r === void 0 ? [] : r.map((F) => F.docId),
            originalRequest: c,
            images: u ? await this.getPreparedImagesData(u, (F) => {}) : [],
            links: d ?? [],
          }
        )
      } finally {
        m.dispose()
      }
    }
    async streamPreparedEdit(e, { type: t, generationUUID: s, options: n }) {
      this.q.publicLogCapture(`Submitted ${t}`),
        this.q.publicLogCapture("Submitted Prompt")
      const r = await this.h.getCmdKDebugInfo(),
        o =
          n?.overrideModelDetails ||
          this.b.getModelDetails({ specificModelField: "cmd-k" })
      this.q.publicLogCapture(`submitted.${t}`, { model: o.modelName })
      const [a, l] = this.b.registerNewGeneration({
        metadata: void 0,
        generationUUID: s,
      })
      this.b.decrementBubbleTimesLeft()
      const c = { ...e, modelDetails: o, cmdKDebugInfo: r }
      this.b.addToPromptHistory({ prompt: e.query, commandType: JC.EDIT })
      const h = await this.b.aiClient(),
        d = (t === "edit" ? h.streamEdit : h.streamGenerate)(c, {
          signal: l.signal,
          headers: wn(s),
        })
      let g = Va.typeName + "/"
      t === "edit"
        ? (g += Va.methods.streamEdit.name)
        : (g += Va.methods.streamGenerate.name)
      const p = this.b.streamResponseText({
        streamer: N1(d),
        streamerURL: g,
        generationUUID: s,
        modelDetails: o,
        rethrowCancellation: !0,
        source: "cmd-k",
        rerun: n?.rerun,
      })
      return this.b.streamLines(p)
    }
    getPromptBarCurrentRange(e, t) {
      if (e === void 0) return
      const s = this.t.nonPersistentStorage.inlineDiffs.find(
        (r) => r.id === e.diffId,
      )
      if (s !== void 0) return s.currentRange
      const n = t?.getDecorationRange(e.currentRangeDecorationId)
      if (n)
        return {
          startLineNumber: n.startLineNumber,
          endLineNumberExclusive: n.endLineNumber + 1,
        }
    }
  }
;(sLt = __decorate(
  [
    __param(0, Br),
    __param(1, eg),
    __param(2, it),
    __param(3, ece),
    __param(4, T1),
    __param(5, A_),
    __param(6, ft),
    __param(7, yi),
    __param(8, mo),
    __param(9, ei),
    __param(10, ue),
    __param(11, fP),
    __param(12, Xt),
    __param(13, $h),
    __param(14, nt),
    __param(15, xp),
  ],
  sLt,
)),
  Ve(Sk, sLt, 1)
  function PUi(i, e, t) {
    return i
      .read({ resource: e })
      .filter(
        (n) =>
          n.severity === Ri.Error &&
          N8n(
            n.startLineNumber,
            n.endLineNumber,
            t.startLineNumber,
            t.endLineNumber,
          ),
      )
      .map(
        (n) =>
          new k$({
            message: n.message,
            range: new RC({
              startPosition: { line: n.startLineNumber, column: n.startColumn },
              endPosition: { line: n.endLineNumber, column: n.endColumn },
            }),
          }),
      )
  }
  function bze(i, e, t) {
    return i <= t && t <= e
  }
  function N8n(i, e, t, s) {
    return bze(i, e, t) || bze(i, e, s) || bze(t, s, i) || bze(t, s, e)
  }

  return {
    ece,
    fP,
    L8n,
    mze,
    xp,
    Sk,
    PUi,
  }
}
