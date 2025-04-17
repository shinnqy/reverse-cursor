// @ts-check

export function createInterfaceAgentService(params) {
  const { Re, V, LRUCache, oi, extUri, rt, q1t, wn, J, H1t, s2i, j1t, rm, Son, Ln, Pn, U, Yt, __decorate, __param, Br, nt, ft, ei, g2, it, ve, Xt, bY, ue, vr, fn, Lg, Ve } = params;

  var pKi = Re("interfaceAgentService"),
    SFt = class extends V {
      constructor(e, t, s, n, r, o, a, l, c, h, u, d, g) {
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
          (this.r = h),
          (this.s = u),
          (this.u = d),
          (this.w = g),
          (this.C = new LRUCache(100)),
          (this.a = this.D(this.g.createScoped(this))),
          this.a.onChangeEffect({
            onChange: () => {
              this.g.nonPersistentStorage.aiInterfaceState.activeAgents
                .filter(
                  (b) =>
                    !this.g.workspaceUserPersistentStorage.tasksData.activeServerTaskUuids.includes(
                      b.taskUuid,
                    ),
                )
                .forEach((b) => {
                  this.onPauseTask(b.taskUuid)
                })
            },
            deps: [
              () =>
                this.g.workspaceUserPersistentStorage.tasksData
                  .activeServerTaskUuids,
            ],
            runNowToo: false,
          })
      }
      configureTestRunner(e) {
        this.q.insertDummyTestConfig(e),
          this.s.openWorkspaceSettings({
            jsonEditor: true,
            revealSetting: { key: "testRunner.config" },
          })
      }
      testUriFromInterfaceUri(e) {
        const t = e.path.replace(/\.ts$/, ".test.ts")
        return e.with({ path: t })
      }
      async implementationUriFromInterfaceUri(e) {
        const t = e.path.replace(/\.ts$/, ".impl.ts"),
          s = e.with({ path: t })
        if (await this.c.exists(s)) return s
      }
      async getInterfaceAgentClientState(e) {
        const t = this.testUriFromInterfaceUri(e),
          s = (await this.c.exists(t)) ? t : undefined,
          n = await this.implementationUriFromInterfaceUri(e),
          r = this.j.asRelativePath(e),
          o = s ? this.j.asRelativePath(s) : undefined,
          a = n ? this.j.asRelativePath(n) : undefined
        let l = [],
          c = [],
          h = [],
          u,
          d,
          g
        try {
          ;(u = await this.n.createModelReference(e)),
            (l = u.object.textEditorModel
              .getValue()
              .split(u.object.textEditorModel.getEOL())),
            s &&
              ((g = await this.n.createModelReference(s)),
              (h = g.object.textEditorModel
                .getValue()
                .split(g.object.textEditorModel.getEOL()))),
            n &&
              ((d = await this.n.createModelReference(n)),
              (c = d.object.textEditorModel
                .getValue()
                .split(d.object.textEditorModel.getEOL())))
        } finally {
          u?.dispose(), d?.dispose(), g?.dispose()
        }
        const p = this.q.getTestConfig(e)
        if (!p) throw new Error("no test config found for interface")
        return {
          interfaceRelativeWorkspacePath: r,
          interfaceLines: l,
          testRelativeWorkspacePath: o,
          testLines: h,
          implementationRelativeWorkspacePath: a,
          implementationLines: c,
          language: p.language,
          testingFramework: p.testingFramework,
        }
      }
      async getInterfaceSymbol(e) {
        const t = new oi(),
          s = setTimeout(() => {
            t.cancel()
          }, 5e3),
          n = await this.n.createModelReference(e),
          o = (
            await this.w.getOrCreate(n.object.textEditorModel, t.token)
          ).getTopLevelSymbols()
        if ((clearTimeout(s), o.length === 0)) return
        const a = o.find((l) => l.kind === 10)
        if (a) return a
      }
      async startInterfaceAgent(e) {
        if (!this.q.hasTestConfig(e)) {
          this.configureTestRunner(e)
          return
        }
        if (
          this.g.nonPersistentStorage.aiInterfaceState.activeAgents.some((n) =>
            extUri.isEqual(n.interfaceUri, e),
          )
        )
          return
        const t = this.testUriFromInterfaceUri(e)
        if (!(await this.c.exists(t))) {
          const n = await this.getInterfaceSymbol(e)
          if (!n) {
            console.error("no interface symbol found for uri", e)
            return
          }
          const r = this.q.getTestBoilerplate(t, n.name, e)
          if (!r) {
            console.error("no test boilerplate found for uri", e)
            return
          }
          await this.u.write(t, r)
        }
        console.log("STARTING THE INTERFACE AGENT", e)
        const s = rt()
        try {
          const n = this.b.getModelDetails()
          this.f.publicLogCapture("submitted.startInterfaceAgent")
          const [r, o] = this.b.registerNewGeneration({
              metadata: undefined,
              generationUUID: s,
            }),
            a = await this.getInterfaceAgentClientState(e),
            l = new q1t({
              modelDetails: n,
              debuggingOnlyLiveMode:
                this.g.applicationUserPersistentStorage.agentDebuggerState
                  .priomptLiveMode,
              interfaceAgentClientState: a,
            }),
            h = await (
              await this.b.aiClient()
            ).interfaceAgentInit(l, { signal: o.signal, headers: wn(s) })
          console.log("got response from interface agent init", h, h.taskUuid),
            this.C.set(h.taskUuid, new J()),
            this.g.setNonPersistentStorage(
              "aiInterfaceState",
              "activeAgents",
              (d) => [
                ...d,
                { interfaceUri: e, taskUuid: h.taskUuid, status: new H1t({}) },
              ],
            )
          const u = this.h.createTask({ taskInitResponse: h, nonPersistent: true })
          if (!u.ok()) {
            console.error("error creating task", u.err)
            return
          }
          this.y(e)
        } catch (n) {
          console.error("interface agent error", n)
        } finally {
          this.g.setNonPersistentStorage("inprogressAIGenerations", (n) =>
            n.filter((r) => r.generationUUID !== s),
          )
        }
      }
      async y(e) {
        const t = await this.streamInterfaceAgentStatus(e)
        if (!t) {
          console.error("no stream found for uri", e)
          return
        }
        for await (const s of t) {
          const n = s.status
          if (!n) {
            console.error("no status found for uri", e)
            continue
          }
          let r = false
          if (
            (this.g.setNonPersistentStorage(
              "aiInterfaceState",
              "activeAgents",
              (o) =>
                o.map((a) =>
                  extUri.isEqual(a.interfaceUri, e)
                    ? ((r = true), { ...a, status: n })
                    : a,
                ),
            ),
            !r)
          ) {
            console.log("cancelling stream for uri", e)
            return
          }
        }
      }
      async streamInterfaceAgentStatus(e) {
        const t = this.z(e)
        if (!t) {
          console.error("no task uuid found for uri", e)
          return
        }
        const s = new s2i({ taskUuid: t }),
          n = rt(),
          r = new AbortController()
        return (
          this.C.has(t) || this.C.set(t, new J()),
          this.C.get(t)?.add({ dispose: () => r.abort() }),
          (await this.b.aiClient()).streamInterfaceAgentStatus(s, {
            headers: wn(n),
            signal: r.signal,
          })
        )
      }
      async getInterfaceAgentStatus(e) {
        if (!this.q.hasTestConfig(e))
          return new j1t({
            status: {
              validateConfiguration: rm.FAILURE,
              validateConfigurationMessage: `${Son} Configure the testRunner.config setting in your .vscode/settings.json file.`,
            },
          })
        if (!(await this.getInterfaceSymbol(e)))
          return new j1t({
            status: {
              validateConfiguration: rm.FAILURE,
              validateConfigurationMessage:
                "No interface symbol found. Please write a valid interface in this file.",
            },
          })
        const s = rt()
        try {
          const n = await this.getInterfaceAgentClientState(e),
            [r, o] = this.b.registerNewGeneration({
              metadata: undefined,
              generationUUID: s,
            }),
            a = new q1t({ interfaceAgentClientState: n }),
            c = (await this.b.aiClient()).taskGetInterfaceAgentStatus(a, {
              signal: o.signal,
              headers: wn(s),
            }),
            h = await this.h.handleTaskGet(c, o.signal)
          if (!h.ok())
            throw (
              (console.error("error getting interface agent status", h.err),
              h.err)
            )
          return h.v
        } catch (n) {
          console.error("interface agent status error", n)
        } finally {
          this.g.setNonPersistentStorage("inprogressAIGenerations", (n) =>
            n.filter((r) => r.generationUUID !== s),
          )
        }
      }
      z(e) {
        const s = this.g.nonPersistentStorage.aiInterfaceState.activeAgents.find(
          (n) => extUri.isEqual(n.interfaceUri, e),
        )
        if (!s) {
          console.error("no active agent found for uri", e)
          return
        }
        return s.taskUuid
      }
      async pauseInterfaceAgent(e) {
        const t = this.z(e)
        if (!t) {
          console.error("no task uuid found for uri", e)
          return
        }
        await this.h.killTask(t)
      }
      async onPauseTask(e) {
        this.g.setNonPersistentStorage("aiInterfaceState", "activeAgents", (s) =>
          s.filter((n) => n.taskUuid !== e),
        )
        const t = this.C.get(e)
        t && (t.dispose(), this.C.delete(e))
      }
      async newInterfaceFromName(e) {
        const t = this.m.activeEditorPane
        let s = Ln.getOriginalUri(t?.input),
          n = "	"
        if (s) {
          const h = t?.getControl()
          if (Pn(h)) {
            const u = h.getModel()
            u &&
              (n = u.getOptions().insertSpaces
                ? " ".repeat(u.getOptions().tabSize)
                : "	")
          }
        }
        let r = e.charAt(0).toUpperCase() + e.slice(1)
        try {
          r = (await (await this.b.aiClient()).toCamelCase({ text: e })).text
        } catch {}
        const a = `${r.charAt(0).toLowerCase() + r.slice(1)}.ai.ts`,
          l = `export interface ${r} {

${n}// TODO: add the methods you want here, and the AI will implement a class with those methods for you

}

export function New${r}(): ${r} {
${n}throw new Error("Unimplemented. The AI will implement this function for you! You're in control of the function signature.")
}`
        if (!s) {
          if (
            (console.log("no current file uri, using workspace root"),
            this.j.getWorkspace().folders.length === 0)
          ) {
            console.error(
              "no workspace root; cannot create new interface from name",
            )
            return
          }
          s = this.j.getWorkspace().folders[0].uri
        }
        const c = U.joinPath(
          s.with({ path: s.path.split("/").slice(0, -1).join("/") }),
          a,
        )
        try {
          await this.c.createFile(c, Yt.fromString(l))
        } catch (h) {
          console.log("error creating file", h)
        }
        await this.m.openEditor({ resource: c })
      }
    }
  ;(SFt = __decorate(
    [
      __param(0, Br),
      __param(1, nt),
      __param(2, ft),
      __param(3, ei),
      __param(4, g2),
      __param(5, it),
      __param(6, ve),
      __param(7, Xt),
      __param(8, bY),
      __param(9, ue),
      __param(10, vr),
      __param(11, fn),
      __param(12, Lg),
    ],
    SFt,
  )),
    Ve(pKi, SFt, 1);

  return {
    pKi
  }
}
