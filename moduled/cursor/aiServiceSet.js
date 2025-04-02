// @ts-check

// 245900
export function createAIServiceSet(params) {
  const {Re, V, Ve, __decorate, CYe, __param, _, bt, mUe, ms, U, IMi, ue, it, Ls, fr, yo, Yt, va, rt, ys, J, Es, GJ, nm, Ze, Y1t, OP, Qc, Ri, gVe, _B, pVe, _n, Lg, Xt, everythingProviderService, st, Ci, hw, ei, aiFeatureStatusService, oy, ve, si, mo, nt, $h, x5, EKn, xFt, fz, G, yi, nl, Z, ize, wn, Va, N1, SN, am, Br, fn, v, Qm, Tgn, gt, fu, Me, ce, oi, Ti, cursorCredsService, T1, le, co, R, cF, vm, ns, V1t, y$i, M_, jB, fs, v$i, mVe, tK, Md, selectedContextService, Wr, Xn, Vu, ss, Ioe, UE, PSt, ls, jt, Mae, Ha, dC, $I, ev, _T, N$, s9e, bn, BMi, hk, iG, L1, Zc, FMi, HC, QWe, uNn, __addDisposableResource, gl, __disposeResources, JJ, lG, wVe, wJi, eoe, j9i, J9, Qb, At, Na, g2, Ll, lU, tqe, op, oTi, wf, et, DEt, $Bi, FBi, yNn, gNn, $ae, bNn, RBi, SNn, wNn, FT, un, Sg, Toe, WB, rc, ft, zi, Zi, mI, Cp, YC, Y$, cppEventLoggerService, a7, KNi, pt, bi, B_, eg, An, lb, fP, Pa, Ft, Hi, Sk, ZR, qi, Fo, R1, Pt, Ks, gze, ZUi, rU, Ag, uP, cv, Oc, uc, jM, UUi, HUi, Ht, cppService, es, ua, lv, u0, cl, Vo, wYe, bY, Ac, pKi, NI, p0, Gi, ko, Wi, SKi, uEt, Ce, Vr, H4i, pFt, qv, cursorPredictionService, nPt, importPredictionService, _c, g0, m2, c5, yYe, dEt, Qi, yc, DR, ZJ, fEt, Tk, Ck, _C, f5, vk, Pl, Xp, RHe, jIi, I, Ct } = params;

  var vY = Re("interpreterService"),
    metricsService = Re("metricsService"),
    QKn = class extends V {
      constructor() {
        super(),
          (this.a = void 0),
          (this.b = Array(1e3).fill(null)),
          (this.c = 0),
          bt.setInterval(() => {
            if (this.a) {
              let i = !1
              this.b.forEach((e) => {
                if (e != null && this.a !== void 0)
                  switch (((i = !0), e.method)) {
                    case "increment":
                      this.a.increment(e.stat)
                      break
                    case "decrement":
                      this.a.decrement(e.stat)
                      break
                    case "distribution":
                      this.a.distribution(e.stat)
                      break
                    case "gauge":
                      this.a.gauge(e.stat)
                      break
                  }
              }),
                i && ((this.b = Array(1e3).fill(null)), (this.c = 0))
            }
          }, 3e4)
      }
      increment(i) {
        this.a
          ? this.a.increment(i)
          : ((this.b[this.c % 1e3] = { stat: i, method: "increment" }), this.c++)
      }
      decrement(i) {
        this.a
          ? this.a.decrement(i)
          : ((this.b[this.c % 1e3] = { stat: i, method: "decrement" }), this.c++)
      }
      distribution(i) {
        this.a
          ? this.a.distribution(i)
          : ((this.b[this.c % 1e3] = { stat: i, method: "distribution" }),
            this.c++)
      }
      gauge(i) {
        this.a
          ? this.a.gauge(i)
          : ((this.b[this.c % 1e3] = { stat: i, method: "gauge" }), this.c++)
      }
      registerMetricsProvider(i) {
        this.a = i
      }
      unregisterMetricsProvider() {
        this.a = void 0
      }
    }
  Ve(metricsService, QKn, 1)
  var diffingService = Re("diffingService"),
    ZKn = class extends V {
      constructor() {
        super(), (this.a = void 0)
      }
      async wordDiff(i, e) {
        return this.a
          ? this.a.wordDiff(i, e)
          : (console.error("No diffing provider registered"),
            {
              changes: [
                { value: e, added: !0 },
                { value: i, removed: !0 },
              ],
            })
      }
      registerDiffingProvider(i) {
        this.a = i
      }
      unregisterDiffingProvider() {
        this.a = void 0
      }
    }
  Ve(diffingService, ZKn, 1)
  var hF = new Map()
  function RFt() {
    const i = document.createElement("div")
    return (
      (i.style.position = "absolute"),
      (i.style.top = "0"),
      (i.style.left = "0"),
      (i.style.zIndex = "2147483646"),
      i
    )
  }
  var yY = Re("IShadowWorkspaceService"),
    AFt = class extends V {
      constructor(e, t, s, n) {
        super(),
          (this.b = e),
          (this.c = t),
          (this.f = s),
          (this.g = n),
          (this.a = []),
          (this.h = !1),
          this.D(
            this.g.onWillShutdown((r) => {
              const o = (async () => {
                const a = new Promise((c) => setTimeout(c, 2e3)),
                  l = this.closeShadowWorkspace()
                await Promise.race([a, l])
              })()
              r.join(o, {
                id: "shadow-workspace-close",
                label: "Closing Shadow Workspace",
              })
            }),
          ),
          this.b.onDidChangeConfiguration((r) => {
            r.affectsConfiguration(mUe) &&
              (this.enabled() || this.closeShadowWorkspace())
          })
      }
      registerShadowWorkspaceManager(e) {
        this.a.push(e)
      }
      enabled() {
        return this.b.getValue(mUe) ?? !1
      }
      dispose() {
        this.closeShadowWorkspace(), super.dispose()
      }
      async openShadowWorkspace() {
        if (this.h)
          throw new Error(
            "Already opening a shadow workspace. Please wait a bit.",
          )
        try {
          this.h = !0
          for (const e of this.a)
            if (e.hasOpenShadowWorkspace()) return { didReuse: !0 }
          if ((await this.closeShadowWorkspace(), !this.enabled()))
            throw new Error("Shadow workspace is not enabled")
          for (const e of this.a)
            if (e.available())
              return await e.openShadowWorkspace(), { didReuse: !1 }
          throw new Error("No shadow workspace manager available")
        } finally {
          this.h = !1
        }
      }
      async closeShadowWorkspace() {
        this.q()
        for (const e of this.a)
          try {
            await e.closeShadowWorkspace()
          } catch (t) {
            console.error("Failed to close shadow workspace", t)
          }
      }
      j(e) {
        if (ms) return `\\\\.\\pipe\\ipc-cursor-sw-${e}-sock`
        let t = U.joinPath(this.f.cacheHome, `sw${e}.sock`)
        if (t.fsPath.length > 103) {
          const s = t.fsPath.length - 103
          if (e.length - s < 7)
            throw new Error(
              "Failed to create socket path! Cache home directory is too long.",
            )
          const n = e.substring(s)
          t = U.joinPath(this.f.cacheHome, `sw${n}.sock`)
        }
        return t.fsPath
      }
      getServerSocketPath() {
        if (this.f.shadowWindowForWorkspaceId)
          return this.j(this.f.shadowWindowForWorkspaceId)
      }
      getClientSocketPath() {
        return this.j(this.c.getWorkspace().id)
      }
      async getClient(e) {
        if (!this.enabled())
          throw (
            (this.closeShadowWorkspace(),
            new Error("Shadow workspace is not enabled"))
          )
        const { didReuse: t } = await this.openShadowWorkspace()
        if (this.n === void 0) {
          if (this.m === void 0) throw new Error("No client provider found.")
          this.n = this.m(this.getClientSocketPath())
        }
        try {
          const s = await this.n,
            n = t ? 2 : 4
          let r = 0
          for (; r < n; ) {
            r++
            try {
              const o = s.shadowHealthCheck(new IMi({})),
                a = new Promise((c) => setTimeout(() => c("timedout"), 2e3))
              if ((await Promise.race([o, a])) === "timedout")
                throw new Error("Timed out waiting for health check")
              return s
            } catch (o) {
              if (r > n) throw o
              await new Promise((a) => setTimeout(a, r * r * 1e3))
            }
          }
          throw new Error("Failed to get client")
        } catch (s) {
          if ((console.error("Failed to get client", s), (e ?? 0) > 1))
            throw new Error("Failed to get client after 2 attempts")
          return (
            await this.closeShadowWorkspace(),
            await new Promise((n) => setTimeout(n, 1e3)),
            await this.getClient((e ?? 0) + 1)
          )
        }
      }
      q() {
        this.n = void 0
      }
      provideClient(e) {
        return (
          (this.m = e),
          {
            dispose: () => {
              this.m === e && ((this.m = void 0), (this.n = void 0))
            },
          }
        )
      }
    }
  ;(AFt = __decorate(
    [__param(0, ue), __param(1, it), __param(2, Ls), __param(3, fr)],
    AFt,
  )),
    Ve(yY, AFt, 1)
  var MFt = 3e5,
    kYe = Re("aiApplyToFileActionsService"),
    BP = "Apply to entire file"
  async function xKi(i, e) {
    let t
    try {
      t = await i.createModelReference(e)
      const s = async () =>
        t.object.textEditorModel?.getLanguageId() ?? "plaintext"
      let n = await s()
      for (let r = 0; r < 5 && n === "plaintext"; r++)
        await new Promise((o) => setTimeout(o, 2e3)), (n = await s())
      return n
    } catch (s) {
      return (
        console.error(
          `[aiApplyToFileActions] Error getting language id for ${e.toString()}:`,
          s,
        ),
        "plaintext"
      )
    } finally {
      t && t.dispose()
    }
  }
  async function kKi(i, e, t) {
    for (let s = 0; s < e + 1; s++)
      try {
        return await i()
      } catch {
        await new Promise((r) => setTimeout(r, t))
      }
  }
  var $Ft = class extends V {
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y) {
      super(),
        (this.g = e),
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
        (this.z = d),
        (this.C = g),
        (this.F = p),
        (this.G = m),
        (this.H = b),
        (this.I = y),
        (this.N = new yo(20)),
        (this.O = new yo(5)),
        (this.isAlreadyCachingCode = 0),
        (this.S = []),
        (this.U = [])
      const w = (k) => {
          this.M(k.uri)
        },
        C = async (k) => {
          await this.L(k.uri)
        },
        S = (k, E) => {
          const { diffInfo: D, isDone: P } = k
          P && (E === "accepted" ? w(D) : C(D))
        },
        x = (k) => {
          k.accepted ? w(k.diffInfo) : C(k.diffInfo)
        }
      this.D(this.w.onDidRejectDiff((k) => C(k))),
        this.D(this.w.onDidRemoveDiffFromUndoRedo((k) => x(k))),
        this.D(this.w.onDidAcceptPartialDiff((k) => S(k, "accepted"))),
        this.D(this.w.onDidRejectPartialDiff((k) => S(k, "rejected")))
    }
    async J(e, t) {
      const s = await this.G.exists(e),
        n = []
      if (!s) {
        let r = e.fsPath
        for (; r.length > 0; ) {
          const c = r.split("/").slice(0, -1).join("/")
          if (await this.G.exists(U.file(c))) break
          n.push({ uri: U.file(c) }), (r = c)
        }
        await this.G.createFile(e, Yt.fromString(" "), { overwrite: t })
        const o = 10
        let a = 0
        for (; !(await this.G.exists(e)) && a < o; )
          await new Promise((c) => setTimeout(c, 500)), a++
        if (a === o)
          return (
            console.error(
              `[aiApplyToFileActions] Failed to create file ${e.toString()} after ${o} attempts`,
            ),
            []
          )
        this.S.push({ uri: e })
        const l = new Set(this.U.map((c) => c.uri.toString()))
        this.U.push(...n.filter((c) => !l.has(c.uri.toString())))
      }
      return n
    }
    async L(e) {
      if (!this.S.find((s) => s.uri.toString() === e.toString())) return !1
      try {
        const s = this.y.findEditors(e)
        for (const r of s)
          await this.y.revert(r, { force: !0 }), await this.y.closeEditor(r)
        await this.G.del(e, { recursive: !0, useTrash: !0 }),
          (this.S = this.S.filter((r) => r.uri.toString() !== e.toString()))
        const n = this.U.filter((r) => e.toString().startsWith(r.uri.toString()))
        for (const r of n)
          (
            (await this.G.resolve(r.uri, { resolveMetadata: !0 })).children ?? []
          ).filter((l) => !l.isDirectory).length === 0 &&
            (await this.G.del(r.uri, { recursive: !0, useTrash: !0 }),
            (this.U = this.U.filter(
              (l) => l.uri.toString() !== r.uri.toString(),
            )))
        return !0
      } catch (s) {
        return (
          console.error(`[aichat] Error deleting file ${e.toString()}:`, s), !1
        )
      }
    }
    M(e) {
      ;(this.S = this.S.filter((t) => t.uri.toString() !== e.toString())),
        (this.U = this.U.filter(
          (t) => !e.toString().startsWith(t.uri.toString()),
        ))
    }
    getCacheKey(e, t, s) {
      if (s.getValueLength() > MFt)
        return va(e + "||||||" + t + "||||||" + rt()).toString()
      const n = s.getValue()
      return va(e + "||||||" + t + "||||||" + n).toString()
    }
    async cacheCodeBlockApplyButton(e, t, s) {
      const n = this.s.nonPersistentStorage.inlineDiffs.filter((o) =>
        ys.isEqual(o.uri, e),
      )
      if (this.isAlreadyCachingCode >= 4 || n.length > 0) return
      this.isAlreadyCachingCode++
      const r = new J()
      try {
        const o = t.getValue(),
          a = await xKi(this.h, e)
        if (
          (await this.getApplyToFileMenuItems_MAY_RUN_LONG(e, o, a, s)).length ===
          0
        )
          return
        const c = await this.h.createModelReference(e)
        if (
          (r.add(c),
          c.object.textEditorModel.getValueLength() > MFt ||
            c.object.textEditorModel.getLineCount() > 1e4)
        )
          return
        const h = {
            startLine: 1,
            endLineExclusive: c.object.textEditorModel.getLineCount() + 1,
          },
          u = c.object.textEditorModel.getAlternativeVersionId(),
          d = this.getCacheKey(o, BP, c.object.textEditorModel),
          g = this.N.get(d)
        if (g !== void 0) {
          g.succeeded &&
            this.Q(s) &&
            this.R(e) === void 0 &&
            this.W({
              uri: e,
              chatCodeblockModel: t,
              tabId: s.tabId,
              bubbleId: s.bubbleId,
              useLintsFromShadowWorkspace: !0,
            })
          return
        }
        const p = rt()
        this.N.set(d, {
          diff: [],
          succeeded: !1,
          originalRange: new Es(h.startLine, h.endLineExclusive),
          originalResource: e,
          generationUUID: p,
        })
        const y = {
          ...s,
          generationUUID: p,
          inlineDiffServiceLookalike: {
            usedCurrentFileInfo: (w) => {
              const C = this.N.get(d)
              C !== void 0 &&
                w.alternativeVersionId !== u &&
                (console.log(
                  "Cancelled cache apply because the cache key model version is not the same as the alternative version id.",
                ),
                (C.succeeded = !1),
                this.N.delete(d))
            },
            cancel: () => {
              const w = this.N.get(d)
              w !== void 0 &&
                ((w.succeeded = !1), this.N.delete(d), this.O.delete(d))
            },
            finish: async (w) => {
              const C = this.N.get(d)
              C !== void 0 &&
                (w.length > 0 &&
                  ((C.diff = w),
                  (C.succeeded = !0),
                  this.Q(s) &&
                    this.R(e) === void 0 &&
                    (await this.W({
                      uri: e,
                      chatCodeblockModel: t,
                      tabId: s.tabId,
                      bubbleId: s.bubbleId,
                      useLintsFromShadowWorkspace: !0,
                    }))),
                this.O.delete(d))
            },
          },
          isBackgroundApply: !0,
          onStreamerCreated: (w) => {
            this.O.set(d, {
              streamer: w,
              originalRange: new Es(h.startLine, h.endLineExclusive),
              originalResource: e,
            })
          },
          clickedCodeBlockContents: t.getValue(),
          rejectChangesInURI: !1,
        }
        await this.m.executeCommand(GJ, e, void 0, y)
      } finally {
        r.dispose(), this.isAlreadyCachingCode--
      }
    }
    async cacheCodeBlockApplyComposer(e) {
      const {
          uri: t,
          codeblock: s,
          source: n,
          parentRequestId: r,
          conversationHistory: o,
          onPreviousDiffReject: a,
          onApplyDone: l,
          onApplyFailed: c,
        } = e,
        h = this.s.nonPersistentStorage.inlineDiffs.filter((d) =>
          ys.isEqual(d.uri, t),
        )
      if (this.isAlreadyCachingCode >= 4 || h.length > 0) return
      this.isAlreadyCachingCode++
      const u = new J()
      try {
        const d = await this.h.createModelReference(t)
        if (
          (u.add(d),
          d.object.textEditorModel.getValueLength() > MFt ||
            d.object.textEditorModel.getLineCount() > 1e4)
        )
          return
        const g = {
            startLine: 1,
            endLineExclusive: d.object.textEditorModel.getLineCount() + 1,
          },
          p = d.object.textEditorModel.getAlternativeVersionId(),
          m = this.getCacheKey(s, BP, d.object.textEditorModel)
        if (this.N.get(m) !== void 0) return
        const y = rt()
        this.N.set(m, {
          diff: [],
          succeeded: !1,
          originalRange: new Es(g.startLine, g.endLineExclusive),
          originalResource: t,
          generationUUID: y,
        })
        const w = (S) => {
            this.O.set(m, {
              streamer: S,
              originalRange: new Es(g.startLine, g.endLineExclusive),
              originalResource: t,
            })
          },
          C = {
            usedCurrentFileInfo: (S) => {
              const x = this.N.get(m)
              x !== void 0 &&
                S.alternativeVersionId !== p &&
                (console.log(
                  "Cancelled cache apply because the cache key model version is not the same as the alternative version id.",
                ),
                (x.succeeded = !1),
                this.N.delete(m))
            },
            cancel: () => {
              const S = this.N.get(m)
              S !== void 0 &&
                ((S.succeeded = !1), this.N.delete(m), this.O.delete(m))
            },
            finish: async (S) => {
              const x = this.N.get(m)
              x !== void 0 &&
                (S.length > 0 && ((x.diff = S), (x.succeeded = !0)),
                this.O.delete(m))
            },
          }
        await this.I.performChatEdit({
          source: n,
          options: {
            overrideCurrentFileURI: t,
            failSilently: n === nm.CACHED_APPLY,
          },
          generationMetadata: void 0,
          clickedCodeBlockContents: s,
          inlineDiffServiceLookalike: C,
          isBackgroundApply: n === nm.CACHED_APPLY,
          onStreamerCreated: w,
          existingStreamer: void 0,
          isReapply: !1,
          generationUUID: rt(),
          parentRequestId: r,
          conversationHistory: o,
          onPreviousDiffReject: a,
          onApplyDone: l,
          onApplyFailed: c,
        })
      } finally {
        u.dispose(), this.isAlreadyCachingCode--
      }
    }
    async applyComposerMaybeWithExistingStreamer(e) {
      const {
        uri: t,
        codeblock: s,
        source: n,
        parentRequestId: r,
        conversationHistory: o,
        isReapply: a,
        range: l,
        onPreviousDiffReject: c,
        onApplyDone: h,
        onApplyFailed: u,
        composerMetadata: d,
      } = e
      let g
      l === void 0 && (g = await this.getPendingStreamer(t, s, BP, "fullfile")),
        await this.I.performChatEdit({
          source: n,
          options: {
            overrideCurrentFileURI: t,
            overrideLineRange: l,
            failSilently: n === nm.CACHED_APPLY,
          },
          generationMetadata: void 0,
          clickedCodeBlockContents: s,
          isBackgroundApply: n === nm.CACHED_APPLY,
          existingStreamer: g,
          isReapply: a,
          generationUUID: rt(),
          parentRequestId: r,
          conversationHistory: o,
          onPreviousDiffReject: c,
          onApplyDone: h,
          onApplyFailed: u,
          composerMetadata: d,
          cleanUpOnFail: !0,
        })
    }
    async _getTieredSymbols(e) {
      const t = await this.h.createModelReference(e)
      try {
        const s = await this.g.getOrCreate(t.object.textEditorModel, Ze.None),
          n = s.getAllSymbols(),
          r = s.getTopLevelSymbols()
        return [
          n.filter((l) => l.kind === 5),
          r.filter((l) => l.kind === 11),
          r.filter((l) => l.kind === 13),
          r.filter((l) => l.kind === 12),
          n.filter(
            (l) =>
              l.kind === 11 &&
              l.range.endLineNumber - l.range.startLineNumber > 3,
          ),
          n.filter(
            (l) =>
              l.kind === 4 && l.range.endLineNumber - l.range.startLineNumber > 3,
          ),
          n.filter(
            (l) =>
              l.kind === 13 &&
              l.range.endLineNumber - l.range.startLineNumber > 3,
          ),
        ].map((l) =>
          l.map((c) => ({
            ...c,
            text: t.object.textEditorModel.getValueInRange(c.range),
          })),
        )
      } finally {
        t.dispose()
      }
    }
    async getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
      e,
      t,
    ) {
      if (!(await this.G.exists(e))) return []
      const s = await xKi(this.h, e),
        n = [],
        r = await this.j.provider?.runCommand(Y1t.GetImportantDefinitionNames, {
          fileContent: t,
          languageId: s,
        })
      n.push(...(r?.items?.map((l) => l.symbolName) ?? []))
      const o = (await this._getTieredSymbols(e)).flat(),
        a = []
      for (const l of o) {
        const c = n.find((h) => h === l.name)
        c !== void 0 && (n.splice(n.indexOf(c), 1), a.push(l))
      }
      return a
    }
    async getLineNumberOfTopLevelScope_MAY_RUN_LONG(e, t) {
      if (!(await this.G.exists(e))) return
      const s = await kKi(
        () =>
          this.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
            e,
            t,
          ),
        1,
        5e3,
      )
      if (s === void 0) return
      const n = s
      return n.length === 0
        ? void 0
        : n.reduce((o, a) =>
            o.range.endLineNumber > a.range.endLineNumber ? o : a,
          ).range.startLineNumber
    }
    async applyCachedEntry(e, t, s, n) {
      const r = this.N.get(t)
      if (r === void 0) return
      const o = s,
        a = e
          .getLinesContent()
          .slice(o.startLineNumber - 1, o.endLineNumberExclusive - 1),
        l = {
          uri: e.uri,
          generationUUID: r.generationUUID,
          currentRange: o,
          originalTextLines: a,
          prompt: "hi",
          isHidden: !1,
          attachedToPromptBar: !1,
          source: OP,
          createdAt: Date.now(),
          composerMetadata: n,
        },
        c = this.P(a, r.diff),
        h = (await this.w.addActiveDiff(l)).id
      this.w.addLinesToDiff(h, c), this.w.finishDiffSuccess(h)
    }
    P(e, t) {
      const s = []
      let n = 0
      for (let r = 0; r < e.length; r++) {
        const o = e[r]
        if (n < t.length) {
          const { original: a, modified: l } = t[n]
          if (
            r === a.startLineNumber - 1 &&
            (s.push(...l), n++, a.endLineNumberExclusive !== a.startLineNumber)
          ) {
            r += a.endLineNumberExclusive - a.startLineNumber - 1
            continue
          }
        }
        s.push(o)
      }
      for (; n < t.length; ) {
        const { original: r, modified: o } = t[n]
        s.push(...o), n++
      }
      return s
    }
    Q(e) {
      return (
        (this.s.nonPersistentStorage.nonPersistentChatMetadata.find(
          (t) => t.bubbleId === e.bubbleId && t.tabId === e.tabId,
        )?.lints?.length ?? 0) === 0
      )
    }
    R(e) {
      return this.s.nonPersistentStorage.inlineDiffs.find(
        (t) => ys.isEqual(t.uri, e) && t.source === OP,
      )
    }
    async getApplyToFileMenuItems_MAY_RUN_LONG(e, t, s, n) {
      const r = this.getApplyToFileMenuItemsAlwaysAvailable(e, n)
      if (!(await this.G.exists(e)))
        return this.getApplyToFileMenuItemsNewFile(r, n)
      try {
        let o = await kKi(
          () =>
            this.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
              e,
              t,
            ),
          1,
          5e3,
        )
        o === void 0 && (o = [])
        for (const a of o) {
          const l = `Apply to ${a.name}`,
            c = new Es(a.range.startLineNumber, a.range.endLineNumber + 1)
          r.push({
            menuString: l,
            lineLength: a.range.endLineNumber - a.range.startLineNumber,
            selection: {
              startLine: a.range.startLineNumber,
              endLineExclusive: a.range.endLineNumber + 1,
            },
            callback: async (h, u) => {
              const d = Qc(e, {
                startLineNumber: a.range.startLineNumber || 1,
                startColumn: a.range.startColumn || 1,
                endLineNumber: a.range.startLineNumber || 1,
                endColumn: a.range.startColumn || 1,
              })
              if (
                (this.q.open(d),
                h !== void 0 &&
                  u !== !0 &&
                  (await this.maybeApplyCachedEntry({
                    uri: e,
                    codeblockContent: h.getValue(),
                    menuString: l,
                    range: c,
                  })) === "didApply")
              )
                return
              const g = {
                ...n,
                isReapply: u,
                existingStreamer:
                  h === void 0
                    ? void 0
                    : await this.getPendingStreamer(e, h.getValue(), l, c),
              }
              await this.m.executeCommand(GJ, e, c, g),
                h !== void 0 &&
                  this.R(e) !== void 0 &&
                  this.Q(n) &&
                  this.W({
                    uri: e,
                    chatCodeblockModel: h,
                    tabId: n.tabId,
                    bubbleId: n.bubbleId,
                    useLintsFromShadowWorkspace: !1,
                  })
            },
            isCached: async (h) =>
              h === void 0 ? !1 : this.isEntryCached(e, h, l, c),
            uri: e,
          })
        }
      } catch (o) {
        console.error(o)
      }
      return r
    }
    async getApplyToFileMenuItemsNewFile(e, t) {
      const s = this.y.activeEditor?.resource
      if (s === void 0 || e.length === 0) return e
      const n = "Apply to current file"
      return [
        {
          menuString: n,
          wholeFile: !1,
          callback: async (o, a) => {
            const l = {
              ...t,
              isReapply: a,
              existingStreamer:
                o === void 0
                  ? void 0
                  : await this.getPendingStreamer(s, o.getValue(), n, "fullfile"),
            }
            await this.m.executeCommand(GJ, s, void 0, l)
          },
          isCached: async (o) => !1,
          uri: s,
        },
        { ...e[0], menuString: "Create new file" },
      ]
    }
    async getPendingStreamer(e, t, s, n) {
      const r = new J()
      try {
        const o = await this.h.createModelReference(e)
        r.add(o)
        const a = this.getCacheKey(t, s, o.object.textEditorModel),
          l = this.O.get(a)?.streamer
        return this.O.delete(a), l
      } finally {
        r.dispose()
      }
    }
    async isEntryCached(e, t, s, n) {
      if (!(await this.G.exists(e))) return !1
      const r = new J()
      try {
        const o = await this.h.createModelReference(e)
        r.add(o)
        const a = this.getCacheKey(t, s, o.object.textEditorModel),
          l = this.N.get(a)
        return l !== void 0 && l.succeeded
      } finally {
        r.dispose()
      }
    }
    async maybeApplyCachedEntry(e) {
      const {
          uri: t,
          codeblockContent: s,
          menuString: n,
          range: r,
          composerMetadata: o,
        } = e,
        a = new J()
      try {
        const l = await this.h.createModelReference(t)
        a.add(l)
        const c = this.getCacheKey(s, n, l.object.textEditorModel),
          h = this.N.get(c)
        if (h && h.succeeded) {
          await this.applyCachedEntry(
            l.object.textEditorModel,
            c,
            r === "fullfile"
              ? new Es(1, l.object.textEditorModel.getLineCount() + 1)
              : r,
            o,
          )
          const u = this.R(t),
            d = u?.changes.sort(
              (g, p) =>
                g.addedRange.startLineNumber - p.addedRange.startLineNumber,
            )
          return (
            u &&
              d &&
              d.length > 0 &&
              this.y.activeTextEditorControl?.revealLineInCenter(
                u.currentRange.startLineNumber + d[0].addedRange.startLineNumber,
              ),
            "didApply"
          )
        }
        return
      } finally {
        a.dispose()
      }
    }
    getApplyToFileMenuItemsAlwaysAvailable(e, t) {
      return [
        {
          menuString: BP,
          wholeFile: !0,
          callback: async (s, n) => {
            await this.J(e)
            const r = this.y.findEditors(e)
            if (r.length > 0) {
              const a = this.z.getGroup(r[0].groupId)
              this.y.openEditor(r[0].editor, a)
            } else await this.q.open(e)
            if (
              s &&
              n !== !0 &&
              (await this.maybeApplyCachedEntry({
                uri: e,
                codeblockContent: s.getValue(),
                menuString: BP,
                range: "fullfile",
              })) === "didApply"
            )
              return
            const o = {
              ...t,
              isReapply: n,
              existingStreamer:
                s === void 0
                  ? void 0
                  : await this.getPendingStreamer(
                      e,
                      s.getValue(),
                      BP,
                      "fullfile",
                    ),
            }
            await this.m.executeCommand(GJ, e, void 0, o),
              s !== void 0 &&
                this.R(e) !== void 0 &&
                this.Q(t) &&
                this.W({
                  uri: e,
                  chatCodeblockModel: s,
                  tabId: t.tabId,
                  bubbleId: t.bubbleId,
                  useLintsFromShadowWorkspace: !1,
                })
          },
          isCached: async (s) =>
            s === void 0 ? !1 : this.isEntryCached(e, s, BP, "fullfile"),
          uri: e,
        },
      ]
    }
    async W({
      uri: e,
      chatCodeblockModel: t,
      tabId: s,
      bubbleId: n,
      useLintsFromShadowWorkspace: r,
    }) {
      if (
        (await this.u.maybeRefreshFeatureStatus("lintsInChat"),
        !this.u.getCachedFeatureStatus("lintsInChat"))
      )
        return
      let o
      try {
        o = await this.h.createModelReference(e)
        let a, l
        const c = o.object.textEditorModel.getOptions().tabSize
        let h
        if (r) {
          const b = this.getCacheKey(t.getValue(), BP, o.object.textEditorModel),
            y = this.N.get(b)
          if (y === void 0) return
          const w = o.object.textEditorModel
            .getLinesContent()
            .slice(
              y.originalRange.startLineNumber - 1,
              y.originalRange.endLineNumberExclusive - 1,
            )
          ;(a = this.P(w, y.diff).join(`
  `)),
            (l = o.object.textEditorModel.getValue()),
            (h = await this.X(e, l, a))
        } else {
          if (((a = o.object.textEditorModel.getValue()), this.R(e) === void 0))
            return
          h = await this.getLinterErrorsInModifiedRanges(e)
        }
        if (
          h === void 0 ||
          h.lints.length === 0 ||
          !this.Q({ tabId: s, bubbleId: n })
        )
          return
        const u = this.Y({
          modifedFileValue: a,
          chatCodeblockModel: t,
          lintsInFile: h,
          indentSize: c,
        })
        this.F.remove(t.uri + "-cachedApplyLints", [t.uri])
        const g = u.lints
          .filter(
            (b, y, w) =>
              y ===
              w.findIndex(
                (C) =>
                  C.startLineNumberOneIndexed === b.startLineNumberOneIndexed &&
                  C.startColumnOneIndexed === b.startColumnOneIndexed &&
                  C.endLineNumberInclusiveOneIndexed ===
                    b.endLineNumberInclusiveOneIndexed &&
                  C.endColumnOneIndexed === b.endColumnOneIndexed &&
                  C.message === b.message,
              ),
          )
          .map((b) => ({
            severity: b.severity === "Error" ? Ri.Error : Ri.Warning,
            message: b.message,
            startLineNumber: b.startLineNumberOneIndexed,
            startColumn: b.startColumnOneIndexed,
            endLineNumber: b.endLineNumberInclusiveOneIndexed,
            endColumn: b.endColumnOneIndexed,
            resource: t.uri,
          }))
        this.F.changeOne(t.uri + "-cachedApplyLints", t.uri, g)
        const p = n,
          m = s
        this.s.setNonPersistentStorage("nonPersistentChatMetadata", (b) => {
          const y = b.find(({ bubbleId: w, tabId: C }) => w === p && C === m)
          return [
            ...b.filter(({ bubbleId: w, tabId: C }) => w !== p || C !== m),
            {
              bubbleId: p,
              tabId: m,
              intermediateChunks: [],
              intermediateSectionType: void 0,
              steps: [],
              ...y,
              lints: [...(y?.lints ?? []), { lints: u, codeBlockUri: t.uri }],
            },
          ]
        })
      } catch (a) {
        console.warn("Error getting lints for chat", a)
      } finally {
        o?.dispose()
      }
    }
    async X(e, t, s) {
      try {
        const n = await this.C.getClient(),
          r = new gVe({
            files: [
              {
                relativeWorkspacePath: this.n.asRelativePath(e),
                initialContent: t,
                finalContent: s,
              },
            ],
          })
        return await n.getLintsForChange(r)
      } catch (n) {
        return (
          console.error("Failed to get lints from shadow workspace:", n),
          new _B({ lints: [] })
        )
      }
    }
    Y({
      modifedFileValue: e,
      chatCodeblockModel: t,
      lintsInFile: s,
      indentSize: n,
    }) {
      const r = (u, d, g) => {
          const p = u.match(/^\t*/)?.[0]?.length || 0,
            m = Math.min(p, d - 1)
          return m * g + Math.max(0, d - m)
        },
        o = (u) => {
          switch (u.split(".").pop()?.toLowerCase()) {
            case "py":
            case "r":
            case "rb":
              return "#"
            case "js":
            case "ts":
            case "jsx":
            case "tsx":
            case "java":
            case "c":
            case "cpp":
            case "cs":
            case "go":
            case "swift":
            case "kt":
            case "scala":
            case "php":
              return "//"
            default:
              return
          }
        },
        a = (u, d) => u.trim().startsWith(d),
        l = e.split(`
  `),
        c = t.getValue().split(`
  `),
        h = s.lints
          .map((u) => {
            const d = l[u.startLineNumberOneIndexed - 1]
            let g = c.findIndex((p) => p === d)
            if (g === -1) {
              g = c.findIndex((m) => m.trim() === d.trim())
              const p = o(u.relativeWorkspacePath)
              if (
                (g === -1 &&
                  p !== void 0 &&
                  (g = c.findIndex((m) => {
                    if (a(m, p)) return !1
                    const b = m.indexOf(p)
                    return (b === -1 ? m : m.slice(0, b)).trim() === d.trim()
                  })),
                g !== -1)
              ) {
                const m = c[g],
                  b = m.replace(/^(\t+)/, (E) => " ".repeat(E.length * n)),
                  y = d.replace(/^(\t+)/, (E) => " ".repeat(E.length * n)),
                  w = r(d, u.startColumnOneIndexed, n),
                  C = r(d, u.endColumnOneIndexed, n),
                  S = y.length - y.trimStart().length
                let x = b.length - b.trimStart().length
                m.startsWith("	") && (x = x / n)
                const k = x - S
                ;(u.startColumnOneIndexed = Math.min(
                  Math.max(1, w + k),
                  b.length + 1,
                )),
                  (u.endColumnOneIndexed = Math.min(
                    Math.max(1, C + k),
                    b.length + 1,
                  ))
              }
            }
            if (g !== -1) {
              const p = c[g],
                m = u.startColumnOneIndexed - 1,
                b = u.endColumnOneIndexed - 1,
                y = p.slice(m, b)
              return /\s/.test(y)
                ? void 0
                : new pVe({
                    severity: u.severity,
                    relativeWorkspacePath: u.relativeWorkspacePath,
                    message: u.message,
                    startLineNumberOneIndexed: g + 1,
                    endLineNumberInclusiveOneIndexed: g + 1,
                    startColumnOneIndexed: u.startColumnOneIndexed,
                    endColumnOneIndexed: u.endColumnOneIndexed,
                  })
            }
          })
          .filter((u) => u !== void 0)
      return new _B({ lints: h })
    }
    async getLinterErrorsInModifiedRanges(e) {
      const t = this.R(e)
      if (t === void 0) return
      const s = this.F.read({ resource: e }),
        n = this.Z(s).map((r) => ({
          message: r.message,
          relatedInformation: r.relatedInformation ?? [],
          source: r.source ?? "",
          severity: this.$(r.severity),
          range: {
            startPosition: { line: r.startLineNumber, column: r.startColumn },
            endPosition: { line: r.endLineNumber, column: r.endColumn },
          },
          uri: e.toString(),
        }))
      if (n.length > 0) {
        const r = n.filter((o) =>
          t.changes.some((a) => {
            const l =
                t.currentRange.startLineNumber + a.addedRange.startLineNumber - 1,
              c =
                t.currentRange.startLineNumber +
                a.addedRange.endLineNumberExclusive -
                1
            return (
              l <= o.range.startPosition.line && c >= o.range.endPosition.line
            )
          }),
        )
        return new _B({
          lints: r.map(
            (o) =>
              new pVe({
                message: o.message,
                severity: o.severity,
                startLineNumberOneIndexed: o.range.startPosition.line,
                startColumnOneIndexed: o.range.startPosition.column,
                endLineNumberInclusiveOneIndexed: o.range.endPosition.line,
                endColumnOneIndexed: o.range.endPosition.column,
                relativeWorkspacePath: this.n.asRelativePath(e),
              }),
          ),
        })
      }
    }
    Z(e) {
      return e.filter((t) => t.severity === Ri.Error)
    }
    $(e) {
      switch (e) {
        case Ri.Error:
          return "Error"
        case Ri.Warning:
          return "Warning"
        case Ri.Info:
          return "Info"
        case Ri.Hint:
          return "Hint"
        default:
          return "Info"
      }
    }
    async canApplyToFile(e) {
      const t = await this.isFileTooBigToApply(e),
        s = this.isUsingAPIKeyAndNotPro()
      return !(t || s)
    }
    async ab() {
      return (
        await this.u.maybeRefreshConfig("applyButtonLineLimit"),
        this.u.getCachedConfig("applyButtonLineLimit") ?? 1e5
      )
    }
    async bb(e) {
      const t = this.n.resolveRelativePath(e)
      if (!(await this.G.exists(t))) return
      const n = await this.h.createModelReference(t)
      try {
        return n.object.textEditorModel.getLineCount()
      } catch (r) {
        console.error("Error getting line count for file", r)
        return
      } finally {
        n.dispose()
      }
    }
    async isFileTooBigToApply(e) {
      const t = await this.ab(),
        s = await this.bb(e)
      return s !== void 0 && s > t
    }
    isUsingAPIKeyAndNotPro() {
      return (
        ((this.s.applicationUserPersistentStorage.useOpenAIKey ||
          this.s.applicationUserPersistentStorage.useClaudeKey ||
          this.s.applicationUserPersistentStorage.useGoogleKey) ??
          !1) &&
        this.H.membershipType() === _n.FREE
      )
    }
  }
  ;($Ft = __decorate(
    [
      __param(0, Lg),
      __param(1, Xt),
      __param(2, everythingProviderService),
      __param(3, st),
      __param(4, it),
      __param(5, Ci),
      __param(6, hw),
      __param(7, ei),
      __param(8, aiFeatureStatusService),
      __param(9, oy),
      __param(10, ve),
      __param(11, si),
      __param(12, yY),
      __param(13, mo),
      __param(14, nt),
      __param(15, $h),
      __param(16, x5),
    ],
    $Ft,
  )),
    Ve(kYe, $Ft, 1)
  var EKi =
      /^[a-zA-Z\u{C0}-\u{FF}\u{D8}-\u{F6}\u{F8}-\u{2C6}\u{2C8}-\u{2D7}\u{2DE}-\u{2FF}\u{1E00}-\u{1EFF}]+$/u,
    IKi = /\S/,
    cue = new CYe()
  ;(cue.equals = function (i, e) {
    return (
      this.options.ignoreCase && ((i = i.toLowerCase()), (e = e.toLowerCase())),
      i === e || (this.options.ignoreWhitespace && !IKi.test(i) && !IKi.test(e))
    )
  }),
    (cue.tokenize = function (i) {
      let e = i.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/)
      for (let t = 0; t < e.length - 1; t++)
        !e[t + 1] &&
          e[t + 2] &&
          EKi.test(e[t]) &&
          EKi.test(e[t + 2]) &&
          ((e[t] += e[t + 2]), e.splice(t + 1, 2), t--)
      return e
    })
  function FFt(i, e, t = {}, s = !0) {
    return i.length > 2e4 ||
      e.length > 2e4 ||
      cue.tokenize(i).length > 2e3 ||
      cue.tokenize(e).length > 2e3
      ? (console.error(
          "BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffWords received strings that were too long. Returning the trivial diff.",
          i.length,
          e.length,
        ),
        [
          { value: i, removed: !0 },
          { value: e, added: !0 },
        ])
      : ((t = EKn(t, { ignoreWhitespace: s })), cue.diff(i, e, t))
  }
  var eYn = class {
    async diffLines(i, e, t, s) {
      const n = { ...s }
      delete n.singleLineChanges
      const r = xFt(e, i, n)
      return s?.singleLineChanges
        ? r
            .map((a) => {
              const l = a.value.split(`
  `)
              return l
                .map((h, u) =>
                  u < l.length - 1
                    ? [
                        { value: h, added: a.added, removed: a.removed },
                        {
                          value: `
  `,
                          added: a.added,
                          removed: a.removed,
                        },
                      ]
                    : { value: h, added: a.added, removed: a.removed },
                )
                .flat()
            })
            .flat()
            .filter((a) => a.value !== "")
        : r
    }
    async diffWords(i, e, t) {
      const s = { ...t }
      delete s.singleLineChanges
      const n = FFt(e, i, s)
      return t?.singleLineChanges
        ? n
            .map((o) => {
              const a = o.value.split(" ")
              return a
                .map((c, h) =>
                  h < a.length - 1
                    ? [
                        { value: c, added: o.added, removed: o.removed },
                        { value: " ", added: o.added, removed: o.removed },
                      ]
                    : { value: c, added: o.added, removed: o.removed },
                )
                .flat()
            })
            .flat()
            .filter((o) => o.value !== "")
        : n
    }
  }
  function tYn(i, e, t) {
    try {
      const { range: s, text: n } = e
      if (
        s.startLineNumber > i.length + 1 ||
        (s.startLineNumber === i.length + 1 && s.startColumn !== 1)
      )
        throw new Error("Start of the range is outside the file.")
      const {
          startLineNumber: r,
          startColumn: o,
          endLineNumber: a,
          endColumn: l,
        } = s,
        h = (i[r - 1] ?? "").substring(0, o - 1),
        u = i[a - 1] ?? "",
        d = l === 1 ? u : u.substring(l - 1)
      t?.noNeedToMakeSureLinesAreLines === !0
        ? i.splice(r - 1, a - r + 1, h + n + d)
        : i.splice(
            r - 1,
            a - r + 1,
            ...(h + n + d).split(`
  `),
          )
    } catch (s) {
      throw s
    }
  }
  function DKi(i, e) {
    const t = i.split(`
  `)
    return (
      tYn(t, e, { noNeedToMakeSureLinesAreLines: !0 }),
      t.join(`
  `)
    )
  }
  var iYn = "cursorhashversionC7wtBsDmlFaPg4ToTvIlm"
  function TKi(i, e) {
    if (e === void 0 || e === 0) return `${PKi(i, 0)}`
    if (e === 1) {
      const t = `${iYn}:1:`
      return i.length > 1e4 ? `${t}${PKi(i, 0)}` : `${t}${i}`
    } else throw new Error("Unsupported hash version")
  }
  function PKi(i, e) {
    e = LKi(149417, e)
    for (let t = 0, s = i.length; t < s; t++) e = LKi(i.charCodeAt(t), e)
    return e
  }
  function LKi(i, e) {
    return ((e << 5) - e + i) | 0
  }
  function OFt(i, e, t) {
    const s = []
    let n = "",
      r = !1
    for (const c of i)
      if (c.added) (r = !0), (n += c.value)
      else if (!c.removed) break
    const o = r
      ? n.split(`
  `).length
      : 0
    let a = 1,
      l = 1
    for (const c of i) {
      const h = c.value.split(`
  `),
        u = a + h.length - 1,
        d = h.length > 1 ? h[h.length - 1].length + 1 : l + c.value.length
      if (c.added === !0) {
        const g = {
          startLineNumber: a,
          startColumn: l,
          endLineNumber: u,
          endColumn: d,
        }
        s.push({
          startLineNumber:
            g.startLineNumber +
            e.startLineNumber -
            1 -
            (t === "pre-change" ? o : 0),
          startColumn: g.startColumn,
          endLineNumber:
            g.endLineNumber +
            e.startLineNumber -
            1 -
            (t === "pre-change" ? o : 0),
          endColumn: g.endColumn,
        }),
          (l = d),
          (a = u)
      }
      c.removed !== !0 && ((l = d), (a = u))
    }
    return { greenRanges: s, redRanges: [] }
  }
  var NKi = class {
      constructor() {
        this.ok_ = !1
      }
      ok() {
        return this.ok_
      }
      context(i) {
        return this.ok_ ? this : lh(`${i}: ${this.err}`)
      }
    },
    sYn = class extends NKi {
      constructor(i) {
        super(), (this.ok_ = !0), (this.v = i), (this.err = void 0)
      }
    },
    nYn = class extends NKi {
      constructor(i) {
        super(), (this.ok_ = !1), (this.err = i), (this.v = void 0)
      }
    }
  function og(i) {
    return new sYn(i)
  }
  function lh(i) {
    return new nYn(i)
  }
  var EYe = { current: !1 },
    RKi = "cpp-suggestion-green-background",
    rYn = class {
      constructor(i, e, t, s) {
        ;(this.c = s),
          (this.b = new Map()),
          (this.d = 0),
          (this.a = new IYe(
            i,
            e,
            (n, r) => n < r,
            t,
            s,
            (n) => this.f(n),
          ))
      }
      f(i) {
        this.b.forEach((e, t) => {
          t <= i && (e.resolve(), this.b.delete(t))
        })
      }
      async process(i) {
        const e = this.d++,
          t = this.a.process({
            state: e,
            runEvenIfAlreadyProcessing: i.runEvenIfAlreadyProcessing,
            tryAgainCount: i.tryAgainCount,
          })
        i.waitUntilProcessed
          ? await new Promise((s, n) => {
              this.b.set(e, { resolve: s, reject: n })
            })
          : await t
      }
    },
    IYe = class {
      constructor(i, e, t, s, n, r) {
        ;(this.a = i),
          (this.b = e),
          (this.c = t),
          (this.d = s),
          (this.f = n),
          (this.g = r),
          (this.h = void 0),
          (this.i = void 0),
          (this.j = void 0)
      }
      async process(i) {
        if (((this.h = i.state), this.b.aborted)) return
        if (i.tryAgainCount !== void 0 && i.tryAgainCount > 5) {
          this.d(
            new Error(
              "SimpleSerialProcessor: tried 5 times and failed, giving up",
            ),
          )
          return
        }
        if (
          (this.i !== void 0 && !this.c(this.i, this.h)) ||
          (!i.runEvenIfAlreadyProcessing && this.j !== void 0)
        )
          return
        this.j?.abort(), (this.j = new AbortController())
        const e = () => {
          this.j?.abort()
        }
        this.b.addEventListener("abort", e)
        let t = !0
        try {
          ;(await this.a(this.j.signal)).ok() &&
            ((this.i = i.state), this.g?.(this.i))
        } catch (s) {
          this.d(s), (t = !1)
        } finally {
          await new Promise((s) => setTimeout(s, this.f)),
            this.b.removeEventListener("abort", e),
            (this.j = void 0),
            t &&
              this.process({
                state: this.h,
                runEvenIfAlreadyProcessing: !1,
                tryAgainCount:
                  this.h === i.state ? (i.tryAgainCount ?? 0) + 1 : 0,
              })
        }
      }
    },
    BFt = class extends V {
      constructor(e, t, s, n, r, o, a) {
        super(),
          (this.n = e),
          (this.q = t),
          (this.r = n),
          (this.t = r),
          (this.u = o),
          (this.w = a),
          (this.b = void 0),
          (this.c = []),
          (this.replaceText = ""),
          (this.f = !1),
          (this.originalText = void 0),
          (this.g = new fz()),
          (this.h = void 0),
          (this.O = new AbortController()),
          (this.a = e.deltaDecorations([], [this.y(s)])[0])
      }
      y(e) {
        let t
        return (
          (t = {
            description: "token streaming diff",
            className:
              "cpp-suggestion-text-decoration-debug " +
              (this.r.decorationClassName ?? ""),
            stickiness: 0,
          }),
          {
            range: {
              startLineNumber: e.startLineNumber,
              startColumn: e.startColumn,
              endLineNumber: e.endLineNumber,
              endColumn: e.endColumn,
            },
            options: t,
          }
        )
      }
      isShowing() {
        return this.originalText !== void 0
      }
      append(e) {
        if (this.f) {
          console.error("Trying to append to a finished diff...")
          return
        }
        ;(this.replaceText += e), this.z().catch((t) => console.error(t))
      }
      async setReplaceText(e) {
        ;(this.f = !0),
          (this.replaceText = e),
          await this.z({ isFinal: !0 }).catch((t) => console.error(t))
      }
      async finish() {
        return (this.f = !0), this.z({ isFinal: !0 })
      }
      async z(e) {
        this.j &&
          (await this.j.process({
            runEvenIfAlreadyProcessing: !1,
            waitUntilProcessed: e?.isFinal === !0,
          }))
      }
      async C(e) {
        try {
          if (!this.isShowing()) return
          if (this.replaceText === "" && !this.f) {
            this.H("")
            return
          }
          if (this.n.getDecorationRange(this.a)) {
            const s = this.getCurrentModelText(),
              n = this.replaceText,
              r = this.originalText ?? ""
            let { changes: o } =
              await this.w.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(
                r,
                n,
                {
                  computeMoves: !1,
                  ignoreTrimWhitespace: !1,
                  maxComputationTimeMs: 100,
                  onlyCareAboutPrefixOfOriginalLines: !this.f,
                },
              )
            if (!this.f) {
              const h = o.at(-1)
              h && h.removed === !0 && (h.removed = !1)
              const u = o.at(-2)
              h &&
                u &&
                u.added === !0 &&
                h.value.startsWith(u.value) &&
                (o = [...o.slice(0, -2), h])
            }
            let a = ""
            for (const h of o) h.removed === !1 && (a += h.value)
            const { changes: l } =
              await this.w.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(
                s,
                a,
                {
                  computeMoves: !1,
                  ignoreTrimWhitespace: !1,
                  maxComputationTimeMs: 100,
                  onlyCareAboutPrefixOfOriginalLines: !1,
                },
              )
            if (!this.isShowing()) return
            const c = this.getCurrentModelText()
            if (s !== c || e.aborted) return
            this.J(l), this.H(n), this.F(o)
          }
        } finally {
        }
      }
      F(e) {
        const t = this.getCurrentRange()
        if (!t) return
        const { greenRanges: s } = OFt(e, t, "post-change")
        this.c = this.n.deltaDecorations(
          this.c,
          s.map((n) => ({
            range: {
              startLineNumber: n.startLineNumber,
              startColumn: n.startColumn,
              endLineNumber: n.endLineNumber,
              endColumn: n.endColumn,
            },
            options: {
              description: "green",
              className: "token-streaming-diff-green-background",
              stickiness: 1,
            },
          })),
        )
      }
      G() {
        this.c.length > 0 && (this.n.deltaDecorations(this.c, []), (this.c = []))
      }
      H(e) {
        if (this.f) {
          this.I()
          return
        }
        const t = this.n.getDecorationRange(this.a)
        if (!t) return
        const s = e.split(`
  `),
          n = s.at(-1)
        if (n === void 0) return
        const r = n.length,
          o = t.startLineNumber + s.length - 1,
          a = Math.max(
            s.length === 1
              ? Math.max(t.startColumn + r - 1, t.startColumn)
              : r - 1,
            1,
          ),
          l = {
            startLineNumber: o,
            startColumn: a,
            endLineNumber: o,
            endColumn: a + 2,
          },
          h = {
            range: this.n.validateRange(l),
            options: {
              description: "token streaming diff streaming",
              className:
                e.length === 0
                  ? "cpp-suggestion-text-decoration-debug-streaming-pending"
                  : "cpp-suggestion-text-decoration-debug-streaming",
              stickiness: 1,
            },
          }
        this.b = this.n.deltaDecorations(this.b ? [this.b] : [], [h]).at(0)
      }
      I() {
        this.b && (this.n.deltaDecorations([this.b], []), (this.b = void 0))
      }
      J(e) {
        let t = this.n.getDecorationRange(this.a)
        if (!t) return
        let s = t.startLineNumber,
          n = t.startColumn,
          r = []
        for (const o of e) {
          const a = o.value.split(`
  `),
            l = s + a.length - 1,
            c = a.length > 1 ? a[a.length - 1].length + 1 : n + o.value.length
          o.added === !0
            ? r.push({ range: new G(s, n, s, n), text: o.value })
            : o.removed === !0 && r.push({ range: new G(s, n, l, c), text: "" }),
            o.added !== !0 && ((n = c), (s = l))
        }
        ;(EYe.current = !0),
          this.r.shouldAppendToUndoRedoGroup
            ? this.n.pushEditOperations([], r, () => null, this.g)
            : this.n.applyEdits(r)
      }
      L() {
        if (this.q?.getModel()?.id !== this.n.id) return
        const e = this.q.getSelection(),
          t = this.n.getDecorationRange(this.a)
        t !== null &&
          e !== null &&
          e.intersectRanges(t) !== null &&
          (this.q.setPosition(
            { lineNumber: e.startLineNumber, column: e.startColumn },
            "cpp-peek",
          ),
          this.q.setSelection(
            new G(
              e.startLineNumber,
              e.startColumn,
              e.startLineNumber,
              e.startColumn,
            ),
            "cpp-peek",
          ),
          (this.h = e !== null ? e : void 0))
      }
      M() {
        this.q?.getModel()?.id === this.n.id &&
          this.h !== void 0 &&
          this.q.setSelection(this.h, "cpp-revert")
      }
      async show(e) {
        if (!this.isShowing()) {
          const t = this.P()
          ;(this.j = new rYn(
            async (s) => (await this.C(s), og("success")),
            t.signal,
            (s) => console.error(s),
            50,
          )),
            (this.originalText = this.getCurrentModelText()),
            this.L()
        }
        e?.dontFlush !== !0 && (await this.z())
      }
      async N(e, t) {
        if (this.n.getDecorationRange(this.a)) {
          const n = this.getCurrentModelText(),
            { changes: r } = await this.t.wordDiff(n, e)
          if (this.isShowing()) return
          const o = this.getCurrentModelText()
          if (n !== o || t.aborted) return
          this.J(r)
        }
      }
      async accept() {
        this.isShowing() || (await this.show()), this.dispose()
      }
      P() {
        return this.O.abort(), (this.O = new AbortController()), this.O
      }
      async hide() {
        if (this.isShowing()) {
          const e = this.P(),
            t = this.originalText ?? ""
          if (
            ((this.originalText = void 0),
            await this.N(t, e.signal),
            e.signal.aborted)
          )
            return
          this.I(), this.G(), this.M()
        }
      }
      dispose() {
        super.dispose(), this.n.deltaDecorations([this.a], []), this.G(), this.I()
      }
      getCurrentRange() {
        return this.n.getDecorationRange(this.a)
      }
      getCurrentModelText() {
        const e = this.n.getDecorationRange(this.a)
        return e === null ? "" : this.n.getValueInRange(e)
      }
    }
  BFt = __decorate([__param(4, diffingService), __param(5, yi), __param(6, nl)], BFt)
  var _Ft = Re("tokenStreamingDiffService"),
    UFt = class extends V {
      constructor(e) {
        super(), (this.a = e)
      }
      create(e, t, s, n) {
        return this.a.createInstance(BFt, e, t, s, n)
      }
    }
  ;(UFt = __decorate([__param(0, Z)], UFt)), Ve(_Ft, UFt, 1)
  var HFt = Re("aiWebCmdKService"),
    VFt = class extends V {
      constructor(e, t, s, n, r, o, a, l) {
        super(),
          (this.a = e),
          (this.b = t),
          (this.c = s),
          (this.f = n),
          (this.g = r),
          (this.h = o),
          (this.j = a),
          (this.m = l)
      }
      async submit() {
        const e = this.a.nonPersistentStorage.webCmdKState.promptBar
        if (e === void 0) {
          console.error("no prompt bar")
          return
        }
        const [t, s] = this.f.registerNewGeneration({ metadata: void 0 })
        this.a.setNonPersistentStorage(
          "webCmdKState",
          "promptBar",
          "lastGenerationUUID",
          t,
        )
        let n
        try {
          n = await this.c.createModelReference(e.sourceURI)
          const r = n.object.textEditorModel
          let o = e.sourceLineNumber
          const a = r.getLineIndentColumn(o)
          let l = o + 1
          for (; l < r.getLineCount(); ) {
            if (r.getLineContent(l).trim() === "") {
              l++
              continue
            }
            if (r.getLineIndentColumn(l) <= a) break
            l++
          }
          const c = r.getValue(),
            h = this.g.create(
              r,
              this.h.getActiveCodeEditor(),
              {
                startLineNumber: o,
                endLineNumber: l,
                startColumn: 1,
                endColumn: r.getLineMaxColumn(l),
              },
              {},
            ),
            u = await this.f.aiClient(),
            d = this.f.getModelDetails(),
            g = u.streamWebCmdKV1(
              {
                modelDetails: d,
                fileContents: c,
                relativeWorkspacePath: e.sourceURI.path,
                selectionRange: { startLineNumber: o, endLineNumberInclusive: l },
                images:
                  e.images && e.images.length > 0
                    ? [await ize(e.images[0], () => {}, this.m, 512)]
                    : [],
                prompt: e.delegate.getText(),
              },
              { signal: s.signal, headers: wn(t) },
            ),
            p = Va.typeName + "/" + Va.methods.streamWebCmdKV1.name,
            m = this.f.streamResponse({
              modelDetails: d,
              streamer: N1(g),
              generationUUID: t,
              streamerURL: p,
              rethrowCancellation: !0,
              rerun: void 0,
              source: "other",
            })
          h.show()
          for await (const b of m)
            b.cmdKResponse?.response.case === "editStream" &&
              h.append(b.cmdKResponse.response.value.text)
          await h.finish(), await h.accept(), await this.j.save(e.sourceURI)
        } finally {
          n?.dispose(),
            this.a.setNonPersistentStorage("inprogressAIGenerations", (r) =>
              r.filter((o) => o.generationUUID !== t),
            )
        }
      }
      close() {
        this.b.activeEditorPane?.focus(),
          this.a.setNonPersistentStorage("webCmdKState", "promptBar", void 0)
      }
      async showWebCmdKInputBox(e) {
        const t = {
          sourceLineNumber: e.source.lineNumber,
          sourceURI: U.parse(e.source.fileName),
          delegate: new SN(),
          inputBoxDelegate: new am(),
          initText: "",
          images: [],
          originalPositionX: 0,
          originalPositionY: 0,
        }
        this.a.setNonPersistentStorage("webCmdKState", "promptBar", t)
      }
    }
  ;(VFt = __decorate(
    [
      __param(0, ei),
      __param(1, ve),
      __param(2, Xt),
      __param(3, Br),
      __param(4, _Ft),
      __param(5, yi),
      __param(6, fn),
      __param(7, nt),
    ],
    VFt,
  )),
    Ve(HFt, VFt, 1)
  var hue = Re("IAiReaderService"),
    WFt = class B6e extends _ {
      constructor(e) {
        super(),
          (this.relativeWorkspacePath = ""),
          (this.hash = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.MinimalFileHash"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
          { no: 2, name: "hash", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new B6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new B6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new B6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(B6e, e, t)
      }
    },
    oYn = class _6e extends _ {
      constructor(e) {
        super(),
          (this.uuid = ""),
          (this.openTabs = []),
          (this.contextGraphFiles = []),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.StartFastSearchRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "uuid", kind: "scalar", T: 9 },
          { no: 2, name: "cursor_position", kind: "message", T: Qm },
          { no: 3, name: "open_tabs", kind: "message", T: WFt, repeated: !0 },
          {
            no: 4,
            name: "context_graph_files",
            kind: "message",
            T: WFt,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new _6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new _6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new _6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(_6e, e, t)
      }
    },
    AKi = class U6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.StartFastSearchResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "ready", kind: "message", T: MKi, oneof: "response" },
          {
            no: 2,
            name: "missing_files",
            kind: "message",
            T: aYn,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new U6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new U6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new U6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(U6e, e, t)
      }
    },
    MKi = class H6e extends _ {
      constructor(e) {
        super(), (this.ready = !1), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.StartFastSearchResponse.Ready"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "ready", kind: "scalar", T: 8 },
        ])
      }
      static fromBinary(e, t) {
        return new H6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new H6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new H6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(H6e, e, t)
      }
    },
    aYn = class V6e extends _ {
      constructor(e) {
        super(), (this.file = []), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.StartFastSearchResponse.MissingFiles"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "file", kind: "scalar", T: 9, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new V6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new V6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new V6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(V6e, e, t)
      }
    },
    lYn = class W6e extends _ {
      constructor(e) {
        super(), (this.uuid = ""), (this.query = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.FastSearchRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "uuid", kind: "scalar", T: 9 },
          { no: 2, name: "query", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new W6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new W6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new W6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(W6e, e, t)
      }
    },
    $Ki = class q6e extends _ {
      constructor(e) {
        super(), (this.fileChunks = []), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.FastSearchResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "file_chunks", kind: "message", T: cYn, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new q6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new q6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new q6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(q6e, e, t)
      }
    },
    cYn = class j6e extends _ {
      constructor(e) {
        super(),
          (this.chunkScore = 0),
          (this.contents = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.FastSearchResponse.Chunk"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "chunk", kind: "message", T: Tgn },
          { no: 2, name: "chunk_score", kind: "scalar", T: 2 },
          { no: 3, name: "contents", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new j6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new j6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new j6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(j6e, e, t)
      }
    },
    qFt = {
      typeName: "aiserver.v1.FastSearchService",
      methods: {
        startFastSearch: {
          name: "StartFastSearch",
          I: oYn,
          O: AKi,
          kind: gt.Unary,
        },
        fastSearch: { name: "FastSearch", I: lYn, O: $Ki, kind: gt.Unary },
      },
    },
    FKi = Re("IFastSemSearchService"),
    jFt = class extends V {
      constructor(e, t, s, n, r, o, a, l, c) {
        super(),
          (this.b = e),
          (this.c = t),
          (this.f = s),
          (this.g = n),
          (this.h = r),
          (this.j = o),
          (this.m = a),
          (this.n = l),
          (this.q = c),
          (this.a = this.q.createInstance(fu, { service: qFt }))
      }
      async startFastSearch(e) {
        const t = await this.g
            .getGroups(1)
            .map((a) => a.editors.map((l) => l.resource))
            .flat()
            .filter((a) => a !== void 0)
            .map((a) => this.h.asRelativePath(a))
            .map((a) => new WFt({ relativeWorkspacePath: a })),
          r =
            this.getLastActiveFileEditor()?.getControl().getPosition() ??
            new Me(1, 1)
        let o
        try {
          o = await (
            await this.a.get()
          ).startFastSearch({ uuid: e, cursorPosition: r, openTabs: t })
        } catch {
          o = new AKi({
            response: { case: "ready", value: new MKi({ ready: !0 }) },
          })
        }
        return o
      }
      getLastActiveFileEditor() {
        let e = this.j.activeEditorPane
        return e?.input?.resource?.scheme !== ce.aiChat, e
      }
      r(e) {
        const t = new AbortController()
        return (
          e.onCancellationRequested(() => {
            t.abort()
          }),
          t
        )
      }
      async fastSearch(e, t, s) {
        return await this.internalPureFastSearch(e, t, s)
      }
      async postProcessSearchResults(e) {
        const t = e.fileChunks
            .map((o) => o.chunk?.relativeWorkspacePath)
            .filter((o) => o !== void 0),
          s = new oi()
        let n = new Map()
        await Promise.allSettled(
          t.map(async (o) => {
            const a = await this.n.getApproximateRangeOfImports(
              U.file(o),
              s.token,
            )
            a && n.set(o, a)
          }),
        )
        const r = this.s(e, n)
        return e
      }
      s(e, t) {
        const s = e.fileChunks,
          n = (a) => {
            const l = t.get(a.chunk?.relativeWorkspacePath ?? "")
            if (l) {
              const c = new G(
                a.chunk?.range?.startLine ?? 1,
                1,
                (a.chunk?.range?.endLineInclusive ?? 2) - 1,
                1,
              )
              return G.containsRange(l, c)
            }
            return !0
          },
          r = s.filter((a) => !n(a))
        let o = e
        return (o.fileChunks = r), o
      }
      async internalPureFastSearch(e, t, s) {
        const n = await this.a.get(),
          r = this.r(s)
        try {
          return await n.fastSearch({ uuid: e, query: t }, { signal: r.signal })
        } catch {
          return new $Ki({ fileChunks: [] })
        }
      }
    }
  ;(jFt = __decorate(
    [
      __param(0, $h),
      __param(1, ei),
      __param(2, Ti),
      __param(3, si),
      __param(4, it),
      __param(5, ve),
      __param(6, cursorCredsService),
      __param(7, T1),
      __param(8, Z),
    ],
    jFt,
  )),
    Ve(FKi, jFt, 1)
  var hYn = "everysphere_workspace_id",
    OKi = Re("commitNotesService"),
    zFt = class extends V {
      constructor(e, t) {
        super(), (this.a = e), (this.b = t), this.initialize().catch((s) => {})
      }
      getWorkspaceId() {
        return null
      }
      async initialize() {}
    }
  ;(zFt = __decorate([__param(0, everythingProviderService), __param(1, it)], zFt)), Ve(OKi, zFt, 0)
  var BKi
  ;(function (i) {
    i.DocAgent = "DocAgent"
  })(BKi || (BKi = {}))
  var GFt
  ;(function (i) {
    i.FocusTask = "BasicLexicalReducerFocusTask"
  })(GFt || (GFt = {}))
  var _Ki
  ;(function (i) {
    ;(i.UpdateTask = "DocAgentUpdateTask"), (i.DeleteTask = "DocAgentDeleteTask")
  })(_Ki || (_Ki = {}))
  var UKi = Re("lexicalReducerService"),
    JFt = class {
      constructor(i, e, t) {
        ;(this.source = i),
          (this.taskUuid = e),
          (this.delegate = t),
          (this.uuid = rt()),
          (this.a = le(void 0)),
          (this.b = le(void 0)),
          (this.c = le(void 0)),
          (this.d = le(void 0)),
          (this.e = le(!1)),
          (this.g = le("none")),
          (this.h = le("none")),
          (this.i = le(void 0)),
          (this.j = le("none")),
          (this.k = le(!1)),
          (this.l = le(void 0)),
          (this.m = le(void 0)),
          (this.n = le(void 0))
      }
      getPlan() {
        return co(() => this.a[0]())
      }
      getPlanReactive() {
        return this.a[0]()
      }
      setPlan(i) {
        this.a[1](i)
      }
      getPlanGenerationUUID() {
        return co(() => this.b[0]())
      }
      getPlanGenerationUUIDReactive() {
        return this.b[0]()
      }
      setPlanGenerationUUID(i) {
        this.b[1](i)
      }
      getImplementationGenerationUUID() {
        return co(() => this.c[0]())
      }
      getImplementationGenerationUUIDReactive() {
        return this.c[0]()
      }
      setImplementationGenerationUUID(i) {
        this.c[1](i)
      }
      getReflectionGenerationUUID() {
        return co(() => this.d[0]())
      }
      getReflectionGenerationUUIDReactive() {
        return this.d[0]()
      }
      setReflectionGenerationUUID(i) {
        this.d[1](i)
      }
      getIsEditable() {
        return co(() => this.e[0]())
      }
      getIsEditableReactive() {
        return this.e[0]()
      }
      f(i) {
        this.e[1](i)
      }
      setHasBeenShown() {
        this.getImplementationStatus() === "finished" && this.f(!0)
      }
      getPlanStatus() {
        return co(() => this.g[0]())
      }
      getPlanStatusReactive() {
        return this.g[0]()
      }
      setPlanStatus(i) {
        this.g[1](i)
      }
      getReflectionStatus() {
        return co(() => this.h[0]())
      }
      getReflectionStatusReactive() {
        return this.h[0]()
      }
      setReflectionStatus(i) {
        this.h[1](i)
      }
      getImplementation() {
        return co(() => this.i[0]())
      }
      getImplementationReactive() {
        return this.i[0]()
      }
      setImplementation(i) {
        this.i[1](i)
      }
      getImplementationStatus() {
        return co(() => this.j[0]())
      }
      getImplementationStatusReactive() {
        return this.j[0]()
      }
      setImplementationStatus(i) {
        this.j[1](i), i === "finished" && this.delegate.onDidFinish()
      }
      getIsRejected() {
        return co(() => this.k[0]())
      }
      getIsRejectedReactive() {
        return this.k[0]()
      }
      setIsRejected(i) {
        this.k[1](i)
      }
      getLints() {
        return co(() => this.l[0]())
      }
      getLintsReactive() {
        return this.l[0]()
      }
      setLints(i) {
        this.l[1](i)
      }
      getReflection() {
        return co(() => this.m[0]())
      }
      getReflectionReactive() {
        return this.m[0]()
      }
      setReflection(i) {
        this.m[1](i)
      }
      getReflectionDecision() {
        return co(() => this.n[0]())
      }
      getReflectionDecisionReactive() {
        return this.n[0]()
      }
      setReflectionDecision(i) {
        this.n[1](i)
      }
    },
    HKi = class {
      constructor(i) {
        ;(this.contextSessionUuid = i),
          (this.inputBoxDelegate = new am()),
          (this.a = le("")),
          (this.b = le(""))
      }
      getText() {
        return this.a[0]()
      }
      getTextReactive() {
        return this.a[0]()
      }
      setText(i) {
        this.a[1](i)
      }
      getRichText() {
        return this.b[0]()
      }
      getRichTextReactive() {
        return this.b[0]()
      }
      setRichText(i) {
        this.b[1](i)
      }
    },
    uYn = class {
      constructor(i = rt(), e, t, s, n, r, o, a, l, c) {
        ;(this.uuid = i),
          (this.uri = e),
          (this.createdAt = t),
          (this.callSiteDecorationId = s),
          (this.implementationDecorationId = n),
          (this.currentImplementationIndex = r),
          (this.showingImplementationIndex = o),
          (this.showingIndices = a),
          (this.ignorePotentialDeletes = l),
          (this.implementations = c),
          (this.a = le(void 0)),
          (this.b = le(!1))
      }
      getPrompt() {
        return co(() => this.a[0]())
      }
      getPromptReactive() {
        return this.a[0]()
      }
      setPrompt(i) {
        this.a[1](i)
      }
      shouldShowDiff() {
        return co(() => this.b[0]())
      }
      shouldShowDiffReactive() {
        return this.b[0]()
      }
      setShouldShowDiff(...i) {
        this.b[1](...i)
      }
    },
    KFt = Re("hallucinatedFunctionsDataService"),
    YFt = class extends V {
      constructor(e) {
        super(),
          (this.w = e),
          (this.g = []),
          (this.h = []),
          (this.j = []),
          (this.m = this.D(new R())),
          (this.onDidCreateHallucinatedFunction = this.m.event),
          (this.n = this.D(new R())),
          (this.onDidUpdateHallucinatedFunctionImplementationRange =
            this.n.event),
          (this.q = this.D(new R())),
          (this.onDidDeleteHallucinatedFunction = this.q.event),
          (this.r = this.D(new R())),
          (this.onDidChangeHallucinatedFunction = this.r.event),
          (this.s = this.D(new R())),
          (this.onDidFinishHallucinatedFunctionImplementation = this.s.event),
          (this.u = this.D(new R())),
          (this.onDidPushTask = this.u.event)
      }
      newOrFocusPrompt(e) {
        const t = this.getHallucinatedFunction(e)
        if (!t) {
          console.error("Hallucinated function not found for UUID:", e)
          return
        }
        t.getPrompt() === void 0 && (t.setPrompt(new HKi(rt())), this.r.fire(t)),
          t.getPrompt()?.inputBoxDelegate.focus()
      }
      deleteCandidate(e, t) {
        const s = this.g.findIndex((n) => n.uuid === e)
        if (s !== -1) {
          const n = this.g[s]
          this.g.splice(s, 1), t.deltaDecorations([n.decorationId], [])
        }
      }
      abortTasks(e) {
        this.j.forEach((t) => {
          e(t) && t.abortController.abort()
        })
      }
      cleanCandidates() {
        const e = Math.floor(Date.now() / 1e3)
        for (let t = this.g.length - 1; t >= 0; t--)
          this.g[t].createdAtUnixSeconds <= e - 2 && this.g.splice(t, 1)
      }
      addCandidate(e) {
        this.g.push({
          ...e,
          createdAtUnixSeconds: Math.floor(Date.now() / 1e3),
          isCreating: !1,
          uuid: rt(),
        }),
          setTimeout(() => {
            this.cleanCandidates()
          }, 2100)
      }
      getCandidates() {
        return this.g
      }
      getHallucinatedFunctions(e) {
        const t = this.h
        return e ? t.filter((s) => !e.uri || ys.isEqual(s.uri, e.uri)) : t
      }
      getHallucinatedFunction(e) {
        return this.h.find((t) => t.uuid === e)
      }
      getHallucinatedFunctionAtPosition(e, t) {
        if (!e) return
        const s = []
        for (const n of this.h) {
          const r = t.getDecorationRange(n.implementationDecorationId)
          r && r.containsPosition(e) && s.push({ hf: n, range: r })
        }
        return s
          .sort((n, r) => -(n.range.startLineNumber - r.range.startLineNumber))
          .at(0)?.hf
      }
      getHallucinatedFunctionAtPositionOnlyIdentifier(e, t) {
        if (!e) return
        const s = []
        for (const n of this.h) {
          const r = t.getDecorationRange(n.implementationDecorationId)
          if (r && r.isEmpty() && n.callSiteDecorationId) {
            const o = t.getDecorationRange(n.callSiteDecorationId)
            o && o.containsPosition(e) && s.push({ hf: n, range: r })
            continue
          }
          r && r.startLineNumber === e.lineNumber && s.push({ hf: n, range: r })
        }
        return s.at(0)?.hf
      }
      getHallucinatedFunctionAtCallPosition(e, t) {
        if (e)
          for (const s of this.h) {
            if (s.callSiteDecorationId === void 0) continue
            const n = t.getDecorationRange(s.callSiteDecorationId)
            if (n && n.containsPosition(e)) return s
          }
      }
      getHallucinatedFunctionName(e, t) {
        const s = e.callSiteDecorationId
          ? t.getDecorationRange(e.callSiteDecorationId)
          : void 0
        if (!s) {
          const r = (l) => l.slice(0, 100),
            o = t.getDecorationRange(e.implementationDecorationId)
          if (!o) return ""
          const a = t.getValueInRange(o)
          return r(a)
        }
        return t.getValueInRange(s)
      }
      getHallucinatedFunctionImplementation(e, t, s) {
        const n = e.implementations.findIndex((o) => o.uuid === t.uuid),
          r = s.getDecorationRange(e.implementationDecorationId)
        return e.currentImplementationIndex === n && r
          ? s.getValueInRange(r)
          : this.getHallucinatedFunctionImplementationDirect(e, t, s)
      }
      getHallucinatedFunctionImplementationDirect(e, t, s) {
        let n = t.getImplementation() ?? ""
        const r = s.getDecorationRange(e.implementationDecorationId)
        return r && r.isEmpty() && (n += s.getEOL()), n
      }
      getHallucinatedFunctionReferenceImplementation(e, t) {
        const s = e.implementations.at(0)
        return s === void 0
          ? ""
          : this.getHallucinatedFunctionImplementation(e, s, t)
      }
      addImplementation(e, t) {
        const s = this.h.findIndex((o) => o.uuid === e)
        if (s === -1) throw new Error("Hallucinated function not found")
        const n = this.h[s],
          r = new JFt(t.source, t.taskUuid, {
            onDidFinish: () => {
              this.s.fire(n)
            },
          })
        return n.implementations.push(r), this.r.fire(n), r
      }
      previousImplementation(e, t) {
        this.nextImplementation(e, t, "negative")
      }
      nextImplementation(e, t, s = "positive") {
        const n = this.h.findIndex((r) => r.uuid === e)
        if (n === -1) throw new Error("Hallucinated function not found")
        try {
          const r = this.h[n].currentImplementationIndex
          let o = 0
          do
            s === "positive"
              ? this.h[n].currentImplementationIndex++
              : this.h[n].currentImplementationIndex--,
              this.h[n].currentImplementationIndex >=
              this.h[n].implementations.length
                ? (this.h[n].currentImplementationIndex = 0)
                : this.h[n].currentImplementationIndex < 0 &&
                  (this.h[n].currentImplementationIndex =
                    this.h[n].implementations.length - 1),
              o++
          while (!1)
          if (o > this.h[n].implementations.length)
            throw new Error("No implementation found")
          const a = t.getDecorationRange(this.h[n].implementationDecorationId)
          if (!a) throw new Error("Decoration range not found")
          const l = this.h[n].implementations[r]
          l.getIsEditable() && l.setImplementation(t.getValueInRange(a))
          const c =
            this.h[n].implementations[this.h[n].currentImplementationIndex]
          t.pushEditOperations(
            null,
            [
              {
                range: a,
                text:
                  c.getImplementation() ??
                  this.h[n].implementations[0].getImplementation() +
                    "     /* no implementation yet, just a plan*/",
              },
            ],
            () => null,
          ),
            c.setHasBeenShown()
        } finally {
          this.r.fire(this.h[n])
        }
      }
      getImplementation(e, t) {
        const s = this.getHallucinatedFunction(e)
        if (s) return s.implementations.find((n) => n.uuid === t)
      }
      getShowingImplementation(e) {
        const t = this.getHallucinatedFunction(e)
        if (t)
          return t.showingImplementationIndex !== void 0
            ? t.implementations.at(t.showingImplementationIndex)
            : void 0
      }
      nextShowingImplementation(e) {
        const t = this.getHallucinatedFunction(e)
        if (t) {
          if (t.showingImplementationIndex === void 0)
            t.showingImplementationIndex = t.showingIndices.at(0)
          else {
            const s = t.showingIndices.indexOf(t.showingImplementationIndex)
            if (s === -1) t.showingImplementationIndex = t.showingIndices.at(0)
            else {
              let n = (s + 1) % t.showingIndices.length
              t.showingImplementationIndex = t.showingIndices.at(n)
            }
          }
          this.r.fire(t)
        }
      }
      previousShowingImplementation(e) {
        const t = this.getHallucinatedFunction(e)
        if (t) {
          if (t.showingImplementationIndex === void 0)
            t.showingImplementationIndex = t.showingIndices.at(0)
          else {
            const s = t.showingIndices.indexOf(t.showingImplementationIndex)
            if (s === -1) t.showingImplementationIndex = t.showingIndices.at(0)
            else {
              let n = (s - 1 + t.showingIndices.length) % t.showingIndices.length
              t.showingImplementationIndex = t.showingIndices.at(n)
            }
          }
          this.r.fire(t)
        }
      }
      setHallucinatedFunctionShowingIndices(e, t) {
        ;(e.showingIndices = t),
          (e.showingImplementationIndex = t.at(0)),
          this.r.fire(e)
      }
      rejectImplementation(e, t) {
        t.setIsRejected(!0)
        const s = e.implementations.indexOf(t)
        this.setHallucinatedFunctionShowingIndices(
          e,
          e.showingIndices.filter((n) => n !== s),
        )
      }
      showImplementation(e, t, s) {
        const n = this.getHallucinatedFunction(e)
        if (!n) return
        const r = n.implementations.findIndex((o) => o.uuid === t)
        if (r !== -1)
          try {
            const o = n.currentImplementationIndex
            n.currentImplementationIndex = r
            const a = s.getDecorationRange(n.implementationDecorationId)
            if (!a) return
            if (
              n.implementations[o].getImplementation() !== s.getValueInRange(a) &&
              this.w.applicationUserPersistentStorage
                .hallucinatedFunctionsPersistentState.noninvasiveUI !== !0
            ) {
              n.currentImplementationIndex = o
              return
            }
            const l = n.implementations[r],
              c = this.getHallucinatedFunctionImplementationDirect(n, l, s)
            if (
              (s.pushEditOperations(null, [{ range: a, text: c }], () => null),
              a.isEmpty())
            ) {
              let h = G.inverseEditRange(a, c)
              ;(h = {
                ...h,
                endLineNumber: h.endLineNumber - 1,
                endColumn: s.getLineMaxColumn(h.endLineNumber - 1),
              }),
                (n.implementationDecorationId = s.deltaDecorations(
                  [n.implementationDecorationId],
                  [{ range: h, options: this.y() }],
                )[0])
            }
            if (
              ((n.currentImplementationIndex = r),
              l.setHasBeenShown(),
              this.w.applicationUserPersistentStorage
                ?.hallucinatedFunctionsPersistentState?.instantAccept === !0)
            ) {
              if (!n.callSiteDecorationId) return
              const h = s.getDecorationRange(n.callSiteDecorationId)
              if (!h) return
              n.callSiteDecorationId = s.deltaDecorations(
                [n.callSiteDecorationId],
                [
                  {
                    range: h,
                    options: {
                      className: "hallucinated-function-call-site-done",
                      description: "hallucinated function call site",
                    },
                  },
                ],
              )[0]
            }
          } finally {
            this.r.fire(n)
          }
      }
      deleteHallucinatedFunctionNoModelChanges(e) {
        this.deleteHallucinatedFunction(e, void 0)
      }
      deleteHallucinatedFunction(e, t) {
        this.j.forEach((n) => {
          n.hallucinatedFunctionUuid === e && n.abortController.abort()
        })
        const s = this.h.findIndex((n) => n.uuid === e)
        if (s !== -1) {
          const n = this.h[s]
          if ((this.h.splice(s, 1), t !== void 0)) {
            const r = t.getDecorationRange(n.implementationDecorationId)
            t.deltaDecorations(
              [
                ...(n.callSiteDecorationId ? [n.callSiteDecorationId] : []),
                n.implementationDecorationId,
              ],
              [],
            ),
              r &&
                !r.isEmpty() &&
                t.pushEditOperations(
                  null,
                  [
                    ...(r
                      ? [
                          {
                            range: {
                              ...r,
                              endLineNumber: r.endLineNumber + 1,
                              endColumn: 1,
                            },
                            text: "",
                          },
                        ]
                      : []),
                  ],
                  () => null,
                )
          }
          this.q.fire(n)
        }
      }
      markCandidateCreating(e) {
        const t = this.g.findIndex((s) => s.uuid === e)
        t !== -1 && (this.g[t].isCreating = !0)
      }
      removeCandidate(e) {
        const t = this.g.findIndex((s) => s.uuid === e)
        t !== -1 && this.g.splice(t, 1)
      }
      updateHallucinatedFunctionImplementationRange(e, t, s) {
        const n = this.h.findIndex((l) => l.uuid === e)
        if (n === -1) throw new Error("Hallucinated function not found")
        const r = this.h[n],
          o = s.deltaDecorations(
            [r.implementationDecorationId],
            [{ range: t, options: this.y() }],
          )
        r.implementationDecorationId = o[0]
        const a = s.getValueInRange(t)
        r.implementations[r.currentImplementationIndex].setImplementation(a),
          this.n.fire(r),
          this.r.fire(r)
      }
      y() {
        return {
          description: "hallucinated function implementation",
          className: "hallucinated-function-implementation",
          collapseOnReplaceEdit: !1,
          stickiness: 3,
          isWholeLine: !0,
        }
      }
      createHallucinatedFunction(e, t, s) {
        let n
        if (s?.callSiteDecorationId !== void 0 || s?.callSiteRange !== void 0) {
          const c =
            s?.callSiteRange ?? e.getDecorationRange(s.callSiteDecorationId)
          if (!c) throw new Error("Decoration range not found")
          for (const h of this.h) {
            if (h.callSiteDecorationId === void 0) continue
            const u = e.getDecorationRange(h.callSiteDecorationId)
            if (u && u.intersectRanges(c))
              throw new Error("Intersecting callsite")
          }
          n = e.deltaDecorations(
            s?.callSiteDecorationId ? [s.callSiteDecorationId] : [],
            [
              {
                range: c,
                options: { description: "hallucinated function call site" },
              },
            ],
          )[0]
        }
        const r = e.deltaDecorations([], [{ range: t, options: this.y() }])[0],
          o = s?.initialImplementation ?? e.getValueInRange(t),
          a = new uYn(
            s?.uuid ?? rt(),
            e.uri,
            new Date(),
            n,
            r,
            s?.initialImplementation !== void 0 ? 1 : 0,
            void 0,
            [],
            !1,
            [],
          )
        if (s?.prompt !== void 0) {
          const c = new HKi(rt())
          c.setRichText(s.prompt.richText),
            c.setText(s.prompt.plainText),
            a.setPrompt(c)
        }
        const l = new JFt("initial", void 0, {
          onDidFinish: () => {
            this.s.fire(a)
          },
        })
        if (
          (l.setImplementation(o),
          l.setImplementationStatus("finished"),
          l.setHasBeenShown(),
          l.setIsRejected(!0),
          a.implementations.push(l),
          s?.initialImplementation !== void 0)
        ) {
          const c = new JFt("initial", void 0, {
            onDidFinish: () => {
              this.s.fire(a)
            },
          })
          c.setImplementation(e.getValueInRange(t)),
            c.setImplementationStatus("finished"),
            c.setHasBeenShown(),
            c.setIsRejected(!0),
            a.implementations.push(c)
        }
        this.h.push(a), this.m.fire(a)
      }
      transitionCandidate(e, t, s) {
        const n = this.g.findIndex((o) => o.uuid === e)
        if (n === -1) throw new Error("Candidate not found")
        const r = this.g[n]
        this.g.splice(n, 1),
          this.createHallucinatedFunction(t, s, {
            callSiteDecorationId: r.decorationId,
            uuid: r.uuid,
          })
      }
      pushTask(e) {
        if (e.fuel < 0) {
          console.log("not appending task because fuel is less than 0")
          return
        }
        const t = {
          ...e,
          uuid: rt(),
          status: "pending",
          abortController: new AbortController(),
        }
        this.j.push(t), this.u.fire(t)
      }
      setTaskStatus(e, t, s) {
        const n = this.j.findIndex((r) => r.uuid === e)
        if (n === -1) throw new Error("Task not found")
        if (this.j[n].status !== s)
          throw new Error("Task status did not match expected value")
        this.j[n].status = t
      }
    }
  ;(YFt = __decorate([__param(0, ei)], YFt)), Ve(KFt, YFt, 1)
  var VKi = Re("IAiContextService"),
    XFt = class extends V {
      constructor(e, t, s, n, r, o, a) {
        super(),
          (this.n = e),
          (this.q = t),
          (this.r = s),
          (this.s = n),
          (this.t = r),
          (this.u = o),
          (this.w = a),
          (this.f = new Map()),
          (this.g = 5 * 60 * 1e3),
          (this.h = []),
          (this.j = !1),
          (this.c = this.n.createInstance(cF)),
          this.z(),
          this.D(
            this.t.onChangeEffectManuallyDisposed({
              deps: [() => this.t.applicationUserPersistentStorage.personalDocs],
              onChange: () => this.z(),
            }),
          ),
          this.D(
            this.t.onChangeEffectManuallyDisposed({
              deps: [
                () =>
                  this.t.applicationUserPersistentStorage
                    .shouldShowAtSymbolSuggestions,
              ],
              onChange: () => {
                this.t.applicationUserPersistentStorage
                  .shouldShowAtSymbolSuggestions && this.z()
              },
            }),
          )
      }
      async findClosestFiles(e, t, s = new oi().token) {
        const n = `${e}:${t.toString()}`,
          r = this.f.get(n),
          o = Date.now()
        if (r && o - r.timestamp < this.g) return r.result
        this.f.forEach((h, u) => {
          o - h.timestamp >= this.g && this.f.delete(u)
        })
        const c = (await this.c.getFilePicks(vm(e), new ns(), s))
          .filter((h) => "resource" in h && !!h.resource)
          .map((h) => ({
            pick: h,
            similarity: this.y(h.resource.path, t.fsPath),
          }))
          .sort((h, u) => u.similarity - h.similarity)
          .map((h) => h.pick.resource)
          .filter((h) => !!h)
        return this.f.set(n, { result: c, timestamp: o }), c
      }
      async retrieveAtSymbolSuggestions(e) {
        this.m && this.m.abort(), (this.m = new AbortController())
        const t = this.m.signal
        try {
          const r =
            (
              this.q.getActiveCodeEditor() || this.q.getFocusedCodeEditor()
            )?.getModel()?.uri ?? this.w.getWorkspace()?.folders[0]?.uri
          if (!r) return []
          const o = await this.findClosestFiles("package.json", r),
            a = await this.findClosestFiles("Cargo.toml", r),
            l = o[0],
            c = a[0],
            [h, u] = await Promise.all([this.r.readFile(l), this.r.readFile(c)]),
            d = h.value.toString(),
            g = d ? JSON.parse(d) : {},
            p = g.dependencies || {},
            m = g.devDependencies || {},
            b = g.peerDependencies || {},
            y = u.value.toString(),
            C = this.C(y).dependencies || {},
            S = []
          ;[
            ...Object.keys(p),
            ...(!1 ? [...Object.keys(m), ...Object.keys(b)] : []),
          ].forEach((H) => {
            S.push(new V1t({ name: H, fromFile: "package.json" }))
          }),
            Object.entries(C).forEach(([H, B]) => {
              S.push(new V1t({ name: H, fromFile: "Cargo.toml" }))
            })
          const k = []
          for (let H = 0; H < this.h.length; H++) {
            const B = this.h[H]
            B.metadata &&
              k.push({
                index: H,
                text: B.metadata.docName + " - " + B.metadata?.prefixUrl,
                type: "documentation",
                docSelection: {
                  docId: B.docIdentifier,
                  name: B.metadata.docName,
                  url: B.metadata.prefixUrl,
                  uuid: rt(),
                },
              })
          }
          const E = await this.s.getCurrentFileInfo(r),
            D = new y$i({
              atSymbolDependencies: S,
              currentFileInfo: E,
              atSymbolOptions: k,
              userQuery: e,
            })
          if (!D || !k.length) return []
          const L = await (
              await this.s.aiClient()
            ).getAtSymbolSuggestions(D, { signal: t }),
            { indices: A } = L,
            F = A.map((H) => k[H]).filter((H) => !!H)
          return console.log(L.explanation), F
        } catch (s) {
          return (
            s.name === "AbortError"
              ? console.log("Request was aborted")
              : console.error("Error in retrieveAtSymbolSuggestions:", s),
            []
          )
        } finally {
          this.m = void 0
        }
      }
      y(e, t) {
        if (e === t) return 1
        const s = e.split("/"),
          n = t.split("/"),
          r = Math.min(s.length, n.length),
          o = s.slice(0, r).findIndex((a, l) => a !== n[l])
        return o === -1
          ? r / Math.max(s.length, n.length)
          : o / Math.max(s.length, n.length)
      }
      async z() {
        const e = await this.s.availableDocs({
          additionalDocIdentifiers:
            this.t.applicationUserPersistentStorage.personalDocs.map(
              (t) => t.identifier,
            ),
        })
        ;(this.h = e), (this.j = !0)
      }
      C(e) {
        function t(h) {
          if (h !== void 0)
            return (
              (h = h.trim()),
              h === "true"
                ? !0
                : h === "false"
                  ? !1
                  : h === "null"
                    ? null
                    : (h.startsWith('"') && h.endsWith('"')) ||
                        (h.startsWith("'") && h.endsWith("'"))
                      ? h.slice(1, -1)
                      : isNaN(Number(h))
                        ? h.startsWith("{") && h.endsWith("}")
                          ? s(h.slice(1, -1))
                          : h.startsWith("[") && h.endsWith("]")
                            ? h
                                .slice(1, -1)
                                .split(",")
                                .map((u) => t(u.trim()))
                            : h
                        : Number(h)
            )
        }
        function s(h) {
          const u = {},
            d = h.split(",")
          for (const g of d) {
            const p = g.split("=")
            if (p.length < 2) continue
            const m = p[0].trim(),
              b = p.slice(1).join("=").trim()
            m && b !== void 0 && (u[m] = t(b))
          }
          return u
        }
        const n = {},
          r = e.split(`
  `)
        let o = n,
          a = null,
          l = ""
        function c(h, u) {
          a !== null ? a.push(u) : (o[h] = u)
        }
        for (let h = 0; h < r.length; h++) {
          const u = r[h].trim()
          if (!(u === "" || u.startsWith("#"))) {
            if (u.startsWith("[") && u.endsWith("]")) {
              const d = u.slice(1, -1).split(".")
              o = n
              for (const g of d) o[g] || (o[g] = {}), (o = o[g])
              a = null
              continue
            }
            if (u.includes("=")) {
              const [d, ...g] = u.split("=")
              l = d.trim()
              let p = g.join("=").trim()
              if (p.startsWith('"') && !p.endsWith('"')) {
                for (; !r[++h].trim().endsWith('"'); )
                  p +=
                    `
  ` + r[h]
                p +=
                  `
  ` + r[h].trim()
              }
              if (p.startsWith("{") && !p.endsWith("}")) {
                for (; !r[++h].trim().endsWith("}"); ) p += r[h]
                p += r[h].trim()
              }
              if (p.startsWith("[") && !p.endsWith("]")) {
                for (a = [], c(l, a); !r[++h].trim().endsWith("]"); ) {
                  const b = t(r[h].trim())
                  b !== void 0 && a.push(b)
                }
                const m = t(r[h].trim().slice(0, -1))
                m !== void 0 && a.push(m), (a = null)
              } else c(l, t(p))
            }
          }
        }
        return n
      }
    }
  ;(XFt = __decorate(
    [
      __param(0, Z),
      __param(1, yi),
      __param(2, nt),
      __param(3, Br),
      __param(4, ei),
      __param(5, M_),
      __param(6, it),
    ],
    XFt,
  )),
    Ve(VKi, XFt, 1)
  var dYn = 2,
    fYn = 1e5,
    gYn = 2e3,
    QFt = 2,
    pYn = 20,
    mYn = 30,
    bYn = 150,
    vYn = 2500,
    uue = Re("contextBankService"),
    ZFt = class extends V {
      constructor(e, t, s, n, r, o, a, l) {
        super(),
          (this.h = e),
          (this.j = t),
          (this.m = s),
          (this.n = n),
          (this.q = r),
          (this.s = o),
          (this.t = a),
          (this.u = l),
          (this.c = new yo(dYn)),
          (this.g = [])
      }
      w(e, t) {
        return `${va(`${e}_${t}`)}`
      }
      y(e) {
        const t = this.c.peek(e)
        if (t && performance.now() - t.timestamp <= fYn)
          return this.c.get(e), t.results
      }
      z(e, t) {
        this.c.set(e, { results: t, timestamp: performance.now() })
      }
      C() {
        return (
          this.u.maybeRefreshFeatureStatus("contextBank"),
          this.u.getCachedFeatureStatus("contextBank") ?? !0
        )
      }
      async getRankedFiles(e) {
        if (!this.C()) return []
        const t = new jB({ ...e.composerRequest })
        if (t.conversation.length === 0) return []
        const s = this.w(e.composerId, t.conversation.length)
        if (e.useCachedResults) {
          const r = this.y(s)
          return r
            ? await this.filterCursorIgnoredFiles(r.slice(0, e.numberOfChunks))
            : []
        }
        const n = await this.getRankedFilesInternal({ ...e, cacheKey: s })
        return this.z(s, n), await this.filterCursorIgnoredFiles(n)
      }
      async filterCursorIgnoredFiles(e) {
        return (
          await new Promise((t) =>
            this.t.addOnCursorIgnoreLoadedCallback(() => t(void 0)),
          ),
          e.filter(
            (t) =>
              !t.context ||
              !this.t.shouldIgnoreUri(
                this.j.resolveRelativePath(t.context.relativeWorkspacePath),
              ),
          )
        )
      }
      getTrimmedConversation(e, t) {
        const s = t ? e.slice(0, e.findIndex((n) => n.bubbleId === t) + 1) : e
        return s.at(-1)?.type !== fs.HUMAN || s.at(-1)?.text.length === 0 ? [] : s
      }
      async cacheRankedFiles(e) {
        if (!this.C()) return
        const t = new jB({
          ...e.composerRequest,
          conversation: this.getTrimmedConversation(
            e.composerRequest.conversation ?? [],
            e.bubbleId,
          ),
        })
        if (t.conversation.length === 0) return
        const s = this.w(e.composerId, t.conversation.length),
          n = performance.now()
        if (!this.g.find((o) => o.cacheKey === s && n - o.timestamp < gYn))
          try {
            const o = await this.getRankedFilesInternal({
              ...e,
              composerRequest: t,
              cacheKey: s,
            })
            this.z(s, o)
          } catch (o) {
            console.warn("Failed to cache ranked files:", o)
          }
      }
      async getRankedFilesInternal(e) {
        const t = new jB(e.composerRequest),
          s = new AbortController(),
          n = {
            abortController: s,
            timestamp: performance.now(),
            cacheKey: e.cacheKey,
          }
        this.g.push(n),
          this.g.length > QFt &&
            (this.g.sort((o, a) => a.timestamp - o.timestamp),
            this.g.slice(QFt).forEach((o) => {
              o.abortController.abort()
            }),
            (this.g = this.g.slice(0, QFt)))
        try {
          const r = await this.getAllFiles({ request: t })
          if (r === void 0) return []
          const a = (await this.q.aiClient()).getRankedContextFromContextBank(
              new v$i({ composerRequest: t, contextToRank: r }),
              { signal: s.signal },
            ),
            l = []
          for await (const h of a) l.push(...h.rankedContext)
          return s.signal.aborted ? [] : l.slice(0, e.numberOfChunks)
        } finally {
          const r = this.g.findIndex((o) => o === n)
          r !== -1 && this.g.splice(r, 1)
        }
      }
      async getAllFiles({ request: e }) {
        const t = [
            this.getContextFromFiles(e),
            this.getContextFromSemanticSearch(e),
          ],
          [s, n] = await Promise.all(t),
          r = n
            .filter(
              (o) =>
                !s.some(
                  (a) => a.relativeWorkspacePath === o.relativeWorkspacePath,
                ),
            )
            .slice(0, pYn)
        return [...s, ...r]
      }
      async getContextFromFiles(e) {
        const s = e.conversation
          .map((d) => d.attachedCodeChunks.map((g) => g.relativeWorkspacePath))
          .flat()
          .filter((d, g, p) => p.findIndex((m) => m === d) === g && d !== void 0)
          .map((d) => {
            let g = Promise.resolve([])
            return (
              (g = this.h.getRelatedFiles({
                uri: this.j.resolveRelativePath(d),
                maxNumFiles: 5,
              })),
              g
            )
          })
        let n = []
        try {
          const d = new Promise((g, p) => {
            setTimeout(() => p(new Error("Context graph timeout")), 1e3)
          })
          n = await Promise.race([Promise.all(s), d])
        } catch (d) {
          console.warn("Failed to get context graph files:", d), (n = [])
        }
        const r = n
          .flat()
          .reduce((d, { uri: g, weight: p }) => {
            const m = d.findIndex((b) => ys.isEqual(b.uri, g))
            return m >= 0 ? (d[m].weight += p) : d.push({ uri: g, weight: p }), d
          }, [])
          .sort((d, g) => g.weight - d.weight)
          .slice(0, 7)
        let o = []
        try {
          o = this.m.getRecentlyViewedFiles(7)
        } catch (d) {
          console.warn("Failed to get recently viewed files:", d), (o = [])
        }
        const l = [
            ...r.map((d) => this.j.asRelativePath(d.uri)),
            ...o.map((d) => d.relativePath),
          ]
            .filter((d, g, p) => p.findIndex((m) => m === d) === g)
            .filter((d) => d !== void 0)
            .filter(
              (d) =>
                !e.conversation.some((g) =>
                  g.attachedCodeChunks
                    .map((p) => p.relativeWorkspacePath)
                    .includes(d),
                ),
            ),
          c = (
            await Promise.all(
              l.map(async (d) => {
                let g
                try {
                  g = await this.n.createModelReference(
                    this.j.resolveRelativePath(d),
                  )
                  const m = g.object.textEditorModel.getValue()
                  return m.split(`
  `).length > vYn
                    ? void 0
                    : new mVe({ relativeWorkspacePath: d, contents: m })
                } catch (p) {
                  console.warn(`Unable to read file '${d}':`, p)
                  return
                } finally {
                  g?.dispose()
                }
              }),
            )
          ).filter((d) => d !== void 0)
        let h = 0
        const u = []
        for (const d of c)
          if (
            (u.push(d),
            (h +=
              d.contents.split(`
  `).length / bYn),
            h > mYn)
          )
            break
        return u
      }
      async getContextFromSemanticSearch(e) {
        const t = e.conversation.at(-1)?.text ?? ""
        let s = []
        if (t !== "") {
          const r = new AbortController()
          try {
            const o = new Promise((a, l) => {
              setTimeout(() => l(new Error("Semantic search timeout")), 1e3)
            })
            s = await Promise.race([
              this.s.parallelSearch(t, 30, 30, {
                fast: !0,
                raceNRequests: 6,
                abortSignal: r.signal,
              }),
              o,
            ])
          } catch (o) {
            console.warn("Failed to perform semantic search:", o), r.abort()
          }
        }
        const n = []
        for (const r of s) {
          const o = r.codeBlock
          o !== void 0 &&
            n.push(
              new mVe({
                relativeWorkspacePath: o.relativeWorkspacePath,
                contents: o.contents,
                codeBlock: o,
              }),
            )
        }
        return n
      }
      async F(e) {
        const t = new Set(e.map((n) => n.context.relativeWorkspacePath)),
          s = []
        for (const n of t) {
          let r
          try {
            r = await this.n.createModelReference(this.j.resolveRelativePath(n))
            const a = r.object.textEditorModel.getValue(),
              l = e.filter((c) => c.context.relativeWorkspacePath === n)
            for (const c of l) {
              const h = c.detailedLines
                .filter((u) => !u.isSignature)
                .sort((u, d) => u.lineNumber - d.lineNumber)
                .map((u) => u.text).join(`
  `)
              a.includes(h) && s.push(c.context)
            }
          } catch (o) {
            console.warn(`Unable to read file '${n}':`, o)
          } finally {
            r?.dispose()
          }
        }
        return s
      }
    }
  ;(ZFt = __decorate(
    [
      __param(0, tK),
      __param(1, it),
      __param(2, M_),
      __param(3, Xt),
      __param(4, Br),
      __param(5, Md),
      __param(6, selectedContextService),
      __param(7, aiFeatureStatusService),
    ],
    ZFt,
  )),
    Ve(uue, ZFt, 0)
  function WKi(i) {
    return i.getEditorState().read(() => {
      const e = Wr()
      if (!Xn(e)) return !1
      const t = e.anchor,
        s = e.focus
      if (t.key !== s.key || t.offset !== s.offset) return !1
      const n = t.getNode()
      if (t.offset !== 0) return !1
      if (n === Vu().getFirstChild()) return !0
      let r = n.getPreviousSibling()
      for (; r; ) {
        if (r.getTextContent().trim() !== "") return !1
        r = r.getPreviousSibling()
      }
      return !0
    })
  }
  var due = () => bt.vscodeWindowId !== ss()?.vscodeWindowId,
    yYn = async (i) => {
      const e = await i.getInstalled()
      for (const t of e) if (t.identifier.id === "vscodevim.vim") return !0
      return !1
    },
    wYn = (i) => {
      const e = i.statusbarService.getViewModel()
      let t = !1,
        s = !1
      for (const n of [...e.getEntries(0), ...e.getEntries(1)])
        if (n.id === "vscodevim.vim.primary") {
          ;(t = !0),
            ["NORMAL"].some((r) => n.container.innerText.includes(r)) && (s = !0)
          break
        }
      return { didFindVimStatusbar: t, isInNormalMode: s }
    }
  function eOt(i) {
    const e = Date.now(),
      t = Math.floor((e - i) / 1e3)
    return t < 60
      ? `${t} seconds ago`
      : t < 3600
        ? `${Math.floor(t / 60)} minutes ago`
        : t < 86400
          ? `${Math.floor(t / 3600)} hours ago`
          : `${Math.floor(t / 86400)} days ago`
  }
  var wY = Re("terminalExecutionService"),
    cS = Re("composerViewsService"),
    DYe = class {
      getCount() {
        return this.a
      }
      constructor(i, e) {
        ;(this.d = i),
          (this.a = 0),
          (this.b = []),
          (this.c = e ?? new AbortController().signal)
      }
      async withSemaphore(i, e) {
        await this.acquire()
        const t = Date.now()
        try {
          return this.c.aborted ? Promise.reject("Aborted") : await i()
        } finally {
          this.release(), e && e(Date.now() - t)
        }
      }
      async withRetrySemaphore(i, e, t = 3) {
        if (this.c.aborted) return Promise.reject("Aborted")
        for (let s = 1; s < t; s++)
          try {
            return await this.withSemaphore(i, e)
          } catch {
            await new Promise((r) => setTimeout(r, 200 * s))
          }
        return await this.withSemaphore(i)
      }
      take() {
        if (this.b.length > 0 && this.a < this.d) {
          this.a++
          const i = this.b.shift()
          i && i.resolve()
        }
      }
      acquire() {
        return this.a < this.d
          ? (this.a++,
            new Promise((i) => {
              i()
            }))
          : new Promise((i, e) => {
              this.b.push({ resolve: i, err: e })
            })
      }
      release() {
        this.a--, this.take()
      }
      purge() {
        const i = this.b.length
        for (let e = 0; e < i; e++) this.b[e].err("Task has been purged.")
        return (this.a = 0), (this.b = []), i
      }
    },
    tOt = class extends DYe {
      constructor() {
        super(1)
      }
    },
    qKi = 1024 * 1024,
    CYn = 4,
    SYn = 50,
    xYn = 100
  async function jKi(i, e, t) {
    let s
    try {
      s = await e.resolve(i, { resolveMetadata: !0 })
    } catch (h) {
      throw new Error(`Could not resolve URI: ${h}`)
    }
    const n = await t.filterCursorIgnoredFiles(s.children || [], (h) =>
      U.joinPath(i, h.name),
    )
    if (!s.isDirectory || !n) throw new Error("URI is not a directory.")
    if (n.length === 0) return new Ioe({ files: [] })
    const r = n.sort((h, u) => (u.mtime || 0) - (h.mtime || 0)).slice(0, xYn),
      o = r
        .filter((h) => !h.isDirectory && h.size !== void 0 && h.size <= qKi)
        .slice(0, SYn),
      a = new Set(o.map((h) => h.name)),
      l = new UE(CYn),
      c = await Promise.all(
        r.map(async (h) => {
          const u = U.joinPath(i, h.name)
          let d
          return (
            a.has(h.name) && (d = await l.queue(async () => kYn(u, h.size, e))),
            {
              name: h.name,
              isDirectory: h.isDirectory,
              size: h.size !== void 0 ? BigInt(h.size) : void 0,
              lastModified: h.mtime
                ? new PSt({ seconds: BigInt(Math.floor(h.mtime / 1e3)) })
                : void 0,
              numChildren: h.children?.length,
              numLines: d,
            }
          )
        }),
      )
    return new Ioe({ files: c, directoryRelativeWorkspacePath: i.path })
  }
  async function kYn(i, e, t) {
    if (!(e === void 0 || e > qKi))
      try {
        const n = (await t.readFile(i)).value.toString()
        return (n.match(/\n/g) || []).length + (n.length > 0 ? 1 : 0)
      } catch (s) {
        console.warn("Failed to count lines:", s)
        return
      }
  }
  var zKi = { shouldGracefullyFallBackOnTimeout: !0 },
    EYn = 5,
    TYe = 2,
    q1 = Re("composerUtilsService"),
    Xa = class extends V {
      constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y, w) {
        super(),
          (this._composerDataService = e),
          (this._aiService = t),
          (this._workspaceContextService = s),
          (this._editorService = n),
          (this._editorWorkerService = r),
          (this._fileService = o),
          (this._everythingProviderService = a),
          (this._repositoryService = l),
          (this._gitGraphService = c),
          (this._selectedContextService = h),
          (this._reactiveStorageService = u),
          (this._textModelService = d),
          (this._aiTaskService = g),
          (this._historyService = p),
          (this._aiFeatureStatusService = m),
          (this._instantiationService = b),
          (this._commandService = y),
          (this._cursorRulesService = w),
          (this._gitIgnoreFile = null),
          (this._composerDiffCache = new yo(50)),
          (this._composerDiffSemaphore = new DYe(5)),
          (this._onShouldResetCodeBlockCount = this.D(new R())),
          (this.onShouldResetCodeBlockCount =
            this._onShouldResetCodeBlockCount.event),
          this.D(
            this._reactiveStorageService.onChangeEffectManuallyDisposed({
              deps: [
                () => {
                  const C =
                    this._composerDataService.allComposersData
                      .selectedComposerHandle
                  if (C) return C.data.editingBubbleId
                },
              ],
              onChange: ({ deps: C, prevDeps: S }) => {
                const x = C[0],
                  k = S?.[0]
                if (x !== void 0 || !k) return
                const E =
                  this._composerDataService.allComposersData
                    .selectedComposerHandle?.data
                if (!E) return
                const D = E.conversation.findIndex((A) => A.bubbleId === k)
                if (D === -1 || D >= E.conversation.length - 1) return
                const P = E.conversation[D + 1]
                P.type !== fs.AI ||
                  P.capabilityType !== ls.TOOL_FORMER ||
                  E.conversation[D].text.trim() !== "" ||
                  this._composerDataService.updateComposerDataSetStore(
                    E.composerId,
                    (A) =>
                      A("conversation", (F) => F.filter((H) => H.bubbleId !== k)),
                  )
              },
            }),
          ),
          this.initializeGitIgnoreFile()
      }
      async getContentsOfFile(e, t) {
        if (!(await this._fileService.exists(t))) return null
        let n
        try {
          return (
            (n = await this._textModelService.createModelReference(t)),
            n.object.textEditorModel.getLinesContent()
          )
        } catch (r) {
          return (
            console.error("[composer] error getting content of file", t, r), null
          )
        } finally {
          n?.dispose()
        }
      }
      getSupportedTools(e) {
        return [
          jt.READ_FILE_FOR_IMPORTS,
          jt.READ_SEMSEARCH_FILES,
          jt.RIPGREP_SEARCH,
          jt.RUN_TERMINAL_COMMAND,
          jt.READ_FILE,
          jt.LIST_DIR,
          jt.EDIT_FILE,
          jt.FILE_SEARCH,
          jt.SEMANTIC_SEARCH_FULL,
          jt.CREATE_FILE,
          jt.DELETE_FILE,
          jt.REAPPLY,
          jt.GET_RELATED_FILES,
          jt.PARALLEL_APPLY,
          jt.PLANNER,
          jt.MCP,
        ]
      }
      async ensureCapabilitiesAreLoaded(e) {
        const t = await this._composerDataService.getComposerHandleById(e)
        if (t !== void 0)
          try {
            if (t.data.capabilities.length > 0) return
            const n = Mae(
              this._instantiationService,
              this._reactiveStorageService,
              e,
            )
            if (n.length === 0)
              throw new Error(
                `[composer] No capabilities found for composer ${e}`,
              )
            t.setData({ capabilities: n })
          } finally {
            t.dispose()
          }
      }
      async getShouldChatUseTools() {
        return (
          await this._aiFeatureStatusService
            .maybeRefreshFeatureStatus("chatUsesTools")
            .catch(() => {}),
          !!this._aiFeatureStatusService.getCachedFeatureStatus("chatUsesTools")
        )
      }
      getShouldAutoSaveAgenticEdits() {
        return !0
      }
      replacedBubbleForParallelApply(e, t, s) {
        if (e.additionalData === void 0) return s
        const n = `${t.uri}-${t.version}`,
          { codeBlockData: r } = e.additionalData
        if (r[n] === void 0) return s
        const o = r[n]
        return new Ha({ ...s, text: o.response })
      }
      replacedBubbleForEdit(e, t, s) {
        if (e.additionalData === void 0) return s
        const { instructions: n } = e.additionalData
        if (n === void 0) return s
        let r = ""
        n !== void 0 &&
          (r += `${n}

  `)
        let o
        try {
          o = this._workspaceContextService.asRelativePath(t.uri)
        } catch {
          o = t.uri.fsPath
        }
        return (
          (r += `\`\`\`${o}
  ${t.content}
  \`\`\``),
          new Ha({ ...s, text: r })
        )
      }
      replacedBubbleForFastEdit(e, t, s) {
        const n = this._composerDataService.getComposerCapability(
          e,
          ls.TOOL_FORMER,
        )
        if (n === void 0) return t
        const r = n.getBubbleData(t.bubbleId)
        return r
          ? r.tool === jt.EDIT_FILE
            ? this.replacedBubbleForEdit(r, s, t)
            : r.tool === jt.PARALLEL_APPLY
              ? this.replacedBubbleForParallelApply(r, s, t)
              : t
          : t
      }
      isAgenticComposer(e) {
        return this._composerDataService.getComposerIsAgentic(e)
      }
      processConversationForFastEdit(e, t, s) {
        const n = t.findIndex(
            (l) =>
              l.type === fs.AI &&
              l.codeBlocks?.some(
                (c) => c.version === s.version && dC(c.uri, s.uri),
              ),
          ),
          o = t.slice(0, n + 1).map((l, c) => {
            if (l.type === fs.AI && c !== n) {
              const h = l.text.replace(/```[\s\S]*?```/g, "[old_code]")
              return new Ha({ ...l, text: h })
            }
            return new Ha(l)
          }),
          a = t.at(n)
        if (a.capabilityType === ls.TOOL_FORMER) {
          const l = this.replacedBubbleForFastEdit(e, a, s)
          o[o.length - 1] = l
        }
        return o
      }
      async populateCodeChunksInConversation(e, t = !1) {
        const s = new Map()
        return (
          e.forEach((n, r) => {
            if (n.type !== fs.HUMAN || !n.context) return
            const { fileSelections: o } = n.context
            for (const a of o || [])
              try {
                const l = $I(a)
                s.set(l, r)
              } catch (l) {
                console.error(`Error processing file selection: ${l}`)
              }
          }),
          await Promise.all(
            e.map(async (n, r) => {
              if (n.type !== fs.HUMAN || !n.context) return n
              const { fileSelections: o, selections: a } = n.context
              let l = [...(n.attachedCodeChunks || [])]
              for (const c of o || [])
                try {
                  const h = $I(c)
                  if (
                    !l.some(
                      (u) =>
                        u.relativeWorkspacePath ===
                          this._workspaceContextService.asRelativePath(
                            U.parse(h),
                          ) &&
                        (u.intent === ev.COMPOSER_FILE ||
                          u.intent === ev.MENTIONED_FILE),
                    )
                  ) {
                    const u = s.get(h) === r
                    if (t || u) {
                      const d = this._selectedContextService.getMentions(
                        n.context,
                        "fileSelections",
                        c,
                      )
                      if (t && c.autoContext && d.length === 0) continue
                      const g =
                        await this._selectedContextService.getCodeChunksFromFileSelections(
                          [c],
                          { context: n.context },
                        )
                      l.push(...g)
                    } else {
                      const g =
                        this._selectedContextService.getMentions(
                          n.context,
                          "fileSelections",
                          c,
                        ).length > 0
                          ? ev.MENTIONED_FILE
                          : ev.COMPOSER_FILE
                      l.push(
                        new _T({
                          relativeWorkspacePath:
                            this._workspaceContextService.asRelativePath(
                              U.parse(h),
                            ),
                          startLineNumber: 1,
                          lines: [],
                          contentsAreMissing: !0,
                          summarizationStrategy: N$.NONE_UNSPECIFIED,
                          intent: g,
                        }),
                      )
                    }
                  }
                } catch (h) {
                  console.error(`Error processing file selection: ${h}`)
                }
              for (const c of a || [])
                try {
                  if (
                    !l.some((h) =>
                      this._selectedContextService.isCodeChunkEqualToSelection(
                        h,
                        c,
                      ),
                    )
                  ) {
                    const h =
                      await this._selectedContextService.getCodeChunksFromCodeSelection(
                        c,
                        {},
                      )
                    h && l.push(h)
                  }
                } catch (h) {
                  console.error(`Error processing code selection: ${h}`)
                }
              return { ...n, attachedCodeChunks: l }
            }),
          )
        )
      }
      async populateRedDiffsInConversation(e) {
        try {
          const t = new Map()
          return (
            e.forEach((n, r) => {
              n.type === fs.HUMAN &&
                n.attachedCodeChunks.forEach((o) => {
                  const { relativeWorkspacePath: a, contentsAreMissing: l } = o,
                    c = o.lines.join(`
  `)
                  !t.has(a) &&
                    this.codeChunkHasFullFileIntent(o) &&
                    !l &&
                    t.set(a, { content: c, messageIndex: r })
                })
            }),
            await Promise.all(
              e.map(async (n, r) => {
                const o = n.diffsForCompressingFiles,
                  a = (
                    await Promise.allSettled(
                      n.attachedCodeChunks.map(async (l) => {
                        if (
                          !this.codeChunkHasFullFileIntent(l) ||
                          l.contentsAreMissing === !0
                        )
                          return
                        const c = l.relativeWorkspacePath,
                          h = t.get(l.relativeWorkspacePath)
                        if (h === void 0 || h.messageIndex >= r) return
                        const { content: u } = h,
                          d = l.lines.join(`
  `),
                          g = o.find(
                            (w) =>
                              w.relativeWorkspacePath === l.relativeWorkspacePath,
                          )
                        if (g !== void 0 && r < e.length - 1) return g
                        const p = await s9e(u),
                          m = await s9e(d),
                          b = e
                            .slice(0, r)
                            .flatMap((w) =>
                              w.diffsForCompressingFiles.filter(
                                (C) => C.startHash === p && C.endHash === m,
                              ),
                            )
                            ?.at(-1)
                        if (b) return b
                        const y = await this.computeLinesDiffWithSemaphore({
                          first: u,
                          second: d,
                          options: {
                            ignoreTrimWhitespace: !1,
                            computeMoves: !1,
                            maxComputationTimeMs: 500,
                            ...zKi,
                          },
                        })
                        if (!y.hitTimeout)
                          return {
                            relativeWorkspacePath: c,
                            redRanges: y.changes.map((w) => ({
                              startLine: w.original.startLineNumber,
                              endLineInclusive:
                                w.original.endLineNumberExclusive - 1,
                            })),
                            redRangesReversed: y.changes.map((w) => ({
                              startLine: w.modified.startLineNumber,
                              endLineInclusive:
                                w.modified.endLineNumberExclusive - 1,
                            })),
                            startHash: p,
                            endHash: m,
                          }
                      }),
                    )
                  ).flatMap((l) =>
                    l.status === "fulfilled" && l.value !== void 0
                      ? [l.value]
                      : [],
                  )
                return { ...n, diffsForCompressingFiles: a }
              }),
            )
          )
        } catch {
          return e
        }
      }
      async getRecentEdits(e) {
        try {
          const t = this._composerDataService.getComposerData(e)
          if (!t) throw new Error("No composer data found")
          const { conversation: s, codeBlockData: n } = t,
            r = s.at(-1)?.type === fs.AI ? s.at(-1) : s.at(-2)
          if (r?.type !== fs.AI) return
          const a = (r.codeBlocks ?? [])
              .map((h) => {
                const u = n[h.uri.toString()].find((d) => d.version === h.version)
                if (u) return u
              })
              .filter(bn)
              .sort((h, u) => u.version - h.version)
              .map((h) => {
                const u = this.getCodeBlockOriginalModelLines(
                    e,
                    h.uri,
                    h.version,
                  ),
                  d = this.getCodeBlockNewModelLines(e, h.uri, h.version)
                return {
                  relativeWorkspacePath:
                    this._workspaceContextService.asRelativePath(h.uri),
                  contentBefore: u?.join(`
  `),
                  contentAfter: d?.join(`
  `),
                  generationUuid: h.latestApplyGenerationUUID,
                  version: h.version,
                }
              }),
            l = [...new Set(a.map((h) => h.relativeWorkspacePath))],
            c = (
              await Promise.all(
                l.map(async (h) => {
                  const u = await this._aiService.getCurrentFileInfo(
                    this._workspaceContextService.resolveRelativePath(h),
                    { actuallyReadFromOverrideURI: !0 },
                  )
                  if (u) return { relativeWorkspacePath: h, content: u.contents }
                }),
              )
            ).filter(bn)
          return {
            codeBlockInfo: a,
            finalFileValues: c,
            editsBelongToComposerGenerationUuid: t.latestChatGenerationUUID,
          }
        } catch {
          return
        }
      }
      async getRecentlyViewedFileInfo(e) {
        const t = await e,
          s = [...this._historyService.getHistory()].flatMap((g) => {
            const p = g.resource
            if (
              !p ||
              (!this._fileService.hasProvider(p) &&
                p.scheme !== ce.untitled &&
                p.scheme !== ce.vscodeTerminal &&
                p.scheme !== ce.aiChat)
            )
              return []
            const m = this._workspaceContextService.asRelativePath(p)
            return m
              ? this._selectedContextService.shouldIgnoreUri(p)
                ? []
                : [{ relativeWorkspacePath: m, uri: p }]
              : []
          }),
          n = 3,
          r = 20,
          o = 4e3,
          a = t
            .filter((g) => this.codeChunkHasFullFileIntent(g))
            .map((g) => g.relativeWorkspacePath),
          l = s
            .map(({ relativeWorkspacePath: g }) => g)
            .filter((g) => !a.includes(g))
            .slice(0, n),
          h = (
            await Promise.allSettled(
              s.map(async ({ relativeWorkspacePath: g, uri: p }) => {
                if (a.includes(g))
                  return t
                    .filter(
                      (w) =>
                        w.relativeWorkspacePath === g &&
                        this.codeChunkHasFullFileIntent(w),
                    )
                    .map(
                      (w) =>
                        new _T({ ...w, contentsAreMissing: !0, lines: void 0 }),
                    )
                if (
                  !l.includes(g) ||
                  (await this._fileService.stat(p)).size > 5e5
                )
                  return [
                    new _T({ relativeWorkspacePath: g, contentsAreMissing: !0 }),
                  ]
                const y =
                  await this._selectedContextService.getCodeChunksFromFileSelections(
                    [{ uri: p }],
                  )
                for (const w of y) w.lines = w.lines.slice(0, o)
                return y
              }),
            )
          )
            .flatMap((g) => (g.status === "fulfilled" ? g.value : []))
            .map((g) => new _T({ ...g, intent: ev.RECENTLY_VIEWED_FILE }))
            .slice(0, r)
        return {
          recentLocationsHistory: this._historyService
            .getRecentLocations(50)
            .flatMap((g) => {
              const p = this._workspaceContextService.asRelativePath(g.uri)
              return s.some((m) => p === m.relativeWorkspacePath)
                ? [
                    new BMi({
                      relativeWorkspacePath: p,
                      lineNumber: g.location.startLineNumber,
                    }),
                  ]
                : []
            }),
          recentlyViewedFiles: h,
        }
      }
      async *handleStreamComposer(e) {
        let t = !1
        for await (const s of e.streamer) {
          const n = this._composerDataService.getComposerData(e.composerId)
          if (!n) continue
          const r = n.conversation[n.conversation.length - 1],
            o = [...n.conversation].reverse().find((a) => a.type === fs.HUMAN)
          if (
            ("conversationSummary" in s &&
              s.conversationSummary &&
              r !== void 0 &&
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "conversationSummary",
                    s.conversationSummary,
                  ),
              ),
            "serverBubbleId" in s &&
              s.serverBubbleId &&
              typeof s.serverBubbleId == "string" &&
              s.serverBubbleId !== "" &&
              r !== void 0 &&
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "serverBubbleId",
                    s.serverBubbleId,
                  ),
              ),
            s !== null &&
              typeof s == "object" &&
              "webCitation" in s &&
              s.webCitation !== void 0 &&
              s.webCitation !== null &&
              r &&
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "webCitations",
                    s.webCitation?.references ?? [],
                  ),
              ),
            s !== null &&
              typeof s == "object" &&
              "docsReference" in s &&
              s.docsReference !== void 0 &&
              s.docsReference !== null &&
              r &&
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "docsCitations",
                    (l) => [...(l ?? []), s.docsReference],
                  ),
              ),
            s !== null &&
              typeof s == "object" &&
              "statusUpdates" in s &&
              s.statusUpdates !== void 0 &&
              s.statusUpdates !== null &&
              r &&
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "statusUpdates",
                    s.statusUpdates,
                  ),
              ),
            s !== null &&
              typeof s == "object" &&
              "serviceStatusUpdate" in s &&
              s.serviceStatusUpdate !== void 0 &&
              s.serviceStatusUpdate !== null &&
              r &&
              (this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (a) =>
                  a(
                    "conversation",
                    (l) => l.bubbleId === r.bubbleId,
                    "serviceStatusUpdate",
                    s.serviceStatusUpdate,
                  ),
              ),
              s.serviceStatusUpdate.actionToRunOnStatusUpdate))
          )
            try {
              this._commandService.executeCommand(
                s.serviceStatusUpdate.actionToRunOnStatusUpdate,
              )
            } catch (a) {
              console.error(
                `[composer] error running action ${s.serviceStatusUpdate.actionToRunOnStatusUpdate}`,
                a,
              )
            }
          if (
            s !== null &&
            typeof s == "object" &&
            "usedCode" in s &&
            s.usedCode !== void 0 &&
            s.usedCode !== null &&
            s.usedCode.codeResults &&
            r &&
            o
          ) {
            const a = s.usedCode
            this._composerDataService.updateComposerDataSetStore(
              e.composerId,
              (l) =>
                l(
                  "conversation",
                  (c) => c.bubbleId === o.bubbleId,
                  "codebaseContextChunks",
                  a.codeResults.map((c) => c.codeBlock).filter(bn),
                ),
            ),
              this._composerDataService.updateComposerDataSetStore(
                e.composerId,
                (l) =>
                  l(
                    "conversation",
                    (c) => c.bubbleId === r.bubbleId,
                    "statusUpdates",
                    { updates: [] },
                  ),
              )
          }
          if (
            s !== null &&
            typeof s == "object" &&
            "symbolLink" in s &&
            s.symbolLink !== void 0 &&
            s.symbolLink !== null &&
            r
          ) {
            const a = s.symbolLink
            this._composerDataService.updateComposerDataSetStore(
              e.composerId,
              (l) =>
                l(
                  "conversation",
                  (c) => c.bubbleId === r.bubbleId,
                  "symbolLinks",
                  (c) => (c ? [...c, a] : [a]),
                ),
            )
          }
          if (
            s !== null &&
            typeof s == "object" &&
            "fileLink" in s &&
            s.fileLink !== void 0 &&
            s.fileLink !== null &&
            r
          ) {
            const a = s.fileLink
            this._composerDataService.updateComposerDataSetStore(
              e.composerId,
              (l) =>
                l(
                  "conversation",
                  (c) => c.bubbleId === r.bubbleId,
                  "fileLinks",
                  (c) => (c ? [...c, a] : [a]),
                ),
            )
          }
          s !== null &&
            typeof s == "object" &&
            "viewableGitContext" in s &&
            s.viewableGitContext !== void 0 &&
            s.viewableGitContext !== null &&
            r &&
            this._composerDataService.updateComposerDataSetStore(
              e.composerId,
              (a) =>
                a(
                  "conversation",
                  (l) => l.bubbleId === r.bubbleId,
                  "gitContext",
                  s.viewableGitContext,
                ),
            ),
            yield s,
            t === !1 &&
              (s.text?.length ?? 0) > 0 &&
              ((t = !0),
              console.log(`[composer] ttft is ${Date.now() - e.startTime}ms`))
        }
      }
      intermediateChunkMiddleware(e, t, s) {
        const n = () => {
          this._composerDataService.updateComposerDataSetStore(t, (l) =>
            l("conversation", (c) => c.bubbleId === s, "intermediateChunks", []),
          )
        }
        n()
        const r = (l) => {
          this._composerDataService.updateComposerDataSetStore(t, (c) =>
            c(
              "conversation",
              (h) => h.bubbleId === s,
              "intermediateSectionType",
              l,
            ),
          )
        }
        r()
        const o = (l, c) => {
          const h = this._composerDataService.getComposerBubble(
              t,
              s,
            )?.intermediateSectionType,
            u =
              c.chunkType === hk.CODEBASE
                ? "codebase"
                : c.chunkType === hk.LONG_FILE
                  ? "long-file"
                  : "docs"
          h !== u && n(), r(u)
          const d = this._composerDataService.getComposerBubble(t, s)
          if (d === void 0) return
          let g = d.intermediateChunks ?? []
          const p = (w, C) =>
            w.startLine === C.startLine && w.fileName === C.fileName
          let m = g.findIndex((w) => p(w.chunkIdentity, c))
          m === -1 && (m = g.length)
          const b = g.find((w) => p(w.chunkIdentity, c))
          g = [...g.filter((w) => !p(w.chunkIdentity, c))]
          const y = {
            chunkIdentity: b?.chunkIdentity ?? c,
            completeText: (b?.completeText ?? "") + l,
          }
          g.splice(m, 0, y),
            this._composerDataService.updateComposerDataSetStore(t, (w) =>
              w("conversation", (C) => C.bubbleId === s, "intermediateChunks", g),
            )
        }
        return (async function* () {
          for await (const l of e)
            l !== null &&
              typeof l == "object" &&
              "isBigFile" in l &&
              l.isBigFile &&
              r("long-file"),
              l !== null &&
                typeof l == "object" &&
                "chunkIdentity" in l &&
                l.chunkIdentity !== void 0 &&
                o(l.intermediateText ?? "", l.chunkIdentity),
              yield l
        })()
      }
      async getAutoContextFiles(e) {
        const t = this._composerDataService.getComposerData(e)
        if (!t) return []
        const s = await this._repositoryService
            .parallelSearch(t.text, 30, 10, {
              fast: !0,
              abortSignal: void 0,
              raceNRequests: 6,
            })
            .then((c) =>
              c
                .map((h) =>
                  h.codeBlock
                    ? {
                        uri: this._workspaceContextService.resolveRelativePath(
                          h.codeBlock.relativeWorkspacePath,
                        ),
                        score: h.score,
                      }
                    : void 0,
                )
                .filter((h) => ({ uri: h?.uri, score: h?.score }) !== void 0),
            ),
          n = new Set(),
          r = []
        for (const c of s) {
          const h = $I(c)
          n.has(h) || (n.add(h), r.push(c))
        }
        r.sort((c, h) => h.score - c.score)
        const o = []
        for (const c of r) {
          const h = U.revive(c.uri)
          o.push({
            relativeWorkspacePath:
              this._workspaceContextService.asRelativePath(h),
            fileContent: await this.readFileContents(h),
          })
        }
        const a = await this._aiService.aiClient(),
          { rankedFiles: l } = await a.autoContext({
            text: t.text,
            candidateFiles: o,
          })
        return l.map((c) => ({
          uri: this._workspaceContextService.resolveRelativePath(
            c.relativeWorkspacePath,
          ),
          score: c.rerankingScore,
        }))
      }
      async readFileContents(e) {
        return (await this._fileService.readFile(e)).value.toString()
      }
      async populateConversationWithExtraContext(e, t, s) {
        s = { ...(s ?? {}), disableImageRemoval: !1 }
        const n = new Map()
        return (
          e.forEach((r, o) => {
            if (r.type !== fs.AI) {
              const a =
                o === e.length - 1
                  ? (s?.lastBubbleContext ?? r.context)
                  : r.context
              if (a?.notepads) for (const l of a.notepads) n.set(l.notepadId, o)
            }
          }),
          await Promise.all(
            e.map(async (r, o) => {
              if (r.type !== fs.AI) {
                let a = r.context
                s.lastBubbleContext &&
                  o === e.length - 1 &&
                  (a = s.lastBubbleContext)
                const l = a?.selectedCommits
                    ? this._selectedContextService.getCommitDetailsFromPartialCommits(
                        a.selectedCommits,
                      )
                    : [],
                  c = a?.selectedPullRequests
                    ? this._selectedContextService.getPullRequestDetailsFromPartialPullRequests(
                        a.selectedPullRequests,
                      )
                    : [],
                  h =
                    a?.gitDiff || a?.gitDiffFromBranchToMain
                      ? this._selectedContextService.getDiffDetailsFromGitDiff({
                          gitDiff: a.gitDiff,
                          gitDiffFromBranchToMain: a.gitDiffFromBranchToMain,
                        })
                      : [],
                  u = a?.notepads
                    ? this._selectedContextService.getNotepadsContext({
                        ...a,
                        notepads: a.notepads.filter(
                          (A) => n.get(A.notepadId) === o,
                        ),
                      })
                    : [],
                  d = a?.composers
                    ? this._selectedContextService.getComposersContext(a)
                    : [],
                  g = a?.cursorRules
                    ? (async () =>
                        a.cursorRules
                          ? (await this._cursorRulesService.refresh(),
                            (
                              await Promise.all(
                                a.cursorRules.map(async (F) => {
                                  const H = this._cursorRulesService.getRule(
                                    F.filename,
                                  )
                                  if (H)
                                    return new iG({
                                      name: H.filename,
                                      description: H.description,
                                      body: H.body,
                                    })
                                }),
                              )
                            ).filter((F) => F !== void 0))
                          : [])()
                    : Promise.resolve([]),
                  p = a?.selectedImages
                    ? Promise.all(
                        a.selectedImages.map(async (A) => {
                          try {
                            return await ize(
                              A,
                              () => {
                                if (!s.disableImageRemoval && s.removeContext) {
                                  const H =
                                      this._composerDataService.getComposerData(
                                        t,
                                      ),
                                    B = H?.context.selectedImages?.findIndex(
                                      (K) => K.path === A.path,
                                    ),
                                    z = H?.composerId
                                  z &&
                                    B !== void 0 &&
                                    B !== -1 &&
                                    s.removeContext({
                                      composerId: z,
                                      contextType: "selectedImages",
                                      index: B,
                                    })
                                }
                              },
                              this._fileService,
                            )
                          } catch (F) {
                            console.error(F)
                            return
                          }
                        }),
                      )
                    : [],
                  m = Promise.all(
                    (a?.folderSelections ?? []).map(async (A) => {
                      const F = this._workspaceContextService.resolveRelativePath(
                        L1(A.relativePath),
                      )
                      if (F)
                        try {
                          return await jKi(
                            F,
                            this._fileService,
                            this._selectedContextService,
                          )
                        } catch (H) {
                          console.error(
                            `Failed to list directory for ${A.relativePath}:`,
                            H,
                          )
                          return
                        }
                    }),
                  ),
                  y = this._reactiveStorageService.nonPersistentStorage
                    .composerState.shouldSimulateSlowRequestBuilding
                    ? new Promise((A) => setTimeout(A, 1e4))
                    : Promise.resolve(),
                  [w, C, S, x, k, E, D, P] = await Promise.all([
                    l,
                    c,
                    h,
                    u,
                    p,
                    m,
                    d,
                    g,
                    y,
                  ]),
                  L = k.filter((A) => A !== void 0)
                return {
                  ...r,
                  commits: w,
                  pullRequests: C,
                  gitDiffs: S,
                  notepads: x,
                  images: L,
                  summarizedComposers: D,
                  attachedFoldersListDirResults: E.filter(bn),
                  cursorRules: P,
                }
              } else {
                const a = (() => {
                  if (r.capabilityType === ls.TOOL_FORMER) {
                    const l = this._composerDataService.getComposerCapability(
                      t,
                      ls.TOOL_FORMER,
                    )
                    if (!l) return
                    const c = l.getBubbleData(r.bubbleId)
                    if (!c) return
                    let h
                    switch (c.tool) {
                      case jt.UNSPECIFIED:
                        h = new Zc({ tool: jt.UNSPECIFIED })
                        break
                      case jt.READ_SEMSEARCH_FILES:
                        h = new Zc({
                          tool: jt.READ_SEMSEARCH_FILES,
                          result:
                            c.result !== void 0
                              ? {
                                  case: "readSemsearchFilesResult",
                                  value: c.result,
                                }
                              : void 0,
                        })
                        break
                      case jt.READ_FILE_FOR_IMPORTS:
                        h = new Zc({
                          tool: jt.READ_FILE_FOR_IMPORTS,
                          result:
                            c.result !== void 0
                              ? {
                                  case: "readFileForImportsResult",
                                  value: c.result,
                                }
                              : void 0,
                        })
                        break
                      case jt.RIPGREP_SEARCH:
                        h = new Zc({
                          tool: jt.RIPGREP_SEARCH,
                          result:
                            c.result !== void 0
                              ? { case: "ripgrepSearchResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.RUN_TERMINAL_COMMAND_V2:
                        h = new Zc({
                          tool: jt.RUN_TERMINAL_COMMAND_V2,
                          result:
                            c.result !== void 0
                              ? {
                                  case: "runTerminalCommandV2Result",
                                  value: c.result,
                                }
                              : void 0,
                        })
                        break
                      case jt.READ_FILE:
                        h = new Zc({
                          tool: jt.READ_FILE,
                          result:
                            c.result !== void 0
                              ? { case: "readFileResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.LIST_DIR:
                        h = new Zc({
                          tool: jt.LIST_DIR,
                          result:
                            c.result !== void 0
                              ? { case: "listDirResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.EDIT_FILE:
                        h = new Zc({
                          tool: jt.EDIT_FILE,
                          result:
                            c.result !== void 0
                              ? { case: "editFileResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.FILE_SEARCH:
                        h = new Zc({
                          tool: jt.FILE_SEARCH,
                          result:
                            c.result !== void 0
                              ? { case: "fileSearchResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.SEMANTIC_SEARCH_FULL:
                        h = new Zc({
                          tool: jt.SEMANTIC_SEARCH_FULL,
                          result:
                            c.result !== void 0
                              ? {
                                  case: "semanticSearchFullResult",
                                  value: c.result,
                                }
                              : void 0,
                        })
                        break
                      case jt.DELETE_FILE:
                        h = new Zc({
                          tool: jt.DELETE_FILE,
                          result:
                            c.result !== void 0
                              ? { case: "deleteFileResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.CREATE_FILE:
                        h = new Zc({
                          tool: jt.CREATE_FILE,
                          result:
                            c.result !== void 0
                              ? { case: "createFileResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.REAPPLY:
                        h = new Zc({
                          tool: jt.REAPPLY,
                          result:
                            c.result !== void 0
                              ? { case: "reapplyResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.PARALLEL_APPLY:
                        h = new Zc({
                          tool: jt.PARALLEL_APPLY,
                          result:
                            c.result !== void 0
                              ? { case: "parallelApplyResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.GET_RELATED_FILES:
                        h = new Zc({
                          tool: jt.GET_RELATED_FILES,
                          result:
                            c.result !== void 0
                              ? { case: "getRelatedFilesResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.FETCH_RULES:
                        h = new Zc({
                          tool: jt.FETCH_RULES,
                          result:
                            c.result !== void 0
                              ? { case: "fetchRulesResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.PLANNER:
                        h = new Zc({
                          tool: jt.PLANNER,
                          result:
                            c.result !== void 0
                              ? { case: "plannerResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.RUN_TERMINAL_COMMAND:
                        h = new Zc({
                          tool: jt.RUN_TERMINAL_COMMAND,
                          result:
                            c.result !== void 0
                              ? {
                                  case: "runTerminalCommandResult",
                                  value: c.result,
                                }
                              : void 0,
                        })
                        break
                      case jt.WEB_SEARCH:
                        h = new Zc({
                          tool: jt.WEB_SEARCH,
                          result:
                            c.result !== void 0
                              ? { case: "webSearchResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.WEB_VIEWER:
                        h = new Zc({
                          tool: jt.WEB_VIEWER,
                          result:
                            c.result !== void 0
                              ? { case: "webViewerResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.MCP:
                        h = new Zc({
                          tool: jt.MCP,
                          result:
                            c.result !== void 0
                              ? { case: "mcpResult", value: c.result }
                              : void 0,
                        })
                        break
                      case jt.DIFF_HISTORY:
                        h = new Zc({
                          tool: jt.DIFF_HISTORY,
                          result:
                            c.result !== void 0
                              ? { case: "diffHistoryResult", value: c.result }
                              : void 0,
                        })
                        break
                      default: {
                        const u = c
                        throw new Error(`Tool ${u} is not supported`)
                      }
                    }
                    return new FMi({
                      toolCallId: c.toolCallId,
                      toolName: c.name,
                      rawArgs: c.rawArgs,
                      result: h,
                      error: c.error,
                    })
                  }
                })()
                return {
                  ...r,
                  webReferences: r.webCitations ?? [],
                  docsReferences: r.docsCitations ?? [],
                  toolResults: a ? [a] : [],
                  suggestedCodeBlocks:
                    r.codeBlocks?.map((l) => ({
                      relativeWorkspacePath:
                        this._workspaceContextService.asRelativePath(l.uri),
                    })) ?? [],
                }
              }
            }),
          )
        )
      }
      addContinuationPromptToConversation(e, t, s) {
        const n = t.text.split(`
  `),
          r = n[n.length - 1] || "",
          o = r.trim()
            ? `Continue writing exactly where you left off. Do not repeat yourself. Start your response with: ${r}`
            : "Continue your previous response. Do not repeat yourself.",
          a = [
            ...e,
            {
              ...HC(),
              text: `Your response got cut off, because you only have limited response space. ${o}`,
            },
          ],
          l = t.text
            .split(
              `
  `,
            )
            .slice(0, -1).join(`
  `)
        return (
          this._composerDataService.updateComposerDataSetStore(s, (c) =>
            c("conversation", (h) => h.bubbleId === t.bubbleId, "text", l),
          ),
          (t.text = l),
          a
        )
      }
      getUrisForCheckpoints(e) {
        const t = new Set()
        for (const s of Object.keys(e.codeBlockData)) t.add(s)
        for (const s of e.conversation)
          if (s.capabilityType === ls.TOOL_FORMER) {
            const n = this._composerDataService
              .getComposerCapability(e.composerId, ls.TOOL_FORMER)
              ?.getBubbleData(s.bubbleId)
            if (n?.tool === jt.DELETE_FILE && n.params?.relativeWorkspacePath) {
              const r = this._workspaceContextService.resolveRelativePath(
                n.params.relativeWorkspacePath,
              )
              t.add(r.toString())
            }
          }
        return t
      }
      async createCurrentCheckpoint(e, t) {
        const s = this._composerDataService.getComposerData(e)
        if (!s) throw new Error("[composer] No composer found for the given ID")
        if (this._composerDataService.getComposerForceMode(e) === "chat") return
        const n = QWe(),
          r = this.getUrisForCheckpoints(s)
        for (const o of r) {
          const a = U.parse(o)
          if (!(await this._fileService.exists(a))) {
            n.nonExistentFiles.push({ uri: a })
            continue
          }
          try {
            const l = this._composerDataService.getInlineDiff(e, a)
            if (l) {
              if ("newTextLines" in l && "originalTextLines" in l) {
                const c = l.composerMetadata?.version ?? 0,
                  h = await this.computeLineDiffs(e, a, l.originalTextLines),
                  u = await this.computeLineDiffs(e, a, l.newTextLines)
                this._composerDataService.updateComposerCodeBlock(e, a, c, {
                  newModelDiffWrtV0: u,
                  originalModelDiffWrtV0: h,
                }),
                  n.activeInlineDiffs.push({ uri: a, version: c })
              }
            } else {
              let c
              try {
                c = await this._textModelService.createModelReference(a)
                const h = c.object.textEditorModel,
                  u = await this.computeLineDiffs(e, a, h.getLinesContent())
                n.files.push({ uri: a, originalModelDiffWrtV0: u })
              } finally {
                c?.dispose()
              }
            }
          } catch (l) {
            console.error(
              `[composer] Error saving latest state for file ${o}:`,
              l,
            )
          }
        }
        if (t) {
          const o = t.files.filter(
            (a) =>
              a.isNewlyCreated &&
              !n.files.find((l) => l.uri.toString() === a.uri.toString()),
          )
          n.files.push(...o), (n.newlyCreatedFolders = [...t.newlyCreatedFolders])
        }
        return (
          (n.inlineDiffNewlyCreatedResources = {
            files: [...s.newlyCreatedFiles],
            folders: [...s.newlyCreatedFolders],
          }),
          n
        )
      }
      getCodeBlockDataFromBubbleId(e, t) {
        const s = this._composerDataService.getComposerData(e)
        if (!s) throw new Error("[composer] No composer found for the given ID")
        const n = s.conversation.findIndex((a) => a.bubbleId === t)
        if (n === -1)
          throw new Error("[composer] No bubble found with the given bubble ID")
        const r = {}
        s.conversation.slice(n).forEach((a) => {
          a.codeBlocks?.forEach((l) => {
            const c = l.uri.toString()
            ;(!(c in r) || l.version < r[c]) && (r[c] = l.version)
          })
        })
        const o = { ...s.codeBlockData }
        if (Object.keys(r).length > 0) {
          for (const [a, l] of Object.entries(r))
            if (o[a]) {
              const c = o[a].findIndex((h) => h.version === l)
              c !== -1 && (o[a] = o[a].slice(0, c)),
                o[a].length === 0 && delete o[a]
            }
        }
        return o
      }
      removeMessagesAfterBubble(e, t) {
        const s = this._composerDataService.getComposerData(e)
        if (!s || t === void 0) return
        const n = s.conversation.findIndex((c) => c.bubbleId === t)
        if (n === -1) return
        const r = this.getCodeBlockDataFromBubbleId(e, t)
        this._composerDataService.updateComposerDataSetStore(e, (c) =>
          c("currentBubbleId", void 0),
        ),
          this._composerDataService.updateComposerDataSetStore(e, (c) =>
            c("latestCheckpoint", void 0),
          )
        const o = s.conversation.slice(0, n)
        this._composerDataService.updateComposerDataSetStore(e, (c) =>
          c("conversation", o),
        )
        const a = Object.keys(s.codeBlockData).filter((c) => !(c in r))
        for (const c of a)
          this._composerDataService.updateComposerDataSetStore(e, (h) =>
            h("codeBlockData", c, void 0),
          )
        for (const c of Object.keys(r))
          this._composerDataService.updateComposerDataSetStore(e, (h) =>
            h("codeBlockData", c, r[c]),
          )
        const l = [{ type: "extra" }, { type: "composer" }]
        for (const c of Object.keys(r))
          l.push({
            type: "code",
            uri: U.parse(c),
            version: r[c][r[c].length - 1].version,
          })
        this._composerDataService.updateComposerDataSetStore(e, (c) =>
          c("tabs", l),
        )
      }
      applyDiffToLines(e, t) {
        const s = []
        let n = 0
        for (let r = 0; r < e.length; r++) {
          const o = e[r]
          if (n < t.length) {
            const { original: a, modified: l } = t[n]
            if (
              r === a.startLineNumber - 1 &&
              (s.push(...l), n++, a.endLineNumberExclusive !== a.startLineNumber)
            ) {
              r += a.endLineNumberExclusive - a.startLineNumber - 1
              continue
            }
          }
          s.push(o)
        }
        for (; n < t.length; ) {
          const { original: r, modified: o } = t[n]
          s.push(...o), n++
        }
        return s
      }
      async runCapabilitiesForProcess(e, t, s, n) {
        const r = this._composerDataService.getComposerData(e)
        if (!r) return t === "composer-settled" ? !1 : void 0
        const o = uNn(r.capabilities, t, s)
        if (t === "process-stream") {
          let l = s.stream
          for (const c of o) c.processStream && (l = await c.processStream(s))
          return l
        }
        if (t === "mutate-request") {
          for (const l of o)
            await l.runInPlaceMutateRequestBeforeSubmit?.(n?.request, s)
          return
        }
        if (t === "start-submit-chat") {
          const l = o
            .filter((c) => c.onStartSubmitChatReturnShouldStop)
            .sort((c, h) => c.priority - h.priority)
          for (const c of l)
            if (await c.onStartSubmitChatReturnShouldStop?.(s)) return !0
        }
        if (t === "before-submit-chat") {
          const l = o
            .filter((c) => c.onBeforeSubmitChat)
            .sort((c, h) => c.priority - h.priority)
          for (const c of l) if (await c.onBeforeSubmitChat?.(s)) return !0
          return !1
        }
        const a = await Promise.all(
          o.map(async (l) => {
            switch (t) {
              case "process-codeblock":
                await l.processCodeBlock?.(s)
                return
              case "after-submit-chat":
                await l.onAfterSubmitChat?.(s)
                return
              case "after-apply":
                await l.onAfterApply?.(s)
                return
              case "composer-done":
                await l.onComposerDone?.(s)
                return
              case "composer-settled":
                return (await l.onComposerSettledReturnShouldLoop?.(s)) ?? !1
              default:
                return
            }
          }),
        )
        if (t === "composer-settled") return a.some((l) => l === !0)
      }
      async *handleTaskStreamChatContextResponse(e, t, s, n) {
        const r = { stack: [], error: void 0, hasError: !1 }
        try {
          const o = __addDisposableResource(
              r,
              gl("ComposerUtilsService.handleTaskStreamChatContextResponse"),
              !1,
            ),
            a = this._aiTaskService.handleTaskGetStream(e, n)
          for await (const l of a)
            switch (l.response.case) {
              case "output": {
                yield { text: l.response.value.text }
                break
              }
              case "gatheringStep": {
                this._composerDataService.updateComposerBubble(t, s, {
                  steps: [
                    ...(this._composerDataService.getComposerBubble(t, s)
                      ?.steps || []),
                    { type: "gathering", data: l.response.value, files: [] },
                  ],
                })
                break
              }
              case "rerankingStep": {
                this._composerDataService.updateComposerBubble(t, s, {
                  steps: [
                    ...(this._composerDataService.getComposerBubble(t, s)
                      ?.steps || []),
                    { type: "reranking", data: l.response.value, files: [] },
                  ],
                })
                break
              }
              case "reasoningStep": {
                this._composerDataService.updateComposerBubble(t, s, {
                  steps: [
                    ...(this._composerDataService.getComposerBubble(t, s)
                      ?.steps || []),
                    { type: "reasoning", data: l.response.value, substeps: [] },
                  ],
                })
                break
              }
              case "reasoningSubstep": {
                this._composerDataService.updateComposerDataSetStore(t, (c) =>
                  c(
                    "conversation",
                    (h) => h.bubbleId === s,
                    "steps",
                    (h) =>
                      h.type === "reasoning" &&
                      h.data.index === l.response.value.stepIndex,
                    "substeps",
                    (h) => [...h, l.response.value],
                  ),
                )
                break
              }
              case "gatheringFile": {
                this._composerDataService.updateComposerDataSetStore(t, (c) =>
                  c(
                    "conversation",
                    (h) => h.bubbleId === s,
                    "steps",
                    (h) =>
                      h.type === "gathering" &&
                      h.data.index === l.response.value.stepIndex,
                    "files",
                    (h) => [...h, l.response.value],
                  ),
                )
                break
              }
              case "rerankingFile": {
                this._composerDataService.updateComposerDataSetStore(t, (c) =>
                  c(
                    "conversation",
                    (h) => h.bubbleId === s,
                    "steps",
                    (h) =>
                      h.type === "reranking" &&
                      h.data.index === l.response.value.stepIndex,
                    "files",
                    (h) => [...h, l.response.value],
                  ),
                )
                break
              }
            }
        } catch (o) {
          ;(r.error = o), (r.hasError = !0)
        } finally {
          __disposeResources(r)
        }
      }
      selectNextComposer() {
        const e = this._composerDataService.selectedComposerId,
          t = JJ([
            ...this._composerDataService.allComposersData.allComposers.filter(
              (n) => this._composerDataService.getComposerForceMode(n) !== "chat",
            ),
          ]),
          s = t.findIndex((n) => n.composerId === e)
        if (s > 0) {
          const n = t[s - 1].composerId
          this._composerDataService.setAllComposersData("selectedComposerId", n)
        } else
          this._composerDataService.setAllComposersData(
            "selectedComposerId",
            t[t.length - 1].composerId,
          )
      }
      selectPrevComposer() {
        const e = this._composerDataService.selectedComposerId,
          t = JJ([
            ...this._composerDataService.allComposersData.allComposers.filter(
              (n) => this._composerDataService.getComposerForceMode(n) !== "chat",
            ),
          ]),
          s = t.findIndex((n) => n.composerId === e)
        if (s < t.length - 1) {
          const n = t[s + 1].composerId
          this._composerDataService.setAllComposersData("selectedComposerId", n)
        } else
          this._composerDataService.setAllComposersData(
            "selectedComposerId",
            t[0].composerId,
          )
      }
      selectNextComposerChat() {
        const e = this._composerDataService.selectedChatId,
          t = JJ([
            ...this._composerDataService.allComposersData.allComposers.filter(
              (n) => this._composerDataService.getComposerForceMode(n) === "chat",
            ),
          ]),
          s = t.findIndex((n) => n.composerId === e)
        if (s > 0) {
          const n = t[s - 1].composerId
          this._composerDataService.setAllComposersData("selectedChatId", n)
        } else
          this._composerDataService.setAllComposersData(
            "selectedChatId",
            t[t.length - 1].composerId,
          )
      }
      selectPrevComposerChat() {
        const e = this._composerDataService.selectedChatId,
          t = JJ([
            ...this._composerDataService.allComposersData.allComposers.filter(
              (n) => this._composerDataService.getComposerForceMode(n) === "chat",
            ),
          ]),
          s = t.findIndex((n) => n.composerId === e)
        if (s < t.length - 1) {
          const n = t[s + 1].composerId
          this._composerDataService.setAllComposersData("selectedChatId", n)
        } else
          this._composerDataService.setAllComposersData(
            "selectedChatId",
            t[0].composerId,
          )
      }
      async computeDiff(e, t, s) {
        if (e === t) return new lG({ chunks: [], hitTimeout: !1 })
        const n = await this.computeLinesDiffWithSemaphore({
          first: e,
          second: t,
          options: {
            ignoreTrimWhitespace: !0,
            computeMoves: !1,
            maxComputationTimeMs: 1e3,
          },
        })
        if (n.hitTimeout) return new lG({ chunks: [], hitTimeout: !0 })
        const a = n.changes
          .map((l) => {
            const c = e
                .split(
                  `
  `,
                )
                .slice(
                  l.original.startLineNumber - 1,
                  l.original.endLineNumberExclusive - 1,
                )
                .map((u) => "- " + u),
              h = t
                .split(
                  `
  `,
                )
                .slice(
                  l.modified.startLineNumber - 1,
                  l.modified.endLineNumberExclusive - 1,
                )
                .map((u) => "+ " + u)
            return new wVe({
              diffString: [...c, ...h].join(`
  `),
              oldStart: l.original.startLineNumber,
              newStart: l.modified.startLineNumber,
              oldLines:
                l.original.endLineNumberExclusive - l.original.startLineNumber,
              newLines:
                l.modified.endLineNumberExclusive - l.modified.startLineNumber,
              linesAdded:
                l.modified.endLineNumberExclusive - l.modified.startLineNumber,
              linesRemoved:
                l.original.endLineNumberExclusive - l.original.startLineNumber,
            })
          })
          .reduce((l, c) => {
            if (l.length === 0) return [c]
            const h = l[l.length - 1]
            return (
              this.shouldMergeChunks(h, c)
                ? (l[l.length - 1] = this.mergeChunks(h, c, e, t))
                : l.push(c),
              l
            )
          }, [])
          .map((l) => this.growChunk(l, e, t))
        return new lG({ chunks: a, hitTimeout: !1 })
      }
      computeLinesDiffWithSemaphore({ first: e, second: t, options: s }) {
        return this._composerDiffSemaphore.withSemaphore(async () => {
          const n = await s9e(
              Array.isArray(e)
                ? e.join(`
  `)
                : e,
            ),
            r = await s9e(
              Array.isArray(t)
                ? t.join(`
  `)
                : t,
            ),
            o = JSON.stringify({ firstSha1: n, secondSha1: r }),
            a = this._composerDiffCache.get(o)
          if (a) return a
          const l = await this._editorWorkerService.computeLinesDiff(
            Array.isArray(e)
              ? e
              : e.split(`
  `),
            Array.isArray(t)
              ? t
              : t.split(`
  `),
            s,
          )
          return this._composerDiffCache.set(o, l), l
        })
      }
      shouldMergeChunks(e, t) {
        return t.newStart - (e.newStart + e.newLines) <= EYn
      }
      mergeChunks(e, t, s, n) {
        const r = n
          .split(
            `
  `,
          )
          .slice(e.newStart + e.newLines - 1, t.newStart - 1)
          .map((o) => "  " + o)
        return new wVe({
          diffString:
            e.diffString +
            (r.length > 0
              ? `
  ` +
                r.join(`
  `) +
                `
  `
              : `
  `) +
            t.diffString,
          oldStart: e.oldStart,
          newStart: e.newStart,
          oldLines: t.oldStart + t.oldLines - e.oldStart,
          newLines: t.newStart + t.newLines - e.newStart,
          linesRemoved: e.linesRemoved + t.linesRemoved,
          linesAdded: e.linesAdded + t.linesAdded,
        })
      }
      growChunk(e, t, s) {
        const n = t.split(`
  `),
          r = s.split(`
  `),
          o = Math.max(1, e.newStart - TYe),
          a = Math.min(r.length + 1, e.newStart + e.newLines + TYe),
          l = Math.max(1, e.oldStart - TYe),
          c = Math.min(n.length + 1, e.oldStart + e.oldLines + TYe),
          h = r.slice(o - 1, e.newStart - 1).map((g) => "  " + g),
          u = r.slice(e.newStart + e.newLines - 1, a - 1).map((g) => "  " + g),
          d = e.diffString.split(`
  `)
        return new wVe({
          diffString: [...h, ...d, ...u].join(`
  `),
          oldStart: l,
          newStart: o,
          oldLines: c - l,
          newLines: a - o,
          linesAdded: e.linesAdded,
          linesRemoved: e.linesRemoved,
        })
      }
      codeChunkHasFullFileIntent(e) {
        return (
          e.intent !== void 0 &&
          [ev.COMPOSER_FILE, ev.MENTIONED_FILE].includes(e.intent)
        )
      }
      async getRootFolderFileTreeWithDistance(e, t) {
        const s = async (r, o = 0, a = "", l = !0) => {
            if (o > t) return ""
            const c = await this._fileService.resolve(r, { resolveMetadata: !0 }),
              h = "/" + this._workspaceContextService.asRelativePath(r)
            if (
              this._gitIgnoreFile &&
              h !== "/" &&
              this._gitIgnoreFile.isArbitraryPathIgnored(r.path, c.isDirectory)
            )
              return ""
            let u =
              a +
              (l ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
              c.name +
              `
  `
            if (c.isDirectory && c.children) {
              const d = c.children.sort((g, p) =>
                g.isDirectory === p.isDirectory
                  ? g.name.localeCompare(p.name)
                  : g.isDirectory
                    ? -1
                    : 1,
              )
              for (let g = 0; g < d.length; g++) {
                const p = d[g],
                  m = U.joinPath(r, p.name),
                  b = a + (l ? "    " : "\u2502   "),
                  y = g === d.length - 1
                u += await s(m, o + 1, b, y)
              }
            }
            return u
          },
          n = await s(e)
        return (
          console.log(
            `[composer] root folder file tree within distance ${t}:`,
            n,
          ),
          n
        )
      }
      async getFileTreeWithinDistance(e, t) {
        const s = this._workspaceContextService.getWorkspace().folders[0].uri,
          n = this._workspaceContextService.asRelativePath(e)
        if (n === "" || n.indexOf("/") === -1)
          return this.getRootFolderFileTreeWithDistance(s, t - 1)
        const r = (c) => U.joinPath(c, ".."),
          o = async (c, h, u, d = "", g = !0) => {
            const p = await this._fileService.resolve(c, { resolveMetadata: !0 }),
              m = "/" + this._workspaceContextService.asRelativePath(c)
            if (
              this._gitIgnoreFile &&
              m !== "/" &&
              this._gitIgnoreFile.isArbitraryPathIgnored(c.path, p.isDirectory)
            )
              return ""
            let b =
              d +
              (g ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
              p.name +
              `
  `
            if (u > 0 && p.isDirectory && p.children) {
              const y = p.children.sort((w, C) =>
                w.isDirectory === C.isDirectory
                  ? w.name.localeCompare(C.name)
                  : w.isDirectory
                    ? -1
                    : 1,
              )
              for (let w = 0; w < y.length; w++) {
                const C = y[w],
                  S = U.joinPath(c, C.name),
                  x = d + (g ? "    " : "\u2502   "),
                  k = w === y.length - 1
                this.getDistance(S, h) <= t && (b += await o(S, h, u - 1, x, k))
              }
            }
            return b
          }
        let a = e
        for (let c = 0; c < t && !a.toString().startsWith(s.toString()); c++) {
          const h = r(a)
          if (h.toString() === a.toString()) break
          a = h
        }
        const l = await o(a, e, t)
        return (
          console.log(
            `[composer] file tree within distance ${t} of ${e.fsPath}:`,
            l,
          ),
          l
        )
      }
      getDistance(e, t) {
        const s = e.path.split("/").filter(Boolean),
          n = t.path.split("/").filter(Boolean)
        let r = 0
        for (; r < s.length && r < n.length && s[r] === n[r]; ) r++
        return s.length - r + (n.length - r)
      }
      async getGitIgnoreFile(e) {
        const t = U.joinPath(e, ".gitignore")
        try {
          if (!(await this._fileService.exists(t))) return null
          const n = await this._fileService.readFile(t)
          return new wJi(n.value.toString(), e.path)
        } catch (s) {
          return console.error("Error reading .gitignore file:", s), null
        }
      }
      async initializeGitIgnoreFile() {
        const e = this._workspaceContextService.getWorkspace().folders[0]?.uri
        if (e) {
          const t = U.joinPath(e, "node_modules")
          this._gitIgnoreFile = await this.getGitIgnoreFile(e)
        }
      }
      async getFileDiff(e, t, s) {
        const o = (
            await new eYn().diffLines(
              t.join(`
  `),
              e.join(`
  `),
              !1,
              { ignoreWhitespace: !0 },
            )
          ).flatMap((g) =>
            g.value
              .split(
                `
  `,
              )
              .map((p) => ({ added: g.added, removed: g.removed, value: p })),
          ),
          a = [],
          l = 3,
          c = (g) => g.trim() === ""
        let h = null,
          u = -1
        for (let g = 0; g < o.length; g++) {
          const p = o[g],
            m = (p.added || p.removed) && !c(p.value)
          if (m || (h && g - u <= l)) {
            if (!h) {
              h = { lines: [], startLine: Math.max(0, g - l) }
              for (let b = Math.max(0, g - l); b < g; b++)
                h.lines.push(` ${o[b].value}`)
            }
            m
              ? (h.lines.push(`${p.added ? "+" : "-"} ${p.value}`), (u = g))
              : h.lines.push(`  ${p.value}`)
          } else
            h &&
              (a.push(
                new eoe({
                  content: `@@ -${h.startLine + 1},${h.lines.length} +${h.startLine + 1},${h.lines.length} @@`,
                  lines: h.lines,
                }),
              ),
              (h = null))
        }
        return (
          h &&
            a.push(
              new eoe({
                content: `@@ -${h.startLine + 1},${h.lines.length} +${h.startLine + 1},${h.lines.length} @@`,
                lines: h.lines,
              }),
            ),
          new J9({ from: s, to: s, chunks: a })
        )
      }
      shouldShowCancel(e) {
        const t = this._composerDataService.getComposerData(e)
        return t
          ? this._composerDataService.getPendingUserDecisionGroup(e).length > 0 ||
            t.status === "generating" ||
            this._composerDataService
              .getCodeBlocksOfStatuses(e, "applying")
              .filter((r) => !r.isNotApplied).length > 0
            ? !0
            : this._composerDataService.isRunningCapabilities(e)
          : !1
      }
      changeCodeBlockUri(e, t, s, n) {
        const r = this._composerDataService.getComposerData(e)
        if (!r) throw new Error("[composer] No composer found for the given ID")
        const o = t.toString(),
          a = s.toString(),
          l = r.conversation.findIndex((u) =>
            u.codeBlocks?.some((d) => d.uri.toString() === o && d.version === n),
          )
        if (l === -1)
          throw new Error(
            "[composer] No message found containing the specified codeblock",
          )
        const c = r.conversation[l].codeBlocks?.findIndex(
          (u) => u.uri.toString() === o && u.version === n,
        )
        if (c === void 0 || c === -1)
          throw new Error("[composer] Codeblock not found in the message")
        const h = this.determineNewVersion(r, a, l, c)
        if (
          (this.updateCodeBlockVersions(e, t, s, n, h, l), r.codeBlockData[o])
        ) {
          const u = r.codeBlockData[o],
            d = u.findIndex((g) => g.version === n)
          if (d !== -1) {
            const g = { ...u[d], uri: s, version: h },
              p = u.filter((m, b) => b !== d)
            p.length === 0
              ? this._composerDataService.updateComposerDataSetStore(e, (m) =>
                  m("codeBlockData", o, void 0),
                )
              : this._composerDataService.updateComposerDataSetStore(e, (m) =>
                  m("codeBlockData", o, p),
                ),
              this._composerDataService.updateComposerDataSetStore(e, (m) =>
                m("codeBlockData", a, (b = []) =>
                  [...b, g].sort((w, C) => w.version - C.version),
                ),
              )
          }
        }
        this._onShouldResetCodeBlockCount.fire({
          composerId: e,
          messageIndex: l,
        }),
          r.conversation.forEach((u, d) => {
            if (u.codeBlocks) {
              const g = u.codeBlocks.map((p) =>
                p.uri.toString() === o && p.version === n
                  ? { ...p, uri: s, version: h }
                  : p,
              )
              if (
                (this._composerDataService.updateComposerDataSetStore(e, (p) =>
                  p("conversation", d, "codeBlocks", g),
                ),
                d === l)
              ) {
                const p = this._workspaceContextService.asRelativePath(s),
                  m = j9i(u.text, c, p)
                this._composerDataService.updateComposerDataSetStore(e, (b) =>
                  b("conversation", d, "text", m),
                )
              }
            }
          })
        for (let u = l + 1; u < r.conversation.length; u++)
          if (r.conversation[u].type === fs.AI) {
            const d = r.conversation[u].text
            this._composerDataService.updateComposerDataSetStore(e, (g) =>
              g("conversation", u, "text", d + " "),
            ),
              this._composerDataService.updateComposerDataSetStore(e, (g) =>
                g("conversation", u, "text", d),
              )
          }
        return h
      }
      determineNewVersion(e, t, s, n) {
        const r = new Set()
        for (let a = 0; a <= s; a++)
          e.conversation[a].codeBlocks?.forEach((c, h) => {
            c.uri.toString() === t &&
              (a < s || (a === s && h < n)) &&
              r.add(c.version)
          })
        let o = 0
        for (; r.has(o); ) o++
        return o
      }
      updateCodeBlockVersions(e, t, s, n, r, o) {
        const a = this._composerDataService.getComposerData(e)
        if (!a) return
        const l = t.toString(),
          c = s.toString()
        if (a.codeBlockData[l]) {
          const h = a.codeBlockData[l].map((u) =>
            u.version > n ? { ...u, version: u.version - 1 } : u,
          )
          this._composerDataService.updateComposerDataSetStore(e, (u) =>
            u("codeBlockData", l, h),
          )
        }
        if (a.codeBlockData[c]) {
          const h = a.codeBlockData[c].map((u) =>
            u.version >= r ? { ...u, version: u.version + 1 } : u,
          )
          this._composerDataService.updateComposerDataSetStore(e, (u) =>
            u(
              "codeBlockData",
              c,
              h.sort((d, g) => d.version - g.version),
            ),
          )
        }
        a.conversation.forEach((h, u) => {
          if (u >= o && h.codeBlocks) {
            const d = h.codeBlocks.map((g) =>
              g.uri.toString() === l && g.version > n
                ? { ...g, version: g.version - 1 }
                : g.uri.toString() === c && g.version >= r
                  ? { ...g, version: g.version + 1 }
                  : g,
            )
            this._composerDataService.updateComposerDataSetStore(e, (g) =>
              g("conversation", u, "codeBlocks", d),
            )
          }
        })
      }
      getFilesToRevertForCheckpoint(e, t, s, n) {
        const r = this._composerDataService.getComposerData(e)
        if (!r) throw new Error("[composer] No composer found for the given ID")
        const o = new Set(
            n.activeInlineDiffs?.map((d) => d.uri.toString()) ?? [],
          ),
          a = new Set(),
          l = new Map()
        n.newlyCreatedFolders.forEach((d) => {
          a.add(d.uri.toString())
        })
        const c = t + 1,
          h = s
        for (const d of r.conversation.slice(c, h)) {
          const g = d.checkpoint
          g &&
            (g.files.forEach((p) => {
              const m = p.uri.toString()
              !n.files.some((b) => b.uri.toString() === m) &&
                !l.has(m) &&
                !o.has(m) &&
                l.set(m, { checkpoint: g })
            }),
            g.newlyCreatedFolders.forEach((p) => {
              a.add(p.uri.toString())
            }))
        }
        return {
          filesToRevert: new Set([
            ...n.files
              .filter((d) => !o.has(d.uri.toString()))
              .map((d) => d.uri.toString()),
            ...l.keys(),
          ]),
          intermediateFiles: l,
          foldersToDelete: a,
        }
      }
      async isCheckpointSameAsCurrent(e, t) {
        const s = this._composerDataService.getComposerData(e)
        if (!s) return !1
        let n,
          r = new Set(),
          o = new Map(),
          a = new Set()
        if (typeof t == "string") {
          const c = s.conversation.findIndex((d) => d.bubbleId === t)
          if (c === -1)
            return (
              console.error(
                "[composer] No message found with the given bubble ID",
              ),
              !1
            )
          const h = s.conversation[c].checkpoint
          if (!h) return !0
          n = h
          const u = s.currentBubbleId
            ? s.conversation.findIndex((d) => d.bubbleId === s.currentBubbleId)
            : s.conversation.length - 1
          ;({
            filesToRevert: r,
            intermediateFiles: o,
            foldersToDelete: a,
          } = this.getFilesToRevertForCheckpoint(e, c, u, n))
        } else {
          n = t
          const c = new Set(
            n.activeInlineDiffs?.map((h) => h.uri.toString()) ?? [],
          )
          r = new Set(
            n.files.map((h) => h.uri.toString()).filter((h) => !c.has(h)),
          )
        }
        const l = await this._composerDataService.getCurrentFilesContent(
          Array.from(r),
        )
        for (const c of r) {
          let h
          if (n.files.some((d) => d.uri.toString() === c))
            h = n.files.find((d) => d.uri.toString() === c)
          else {
            const d = o.get(c)
            d && (h = d.checkpoint.files.find((g) => g.uri.toString() === c))
          }
          const u = l.get(c) || []
          if (h)
            if (h.isNewlyCreated) {
              if (await this._fileService.exists(h.uri)) return !1
            } else {
              if (!(await this._fileService.exists(h.uri))) return !1
              const d =
                this.getCodeBlockLinesByDiff(
                  s.composerId,
                  h.uri,
                  h.originalModelDiffWrtV0 ?? [],
                ) ?? []
              if (!this.areContentsEqual(u, d ?? [])) return !1
            }
          else if (u.length > 0) return !1
        }
        if (a.size > 0 || n.nonExistentFiles.length > 0) return !1
        for (const c of n.activeInlineDiffs ?? []) {
          const { uri: h, version: u } = c,
            d =
              this._reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
                (g) => g.uri.toString() === h.toString(),
              )
          if (
            !d ||
            u !== d.composerMetadata?.version ||
            s.composerId !== d.composerMetadata?.composerId
          )
            return !1
        }
        return !0
      }
      areContentsEqual(e, t) {
        if (e.length !== t.length) return !1
        for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1
        return !0
      }
      async computeLineDiffs(e, t, s) {
        const n = this.getCodeBlockV0ModelLines(e, t)
        if (!n) return []
        const r = await this.computeLinesDiffWithSemaphore({
          first: n,
          second: s,
          options: {
            ignoreTrimWhitespace: !1,
            computeMoves: !1,
            maxComputationTimeMs: 500,
            ...zKi,
          },
        })
        let o = r.changes
        return (
          r.hitTimeout &&
            (o = [
              new Qb(new Es(1, n.length + 1), new Es(1, s.length + 1), void 0),
            ]),
          o.map((l) => ({
            original: l.original,
            modified: s.slice(
              l.modified.startLineNumber - 1,
              l.modified.endLineNumberExclusive - 1,
            ),
          }))
        )
      }
      createCodeBlockCacheKey(e, t, s) {
        return `${typeof e == "string" ? e : e.data.composerId}-${t.toString()}-${s}`
      }
      getCodeBlockLinesByDiff(e, t, s) {
        if (!this._composerDataService.getComposerData(e)) return null
        const r = this.getCodeBlockV0ModelLines(e, t)
        return s.length === 0 ? (r ?? []) : this.applyDiffToLines(r ?? [], s)
      }
      getCodeBlockV0ModelLines(e, t) {
        const s = this._composerDataService.getComposerData(e)
        return s
          ? s.originalModelLines[t.toString()]
            ? s.originalModelLines[t.toString()]
            : (this._composerDataService.getComposerCodeBlock(e, t, 0)
                ?.originalModelLines ?? null)
          : null
      }
      getCodeBlockOriginalModelLines(e, t, s, n) {
        if (!this._composerDataService.getComposerData(e)) return null
        const o = this._composerDataService.getComposerCodeBlock(e, t, s)
        if (!o || !o.originalModelDiffWrtV0) return null
        if (n?.shouldChain && o.isChained) {
          let a = s - 1,
            l = this._composerDataService.getComposerCodeBlock(e, t, a)
          for (; l?.isChained; )
            a--, (l = this._composerDataService.getComposerCodeBlock(e, t, a))
          return !l || !l.originalModelDiffWrtV0
            ? null
            : this.getCodeBlockLinesByDiff(e, t, l.originalModelDiffWrtV0 ?? [])
        }
        return this.getCodeBlockLinesByDiff(e, t, o.originalModelDiffWrtV0 ?? [])
      }
      getCodeBlockNewModelLines(e, t, s) {
        if (!this._composerDataService.getComposerData(e)) return null
        const r = this._composerDataService.getComposerCodeBlock(e, t, s)
        return !r || !r.newModelDiffWrtV0
          ? null
          : this.getCodeBlockLinesByDiff(e, t, r.newModelDiffWrtV0 ?? [])
      }
      constructDiffResources(e) {
        const t = this._composerDataService.getComposerData(e)
        return t
          ? t.tabs
              .filter((n) => n.type === "code")
              .filter(
                (n) =>
                  !!this._composerDataService.getInlineDiff(t.composerId, n.uri),
              )
              .map((n) => {
                const r = this.getCodeBlockOriginalModelLines(
                    e,
                    n.uri,
                    n.version,
                  ),
                  o = this.getCodeBlockNewModelLines(e, n.uri, n.version),
                  a =
                    r?.join(`
  `) ?? "",
                  l =
                    o?.join(`
  `) ?? ""
                return {
                  original: {
                    resource: n.uri.with({ fragment: "original" }),
                    contents: a,
                  },
                  modified: { resource: n.uri, contents: l },
                }
              })
          : []
      }
      shouldShowCheckpointInToolFormerMessage(e, t) {
        switch (t.tool) {
          case jt.EDIT_FILE: {
            if (!t.params?.relativeWorkspacePath) return !1
            const n = this._workspaceContextService.resolveRelativePath(
              t.params.relativeWorkspacePath,
            )
            if (!n) return !1
            const r = t.additionalData?.version
            if (r === void 0) return !1
            const o = this._composerDataService.getComposerCodeBlock(e, n, r)
            return o ? !["generating", "aborted"].includes(o.status) : !1
          }
          case jt.PARALLEL_APPLY:
            return !0
          case jt.DELETE_FILE:
            return t.userDecision === "accepted"
          default:
            return !1
        }
      }
      clearErrorDetailsFromLatestAIMessages(e) {
        const t = this._composerDataService.getComposerData(e)
        if (t)
          for (let s = t.conversation.length - 1; s >= 0; s--) {
            const n = t.conversation[s]
            if (n.type === fs.AI) {
              if (n.errorDetails) {
                this._composerDataService.updateComposerDataSetStore(e, (r) =>
                  r("conversation", s, "errorDetails", void 0),
                )
                break
              }
            } else break
          }
      }
      addHumanMessageBeforeAiBubble(e, t) {
        const s = this._composerDataService.getComposerData(e)
        if (!s) throw new Error(`[composer] No composer found with ID ${e}`)
        const n = s.conversation.findIndex((a) => a.bubbleId === t)
        if (n === -1)
          throw new Error(`[composer] No message found with bubble ID ${t}`)
        const r = this._composerDataService.getComposerBubble(e, t)
        if (!r || r.type !== fs.AI)
          throw new Error(
            `[composer] Message with bubble ID ${t} is not an AI message`,
          )
        const o = { ...HC(), text: "", context: s.context }
        if (r.checkpoint) o.checkpoint = r.checkpoint
        else
          for (let a = n - 1; a >= 0; a--)
            if (s.conversation[a].checkpoint) {
              o.checkpoint = s.conversation[a].checkpoint
              break
            }
        return (
          this._composerDataService.updateComposerDataSetStore(e, (a) =>
            a("conversation", (l) => [...l.slice(0, n), o, ...l.slice(n)]),
          ),
          o.bubbleId
        )
      }
    }
  __decorate(
    [At("ComposerUtilsService.ensureCapabilitiesAreLoaded")],
    Xa.prototype,
    "ensureCapabilitiesAreLoaded",
    null,
  ),
    __decorate(
      [At("ComposerUtilsService.getShouldChatUseTools")],
      Xa.prototype,
      "getShouldChatUseTools",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getShouldAutoSaveAgenticEdits")],
      Xa.prototype,
      "getShouldAutoSaveAgenticEdits",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.replacedBubbleForFastEdit")],
      Xa.prototype,
      "replacedBubbleForFastEdit",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.processConversationForFastEdit")],
      Xa.prototype,
      "processConversationForFastEdit",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.populateCodeChunksInConversation")],
      Xa.prototype,
      "populateCodeChunksInConversation",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.populateRedDiffsInConversation")],
      Xa.prototype,
      "populateRedDiffsInConversation",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getRecentEdits")],
      Xa.prototype,
      "getRecentEdits",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getRecentlyViewedFileInfo")],
      Xa.prototype,
      "getRecentlyViewedFileInfo",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.handleStreamComposer")],
      Xa.prototype,
      "handleStreamComposer",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.intermediateChunkMiddleware")],
      Xa.prototype,
      "intermediateChunkMiddleware",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getAutoContextFiles")],
      Xa.prototype,
      "getAutoContextFiles",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.readFileContents")],
      Xa.prototype,
      "readFileContents",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.populateConversationWithExtraContext")],
      Xa.prototype,
      "populateConversationWithExtraContext",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.addContinuationPromptToConversation")],
      Xa.prototype,
      "addContinuationPromptToConversation",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getUrisForCheckpoints")],
      Xa.prototype,
      "getUrisForCheckpoints",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.createCurrentCheckpoint")],
      Xa.prototype,
      "createCurrentCheckpoint",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getCodeBlockDataFromBubbleId")],
      Xa.prototype,
      "getCodeBlockDataFromBubbleId",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.removeMessagesAfterBubble")],
      Xa.prototype,
      "removeMessagesAfterBubble",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.runCapabilitiesForProcess")],
      Xa.prototype,
      "runCapabilitiesForProcess",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.selectNextComposer")],
      Xa.prototype,
      "selectNextComposer",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.selectPrevComposer")],
      Xa.prototype,
      "selectPrevComposer",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.selectNextComposerChat")],
      Xa.prototype,
      "selectNextComposerChat",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.selectPrevComposerChat")],
      Xa.prototype,
      "selectPrevComposerChat",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.computeDiff")],
      Xa.prototype,
      "computeDiff",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.growChunk")],
      Xa.prototype,
      "growChunk",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getRootFolderFileTreeWithDistance")],
      Xa.prototype,
      "getRootFolderFileTreeWithDistance",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getGitIgnoreFile")],
      Xa.prototype,
      "getGitIgnoreFile",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.initializeGitIgnoreFile")],
      Xa.prototype,
      "initializeGitIgnoreFile",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getFileDiff")],
      Xa.prototype,
      "getFileDiff",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.shouldShowCancel")],
      Xa.prototype,
      "shouldShowCancel",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.changeCodeBlockUri")],
      Xa.prototype,
      "changeCodeBlockUri",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getFilesToRevertForCheckpoint")],
      Xa.prototype,
      "getFilesToRevertForCheckpoint",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.isCheckpointSameAsCurrent")],
      Xa.prototype,
      "isCheckpointSameAsCurrent",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.areContentsEqual")],
      Xa.prototype,
      "areContentsEqual",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.computeLineDiffs")],
      Xa.prototype,
      "computeLineDiffs",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getCodeBlockLinesByDiff")],
      Xa.prototype,
      "getCodeBlockLinesByDiff",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getCodeBlockV0ModelLines")],
      Xa.prototype,
      "getCodeBlockV0ModelLines",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getCodeBlockOriginalModelLines")],
      Xa.prototype,
      "getCodeBlockOriginalModelLines",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.getCodeBlockNewModelLines")],
      Xa.prototype,
      "getCodeBlockNewModelLines",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.constructDiffResources")],
      Xa.prototype,
      "constructDiffResources",
      null,
    ),
    __decorate(
      [At("ComposerUtilsService.addHumanMessageBeforeAiBubble")],
      Xa.prototype,
      "addHumanMessageBeforeAiBubble",
      null,
    ),
    (Xa = __decorate(
      [
        __param(0, Na),
        __param(1, Br),
        __param(2, it),
        __param(3, ve),
        __param(4, nl),
        __param(5, nt),
        __param(6, everythingProviderService),
        __param(7, Md),
        __param(8, tK),
        __param(9, selectedContextService),
        __param(10, ei),
        __param(11, Xt),
        __param(12, g2),
        __param(13, Ll),
        __param(14, aiFeatureStatusService),
        __param(15, Z),
        __param(16, st),
        __param(17, lU),
      ],
      Xa,
    )),
    Ve(q1, Xa, 1)
  var PYe = Re("bugbotService")
  function iOt(i) {
    return {
      bugbotId: i ?? rt(),
      requestId: void 0,
      isBackground: !1,
      status: { type: "none" },
      text: "",
      createdAt: Date.now(),
      fileSnapshots: {},
      fileSnapshotsPreDiff: {},
      resolvedBugs: {},
      bugFeedback: {},
    }
  }
  function IYn(i) {
    return i.getWorkbenchState() === 1 ? -1 : 1
  }
  function DYn(i) {
    let e = i.allBugBots.filter((t) => t.status.type === "completed")
    return (
      (e = e.map((t) => ({ ...iOt(t.bugbotId), ...t }))),
      (e = e.sort((t, s) => {
        const n = t.lastUpdatedAt ?? t.createdAt
        return (s.lastUpdatedAt ?? s.createdAt) - n
      })),
      { allBugBots: e, bugbotDataVersion: tqe }
    )
  }
  function TYn(i, e, t, s) {
    const n = IYn(t)
    let r = i.get(s, n),
      o = { allBugBots: [], bugbotDataVersion: tqe }
    if (r)
      try {
        let h = JSON.parse(r)
        h && (o = DYn(h))
      } catch (h) {
        console.error("[bugbot] Error parsing stored bugbots data:", h),
          (o = { allBugBots: [], bugbotDataVersion: tqe })
      }
    console.log("[bugbot] allBugBotsInit", JSON.parse(JSON.stringify(o)))
    const [a, l] = op(o)
    return [
      a,
      l,
      () => {
        const h = rt(),
          u = iOt(h)
        return l("allBugBots", [u]), u
      },
    ]
  }
  var LYe = Re("bugbotDataService"),
    sOt = class extends V {
      constructor(e, t, s) {
        super(),
          (this.c = e),
          (this.f = t),
          (this.g = s),
          ([this.allBugBotsData, this.setAllBugBotsData, this.resetBugBots] = TYn(
            this.c,
            this.g,
            this.f,
            oTi,
          )),
          this.D(
            this.c.onWillSaveState(() => {
              this.saveBugBots()
            }),
          )
      }
      getBugBotData(e) {
        return this.allBugBotsData.allBugBots.find((t) => t.bugbotId === e)
      }
      updateBugBotData(e, t) {
        this.setAllBugBotsData(
          "allBugBots",
          (s) => s.bugbotId === e,
          (s) => ({ ...s, ...t }),
        )
      }
      trimFileInPlace(e, t, s, n) {
        if (t[s] === void 0) return
        const o = new Set(),
          a = e.bugReports?.bugReports ?? []
        for (const c of a)
          for (const h of c.locations)
            if (h.file === s) {
              const u = Math.max(0, h.startLine - 1 - 15),
                d = Math.min(n.length - 1, h.endLine - 1 + 15)
              for (let g = u; g <= d; g++) o.add(g)
            }
        if (o.size === 0) {
          t[s] = { type: "partial", lines: [] }
          return
        }
        const l = Array.from(o).sort((c, h) => c - h)
        t[s] = {
          type: "partial",
          lines: l.map((c) => ({ number: c + 1, content: n[c] })),
        }
      }
      sanitizeLargeFilesInPlace(e, t) {
        if (t < 10)
          for (const s in e.fileSnapshots) {
            const n = e.fileSnapshots[s]
            n !== void 0 &&
              (Array.isArray(n)
                ? n.length > 1e4 &&
                  (this.trimFileInPlace(e, e.fileSnapshots, s, n),
                  delete e.fileSnapshotsPreDiff[s])
                : delete e.fileSnapshotsPreDiff[s])
          }
        else {
          for (const s in e.fileSnapshots) {
            const n = e.fileSnapshots[s]
            n !== void 0 &&
              Array.isArray(n) &&
              this.trimFileInPlace(e, e.fileSnapshots, s, n)
          }
          e.fileSnapshotsPreDiff = {}
        }
      }
      saveBugBots() {
        let e = this.allBugBotsData.allBugBots
          .filter((n) => n.status.type === "completed")
          .map((n) => wf(n))
        e.length > 150 && (e = e.slice(0, 100)),
          e.forEach((n, r) => {
            this.sanitizeLargeFilesInPlace(n, r)
          })
        const s = JSON.stringify({ allBugBots: e, bugbotDataVersion: tqe })
        this.c.store(oTi, s, 1, 1)
      }
      deleteBugBot(e) {
        const t = this.getBugBotData(e)
        t?.status.type === "generating" &&
          t?.abortController &&
          t.abortController.abort(),
          this.setAllBugBotsData("allBugBots", (s) =>
            s.filter((n) => n.bugbotId !== e),
          ),
          this.saveBugBots()
      }
      deleteAllBugBots() {
        this.allBugBotsData.allBugBots.forEach((t) => {
          this.deleteBugBot(t.bugbotId)
        })
      }
    }
  ;(sOt = __decorate([__param(0, et), __param(1, it), __param(2, ei)], sOt)),
    Ve(LYe, sOt, 0)
  var NYe = {
      typeName: "aiserver.v1.ReviewService",
      methods: {
        streamReview: {
          name: "StreamReview",
          I: DEt,
          O: $Bi,
          kind: gt.ServerStreaming,
        },
        streamReviewChat: {
          name: "StreamReviewChat",
          I: FBi,
          O: yNn,
          kind: gt.ServerStreaming,
        },
        streamSlowReview: {
          name: "StreamSlowReview",
          I: DEt,
          O: $Bi,
          kind: gt.ServerStreaming,
        },
        bugConfig: { name: "BugConfig", I: gNn, O: $ae, kind: gt.Unary },
        streamBugBotLinter: {
          name: "StreamBugBotLinter",
          I: bNn,
          O: RBi,
          kind: gt.ServerStreaming,
        },
        streamBugFinding: {
          name: "StreamBugFinding",
          I: SNn,
          O: wNn,
          kind: gt.ServerStreaming,
        },
      },
    },
    CY = Re("bugBotLinterService"),
    nOt = class extends V {
      get bugConfig() {
        return this.H.cachedServerConfig.bugConfigResponse ?? new $ae()
      }
      constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p, m, b, y) {
        super(),
          (this.g = e),
          (this.h = t),
          (this.j = s),
          (this.n = n),
          (this.q = r),
          (this.r = o),
          (this.s = a),
          (this.t = l),
          (this.u = c),
          (this.w = h),
          (this.y = u),
          (this.z = d),
          (this.C = g),
          (this.F = p),
          (this.G = m),
          (this.H = b),
          (this.I = y),
          (this.b = new R()),
          (this.onDidBugsChange = this.b.event),
          (this.c = new R()),
          (this.onDidChangeBugConfig = this.c.event),
          (this.f = 0),
          (this.activeBugs = new Map()),
          (this.J = new J()),
          (this.R = !1),
          (this.a = this.g.createInstance(fu, { service: NYe })),
          this.D(
            this.C.onCodeEditorAdd((w) => {
              this.attachEditor(w)
            }),
          )
        for (const w of this.C.listCodeEditors()) this.attachEditor(w)
        this.D(
          this.H.onDidRefreshServerConfig(() => {
            this.M()
          }),
        )
      }
      L() {
        if (
          !this.bugConfig.linterStrategyV1?.enabled &&
          !this.bugConfig.linterStrategyV2?.enabled
        ) {
          this.J.clear()
          return
        }
        this.J.add(
          this.D(
            this.u.files.onDidSave((e) => {
              this.N(e.model.resource)
            }),
          ),
        )
      }
      M() {
        this.c.fire(), this.L()
      }
      N(e) {
        this.bugConfig.linterStrategyV2?.enabled === !0 && this.P()
      }
      P() {
        if (this.bugConfig.linterStrategyV2?.enabled !== !0) return
        const e = this.C.getActiveCodeEditor()
        if (e === null) return
        const t = e.getModel()
        if (!t) return
        const s = e.getPosition()
        if (!s) return
        const n = t.uri,
          r = this.bugConfig.linterStrategyV2?.waitBetweenTriggersMs ?? 1e4,
          o = this.bugConfig.linterStrategyV2?.debounceTriggersMs ?? 1e3
        clearTimeout(this.O),
          (this.O = setTimeout(() => {
            Date.now() - this.f >= r && this.triggerV2({ uri: n, position: s })
          }, o))
      }
      onDidChangeModelContent(e, t) {
        const s = e.getModel()
        if (!s) return
        const n = this.activeBugs.get(s.uri.fsPath)
        if (!n) return
        let r = []
        for (let o = 0; o < n.length; o++) {
          const a = n[o],
            l = s.getDecorationRange(a.decorationId)
          if (!l) {
            r.push(o), console.error("Bug decoration not found, deleting bug:", a)
            continue
          }
          const c = s.getValueInRange(l),
            h = a.bug.locations.at(0)
          h !== void 0 &&
            c.trim() !== h.codeLines.join(s.getEOL()).trim() &&
            (r.push(o),
            console.log("Bug lines do not match, deleting bug:", a),
            s.deltaDecorations([a.decorationId], []))
        }
        for (const o of r.reverse()) n.splice(o, 1)
        n.length === 0 && this.activeBugs.delete(s.uri.fsPath),
          r.length > 0 && this.b.fire(s.uri.fsPath)
      }
      attachEditor(e) {
        const t = new J()
        t.add(
          e.onDidChangeModelContent((s) => {
            this.onDidChangeModelContent(e, s)
          }),
        ),
          e.onDidDispose(() => {
            t.dispose()
          })
      }
      async Q(e) {
        const t = this.s.activeEditor
        if (!t) return { diff: new FT(), gitRoot: void 0 }
        const s = t.resource
        if (!s) return { diff: new FT(), gitRoot: void 0 }
        const n = un(s),
          r = await this.y.getGitRoot(n.fsPath)
        if (!r) return { diff: new FT(), gitRoot: void 0 }
        const o = U.file(r),
          a = await this.y.getBranchDiff({
            cwd: o,
            unifiedContextLines: e.keepLinesAroundChunk,
            targets: [e.target.fsPath],
          })
        return a
          ? {
              diff: new FT({
                diffs: a.map((l) => this.G.fileDiffToProtoDiff(l)),
              }),
              gitRoot: o,
            }
          : { diff: new FT(), gitRoot: o }
      }
      async triggerV2(e) {
        if (this.R) {
          console.log("Already triggering bug finder, not triggering again!")
          return
        }
        ;(this.R = !0), (this.f = Date.now())
        const t = new J()
        try {
          const s = this.C.listCodeEditors()
          let n,
            r = null
          for (const p of s) {
            const m = p.getModel()
            if (m?.uri === e.uri) {
              ;(n = m), (r = p.getPosition())
              break
            }
          }
          if (!n) {
            console.log(
              "No active editor URI matches the URI we want to trigger on, skipping!",
            )
            return
          }
          if (r && Math.abs(r.lineNumber - e.position.lineNumber) > 40) {
            console.log("Position is more than 40 lines away, skipping!")
            return
          }
          const o = e.position,
            a = e.uri
          if (n.isTooLargeForSyncing() || n.isTooLargeForTokenization()) {
            console.log("Model is too large for bug finding, skipping!")
            return
          }
          if (
            n.getLineCount() >
            (this.bugConfig.linterStrategyV2
              ?.preventTriggeringForFilesWithThisManyLines ?? 2e4)
          ) {
            console.log("Model is too large for bug finding, skipping!")
            return
          }
          const { diff: l, gitRoot: c } = await this.Q({
            target: a,
            keepLinesAroundChunk:
              this.bugConfig.linterStrategyV2?.keepLinesAroundChunk ?? 100,
          })
          if (l.diffs.length === 0) throw new Error("No file diffs found")
          if (!c) throw new Error("No git root found")
          const h = await this.a.get()
          if (!this.bugConfig.linterStrategyV2?.enabled) return
          const d = rt(),
            g = h.streamBugBotLinter(
              {
                gitDiff: l,
                activeFile: Sg(c, a),
                cursorLineNumberOneIndexed: o.lineNumber,
                telemEnabled: this.t.canWeTrackTelem(),
                sessionId: this.t.getCurrentSessionId(),
              },
              { headers: wn(d) },
            )
          this.I.recordBugBotLinterEvent({
            requestId: d,
            model: n,
            eventType: { case: "started", value: {} },
          }),
            await this.S(g, d)
        } catch (s) {
          console.error("Failed to trigger bug finding:", s)
        } finally {
          t.dispose(), (this.R = !1)
        }
      }
      async createDummyBug() {
        const e = this.C.getActiveCodeEditor()
        if (!e) return
        const t = e.getModel()
        if (!t) return
        const s = e.getPosition()
        if (!s) return
        const n = s.lineNumber,
          r = []
        for (let l = 0; l < 3; l++)
          n + l <= t.getLineCount() && r.push(t.getLineContent(n + l))
        const o = new Toe({
            locations: [
              {
                file: this.z.asRelativePath(t.uri),
                startLine: n,
                endLine: n + r.length - 1,
                codeLines: r,
              },
            ],
            description:
              "This is a dummy bug for debugging purposes" +
              " This is a dummy bug for debugging purposes".repeat(
                Math.floor(Math.random() * 7),
              ),
            id: rt(),
          }),
          a = (async function* () {
            yield new RBi({ bugs: [o] })
          })()
        await this.S(a, rt())
      }
      async S(e, t) {
        for await (const s of e)
          for (const n of s.bugs) {
            const r = n.locations.at(0)
            if (r === void 0) {
              console.error("Bug has no location:", n)
              continue
            }
            if (n.locations.length !== 1) {
              console.error("Bug has multiple locations:", n)
              continue
            }
            const o = await this.n.createModelReference(
              this.z.resolveRelativePath(r.file),
            )
            try {
              const a = o.object?.textEditorModel
              if (!a) {
                console.error("Failed to create text model for bug finding:", n)
                continue
              }
              this.U(n, a, t)
              const l = (() => {
                let d = Math.max(1, r.startLine - 10),
                  g = Math.min(a.getLineCount(), r.endLine + 10)
                const p = []
                for (let C = d; C <= g; C++) {
                  const S = a.getLineContent(C)
                  p.push({ value: S, hash: va(S) })
                }
                const m = r.codeLines.map((C) => ({ value: C, hash: va(C) })),
                  b = []
                for (let C = 0; C <= p.length - m.length; C++) {
                  let S = !0
                  for (let x = 0; x < m.length; x++)
                    if (p[C + x].hash !== m[x].hash) {
                      S = !1
                      break
                    }
                  S && b.push(C + d)
                }
                if (b.length === 0)
                  return (
                    console.log("No matching indices found for bug:", n),
                    { type: "heuristic", heuristic: WB.LINES_MISMATCH }
                  )
                const y = b.reduce(
                  (C, S) =>
                    Math.abs(S - r.startLine) < Math.abs(C - r.startLine) ? S : C,
                  b[0],
                )
                let w = !0
                for (let C = 0; C < m.length; C++)
                  if (a.getLineContent(y + C) !== r.codeLines[C]) {
                    console.log(
                      "Bug lines do not match at index, even after a hash match. This is surprising:",
                      C,
                    ),
                      (w = !1)
                    break
                  }
                if (!w) return { type: "heuristic", heuristic: WB.LINES_MISMATCH }
                if (this.bugConfig.linterStrategyV2?.preventTriggeringWhenLints) {
                  const S = this.F.read({ resource: a.uri }).filter(
                    (x) =>
                      x.startLineNumber >= y &&
                      x.endLineNumber <= y + m.length - 1,
                  )
                  if (S.length > 0)
                    return (
                      console.log(
                        "Found overlapping lints, skipping bug finding:",
                        S,
                      ),
                      { type: "heuristic", heuristic: WB.LINT_OVERLAP }
                    )
                }
                return {
                  type: "range",
                  range: new G(
                    y,
                    0,
                    y + m.length - 1,
                    a.getLineMaxColumn(y + m.length - 1),
                  ),
                }
              })()
              if (l.type === "heuristic") {
                this.I.recordBugBotLinterEvent({
                  model: a,
                  requestId: t,
                  eventType: {
                    case: "notShownBecauseHeuristic",
                    value: { heuristic: l.heuristic },
                  },
                })
                continue
              }
              const c = l.range,
                h = a.deltaDecorations(
                  [],
                  [
                    {
                      range: c,
                      options: {
                        className: "ai-bug-finder-bug-decoration",
                        description: "bug",
                        isWholeLine: !0,
                        overviewRuler: {
                          color: "rgba(255, 100, 100, 0.5)",
                          position: rc.Right,
                        },
                      },
                    },
                  ],
                )
              let u = this.activeBugs.get(a.uri.fsPath)
              u || ((u = []), this.activeBugs.set(a.uri.fsPath, u)),
                u.push({ decorationId: h[0], requestId: t, bug: n }),
                this.b.fire(a.uri.fsPath)
            } catch (a) {
              console.error("Failed to create text model for bug finding:", a)
            } finally {
              o.dispose()
            }
          }
      }
      markGoodFind(e, t) {
        const {
          intersectingBugs: s,
          bugs: n,
          model: r,
        } = this.getIntersectingBugs(e, t)
        if (!(s.length === 0 || !r)) {
          for (const o of s)
            this.I.recordBugBotLinterEvent({
              model: r,
              requestId: o.requestId,
              eventType: {
                case: "userFeedback",
                value: { bugReportId: o.bug.id, feedback: "good" },
              },
            })
          this.dismissBugBotLinter(e, t)
        }
      }
      markViewed(e, t) {
        const {
          intersectingBugs: s,
          bugs: n,
          model: r,
        } = this.getIntersectingBugs(e, t)
        if (!(s.length === 0 || !r))
          for (const o of s)
            this.I.recordBugBotLinterEvent({
              model: r,
              requestId: o.requestId,
              eventType: {
                case: "viewedReport",
                value: { bugReportId: o.bug.id },
              },
            })
      }
      markUnviewed(e, t) {
        const {
          intersectingBugs: s,
          bugs: n,
          model: r,
        } = this.getIntersectingBugs(e, t)
        if (!(s.length === 0 || !r))
          for (const o of s)
            this.I.recordBugBotLinterEvent({
              model: r,
              requestId: o.requestId,
              eventType: {
                case: "unviewedReport",
                value: { bugReportId: o.bug.id },
              },
            })
      }
      markUnhelpful(e, t) {
        const {
          intersectingBugs: s,
          bugs: n,
          model: r,
        } = this.getIntersectingBugs(e, t)
        if (!(s.length === 0 || !r)) {
          for (const o of s)
            this.I.recordBugBotLinterEvent({
              model: r,
              requestId: o.requestId,
              eventType: {
                case: "userFeedback",
                value: { bugReportId: o.bug.id, feedback: "bad" },
              },
            })
          this.dismissBugBotLinter(e, t)
        }
      }
      getIntersectingBugs(e, t) {
        const s = e.getModel()
        if (!s) return { intersectingBugs: [], bugs: [], model: null }
        const n = this.activeBugs.get(s.uri.fsPath)
        return n
          ? {
              intersectingBugs: (() => {
                if (t?.decorationId)
                  return n.filter((l) => l.decorationId === t.decorationId)
                const o = e.getSelections()
                return o === null || o.length === 0
                  ? []
                  : n.filter((l) => {
                      const c = s.getDecorationRange(l.decorationId)
                      for (const h of o) if (c && c.intersectRanges(h)) return !0
                      return !1
                    })
              })(),
              bugs: n,
              model: s,
            }
          : { intersectingBugs: [], bugs: [], model: s }
      }
      dismissBugBotLinter(e, t) {
        const {
          intersectingBugs: s,
          bugs: n,
          model: r,
        } = this.getIntersectingBugs(e, t)
        if (s.length === 0 || !r) return
        for (const a of s) this.W(a, r)
        let o = []
        for (let a = 0; a < n.length; a++)
          s.includes(n[a]) &&
            (o.push(a), r.deltaDecorations([n[a].decorationId], []))
        for (const a of o.reverse()) n.splice(a, 1)
        n.length === 0 && this.activeBugs.delete(r.uri.fsPath),
          o.length > 0 && this.b.fire(r.uri.fsPath)
      }
      dispose() {
        super.dispose()
      }
      U(e, t, s) {
        this.I.recordBugBotLinterEvent({
          model: t,
          requestId: s,
          eventType: { case: "lintGenerated", value: { bugReport: e } },
        })
      }
      W(e, t) {
        this.I.recordBugBotLinterEvent({
          model: t,
          requestId: e.requestId,
          eventType: { case: "lintDismissed", value: { bugReportId: e.bug.id } },
        })
      }
    }
  ;(nOt = __decorate(
    [
      __param(0, Z),
      __param(1, ei),
      __param(2, ft),
      __param(3, Xt),
      __param(4, nt),
      __param(5, Zi),
      __param(6, ve),
      __param(7, mI),
      __param(8, fn),
      __param(9, Cp),
      __param(10, YC),
      __param(11, it),
      __param(12, yi),
      __param(13, mo),
      __param(14, selectedContextService),
      __param(15, Y$),
      __param(16, cppEventLoggerService),
    ],
    nOt,
  )),
    Ve(CY, nOt, 1)
  var RYe = Re("mcpService"),
    rOt = class extends V {
      constructor(e, t, s, n) {
        super(),
          (this.j = e),
          (this.m = t),
          (this.n = s),
          (this.q = n),
          (this.b = le({})),
          (this.toolsCache = this.b[0]),
          (this.c = this.b[1]),
          (this.f = le({})),
          (this.statusCache = this.f[0]),
          (this.g = this.f[1]),
          (this.h = this.D(new R())),
          (this.onDidChangeServerStatus = this.h.event),
          (this.a = this.D(this.n.createScoped(this))),
          this.a.onChangeEffect({
            deps: [
              () => this.n.applicationUserPersistentStorage.mcpServers,
              () => this.n.applicationUserPersistentStorage.mcpServers.length,
            ],
            onChange: async ({ deps: [r, o] }) => (
              await this.r().catch((a) => {
                console.error("[MCPService] Error initializing servers:", a)
              }),
              await this.refreshTools().catch((a) => {
                console.error("[MCPService] Error refreshing tools:", a)
              }),
              r
            ),
            runNowToo: !0,
          })
      }
      async r() {
        console.info("[MCPService] Starting server initialization")
        const e = this.u()
        console.info(
          "[MCPService] Found servers on startup:",
          e.map((t) => ({
            identifier: t.identifier,
            type: t.type,
            command: t.command,
            url: t.url,
          })),
        )
        for (const t of e) {
          if (this.statusCache()[t.identifier]?.type === "connected") {
            console.info(
              `[MCPService] Server ${t.identifier} already connected, skipping`,
            )
            continue
          }
          try {
            if (t.type === "stdio" && !t.command) {
              console.warn(
                `[MCPService] Missing command for stdio server ${t.identifier}`,
              ),
                this.w(t.identifier, {
                  type: "error",
                  error: "Missing command for stdio server",
                })
              continue
            }
            console.info(
              `[MCPService] Creating client for server: ${t.identifier}`,
            ),
              await this.createClient(t),
              console.info(
                `[MCPService] Successfully created client for server: ${t.identifier}`,
              ),
              this.w(t.identifier, { type: "connected" })
          } catch (s) {
            console.error(
              `[MCPService] Error initializing server ${t.identifier}:`,
              s,
            ),
              this.w(t.identifier, {
                type: "error",
                error: s instanceof Error ? s.message : String(s),
              })
            continue
          }
        }
        try {
          await this.refreshTools()
        } catch (t) {
          console.error("[MCPService] Error fetching tools", t)
        }
      }
      u() {
        const e = this.n.applicationUserPersistentStorage.mcpServers || []
        return (
          console.info(
            "[MCPService] Getting servers:",
            e.map((t) => ({
              identifier: t.identifier,
              type: t.type,
              command: t.command,
              url: t.url,
              status: this.statusCache()[t.identifier],
            })),
          ),
          e
        )
      }
      w(e, t) {
        if (!this.u().find((o) => o.identifier === e)) {
          console.error(
            `[MCPService] Cannot update status: server ${e} not found`,
          )
          return
        }
        const r = this.statusCache()[e]
        this.g((o) => ({ ...o, [e]: t })),
          JSON.stringify(r) !== JSON.stringify(t) &&
            this.h.fire({ identifier: e, status: t })
      }
      y(e) {
        this.g((t) => {
          const { [e]: s, ...n } = t
          return n
        })
      }
      z(e) {
        return e.match(/^[a-z]{1,8}:\/\//)
          ? e
          : (console.info(`[MCPService] Adding http:// protocol to URL: ${e}`),
            `http://${e}`)
      }
      async C(e) {
        await this.m.waitForEverythingProvider(2500)
        const t = this.m.onlyLocalProvider
        if (!t) throw new Error("No provider found")
        const s = e.type === "sse" && e.url ? this.z(e.url) : e.url || ""
        try {
          const n = await t.runCommand(a7.ListTools, {
            serverUrl: s,
            serverType: e.type,
            command: e.command,
          })
          if (n?.tools) {
            const r = n.tools.map((o) => ({
              name: o.name,
              description: o.description,
              inputSchema: JSON.parse(o.parameters),
            }))
            return this.w(e.identifier, { type: "connected" }), r
          } else throw new Error("No tools found")
        } catch (n) {
          console.error(
            `[MCPService] Error fetching tools for server ${e.identifier}:`,
            n,
          ),
            this.w(e.identifier, {
              type: "error",
              error: n instanceof Error ? n.message : String(n),
            })
        }
        return []
      }
      async refreshTools() {
        const e = this.u()
        let t = {}
        for (const s of e)
          try {
            if (s.type === "stdio" && !s.command) {
              console.warn(
                `[MCPService] Missing command for stdio server ${s.identifier}`,
              )
              continue
            }
            t[s.identifier] = await this.C(s)
          } catch (n) {
            const r = n instanceof Error ? n.message : String(n)
            console.error(
              `[MCPService] Error refreshing tools for server ${s.identifier}:`,
              r,
            ),
              this.w(s.identifier, { type: "error", error: r })
          }
        this.c(t)
      }
      async statusOfServer(e) {
        return this.statusCache()[e.identifier] || { type: "disconnected" }
      }
      async getAvailableTools() {
        console.info("[MCPService] Getting available tools"),
          Object.keys(this.toolsCache()).length === 0 &&
            (await this.refreshTools())
        const e = {}
        for (const t in this.toolsCache()) e[t] = this.toolsCache()[t]
        return e
      }
      async getToolsForComposer() {
        try {
          await this.m.waitForEverythingProvider(500)
          const e = this.m.onlyLocalProvider
          if (!e) throw new Error("No provider found")
          const t = this.u(),
            s = t.filter(
              (r) => this.statusCache()[r.identifier]?.type === "connected",
            )
          if (s.length === 0)
            return (
              console.warn(
                "[MCPService] No connected servers found. Server statuses:",
                t
                  .map(
                    (r) =>
                      `${r.identifier}: ${this.statusCache()[r.identifier]?.type}`,
                  )
                  .join(", "),
              ),
              []
            )
          const n = []
          for (const r of s)
            try {
              const o = await e.runCommand(a7.ListTools, {
                serverUrl: r.url || "",
                serverType: r.type,
                command: r.command,
              })
              if (o?.tools) {
                const a = o.tools.map((l) => ({
                  name: l.name,
                  description: l.description,
                  parameters: l.parameters,
                }))
                n.push(...a)
              } else
                console.warn(
                  `[MCPService] No tools found for server ${r.identifier}`,
                )
            } catch (o) {
              console.error(
                `[MCPService] Error fetching tools from server ${r.identifier}:`,
                o,
              )
            }
          return n
        } catch (e) {
          const t = e instanceof Error ? e.message : "Unknown error"
          return (
            console.error("[MCPService] Error fetching tools for composer:", t),
            []
          )
        }
      }
      async callTool(e, t) {
        console.info(`[MCPService] Calling tool: ${e}`, t)
        try {
          await this.m.waitForEverythingProvider(500)
          const s = this.m.onlyLocalProvider
          if (!s) throw new Error("No provider found")
          let n
          for (const o in this.toolsCache())
            if (this.toolsCache()[o].some((l) => l.name === e)) {
              n = this.u().find((c) => c.identifier === o)
              break
            }
          if (!n)
            throw (
              (console.error(
                `[MCPService] No server found with tool ${e}`,
                this.toolsCache(),
              ),
              new Error(`No server found with tool ${e}`))
            )
          console.info(
            `[MCPService] Executing tool ${e} on server ${n.identifier} (${n.type === "stdio" ? n.command : n.url})`,
          )
          const r = await s.runCommand(a7.CallTool, {
            serverUrl: n.url || "",
            serverType: n.type,
            command: n.command,
            name: e,
            args: t,
          })
          if (
            r &&
            typeof r.result == "object" &&
            r.result !== null &&
            "error" in r.result &&
            typeof r.result.error == "string"
          )
            throw new Error(r.result.error)
          if (!r || r.result === void 0)
            throw new Error(`Tool ${e} returned no result`)
          return (
            this.w(n.identifier, { type: "connected" }),
            console.info(
              `[MCPService] Tool ${e} executed successfully with result ${JSON.stringify(r)}`,
            ),
            r.result
          )
        } catch (s) {
          const n = s instanceof Error ? s.message : "Unknown error"
          throw (
            (console.error(`[MCPService] Error executing tool ${e}:`, n),
            s instanceof Error ? s : new Error(n))
          )
        }
      }
      async deleteClient(e) {
        try {
          await this.m.waitForEverythingProvider(500)
          const t = this.m.onlyLocalProvider
          if (!t) throw new Error("No provider found")
          await t.runCommand(a7.DeleteClient, {
            serverType: e.type,
            identifier: e.type === "sse" ? e.url : e.command,
          }),
            this.y(e.identifier)
        } catch (t) {
          console.error("[MCPService] Error deleting client:", t)
        }
      }
      async createClient(e) {
        try {
          await this.m.waitForEverythingProvider(2500)
          const t = this.m.onlyLocalProvider
          if (!t) throw new Error("No provider found")
          const s = e.type === "sse" && e.url ? this.z(e.url) : e.url || ""
          await t.runCommand(a7.CreateClient, {
            serverUrl: s,
            serverType: e.type,
            command: e.command,
          })
        } catch (t) {
          throw (console.error("[MCPService] Error creating client:", t), t)
        }
      }
    }
  ;(rOt = __decorate(
    [__param(0, et), __param(1, everythingProviderService), __param(2, ei), __param(3, pt)],
    rOt,
  )),
    Ve(RYe, rOt, 0),
    KNi.clear()
  var PYn = [
    "queryBuilder",
    "symbolsQuickAccessProvider",
    "editorQuickAccessProvider",
    "quickAccessController",
    "anythingQuickAccessProvider",
  ]
  function LYn(i) {
    return !PYn.includes(i)
  }
  var oOt = {
      aiService: Br,
      contextMenuService: bi,
      inlineDiffService: oy,
      simpleInlineDiffService: B_,
      aiSettingsService: eg,
      clipboardService: An,
      configurationService: ue,
      cursorAuthenticationService: $h,
      cursorRulesService: lU,
      editorService: ve,
      editorGroupService: si,
      dialogService: Zi,
      fileService: nt,
      aiFeatureStatusService: aiFeatureStatusService,
      webCmdKService: HFt,
      workspacesService: lb,
      instantiationService: Z,
      aiContextSessionService: fP,
      composerService: Pa,
      composerDataService: Na,
      bugBotLinterService: CY,
      composerViewsService: cS,
      composerUtilsService: q1,
      keybindingService: Ft,
      languageService: Hi,
      languageFeaturesService: zi,
      cmdKService: Sk,
      editorWorkerService: nl,
      cmdKService2: ZR,
      modelService: qi,
      textModelService: Xt,
      openerService: Ci,
      textResourceConfigurationService: Fo,
      themeService: Pt,
      workspaceContextService: it,
      tokenStreamingDiffService: _Ft,
      commandService: st,
      workspaceEditingService: R1,
      hostService: Ks,
      storageService: et,
      toolformerService: gze,
      reactiveStorageService: ei,
      agentDebuggerService: ZUi,
      hallucinatedFunctionsDataService: KFt,
      reducerService: rU,
      repositoryService: Md,
      textFileService: fn,
      codeEditorService: yi,
      magicLinkService: Ag,
      urlService: uP,
      cursorCredsService: cursorCredsService,
      applyToFileActionsService: kYe,
      metricsService: metricsService,
      telemetryService: ft,
      chatDataService: cv,
      extensionGalleryService: Oc,
      extensionManagementService: uc,
      interpreterService: vY,
      aiTaskService: g2,
      markerDecorationsService: jM,
      markerService: mo,
      aiDocsService: UUi,
      indexPopupService: HUi,
      notificationService: Ht,
      cppService: cppService,
      mcpService: RYe,
      searchService: hw,
      serverConfigService: Y$,
      labelService: es,
      outlineService: Lg,
      contextViewService: ua,
      terminalConfigurationService: lv,
      fastEditService: x5,
      dataScrubbingService: u0,
      statusbarService: cl,
      terminalService: Vo,
      aiContextservice: wYe,
      simpleTestService: bY,
      undoRedoService: Ac,
      interfaceAgentService: pKi,
      aiErrorService: NI,
      aiChatService: p0,
      viewsService: Gi,
      fastContextService: T1,
      remoteAgentService: ko,
      hoverService: Wi,
      aiProjectService: SKi,
      productService: Ti,
      aiReviewService: uEt,
      gitContextService: YC,
      contextKeyService: Ce,
      environmentService: Vr,
      diffingService: diffingService,
      aiPreviewService: H4i,
      aiReaderService: hue,
      everythingProviderService: everythingProviderService,
      fastSemSearchService: FKi,
      semSearchService: pFt,
      tooltipService: qv,
      cursorPredictionService: cursorPredictionService,
      commitNotesService: OKi,
      sourceFilesService: nPt,
      importPredictionService: importPredictionService,
      lexicalReducerService: UKi,
      layoutService: _c,
      aiContextService: VKi,
      gitGraphService: tK,
      contextBankService: uue,
      scmService: Cp,
      queryBuilder: (i) => i.createInstance(g0),
      symbolsQuickAccessProvider: (i) => i.createInstance(m2),
      editorQuickAccessProvider: (i) => i.createInstance(c5),
      anythingQuickAccessProvider: (i) => i.createInstance(cF),
      quickAccessController: (i) => i.createInstance(yYe),
      backgroundCmdKService: dEt,
      recentFilesTrackerService: M_,
      extensionService: Qi,
      paneCompositeService: yc,
      notepadDataService: DR,
      notepadService: ZJ,
      selectedContextService: selectedContextService,
      terminalExecutionService: wY,
      quickInputService2: fEt,
      decorationsService: Tk,
      lifecycleService: fr,
      customEditorLabelService: Ck,
      bugbotService: PYe,
      bugbotDataService: LYe,
      analyticsService: _C,
      prettyDialogService: f5,
      composerUnificationService: vk,
      pathService: Pl,
    },
    aOt = Xp(),
    GKi = Xp(),
    yAo = Xp()
  function Wa(i, e, t, s) {
    const n = bt.document.createElement("div")
    return (
      (n.style.height = "100%"),
      (n.style.width = "100%"),
      s?.additionalStyles && Object.assign(n.style, s.additionalStyles),
      t.invokeFunction((r) => {
        const o = s?.restrictToServices ?? Object.keys(oOt),
          a = RHe(
            () =>
              jIi(
                () =>
                  I(GKi.Provider, {
                    get value() {
                      return { close: s?.onClose }
                    },
                    get children() {
                      return I(aOt.Provider, {
                        get value() {
                          return {
                            get window() {
                              return Ct(e)
                            },
                            get portalElement() {
                              if (due()) {
                                const d = ss()
                                return (
                                  hF.has(d) || hF.set(d, RFt()),
                                  hF.get(d) ?? d.document.body
                                )
                              }
                              const u = Ct(e)
                              return hF.get(u) ?? u.document.body
                            },
                            ...o
                              .map((h) =>
                                LYn(h)
                                  ? { [h]: r.get(oOt[h]) }
                                  : { [h]: oOt[h](r.get(Z)) },
                              )
                              .reduce((h, u) => ({ ...h, ...u }), {}),
                          }
                        },
                        get children() {
                          return i()
                        },
                      })
                    },
                  }),
                (h) => {
                  console.error("ERROR WHEN RENDERING SOLID COMPONENT", h)
                },
              ),
            n,
          )
        return (
          e.appendChild(n),
          {
            dispose: () => {
              a(), n.remove()
            },
            focus: () => {
              n.focus()
            },
          }
        )
      })
    )
  }

  return {
    vY,
    metricsService,
    diffingService,
    hF,
    RFt,
    yY,
    kYe,
    BP,
    FFt,
    DKi,
    TKi,
    OFt,
    og,
    lh,
    EYe,
    RKi,
    IYe,
    HFt,
    hue,
    qFt,
    hYn,
    GFt,
    UKi,
    KFt,
    uue,
    WKi,
    due,
    yYn,
    wYn,
    eOt,
    wY,
    cS,
    DYe,
    tOt,
    jKi,
    q1,
    PYe,
    iOt,
    LYe,
    NYe,
    CY,
    RYe,
    aOt,
    GKi,
    Wa,
  }
}
