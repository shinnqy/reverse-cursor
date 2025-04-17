// @ts-check

export function createRepositoryService(params) {
  const { Re, V: Disposable, __decorate, __param, Ve, R: Emitter, g0, fu, oTt, gae, fAi, wn, rt, dk, U, jle, im, p5i, __n, zje, du, S9i, bn, bt, $h, cursorCredsService, Ci, ei, Cp, Xt, it, u0, Z, qi } = params;

  var Md = Re("repositoryService")
  function K_n(i) {
    return i.provider.rootUri?.path
  }
  var ETt = class extends Disposable {
    constructor(e, t, s, n, r, o, a, l, c, h) {
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
        (this.f = () => {}),
        (this.clearRepositoryIntervalFunction = () => {}),
        (this.diffProvider = null),
        (this.g = new Map()),
        (this.indexingProvider = undefined),
        (this.h = new Map()),
        (this._onDidRequestRepoIndex = this.D(new Emitter())), // this.D => this._register // new R => new Emitter
        (this.onDidRequestRepoIndex = this._onDidRequestRepoIndex.event),
        (this._onDidRequestRepoInterrupt = this.D(new Emitter())), // this._register
        (this.onDidRequestRepoInterrupt = this._onDidRequestRepoInterrupt.event),
        (this._onDidChangeIndexingStatus = this.D(new Emitter())), // this._register
        (this.onDidChangeIndexingStatus = this._onDidChangeIndexingStatus.event),
        (this.t = () => false),
        (this.s = this.I.createInstance(g0)),
        (this.c = this.I.createInstance(fu, { service: oTt })),
        // this._register
        this.D(this.z.createScoped(this)).onChangeEffect({
          deps: [
            () =>
              this.z.workspaceUserPersistentStorage.indexingData
                .preferredEmbeddingModel,
          ],
          onChange: () => {
            this.indexMainLocalRepository()
          },
        }),
        this.onDidChangeIndexingStatus(async () => {
          const d = await this.indexingProvider?.getGlobalStatus()
          if (d !== undefined)
            switch (
              (d.case === "synced" &&
                this.z.setNonPersistentStorage(
                  "repositoryLastSyncedTime",
                  Date.now(),
                ),
              this.z.setNonPersistentStorage("repositoryIndexingStatus", d),
              d.case)
            ) {
              case "not-indexed":
                break
              case "not-auto-indexing": {
                this.z.applicationUserPersistentStorage.bubbleTimesLeft > 0 &&
                  d.numFiles < 2e4 &&
                  this.indexMainRepository()
                break
              }
              case "error": {
                this.z.setNonPersistentStorage("repositoryIndexingError", {
                  type: gae.EXTENSION_ERROR,
                  message: d.error,
                })
                break
              }
              case "indexing-setup": {
                const g = await this.getNewRepoInfo()
                if (g === undefined) {
                  this.z.setNonPersistentStorage("repositoryIndexingError", {
                    type: gae.NO_REPO,
                  })
                  return
                }
                const p = g.repoName,
                  m =
                    this.z.nonPersistentStorage.mainLocalRepositoryProgress
                      ?.progress
                m !== undefined &&
                  m === 1 &&
                  this.z.setNonPersistentStorage(
                    "mainLocalRepositoryProgress",
                    "progress",
                    0,
                  )
                break
              }
              case "indexing": {
                const g = await this.getNewRepoInfo()
                if (g === undefined) {
                  this.z.setNonPersistentStorage("repositoryIndexingError", {
                    type: gae.NO_REPO,
                  })
                  return
                }
                const p = g.repoName,
                  m = await this.indexingProvider?.getCodebases()
                if (m === undefined) return
                const b = {}
                let y = 0
                for (const w of m) {
                  const C = await this.indexingProvider?.getIndexingProgress(w)
                  if (C === undefined) continue
                  const S = await this.indexingProvider?.getCurrentJobs(w)
                  S !== undefined && (C > y && (y = C), (b[w] = S))
                }
                this.z.setNonPersistentStorage("mainLocalRepositoryProgress", {
                  repoId: p,
                  progress: y,
                }),
                  this.z.setNonPersistentStorage("repositoryIndexingJobs", b)
                break
              }
              case "synced":
                break
              case "paused":
                break
              case "loading":
                break
              default:
                return d
            }
        })
    }
    setIsUriCursorIgnored(e) {
      this.t = e
    }
    registerIndexingProvider(e) {
      this.indexingProvider = e
    }
    unregisterIndexingProvider() {
      this.indexingProvider = undefined
    }
    fireOnDidChangeIndexingStatus() {
      this._onDidChangeIndexingStatus.fire()
    }
    unregisterOnDidChangeIndexingStatus() {}
    async getNewRepoInfo() {
      const e = Date.now()
      for (; !this.indexingProvider && Date.now() - e < 5e3; )
        await new Promise((t) => setTimeout(t, 100))
      return await this.indexingProvider?.getRepoInfo()
    }
    async getPathEncryptionKey_ONLY_FOR_VM_AGENT() {
      const e = Date.now()
      for (; !this.indexingProvider && Date.now() - e < 5e3; )
        await new Promise((t) => setTimeout(t, 100))
      return await this.indexingProvider?.getPathEncryptionKey_ONLY_FOR_VM_AGENT()
    }
    isIndexedMainLocalRepository() {
      if (
        this.z.nonPersistentStorage.repositoryIndexingStatus?.case === "synced" ||
        (this.z.nonPersistentStorage.mainLocalRepositoryProgress?.progress ?? 0) >
          0.8
      )
        return true
      {
        const e = this.z.nonPersistentStorage.repositoryIndexingStatus?.case
        if (
          [
            "indexing-setup",
            "indexing",
            "loading",
            "out-of-sync",
            "creating-index",
            "error",
          ].includes(e)
        ) {
          if (
            e === "indexing" &&
            (this.z.nonPersistentStorage.mainLocalRepositoryProgress?.progress ??
              0) < 0.5
          )
            return false
          const s = this.z.nonPersistentStorage.repositoryLastSyncedTime
          if (s !== undefined && Date.now() - s < 1e3 * 60 * 60) return true
        }
        return false
      }
    }
    async indexMainRepository(e = false) {
      if (!this.u.isAuthenticated()) {
        this.z.setNonPersistentStorage("repositoryIndexingStatus", {
          case: "error",
          error: "Not authenticated",
        })
        return
      }
      return this.indexMainLocalRepository()
    }
    async deleteMainLocalRepository() {
      const e = await this.getNewRepoInfo()
      if (e === undefined) return
      const n = await this.c.get();
      await (
        // await this.c.get()
        n
      ).removeRepositoryV2(new fAi({ repository: e }), { headers: wn(rt()) }),
        this._onDidRequestRepoInterrupt.fire(false),
        this.z.setNonPersistentStorage("repositoryIndexingStatus", {
          case: "not-indexed",
        }),
        this.z.nonPersistentStorage.mainLocalRepositoryProgress === undefined &&
          this.z.setNonPersistentStorage("mainLocalRepositoryProgress", {}),
        this.z.setNonPersistentStorage(
          "mainLocalRepositoryProgress",
          "progress",
          0,
        ),
        this.z.setNonPersistentStorage("repositoryIndexingJobs", {})
    }
    async pauseIndexingJob() {
      this._onDidRequestRepoInterrupt.fire(true)
    }
    registerDiffProvider(e) {
      this.diffProvider = e
    }
    dispose() {
      super.dispose(), this.f(), this.clearRepositoryIntervalFunction()
    }
    repositoryToInfo(e) {
      const t = e.provider.remotes
      if (t === undefined) return null
      if (t.length === 0) throw new Error("No remotes found")
      const n = t[0].fetchUrl?.split(/\/|\:/)
      if (n === undefined) throw new Error("Could not parse origin url")
      const r = n[n.length - 2],
        o = n[n.length - 1].split(".")[0]
      if (r === undefined || o === undefined)
        throw new Error("Could not parse repo owner and name")
      return {
        id: e.id,
        repoName: o,
        repoOwner: r,
        relativeWorkspacePath: K_n(e),
      }
    }
    async codeBlockFromRemote(e, t) {
      let s
      const n = t.relativeWorkspacePath
      if (e.id === dk.id) s = this.G.resolveRelativePath(n)
      else {
        const l = this.g.get(e.id)?.provider?.rootUri
        if (l === undefined) return null
        s = U.joinPath(l, n)
      }
      let r,
        o = null
      try {
        this.z.setNonPersistentStorage(
          "suppressFileExtensionRecommendationsStart",
          Date.now(),
        ),
          (r = await this.F.createModelReference(s))
        const a = t.range
        if (
          a === undefined ||
          a.startPosition === undefined ||
          a.endPosition === undefined
        )
          return null
        let l,
          c = [],
          h
        const u = []
        ;(h = r.object.textEditorModel.getValueInRange({
          startLineNumber: a.startPosition.line,
          startColumn: a.startPosition.column,
          endLineNumber: a.endPosition.line,
          endColumn: a.endPosition.column,
        })),
          (l = h)
        for (const [g, p] of h
          .split(
            `
`,
          )
          .entries())
          u.push({
            lineNumber: g + (a.startPosition?.line - 1) + 1,
            text: p,
            isSignature: false,
          })
        const d = t.signatures?.ranges
        if (d) {
          for (const g of d)
            g === undefined ||
              g.startPosition === undefined ||
              g.endPosition === undefined ||
              g.endPosition.line >= a.startPosition.line ||
              c.push(
                r.object.textEditorModel.getValueInRange({
                  startLineNumber: g.startPosition.line,
                  startColumn: g.startPosition.column,
                  endLineNumber: g.endPosition.line,
                  endColumn:
                    r.object.textEditorModel.getLineLength(g.endPosition.line) +
                    1,
                }),
              )
          if (c.length !== 0) {
            let g = "",
              p = 0
            for (const [m, b] of [...c, l].entries()) {
              let y
              if (m < c.length) {
                for (const [S, x] of b
                  .split(
                    `
`,
                  )
                  .entries())
                  u.push({
                    lineNumber: S + (d[m]?.startPosition?.line ?? 1),
                    text: x,
                    isSignature: true,
                  })
                y = d[m]?.startPosition?.line ?? 1
              } else y = a.startPosition?.line ?? 1
              if (m === 0) {
                g += b
                continue
              }
              const w = b.match(/^\s*/)
              let C
              w ? (C = w[0]) : (C = ""),
                (g +=
                  `
` +
                  C +
                  `...
` +
                  b),
                u.push({ lineNumber: y - 0.5, text: C + "...", isSignature: true })
            }
            l = g
          }
        }
        u.sort((g, p) => g.lineNumber - p.lineNumber),
          (o = {
            detailedLines: u,
            contents: l,
            originalContents: h,
            relativeWorkspacePath: this.G.asRelativePath(s),
            range: a,
          })
      } catch {
      } finally {
        r && r.dispose()
      }
      return o
    }
    async semanticSearch(e, t, s) {
      function n(c) {
        return {
          startLineNumber: (c.startPosition?.line || 1) - 1,
          startColumn: (c.startPosition?.column || 1) - 1,
          endLineNumber: (c.endPosition?.line || 1) - 1,
          endColumn: (c.endPosition?.column || 1) - 1,
        }
      }
      const o = (
          await this.parallelSearch(e.contentPattern.pattern, 100)
        ).flatMap((c, h) => {
          if (c.codeBlock === undefined || c.codeBlock.range === undefined) return []
          const u = n(c.codeBlock.range)
          return [
            {
              uri: this.G.resolveRelativePath(c.codeBlock.relativeWorkspacePath),
              previewText: c.codeBlock.contents,
              rangeLocations: [
                {
                  source: u,
                  preview: {
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: u.endLineNumber - u.startLineNumber,
                    endColumn: u.endColumn,
                  },
                },
              ],
            },
          ]
        }),
        a = {}
      for (const c of o)
        c.uri &&
          (a[c.uri.toString()] === undefined && (a[c.uri.toString()] = []),
          a[c.uri.toString()].push(c))
      const l = []
      for (const c in a) {
        const h = U.parse(c)
        if (jle(e, h.fsPath) && Object.prototype.hasOwnProperty.call(a, c)) {
          const u = a[c]
          l.push({ resource: h, results: u })
        }
      }
      for (const c of l) s?.(c)
      return { results: l, messages: [] }
    }
    async parallelSearchGetContents(e, t = 10, s, n) {
      return (await this.parallelSearch(e, t, s, n)).map((o) => {
        const a = o.codeBlock
        if (a === undefined) return o
        const l = this.G.resolveRelativePath(a.relativeWorkspacePath),
          c = this.J.getModel(l)
        return !c || a.range === undefined
          ? o
          : new im({
              ...o,
              codeBlock: {
                ...o.codeBlock,
                contents: c.getValueInRange({
                  startColumn: a.range.startPosition?.column ?? 1,
                  startLineNumber: a.range.startPosition?.line ?? 1,
                  endColumn: a.range.endPosition?.column ?? 1,
                  endLineNumber: a.range.endPosition?.line ?? 1,
                }),
              },
            })
      })
    }
    async searchMultipleQueries(e, { topK: t, minK: s, finalK: n }, r) {
      const a = e
        .map((l) => ({
          text: l.text,
          newGlob: p5i({
            globsNewLineSeparated: l.globsNewLineSeparated,
            properGlob: r?.newlineSepGlobFilter,
          }),
        }))
        .map((l) =>
          this.parallelSearch(l.text, t, t, {
            includePattern: r?.includePattern,
            excludePattern: r?.excludePattern,
            globFilter: l.newGlob,
          }),
        )
      return await __n(a, { minK: s, finalK: n })
    }
    async parallelSearch(e, t = 10, s, n) {
      try {
        const r = await this.searchNewLocal(e, t, n)
        return this.filterResults(r, t, s)
      } catch {
        return []
      }
    }
    filterResults(e, t = 10, s) {
      return e
        .filter(
          (n) => n.codeBlock !== undefined && n.codeBlock.contents.length < 2e4,
        )
        .sort((n, r) => r.score - n.score)
        .slice(0, s ?? t)
    }
    async searchNewLocalFast(e, t = 10, s) {
      const n = await this.c.get(),
        r = await this.getNewRepoInfo()
      if (r === undefined) throw new Error("No repository info found")
      if (this.indexingProvider === undefined)
        throw new Error("Indexing provider not found")
      const o = { ...r, id: dk.id }
      let a
      try {
        const m = {
          globFilter: s?.globFilter ?? zje(this.s, s?.includePattern),
          notGlobFilter: zje(this.s, s?.excludePattern),
        }
        let b
        try {
          b = await this.indexingProvider.compileGlobFilter(m)
        } catch (x) {
          console.error("Failed to compile glob filter", x)
        }
        const y = {
            query: e,
            repository: r,
            topK: t,
            contextCacheRequest: s?.contextCacheRequest,
            globFilter: b?.globFilter,
            notGlobFilter: b?.notGlobFilter,
            raceNRequests: s?.raceNRequests,
          },
          w = rt(),
          C = { headers: wn(w), signal: s?.abortSignal }
        if (s?.abortSignal?.aborted) throw new Error("Aborted")
        const S = performance.now()
        try {
          const x = await n.semSearchFast({ request: y }, C)
          for await (const k of x) {
            a = k.response
            break
          }
          if (a === undefined) throw new Error("Response is undefined")
        } catch {}
        if (s?.abortSignal?.aborted) throw new Error("Aborted")
        if (a === undefined) {
          const x = performance.now(),
            k = await n.semSearch({ request: y }, C)
          for await (const E of k) {
            ;(a = E.response),
              console.log(
                "semsearch metadata",
                E.metadata,
                C.headers["X-Request-ID"],
              )
            break
          }
          if (a === undefined) throw new Error("Response is undefined")
        }
      } catch (m) {
        if (m instanceof du) return []
        throw m
      }
      const l = a.codeResults
          .map((m) => m.codeBlock?.relativeWorkspacePath)
          .filter((m) => m !== undefined),
        c = performance.now(),
        h = await this.indexingProvider.decryptPaths(l),
        u = performance.now(),
        d = new Map()
      for (let m = 0; m < l.length; m++) d.set(l[m], h[m])
      const g = performance.now()
      return a.codeResults
        .map((m) => {
          if (m.codeBlock === undefined) throw new Error("Code block undefined")
          const b = d.get(m.codeBlock.relativeWorkspacePath)
          if (b === undefined) throw new Error("Path not found")
          if (
            ((m.codeBlock.relativeWorkspacePath = b),
            (m.codeBlock.relativeWorkspacePath.startsWith("./") ||
              m.codeBlock.relativeWorkspacePath.startsWith(".\\")) &&
              (m.codeBlock.relativeWorkspacePath =
                m.codeBlock.relativeWorkspacePath.substring(2)),
            !S9i(m.codeBlock.relativeWorkspacePath, this.s, s))
          )
            return null
          const y = (async () => {
            try {
              if (m.codeBlock === undefined) throw new Error("Code block undefined")
              const w = await this.convertToLocalBlock(m.codeBlock, o)
              return w === null ? null : new im({ score: m.score, codeBlock: w })
            } catch (w) {
              return console.error(w), null
            }
          })()
          return { codeResult: m, localCodeResultPromise: y }
        })
        .filter(bn)
        .sort((m, b) => b.codeResult.score - m.codeResult.score)
        .slice(0, t)
    }
    async searchNewLocal(e, t = 10, s) {
      const n = await this.c.get(),
        r = await this.getNewRepoInfo()
      if (r === undefined) throw new Error("No repository info found")
      if (this.indexingProvider === undefined)
        throw new Error("Indexing provider not found")
      const o = { ...r, id: dk.id }
      let a
      try {
        const l = {
            globFilter: s?.globFilter ?? zje(this.s, s?.includePattern),
            notGlobFilter: zje(this.s, s?.excludePattern),
          },
          c = await this.indexingProvider.compileGlobFilter(l),
          h = {
            query: e,
            repository: r,
            topK: t,
            contextCacheRequest: s?.contextCacheRequest,
            globFilter: c.globFilter,
            notGlobFilter: c.notGlobFilter,
          },
          u = rt(),
          d = { headers: wn(u), signal: s?.abortSignal }
        if (s?.abortSignal?.aborted) throw new Error("Aborted")
        a = await n.searchRepositoryV2(h, d)
      } catch (l) {
        if (l instanceof du) return []
        throw l
      }
      return await this.getFinalCodeResults(o, a.codeResults, { ...s, topK: t })
    }
    indexMainLocalRepository() {
      this.u.isAuthenticated() && (this._onDidRequestRepoInterrupt.fire(true), this._onDidRequestRepoIndex.fire())
    }
    interruptLocalRepository(e) {
      if (e.id === dk.id) {
        this._onDidRequestRepoInterrupt.fire(false)
        const t = bt.setInterval(() => {
          this.z.setNonPersistentStorage("repoProgressBars", (s) =>
            s.filter((n) => n.repoId !== dk.id),
          )
        }, 100)
        setTimeout(() => {
          bt.clearInterval(t)
        }, 3e3)
      }
    }
    async getEmbeddings(...e) {
      return (
        await (
          await this.c.get()
        ).getEmbeddings({ texts: e }, { headers: wn(rt()) })
      ).embeddings.map((n) => n.embedding)
    }
    async *getLineNumberClassifications(e, t, s) {
      const n = (c) =>
          JSON.stringify({
            relativeWorkspacePath: c.codeBlock?.relativeWorkspacePath,
            range: c.codeBlock?.range,
          }),
        r = new Map(
          e.map((c, h) => [
            n(c.ogCodeResult),
            { ogCodeResult: c.ogCodeResult, idx: h },
          ]),
        ),
        o = {
          query: t,
          codeResults: e.map((c) => c.localCodeResult).filter((c) => c !== null),
        },
        l = await (
          await this.c.get()
        ).getLineNumberClassifications(o, { signal: s })
      for await (const c of l) {
        const h = c.classifiedResult
        if (h?.codeResult !== undefined) {
          const u = r.get(n(h.codeResult))
          u !== undefined && (yield { withClassificationInfo: h, idx: u.idx })
        }
      }
    }
    async convertToLocalBlock(e, t) {
      try {
        const s = await this.codeBlockFromRemote(t, e)
        return !s || (s.contents !== undefined && s.contents.length > 2e4)
          ? null
          : (s.contents !== undefined &&
              (s.contents = await this.H.cleanText(
                s.contents,
                s.relativeWorkspacePath,
              )),
            s)
      } catch (s) {
        return (
          console.error("Failed to convert code block to local block:", s), null
        )
      }
    }
    async getFinalCodeResults(e, t, s) {
      if (!this.indexingProvider) throw new Error("Indexing provider not found")
      const n = t
          .map((u) => u.codeBlock?.relativeWorkspacePath)
          .filter((u) => u !== undefined),
        r = await this.indexingProvider.decryptPaths(n),
        o = new Map()
      for (let u = 0; u < n.length; u++) o.set(n[u], r[u])
      const a = t.map(async (u) => {
          if (u.codeBlock === undefined) throw new Error("Code block undefined")
          const d = o.get(u.codeBlock.relativeWorkspacePath)
          if (d === undefined) throw new Error("Path not found")
          if (
            ((u.codeBlock.relativeWorkspacePath = d),
            (u.codeBlock.relativeWorkspacePath.startsWith("./") ||
              u.codeBlock.relativeWorkspacePath.startsWith(".\\")) &&
              (u.codeBlock.relativeWorkspacePath =
                u.codeBlock.relativeWorkspacePath.substring(2)),
            !S9i(u.codeBlock.relativeWorkspacePath, this.s, s))
          )
            return null
          const g = await this.convertToLocalBlock(u.codeBlock, e)
          return g === null ? null : new im({ score: u.score, codeBlock: g })
        }),
        h = (await Promise.allSettled(a))
          .map((u) => {
            if (u.status === "rejected") return console.error(u.reason), null
            if (
              s?.excludeCursorIgnored &&
              u.value?.codeBlock?.relativeWorkspacePath
            ) {
              const d = this.G.resolveRelativePath(
                u.value.codeBlock.relativeWorkspacePath,
              )
              if (this.t(d)) return null
            }
            return u.value
          })
          .filter((u) => u !== null)
          .sort((u, d) => d.score - u.score)
      return s?.topK ? h.slice(0, s.topK) : h
    }
  }
  ;(ETt = __decorate(
    [
      __param(0, $h),
      __param(1, cursorCredsService),
      __param(2, Ci),
      __param(3, ei),
      __param(4, Cp),
      __param(5, Xt),
      __param(6, it),
      __param(7, u0),
      __param(8, Z),
      __param(9, qi),
    ],
    ETt,
  )),
    Ve(Md, ETt, 1);

  return {
    Md,
  }
}
