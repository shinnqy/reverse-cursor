// @ts-check

export function createMainThreadWorkspace(params) {
  const { __decorate, __param, Qr, cr, hw, it, Yde, Els, ve, R1, Ht, ay, Z, es, Vr, nt, Oh, sS, Br, Md, u0, mI, cppService, $h, J, g0, Pr, _o, U, f, dB, Ec, wr, P8t, Ln, In, _s, JMi, Yt } = params;

  var Ils = class {
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y, w, C, S, x) {
      ;(this.e = t),
        (this.g = s),
        (this.h = n),
        (this.i = r),
        (this.j = o),
        (this.k = a),
        (this.l = l),
        (this.n = c),
        (this.o = h),
        (this.q = u),
        (this.r = d),
        (this.s = p),
        (this.t = m),
        (this.u = b),
        (this.v = y),
        (this.w = w),
        (this.x = C),
        (this.y = S),
        (this.z = x),
        (this.a = new J()),
        (this.b = Object.create(null)),
        (this.d = this.o.createInstance(g0)),
        (this.G = new Map()),
        (this.H = new Map()),
        (this.I = new Map()),
        (this.c = e.getProxy(Pr.ExtHostWorkspace))
      const k = this.g.getWorkspace()
      k.configuration && !_o && !g.hasProvider(k.configuration)
        ? this.c.$initializeWorkspace(this.C(k), this.E())
        : this.g
            .getCompleteWorkspace()
            .then((E) => this.c.$initializeWorkspace(this.C(E), this.E())),
        this.g.onDidChangeWorkspaceFolders(this.B, this, this.a),
        this.g.onDidChangeWorkbenchState(this.B, this, this.a),
        this.s.onDidChangeTrust(this.F, this, this.a)
    }
    dispose() {
      this.a.dispose()
      for (const e in this.b) this.b[e].cancel()
    }
    $updateWorkspaceFolders(e, t, s, n) {
      const r = n.map((o) => ({ uri: U.revive(o.uri), name: o.name }))
      return (
        this.l.status(this.A(e, r.length, s), { hideAfter: 10 * 1e3 }),
        this.k.updateFolders(t, s, r, !0)
      )
    }
    A(e, t, s) {
      let n
      const r = t > 0,
        o = s > 0
      return (
        r && !o
          ? t === 1
            ? (n = f(2635, null, e))
            : (n = f(2636, null, e, t))
          : o && !r
            ? s === 1
              ? (n = f(2637, null, e))
              : (n = f(2638, null, e, s))
            : (n = f(2639, null, e)),
        n
      )
    }
    B() {
      this.c.$acceptWorkspaceData(this.C(this.g.getWorkspace()))
    }
    C(e) {
      return this.g.getWorkbenchState() === 1
        ? null
        : {
            configuration: e.configuration || void 0,
            isUntitled: e.configuration ? dB(e.configuration, this.r) : !1,
            folders: e.folders,
            id: e.id,
            name: this.q.getWorkspaceLabel(e),
            transient: e.transient,
          }
    }
    $startFileSearch(e, t, s) {
      const n = U.revive(e),
        r = this.g.getWorkspace(),
        o = this.d.file(n ? [n] : r.folders, Ec(t))
      return this.e.fileSearch(o, s).then(
        (a) => a.results.map((l) => l.resource),
        (a) => (wr(a) ? null : Promise.reject(a)),
      )
    }
    $startTextSearch(e, t, s, n, r) {
      const o = U.revive(t),
        a = this.g.getWorkspace(),
        l = o ? [o] : a.folders.map((d) => d.uri),
        c = this.d.text(e, l, Ec(s))
      c._reason = "startTextSearch"
      const h = (d) => {
        d.results && this.c.$handleTextSearchResult(d, n)
      }
      return this.e.textSearch(c, r, h).then(
        (d) => ({ limitHit: d.limitHit }),
        (d) => (wr(d) ? null : Promise.reject(d)),
      )
    }
    $checkExists(e, t, s) {
      return this.o.invokeFunction((n) => P8t(n, e, t, s))
    }
    async $save(e, t) {
      const s = U.revive(e),
        n = [...this.j.findEditors(s, { supportSideBySide: In.PRIMARY })],
        r = await this.j.save(n, {
          reason: 1,
          saveAs: t.saveAs,
          force: !t.saveAs,
        })
      return this.D(r).at(0)
    }
    D(e) {
      return e.success
        ? _s(
            e.editors.map((t) =>
              Ln.getCanonicalUri(t, { supportSideBySide: In.PRIMARY }),
            ),
          )
        : []
    }
    $saveAll(e) {
      return this.j.saveAll({ includeUntitled: e }).then((t) => t.success)
    }
    $resolveProxy(e) {
      return this.n.resolveProxy(e)
    }
    $lookupAuthorization(e) {
      return this.n.lookupAuthorization(e)
    }
    $lookupKerberosAuthorization(e) {
      return this.n.lookupKerberosAuthorization(e)
    }
    $loadCertificates() {
      return this.n.loadCertificates()
    }
    $requestWorkspaceTrust(e) {
      return this.t.requestWorkspaceTrust(e)
    }
    E() {
      return this.s.isWorkspaceTrusted()
    }
    F() {
      this.c.$onDidGrantWorkspaceTrust()
    }
    $registerEditSessionIdentityProvider(e, t) {
      const s = this.h.registerEditSessionIdentityProvider({
        scheme: t,
        getEditSessionIdentifier: async (n, r) =>
          this.c.$getEditSessionIdentifier(n.uri, r),
        provideEditSessionIdentityMatch: async (n, r, o, a) =>
          this.c.$provideEditSessionIdentityMatch(n.uri, r, o, a),
      })
      this.G.set(e, s), this.a.add(s)
    }
    $unregisterEditSessionIdentityProvider(e) {
      this.G.get(e)?.dispose(), this.G.delete(e)
    }
    $registerControlProvider(e, t) {
      const s = (n) => this.c.$controlGetDataframeSummary(n)
      if (t === "vscode-jupyter") {
        const n = this.u.registerControlProvider(t, { getDataframeSummary: s })
        this.H.set(e, n), this.a.add(n)
      } else if (t === "git") {
        const n = async (r, o) =>
          await this.c
            .$controlGetFullDiff(r, o)
            .then((a) =>
              a
                ? {
                    changes: a.changes.map((l) => ({
                      ...l,
                      change: { ...l.change, status: l.change.status },
                    })),
                    fullDiffText: a.fullDiffText,
                  }
                : void 0,
            )
        this.v.registerDiffProvider({ getFullDiff: n })
      } else if (t === "cursor-retrieval") {
        const n = async (o) => {
          const a = new JMi(o).toBinary()
          return await this.c.$controlAppendCppTelem(
            Yt.wrap(a),
            this.z.reactivePrivacyMode(),
          )
        }
        this.x.registerCppTelemProvider({ appendCppTelem: n })
        const r = async (o, a) => {
          await this.c.$controlStreamCpp(o, a)
        }
        this.y.registerDiffingProvider({
          streamCpp: r,
          cancelCpp: this.c.$controlCancelCpp,
          flushCpp: this.c.$controlFlushCpp,
          getCppReport: this.c.$controlGetCppReport,
        })
      } else if (t === "cursor-tokenize") {
        const n = async (r, o) => await this.c.$controlTokenizeBPE(r, o)
        this.w.registerBPETokenizerProvider({ tokenizeBPE: n })
      }
    }
    $unregisterControlProvider(e) {
      this.H.get(e)?.dispose(), this.H.delete(e)
    }
    $registerCanonicalUriProvider(e, t) {
      const s = this.i.registerCanonicalUriProvider({
        scheme: t,
        provideCanonicalUri: async (n, r, o) => {
          const a = await this.c.$provideCanonicalUri(n, r, o)
          return a && U.revive(a)
        },
      })
      this.I.set(e, s), this.a.add(s)
    }
    $unregisterCanonicalUriProvider(e) {
      this.I.get(e)?.dispose(), this.I.delete(e)
    }
  }
  Ils = __decorate(
    [
      Qr(cr.MainThreadWorkspace),
      __param(1, hw),
      __param(2, it),
      __param(3, Yde),
      __param(4, Els),
      __param(5, ve),
      __param(6, R1),
      __param(7, Ht),
      __param(8, ay),
      __param(9, Z),
      __param(10, es),
      __param(11, Vr),
      __param(12, nt),
      __param(13, Oh),
      __param(14, sS),
      __param(15, Br),
      __param(16, Md),
      __param(17, u0),
      __param(18, mI),
      __param(19, cppService),
      __param(20, $h),
    ],
    Ils,
  )
}
