// @ts-check

// 171883
export function createComposerRelated(params) {
  const { cm, ro, D7, Dg, m0, rt, yI, HC, fs, bn, CBi, K$, xR, JJ, r6n, ls, tce, U, yBi, wBi, IBi, op, Re, __decorate, __param, Ti, Ht, Ve, V, et, ei, Gon, Mae, D4i, wt, aU, $I, extUri, bs, jt, At, Z, everythingProviderService, tK, M_, it, nt, Xt, selectedContextService, vk } = params;

  function H8n(i) {
    if (i.type !== "user") return
    const e = cm()
    let t
    ;(i.dropdownAdvancedCodebaseSearchBehavior ||
      i.dropdownAdvancedCodebaseContextOptions ||
      i.advancedCodebaseContextOptions) &&
      (t = {
        searchBehavior:
          i.dropdownAdvancedCodebaseSearchBehavior ||
          i.advancedCodebaseContextOptions?.reranker === ro.LULEA
            ? "reranker"
            : "embeddings",
        options:
          i.advancedCodebaseContextOptions ||
          i.dropdownAdvancedCodebaseContextOptions,
      })
    for (const s of D7) {
      const n = s
      if (Dg(n)) {
        const r = i[n]
        Array.isArray(r) && (e[n] = r)
      } else {
        const r = i[n]
        if (r !== undefined)
          if (n === "usesCodebase") e.usesCodebase = t ?? r
          else
            switch (n) {
              case "gitDiff":
              case "gitDiffFromBranchToMain":
              case "useWeb":
              case "useLinterErrors":
              case "useDiffReview":
              case "useContextPicking":
              case "useRecentChanges":
                e[n] = r
                break
              case "diffHistory":
                e.diffHistory = r
                break
            }
      }
    }
    return i.mentions && (e.mentions = i.mentions), e
  }
  function V8n(i) {
    return i.tabs
      .filter((e) => e.tabState === m0.chat)
      .map((e) => {
        const t = rt(),
          s = yI(t, "chat"),
          n = e.bubbles
            .map((a) => {
              const l = HC()
              if (a.type === "user") {
                const c = a
                return {
                  ...l,
                  type: fs.HUMAN,
                  text: c.text || "",
                  richText: c.richText,
                  bubbleId: c.id,
                  context: H8n(c),
                }
              } else if (a.type === "ai") {
                const c = a
                return {
                  ...l,
                  type: fs.AI,
                  text: c.text || "",
                  bubbleId: c.id,
                  codeBlocks: [],
                }
              }
            })
            .filter(bn),
          r = n[n.length - 1]
        r &&
          r.type === fs.HUMAN &&
          (n.pop(),
          (s.text = r.text || ""),
          (s.richText = r.richText || ""),
          (s.context = r.context || cm()))
        const o = e.lastSendTime ?? Date.now()
        return {
          ...s,
          name: e.chatTitle,
          conversation: n,
          createdAt: o,
          lastUpdatedAt: o,
          tabs: CBi(),
          selectedTabIndex: 1,
          codeBlockData: {},
          inlineDiffIdMap: {},
          newlyCreatedFiles: [],
          newlyCreatedFolders: [],
          capabilities: [],
          status: "completed",
        }
      })
  }
  function W8n(i) {
    return i.getWorkbenchState() === 1 ? -1 : 1
  }
  function AUi(i) {
    return `composerData:${i}`
  }
  var MUi = "inlineDiffsData"
  function iK(i, e) {
    const t = FUi(i),
      s = [1e3, 5e3, 1e4, 2e4]
    let n = 0
    const r = async () => {
      try {
        await new Promise((o) => setTimeout(o, Math.random() * 40 + 10)),
          await e.cursorDiskKVSet(AUi(i.composerId), t)
      } catch (o) {
        if (n < s.length)
          return (
            console.warn(
              `[composer] Failed to migrate composer data (attempt ${n + 1}), retrying in ${s[n] / 1e3}s`,
              o,
            ),
            await new Promise((a) => setTimeout(a, s[n])),
            n++,
            r()
          )
        console.error(
          "[composer] Failed to migrate composer data after all retries",
          o,
        )
      }
    }
    r().catch((o) => {
      console.error("[composer] Unexpected error during migration retry", o)
    })
  }
  function q8n(i, e) {
    let t = i.hasMigratedChatData ?? false,
      s = i.hasMigratedComposerData ?? false,
      n = i.hasMigratedUseAutoContext,
      r = false,
      o = i.allComposers
    if (
      (s ||
        ((o = o.map((u) =>
          u.type === "head" ? u : (iK(u, e.storageService), K$(u)),
        )),
        (s = true),
        (r = true)),
      e.shouldMigrateChatData && e.workspaceContextService && e.storageService)
    ) {
      const u = xR.CHAT_REACTIVE_STORAGE_ID,
        d = W8n(e.workspaceContextService),
        g = e.storageService.get(u, d)
      if (g)
        try {
          const p = JSON.parse(g)
          p &&
            ((o = [...V8n(p).map((y) => (iK(y, e.storageService), K$(y))), ...o]),
            (t = true),
            (r = true))
        } catch (p) {
          console.error("[composer] Error parsing chat data", p)
        }
    }
    n ||
      (e.reactiveStorageService.setApplicationUserPersistentStorage(
        "composerState",
        "useAutoContext",
        true,
      ),
      (n = true)),
      (o = JJ(o).map(r6n))
    let a = i.selectedComposerId,
      l = i.selectedChatId
    const c = o.some((u) => u.composerId === a && u.unifiedMode !== "chat"),
      h = o.some((u) => u.composerId === l && u.unifiedMode === "chat")
    if (!c) {
      const u = rt(),
        d = yI(u)
      iK(d, e.storageService), (a = u), (o = [K$(d), ...o]), (r = true)
    }
    if (!h) {
      const u = rt(),
        d = yI(u, "chat")
      iK(d, e.storageService), (l = u), (o = [K$(d), ...o]), (r = true)
    }
    return (
      (i = {
        allComposers: o,
        selectedComposerId: a,
        selectedChatId: l,
        hasMigratedChatData: t,
        hasMigratedUseAutoContext: n,
        hasMigratedComposerData: s,
        selectedComposerHandle: undefined,
        selectedComposerHandlePromise: undefined,
        selectedChatHandle: undefined,
        selectedChatHandlePromise: undefined,
      }),
      [i, { didMigrateComposerOrChatData: r }]
    )
  }
  function j8n(i) {
    const e = JSON.parse(i),
      t = { ...yI(e.composerId), ...e }
    t.isAgentic || t.conversation.some((n) => n.capabilityType === ls.TOOL_FORMER)
      ? (t.unifiedMode = "agent")
      : t.unifiedMode === undefined && (t.unifiedMode = t.forceMode ?? "edit"),
      (t.forceMode = t.unifiedMode === "agent" ? "edit" : t.unifiedMode),
      (t.isAgentic = t.unifiedMode === "agent"),
      (t.context = { ...cm(), ...tce(e.context) }),
      t.conversation.forEach((n) => {
        n.context && (n.context = tce(n.context)),
          n.codeBlocks &&
            (n.codeBlocks = n.codeBlocks.map((r) => ({
              uri: U.revive(r.uri),
              version: r.version,
              codeBlockIdx: r.codeBlockIdx,
            })))
      }),
      (t.codeBlockData = Object.fromEntries(
        Object.entries(e.codeBlockData).map(([n, r]) => [
          n,
          r.map((o) => {
            o.version === 0 &&
              o.originalModelLines !== undefined &&
              (t.originalModelLines[n] = o.originalModelLines)
            let a = o.status
            a === "generating"
              ? (a = "aborted")
              : a === "applying" && (a = "cancelled")
            const l = U.revive(o.uri)
            return { ...o, uri: l, status: a }
          }),
        ]),
      )),
      (t.tabs = t.tabs.map((n) =>
        n.type === "code" ? { ...n, uri: U.revive(n.uri) } : n,
      )),
      (t.newlyCreatedFiles = (t.newlyCreatedFiles || []).map((n) => ({
        ...n,
        uri: U.revive(n.uri),
      }))),
      (t.newlyCreatedFolders = (t.newlyCreatedFolders || []).map((n) => ({
        ...n,
        uri: U.revive(n.uri),
      }))),
      (t.latestCheckpoint = t.latestCheckpoint
        ? yBi(t.latestCheckpoint)
        : undefined),
      (t.conversation = t.conversation.map((n) => {
        const r = n.codeBlocks?.map((h) => ({
            uri: U.revive(h.uri),
            version: h.version,
            codeBlockIdx: h.codeBlockIdx,
          })),
          o = n.checkpoint ? yBi(n.checkpoint) : undefined,
          a = n.capabilityStatuses
            ? {
                ...wBi(),
                ...Object.fromEntries(
                  Object.entries(n.capabilityStatuses)
                    .filter(([h]) => h !== "process-codeblock")
                    .map(([h, u]) => [
                      h,
                      u.map((d) => ({
                        ...d,
                        status: d.status === "generating" ? "aborted" : d.status,
                      })),
                    ]),
                ),
              }
            : undefined,
          l = n.capabilityCodeBlocks
            ? n.capabilityCodeBlocks.map((h) => ({
                ...h,
                status: h.status === "generating" ? "aborted" : h.status,
              }))
            : undefined,
          c =
            n.type === fs.HUMAN
              ? { ...cm(), ...(n.context ? tce(n.context) : {}) }
              : undefined
        return {
          ...HC(),
          ...n,
          codeBlocks: r,
          capabilityStatuses: a,
          capabilityCodeBlocks: l,
          context: c,
          checkpoint: o,
        }
      }))
    let s = t.status
    return (
      s === "generating" && (s = "aborted"),
      (t.status = s),
      t.tabs[0].type !== "extra" && (t.tabs = [{ type: "extra" }, ...t.tabs]),
      (t.selectedTabIndex = 1),
      (t.hasLoaded = false),
      t
    )
  }
  function z8n(i) {
    for (const e of i.capabilities) e.dispose()
  }
  function $Ui(i, e = true) {
    const {
      composerId: t,
      name: s,
      text: n,
      richText: r,
      conversation: o,
      status: a,
      lastUpdatedAt: l,
      createdAt: c,
      userResponsesToSuggestedCodeBlocks: h,
      codeBlockData: u,
      hasChangedContext: d,
      backgroundInfo: g,
      capabilities: p,
      tabs: m,
      unifiedMode: b,
      originalModelLines: y,
      newlyCreatedFiles: w,
      newlyCreatedFolders: C,
      latestConversationSummary: S,
      dontShowSummarizeForLongChats: x,
      tokenCount: k,
      latestChatGenerationUUID: E,
      latestCheckpoint: D,
      currentBubbleId: P,
      editingBubbleId: L,
      selectedBubbleId: A,
    } = i
    let F = i.context,
      H
    m[0].type === "extra" ? (H = m.slice(1)) : (H = m)
    const B = Object.fromEntries(
        Object.entries(u).map(([Q, se]) => [
          Q,
          se.map((he) => {
            let ae = he.status
            return (
              ae === "generating"
                ? (ae = "aborted")
                : ae === "applying" && (ae = "cancelled"),
              e
                ? {
                    uri: he.uri,
                    version: he.version,
                    content: he.content,
                    languageId: he.languageId,
                    startLine: he.startLine,
                    endLine: he.endLine,
                    status: ae,
                    isNotApplied: he.isNotApplied,
                    originalModelDiffWrtV0: he.originalModelDiffWrtV0,
                    newModelDiffWrtV0: he.newModelDiffWrtV0,
                    isNoOp: he.isNoOp,
                  }
                : { ...he, status: ae }
            )
          }),
        ]),
      ),
      z = a === "generating" ? "aborted" : a,
      K = o
        .map((Q) => {
          if (Q.capabilityCodeBlocks?.some((Ae) => Ae.type === IBi)) return
          const {
              capabilityStatuses: se,
              capabilityCodeBlocks: he,
              recentlyViewedFiles: ae,
              ...de
            } = Q,
            Ee = se
              ? Object.fromEntries(
                  Object.entries(se)
                    .filter(([Ae]) => Ae !== "process-codeblock")
                    .map(([Ae, Pe]) => [
                      Ae,
                      Pe.map((ze) => ({
                        ...ze,
                        status:
                          ze.status === "generating" ? "aborted" : ze.status,
                      })),
                    ]),
                )
              : undefined,
            ke = he
              ? he.map((Ae) => ({
                  ...Ae,
                  status: Ae.status === "generating" ? "aborted" : Ae.status,
                }))
              : undefined
          if (e) {
            const {
              attachedCodeChunks: Ae,
              codebaseContextChunks: Pe,
              commits: ze,
              pullRequests: at,
              gitDiffs: we,
              assistantSuggestedDiffs: vt,
              interpreterResults: lt,
              images: Xe,
              attachedFolders: Oe,
              approximateLintErrors: Fe,
              attachedFoldersNew: ut,
              lints: Ue,
              userResponsesToSuggestedCodeBlocks: Ke,
              diffsForCompressingFiles: mt,
              toolResults: Mi,
              notepads: qe,
              capabilities: Be,
              ...Ge
            } = de
            return { ...Ge, capabilityStatuses: Ee, capabilityCodeBlocks: ke }
          } else
            return { ...de, capabilityStatuses: Ee, capabilityCodeBlocks: ke }
        })
        .filter(bn)
    return (
      (F = { ...F, terminalFiles: undefined }),
      {
        ...yI(),
        composerId: t,
        name: s,
        text: n,
        richText: r,
        conversation: K,
        status: z,
        lastUpdatedAt: l,
        createdAt: c,
        context: F,
        userResponsesToSuggestedCodeBlocks: h,
        codeBlockData: B,
        tabs: H,
        hasChangedContext: d,
        backgroundInfo: g,
        capabilities: p,
        unifiedMode: b,
        originalModelLines: y,
        newlyCreatedFiles: w,
        newlyCreatedFolders: C,
        latestConversationSummary: S,
        dontShowSummarizeForLongChats: x,
        tokenCount: k,
        latestChatGenerationUUID: E,
        latestCheckpoint: D,
        currentBubbleId: P,
        editingBubbleId: L,
        selectedBubbleId: A,
        forceMode: b === "agent" ? "edit" : b,
        isAgentic: b === "agent",
      }
    )
  }
  function FUi(i) {
    return JSON.stringify($Ui(i))
  }
  function OUi(i, e, t, s, n, r, o) {
    const a = yI(i, "edit"),
      l = yI(e, "chat")
    return (
      iK(a, t),
      iK(l, t),
      {
        allComposers: [K$(a), K$(l)],
        selectedComposerId: i,
        selectedChatId: e,
        hasMigratedChatData: n,
        hasMigratedUseAutoContext: r,
        hasMigratedComposerData: o,
        selectedComposerHandle: undefined,
        selectedComposerHandlePromise: undefined,
        selectedChatHandle: undefined,
        selectedChatHandlePromise: undefined,
      }
    )
  }
  function G8n(i, e, t, s, n) {
    const r = t.getWorkbenchState() === 1 ? -1 : 1
    let o
    o = i.get(n, r)
    let a = false,
      l = true,
      c = false,
      h = false,
      u = {
        allComposers: [],
        selectedComposerId: "",
        selectedChatId: "",
        hasMigratedChatData: a,
        hasMigratedUseAutoContext: l,
        hasMigratedComposerData: c,
        selectedComposerHandle: undefined,
        selectedComposerHandlePromise: undefined,
        selectedChatHandle: undefined,
        selectedChatHandlePromise: undefined,
      }
    if (o && true)
      try {
        let b = JSON.parse(o)
        if (((a = !!b.hasMigratedChatData), (l = true), b)) {
          const [y, w] = q8n(b, {
            shouldMigrateChatData: !a,
            workspaceContextService: t,
            storageService: i,
            reactiveStorageService: e,
            composerDataHandleManager: s,
          })
          ;(u = y), (h = w.didMigrateComposerOrChatData)
        } else throw new Error("[composer] No stored composers data found")
      } catch (b) {
        console.error("[composer] Error parsing stored composers data:", b)
        const y = rt()
        u = OUi(y, rt(), i, e, a, l, c)
      }
    else {
      const b = rt()
      ;(h = true), (u = OUi(b, rt(), i, e, a, l, c))
    }
    console.log("[composer] initial composers", JSON.parse(JSON.stringify(u)))
    const [g, p] = op(u)
    return [
      g,
      p,
      () => {
        const b = rt(),
          y = yI(b),
          w = rt(),
          C = yI(w, "chat")
        return (
          s.pushComposer(y),
          s.pushComposer(C),
          p("allComposers", [K$(y), K$(C)]),
          p("selectedComposerId", b),
          p("selectedChatId", w),
          y
        )
      },
      {
        shouldWaitFor10SecondsWhileReadingFromDiskAtStartup: h,
        fromDate: Date.now(),
      },
    ]
  }
  function J8n(i) {
    return op(i)
  }
  var aiAssertService = Re("aiAssertService"),
    lLt = class {
      constructor(e, t) {
        ;(this.a = e), (this.b = t), (this.c = new Set())
      }
      assert(e, t, s) {}
    }
  ;(lLt = __decorate([__param(0, Ti), __param(1, Ht)], lLt)), Ve(aiAssertService, lLt, 1)
  function K8n(i, e, t) {
    return i.createInstance(cLt, e, t)
  }
  var cLt = class extends V {
    constructor(e, t, s, n, r) {
      super(),
        (this.composerWasLoadedHook = e),
        (this.onInlineDiffsLoadedHook = t),
        (this.storageService = s),
        (this.aiAssertService = n),
        (this.reactiveStorageService = r),
        (this.loadedComposers = []),
        this.D(
          this.storageService.cursorDiskKVOnShouldSave(async () => {
            await Promise.allSettled([
              this.persistInlineDiffs(),
              ...this.loadedComposers.map((o) => this.persistLoadedComposer(o)),
            ])
          }),
        ),
        this.loadInlineDiffs().catch((o) => {
          console.error("[composer] Error loading inline diffs:", o)
        })
    }
    async loadInlineDiffs() {
      try {
        const e = await this.storageService.cursorDiskKVGet(MUi)
        if (e) {
          const t = JSON.parse(e).map((s) => ({
            composerId: s.composerId,
            version: s.version,
            uri: U.revive(s.uri),
          }))
          await this.onInlineDiffsLoadedHook(t)
        }
      } catch (e) {
        console.error("[composer] Error loading inline diffs from storage:", e)
      }
    }
    async persistLoadedComposer(e) {
      await this.storageService.cursorDiskKVSet(
        this.getComposerDataStorageKey(e.data.composerId),
        FUi(e.data),
      )
    }
    async persistInlineDiffs() {
      const t = this.reactiveStorageService.nonPersistentStorage.inlineDiffs
        .filter((s) => !!s.composerMetadata)
        .map((s) => ({
          composerId: s.composerMetadata?.composerId,
          version: s.composerMetadata?.version,
          uri: s.uri,
        }))
      await this.storageService.cursorDiskKVSet(MUi, JSON.stringify(t))
    }
    getWeakHandleOptimistic(e) {
      const t = this.loadedComposers.find((s) => s.data.composerId === e)
      if (t)
        return new sce(t.data.composerId, this, this.reactiveStorageService, true)
    }
    pushComposer(e) {
      const t = new Y8n(e)
      this.loadedComposers.push(t)
      const s = new sce(t.data.composerId, this, this.reactiveStorageService)
      return (
        this.composerWasLoadedHook(
          new sce(t.data.composerId, this, this.reactiveStorageService, true),
        ).catch((n) => {
          console.error("[composer] Error loading composer data:", n)
        }),
        this.aiAssertService.assert(
          this.loadedComposers.length < 10,
          "More than 10 loaded composers!",
        ),
        s
      )
    }
    deleteComposer(e) {
      const t = this.loadedComposers.find((s) => s.data.composerId === e)
      t &&
        (this.unloadComposer(t),
        this.storageService
          .cursorDiskKVSet(this.getComposerDataStorageKey(e), undefined)
          .then(() => {})
          .catch((s) => {
            console.error("[composer] Error deleting composer data from disk:", s)
          }))
    }
    unloadComposer(e) {
      ;(this.loadedComposers = this.loadedComposers.filter((t) => t !== e)),
        z8n(e.data)
    }
    async getHandle(e, t) {
      const s = this.loadedComposers.find((r) => r.data.composerId === e)
      if (s) return new sce(s.data.composerId, this, this.reactiveStorageService)
      let n = t ? Date.now() + t : Date.now() - 10
      do {
        try {
          const r = await this.storageService.cursorDiskKVGet(
              this.getComposerDataStorageKey(e),
            ),
            o = this.loadedComposers.find((a) => a.data.composerId === e)
          if (o)
            return new sce(o.data.composerId, this, this.reactiveStorageService)
          if (r) {
            const a = j8n(r)
            return this.pushComposer(a)
          }
        } catch (r) {
          console.error("[composer] Error loading composer data:", r)
        }
        await new Promise((r) => setTimeout(r, Math.min(100, (t ?? 400) / 4)))
      } while (Date.now() < n)
    }
    getComposerDataStorageKey(e) {
      return AUi(e)
    }
    maybeRemoveLoadedComposer(e) {
      e.numHandles === 0 &&
        this.persistLoadedComposer(e)
          .then(() => {
            e.numHandles === 0 && this.unloadComposer(e)
          })
          .catch((t) => {
            console.error("[composer] Error persisting loaded composer data:", t)
          })
    }
    addHandle(e, t) {
      const s = this.loadedComposers.find((n) => n.data.composerId === t)
      s && s.addHandle(e)
    }
    removeHandle(e, t) {
      const s = this.loadedComposers.find((n) => n.data.composerId === t)
      s && (s.removeHandle(e), this.maybeRemoveLoadedComposer(s))
    }
    getLoadedComposer(e) {
      return this.loadedComposers.find((t) => t.data.composerId === e)
    }
    getLoadedComposers() {
      return this.loadedComposers.map((e) => e.data.composerId)
    }
  }
  cLt = __decorate([__param(2, et), __param(3, aiAssertService), __param(4, ei)], cLt)
  var sce = class Qgi extends V {
      constructor(e, t, s, n = false) {
        super(),
          (this.composerId = e),
          (this.composerDataHandleService = t),
          (this.reactiveStorageService = s),
          (this.isWeak = n),
          (this.setData = (...r) => {
            if (this.isDisposed)
              throw new Error("[composer] Composer data handle is disposed")
            const o = this.composerDataHandleService.getLoadedComposer(
              this.composerId,
            )
            if (!o) throw new Error("[composer] No loaded composer found")
            return o.setData(...r)
          }),
          (this.isDisposed = false),
          n || this.composerDataHandleService.addHandle(this, this.composerId)
      }
      clone() {
        return new Qgi(
          this.composerId,
          this.composerDataHandleService,
          this.reactiveStorageService,
          this.isWeak,
        )
      }
      cloneWeak() {
        return new Qgi(
          this.composerId,
          this.composerDataHandleService,
          this.reactiveStorageService,
          true,
        )
      }
      get data() {
        if (this.isDisposed)
          throw new Error("[composer] Composer data handle is disposed")
        const e = this.composerDataHandleService.getLoadedComposer(
          this.composerId,
        )
        if (!e) throw new Error("[composer] No loaded composer found")
        return e.data
      }
      dispose() {
        this.isDisposed ||
          ((this.isDisposed = true),
          super.dispose(),
          this.composerDataHandleService.removeHandle(this, this.composerId))
      }
    },
    Y8n = class {
      addHandle(i) {
        this.handles.push(i)
      }
      removeHandle(i) {
        this.handles = this.handles.filter((e) => e !== i)
      }
      get numHandles() {
        return this.handles.length
      }
      constructor(i) {
        ;(this.handles = []), ([this.data, this.setData] = J8n(i))
      }
    },
    hLt,
    BUi = 15,
    X8n = 10,
    Na = Re("composerDataService"),
    or = class extends V {
      static {
        hLt = this
      }
      get composerDataStorageID() {
        return Gon
      }
      pushKeepAliveHandle(e) {
        for (this.keepAliveHandles.push(e); this.keepAliveHandles.length > 3; )
          this.keepAliveHandles.shift()?.dispose()
        for (let t = 0; t < this.keepAliveHandles.length - 1; t++) {
          const s = this.keepAliveHandles[t]
          let n = false
          try {
            s.data.conversation.length > 100 &&
              (s.dispose(), this.keepAliveHandles.splice(t, 1), t--, (n = true))
          } catch {
            n || (s.dispose(), this.keepAliveHandles.splice(t, 1), t--)
          }
        }
      }
      constructor(e, t, s, n, r, o, a, l, c, h, u) {
        super(),
          (this._storageService = e),
          (this._workspaceContextService = t),
          (this._reactiveStorageService = s),
          (this._instantiationService = n),
          (this._everythingProviderService = r),
          (this._gitGraphService = o),
          (this._recentFilesTrackerService = a),
          (this._fileService = l),
          (this._textModelService = c),
          (this._selectedContextService = h),
          (this._composerUnificationService = u),
          (this.keepAliveHandles = []),
          (this.onInlineDiffsLoadedHookReady = new Promise((d) => {
            this.onInlineDiffsLoadedHookReadyResolver = d
          })),
          (this.onInlineDiffsLoadedHook = (d) => Promise.resolve()),
          (this.composerDataHandleManager = K8n(
            this._instantiationService,
            this.composerWasLoadedHook.bind(this),
            async (d) => (
              await this.onInlineDiffsLoadedHookReady,
              await this.onInlineDiffsLoadedHook(d)
            ),
          )),
          ([
            this.allComposersData,
            this.setAllComposersData,
            this.resetComposers,
            this.getHandleOptions,
          ] = G8n(
            this._storageService,
            this._reactiveStorageService,
            this._workspaceContextService,
            this.composerDataHandleManager,
            this.composerDataStorageID,
          )),
          (this.reactiveStorageRoot = this.D(
            this._reactiveStorageService.createScoped(this),
          )),
          this.reactiveStorageRoot.onChangeEffect({
            deps: [() => this.allComposersData.selectedComposerId],
            onChange: ({ deps: d, prevDeps: g, prevReturnValue: p }) => {
              const m = d[0]
              if (
                this.allComposersData.selectedComposerHandle?.data.composerId !==
                m
              ) {
                const b = this.allComposersData.selectedComposerHandlePromise
                let y = 1e3
                this.getHandleOptions
                  .shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
                  Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
                  (y = 1e4)
                const w = this.composerDataHandleManager.getHandle(m, y)
                this.setAllComposersData("selectedComposerHandlePromise", w),
                  w.then((C) => {
                    if (C === undefined) {
                      this.deleteComposer(m, {
                        forceMode: "edit",
                        isCurrentlySelected: true,
                      })
                      return
                    }
                    w === this.allComposersData.selectedComposerHandlePromise
                      ? (this.allComposersData.selectedComposerHandle?.dispose(),
                        this.setAllComposersData("selectedComposerHandle", C),
                        b?.then((x) => {
                          x?.dispose()
                        }))
                      : C?.dispose()
                  })
              }
            },
            runNowToo: true,
          }),
          this.reactiveStorageRoot.onChangeEffect({
            deps: [() => this.allComposersData.selectedChatId],
            onChange: ({ deps: d, prevDeps: g, prevReturnValue: p }) => {
              const m = d[0]
              if (
                this.allComposersData.selectedChatHandle?.data.composerId !== m
              ) {
                const b = this.allComposersData.selectedChatHandlePromise
                let y = 1e3
                this.getHandleOptions
                  .shouldWaitFor10SecondsWhileReadingFromDiskAtStartup &&
                  Date.now() - this.getHandleOptions.fromDate <= 60 * 1e3 &&
                  (y = 1e4)
                const w = this.composerDataHandleManager.getHandle(m, y)
                this.setAllComposersData("selectedChatHandlePromise", w),
                  w.then((C) => {
                    if (C === undefined) {
                      this.deleteComposer(m, {
                        forceMode: "chat",
                        isCurrentlySelected: true,
                      })
                      return
                    }
                    C.setData("unifiedMode", "chat"),
                      w === this.allComposersData.selectedChatHandlePromise &&
                        (this.allComposersData.selectedChatHandle?.dispose(),
                        this.setAllComposersData("selectedChatHandle", C),
                        b?.then((x) => {
                          x?.dispose()
                        }))
                  })
              }
            },
            runNowToo: true,
          })
        for (const d of hLt.registeredActions)
          d(this._reactiveStorageService, this)
        this.D(
          this._storageService.onWillSaveState(() => {
            this.saveComposers()
          }),
        ),
          this.D(
            this._composerUnificationService.onDidChangeUnificationMode((d) => {
              const g = (p) => {
                const m = rt(),
                  b = Mae(
                    this._instantiationService,
                    this._reactiveStorageService,
                    m,
                    [],
                  ),
                  y = { ...yI(m), capabilities: b, unifiedMode: p }
                return (
                  this.appendComposer(y),
                  p === "chat"
                    ? this.setAllComposersData("selectedChatId", m)
                    : this.setAllComposersData("selectedComposerId", m),
                  m
                )
              }
              if (d === "disabled") {
                if (
                  this.allComposersData.allComposers.find(
                    (b) => b.composerId === this.selectedComposerId,
                  )?.unifiedMode === "chat"
                ) {
                  const b = this.allComposersData.allComposers.filter(
                    (y) => y.unifiedMode !== "chat",
                  )?.[0]?.composerId
                  b
                    ? this.setAllComposersData("selectedComposerId", b)
                    : g("edit")
                }
                if (
                  this.allComposersData.allComposers.find(
                    (b) => b.composerId === this.selectedChatId,
                  )?.unifiedMode !== "chat"
                ) {
                  const b = this.allComposersData.allComposers.filter(
                    (y) => y.unifiedMode === "chat",
                  )?.[0]?.composerId
                  b ? this.setAllComposersData("selectedChatId", b) : g("chat")
                }
              }
            }),
          ),
          this._selectedContextService.setGetComposerDataHandle(
            this.getComposerDataHandle.bind(this),
          )
      }
      getComposerDataHandle(e) {
        return this.composerDataHandleManager.getHandle(e)
      }
      getCanToggleAgentic(e, t) {
        const s = this.getComposerData(e)
        return s
          ? t
            ? s.conversation[0].bubbleId === t
            : s.conversation.length === 0
          : false
      }
      async updateComposerDataAsync(e, t) {
        const s = await this.composerDataHandleManager.getHandle(e)
        if (s)
          try {
            t(s.setData)
          } finally {
            s.dispose()
          }
      }
      dispose() {
        super.dispose()
      }
      getWeakHandleOptimistic(e) {
        return this.composerDataHandleManager.getWeakHandleOptimistic(e)
      }
      getComposerForceMode(e) {
        if (
          this._composerUnificationService.reactiveUnificationMode() !==
          "disabled"
        )
          return "edit"
        let t
        return (
          typeof e == "string"
            ? (t = this.allComposersData.allComposers.find(
                (s) => s.composerId === e,
              ))
            : "unifiedMode" in e
              ? (t = e)
              : "data" in e && (t = e.data),
          t?.unifiedMode === "chat" ? "chat" : "edit"
        )
      }
      getComposerUnifiedMode(e) {
        let t
        return (
          typeof e == "string"
            ? (t = this.allComposersData.allComposers.find(
                (s) => s.composerId === e,
              ))
            : "unifiedMode" in e
              ? (t = e)
              : "data" in e && (t = e.data),
          t?.unifiedMode === "chat" &&
          this._composerUnificationService.reactiveUnificationMode() === "full"
            ? "edit"
            : (t?.unifiedMode ?? "edit")
        )
      }
      getComposerIsAgentic(e) {
        let t
        return (
          typeof e == "string"
            ? (t = this.allComposersData.allComposers.find(
                (s) => s.composerId === e,
              ))
            : "unifiedMode" in e
              ? (t = e)
              : "data" in e && (t = e.data),
          t?.unifiedMode === "agent"
        )
      }
      getSelectedIdByForceMode(e) {
        return this._composerUnificationService.reactiveUnificationMode() !==
          "disabled"
          ? this.selectedComposerId
          : e === "chat"
            ? this.selectedChatId
            : this.selectedComposerId
      }
      async composerWasLoadedHook(e) {
        try {
          try {
            const t = e.data
            try {
              e.setData(
                "capabilities",
                Mae(
                  this._instantiationService,
                  this._reactiveStorageService,
                  t.composerId,
                  t.capabilities,
                ),
              ),
                t.text.length > D4i &&
                  (e.setData("text", ""), e.setData("richText", ""))
              const s = this.allComposersData.allComposers.find(
                (n) => n.composerId === t.composerId,
              )
              t.unifiedMode !== s?.unifiedMode &&
                t.unifiedMode !== undefined &&
                this.setAllComposersData(
                  "allComposers",
                  (n) => n.composerId === t.composerId,
                  { unifiedMode: t.unifiedMode },
                )
            } catch (s) {
              console.error("[composer] Error instantiating capabilities:", s)
            }
          } finally {
            e.setData("hasLoaded", true)
          }
        } catch (t) {
          console.error("[composer] Error loading composer data:", t)
        }
        this.reactiveStorageRoot.onChangeEffect({
          deps: [
            () => e.data.composerId,
            () => e.data.name,
            () => e.data.lastUpdatedAt,
            () => e.data.createdAt,
            () => e.data.unifiedMode,
          ],
          onChange: ({ deps: t }) => {
            const s = t[0],
              n = t[1],
              r = t[2],
              o = t[3],
              a = t[4]
            this.setAllComposersData("allComposers", (l) => l.composerId === s, {
              name: n,
              lastUpdatedAt: r,
              createdAt: o,
              unifiedMode: a,
            })
          },
        })
      }
      async setOnInlineDiffsLoadedHook(e) {
        ;(this.onInlineDiffsLoadedHook = e),
          this.onInlineDiffsLoadedHookReadyResolver?.()
      }
      get applicationComposerSettings() {
        return this._reactiveStorageService.applicationUserPersistentStorage
          .composerState
      }
      static {
        this.registeredActions = []
      }
      static registerAction(e) {
        this.registeredActions.push(e)
      }
      get selectedComposer() {
        const e = this.allComposersData.selectedComposerHandle
        if (e) return e.data
      }
      async getSelectedComposerHandle() {
        return await this.composerDataHandleManager.getHandle(
          this.selectedComposerId,
        )
      }
      async getComposerHandleById(e) {
        return await this.composerDataHandleManager.getHandle(e)
      }
      get selectedComposerId() {
        if (this.allComposersData.selectedComposerId)
          return this.allComposersData.selectedComposerId
        if (this.allComposersData.allComposers.length > 0) {
          console.log(
            "[composer] no selected composer found, selecting first one",
          )
          const e = this.allComposersData.allComposers.filter(
            (t) => this.getComposerForceMode(t) !== "chat",
          )[0]
          if (e)
            return (
              this.setAllComposersData("selectedComposerId", e.composerId),
              e.composerId
            )
        }
        return (
          console.log("[composer] no composers found, resetting"),
          this.resetComposers().composerId
        )
      }
      get selectedChatId() {
        if (this.allComposersData.selectedChatId)
          return this.allComposersData.selectedChatId
        if (this.allComposersData.allComposers.length > 0) {
          console.log(
            "[composer] no selected composer found, selecting first one",
          )
          const e = this.allComposersData.allComposers.filter(
            (t) => this.getComposerForceMode(t) === "chat",
          )[0]
          if (e)
            return (
              this.setAllComposersData("selectedChatId", e.composerId),
              e.composerId
            )
        }
        return (
          console.log("[composer] no composers found, resetting"),
          this.resetComposers().composerId
        )
      }
      updateSelectedComposer(e) {
        const t = this.allComposersData.selectedComposerHandle
        t && t.setData(e)
      }
      updateComposerDataSetStore(e, t) {
        if (typeof e == "string") {
          const s = this.composerDataHandleManager.getWeakHandleOptimistic(e)
          if (!s) throw new Error("[composer] No composer data handle found")
          t(s.setData), s.dispose()
        } else t(e.setData)
      }
      updateComposerData(e, t) {
        if (typeof e == "string") {
          const s = this.composerDataHandleManager.getWeakHandleOptimistic(e)
          if (!s) throw new Error("[composer] No composer data handle found")
          s.setData((n) => ({ ...n, ...t })), s.dispose()
        } else e.setData(t)
      }
      HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED(e) {
        return this.composerDataHandleManager.getWeakHandleOptimistic(e)
      }
      saveComposers() {
        const e = {
            allComposers: this.allComposersData.allComposers,
            selectedComposerId: this.allComposersData.selectedComposerId,
            selectedChatId: this.allComposersData.selectedChatId,
            hasMigratedChatData: this.allComposersData.hasMigratedChatData,
            hasMigratedUseAutoContext:
              this.allComposersData.hasMigratedUseAutoContext,
            hasMigratedComposerData:
              this.allComposersData.hasMigratedComposerData,
          },
          t = JSON.stringify(e)
        this._storageService.store(this.composerDataStorageID, t, 1, 1)
      }
      getComposerFromIdOrHandle(e) {
        return typeof e == "string" ? this.getComposerData(e) : e.data
      }
      getComposerCodeBlock(e, t, s) {
        const n = this.getComposerFromIdOrHandle(e)
        if (n) return n.codeBlockData?.[t.toString()]?.[s]
      }
      appendComposer(e) {
        const t = K$(e)
        this.setAllComposersData("allComposers", (n) => [t, ...n])
        const s = this.composerDataHandleManager.pushComposer(e)
        this.pushKeepAliveHandle(s)
      }
      deleteComposer(e, t) {
        if (
          (this.setAllComposersData("allComposers", (s) =>
            s.filter((n) => n.composerId !== e),
          ),
          this.composerDataHandleManager.deleteComposer(e),
          t?.isCurrentlySelected)
        ) {
          const s = this.allComposersData.allComposers.filter(
            (n) => this.getComposerForceMode(n) === t.forceMode,
          )
          s.length > 0
            ? this.setAllComposersData(
                t.forceMode === "chat" ? "selectedChatId" : "selectedComposerId",
                s[0].composerId,
              )
            : this.resetComposers()
        }
      }
      updateComposerCodeBlock(e, t, s, n) {
        const r = this.getComposerFromIdOrHandle(e)
        if (!r) return
        if (!r.codeBlockData[t.toString()][s]) {
          console.trace(
            "[composer] updateReactiveCodeBlock called for uri that does not exist",
            t,
          )
          return
        }
        try {
          this.updateComposerDataSetStore(e, (a) =>
            a(
              "codeBlockData",
              t.toString(),
              (l) => l.version === s,
              (l) => ({ ...l, ...n }),
            ),
          )
        } catch {}
      }
      getCodeBlockStatus(e, t, s) {
        const n = this.getComposerFromIdOrHandle(e)
        if (!n) return "none"
        const r = n?.codeBlockData[t.toString()]
        return r ? (r.find((o) => o.version === s)?.status ?? "none") : "none"
      }
      setCodeBlockStatus(e, t, s, n) {
        !this.getComposerFromIdOrHandle(e) ||
          !e ||
          this.updateComposerCodeBlock(e, t, s, { status: n })
      }
      getCodeBlocksOfStatuses(e, t) {
        const s = this.getComposerFromIdOrHandle(e)
        if (!s) return []
        const n = s.codeBlockData,
          r = Array.isArray(t) ? t : [t],
          o = []
        for (const a of Object.keys(n)) {
          const l = n[a]
          for (const c of l) r.includes(c.status) && o.push(c)
        }
        return o
      }
      setGeneratingCodeBlocksToAborted(e) {
        const t = this.getCodeBlocksOfStatuses(e, "generating")
        for (const s of t) this.setCodeBlockStatus(e, s.uri, s.version, "aborted")
      }
      getLatestCodeBlock(e) {
        const t = this.getComposerFromIdOrHandle(e)
        if (t)
          for (let s = t.conversation.length - 1; s >= 0; s--) {
            const n = t.conversation[s]
            if (n.codeBlocks && n.codeBlocks.length > 0) {
              const { uri: r, version: o } = n.codeBlocks[n.codeBlocks.length - 1]
              return this.getComposerCodeBlock(e, r, o)
            }
          }
      }
      getLatestCodeBlocks(e) {
        const t = this.getComposerFromIdOrHandle(e)
        if (!t) return []
        const s = []
        return (
          Object.values(t.codeBlockData ?? {}).forEach((n) => {
            n.length > 0 && s.push(n[n.length - 1])
          }),
          s
        )
      }
      getLatestCodeBlockForUri(e, t) {
        const s = this.getLatestCodeBlocks(e)
        if (!(!s || s.length === 0))
          return s.find((n) => n.uri.toString() === t.toString())
      }
      getLatestCodeBlocksOfStatuses(e, t) {
        if (!this.getComposerFromIdOrHandle(e)) return []
        const n = Array.isArray(t) ? t : [t]
        return this.getLatestCodeBlocks(e).filter((r) => {
          const o = r.status
          return n.includes(o)
        })
      }
      getLatestCodeBlockVersion(e, t, s) {
        const n = this.getComposerFromIdOrHandle(e)
        if (!n) return -1
        const r = n.codeBlockData[t.toString()]
        if (!r || r.length === 0) return -1
        const o = r[r.length - 1]?.version
        return s?.excludeNonAppliedCodeBlocks
          ? r.filter((a) => a.isNotApplied !== true).length - 1
          : o
      }
      getVersionExcludingNonAppliedCodeBlocks(e, t, s) {
        const n = this.getComposerFromIdOrHandle(e)
        if (!n) return -1
        const r = n.codeBlockData[t.toString()]
        return !r || r.length === 0 || r[s].isNotApplied === true
          ? -1
          : r
              .filter((o) => o.isNotApplied !== true)
              .findIndex((o) => o.version === s)
      }
      getLatestCodeBlockVersionForMessage(e, t, s, n) {
        const r = this.getComposerData(e)
        if (!r) return -1
        const o = t.toString()
        let a = -1
        for (let l = 0; l <= s; l++) {
          const c = r.conversation[l]
          if (c.type === fs.AI) {
            const h = c.codeBlocks?.filter((u) => u.uri.toString() === o) ?? []
            for (const u of h) {
              if (l === s && u.codeBlockIdx > n) break
              u.version > a && (a = u.version)
            }
          }
        }
        return a
      }
      getInlineDiff(e, t, s) {
        return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
          (n) =>
            n.uri.toString() === t.toString() &&
            n.composerMetadata?.composerId === e &&
            (s ? n.composerMetadata?.version === s : true),
        )
      }
      getAllInlineDiffs(e) {
        return this._reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
          (t) => t.composerMetadata?.composerId === e,
        )
      }
      doesFileHaveInlineDiff(e, t) {
        return !!this.getInlineDiff(e, t)
      }
      getComposerData(e) {
        if (typeof e == "string") {
          const t = this.composerDataHandleManager.getWeakHandleOptimistic(e)
          if (!t) return
          try {
            return t.data
          } finally {
            t.dispose()
          }
        } else return e.data
      }
      getAllCachedCodeBlocks(e) {
        const t = this.getComposerData(e)
        if (!t) throw Error("[composer] composer doesn't exist")
        const { codeBlockData: s } = t
        return Object.values(s)
          .flat()
          .filter(({ isCached: r }) => r === true)
      }
      addTypesToCapabilityStatuses(e, t, s, n) {
        this.updateComposerDataSetStore(e, (r) =>
          r(
            "conversation",
            (o) => o.bubbleId === t,
            "capabilityStatuses",
            s,
            (o) => [...o, ...n.map((a) => ({ type: a, status: "none" }))],
          ),
        )
      }
      removeTypesFromCapabilityStatuses(e, t, s, n) {
        this.updateComposerDataSetStore(e, (r) =>
          r(
            "conversation",
            (o) => o.bubbleId === t,
            "capabilityStatuses",
            s,
            (o) => [...o.filter((a) => !n.includes(a.type))],
          ),
        )
      }
      setCapabilityStatus(e, t, s, n, r) {
        const o = this.getComposerBubble(e, t)
        !o ||
          !o.capabilityStatuses ||
          (o.capabilityStatuses[s] &&
            !o.capabilityStatuses[s].map((l) => l.type).includes(n)) ||
          this.updateComposerDataSetStore(e, (a) =>
            a(
              "conversation",
              (l) => l.bubbleId === t,
              "capabilityStatuses",
              s,
              (l) => l.type === n,
              { type: n, status: r },
            ),
          )
      }
      setGeneratingCapabilitiesToAborted(e) {
        const t = this.getComposerData(e)
        if (t) {
          for (const s of t.conversation)
            if (s.capabilityStatuses)
              for (const n of Object.keys(s.capabilityStatuses))
                for (const r of s.capabilityStatuses[n])
                  r.status === "generating" &&
                    this.setCapabilityStatus(e, s.bubbleId, n, r.type, "aborted")
        }
      }
      setGeneratingCapabilityCodeBlocksToAborted(e) {
        const t = this.getComposerData(e)
        if (t) {
          for (const s of t.conversation)
            if (s.capabilityCodeBlocks)
              for (const n of s.capabilityCodeBlocks)
                n.status === "generating" &&
                  this.updateComposerCapabilityCodeBlock(
                    e,
                    s.bubbleId,
                    n.codeBlockIdx,
                    { status: "aborted" },
                  )
        }
      }
      isRunningCapabilities(e) {
        const t = this.getComposerData(e)
        if (!t) return false
        for (let s = t.conversation.length - 1; s >= 0; s--) {
          const n = t.conversation[s]
          if (n.capabilityStatuses) {
            for (const r of Object.keys(n.capabilityStatuses))
              for (const o of n.capabilityStatuses[r])
                if (o.status === "generating") return true
          }
          if (n.capabilityCodeBlocks) {
            for (const r of n.capabilityCodeBlocks)
              if (r.status === "generating" || r.status === "loading") return true
          }
        }
        return false
      }
      getToolFormer(e) {
        const t = this.getComposerCapability(e, ls.TOOL_FORMER)
        if (t) return t
      }
      getPendingUserDecisionGroup(e) {
        const t = this.getToolFormer(e)
        return t ? t.getPendingUserDecisionGroup()() : []
      }
      getIsBlockingUserDecision(e) {
        const t = this.getToolFormer(e)
        return t ? t.getIsBlockingUserDecision()() : false
      }
      setLoadingToolFormerToolsToCancelled(e) {
        const t = this.getToolFormer(e)
        t && t.setLoadingToolsToCancelled()
      }
      addCapabilityRan(e, t, s, n) {
        this.updateComposerDataSetStore(e, (r) =>
          r(
            "conversation",
            (o) => o.bubbleId === t,
            "capabilitiesRan",
            s,
            (o) => [...o, n],
          ),
        )
      }
      getComposerCapabilityCodeBlock(e, t, s) {
        const n = this.getComposerBubble(e, t)
        if (n) return n.capabilityCodeBlocks?.find((r) => r.codeBlockIdx === s)
      }
      updateComposerCapabilityCodeBlock(e, t, s, n) {
        this.updateComposerDataSetStore(e, (r) =>
          r(
            "conversation",
            (o) => o.bubbleId === t,
            "capabilityCodeBlocks",
            (o) => o.codeBlockIdx === s,
            (o) => ({ ...o, ...n }),
          ),
        )
      }
      getComposerCapability(e, t) {
        const s = this.getComposerData(e)
        if (s) return s.capabilities.find((n) => n.type === t)
      }
      getComposerBubble(e, t) {
        const s = this.getComposerFromIdOrHandle(e)
        if (s) return s.conversation.find((n) => n.bubbleId === t)
      }
      updateComposerBubble(e, t, s) {
        this.updateComposerDataSetStore(e, (n) =>
          n(
            "conversation",
            (r) => r.bubbleId === t,
            (r) => ({ ...r, ...s }),
          ),
        )
      }
      getLastHumanBubbleId(e) {
        const t = this.getComposerData(e)
        if (t)
          for (let s = t.conversation.length - 1; s >= 0; s--) {
            const n = t.conversation[s]
            if (n.type === fs.HUMAN) return n.bubbleId
          }
      }
      getLastAiBubbleId(e) {
        const t = this.getComposerData(e)
        if (t)
          for (let s = t.conversation.length - 1; s >= 0; s--) {
            const n = t.conversation[s]
            if (n.type === fs.AI) return n.bubbleId
          }
      }
      getLastBubbleId(e) {
        return this.getLastBubble(e)?.bubbleId
      }
      getLastBubble(e) {
        const t = this.getComposerData(e)
        if (t) return t.conversation[t.conversation.length - 1]
      }
      getLastHumanBubble(e) {
        const t = this.getComposerData(e)
        if (t) {
          for (let s = t.conversation.length - 1; s >= 0; s--)
            if (t.conversation[s].type === fs.HUMAN) return t.conversation[s]
        }
      }
      getLastAiBubble(e) {
        const t = this.getComposerData(e)
        if (t) {
          for (let s = t.conversation.length - 1; s >= 0; s--)
            if (t.conversation[s].type === fs.AI) return t.conversation[s]
        }
      }
      getLastAiBubbleWhere(e, t) {
        const s = this.getComposerData(e)
        return s
          ? [...s.conversation].reverse().find((r) => r.type === fs.AI && t(r))
          : undefined
      }
      getLastBubbleWhere(e, t) {
        const s = this.getComposerData(e)
        return s ? [...s.conversation].reverse().find((r) => t(r)) : undefined
      }
      getLastAiBubbles(e) {
        const t = this.getComposerData(e)
        if (!t) return []
        const s = this.getLastHumanBubbleId(e),
          n = t.conversation.findIndex((r) => r.bubbleId === s)
        return n === -1 ? [] : t.conversation.slice(n + 1)
      }
      getComposerId(e) {
        return typeof e == "string" ? e : e.data.composerId
      }
      getActionButtons(e) {
        const t = this.getComposerId(e)
        return (
          this._reactiveStorageService.nonPersistentStorage.composerState
            .actionButtons?.[t] ?? []
        )
      }
      addActionButton(e, t, s, n) {
        const r = this.getComposerId(e)
        if (
          !this._reactiveStorageService.nonPersistentStorage.composerState
            .actionButtons
        )
          this._reactiveStorageService.setNonPersistentStorage(
            "composerState",
            "actionButtons",
            {},
          )
        else if (
          this._reactiveStorageService.nonPersistentStorage.composerState.actionButtons?.[
            r
          ]?.find((h) => h.id === n?.id)
        ) {
          console.error(
            "[composer] trying to add an action button that already exists, skipping",
          )
          return
        }
        const o =
            this._reactiveStorageService.nonPersistentStorage.composerState
              .actionButtons?.[r] ?? [],
          a = o.length === 0,
          l = o.length === 1,
          c = n?.id ?? rt()
        this._reactiveStorageService.setNonPersistentStorage(
          "composerState",
          "actionButtons",
          r,
          [
            ...(this._reactiveStorageService.nonPersistentStorage.composerState
              .actionButtons?.[r] ?? []),
            {
              id: c,
              label: t,
              onClick: (h) => {
                const u = s(h)
                return this.removeActionButton(r, c), u
              },
              onRemove: n?.onRemove,
              buttonType: a ? "primary" : "secondary",
              keybindingLabel: a
                ? "\u23CE"
                : l
                  ? wt
                    ? " \u2325\u23CE"
                    : " alt+\u23CE"
                  : undefined,
              icon: n?.icon,
              hintText: n?.hintText,
            },
          ],
        )
      }
      removeActionButton(e, t) {
        this._reactiveStorageService.nonPersistentStorage.composerState
          .actionButtons?.[e] &&
          this._reactiveStorageService.setNonPersistentStorage(
            "composerState",
            "actionButtons",
            e,
            (
              this._reactiveStorageService.nonPersistentStorage.composerState
                .actionButtons?.[e] ?? []
            ).filter((s) => (s.id === t ? (s.onRemove?.(), false) : true)),
          )
      }
      clearActionButtons(e) {
        if (
          !this._reactiveStorageService.nonPersistentStorage.composerState
            .actionButtons?.[e]
        )
          return
        ;(
          this._reactiveStorageService.nonPersistentStorage.composerState
            .actionButtons?.[e] ?? []
        ).forEach((s) => {
          s.onRemove?.()
        }),
          this._reactiveStorageService.setNonPersistentStorage(
            "composerState",
            "actionButtons",
            e,
            [],
          )
      }
      async getCurrentFilesContent(e) {
        const t = new Map()
        for (const s of e) {
          if (!(await this._fileService.exists(U.parse(s)))) continue
          const n = U.parse(s)
          let r
          try {
            r = await this._textModelService.createModelReference(n)
            const a = r.object.textEditorModel.getLinesContent()
            t.set(s, a)
          } finally {
            r?.dispose()
          }
        }
        return t
      }
      selectLastHumanBubbleAboveInput(e) {
        const t = this.getComposerData(e)
        if (!t) return false
        for (let s = t.conversation.length - 1; s >= 0; s--) {
          const n = t.conversation[s]
          if (n.type === fs.HUMAN)
            return (
              this.updateComposerData(e, { selectedBubbleId: n.bubbleId }),
              aU(n.bubbleId),
              true
            )
        }
        return false
      }
      getNonTabFilesInContext(e) {
        const t = this.getComposerData(e)
        if (!t) return []
        const s = new Set(
            t.tabs.filter((o) => o.type === "code").map((o) => o.uri.toString()),
          ),
          n = new Set(),
          r = new Set()
        for (const o of t.context.fileSelections) {
          const a = U.revive(o.uri)
          s.has(a.toString()) || n.add(a.toString())
        }
        for (const o of t.context.selections) {
          const a = U.revive(o.uri)
          !s.has(a.toString()) && !n.has(a.toString()) && r.add(a.toString())
        }
        return [
          ...Array.from(n).map((o) => ({ uri: U.parse(o), type: "file" })),
          ...Array.from(r).map((o) => ({ uri: U.parse(o), type: "selection" })),
        ]
      }
      async getRelevantFiles(e) {
        const t = this.getComposerData(e)
        if (!t) return []
        const s =
            t.gitGraphFileSuggestions ??
            (await this.getContextGraphFilesFromFileSelections(e)),
          n = this.getRecentlyViewedFiles(),
          r = new Set(),
          o = []
        for (const a of [...s, ...n]) {
          const l = $I(a)
          ;(await this._fileService.exists(U.parse(l))) &&
            (this._selectedContextService.shouldIgnoreUri(U.parse(l)) ||
              r.has(l) ||
              (r.add(l), o.push(a)))
        }
        return (
          await new Promise((a) =>
            this._selectedContextService.addOnCursorIgnoreLoadedCallback(() =>
              a(undefined),
            ),
          ),
          await this._selectedContextService.filterCursorIgnoredFiles(o, (a) =>
            U.revive(a.uri),
          )
        )
      }
      async getContextGraphFiles(e) {
        let t = 0
        for (; !this._everythingProviderService.provider && t < 20; )
          await new Promise((c) => setTimeout(c, 1e3)), t++
        if (!e.length) return []
        const s = e.map(async (c) =>
            (
              await this._gitGraphService.getRelatedFiles({
                uri: U.revive(c.uri),
                maxNumFiles: BUi,
              })
            ).map((u) => ({ ...u })),
          ),
          n = (await Promise.all(s)).flat(),
          r = new Set(e.map((c) => $I(c)))
        return n
          .reduce((c, h) => {
            const u = h.uri
            if (r.has(u.toString())) return c
            const d = c.find((g) => extUri.isEqual(g.uri, h.uri))
            return (
              (!d || h.weight > d.weight) &&
                (d && (c = c.filter((g) => !extUri.isEqual(g.uri, h.uri))),
                c.push(h)),
              c
            )
          }, [])
          .sort((c, h) => h.weight - c.weight)
          .slice(0, BUi)
          .map((c) => ({ uri: c.uri, fileName: bs(c.uri.fsPath) }))
      }
      getRecentlyViewedFiles() {
        return this._recentFilesTrackerService
          .getRecentlyViewedFiles(X8n)
          .map((t) => ({
            uri: this._workspaceContextService.resolveRelativePath(
              t.relativePath,
            ),
          }))
      }
      async getContextGraphFilesFromFileSelections(e) {
        let t = 0
        for (; !this._everythingProviderService.provider && t < 20; )
          await new Promise((r) => setTimeout(r, 1e3)), t++
        const s = this.getComposerData(e)
        if (!s) return []
        if (!s.context.fileSelections.length)
          return this.updateComposerData(e, { gitGraphFileSuggestions: [] }), []
        const n = await this.getContextGraphFiles(s.context.fileSelections)
        return this.updateComposerData(e, { gitGraphFileSuggestions: n }), n
      }
      getAssociatedFileUris(e) {
        const t = this.getComposerData(e)
        if (!t) return []
        const s = new Set(),
          n = (a) => s.add(a.toString()),
          r = (a) => {
            a?.forEach((l) => {
              l.to && n(this._workspaceContextService.resolveRelativePath(l.to))
            })
          },
          o = this.getToolFormer(e)
        return (
          t.conversation.forEach((a) => {
            if (a.type === fs.HUMAN) {
              a.attachedCodeChunks.forEach((c) => {
                n(
                  this._workspaceContextService.resolveRelativePath(
                    c.relativeWorkspacePath,
                  ),
                )
              }),
                a.codebaseContextChunks.forEach((c) => {
                  n(
                    this._workspaceContextService.resolveRelativePath(
                      c.relativeWorkspacePath,
                    ),
                  )
                }),
                a.commits?.forEach((c) => r(c.diff)),
                a.pullRequests?.forEach((c) => r(c.diff)),
                a.gitDiffs?.forEach((c) => r(c.diffs)),
                a.notepads?.forEach((c) => {
                  c.attachedCodeChunks?.forEach((h) => {
                    n(
                      this._workspaceContextService.resolveRelativePath(
                        h.relativeWorkspacePath,
                      ),
                    )
                  }),
                    c.commits?.forEach((h) => r(h.diff)),
                    c.pullRequests?.forEach((h) => r(h.diff)),
                    c.gitDiffs?.forEach((h) => r(h.diffs))
                })
              const l = o?.getBubbleData(a.bubbleId)
              if (l)
                switch (l.tool) {
                  case jt.READ_SEMSEARCH_FILES:
                    l.result?.codeResults.forEach((c) => {
                      c.codeBlock &&
                        c.codeBlock.relativeWorkspacePath &&
                        n(
                          this._workspaceContextService.resolveRelativePath(
                            c.codeBlock.relativeWorkspacePath,
                          ),
                        )
                    })
                    break
                  case jt.READ_FILE:
                    l.result?.relativeWorkspacePath &&
                      n(
                        this._workspaceContextService.resolveRelativePath(
                          l.result.relativeWorkspacePath,
                        ),
                      )
                    break
                  case jt.RIPGREP_SEARCH:
                    l.result?.internal?.results.forEach((c) => {
                      c.resource && n(U.parse(c.resource))
                    })
                    break
                  case jt.LIST_DIR: {
                    const c = this._workspaceContextService.resolveRelativePath(
                      l.params?.directoryPath ?? "",
                    )
                    l.result?.files.forEach((h) => {
                      h.isDirectory ||
                        n(
                          this._workspaceContextService.resolveRelativePath(
                            U.joinPath(c, h.name).toString(),
                          ),
                        )
                    })
                    break
                  }
                  case jt.EDIT_FILE:
                    l.params?.relativeWorkspacePath &&
                      n(
                        this._workspaceContextService.resolveRelativePath(
                          l.params.relativeWorkspacePath,
                        ),
                      )
                    break
                  case jt.SEMANTIC_SEARCH_FULL:
                    l.result?.codeResults.forEach((c) => {
                      c.codeBlock &&
                        c.codeBlock.relativeWorkspacePath &&
                        n(
                          this._workspaceContextService.resolveRelativePath(
                            c.codeBlock.relativeWorkspacePath,
                          ),
                        )
                    })
                    break
                }
            }
          }),
          t.context.fileSelections.forEach((a) => n(U.revive(a.uri))),
          Object.keys(t.codeBlockData).forEach((a) => n(U.parse(a))),
          Array.from(s).map((a) => U.parse(a))
        )
      }
      toggleMainComposerMode() {
        const e =
          this._reactiveStorageService.applicationUserPersistentStorage
            .composerState.mainComposerMode
        this._reactiveStorageService.setApplicationUserPersistentStorage(
          "composerState",
          "mainComposerMode",
          e === "chat" ? "edit" : "chat",
        )
      }
      setMainComposerMode(e) {
        this._reactiveStorageService.setApplicationUserPersistentStorage(
          "composerState",
          "mainComposerMode",
          e,
        )
      }
      getMainComposerMode() {
        return (
          this._reactiveStorageService.applicationUserPersistentStorage
            .composerState.mainComposerMode ?? "edit"
        )
      }
      getDebugInfo() {
        return {
          allComposersData: this.allComposersData,
          selectedComposerId: this.selectedComposerId,
          selectedChatId: this.selectedChatId,
        }
      }
      getLoadedComposers() {
        return this.composerDataHandleManager.getLoadedComposers()
      }
    }
  __decorate(
    [At("ComposerDataService.getCanToggleAgentic")],
    or.prototype,
    "getCanToggleAgentic",
    null,
  ),
    __decorate(
      [At("ComposerDataService.updateComposerDataAsync")],
      or.prototype,
      "updateComposerDataAsync",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getWeakHandleOptimistic")],
      or.prototype,
      "getWeakHandleOptimistic",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getSelectedIdByForceMode")],
      or.prototype,
      "getSelectedIdByForceMode",
      null,
    ),
    __decorate(
      [At("ComposerDataService.composerWasLoadedHook")],
      or.prototype,
      "composerWasLoadedHook",
      null,
    ),
    __decorate(
      [At("ComposerDataService.onInlineDiffsLoadedHook")],
      or.prototype,
      "setOnInlineDiffsLoadedHook",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getSelectedComposerHandle")],
      or.prototype,
      "getSelectedComposerHandle",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerHandleById")],
      or.prototype,
      "getComposerHandleById",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateSelectedComposer")],
      or.prototype,
      "updateSelectedComposer",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateComposerDataSetStore")],
      or.prototype,
      "updateComposerDataSetStore",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateComposerData")],
      or.prototype,
      "updateComposerData",
      null,
    ),
    __decorate(
      [
        At(
          "ComposerDataService.HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
        ),
      ],
      or.prototype,
      "HACKY_PLEASE_DO_NOT_USE_getComposerHandleById_ONLY_IF_LOADED",
      null,
    ),
    __decorate(
      [At("ComposerDataService.saveComposers")],
      or.prototype,
      "saveComposers",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerFromIdOrHandle")],
      or.prototype,
      "getComposerFromIdOrHandle",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerCodeBlock")],
      or.prototype,
      "getComposerCodeBlock",
      null,
    ),
    __decorate(
      [At("ComposerDataService.appendComposer")],
      or.prototype,
      "appendComposer",
      null,
    ),
    __decorate(
      [At("ComposerDataService.deleteComposer")],
      or.prototype,
      "deleteComposer",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateComposerCodeBlock")],
      or.prototype,
      "updateComposerCodeBlock",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getCodeBlockStatus")],
      or.prototype,
      "getCodeBlockStatus",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setCodeBlockStatus")],
      or.prototype,
      "setCodeBlockStatus",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getCodeBlocksOfStatuses")],
      or.prototype,
      "getCodeBlocksOfStatuses",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setGeneratingCodeBlocksToAborted")],
      or.prototype,
      "setGeneratingCodeBlocksToAborted",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlock")],
      or.prototype,
      "getLatestCodeBlock",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlocks")],
      or.prototype,
      "getLatestCodeBlocks",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlockForUri")],
      or.prototype,
      "getLatestCodeBlockForUri",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlocksOfStatuses")],
      or.prototype,
      "getLatestCodeBlocksOfStatuses",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlockVersion")],
      or.prototype,
      "getLatestCodeBlockVersion",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getVersionExcludingNonAppliedCodeBlocks")],
      or.prototype,
      "getVersionExcludingNonAppliedCodeBlocks",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLatestCodeBlockVersionForMessage")],
      or.prototype,
      "getLatestCodeBlockVersionForMessage",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getInlineDiff")],
      or.prototype,
      "getInlineDiff",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getAllInlineDiffs")],
      or.prototype,
      "getAllInlineDiffs",
      null,
    ),
    __decorate(
      [At("ComposerDataService.doesFileHaveInlineDiff")],
      or.prototype,
      "doesFileHaveInlineDiff",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getAllCachedCodeBlocks")],
      or.prototype,
      "getAllCachedCodeBlocks",
      null,
    ),
    __decorate(
      [At("ComposerDataService.addTypesToCapabilityStatuses")],
      or.prototype,
      "addTypesToCapabilityStatuses",
      null,
    ),
    __decorate(
      [At("ComposerDataService.removeTypesFromCapabilityStatuses")],
      or.prototype,
      "removeTypesFromCapabilityStatuses",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setCapabilityStatus")],
      or.prototype,
      "setCapabilityStatus",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setGeneratingCapabilitiesToAborted")],
      or.prototype,
      "setGeneratingCapabilitiesToAborted",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setGeneratingCapabilityCodeBlocksToAborted")],
      or.prototype,
      "setGeneratingCapabilityCodeBlocksToAborted",
      null,
    ),
    __decorate(
      [At("ComposerDataService.isRunningCapabilities")],
      or.prototype,
      "isRunningCapabilities",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getToolFormer")],
      or.prototype,
      "getToolFormer",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getPendingUserDecisionGroup")],
      or.prototype,
      "getPendingUserDecisionGroup",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getIsBlockingUserDecision")],
      or.prototype,
      "getIsBlockingUserDecision",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setGeneratingToolFormerToolsToAborted")],
      or.prototype,
      "setLoadingToolFormerToolsToCancelled",
      null,
    ),
    __decorate(
      [At("ComposerDataService.addCapabilityRan")],
      or.prototype,
      "addCapabilityRan",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerCapabilityCodeBlock")],
      or.prototype,
      "getComposerCapabilityCodeBlock",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateComposerCapabilityCodeBlock")],
      or.prototype,
      "updateComposerCapabilityCodeBlock",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerCapability")],
      or.prototype,
      "getComposerCapability",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getComposerBubble")],
      or.prototype,
      "getComposerBubble",
      null,
    ),
    __decorate(
      [At("ComposerDataService.updateComposerBubble")],
      or.prototype,
      "updateComposerBubble",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastHumanBubbleId")],
      or.prototype,
      "getLastHumanBubbleId",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastAiBubbleId")],
      or.prototype,
      "getLastAiBubbleId",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastBubbleId")],
      or.prototype,
      "getLastBubbleId",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastBubble")],
      or.prototype,
      "getLastBubble",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastHumanBubble")],
      or.prototype,
      "getLastHumanBubble",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastAiBubble")],
      or.prototype,
      "getLastAiBubble",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastAiBubbleWhere")],
      or.prototype,
      "getLastAiBubbleWhere",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLastBubbleWhere")],
      or.prototype,
      "getLastBubbleWhere",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getActionButtons")],
      or.prototype,
      "getActionButtons",
      null,
    ),
    __decorate(
      [At("ComposerDataService.addActionButton")],
      or.prototype,
      "addActionButton",
      null,
    ),
    __decorate(
      [At("ComposerDataService.removeActionButton")],
      or.prototype,
      "removeActionButton",
      null,
    ),
    __decorate(
      [At("ComposerDataService.clearActionButtons")],
      or.prototype,
      "clearActionButtons",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getCurrentFilesContent")],
      or.prototype,
      "getCurrentFilesContent",
      null,
    ),
    __decorate(
      [At("ComposerDataService.selectLastHumanBubbleAboveInput")],
      or.prototype,
      "selectLastHumanBubbleAboveInput",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getNonTabFilesInContext")],
      or.prototype,
      "getNonTabFilesInContext",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getRelevantFiles")],
      or.prototype,
      "getRelevantFiles",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getContextGraphFiles")],
      or.prototype,
      "getContextGraphFiles",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getRecentlyViewedFiles")],
      or.prototype,
      "getRecentlyViewedFiles",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getContextGraphFilesFromFileSelections")],
      or.prototype,
      "getContextGraphFilesFromFileSelections",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getAssociatedFileUris")],
      or.prototype,
      "getAssociatedFileUris",
      null,
    ),
    __decorate(
      [At("ComposerDataService.toggleMainComposerMode")],
      or.prototype,
      "toggleMainComposerMode",
      null,
    ),
    __decorate(
      [At("ComposerDataService.setMainComposerMode")],
      or.prototype,
      "setMainComposerMode",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getMainComposerMode")],
      or.prototype,
      "getMainComposerMode",
      null,
    ),
    __decorate(
      [At("ComposerDataService.getLoadedComposers")],
      or.prototype,
      "getLoadedComposers",
      null,
    ),
    (or = hLt =
      __decorate(
        [
          __param(0, et),
          __param(1, it),
          __param(2, ei),
          __param(3, Z),
          __param(4, everythingProviderService),
          __param(5, tK),
          __param(6, M_),
          __param(7, nt),
          __param(8, Xt),
          __param(9, selectedContextService),
          __param(10, vk),
        ],
        or,
      )),
    Ve(Na, or, 0);

  return {
    $Ui,
    aiAssertService,
    Na,
  }
}
