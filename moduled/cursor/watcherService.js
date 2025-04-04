// @ts-check

export function createWatcherService(params) {
  const { V, __decorate, __param, A_, yi, Br, eg, Xt, ei, mo, nt, it, Md, Fn, ve, ft, si, zi, st, Ac, Lg, ue, Ti, cppService, fn, Ve, watcherService, Kt, G, VS, J, rt, zB, CppIntent, SYe, o2i, Ri, Boe, Zui, U, d$i, W1t, j$i, q$i, wn, Hu, IKn, Y6n} = params;

  var edi = class extends V {
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
        (this.r = c),
        (this.s = h),
        (this.t = u),
        (this.u = d),
        (this.w = g),
        (this.y = p),
        (this.z = m),
        (this.C = b),
        (this.F = y),
        (this.G = w),
        (this.H = C),
        (this.I = S),
        (this.J = x),
        (this.L = k),
        (this.fileStates = {}),
        (this.notificationHandlers = {}),
        (this.lastOpenedFiles = []),
        (this.M = new Map()),
        (this.handleKeyDown = (E) => {
          E.key === "Escape" && this.Q()
        }),
        (this.U = {})
    }
    getMarker(e) {
      return this.notificationHandlers[e]?.getMarker()
    }
    async getGitDiffChangedRanges() {
      if (this.r.getWorkspace().folders.length === 0)
        return console.error("Watcher: not in a folder; giving up"), []
      this.r.getWorkspace().folders.length > 1 &&
        console.warn(
          "Watcher: in a multi-root workspace; just doing it for the first folder",
        )
      const e = this.r.getWorkspace().folders[0].uri,
        t = await this.t.exec2("git diff", {
          cwd: e.fsPath,
          maxBuffer: 1024 * 1024,
        }),
        s = t.stdout ?? t.stderr
      if (t.error)
        return console.error("Watcher: error getting git diff", t.error), []
      const n =
          /diff --git a\/(.*) b\/\1\nindex [\da-f]+\.\.[\da-f]+ \d+\n--- a\/\1\n\+\+\+ b\/\1\n@@ -\d+,\d+ \+(\d+),(\d+) @@.*\n(?:\s*.*\n)*/g,
        r = []
      let o
      for (; (o = n.exec(s)) !== null; ) {
        const a = parseInt(o[2], 10),
          l = parseInt(o[3], 10),
          c = a + l - 1,
          h = o[1],
          u = Kt(e, h)
        r.push({ range: new G(a, 1, c, 1), uri: u }), (n.lastIndex = o.index + 1)
      }
      return r
    }
    async diffScan() {
      throw new Error("deprecated")
    }
    async scanDisplayedFiles() {
      throw new Error("deprecated")
    }
    N() {
      this.M.forEach((e) => e.forEach((t) => t.dispose())), this.M.clear()
    }
    async startBackgroundWatch() {
      this.j.applicationUserPersistentStorage.watcherEnabled === !0 &&
        (this.N(), this.O())
    }
    O() {
      for (const t of this.f.listCodeEditors()) this.R(t)
      this.M.set("global", [
        this.D(
          this.f.onCodeEditorAdd((t) => {
            this.R(t)
          }),
        ),
      ]),
        this.D(
          this.L.files.onDidSave((t) => {
            const s = this.f.getActiveCodeEditor()
            if (s === null) return
            const n = s.getModel()
            n !== null &&
              t.model.resource.toString() === n.uri.toString() &&
              this.j.applicationUserPersistentStorage.lintSettings
                .runOnSaveInstead &&
              this.W(s, n, n.getEOL())
          }),
        )
      const e = VS()
      this.M.set("window", [
        this.D({
          dispose: () => {
            for (const t of e)
              t.window.document.removeEventListener("keydown", this.handleKeyDown)
          },
        }),
      ])
      for (const t of e)
        t.window.document.addEventListener("keydown", this.handleKeyDown)
    }
    P(e, t) {
      return !(
        e.endLineNumber < t.lineNumber ||
        e.startLineNumber > t.lineNumber ||
        (e.endLineNumber === e.startLineNumber && e.endColumn < t.column) ||
        (e.startLineNumber === e.endLineNumber && e.startColumn > t.column)
      )
    }
    Q() {
      const e = this.f.getActiveCodeEditor()
      if (e === null) return
      const t = e.getModel()
      if (t === null) return
      const s = e.getPosition()
      if (s)
        for (const [n, r] of Object.entries(this.notificationHandlers)) {
          const o = r.getMarker()
          o !== void 0 &&
            o.resource.toString() === t.uri.toString() &&
            this.P(
              new G(
                o.startLineNumber,
                o.startColumn,
                o.endLineNumber,
                o.endColumn,
              ),
              s,
            ) &&
            (r.dispose(), delete this.notificationHandlers[n])
        }
    }
    run() {
      throw new Error("deprecated")
    }
    R(e) {
      const t = e.getId()
      this.M.set(t, [
        e.onDidDispose(() => {
          this.M.get(t)?.forEach((n) => n.dispose()), this.M.delete(t)
        }),
      ])
      const s = e.getModel()
      s !== null && this.S(e, s),
        this.M.get(t).push(
          this.D(
            e.onDidChangeModel(() => {
              const n = e.getModel()
              n !== null && this.S(e, n)
            }),
          ),
        )
    }
    S(e, t) {
      this.D(
        t.onDidChangeContent(async (s) => {
          this.Q(),
            this.j.applicationUserPersistentStorage.lintSettings
              .runOnSaveInstead || this.W(e, t, t.getEOL())
        }),
      )
    }
    W(e, t, s) {
      clearTimeout(this.U[t.uri.toString()])
      const n = e.getPosition(),
        r = this.j.applicationUserPersistentStorage.lintSettings.runOnSaveInstead
          ? 0
          : this.j.applicationUserPersistentStorage.lintSettings
              .watcherDebounceTimeSeconds * 1e3
      this.U[t.uri.toString()] = setTimeout(() => {
        this.computeBugsForFileAroundLocation(e, t, s, n)
      }, r)
    }
    async computeBugsForFileAroundLocation(e, t, s, n) {
      const r = new J(),
        o = rt()
      try {
        this.j.setNonPersistentStorage("lintState", "lastLintGenerationUuid", o),
          this.j.setNonPersistentStorage("lintState", "lastLintResult", zB.NONE)
        const a = this.g.getModelDetails(),
          [l, c] = this.g.registerNewGeneration({
            metadata: void 0,
            generationUUID: o,
          }),
          h = await this.J.getPartialCppRequest({
            editor: e,
            uri: t.uri,
            modelValue: t.getValue(),
            modelVersion: t.getVersionId(),
            position: n,
            source: CppIntent.Unknown,
            shouldRelyOnFileSyncForFile: !1,
          }),
          u = h.currentFile?.contents
        if (!u) throw new Error("Contents are undefined")
        const d = u.split(s),
          g = d.findIndex((S) => S.trim().length > 0),
          p = d.length - d.reverse().findIndex((S) => S.trim().length > 0) - 1,
          m = await this.m.createModelReference(t.uri)
        r.add(m)
        const b = new SYe(m, [new G(g, 1, p, t.getLineMaxColumn(p))])
        r.add(b)
        const y = await this.g.aiClient()
        console.log("[Linter] calling findBugs")
        const w = await y.findBugs(
            new o2i({
              currentFile: h.currentFile,
              modelDetails: {
                modelName:
                  "accounts/anysphere/models/bugfind-codestral-22b-09-23",
              },
            }),
          ),
          { bug: C } = w
        if (
          C !== void 0 &&
          C.confidence >=
            this.j.applicationUserPersistentStorage.lintSettings.watcherThreshold
        ) {
          const S = b.getUpdatedRange(
            new G(
              C.lineNumber,
              1,
              C.lineNumber,
              t.getLineMaxColumn(C.lineNumber),
            ),
          )
          if (!S) {
            console.error(
              "Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
            )
            return
          }
          const x = 3,
            k = new G(
              Math.max(1, S.startLineNumber - x),
              1,
              Math.min(t.getLineCount(), S.endLineNumber + x),
              t.getLineMaxColumn(Math.min(t.getLineCount(), S.endLineNumber + x)),
            )
          if (
            [
              ...this.n
                .read({
                  resource: t.uri,
                  severities: Ri.Error | Ri.Warning,
                  take: 1e3,
                })
                .map(
                  (F) =>
                    new G(
                      F.startLineNumber,
                      F.startColumn,
                      F.endLineNumber,
                      F.endColumn,
                    ),
                ),
              ...Object.values(this.j.nonPersistentStorage.lintState.bugs)
                .map((F) => F.bug.replaceRange)
                .flatMap((F) => F ?? [])
                .map(
                  (F) =>
                    new G(
                      F.startLineNumber,
                      F.startColumn,
                      F.endLineNumberInclusive,
                      F.endColumn,
                    ),
                ),
            ].filter(
              (F) =>
                (F.startLineNumber >= k.startLineNumber &&
                  F.startLineNumber <= k.endLineNumber) ||
                (F.endLineNumber >= k.startLineNumber &&
                  F.endLineNumber <= k.endLineNumber),
            ).length > 0 &&
            this.j.applicationUserPersistentStorage.lintSettings
              .silenceIfOverlappingWithRegularLinter
          ) {
            console.warn(
              "Skipping bug because there is already a marker in the range!!!",
              C,
            )
            return
          }
          const L = t.getValueInRange(k),
            A = new Boe({
              relativeWorkspacePath: this.r.asRelativePath(t.uri),
              uuid: rt(),
              message: `(confidence: ${Math.floor(C.confidence * 100)}%) ${C.description} (click + ESC to dismiss)`,
              replaceRange: {
                startLineNumber: k.startLineNumber,
                startColumn: k.startColumn,
                endLineNumberInclusive: k.endLineNumber,
                endColumn: k.endColumn,
              },
              replaceText: L,
              replaceInitialText: L,
            })
          this.j.setNonPersistentStorage("lintState", "bugs", (F) => [
            ...F.filter((H) => H.bug.uuid !== A.uuid),
            {
              bug: A,
              uri: this.r
                .getWorkspace()
                .folders[0].toResource(A.relativeWorkspacePath),
            },
          ]),
            (this.notificationHandlers[A.uuid] = new Zui(
              m,
              { bug: A, uri: t.uri },
              this.j,
              this.n,
              this.r,
            ))
        }
      } catch {
        this.j.setNonPersistentStorage("lintState", "lastLintResult", zB.ERROR)
      } finally {
        r.dispose(),
          this.j.setNonPersistentStorage("inprogressAIGenerations", (l) =>
            l.filter((c) => c.generationUUID !== o),
          )
        const a = Math.floor(Date.now() / 1e3)
        this.j.setNonPersistentStorage("lintState", "lastLintTimestamp", a)
      }
    }
    async computeBugsForFileRanges(e, t, s) {
      const n = new J(),
        r = rt()
      try {
        this.j.setNonPersistentStorage("lintState", "lastLintGenerationUuid", r),
          this.j.setNonPersistentStorage("lintState", "lastLintResult", zB.NONE)
        const o = this.g.getModelDetails(),
          [a, l] = this.g.registerNewGeneration({
            metadata: void 0,
            generationUUID: r,
          }),
          c = []
        for (const { uri: b, ranges: y, entireFileRange: w } of e) {
          let C
          try {
            const S = await this.m.createModelReference(b)
            ;(C = S), n.add(S)
            const x =
                y ??
                (w ? [S.object.textEditorModel.getFullModelRange()] : void 0),
              k = await this.getRanges(S.object.textEditorModel, t, x, s)
            if (k.length > 0) {
              const E = new SYe(S, k)
              n.add(E),
                c.push({
                  model: S.object.textEditorModel,
                  ranges: k.map((D) => {
                    const P = new G(
                        D.startLineNumber,
                        1,
                        D.endLineNumber,
                        S.object.textEditorModel.getLineMaxColumn(
                          D.endLineNumber,
                        ),
                      ),
                      L = S.object.textEditorModel
                        .getValueInRange(P)
                        .split(S.object.textEditorModel.getEOL())
                    let A = []
                    if (D.startLineNumber > 1) {
                      const H = new G(
                        Math.max(1, D.startLineNumber - 10),
                        1,
                        D.startLineNumber - 1,
                        S.object.textEditorModel.getLineMaxColumn(
                          D.startLineNumber - 1,
                        ),
                      )
                      A = S.object.textEditorModel
                        .getValueInRange(H)
                        .split(S.object.textEditorModel.getEOL())
                    }
                    let F = []
                    if (
                      D.endLineNumber < S.object.textEditorModel.getLineCount()
                    ) {
                      const H = new G(
                        D.endLineNumber + 1,
                        1,
                        Math.min(
                          S.object.textEditorModel.getLineCount(),
                          D.endLineNumber + 10,
                        ),
                        S.object.textEditorModel.getLineMaxColumn(
                          Math.min(
                            S.object.textEditorModel.getLineCount(),
                            D.endLineNumber + 10,
                          ),
                        ),
                      )
                      F = S.object.textEditorModel
                        .getValueInRange(H)
                        .split(S.object.textEditorModel.getEOL())
                    }
                    return {
                      range: D,
                      lines: L,
                      contextLinesAfter: F,
                      contextLinesBefore: A,
                    }
                  }),
                  listener: E,
                  relativeWorkspacePath: this.r.asRelativePath(b),
                })
            }
          } catch (S) {
            console.warn("Watcher: error getting ranges -- ", S)
            continue
          } finally {
            C?.dispose()
          }
        }
        if (c.length === 0) {
          this.j.setNonPersistentStorage(
            "lintState",
            "lastLintResult",
            zB.NO_CHANGES_FOUND,
          )
          return
        }
        const h = []
        if (this.r.getWorkspace().folders.length > 0) {
          const b = this.r.getWorkspace().folders[0].uri
          let y = await this.readFileContents(
            U.joinPath(b, ".cursor", "lint.txt"),
          )
          y.trim() !== "" &&
            (y += `
  `)
          const C = (y + this.j.applicationUserPersistentStorage.lintRules)
            .split(
              `
  `,
            )
            .filter((S) => S.trim() !== "")
          for (let S = 0; S < C.length; S++)
            h.push(new d$i({ text: C[S].trim() }))
        }
        const u = c.flatMap((b) =>
            b.ranges.map(
              (y) =>
                new W1t({
                  relativeWorkspacePath: b.relativeWorkspacePath,
                  startLineNumber: y.range.startLineNumber,
                  lines: y.lines,
                  contextLinesBefore: y.contextLinesBefore,
                  contextLinesAfter: y.contextLinesAfter,
                }),
            ),
          ),
          d = u.map((b) => new j$i()),
          g = new q$i({
            chunksToAnalyze: u,
            explicitContext: await this.g.getExplicitContext(),
            workspaceRootPath: this.c.getWorkspaceRootPath(),
            modelDetails: o,
            dismissedBugs: this.j.nonPersistentStorage.lintState.dismissedBugs,
            activeBugs: this.j.nonPersistentStorage.lintState.bugs.map(
              (b) => b.bug,
            ),
            lintRules: h,
            clients: d,
            forceEnableDiscriminators:
              this.j.applicationUserPersistentStorage.lintSettings
                .forceEnableDiscriminators,
            forceDisableDiscriminators:
              this.j.applicationUserPersistentStorage.lintSettings
                .forceDisableDiscriminators,
            forceEnableGenerators:
              this.j.applicationUserPersistentStorage.lintSettings
                .forceEnableGenerators,
            forceDisableGenerators:
              this.j.applicationUserPersistentStorage.lintSettings
                .forceDisableGenerators,
            version: 2,
          }),
          m = (await this.g.aiClient()).streamAiLintBug(g, {
            signal: l.signal,
            headers: wn(r),
          })
        for await (const b of m)
          switch (b.response.case) {
            case "bug": {
              const y = b.response.value
              if (!y.replaceRange) continue
              const w = c.filter(
                (D) => D.relativeWorkspacePath === y.relativeWorkspacePath,
              )[0]
              if (!w) {
                console.error(
                  "Watcher: could not find listener for bug. This shouldnt happen unless the server is broken",
                )
                continue
              }
              const C = w.listener.getUpdatedRange(
                new G(
                  y.replaceRange.startLineNumber,
                  y.replaceRange.startColumn,
                  y.replaceRange.endLineNumberInclusive,
                  y.replaceRange.endColumn,
                ),
              )
              if (!C) {
                console.error(
                  "Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
                )
                continue
              }
              const S = y.reevaluateRange
                ? w.listener.getUpdatedRange(
                    new G(
                      y.reevaluateRange.startLineNumber,
                      y.reevaluateRange.startColumn,
                      y.reevaluateRange.endLineNumberInclusive,
                      y.reevaluateRange.endColumn,
                    ),
                  )
                : null
              if (C.isEmpty()) {
                console.error(
                  "Watcher: received bug with empty replace range. This shouldnt happen unless the server is broken",
                )
                continue
              }
              ;(y.replaceRange = new Hu({
                startLineNumber: C.startLineNumber,
                startColumn: C.startColumn,
                endLineNumberInclusive: C.endLineNumber,
                endColumn: C.endColumn,
              })),
                (y.reevaluateRange = S
                  ? new Hu({
                      startLineNumber: S.startLineNumber,
                      startColumn: S.startColumn,
                      endLineNumberInclusive: S.endLineNumber,
                      endColumn: S.endColumn,
                    })
                  : void 0)
              const x = w.model.getValueInRange(C),
                k = y.replaceInitialText
              if (
                this.n
                  .read({
                    resource: w.model.uri,
                    severities: Ri.Error | Ri.Warning,
                    take: 1e3,
                  })
                  .filter(
                    (D) =>
                      (D.startLineNumber >= C.startLineNumber &&
                        D.startLineNumber <= C.endLineNumber) ||
                      (D.endLineNumber >= C.startLineNumber &&
                        D.endLineNumber <= C.endLineNumber),
                  ).length > 0
              ) {
                console.warn(
                  "Skipping bug because there is already a marker in the range!!!",
                  y,
                )
                continue
              }
              x === k
                ? this.j.setNonPersistentStorage("lintState", "bugs", (D) => [
                    ...D.filter((P) => P.bug.uuid !== y.uuid),
                    {
                      bug: y,
                      uri: this.r
                        .getWorkspace()
                        .folders[0].toResource(y.relativeWorkspacePath),
                    },
                  ])
                : console.warn(
                    "Watcher: text changed while linting was running. This is fine and can happen but shouldnt happen too often",
                    y,
                    { newText: x, oldVersionOfText: k },
                  )
              break
            }
            case "backgroundTaskUuid":
              break
          }
      } catch (o) {
        console.error("Watcher: error running lint -- ", o),
          this.j.setNonPersistentStorage("lintState", "lastLintResult", zB.ERROR)
      } finally {
        n.dispose(),
          this.j.setNonPersistentStorage("inprogressAIGenerations", (a) =>
            a.filter((l) => l.generationUUID !== r),
          )
        const o = Math.floor(Date.now() / 1e3)
        this.j.setNonPersistentStorage("lintState", "lastLintTimestamp", o)
      }
    }
    async getRanges(e, t, s, n) {
      const r = e.uri
      if (
        ((s === void 0 && !this.fileStates[r.toString()]) ||
          e.getValue().split(`
  `).length > 1e4 ||
          (this.fileStates[r.toString()] !== void 0 &&
            this.fileStates[r.toString()].split(`
  `).length > 1e4)) &&
        ((this.fileStates[r.toString()] = e.getValue()), n !== !0)
      )
        return []
      let o = s ?? (await IKn(this.fileStates[r.toString()], e.getValue()))
      const a = this.f.getFocusedCodeEditor(),
        c =
          a?.getModel()?.uri.toString() === r.toString()
            ? a?.getPosition()
            : void 0
      c != null && t && (o = o.filter((d) => !d.containsPosition(c)))
      const h = o.map((d) => {
          const g = Math.max(1, d.startLineNumber - 15),
            p = Math.min(e.getLineCount(), d.endLineNumber + 15)
          return new G(g, 1, p, 1)
        }),
        u = []
      h.sort((d, g) => d.startLineNumber - g.startLineNumber)
      for (const d of h)
        if (u.length === 0 || u[u.length - 1].endLineNumber < d.startLineNumber)
          u.push(d)
        else {
          const g = u.pop(),
            p = new G(
              g.startLineNumber,
              1,
              Math.max(g.endLineNumber, d.endLineNumber),
              1,
            )
          u.push(p)
        }
      return (this.fileStates[r.toString()] = e.getValue()), u
    }
    async readFileContents(e) {
      try {
        return (await this.q.readFile(e)).value.toString()
      } catch (t) {
        return console.error("Watcher: error reading file -- ", t), ""
      }
    }
    dispose() {
      super.dispose()
      for (const e of Object.values(this.notificationHandlers)) e.dispose()
    }
    reevaluateBug(e, t) {
      t ||
        this.j.setNonPersistentStorage("lintState", "bugs", (s) =>
          s.filter((n) => n.bug.uuid !== e),
        )
    }
    findClosestBug(e) {
      let t
      if (e !== void 0)
        t = this.j.nonPersistentStorage.lintState.bugs.filter(
          (s) => s.bug.uuid === e,
        )[0]
      else {
        const s = this.f.getFocusedCodeEditor()
        if (!s || !s.hasModel()) return
        const n = s?.getPosition()
        for (const r of this.j.nonPersistentStorage.lintState.bugs) {
          if (!r.bug.replaceRange) continue
          const o =
              n.lineNumber > r.bug.replaceRange.startLineNumber ||
              (n.lineNumber == r.bug.replaceRange.startLineNumber &&
                n.column >= r.bug.replaceRange.startColumn),
            a =
              n.lineNumber < r.bug.replaceRange.endLineNumberInclusive ||
              (n.lineNumber == r.bug.replaceRange.endLineNumberInclusive &&
                n.column <= r.bug.replaceRange.endColumn)
          if (o && a) {
            t = r
            break
          }
        }
      }
      return t
    }
    applyLint(e) {
      const t = this.findClosestBug(e)
      if (!t || !t.bug.replaceRange) return
      const s = this.notificationHandlers[t.bug.uuid]
      if (!s) return
      const n = [
          {
            range: new G(
              t.bug.replaceRange.startLineNumber,
              t.bug.replaceRange.startColumn,
              t.bug.replaceRange.endLineNumberInclusive,
              t.bug.replaceRange.endColumn,
            ),
            text: t.bug.replaceText,
          },
        ],
        r = s.modelRef.object.textEditorModel.applyEdits(n, !0),
        o = s.modelRef.object.textEditorModel
      this.j.setNonPersistentStorage("lintState", "bugs", (a) =>
        a.filter((l) => l.bug.uuid !== t.bug.uuid),
      ),
        this.F.pushElement({
          type: 0,
          resource: t.uri,
          label: "Undo apply lint fix",
          code: "aiWatchService.undo.applyLint",
          undo: () => {
            o.applyEdits(r, !1),
              this.j.setNonPersistentStorage("lintState", "bugs", (a) => [
                ...a,
                t,
              ])
          },
          redo: () => {
            o.applyEdits(n, !1),
              this.j.setNonPersistentStorage("lintState", "bugs", (a) =>
                a.filter((l) => l.bug.uuid !== t.bug.uuid),
              )
          },
          rebase: () => {},
        })
    }
    clarifyLint(e) {
      const t = this.findClosestBug(e)
      if (!t) return
      const s = this.n
        .read({ resource: t.uri })
        .filter((n) => n.aiLintBugData?.bugUuid === t.bug.uuid)[0]
      s && this.C.executeCommand("aichat.fixspecificerrormessage", { marker: s })
    }
    dismissLint(e, t = !1) {
      const s = this.findClosestBug(e)
      if (!s) return
      const n = s
      this.j.setNonPersistentStorage("lintState", "bugs", (o) =>
        o.filter((a) => a.bug.uuid !== n.bug.uuid),
      ),
        this.j.setNonPersistentStorage("lintState", "dismissedBugs", (o) => [
          ...o,
          n.bug,
        ])
      const r = {
        type: 0,
        resource: n.uri,
        label: "Undo dismiss lint fix",
        code: "aiWatchService.undo.dismissLint",
        undo: () => {
          this.j.setNonPersistentStorage("lintState", "dismissedBugs", (o) =>
            o.filter((a) => a.uuid !== n.bug.uuid),
          ),
            this.j.setNonPersistentStorage("lintState", "bugs", (o) => [...o, n])
        },
        redo: () => {
          this.j.setNonPersistentStorage("lintState", "bugs", (o) =>
            o.filter((a) => a.bug.uuid !== n.bug.uuid),
          ),
            this.j.setNonPersistentStorage("lintState", "dismissedBugs", (o) => [
              ...o,
              n.bug,
            ])
        },
        rebase: () => {},
      }
      if (t) return r
      this.F.pushElement(r)
    }
    async dismissLintAndBanSimilar(e) {
      const t = this.findClosestBug(e)
      if (!t) return
      const s = this.dismissLint(e, !0),
        n = { hasBeenUndone: !1, undo: () => {} }
      this.F.pushElement({
        type: 0,
        resource: t.uri,
        label: "Undo ban similar lints",
        code: "aiWatchService.undo.banSimilarLints",
        undo: () => {
          s?.undo(), n.hasBeenUndone || (n.undo(), (n.hasBeenUndone = !0))
        },
        redo: () => {
          s?.redo()
        },
        rebase: () => {},
      })
      const r = t.bug.message,
        o = await Y6n(await this.g.streamNewLintRule(r))
      n.hasBeenUndone ||
        (this.j.setApplicationUserPersistentStorage(
          "lintRules",
          (a) =>
            a +
            `

  ` +
            o,
        ),
        (n.undo = () => {
          this.j.setApplicationUserPersistentStorage("lintRules", (a) =>
            a.replace(
              `

  ` + o,
              "",
            ),
          )
        }))
    }
  }
  ;(edi = __decorate(
    [
      __param(0, A_),
      __param(1, yi),
      __param(2, Br),
      __param(3, eg),
      __param(4, ei),
      __param(5, Xt),
      __param(6, mo),
      __param(7, nt),
      __param(8, it),
      __param(9, Md),
      __param(10, Fn),
      __param(11, ve),
      __param(12, ft),
      __param(13, si),
      __param(14, zi),
      __param(15, st),
      __param(16, Ac),
      __param(17, Lg),
      __param(18, ue),
      __param(19, Ti),
      __param(20, cppService),
      __param(21, fn),
    ],
    edi,
  )),
    Ve(watcherService, edi, 1)
}
