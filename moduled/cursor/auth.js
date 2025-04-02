// @ts-check

// 160284
export function createAuth(params) {
  const { Re, V, _n, R, rj, __decorate, __param, et, Ls, ei, pG, o7, Qq, Zq, t9i, co, le, J, fu, Vje, cTt, Q3i, wn, rt, bt, Qwt, Z3i, Vle, M_n, R_, Yt, HS, U, VEn, cursorCredsService, Ci, uP, pt, ft, Oc, Z, Ti, sqe, hTt, nt, Pl, Ve, ee, j } = params;

  var $h = Re("authenticationService"),
    s9i = "cursorAuth/stripeCustomerId",
    jJ = "cursorAuth/stripeMembershipType",
    fTt = "cursorAuth/cachedEmail",
    gTt = "cursorAuth/cachedSignUpType",
    n9i = "cursorai/donotchange/privacyMode",
    pTt = [
      "claude-3-opus-20240229",
      "claude-3-sonnet-20240229",
      "claude-3-haiku-20240307",
    ],
    mTt = ["gemini-1.5-flash", "gemini-1.5-flash-8b"],
    F_n = ["gemini-1.5-preview"],
    r9i = (i) => pTt.includes(i) || i.startsWith("claude-"),
    o9i = (i) => mTt.includes(i) || (i.startsWith("gemini-") && !F_n.includes(i)),
    I1
  ;(function (i) {
    ;(i.UNKNOWN = "unknown"),
      (i.AUTH_0 = "Auth_0"),
      (i.GOOGLE = "Google"),
      (i.GITHUB = "Github")
  })(I1 || (I1 = {}))
  var qje = 2 * 60 * 60 * 1e3,
    bTt = class extends V {
      constructor(e, t, s) {
        super(),
          (this.a = e),
          (this.c = t),
          (this.f = s),
          (this.g = []),
          (this.h = []),
          (this.j = []),
          (this.m = []),
          (this.n = []),
          (this.q = new R()),
          (this.r = null),
          (this.onDidChangeSubscription = this.q.event),
          (this.s = () => this.a.get("cursorAuth/refreshToken", -1)),
          (this.t = () =>
            this.c.overrideCursorAuthToken
              ? this.c.overrideCursorAuthToken
              : this.a.get("cursorAuth/accessToken", -1)),
          (this.u = () => this.a.get(jJ, -1)),
          (this.membershipType = () => {
            switch (this.u()) {
              case _n.ENTERPRISE:
                return _n.ENTERPRISE
              case _n.PRO:
                return _n.PRO
              case _n.FREE_TRIAL:
                return _n.FREE_TRIAL
              default:
                return _n.FREE
            }
          }),
          (this.openAIKey = () => this.a.get("cursorAuth/openAIKey", -1)),
          (this.claudeKey = () => this.a.get("cursorAuth/claudeKey", -1)),
          (this.googleKey = () => this.a.get("cursorAuth/googleKey", -1)),
          (this.w = (n, r) => {
            this.a.store("cursorAuth/refreshToken", r, -1, 1),
              this.a.store("cursorAuth/accessToken", n, -1, 1)
            const o = !!n && !!r
            for (const a of this.m) a(o)
            if (o) {
              const a = rj(n),
                l = new Date(a.exp * 1e3),
                c = new Date(l.getTime() - qje)
              c.getTime() > Date.now() &&
                setTimeout(() => {
                  this.refreshAccessToken()
                }, c.getTime() - Date.now())
            }
          }),
          (this.y = (n, r) => {
            this.a.store(fTt, n, -1, 1), this.a.store(gTt, r, -1, 1)
          }),
          (this.z = () => {
            this.a.store(fTt, "", -1, 1), this.a.store(gTt, I1.UNKNOWN, -1, 1)
          }),
          (this.isTokenExpired = (n) => {
            const r = rj(n)
            return new Date(r.exp * 1e3).getTime() < Date.now()
          }),
          (this.H = (n) => {
            const r = this.membershipType()
            ;(n = n ?? _n.FREE),
              this.a.store(jJ, n, -1, 1),
              r !== n && this.C(n, r),
              this.q.fire(n)
          }),
          (this.storeOpenAIKey = (n) => {
            for (const r of this.g) r(n)
            this.a.store("cursorAuth/openAIKey", n, -1, 1)
          }),
          (this.storeClaudeKey = (n) => {
            for (const r of this.h) r(n)
            this.a.store("cursorAuth/claudeKey", n, -1, 1)
          }),
          (this.storeGoogleKey = (n) => {
            for (const r of this.j) r(n)
            this.a.store("cursorAuth/googleKey", n, -1, 1)
          })
      }
      getApiKeyForModel(e) {
        return r9i(e) && this.f.applicationUserPersistentStorage.useClaudeKey
          ? this.claudeKey()
          : o9i(e) && this.f.applicationUserPersistentStorage.useGoogleKey
            ? this.googleKey()
            : this.openAIKey()
      }
      getExpirationTime(e) {
        return rj(e).exp * 1e3
      }
      isAlmostExpired(e) {
        if (
          this.r === null ||
          this.r.accessToken !== e ||
          this.r.cacheExpiration < Date.now()
        ) {
          const s = this.getExpirationTime(e) - 5 * 60 * 1e3
          return Date.now() > s
            ? ((this.r = null), !0)
            : ((this.r = { accessToken: e, cacheExpiration: s }), !1)
        } else return !1
      }
      addOpenAIKeyChangedListener(e) {
        this.g.push(e)
      }
      addClaudeKeyChangedListener(e) {
        this.h.push(e)
      }
      addGoogleKeyChangedListener(e) {
        this.j.push(e)
      }
      addLoginChangedListener(e) {
        this.m.push(e)
      }
      addSubscriptionChangedListener(e) {
        this.n.push(e)
      }
      removeOpenAIKeyChangedListener(e) {
        this.g = this.g.filter((t) => t !== e)
      }
      removeClaudeKeyChangedListener(e) {
        this.h = this.h.filter((t) => t !== e)
      }
      removeGoogleKeyChangedListener(e) {
        this.j = this.j.filter((t) => t !== e)
      }
      removeLoginChangedListener(e) {
        this.m = this.m.filter((t) => t !== e)
      }
      removeSubscriptionChangedListener(e) {
        this.n = this.n.filter((t) => t !== e)
      }
      C(e, t) {
        for (const s of this.n) s(e, t)
      }
      F(e) {
        for (const t of this.m) t(e)
      }
      G(e) {
        this.q.fire(e)
      }
    }
  bTt = __decorate([__param(0, et), __param(1, Ls), __param(2, ei)], bTt)
  var vTt = class extends bTt {
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m) {
      super(e, t, s),
        (this.$ = n),
        (this.ab = r),
        (this.bb = o),
        (this.cb = a),
        (this.db = l),
        (this.eb = c),
        (this.fb = h),
        (this.gb = u),
        (this.hb = d),
        (this.ib = g),
        (this.jb = p),
        (this.kb = m),
        (this.M = () => {}),
        (this.N = () => {}),
        (this.O = () => {}),
        (this.S = () => !0),
        (this.U = () => {}),
        (this.W = !0),
        (this.X = new R()),
        (this.onDidPotentiallyChangePrivacyMode = this.X.event),
        (this.getDaysRemainingOnTrial = async () => {
          const w = await this.getAccessToken()
          return w
            ? (
                await (
                  await fetch(
                    `${this.$.getBackendUrl()}/auth/full_stripe_profile`,
                    {
                      headers: {
                        Authorization: `Bearer ${w}`,
                        [pG]: o7(this.reactivePrivacyMode()),
                        [Qq]: Zq(),
                      },
                    },
                  )
                ).json()
              ).daysRemainingOnTrial
            : void 0
        }),
        (this.logout = async () => {
          this.a.store("cursorAuth/refreshToken", null, -1, 1),
            this.a.store("cursorAuth/accessToken", null, -1, 1),
            this.a.store(s9i, null, -1, 1),
            this.a.store(jJ, _n.FREE, -1, 1),
            this.z(),
            this.C(_n.FREE, _n.FREE),
            this.G(_n.FREE),
            this.F(!1),
            this.refreshMembershipType(),
            await this.ab.open(`${this.$.getLogoutUrl()}`, { openExternal: !0 })
        }),
        (this.debouncedRefetchIsTeamsPrivacyModeOn = t9i(() => {
          this.U()
        }, 3e4)),
        (this.lb = !1),
        (this.rb = !1),
        (this.refreshAccessToken = async (w = !1) => {
          if (this.rb) return
          this.rb = !0
          let C
          try {
            const S = this.t()
            if (S && !w && new Date(rj(S).exp * 1e3).getTime() - Date.now() > qje)
              return
            const x = this.s()
            if (x) {
              const k = new AbortController()
              C = setTimeout(() => k.abort(), 2e4)
              const E = {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    grant_type: "refresh_token",
                    client_id: this.$.getCredentials().authClientId,
                    refresh_token: x,
                  }),
                  signal: k.signal,
                },
                D = `https://${this.$.getCredentials().authDomain}/oauth/token`,
                P = await fetch(D, E)
              if ((clearTimeout(C), P instanceof Error))
                throw new Error("Failed to refresh access token")
              console.log("successfully refreshed access token!")
              const L = await P.json()
              L.shouldLogout === !0 ? this.logout() : this.w(L.access_token, x)
            }
          } catch (S) {
            console.error(S)
          } finally {
            ;(this.rb = !1), C && clearTimeout(C)
          }
        }),
        (this.getDidUserLastPaymentFailed = async () => {
          const w = await this.getAccessToken()
          return await (
            await fetch(`${this.$.getBackendUrl()}/auth/last_payment_failed`, {
              headers: {
                Authorization: `Bearer ${w}`,
                [pG]: o7(this.reactivePrivacyMode()),
                [Qq]: Zq(),
              },
            })
          ).json()
        }),
        (this.refreshMembershipType = async () => {
          const w = this.t()
          if (!w) {
            this.H(_n.FREE),
              this.f.applicationUserPersistentStorage.aiSettings.teamIds
                ?.length !== 0 &&
                this.f.setApplicationUserPersistentStorage(
                  "aiSettings",
                  "teamIds",
                  [],
                )
            return
          }
          const C = await this.getTeams()
          if (C.some((x) => x.hasBilling && x.seats > 0)) {
            const x =
              this.f.applicationUserPersistentStorage.aiSettings.teamIds || []
            ;(x.length !== C.length ||
              x.some((k) => !C.some((E) => E.id === k))) &&
              this.f.setApplicationUserPersistentStorage(
                "aiSettings",
                "teamIds",
                C.map((k) => k.id),
              ),
              this.H(_n.ENTERPRISE),
              co(() => {
                this.X.fire(this.reactivePrivacyMode())
              })
            return
          } else
            this.f.applicationUserPersistentStorage.aiSettings.teamIds?.length !==
              0 &&
              this.f.setApplicationUserPersistentStorage(
                "aiSettings",
                "teamIds",
                [],
              )
          let S
          try {
            const x = await fetch(
              `${this.$.getBackendUrl()}/auth/full_stripe_profile`,
              {
                headers: {
                  Authorization: `Bearer ${w}`,
                  [pG]: o7(this.reactivePrivacyMode()),
                  [Qq]: Zq(),
                },
              },
            )
            if (x.status === 404) throw new Error("404 Not found")
            S = await x.json()
          } catch {
            const k = await fetch(
              `${this.$.getBackendUrl()}/auth/stripe_profile`,
              {
                headers: {
                  Authorization: `Bearer ${w}`,
                  [pG]: o7(this.reactivePrivacyMode()),
                  [Qq]: Zq(),
                },
              },
            ).then((E) => E.json())
            k && typeof k == "string"
              ? (S = { membershipType: _n.PRO, paymentId: k })
              : (S = void 0)
          }
          S !== void 0 ? this.H(S.membershipType) : this.H(_n.FREE)
        }),
        (this.sb = le(0)),
        (this.reactiveMembershipType = () => {
          const w = this.sb[0]()
          return this.membershipType()
        }),
        (this.getAdminRepoBlocklist = () =>
          this.f.applicationUserPersistentStorage.teamBlocklist || []),
        (this.R = this.D(this.f.createScoped(this))),
        this.ib
          .getMachineId()
          .then((w) => (this.Y = w))
          .catch(() => {}),
        this.ib
          .getMacMachineId()
          .then((w) => (this.Z = w))
          .catch(() => {}),
        (this.I = new J()),
        this.D(this.I),
        this.f.setApplicationUserPersistentStorage(
          "membershipType",
          this.membershipType(),
        ),
        this.a.onDidChangeValue(
          -1,
          jJ,
          this.I,
        )(() => {
          this.f.setApplicationUserPersistentStorage(
            "membershipType",
            this.a.get(jJ, -1),
          )
        }),
        this.R.onChangeEffect({
          deps: [() => this.reactivePrivacyMode()],
          onChange: ({ deps: w }) => {
            this.X.fire(w[0])
          },
          runNowToo: !0,
        }),
        this.eb.registerBearerTokenProvider(() => this.getAccessToken()),
        this.bb.registerHandler({
          handleURL: async (w, C) => {
            if (
              (w.scheme === "control" || w.scheme === "cursor") &&
              w.authority === "cursorAuth"
            ) {
              const S = w.query,
                x = new URLSearchParams(S)
              return this.nb(x), !0
            }
            return !1
          },
        }),
        (this.P = this.fb.createInstance(fu, { service: Vje })),
        (this.Q = this.fb.createInstance(fu, { service: cTt })),
        this.addLoginChangedListener((w) => {
          if ((this.P.createServer(), this.Q.createServer(), w)) {
            const C = this.t()
            if (C) {
              const S = this.getAuthIdFromToken(C)
              this.db.registerAuthId(S)
              return
            }
          }
          this.db.registerAuthId(void 0)
        })
      const b = this.t()
      if (b) {
        const w = this.getAuthIdFromToken(b)
        this.db.registerAuthId(w)
      } else this.db.registerAuthId(void 0)
      this.D(
        this.gb.onDidChangeTransport(() => {
          this.sendPrivacySettings().catch(console.error)
        }),
      ),
        this.reconcilePrivacyMode(),
        this.R.onChangeEffect({
          deps: [() => this.reactivePrivacyMode()],
          onChange: ({ deps: w }) => {
            this.sendPrivacySettings().catch(console.error)
            try {
              this.a.store(n9i, o7(this.reactivePrivacyMode()), -1, 0)
            } catch (C) {
              console.error(C)
            }
          },
        })
      const y = this.R.createImplicitResource({
        depFn: () => this.f.applicationUserPersistentStorage.aiSettings.teamIds,
        produceFn: async (w) => {
          let C
          try {
            if (w === void 0 || w.length === 0) return (this.W = !0), !0
            const S = new AbortController()
            C = setTimeout(() => {
              S.abort()
            }, 5e3)
            const x = await this.dashboardClient()
            return await Promise.allSettled(
              w.map(
                async (E) =>
                  await x
                    .getTeamPrivacyModeForced(new Q3i({ teamId: E }), {
                      headers: wn(rt()),
                      signal: S.signal,
                    })
                    .then((D) => D.privacyModeForced),
              ),
            ).then((E) => {
              if (E.filter((L) => L.status === "fulfilled").length === 0)
                return this.W
              const P = E.some((L) => L.status === "fulfilled" && L.value)
              return (this.W = P), P
            })
          } finally {
            C && clearTimeout(C),
              co(() => {
                this.X.fire(this.reactivePrivacyMode())
              })
          }
        },
        initialValue: !0,
      })
      ;(this.S = y[0]),
        (this.U = y[1].refetch),
        this.U(),
        this.tb(),
        bt.setInterval(() => {
          this.U(), this.tb()
        }, 5 * 6e4),
        (this.J = new Promise((w, C) => {
          this.M = w
        })),
        this.refreshAuthentication(),
        this.D(
          this.$.onDidRequestRelogin(() => {
            this.a.store("cursorAuth/refreshToken", null, -1, 1),
              this.a.store("cursorAuth/accessToken", null, -1, 1),
              this.a.store(s9i, null, -1, 1),
              this.a.store(jJ, _n.FREE, -1, 1),
              this.C(_n.FREE, _n.FREE),
              this.G(_n.FREE),
              this.F(!1),
              this.login()
          }),
        ),
        this.D(
          this.onDidChangeSubscription((w) => {
            this.sb[1]((C) => C + 1)
          }),
        ),
        setTimeout(() => {
          this.getDidUserLastPaymentFailed().then((w) => {
            this.f.setNonPersistentStorage({
              ...this.f.nonPersistentStorage,
              lastPaymentWasFailed: w,
            })
          })
        }, 1e3)
    }
    reconcilePrivacyMode() {
      try {
        this.a.get(n9i, -1) === "true" &&
          this.reactivePrivacyMode() !== !0 &&
          this.f.setApplicationUserPersistentStorage("noStorageMode", !0)
      } catch (e) {
        console.error(e)
      }
    }
    shouldHaveGhostModeFromEnterprise() {
      return this.debouncedRefetchIsTeamsPrivacyModeOn(), this.S()
    }
    belongsToDevTeam() {
      const e = this.f.applicationUserPersistentStorage.aiSettings.teamIds
      return e === void 0 ? !1 : e.includes(1)
    }
    reactivePrivacyMode() {
      const e = this.f.applicationUserPersistentStorage.noStorageMode
      return this.reactiveMembershipType() === _n.ENTERPRISE
        ? this.belongsToDevTeam()
          ? (e !== !1 &&
              this.f.setApplicationUserPersistentStorage("noStorageMode", !1),
            !1)
          : this.shouldHaveGhostModeFromEnterprise()
            ? (this.f.setApplicationUserPersistentStorage("noStorageMode", !0),
              !0)
            : e
        : e === void 0 && this.a.get(Qwt, -1, "true") !== "true"
          ? (this.f.setApplicationUserPersistentStorage("noStorageMode", !0), !0)
          : e
    }
    async refreshAuthService() {
      this.Q.createServer(), this.P.createServer()
    }
    async dashboardClient() {
      return await this.P.get()
    }
    async authClient() {
      return await this.Q.get()
    }
    async getTeams() {
      const e = await this.dashboardClient()
      try {
        return (await e.getTeams(new Z3i({}), { headers: wn(rt()) })).teams
      } catch (t) {
        if ("rawMessage" in t && t.rawMessage.includes("404"))
          return console.error("Using pre-teams backend"), []
        throw t
      }
    }
    async sendPrivacySettings() {
      Vle(async () => {
        if (!this.lb) {
          this.lb = !0
          try {
            await M_n(
              async () => {
                const e = await this.authClient()
                if (this.t() === void 0) throw new Error("No access token")
                await e.markPrivacy({
                  currentPrivacyMode: this.reactivePrivacyMode(),
                  onboardingPrivacyMode:
                    this.f.applicationUserPersistentStorage
                      .selectedPrivacyForOnboarding,
                  isUsingCurrentAndOnboardingFormat: !0,
                })
              },
              { initialRetryTimeMs: 3e3, maxNumberOfRetries: 5 },
            )
          } catch (e) {
            console.error(e)
          } finally {
            this.lb = !1
          }
        }
      }, 10 * 1e3)
    }
    async getEmailAndSignUpType() {
      const e = this.a.get(fTt, -1),
        t = this.a.get(gTt, -1)
      if (e && e !== "" && t) {
        const a = Object.values(I1).includes(t) ? t : I1.UNKNOWN
        return { email: e, signUpType: a }
      }
      const s = rt(),
        r = await (await this.authClient()).getEmail({}, { headers: wn(s) })
      let o = I1.UNKNOWN
      switch (r.signUpType) {
        case R_.AUTH_0:
          o = I1.AUTH_0
          break
        case R_.GOOGLE:
          o = I1.GOOGLE
          break
        case R_.GITHUB:
          o = I1.GITHUB
          break
      }
      return this.y(r.email, o), { email: r.email, signUpType: o }
    }
    mb() {
      this.J = new Promise((e, t) => {
        this.M = e
      })
    }
    async nb(e) {
      switch (e.get("route")) {
        case "login": {
          const s = e.get("refreshToken"),
            n = e.get("accessToken")
          s && n && (this.w(n, s), await this.refreshMembershipType(), this.M())
          return
        }
        case "pay":
          await this.refreshAccessToken(), this.M()
          return
        default:
          return
      }
    }
    ob(e) {
      const t = Yt.wrap(e)
      return HS(t, !1, !0)
    }
    async pb(e) {
      if (!crypto.subtle)
        throw new Error(
          "'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).",
        )
      const s = new TextEncoder().encode(e)
      return await crypto.subtle.digest("sha-256", s)
    }
    qb(e) {
      this.db.publicLogCapture("$identify_cursordelimiter_" + e)
    }
    async login(e = "login") {
      this.mb()
      const t = new Uint8Array(32)
      crypto.getRandomValues(t)
      const s = this.ob(t),
        n = this.ob(new Uint8Array(await this.pb(s))),
        r = rt()
      e !== "dev" &&
        e !== "dev-trial" &&
        (await this.ab.open(
          `${this.$.getLoginUrl()}?challenge=${n}&uuid=${r}&mode=${e}`,
          { openExternal: !0 },
        ))
      let o = 0
      this.N(), this.cb.info("Starting polling for login")
      const a = bt.setInterval(async () => {
        this.cb.info("Beginning of Login Poll")
        let l
        if (
          (e === "dev"
            ? (l = await fetch(
                `${this.f.applicationUserPersistentStorage.cursorCreds.backendUrl}/auth/cursor_dev_session_token`,
              ))
            : e === "dev-trial"
              ? (l = await fetch(
                  `${this.f.applicationUserPersistentStorage.cursorCreds.backendUrl}/auth/cursor_dev_session_token?trial=true`,
                ))
              : (l = await fetch(
                  `${this.$.getPollingEndpoint()}?uuid=${r}&verifier=${s}`,
                  {
                    headers: { [pG]: o7(this.reactivePrivacyMode()), [Qq]: Zq() },
                  },
                )),
          this.cb.info("Got login result", l.status),
          l.status == 404)
        )
          return
        const c = await l.json()
        this.cb.info("Got login json", c),
          c !== void 0 &&
            (c.authId && this.qb(c.authId),
            c.accessToken &&
              c.refreshToken &&
              (this.w(c.accessToken, c.refreshToken),
              await this.refreshMembershipType(),
              this.M(),
              bt.clearInterval(a))),
          o++,
          o >= 30 && bt.clearInterval(a)
      }, 200)
      ;(this.N = () => {
        bt.clearInterval(a)
      }),
        await Promise.race([
          new Promise((l) => setTimeout(() => l(!1), 180 * 1e3)),
        ]),
        bt.clearInterval(a),
        this.mb()
    }
    async pay() {
      this.mb(),
        await this.ab.open(this.$.getCheckoutUrl(), { openExternal: !0 }),
        this.O()
      const e = bt.setInterval(async () => {
        await this.refreshAuthentication(),
          this.membershipType() !== _n.FREE && bt.clearInterval(e)
      }, 200)
      ;(this.O = () => {
        bt.clearInterval(e)
      }),
        await Promise.race([
          new Promise((t) => setTimeout(() => t(!1), 3 * 60 * 1e3)),
        ]),
        bt.clearInterval(e),
        this.mb()
    }
    getAuthIdFromToken(e) {
      try {
        return rj(e).sub
      } catch {
        return
      }
    }
    async signup() {
      await this.login("signup")
    }
    async settings() {
      await this.ab.open(this.$.getSettingsUrl(), { openExternal: !0 })
    }
    async refreshAuthentication() {
      ;(await this.getAccessToken()) || (await this.refreshAccessToken()),
        await this.refreshMembershipType()
    }
    isAuthenticated() {
      const e = this.t(),
        t = this.s()
      return !!(e && t)
    }
    setCppSessionId(e) {
      this.L = e
    }
    async getAuthenticationHeader() {
      const e = await this.getAccessToken()
      return e ? { Authorization: `Bearer ${e}` } : {}
    }
    async getAccessToken() {
      const e = this.t()
      if (e === void 0) return
      const t = new Date(),
        s = rj(e),
        n = new Date(s.exp * 1e3)
      if (n.getTime() < t.getTime() + qje)
        return await this.refreshAccessToken(), this.t()
      {
        const r = new Date(n.getTime() - qje)
        let o
        o && clearTimeout(o),
          (o = setTimeout(
            () => {
              this.refreshAccessToken()
            },
            Math.max(r.getTime() - t.getTime(), 0),
          ))
      }
      return e
    }
    setCommonHeaders(e) {
      VEn({
        req: e,
        machineId: this.Y ?? this.db.machineId,
        macMachineId: this.Z ?? this.db.macMachineId,
        base64Fn: (t) => HS(Yt.wrap(t), !1, !0),
        cursorVersion: this.hb.version,
        privacyMode: this.reactivePrivacyMode(),
        sessionId: this.L,
      })
    }
    async adminBlocklistPath() {
      const e = await this.kb.userHome()
      return U.joinPath(e, this.hb.dataFolderName, "blocklist")
    }
    async tb() {
      const e = `# CHANGES TO THIS FILE WILL BE OVERWRITTEN
  # TO UPDATE THE BLOCKLIST, PLEASE USE THE TEAM SETTINGS PAGE
  `,
        t = this.f.applicationUserPersistentStorage.aiSettings.teamIds,
        s = await this.adminBlocklistPath()
      if (!t || t.length === 0) {
        this.f.setApplicationUserPersistentStorage("teamBlocklist", [])
        try {
          await this.jb.del(s)
        } catch {
          return
        }
        return
      }
      try {
        const n = await this.dashboardClient(),
          r = []
        for (const o of t)
          try {
            const a = await n.getTeamRepos({ teamId: o }, { headers: wn(rt()) })
            for (const l of a.repos) {
              const c = this.vb(l.url)
              c &&
                l.patterns.forEach((h) => {
                  r.push(this.ub(c, h.pattern))
                })
            }
          } catch {}
        if (
          (this.f.setApplicationUserPersistentStorage("teamBlocklist", r),
          r.length > 0)
        ) {
          const o = [e, ...r].join(`
  `)
          await this.jb.writeFile(s, Yt.fromString(o))
        } else await this.jb.del(s).catch(() => {})
      } catch (n) {
        this.cb.error("Failed to poll repo blocklist:", n)
      }
    }
    ub(e, t) {
      t = t.trim()
      let s = ""
      return (
        t.startsWith("!") && ((t = t.slice(1)), (s += "!")),
        (s += `**/${e}/` + t),
        s
      )
    }
    vb(e) {
      try {
        const t = e.match(/^git@[^:]+:([^/]+)\/([^/]+?)(\.git)?$/)
        if (t) return t[2]
        const s = e.match(/^https?:\/\/[^/]+\/[^/]+\/([^/]+?)(\.git)?$/)
        return s ? s[1] : void 0
      } catch {
        return
      }
    }
  }
  ;(vTt = __decorate(
    [
      __param(0, et),
      __param(1, Ls),
      __param(2, ei),
      __param(3, cursorCredsService),
      __param(4, Ci),
      __param(5, uP),
      __param(6, pt),
      __param(7, ft),
      __param(8, Oc),
      __param(9, Z),
      __param(10, sqe),
      __param(11, Ti),
      __param(12, hTt),
      __param(13, nt),
      __param(14, Pl),
    ],
    vTt,
  )),
    Ve($h, vTt, 1)
  var O_n = class extends ee {
    constructor() {
      super({
        id: "cursorAuth.triggerTokenRefresh",
        title: {
          value: "Trigger Token Refresh",
          original: "Trigger Token Refresh",
        },
        f1: !0,
      })
    }
    run(i, e = !0) {
      i.get($h).refreshAccessToken(e)
    }
  }
  j(O_n);

  return {
    $h,
    pTt,
    mTt,
    r9i,
    o9i,
    I1,
  };
}
