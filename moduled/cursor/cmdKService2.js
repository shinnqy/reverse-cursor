// @ts-check

export function createCmdKService2(params) {
  const { Re, V, wn, rt, bt, nLt, SN, am, mae, cb, Es, JC, A$, DVe, Ui, G, Foe, _Ui, s$i, n$i, Q7, dP, o$i, __decorate, __param, Br, eg, T1, A_, it, ft, hv, yi, mo, oy, Sk, ei, ece, fP, Md, Ll, st, Xt, zi, xYe, Lg, NI, kp, Ve } = params;

  var ZR = Re("cmdKService2")
  function bKi(i) {
    const e = []
    let t = !0
    return (
      (async () => {
        for await (const n of i) {
          const r = { value: n, done: !1 }
          e.forEach((o) => o(r))
        }
        const s = { value: void 0, done: !0 }
        e.forEach((n) => n(s)), (t = !1)
      })(),
      function () {
        let n = [],
          r = null
        const o = (l) => {
          r ? (r(l), (r = null)) : n.push(l)
        }
        e.push(o)
        async function* a() {
          try {
            for (; t || n.length; )
              n.length
                ? yield n.shift().value
                : await new Promise((l) => {
                    r = (c) => {
                      l(), c.done || n.push(c)
                    }
                  })
          } finally {
            const l = e.indexOf(o)
            l !== -1 && e.splice(l, 1)
          }
        }
        return {
          [Symbol.asyncIterator]() {
            return a()
          },
        }
      }
    )
  }
  var TFt = class extends V {
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
        (this.c = e),
        (this.f = t),
        (this.g = s),
        (this.h = n),
        (this.j = r),
        (this.m = o),
        (this.n = a),
        (this.q = l),
        (this.t = c),
        (this.u = h),
        (this.w = u),
        (this.z = d),
        (this.C = g),
        (this.F = p),
        (this.G = m),
        (this.H = b),
        (this.I = y),
        (this.J = w),
        (this.L = C),
        (this.M = S),
        (this.N = x),
        (this.O = k),
        (this.P = E)
    }
    async preloadEditWithSelection(e, t, s, n) {
      const r = await this.w.getPreparedEditRequest({
        query: "",
        fastMode: !0,
        lineRange: t,
        codeBlocks: [],
        docs: [],
        spoofedCellId: n,
        modelUriForEdit: s,
      })
      e(r)
      const o = await this.c.aiClient()
      try {
        const a = this.c.getModelDetails({ specificModelField: "cmd-k" })
        await o.preloadEdit(
          { req: { ...r, modelDetails: a } },
          { headers: wn(rt()) },
        )
      } catch (a) {
        console.error(a)
        return
      }
    }
    Q(e, t) {
      return (
        e.positionColumn === t.positionColumn &&
        e.positionLineNumber === t.positionLineNumber &&
        e.selectionStartColumn === t.selectionStartColumn &&
        e.selectionStartLineNumber === t.selectionStartLineNumber
      )
    }
    R(e, t) {
      return e.text === t.text && this.Q(e.range, t.range)
    }
    addContextToBackground(e) {
      this.z.nonPersistentStorage.cmdkBackgroundContextSelections.find(
        (n) => n.uri.toString() === e.uri.toString(),
      )
        ? this.z.setNonPersistentStorage(
            "cmdkBackgroundContextSelections",
            (n) => n.uri.toString() === e.uri.toString(),
            "selections",
            (n) =>
              n.find((o) => this.R(o, e.selection)) ? n : [...n, e.selection],
          )
        : this.z.setNonPersistentStorage(
            "cmdkBackgroundContextSelections",
            (n) => [...n, { uri: e.uri, selections: [e.selection] }],
          ),
        bt.setTimeout(
          () => {
            this.z.setNonPersistentStorage(
              "cmdkBackgroundContextSelections",
              (n) => n.uri.toString() === e.uri.toString(),
              "selections",
              [],
            )
          },
          10 * 60 * 1e3,
        )
    }
    removeTerminalFollowup({ data: e, setData: t }) {
      t("chatResponse", void 0)
      const s = e.queryHistory
      if (s === void 0) return
      const n = { case: "terminalCmdKQueryHistory", queryHistory: s.current },
        o = [...e.previousStructuredTextsNewestFirst],
        a = nLt({
          req: n,
          previousStructuredTextsNewestFirst: o,
          options: { structured: !0 },
        })
      t("plainText", a),
        t("richText", a),
        t("delegate", new SN()),
        t("inputBoxDelegate", new am()),
        t("queryHistory", void 0),
        t("previousStructuredTextsNewestFirst", []),
        t("forceRerenderInputBox", (l) => l + 1),
        setTimeout(() => {
          e.inputBoxDelegate.focus()
        }, 10)
    }
    addTerminalFollowup({ req: e, structuredQuery: t, data: s, setData: n }) {
      if (
        this.z.nonPersistentStorage.promptBars.find((o) => o.id === s.uuid)
          ?.preventFollowupFromBeingAdded === !0
      )
        return
      e.case === "chatHistory"
        ? n("chatHistory", new mae(e.chatHistory))
        : n("queryHistory", new mae(e.queryHistory)),
        e.case !== "chatHistory" &&
          n("previousStructuredTextsNewestFirst", (o) =>
            typeof t == "string" ? [t, ...o] : [...t, ...o],
          )
      const r = s.inputBoxDelegate.isFocused()
      n("plainText", ""),
        n("richText", ""),
        n("delegate", new SN()),
        n("inputBoxDelegate", new am()),
        n("forceRerenderInputBox", (o) => o + 1),
        setTimeout(() => {
          r && s.inputBoxDelegate.focus()
        }, 10)
    }
    addFollowup({ promptBarId: e, req: t, options: s, structuredQuery: n }) {
      const r = this.z.nonPersistentStorage.promptBars.find((d) => d.id === e)
      if (r?.preventFollowupFromBeingAdded === !0) return
      const o = r?.originalRequest,
        a = r?.queryHistory
      t.case === "originalRequest"
        ? this.z.setNonPersistentStorage(
            "promptBars",
            (d) => d.id === e,
            "originalRequest",
            new mae(t.req),
          )
        : t.case === "chatHistory"
          ? this.z.setNonPersistentStorage(
              "promptBars",
              (d) => d.id === e,
              "inlineChatHistory",
              new mae(t.chatHistory),
            )
          : this.z.setNonPersistentStorage(
              "promptBars",
              (d) => d.id === e,
              "queryHistory",
              new mae(t.queryHistory),
            ),
        t.case !== "chatHistory" &&
          this.z.setNonPersistentStorage(
            "promptBars",
            (d) => d.id === e,
            "previousStructuredTextsNewestFirst",
            (d) => (typeof n == "string" ? [n, ...d] : [...n, ...d]),
          )
      const l = r?.data.inputBoxDelegate.isFocused(),
        c = r?.data.delegate.getRichText() ?? ""
      this.z.setNonPersistentStorage(
        "promptBars",
        (d) => d.id === e,
        "data",
        "initText",
        "",
      ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (d) => d.id === e,
          "data",
          "delegate",
          new SN(),
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (d) => d.id === e,
          "data",
          "inputBoxDelegate",
          new am(),
        )
      const h = this.z.nonPersistentStorage.promptBars.find((d) => d.id === e)
      if (
        (this.z.setNonPersistentStorage(
          "promptBars",
          (d) => d.id === e,
          "forceRerenderInputBox",
          (d) => d + 1,
        ),
        setTimeout(() => {
          if (l) {
            const d = this.z.nonPersistentStorage.promptBars.find(
              (g) => g.id === e,
            )
            if (!d) return
            d.data.inputBoxDelegate.focus()
          }
        }, 10),
        t.case === "chatHistory")
      )
        return
      const u = r?.uri
      u &&
        s?.pushUndoRedo !== !1 &&
        this.u.pushUndoElement(
          new cb(
            "Undo Add Followup",
            "undo-add-followup",
            r.diffId,
            u,
            () => {
              this.z.setNonPersistentStorage(
                "promptBars",
                (d) => d.id === e,
                "originalRequest",
                o,
              ),
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (d) => d.id === e,
                  "queryHistory",
                  a,
                ),
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (d) => d.id === e,
                  "data",
                  "initText",
                  c,
                ),
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (d) => d.id === e,
                  "data",
                  "delegate",
                  new SN(),
                ),
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (d) => d.id === e,
                  "data",
                  "inputBoxDelegate",
                  new am(),
                ),
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (d) => d.id === e,
                  "forceRerenderInputBox",
                  (d) => d + 1,
                ),
                setTimeout(() => {
                  const d = this.z.nonPersistentStorage.promptBars.find(
                    (g) => g.id === e,
                  )
                  d && d.data.inputBoxDelegate.focus()
                }, 10)
            },
            () => {
              this.addFollowup({
                promptBarId: e,
                req: t,
                structuredQuery: n,
                options: { pushUndoRedo: !1 },
              })
            },
          ),
          { breakConsolidation: !1 },
        )
    }
    removeFollowup(e, t) {
      this.z.setNonPersistentStorage(
        "promptBars",
        (u) => u.id === e,
        "chatResponse",
        void 0,
      ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "errorDetails",
          void 0,
        )
      const s = this.z.nonPersistentStorage.promptBars.find((u) => u.id === e),
        n = s?.originalRequest,
        r = s?.queryHistory
      if (n === void 0 && r === void 0) return
      const o = n
          ? { case: "originalRequest", req: n.current }
          : { case: "cmdKQueryHistory", queryHistory: r.current },
        a = s?.previousStructuredTextsNewestFirst
      if (a === void 0) return
      const l = [...a],
        c = nLt({
          req: o,
          previousStructuredTextsNewestFirst: l,
          options: { structured: !0 },
        })
      this.z.setNonPersistentStorage(
        "promptBars",
        (u) => u.id === e,
        "data",
        "initText",
        c,
      ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "data",
          "delegate",
          new SN(),
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "data",
          "inputBoxDelegate",
          new am(),
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "originalRequest",
          void 0,
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "queryHistory",
          void 0,
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "previousStructuredTextsNewestFirst",
          [],
        ),
        this.z.setNonPersistentStorage(
          "promptBars",
          (u) => u.id === e,
          "forceRerenderInputBox",
          (u) => u + 1,
        ),
        setTimeout(() => {
          const u = this.z.nonPersistentStorage.promptBars.find((d) => d.id === e)
          u && u.data.inputBoxDelegate.focus()
        }, 10)
      const h = s?.uri
      h &&
        t?.pushUndoRedo !== !1 &&
        this.u.pushUndoElement(
          new cb(
            "Undo Remove Followup",
            "undo-remove-followup",
            s?.diffId,
            h,
            () => {
              this.addFollowup({
                promptBarId: e,
                req: o,
                structuredQuery: l,
                options: { pushUndoRedo: !1 },
              })
            },
            () => {
              this.removeFollowup(e, { pushUndoRedo: !1 })
            },
          ),
          { breakConsolidation: !1 },
        )
    }
    async getPromptBarCurrentRange(e) {
      let t
      try {
        t = await this.J.createModelReference(e.uri)
        const s = t.object.textEditorModel
        return s === void 0 ? void 0 : this.w.getPromptBarCurrentRange(e, s)
      } finally {
        t?.dispose()
      }
    }
    submitContextSessionEdit(
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
    ) {
      const x = e.contextSessionUuid,
        k = rt()
      let E = new AbortController()
      return {
        abortController: E,
        generationUUID: k,
        promise: (async () => {
          this.m.publicLogCapture("Submitted cmd-k"),
            this.m.publicLogCapture("Submitted Prompt"),
            this.z.setNonPersistentStorage(
              "promptBars",
              (Q) => Q.id === t,
              "chatResponse",
              void 0,
            ),
            this.z.setNonPersistentStorage(
              "promptBars",
              (Q) => Q.id === t,
              "errorDetails",
              void 0,
            )
          const P = this.q.getActiveCodeEditor()
          if (!P) return
          if (!P.hasModel()) {
            console.error("No model found, cannot edit.")
            return
          }
          const L = P.getModel(),
            A = new Es(
              r.startLineNumber,
              r.endLineNumberExclusive,
            ).toExclusiveRange()
          this.n.recordCmdKEvent(L, {
            requestId: k,
            promptBarId: t,
            eventType: {
              case: "submitPrompt",
              value: {
                prompt: s,
                originalRange: A,
                originalText: L.getValueInRange(A),
              },
            },
          }),
            P.setPosition({ lineNumber: r.startLineNumber, column: 1 })
          const F = await this.C.getCmdKDebugInfo(),
            H = this.c.getModelDetails({ specificModelField: "cmd-k" })
          this.m.publicLogCapture("submitted.cmd-k", { model: H.modelName })
          const [B, z] = this.c.registerNewGeneration({
            metadata: { type: "cmdk" },
            generationUUID: k,
          })
          E.signal.addEventListener("abort", () => {
            z.abort()
          }),
            this.c.decrementBubbleTimesLeft(),
            this.c.addToPromptHistory({ prompt: s, commandType: JC.EDIT })
          let K
          try {
            K = await this.J.createModelReference(e.fileUri)
            const Q = K.object.textEditorModel,
              se = await this.c.cmdKClient(),
              he = await this.w.getPreparedEditRequest({
                query: s,
                fastMode: !1,
                lineRange: r,
                codeBlocks: o,
                docs: a,
                spoofedSelection: m,
                spoofedDiagnostics: b,
                spoofedCellId: y,
                images: l,
                links: c,
                originalRequest: e.originalRequest,
                modelUriForEdit: e.fileUri,
              }),
              ae = await (async () =>
                new A$({
                  explicitContext: he.explicitContext,
                  promptCodeBlocks: he.promptCodeBlocks,
                  documentationIdentifiers: he.documentationIdentifiers,
                }))()
            let de = this.z.nonPersistentStorage.promptBars.find(
              (Ie) => Ie.id === t,
            )
            if (de === void 0) return
            let Ee = []
            await Promise.all(
              this.z.nonPersistentStorage.promptBars
                .filter((Ie) => Ie.id !== t)
                .map(async (Ie) => {
                  if (Ie.dependencyPromptBarIds.includes(de.id)) {
                    const Dt = this.z.nonPersistentStorage.inlineDiffs.find(
                      (Mt) => Mt.id === Ie.diffId,
                    )
                    if (Dt !== void 0)
                      Ee.push(
                        new DVe({
                          relativePath: this.g.asRelativePath(Ie.uri, !1),
                          originalLines: Dt.originalTextLines,
                          extraContextAbove: Dt.extraContextLinesAbove,
                          extraContextBelow: Dt.extraContextLinesBelow,
                        }),
                      )
                    else {
                      const Mt = await this.getPromptBarCurrentRange(Ie)
                      if (Mt) {
                        let ki
                        try {
                          ki = await this.J.createModelReference(Ie.uri)
                          const Ii = ki.object.textEditorModel,
                            Bn = Math.min(
                              Math.max(
                                Mt.endLineNumberExclusive - 1,
                                Mt.startLineNumber,
                              ),
                              Q.getLineCount(),
                            ),
                            jr = Q.getLineMaxColumn(Bn),
                            $e = new Ui(Mt.startLineNumber, 1, Bn, jr),
                            be = Ii.getLineMaxColumn($e.endLineNumber),
                            We = new G(
                              $e.startLineNumber,
                              1,
                              $e.endLineNumber,
                              be,
                            ),
                            kt = Ii.getValueInRange(We),
                            qt = Ii.getValueInRange(
                              G.getRangeAbove(new G(We), 5),
                            ),
                            Yi = Ii.getValueInRange(
                              G.getRangeOnBelow(new G(We), 5, Ii.getLineCount()),
                            ),
                            Ji = kt.trim() === "" ? [] : kt.split(Ii.getEOL()),
                            Us = qt.trim() === "" ? [] : qt.split(Ii.getEOL()),
                            Mn = Yi.trim() === "" ? [] : Yi.split(Ii.getEOL())
                          Ee.push(
                            new DVe({
                              relativePath: this.g.asRelativePath(Ie.uri, !1),
                              originalLines: Ji,
                              extraContextAbove: Us,
                              extraContextBelow: Mn,
                            }),
                          )
                        } finally {
                          ki?.dispose()
                        }
                      }
                    }
                  }
                }),
            )
            let ke = []
            de.dependencyPromptBarIds.length > 0 &&
              de.dependencyPromptBarIds
                .map((Mt) =>
                  this.z.nonPersistentStorage.promptBars.find(
                    (ki) => ki.id === Mt,
                  ),
                )
                .map((Mt) =>
                  this.z.nonPersistentStorage.inlineDiffs.find(
                    (ki) => ki.id === Mt?.diffId,
                  ),
                )
                .forEach((Mt) => {
                  Mt !== void 0 &&
                    ke.push(
                      new Foe({
                        relativePath: this.g.asRelativePath(Mt.uri),
                        originalLines: Mt.originalTextLines,
                        newLines: _Ui(Mt),
                        extraContextAbove: Mt.extraContextLinesAbove,
                        extraContextBelow: Mt.extraContextLinesBelow,
                      }),
                    )
                })
            let Ae = [],
              Pe
            const ze = e.isHyperMode ?? !1
            if (
              this.z.applicationUserPersistentStorage.checklistState
                ?.doneCommandK !== !0
            ) {
              const Ie = this.z.applicationUserPersistentStorage.checklistState
              this.z.setApplicationUserPersistentStorage(
                "checklistState",
                (Dt) => ({ ...(Dt ?? {}), doneCommandK: !0 }),
              )
            }
            const at = await this.F.streamRequestWithContextWrapped(x, {
              request: {
                cmdKOptions: {
                  modelDetails: H,
                  chatMode: e.chatMode,
                  adaCmdKContext: !1,
                  useReranker: e.useReranker,
                  useWeb: e.useWeb,
                },
                cmdKDebugInfo: F,
                legacyContext: ae,
                sessionId: t,
                previousEdits: ke ?? [],
                upcomingEdits: Ee ?? [],
                images: he.images,
                links: he.links,
                hyperModel: ze ? e.hyperModel : void 0,
                diffHistory: Ae,
                diffToBaseBranch: Pe,
                timingInfo:
                  S === void 0
                    ? void 0
                    : { userInputTime: S, streamCmdkTime: Date.now() },
              },
              finalInput: {
                case: "cmd-k",
                fileUri: e.fileUri,
                query: s,
                replaceRange: e.diffRange ?? r,
                queryHistory: e.queryHistory,
                chatHistory: de?.inlineChatHistory?.current,
              },
              endpoint: async (Ie, Dt) =>
                ze
                  ? se.streamHypermode(new s$i(Ie), Dt)
                  : se.streamCmdK(new n$i(Ie), Dt),
              generationUUID: k,
              abortSignal: z.signal,
              frozenDesire: "unfreezeOnStreamCompletion",
            })
            if (!at.ok()) return
            const we = Q7.typeName + "/" + Q7.methods.streamCmdK.name,
              vt = this.c.streamResponse({
                modelDetails: H,
                streamer: at.v,
                generationUUID: k,
                streamerURL: we,
                rethrowCancellation: !0,
                rerun: w,
                source: ze ? "other" : "cmd-k",
              }),
              lt = this.O,
              Xe = this.z,
              Oe = (async function* () {
                try {
                  let Ie = 0
                  for await (const Dt of vt) yield Dt, Ie++
                } catch (Ie) {
                  if (lt.shouldShowImmediateErrorMessage(Ie)) {
                    const Dt = dP(Ie)
                    Xe.setNonPersistentStorage(
                      "promptBars",
                      (Mt, ki) => Mt.id === t,
                      "errorDetails",
                      {
                        generationUUID: k,
                        error: Dt,
                        message: Ie?.rawMessage,
                        rerun: void 0,
                      },
                    )
                  }
                  throw Ie
                }
              })(),
              Fe = this.F.getReactiveReadonlyContextSession(x)
            if (!Fe)
              throw new Error("BIG ARVID BUG: context session is undefined")
            const ut = Fe.intents
              .find((Ie) => Ie.intent.intent.case === "cmdKCurrentFile")
              ?.items.find((Ie) => Ie.item.item.case === "cmdKSelection")?.item
              .item.value
            if (!ut)
              throw new Error("BIG ARVID BUG: cmdKSelectionItem is undefined")
            let Ue = ut.lines
            const Ke = Fe.intents
              .find((Ie) => Ie.intent.intent.case === "cmdKQueryEtc")
              ?.items.find((Ie) => Ie.item.item.case === "cmdKQuery")?.item
              .item.value
            if (!Ke) throw new Error("BIG ARVID BUG: cmdKQuery is undefined")
            const mt = Fe.intents
              .find((Ie) => Ie.intent.intent.case === "cmdKCurrentFile")
              ?.items.find((Ie) => Ie.item.item.case === "cmdKImmediateContext")
              ?.item.item.value
            if (!mt)
              throw new Error("BIG ARVID BUG: cmdKImmediateContext is undefined")
            const Mi = Fe.intents
                .find((Ie) => Ie.intent.intent.case === "cmdKQueryEtc")
                ?.items.find((Ie) => Ie.item.item.case === "chatHistory")?.item
                .item.value,
              qe = Fe.intents
                .find((Ie) => Ie.intent.intent.case === "cmdKQueryEtc")
                ?.items.find((Ie) => Ie.item.item.case === "cmdKQueryHistory")
                ?.item.item.value
            let Be = qe
            for (; Be !== void 0; )
              (Ue = Be.selection?.lines ?? []), (Be = Be.queryHistory)
            const Ge = {
                query: Ke,
                immediateContext: mt,
                selection: ut,
                queryHistory: qe,
                contextItemHashes: Fe.intents.flatMap((Ie) =>
                  Ie.items.map((Dt) => Dt.itemHash),
                ),
              },
              Et = () => {
                E.abort()
                const Ie =
                    e.chatMode === !0
                      ? (() => {
                          const Ii = this.z.nonPersistentStorage.promptBars.find(
                            (jr) => jr.id === t,
                          )?.chatResponse
                          return {
                            case: "chatHistory",
                            chatHistory: {
                              userMessage: s,
                              assistantResponse: Ii ?? "",
                              chatHistory: Mi,
                              activeForCmdK: !1,
                            },
                          }
                        })()
                      : { case: "cmdKQueryHistory", queryHistory: Ge },
                  Dt = this.z.nonPersistentStorage.promptBars.find(
                    (ki) => ki.id === t,
                  ),
                  Mt = this.z.nonPersistentStorage.inlineDiffs.find(
                    (ki) => ki.id === Dt?.diffId,
                  )
                this.addFollowup({ promptBarId: t, req: Ie, structuredQuery: n }),
                  d?.()
              }
            if (e.chatMode === !0) {
              await this.handleChatResponse({
                promptBarId: t,
                stream: Oe,
                generationUUID: k,
                doneCallback: () => {
                  Et()
                },
              })
              return
            }
            e.rejectCurrentDiff()
            const Bt = Q.getEOL(),
              _e = (Ie) => {
                this.z.setNonPersistentStorage(
                  "promptBars",
                  (Dt) => Dt.id === t,
                  "statusUpdate",
                  Ie,
                )
              },
              Nt = this.c.streamLines(
                (async function* () {
                  for await (const Ie of Oe)
                    Ie.response.case === "editStream"
                      ? yield Ie.response.value.text.replace(
                          `
  `,
                          Bt,
                        )
                      : Ie.response.case === "statusUpdate" &&
                        _e(Ie.response.value.messages)
                })(),
              )
            let ni = Nt
            if (C) {
              const Ie = bKi(Nt)
              ;(ni = Ie()), C(Ie())
            }
            if (E.signal.aborted) return
            const ri = Ue.every((Ie) => Ie.trim() === "")
            de = this.z.nonPersistentStorage.promptBars.find((Ie) => Ie.id === t)
            const dn = this.w.getPromptBarCurrentRange(de, Q) ?? r,
              xi = Q.getValueInRange(G.getRangeAbove(new G(dn), 5)),
              Bs = Q.getValueInRange(
                G.getRangeOnBelow(new G(dn), 5, Q.getLineCount()),
              ),
              yt = xi.split(Q.getEOL()),
              je = Bs.split(Q.getEOL()),
              St = []
            for (
              let Ie = dn.startLineNumber;
              Ie < dn.endLineNumberExclusive;
              Ie++
            )
              Q.tokenization.forceTokenization(Ie),
                St.push(Q.tokenization.getLineTokens(Ie).extractObject())
            if (e.isHeadless_onlyAvailableWithUseContextSession === !0) {
              let Ie = []
              for await (const Dt of ni) Ie.push(Dt)
              return Ie.join(Bt)
            }
            return await this.u.streamDiff({
              uri: e.fileUri,
              originalLineRange: new Es(
                dn.startLineNumber,
                dn.endLineNumberExclusive,
              ),
              generationUUID: k,
              streamingLines: ni,
              prompt: s,
              originalTextLines: Q.getValueInRange({
                startLineNumber: dn.startLineNumber,
                startColumn: 1,
                endLineNumber: dn.endLineNumberExclusive - 1,
                endColumn: Q.getLineMaxColumn(dn.endLineNumberExclusive - 1),
              }).split(Bt),
              originalLineTokens: St,
              extraContextLinesAbove: yt,
              extraContextLinesBelow: je,
              hideDeletionViewZones: ri,
              isHidden: !1,
              undoRedo: {
                undo: () => {
                  h()
                },
                redo: () => {},
              },
              diffIdCallback: (Ie) => {
                if (E.signal.aborted) {
                  this.u.cancelDiff(Ie)
                  return
                } else
                  E.signal.addEventListener("abort", () => {
                    this.u.cancelDiff(Ie)
                  })
                u?.(Ie)
              },
              doneCallback: (Ie) => {
                Et()
              },
              cancelGenerationWithNoChangesCallback: g,
              rejectCallback: p,
              promptBarId: t,
            })
          } catch (Q) {
            console.error(Q),
              this.z.setNonPersistentStorage("inprogressAIGenerations", (se) =>
                se.filter((he) => he.generationUUID !== k),
              )
          } finally {
            K?.dispose()
          }
        })(),
      }
    }
    async submitTerminalCmdK(e, t, s, n) {
      this.m.publicLogCapture("Submitted cmd-k in terminal"),
        this.m.publicLogCapture("Submitted Prompt"),
        t("chatResponse", void 0)
      const r = this.c.getModelDetails({ specificModelField: "terminal-cmd-k" })
      this.m.publicLogCapture("submitted.cmd-k-terminal", { model: r.modelName })
      const [o, a] = this.c.registerNewGeneration({
        metadata: { type: "cmdk" },
        generationUUID: s,
      })
      this.c.addToPromptHistory({ prompt: e.plainText, commandType: JC.EDIT })
      try {
        t("abortController", a)
        const l = await this.c.cmdKClient(),
          c = e.richText,
          h = e.plainText,
          u = await (async () =>
            new A$({ explicitContext: await this.c.getExplicitContext() }))(),
          d = await this.F.streamRequestWithContextWrapped(e.contextSessionUuid, {
            request: {
              cmdKOptions: {
                modelDetails: r,
                chatMode: n.chatMode,
                adaCmdKContext: !1,
                useWeb: !!e.useWeb,
              },
              legacyContext: u,
              sessionId: e.uuid,
            },
            finalInput: {
              case: "terminal-cmd-k",
              query: h,
              instanceId: e.instanceId,
              queryHistory: e.queryHistory?.current,
              chatHistory: e.chatHistory?.current,
            },
            endpoint: async (S, x) => l.streamTerminalCmdK(new o$i(S), x),
            generationUUID: s,
            abortSignal: a.signal,
            frozenDesire: "unfreezeOnStreamCompletion",
          })
        if (!d.ok()) return s
        const g = Q7.typeName + "/" + Q7.methods.streamTerminalCmdK.name,
          p = this.c.streamResponse({
            modelDetails: r,
            streamer: d.v,
            generationUUID: s,
            rethrowCancellation: !0,
            streamerURL: g,
            rerun: () => {},
            source: "other",
          }),
          m = this.F.getReactiveReadonlyContextSession(e.contextSessionUuid)
        if (!m) throw new Error("BIG ARVID BUG: context session is undefined")
        const b = m.intents
          .find((S) => S.intent.intent.case === "terminalCmdKDefaults")
          ?.items.find((S) => S.item.item.case === "terminalCmdKQuery")?.item
          .item.value
        if (!b) throw new Error("BIG ARVID BUG: cmdKQuery is undefined")
        const y = m.intents
            .find((S) => S.intent.intent.case === "terminalCmdKDefaults")
            ?.items.find((S) => S.item.item.case === "chatHistory")?.item
            .item.value,
          w = m.intents
            .find((S) => S.intent.intent.case === "terminalCmdKDefaults")
            ?.items.find((S) => S.item.item.case === "terminalCmdKQueryHistory")
            ?.item.item.value,
          C = () => {
            a.abort()
            const S =
              n.chatMode === !0
                ? (() => {
                    const x = e.chatResponse
                    return {
                      case: "chatHistory",
                      chatHistory: {
                        userMessage: h,
                        assistantResponse: x ?? "",
                        chatHistory: y,
                        activeForCmdK: !1,
                      },
                    }
                  })()
                : (() => {
                    const x = e.suggestedCommand
                    return {
                      case: "terminalCmdKQueryHistory",
                      queryHistory: {
                        query: b,
                        queryHistory: w,
                        contextItemHashes: m.intents.flatMap((E) =>
                          E.items.map((D) => D.itemHash),
                        ),
                        suggestedCommand: x,
                      },
                    }
                  })()
            this.addTerminalFollowup({
              req: S,
              structuredQuery: c,
              setData: t,
              data: e,
            })
          }
        if ((n.chatMode !== !0 && t("suggestedCommand", ""), a.signal.aborted))
          return s
        try {
          for await (const S of p)
            if (S.response.case === "chat") {
              const x = S.response.value.text
              t("chatResponse", (k) => (k === void 0 ? x : k + x))
            } else if (S.response.case === "terminalCommand") {
              const x = S.response.value.partialCommand
              t("suggestedCommand", (k) => k + x)
            } else if (S.response.case === "statusUpdate") {
              const x =
                S.response.value.messages.length > 0
                  ? S.response.value.messages[0]
                  : void 0
              t("statusUpdate", x)
            }
        } finally {
          C(),
            this.z.setNonPersistentStorage("inprogressAIGenerations", (S) =>
              S.filter((x) => x.generationUUID !== s),
            )
        }
      } catch (l) {
        t("abortController", void 0),
          console.error(l),
          this.z.setNonPersistentStorage("inprogressAIGenerations", (c) =>
            c.filter((h) => h.generationUUID !== s),
          )
      }
      return s
    }
    submitEditWithSelection(e) {
      try {
        if (e.options.useContextSession === !0)
          return this.submitContextSessionEdit(
            e.options,
            e.promptBarId,
            e.query,
            e.structuredQuery,
            e.lineRange,
            e.codeBlocks,
            e.docs,
            e.images ?? [],
            e.selectedLinks ?? [],
            e.focusEditor,
            e.diffIdCallback,
            e.doneCallback,
            e.cancelGenerationWithNoChangesCallback,
            e.rejectCallback,
            e.spoofedSelection,
            e.spoofedDiagnostics,
            e.spoofedCellId,
            e.rerun,
            e.inspectLineStream,
            e.startTime,
          )
        e.options.rejectCurrentDiff()
        const t = rt()
        let s = new AbortController()
        return {
          abortController: s,
          generationUUID: t,
          promise: (async () => {
            const r = this.q.getActiveCodeEditor()
            if (!r) return
            if (!r.hasModel()) {
              console.error("No model found, cannot edit.")
              return
            }
            const o = r.getModel(),
              a = Math.min(
                Math.max(
                  e.lineRange.endLineNumberExclusive - 1,
                  e.lineRange.startLineNumber,
                ),
                o.getLineCount(),
              ),
              l = o.getLineMaxColumn(a),
              c = new Ui(e.lineRange.startLineNumber, 1, a, l),
              h = r.getModel().uri,
              u = r.getModel(),
              d = u.getLineMaxColumn(c.endLineNumber),
              g = new G(c.startLineNumber, 1, c.endLineNumber, d),
              p = u.getValueInRange(g),
              m = u.getValueInRange(G.getRangeAbove(new G(g), 5)),
              b = u.getValueInRange(
                G.getRangeOnBelow(new G(g), 5, o.getLineCount()),
              ),
              y = p.trim() === "",
              w = p.trim() === "" ? [] : p.split(u.getEOL()),
              C = m.trim() === "" ? [] : m.split(u.getEOL()),
              S = b.trim() === "" ? [] : b.split(u.getEOL())
            let x,
              k = await (async () =>
                e.options.fastMode && e.options.preloadedRequest
                  ? {
                      ...e.options.preloadedRequest,
                      query: e.query,
                      fastMode: !0,
                    }
                  : await this.w.getPreparedEditRequest({
                      query: e.query,
                      fastMode: !1,
                      lineRange: e.lineRange,
                      codeBlocks: e.codeBlocks,
                      docs: e.docs,
                      spoofedSelection: e.spoofedSelection,
                      spoofedDiagnostics: e.spoofedDiagnostics,
                      spoofedCellId: e.spoofedCellId,
                      originalRequest: e.options.originalRequest,
                      modelUriForEdit: e.options.fileUri,
                      images: e.images,
                      links: e.selectedLinks,
                    }))()
            const D = await this.w.streamPreparedEdit(k, {
              type: y ? "generate" : "edit",
              generationUUID: t,
              options: { rerun: e.rerun },
            })
            if (e.inspectLineStream) {
              const L = bKi(D)
              ;(x = L()), e.inspectLineStream?.(L())
            } else x = D
            r.setPosition({ lineNumber: g.startLineNumber, column: 1 })
            const P = []
            for (let L = c.startLineNumber; L <= c.endLineNumber; L++) {
              o.tokenization.forceTokenization(L)
              const A = o.tokenization.getLineTokens(L)
              P.push(A.extractObject())
            }
            if (!s.signal.aborted)
              return await this.u.streamDiff({
                uri: h,
                originalLineRange: new Es(
                  c.startLineNumber,
                  y ? c.endLineNumber : c.endLineNumber + 1,
                ),
                generationUUID: t,
                streamingLines: x,
                extraContextLinesAbove: C,
                extraContextLinesBelow: S,
                prompt: e.query,
                originalTextLines: w,
                originalLineTokens: P,
                isHidden: !1,
                hideDeletionViewZones: !1,
                undoRedo: {
                  undo: () => {
                    e.focusEditor()
                  },
                  redo: () => {},
                },
                diffIdCallback: (L) => {
                  if (s.signal.aborted) {
                    this.u.cancelDiff(L)
                    return
                  } else
                    s.signal.addEventListener("abort", () => {
                      this.u.cancelDiff(L)
                    })
                  e.diffIdCallback?.(L)
                },
                doneCallback: (L) => {
                  s.abort(),
                    this.addFollowup({
                      promptBarId: e.promptBarId,
                      req: {
                        case: "originalRequest",
                        req: { ...k, originalRequest: e.options.originalRequest },
                      },
                      structuredQuery: e.structuredQuery,
                    }),
                    e.doneCallback?.()
                },
                promptBarId: e.promptBarId,
              })
          })(),
        }
      } catch (t) {
        throw (console.error("[Submitting]", "[Error]", t), t)
      }
    }
    async handleChatResponse({
      promptBarId: e,
      stream: t,
      doneCallback: s,
      generationUUID: n,
    }) {
      try {
        for await (const r of t)
          if (r.response.case === "chat") {
            const o = r.response.value.text
            this.z.setNonPersistentStorage(
              "promptBars",
              (a) => a.id === e,
              "chatResponse",
              (a) => (a === void 0 ? o : a + o),
            )
          } else
            r.response.case === "statusUpdate"
              ? this.z.setNonPersistentStorage(
                  "promptBars",
                  (o) => o.id === e,
                  "statusUpdate",
                  r.response.value.messages,
                )
              : console.warn(
                  "Not supported yet; mixing modes in stream; got in chat response: ",
                  r.response.case,
                )
      } finally {
        s?.(),
          this.z.setNonPersistentStorage("inprogressAIGenerations", (r) =>
            r.filter((o) => o.generationUUID !== n),
          )
      }
    }
  }
  ;(TFt = __decorate(
    [
      __param(0, Br),
      __param(1, eg),
      __param(2, it),
      __param(3, T1),
      __param(4, A_),
      __param(5, ft),
      __param(6, hv),
      __param(7, yi),
      __param(8, mo),
      __param(9, oy),
      __param(10, Sk),
      __param(11, ei),
      __param(12, ece),
      __param(13, fP),
      __param(14, Md),
      __param(15, Ll),
      __param(16, st),
      __param(17, Xt),
      __param(18, zi),
      __param(19, xYe),
      __param(20, Lg),
      __param(21, NI),
      __param(22, kp),
    ],
    TFt,
  )),
    Ve(ZR, TFt, 1);

  return {
    ZR,
  }
}
