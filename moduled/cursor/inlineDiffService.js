// @ts-check

// 171360
export function createInlineDiffService(params) {
  const { Re, V, UT, wn, rt, R, me, fu, vze, Pn, pp, cb, pae, c2, zf, Dks, DKs, TKs, extUri, rLt, __decorate, __param, Xt, Z, ei, fP, Ac, Ce, ve, Vi, ft, Br, Sk, cppEventLoggerService, yi, fn, Ve, MI, u$, A8n, mze, M8n, A1, Es, U, G, rc, Wm, Bse, Yne, JM, B8n, qi, Hi, ue, Na, Me } = params;

  var uLt,
    oy = Re("inlineDiffService")
  function Q8n() {
    let i = "abcdefghijklmnopqrstuvwxyz",
      e = ""
    for (let t = 0; t < 10; t++)
      e += i.charAt(Math.floor(Math.random() * i.length))
    return e
  }
  var dLt = class extends V {
    static {
      uLt = this
    }
    get diffInfos() {
      return Array.from(this.c.values()).map((e) => ({
        uri: e.inlineDiff.uri,
        diffId: e.id,
        composerMetadata: e.composerMetadata,
      }))
    }
    static {
      this.registeredActions = []
    }
    static registerAction(e) {
      this.registeredActions.push(e)
    }
    recordCancelEvent(e) {
      this.N.recordCmdKEvent(e.model, {
        requestId: e.requestId,
        promptBarId: e.promptBarId,
        eventType: { case: "interruptGeneration", value: {} },
      })
    }
    recordAcceptEvent(e) {
      this.N.recordCmdKEvent(e.model, {
        requestId: e.requestId,
        promptBarId: e.promptBarId,
        eventType: { case: "acceptAll", value: {} },
      })
    }
    recordRejectEvent(e) {
      this.N.recordCmdKEvent(e.model, {
        requestId: e.requestId,
        promptBarId: e.promptBarId,
        eventType: { case: "rejectAll", value: {} },
      })
    }
    recordPartialAcceptEvent(e) {
      this.N.recordCmdKEvent(e.model, {
        requestId: e.requestId,
        promptBarId: e.promptBarId,
        eventType: {
          case: "acceptPartialDiff",
          value: {
            greenRange: e.greenRange,
            redLines: e.redLines,
            greenLines: e.greenLines,
          },
        },
      })
    }
    recordPartialRejectEvent(e) {
      this.N.recordCmdKEvent(e.model, {
        promptBarId: e.promptBarId,
        requestId: e.requestId,
        eventType: {
          case: "rejectPartialDiff",
          value: {
            greenRange: e.greenRange,
            redLines: e.redLines,
            greenLines: e.greenLines,
          },
        },
      })
    }
    async reportEditFate(
      e,
      t,
      { numPartiallyAccepted: s, numPartiallyRejected: n, numUnresolved: r },
    ) {
      let o
      if (t === "accept")
        n > 0
          ? (o = {
              requestId: e,
              fate: UT.PARTIALLY_ACCEPTED,
              numAcceptedPartialDiffs: s + r,
              numRejectedPartialDiffs: n,
            })
          : (o = { requestId: e, fate: UT.ACCEPTED })
      else if (t === "reject")
        s > 0
          ? (o = {
              requestId: e,
              fate: UT.PARTIALLY_ACCEPTED,
              numAcceptedPartialDiffs: s,
              numRejectedPartialDiffs: n + r,
            })
          : (o = { requestId: e, fate: UT.REJECTED })
      else if (t === "partial")
        s === 0
          ? (o = { requestId: e, fate: UT.REJECTED })
          : n === 0
            ? (o = { requestId: e, fate: UT.ACCEPTED })
            : (o = {
                requestId: e,
                fate: UT.PARTIALLY_ACCEPTED,
                numAcceptedPartialDiffs: s,
                numRejectedPartialDiffs: n,
              })
      else throw new Error(`Invalid event type: ${t}`)
      const a = await this.u.get()
      try {
        await a.reportEditFate(o, { headers: wn(rt()) })
      } catch (l) {
        console.warn("Failed to report edit fate to the server", l)
      }
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d, g, p) {
      super(),
        (this.w = e),
        (this.y = t),
        (this.z = s),
        (this.C = n),
        (this.F = r),
        (this.G = o),
        (this.H = a),
        (this.I = l),
        (this.J = c),
        (this.L = h),
        (this.M = u),
        (this.N = d),
        (this.O = g),
        (this.P = p),
        (this.c = new Map()),
        (this.h = this.D(new R())),
        (this.onDidChangeDiffInfos = this.h.event),
        (this.j = this.D(new R())),
        (this.onDidAcceptDiff = this.j.event),
        (this.m = this.D(new R())),
        (this.onDidRejectDiff = this.m.event),
        (this.n = this.D(new R())),
        (this.onDidAddDiffFromUndoRedo = this.n.event),
        (this.q = this.D(new R())),
        (this.onDidRemoveDiffFromUndoRedo = this.q.event),
        (this.s = this.D(new R())),
        (this.onDidAcceptPartialDiff = this.s.event),
        (this.t = this.D(new R())),
        (this.onDidRejectPartialDiff = this.t.event),
        (this.f = me.hasActivelyGeneratingPromptBarDiff.bindTo(this.G))
      for (const m of uLt.registeredActions) m(this.z)
      ;(this.g = this.D(this.z.createScoped(this))),
        this.g.onChangeEffect({
          deps: [
            () => this.z.nonPersistentStorage.promptBars,
            () => this.z.nonPersistentStorage.inprogressAIGenerations,
            () => this.z.nonPersistentStorage.promptBars.map((m) => m.diffId),
          ],
          onChange: () => {
            let m = false
            for (const b of this.z.nonPersistentStorage.promptBars)
              if (b.diffId !== undefined) {
                const y = this.c.get(b.diffId)
                if (
                  y?.inlineDiff.generationUUID &&
                  this.z.nonPersistentStorage.inprogressAIGenerations.some(
                    (w) => w.generationUUID === y?.inlineDiff.generationUUID,
                  )
                ) {
                  m = true
                  break
                }
              }
            this.f.set(m)
          },
        }),
        (this.u = this.y.createInstance(fu, { service: vze }))
    }
    getHandlerByDiffId(e) {
      return this.c.get(e)
    }
    revealDiff(e) {
      const t = this.c.get(e)
      if (!t) return
      const s = this.H.activeEditorPane
      if (s === undefined) return
      const n = s.getControl()
      n !== undefined &&
        Pn(n) &&
        this.I.extUri.isEqual(n.getModel()?.uri, t.inlineDiff.uri) &&
        n.revealRangeInCenter({
          startLineNumber: t.inlineDiff.currentRange.startLineNumber,
          startColumn: 1,
          endLineNumber: t.inlineDiff.currentRange.endLineNumberExclusive,
          endColumn: 1,
        })
    }
    _remove(e) {
      const t = this.z.nonPersistentStorage.promptBars.find(
        (s) => s.diffId === e.id,
      )
      t &&
        this.z.setNonPersistentStorage(
          "promptBars",
          (s) => s.id === t.id,
          "diffId",
          undefined,
        ),
        this.c.delete(e.id),
        e.remove(),
        e.dispose(),
        this.h.fire()
    }
    remove(e, t, s) {
      const n = this.c.get(e)
      if (!n) return
      let r = pp(n.inlineDiff),
        o
      if (!n.inlineDiff.isHidden) {
        const a = new cb(
          "Undo Remove Diff",
          "undo-remove-diff",
          e,
          n.inlineDiff.uri,
          async () => {
            const l = await this.w.createModelReference(n.inlineDiff.uri)
            ;(o = this.y.createInstance(f2, l, { ...r, id: e }, n.promptBarId)),
              this.c.set(e, o),
              this.h.fire(),
              this.n.fire({
                uri: n.inlineDiff.uri,
                diffId: e,
                composerMetadata: n.composerMetadata,
              })
          },
          () => {
            const l = this.c.get(e)
            l &&
              ((r = pp(l.inlineDiff)),
              this.cancelInUndo(e),
              this._remove(l),
              this.q.fire({
                diffInfo: {
                  uri: l.inlineDiff.uri,
                  diffId: e,
                  composerMetadata: l.composerMetadata,
                },
                accepted: s ?? false,
              }))
          },
        )
        this.pushUndoElement(a, {}),
          (t ?? false) &&
            n.promptBarId &&
            this.Q(n.promptBarId)?.diffId === e &&
            this.U(n.promptBarId)
      }
      this._remove(n)
    }
    Q(e) {
      return pae(this.z.nonPersistentStorage.promptBars.find((t) => t.id === e))
    }
    R(e) {
      this.z.setNonPersistentStorage("promptBars", [
        ...this.z.nonPersistentStorage.promptBars.filter((t) => t.id !== e.id),
        e,
      ])
    }
    S(e) {
      this.z.setNonPersistentStorage(
        "promptBars",
        this.z.nonPersistentStorage.promptBars.filter((t) => t.id !== e),
      )
    }
    U(e) {
      const t = this.Q(e)
      if (t?.uri === undefined) return
      this.S(e)
      const s = { current: undefined }
      let n
      if (
        (this.w
          .createModelReference(t.uri)
          .then((r) => {
            s.current = this.M.getPromptBarCurrentRange(
              t,
              r.object.textEditorModel,
            )
            const o = t.currentRangeDecorationId
            o && r.object.textEditorModel.deltaDecorations([o], [])
          })
          .finally(() => {
            n?.dispose()
          }),
        t?.diffId === undefined)
      ) {
        let r
        this.w
          .createModelReference(t.uri)
          .then((o) => {
            if (((r = o), t.modifyTextModelPrePromptBarBackwardEdit.length > 0)) {
              const a = this.M.getPromptBarCurrentRange(
                t,
                o.object.textEditorModel,
              )
              t.prePromptBarCursorPosition &&
                a &&
                fLt(
                  this.O,
                  {
                    startLineNumber: a.startLineNumber,
                    endLineNumber: a.endLineNumberExclusive - 1,
                    startColumn: 1,
                    endColumn: 1,
                  },
                  o.object.textEditorModel.uri,
                  t.prePromptBarCursorPosition,
                ),
                sK(
                  o.object.textEditorModel,
                  t.modifyTextModelPrePromptBarBackwardEdit,
                )
            }
          })
          .finally(() => {
            r?.dispose()
          }),
          this.F.pushElement(
            new c2(
              "Undo Close Prompt Bar",
              "undo-close-prompt-bar",
              t?.uri,
              async () => {
                let o
                try {
                  ;(o = await this.w.createModelReference(t.uri)),
                    t.modifyTextModelPrePromptBarForwardEdit.length > 0 &&
                      sK(
                        o.object.textEditorModel,
                        t.modifyTextModelPrePromptBarForwardEdit,
                      )
                  const a = o.object.textEditorModel.deltaDecorations(
                    [],
                    [
                      {
                        range: {
                          startLineNumber: s.current?.startLineNumber ?? 1,
                          endLineNumber:
                            (s.current?.endLineNumberExclusive ?? 2) - 1,
                          startColumn: 1,
                          endColumn: o.object.textEditorModel.getLineMaxColumn(
                            (s.current?.endLineNumberExclusive ?? 2) - 1,
                          ),
                        },
                        options: {
                          description: "promptBar-tracking-range",
                          isWholeLine: true,
                        },
                      },
                    ],
                  )[0]
                  zf(() => {
                    ;(t.currentRangeDecorationId = a), this.R(t)
                  })
                } finally {
                  o?.dispose()
                }
              },
              async () => {
                let o
                try {
                  ;(o = await this.w.createModelReference(t.uri)),
                    (s.current = this.M.getPromptBarCurrentRange(
                      t,
                      o.object.textEditorModel,
                    ))
                  const a = t.currentRangeDecorationId
                  if (
                    (a && o.object.textEditorModel.deltaDecorations([a], []),
                    this.S(t.id),
                    t.modifyTextModelPrePromptBarBackwardEdit.length > 0)
                  ) {
                    const l = this.M.getPromptBarCurrentRange(
                      t,
                      o.object.textEditorModel,
                    )
                    t.prePromptBarCursorPosition &&
                      l &&
                      fLt(
                        this.O,
                        {
                          startLineNumber: l.startLineNumber,
                          endLineNumber: l.endLineNumberExclusive - 1,
                          startColumn: 1,
                          endColumn: 1,
                        },
                        o.object.textEditorModel.uri,
                        t.prePromptBarCursorPosition,
                      ),
                      sK(
                        o.object.textEditorModel,
                        t.modifyTextModelPrePromptBarBackwardEdit,
                      )
                  }
                } finally {
                  o?.dispose()
                }
              },
            ),
          )
      } else {
        const r = new cb(
          "Undo Close Prompt Bar",
          "undo-close-prompt-bar",
          t.diffId,
          t.uri,
          async () => {
            let o
            try {
              o = await this.w.createModelReference(t.uri)
              const a = o.object.textEditorModel.deltaDecorations(
                [],
                [
                  {
                    range: {
                      startLineNumber: s.current?.startLineNumber ?? 1,
                      endLineNumber: (s.current?.endLineNumberExclusive ?? 2) - 1,
                      startColumn: 1,
                      endColumn: o.object.textEditorModel.getLineMaxColumn(
                        (s.current?.endLineNumberExclusive ?? 2) - 1,
                      ),
                    },
                    options: {
                      description: "promptBar-tracking-range",
                      isWholeLine: true,
                    },
                  },
                ],
              )[0]
              zf(() => {
                ;(t.currentRangeDecorationId = a), this.R(t)
              })
            } finally {
              o?.dispose()
            }
          },
          async () => {
            let o
            try {
              ;(o = await this.w.createModelReference(t.uri)),
                (s.current = this.M.getPromptBarCurrentRange(
                  t,
                  o.object.textEditorModel,
                ))
              const a = t.currentRangeDecorationId
              a && o.object.textEditorModel.deltaDecorations([a], []),
                this.S(t.id)
            } finally {
              o?.dispose()
            }
          },
        )
        this.pushUndoElement(r, {})
      }
    }
    hidePromptBar(e) {
      this.U(e)
    }
    async applyEditsNoUpdateDiffs(e, t) {
      const s = this.z.nonPersistentStorage.inlineDiffs.filter(
        (r) => r.uri.fsPath === e.fsPath,
      )
      let n
      try {
        n = await this.w.createModelReference(e)
        const r = n.object.textEditorModel,
          o = new Map()
        s.forEach((a) => {
          const l = this.c.get(a.id)
          l && (o.set(a.id, l.active), l.activate())
        }),
          r.applyEdits(t),
          s.forEach((a) => {
            const l = this.c.get(a.id)
            l && (l.active = o.get(a.id) || false)
          })
      } finally {
        n?.dispose()
      }
    }
    async _addDiff(e, t) {
      const s = await this.w.createModelReference(e.uri),
        n = this.y.createInstance(f2, s, e, t)
      this.c.set(n.id, n), this.h.fire()
    }
    async addActiveDiff(e, t) {
      const s = await this.addDiff(e, t)
      return s.activate(), s
    }
    async addDiff(e, t, s, n) {
      const r = await this.w.createModelReference(e.uri),
        o = this.y.createInstance(f2, r, e, t)
      this.c.set(o.id, o), this.h.fire()
      const a = o.id
      if (n && !s) {
        const l = new cb(
          "Undo Start Diff",
          "undo-start-diff",
          a,
          e.uri,
          n.undo,
          n.redo,
        )
        this.pushUndoElement(l, { breakConsolidation: true })
      }
      if (!s) {
        let l = pp(o.inlineDiff),
          c,
          h = false,
          u = t ? this.Q(t) : undefined
        const d = new cb(
          "Undo Create Diff",
          "undo-create-diff",
          a,
          r.object.textEditorModel.uri,
          () => {
            const g = this.c.get(a)
            g &&
              ((l = pp(g.inlineDiff)),
              this.cancelInUndo(a),
              (u = t ? this.Q(t) : undefined),
              u?.diffId === g.id && (h = true),
              this._remove(g),
              this.q.fire({
                diffInfo: {
                  uri: e.uri,
                  diffId: a,
                  composerMetadata: g.composerMetadata,
                },
                accepted: false,
              }))
          },
          async () => {
            const g = await this.w.createModelReference(e.uri)
            ;(c = this.y.createInstance(f2, g, { ...l, id: a }, t)),
              this.c.set(a, c),
              this.h.fire(),
              this.n.fire({
                uri: e.uri,
                diffId: a,
                composerMetadata: c.composerMetadata,
              }),
              h && u && this.R(u)
          },
        )
        this.pushUndoElement(d, {})
      }
      return o
    }
    cancelDiff(e, t) {
      const s = this.c.get(e)
      if (!s) {
        this.z.setNonPersistentStorage(
          "inlineDiffs",
          this.z.nonPersistentStorage.inlineDiffs.filter((n) => n.id !== e),
        )
        return
      }
      s.cancel(), s.finishFailure()
    }
    setDiff(e, t) {
      const s = this.c.get(e)
      s && s.setDiff(t)
    }
    cancelInUndo(e) {
      const t = this.c.get(e)
      t && t.cancelInUndo()
    }
    findClosestChange(e, t) {
      const s = this.c.get(e)
      if (s && s instanceof f2) return s.findClosestChange(t)
    }
    acceptPartialDiff(e, t) {
      const s = this.c.get(e)
      if (!s) return false
      s.inlineDiff.isHidden ||
        this.J.publicLogCapture("inlineDiffAcceptPartial", {
          generationUUID: s.inlineDiff.generationUUID,
        }),
        this.pushUndoElement(
          new cb(
            "Undo Accept Partial Diff",
            "undo-accept-partial-diff",
            e,
            s.inlineDiff.uri,
            () => {},
            () => {},
          ),
          { breakConsolidation: true },
        )
      let n = [],
        r = []
      if (s instanceof f2) {
        const a = s.findClosestChange(t)
        ;(n = s.inlineDiff.newTextLines.slice(
          a.addedRange.startLineNumber - 1,
          a.addedRange.endLineNumberExclusive - 1,
        )),
          (r = [...a.removedTextLines])
      }
      const o = s.acceptPartialDiff(t)
      return (
        o && this.remove(e, true, true),
        this.s.fire({
          diffInfo: {
            diffId: e,
            uri: s.inlineDiff.uri,
            composerMetadata: s.composerMetadata,
          },
          isDone: o,
          change: { accepted: n, rejected: r },
        }),
        o
      )
    }
    rejectPartialDiff(e, t) {
      const s = this.c.get(e)
      if (!s) return false
      s.inlineDiff.isHidden ||
        this.J.publicLogCapture("inlineDiffRejectPartial", {
          generationUUID: s.inlineDiff.generationUUID,
        }),
        this.pushUndoElement(
          new cb(
            "Undo Reject Partial Diff",
            "undo-reject-partial-diff",
            e,
            s.inlineDiff.uri,
            () => {},
            () => {},
          ),
          { breakConsolidation: true },
        )
      let n = [],
        r = []
      if (s instanceof f2) {
        const a = s.findClosestChange(t)
        ;(r = s.inlineDiff.newTextLines.slice(
          a.addedRange.startLineNumber - 1,
          a.addedRange.endLineNumberExclusive - 1,
        )),
          (n = [...a.removedTextLines])
      }
      const o = s.rejectPartialDiff(t)
      return (
        o && this.remove(e, undefined, false),
        this.t.fire({
          diffInfo: {
            diffId: e,
            uri: s.inlineDiff.uri,
            composerMetadata: s.composerMetadata,
          },
          isDone: o,
          change: { accepted: n, rejected: r },
        }),
        o
      )
    }
    acceptDiff(e, t) {
      const s = this.c.get(e)
      s &&
        (s.inlineDiff.isHidden ||
          this.J.publicLogCapture(DKs, {
            generationUUID: s.inlineDiff.generationUUID,
          }),
        this.pushUndoElement(
          new cb(
            "Undo Accept Diff",
            "undo-accept-diff",
            e,
            s.inlineDiff.uri,
            () => {},
            () => {},
          ),
          {
            breakConsolidation:
              t?.dontBreakConsolidation !== undefined
                ? !t.dontBreakConsolidation
                : true,
          },
        ),
        s.inlineDiff.isHidden ? s.reject() : s.accept(),
        this.remove(e, true, true),
        this.j.fire({
          diffId: e,
          uri: s.inlineDiff.uri,
          composerMetadata: s.composerMetadata,
        }))
    }
    rejectDiff(e, t) {
      const s = this.c.get(e)
      if (!s) {
        this.z.setNonPersistentStorage(
          "inlineDiffs",
          this.z.nonPersistentStorage.inlineDiffs.filter((n) => n.id !== e),
        )
        return
      }
      s.inlineDiff.isHidden ||
        this.J.publicLogCapture(TKs, {
          generationUUID: s.inlineDiff.generationUUID,
        }),
        this.pushUndoElement(
          new cb(
            "Undo Reject Diff",
            "undo-reject-diff",
            e,
            s.inlineDiff.uri,
            () => {},
            () => {},
          ),
          {
            breakConsolidation:
              t?.dontBreakConsolidation !== undefined
                ? !t.dontBreakConsolidation
                : true,
          },
        ),
        s.inlineDiff.isHidden ? s.accept() : s.reject(),
        s.callRejectCallback(),
        this.remove(e, t?.close, false),
        t?.rejectSilently ||
          this.m.fire({
            diffId: e,
            uri: s.inlineDiff.uri,
            composerMetadata: s.composerMetadata,
          })
    }
    finishDiffSuccess(e) {
      const t = this.c.get(e)
      t && t.finishSuccess()
    }
    addLineToDiff(e, t) {
      this.addLinesToDiff(e, [t])
    }
    addLinesToDiff(e, t) {
      const s = this.c.get(e)
      s && s.addLinesToDiff(t)
    }
    async streamDiff({
      uri: e,
      originalLineRange: t,
      hideDeletionViewZones: s,
      generationUUID: n,
      streamingLines: r,
      originalTextLines: o,
      originalLineTokens: a,
      extraContextLinesAbove: l,
      extraContextLinesBelow: c,
      prompt: h,
      undoRedo: u,
      isHidden: d = false,
      diffIdCallback: g,
      doneCallback: p,
      cancelGenerationWithNoChangesCallback: m,
      rejectCallback: b,
      promptBarId: y,
      composerId: w,
    }) {
      const C = {
          uri: e,
          generationUUID: n,
          currentRange: t,
          originalTextLines: o,
          originalLineTokens: a,
          prompt: h,
          isHidden: d,
          hideDeletionViewZones: s,
          attachedToPromptBar: g !== undefined,
          extraContextLinesAbove: l,
          extraContextLinesBelow: c,
          composerId: w,
        },
        S = await this.addDiff(C, y, d, u)
      S.activate(p, m, b), g !== undefined && g(S.id)
      let x = false
      try {
        for await (const k of r) S.addLinesToDiff([k])
      } catch {
        x = true
      }
      x ? S.finishFailure() : S.finishSuccess()
    }
    pushUndoElement(e, t) {
      if (t.breakConsolidation === true) {
        this.F.pushElement(e)
        return
      }
      const s = this.F.getLastElement(e.resource)
      s instanceof cb ? s.push(e) : this.F.pushElement(e)
    }
    dispose() {
      super.dispose()
      for (const e of this.c.values()) e.dispose()
      this.c.clear(), this.h.fire()
    }
    getGroupedChanges({ diffId: e, mergeRadius: t = 15 }) {
      const s = [],
        n = this.z.nonPersistentStorage.inlineDiffs.find((l) => l.id === e)
      if (n === undefined) return s
      const r = n.changes.sort(
        (l, c) => l.addedRange.startLineNumber - c.addedRange.startLineNumber,
      )
      let o = [],
        a
      for (let l = 0; l < r.length; l++) {
        const c = r[l],
          h = o.at(-1)
        extUri.isEqual(a, n.uri) &&
        h !== undefined &&
        h.addedRange.endLineNumberExclusive + t >= c.addedRange.startLineNumber
          ? o.push(c)
          : (o.length > 0 && s.push(o), (o = [c]), (a = n.uri))
      }
      return a !== undefined && o.length > 0 && s.push(o), s
    }
    async applyNewModelLinesToFile(e) {
      const { uri: t, newModelLines: s } = e,
        n = this.z.nonPersistentStorage.inlineDiffs.find(
          (c) => c.uri.toString() === t.toString(),
        )
      n && this.remove(n.id)
      const r = await this.w.createModelReference(t),
        o = r.object.textEditorModel,
        a = o.getLinesContent(),
        l = rLt(a, s, true, false)
      this.P.write(t, l.newFullRangeTextLines.join(o.getEOL())), r.dispose()
    }
  }
  ;(dLt = uLt =
    __decorate(
      [
        __param(0, Xt),
        __param(1, Z),
        __param(2, ei),
        __param(3, fP),
        __param(4, Ac),
        __param(5, Ce),
        __param(6, ve),
        __param(7, Vi),
        __param(8, ft),
        __param(9, Br),
        __param(10, Sk),
        __param(11, cppEventLoggerService),
        __param(12, yi),
        __param(13, fn),
      ],
      dLt,
    )),
    Ve(oy, dLt, 1)
  var _Ui = (i) => (i === undefined ? [""] : i.newTextLines),
    f2 = class extends V {
      get id() {
        return this.inlineDiff.id
      }
      constructor(e, t, s, n, r, o, a, l, c, h, u, d) {
        super(),
          (this.s = n),
          (this.t = r),
          (this.u = o),
          (this.w = a),
          (this.y = l),
          (this.z = c),
          (this.C = h),
          (this.F = u),
          (this.G = d),
          (this.f = MI.getDefault()),
          (this.g = MI.getLegacy()),
          (this.h = []),
          (this.j = false),
          (this.m = 0),
          (this.n = 0),
          (this.q = false),
          (this.active = false),
          (this.H = []),
          (this.lastUndoEdits = null),
          (this.c = e),
          (this.promptBarId = s),
          (this.composerMetadata = t.composerMetadata),
          (this.inlineDiff = {
            id: rt(),
            changes: [],
            activeLine: undefined,
            pendingRange: {
              startLineNumber: 1,
              endLineNumberExclusive:
                t.currentRange.endLineNumberExclusive -
                t.currentRange.startLineNumber +
                1,
            },
            newTextLines: t.newTextLines ?? [],
            isHidden: false,
            onAccept: undefined,
            onReject: undefined,
            canUndoUpdates: true,
            showNativeAcceptReject: false,
            ...t,
          })
        const g = u.onDidChangeConfiguration((p) => {
          p.affectsConfiguration(u$) && this.I()
        })
        if ((this.D(g), t.attachedToPromptBar)) {
          const p = t.lastPromptBarCurrentRange ?? {
              startLineNumber: t.currentRange.startLineNumber,
              endLineNumberExclusive: t.currentRange.endLineNumberExclusive,
            },
            m = this.c.object.textEditorModel.deltaDecorations(
              [],
              [
                {
                  range: {
                    startLineNumber: p.startLineNumber,
                    endLineNumber: p.endLineNumberExclusive - 1,
                    startColumn: 1,
                    endColumn: this.c.object.textEditorModel.getLineMaxColumn(
                      p.endLineNumberExclusive - 1,
                    ),
                  },
                  options: {
                    description: "promptBar-tracking-range",
                    isWholeLine: true,
                  },
                },
              ],
            )[0]
          if (this.s.nonPersistentStorage.promptBars.some((b) => b.id === s)) {
            const b = this.s.nonPersistentStorage.promptBars.find(
              (y) => y.id === s,
            )
            b &&
              this.s.setNonPersistentStorage("promptBars", (y) => y.id === s, {
                ...b,
                diffId: this.inlineDiff.id,
                currentRangeDecorationId: m,
              })
          } else {
            const b = {
              id: rt(),
              uri: t.uri,
              data: A8n(t.prompt),
              diffId: t.id,
              height: 0,
              contextSessionUuid: this.y.createContextSession(mze()).uuid,
              queryHistory: undefined,
              chatResponse: undefined,
              currentRangeDecorationId: m,
              inlineChatHistory: undefined,
              previousStructuredTextsNewestFirst: [],
              modifyTextModelPrePromptBarBackwardEdit: [],
              modifyTextModelPrePromptBarForwardEdit: [],
              generating: false,
              forceRerenderInputBox: 0,
              prePromptBarCursorPosition: undefined,
              createdAt: Date.now(),
            }
          }
        }
        this.D(
          e.object.textEditorModel.onDidChangeContent((p) => {
            for (const m of p.changes)
              switch (M8n(this.inlineDiff.currentRange, m.range)) {
                case A1.After: {
                  if (this.inlineDiff.changes.length > 0) {
                    const y =
                      this.inlineDiff.changes[this.inlineDiff.changes.length - 1]
                    if (
                      this.inlineDiff.currentRange.startLineNumber +
                        y.addedRange.endLineNumberExclusive -
                        1 ===
                        m.range.startLineNumber &&
                      (y.removedTextLines.join(p.eol) === m.text ||
                        y.removedTextLines.join(p.eol) + p.eol === m.text) &&
                      m.range.startColumn === 1 &&
                      m.range.startLineNumber ===
                        this.inlineDiff.currentRange.endLineNumberExclusive
                    ) {
                      for (const w of y.removedTextLines)
                        this.inlineDiff.newTextLines.push(w)
                      ;(this.inlineDiff.currentRange = new Es(
                        this.inlineDiff.currentRange.startLineNumber,
                        this.inlineDiff.currentRange.endLineNumberExclusive +
                          y.removedTextLines.length,
                      )),
                        this.inlineDiff.changes.pop(),
                        this.s.setNonPersistentStorage("inlineDiffs", (w) => [
                          ...w.filter((C) => C.id !== this.inlineDiff.id),
                          pp(this.inlineDiff),
                        ]),
                        this.I()
                      return
                    }
                  }
                  break
                }
                case A1.Before: {
                  const y =
                    m.text.split(`
`).length -
                    (m.range.endLineNumber - m.range.startLineNumber + 1)
                  ;(this.inlineDiff.currentRange = new Es(
                    this.inlineDiff.currentRange.startLineNumber + y,
                    this.inlineDiff.currentRange.endLineNumberExclusive + y,
                  )),
                    this.s.setNonPersistentStorage("inlineDiffs", (w) => [
                      ...w.filter((C) => C.id !== this.inlineDiff.id),
                      pp(this.inlineDiff),
                    ]),
                    this.I()
                  break
                }
                case A1.Overlap: {
                  if (this.active) continue
                  if (this.inlineDiff.isHidden) {
                    this.u.rejectDiff(this.inlineDiff.id)
                    continue
                  }
                  this.processOverlapEdit(m, p.eol)
                  break
                }
              }
          }),
        ),
          this.s.setNonPersistentStorage("inlineDiffs", (p) => [
            ...p,
            pp(this.inlineDiff),
          ]),
          this.I()
      }
      processOverlapEdit(e, t) {
        const s = this.H.find(
          (b) =>
            b.range.startLineNumber === e.range.startLineNumber &&
            b.range.startColumn === e.range.startColumn &&
            b.range.endLineNumber === e.range.endLineNumber &&
            b.range.endColumn === e.range.endColumn &&
            (b.text ?? "") === e.text,
        )
        if (s) {
          this.H = this.H.filter((b) => b !== s)
          return
        }
        let n = e.text,
          r = e.range.startColumn,
          o = e.range.endColumn,
          a = this.inlineDiff.currentRange.startLineNumber,
          l =
            e.range.startLineNumber -
            this.inlineDiff.currentRange.startLineNumber +
            1
        l < 1 &&
          ((l = 1),
          (r = 1),
          n.includes(t)
            ? ((n = n.split(t).slice(1).join(t)),
              (a = e.range.startLineNumber + 1))
            : (console.warn(
                "We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
              ),
              (a = e.range.startLineNumber)))
        let c =
            e.range.endLineNumber -
            this.inlineDiff.currentRange.startLineNumber +
            1,
          h = false
        c > this.inlineDiff.newTextLines.length &&
          ((c = this.inlineDiff.newTextLines.length),
          (o = this.inlineDiff.newTextLines[c - 1].length + 1),
          n.includes(t)
            ? (n = n.split(t).slice(0, -1).join(t))
            : (console.warn(
                "We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
              ),
              (h = true)))
        const d = (
            this.inlineDiff.newTextLines[l - 1].slice(0, r - 1) +
            n +
            this.inlineDiff.newTextLines[c - 1].slice(o - 1)
          ).split(t),
          g = [
            ...this.inlineDiff.newTextLines.slice(0, l - 1),
            ...d,
            ...this.inlineDiff.newTextLines.slice(c),
          ]
        h && g.length > 0 && g[g.length - 1] === "" && g.pop()
        const p = new Es(a, a + g.length)
        ;(this.inlineDiff.currentRange = p), (this.inlineDiff.newTextLines = g)
        const m = this.getDiffState(true)
        ;(this.inlineDiff.changes = m.changes),
          this.s.setNonPersistentStorage("inlineDiffs", (b) => [
            ...b.filter((y) => y.id !== this.inlineDiff.id),
            pp(this.inlineDiff),
          ]),
          this.I()
      }
      finishFailure() {
        if (!this.active) return
        let e = true
        for (let n = 0; n < this.inlineDiff.newTextLines.length; n++)
          if (
            this.inlineDiff.newTextLines[n] !==
            this.inlineDiff.originalTextLines[n]
          ) {
            e = false
            break
          }
        if (e) {
          this.u.remove(this.inlineDiff.id), this.L()
          return
        }
        const t = pp(this.inlineDiff),
          s = this.getDiffState(false)
        ;(this.inlineDiff.newTextLines = s.newFullRangeTextLines),
          this.handleDiffState(s, t),
          this.I(),
          this.J()
      }
      finishSuccess() {
        if (!this.active) return
        const e = pp(this.inlineDiff),
          t = this.getDiffState(true)
        this.handleDiffState(t, e), this.I(), this.J()
      }
      reject() {
        const e = []
        this.s.setNonPersistentStorage(
          "cppState",
          "shouldNotTriggerFromInlineDiffReject",
          true,
        ),
          setTimeout(() => {
            this.s.setNonPersistentStorage(
              "cppState",
              "shouldNotTriggerFromInlineDiffReject",
              false,
            )
          }, 1e3)
        for (const c of this.inlineDiff.changes) {
          let h = c.removedTextLines.join(this.c.object.textEditorModel.getEOL())
          const u = this.getGreenRange(c)
          c.addedRange.startLineNumber === c.addedRange.endLineNumberExclusive &&
            (h += this.c.object.textEditorModel.getEOL())
          const d = {
            range: u,
            text: h,
            forceMoveMarkers: !this.inlineDiff.isHidden,
          }
          e.push(d)
        }
        this.u.recordRejectEvent({
          model: this.c.object.textEditorModel,
          requestId: this.inlineDiff.generationUUID,
          promptBarId: this.promptBarId,
        }),
          this.u.reportEditFate(this.inlineDiff.generationUUID, "reject", {
            numPartiallyAccepted: this.m,
            numPartiallyRejected: this.n,
            numUnresolved: this.inlineDiff.changes.length,
          })
        const t = this.inlineDiff.uri,
          s = pp(this.inlineDiff),
          n = this.inlineDiff.id,
          r = this.u,
          o = []
        let a
        try {
          const c = this.c.object.textEditorModel,
            h = this.C.createById(c.getLanguageId())
          ;(a = this.z.createModel(
            c.getValue(),
            h,
            U.parse(`inline-diff-reject-anysphere://${Q8n()}`),
          )),
            o.push(...a.applyEdits(e, true))
          for (let u = e.length - 1; u >= 0; u--)
            this.c.object.textEditorModel.applyEdits([e[u]])
        } catch (c) {
          console.warn(
            "Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
            c,
          )
        } finally {
          a?.dispose()
        }
        this.removeDecorations(),
          this.s.setNonPersistentStorage("inlineDiffs", (c) =>
            c.filter((h) => h.id !== this.inlineDiff.id),
          )
        const l = pp(this.inlineDiff)
        if (!this.inlineDiff.isHidden) {
          const c = this.s.nonPersistentStorage.promptBars.find(
            (u) => u.diffId === this.inlineDiff.id,
          )
          c &&
            (l.lastPromptBarCurrentRange = this.t.getPromptBarCurrentRange(
              c,
              this.c.object.textEditorModel,
            ))
          const h = new cb(
            "Undo Reject Suggestion",
            "undo-reject-suggestion",
            this.inlineDiff.id,
            this.inlineDiff.uri,
            async () => {
              await r.applyEditsNoUpdateDiffs(t, o), r.setDiff(n, s)
            },
            async () => {
              await r.applyEditsNoUpdateDiffs(t, e), r.setDiff(n, l)
            },
          )
          this.u.pushUndoElement(h, {})
        }
      }
      cancel() {
        this.u.recordCancelEvent({
          model: this.c.object.textEditorModel,
          requestId: this.inlineDiff.generationUUID,
          promptBarId: this.promptBarId,
        }),
          this.s.setNonPersistentStorage("inprogressAIGenerations", (e) =>
            e.filter((t) => t.generationUUID !== this.inlineDiff.generationUUID),
          )
      }
      remove() {
        this.removeDecorations(),
          this.s.setNonPersistentStorage("inlineDiffs", (e) =>
            e.filter((t) => t.id !== this.inlineDiff.id),
          )
      }
      add() {
        this.I(),
          this.s.setNonPersistentStorage("inlineDiffs", (e) => [
            ...e,
            pp(this.inlineDiff),
          ])
      }
      getGreenRange(e) {
        const t = this.c.object.textEditorModel,
          s = t.getLineCount()
        if (e.removedTextLines.length === 0) {
          let n =
              this.inlineDiff.currentRange.startLineNumber +
              e.addedRange.startLineNumber -
              1,
            r =
              this.inlineDiff.currentRange.startLineNumber +
              e.addedRange.endLineNumberExclusive -
              1
          if (r <= s) return new G(n, 1, r, 1)
          {
            r = s
            let o = 1
            return (
              n > 1 && (n--, (o = t.getLineMaxColumn(n))),
              new G(n, o, r, t.getLineMaxColumn(r))
            )
          }
        } else {
          const n =
              this.inlineDiff.currentRange.startLineNumber +
              e.addedRange.endLineNumberExclusive -
              1 -
              1,
            r = Math.min(n, s)
          return e.addedRange.endLineNumberExclusive ===
            e.addedRange.startLineNumber
            ? new G(
                this.inlineDiff.currentRange.startLineNumber +
                  e.addedRange.startLineNumber -
                  1,
                1,
                this.inlineDiff.currentRange.startLineNumber +
                  e.addedRange.startLineNumber -
                  1,
                1,
              )
            : new G(
                this.inlineDiff.currentRange.startLineNumber +
                  e.addedRange.startLineNumber -
                  1,
                1,
                r,
                this.c.object.textEditorModel.getLineMaxColumn(r),
              )
        }
      }
      rejectPartialDiff(e) {
        const t = this.findClosestChange(e),
          s = this.inlineDiff.changes.length === 1,
          n = this.getGreenRange(t),
          r =
            t.addedRange.endLineNumberExclusive === t.addedRange.startLineNumber
              ? this.c.object.textEditorModel.getEOL()
              : "",
          o = t.removedTextLines.join(this.c.object.textEditorModel.getEOL()) + r,
          a = { range: n, text: o, forceMoveMarkers: true }
        this.u.recordPartialRejectEvent({
          model: this.c.object.textEditorModel,
          requestId: this.inlineDiff.generationUUID,
          redLines: o.split(`
`),
          greenLines: this.c.object.textEditorModel.getValueInRange(n).split(`
`),
          greenRange: n,
          promptBarId: this.promptBarId,
        })
        const l = this.u,
          c = this.inlineDiff.id,
          h = pp(this.inlineDiff),
          u = this.inlineDiff.uri,
          d = []
        try {
          d.push(...this.c.object.textEditorModel.applyEdits([a], true))
        } catch (p) {
          console.warn(
            "Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
            p,
          )
        }
        const g = pp(this.inlineDiff)
        if (!this.inlineDiff.isHidden) {
          this.n++
          const p = new cb(
            "Undo Accept Suggestion",
            "undo-accept-suggestion",
            this.inlineDiff.id,
            this.inlineDiff.uri,
            async () => {
              this.n--, await l.applyEditsNoUpdateDiffs(u, d), l.setDiff(c, h)
            },
            async () => {
              this.n++, await l.applyEditsNoUpdateDiffs(u, [a]), l.setDiff(c, g)
            },
          )
          this.u.pushUndoElement(p, {})
        }
        if (s) {
          if (!this.inlineDiff.isHidden) {
            this.u.reportEditFate(this.inlineDiff.generationUUID, "partial", {
              numPartiallyAccepted: this.m,
              numPartiallyRejected: this.n,
              numUnresolved: 0,
            })
            const p = this.s.nonPersistentStorage.promptBars.find(
              (m) => m.diffId === this.inlineDiff.id,
            )
            p &&
              (g.lastPromptBarCurrentRange = this.t.getPromptBarCurrentRange(
                p,
                this.c.object.textEditorModel,
              ))
          }
          return this.remove(), true
        }
        return false
      }
      findClosestChange(e) {
        const t = e.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1
        let s = this.inlineDiff.changes[0]
        for (const n of this.inlineDiff.changes.slice(1)) {
          const r = Math.min(
              Math.abs(n.addedRange.endLineNumberExclusive - 1 - t),
              Math.abs(n.addedRange.startLineNumber - t),
            ),
            o = Math.min(
              Math.abs(s.addedRange.endLineNumberExclusive - 1 - t),
              Math.abs(s.addedRange.startLineNumber - t),
            )
          r < o && (s = n)
        }
        return s
      }
      acceptPartialDiff(e) {
        const t = this.findClosestChange(e),
          s = [
            ...this.inlineDiff.originalTextLines.slice(
              0,
              t.removedLinesOriginalRange.startLineNumber - 1,
            ),
            ...this.inlineDiff.newTextLines.slice(
              t.addedRange.startLineNumber - 1,
              t.addedRange.endLineNumberExclusive - 1,
            ),
            ...this.inlineDiff.originalTextLines.slice(
              t.removedLinesOriginalRange.endLineNumberExclusive - 1,
            ),
          ],
          n = new Es(
            this.inlineDiff.currentRange.startLineNumber,
            this.inlineDiff.currentRange.endLineNumberExclusive +
              (t.removedLinesOriginalRange.endLineNumberExclusive -
                t.removedLinesOriginalRange.startLineNumber -
                (t.addedRange.endLineNumberExclusive -
                  t.addedRange.startLineNumber)),
          ),
          r = pp(this.inlineDiff),
          o = this.inlineDiff.id,
          a = this.u,
          l = this.getGreenRange(t),
          c =
            t.addedRange.endLineNumberExclusive === t.addedRange.startLineNumber
              ? this.c.object.textEditorModel.getEOL()
              : "",
          h = (
            t.removedTextLines.join(this.c.object.textEditorModel.getEOL()) + c
          ).split(`
`)
        this.u.recordPartialAcceptEvent({
          model: this.c.object.textEditorModel,
          requestId: this.inlineDiff.generationUUID,
          redLines: h,
          greenLines: this.c.object.textEditorModel.getValueInRange(l).split(`
`),
          greenRange: l,
          promptBarId: this.promptBarId,
        }),
          (this.inlineDiff.currentRange = n),
          (this.inlineDiff.originalTextLines = s)
        const u = this.getDiffState(true)
        ;(this.inlineDiff.changes = u.changes),
          this.s.setNonPersistentStorage("inlineDiffs", (g) => [
            ...g.filter((p) => p.id !== this.inlineDiff.id),
            pp(this.inlineDiff),
          ]),
          this.I()
        const d = pp(this.inlineDiff)
        if (!this.inlineDiff.isHidden) {
          this.m++
          const g = new cb(
            "Undo Accept Suggestion",
            "undo-accept-suggestion",
            this.inlineDiff.id,
            this.inlineDiff.uri,
            async () => {
              this.m--, a.setDiff(o, r)
            },
            () => {
              this.m++, a.setDiff(o, d)
            },
          )
          this.u.pushUndoElement(g, {})
        }
        return this.inlineDiff.changes.length === 0
          ? (this.u.reportEditFate(this.inlineDiff.generationUUID, "partial", {
              numPartiallyAccepted: this.m,
              numPartiallyRejected: this.n,
              numUnresolved: 0,
            }),
            this.remove(),
            true)
          : false
      }
      accept() {
        this.u.recordAcceptEvent({
          model: this.c.object.textEditorModel,
          requestId: this.inlineDiff.generationUUID,
          promptBarId: this.promptBarId,
        }),
          this.u.reportEditFate(this.inlineDiff.generationUUID, "accept", {
            numPartiallyAccepted: this.m,
            numPartiallyRejected: this.n,
            numUnresolved: this.inlineDiff.changes.length,
          }),
          this.remove(),
          this.dispose()
      }
      removeDecorations() {
        const e = this.c.object.textEditorModel,
          t = this.h
        ;(this.h = []), e.deltaDecorations(t, [])
      }
      getShouldIgnoreTrimWhitespace() {
        return false
      }
      getDiffState(e) {
        return rLt(
          this.inlineDiff.originalTextLines,
          this.inlineDiff.newTextLines,
          e,
          this.inlineDiff.isHidden,
          this.getShouldIgnoreTrimWhitespace(),
        )
      }
      addLinesToDiff(e, t = false) {
        if (!this.active) return
        const s = []
        for (const o of e) {
          ;(o.includes(`
`) ||
            o.includes("\r")) &&
            console.warn(
              "InlineDiffService#addLine: line contains newline characters, which is not supported",
            )
          let a = o.replace(/\r/g, "")
          ;(a = a.replace(/\n/g, "")), s.push(a)
        }
        const n = pp(this.inlineDiff)
        this.inlineDiff.newTextLines.push(...s)
        const r = this.getDiffState(false)
        this.handleDiffState(r, n, t), this.I()
      }
      I() {
        const e = this.F.getValue(u$),
          t = [],
          s = this.inlineDiff.isHidden ? "-hidden" : ""
        for (const r of this.inlineDiff.changes) {
          const o =
            this.inlineDiff.currentRange.startLineNumber +
            r.addedRange.startLineNumber -
            1
          if (
            r.addedRange.startLineNumber ===
              r.addedRange.endLineNumberExclusive &&
            r.removedTextLines.length > 0
          ) {
            const y = {
              range: new G(o, 0, o, 0),
              options: {
                description:
                  "inline-diff-pure-deletion" +
                  (this.inlineDiff.isHidden ? "-hidden" : ""),
                overviewRuler: { position: rc.Left, color: Wm(Bse) },
                minimap: { position: 1, color: Wm(Bse) },
              },
            }
            t.push(y)
            continue
          }
          if (
            r.addedRange.startLineNumber === r.addedRange.endLineNumberExclusive
          )
            continue
          const a = new G(
              o,
              0,
              this.inlineDiff.currentRange.startLineNumber +
                r.addedRange.endLineNumberExclusive -
                1 -
                1,
              0,
            ),
            l = {
              range: a,
              options: {
                description:
                  "inline-diff-removed" +
                  (this.inlineDiff.isHidden ? "-hidden" : ""),
              },
            }
          t.push(l)
          let c = false
          if (
            r.relativeInnerChanges &&
            !this.inlineDiff.isHidden &&
            this.F.getValue(Yne)
          ) {
            const b = {
                className: "inline-diff-inner-change-added",
                description: "inline-diff-inner-change-added",
                shouldFillLineOnLineBreak: true,
              },
              y = {
                className:
                  "inline-diff-inner-change-added inline-diff-inner-empty",
                description:
                  "inline-diff-inner-change-addedinline-diff-inner-empty",
              }
            for (const w of r.relativeInnerChanges) {
              c = true
              const C = new G(
                  o + w.modifiedRange.startLineNumber - 1,
                  w.modifiedRange.startColumn,
                  o + w.modifiedRange.endLineNumber - 1,
                  w.modifiedRange.endColumn,
                ),
                S = { range: C, options: C.isEmpty() ? y : b }
              t.push(S)
            }
          }
          const h =
              "inline-diff-added " +
              (e
                ? "inline-diff-added-color"
                : `inline-diff-added-color-unthemed${c ? "-lower" : ""}`),
            u = "inline-diff-added-lines" + s
          let d,
            g,
            p,
            m = ""
          try {
            ;(d = r.indentation
              ? this.inlineDiff.currentRange.startLineNumber +
                r.indentation.range.startLineNumber -
                1
              : o),
              (g = r.indentation
                ? this.inlineDiff.currentRange.startLineNumber +
                  r.indentation.range.endLineNumberExclusive -
                  1 -
                  1
                : a.endLineNumber),
              (p = new G(
                d,
                1,
                g,
                this.c.object.textEditorModel.getLineMaxColumn(g),
              )),
              (m = r.indentation
                ? this.c.object.textEditorModel.getValueInRange(p)
                : "")
          } catch {}
          if (r.indentation && m.trim() !== "" && d && g && p) {
            for (let y = d; y <= g; y++) {
              const w = {
                range: new G(y, 1, y, r.indentation.level + 1),
                options: {
                  description: "inline-diff-indent-change",
                  className:
                    r.indentation.level > 0
                      ? "inline-diff-indentation-increased"
                      : "inline-diff-indentation-decreased",
                },
              }
              t.push(w)
            }
            if (d > o) {
              const w = {
                range: new G(o, 0, d - 1, 0),
                options: {
                  description: h,
                  className: h,
                  inlineClassName: u,
                  isWholeLine: true,
                  ...(this.inlineDiff.isHidden
                    ? {}
                    : {
                        overviewRuler: { position: rc.Right, color: Wm(JM) },
                        minimap: { position: 1, color: Wm(JM) },
                      }),
                },
              }
              t.push(w)
            }
            if (g < a.endLineNumber) {
              const w = {
                range: new G(g + 1, 0, a.endLineNumber, 0),
                options: {
                  description: h,
                  className: h,
                  inlineClassName: u,
                  isWholeLine: true,
                  ...(this.inlineDiff.isHidden
                    ? {}
                    : {
                        overviewRuler: { position: rc.Right, color: Wm(JM) },
                        minimap: { position: 1, color: Wm(JM) },
                      }),
                },
              }
              t.push(w)
            }
            const b = {
              range: p,
              options: {
                description: "inline-diff-indented-subset",
                className: e
                  ? "inline-diff-indented-subset"
                  : "inline-diff-indented-subset-unthemed",
                isWholeLine: true,
              },
            }
            t.push(b)
          } else {
            const b = {
              range: a,
              options: {
                description: h,
                className: h,
                inlineClassName: u,
                isWholeLine: true,
                ...(this.inlineDiff.isHidden
                  ? {}
                  : {
                      overviewRuler: { position: rc.Right, color: Wm(JM) },
                      minimap: { position: 1, color: Wm(JM) },
                    }),
              },
            }
            t.push(b)
          }
        }
        if (
          this.s.nonPersistentStorage.inprogressAIGenerations.some(
            (r) => r.generationUUID === this.inlineDiff.generationUUID,
          )
        ) {
          if (this.inlineDiff.activeLine) {
            const r = new G(
              this.inlineDiff.currentRange.startLineNumber +
                this.inlineDiff.activeLine -
                1,
              0,
              this.inlineDiff.currentRange.startLineNumber +
                this.inlineDiff.activeLine -
                1,
              0,
            )
            t.push({
              range: r,
              options: {
                description: "inline-diff-current",
                className: "inline-diff-current",
                isWholeLine: true,
              },
            })
          }
          if (
            this.inlineDiff.pendingRange.startLineNumber !==
            this.inlineDiff.pendingRange.endLineNumberExclusive
          ) {
            const r = new G(
              this.inlineDiff.currentRange.startLineNumber +
                this.inlineDiff.pendingRange.startLineNumber -
                1,
              0,
              this.inlineDiff.currentRange.startLineNumber +
                this.inlineDiff.pendingRange.endLineNumberExclusive -
                1 -
                1,
              0,
            )
            t.push({
              range: r,
              options: {
                description: "inline-diff-pending",
                className: "inline-diff-pending",
                isWholeLine: true,
              },
            })
          }
        }
        this.h = this.c.object.textEditorModel.deltaDecorations(this.h, t)
      }
      handleDiffState(e, t, s = false, n = false) {
        !this.active &&
          !n &&
          console.error(
            "InlineDiffService#handleDiffState: diff is not active when calling handleDiffState",
          )
        const r = this.c.object.textEditorModel,
          o = B8n(
            e,
            this.inlineDiff,
            this.c,
            this.getShouldIgnoreTrimWhitespace(),
          )
        this.H = o
        let a = []
        this.inlineDiff.isHidden || (a = r.applyEdits(o, true)),
          this.inlineDiff.isHidden ||
            (this.inlineDiff.currentRange = new Es(
              this.inlineDiff.currentRange.startLineNumber,
              this.inlineDiff.currentRange.startLineNumber +
                e.newFullRangeTextLines.length,
            )),
          (this.inlineDiff.changes = e.changes),
          (this.inlineDiff.activeLine = e.activeLine),
          (this.inlineDiff.pendingRange = e.pendingRange),
          this.s.setNonPersistentStorage("inlineDiffs", (d) => [
            ...d.filter((g) => g.id !== this.inlineDiff.id),
            pp(this.inlineDiff),
          ])
        const l = pp(this.inlineDiff),
          c = this.u,
          h = this.inlineDiff.id,
          u = this.inlineDiff.uri
        if (!this.inlineDiff.isHidden && !s) {
          const d = new cb(
            "Undo Update Diff",
            "undo-update-diff",
            h,
            r.uri,
            async () => {
              c.cancelInUndo(h),
                await c.applyEditsNoUpdateDiffs(u, a),
                c.setDiff(h, t)
            },
            async () => {
              await c.applyEditsNoUpdateDiffs(u, o), c.setDiff(h, l)
            },
          )
          this.u.pushUndoElement(d, {})
        }
      }
      cancelInUndo() {
        this.s.nonPersistentStorage.inprogressAIGenerations.some(
          (e) => e.generationUUID === this.inlineDiff.generationUUID,
        ) &&
          this.s.setNonPersistentStorage("inprogressAIGenerations", (e) =>
            e.filter((t) => t.generationUUID !== this.inlineDiff.generationUUID),
          ),
          (this.active = false),
          (this.j = true)
      }
      setDiff(e) {
        ;(this.inlineDiff = e),
          this.s.setNonPersistentStorage("inlineDiffs", (t) => [
            ...t.filter((s) => s.id !== this.inlineDiff.id),
            pp(this.inlineDiff),
          ]),
          this.I()
      }
      activate(e, t, s) {
        ;(this.active = true),
          (this.doneCallback = e),
          (this.cancelGenerationWithNoChangesCallback = t),
          (this.rejectCallback = s)
      }
      J() {
        ;(this.active = false),
          this.doneCallback &&
            this.doneCallback({
              generationUUID: this.inlineDiff.generationUUID,
              diffRange: this.inlineDiff.currentRange,
              model: this.c.object.textEditorModel,
            })
      }
      L() {
        this.cancelGenerationWithNoChangesCallback &&
          this.cancelGenerationWithNoChangesCallback()
      }
      callRejectCallback() {
        this.rejectCallback && this.rejectCallback()
      }
      dispose() {
        super.dispose(), this.c?.dispose()
      }
    }
  f2 = __decorate(
    [
      __param(3, ei),
      __param(4, Sk),
      __param(5, oy),
      __param(6, Ac),
      __param(7, fP),
      __param(8, qi),
      __param(9, Hi),
      __param(10, ue),
      __param(11, Na),
    ],
    f2,
  )
  function fLt(i, e, t, s) {
    const n = i.listCodeEditors()
    for (const r of n)
      if (r.hasModel() && extUri.isEqual(r.getModel().uri, t)) {
        const o = r.getPosition()
        o && o.lineNumber >= e.startLineNumber && o.lineNumber <= e.endLineNumber
          ? r.setPosition(s)
          : o &&
            o.lineNumber >
              r.getModel().getLineCount() -
                (e.endLineNumber - e.startLineNumber + 1) &&
            r.setPosition(
              new Me(
                r.getModel().getLineCount() -
                  (e.endLineNumber - e.startLineNumber + 1),
                o.column,
              ),
            )
      }
  }
  function sK(i, e) {
    try {
      i.applyEdits(e)
    } catch (t) {
      console.warn(
        "Expected error. But if this error happens and something looks weird, then we should investigate. It is related to the feature of having the cursor state go back to its original place if you escape out of a cmd-k generate prompt bar.",
        t,
      )
    }
  }

  return {
    oy,
    _Ui,
    fLt,
    sK,
  }
}
