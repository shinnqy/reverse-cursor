// @ts-check

// 251645
export function createAction(params) {
  // Ai: EditorAction
  // Zt: registerEditorAction
  const { z1, Ai, TZn, T, me, ft, ei, yi, Zt, LZn, ao, ve, OP, Pn, extUri, kue, Eue, ms, PZn, st, cUe, $N, GYe, Iue, eXi, V, Me, wf, a4t, o4t, rt, __decorate, __param, Z, Hi, Ce, Ac, oy, Vi, Pt, ue, Tn, s4t, n4t, JYe, KYe, dt, ud, Y, le, De, Gt, I, DZn, Wa, so, Pg, R, q, Jl, it } = params;

  var h4t,
    $Zn = class extends Ai {
      constructor() {
        super({
          id: TZn,
          label: "Accept All Edits",
          alias: "Accept All Edits",
          precondition: T.or(
            me.editorHasPromptBar.isEqualTo(true),
            me.hasDisplayedDiff,
          ),
          kbOpts: { kbExpr: me.editorTextFocus, primary: 2055, weight: 500 },
        })
      }
      run(i, e, t) {
        i.get(ft).publicLogCapture("Accepted Diff")
        const s = i.get(ei)
        i
          .get(ft)
          .publicLogCapture(
            "did.edit.accepted." +
              s.applicationUserPersistentStorage.aiSettings.openAIModel,
          ),
          i
            .get(yi)
            .listCodeEditors()
            .forEach((o) => {
              Sv.get(o)?.acceptSuggestion(t, "both")
            })
      }
    }
  Zt($Zn)
  var FZn = class extends Ai {
    constructor() {
      super({
        id: LZn,
        label: "View All Changes",
        alias: "View All Changes",
        precondition: T.or(
          me.editorHasPromptBar.isEqualTo(true),
          me.hasDisplayedDiff,
        ),
      })
    }
    async run(i, e) {
      const t = i.get(ei),
        s = i.get(ve),
        n = t.nonPersistentStorage.inlineDiffs.filter((o) => o.source === OP)
      if (n.length === 0) return
      const r = { resources: n.map((o) => o.uri) }
      await s.openEditor(r)
    }
  }
  Zt(FZn)
  function DY(i, e) {
    const t = i.activeEditorPane?.getControl()
    let s
    const n = ao(i.activeEditorPane)
    if (n) {
      const r = n.getActiveCell()?.textModel
      if (r) s = r
      else return false
    } else if (Pn(t)) {
      if (!t.hasModel()) return false
      s = t.getModel()
    } else return false
    return e.nonPersistentStorage.inlineDiffs.some((r) =>
      extUri.isEqual(r.uri, s.uri),
    )
  }
  z1.registerEditorAction(kue, (i, e) => {
    Zt(
      class extends Ai {
        constructor() {
          super({
            id: kue,
            label: "Accept Edits",
            alias: "Accept Edits",
            precondition: T.function(() => DY(e, i)),
            kbOpts: { kbExpr: me.editorTextFocus, primary: 2051, weight: 500 },
          })
        }
        run(s, n, r) {
          const o = s.get(ei),
            a = s.get(ft)
          a.publicLogCapture("Accepted Diff"),
            a.publicLogCapture("did.edit.accepted", {
              model: o.applicationUserPersistentStorage.aiSettings.openAIModel,
            }),
            Sv.get(n)?.acceptSuggestion(r, "both")
        }
      },
    )
  }),
    z1.registerEditorAction(Eue, (i, e) => {
      Zt(
        class extends Ai {
          constructor() {
            super({
              id: Eue,
              label: "Accept Partial Edit",
              alias: "Accept Partial Edit",
              precondition: T.function(() => DY(e, i)),
              kbOpts: {
                kbExpr: me.editorTextFocus,
                primary: ms ? 3127 : 2103,
                weight: 500,
              },
            })
          }
          run(s, n, r) {
            s.get(ft).publicLogCapture("Accepted Partial Diff")
            const o = s.get(ft),
              a = s.get(ei)
            o.publicLogCapture("did.edit.acceptedpartial", {
              model: a.applicationUserPersistentStorage.aiSettings.openAIModel,
            }),
              Sv.get(n)?.acceptPartialSuggestion(r, "both")
          }
        },
      )
    })
  var OZn = class extends Ai {
    constructor() {
      super({
        id: PZn,
        label: "Reject All Edits",
        alias: "Reject All Edits",
        precondition: T.or(
          me.editorHasPromptBar.isEqualTo(true),
          me.hasDisplayedDiff,
        ),
        kbOpts: { kbExpr: me.editorTextFocus, primary: 2053, weight: 500 },
      })
    }
    run(i, e, t) {
      i.get(ft).publicLogCapture("Rejected Diff")
      const s = i.get(ei)
      i
        .get(ft)
        .publicLogCapture("did.edit.rejected", {
          model: s.applicationUserPersistentStorage.aiSettings.openAIModel,
        }),
        i
          .get(yi)
          .listCodeEditors()
          .forEach((a) => {
            if (
              (Sv.get(a)?.rejectSuggestion(t, "both"),
              s.nonPersistentStorage.promptBars.length === 0)
            )
              return
            const l = a.getSelection()
            let c
            if (!l)
              c =
                s.nonPersistentStorage.promptBars[
                  s.nonPersistentStorage.promptBars.length - 1
                ].id
            else {
              let h = 1 / 0
              for (const u of s.nonPersistentStorage.promptBars) {
                const d = a
                  .getModel()
                  ?.getDecorationRange(u.currentRangeDecorationId)
                if (!d) continue
                if (d.intersectRanges(l)) {
                  c = u.id
                  break
                }
                const g = Math.min(
                  Math.abs(l.startLineNumber - d.startLineNumber),
                  Math.abs(l.endLineNumber - d.endLineNumber),
                )
                g < h && ((h = g), (c = u.id))
              }
            }
            i.get(st).executeCommand(cUe, c), i.get(st).executeCommand($N, c)
          })
    }
  }
  Zt(OZn),
  z1.registerEditorAction(GYe, (i, e) => {
    Zt(
      class extends Ai {
        constructor() {
          super({
            id: GYe,
            label: "Reject Edits",
            alias: "Reject Edits",
            precondition: T.function(() => DY(e, i)),
            kbOpts: { kbExpr: me.editorTextFocus, primary: 2049, weight: 500 },
          })
        }
        run(s, n, r) {
          const o = s.get(ei),
            a = s.get(ft)
          if (
            (a.publicLogCapture("Rejected Diff"),
            a.publicLogCapture("did.edit.rejected", {
              model: o.applicationUserPersistentStorage.aiSettings.openAIModel,
            }),
            Sv.get(n)?.rejectSuggestion(r, "both"),
            o.nonPersistentStorage.promptBars.length === 0)
          )
            return
          const l = n.getSelection()
          let c
          if (!l)
            c =
              o.nonPersistentStorage.promptBars[
                o.nonPersistentStorage.promptBars.length - 1
              ].id
          else {
            let h = 1 / 0
            for (const u of o.nonPersistentStorage.promptBars) {
              const d = n
                .getModel()
                ?.getDecorationRange(u.currentRangeDecorationId)
              if (!d) continue
              if (d.intersectRanges(l)) {
                c = u.id
                break
              }
              const g = Math.min(
                Math.abs(l.startLineNumber - d.startLineNumber),
                Math.abs(l.endLineNumber - d.endLineNumber),
              )
              g < h && ((h = g), (c = u.id))
            }
          }
          s.get(st).executeCommand(cUe, c), s.get(st).executeCommand($N, c)
        }
      },
    )
  }),
  z1.registerEditorAction(Iue, (i, e) => {
    Zt(
      class extends Ai {
        constructor() {
          super({
            id: Iue,
            label: "Reject Partial Edit",
            alias: "Reject Partial Edit",
            precondition: T.function(() => DY(e, i)),
            kbOpts: { kbExpr: me.editorTextFocus, primary: 2092, weight: 500 },
          })
        }
        run(s, n, r) {
          const o = s.get(ft),
            a = s.get(ei)
          o.publicLogCapture("Rejected Partial Diff"),
            o.publicLogCapture("did.edit.rejectedpartial", {
              model: a.applicationUserPersistentStorage.aiSettings.openAIModel,
            }),
            Sv.get(n)?.rejectPartialSuggestion(r, "both")
        }
      },
    )
  })
  var BZn = class extends Ai {
    constructor() {
      super({
        id: eXi,
        label: "Cancel Edits",
        alias: "Cancel Edits",
        precondition: me.hasActivelyGeneratingDiff,
        kbOpts: { kbExpr: me.editorTextFocus, primary: 2049, weight: 600 },
      })
    }
    run(i, e, t) {
      i.get(ft).publicLogCapture("Cancelled Diff"),
        Sv.get(e)?.cancelGeneration(t, "both")
    }
  },
  fF
  ;(function (i) {
    ;(i[(i.AllowAll = 0)] = "AllowAll"),
      (i[(i.AllowOnlyNonGenerating = 1)] = "AllowOnlyNonGenerating"),
      (i[(i.AllowOnlyGenerating = 2)] = "AllowOnlyGenerating")
  })(fF || (fF = {}))
  var Sv = class extends V {
    static {
      h4t = this
    }
    static {
      this.ID = "editor.contrib.inlineDiffController"
    }
    static get(e) {
      return e.getContribution(h4t.ID)
    }
    findClosestDiffToCursorId(e, t = "notPromptBar") {
      const s = this.f.getPosition()
      let n = null,
        r = 1 / 0
      const o = this.u.nonPersistentStorage.inlineDiffs.filter(
        (a) =>
          this.q.isEqual(a.uri, this.f.getModel()?.uri) &&
          (t === "both" ||
            (t === "promptBar") ===
              this.u.nonPersistentStorage.promptBars.some(
                (l) => l.diffId === a.id,
              )),
      )
      for (const a of o) {
        const l = this.u.nonPersistentStorage.inprogressAIGenerations.some(
          (h) => h.generationUUID === a.generationUUID,
        )
        if (
          (e === fF.AllowOnlyNonGenerating && l) ||
          (e === fF.AllowOnlyGenerating && !l)
        )
          continue
        if (!s) {
          n = a.id
          break
        }
        const c = Math.min(
          Math.abs(s.lineNumber - a.currentRange.startLineNumber),
          Math.abs(s.lineNumber - a.currentRange.endLineNumberExclusive - 1),
        )
        c < r && ((r = c), (n = a.id))
      }
      return n || null
    }
    rejectSuggestion(e, t) {
      if (!this.f.hasModel()) return
      const s =
        e?.id ?? this.findClosestDiffToCursorId(fF.AllowOnlyNonGenerating, t)
      s && this.C.rejectDiff(s)
    }
    acceptSuggestion(e, t) {
      if (!this.f.hasModel()) return
      const s =
        e?.id ?? this.findClosestDiffToCursorId(fF.AllowOnlyNonGenerating, t)
      s && this.C.acceptDiff(s)
    }
    acceptPartialSuggestion(e, t) {
      if (!this.f.hasModel()) return
      const s =
        e?.diffId ?? this.findClosestDiffToCursorId(fF.AllowOnlyNonGenerating, t)
      if (!s) return
      const n = e?.line ? new Me(e.line(), 1) : this.f.getPosition()
      this.C.acceptPartialDiff(s, n)
    }
    rejectPartialSuggestion(e, t) {
      if (!this.f.hasModel()) return
      const s =
        e?.diffId ?? this.findClosestDiffToCursorId(fF.AllowOnlyNonGenerating, t)
      if (!s) return
      const n = e?.line ? new Me(e.line(), 1) : this.f.getPosition(),
        r = this.u.nonPersistentStorage.promptBars.find((a) => a.diffId === s)
      this.C.rejectPartialDiff(s, n) &&
        r &&
        (this.F.executeCommand(cUe, r.id), this.F.executeCommand($N, r.id))
    }
    cancelGeneration(e, t) {
      const s = e?.id ?? this.findClosestDiffToCursorId(fF.AllowOnlyGenerating, t)
      s && this.C.cancelDiff(s)
    }
    constructor(e, t, s, n, r, o, a, l, c, h, u, d) {
      super(),
        (this.s = t),
        (this.t = s),
        (this.u = n),
        (this.y = o),
        (this.z = a),
        (this.C = l),
        (this.F = h),
        (this.G = u),
        (this.H = d),
        (this.j = 1),
        (this.n = new Map()),
        (this.f = e),
        (this.m = this.D(this.u.createScoped(this))),
        (this.q = c.extUri),
        (this.g = me.hasDisplayedDiff.bindTo(e.contextKeyService)),
        (this.h = me.hasActivelyGeneratingDiff.bindTo(e.contextKeyService)),
        (this.r = true),
        this.D(
          this.f.onDidChangeModel((g) => {
            if (this.f.hasModel()) {
              for (const p of this.n.keys()) this.removeDiff(p)
              this.n.clear(), this.showDiffs()
            }
          }),
        ),
        this.m.onChangeEffect({
          deps: [
            () => this.u.nonPersistentStorage.inlineDiffs,
            () => this.u.nonPersistentStorage.inprogressAIGenerations,
          ],
          onChange: () => {
            this.showDiffs()
          },
        }),
        this.showDiffs(),
        this.D(this.f.onDidChangeCursorPosition(() => this.I())),
        this.D(this.f.onDidScrollChange(() => this.I())),
        this.D(
          this.f.onDidChangeModelContent(() => {
            const g = []
            for (const [p, m] of this.n.entries()) {
              const b = this.u.nonPersistentStorage.inlineDiffs.find(
                (w) => w.id === p,
              )
              if (!b) {
                g.push(p)
                continue
              }
              const y = []
              for (const w of m.partialWidgets)
                b.changes.find(
                  (S) =>
                    b.currentRange.startLineNumber +
                      S.addedRange.startLineNumber -
                      1 ===
                    w.line(),
                ) || y.push(w)
              for (const w of y) w.dispose()
              m.partialWidgets = m.partialWidgets.filter((w) => !y.includes(w))
            }
            for (const p of g) this.removeDiff(p)
          }),
        )
    }
    I() {
      if (!this.f.hasModel()) return
      const e = this.f.getModel(),
        t = this.f.getPosition()
      if (!t) return
      const s = this.u.nonPersistentStorage.inlineDiffs
        .filter((r) => this.q.isEqual(r.uri, e.uri))
        .flatMap((r) =>
          r.changes.map((o) => ({
            startLineNumber:
              r.currentRange.startLineNumber + o.addedRange.startLineNumber - 1,
            endLineNumber:
              r.currentRange.startLineNumber +
              o.addedRange.endLineNumberExclusive -
              1,
          })),
        )
        .sort((r, o) => r.startLineNumber - o.startLineNumber)
      let n = s.findIndex(
        (r) =>
          t.lineNumber >= r.startLineNumber && t.lineNumber <= r.endLineNumber,
      )
      n === -1 &&
        ((n = s.findIndex((r) => r.startLineNumber > t.lineNumber)),
        n === -1 && (n = s.length)),
        (this.j = Math.min(Math.max(1, n + 1), s.length))
    }
    getCurrentVisibleChange() {
      return this.j
    }
    getTotalChanges() {
      if (!this.f.hasModel()) return 0
      const e = this.f.getModel()
      return this.u.nonPersistentStorage.inlineDiffs
        .filter((t) => this.q.isEqual(t.uri, e.uri))
        .reduce((t, s) => t + s.changes.length, 0)
    }
    navigateToChange(e, t) {
      if (!this.f.hasModel()) return
      const s = this.f.getModel(),
        n = this.u.nonPersistentStorage.inlineDiffs
          .filter((a) => extUri.isEqual(a.uri, s.uri))
          .flatMap((a) =>
            a.changes.map((l) => ({
              startLineNumber:
                a.currentRange.startLineNumber + l.addedRange.startLineNumber - 1,
              endLineNumber:
                a.currentRange.startLineNumber +
                l.addedRange.endLineNumberExclusive -
                1,
            })),
          )
          .sort((a, l) => a.startLineNumber - l.startLineNumber)
      if (n.length === 0) return
      let r
      if (t !== undefined) r = t - 1
      else {
        const a = this.f.getPosition()
        if (!a) return
        r = n.findIndex(
          (l) =>
            a.lineNumber >= l.startLineNumber && a.lineNumber <= l.endLineNumber,
        )
      }
      e === "next"
        ? (r = (r + 1) % n.length)
        : (r = (r - 1 + n.length) % n.length)
      const o = n[r]
      this.f.setPosition({ lineNumber: o.startLineNumber, column: 1 }),
        this.f.revealLineInCenter(o.startLineNumber)
    }
    async showDiffs() {
      if (!this.f.hasModel()) return
      const e = this.f.getModel().uri,
        t = this.u.nonPersistentStorage.inlineDiffs,
        s = this.u.nonPersistentStorage.inprogressAIGenerations,
        n = t.filter((a) => this.q.isEqual(a.uri, e))
      let r = false
      for (const a of n) {
        const c = s.some((h) => h.generationUUID === a.generationUUID) && true
        ;(r = r || c), this.showDiff(wf(a), c)
      }
      for (const a of this.n.keys())
        n.some((l) => l.id === a) || this.removeDiff(a)
      r ? this.h.set(true) : this.h.set(false),
        n.filter(
          (a) =>
            !this.u.nonPersistentStorage.promptBars.some(
              (l) => l.diffId === a.id,
            ),
        ).length > 0
          ? this.g.set(true)
          : this.g.set(false)
    }
    getZoneWidgets(e, t) {
      if (!this.f.hasModel()) return []
      if (e.hideDeletionViewZones) return []
      const s = [],
        n = []
      try {
        for (const r of e.changes) {
          if (r.removedTextLines.length === 0 || r.indentation) continue
          const o =
            e.currentRange.startLineNumber + r.addedRange.startLineNumber - 1 - 1
          let a
          o === 0 ? (a = 1) : (a = this.f.getModel().getLineMaxColumn(o))
          const l = `${r.removedLinesOriginalRange.startLineNumber}-${r.removedLinesOriginalRange.endLineNumberExclusive}`,
            c = { lineNumber: o, column: a }
          let h = false
          for (const d of t)
            d.id === l &&
              ((h = true),
              d.updatePosition(c),
              d.updateInnerChanges(r.relativeInnerChanges),
              s.push(d),
              n.push(l))
          const u = []
          if (e.originalLineTokens)
            for (const d of r.removedTextLines) {
              const g = e.originalLineTokens.find((p) => p.text === d)
              u.push(g)
            }
          if (!h) {
            const d = new a4t(
              l,
              this.f,
              r.removedTextLines,
              u,
              r.relativeInnerChanges,
              c,
              e.isHidden,
              this.t,
              this.G,
              this.H,
            )
            d.showWidget(), s.push(d)
          }
        }
      } catch (r) {
        console.error("Error creating removed lines widgets!", r)
      }
      for (const r of t) n.includes(r.id) || r.dispose()
      return s
    }
    setShowPartialAcceptRejectWidgets(e) {
      this.r = e
    }
    getRemovedNumLinesInRange(e, t) {
      let s = 0
      for (const n of this.n.get(e)?.zoneWidgets ?? []) {
        const r = n.position?.lineNumber
        r !== undefined &&
          r >= t.startLineNumber &&
          r <= t.endLineNumber &&
          (s += n.getHeightInLines())
      }
      return s
    }
    showDiff(e, t) {
      try {
        const s = this.n.get(e.id)
        let n = []
        s && (n = s.zoneWidgets)
        let r = s?.partialWidgets ?? []
        const o = this.getZoneWidgets(e, n),
          a = []
        if (!t) for (const l of e.changes) a.push(l)
        if (r.length > a.length) {
          for (let l = a.length; l < r.length; l++) r[l].dispose()
          r.splice(a.length, r.length - a.length)
        }
        if (this.r && !t) {
          const l = new Set(
            a.map(
              (c) =>
                e.currentRange.startLineNumber + c.addedRange.startLineNumber - 1,
            ),
          )
          for (const c of r) l.has(c.line()) || c.dispose()
          r = r.filter((c) => l.has(c.line()))
          for (const c of a) {
            const h =
                e.currentRange.startLineNumber + c.addedRange.startLineNumber - 1,
              u = r.find((d) => d.line() === h)
            u
              ? u.setLine(h)
              : r.push(
                  this.s.createInstance(
                    o4t,
                    e.id + "-partial" + rt(),
                    e.id,
                    h,
                    e.isHidden,
                    this.f,
                  ),
                )
          }
        }
        this.n.set(e.id, { zoneWidgets: o, partialWidgets: r })
      } catch (s) {
        console.error(s)
        const n = this.n.get(e.id)
        if (n) {
          for (const r of n.partialWidgets) r.dispose()
          for (const r of n.zoneWidgets) r.dispose()
        }
        this.n.delete(e.id)
      }
    }
    removeDiff(e) {
      const t = this.n.get(e)
      if (t) {
        for (const s of t.partialWidgets) s.dispose()
        for (const s of t.zoneWidgets) s.dispose()
        this.n.delete(e)
      }
    }
    focusOnCurrentChange(e) {
      if (!this.f.hasModel()) return
      const t = this.f.getModel(),
        s = this.u.nonPersistentStorage.inlineDiffs
          .filter((r) => this.q.isEqual(r.uri, t.uri))
          .flatMap((r) =>
            r.changes.map((o) => ({
              startLineNumber:
                r.currentRange.startLineNumber + o.addedRange.startLineNumber - 1,
              endLineNumber:
                r.currentRange.startLineNumber +
                o.addedRange.endLineNumberExclusive -
                1,
            })),
          )
          .sort((r, o) => r.startLineNumber - o.startLineNumber)
      if (s.length === 0) return
      const n = s[e - 1]
      n &&
        (this.f.setPosition({ lineNumber: n.startLineNumber, column: 1 }),
        this.f.revealLineInCenter(n.startLineNumber))
    }
  }
  ;(Sv = h4t =
    __decorate(
      [
        __param(1, Z),
        __param(2, Hi),
        __param(3, ei),
        __param(4, Ce),
        __param(5, Ac),
        __param(6, yi),
        __param(7, oy),
        __param(8, Vi),
        __param(9, st),
        __param(10, Pt),
        __param(11, ue),
      ],
      Sv,
    )),
    Tn(Sv.ID, Sv, 3),
    Zt(BZn),
    z1.registerEditorAction(s4t, (i, e) => {
      Zt(
        class extends Ai {
          constructor() {
            super({
              id: s4t,
              label: "Go to Next Change",
              alias: "Go to Next Change",
              precondition: T.function(() => DY(e, i)),
              kbOpts: { kbExpr: me.editorTextFocus, primary: 552, weight: 100 },
            })
          }
          run(s, n) {
            Sv.get(n)?.navigateToChange("next")
          }
        },
      )
    }),
    z1.registerEditorAction(n4t, (i, e) => {
      Zt(
        class extends Ai {
          constructor() {
            super({
              id: n4t,
              label: "Go to Previous Change",
              alias: "Go to Previous Change",
              precondition: T.function(() => DY(e, i)),
              kbOpts: { kbExpr: me.editorTextFocus, primary: 553, weight: 100 },
            })
          }
          run(s, n) {
            Sv.get(n)?.navigateToChange("previous")
          }
        },
      )
    })
  function nXi(i) {
    return i.nonPersistentStorage.inlineDiffs.length > 0
  }
  z1.registerEditorAction(JYe, (i, e) => {
    Zt(
      class extends Ai {
        constructor() {
          super({
            id: JYe,
            label: "Go to Previous Diff File",
            alias: "Go to Previous Diff File",
            precondition: T.function(() => nXi(i)),
            kbOpts: { kbExpr: me.editorTextFocus, primary: 550, weight: 1100 },
          })
        }
        run(s, n) {
          const r = i.nonPersistentStorage.inlineDiffs,
            o = n.getModel()?.uri
          if (o) {
            const a = r.findIndex((l) => extUri.isEqual(l.uri, o))
            if (a > 0) {
              const l = r[a - 1]
              e.openEditor({ resource: l.uri })
            } else if (r.length >= 1) {
              const l = r[r.length - 1]
              e.openEditor({ resource: l.uri })
            }
          }
        }
      },
    )
  }),
    z1.registerEditorAction(KYe, (i, e) => {
      Zt(
        class extends Ai {
          constructor() {
            super({
              id: KYe,
              label: "Go to Next Diff File",
              alias: "Go to Next Diff File",
              precondition: T.function(() => nXi(i)),
              kbOpts: { kbExpr: me.editorTextFocus, primary: 554, weight: 1100 },
            })
          }
          run(s, n) {
            const r = i.nonPersistentStorage.inlineDiffs,
              o = n.getModel()?.uri
            if (o) {
              const a = r.findIndex((l) => extUri.isEqual(l.uri, o))
              if (a < r.length - 1) {
                const l = r[a + 1]
                e.openEditor({ resource: l.uri })
              } else if (r.length >= 1) {
                const l = r[0]
                e.openEditor({ resource: l.uri })
              }
            }
          }
        },
      )
    })
  function _Zn(i) {
    const e = dt(),
      t = ud(kue),
      s = ud(GYe),
      n = ud(s4t),
      r = ud(n4t),
      o = ud(KYe),
      a = ud(JYe),
      l = Y(() =>
        e.reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
          (F) => F.source === OP,
        ),
      ),
      c = Y(() => {
        const F = l()
        return F.length === 0
          ? []
          : F.sort((H, B) =>
              H.createdAt !== undefined && B.createdAt !== undefined
                ? H.createdAt < B.createdAt
                  ? -1
                  : 1
                : extUri.isEqual(H.uri, B.uri)
                  ? H.currentRange.startLineNumber -
                    B.currentRange.startLineNumber
                  : H.uri.toString() < B.uri.toString()
                    ? -1
                    : 1,
            ).flatMap((H) =>
              H.changes
                .slice()
                .sort(
                  (B, z) =>
                    B.addedRange.startLineNumber - z.addedRange.startLineNumber,
                )
                .map((B) => ({
                  uri: H.uri,
                  startLineNumber:
                    H.currentRange.startLineNumber +
                    B.addedRange.startLineNumber -
                    1,
                })),
            )
      }),
      h = Y(() => {
        const F = l()
        return F.length === 0 || !i.uri
          ? false
          : F.some((H) =>
              e.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
                (B) =>
                  B.generationUUID === H.generationUUID &&
                  extUri.isEqual(H.uri, i.uri),
              ),
            )
      }),
      u = Y(() => (i.uri ? c().filter((F) => extUri.isEqual(F.uri, i.uri)) : [])),
      d = Y(() => {
        const F = c()
        if (F.length === 0) return []
        const H = new Set(),
          B = new Set()
        return (
          F.forEach((z) => {
            const K = z.uri.toString()
            B.has(K) || (B.add(K), H.add(K))
          }),
          Array.from(H)
        )
      }),
      g = () => {
        e.commandService.executeCommand(eXi, i.editor)
      },
      p = () => {
        e.commandService.executeCommand(JYe)
      },
      m = () => {
        if (i.uri) return l().find((F) => extUri.isEqual(F.uri, i.uri))
      },
      b = () => {
        const F = m()
        F && e.inlineDiffService.acceptDiff(F.id)
      },
      y = () => {
        const F = m()
        F && e.inlineDiffService.rejectDiff(F.id)
      },
      [w, C] = le(0),
      [S, x] = le(0),
      k = () => {
        if (!L()) {
          C(0), x(0)
          return
        }
        if (Sv.get(i.editor)) {
          const H = i.uri,
            B = l()
              .filter((he) => extUri.isEqual(he.uri, H))
              .flatMap((he) =>
                he.changes.map((ae) => ({
                  startLineNumber:
                    he.currentRange.startLineNumber +
                    ae.addedRange.startLineNumber -
                    1,
                  endLineNumber:
                    he.currentRange.startLineNumber +
                    ae.addedRange.endLineNumberExclusive -
                    1,
                  startColumn: 1,
                  endColumn: 1,
                })),
              ),
            z = B.length
          x(z)
          const K = i.editor.getPosition(),
            Q = i.editor.getVisibleRanges()
          let se = -1
          if (
            (K &&
              Q.some((he) => he.containsPosition(K)) &&
              (se = B.findIndex(
                (he) =>
                  K.lineNumber >= he.startLineNumber &&
                  K.lineNumber <= he.endLineNumber,
              )),
            se === -1 &&
              Q.length > 0 &&
              (se = B.findIndex(
                (he) =>
                  he.startLineNumber >= Q[0].startLineNumber &&
                  he.endLineNumber <= Q[Q.length - 1].endLineNumber,
              )),
            se === -1 && Q.length > 0)
          ) {
            const he = Math.floor(
              (Q[0].startLineNumber + Q[Q.length - 1].endLineNumber) / 2,
            )
            se = B.reduce(
              (ae, de, Ee) =>
                Math.abs(de.startLineNumber - he) <
                Math.abs(B[ae].startLineNumber - he)
                  ? Ee
                  : ae,
              0,
            )
          }
          C(se + 1)
        }
      }
    De(() => {
      if (L()) {
        k()
        const F = i.editor.onDidScrollChange(k),
          H = i.editor.onDidChangeCursorPosition(k),
          B = i.editor.onDidChangeModelContent(k)
        Gt(() => {
          F.dispose(), H.dispose(), B.dispose()
        })
      }
    })
    const E = (F = false) => {
        const H = Sv.get(i.editor)
        if (H) {
          const B = F ? w() : undefined
          H.navigateToChange("previous", B), k()
        }
      },
      D = (F = false) => {
        const H = Sv.get(i.editor)
        if (H) {
          const B = F ? w() : undefined
          H.navigateToChange("next", B), k()
        }
      },
      P = () => {
        e.commandService.executeCommand(KYe)
      },
      L = Y(() => (i.uri ? l().some((F) => extUri.isEqual(F.uri, i.uri)) : false))
    return I(DZn, {
      get isGenerating() {
        return h()
      },
      get isActiveEditor() {
        return i.isActiveEditor
      },
      get inlineDiffs() {
        return l()
      },
      get changesInCurrentFile() {
        return u()
      },
      get uniqueFileUris() {
        return d()
      },
      get uri() {
        return i.uri
      },
      onCancelGeneration: g,
      onNavigateToPreviousFile: p,
      onAcceptChanges: b,
      onRejectChanges: y,
      onNavigateToPreviousChange: () => E(true),
      onNavigateToNextChange: () => D(true),
      onNavigateToCurrentChange: (F) => {
        const H = Sv.get(i.editor)
        if (H) {
          const B = w()
          B > 0 && B <= S() && H.focusOnCurrentChange(B)
        }
      },
      onNavigateToNextFile: P,
      get acceptKeybinding() {
        return t()
      },
      get rejectKeybinding() {
        return s()
      },
      get nextChangeKeybinding() {
        return n()
      },
      get previousChangeKeybinding() {
        return r()
      },
      get nextFileKeybinding() {
        return o()
      },
      get previousFileKeybinding() {
        return a()
      },
      get currentVisibleChange() {
        return w()
      },
      get totalChanges() {
        return S()
      },
    })
  }
  function rXi(i, e, t, s) {
    return Wa(
      () =>
        I(_Zn, {
          get uri() {
            return e.getURI()
          },
          get isActiveEditor() {
            return e.isActiveEditor
          },
          editor: s,
        }),
      i,
      t,
    )
  }
  var u4t,
    Tue = class extends V {
      static {
        u4t = this
      }
      static {
        this.ID = "aiFullFilePromptBar"
      }
      static get(e) {
        return e.getContribution(u4t.ID)
      }
      constructor(e, t, s, n, r) {
        super(),
          (this.c = t),
          (this.f = s),
          (this.g = n),
          (this.h = r),
          (this.a = e),
          (this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
          (this.b = new so(() => {
            const d = this.D(t.createInstance(d4t, this.a))
            return this.D(d.onClick((g) => {})), d
          }))
        const o = Pg.inPeekEditor.getValue(this.h),
          a = this.a.getDomNode(),
          l = Array.from(a?.classList.values() ?? []).find((d) =>
            d.includes("monaco-diff-editor"),
          ),
          h = a?.getAttribute("data-uri")?.startsWith("output:")
        !o &&
          !l &&
          !h &&
          (this.reactiveStorageRoot.onChangeEffect({
            deps: [
              () => this.f.applicationUserPersistentStorage.hideChatEditTooltip,
              () => this.f.nonPersistentStorage.inlineDiffs,
            ],
            onChange: () => {
              this.j()
            },
          }),
          this.D(
            this.a.onDidChangeModelContent(() => {
              this.j()
            }),
          ),
          this.b.value.update(this.g.activeTextEditorControl === this.a),
          this.D(
            this.g.onDidActiveEditorChange(() => {
              this.j()
            }),
          ))
      }
      j() {
        const t = this.f.nonPersistentStorage.inlineDiffs.length > 0,
          s = this.g.activeTextEditorControl === this.a
        t ? (this.b.value.show(), this.b.value.update(s)) : this.b.value.hide()
      }
    }
  Tue = u4t = __decorate(
    [__param(1, Z), __param(2, ei), __param(3, ve), __param(4, Ce)],
    Tue,
  )
  var d4t = class extends V {
    constructor(e, t, s, n) {
      super(),
        (this.f = e),
        (this.g = t),
        (this.h = s),
        (this.j = n),
        (this.allowEditorOverflow = true),
        (this.c = this.D(new R())),
        (this.onClick = this.c.event),
        (this.isWordWrap = false),
        (this.isActiveEditor = false),
        (this.a = q("div.aiFullFilePromptBarWidget")),
        (this.a.style.width = "100%"),
        (this.a.style.pointerEvents = "none"),
        (this.a.style.display = "flex"),
        (this.a.style.justifyContent = "center"),
        (this.b = q("div")),
        (this.b.style.position = "relative"),
        (this.b.style.zIndex = "2530"),
        this.a.appendChild(this.b),
        this.D(Jl.ignoreTarget(this.a)),
        this.f.addOverlayWidget(this),
        (this.disposeRender = this.D(rXi(this.b, this, this.j, this.f))),
        this.D(
          this.f.onDidChangeModelContent(() => {
            this.f.layoutOverlayWidget(this)
          }),
        ),
        this.D(
          this.f.onDidChangeModel(() => {
            this.rerender()
          }),
        ),
        this.D(
          this.f.onDidLayoutChange(() => {
            this.rerender()
          }),
        )
    }
    rerender() {
      this.disposeRender?.dispose(),
        (this.disposeRender = this.D(rXi(this.b, this, this.j, this.f)))
    }
    getId() {
      return "aiFullFilePromptBarWidget"
    }
    getDomNode() {
      return this.a
    }
    getPosition() {
      return { preference: 3 }
    }
    getURI() {
      const e = this.f.getModel()?.uri
      if (e?.path) return e
    }
    show() {
      this.a.style.display = "block"
    }
    hide() {
      this.a.style.display = "none"
    }
    update(e) {
      ;(this.isActiveEditor = e), this.rerender()
    }
  }
  ;(d4t = __decorate([__param(1, ei), __param(2, it), __param(3, Z)], d4t)),
    Tn(Tue.ID, Tue, 3);

  return {
    Sv,
    Tue
  }
}
