// @ts-check

export function createSelectedContextService(params) {
  const { V, U, ce, R, g0, Dg, vp, vI, bn, cm, C1t, ize, V5i, FT, cI, k1t, XN, J9, eoe, rJ, ev, _T, N$, L1, tPt, c2, Ri, TVe, RC, Cf, iy, __decorate, __param, Ac, Xt, u0, it, nt, YC, Vo, DR, mo, QJ, hw, ei, Md, Z, Re, Ve } = params;

  var lPt = class extends V {
    getUndoRedoUri(e) {
      return U.from({ scheme: ce.contextObject, path: e })
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p) {
      super(),
        (this.u = e),
        (this.w = t),
        (this.y = s),
        (this.z = n),
        (this.C = r),
        (this.F = o),
        (this.G = a),
        (this.H = l),
        (this.I = c),
        (this.J = h),
        (this.L = u),
        (this.M = d),
        (this.N = g),
        (this.O = p),
        (this.a = new Set([
          "package-lock.json",
          "yarn.lock",
          "pnpm-lock.yaml",
          ".git",
          "node_modules",
          "__pycache__",
        ])),
        (this.b = {}),
        (this.f = []),
        (this.g = !1),
        (this.j = this.D(new R())),
        (this.q = this.D(new R())),
        (this.onDidAddContext = this.j.event),
        (this.onDidRemoveContext = this.q.event),
        (this.r = () => Promise.resolve(void 0)),
        (this.t = () => Promise.resolve()),
        (this.h = this.O.createInstance(g0)),
        this.Y(),
        this.N.setIsUriCursorIgnored(this.shouldIgnoreUri.bind(this))
    }
    setGetComposerDataHandle(e) {
      this.r = e
    }
    setUpdateComposerSummaryIfOutdated(e) {
      this.t = e
    }
    getMentions(e, t, s) {
      if (Dg(t)) {
        const n = vp(t, s)
        return (e.mentions[t]?.[n] || []).map((r) => r.uuid)
      } else return (e.mentions[t] || []).map((n) => n.uuid)
    }
    async getImagesFromImageSelection({
      setContext: e,
      getContext: t,
      disableImageRemoval: s,
    }) {
      const n = t().selectedImages ?? []
      return (
        await Promise.all(
          n.map(async (o) => {
            const a = () => {
              if (s) return
              const l = t().selectedImages ?? []
              this.removeContext({
                contextType: "selectedImages",
                setContext: e,
                getContext: t,
                index: l.findIndex((c) => vI("selectedImages", c, o)),
              })
            }
            return this.resizeImage(o, a, 2048)
          }),
        )
      ).filter(bn)
    }
    async getHumanChanges(e) {
      return (await e)
        .filter((n) => !this.shouldIgnoreUri(n.uri))
        .map((n) => ({
          relativeWorkspacePath: this.z.asRelativePath(U.revive(n.uri)),
          renderedDiffs: n.diffs.map((r) => ({
            startLineNumber: r.startLineNumber,
            endLineNumberExclusive: r.endLineNumberExclusive,
            beforeContextLines: r.beforeContextLines,
            removedLines: r.removedLines,
            addedLines: r.addedLines,
            afterContextLines: r.afterContextLines,
          })),
        }))
    }
    async getNotepadsContext(e) {
      try {
        const t = e.notepads?.map((n) => n.notepadId) ?? []
        return (
          await Promise.all(
            t.map(async (n) => {
              const r = this.H.getNotepadData(n)
              if (!r) return null
              const o = cm()
              for (const g of Object.keys(r.context))
                Dg(g)
                  ? (o[g] = this.P(r.context[g], e[g], g))
                  : e[g] === void 0 && (o[g] = r.context[g])
              const [a, l, c, h] = await Promise.all([
                  this.getCodeChunks(o),
                  this.getCommitDetailsFromPartialCommits(
                    o.selectedCommits ?? [],
                  ),
                  this.getPullRequestDetailsFromPartialPullRequests(
                    o.selectedPullRequests ?? [],
                  ),
                  this.getDiffDetailsFromGitDiff({
                    gitDiff: o.gitDiff,
                    gitDiffFromBranchToMain: o.gitDiffFromBranchToMain,
                  }),
                ]),
                d = (o.folderSelections ?? []).map((g) => g.relativePath)
              return {
                name: r.name,
                text: r.text,
                attachedCodeChunks: a,
                attachedFolders: d,
                commits: l,
                pullRequests: c,
                gitDiffs: h,
                images: [],
              }
            }),
          )
        ).filter((n) => bn(n))
      } catch (t) {
        return console.error("Error in getNotepadsContext:", t), []
      }
    }
    async getComposersContext(e) {
      const t = e.composers?.map((n) => n.composerId) ?? []
      return (
        await Promise.all(
          t.map(async (n) => {
            const r = await this.r(n)
            try {
              return r === void 0
                ? void 0
                : this.shouldUpdateConversationSummary(r.data)
                  ? (await this.t(n),
                    new C1t({
                      name: r.data.name,
                      conversationSummary:
                        r.data.latestConversationSummary?.summary,
                    }))
                  : new C1t({
                      name: r.data.name,
                      conversationSummary:
                        r.data.latestConversationSummary.summary,
                    })
            } finally {
              r?.dispose()
            }
          }),
        )
      ).filter(bn)
    }
    shouldUpdateConversationSummary(e) {
      return (
        e.latestConversationSummary === void 0 ||
        e.latestConversationSummary.lastBubbleId !==
          e.conversation.at(-1)?.bubbleId
      )
    }
    P(e, t, s) {
      return t ? e.filter((n) => !t.some((r) => vI(s, n, r))) : e
    }
    async resizeImage(e, t, s = 2048) {
      return ize(e, t, this.C, s)
    }
    async getCodeChunksFromTerminalSelections(e) {
      try {
        return (
          await Promise.all(
            e.map(async (s) => {
              const n = await V5i(this.G, U.from(s.uri))
              if (n !== void 0)
                return await this.getCodeChunksFromCodeSelection(n)
            }),
          )
        ).filter((s) => s !== void 0)
      } catch (t) {
        return console.error(t), []
      }
    }
    async getDiffDetailsFromGitDiff({
      gitDiff: e,
      gitDiffFromBranchToMain: t,
      baseRef: s,
      unifiedContextLines: n,
      ref: r,
    }) {
      try {
        let o = []
        return (
          e &&
            o.push(
              this.F.getGitDiff().then((a) => {
                if (a !== void 0)
                  return new FT({
                    diffs: a.map((l) => this.fileDiffToProtoDiff(l)),
                    diffType: cI.DIFF_TO_HEAD,
                  })
              }),
            ),
          t &&
            o.push(
              this.F.getBranchDiff({
                baseRef: s,
                unifiedContextLines: n,
                ref: r,
              }).then((a) => {
                if (a !== void 0)
                  return new FT({
                    diffs: a.map((l) => this.fileDiffToProtoDiff(l)),
                    diffType: cI.DIFF_FROM_BRANCH_TO_MAIN,
                  })
              }),
            ),
          await Promise.all(o).then((a) => a.filter((l) => l !== void 0))
        )
      } catch (o) {
        return console.error("Error in getDiffDetailsFromGitDiff:", o), []
      }
    }
    async getCurrentBranch() {
      return await this.F.getCurrentBranch()
    }
    async getDefaultBranch() {
      return await this.F.getDefaultBranch()
    }
    async getGitUser() {
      return await this.F.getGitUser()
    }
    async getLastCommit() {
      const e = await this.F.getLastCommits(1)
      return e.length > 0 ? e[0] : void 0
    }
    async getPullRequestDetailsFromPartialPullRequests(e) {
      try {
        return (
          await Promise.all(e.map(async (s) => this.F.getFullPr(s.number)))
        )
          .filter((s) => s !== void 0)
          .map(
            (s) =>
              new k1t({
                title: s.title,
                body: s.body,
                diff: s?.diff?.map((n) => this.fileDiffToProtoDiff(n)) ?? [],
              }),
          )
      } catch (t) {
        return (
          console.error(
            "Error in getPullRequestDetailsFromPartialPullRequests:",
            t,
          ),
          []
        )
      }
    }
    async getCommitDetailsFromPartialCommits(e) {
      try {
        return (
          await Promise.all(e.map(async (n) => this.F.getFullCommit(n.sha)))
        )
          .filter((n) => n !== void 0)
          .map(
            (n) =>
              new XN({
                sha: n.sha,
                message: n.message,
                description: n.description,
                diff: n.diff.map((r) => this.fileDiffToProtoDiff(r)),
              }),
          )
      } catch (t) {
        return (
          console.error("Error in getCommitDetailsFromPartialCommits:", t), []
        )
      }
    }
    fileDiffToProtoDiff(e) {
      return new J9({
        from: e.from,
        to: e.to,
        chunks: e.chunks.map(
          (t) =>
            new eoe({
              content: t.content,
              lines: t.changes.map((s) => s.content),
              oldStart: t.oldStart,
              oldLines: t.oldLines,
              newStart: t.newStart,
              newLines: t.newLines,
            }),
        ),
      })
    }
    async getCodeChunks(e, t) {
      const s = e.fileSelections,
        n = e.selections,
        r = e.folderSelections ?? [],
        o = e.terminalFiles ?? [],
        a = e.terminalSelections ?? []
      return (
        await Promise.all([
          (
            await Promise.all(
              n.map((h) => this.getCodeChunksFromCodeSelection(h)),
            )
          ).filter(bn),
          this.getCodeChunksFromFileSelections(s, { ...t, context: e }),
          ...(r ?? []).map((h) => this.getCodeChunksFromFolder(h, t)),
          (
            await Promise.all(
              a.map((h) => this.getCodeChunksFromCodeSelection(h)),
            )
          ).filter(bn),
          this.getCodeChunksFromTerminalSelections(o),
        ])
      )
        .flat()
        .filter(bn)
    }
    async getCodeChunksFromFileSelections(e, t) {
      try {
        return (
          await Promise.allSettled(
            e.map(async (n) => {
              const r = U.revive(n.uri),
                o = t?.worktreePath
                  ? this.getWorktreeUri(r, t.worktreePath)
                  : r,
                a = await rJ(this.w, this.y, { ...n, uri: o })
              if (a === void 0) return
              const c =
                (t?.context
                  ? this.getMentions(t.context, "fileSelections", n)
                  : []
                ).length > 0
                  ? ev.MENTIONED_FILE
                  : ev.COMPOSER_FILE
              return await this.getCodeChunksFromCodeSelection(
                { ...a, uri: n.uri },
                { intent: c },
              )
            }),
          )
        )
          .filter((n) => n.status === "fulfilled")
          .map((n) => n.value)
          .filter(bn)
      } catch (s) {
        return console.error(s), []
      }
    }
    getWorktreeUri(e, t) {
      return U.joinPath(U.file(t), this.z.asRelativePath(e))
    }
    async getCodeChunksFromCodeSelection(e, t) {
      if (
        (await new Promise((s) =>
          this.addOnCursorIgnoreLoadedCallback(() => s(void 0)),
        ),
        !this.shouldIgnoreUri(e.uri))
      )
        try {
          const s = e?.rawText?.split(`
`) ?? [""]
          if (s.length === 0) return
          const n = Math.min(
              e.range.positionLineNumber,
              e.range.selectionStartLineNumber,
            ),
            r = this.z.asRelativePath(U.revive(e.uri))
          return new _T({
            relativeWorkspacePath: r,
            startLineNumber: n,
            lines: s,
            summarizationStrategy:
              {
                none: N$.NONE_UNSPECIFIED,
                embeddings: N$.EMBEDDED,
                summarized: N$.SUMMARIZED,
              }[e.summarizationStrategy ?? "none"] ?? N$.NONE_UNSPECIFIED,
            intent: t?.intent ?? ev.CODE_SELECTION,
          })
        } catch (s) {
          console.error(s)
          return
        }
    }
    async getCodeChunksFromFolder(e, t) {
      const { relativePath: s } = e,
        n = this.z.resolveRelativePath(L1(s)),
        r = t?.worktreePath ? U.joinPath(U.file(t.worktreePath), s) : n,
        o = this.Q(r),
        a = this.z.getWorkspaceFolder(n)?.uri,
        l = a === void 0 ? [] : await this.Q(a),
        c = tPt()
          .add(await o)
          .add(await l),
        h = 4e5,
        u = []
      return (
        await this.R(r, c, u, h), this.getCodeChunksFromFileSelections(u, t)
      )
    }
    async Q(e) {
      const t = U.joinPath(e, ".gitignore")
      try {
        return (await this.C.readFile(t)).value
          .toString()
          .split(
            `
`,
          )
          .filter((n) => n.trim() !== "" && !n.startsWith("#"))
      } catch {
        return []
      }
    }
    async R(e, t, s, n) {
      const o = await this.C.resolve(e, { resolveMetadata: !0 })
      let a = 0
      if (o.isDirectory && o.children)
        for (const l of o.children) {
          const c = U.joinPath(e, l.name),
            h = this.z.asRelativePath(c)
          if (!(t.ignores(h) || this.a.has(l.name))) {
            if (l.isDirectory) {
              const u = await this.Q(c)
              t.add(u), (a += await this.R(c, t, s, n - a))
            } else if (await this.S(h)) {
              const u = l.size ?? 0
              if (a + u > n || s.length >= 25) return a
              s.push({ uri: c }), (a += u)
            }
            if (a >= n || s.length >= 25) return a
          }
        }
      return a
    }
    async S(e) {
      const t = this.z.resolveRelativePath(e),
        s = await this.C.resolve(t, { resolveMetadata: !0 })
      return !s.isDirectory && !s.isSymbolicLink
    }
    addContext(e) {
      const {
        contextType: t,
        value: s,
        setContext: n,
        mention: r,
        id: o,
        getContext: a,
        shouldAddToUndoRedoStack: l,
      } = e
      if (t === "fileSelections") {
        const c = s
        if (this.shouldIgnoreUri(c.uri)) return
      } else if (t === "composers") {
        const c = s.composerId
        this.t(c)
      }
      if (
        (Dg(t)
          ? this.U({ ...e, value: { ...s, addedWithoutMention: r === void 0 } })
          : (n(t, s),
            r &&
              n("mentions", t, (c) => [
                ...(c?.filter((h) => h.uuid !== r.uuid) || []),
                r,
              ])),
        this.j.fire({
          contextType: t,
          value: s,
          mention: r,
          index: Dg(t) ? a()[t].length - 1 : void 0,
          id: o,
        }),
        o && l)
      ) {
        const c = this.getUndoRedoUri(o)
        this.u.pushElement(
          new c2(
            "Add Context",
            "add-context",
            c,
            () => {
              const { id: h, shouldAddToUndoRedoStack: u, ...d } = e,
                g = a()
              let p
              Dg(t) &&
                ((p = g[t].findIndex((m) => vI(t, m, s))),
                (p = p === -1 ? void 0 : p)),
                this.removeContext({ ...d, index: p })
            },
            () => {
              const { id: h, shouldAddToUndoRedoStack: u, ...d } = e
              this.addContext({ ...d })
            },
          ),
        )
      }
    }
    U(e) {
      const { contextType: t, value: s, setContext: n, mention: r } = e
      if (
        (n(t, (o) => {
          const a = o || []
          return a.some((h) => vI(t, h, s)) ? o : [...a, s]
        }),
        r)
      ) {
        const o = vp(t, s)
        n("mentions", t, o, (a) => [
          ...(a?.filter((l) => l.uuid !== r.uuid) || []),
          r,
        ])
      }
    }
    removeContext(e) {
      const {
          contextType: t,
          setContext: s,
          index: n,
          id: r,
          getContext: o,
          shouldAddToUndoRedoStack: a,
        } = e,
        l = o()
      let c, h
      if (
        (Dg(t)
          ? ((h = l[t]?.[n]), (c = this.W(e)))
          : ((h = l[t]),
            (c = l.mentions[t] || []),
            s(t, void 0),
            s("mentions", t, [])),
        h !== void 0 &&
          this.q.fire({
            contextType: t,
            value: h,
            index: n,
            mention: c[0],
            id: r,
          }),
        r && a)
      ) {
        const u = this.getUndoRedoUri(r)
        this.u.pushElement(
          new c2(
            "Remove Context",
            "remove-context",
            u,
            () => {
              const { id: d, shouldAddToUndoRedoStack: g, ...p } = e
              this.addContext({ ...p, value: h })
            },
            () => {
              const { id: d, shouldAddToUndoRedoStack: g, ...p } = e,
                m = o()
              let b
              Dg(t) &&
                ((b = m[t].findIndex((y) => vI(t, y, h))),
                (b = b === -1 ? void 0 : b)),
                this.removeContext({ ...p, index: b })
            },
          ),
        )
      }
      return c
    }
    W(e) {
      const { contextType: t, index: s, setContext: n, getContext: r } = e
      let o = []
      return (
        n(t, (a) => {
          if (!a) return a
          if (s === void 0) {
            const h = a.slice(0, -1),
              u = a[a.length - 1]
            return (o = this.X({ ...e, item: u })), h
          }
          const l = a.filter((h, u) => u !== s),
            c = a[s]
          return (o = this.X({ ...e, item: c })), l
        }),
        o
      )
    }
    X(e) {
      const { contextType: t, item: s, setContext: n } = e,
        r = vp(t, s)
      let o = []
      return n("mentions", t, r, (a) => (a === void 0 ? a : ((o = a), []))), o
    }
    removeMention(e) {
      const { setContext: t, uuid: s, getContext: n, id: r } = e,
        o = n()
      let a, l, c
      for (const [h, u] of Object.entries(o.mentions))
        if (Dg(h)) {
          for (const [d, g] of Object.entries(u))
            if (g.findIndex((m) => m.uuid === s) !== -1) {
              const m = o[h],
                b = m.findIndex((w) => vp(h, w) === d),
                y = m[b]
              g.length === 1 &&
              (!("addedWithoutMention" in y) || !y.addedWithoutMention)
                ? ((a = h), (l = b), (c = y))
                : t("mentions", h, d, (w) => w?.filter((C) => C.uuid !== s))
              break
            }
        } else if (u.findIndex((g) => g.uuid === s) !== -1) {
          u.length === 1
            ? ((a = h), (c = o[h]))
            : t("mentions", h, (g) => g?.filter((p) => p.uuid !== s))
          break
        }
      a &&
        this.removeContext({
          contextType: a,
          setContext: t,
          index: l,
          id: r,
          getContext: n,
        })
    }
    removeAllListContext(e) {
      const {
          contextType: t,
          setContext: s,
          getContext: n,
          id: r,
          shouldAddToUndoRedoStack: o,
        } = e,
        a = n()
      if (!Dg(t)) throw new Error(`${t} is not a list context type`)
      const l = a[t] || [],
        c = a.mentions[t] || {}
      if (l.length === 0) return []
      const h = Object.values(c).flat()
      if ((s(t, []), s("mentions", t, {}), r && o)) {
        const u = this.getUndoRedoUri(r)
        this.u.pushElement(
          new c2(
            "Remove All List Context",
            "remove-all-list-context",
            u,
            () => {
              s(t, l), s("mentions", t, c)
            },
            () => {
              s(t, []), s("mentions", t, {})
            },
          ),
        )
      }
      return h
    }
    async getLinterErrorsForFiles(e) {
      const t = []
      for (const s of e) {
        const r = this.I.read({ resource: s })
          .filter((o) => o.severity === Ri.Error)
          .map(
            (o) =>
              new TVe({
                message: o.message,
                source: o.source,
                range: new RC({
                  startPosition: {
                    line: o.startLineNumber,
                    column: o.startColumn,
                  },
                  endPosition: { line: o.endLineNumber, column: o.endColumn },
                }),
                relativeWorkspacePath: this.z.asRelativePath(s),
              }),
          )
        if (r.length > 0) {
          const o = new Cf({
            relativeWorkspacePath: this.z.asRelativePath(s),
            errors: r,
            fileContents: (
              await this.J.getCurrentFileInfo(s, {
                actuallyReadFromOverrideURI: !0,
              })
            )?.contents,
          })
          t.push(o)
        }
      }
      return t
    }
    addOnCursorIgnoreLoadedCallback(e) {
      this.g ? e() : this.f.push(e)
    }
    async Y() {
      ;(this.g = !0), this.f.forEach((e) => e()), (this.f = [])
    }
    Z() {
      return this.M.applicationUserPersistentStorage.teamBlocklist ?? []
    }
    shouldIgnoreUri(e) {
      const t = this.Z()
      if (t.length === 0) return !1
      const s = e.path
      if (s === void 0) return !1
      for (const n of t) if (iy(n, s)) return !0
      return !1
    }
    $(e, t) {
      const s = e.toString()
      return s.startsWith(t) ? s.slice(t.length) : s
    }
    isCursorIgnoreLoaded() {
      return this.g
    }
    async filterCursorIgnoredFiles(e, t) {
      return (
        await new Promise((s) =>
          this.addOnCursorIgnoreLoadedCallback(() => s(void 0)),
        ),
        e.filter((s) => !this.shouldIgnoreUri(t(s)))
      )
    }
    isCodeChunkEqualToSelection(e, t) {
      if (e.intent !== ev.CODE_SELECTION) return !1
      const s = U.revive(t.uri),
        n = this.z.asRelativePath(s)
      if (e.relativeWorkspacePath !== n) return !1
      const r = e.startLineNumber,
        o = Math.min(
          t.range.positionLineNumber,
          t.range.selectionStartLineNumber,
        )
      if (r !== o) return !1
      const a = e.lines.length,
        l =
          Math.abs(
            t.range.positionLineNumber - t.range.selectionStartLineNumber,
          ) + 1
      return a === l
    }
  }
  lPt = __decorate(
    [
      __param(0, Ac),
      __param(1, Xt),
      __param(2, u0),
      __param(3, it),
      __param(4, nt),
      __param(5, YC),
      __param(6, Vo),
      __param(7, DR),
      __param(8, mo),
      __param(9, QJ),
      __param(10, hw),
      __param(11, ei),
      __param(12, Md),
      __param(13, Z),
    ],
    lPt,
  )
  var tg = Re("selectedContextService")
  Ve(tg, lPt, 1)

  return {
    tg,
  }
}
