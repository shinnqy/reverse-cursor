// @ts-check

// vscode里的markerService.ts
export function createMarkerService(params) {
  const { ResourceMap, U, _i, Ri, g3e, ma, MYe, Fmt } = params;

  var iXn = class {
    constructor() {
      ;(this.a = new ResourceMap()), (this.b = new Map())
    }
    set(i, e, t) {
      let s = this.a.get(i)
      s || ((s = new Map()), this.a.set(i, s)), s.set(e, t)
      let n = this.b.get(e)
      n || ((n = new ResourceMap()), this.b.set(e, n)), n.set(i, t)
    }
    get(i, e) {
      return this.a.get(i)?.get(e)
    }
    delete(i, e) {
      let t = !1,
        s = !1
      const n = this.a.get(i)
      n && (t = n.delete(e))
      const r = this.b.get(e)
      if ((r && (s = r.delete(i)), t !== s)) throw new Error("illegal state")
      return t && s
    }
    values(i) {
      return typeof i == "string"
        ? (this.b.get(i)?.values() ?? _i.empty())
        : U.isUri(i)
          ? (this.a.get(i)?.values() ?? _i.empty())
          : _i.map(_i.concat(...this.b.values()), (e) => e[1])
    }
  },
  sXn = class {
    constructor(i) {
      ;(this.errors = 0),
        (this.infos = 0),
        (this.warnings = 0),
        (this.unknowns = 0),
        (this.a = new ResourceMap()),
        (this.b = i),
        (this.c = i.onMarkerChanged(this.d, this))
    }
    dispose() {
      this.c.dispose()
    }
    d(i) {
      for (const e of i) {
        const t = this.a.get(e)
        t && this.f(t)
        const s = this.e(e)
        this.g(s), this.a.set(e, s)
      }
    }
    e(i) {
      const e = { errors: 0, warnings: 0, infos: 0, unknowns: 0 }
      if (MYe.has(i.scheme)) return e
      for (const { severity: t } of this.b.read({ resource: i }))
        t === Ri.Error
          ? (e.errors += 1)
          : t === Ri.Warning
            ? (e.warnings += 1)
            : t === Ri.Info
              ? (e.infos += 1)
              : (e.unknowns += 1)
      return e
    }
    f(i) {
      ;(this.errors -= i.errors),
        (this.warnings -= i.warnings),
        (this.infos -= i.infos),
        (this.unknowns -= i.unknowns)
    }
    g(i) {
      ;(this.errors += i.errors),
        (this.warnings += i.warnings),
        (this.infos += i.infos),
        (this.unknowns += i.unknowns)
    }
  },
  MarkerService = class dq {
    constructor() {
      ;(this.a = new Fmt({ delay: 0, merge: dq.f })),
        (this.onMarkerChanged = this.a.event),
        (this.b = new iXn()),
        (this.c = new sXn(this))
    }
    dispose() {
      this.c.dispose(), this.a.dispose()
    }
    getStatistics() {
      return this.c
    }
    remove(e, t) {
      for (const s of t || []) this.changeOne(e, s, [])
    }
    changeOne(e, t, s) {
      if (g3e(s)) this.b.delete(t, e) && this.a.fire([t])
      else {
        const n = []
        for (const r of s) {
          const o = dq.d(e, t, r)
          o && n.push(o)
        }
        this.b.set(t, e, n), this.a.fire([t])
      }
    }
    static d(e, t, s) {
      let {
        code: n,
        severity: r,
        message: o,
        source: a,
        startLineNumber: l,
        startColumn: c,
        endLineNumber: h,
        endColumn: u,
        relatedInformation: d,
        tags: g,
        modelVersionId: p,
        aiLintBugData: m,
      } = s
      if (o)
        return (
          (l = l > 0 ? l : 1),
          (c = c > 0 ? c : 1),
          (h = h >= l ? h : l),
          (u = u > 0 ? u : c),
          {
            resource: t,
            owner: e,
            code: n,
            severity: r,
            message: o,
            source: a,
            startLineNumber: l,
            startColumn: c,
            endLineNumber: h,
            endColumn: u,
            relatedInformation: d,
            tags: g,
            modelVersionId: p,
            aiLintBugData: m,
          }
        )
    }
    changeAll(e, t) {
      const s = [],
        n = this.b.values(e)
      if (n)
        for (const r of n) {
          const o = _i.first(r)
          o && (s.push(o.resource), this.b.delete(o.resource, e))
        }
      if (ma(t)) {
        const r = new ResourceMap()
        for (const { resource: o, marker: a } of t) {
          const l = dq.d(e, o, a)
          if (!l) continue
          const c = r.get(o)
          c ? c.push(l) : (r.set(o, [l]), s.push(o))
        }
        for (const [o, a] of r) this.b.set(o, e, a)
      }
      s.length > 0 && this.a.fire(s)
    }
    read(e = Object.create(null)) {
      let { owner: t, resource: s, severities: n, take: r } = e
      if (((!r || r < 0) && (r = -1), t && s)) {
        const o = this.b.get(s, t)
        if (o) {
          const a = []
          for (const l of o)
            if (dq.e(l, n)) {
              const c = a.push(l)
              if (r > 0 && c === r) break
            }
          return a
        } else return []
      } else if (!t && !s) {
        const o = []
        for (const a of this.b.values())
          for (const l of a)
            if (dq.e(l, n)) {
              const c = o.push(l)
              if (r > 0 && c === r) return o
            }
        return o
      } else {
        const o = this.b.values(s ?? t),
          a = []
        for (const l of o)
          for (const c of l)
            if (dq.e(c, n)) {
              const h = a.push(c)
              if (r > 0 && h === r) return a
            }
        return a
      }
    }
    static e(e, t) {
      return t === void 0 || (t & e.severity) === e.severity
    }
    static f(e) {
      const t = new ResourceMap()
      for (const s of e) for (const n of s) t.set(n, !0)
      return Array.from(t.keys())
    }
  }

  return {
    MarkerService
  }
}
