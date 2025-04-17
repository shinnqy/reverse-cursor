// @ts-check

export function createAIContextService(params) {
  const { Re, __decorate, __param, V, wKn, U, Ze, dKi, ZRi, wn, rt, eAi, sVe, lKi, v1, Me, hAi, tAi, iAi, E$, jG, E7, uAi, rAi, nVe, sAi, rVe, xKn, HSt, Hu, mJ, pm, eJ, zi, jM, st, Br, it, Xt, il, nt, ue, Ul, Lg, Ve } = params;

  var wYe = Re("aiContextService");
  function yFt(i, e) {
    const t = i.resource
    let s
    for (const n of e)
      (s === void 0 || n.toString().length > s.toString().length) &&
        t.toString().startsWith(n.toString()) &&
        (s = n)
    return s
  }
  function fKi(i, e, t) {
    const r = [
        { kind: 4, minLines: 10 },
        { kind: 5, minLines: 10 },
        { kind: 8, minLines: 10 },
        { kind: 10, minLines: 10 },
        { kind: 11, minLines: 10 },
      ],
      o = new Set(),
      a = [...e]
    for (; a.length > 0; ) {
      const p = a.pop(),
        m = r.find((b) => b.kind === p.kind)
      m !== void 0 &&
        p.range.endLineNumber + 1 - p.range.startLineNumber >= m.minLines &&
        (o.add(p.range.startLineNumber),
        p.children !== void 0 && a.push(...p.children))
    }
    const l = new Map()
    for (let p = 0; p < i.length; p++) {
      const m = i.getParentIndex(p)
      l.has(m) || l.set(m, []), l.get(m)?.push(p)
    }
    const c = t.getLinesContent(),
      h = (p, m) => {
        if (
          p.children.length === 1 &&
          p.region.startLineNumber === p.children[0].region.startLineNumber &&
          p.region.endLineNumber === p.children[0].region.endLineNumber
        )
          return p.children[0]
        const b = {
          isFoldRegion: m,
          foldingRegionIdx: p.foldingRegionIdx,
          uri: t.uri,
          region: p.region,
          children: p.children,
          parent: void 0,
        }
        for (const y of p.children) y.parent = b
        return (
          p.freeLines > 100 &&
            (console.warn("Node has overflowing free lines: "),
            console.warn(t.uri.path),
            console.warn(b)),
          b
        )
      },
      u = (p, m) => {
        const { children: b, region: y, freeLines: w } = p,
          C = []
        let S = y.startLineNumber,
          x = 0,
          k = 0,
          E = y.startLineNumber,
          D = !1,
          P = 0,
          L = 0,
          A = 0,
          F = y.startLineNumber,
          H = 0
        const B = () => H < m.length && F === m[H].region.startLineNumber,
          z = (Q, se, he, ae) => {
            ;(A = Q), (E = se ?? F), (P = he ?? k), (L = H), (D = ae ?? !1)
          },
          K = () => {
            C.push({
              foldingRegionIdx: p.foldingRegionIdx,
              children: b.filter(
                (Q) =>
                  Q.region.startLineNumber >= S && Q.region.endLineNumber < E,
              ),
              region: { startLineNumber: S, endLineNumber: E - 1 },
              freeLines: P,
            }),
              (S = D ? E - 1 : E),
              (x = L),
              (k = 0),
              (P = 0),
              (D = !1),
              (A = 0),
              (F = S),
              (H = x)
          }
        for (; F <= y.endLineNumber; ) {
          if (!B()) F++, k++
          else {
            const Q = m[H]
            ;(F = Q.region.endLineNumber + 1), (k += Q.freeLines), H++
          }
          k <= 100 &&
            (H === x
              ? (A === 0 && z(0), c[F - 1] === "" && A <= 1 && z(1))
              : (H > L && A <= 2 && z(2, F + 1, k + 1, !0),
                A == 2 &&
                  F === m[H - 1].region.endLineNumber + 2 &&
                  z(3, F, k, !1),
                c[F - 1] === "" && A >= 2 && z(4))),
            k >= 100 && K()
        }
        return (
          z(5),
          K(),
          {
            foldingRegionIdx: p.foldingRegionIdx,
            region: y,
            freeLines: C[0].freeLines,
            children: C[0].children.concat(C.slice(1).map((Q) => h(Q, !1))),
          }
        )
      },
      d = (p) => {
        const m = [],
          b = [],
          y =
            p !== -1
              ? (() => {
                  const x = i.toRegion(p)
                  return {
                    startLineNumber: x.startLineNumber,
                    endLineNumber: x.endLineNumber,
                  }
                })()
              : { startLineNumber: 1, endLineNumber: t.getLineCount() }
        let w = y.endLineNumber - y.startLineNumber + 1
        for (const x of l.get(p) || []) {
          const k = d(x)
          ;(w -= k.region.endLineNumber - k.region.startLineNumber + 1),
            o.has(k.region.startLineNumber)
              ? b.push(h(k, !0))
              : (m.push(k), (w += k.freeLines))
        }
        for (
          m.sort((x, k) => x.freeLines - k.freeLines);
          m.length > 0 && w > 100 && m[m.length - 1].freeLines >= 30;

        ) {
          const x = m.pop()
          ;(w -= Math.max(0, x.freeLines - 1)), b.push(h(x, !0))
        }
        const C = [
          ...m.map((x) => ({ region: x.region, freeLines: x.freeLines })),
          ...b.map((x) => ({ region: x.region, freeLines: 1 })),
        ]
        return (
          C.sort((x, k) => x.region.startLineNumber - k.region.startLineNumber),
          b.push(...m.map((x) => x.children).flat()),
          b.sort((x, k) => x.region.startLineNumber - k.region.startLineNumber),
          u({ foldingRegionIdx: p, children: b, region: y, freeLines: w }, C)
        )
      }
    return h(d(-1), !0)
  }
  var wFt = class extends V {
    constructor(e, t, s, n, r, o, a, l, c, h, u) {
      super(),
        (this.f = e),
        (this.h = t),
        (this.j = s),
        (this.m = n),
        (this.n = r),
        (this.q = o),
        (this.r = a),
        (this.s = l),
        (this.u = c),
        (this.w = h),
        (this.y = u),
        (this.MAX_CONCURRENT = 10),
        (this.findDependenciesQueue = []),
        (this.dependencySummaryPromises = new Map()),
        (this.indexReqManagers = new Map()),
        (this.z = new Map()),
        (this.C = new Map()),
        (this.parallel_dedcap_requests = 0)
    }
    async getIndex(e) {
      const t = await this.m.aiClient()
      if (!this.indexReqManagers.has(e)) {
        const s = new wKn(e, t)
        this.indexReqManagers.set(
          e,
          s.listen().then(() => s),
        )
      }
      return await this.indexReqManagers.get(e)
    }
    async getNodeChunks(e) {
      const t = U.file(e),
        s = await this.s.resolve(t, {
          resolveSingleChildDescendants: !0,
          resolveMetadata: !1,
        })
      return await this.q.createModelReference(s.resource).then(async (n) => {
        try {
          const r = n.object.textEditorModel,
            o = await this.G(r)
          if (o) {
            const a = await this.y.getOrCreate(r, Ze.None),
              l = a.getAllSymbols(),
              c = a.getTopLevelSymbols(),
              h = fKi(o, c, r)
            return dKi(
              h,
              o,
              this.n.asRelativePath(r.uri),
              r.getValue().split(`
`),
            )
          } else return
        } finally {
          n.dispose()
        }
      })
    }
    async getWorkspaceNodeChunks(e) {
      const t = this.n.getWorkspace().folders,
        s = []
      for (const r of t) {
        const o = r.uri,
          l = [await this.s.resolve(o)]
        for (; l.length > 0; ) {
          const c = l.shift()
          if (c.isDirectory && c.children) l.push(...c.children)
          else if (!c.isDirectory && (e === void 0 || e(c.resource.fsPath))) {
            const h = this.n.asRelativePath(c.resource)
            s.push(this.getNodeChunks(h))
          }
        }
      }
      const n = await Promise.all(s)
      return []
    }
    async _findNonIgnoredFiles(e, t, s) {
      let n = [e]
      const r = yFt(e, t)
      let o = []
      for (; n.length > 0; ) {
        const a = [...n]
        n = []
        let l = []
        for (const c of a) {
          if (yFt(c, t) !== r) {
            o.push(...(await this._findNonIgnoredFiles(c, t, s)))
            continue
          }
          if (c.isDirectory)
            if (c.children) l = l.concat(c.children)
            else {
              const u =
                (
                  await this.s.resolve(c.resource, {
                    resolveSingleChildDescendants: !0,
                    resolveMetadata: !1,
                  })
                ).children || []
              l.push(...u)
            }
          else o.push(c)
        }
        if (r !== void 0) {
          const c = await this.j.executeCommand(
              "git.api.checkIgnore",
              r,
              l.map((u) => u.resource.path),
            ),
            h = new Set(c)
          n = l.filter((u) => !h.has(u.resource.path))
        } else n = l
        n = n.filter((c) => {
          let h = this.n.asRelativePath(c.resource)
          return !s.test(h)
        })
      }
      return o
    }
    async createNewExperimentalIndex(e, t) {
      const s = this.n.getWorkspace().folders[0].toResource(e)
      if (!(await this.s.stat(s)).isDirectory)
        throw new Error("Target directory is not a directory")
      const r = await this.s.resolve(s, {
          resolveSingleChildDescendants: !0,
          resolveMetadata: !1,
        }),
        o = await this.j.executeCommand("git.api.getRepositories"),
        a = t.map(
          (d) =>
            "(^" +
            d
              .replace(/\./g, "\\.")
              .replace(/\//g, "\\/")
              .replace(/\$/g, "\\$")
              .replace(/\^/g, "\\^")
              .replace(/\?/g, "\\?")
              .replace(/\*/g, "[^\\/]*")
              .replace("[^\\/]*[^\\/]*", ".*") +
            "(\\/.*)?$)",
        )
      let l = await this._findNonIgnoredFiles(r, o, new RegExp(a.join("|")))
      l = l.filter(
        (d) => !d.name.endsWith(".lock") && !d.name.match(/-lock\.(json|yaml)/),
      )
      const c = await this.m.aiClient(),
        h = yFt(r, o)
      return (
        await c.createExperimentalIndex(
          new ZRi({
            targetDir: e,
            repo: h?.toString() ?? "",
            files: l.map((d) => this.n.asRelativePath(d.resource)),
          }),
          { headers: wn(rt()) },
        )
      ).indexId
    }
    async reloadIndexFiles(e) {
      return (
        await (
          await this.m.aiClient()
        ).listExperimentalIndexFiles(new eAi({ indexId: e }), {
          headers: wn(rt()),
        })
      ).files.map((n) => ({
        relativePath: n.workspaceRelativePath,
        stage: n.stage,
        nodes: n.nodes.map((r) => ({
          nodeId: r.nodeId,
          stage: r.stage,
          content: r.content,
          summary: r.summary,
        })),
      }))
    }
    async buildIndexEdges(e, t) {
      const s = []
      for (const n of e.files)
        n.stage === "unread" &&
          s.push(
            this.buildFileEdges(e.experimentalIndexId, n.relativePath, (r) =>
              t(n.relativePath, r),
            ),
          )
      await Promise.all(s)
    }
    async buildFileEdges(e, t, s) {
      const n = this.n.getWorkspace().folders[0].toResource(t),
        r = await this.s.resolve(n, {
          resolveSingleChildDescendants: !0,
          resolveMetadata: !1,
        }),
        o = await this.m.aiClient()
      let a = []
      const l = async (h) => {
        const u = h.object.textEditorModel,
          d = await this.G(u)
        if (d) {
          const g = (await this.y.getOrCreate(u, Ze.None)).getTopLevelSymbols(),
            p = fKi(d, g, u),
            m = u.getLinesContent(),
            b = this.n.asRelativePath(r.resource),
            w = await (
              await this.getIndex(e)
            ).registerFileToIndex(
              new sVe({
                indexId: e,
                workspaceRelativePath: b,
                rootContextNode: lKi(p, b, d, m),
                content: m,
              }),
            ),
            C = [],
            S = w.dependencyResolutionAttempts
          ;(a =
            w.fileData?.nodes.map((x) => ({
              nodeId: x.nodeId,
              stage: x.stage,
              content: x.content,
              summary: x.summary,
            })) ?? []),
            await new Promise((x) => setTimeout(x, 500))
          for (const x of S) {
            const k = [],
              E = x.symbol
            if (E === void 0) continue
            const D = E.lineNumber,
              P = E.symbolEndColumn - 1,
              L = await v1(
                this.f.definitionProvider,
                u,
                new Me(D, P),
                !1,
                Ze.None,
              )
            for (const A of L) {
              const F = A.uri
              F.path !== u.uri.path && k.push(await this.n.asRelativePath(F))
            }
            k.length > 0 && C.push(new hAi({ request: x, resolvedPaths: k }))
          }
          return (
            await o.setupIndexDependencies(
              new tAi({
                indexId: e,
                fileId: w.fileId,
                dependencyResolutionResults: C,
              }),
              { headers: wn(rt()) },
            ),
            { relativePath: t, stage: "read", nodes: a }
          )
        } else
          return (
            console.error("No folding regions found for file " + u.uri.path),
            { relativePath: t, stage: "unread", nodes: [] }
          )
      }
      await (async () => {
        for (; this.findDependenciesQueue.length >= this.MAX_CONCURRENT; )
          await Promise.race(
            this.findDependenciesQueue.map((d) => d.then((g) => [d, g])),
          ).then(([d, g]) => {
            const p = this.findDependenciesQueue.indexOf(d)
            p !== -1 && this.findDependenciesQueue.splice(p, 1)
          })
        let h
        const u = this.q
          .createModelReference(r.resource)
          .then(
            (d) => (
              (h = d),
              l(d)
                .catch(
                  (g) => (
                    console.error("Error finding dependencies for " + r.name),
                    console.error(g),
                    { relativePath: t, stage: "unread", nodes: a }
                  ),
                )
                .then((g) => (s(g), g))
            ),
          )
          .finally(() => {
            h?.dispose()
          })
        this.findDependenciesQueue.push(u), await u
      })()
    }
    async computeIndexTopo(e) {
      await (
        await this.m.aiClient()
      ).computeIndexTopoSort(new iAi({ indexId: e }), { headers: wn(rt()) })
    }
    async _handleChooseCodeReferencesNodeResponse(e, t) {
      const s = t.actions
      let n = [],
        r = []
      if (s.length === 0) n = []
      else {
        const c = s[0].workspaceRelativePath,
          h = this.n.getWorkspace().folders[0].toResource(c)
        let u
        try {
          u = await this.q.createModelReference(h)
          const d = u.object.textEditorModel
          console.log(`${s.length} actions requested for ${e}`),
            console.log(s),
            await new Promise((g) => setTimeout(g, 500)),
            (r = await Promise.all(
              s.map(async (g) => {
                let p = []
                switch (g.action) {
                  case E$.GO_TO_DEFINITION:
                    p = await v1(
                      this.f.definitionProvider,
                      d,
                      new Me(g.lineNumber, g.symbolEndColumn - 1),
                      !1,
                      Ze.None,
                    )
                    break
                  case E$.GO_TO_IMPLEMENTATION:
                    p = await jG(
                      this.f.implementationProvider,
                      d,
                      new Me(g.lineNumber, g.symbolEndColumn - 1),
                      !1,
                      Ze.None,
                    )
                    break
                  case E$.REFERENCES:
                    p = await E7(
                      this.f.referenceProvider,
                      d,
                      new Me(g.lineNumber, g.symbolEndColumn - 1),
                      !1,
                      !1,
                      Ze.None,
                    )
                    break
                  case E$.UNSPECIFIED:
                    break
                }
                return (
                  console.log(
                    "Got " +
                      p.length +
                      " links for action " +
                      g.action +
                      " on " +
                      g.symbol +
                      " in " +
                      g.workspaceRelativePath,
                  ),
                  { action: g, links: p }
                )
              }),
            ))
        } finally {
          u?.dispose()
        }
        n = await Promise.all(
          r.map(async ({ action: d, links: g }) => {
            const p = await this.H(g)
            return new uAi({ action: d, references: p })
          }),
        )
      }
      const o = await this.m.aiClient()
      let a,
        l = 0
      for (;;)
        try {
          this.parallel_dedcap_requests++,
            console.log(
              "Sending registerCodeReferences request for node " +
                e +
                " (parallel: " +
                this.parallel_dedcap_requests +
                ")",
            ),
            (a = await o.registerCodeReferences(
              new rAi({ nodeId: e, references: n }),
              { headers: wn(rt()) },
            )),
            console.log("Got back registerCodeReferences request for node " + e)
          break
        } catch (c) {
          if (
            (console.error("Error during registerCodeReferences for node " + e),
            l++,
            l < 3)
          )
            console.log("Retrying after " + l + " attempts for node " + e),
              await new Promise((h) => setTimeout(h, 100))
          else throw c
        } finally {
          this.parallel_dedcap_requests--
        }
      return a.dependencies
    }
    async _linkNode(e, t, s) {
      const n = s?.force ?? !1,
        r = e + "-" + t,
        o = Date.now(),
        a = async () => {
          const l = new nVe({
              indexId: e,
              request: { case: "node", value: new sAi({ nodeId: t }) },
              recompute: n,
            }),
            c = await this.getIndex(e)
          let h,
            u = 0
          for (;;)
            try {
              this.parallel_dedcap_requests++,
                console.log(
                  "Sending chooseCodeReferences request for node " +
                    t +
                    " (parallel: " +
                    this.parallel_dedcap_requests +
                    ")",
                ),
                (h = await c.chooseCodeReferences(l)),
                console.log("Got back chooseCodeReferences request for node " + t)
              break
            } catch (g) {
              if (
                (console.error("Error during chooseCodeReferences for node " + t),
                u++,
                u < 3)
              )
                console.log("Retrying after " + u + " attempts for node " + t),
                  await new Promise((p) => setTimeout(p, 100))
              else throw g
            } finally {
              this.parallel_dedcap_requests--
            }
          if (h.response.case !== "node")
            throw new Error(
              "Unexpected response type " +
                h.response.case +
                " when linking node",
            )
          const d = h.response.value.skipped
          if (d && n)
            throw new Error(
              "Unexpected skipped response when linking node with force = true",
            )
          return d
            ? h.response.value.dependencies
            : await this._handleChooseCodeReferencesNodeResponse(
                t,
                h.response.value,
              ).then(
                (g) => (
                  s?.onLink?.(t), this.C.get(r) === o && this.z.delete(r), g
                ),
              )
        }
      return n || !this.z.has(r)
        ? (this.C.set(r, o), this.z.set(r, a()), await this.z.get(r))
        : (console.log("Duplicate linkNode request for node " + t),
          await this.z.get(r))
    }
    async linkNode(e, t) {
      return await this._linkNode(e, t, { force: !0 })
    }
    _createDependencySummaryRequest(e, t, s) {
      const n = "index:" + e + ":node:" + t
      if (this.dependencySummaryPromises.has(n))
        return this.dependencySummaryPromises.get(n)
      const r = this._summarizeNode({
        indexId: e,
        nodeId: t,
        force: !1,
        ...(s ?? {}),
      })
        .then(async () => {
          await new Promise((o) => setTimeout(o, 1e3)),
            this.dependencySummaryPromises.delete(n)
        })
        .catch((o) => {
          throw (this.dependencySummaryPromises.delete(n), o)
        })
      return this.dependencySummaryPromises.set(n, r), r
    }
    async _summarizeNode({
      indexId: e,
      nodeId: t,
      force: s,
      onLink: n,
      onSummarize: r,
      cachedSummary: o,
    }) {
      const a = o?.(t)
      if (a !== void 0) return a
      const l = new rVe({ indexId: e, nodeId: t, recompute: s }),
        c = await this.getIndex(e)
      let h
      await this._linkNode(e, t, { force: !1, onLink: n })
      let u = 0
      for (;;)
        try {
          this.parallel_dedcap_requests++,
            console.log(
              "Sending summarizeWithReferences request for node " +
                t +
                " (parallel: " +
                this.parallel_dedcap_requests +
                ")",
            ),
            (h = await c.summarizeWithReferences(l)),
            console.log("Got back summarizeWithReferences request for node " + t)
          break
        } catch (g) {
          if (
            (console.error("Error during summarizeWithReferences for node " + t),
            u++,
            u < 3)
          )
            console.log("Retrying after " + u + " attempts for node " + t),
              await new Promise((p) => setTimeout(p, 100))
          else throw g
        } finally {
          this.parallel_dedcap_requests--
        }
      const d = async (g) => {
        const p = g.map((m) =>
          this._createDependencySummaryRequest(e, m, {
            onLink: n,
            onSummarize: r,
          }),
        )
        await Promise.all(p)
      }
      switch (h.response.case) {
        case "dependency":
          return (
            console.log(
              "SummarizeWithReferences returned dependency case for node " + t,
            ),
            console.log(h.response.value.nodes),
            await d(h.response.value.nodes),
            await this._summarizeNode({
              indexId: e,
              nodeId: t,
              force: s,
              onLink: n,
              onSummarize: r,
            })
          )
        case "success":
          return (
            console.log("SummarizeWithReferences returned success case for node"),
            r?.(t, h.response.value.summary),
            h.response.value.summary
          )
        default:
          throw new Error(
            "Unexpected response type " +
              h.response.case +
              " when summarizing node",
          )
      }
    }
    async summarizeNode(e, t, s) {
      return await this._summarizeNode({
        indexId: e,
        nodeId: t,
        force: !0,
        ...(s ?? {}),
      })
    }
    async summarizeNodes(e, t, s) {
      const r = []
      for (let o = 0; o < t.length; o++) {
        const a = t[o],
          l = () =>
            this._summarizeNode({
              indexId: e,
              nodeId: a,
              force: !1,
              ...(s ?? {}),
            })
        for (
          console.log("Node in queue: " + a + " (queue size: " + r.length + ")");
          r.length >= 50;

        )
          await Promise.race(r.map((c) => c.then((h) => [c, h]))).then(
            ([c, h]) => {
              const u = r.indexOf(c)
              u !== -1 && r.splice(u, 1)
            },
          )
        r.push(l())
      }
      await Promise.all(r)
    }
    async getNodeSummary(e, t, s) {
      return await this._summarizeNode({
        indexId: e,
        nodeId: t,
        force: !1,
        ...(s ?? {}),
      })
    }
    async contextualizeSymbol(e) {}
    F(e, t, s) {
      if (s.range === void 0) {
        console.error(
          "No target selection range found for ref " + JSON.stringify(s, null, 2),
        )
        return
      }
      const n = this.n.asRelativePath(e.uri),
        r = e.getLinesContent(),
        o = xKn(s.range.startLineNumber, t, n, r)
      return new HSt({
        range: new Hu({
          startLineNumber: s.range.startLineNumber,
          startColumn: s.range.startColumn,
          endLineNumberInclusive: s.range.endLineNumber,
          endColumn: s.range.endColumn,
        }),
        reference: o,
      })
    }
    async G(e) {
      const t = { limit: 5e3, update: () => {} },
        s = new mJ(e, this.r, t)
      let n = s
      const r = pm.getFoldingRangeProviders(this.f, e)
      r.length > 0 && (n.dispose(), (n = new eJ(e, r, () => {}, t, s)))
      const o = await n.compute(Ze.None)
      return n.dispose(), o ?? void 0
    }
    async H(e) {
      const t = new Map()
      for (const n of e) {
        const r = n.uri
        t.has(r.path) || t.set(r.path, []), t.get(r.path)?.push(n)
      }
      return (
        await Promise.all(
          [...t.entries()].slice(0, 10).map(async ([n, r]) => {
            const o = r[0].uri
            let a
            try {
              a = await this.q.createModelReference(o)
              const l = a.object.textEditorModel
              if (this.f.foldingRangeProvider.all(l).length == 0) return []
              const h = await this.G(l)
              return h
                ? r
                    .slice(0, 10)
                    .map((d) => this.F(l, h, d))
                    .filter((d) => d !== void 0)
                : []
            } finally {
              a?.dispose()
            }
          }),
        )
      ).flat()
    }
  }
  ;(wFt = __decorate(
    [
      __param(0, zi),
      __param(1, jM),
      __param(2, st),
      __param(3, Br),
      __param(4, it),
      __param(5, Xt),
      __param(6, il),
      __param(7, nt),
      __param(8, ue),
      __param(9, Ul),
      __param(10, Lg),
    ],
    wFt,
  )),
    Ve(wYe, wFt, 1);

  return {
    wYe,
  }
}
