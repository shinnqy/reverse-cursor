// @ts-check

export function createContextGraphService(params) {
  const { Re, V, Ui, mG, U, tPt, VS, ge, __decorate, __param, ei, everythingProviderService, it, yi, si, ve, Lg, YC, Xt, Ci, nt, selectedContextService, Ve, } = params;

  var NUi = 5,
    yze = 100,
    wze,
    tK = Re("contextGraphService"),
    oLt = class extends V {
      static {
        wze = this
      }
      static {
        this.j = 5 * 60 * 1e3
      }
      constructor(e, t, s, n, r, o, a, l, c, h, u, d) {
        super(),
          (this.m = e),
          (this.n = t),
          (this.q = s),
          (this.r = n),
          (this.s = r),
          (this.t = o),
          (this.u = a),
          (this.w = l),
          (this.y = c),
          (this.z = h),
          (this.C = u),
          (this.F = d),
          (this.a = []),
          (this.b = []),
          (this.c = []),
          (this.f = null),
          (this.g = null),
          (this.h = null),
          this.D(
            this.m.onChangeEffectManuallyDisposed({
              deps: [
                () =>
                  this.m.applicationUserPersistentStorage
                    .shouldHotReloadContextGraphRelatedFiles,
              ],
              onChange: () => {
                this.m.applicationUserPersistentStorage
                  .shouldHotReloadContextGraphRelatedFiles
                  ? (this.J(), this.I())
                  : (this.J(), this.G())
              },
            }),
          ),
          this.m.applicationUserPersistentStorage
            .shouldHotReloadContextGraphRelatedFiles && this.I()
      }
      async updateCurrentEditorRelatedFiles() {
        const t = (
          this.r.getActiveCodeEditor() || this.r.getFocusedCodeEditor()
        )?.getModel()
        if (!t) return
        const s = await this.getRelatedFiles({ uri: t.uri, maxNumFiles: yze })
        this.m.setNonPersistentStorage("contextGraphState", "relatedFiles", {
          baseRelativePath: this.q.asRelativePath(t.uri),
          nodes: s.map((n) => ({
            relativePath: this.q.asRelativePath(n.uri),
            weight: n.weight,
          })),
        })
      }
      G() {
        this.m.setNonPersistentStorage("contextGraphState", "relatedFiles", null)
      }
      dispose() {
        this.b.forEach((e) => e.dispose()), (this.b = []), super.dispose()
      }
      async getRelatedFiles({
        uri: e,
        maxNumFiles: t,
        lineOrSelection: s,
        useLocal: n,
      }) {
        if (n && s !== void 0)
          if (s instanceof Ui) {
            const r = await this.n.provider?.runCommand(
              mG.GetRelatedFilesForRange,
              {
                absolutePath: e.fsPath,
                range: {
                  startLineNumber: s.startLineNumber,
                  endLineNumberExclusive: s.endLineNumber + 1,
                },
                maxNumFiles: t,
              },
            )
            return r
              ? (console.log("[local-git-graph] resultsFromRange", r),
                r
                  .filter((o) => {
                    const a = U.file(o.absolutePath)
                    return this.q.asRelativePath(a) !== a.fsPath
                  })
                  .map((o) => ({
                    uri: U.file(o.absolutePath),
                    weight: o.weight,
                  })))
              : []
          } else {
            const r = await this.n.provider?.runCommand(
              mG.GetRelatedFilesForLine,
              { absolutePath: e.fsPath, line: s, maxNumFiles: t },
            )
            return r
              ? (console.log("[local-git-graph] resultsFromLine", r),
                r
                  .filter((o) => {
                    const a = U.file(o.absolutePath)
                    return this.q.asRelativePath(a) !== a.fsPath
                  })
                  .map((o) => ({
                    uri: U.file(o.absolutePath),
                    weight: o.weight,
                  })))
              : []
          }
        else {
          const r = await this.n.provider?.runCommand(mG.GetRelatedFiles, {
            absolutePath: e.fsPath,
            maxNumFiles: t,
          })
          if (!r) return []
          const o = await this.H(),
            a = tPt().add(o)
          return r
            .filter((l) => {
              const c = U.file(l.absolutePath),
                h = this.q.asRelativePath(c)
              return h !== c.fsPath && !a.ignores(h) && !this.F.shouldIgnoreUri(c)
            })
            .map((l) => ({ uri: U.file(l.absolutePath), weight: l.weight }))
        }
      }
      async getWorkspaceContextSyncStatus() {
        const e = this.n.provider
        return e
          ? ((await e.runCommand(mG.GetWorkspaceSyncStatus, {})) ?? null)
          : null
      }
      async H() {
        const e = Date.now()
        return this.f !== null && this.h !== null && e - this.h < wze.j
          ? this.f
          : (this.h !== null &&
              e - this.h >= wze.j &&
              ((this.f = null), (this.g = null)),
            this.g
              ? this.g
              : ((this.g = (async () => {
                  const s = this.q
                    .getWorkspace()
                    .folders.at(0)
                    ?.toResource(".cursorignore")
                  if (!s) return []
                  try {
                    const n = await this.C.readFile(s)
                    this.f = n.value.toString().split(`
  `)
                  } catch {
                    this.f = []
                  }
                  return (this.h = Date.now()), this.f
                })()),
                this.g))
      }
      I() {
        this.b.push(
          this.t.onDidActiveEditorChange(() => {
            this.a.forEach((n) => n.dispose()), (this.a.length = 0)
            const s =
              this.r.getActiveCodeEditor() || this.r.getFocusedCodeEditor()
            s &&
              this.a.push(
                s.onDidChangeModel((n) => {
                  this.updateCurrentEditorRelatedFiles()
                }),
              ),
              this.updateCurrentEditorRelatedFiles()
          }),
        )
        const e = (s) => {
            if (!s.altKey) return
            const n = this.m.nonPersistentStorage.contextGraphState?.relatedFiles
            if (!n) return
            const r = parseInt(s.code.replace("Digit", ""), 10)
            if (r <= 0 || r > NUi) return
            const o = n.nodes[r - 1]
            o &&
              (s.preventDefault(),
              s.stopImmediatePropagation(),
              this.z.open(this.q.resolveRelativePath(o.relativePath), {
                editorOptions: { pinned: !1, revealIfOpened: !0 },
              }))
          },
          t = VS()
        for (const s of t) this.c.push(ge(s.window.document, "keydown", e))
      }
      J() {
        this.a.forEach((e) => e.dispose()),
          (this.a.length = 0),
          this.b.forEach((e) => e.dispose()),
          (this.b.length = 0),
          this.c.forEach((e) => e.dispose()),
          (this.c.length = 0)
      }
    }
  ;(oLt = wze =
    __decorate(
      [
        __param(0, ei),
        __param(1, everythingProviderService),
        __param(2, it),
        __param(3, yi),
        __param(4, si),
        __param(5, ve),
        __param(6, Lg),
        __param(7, YC),
        __param(8, Xt),
        __param(9, Ci),
        __param(10, nt),
        __param(11, selectedContextService),
      ],
      oLt,
    )),
    Ve(tK, oLt, 1);

  return {
    NUi,
    yze,
    tK,
  }
}
