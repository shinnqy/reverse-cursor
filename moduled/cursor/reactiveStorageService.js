// @ts-check

export function createReactiveStorageService(params) {
  const {op: createObserver, Re, V, yo, R, gB, AOi, ePn, CWe, zf, yUe, $Oi, MOi, bkt, J, jon, tPn, kkt, rt, wf, jrn, __decorate, __param, et, Z, pt } = params;

  var BRr = Re("devOnlyRedisStorageService"),
    QF,
    ReactiveStorageService = class extends V {
      static {
        QF = this
      }
      static {
        this.registeredActions = []
      }
      static registerAction(e) {
        this.registeredActions.push(e)
      }
      constructor(e, t, s) {
        super(),
          (this.c = e),
          (this.f = t),
          (this.g = s),
          (this.DEV_ONLY_serverApplicationUserPersistentStorage = void 0),
          (this.set_DEV_ONLY_ServerApplicationUserPersistentStorage = void 0),
          (this.b = void 0),
          (this.n = new yo(10)),
          (this.y = this.D(new R())),
          (this.z = this.y.event),
          ([this.nonPersistentStorage, this.setNonPersistentStorage] = this.m()),
          ([this.applicationUserPersistentStorage, this.a] = this.u(
            -1,
            0,
            gB,
            AOi,
            ePn,
            CWe,
          )),
          (this.setApplicationUserPersistentStorage = (...n) => {
            zf(() => {
              this.a(...n),
                this.a(
                  "SPECIAL_KEY_lastUpdatedTimeInUnixSeconds",
                  Date.now() / 1e3,
                )
            })
          }),
          ([
            this.workspaceUserPersistentStorage,
            this.setWorkspaceUserPersistentStorage,
          ] = this.u(1, 0, yUe, $Oi, MOi, bkt)),
          this.D(
            this.c.onWillSaveState(() => {
              this.q(this.applicationUserPersistentStorage, -1, 0, gB, CWe),
                this.q(this.workspaceUserPersistentStorage, 1, 0, yUe, bkt)
            }),
          ),
          this.D(
            this.c.onDidChangeValue(
              -1,
              gB,
              this.D(new J()),
            )((n) => {
              this.r(
                this.setApplicationUserPersistentStorage,
                this.applicationUserPersistentStorage,
                -1,
                0,
                gB,
                n,
                AOi,
                CWe,
              )
            }),
          ),
          this.D(
            this.c.onDidChangeValue(
              1,
              yUe,
              this.D(new J()),
            )((n) => {
              this.r(
                this.setWorkspaceUserPersistentStorage,
                this.workspaceUserPersistentStorage,
                1,
                0,
                yUe,
                n,
                $Oi,
                bkt,
              )
            }),
          )
        for (const n of QF.registeredActions) n(this, this.f)
      }
      h() {
        this.f.invokeFunction((e) => {
          try {
            const t = e.get(BRr)
            this.b = t
          } catch {}
        })
      }
      j() {
        this.b &&
          this.set_DEV_ONLY_ServerApplicationUserPersistentStorage &&
          this.DEV_ONLY_serverApplicationUserPersistentStorage &&
          (this.b.registerKey(gB, jon),
          this.D(
            this.b.onDidChangeValue(
              gB,
              this.D(new J()),
            )((e) => {
              this.F(
                gB,
                { key: e.key, scope: -1, target: 0 },
                CWe,
                this.set_DEV_ONLY_ServerApplicationUserPersistentStorage,
                this.DEV_ONLY_serverApplicationUserPersistentStorage,
              )
            }),
          ),
          this.D(
            this.z(() => {
              this.DEV_ONLY_serverApplicationUserPersistentStorage &&
                this.G(
                  this.DEV_ONLY_serverApplicationUserPersistentStorage,
                  gB,
                  [],
                )
            }),
          ))
      }
      m() {
        return createObserver(tPn, void 0)
      }
      manuallyDisposedWrapper(e) {
        const t = new kkt(this)
        return (
          e(),
          {
            dispose: () => {
              t.dispose()
            },
          }
        )
      }
      onChangeEffectManuallyDisposed(e) {
        const t = new kkt(this)
        return (
          t.onChangeEffect(e),
          {
            dispose: () => {
              t.dispose()
            },
          }
        )
      }
      q(e, t, s, n, r) {
        const o = rt()
        this.n.set(`${n}${t}`, o),
          this.c.store(
            n,
            QF.stringifyStorage(e, r, (a) => this.g.warn(a), o),
            t,
            s,
          )
      }
      static stringifyStorage(e, t, s, n) {
        const r = (a, l) => {
            if (a === void 0) return
            if (typeof a != "object" || a === null) return a
            const c = l.filter((u) => u.length > 0),
              h = c.filter((u) => u.length === 1)
            if (Array.isArray(a))
              return h.some((g) => g[0] === !0)
                ? []
                : (h.length > 0 &&
                    s(
                      `there is a path that ends in the wrong type! expected true because we are at an array, but got ${h[0][0]}`,
                    ),
                  a.flatMap((g) => {
                    const p = c.filter((m) => m[0] === !0)
                    return typeof g == "object" &&
                      g &&
                      "SPECIAL_KEY_doNotPersist" in g &&
                      g.SPECIAL_KEY_doNotPersist === !0
                      ? []
                      : [
                          r(
                            g,
                            p.map((m) => m.slice(1)),
                          ),
                        ]
                  }))
            {
              const u = a
              if (
                "SPECIAL_KEY_doNotPersist" in u &&
                u.SPECIAL_KEY_doNotPersist === !0
              )
                return
              const d = {}
              for (const g in u)
                if (g in u) {
                  const p = u[g],
                    m = c.filter((b) => b[0] === g)
                  if (m.some((b) => b.length === 1)) continue
                  d[g] = r(
                    p,
                    m.map((b) => b.slice(1)),
                  )
                }
              return d
            }
          },
          o = r(wf(e), t)
        return (
          n && typeof o == "object" && (o.SPECIAL_KEY_id = n), JSON.stringify(o)
        )
      }
      r(e, t, s, n, r, o, a, l) {
        if (
          o.scope === s &&
          (o.target === void 0 || o.target === n) &&
          o.key === r
        )
          try {
            const h = this.t(s, r, a, t, l, { throwIfSavedObjectIsTheSame: !0 })
            if (
              "SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in h &&
              "SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in t &&
              typeof h.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds == "number" &&
              typeof t.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds == "number" &&
              t.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds >=
                h.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds
            )
              return
            QF.updateWithValue(e, h, l)
          } catch {}
      }
      static updateWithValue(e, t, s) {
        e(jrn(t))
      }
      static hydrateOldValue(e, t, s, n) {
        const r = (o, a) => {
          for (const l in a)
            if (!o.hasOwnProperty(l))
              n(
                `Missing property "${l}" in oldValue. Filling with value from initValue. Please add a migration if necessary.`,
              ),
                (o[l] = a[l])
            else if (Array.isArray(o[l])) {
              if (Array.isArray(a[l]))
                for (const c of a[l])
                  typeof c == "object" &&
                    c !== null &&
                    "SPECIAL_KEY_doNotPersist" in c &&
                    c.SPECIAL_KEY_doNotPersist === !0 &&
                    o[l].push(c)
            } else typeof a[l] == "object" && a[l] !== null && r(o[l], a[l])
        }
        return r(t, e), JSON.parse(JSON.stringify(t))
      }
      t(e, t, s, n, r, o) {
        const a = this.c.get(t, e)
        let l = {}
        try {
          a && (l = JSON.parse(a))
        } catch {}
        if (
          o.throwIfSavedObjectIsTheSame === !0 &&
          typeof l == "object" &&
          "SPECIAL_KEY_id" in l &&
          this.n.get(`${t}${e}`) === l.SPECIAL_KEY_id
        )
          throw new Error(
            "this is the same object that we just saved! we should ignore it",
          )
        return (
          this.f.invokeFunction((c) => {
            for (const h of s) l = h(c, l)
          }),
          QF.hydrateOldValue(n, l, r, (c) => this.g.warn(c))
        )
      }
      u(e, t, s, n, r, o) {
        return createObserver(
          this.t(e, s, n, r, o, { throwIfSavedObjectIsTheSame: !1 }),
          void 0,
        )
      }
      w(e, t, s, n) {
        if (this.b === void 0) return t
        const r = "server",
          o = this.b.syncGetOnlyWorksForRegisteredKeys(e)
        let a = {}
        try {
          o && (a = JSON.parse(o))
        } catch {}
        if (
          n.throwIfSavedObjectIsTheSame === !0 &&
          typeof a == "object" &&
          "SPECIAL_KEY_id" in a &&
          this.n.get(`${e}${r}`) === a.SPECIAL_KEY_id
        )
          throw new Error(
            "this is the same object that we just saved! we should ignore it",
          )
        return QF.hydrateOldValue(t, a, s, (l) => this.g.warn(l))
      }
      C(e, t, s, n, r, o) {
        const a = this.w(s, r, o, { throwIfSavedObjectIsTheSame: !1 }),
          l = createObserver(a, void 0),
          c = l[0],
          h = l[1]
        return [
          c,
          (...d) => {
            const g = h(...d)
            return this.y.fire(!0), g
          },
        ]
      }
      F(e, t, s, n, r) {
        if (!(r === void 0 || n === void 0 || !(t.key === e)))
          try {
            const a = this.w(e, r, s, { throwIfSavedObjectIsTheSame: !0 })
            if (
              "SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in a &&
              "SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in r &&
              typeof a.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds == "number" &&
              typeof r.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds == "number" &&
              r.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds >=
                a.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds
            )
              return
            QF.updateWithValue(n, a, s)
          } catch {}
      }
      G(e, t, s) {
        const n = rt()
        this.n.set(`${t}server`, n),
          this.b !== void 0 &&
            this.b.store(
              t,
              QF.stringifyStorage(e, s, (o) => this.g.warn(o), n),
            )
      }
      createScoped(e) {
        return this.D(new kkt(e))
      }
    }
  ReactiveStorageService = QF = __decorate([__param(0, et), __param(1, Z), __param(2, pt)], ReactiveStorageService)

  // Ve(ei, ReactiveStorageService, 1),

  return {
    ReactiveStorageService
  }
}
