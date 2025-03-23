// @ts-check

export function createChatDataService(params) {
  const { Re, V, xR, c6n, U, OT, L1, S1t, Ha, ce, Ln, d6n, f6n, fs, OMi, aG, B9i, _Mi, __decorate, __param, et, Xt, it, u0, YC, ei, nt, Ht, nPt, M_, T1, G9i, yi, QJ, ue, Vo, tg, Ve } = params;

  var cPt,
  J6n = class extends Error {
    constructor(i) {
      super(i)
    }
  },
  sze = "8798650935798651",
  Xle = "8329855760410817",
  cv = Re("chatDataService"),
  Qle = class extends V {
    static {
      cPt = this
    }
    get chatDataStorageID() {
      return xR.CHAT_REACTIVE_STORAGE_ID
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y) {
      super(),
        (this.f = e),
        (this.g = t),
        (this.h = s),
        (this.j = n),
        (this.m = r),
        (this.n = o),
        (this.q = a),
        (this.r = l),
        (this.t = c),
        (this.u = h),
        (this.w = u),
        (this.y = d),
        (this.z = g),
        (this.C = p),
        (this.F = m),
        (this.G = b),
        (this.H = y),
        ([
          this.chatData,
          this.setChatData,
          this.persistSelectedChat,
          this.sortTabs,
          this.resetTabs,
        ] = c6n(this.f, this.n, this.F, this.g, this.chatDataStorageID, {
          isNotebook: !1,
          hasNonemptySelection: !1,
        }))
      for (const w of cPt.registeredActions) w(this.n, this)
    }
    getTabData(e) {
      return this.chatData.tabs.find((t) => t.tabId === e)
    }
    updateTabData(e, t) {
      this.setChatData(
        "tabs",
        (s) => s.tabId === e,
        (s) => ({ ...s, ...t }),
      )
    }
    get selectedTab() {
      const e = this.chatData.tabs.find(
        (t) => t.tabId === this.chatData.selectedTabId,
      )
      return e === void 0
        ? (console.log(
            "[aichat] selectedTab is undefined, this should not happen",
          ),
          this.chatData.tabs.length === 0
            ? this.resetTabs()
            : (this.setChatData("selectedTabId", this.chatData.tabs[0].tabId),
              this.chatData.tabs[0]))
        : e
    }
    get selectedTabId() {
      return this.chatData.selectedTabId
    }
    updateSelectedTab(e) {
      this.chatData.selectedTabId &&
        this.updateTabData(this.chatData.selectedTabId, e)
    }
    getBubbleData(e, t) {
      return this.getTabData(e)?.bubbles.find((n) => n.id === t)
    }
    getUserBubbleData(e, t) {
      return this.getTabData(e)?.bubbles.find((n) => n.id === t)
    }
    updateBubbleData(e, t, s) {
      this.setChatData(
        "tabs",
        (n) => n.tabId === e,
        "bubbles",
        (n) => n.id === t,
        (n) => ({ ...n, ...s }),
      )
    }
    get selectedBubble() {
      const e = this.selectedTab
      if (e && e.selectedBubbleId)
        return e.bubbles.find((t) => t.id === e.selectedBubbleId)
    }
    get selectedBubbleId() {
      return this.selectedTab.selectedBubbleId
    }
    updateSelectedBubble(e) {
      const t = this.selectedTab,
        s = this.selectedBubbleId
      t && s && this.updateBubbleData(t.tabId, s, e)
    }
    get editingBubble() {
      const e = this.selectedTab
      if (e && e.editingBubbleId)
        return e.bubbles.find((t) => t.id === e.editingBubbleId)
    }
    get editingBubbleId() {
      return this.selectedTab.editingBubbleId
    }
    updateEditingBubble(e) {
      const t = this.selectedTab,
        s = this.editingBubbleId
      t && s && this.updateBubbleData(t.tabId, s, e)
    }
    get lastFocusedBubble() {
      const e = this.selectedTab
      if (e && e.lastFocusedBubbleId)
        return e.bubbles.find((t) => t.id === e.lastFocusedBubbleId)
    }
    get lastFocusedBubbleId() {
      return this.selectedTab.lastFocusedBubbleId
    }
    updateLastFocusedBubble(e) {
      const t = this.selectedTab,
        s = this.lastFocusedBubbleId
      t && s && this.updateBubbleData(t.tabId, s, e)
    }
    static {
      this.registeredActions = []
    }
    static registerAction(e) {
      this.registeredActions.push(e)
    }
    isTabGenerating(e, t) {
      const s = this.n.nonPersistentStorage.inprogressAIGenerations.find(
        (n) =>
          n.metadata !== void 0 &&
          (n.metadata.type === "chat" ||
            n.metadata.type === "codeInterpreter" ||
            (t?.includeExecuting === !0 &&
              n.metadata.type === "interpreterExecution")) &&
          n.metadata.tabId === e,
      )
      return s === void 0
        ? { isGenerating: !1 }
        : {
            isGenerating: !0,
            cancel: () => {
              this.n.setNonPersistentStorage("inprogressAIGenerations", (r) =>
                r.filter(
                  (o) =>
                    !(
                      o.metadata !== void 0 &&
                      (o.metadata.type === "chat" ||
                        o.metadata.type === "codeInterpreter" ||
                        o.metadata.type === "interpreterExecution") &&
                      o.metadata.tabId === e
                    ),
                ),
              )
            },
            generation: s,
          }
    }
    isChatFocused() {
      return this.n.nonPersistentStorage.chatState.isFocused
    }
    getReactiveCurrentChat() {
      const e = this.chatData.selectedTabId ?? this.chatData.tabs[0]?.tabId
      return e === void 0
        ? void 0
        : this.chatData.tabs.find((s) => s.tabId === e)
    }
    async searchFiles(e, t) {
      const s = `{${t.map((n) => `"${n.relativePath}"`).join(",")}}`
      return this.w.getEmbeddingChunks(e, 20, s)
    }
    async getExactDimensionBytes(e) {
      const t = U.file(e.path),
        s = (await this.q.readFile(t)).value.buffer
      return new OT({ data: s, dimension: e.dimension })
    }
    getRescorerFromEmbeddingsResults(e) {
      const t =
          e?.case === "fileSearchResults"
            ? e.value.results.map((h) => h.score)
            : [],
        s = Math.min(...t),
        n = Math.max(...t),
        r = 1e-6,
        o = t.map((h) => (h - s) / (n - s + r)),
        a = new Map(
          o.map((h, u) => [
            (e?.value.results[u]).file?.relativeWorkspacePath,
            h,
          ]),
        )
      let l = new Set()
      return (h) => (
        l.add(h.relativePath),
        (a.get(L1(h.relativePath)) ?? 0) * 0.8 + 0.2 * h.score
      )
    }
    async fitLongContextDataIntoTokenLimit(
      { conversationHistory: e, contextResults: t },
      s,
      n,
    ) {
      if (s === void 0) return { conversationHistory: e, contextResults: t }
      const r = s * 3,
        o = await Promise.all(
          e.flatMap((k) =>
            k.attachedFolders.map(async (E) =>
              (await this.t.getFilesOfFolder(E)).map((D) => ({
                ...D,
                truncated: D.truncated,
                score: D.score,
              })),
            ),
          ),
        ),
        a = new Set(o.flatMap((k) => k.map((E) => L1(E.relativePath)))),
        l =
          t?.case === "fileSearchResults"
            ? t.value.results
                .map((k, E) => ({
                  relativePath: k.file?.relativeWorkspacePath,
                  sizeBytes: k.file?.contents.length,
                  truncated: !1,
                  score: k.score,
                }))
                .filter(
                  (k) =>
                    typeof k.relativePath == "string" &&
                    typeof k.sizeBytes == "number" &&
                    !a.has(k.relativePath),
                )
            : []
      if (
        [...o, l].reduce(
          (k, E) =>
            k +
            E.reduce(
              (D, P) =>
                P.truncated && P.sizeBytes !== void 0 ? D : D + P.sizeBytes,
              0,
            ),
          0,
        ) < r
      ) {
        let k = 0
        const E = e.map((P) => {
          const L = { ...P },
            A = P.attachedFolders.map((F) => {
              const H = k
              return (
                k++,
                (async () =>
                  new S1t({
                    relativePath: F,
                    files: await this.t.folderFilesContentlessToFolderFiles(
                      o[H],
                    ),
                  }))()
              )
            })
          return (async () => (
            (L.attachedFoldersNew = await Promise.all(A)), new Ha(L)
          ))()
        })
        return { conversationHistory: await Promise.all(E), contextResults: t }
      }
      const h = await n(),
        u = o.map((k) => k.map((E) => ({ ...E, score: h(E) }))),
        d = [...u, l],
        g = await this.t.shrinkBagsOfFiles_MAY_RETURN_TRUNCATED_OR_EMPTY_FILES(
          d,
          r,
        ),
        p = g.slice(0, u.length)
      let m = 0
      const b = e.map((k) => {
          const E = { ...k },
            D = k.attachedFolders.map((P) => {
              const L = m
              return (
                m++,
                (async () =>
                  new S1t({
                    relativePath: P,
                    files: await this.t.folderFilesContentlessToFolderFiles(
                      p[L],
                    ),
                  }))()
              )
            })
          return (async () => (
            (E.attachedFoldersNew = await Promise.all(D)), new Ha(E)
          ))()
        }),
        y = await Promise.all(b),
        w = g[u.length],
        C = new Map(w.map((k) => [k.relativePath, k])),
        S = new Map(
          (
            await Promise.all(
              t?.value.results.map(async (k) =>
                "file" in k
                  ? {
                      file: k.file,
                      isSourceFile:
                        "file" in k &&
                        (await this.t.isSourceFile(
                          k.file?.relativeWorkspacePath,
                        )),
                    }
                  : [],
              ) ?? [],
            )
          )
            .flat()
            .filter((k) => k.isSourceFile)
            .map(({ file: k }) => [k?.relativeWorkspacePath, k]),
        ),
        x =
          t?.case === "fileSearchResults"
            ? {
                case: "fileSearchResults",
                value: {
                  results: t.value.results.filter(
                    (k) =>
                      k.file?.relativeWorkspacePath !== void 0 &&
                      S.has(k.file.relativeWorkspacePath) &&
                      C.get(k.file.relativeWorkspacePath)?.truncated === !1,
                  ),
                },
              }
            : t
      return { conversationHistory: y, contextResults: x }
    }
    isCompatibleScheme(e) {
      return [
        ce.file,
        ce.vscodeRemote,
        ce.vscodeNotebook,
        ce.notepad,
        ce.vscodeTerminal,
      ].includes(e)
    }
    getCurrentFile() {
      const e = this.C.getLastActiveFileEditor()
      if (!e) return
      const t = Ln.getOriginalUri(e.input)
      if (t && this.isCompatibleScheme(t.scheme))
        return { uri: t, isCurrentFile: !0 }
    }
    async getConversationHistory({ tab: e, upUntil: t }) {
      const s = []
      try {
        const n = this.chatData.pinnedContexts,
          r = e.bubbles.filter((c) => c.type === "user"),
          o = r.length > 0 ? r[r.length - 1] : void 0
        if (!o) throw new Error("No user bubbles found")
        const a = this.getCurrentFile(),
          l = a ? this.g.asRelativePath(U.revive(a.uri)) : void 0
        for (let c = 0; c < e.bubbles.length; c++) {
          const h = e.bubbles[c]
          if (h.type === "user") {
            let u = Promise.resolve([]),
              d = Promise.resolve([]),
              g = Promise.resolve([]),
              p = Promise.resolve([]),
              m = Promise.resolve([]),
              b = []
            const y = []
            let w = Promise.resolve([]),
              C = []
            c === 0 &&
              (e.selectedRecentFiles?.length ?? 0) > 0 &&
              ((C = e.selectedRecentFiles ?? []),
              this.n.setWorkspaceUserPersistentStorage(
                "persistentChatMetadata",
                (ke) => ke.bubbleId === o.id && ke.tabId === e.tabId,
                "usedRecentFiles",
                C,
              ),
              (C = C.filter((ke) => !(a && ke.relativePath === l))))
            let S = [],
              x = !1,
              k = n?.fileSelections ?? []
            const E = [
                ...(h.fileSelections ?? []),
                ...(c === 0 ? k : []),
                ...(c === 0 ? [...C, ...S] : []),
              ],
              D = d6n(E)
            D.length > 0 && (u = this.H.getCodeChunksFromFileSelections(D))
            const { folderSelections: P } = h
            P && P.length > 0 && (b = P.map((ke) => ke.relativePath)),
              h.selectedCommits !== void 0 &&
                h.selectedCommits.length > 0 &&
                (d = this.H.getCommitDetailsFromPartialCommits(
                  h.selectedCommits,
                )),
              h.selectedPullRequests !== void 0 &&
                h.selectedPullRequests.length > 0 &&
                (g = this.H.getPullRequestDetailsFromPartialPullRequests(
                  h.selectedPullRequests,
                )),
              (h.gitDiff !== void 0 ||
                h.gitDiffFromBranchToMain !== void 0 ||
                x) &&
                (p = this.H.getDiffDetailsFromGitDiff({
                  gitDiff: h.gitDiff ?? x ?? !1,
                  gitDiffFromBranchToMain: h.gitDiffFromBranchToMain ?? !1,
                })),
              h.selectedImages &&
                h.selectedImages.length > 0 &&
                (w = this.H.getImagesFromImageSelection({
                  setContext: (ke) => {
                    this.setChatData(
                      "tabs",
                      ({ tabId: Ae }) => e.tabId === Ae,
                      "bubbles",
                      ({ id: Ae }) => h.id === Ae,
                      ...args,
                    )
                  },
                  getContext: () => this.getBubbleData(e.tabId, h.id),
                })),
              h.notepads &&
                h.notepads.length > 0 &&
                this.n.applicationUserPersistentStorage.notepadState
                  .isNotepadEnabled !== !1 &&
                (m = this.H.getNotepadsContext(h))
            const [L, A, F, H, B, z] = await Promise.all([u, d, g, p, w, m])
            let K = n?.codeSelections ?? []
            const Q = [
                ...(h.selections ?? []),
                ...K,
                ...(h.terminalSelections ?? []),
              ],
              se = f6n(Q)
            if (se.length > 0) {
              const ke = await Promise.all(
                se
                  .map((Ae) => this.H.getCodeChunksFromCodeSelection(Ae))
                  .filter((Ae) => Ae !== void 0),
              )
              L.push(...ke)
            }
            const he = h.terminalFiles ?? []
            if (he.length > 0) {
              const ke = await this.H.getCodeChunksFromTerminalSelections(he)
              L.push(...ke)
            }
            let ae = h.codebaseResults
            const de = new Map(
                (ae ?? [])?.map((ke) => [
                  JSON.stringify({
                    relativeWorkspacePath: ke.relativeWorkspacePath,
                    startLineNumber: ke.range?.startPosition?.line,
                  }),
                  ke.detailedLines,
                ]),
              ),
              Ee =
                this.n.workspaceUserPersistentStorage.persistentChatMetadata.find(
                  ({ bubbleId: ke, tabId: Ae }) =>
                    ke === h.id && Ae === e.tabId,
                )?.intermediateChunks
            Ee !== void 0 &&
              (ae = Ee.map((ke) => {
                const Ae = de.get(
                  JSON.stringify({
                    relativeWorkspacePath: ke.chunkIdentity.fileName,
                    startLineNumber: ke.chunkIdentity.startLine,
                  }),
                )
                return {
                  relativeWorkspacePath: ke.chunkIdentity.fileName,
                  startLineNumber: ke.chunkIdentity.startLine,
                  lines: ke.chunkIdentity.text.split(`
`),
                  contents: ke.chunkIdentity.text,
                  detailedLines:
                    Ae ??
                    ke.chunkIdentity.text
                      .split(
                        `
`,
                      )
                      .map((Pe, ze) => ({
                        text: Pe,
                        lineNumber: ze + ke.chunkIdentity.startLine + 1,
                        isSignature: !1,
                      })),
                }
              })),
              s.push(
                new Ha({
                  text: h.text ?? "",
                  bubbleId: h.id,
                  type: fs.HUMAN,
                  codebaseContextChunks: ae,
                  attachedCodeChunks: L,
                  attachedFolders: b,
                  attachedFoldersNew: y,
                  commits: A,
                  pullRequests: F,
                  gitDiffs: H,
                  images: B,
                  notepads: z,
                }),
              )
          } else if (h.type === "ai") {
            let u = h.text
            const d = /⛢Action☤[^⛢]*⛢\/Action☤/g
            ;(u = u.replace(d, "")),
              (u = u.replace(/⛢RawAction☤/g, "\u26E2Action\u2624")),
              (u = u.replace(
                /⛢\/RawAction☤/g,
                `\u26E2/Action\u2624
`,
              )),
              (u = u.replace(/⛢/g, "<")),
              (u = u.replace(/☤/g, ">"))
            const g =
                this.n.nonPersistentStorage.nonPersistentChatMetadata.find(
                  ({ bubbleId: w, tabId: C }) => w === h.id && C === e.tabId,
                ),
              p = g?.approximateLintErrors ?? [],
              m =
                g?.lints?.filter(
                  (w) => w.codeBlockUri !== void 0 && w.lints.lints.length > 0,
                ) ?? [],
              b = (
                await Promise.all(
                  m.map(async (w) => {
                    if (w.codeBlockUri === void 0) return []
                    let C
                    try {
                      C = this.z
                        .listCodeEditors()
                        .find(
                          (x) =>
                            x.getModel()?.uri.toString() ===
                            w.codeBlockUri?.toString(),
                        )
                        ?.getModel()
                        ?.getValue()
                    } catch (S) {
                      return (
                        console.warn(
                          "Error getting model value for chat convo message lints",
                          S,
                        ),
                        []
                      )
                    }
                    return C === void 0
                      ? []
                      : [
                          new OMi({
                            lints: w.lints,
                            chatCodeblockModelValue: C,
                          }),
                        ]
                  }),
                )
              ).flat(),
              y = u.match(new RegExp(sze, "g"))
            for (const w of y ?? []) {
              const C = u.indexOf(w),
                S = u.substring(0, C)
              s.push(
                new Ha({
                  text: S,
                  type: fs.AI,
                  assistantSuggestedDiffs: (h.suggestedDiffs ?? []).flatMap(
                    (E) => {
                      try {
                        return [aG.fromJson(E)]
                      } catch {
                        return []
                      }
                    },
                  ),
                }),
              )
              const x = u.indexOf(Xle, C + w.length),
                k = u.substring(C + w.length, x)
              s.push(
                new Ha({
                  text: k,
                  type: fs.HUMAN,
                  assistantSuggestedDiffs: (h.suggestedDiffs ?? []).flatMap(
                    (E) => {
                      try {
                        return [aG.fromJson(E)]
                      } catch {
                        return []
                      }
                    },
                  ),
                }),
              ),
                (u = u.substring(x + Xle.length))
            }
            ;(u = B9i(u, h.interpreterModeCells)),
              u.trim().length > 0 &&
                s.push(
                  new Ha({
                    text: u,
                    bubbleId: h.id,
                    type: fs.AI,
                    assistantSuggestedDiffs: (h.suggestedDiffs ?? []).flatMap(
                      (w) => {
                        try {
                          return [aG.fromJson(w)]
                        } catch {
                          return []
                        }
                      },
                    ),
                    interpreterResults:
                      h.interpreterModeCells?.map(
                        (w) =>
                          new _Mi({
                            output: w.output,
                            success: w.status === "success",
                          }),
                      ) ?? [],
                    approximateLintErrors: p,
                    lints: b,
                  }),
                )
          }
          if (h.id === t) break
        }
        return s
      } catch (n) {
        throw (
          (n instanceof J6n &&
            this.r.error(
              "Image selected in conversation was not found on disk",
            ),
          n)
        )
      }
    }
  }
  ;(Qle = cPt =
    __decorate(
      [
        __param(0, et),
        __param(1, it),
        __param(2, Xt),
        __param(3, u0),
        __param(4, YC),
        __param(5, ei),
        __param(6, nt),
        __param(7, Ht),
        __param(8, nPt),
        __param(9, M_),
        __param(10, T1),
        __param(11, G9i),
        __param(12, yi),
        __param(13, QJ),
        __param(14, ue),
        __param(15, Vo),
        __param(16, tg),
      ],
      Qle,
    )),
    Ve(cv, Qle, 0);

    return {
      sze,
      Xle,
      cv,
      Qle,
    };
}
