// @ts-check

export function createMainThreadCursor(params) {
  const {V: Disposable, __decorate, __param, MainContext, ExtHostContext, bt: window, Sfe: AIServerV1ShadowWorkspaceService, Qr, ei, $h, Md, pt, ft, metricsService, diffingService, Pcs, Lcs, everythingProviderService, xYe, HFt, hue, yY, sqe, Ncs, mI, cppEventLoggerService, I3t, hTt, Y$, selectedContextService, co, Yt, Bcs, rt, oi, Con, _cs, XRi, du, vo, Qq, Zq, S4, dk, x$ } = params;

  var Ucs = (i) => {
    const e = i.at(0)
    return e && e === e?.toUpperCase() ? e.toLowerCase() + i.slice(1) : i
  }
  function Tet(i) {
    const e = new Headers()
    if (i) for (const t of i.headers) e.append(t.key, t.value)
    return e
  }

  var MainThreadCursor = class extends Disposable {
    constructor(
      e,
      t,
      s,
      n,
      r,
      o,
      a,
      l,
      c,
      h,
      u,
      d,
      g,
      p,
      m,
      b,
      y,
      w,
      C,
      S,
      x,
      k,
      E,
    ) {
      super(),
        (this.c = t),
        (this.f = s),
        (this.g = n),
        (this.h = r),
        (this.j = o),
        (this.n = a),
        (this.r = l),
        (this.s = c),
        (this.t = h),
        (this.u = u),
        (this.w = d),
        (this.y = g),
        (this.z = p),
        (this.C = m),
        (this.F = b),
        (this.G = y),
        (this.H = w),
        (this.J = C),
        (this.L = S),
        (this.M = x),
        (this.N = k),
        (this.P = E),
        (this.S = new Map())
      const D = e.getProxy(ExtHostContext.ExtHostCursor)
      this.a = D
      const P = this.D(this.c.createScoped(this))
      P.createImplicitEffect(() => {
        this.a.$changeCursorCreds(
          this.c.applicationUserPersistentStorage.cursorCreds,
        ),
          this.a.$changeShouldIndex(
            this.c.applicationUserPersistentStorage.indexRepository,
          )
      }),
        P.onChangeEffect({
          deps: [
            () =>
              this.c.workspaceUserPersistentStorage.indexingData
                .preferredEmbeddingModel,
          ],
          onChange: ({ deps: [L] }) => {
            this.a.$changePreferredEmbeddingModel(L)
          },
        }),
        this.D(
          this.f.onDidPotentiallyChangePrivacyMode((L) => {
            this.a.$changePrivacyMode(L)
          }),
        ),
        P.onChangeEffect({
          onChange: () => {
            this.a.$changeFileSyncClientEnabled(
              this.c.applicationUserPersistentStorage.isFileSyncClientEnabled,
            ),
              this.a.$changeCppEnabled(
                this.c.applicationUserPersistentStorage.cppEnabled,
              ),
              this.a.$changeCppConfig(
                this.c.applicationUserPersistentStorage.cppConfig,
              ),
              this.a.$changeMembershipType(
                this.c.applicationUserPersistentStorage.membershipType,
              )
          },
          deps: [
            () => this.c.applicationUserPersistentStorage.isFileSyncClientEnabled,
            () => this.c.applicationUserPersistentStorage.cppEnabled,
            () => this.c.applicationUserPersistentStorage.cppConfig,
            () => this.c.applicationUserPersistentStorage.membershipType,
          ],
        }),
        this.f.refreshMembershipType(),
        (this.authenticationUpdateIntervalId = window.setInterval(
          this.f.refreshMembershipType,
          60 * 1e3,
        )),
        (this.privacyModeForwarderIntervalId = window.setInterval(() => {
          co(() => {
            this.a.$changePrivacyMode(this.f.reactivePrivacyMode())
          })
        }, 30 * 1e3)),
        (this.b = async (L) => {
          this.a.$changeCursorAuthToken(await this.f.getAccessToken())
        }),
        this.f.addLoginChangedListener(this.b),
        this.g.onDidRequestRepoIndex(() => {
          this.a.$triggerCursorIndex()
        }),
        this.g.onDidRequestRepoInterrupt((L) => {
          this.a.$triggerCursorInterrupt(L)
        }),
        this.D(
          this.H.onDidChangeCppSessionId((L) => {
            this.a.$updateCppSessionId(L)
          }),
        ),
        this.a.$updateCppSessionId(this.H.getCurrentSessionId()),
        this.D(
          this.H.onDidChangeCppTelemEnabled((L) => {
            this.a.$updateCppTelemEnabled(L)
          }),
        ),
        this.a.$updateCppTelemEnabled(this.H.canWeTrackTelem()),
        this.D(this.L.onProcessConfigUpdate(this.a.$processConfigUpdate))
    }
    $processAiReaderMessage(e) {
      return this.z.processAiReaderMessage(e)
    }
    dispose() {
      super.dispose(),
        this.f.removeLoginChangedListener(this.b),
        window.clearInterval(this.authenticationUpdateIntervalId),
        window.clearInterval(this.privacyModeForwarderIntervalId)
    }
    async $onDidChangeIndexingStatus() {
      this.g.fireOnDidChangeIndexingStatus()
    }
    async $unregisterOnDidChangeIndexingStatus() {
      this.g.unregisterOnDidChangeIndexingStatus()
    }
    async $triggerRefreshCursorAuthToken() {
      await this.f.refreshAuthentication()
    }
    async $registerExtHostEventLogger() {
      this.Q = this.J.registerExtHostEventLogger({
        recordExtHostEvent: (e) => this.a.$recordExtHostEvent(e),
        forceFlush: () => this.a.$forceFlushExtHostEventLogger(),
      })
    }
    async $unregisterExtHostEventLogger() {
      this.Q && (this.Q.dispose(), (this.Q = void 0))
    }
    async $registerIndexProvider() {
      const e = () => this.a.$getIndexProviderGetGlobalStatus(),
        t = (u) => this.a.$getIndexProviderGetStatus(u),
        s = (u) => this.a.$getIndexProviderGetIndexingProgress(u),
        n = (u) => this.a.$getIndexProviderGetCurrentJobs(u),
        r = () => this.a.$getIndexProviderGetCodebases(),
        o = () => this.a.$getIndexProviderGetHighLevelFolderDescription(),
        a = () => this.a.$getIndexProviderGetRepoInfo(),
        l = () => this.a.$getIndexProviderGetPathEncryptionKey(),
        c = (u) => this.a.$getIndexProviderDecryptPaths(u),
        h = (u) => this.a.$getIndexProviderCompileGlobFilter(u)
      this.g.registerIndexingProvider({
        getGlobalStatus: e,
        getStatus: t,
        getIndexingProgress: s,
        getCurrentJobs: n,
        getHighLevelFolderDescription: o,
        getRepoInfo: a,
        getPathEncryptionKey_ONLY_FOR_VM_AGENT: l,
        decryptPaths: c,
        compileGlobFilter: h,
        getCodebases: r,
      })
    }
    async $unregisterIndexProvider() {
      this.g.unregisterIndexingProvider()
    }
    async $registerMetricsProvider() {
      const e = (r) => {
          this.a.$getMetricsProviderIncrement(r)
        },
        t = (r) => {
          this.a.$getMetricsProviderDecrement(r)
        },
        s = (r) => {
          this.a.$getMetricsProviderDistribution(r)
        },
        n = (r) => {
          this.a.$getMetricsProviderGauge(r)
        }
      this.n.registerMetricsProvider({
        increment: e,
        decrement: t,
        distribution: s,
        gauge: n,
      })
    }
    async $callShadowServer(e, t) {
      try {
        const s = this.F.getServer(),
          r = s[e].bind(s),
          a = AIServerV1ShadowWorkspaceService.methods[e].I.fromBinary(t.buffer),
          l = await r(a)
        return Yt.wrap(l.toBinary())
      } catch (s) {
        throw (
          (console.error("Error in $callShadowServer", s, s.stack),
          this.h.error("Error in $callShadowServer", s, s.stack),
          s)
        )
      }
    }
    async $registerShadowServerProvider() {
      const e = this.C.getServerSocketPath()
      e && (await this.a.$getShadowServerProviderStart(e))
    }
    async $unregisterShadowServerProvider() {}
    async $registerShadowClientProvider() {
      this.R = this.C.provideClient(
        async (e) => (
          await this.a.$createShadowClient(e),
          new Proxy(
            {},
            {
              get: (t, s, n) => {
                if (typeof s == "string") {
                  const r = AIServerV1ShadowWorkspaceService.methods[s]?.I
                  if (r === void 0) return
                  const o = AIServerV1ShadowWorkspaceService.methods[s]?.O
                  if (o === void 0) return
                  const a = s
                  return async (l) => {
                    const c = new r(l),
                      h = await this.a.$callShadowServer(a, Yt.wrap(c.toBinary()))
                    return o.fromBinary(h.buffer)
                  }
                }
              },
            },
          )
        ),
      )
    }
    async $unregisterShadowClientProvider() {
      this.R && (this.R.dispose(), (this.R = void 0))
    }
    async $unregisterMetricsProvider() {
      this.n.unregisterMetricsProvider()
    }
    async $registerEditHistoryProvider() {
      const e = (n) => {
          this.a.$getEditHistoryProviderInitModel(n)
        },
        t = (n) =>
          this.a.$getEditHistoryProviderHasProcessedTextModelUptilVersion(n),
        s = (n) => this.a.$getEditHistoryProviderCompileGlobalDiffTrajectories(n)
      this.t.registerEditHistoryProvider({
        initModel: e,
        hasProcessedTextModelUptilVersion: t,
        compileGlobalDiffTrajectories: s,
      })
    }
    async $unregisterEditHistoryProvider() {}
    async $registerLspSubgraphProvider() {
      this.w.registerProvider({
        activate: this.a.$callLspSubgraphProviderActivate,
        deactivate: this.a.$callLspSubgraphProviderDeactivate,
        debouncedForceAbort: this.a.$callLspSubgraphProviderDebouncedForceAbort,
        retrieve: this.a.$callLspSubgraphProviderRetrieve,
      })
    }
    async $unregisterLspSubgraphProvider() {
      this.w.unregisterProvider()
    }
    async $streamAiConnect(e, t, s, n, r, o, a) {
      if (!(e.typeName in Bcs))
        throw new Error("Service not recognized in the PROTOBUF_SERVICE_NAME_MAP")
      const l = rt(),
        c = new oi(),
        h = () => {
          c.cancel(), this.a.$cancelAiConnectTransportStreamChunk(l)
        }
      s?.addEventListener("abort", h)
      const u = n ?? Con,
        d = new _cs(u)
      this.S.set(l, d),
        (async () => {
          for await (const C of o) {
            const S = new t.I(C),
              x = Yt.wrap(S.toBinary())
            if (c.token.isCancellationRequested) {
              console.info(
                "stopped pushing. Cancelled in $streamAiConnect (aiRequestServiceTransport)",
              )
              break
            }
            this.a.$pushAiConnectTransportStreamChunk(x, l, n).catch((k) => {
              console.error(
                "Error in $streamAiConnect (aiRequestServiceTransport)",
                k,
                k.stack,
              ),
                this.h.error(
                  "Error in $streamAiConnect (aiRequestServiceTransport)",
                  k,
                  k.stack,
                )
            })
          }
          this.a.$endAiConnectTransportStreamChunk(l)
        })()
      const g = await this.a.$callAiConnectTransportProviderStream(
          l,
          e.typeName,
          Ucs(t.name),
          n,
          r,
          a,
          c.token,
        ),
        p = this.S,
        m = async function* () {
          try {
            for await (const C of d) {
              if (c.token.isCancellationRequested) continue
              yield t.O.fromBinary(C.buffer)
            }
          } catch (C) {
            throw C
          } finally {
            p.delete(l), s?.removeEventListener("abort", h)
          }
        },
        b = XRi.fromBinary(g.buffer)
      if (b.isError) {
        const C = JSON.parse(b.connectError)
        if (this.U(C)) {
          const S = new du(C.rawMessage, C.code, C.metadata, C.details, C.cause)
          throw (this.W(S), S)
        }
        throw new Error("Error in the connect call." + b.connectError)
      }
      const y = Tet(b.header),
        w = Tet(b.trailer)
      return {
        stream: !0,
        service: e,
        method: t,
        message: m(),
        header: y,
        trailer: w,
      }
    }
    async $pushAiConnectTransportStreamChunk(e, t) {
      const s = this.S.get(t)
      return s ? (s.push(e), { success: !0 }) : { success: !1 }
    }
    async $endAiConnectTransportStreamChunk(e) {
      const t = this.S.get(e)
      t && t.end()
    }
    U(e) {
      return (
        "name" in e &&
        "rawMessage" in e &&
        "code" in e &&
        e.name === "ConnectError"
      )
    }
    W(e) {
      e.details = e.details.map((t) => {
        const s = "value" in t && t.value instanceof Uint8Array
        if ("value" in t && s === !1) {
          const n = Object.values(t.value)
          t.value = Uint8Array.from(n)
        }
        return t
      })
    }
    async $endAiConnectTransportReportError(e, t) {
      const s = this.S.get(e)
      let n
      this.U(t)
        ? ((n = new du(t.rawMessage, t.code, t.metadata, t.details)), this.W(n))
        : (n = t),
        s && n !== void 0 && s.error(n)
    }
    async $registerAiConnectTransportProvider() {
      const e = this.a,
        t = async (o, a, l, c, h, u) => {
          const d = new a.I(u),
            g = Yt.wrap(d.toBinary())
          if (!(o.typeName in Bcs))
            throw (
              (console.log(
                "MAJOR ERROR: If you are on dev and your service isnt working. SERVICE DOESNOT EXIST",
                o.typeName,
              ),
              new Error(
                "Connect transport provider not initialized. BIG PROBLEM. " +
                  o.typeName,
              ))
            )
          if (this.B.isDisposed) throw new vo()
          const p = this.D(new oi()),
            m = () => {
              p.cancel()
            }
          l?.addEventListener("abort", m)
          try {
            const b = o.typeName,
              y = Ucs(a.name),
              w = await e.$callAiConnectTransportProviderUnary(
                b,
                y,
                g,
                c,
                h,
                p.token,
              ),
              C = XRi.fromBinary(w.buffer)
            if (C.isError) {
              const D = JSON.parse(C.connectError)
              if (this.U(D)) {
                const P = new du(
                  D.rawMessage,
                  D.code,
                  D.metadata,
                  D.details,
                  D.cause,
                )
                throw (this.W(P), P)
              }
              throw new Error("Error in the connect call." + C.connectError)
            }
            const S = C.message,
              x = C.header,
              k = C.trailer,
              E = a.O.fromBinary(S)
            return {
              service: o,
              method: a,
              message: E,
              stream: !1,
              header: Tet(x),
              trailer: Tet(k),
            }
          } finally {
            l?.removeEventListener("abort", m)
          }
        },
        s = (o, a) => {
          const l = new Headers(a)
          return l.set(Qq, Zq(o)), Object.fromEntries(l)
        },
        n = t,
        r = this.$streamAiConnect.bind(this)
      this.G.registerConnectTransportProvider({
        unary: (o, a, l, c, h, u, d) =>
          S4(`${o.typeName}.${a.name}`, (g) => {
            const p = s(g, h)
            return n(o, a, l, c, p, u, d)
          }),
        stream: (o, a, l, c, h, u, d) =>
          S4(`${o.typeName}.${a.name}`, (g) => {
            const p = s(g, h)
            return r(o, a, l, c, p, u, d)
          }),
      })
    }
    async $registerRequesterProvider() {
      const e = (n, r) => this.a.$request(n, r),
        t = (n) => this.a.$flush(n),
        s = (n) => this.a.$cancel(n)
      this.s.registerRequesterProvider({ request: e, flush: t, cancel: s })
    }
    async $unregisterRequesterProvider() {}
    async $registerDiffingProvider() {
      const e = (t, s) => this.a.$getDiffingProviderWordDiff(t, s)
      this.r.registerDiffingProvider({ wordDiff: e })
    }
    async $unregisterDiffingProvider() {
      this.r.unregisterDiffingProvider()
    }
    async $registerEverythingProvider() {
      const e = (t, s) => this.a.$getEverythingProviderRunCommand(t, s)
      this.u.registerEverythingProvider({ runCommand: e })
    }
    async $unregisterEverythingProvider() {
      this.u.unregisterEverythingProvider()
    }
    async $registerEverythingProviderAllLocal() {
      const e = (t, s) => this.a.$getEverythingAllLocalProviderRunCommand(t, s)
      this.u.registerEverythingProviderAllLocal({ runCommand: e })
    }
    async $unregisterEverythingProviderAllLocal() {
      this.u.unregisterEverythingProviderAllLocal()
    }
    async $showWebCmdKInputBox(e) {
      return this.y.showWebCmdKInputBox(e)
    }
    async $updateUploadProgress(e, t, s = !1) {
      s
        ? this.c.setNonPersistentStorage("repoProgressBars", (n) =>
            n.filter((r) => r.repoId !== dk.id),
          )
        : this.c.setNonPersistentStorage("repoProgressBars", (n) =>
            n.find((o) => o.repoId === dk.id)
              ? n.map((o) =>
                  o.repoId === dk.id
                    ? { repoId: dk.id, progress: e, uploadType: t }
                    : o,
                )
              : [...n, { repoId: dk.id, progress: e, uploadType: t }],
          )
    }
    async $getCursorAuthToken() {
      return await this.f.getAccessToken()
    }
    async $getSemanticSearchResultsFromServer(e) {
      return await this.g.parallelSearch(e.query, e.topK, e.finalK, e.options)
    }
    async $getCursorCreds() {
      return Promise.resolve(this.c.applicationUserPersistentStorage.cursorCreds)
    }
    async $getPrivacyMode() {
      return Promise.resolve(this.f.reactivePrivacyMode())
    }
    async $isFileSyncClientEnabled() {
      return this.c.applicationUserPersistentStorage.isFileSyncClientEnabled
    }
    async $cppEnabled() {
      return this.c.applicationUserPersistentStorage.cppEnabled
    }
    async $cppConfig() {
      return this.c.applicationUserPersistentStorage.cppConfig
    }
    async $membershipType() {
      return this.c.applicationUserPersistentStorage.membershipType
    }
    async $preferredEmbeddingModel() {
      return (
        this.c.workspaceUserPersistentStorage.indexingData
          .preferredEmbeddingModel === x$.UNSPECIFIED &&
          this.c.applicationUserPersistentStorage.preferredEmbeddingModel !==
            x$.UNSPECIFIED &&
          (this.c.setWorkspaceUserPersistentStorage(
            "indexingData",
            "preferredEmbeddingModel",
            this.c.applicationUserPersistentStorage.preferredEmbeddingModel,
          ),
          this.c.setApplicationUserPersistentStorage(
            "preferredEmbeddingModel",
            x$.UNSPECIFIED,
          )),
        this.c.workspaceUserPersistentStorage.indexingData.preferredEmbeddingModel
      )
    }
    $publicLogCapture(e) {
      this.j.publicLogCapture(e)
    }
    async $shouldIgnoreUri(e) {
      return this.P.shouldIgnoreUri(e)
    }
    async $adminBlocklistPath() {
      return this.f.adminBlocklistPath()
    }
    async $sendEnvelope(e, t) {
      await this.L.sendEnvelope(e, t)
    }
    async $sendScopeUpdate(e, t) {
      await this.L.sendScopeUpdate(e, t)
    }
    async $getMachineId() {
      return this.M.getMachineId()
    }
    async $getMacMachineId() {
      return this.M.getMacMachineId()
    }
  }
  MainThreadCursor = __decorate(
    [
      Qr(MainContext.MainThreadCursor),
      __param(1, ei),
      __param(2, $h),
      __param(3, Md),
      __param(4, pt),
      __param(5, ft),
      __param(6, metricsService),
      __param(7, diffingService),
      __param(8, Pcs),
      __param(9, Lcs),
      __param(10, everythingProviderService),
      __param(11, xYe),
      __param(12, HFt),
      __param(13, hue),
      __param(14, yY),
      __param(15, Ncs),
      __param(16, sqe),
      __param(17, mI),
      __param(18, cppEventLoggerService),
      __param(19, I3t),
      __param(20, hTt),
      __param(21, Y$),
      __param(22, selectedContextService),
    ],
    MainThreadCursor,
  )
}
