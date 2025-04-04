// @ts-check

export function createAIService(params) {
  const { Re, V, rt, fu, LRUCache, Va, X7, Q7, Kle, fPt, OTt, _Tt, wn, B$i, zr, Y$i, s7, Tg, du, rl, ce, G, ao, Ho, Qm, RC, Sf, iG, rze, T$i, hk, dc, ew, fs, ov, gPt, RVe, QDi, JC, N1, WSt, $$i, A$i, J9i, M$i, ZN, W3i, WJ, mPt, K$i, z$i, r2i, q3i, G$i, PI, ks, Z$i, Q$i, z3i, Ob, Ha, PVe, M$, __decorate, __param, A_, ve, Hi, ft, cppEventLoggerService, Ti, Cp, st, it, ue, nt, $h, eg, NI, QJ, et, ei, rU, Md, Xt, u0, mo, T1, qi, Z, cv, YC, Ag, lU, Ve } = params;

  var Br = Re("aiService"),
    x7i
  ;(function (i) {
    ;(i[(i.context = 0)] = "context"), (i[(i.chat = 1)] = "chat")
  })(x7i || (x7i = {}))
  async function Y6n(i, e = "") {
    let t = []
    for await (const s of i) t.push(s)
    return t.join(e)
  }
  var pPt = class extends V {
    H() {
      const e = this.bb.get(this.G, 1, "[]")
      JSON.parse(e).forEach((s) => this.F.set(s.generationUUID, s))
    }
    I() {
      const e = Array.from(this.F.values())
      this.bb.store(this.G, JSON.stringify(e), 1, 1)
    }
    constructor(
      e,
      t,
      s,
      n,
      r,
      o,
      a,
      l,
      c,
      h,
      u,
      d,
      g,
      p,
      m,
      b,
      y,
      w,
      C,
      S,
      x,
      k,
      E,
      D,
      P,
      L,
      A,
      F,
      H,
    ) {
      super(),
        (this.J = e),
        (this.L = t),
        (this.M = s),
        (this.N = n),
        (this.O = r),
        (this.Q = o),
        (this.R = a),
        (this.S = l),
        (this.U = c),
        (this.W = h),
        (this.X = u),
        (this.Y = d),
        (this.Z = g),
        (this.$ = p),
        (this.ab = m),
        (this.bb = b),
        (this.cb = y),
        (this.db = w),
        (this.eb = C),
        (this.fb = S),
        (this.gb = x),
        (this.hb = k),
        (this.ib = E),
        (this.jb = D),
        (this.kb = P),
        (this.lb = L),
        (this.mb = A),
        (this.nb = F),
        (this.ob = H),
        (this.h = "aiService.prompts"),
        (this.streamingAbortControllers = new Map()),
        (this.repositories = []),
        (this.F = new LRUCache(100)),
        (this.G = "aiService.generations"),
        (this.rb = new Map()),
        (this.z = this.D(this.cb.createScoped(this))),
        this.H(),
        (this.j = this.kb.createInstance(fu, { service: Va })),
        (this.n = this.kb.createInstance(fu, { service: X7 })),
        (this.q = this.kb.createInstance(fu, { service: Q7 })),
        (this.w = this.kb.createInstance(fu, { service: Kle })),
        (this.y = this.kb.createInstance(fu, { service: fPt })),
        (this.t = this.kb.createInstance(fu, { service: OTt })),
        (this.u = this.kb.createInstance(fu, { service: _Tt })),
        this.z.createImplicitEffect(() => {
          this.cb.workspaceUserPersistentStorage.exampleCodebaseQuestions ===
            void 0 &&
            this.cb.applicationUserPersistentStorage.bubbleTimesLeft > 0 &&
            this.cb.nonPersistentStorage.repositoryIndexingStatus?.case ===
              "synced" &&
            (this.cb.setWorkspaceUserPersistentStorage(
              "exampleCodebaseQuestions",
              [],
            ),
            this.computeExampleCodebaseQuestions()
              .then((B) =>
                this.cb.setWorkspaceUserPersistentStorage(
                  "exampleCodebaseQuestions",
                  B,
                ),
              )
              .catch((B) => console.error(B)))
        }),
        this.z.createImplicitEffect(() => {
          const z = this.cb.nonPersistentStorage.inprogressAIGenerations.map(
              (Q) => Q.generationUUID,
            ),
            K = []
          for (const [Q, se] of this.streamingAbortControllers)
            z.includes(Q) || (se.abort(), K.push(Q))
          for (const Q of K)
            this.streamingAbortControllers.get(Q)?.abort(),
              this.streamingAbortControllers.delete(Q)
        }),
        (this.repositories = [])
      for (const B of this.R.repositories) this.addRepository(B)
      this.D(
        this.R.onDidAddRepository((B) => {
          this.addRepository(B)
        }),
      ),
        this.D(
          this.R.onDidRemoveRepository((B) => {
            for (const z of this.repositories)
              z.vscodeId === B.id && z.disposables.forEach((K) => K.dispose())
            this.repositories = this.repositories.filter(
              (z) => z.vscodeId !== B.id,
            )
          }),
        ),
        (this.f = this.qb()),
        this.D(
          this.bb.onWillSaveState(() => {
            this.I(), this.pb()
          }),
        )
    }
    async getHighLevelFolderDescription() {
      return this.eb.indexingProvider?.getHighLevelFolderDescription()
    }
    getPastGenerations() {
      return Array.from(this.F.values()).sort((e, t) => t.unixMs - e.unixMs)
    }
    registerNewGeneration(e) {
      this.streamingAbortControllers.size > 100 &&
        (console.warn(
          "There are more than 100 streaming abort controllers. This should not happen unless the user is starting a massive amount of generations in parallel. Clearing all of them.",
        ),
        this.streamingAbortControllers.clear())
      const t = e.generationUUID ?? rt(),
        s = new AbortController()
      return (
        this.streamingAbortControllers.set(t, s),
        this.cb.setNonPersistentStorage("inprogressAIGenerations", (n) => [
          ...n,
          {
            generationUUID: t,
            metadata: e.metadata ?? { type: void 0 },
            queuePositionResponse: void 0,
          },
        ]),
        this.F.set(t, {
          unixMs: Date.now(),
          generationUUID: t,
          type: e.metadata?.type,
          textDescription:
            e.metadata !== void 0 && "textDescription" in e.metadata
              ? e.metadata.textDescription
              : void 0,
        }),
        this.I(),
        [t, s]
      )
    }
    async availableDocs(e) {
      return (
        await (await this.aiClient()).availableDocs(e, { headers: wn(rt()) })
      ).docs
    }
    async refreshDefaultModels() {
      try {
        const e = this.Z.getModel(),
          n = (
            await (
              await this.aiClient()
            ).availableModels(
              new B$i({ isNightly: this.Q.version.includes("nightly") }),
              { headers: wn(rt()) },
            )
          ).models
        this.cb.setApplicationUserPersistentStorage("availableDefaultModels2", n),
          this.cb.applicationUserPersistentStorage.oneTimeSettings
            .shouldMigrateFromGpt4ToGpt4o === !0 && this.migrateFromGpt4ToGpt4o(),
          this.cb.applicationUserPersistentStorage.oneTimeSettings
            .shouldMigrateFromGpt4oToClaudeSonnet === !0 &&
            this.migrateFromGpt4oToClaudeSonnet(),
          this.maybeMigrateBackToGpt4oIfUsingOpenAIApiKey()
      } catch (e) {
        console.error("Error refreshing default models:", e)
      }
      this.Z.handleAvailableModelsChange()
    }
    migrateFromGpt4ToGpt4o() {
      if (
        this.cb.applicationUserPersistentStorage.oneTimeSettings
          .shouldMigrateFromGpt4ToGpt4o === !1
      )
        return
      this.cb.setApplicationUserPersistentStorage(
        "oneTimeSettings",
        "shouldMigrateFromGpt4ToGpt4o",
        !1,
      ),
        this.Z.enableModel("gpt-4o")
      const e = this.cb.applicationUserPersistentStorage.aiSettings.openAIModel,
        t = this.cb.applicationUserPersistentStorage.aiSettings.regularChatModel,
        s = this.cb.applicationUserPersistentStorage.aiSettings.cmdKModel,
        n = this.cb.applicationUserPersistentStorage.aiSettings.terminalCmdKModel
      this.Z.disableModel("gpt-4"),
        e === "gpt-4" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "openAIModel",
            "gpt-4o",
          ),
        t === "gpt-4" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "regularChatModel",
            "gpt-4o",
          ),
        s === "gpt-4" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "cmdKModel",
            "gpt-4o",
          ),
        n === "gpt-4" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "terminalCmdKModel",
            "gpt-4o",
          )
    }
    migrateFromGpt4oToClaudeSonnet() {
      if (
        this.cb.applicationUserPersistentStorage.oneTimeSettings
          .shouldMigrateFromGpt4oToClaudeSonnet === !1 ||
        this.Z.getUseOpenAIKey() === !0
      )
        return
      this.cb.setApplicationUserPersistentStorage(
        "oneTimeSettings",
        "shouldMigrateFromGpt4oToClaudeSonnet",
        !1,
      ),
        this.Z.enableModel("claude-3.5-sonnet")
      const e = this.cb.applicationUserPersistentStorage.aiSettings.openAIModel,
        t = this.cb.applicationUserPersistentStorage.aiSettings.regularChatModel,
        s = this.cb.applicationUserPersistentStorage.aiSettings.cmdKModel,
        n = this.cb.applicationUserPersistentStorage.aiSettings.terminalCmdKModel
      ;(e === "gpt-4o" || e === "gpt-4") &&
        this.cb.setApplicationUserPersistentStorage(
          "aiSettings",
          "openAIModel",
          "claude-3.5-sonnet",
        ),
        (t === "gpt-4o" || t === "gpt-4") &&
          (this.cb.setApplicationUserPersistentStorage(
            "oneTimeSettings",
            "didMigrateFromGpt4oToClaudeSonnet",
            !0,
          ),
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "regularChatModel",
            "claude-3.5-sonnet",
          )),
        (s === "gpt-4o" || s === "gpt-4") &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "cmdKModel",
            "claude-3.5-sonnet",
          ),
        (n === "gpt-4o" || n === "gpt-4") &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "terminalCmdKModel",
            "claude-3.5-sonnet",
          )
    }
    maybeMigrateBackToGpt4oIfUsingOpenAIApiKey() {
      this.Z.getUseOpenAIKey() === !0 &&
        this.maybeMigrateBackFromClaudeSonnetToGpt4o()
    }
    maybeMigrateBackFromClaudeSonnetToGpt4o() {
      if (
        this.cb.applicationUserPersistentStorage.oneTimeSettings
          .didMigrateBackFromClaudeSonnetToGpt4o ||
        !this.cb.applicationUserPersistentStorage.oneTimeSettings
          .didMigrateFromGpt4oToClaudeSonnet
      )
        return
      this.cb.setApplicationUserPersistentStorage(
        "oneTimeSettings",
        "didMigrateBackFromClaudeSonnetToGpt4o",
        !0,
      )
      const e = this.cb.applicationUserPersistentStorage.aiSettings.openAIModel,
        t = this.cb.applicationUserPersistentStorage.aiSettings.regularChatModel,
        s = this.cb.applicationUserPersistentStorage.aiSettings.cmdKModel,
        n = this.cb.applicationUserPersistentStorage.aiSettings.terminalCmdKModel
      this.Z.enableModel("gpt-4o"),
        e === "claude-3.5-sonnet" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "openAIModel",
            "gpt-4o",
          ),
        t === "claude-3.5-sonnet" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "regularChatModel",
            "gpt-4o",
          ),
        s === "claude-3.5-sonnet" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "cmdKModel",
            "gpt-4o",
          ),
        n === "claude-3.5-sonnet" &&
          this.cb.setApplicationUserPersistentStorage(
            "aiSettings",
            "terminalCmdKModel",
            "gpt-4o",
          )
    }
    setLastDraftMessage(e) {
      this.C = e
    }
    getLastDraftMessage() {
      return this.C
    }
    getPreviousPrompts(e) {
      return [
        ...this.f
          .filter((t) => e === void 0 || t.commandType === e)
          .map((t) => t.text),
      ].concat(this.C != null ? [this.C] : [])
    }
    addToPromptHistory({ prompt: e, commandType: t }) {
      this.f.length > 300 && this.f.splice(0, 50),
        (this.f.length === 0 || this.f[this.f.length - 1].text !== e) &&
          this.f.push({ text: e, commandType: t })
    }
    pb() {
      const e = this.f.map((t) => ({ text: t.text, commandType: t.commandType }))
      this.bb.store(this.h, JSON.stringify(e), 1, 1)
    }
    qb() {
      return JSON.parse(this.bb.get(this.h, 1, "[]"))
    }
    getModelDetails({ longContextModeEnabled: e, specificModelField: t } = {}) {
      let s = e
        ? this.Z.getLongContextModel()
        : t === "regular-chat"
          ? this.Z.getRegularChatModel()
          : t === "cmd-k"
            ? this.Z.getCmdKModel()
            : t === "terminal-cmd-k"
              ? this.Z.getTerminalCmdKModel()
              : t === "composer"
                ? this.Z.getComposerModel()
                : this.Z.getModel()
      s = s ?? void 0
      let n = this.Y.getApiKeyForModel(s)
      const r = this.Z.getUseApiKeyForModel(s),
        o = this.cb.applicationUserPersistentStorage.azureState
      return (
        (!r || !n) && (n = void 0),
        new zr({
          apiKey: n,
          modelName: s,
          azureState: o,
          openaiApiBaseUrl:
            this.cb.applicationUserPersistentStorage.openAIBaseUrl,
        })
      )
    }
    async *streamResponse({
      modelDetails: e,
      streamer: t,
      streamerURL: s,
      generationUUID: n,
      rethrowCancellation: r,
      rerun: o,
      failSilently: a = !1,
      source: l = "other",
      startTime: c,
    }) {
      const h = await this.aiClient()
      let u = !0,
        d
      const g = () => {
        !u ||
          e === void 0 ||
          h
            .checkQueuePosition(new Y$i({ origRequestId: n, modelDetails: e }))
            .then((p) => {
              this.cb.setNonPersistentStorage(
                "inprogressAIGenerations",
                (m) => m.generationUUID === n,
                (m) => ({ ...m, queuePositionResponse: p }),
              ),
                (d = setTimeout(g, 1e3))
            })
            .catch((p) => {})
      }
      d = setTimeout(g, 1e3)
      try {
        try {
          let p = 0
          for await (const m of t)
            p++,
              yield m,
              u &&
                (m instanceof s7
                  ? m.response.case === "editStream" && (u = !1)
                  : typeof m != "object" || m === null
                    ? (u = !1)
                    : "text" in m
                      ? m.text !== "" && (u = !1)
                      : (u = !1))
          this.streamingAbortControllers.delete(n)
        } catch (p) {
          if (
            ((u = !1),
            p.code !== Tg.Canceled && console.error(p),
            !(p instanceof du) ||
              (p.code === Tg.Canceled ||
                a ||
                this.$.handleError(p, e, n, s, l, o),
              r))
          )
            throw p
        }
      } finally {
        ;(u = !1),
          this.cb.setNonPersistentStorage("inprogressAIGenerations", (p) =>
            p.filter((m) => m.generationUUID !== n),
          )
      }
    }
    async *streamResponseText(e) {
      const t = this.streamResponse(e)
      for await (const { text: s } of t) yield s
    }
    decrementBubbleTimesLeft() {
      this.cb.applicationUserPersistentStorage.bubbleTimesLeft > 0 &&
        this.cb.setApplicationUserPersistentStorage(
          "bubbleTimesLeft",
          this.cb.applicationUserPersistentStorage.bubbleTimesLeft - 1,
        )
    }
    updatePersonalContext(e) {
      this.bb.store("aicontext.personalContext", e, -1, 1)
    }
    updateAdditionalFiles(e) {
      this.W.updateValue("aicontext.additionalFiles", e, 2)
    }
    getPersonalContext() {
      return this.bb.get("aicontext.personalContext", -1, "")
    }
    getAdditionalFiles() {
      return this.W.getValue("aicontext.additionalFiles")
    }
    addRepository(e) {
      const t = [],
        s = [],
        n = []
      e.provider.remotes &&
        e.provider.remotes.forEach((o) => {
          const a = o.fetchUrl ?? o.pushUrl
          a && (t.push(a), s.push(o.name))
        }),
        e.provider.onDidChangeRemotes &&
          n.push(
            e.provider.onDidChangeRemotes(() => {
              ;(t.length = 0),
                (s.length = 0),
                e.provider.remotes &&
                  e.provider.remotes.forEach((o) => {
                    const a = o.fetchUrl ?? o.pushUrl
                    a && (t.push(a), s.push(o.name))
                  })
            }),
          )
      const r = e.provider.rootUri
        ? this.U.asRelativePath(e.provider.rootUri)
        : ""
      this.repositories.push({
        repoInfo: new rl({
          relativeWorkspacePath: r,
          remoteUrls: t,
          remoteNames: s,
        }),
        vscodeId: e.provider.id,
        disposables: n,
      })
    }
    aiClient() {
      return this.j.get()
    }
    uploadClient() {
      return this.n.get()
    }
    cmdKClient() {
      return this.q.get()
    }
    interpreterClient() {
      return this.w.get()
    }
    experimentClient() {
      return this.y.get()
    }
    aiBranchClient() {
      return this.t.get()
    }
    hallucinatedFunctionsClient() {
      return this.u.get()
    }
    getLastActiveFileEditor() {
      return this.ab.getLastActiveFileEditor()
    }
    async getCurrentFileInfoFromRawWithScrubbingAndNotebookHandling(
      e,
      t,
      s,
      n,
      r,
    ) {
      let o = s
      if (e.scheme === ce.aiChat) return
      let a = await this.gb.cleanText(t, e.path)
      if (n) {
        const c = a.split(`
  `),
          h = o.startLineNumber - 1,
          u = o.endLineNumber - 1
        c.splice(h, u - h + 1, n),
          (a = c.join(`
  `)),
          (o = new G(
            o.startLineNumber,
            o.startColumn,
            o.startLineNumber +
              n.split(`
  `).length -
              1,
            o.startColumn,
          ))
      }
      const l = ao(this.L.activeEditorPane)
      if (l && r !== void 0) {
        const c = l.getCellsInRange()
        let h = c.findIndex((w) => w.id === r)
        const u = c.map((w) => w.getText()),
          g = c
            .map((w) => w.model.outputs)
            .map((w) => {
              const C = w.map((S) =>
                S.outputs.map((k) => {
                  if (k.mime === "text/plain") return k.data.toString()
                  if (k.mime === "application/vnd.code.notebook.error") {
                    const E = k.data.toString()
                    let D = JSON.parse(E)
                    const P = D.stack
                      .replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, "")
                      .replace(/\u001b\[0/g, "")
                    return (D = { ...D, stack: P }), JSON.stringify(D, null, 2)
                  } else if (k.mime === "application/vnd.code.notebook.stderr")
                    return k.data.toString()
                  return ""
                }).join(`

  `),
              ).join(`

  `)
              return C.length > 400
                ? C.slice(0, 200) +
                    `
  ...output cropped...
  ` +
                    C.slice(-200)
                : C
            }),
          p = u.map((w, C) => {
            if (w === "" || w === void 0) return ""
            const S = `in[${C}]: ${w}`
            if (g[C] === "" || g[C] === void 0) return S
            const x = `out[${C}]: ${g[C]}`
            return `${S}

  ${x}`
          }),
          m =
            p.slice(0, h).join(`

  `) +
            `

  `,
          b =
            `

  ` +
            p.slice(h + 1).join(`

  `)
        a = m + a + b
        const y =
          m.split(`
  `).length - 1
        ;(o = new G(
          y + o.startLineNumber,
          o.startColumn,
          y + o.endLineNumber,
          o.endColumn,
        )),
          (e = l.textModel?.uri ?? e)
      }
      return new Ho({
        relativeWorkspacePath: this.U.asRelativePath(e),
        contents: a,
        cursorPosition: new Qm({
          line: o.startLineNumber - 1,
          column: o.startColumn - 1,
        }),
        selection: new RC({
          startPosition: new Qm({
            line: o.startLineNumber - 1,
            column: o.startColumn - 1,
          }),
          endPosition: new Qm({
            line: o.endLineNumber - 1,
            column: o.endColumn - 1,
          }),
        }),
        languageId: "",
      })
    }
    async getCurrentFileInfo(e, t) {
      return await this.ab.getCurrentFileInfo(e, t)
    }
    async getCursorRulesFile() {
      if (this.cb.workspaceUserPersistentStorage.ignoreCursorRules === !0) return
      const e = performance.now()
      let t
      try {
        const s = await this.U.resolveRelativePath(".cursorrules")
        return (
          (t = await this.fb.createModelReference(s)),
          t.object.textEditorModel.getValue()
        )
      } catch {
        return
      } finally {
        const s = performance.now()
        console.log(`[Explicit context] took ${s - e}ms`), t?.dispose()
      }
    }
    async getExplicitContext() {
      const e = await this.ob.getRules({ requireDescription: !0 })
      return new Sf({
        context: this.getPersonalContext(),
        repoContext: await this.getCursorRulesFile(),
        rules: e.map(
          (t) =>
            new iG({
              name: t.filename.replace(rze, ""),
              description: t.description,
            }),
        ),
      })
    }
    docsCitationsMiddleware(e, t, s) {
      this.cb.setWorkspaceUserPersistentStorage(
        "persistentChatMetadata",
        (o) => o.bubbleId === t && o.tabId === s,
        "docsCitations",
        [],
      )
      const n = (o) => {
        this.cb.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          (a) => a.bubbleId === t && a.tabId === s,
          "docsCitations",
          (a) => [...(a ?? []), o],
        )
      }
      return (async function* () {
        for await (const o of e)
          o !== null &&
            typeof o == "object" &&
            "docsReference" in o &&
            o.docsReference !== void 0 &&
            n(o.docsReference),
            yield o
      })()
    }
    commitNotesMiddleware(e, t, s, n) {
      try {
        const r = this.mb,
          o = this.aiClient()
        return (async function* () {
          for await (const l of e) {
            if (
              l !== null &&
              typeof l == "object" &&
              "statusUpdates" in l &&
              l.statusUpdates !== void 0 &&
              l.statusUpdates !== null
            ) {
              console.log("[Status Updates]", l.statusUpdates)
              const c = l.statusUpdates.updates.at(0)
              if (c !== void 0 && c.message.startsWith("Opening commits: ")) {
                const u = c.message
                  .split("Opening commits: ")[1]
                  .split(",")
                  .map((b) => b.trim())
                  .filter((b) => b.length > 0)
                console.log("[Fetching commits]", u)
                let d = []
                try {
                  d = await Promise.all(
                    u.map(async (b) => {
                      try {
                        return await r.getCommitRawByCommitHash(b, 10)
                      } catch (y) {
                        console.error(`Error fetching commit diff for ${b}:`, y)
                        return
                      }
                    }),
                  )
                } catch (b) {
                  console.error("[Error fetching commit diffs]", b), (d = [])
                }
                const p = u
                  .map((b, y) => new T$i({ commitHash: b, diff: d[y] }))
                  .filter((b) => b.diff !== void 0)
                ;(await o).continueChatRequestWithCommits({
                  requestId: n,
                  commits: p,
                })
              }
            }
            yield l
          }
        })()
      } catch (r) {
        return console.error("[AI SERVICE ERROR]", r), (async function* () {})()
      }
    }
    webCitationsAndStatusMiddleware(e, t, s) {
      this.cb.setWorkspaceUserPersistentStorage(
        "persistentChatMetadata",
        (a) => a.bubbleId === t && a.tabId === s,
        "webCitations",
        [],
      )
      const n = (a) => {
          console.log("[Adding Web Citations]", a),
            this.cb.setWorkspaceUserPersistentStorage(
              "persistentChatMetadata",
              (l) => l.bubbleId === t && l.tabId === s,
              "webCitations",
              (l) => [...(l ?? []), ...a.references],
            )
        },
        r = (a) => {
          this.cb.setWorkspaceUserPersistentStorage(
            "persistentChatMetadata",
            (l) => l.bubbleId === t && l.tabId === s,
            "statusUpdates",
            a,
          )
        }
      return (async function* () {
        for await (const a of e)
          a !== null &&
            typeof a == "object" &&
            "webCitation" in a &&
            a.webCitation !== void 0 &&
            a.webCitation !== null &&
            n(a.webCitation),
            a !== null &&
              typeof a == "object" &&
              "statusUpdates" in a &&
              a.statusUpdates !== void 0 &&
              a.statusUpdates !== null &&
              r(a.statusUpdates),
            yield a
      })()
    }
    intermediateChunkMiddleware(e, t, s) {
      const n = () => {
        this.cb.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          (l) => l.bubbleId === t && l.tabId === s,
          "intermediateChunks",
          [],
        )
      }
      n()
      const r = (l) => {
        this.cb.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          (c) => c.bubbleId === t && c.tabId === s,
          "intermediateSectionType",
          l,
        )
      }
      r()
      const o = (l, c) => {
        const h =
            this.cb.workspaceUserPersistentStorage.persistentChatMetadata.find(
              (w) => w.bubbleId === t && w.tabId === s,
            )?.intermediateSectionType,
          u =
            c.chunkType === hk.CODEBASE
              ? "codebase"
              : c.chunkType === hk.LONG_FILE
                ? "long-file"
                : "docs"
        h !== u && n(), r(u)
        const d =
          this.cb.workspaceUserPersistentStorage.persistentChatMetadata.find(
            (w) => w.bubbleId === t && w.tabId === s,
          )
        if (d === void 0) return
        let g = d.intermediateChunks ?? []
        const p = (w, C) =>
          w.startLine === C.startLine && w.fileName === C.fileName
        let m = g.findIndex((w) => p(w.chunkIdentity, c))
        m === -1 && (m = g.length)
        const b = g.find((w) => p(w.chunkIdentity, c))
        g = [...g.filter((w) => !p(w.chunkIdentity, c))]
        const y = {
          chunkIdentity: b?.chunkIdentity ?? c,
          completeText: (b?.completeText ?? "") + l,
        }
        g.splice(m, 0, y),
          this.cb.setWorkspaceUserPersistentStorage(
            "persistentChatMetadata",
            (w) => w.bubbleId === t && w.tabId === s,
            "intermediateChunks",
            g,
          )
      }
      return (async function* () {
        for await (const l of e)
          l !== null &&
            typeof l == "object" &&
            "isBigFile" in l &&
            l.isBigFile &&
            r("long-file"),
            l !== null &&
              typeof l == "object" &&
              "chunkIdentity" in l &&
              l.chunkIdentity !== void 0 &&
              o(l.intermediateText ?? "", l.chunkIdentity),
            yield l
      })()
    }
    updateRepoQueryWithStreamedResults(e, t) {
      return ({ response: s, removeHyde: n = !1 }) => {
        this.lb.setChatData(
          "tabs",
          (r, o) => r.tabId === e,
          "bubbles",
          (r, o) => r.id === t,
          (r) => {
            if (r.type === dc.USER_CHAT) return r
            let o
            if (
              (r?.contextData?.hydeResults !== void 0
                ? (o = JSON.parse(JSON.stringify(r.contextData.hydeResults)))
                : (o = { reasoning: "", queries: [] }),
              n)
            )
              return {
                ...r,
                contextData: { ...r.contextData, hydeResults: void 0 },
              }
            if (s === void 0)
              return {
                ...r,
                contextData: {
                  ...r.contextData,
                  hydeResults: { reasoning: "", queries: [] },
                },
              }
            if (
              (s.queryOrReasoning.case === "reasoning" &&
                (o.reasoning += s.queryOrReasoning.value),
              s.queryOrReasoning.case === "query")
            ) {
              const { index: a, partialQuery: l } = s.queryOrReasoning.value
              a == o.queries.length &&
                o.queries.push({ text: "", globsNewLineSeparated: "" }),
                l.case === "glob"
                  ? (o.queries[a].globsNewLineSeparated += l.value)
                  : l.case === "text" && (o.queries[a].text += l.value)
            }
            return { ...r, contextData: { ...r.contextData, hydeResults: o } }
          },
        )
      }
    }
    getLongContextTokenLimit(e, t) {
      return e ?? (t === "cursor-long-context" ? 14e4 : void 0)
    }
    async reportGenerationFeedback(e, t, s) {
      await (
        await this.aiClient()
      ).reportGenerationFeedback({ requestId: e, feedbackType: t, comment: s })
    }
    async streamChatContext(e, t, s, n, r = ew.keyword) {
      const [o, a] = this.registerNewGeneration({
        metadata: t,
        generationUUID: s,
      })
      let l = !1
      a.signal.addEventListener("abort", () => {
        l = !0
      })
      const c = await this.getCurrentFileInfo()
      this.cb.setWorkspaceUserPersistentStorage(
        "persistentChatMetadata",
        ({ bubbleId: at, tabId: we }) => at === t.bubbleId && we === t.tabId,
        (at) => {
          const we = { ...at }
          return (
            (we.predictedContext = {
              usedDocs: [],
              usedCodebase: {},
              usedCurrentFile:
                c && n?.removeAllContext !== !0
                  ? { relativeFilePath: c.relativeWorkspacePath }
                  : void 0,
            }),
            we
          )
        },
      )
      const h = this.Z.getChatDesiredTokenLimit(),
        u = (at) => {
          this.lb.setChatData(
            "tabs",
            (we, vt) => we.tabId === t.tabId,
            "bubbles",
            (we, vt) => we.id === t.aiBubbleId,
            (we) => ({ ...we, repoStep: at, searchTypeIfCodebaseQuery: r }),
          )
        }
      let d = performance.now()
      this.db.useCodebaseContext(t.bubbleId, t.tabId)
      const g = r === ew.keyword,
        m = this.sb(e).length === 0 && e.length > 2
      let b
      for (const [at, we] of [...e.entries()].reverse())
        if (we.type === fs.HUMAN && we.text !== "") {
          b = e[at].text
          break
        }
      if (b === void 0) {
        const at = this.cb
        return (async function* () {
          yield "You don't seem to have provided any request in your last message. Please type something and try again.",
            at.setNonPersistentStorage("inprogressAIGenerations", (we) =>
              we.filter((vt) => vt.generationUUID !== s),
            )
        })()
      }
      this.N.publicLogCapture("Submitted freeform context"),
        this.N.publicLogCapture("Submitted Prompt context")
      const y =
        n?.overrideModelDetails ||
        this.getModelDetails({ specificModelField: "regular-chat" })
      this.N.publicLogCapture("submitted.freeformcontext", { model: y.modelName })
      let w = e
        .map((at, we) => (at.text !== "" ? at.text : null))
        .filter((at) => at !== null).join(`
  `)
      const C = 4e3 * 3
      w.length > C && (w = w.slice(w.length - C))
      const S = e.filter((at) => at.type === fs.HUMAN).reverse()[0]
      let x = []
      r === ew.vector
        ? (x = [{ text: w, globsNewLineSeparated: "" }])
        : (x = [{ text: S.text, globsNewLineSeparated: "" }])
      let k,
        E = []
      this.decrementBubbleTimesLeft()
      const D =
        y.modelName === "cursor-long-context" || (t.longContextModeEnabled ?? !1)
      if (
        (console.info("Time to get model details", performance.now() - d),
        (d = performance.now()),
        g)
      ) {
        const at = this.updateRepoQueryWithStreamedResults(
          t.tabId,
          t.aiBubbleId ?? "",
        )
        at({}), u(ov.GeneratingQueries)
        try {
          for await (const lt of this.aiQueryV2(e, r, m, t)) {
            if (l) throw new Error("Aborted")
            at({ response: lt })
          }
        } catch (lt) {
          throw (at({ removeHyde: !0 }), lt)
        }
        const vt = this.lb.chatData.tabs
          .find(({ tabId: lt }) => lt === t.tabId)
          ?.bubbles.find(({ id: lt }) => lt === t.aiBubbleId)
          ?.contextData?.hydeResults
        vt?.queries !== void 0 &&
          vt?.queries.length > 0 &&
          (x = vt.queries.map((lt) => ({ ...lt, text: lt.text.trim() })))
      }
      if (
        (console.info("Time to get hyde results", performance.now() - d),
        (d = performance.now()),
        l)
      )
        throw new Error("Aborted")
      u(ov.SearchingFiles)
      let P = []
      ew.vector
      const L = !1
      this.N.publicLogCapture("Context Chat - Vector Search")
      const A = D
          ? { topK: 1e3, minK: 80, finalK: 1e3 }
          : {
              topK: Math.max(100, (L ? (h ?? 0) : 0) / 100),
              minK: Math.max(20, (L ? (h ?? 0) : 0) / 500),
              finalK: Math.max(200, (L ? (h ?? 0) : 0) / 50),
            },
        H =
          this.sb(e).length > 0
            ? "{" +
              this.sb(e)
                .map((at) => `${at}`)
                .join(",") +
              "}"
            : void 0,
        B = await this.eb.searchMultipleQueries(x, A, {
          newlineSepGlobFilter: n?.globFilter ?? H,
        })
      if (l) throw new Error("Aborted")
      if (
        ((P = B.map((at) => at.codeBlock).filter(
          (at) => at !== void 0 && at.contents.length < 2e4,
        )),
        (E = D ? await this.getLongContextFileSearchResults(B, e) : gPt(B)),
        l)
      )
        throw new Error("Aborted")
      d = performance.now()
      const z = D
          ? { case: "fileSearchResults", value: { results: E } }
          : { case: "codeSearchResults", value: { results: B } },
        K = this.lb.getRescorerFromEmbeddingsResults(z),
        Q = this.getLongContextTokenLimit(t.tokenLimit, y.modelName),
        { contextResults: se, conversationHistory: he } = D
          ? await this.lb.fitLongContextDataIntoTokenLimit(
              { conversationHistory: e, contextResults: z },
              Q,
              () => K,
            )
          : { contextResults: z, conversationHistory: e }
      if (
        ((k = new RVe({
          canHandleFilenamesAfterLanguageIds: !0,
          workspaceRootPath: this.J.getWorkspaceRootPath(),
          conversation: he,
          modelDetails: y,
          explicitContext: await this.getExplicitContext(),
          rerankResults: !0,
          rerankResultsV2:
            this.cb.workspaceUserPersistentStorage.shouldRerankByDefault,
          contextResults: se,
          longContextMode: D,
          ...(await this.addAdditionalContext(t)),
          isEval: t.isEval,
          runnableCodeBlocks:
            this.cb.applicationUserPersistentStorage.runnableCodeBlocksEnabled ??
            !1,
          requestId: s,
        })),
        console.info("Time to search", performance.now() - d),
        (d = performance.now()),
        this.S.executeCommand(QDi, t.tabId, t.bubbleId, P),
        this.db.updateGlobalContext(t, E),
        this.addToPromptHistory({ prompt: b, commandType: JC.CHAT }),
        console.info("Time to set file results", performance.now() - d),
        (d = performance.now()),
        this.cb.applicationUserPersistentStorage.checklistState
          ?.doneCommandEnter !== !0)
      ) {
        const at = this.cb.applicationUserPersistentStorage.checklistState
        this.cb.setApplicationUserPersistentStorage("checklistState", (we) => ({
          ...(we ?? {}),
          doneCommandEnter: !0,
        }))
      }
      if (l) throw new Error("Aborted")
      u(ov.GeneratingTokens)
      const ae = await this.aiClient()
      if (l) throw new Error("Aborted")
      let de = ae.streamChatContext(k, { signal: a.signal, headers: wn(s) })
      const Ee = Va.typeName + "/" + Va.methods.streamChatContext.name
      this.lb.setChatData(
        "tabs",
        ({ tabId: at }) => at === t.tabId,
        "bubbles",
        ({ id: at }) => at === t.aiBubbleId,
        (at) =>
          at.text && at.text === dc.USER_CHAT ? at : { ...at, requestId: s },
      ),
        (d = performance.now())
      const ke = this.streamContextResponse({
        modelDetails: y,
        generationUUID: s,
        streamer: this.webCitationsAndStatusMiddleware(
          this.commitNotesMiddleware(
            this.docsCitationsMiddleware(
              this.intermediateChunkMiddleware(N1(de), t.bubbleId, t.tabId),
              t.bubbleId,
              t.tabId,
            ),
            t.bubbleId,
            t.tabId,
            s,
          ),
          t.bubbleId,
          t.tabId,
        ),
        rethrowCancellation: !0,
        rerun: n?.rerun,
        streamerURL: Ee,
      })
      if (l) throw new Error("Aborted")
      const ze = [
        ...k.conversation.flatMap((at) => at.codebaseContextChunks ?? []),
        ...P,
      ].flatMap((at) => ({
        relativeWorkspacePath: at.relativeWorkspacePath,
        lines: at.detailedLines.flatMap((we) => ({
          value: we.text,
          lineNumber: we.lineNumber,
        })),
      }))
      if (
        (ze.push(
          ...k.conversation
            .map((at) => (at.attachedCodeChunks ? at.attachedCodeChunks : []))
            .flat()
            .map((at) => ({
              relativeWorkspacePath: at.relativeWorkspacePath,
              lines: at.lines.map((we, vt) => ({
                value: we,
                lineNumber: vt + at.startLineNumber,
              })),
            })),
        ),
        k.currentFile &&
          ze.push({
            relativeWorkspacePath: k.currentFile.relativeWorkspacePath,
            lines: k.currentFile.contents
              .split(
                `
  `,
              )
              .map((at, we) => ({ value: at, lineNumber: we + 1 })),
          }),
        this.nb.registerReferenceableCodeBlocksForGeneration(s, ze),
        l)
      )
        throw new Error("Aborted")
      return ke
    }
    async getLongContextFileSearchResults(e, t) {
      const s = {}
      for (const o of e) {
        const a = o.codeBlock?.relativeWorkspacePath ?? ""
        s[a] || (s[a] = 0), (s[a] = Math.max(s[a], o.score))
      }
      const n = async (o) => {
        try {
          return (
            await this.X.readFile(this.U.resolveRelativePath(o))
          ).value.toString()
        } catch {
          return "<error reading file>"
        }
      }
      return (
        await Promise.all(
          Object.entries(s).map(
            async ([o, a]) =>
              new WSt({
                file: { relativeWorkspacePath: o, contents: await n(o) },
                score: a,
              }),
          ),
        )
      ).sort((o, a) => a.score - o.score)
    }
    async *streamContextResponse({
      modelDetails: e,
      streamer: t,
      generationUUID: s,
      rethrowCancellation: n,
      rerun: r,
      streamerURL: o,
      failSilently: a = !1,
    }) {
      let l = []
      try {
        const c = await t.next().then((d) => d.value),
          h = "usedCode" in c ? c.usedCode : void 0
        h !== void 0 && (l = h.codeResults),
          yield* this.streamResponseText({
            streamer: t,
            streamerURL: o,
            generationUUID: s,
            modelDetails: e,
            rethrowCancellation: n,
            rerun: r,
            failSilently: a,
            source: "chat",
          })
      } catch (c) {
        if (
          (this.cb.setNonPersistentStorage("inprogressAIGenerations", (h) =>
            h.filter((u) => u.generationUUID !== s),
          ),
          c.code !== Tg.Canceled && console.error(c),
          !(c instanceof du) ||
            (c.code === Tg.Canceled ||
              a ||
              this.$.handleError(c, e, s, o, "chat", r),
            n))
        )
          throw c
      }
    }
    async streamCursorTutor(e, t, s) {
      let n
      for (const [d, g] of [...e.entries()].reverse())
        if (g.type === fs.HUMAN && g.text !== "") {
          n = e[d].text
          break
        }
      if (n === void 0)
        return (async function* () {
          yield "You don't seem to have provided any request in your last message. Please type something and try again."
        })()
      this.decrementBubbleTimesLeft(),
        this.N.publicLogCapture("Submitted cursor tutor freeform"),
        this.N.publicLogCapture("Submitted Prompt")
      const r =
        s?.overrideModelDetails ||
        this.getModelDetails({ specificModelField: "regular-chat" })
      this.N.publicLogCapture("submitted.freeform", { model: r.modelName })
      const [o, a] = this.registerNewGeneration({ metadata: t }),
        l = new $$i({ conversation: e, modelDetails: r })
      this.addToPromptHistory({ prompt: n, commandType: JC.CHAT })
      const h = (await this.aiClient()).streamCursorTutor(l, {
          signal: a.signal,
          headers: wn(o),
        }),
        u = Va.typeName + "/" + Va.methods.streamCursorTutor.name
      return this.streamResponseText({
        modelDetails: r,
        generationUUID: o,
        streamer: N1(h),
        streamerURL: u,
        rethrowCancellation: !0,
        rerun: s?.rerun,
        source: "chat",
      })
    }
    async streamPriomptPrompt(e, t, s, n) {
      const r = JSON.stringify(t),
        o = await this.aiClient(),
        a = new A$i({ promptProps: r, promptPropsTypeName: s.typeName }),
        [l, c] = this.registerNewGeneration({ metadata: n }),
        h = o.streamPriomptPrompt(a, { signal: c.signal, headers: wn(l) }),
        u = Va.typeName + "/" + Va.methods.streamPriomptPrompt.name
      return this.streamResponseText({
        streamer: N1(h),
        streamerURL: u,
        generationUUID: l,
        source: "other",
        modelDetails: this.getModelDetails({
          specificModelField: "regular-chat",
        }),
        rethrowCancellation: !0,
      })
    }
    async addAdditionalContext(e) {
      const t =
          this.cb.workspaceUserPersistentStorage.persistentChatMetadata.find(
            (l) => l.bubbleId === e.bubbleId && l.tabId === e.tabId,
          ),
        s = t?.predictedContext,
        n = t?.injectedContext,
        r = this.lb.getBubbleData(e.tabId, e.bubbleId),
        o = {}
      if (
        ((s === void 0 && n === void 0) ||
          (s?.usedCurrentFile || n?.usedCurrentFile,
          s?.usedDocs &&
            (o.documentationIdentifiers = s.usedDocs.map((l) => l.docId))),
        n !== void 0 && n.usedDocs)
      ) {
        const l = new Set([
          ...(o.documentationIdentifiers || []),
          ...n.usedDocs.map((c) => c.docId),
        ])
        o.documentationIdentifiers = [...l]
      }
      return (
        r?.type === dc.USER_CHAT &&
          r?.useLinterErrors &&
          (o.linterErrors = await J9i(this.hb, this.U, this)),
        (o.currentFile = e.currentFile),
        (o.summary = e.summaryText),
        (o.summaryUpUntilIndex = e.summaryUpUntilIndex),
        (o.codeBlocks = e.codeBlocks),
        (o.isBash = e.isBash),
        (o.conversationId = e.tabId),
        (o.canHandleFilenamesAfterLanguageIds = !0),
        o
      )
    }
    async getEffectiveTokenLimit(e) {
      const n = e.modelName
      if (!n) return 2e5
      const r = this.rb.get(n)
      if (r) {
        const [a, l] = r
        if (l > new Date()) return a
      }
      const o = await this.aiClient()
      try {
        const l = (await o.getEffectiveTokenLimit(new M$i({ modelDetails: e })))
          .tokenLimit
        return this.rb.set(n, [l, new Date(Date.now() + 864e5)]), l
      } catch (a) {
        return console.error(a), 2e5
      }
    }
    async getChatSummary(e) {
      const t =
        e.options?.overrideModelDetails ||
        this.getModelDetails({ specificModelField: "regular-chat" })
      this.N.publicLogCapture("submitted.freeform", { model: t.modelName })
      const s = new ZN({
        workspaceRootPath: this.J.getWorkspaceRootPath(),
        conversation: e.conversationHistory,
        modelDetails: t,
        explicitContext: await this.getExplicitContext(),
        requestId: e.generationUUID,
        ...(await this.addAdditionalContext(e.generationMetadata)),
      })
      return await (
        await this.aiClient()
      ).summarizeConversation(s, { headers: wn(e.generationUUID) })
    }
    async makeStreamChatRequest(e, t) {
      const s =
          e.options?.overrideModelDetails ||
          this.getModelDetails({ specificModelField: "regular-chat" }),
        r = !0 && e.options?.useWeb ? "full_search" : void 0,
        { chatType: o } = e.generationMetadata,
        a =
          e.generationMetadata.longContextModeEnabled &&
          (o === "chat" || o === "intentChat" || o === "context"),
        { conversationHistory: l, generationMetadata: c } = e,
        h = async () => {
          let b
          if (a) {
            let w = l
              .map((D, P) => (D.text !== "" ? D.text : null))
              .filter((D) => D !== null).join(`
  `)
            const C = 4e3 * 3
            w.length > C && (w = w.slice(w.length - C))
            const S = [{ text: w, globsNewLineSeparated: "" }],
              x = a
                ? { topK: 1e3, minK: 80, finalK: 1e3 }
                : { topK: 100, minK: 20, finalK: 200 },
              k = await this.eb.searchMultipleQueries(S, x, {}),
              E = u ? await this.getLongContextFileSearchResults(k, l) : gPt(k)
            b = u
              ? { case: "fileSearchResults", value: { results: E } }
              : { case: "codeSearchResults", value: { results: k } }
          }
          return this.lb.getRescorerFromEmbeddingsResults(b)
        },
        u = s.modelName === "cursor-long-context" || c.longContextModeEnabled,
        d = this.getLongContextTokenLimit(c.tokenLimit, s.modelName)
      if (u && !t.isForActualRequestSoCanBeSlow) return "wouldBeTooSlow"
      const { conversationHistory: g } = u
          ? await this.lb.fitLongContextDataIntoTokenLimit(
              { conversationHistory: l },
              d,
              h,
            )
          : { conversationHistory: l },
        p = await this.addAdditionalContext(e.generationMetadata)
      return new ZN({
        workspaceRootPath: this.J.getWorkspaceRootPath(),
        conversation: g,
        modelDetails: s,
        explicitContext: await this.getExplicitContext(),
        requestId: e.generationUUID,
        allowLongFileScan: e.options?.allowLongFileScan ?? !1,
        canHandleFilenamesAfterLanguageIds: !0,
        ...p,
        useWeb: r,
        debugInfo: e.generationMetadata.debugInfo,
        quotes: e.generationMetadata.quotes,
        externalLinks: e.generationMetadata.externalLinks,
        longContextMode: a,
        commitNotes: e.generationMetadata.commitNotes,
        isEval: e.generationMetadata.isEval,
        runnableCodeBlocks:
          this.cb.applicationUserPersistentStorage.runnableCodeBlocksEnabled ??
          !1,
        shouldCache: e.generationMetadata.shouldCache,
      })
    }
    getFilteredOutline(e, t, s) {
      const n = [4, 5, 7, 8, 9, 10, 11, 13, 21]
      return e
        .map((r) => {
          if (
            !(r.kind === 11 && r.name.includes("callback")) &&
            n.includes(r.kind) &&
            !s.has(r)
          ) {
            s.add(r)
            let o = t.getLineContent(r.range.startLineNumber)
            if (
              !o.endsWith("{") &&
              (r.kind === 5 || r.kind === 8 || r.kind === 11 || r.kind === 4)
            ) {
              let c = r.range.startLineNumber
              for (
                ;
                c <= r.range.endLineNumber && !t.getLineContent(c).endsWith("{");

              )
                c++
              if (c <= r.range.endLineNumber) {
                const h = {
                  startLineNumber: r.range.startLineNumber,
                  startColumn: 1,
                  endLineNumber: c,
                  endColumn: t.getLineMaxColumn(c),
                }
                o = t.getValueInRange(h)
              }
            }
            const a = o.match(/^\s*/)?.[0] ?? "",
              l = o.endsWith("{") ? `${a}}` : void 0
            return {
              ...r,
              children: this.getFilteredOutline(r.children ?? [], t, s),
              text: o,
              endingBrace: l,
            }
          }
        })
        .filter((r) => r !== void 0)
    }
    async _streamChat(e) {
      const [t, s] = this.registerNewGeneration({
        metadata: e.generationMetadata,
        generationUUID: e.generationUUID,
      })
      let n = ""
      for (const [m, b] of [...e.conversationHistory.entries()].reverse())
        if (b.type === fs.HUMAN && b.text !== "") {
          n = e.conversationHistory[m].text
          break
        }
      this.decrementBubbleTimesLeft(),
        this.N.publicLogCapture("Submitted freeform"),
        this.N.publicLogCapture("Submitted Prompt")
      const r =
          e.options?.overrideModelDetails?.modelName === "cursor-long-context" ||
          e.generationMetadata.longContextModeEnabled,
        o =
          e.options?.overrideModelDetails ||
          this.getModelDetails({
            longContextModeEnabled: r,
            specificModelField: "regular-chat",
          })
      this.N.publicLogCapture("submitted.freeform", { model: o.modelName })
      const a = {
          ...e.generationMetadata,
          shouldCache: this.cb.applicationUserPersistentStorage.cacheChatPrompts,
        },
        l = await this.makeStreamChatRequest(
          { ...e, generationMetadata: a },
          { isForActualRequestSoCanBeSlow: !0 },
        )
      if (l === "wouldBeTooSlow") throw new Error("should never happen!!")
      this.addToPromptHistory({ prompt: n, commandType: JC.CHAT }),
        this.O.recordChatEvent({
          requestId: e.generationUUID,
          eventType: {
            case: "submitPrompt",
            value: { prompt: l.conversation[l.conversation.length - 1].text },
          },
        })
      const c = await this.aiClient()
      let h
      l.useWeb === "full_search"
        ? (h = c.streamChatWeb(l, {
            signal: s.signal,
            headers: wn(e.generationUUID),
          }))
        : (h = c.streamChat(l, {
            signal: s.signal,
            headers: wn(e.generationUUID),
          }))
      const u = Va.typeName + "/" + Va.methods.streamChat.name
      this.lb.setChatData(
        "tabs",
        ({ tabId: m }) => m === e.generationMetadata.tabId,
        "bubbles",
        ({ id: m }) => m === e.generationMetadata.aiBubbleId,
        (m) =>
          m.text === dc.USER_CHAT ? m : { ...m, requestId: e.generationUUID },
      )
      const d = this.streamResponseText({
          modelDetails: o,
          generationUUID: e.generationUUID,
          source: "chat",
          streamer: this.webCitationsAndStatusMiddleware(
            this.commitNotesMiddleware(
              this.docsCitationsMiddleware(
                this.intermediateChunkMiddleware(
                  N1(h),
                  e.generationMetadata.bubbleId,
                  e.generationMetadata.tabId,
                ),
                e.generationMetadata.bubbleId,
                e.generationMetadata.tabId,
              ),
              e.generationMetadata.bubbleId,
              e.generationMetadata.tabId,
              e.generationUUID,
            ),
            e.generationMetadata.bubbleId,
            e.generationMetadata.tabId,
          ),
          streamerURL: u,
          rethrowCancellation: !0,
          rerun: e.options?.rerun,
          failSilently: e.options?.failSilently,
        }),
        p = l.conversation
          .flatMap((m) => m.codebaseContextChunks ?? [])
          .flatMap((m) => ({
            relativeWorkspacePath: m.relativeWorkspacePath,
            lines: m.detailedLines.flatMap((b) => ({
              value: b.text,
              lineNumber: b.lineNumber,
            })),
          }))
      return (
        p.push(
          ...l.conversation
            .map((m) => (m.attachedCodeChunks ? m.attachedCodeChunks : []))
            .flat()
            .map((m) => ({
              relativeWorkspacePath: m.relativeWorkspacePath,
              lines: m.lines.map((b, y) => ({
                value: b,
                lineNumber: y + m.startLineNumber,
              })),
            })),
        ),
        l.currentFile &&
          p.push({
            relativeWorkspacePath: l.currentFile.relativeWorkspacePath,
            lines: l.currentFile.contents
              .split(
                `
  `,
              )
              .map((m, b) => ({ value: m, lineNumber: b + 1 })),
          }),
        this.nb.registerReferenceableCodeBlocksForGeneration(e.generationUUID, p),
        d
      )
    }
    async streamInlineLongCompletion(e, t, s, n, r) {
      this.N.publicLogCapture("Submitted Long Completion"),
        this.N.publicLogCapture("Submitted Prompt")
      const o = r ?? this.ab.getCurrentFileInfoSyncWithoutDataframes(),
        a =
          n?.overrideModelDetails ||
          this.getModelDetails({ specificModelField: "cmd-k" }),
        [l, c] = this.registerNewGeneration({
          metadata: { type: void 0 },
          generationUUID: s,
        })
      let h = await this.ib.getFilteredRecentChunks(10)
      const u = new W3i({
        currentFile: n?.removeAllContext !== !0 ? o : void 0,
        contextBlocks:
          h.length === 0
            ? []
            : [
                {
                  contextType: WJ.RECENT_LOCATIONS,
                  blocks: h.map((b) => mPt(b)),
                },
              ],
        modelDetails: a,
      })
      this.decrementBubbleTimesLeft()
      const g = (await this.aiClient()).streamInlineLongCompletion(u, {
          signal: c.signal,
          headers: wn(s),
        }),
        p = Va.typeName + "/" + Va.methods.streamInlineLongCompletion.name,
        m = this.streamResponseText({
          streamer: N1(g),
          streamerURL: p,
          generationUUID: s,
          source: "other",
          modelDetails: a,
          rethrowCancellation: !0,
        })
      return this.splitStreamSeparateNewLineChars(m)
    }
    async streamBackgroundEdit(e, t, s, n, r, o) {
      this.N.publicLogCapture("Submitted background edit")
      const a =
        o?.overrideModelDetails ||
        this.getModelDetails({ specificModelField: "cmd-k" })
      this.N.publicLogCapture("submitted.backgroundedit", { model: a.modelName })
      const [l, c] = this.registerNewGeneration({
          metadata: { type: void 0 },
          generationUUID: r,
        }),
        h = new K$i({
          currentFile: e,
          workspaceRootPath: this.J.getWorkspaceRootPath(),
          explicitContext: await this.getExplicitContext(),
          gitDiff: t,
          modelDetails: a,
          stop: s,
          importLineInDiff: n,
        }),
        d = (await this.aiClient()).streamBackgroundEdit(h, {
          signal: c.signal,
          headers: wn(r),
        }),
        g = Va.typeName + "/" + Va.methods.streamBackgroundEdit.name,
        p = this.streamResponseText({
          streamer: N1(d),
          streamerURL: g,
          generationUUID: r,
          modelDetails: a,
          source: "other",
          rethrowCancellation: !0,
          failSilently: !0,
        })
      return this.streamLines(p)
    }
    async streamNewLintRule(e) {
      const t = this.cb.applicationUserPersistentStorage.lintRules,
        s = new z$i({ dismissedBug: e, currentRules: t }),
        n = await this.aiClient(),
        r = rt(),
        [o, a] = this.registerNewGeneration({
          metadata: void 0,
          generationUUID: r,
        }),
        l = n.streamNewLintRule(s, { signal: a.signal, headers: wn(r) }),
        c = "/aiserver.v1.AiService/" + n.streamNewLintRule.name
      return this.streamResponseText({
        streamer: N1(l),
        streamerURL: c,
        generationUUID: r,
        rethrowCancellation: !0,
        source: "other",
        failSilently: !0,
      })
    }
    async streamLint(e, t, s, n, r) {
      const o =
        r?.overrideModelDetails ||
        this.getModelDetails({ specificModelField: "cmd-k" })
      this.N.publicLogCapture("submitted.lint", { model: o.modelName })
      const [a, l] = this.registerNewGeneration({
          metadata: void 0,
          generationUUID: n,
        }),
        c = new r2i({
          currentFile: e,
          workspaceRootPath: this.J.getWorkspaceRootPath(),
          explicitContext: await this.getExplicitContext(),
          modelDetails: o,
          badNotifications: t,
          lintRules: s,
        }),
        u = (await this.aiClient()).streamLint(c, {
          signal: l.signal,
          headers: wn(n),
        }),
        d = Va.typeName + "/" + Va.methods.streamLint.name
      return this.streamResponseText({
        streamer: N1(u),
        streamerURL: d,
        generationUUID: n,
        modelDetails: o,
        rethrowCancellation: !0,
        source: "other",
        failSilently: !0,
      })
    }
    async streamAiPreviewSummary({ realContext: e, isDetailed: t }) {
      const s = this.getModelDetails({ specificModelField: "regular-chat" }),
        n = await this.getCurrentFileInfo(),
        r = rt(),
        o = new q3i({
          currentFile: n,
          modelDetails: s,
          intent: {
            mainSymbolsToAnalyzeFromGoToDef: e?.definitions,
            mainSymbolHoverDetails: e?.hoverDetails,
            mainSymbolsToAnalyzeFromImplementations: e?.implementations,
          },
          isDetailed: t,
        }),
        [a, l] = this.registerNewGeneration({
          metadata: void 0,
          generationUUID: r,
        }),
        h = (await this.aiClient()).streamAiPreviews(o, {
          signal: l.signal,
          headers: wn(r),
        }),
        u = Va.typeName + "/" + Va.methods.streamAiPreviews.name
      return this.streamResponseText({
        streamer: N1(h),
        streamerURL: u,
        generationUUID: r,
        modelDetails: s,
        source: "other",
        rethrowCancellation: !0,
      })
    }
    async *streamLines(e) {
      let t = ""
      for await (const s of e)
        for (
          t += s;
          t.includes(`
  `) ||
          t.includes(`\r
  `);

        ) {
          let n = t.search(/\r?\n/)
          yield t.slice(0, n), (t = t.slice(n + (t[n] === "\r" ? 2 : 1)))
        }
      for (
        ;
        t.includes(`
  `) ||
        t.includes(`\r
  `);

      ) {
        let s = t.search(/\r?\n/)
        yield t.slice(0, s), (t = t.slice(s + (t[s] === "\r" ? 2 : 1)))
      }
      yield t.replace("\r", "")
    }
    async *splitStreamSeparateNewLineChars(e) {
      for await (let t of e)
        if (t !== "") {
          for (
            ;
            t.includes(`
  `) ||
            t.includes(`\r
  `);

          ) {
            let s = t.search(/\r?\n/)
            yield t.slice(0, s),
              yield t[s] === "\r"
                ? `\r
  `
                : `
  `,
              (t = t.slice(s + (t[s] === "\r" ? 2 : 1)))
          }
          yield t
        }
    }
    async streamGPTFourEdit(e, t, s, n, r, o, a) {
      const l = n ?? this.ab.getCurrentFileInfoSyncWithoutDataframes(),
        c =
          s?.overrideModelDetails ||
          this.getModelDetails({ specificModelField: "cmd-k" })
      this.N.publicLogCapture("submitted.gpt4edit", { model: c.modelName })
      const [h, u] = this.registerNewGeneration({
        metadata: void 0,
        generationUUID: t,
      })
      e =
        (r ?? []).map(
          (y) => `\`\`\`${y.uri.path}
  ${y.rawText}
  \`\`\`
  `,
        ) + e
      const d = new G$i({
        query: e,
        currentFile: l,
        workspaceRootPath: this.J.getWorkspaceRootPath(),
        modelDetails: c,
        explicitContext: await this.getExplicitContext(),
        linterErrors: a,
        codeBlocks: [],
      })
      this.addToPromptHistory({ prompt: e, commandType: JC.GPT_FOUR_EDIT })
      const p = (await this.aiClient()).streamGPTFourEdit(d, {
          signal: u.signal,
          headers: wn(t),
        }),
        m = Va.typeName + "/" + Va.methods.streamGPTFourEdit.name,
        b = this.streamResponseText({
          streamer: N1(p),
          streamerURL: m,
          generationUUID: t,
          modelDetails: c,
          source: "other",
          rethrowCancellation: !0,
        })
      return this.streamLines(b)
    }
    async fakeInlineStreamEdits() {
      return {
        [Symbol.asyncIterator]() {
          let t = 0
          return {
            next() {
              return t < 3
                ? Promise.resolve({ value: { newLine: "hi" + t }, done: !1 })
                : Promise.resolve({ value: { newLine: "hi done" }, done: !0 })
            },
          }
        },
      }
    }
    async getSearch(e) {
      return (
        await (
          await this.aiClient()
        ).getSearch({
          repositories: this.repositories.map((n) => n.repoInfo),
          query: e,
          topK: 15,
        })
      ).results
    }
    async insertCodeCellAndRun(e) {
      const t = ao(this.L.activeEditorPane)
      if (!t || !t.hasModel()) return
      let s = null
      t.focus()
      const n = t.getActiveCell()
      if (n) {
        const r = t.getCellIndex(n)
        s = PI(this.M, t, r, ks.Code, "below", e, !0)
      } else {
        const r = t.getFocus(),
          o = Math.max(r.end - 1, 0)
        s = PI(this.M, t, o, ks.Code, "below", e, !0)
      }
      s &&
        (await t.focusNotebookCell(s, "container"),
        await t.executeNotebookCells([s]))
    }
    get controlProvider() {
      return this.ab.controlProvider
    }
    registerControlProvider(e, t) {
      return this.ab.registerControlProvider(e, t)
    }
    sb(e) {
      return e
        .flatMap((s) => s.attachedFolders)
        .map((s) => `${s.startsWith("/") ? s.substring(1) : s}/**`)
    }
    async setChatInjectedContext(e, t) {
      this.db.addPersistentChatMetadataIfNotExists(e.bubbleId, e.tabId)
      const s = await this.getCurrentFileInfo(),
        n = this.lb.chatData.tabs.find((o) => o.tabId === e.tabId),
        r = n?.bubbles.find((o) => o.id === e.bubbleId && o.type === "user")
      if (!n || !r) throw new Error("Tab or bubble not found")
      this.cb.setWorkspaceUserPersistentStorage(
        "persistentChatMetadata",
        ({ bubbleId: o, tabId: a }) => o === e.bubbleId && a === e.tabId,
        (o) => {
          const a = { ...o }
          ;(a.predictedContext = { usedDocs: [] }),
            r.usesCodebase && (a.predictedContext.usedCodebase = {}),
            t?.removeAllContext !== !0 &&
              s !== void 0 &&
              (a.predictedContext.usedCurrentFile = {
                relativeFilePath: s.relativeWorkspacePath,
              })
          const l = r.selectedDocs
          return l !== void 0 && (a.predictedContext.usedDocs = l), a
        },
      ),
        this.db.setIntentDetermined(e.bubbleId, e.tabId)
    }
    async streamChat(e, t, s, n) {
      return (
        await this.setChatInjectedContext(t, n),
        this._streamChat({
          conversationHistory: e,
          generationMetadata: t,
          generationUUID: s,
          options: n,
        })
      )
    }
    async warmChatCache(e, t, s, n) {
      await this.setChatInjectedContext(t, n)
      const r = await this.makeStreamChatRequest(
        {
          conversationHistory: e,
          generationMetadata: t,
          generationUUID: s,
          options: n,
        },
        { isForActualRequestSoCanBeSlow: !1 },
      )
      if (r === "wouldBeTooSlow") return
      await (
        await this.aiClient()
      ).warmChatCache(new Z$i({ request: r }), { headers: wn(s) })
    }
    async getSimplePrompt(e, t) {
      const s = await this.aiClient(),
        n = new Q$i({ query: e, answerPlaceholder: t })
      return (await s.getSimplePrompt(n, { headers: wn(rt()) })).result
    }
    async getUsageData() {
      return (
        await (await this.aiClient()).getUserInfo({}, { headers: wn(rt()) })
      ).usage
    }
    async uploadDocumentation(e) {
      return await (
        await this.uploadClient()
      ).uploadDocumentation(e, { headers: wn(rt()) })
    }
    async uploadDocumentationStatus(e) {
      return await (
        await this.uploadClient()
      ).uploadDocumentationStatus(e, { headers: wn(rt()) })
    }
    async getPages(e) {
      const t = await this.uploadClient(),
        s = new z3i(e)
      return await t.getPages(s, { headers: wn(rt()) })
    }
    async computeExampleCodebaseQuestions() {
      if (
        this.cb.nonPersistentStorage.repositoryIndexingStatus?.case !== "synced"
      )
        return []
      try {
        const e = `what's a good and concise question to ask about this codebase? it should be something specific, like "where is X defined and how is it being used". do not use the actual name of X but rewrite it in your own, simple words, concisely. include three completely different questions, about different parts of the codebase, in a markdown numbered list, and say nothing else`,
          t = this.jb.getModels().map((g) => Ob(g.uri.path)),
          n = [...new Set(t)].slice(0, 10)
        n.push("ts"), n.push("py"), n.push("go")
        const r = `{${n.map((g) => `*.${g}`).join(",")}}`,
          o = await this.eb.parallelSearch(
            `what's a good question to ask about this codebase? it should be something specific, like "where is X defined and how is it being used"`,
            100,
            100,
            { globFilter: r },
          )
        if (o.length < 3) return []
        const a = new RVe({
            canHandleFilenamesAfterLanguageIds: !0,
            workspaceRootPath: this.J.getWorkspaceRootPath(),
            conversation: [new Ha({ text: e, type: fs.HUMAN })],
            modelDetails: this.getModelDetails({
              specificModelField: "regular-chat",
            }),
            explicitContext: await this.getExplicitContext(),
            rerankResults: !1,
            rerankResultsV2: !1,
            contextResults: { case: "codeSearchResults", value: { results: o } },
          }),
          c = (await this.aiClient()).streamChatContext(a, { headers: wn(rt()) })
        let h = ""
        for await (const g of c) h += g.text
        return ((g) => {
          const p = /^\d+\.\s+(.*)$/gm
          let m
          const b = []
          for (; (m = p.exec(g)) !== null; ) {
            m.index === p.lastIndex && p.lastIndex++
            const y = m[1] || m[0]
            b.push(y.trim())
          }
          return b
        })(h)
      } catch {
        return []
      }
    }
    async *aiQueryV2(e, t, s, n) {
      const r = await this.aiClient(),
        o = this.getModelDetails({ specificModelField: "regular-chat" }),
        a = rt(),
        l = await this.getCurrentFileInfo(),
        c = await this.eb.getNewRepoInfo(),
        h = new PVe({
          currentFile: l,
          repositoryInfo: c,
          conversation: e,
          workspaceRootPath: this.J.getWorkspaceRootPath(),
          modelDetails: o,
          fasterAndStupider: !1,
          useGlobs: s,
          queryType: t === ew.keyword ? M$.KEYWORDS : M$.EMBEDDINGS,
        }),
        [u, d] = this.registerNewGeneration({ metadata: n, generationUUID: a }),
        g = Va.typeName + "/" + Va.methods.modelQueryV2.name
      yield* this.streamResponse({
        streamer: N1(r.modelQueryV2(h, { signal: d.signal, headers: wn(a) })),
        modelDetails: o,
        streamerURL: g,
        generationUUID: a,
        rethrowCancellation: !0,
        source: "chat",
      })
    }
    async generateCommitMessage(e) {
      return (
        await (
          await this.aiClient()
        ).writeGitCommitMessage(e, { headers: wn(rt()) })
      ).commitMessage
    }
    async aiQuery(e, t) {
      const s = await this.aiClient(),
        n = this.getModelDetails({ specificModelField: "regular-chat" }),
        r = rt(),
        o = await this.getCurrentFileInfo(),
        a = new PVe({
          currentFile: o,
          repositories: this.repositories.map((u) => u.repoInfo),
          conversation: e,
          workspaceRootPath: this.J.getWorkspaceRootPath(),
          modelDetails: n,
          queryType: t === ew.keyword ? M$.KEYWORDS : M$.EMBEDDINGS,
        }),
        [l, c] = this.registerNewGeneration({
          metadata: void 0,
          generationUUID: r,
        })
      return (await s.modelQuery(a, { signal: c.signal, headers: wn(r) })).queries
    }
    async countTokens(e, t) {
      return (await this.aiClient()).countTokens(e, t)
    }
  }
  ;(pPt = __decorate(
    [
      __param(0, A_),
      __param(1, ve),
      __param(2, Hi),
      __param(3, ft),
      __param(4, cppEventLoggerService),
      __param(5, Ti),
      __param(6, Cp),
      __param(7, st),
      __param(8, it),
      __param(9, ue),
      __param(10, nt),
      __param(11, $h),
      __param(12, eg),
      __param(13, NI),
      __param(14, QJ),
      __param(15, et),
      __param(16, ei),
      __param(17, rU),
      __param(18, Md),
      __param(19, Xt),
      __param(20, u0),
      __param(21, mo),
      __param(22, T1),
      __param(23, qi),
      __param(24, Z),
      __param(25, cv),
      __param(26, YC),
      __param(27, Ag),
      __param(28, lU),
    ],
    pPt,
  )),
    Ve(Br, pPt, 1);

  return {
    Br,
    Y6n,
  }
}
