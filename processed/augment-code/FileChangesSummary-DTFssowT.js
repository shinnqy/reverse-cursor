var hf = Object.defineProperty
var wc = (a) => {
  throw TypeError(a)
}
var df = (a, e, s) =>
  e in a
    ? hf(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (a[e] = s)
var d = (a, e, s) => df(a, typeof e != "symbol" ? e + "" : e, s),
  Ca = (a, e, s) => e.has(a) || wc("Cannot " + s)
var p = (a, e, s) => (
    Ca(a, e, "read from private field"), s ? s.call(a) : e.get(a)
  ),
  ct = (a, e, s) =>
    e.has(a)
      ? wc("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(a)
        : e.set(a, s),
  V = (a, e, s, i) => (
    Ca(a, e, "write to private field"), i ? i.call(a, s) : e.set(a, s), s
  ),
  L = (a, e, s) => (Ca(a, e, "access private method"), s)
var $r = (a, e, s, i) => ({
  set _(o) {
    V(a, e, o, s)
  },
  get _() {
    return p(a, e, i)
  },
})
import { W as T, S as Jc } from "./BaseButton-C5Me6mfC.js"
import { d as ff } from "./Content-CnpNe5p_.js"
import {
  af as Us,
  ad as gn,
  aj as Os,
  a8 as Vr,
  al as gf,
  S as tn,
  i as en,
  s as nn,
  A as ds,
  $ as Hs,
  c as k,
  e as vt,
  f as oe,
  u as Tt,
  q as js,
  t as Gt,
  r as zs,
  h as mt,
  a1 as $a,
  B as Vn,
  C as Zn,
  D as Jn,
  a6 as Ie,
  a7 as Ns,
  b as ce,
  n as Rt,
  a as Ta,
  H as pf,
  w as _f,
  x as mf,
  y as yf,
  d as Cc,
  z as vf,
  g as bf,
  j as xc,
  R as ja,
  a9 as Ac,
  I as jr,
  K as Ic,
  M as Sf,
} from "./SpinnerAugment-DI4IM-MA.js"
import {
  C as ee,
  a as pe,
  P as Vt,
  W as wf,
  A as ke,
  b as Mc,
  T as Ec,
  g as Cf,
  r as Tc,
  s as xf,
  c as Rc,
  d as Af,
  e as te,
  f as Yc,
  F as If,
  h as Mf,
  i as Ef,
  I as ks,
  E as Tf,
} from "./folder-opened-BgnZFUUK.js"
import { p as Rf, S as Ff, a as Fc } from "./pen-to-square-LfrvAaFW.js"
import { n as Pf } from "./file-paths-BcSg4gks.js"
import { B as Kc } from "./ButtonAugment-CajD5BpY.js"
import { M as Df } from "./magnifying-glass-I0OQge20.js"
import { R as Ze } from "./types-Cj5rEI5Y.js"
import {
  g as qf,
  a as Of,
  b as Pc,
  i as kf,
  c as Lf,
} from "./diff-utils-BOp2yI1n.js"
const xa = "augment-welcome"
var lt = ((a) => (
    (a.draft = "draft"),
    (a.sent = "sent"),
    (a.failed = "failed"),
    (a.success = "success"),
    (a.cancelled = "cancelled"),
    a
  ))(lt || {}),
  zn = ((a) => (
    (a.running = "running"),
    (a.awaitingUserAction = "awaiting-user-action"),
    (a.notRunning = "not-running"),
    a
  ))(zn || {}),
  zt = ((a) => ((a.seen = "seen"), (a.unseen = "unseen"), a))(zt || {}),
  fs = ((a) => (
    (a.signInWelcome = "sign-in-welcome"),
    (a.generateCommitMessage = "generate-commit-message"),
    (a.summaryResponse = "summary-response"),
    (a.summaryTitle = "summary-title"),
    (a.educateFeatures = "educate-features"),
    (a.autofixMessage = "autofix-message"),
    (a.autofixSteeringMessage = "autofix-steering-message"),
    (a.autofixStage = "autofix-stage"),
    (a.agentOnboarding = "agent-onboarding"),
    (a.agenticTurnDelimiter = "agentic-turn-delimiter"),
    (a.agenticRevertDelimiter = "agentic-revert-delimiter"),
    (a.agenticCheckpointDelimiter = "agentic-checkpoint-delimiter"),
    (a.exchange = "exchange"),
    a
  ))(fs || {})
function Ae(a) {
  return (
    !!a && (a.chatItemType === void 0 || a.chatItemType === "agent-onboarding")
  )
}
function gs(a) {
  return Ae(a) && a.status === "success"
}
function zg(a) {
  return a.chatItemType === "autofix-message"
}
function Wg(a) {
  return a.chatItemType === "autofix-steering-message"
}
function Bg(a) {
  return a.chatItemType === "autofix-stage"
}
function Gg(a) {
  return a.chatItemType === "sign-in-welcome"
}
function Vg(a) {
  return a.chatItemType === "generate-commit-message"
}
function Zg(a) {
  return a.chatItemType === "summary-response"
}
function Jg(a) {
  return a.chatItemType === "educate-features"
}
function Yg(a) {
  return a.chatItemType === "agent-onboarding"
}
function Kg(a) {
  return a.chatItemType === "agentic-turn-delimiter"
}
function $s(a) {
  return a.chatItemType === "agentic-checkpoint-delimiter"
}
function Xg(a) {
  return a.revertTarget !== void 0
}
function Qg(a) {
  var e
  return (
    ((e = a.structured_output_nodes) == null
      ? void 0
      : e.some((s) => s.type === pe.TOOL_USE)) ?? !1
  )
}
function tp(a) {
  var e
  return (
    ((e = a.structured_request_nodes) == null
      ? void 0
      : e.some((s) => s.type === ee.TOOL_RESULT)) ?? !1
  )
}
function ep(a) {
  return (
    !(!a || typeof a != "object") &&
    (!("request_id" in a) || typeof a.request_id == "string") &&
    (!("seen_state" in a) ||
      a.seen_state === "seen" ||
      a.seen_state === "unseen")
  )
}
class Uf {
  constructor(e, s, i, o = 5, c = 4e3, f) {
    d(this, "_isCancelled", !1)
    ;(this.requestId = e),
      (this.chatMessage = s),
      (this.startStreamFn = i),
      (this.maxRetries = o),
      (this.baseDelay = c),
      (this.flags = f)
  }
  cancel() {
    this._isCancelled = !0
  }
  async *getStream() {
    let e = 0,
      s = !1
    try {
      for (; !this._isCancelled; ) {
        const i = this.startStreamFn(
          this.chatMessage,
          this.flags ? { flags: this.flags } : void 0,
        )
        let o = !1,
          c = ""
        for await (const m of i) {
          if (m.status === lt.failed) {
            if (m.isRetriable !== !0 || s) return yield m
            ;(o = !0),
              (c =
                m.display_error_message || "Service is currently unavailable")
            break
          }
          ;(s = !0), yield m
        }
        if (!o) return
        if (this._isCancelled) return yield this.createCancelledStatus()
        if ((e++, e > this.maxRetries))
          return void (yield {
            request_id: this.requestId,
            seen_state: zt.unseen,
            status: lt.failed,
            display_error_message: c,
            isRetriable: !1,
          })
        const f = this.baseDelay * 2 ** (e - 1)
        yield {
          request_id: this.requestId,
          status: lt.sent,
          display_error_message: `Service temporarily unavailable. Retrying in ${f / 1e3} seconds... (Attempt ${e} of ${this.maxRetries})`,
          isRetriable: !0,
        },
          await new Promise((m) => setTimeout(m, f)),
          yield {
            request_id: this.requestId,
            status: lt.sent,
            display_error_message: "Generating response...",
            isRetriable: !0,
          }
      }
      this._isCancelled && (yield this.createCancelledStatus())
    } catch (i) {
      yield {
        request_id: this.requestId,
        seen_state: zt.unseen,
        status: lt.failed,
        display_error_message: i instanceof Error ? i.message : String(i),
      }
    }
  }
  createCancelledStatus() {
    return {
      request_id: this.requestId,
      seen_state: zt.unseen,
      status: lt.cancelled,
    }
  }
}
function Me(a, e) {
  return e in a && a[e] !== void 0
}
function Xc(a) {
  return Me(a, "file")
}
function Ra(a) {
  return Me(a, "recentFile")
}
function Qc(a) {
  return Me(a, "folder")
}
function Fa(a) {
  return Me(a, "sourceFolder")
}
function np(a) {
  return Me(a, "sourceFolderGroup")
}
function Dc(a) {
  return Me(a, "selection")
}
function tl(a) {
  return Me(a, "externalSource")
}
function sp(a) {
  return Me(a, "allDefaultContext")
}
function rp(a) {
  return Me(a, "clearContext")
}
function qc(a) {
  return Me(a, "userGuidelines")
}
function ip(a) {
  return Me(a, "agentMemories")
}
function za(a) {
  return Me(a, "personality")
}
const ap = {
    allDefaultContext: !0,
    label: "Default Context",
    id: "allDefaultContext",
  },
  op = { clearContext: !0, label: "Clear Context", id: "clearContext" },
  up = {
    userGuidelines: {
      enabled: !1,
      overLimit: !1,
      contents: "",
      lengthLimit: 2e3,
    },
    label: "User Guidelines",
    id: "userGuidelines",
  },
  Hf = { agentMemories: {}, label: "Agent Memories", id: "agentMemories" },
  Oc = [
    {
      personality: {
        type: Vt.DEFAULT,
        description:
          "Expert software engineer - trusted coding agent, at your service!",
      },
      label: "Agent Auggie",
      name: "auggie-personality-agent-default",
      id: "auggie-personality-agent-default",
    },
    {
      personality: {
        type: Vt.PROTOTYPER,
        description: "Fast and loose - let's get it done, boss!",
      },
      label: "Prototyper Auggie",
      name: "auggie-personality-prototyper",
      id: "auggie-personality-prototyper",
    },
    {
      personality: {
        type: Vt.BRAINSTORM,
        description:
          "Thoughtful and creative - thinking through all possibilities...",
      },
      label: "Brainstorm Auggie",
      name: "auggie-personality-brainstorm",
      id: "auggie-personality-brainstorm",
    },
    {
      personality: {
        type: Vt.REVIEWER,
        description:
          "Code detective - finding issues and analyzing implications",
      },
      label: "Reviewer Auggie",
      name: "auggie-personality-reviewer",
      id: "auggie-personality-reviewer",
    },
  ]
function cp(a) {
  return Me(a, "group")
}
function lp(a) {
  const e = new Map()
  return (
    a.forEach((s) => {
      Xc(s)
        ? e.set("file", [...(e.get("file") ?? []), s])
        : Ra(s)
          ? e.set("recentFile", [...(e.get("recentFile") ?? []), s])
          : Qc(s)
            ? e.set("folder", [...(e.get("folder") ?? []), s])
            : tl(s)
              ? e.set("externalSource", [...(e.get("externalSource") ?? []), s])
              : Fa(s)
                ? e.set("sourceFolder", [...(e.get("sourceFolder") ?? []), s])
                : za(s) &&
                  e.set("personality", [...(e.get("personality") ?? []), s])
    }),
    [
      {
        label: "Personalities",
        id: "personalities",
        group: {
          type: "personality",
          materialIcon: "person",
          items: e.get("personality") ?? [],
        },
      },
      {
        label: "Files",
        id: "files",
        group: {
          type: "file",
          materialIcon: "insert_drive_file",
          items: e.get("file") ?? [],
        },
      },
      {
        label: "Folders",
        id: "folders",
        group: {
          type: "folder",
          materialIcon: "folder",
          items: e.get("folder") ?? [],
        },
      },
      {
        label: "Source Folders",
        id: "sourceFolders",
        group: {
          type: "sourceFolder",
          materialIcon: "folder_managed",
          items: e.get("sourceFolder") ?? [],
        },
      },
      {
        label: "Recently Opened Files",
        id: "recentlyOpenedFiles",
        group: {
          type: "recentFile",
          materialIcon: "insert_drive_file",
          items: e.get("recentFile") ?? [],
        },
      },
      {
        label: "Documentation",
        id: "externalSources",
        group: {
          type: "externalSource",
          materialIcon: "link",
          items: e.get("externalSource") ?? [],
        },
      },
    ].filter((s) => s.group.items.length > 0)
  )
}
function Zr(a) {
  const e = {
    label:
      Pf(a.pathName)
        .split("/")
        .filter((s) => s.trim() !== "")
        .pop() || "",
    name: a.pathName,
    id: Rf({ rootPath: a.repoRoot, relPath: a.pathName }),
  }
  if (a.fullRange) {
    const s = `:L${a.fullRange.startLineNumber}-${a.fullRange.endLineNumber}`
    ;(e.label += s), (e.name += s), (e.id += s)
  } else if (a.range) {
    const s = `:L${a.range.start}-${a.range.stop}`
    ;(e.label += s), (e.name += s), (e.id += s)
  }
  return e
}
class Nf {
  constructor(e, s, i) {
    d(
      this,
      "getChatInitData",
      async () =>
        (await this._asyncMsgSender.send({ type: T.chatLoaded }, 3e4)).data,
    )
    d(this, "reportWebviewClientEvent", (e) => {
      this._asyncMsgSender.send({
        type: T.reportWebviewClientMetric,
        data: { webviewName: wf.chat, client_metric: e, value: 1 },
      })
    })
    d(this, "reportAgentSessionEvent", (e) => {
      this._asyncMsgSender.sendToSidecar({
        type: ke.reportAgentSessionEvent,
        data: e,
      })
    })
    d(this, "reportAgentRequestEvent", (e) => {
      this._asyncMsgSender.sendToSidecar({
        type: ke.reportAgentRequestEvent,
        data: e,
      })
    })
    d(this, "getSuggestions", async (e, s = !1) => {
      const i = { rootPath: "", relPath: e },
        o = this.findFiles(i, 6),
        c = this.findRecentlyOpenedFiles(i, 6),
        f = this.findFolders(i, 3),
        m = this.findExternalSources(e, s),
        [v, C, E, P] = await Promise.all([
          zr(o, []),
          zr(c, []),
          zr(f, []),
          zr(m, []),
        ]),
        X = (H, W) => ({ ...Zr(H), [W]: H }),
        z = [
          ...v.map((H) => X(H, "file")),
          ...E.map((H) => X(H, "folder")),
          ...C.map((H) => X(H, "recentFile")),
          ...P.map((H) => ({
            label: H.name,
            name: H.name,
            id: H.id,
            externalSource: H,
          })),
        ]
      if (this._flags.enablePersonalities) {
        const H = this.getPersonalities(e)
        H.length > 0 && z.push(...H)
      }
      return z
    })
    d(this, "getPersonalities", (e) => {
      if (!this._flags.enablePersonalities) return []
      if (e === "") return Oc
      const s = e.toLowerCase()
      return Oc.filter((i) => {
        const o = i.personality.description.toLowerCase(),
          c = i.label.toLowerCase()
        return o.includes(s) || c.includes(s)
      })
    })
    d(this, "sendAction", (e) => {
      this._host.postMessage({ type: T.mainPanelPerformAction, data: e })
    })
    d(this, "showAugmentPanel", () => {
      this._asyncMsgSender.send({ type: T.showAugmentPanel })
    })
    d(
      this,
      "openConfirmationModal",
      async (e) =>
        (
          await this._asyncMsgSender.send(
            { type: T.openConfirmationModal, data: e },
            1e9,
          )
        ).data.ok,
    )
    d(this, "clearMetadataFor", (e) => {
      this._host.postMessage({ type: T.chatClearMetadata, data: e })
    })
    d(this, "resolvePath", async (e, s = void 0) => {
      const i = await this._asyncMsgSender.send(
        {
          type: T.resolveFileRequest,
          data: { ...e, exactMatch: !0, maxResults: 1, searchScope: s },
        },
        5e3,
      )
      if (i.data) return i.data
    })
    d(
      this,
      "resolveSymbols",
      async (e, s) =>
        (
          await this._asyncMsgSender.send(
            { type: T.findSymbolRequest, data: { query: e, searchScope: s } },
            3e4,
          )
        ).data,
    )
    d(
      this,
      "getDiagnostics",
      async () =>
        (
          await this._asyncMsgSender.send(
            { type: T.getDiagnosticsRequest },
            1e3,
          )
        ).data,
    )
    d(
      this,
      "findFiles",
      async (e, s = 12) =>
        (
          await this._asyncMsgSender.send(
            { type: T.findFileRequest, data: { ...e, maxResults: s } },
            5e3,
          )
        ).data,
    )
    d(
      this,
      "findFolders",
      async (e, s = 12) =>
        (
          await this._asyncMsgSender.send(
            { type: T.findFolderRequest, data: { ...e, maxResults: s } },
            5e3,
          )
        ).data,
    )
    d(
      this,
      "findRecentlyOpenedFiles",
      async (e, s = 12) =>
        (
          await this._asyncMsgSender.send(
            {
              type: T.findRecentlyOpenedFilesRequest,
              data: { ...e, maxResults: s },
            },
            5e3,
          )
        ).data,
    )
    d(this, "findExternalSources", async (e, s = !1) =>
      this._flags.enableExternalSourcesInChat
        ? s
          ? []
          : ((
              await this._asyncMsgSender.send(
                {
                  type: T.findExternalSourcesRequest,
                  data: { query: e, source_types: [] },
                },
                5e3,
              )
            ).data.sources ?? [])
        : [],
    )
    d(this, "openFile", (e) => {
      this._host.postMessage({ type: T.openFile, data: e })
    })
    d(this, "saveFile", (e) =>
      this._host.postMessage({ type: T.saveFile, data: e }),
    )
    d(this, "loadFile", (e) =>
      this._host.postMessage({ type: T.loadFile, data: e }),
    )
    d(this, "openMemoriesFile", () => {
      this._host.postMessage({ type: T.openMemoriesFile })
    })
    d(this, "createFile", (e, s) => {
      this._host.postMessage({
        type: T.chatCreateFile,
        data: { code: e, relPath: s },
      })
    })
    d(this, "openScratchFile", async (e, s = "shellscript") => {
      await this._asyncMsgSender.send(
        { type: T.openScratchFileRequest, data: { content: e, language: s } },
        1e4,
      )
    })
    d(this, "resolveWorkspaceFileChunk", async (e) => {
      try {
        return (
          await this._asyncMsgSender.send(
            { type: T.resolveWorkspaceFileChunkRequest, data: e },
            5e3,
          )
        ).data
      } catch {
        return
      }
    })
    d(this, "smartPaste", (e) => {
      this._host.postMessage({ type: T.chatSmartPaste, data: e })
    })
    d(this, "saveChat", async (e, s, i) =>
      this._asyncMsgSender.send({
        type: T.saveChat,
        data: { conversationId: e, chatHistory: s, title: i },
      }),
    )
    d(this, "launchAutofixPanel", async (e, s, i) =>
      this._asyncMsgSender.send({
        type: T.chatLaunchAutofixPanel,
        data: { conversationId: e, iterationId: s, stage: i },
      }),
    )
    d(this, "updateUserGuidelines", (e) => {
      this._host.postMessage({ type: T.updateUserGuidelines, data: e })
    })
    d(this, "openSettingsPage", (e) => {
      this._host.postMessage({ type: T.openSettingsPage, data: e })
    })
    d(this, "_activeRetryStreams", new Map())
    d(this, "cancelChatStream", async (e) => {
      var s
      ;(s = this._activeRetryStreams.get(e)) == null || s.cancel(),
        await this._asyncMsgSender.send(
          { type: T.chatUserCancel, data: { requestId: e } },
          1e4,
        )
    })
    d(this, "sendUserRating", async (e, s, i, o = "") => {
      const c = {
          requestId: e,
          rating: i,
          note: o,
          mode: s ? Mc.agent : Mc.chat,
        },
        f = { type: T.chatRating, data: c }
      return (await this._asyncMsgSender.send(f, 3e4)).data
    })
    d(this, "triggerUsedChatMetric", () => {
      this._host.postMessage({ type: T.usedChat })
    })
    d(this, "createProject", (e) => {
      this._host.postMessage({
        type: T.mainPanelCreateProject,
        data: { name: e },
      })
    })
    d(this, "openProjectFolder", () => {
      this._host.postMessage({
        type: T.mainPanelPerformAction,
        data: "open-folder",
      })
    })
    d(this, "closeProjectFolder", () => {
      this._host.postMessage({
        type: T.mainPanelPerformAction,
        data: "close-folder",
      })
    })
    d(this, "cloneRepository", () => {
      this._host.postMessage({
        type: T.mainPanelPerformAction,
        data: "clone-repository",
      })
    })
    d(this, "grantSyncPermission", () => {
      this._host.postMessage({
        type: T.mainPanelPerformAction,
        data: "grant-sync-permission",
      })
    })
    d(this, "callTool", async (e, s, i, o, c, f) => {
      const m = {
        type: T.callTool,
        data: {
          chatRequestId: e,
          toolUseId: s,
          name: i,
          input: o,
          chatHistory: c,
          conversationId: f,
        },
      }
      return (await this._asyncMsgSender.send(m, 0)).data
    })
    d(this, "cancelToolRun", async (e, s) => {
      const i = { type: T.cancelToolRun, data: { requestId: e, toolUseId: s } }
      await this._asyncMsgSender.send(i, 0)
    })
    d(this, "checkSafe", async (e, s) => {
      const i = { type: T.toolCheckSafe, data: { name: e, input: s } }
      return (await this._asyncMsgSender.send(i, 0)).data.isSafe
    })
    d(this, "closeAllToolProcesses", async () => {
      await this._asyncMsgSender.sendToSidecar(
        { type: Ec.closeAllToolProcesses },
        0,
      )
    })
    d(this, "getToolIdentifier", async (e) => {
      const s = { type: Ec.getToolIdentifierRequest, data: { toolName: e } }
      return (await this._asyncMsgSender.sendToSidecar(s, 0)).data
    })
    d(this, "executeCommand", async (e, s, i) => {
      try {
        const o = await this._asyncMsgSender.send(
          {
            type: T.chatAutofixExecuteCommandRequest,
            data: { iterationId: e, command: s, args: i },
          },
          6e5,
        )
        return { output: o.data.output, returnCode: o.data.returnCode }
      } catch (o) {
        throw (console.error("[ExtensionClient] Execute command failed:", o), o)
      }
    })
    d(this, "sendAutofixStateUpdate", async (e) => {
      await this._asyncMsgSender.send({
        type: T.chatAutofixStateUpdate,
        data: e,
      })
    })
    d(
      this,
      "autofixPlan",
      async (e, s) =>
        (
          await this._asyncMsgSender.send(
            {
              type: T.chatAutofixPlanRequest,
              data: { command: e, steeringHistory: s },
            },
            6e4,
          )
        ).data.plan,
    )
    d(this, "setChatMode", (e) => {
      this._asyncMsgSender.send({ type: T.chatModeChanged, data: { mode: e } })
    })
    d(this, "getAgentEditList", async (e, s) => {
      const i = {
        type: ke.getEditListRequest,
        data: { fromTimestamp: e, toTimestamp: s },
      }
      return (await this._asyncMsgSender.sendToSidecar(i, 3e4)).data
    })
    d(this, "hasChangesSince", async (e) => {
      const s = {
        type: ke.getEditListRequest,
        data: { fromTimestamp: e, toTimestamp: Number.MAX_SAFE_INTEGER },
      }
      return (
        (await this._asyncMsgSender.sendToSidecar(s, 3e4)).data.edits.filter(
          (i) => {
            var o, c
            return (
              ((o = i.changesSummary) == null ? void 0 : o.totalAddedLines) ||
              ((c = i.changesSummary) == null ? void 0 : c.totalRemovedLines)
            )
          },
        ).length > 0
      )
    })
    d(this, "getToolCallCheckpoint", async (e) => {
      const s = { type: T.getToolCallCheckpoint, data: { requestId: e } }
      return (await this._asyncMsgSender.send(s, 3e4)).data.checkpointNumber
    })
    d(this, "setCurrentConversation", (e) => {
      this._asyncMsgSender.sendToSidecar({
        type: ke.setCurrentConversation,
        data: { conversationId: e },
      })
    })
    d(this, "showAgentReview", (e, s, i, o = !0) => {
      this._asyncMsgSender.sendToSidecar({
        type: ke.chatReviewAgentFile,
        data: {
          qualifiedPathName: e,
          fromTimestamp: s,
          toTimestamp: i,
          retainFocus: o,
        },
      })
    })
    d(
      this,
      "acceptAllAgentEdits",
      async () => (
        await this._asyncMsgSender.sendToSidecar({
          type: ke.chatAgentEditAcceptAll,
        }),
        !0
      ),
    )
    d(
      this,
      "revertToTimestamp",
      async (e, s) => (
        await this._asyncMsgSender.sendToSidecar({
          type: ke.revertToTimestamp,
          data: { timestamp: e, qualifiedPathNames: s },
        }),
        !0
      ),
    )
    d(
      this,
      "getAgentOnboardingPrompt",
      async () =>
        (
          await this._asyncMsgSender.send(
            { type: T.chatGetAgentOnboardingPromptRequest, data: {} },
            3e4,
          )
        ).data.prompt,
    )
    d(this, "getAgentEditChangesByRequestId", async (e) => {
      const s = {
        type: ke.getEditChangesByRequestIdRequest,
        data: { requestId: e },
      }
      return (await this._asyncMsgSender.sendToSidecar(s, 3e4)).data
    })
    d(this, "getAgentEditContentsByRequestId", async (e) => {
      const s = {
        type: ke.getAgentEditContentsByRequestId,
        data: { requestId: e },
      }
      return (await this._asyncMsgSender.sendToSidecar(s, 3e4)).data
    })
    d(this, "triggerInitialOrientation", () => {
      this._host.postMessage({ type: T.triggerInitialOrientation })
    })
    d(this, "getWorkspaceInfo", async () => {
      try {
        return (
          await this._asyncMsgSender.send(
            { type: T.getWorkspaceInfoRequest },
            5e3,
          )
        ).data
      } catch (e) {
        return console.error("Error getting workspace info:", e), {}
      }
    })
    d(this, "getRemoteAgentStatus", async () => {
      try {
        return (
          await this._asyncMsgSender.send({ type: T.getRemoteAgentStatus }, 5e3)
        ).data
      } catch (e) {
        return (
          console.error("Error getting remote agent status:", e),
          { isRemoteAgentWindow: !1 }
        )
      }
    })
    d(
      this,
      "checkAgentAutoModeApproval",
      async () =>
        (
          await this._asyncMsgSender.send(
            { type: T.checkAgentAutoModeApproval },
            5e3,
          )
        ).data,
    )
    d(this, "setAgentAutoModeApproved", async (e) => {
      await this._asyncMsgSender.send(
        { type: T.setAgentAutoModeApproved, data: e },
        5e3,
      )
    })
    d(
      this,
      "checkHasEverUsedAgent",
      async () =>
        (
          await this._asyncMsgSender.sendToSidecar(
            { type: ke.checkHasEverUsedAgent },
            5e3,
          )
        ).data,
    )
    d(this, "setHasEverUsedAgent", async (e) => {
      await this._asyncMsgSender.sendToSidecar(
        { type: ke.setHasEverUsedAgent, data: e },
        5e3,
      )
    })
    d(this, "getChatRequestIdeState", async () => {
      const e = { type: T.getChatRequestIdeStateRequest }
      return (await this._asyncMsgSender.send(e, 3e4)).data
    })
    d(this, "reportError", (e) => {
      this._host.postMessage({ type: T.reportError, data: e })
    })
    ;(this._host = e), (this._asyncMsgSender = s), (this._flags = i)
  }
  async *generateCommitMessage() {
    const e = { type: T.generateCommitMessage },
      s = this._asyncMsgSender.stream(e, 3e4, 6e4)
    yield* Aa(s)
  }
  async *sendInstructionMessage(e, s) {
    const i = {
        instruction: e.request_message ?? "",
        selectedCodeDetails: s,
        requestId: e.request_id,
      },
      o = { type: T.chatInstructionMessage, data: i },
      c = this._asyncMsgSender.stream(o, 3e4, 6e4)
    yield* (async function* (f) {
      let m
      try {
        for await (const v of f)
          (m = v.data.requestId),
            yield {
              request_id: m,
              response_text: v.data.text,
              seen_state: zt.unseen,
              status: lt.sent,
            }
        yield { request_id: m, seen_state: zt.unseen, status: lt.success }
      } catch {
        yield { request_id: m, seen_state: zt.unseen, status: lt.failed }
      }
    })(c)
  }
  async openGuidelines(e) {
    this._host.postMessage({ type: T.openGuidelines, data: e })
  }
  async *getExistingChatStream(e, s) {
    if (!e.request_id) return
    const i = s == null ? void 0 : s.flags.enablePreferenceCollection,
      o = i ? 1e9 : 6e4,
      c = i ? 1e9 : 3e5,
      f = { type: T.chatGetStreamRequest, data: { requestId: e.request_id } },
      m = this._asyncMsgSender.stream(f, o, c)
    yield* Aa(m, this.reportError)
  }
  async *startChatStream(e, s) {
    const i = s == null ? void 0 : s.flags.enablePreferenceCollection,
      o = i ? 1e9 : 6e4,
      c = i ? 1e9 : 3e5,
      f = { type: T.chatUserMessage, data: e },
      m = this._asyncMsgSender.stream(f, o, c)
    yield* Aa(m, this.reportError)
  }
  async checkToolExists(e) {
    return (
      await this._asyncMsgSender.send(
        { type: T.checkToolExists, toolName: e },
        0,
      )
    ).exists
  }
  async saveImage(e, s) {
    const i = Cf(await Tc(e)),
      o = s ?? `${await xf(await Rc(i))}.${e.name.split(".").at(-1)}`
    return (
      await this._asyncMsgSender.send(
        { type: T.chatSaveImageRequest, data: { filename: o, data: i } },
        1e4,
      )
    ).data
  }
  async loadImage(e) {
    const s = await this._asyncMsgSender.send(
        { type: T.chatLoadImageRequest, data: e },
        1e4,
      ),
      i = s.data ? await Rc(s.data) : void 0
    if (!i) return
    let o = "application/octet-stream"
    const c = e.split(".").at(-1)
    c === "png"
      ? (o = "image/png")
      : (c !== "jpg" && c !== "jpeg") || (o = "image/jpeg")
    const f = new File([i], e, { type: o })
    return await Tc(f)
  }
  async deleteImage(e) {
    await this._asyncMsgSender.send(
      { type: T.chatDeleteImageRequest, data: e },
      1e4,
    )
  }
  async *startChatStreamWithRetry(e, s, i) {
    const o = new Uf(
      e,
      s,
      (c, f) => this.startChatStream(c, f),
      (i == null ? void 0 : i.maxRetries) ?? 5,
      4e3,
      i == null ? void 0 : i.flags,
    )
    this._activeRetryStreams.set(e, o)
    try {
      yield* o.getStream()
    } finally {
      this._activeRetryStreams.delete(e)
    }
  }
}
async function* Aa(a, e = () => {}) {
  let s
  try {
    for await (const i of a) {
      if (((s = i.data.requestId), i.data.error))
        return yield {
          request_id: s,
          seen_state: zt.unseen,
          status: lt.failed,
          display_error_message: i.data.error.displayErrorMessage,
          isRetriable: i.data.error.isRetriable,
        }
      yield {
        request_id: s,
        response_text: i.data.text,
        workspace_file_chunks: i.data.workspaceFileChunks,
        structured_output_nodes: $f(i.data.nodes),
        seen_state: zt.unseen,
        status: lt.sent,
      }
    }
    yield { request_id: s, seen_state: zt.unseen, status: lt.success }
  } catch (i) {
    e({
      originalRequestId: s || "",
      sanitizedMessage: i instanceof Error ? i.message : String(i),
      stackTrace: (i instanceof Error && i.stack) || "",
      diagnostics: [{ key: "error_class", value: "Extension-WebView Error" }],
    }),
      yield { request_id: s, seen_state: zt.unseen, status: lt.failed }
  }
}
async function zr(a, e) {
  try {
    return await a
  } catch (s) {
    return console.warn(`Error while resolving promise: ${s}`), e
  }
}
function $f(a) {
  if (!a) return a
  let e = !1
  return a.filter((s) => s.type !== pe.TOOL_USE || (!e && ((e = !0), !0)))
}
function jf(a) {
  var e
  return ((e = a.extraData) == null ? void 0 : e.isAutofix) === !0
}
function ps(a) {
  var e
  return ((e = a.extraData) == null ? void 0 : e.isAgentConversation) === !0
}
var jt = ((a) => (
    (a[(a.active = 0)] = "active"), (a[(a.inactive = 1)] = "inactive"), a
  ))(jt || {}),
  zf = ((a) => (
    (a.normal = "Normal"),
    (a.autofixCommand = "AutofixCommand"),
    (a.autofixPrompt = "AutofixPrompt"),
    a
  ))(zf || {})
const el = 25e4
class Wf {
  constructor(e) {
    d(this, "_enableEditableHistory", !1)
    d(this, "_enablePreferenceCollection", !1)
    d(this, "_enableRetrievalDataCollection", !1)
    d(this, "_enableDebugFeatures", !1)
    d(this, "_enableRichTextHistory", !1)
    d(this, "_modelDisplayNameToId", {})
    d(this, "_fullFeatured", !0)
    d(this, "_enableExternalSourcesInChat", !1)
    d(this, "_smallSyncThreshold", 15)
    d(this, "_bigSyncThreshold", 1e3)
    d(this, "_enableSmartPaste", !1)
    d(this, "_enableDirectApply", !1)
    d(this, "_summaryTitles", !1)
    d(this, "_suggestedEditsAvailable", !1)
    d(this, "_enableShareService", !1)
    d(this, "_maxTrackableFileCount", el)
    d(this, "_enableDesignSystemRichTextEditor", !1)
    d(this, "_enableSources", !1)
    d(this, "_enableChatMermaidDiagrams", !1)
    d(this, "_smartPastePrecomputeMode", Jc.visibleHover)
    d(this, "_useNewThreadsMenu", !1)
    d(this, "_enableChatMermaidDiagramsMinVersion", !1)
    d(this, "_idleNewSessionNotificationTimeoutMs")
    d(this, "_idleNewSessionMessageTimeoutMs")
    d(this, "_enableChatMultimodal", !1)
    d(this, "_enableAgentMode", !1)
    d(this, "_enableRichCheckpointInfo", !1)
    d(this, "_agentMemoriesFilePathName")
    d(this, "_userTier", "unknown")
    d(this, "_eloModelConfiguration", {
      highPriorityModels: [],
      regularBattleModels: [],
      highPriorityThreshold: 0.5,
    })
    d(this, "_truncateChatHistory", !1)
    d(this, "_enableBackgroundAgents", !1)
    d(this, "_enableVirtualizedMessageList", !1)
    d(this, "_customPersonalityPrompts", {})
    d(this, "_enablePersonalities", !1)
    d(this, "_memoryClassificationOnFirstToken", !1)
    d(this, "_isRemoteAgentWindow", !1)
    d(this, "_remoteAgentId")
    d(this, "_enableGenerateCommitMessage", !1)
    d(this, "_subscribers", new Set())
    d(
      this,
      "subscribe",
      (e) => (
        this._subscribers.add(e),
        e(this),
        () => {
          this._subscribers.delete(e)
        }
      ),
    )
    d(this, "update", (e) => {
      ;(this._enableEditableHistory =
        e.enableEditableHistory ?? this._enableEditableHistory),
        (this._enablePreferenceCollection =
          e.enablePreferenceCollection ?? this._enablePreferenceCollection),
        (this._enableRetrievalDataCollection =
          e.enableRetrievalDataCollection ??
          this._enableRetrievalDataCollection),
        (this._enableDebugFeatures =
          e.enableDebugFeatures ?? this._enableDebugFeatures),
        (this._enableRichTextHistory =
          e.enableRichTextHistory ?? this._enableRichTextHistory),
        (this._modelDisplayNameToId = { ...e.modelDisplayNameToId }),
        (this._fullFeatured = e.fullFeatured ?? this._fullFeatured),
        (this._enableExternalSourcesInChat =
          e.enableExternalSourcesInChat ?? this._enableExternalSourcesInChat),
        (this._smallSyncThreshold =
          e.smallSyncThreshold ?? this._smallSyncThreshold),
        (this._bigSyncThreshold = e.bigSyncThreshold ?? this._bigSyncThreshold),
        (this._enableSmartPaste = e.enableSmartPaste ?? this._enableSmartPaste),
        (this._enableDirectApply =
          e.enableDirectApply ?? this._enableDirectApply),
        (this._summaryTitles = e.summaryTitles ?? this._summaryTitles),
        (this._suggestedEditsAvailable =
          e.suggestedEditsAvailable ?? this._suggestedEditsAvailable),
        (this._enableShareService =
          e.enableShareService ?? this._enableShareService),
        (this._maxTrackableFileCount =
          e.maxTrackableFileCount ?? this._maxTrackableFileCount),
        (this._enableDesignSystemRichTextEditor =
          e.enableDesignSystemRichTextEditor ??
          this._enableDesignSystemRichTextEditor),
        (this._enableSources = e.enableSources ?? this._enableSources),
        (this._enableChatMermaidDiagrams =
          e.enableChatMermaidDiagrams ?? this._enableChatMermaidDiagrams),
        (this._smartPastePrecomputeMode =
          e.smartPastePrecomputeMode ?? this._smartPastePrecomputeMode),
        (this._useNewThreadsMenu =
          e.useNewThreadsMenu ?? this._useNewThreadsMenu),
        (this._enableChatMermaidDiagramsMinVersion =
          e.enableChatMermaidDiagramsMinVersion ??
          this._enableChatMermaidDiagramsMinVersion),
        (this._idleNewSessionMessageTimeoutMs =
          e.idleNewSessionMessageTimeoutMs ??
          (e.enableDebugFeatures
            ? (this._idleNewSessionMessageTimeoutMs ?? 3e5)
            : this._idleNewSessionMessageTimeoutMs)),
        (this._idleNewSessionNotificationTimeoutMs =
          e.idleNewSessionNotificationTimeoutMs ?? 0),
        (this._enableChatMultimodal =
          e.enableChatMultimodal ?? this._enableChatMultimodal),
        (this._enableAgentMode = e.enableAgentMode ?? this._enableAgentMode),
        (this._enableRichCheckpointInfo =
          e.enableRichCheckpointInfo ?? this._enableRichCheckpointInfo),
        (this._agentMemoriesFilePathName =
          e.agentMemoriesFilePathName ?? this._agentMemoriesFilePathName),
        (this._userTier = e.userTier ?? this._userTier),
        (this._eloModelConfiguration =
          e.eloModelConfiguration ?? this._eloModelConfiguration),
        (this._truncateChatHistory =
          e.truncateChatHistory ?? this._truncateChatHistory),
        (this._enableBackgroundAgents =
          e.enableBackgroundAgents ?? this._enableBackgroundAgents),
        (this._enableVirtualizedMessageList =
          e.enableVirtualizedMessageList ?? this._enableVirtualizedMessageList),
        (this._customPersonalityPrompts =
          e.customPersonalityPrompts ?? this._customPersonalityPrompts),
        (this._enablePersonalities =
          e.enablePersonalities ?? this._enablePersonalities),
        (this._memoryClassificationOnFirstToken =
          e.memoryClassificationOnFirstToken ??
          this._memoryClassificationOnFirstToken),
        (this._isRemoteAgentWindow =
          e.isRemoteAgentWindow ?? this._isRemoteAgentWindow),
        (this._remoteAgentId = e.remoteAgentId ?? this._remoteAgentId),
        (this._enableGenerateCommitMessage =
          e.enableGenerateCommitMessage ?? this._enableGenerateCommitMessage),
        this._subscribers.forEach((s) => s(this))
    })
    d(
      this,
      "isModelIdValid",
      (e) =>
        e !== void 0 && Object.values(this._modelDisplayNameToId).includes(e),
    )
    d(this, "getModelDisplayName", (e) => {
      if (e !== void 0)
        return Object.keys(this._modelDisplayNameToId).find(
          (s) => this._modelDisplayNameToId[s] === e,
        )
    })
    e && this.update(e)
  }
  get enableEditableHistory() {
    return (
      this._fullFeatured &&
      (this._enableEditableHistory || this._enableDebugFeatures)
    )
  }
  get enablePreferenceCollection() {
    return this._enablePreferenceCollection
  }
  get enableRetrievalDataCollection() {
    return this._enableRetrievalDataCollection
  }
  get enableDebugFeatures() {
    return this._enableDebugFeatures
  }
  get enableGenerateCommitMessage() {
    return this._enableGenerateCommitMessage
  }
  get enableRichTextHistory() {
    return this._enableRichTextHistory
  }
  get modelDisplayNameToId() {
    return this._modelDisplayNameToId
  }
  get orderedModelDisplayNames() {
    return Object.keys(this._modelDisplayNameToId).sort((e, s) => {
      const i = e.toLowerCase(),
        o = s.toLowerCase()
      return i === "default" && o !== "default"
        ? -1
        : o === "default" && i !== "default"
          ? 1
          : e.localeCompare(s)
    })
  }
  get fullFeatured() {
    return this._fullFeatured
  }
  get enableExternalSourcesInChat() {
    return this._enableExternalSourcesInChat
  }
  get smallSyncThreshold() {
    return this._smallSyncThreshold
  }
  get bigSyncThreshold() {
    return this._bigSyncThreshold
  }
  get enableSmartPaste() {
    return this._enableDebugFeatures || this._enableSmartPaste
  }
  get enableDirectApply() {
    return this._enableDirectApply || this._enableDebugFeatures
  }
  get enableShareService() {
    return this._enableShareService
  }
  get summaryTitles() {
    return this._summaryTitles
  }
  get suggestedEditsAvailable() {
    return this._suggestedEditsAvailable
  }
  get maxTrackableFileCount() {
    return this._maxTrackableFileCount
  }
  get enableSources() {
    return this._enableDebugFeatures || this._enableSources
  }
  get enableChatMermaidDiagrams() {
    return this._enableDebugFeatures || this._enableChatMermaidDiagrams
  }
  get smartPastePrecomputeMode() {
    return this._smartPastePrecomputeMode
  }
  get useNewThreadsMenu() {
    return this._useNewThreadsMenu
  }
  get enableChatMermaidDiagramsMinVersion() {
    return this._enableChatMermaidDiagramsMinVersion
  }
  get enableDesignSystemRichTextEditor() {
    return this._enableDesignSystemRichTextEditor
  }
  get idleNewSessionNotificationTimeoutMs() {
    return this._idleNewSessionNotificationTimeoutMs ?? 0
  }
  get idleNewSessionMessageTimeoutMs() {
    return this._idleNewSessionMessageTimeoutMs ?? 0
  }
  get enableChatMultimodal() {
    return this._enableChatMultimodal
  }
  get enableAgentMode() {
    return this._enableAgentMode
  }
  get enableRichCheckpointInfo() {
    return this._enableRichCheckpointInfo
  }
  get agentMemoriesFilePathName() {
    return this._agentMemoriesFilePathName
  }
  get userTier() {
    return this._userTier
  }
  get eloModelConfiguration() {
    return this._eloModelConfiguration
  }
  get truncateChatHistory() {
    return this._truncateChatHistory
  }
  get enableBackgroundAgents() {
    return this._enableBackgroundAgents
  }
  get enableVirtualizedMessageList() {
    return this._enableVirtualizedMessageList || this._enableDebugFeatures
  }
  get customPersonalityPrompts() {
    return this._customPersonalityPrompts
  }
  get enablePersonalities() {
    return this._enablePersonalities || this._enableDebugFeatures
  }
  get memoryClassificationOnFirstToken() {
    return this._memoryClassificationOnFirstToken
  }
  get isRemoteAgentWindow() {
    return this._isRemoteAgentWindow
  }
  get remoteAgentId() {
    return this._remoteAgentId
  }
}
var nl = ((a) => (
    (a[(a.unset = 0)] = "unset"),
    (a[(a.positive = 1)] = "positive"),
    (a[(a.negative = 2)] = "negative"),
    a
  ))(nl || {}),
  ue = ((a) => (
    (a[(a.unknown = 0)] = "unknown"),
    (a[(a.new = 1)] = "new"),
    (a[(a.checkingSafety = 2)] = "checkingSafety"),
    (a[(a.runnable = 3)] = "runnable"),
    (a[(a.running = 4)] = "running"),
    (a[(a.completed = 5)] = "completed"),
    (a[(a.error = 6)] = "error"),
    (a[(a.cancelling = 7)] = "cancelling"),
    (a[(a.cancelled = 8)] = "cancelled"),
    a
  ))(ue || {})
function Ia(a) {
  return a.requestId + ";" + a.toolUseId
}
function kc(a) {
  const [e, s] = a.split(";")
  return { requestId: e, toolUseId: s }
}
function hp(a, e) {
  return a == null ? e : typeof a == "string" ? a : e
}
const dp = async (a, e) => {
    if (
      !ps(a) ||
      e.chatItemType !== void 0 ||
      !(e != null && e.request_message)
    )
      return
    const s = Af.create()
    s.setFlag(te.start)
    try {
      await Bf(a, e, s)
    } catch (i) {
      s.setFlag(te.exceptionThrown),
        console.error("Failed to classify and distill memories", i)
    } finally {
      s.setFlag(te.end),
        a.extensionClient.reportAgentSessionEvent({
          eventName: Yc.classifyAndDistill,
          conversationId: a.id,
          eventData: { classifyAndDistillData: s },
        })
    }
  },
  Bf = async (a, e, s) => {
    const i = crypto.randomUUID()
    s.setRequestId(te.memoriesRequestId, i)
    const o = Us(a).id
    s.setFlag(te.startSendSilentExchange)
    const { responseText: c, requestId: f } = await a.sendSilentExchange({
      request_message: e.request_message,
      disableRetrieval: !0,
      disableHistory: !1,
      disableSelectedCodeDetails: !0,
      memoriesInfo: { isClassifyAndDistill: !0 },
    })
    if (
      (s.setStringStats(te.sendSilentExchangeResponseStats, c),
      f
        ? s.setRequestId(te.sendSilentExchangeRequestId, f)
        : s.setFlag(te.noRequestId),
      Us(a).id !== o)
    )
      return void s.setFlag(te.conversationChanged)
    let m
    try {
      m = JSON.parse(c)
    } catch {
      throw (
        (s.setFlag(te.invalidResponse),
        new Error("Invalid response from classify and distill"))
      )
    }
    if (
      typeof m.explanation != "string" ||
      typeof m.content != "string" ||
      typeof m.worthRemembering != "boolean"
    )
      throw (
        (s.setFlag(te.invalidResponse),
        new Error("Invalid response from classify and distill"))
      )
    s.setStringStats(te.explanationStats, m.explanation),
      s.setStringStats(te.contentStats, m.content),
      s.setFlag(te.worthRemembering, m.worthRemembering)
    const v = m.worthRemembering ? m.content : void 0
    v && Vf(a, v, i, s)
  },
  fp = (a) => {
    var i
    const e = a.chatHistory.at(-1)
    if (!e || !Ae(e)) return zn.notRunning
    if (
      !(
        e.status === lt.success ||
        e.status === lt.failed ||
        e.status === lt.cancelled
      )
    )
      return zn.running
    const s = (
      ((i = e.structured_output_nodes) == null
        ? void 0
        : i.filter((o) => o.type === pe.TOOL_USE && !!o.tool_use)) ?? []
    ).at(-1)
    if (!s) return zn.notRunning
    switch (a.getToolUseState(e.request_id, s.tool_use.tool_use_id).phase) {
      case ue.runnable:
        return zn.awaitingUserAction
      case ue.cancelled:
        return zn.notRunning
      default:
        return zn.running
    }
  },
  Pa = (a) => Ae(a) && !!a.request_message,
  ti = (a) => a.chatHistory.findLast((e) => Pa(e)),
  gp = (a) => {
    const e = ti(a)
    if (e != null && e.structured_output_nodes) {
      const s = e.structured_output_nodes.find(
        (i) => i.type === pe.AGENT_MEMORY,
      )
      if (s)
        try {
          const { memoriesRequestId: i, memory: o } = JSON.parse(s.content)
          return { memoriesRequestId: i, memory: o }
        } catch (i) {
          return void console.error(
            "Failed to parse JSON from agent memory node",
            i,
          )
        }
    }
  },
  pp = (a) =>
    Gf(a, (e) => {
      var s
      return !!(
        (s = e.structured_output_nodes) != null &&
        s.some((i) => {
          var o
          return (
            i.type === pe.TOOL_USE &&
            ((o = i.tool_use) == null ? void 0 : o.tool_name) === "remember"
          )
        })
      )
    }).length > 0,
  Gf = (a, e) => {
    const s = ti(a)
    return s != null && s.request_id
      ? a.historyFrom(s.request_id, !0).filter((i) => Ae(i) && (!e || e(i)))
      : []
  },
  _p = (a) => {
    var i
    const e = a.chatHistory.at(-1)
    if (!(e != null && e.request_id) || !Ae(e)) return !1
    const s =
      ((i = e.structured_output_nodes) == null
        ? void 0
        : i.filter((o) => o.type === pe.TOOL_USE)) ?? []
    for (const o of s)
      if (
        o.tool_use &&
        a.getToolUseState(e.request_id, o.tool_use.tool_use_id).phase ===
          ue.runnable
      )
        return (
          a.updateToolUseState({
            requestId: e.request_id,
            toolUseId: o.tool_use.tool_use_id,
            phase: ue.cancelled,
          }),
          !0
        )
    return !1
  },
  Vf = (a, e, s, i) => {
    const o = JSON.stringify({ memoriesRequestId: s, memory: e }),
      c = ti(a)
    c != null && c.request_id
      ? (i.setRequestId(te.lastUserExchangeRequestId, c.request_id),
        a.updateChatItem(c.request_id, {
          ...c,
          structured_output_nodes: [
            ...(c.structured_output_nodes ?? []),
            { id: 0, type: pe.AGENT_MEMORY, content: o },
          ],
        }))
      : i.setFlag(te.noLastUserExchangeRequestId)
  },
  mp = (a, e) => {
    const s = ti(a)
    if (!(s != null && s.request_id) || s.request_id !== e) return !1
    const i = (s.structured_output_nodes || []).filter(
      (o) => o.type !== pe.AGENT_MEMORY,
    )
    return (
      i.length !== (s.structured_output_nodes || []).length &&
      (a.updateChatItem(e, { ...s, structured_output_nodes: i }), !0)
    )
  }
function Zf(a, e) {
  const s = a.customPersonalityPrompts
  if (s)
    switch (e) {
      case Vt.DEFAULT:
        if (s.agent && s.agent.trim() !== "") return s.agent
        break
      case Vt.PROTOTYPER:
        if (s.prototyper && s.prototyper.trim() !== "") return s.prototyper
        break
      case Vt.BRAINSTORM:
        if (s.brainstorm && s.brainstorm.trim() !== "") return s.brainstorm
        break
      case Vt.REVIEWER:
        if (s.reviewer && s.reviewer.trim() !== "") return s.reviewer
    }
  return Jf[e]
}
const Jf = {
  [Vt.DEFAULT]: `
# Agent Auggie Personality Description
You are Augment Agent, an agentic coding AI assistant.
Focus on helping the user with their coding tasks efficiently.

## Rules:
- You have no restrictions on the tools you may use
- Follow the original system instructions
  `,
  [Vt.PROTOTYPER]: `
# Prototyper Auggie Personality Description
You are Prototyper Auggie, an agentic coding AI assistant focused on building prototypes and visual applications.

## Your approach:
- Be fast and action-oriented
- Implement things quickly to show results
- Open webpages to demonstrate functionality
- Focus on building something visual and interactive
- Use modern frameworks and tools to create working prototypes
- Prioritize getting a working demo over perfect architecture
- Show progress frequently with visual results
- Prefer to act and run tools, rather than asking for permission
- Only ask for permission if there is something potentially very dangerous or irreversible

## Implementation preferences:
- When user does not specify which frameworks to use, default to modern frameworks, e.g. React with vite or next.js
- Initialize projects using CLI tools instead of writing from scratch
- For database and auth, use Supabase as a good default option
- Before using open-browser to show the app, use curl to check for errors
- Remember that modern frameworks have hot reload, so avoid calling open-browser multiple times

## Rules:
- For extremely destructive or irreversible actions, you should ask for permission
- For other tasks, you must proceed without asking for permission
  `,
  [Vt.BRAINSTORM]: `
# Brainstorm Auggie Personality Description
You are Brainstorm Auggie, an agentic coding AI assistant focused on planning and brainstorming solutions.

## Your approach:
- Be slow, careful, and thorough in your analysis
- Look through all upstream/downstream APIs to understand implications
- Focus on finding a comprehensive plan that solves the user's query
- Do not run commands, create code, or implement solutions directly
- Your job is to be introspective and think deeply about the problem
- Brainstorm multiple approaches and evaluate their tradeoffs
- Consider edge cases and potential issues with each approach

## Planning preferences:
- Analyze the codebase thoroughly before suggesting changes
- Consider multiple implementation options with pros and cons
- Identify potential risks and challenges for each approach
- Create detailed, step-by-step plans for implementation
- Provide reasoning for architectural decisions
- Consider performance, maintainability, and scalability
- Do not execute the plan - your role is to provide guidance only

## Rules:
- Prefer information gathering and non-destructive tools
- Prefer non-destructive and non-modifying tools
- You must never execute code, modify the codebase, or make changes
- Consider using Mermaid diagrams to help visualize complex concepts
- Once you have a proposal, please examine it critically, and do a revision before finalizing
  `,
  [Vt.REVIEWER]: `
# Reviewer Auggie Personality Description
You are Reviewer Auggie, an agentic coding AI assistant focused on reviewing code changes and identifying potential issues.

## Your approach:
- Act like a code detective to find potential bugs and issues
- Use git commands to analyze changes against the merge base
- Be super inquisitive and look for anything suspicious
- Build a mental model of what is happening in the code change
- Analyze API implications and downstream effects
- Guard the codebase from potential negative side effects
- Focus on understanding the changes from first principles

## Review preferences:
- Use git and GitHub tools to get code history information
- Compare changes against the logical base or merge base
- Look for edge cases and potential bugs
- Analyze API contracts and potential breaking changes
- Consider performance implications
- Check for security vulnerabilities
- Verify test coverage for the changes

## Rules:
- Use git commands and GitHub API to analyze code changes
- Be thorough and methodical in your analysis
- Focus on finding potential issues rather than implementing solutions
- Provide constructive feedback with specific examples
- Consider both the technical implementation and the broader impact
  `,
}
function Yf(a, e, s = 1e3) {
  let i = null,
    o = 0
  const c = gn(e),
    f = () => {
      const m = (() => {
        const v = Date.now()
        if (i !== null && v - o < s) return i
        const C = a()
        return (i = C), (o = v), C
      })()
      c.set(m)
    }
  return {
    subscribe: c.subscribe,
    resetCache: () => {
      ;(i = null), f()
    },
    updateStore: f,
  }
}
class Et {
  constructor(e, s, i, o) {
    d(this, "_state")
    d(this, "_subscribers", new Set())
    d(this, "_focusModel", new If())
    d(this, "_onSendExchangeListeners", [])
    d(this, "_onNewConversationListeners", [])
    d(this, "_onHistoryDeleteListeners", [])
    d(this, "_onBeforeChangeConversationListeners", [])
    d(this, "_truncatedChatHistory", new Qf(8e5, 26e4, 3))
    d(this, "_totalCharactersCacheThrottleMs", 1e3)
    d(this, "_totalCharactersStore")
    d(
      this,
      "subscribe",
      (e) => (
        this._subscribers.add(e),
        e(this),
        () => {
          this._subscribers.delete(e)
        }
      ),
    )
    d(this, "setConversation", (e, s = !0, i = !0) => {
      const o = e.id !== this._state.id
      o &&
        i &&
        ((e.toolUseStates = Object.fromEntries(
          Object.entries(e.toolUseStates ?? {}).map(([f, m]) => {
            if (m.requestId && m.toolUseId) {
              const { requestId: v, toolUseId: C } = kc(f)
              return (
                (v === m.requestId && C === m.toolUseId) ||
                  console.warn(
                    "Tool use state key does not match request and tool use IDs. Got key ",
                    f,
                    "but object has ",
                    Ia(m),
                  ),
                [f, m]
              )
            }
            return [f, { ...m, ...kc(f) }]
          }),
        )),
        ((e = this._notifyBeforeChangeConversation(
          this._state,
          e,
        )).lastInteractedAtIso = new Date().toISOString())),
        s &&
          o &&
          this.isValid &&
          (this.saveDraftActiveContextIds(),
          this._unloadContextFromConversation(this._state))
      const c = Et.isEmpty(e)
      if (o && c) {
        const f = this._state.draftExchange
        f && (e.draftExchange = f)
      }
      return (
        (this._state = e),
        this._focusModel.setItems(this._state.chatHistory.filter(Ae)),
        this._focusModel.initFocusIdx(-1),
        this._subscribers.forEach((f) => f(this)),
        this._saveConversation(this._state),
        o &&
          (this._loadContextFromConversation(e),
          this.loadDraftActiveContextIds(),
          this._onNewConversationListeners.forEach((f) => f())),
        !0
      )
    })
    d(this, "update", (e) => {
      this.setConversation({ ...this._state, ...e }),
        this._totalCharactersStore.updateStore()
    })
    d(this, "toggleIsPinned", () => {
      this.update({ isPinned: !this.isPinned })
    })
    d(this, "setName", (e) => {
      this.update({ name: e })
    })
    d(this, "setSelectedModelId", (e) => {
      this.update({ selectedModelId: e })
    })
    d(this, "updateFeedback", (e, s) => {
      this.update({ feedbackStates: { ...this._state.feedbackStates, [e]: s } })
    })
    d(this, "updateToolUseState", (e) => {
      this.update({
        toolUseStates: { ...this._state.toolUseStates, [Ia(e)]: e },
      })
    })
    d(this, "getToolUseState", (e, s) =>
      e === void 0 || s === void 0 || this.toolUseStates === void 0
        ? { phase: ue.unknown, requestId: e ?? "", toolUseId: s ?? "" }
        : this.toolUseStates[Ia({ requestId: e, toolUseId: s })] || {
            phase: ue.new,
          },
    )
    d(this, "getLastToolUseState", () => {
      var i, o
      const e = this.lastExchange
      if (!e) return { phase: ue.unknown }
      const s = (
        ((i = e == null ? void 0 : e.structured_output_nodes) == null
          ? void 0
          : i.filter((c) => c.type === pe.TOOL_USE)) ?? []
      ).at(-1)
      return s
        ? this.getToolUseState(
            e.request_id,
            (o = s.tool_use) == null ? void 0 : o.tool_use_id,
          )
        : { phase: ue.unknown }
    })
    d(this, "addExchange", (e) => {
      const s = [...this._state.chatHistory, e]
      let i
      Ae(e) &&
        (i = e.request_id
          ? {
              ...this._state.feedbackStates,
              [e.request_id]: { selectedRating: nl.unset, feedbackNote: "" },
            }
          : void 0),
        this.update({
          chatHistory: s,
          ...(i ? { feedbackStates: i } : {}),
          lastUrl: void 0,
        })
    })
    d(this, "resetShareUrl", () => {
      this.update({ lastUrl: void 0 })
    })
    d(this, "updateExchangeById", (e, s, i = !1) => {
      var m
      const o = this.exchangeWithRequestId(s)
      if (o === null)
        return console.warn("No exchange with this request ID found."), !1
      i &&
        e.response_text !== void 0 &&
        (e.response_text = (o.response_text ?? "") + (e.response_text ?? "")),
        i &&
          (e.structured_output_nodes = [
            ...(o.structured_output_nodes ?? []),
            ...(e.structured_output_nodes ?? []),
          ]),
        i &&
          e.workspace_file_chunks !== void 0 &&
          (e.workspace_file_chunks = [
            ...(o.workspace_file_chunks ?? []),
            ...(e.workspace_file_chunks ?? []),
          ])
      const c =
        (m = (e.structured_output_nodes || []).find(
          (v) => v.type === pe.MAIN_TEXT_FINISHED,
        )) == null
          ? void 0
          : m.content
      c && c !== e.response_text && (e.response_text = c)
      let f = this._state.isShareable || gs({ ...o, ...e })
      return (
        this.update({
          chatHistory: this.chatHistory.map((v) =>
            v.request_id === s ? { ...v, ...e } : v,
          ),
          isShareable: f,
        }),
        !0
      )
    })
    d(this, "clearMessagesFromHistory", (e) => {
      this.update({
        chatHistory: this.chatHistory.filter(
          (s) => !s.request_id || !e.has(s.request_id),
        ),
      }),
        this._extensionClient.clearMetadataFor({ requestIds: Array.from(e) })
    })
    d(this, "clearHistory", () => {
      this._extensionClient.clearMetadataFor({ requestIds: this.requestIds }),
        this.update({ chatHistory: [] })
    })
    d(this, "clearHistoryFrom", async (e, s = !0) => {
      const i = this.historyFrom(e, s),
        o = i.map((c) => c.request_id).filter((c) => c !== void 0)
      this.update({ chatHistory: this.historyTo(e, !s) }),
        this._extensionClient.clearMetadataFor({ requestIds: o }),
        i.forEach((c) => {
          this._onHistoryDeleteListeners.forEach((f) => f(c))
        })
    })
    d(this, "clearMessageFromHistory", (e) => {
      this.update({
        chatHistory: this.chatHistory.filter((s) => s.request_id !== e),
      }),
        this._extensionClient.clearMetadataFor({ requestIds: [e] })
    })
    d(this, "historyTo", (e, s = !1) => {
      const i = this.chatHistory.findIndex((o) => o.request_id === e)
      return i === -1 ? [] : this.chatHistory.slice(0, s ? i + 1 : i)
    })
    d(this, "historyFrom", (e, s = !0) => {
      const i = this.chatHistory.findIndex((o) => o.request_id === e)
      return i === -1 ? [] : this.chatHistory.slice(s ? i : i + 1)
    })
    d(this, "resendLastExchange", async () => {
      const e = this.lastExchange
      if (e && !this.awaitingReply) return this.resendTurn(e)
    })
    d(this, "resendTurn", (e) =>
      this.awaitingReply
        ? Promise.resolve()
        : (this._removeTurn(e),
          this.sendExchange({
            chatItemType: e.chatItemType,
            request_message: e.request_message,
            rich_text_json_repr: e.rich_text_json_repr,
            status: lt.draft,
            mentioned_items: e.mentioned_items,
            structured_request_nodes: e.structured_request_nodes,
            disableSelectedCodeDetails: e.disableSelectedCodeDetails,
            disableHistory: e.disableHistory,
          })),
    )
    d(this, "_removeTurn", (e) => {
      this.update({
        chatHistory: this.chatHistory.filter(
          (s) => s !== e && (!e.request_id || s.request_id !== e.request_id),
        ),
      })
    })
    d(
      this,
      "exchangeWithRequestId",
      (e) => this.chatHistory.find((s) => s.request_id === e) || null,
    )
    d(this, "resetTotalCharactersCache", () => {
      this._totalCharactersStore.resetCache()
    })
    d(this, "markSeen", async (e) => {
      if (
        !e.request_id ||
        !this.chatHistory.find((i) => i.request_id === e.request_id)
      )
        return
      const s = { seen_state: zt.seen }
      this.update({
        chatHistory: this.chatHistory.map((i) =>
          i.request_id === e.request_id ? { ...i, ...s } : i,
        ),
      })
    })
    d(this, "createStructuredRequestNodes", (e) =>
      this._jsonToStructuredRequest(e),
    )
    d(this, "saveDraftMentions", (e) => {
      if (!this.draftExchange) return
      const s = e.filter((i) => !i.personality)
      this.update({
        draftExchange: { ...this.draftExchange, mentioned_items: s },
      })
    })
    d(this, "saveDraftActiveContextIds", () => {
      const e = this._specialContextInputModel.recentActiveItems.map(
        (s) => s.id,
      )
      this.update({ draftActiveContextIds: e })
    })
    d(this, "loadDraftActiveContextIds", () => {
      const e = new Set(this.draftActiveContextIds ?? []),
        s = this._specialContextInputModel.recentItems.filter(
          (o) => e.has(o.id) || o.recentFile || o.selection || o.sourceFolder,
        ),
        i = this._specialContextInputModel.recentItems.filter(
          (o) =>
            !(e.has(o.id) || o.recentFile || o.selection || o.sourceFolder),
        )
      this._specialContextInputModel.markItemsActive(s.reverse()),
        this._specialContextInputModel.markItemsInactive(i.reverse())
    })
    d(this, "saveDraftExchange", (e, s) => {
      var f, m, v
      const i =
          e !== ((f = this.draftExchange) == null ? void 0 : f.request_message),
        o =
          s !==
          ((m = this.draftExchange) == null ? void 0 : m.rich_text_json_repr)
      if (!i && !o) return
      const c = (v = this.draftExchange) == null ? void 0 : v.mentioned_items
      this.update({
        draftExchange: {
          request_message: e,
          rich_text_json_repr: s,
          mentioned_items: c,
          status: lt.draft,
        },
      })
    })
    d(this, "clearDraftExchange", () => {
      const e = this.draftExchange
      return this.update({ draftExchange: void 0 }), e
    })
    d(this, "sendDraftExchange", () => {
      if (
        (this._extensionClient.triggerUsedChatMetric(),
        !this.canSendDraft || !this.draftExchange)
      )
        return !1
      const e = this.clearDraftExchange()
      if (!e) return !1
      const s =
        this._chatFlagModel.enableChatMultimodal && e.rich_text_json_repr
          ? this._jsonToStructuredRequest(e.rich_text_json_repr)
          : void 0
      return (
        this.sendExchange({
          ...e,
          structured_request_nodes: s,
          model_id: this.selectedModelId ?? void 0,
        })
          .then(() => {
            var f, m
            const i =
                !this.name &&
                this.chatHistory.length === 1 &&
                ((f = this.firstExchange) == null ? void 0 : f.request_id) ===
                  this.chatHistory[0].request_id,
              o =
                ps(this) &&
                ((m = this._state.extraData) == null
                  ? void 0
                  : m.hasAgentOnboarded) &&
                ((c = this.chatHistory), c.filter((v) => Pa(v))).length === 2
            var c
            this._chatFlagModel.summaryTitles &&
              (i || o) &&
              this.updateConversationTitle()
          })
          .finally(() => {
            var i
            ps(this) &&
              this._extensionClient.reportAgentRequestEvent({
                eventName: Mf.sentUserMessage,
                conversationId: this.id,
                requestId:
                  ((i = this.lastExchange) == null ? void 0 : i.request_id) ??
                  "UNKNOWN_REQUEST_ID",
                chatHistoryLength: this.chatHistory.length,
              })
          }),
        this.focusModel.setFocusIdx(void 0),
        !0
      )
    })
    d(this, "cancelMessage", async () => {
      var e
      this.canCancelMessage &&
        (e = this.lastExchange) != null &&
        e.request_id &&
        (this.updateExchangeById(
          { status: lt.cancelled },
          this.lastExchange.request_id,
        ),
        await this._extensionClient.cancelChatStream(
          this.lastExchange.request_id,
        ))
    })
    d(this, "sendInstructionExchange", async (e, s) => {
      let i = `temp-fe-${crypto.randomUUID()}`
      const o = {
        status: lt.sent,
        request_id: i,
        request_message: e,
        model_id: this.selectedModelId ?? void 0,
        structured_output_nodes: [],
        seen_state: zt.unseen,
        timestamp: new Date().toISOString(),
      }
      this.addExchange(o)
      for await (const c of this._extensionClient.sendInstructionMessage(
        o,
        s,
      )) {
        if (!this.updateExchangeById(c, i, !0)) return
        i = c.request_id || i
      }
    })
    d(this, "updateConversationTitle", async () => {
      const { responseText: e } = await this.sendSummaryExchange()
      this.update({ name: e })
    })
    d(this, "sendSummaryExchange", () => {
      const e = {
        status: lt.sent,
        request_message:
          "Please provide a clear and concise summary of our conversation so far. The summary must be less than 6 words long. The summary must contain the key points of the conversation. The summary must be in the form of a title which will represent the conversation. The response should not include any additional formatting such as wrapping the response with quotation marks.",
        model_id: this.selectedModelId ?? void 0,
        chatItemType: fs.summaryTitle,
        disableRetrieval: !0,
      }
      return this.sendSilentExchange(e)
    })
    d(this, "generateCommitMessage", async () => {
      let e = `temp-fe-${crypto.randomUUID()}`
      const s = {
        status: lt.sent,
        request_id: e,
        request_message:
          "Please generate a commit message based on the diff of my staged and unstaged changes.",
        model_id: this.selectedModelId ?? void 0,
        mentioned_items: [],
        seen_state: zt.unseen,
        chatItemType: fs.generateCommitMessage,
        disableSelectedCodeDetails: !0,
        disableHistory: !0,
        timestamp: new Date().toISOString(),
      }
      this.addExchange(s)
      for await (const i of this._extensionClient.generateCommitMessage()) {
        if (!this.updateExchangeById(i, e, !0)) return
        e = i.request_id || e
      }
    })
    d(this, "sendExchange", async (e) => {
      var c
      this.updateLastInteraction()
      let s = `temp-fe-${crypto.randomUUID()}`,
        i = this._chatFlagModel.isModelIdValid(e.model_id) ? e.model_id : void 0
      e = await this._addIdeStateNode(Lc(e))
      const o = {
        status: lt.sent,
        request_id: s,
        request_message: e.request_message,
        rich_text_json_repr: e.rich_text_json_repr,
        model_id: i,
        mentioned_items: e.mentioned_items,
        structured_output_nodes: e.structured_output_nodes,
        seen_state: zt.unseen,
        chatItemType: e.chatItemType,
        disableSelectedCodeDetails: e.disableSelectedCodeDetails,
        disableHistory: e.disableHistory,
        structured_request_nodes: e.structured_request_nodes,
        timestamp: new Date().toISOString(),
      }
      this.addExchange(o),
        this._loadContextFromExchange(o),
        this._onSendExchangeListeners.forEach((f) => f(o))
      for await (const f of this.sendUserMessage(s, o)) {
        if (
          ((c = this.exchangeWithRequestId(s)) == null ? void 0 : c.status) !==
            lt.sent ||
          !this.updateExchangeById(f, s, !0)
        )
          return
        s = f.request_id || s
      }
    })
    d(this, "sendSuggestedQuestion", (e) => {
      this.sendExchange({ request_message: e, status: lt.draft }),
        this._extensionClient.triggerUsedChatMetric(),
        this._extensionClient.reportWebviewClientEvent(
          Ef.chatUseSuggestedQuestion,
        )
    })
    d(this, "recoverAllExchanges", async () => {
      await Promise.all(this.recoverableExchanges.map(this.recoverExchange))
    })
    d(this, "recoverExchange", async (e) => {
      var o
      if (!e.request_id || e.status !== lt.sent) return
      let s = e.request_id
      const i =
        (o = e.structured_output_nodes) == null
          ? void 0
          : o.filter((c) => c.type === pe.AGENT_MEMORY)
      this.updateExchangeById(
        { ...e, response_text: "", structured_output_nodes: i ?? [] },
        s,
      )
      for await (const c of this.getChatStream(e)) {
        if (!this.updateExchangeById(c, s, !0)) return
        s = c.request_id || s
      }
    })
    d(this, "_loadContextFromConversation", (e) => {
      e.chatHistory.forEach((s) => {
        Ae(s) && this._loadContextFromExchange(s)
      })
    })
    d(this, "_loadContextFromExchange", (e) => {
      e.mentioned_items &&
        (this._specialContextInputModel.updateItems(e.mentioned_items, []),
        this._specialContextInputModel.markItemsActive(e.mentioned_items))
    })
    d(this, "_unloadContextFromConversation", (e) => {
      e.chatHistory.forEach((s) => {
        Ae(s) && this._unloadContextFromExchange(s)
      })
    })
    d(this, "_unloadContextFromExchange", (e) => {
      e.mentioned_items &&
        this._specialContextInputModel.updateItems([], e.mentioned_items)
    })
    d(this, "updateLastInteraction", () => {
      this.update({ lastInteractedAtIso: new Date().toISOString() })
    })
    d(this, "_jsonToStructuredRequest", (e) => {
      const s = [],
        i = (c) => {
          var m
          const f = s.at(-1)
          if ((f == null ? void 0 : f.type) === ee.TEXT) {
            const v = ((m = f.text_node) == null ? void 0 : m.content) ?? "",
              C = { ...f, text_node: { content: v + c } }
            s[s.length - 1] = C
          } else
            s.push({ id: s.length, type: ee.TEXT, text_node: { content: c } })
        },
        o = (c) => {
          var f, m, v, C
          if (c.type === "doc" || c.type === "paragraph")
            for (const E of c.content ?? []) o(E)
          else if (c.type === "hardBreak")
            i(`
`)
          else if (c.type === "text") i(c.text ?? "")
          else if (c.type === "image") {
            if (typeof ((f = c.attrs) == null ? void 0 : f.src) != "string")
              return void console.error(
                "Image source is not a string: ",
                (m = c.attrs) == null ? void 0 : m.src,
              )
            if (c.attrs.isLoading) return
            const E = (v = c.attrs) == null ? void 0 : v.title,
              P = this._fileNameToImageFormat(E)
            s.push({
              id: s.length,
              type: ee.IMAGE_ID,
              image_id_node: { image_id: c.attrs.src, format: P },
            })
          } else if (c.type === "mention") {
            const E = (C = c.attrs) == null ? void 0 : C.data
            E && za(E)
              ? s.push({
                  id: s.length,
                  type: ee.TEXT,
                  text_node: {
                    content: Zf(this._chatFlagModel, E.personality.type),
                  },
                })
              : i(`@${E == null ? void 0 : E.name}`)
          }
        }
      return o(e), s
    })
    ;(this._extensionClient = e),
      (this._chatFlagModel = s),
      (this._specialContextInputModel = i),
      (this._saveConversation = o),
      (this._state = { ...Et.create() }),
      (this._totalCharactersStore = this._createTotalCharactersStore())
  }
  _createTotalCharactersStore() {
    return Yf(
      () => {
        let e = 0
        const s = this._state.chatHistory
        return (
          this._convertHistoryToExchanges(s).forEach((i) => {
            e += JSON.stringify(i).length
          }),
          this._state.draftExchange &&
            (e += JSON.stringify(this._state.draftExchange).length),
          e
        )
      },
      0,
      this._totalCharactersCacheThrottleMs,
    )
  }
  async decidePersonaType() {
    var e
    try {
      return (((e = (await this._extensionClient.getWorkspaceInfo())
        .trackedFileCount) == null
        ? void 0
        : e.reduce((i, o) => i + o, 0)) || 0) <= 4
        ? Vt.PROTOTYPER
        : Vt.DEFAULT
    } catch (s) {
      return console.error("Error determining persona type:", s), Vt.DEFAULT
    }
  }
  static create(e = {}) {
    const s = new Date().toISOString()
    return {
      id: crypto.randomUUID(),
      name: void 0,
      createdAtIso: s,
      lastInteractedAtIso: s,
      chatHistory: [],
      feedbackStates: {},
      toolUseStates: {},
      draftExchange: void 0,
      draftActiveContextIds: void 0,
      selectedModelId: void 0,
      requestIds: [],
      isPinned: !1,
      lastUrl: void 0,
      isShareable: !1,
      extraData: {},
      personaType: Vt.DEFAULT,
      ...e,
    }
  }
  static toSentenceCase(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  static getDisplayName(e) {
    var o
    const s = this._filterToExchanges(e)
    let i
    return (
      (i = jf(e) ? "Autofix Chat" : ps(e) ? "New Agent" : "New Chat"),
      Et.toSentenceCase(
        e.name || ((o = s[0]) == null ? void 0 : o.request_message) || i,
      )
    )
  }
  static _filterToExchanges(e) {
    return e.chatHistory.filter((s) => Ae(s))
  }
  static isEmpty(e) {
    var s
    return (
      e.chatHistory.filter((i) => Ae(i)).length === 0 &&
      !((s = e.draftExchange) != null && s.request_message)
    )
  }
  static isNamed(e) {
    return e.name !== void 0 && e.name !== ""
  }
  static getTime(e, s) {
    return s === "lastMessageTimestamp"
      ? Et.lastMessageTimestamp(e)
      : s === "lastInteractedAt"
        ? Et.lastInteractedAt(e)
        : Et.createdAt(e)
  }
  static createdAt(e) {
    return new Date(e.createdAtIso)
  }
  static lastInteractedAt(e) {
    return new Date(e.lastInteractedAtIso)
  }
  static lastMessageTimestamp(e) {
    const s = this._filterToExchanges(e)
    if (s.length === 0) return this.createdAt(e)
    const i = s[s.length - 1]
    return i.timestamp ? new Date(i.timestamp) : this.createdAt(e)
  }
  static isValid(e) {
    return e.id !== void 0 && (!Et.isEmpty(e) || Et.isNamed(e))
  }
  onBeforeChangeConversation(e) {
    return (
      this._onBeforeChangeConversationListeners.push(e),
      () => {
        this._onBeforeChangeConversationListeners =
          this._onBeforeChangeConversationListeners.filter((s) => s !== e)
      }
    )
  }
  _notifyBeforeChangeConversation(e, s) {
    let i = s
    for (const o of this._onBeforeChangeConversationListeners) {
      const c = o(e, i)
      c !== void 0 && (i = c)
    }
    return i
  }
  get extraData() {
    return this._state.extraData
  }
  set extraData(e) {
    this.update({ extraData: e })
  }
  get focusModel() {
    return this._focusModel
  }
  get isValid() {
    return Et.isValid(this._state)
  }
  get id() {
    return this._state.id
  }
  get name() {
    return this._state.name
  }
  get personaType() {
    return this._state.personaType ?? Vt.DEFAULT
  }
  get displayName() {
    return Et.getDisplayName(this._state)
  }
  get createdAtIso() {
    return this._state.createdAtIso
  }
  get createdAt() {
    return Et.createdAt(this._state)
  }
  get chatHistory() {
    return this._state.chatHistory
  }
  get feedbackStates() {
    return this._state.feedbackStates
  }
  get toolUseStates() {
    return this._state.toolUseStates
  }
  get draftExchange() {
    return this._state.draftExchange
  }
  get selectedModelId() {
    return this._state.selectedModelId
  }
  get isPinned() {
    return !!this._state.isPinned
  }
  get extensionClient() {
    return this._extensionClient
  }
  addChatItem(e) {
    this.addExchange(e)
  }
  get requestIds() {
    return this._state.chatHistory
      .map((e) => e.request_id)
      .filter((e) => e !== void 0)
  }
  get hasDraft() {
    var i
    const e =
        (
          ((i = this.draftExchange) == null ? void 0 : i.request_message) ?? ""
        ).trim() !== "",
      s = this.hasImagesInDraft()
    return e || s
  }
  hasImagesInDraft() {
    var i
    const e = (i = this.draftExchange) == null ? void 0 : i.rich_text_json_repr
    if (!e) return !1
    const s = (o) =>
      Array.isArray(o)
        ? o.some(s)
        : !!o &&
          (o.type === "image" ||
            (!(!o.content || !Array.isArray(o.content)) && o.content.some(s)))
    return s(e)
  }
  get canSendDraft() {
    return this.hasDraft && !this.awaitingReply
  }
  get canCancelMessage() {
    return this.awaitingReply
  }
  get firstExchange() {
    const e = Et._filterToExchanges(this)
    return e.length === 0 ? null : e[0]
  }
  get lastExchange() {
    const e = Et._filterToExchanges(this)
    return e.length === 0 ? null : e[e.length - 1]
  }
  get canClearHistory() {
    return this._state.chatHistory.length !== 0 && !this.awaitingReply
  }
  get recoverableExchanges() {
    return this._state.chatHistory.filter((e) => Ae(e) && e.status === lt.sent)
  }
  get successfulMessages() {
    return this._state.chatHistory.filter((e) => gs(e) || $s(e))
  }
  get totalCharactersStore() {
    return this._totalCharactersStore
  }
  _convertHistoryToExchanges(e) {
    if (e.length === 0) return []
    const s = []
    for (const i of e)
      if (gs(i)) s.push(Xf(i))
      else if (
        $s(i) &&
        i.fromTimestamp !== void 0 &&
        i.toTimestamp !== void 0 &&
        i.revertTarget
      ) {
        const o = Kf(i, 1),
          c = {
            request_message: "",
            response_text: "",
            request_id: i.request_id || crypto.randomUUID(),
            request_nodes: [o],
            response_nodes: [],
          }
        s.push(c)
      }
    return s
  }
  get awaitingReply() {
    return this.lastExchange !== null && this.lastExchange.status === lt.sent
  }
  get lastInteractedAtIso() {
    return this._state.lastInteractedAtIso
  }
  get draftActiveContextIds() {
    return this._state.draftActiveContextIds
  }
  async sendSilentExchange(e) {
    const s = crypto.randomUUID()
    let i,
      o = ""
    const c = await this._addIdeStateNode(
      Lc({
        ...e,
        request_id: s,
        status: lt.sent,
        timestamp: new Date().toISOString(),
      }),
    )
    for await (const f of this.sendUserMessage(s, c))
      f.response_text && (o += f.response_text),
        f.request_id && (i = f.request_id)
    return { responseText: o, requestId: i }
  }
  async *getChatStream(e) {
    e.request_id &&
      (yield* this._extensionClient.getExistingChatStream(e, {
        flags: this._chatFlagModel,
      }))
  }
  async *sendUserMessage(e, s) {
    var C
    const i = this._specialContextInputModel.chatActiveContext
    let o = this.successfulMessages
    if (s.chatItemType === fs.summaryTitle) {
      const E = o.findIndex(
        (P) => P.chatItemType !== fs.agentOnboarding && Pa(P),
      )
      E !== -1 && (o = o.slice(E))
    }
    const c = s.disableHistory === !0 ? [] : o
    let f = this._convertHistoryToExchanges(c)
    this._chatFlagModel.truncateChatHistory &&
      (f = this._truncatedChatHistory.getTruncatedChatHistory(f, () =>
        this._extensionClient.reportAgentSessionEvent({
          eventName: Yc.chatHistoryTruncated,
          conversationId: this.id,
        }),
      ))
    let m = this.personaType
    if (s.structured_request_nodes) {
      const E = s.structured_request_nodes.find(
        (P) => P.type === ee.CHANGE_PERSONALITY,
      )
      E &&
        E.change_personality_node &&
        (m = E.change_personality_node.personality_type)
    }
    const v = {
      text: s.request_message,
      chatHistory: f,
      modelId: s.model_id,
      context: i,
      userSpecifiedFiles: i.userSpecifiedFiles,
      externalSourceIds:
        (C = i.externalSources) == null ? void 0 : C.map((E) => E.id),
      disableRetrieval: s.disableRetrieval ?? !1,
      disableSelectedCodeDetails: s.disableSelectedCodeDetails ?? !1,
      nodes: s.structured_request_nodes,
      memoriesInfo: s.memoriesInfo,
      personaType: m,
      conversationId: this.id,
    }
    yield* this._extensionClient.startChatStreamWithRetry(e, v, {
      flags: this._chatFlagModel,
    })
  }
  onSendExchange(e) {
    return (
      this._onSendExchangeListeners.push(e),
      () => {
        this._onSendExchangeListeners = this._onSendExchangeListeners.filter(
          (s) => s !== e,
        )
      }
    )
  }
  onNewConversation(e) {
    return (
      this._onNewConversationListeners.push(e),
      () => {
        this._onNewConversationListeners =
          this._onNewConversationListeners.filter((s) => s !== e)
      }
    )
  }
  onHistoryDelete(e) {
    return (
      this._onHistoryDeleteListeners.push(e),
      () => {
        this._onHistoryDeleteListeners = this._onHistoryDeleteListeners.filter(
          (s) => s !== e,
        )
      }
    )
  }
  updateChatItem(e, s) {
    return this.chatHistory.find((i) => i.request_id === e) === null
      ? (console.warn("No exchange with this request ID found."), !1)
      : (this.update({
          chatHistory: this.chatHistory.map((i) =>
            i.request_id === e ? { ...i, ...s } : i,
          ),
        }),
        !0)
  }
  _fileNameToImageFormat(e) {
    var i
    switch ((i = e.split(".").at(-1)) == null ? void 0 : i.toLowerCase()) {
      case "jpeg":
      case "jpg":
        return ks.JPEG
      case "png":
        return ks.PNG
      case "gif":
        return ks.GIF
      case "webp":
        return ks.WEBP
      default:
        return ks.IMAGE_FORMAT_UNSPECIFIED
    }
  }
  async _addIdeStateNode(e) {
    let s = (e.structured_request_nodes ?? []).filter(
      (o) => o.type !== ee.IDE_STATE,
    )
    const i = await this._extensionClient.getChatRequestIdeState()
    return i
      ? ((s = [...s, { id: sl(s) + 1, type: ee.IDE_STATE, ide_state_node: i }]),
        { ...e, structured_request_nodes: s })
      : e
  }
}
function Kf(a, e) {
  const s = ($s(a), a.fromTimestamp),
    i = ($s(a), a.toTimestamp),
    o = $s(a) && a.revertTarget !== void 0
  return {
    id: e,
    type: ee.CHECKPOINT_REF,
    checkpoint_ref_node: {
      request_id: a.request_id || "",
      from_timestamp: s,
      to_timestamp: i,
      source: o ? Tf.CHECKPOINT_REVERT : void 0,
    },
  }
}
function Xf(a) {
  const e = (a.structured_output_nodes ?? []).filter(
    (s) => s.type === pe.RAW_RESPONSE || s.type === pe.TOOL_USE,
  )
  return {
    request_message: a.request_message,
    response_text: a.response_text ?? "",
    request_id: a.request_id || "",
    request_nodes: a.structured_request_nodes ?? [],
    response_nodes: e,
  }
}
function sl(a) {
  return a.length > 0 ? Math.max(...a.map((e) => e.id)) : 0
}
function Lc(a) {
  var e
  if (
    a.request_message.length > 0 &&
    !(
      (e = a.structured_request_nodes) != null &&
      e.some((s) => s.type === ee.TEXT)
    )
  ) {
    let s = a.structured_request_nodes ?? []
    return (
      (s = [
        ...s,
        {
          id: sl(s) + 1,
          type: ee.TEXT,
          text_node: { content: a.request_message },
        },
      ]),
      { ...a, structured_request_nodes: s }
    )
  }
  return a
}
class Qf {
  constructor(e, s, i) {
    d(this, "_cachedTruncatedHistory", [])
    d(this, "_cachedTruncatedChars", [])
    d(this, "_cachedUntruncatedChars", new Map())
    ;(this._maxHistoryChars = e),
      (this._truncateToChars = s),
      (this._avoidTruncationExchangeCount = i)
  }
  getTruncatedChatHistory(e, s) {
    const i = []
    e.length < this._cachedTruncatedHistory.length &&
      (this._cachedTruncatedHistory.splice(e.length),
      this._cachedTruncatedChars.splice(e.length))
    for (let v = 0; v < this._cachedTruncatedHistory.length; v++) {
      const C = e[v],
        E = this._cachedTruncatedHistory[v]
      if (C.request_id !== E.request_id) {
        this._cachedTruncatedHistory.splice(v),
          this._cachedTruncatedChars.splice(v)
        break
      }
    }
    const o = this._cachedTruncatedHistory.length
    i.push(...this._cachedTruncatedHistory)
    let c = this._cachedTruncatedChars.reduce((v, C) => v + C, 0)
    const f = e
      .slice(o)
      .map((v) => this._getUntruncatedChars(v))
      .reduce((v, C) => v + C, 0)
    if (c + f < this._maxHistoryChars) return i.push(...e.slice(o)), i
    s == null || s()
    let m = c + f - this._truncateToChars
    for (let v = o; v < e.length - this._avoidTruncationExchangeCount; v++) {
      const C = this._truncateExchange(e[v]),
        E = JSON.stringify(C).length
      if (
        (this._cachedTruncatedHistory.push(C),
        this._cachedTruncatedChars.push(E),
        i.push(C),
        (c += E),
        (m -= this._getUntruncatedChars(e[v]) - E),
        m <= 0)
      )
        break
    }
    return i.push(...e.slice(i.length)), i
  }
  _truncateExchange(e) {
    var c, f
    const s =
        (c = e.request_nodes) == null
          ? void 0
          : c.map((m) =>
              m.type === ee.TOOL_RESULT
                ? {
                    ...m,
                    tool_result_node: {
                      ...m.tool_result_node,
                      content: "[Tool result truncated...]",
                    },
                  }
                : m,
            ),
      i =
        (f = e.response_nodes) == null
          ? void 0
          : f.map((m) =>
              m.type === pe.TOOL_USE
                ? {
                    ...m,
                    tool_use: m.tool_use && this._truncateToolUse(m.tool_use),
                  }
                : m,
            ),
      o = { ...e, request_nodes: s, response_nodes: i }
    return JSON.stringify(o).length > JSON.stringify(e).length ? e : o
  }
  _truncateToolUse(e) {
    let s
    try {
      s = JSON.parse(e.input_json)
    } catch {
      return {
        ...e,
        input_json: JSON.stringify({ message: "[Tool use truncated...]" }),
      }
    }
    for (const i of Object.keys(s))
      s[i].length > 14 && (s[i] = "[Truncated...]")
    return { ...e, input_json: JSON.stringify(s) }
  }
  _getUntruncatedChars(e) {
    if (this._cachedUntruncatedChars.has(e.request_id))
      return this._cachedUntruncatedChars.get(e.request_id)
    {
      const s = JSON.stringify(e).length
      return this._cachedUntruncatedChars.set(e.request_id, s), s
    }
  }
}
class tg {
  constructor(e = !0, s = setTimeout) {
    d(this, "_notify", new Set())
    d(this, "_clearTimeout", (e) => {
      e.timeoutId && clearTimeout(e.timeoutId)
    })
    d(this, "_schedule", (e) => {
      if (
        !this._started ||
        (e.date && ((e.timeout = e.date.getTime() - Date.now()), e.timeout < 0))
      )
        return
      const s = this._setTimeout
      e.timeoutId = s(this._handle, e.timeout, e)
    })
    d(this, "_handle", (e) => {
      e.notify(), e.date ? this._notify.delete(e) : e.once || this._schedule(e)
    })
    d(this, "dispose", () => {
      this._notify.forEach(this._clearTimeout), this._notify.clear()
    })
    ;(this._started = e), (this._setTimeout = s)
  }
  start() {
    return (
      this._started ||
        ((this._started = !0), this._notify.forEach(this._schedule)),
      this
    )
  }
  stop() {
    return (this._started = !1), this._notify.forEach(this._clearTimeout), this
  }
  get isStarted() {
    return this._started
  }
  set isStarted(e) {
    e ? this.start() : this.stop()
  }
  once(e, s) {
    return this._register(e, s, !0)
  }
  interval(e, s) {
    return this._register(e, s, !1)
  }
  at(e, s) {
    return this._register(
      0,
      s,
      !1,
      typeof e == "number" ? new Date(Date.now() + e) : e,
    )
  }
  reschedule() {
    this._notify.forEach((e) => {
      this._clearTimeout(e), this._schedule(e)
    })
  }
  _register(e, s, i, o) {
    if (!e && !o) return () => {}
    const c = { timeout: e, notify: s, once: i, date: o }
    return (
      this._notify.add(c),
      this._schedule(c),
      () => {
        this._clearTimeout(c), this._notify.delete(c)
      }
    )
  }
}
class eg {
  constructor(e = 0, s = 0, i = new tg(), o = gn("busy"), c = gn(!1)) {
    d(this, "unsubNotify")
    d(this, "unsubMessage")
    d(this, "activity", () => {
      this.idleStatus.set("busy"), this.idleScheduler.reschedule()
    })
    d(this, "focus", (e) => {
      this.focusAfterIdle.set(e)
    })
    ;(this._idleNotifyTimeout = e),
      (this._idleMessageTimeout = s),
      (this.idleScheduler = i),
      (this.idleStatus = o),
      (this.focusAfterIdle = c),
      (this.idleNotifyTimeout = e),
      (this.idleMessageTimeout = s)
  }
  set idleMessageTimeout(e) {
    var s
    this._idleMessageTimeout !== e &&
      ((this._idleMessageTimeout = e),
      (s = this.unsubMessage) == null || s.call(this),
      (this.unsubMessage = this.idleScheduler.once(e, () => {
        this.idleStatus.set("idle-message")
      })))
  }
  set idleNotifyTimeout(e) {
    var s
    this._idleNotifyTimeout !== e &&
      ((this._idleNotifyTimeout = e),
      (s = this.unsubNotify) == null || s.call(this),
      (this.unsubNotify = this.idleScheduler.once(e, () => {
        this.idleStatus.set("idle-notify")
      })))
  }
  get idleMessageTimeout() {
    return this._idleMessageTimeout
  }
  get idleNotifyTimeout() {
    return this._idleNotifyTimeout
  }
  get notifyEnabled() {
    return this._idleNotifyTimeout > 0
  }
  get messageEnabled() {
    return this._idleMessageTimeout > 0
  }
  dispose() {
    var e, s
    ;(e = this.unsubNotify) == null || e.call(this),
      (s = this.unsubMessage) == null || s.call(this),
      this.idleScheduler.dispose(),
      this.idleStatus.set("busy"),
      this.focusAfterIdle.set(!1)
  }
}
const Wr = gn("idle")
var ng = ((a) => ((a.manual = "manual"), (a.auto = "auto"), a))(ng || {})
class ChatManager {
  constructor(asyncMsgSender, host, specialContextInputModel, options = {}) {
    d(this, "_state", {
      currentConversationId: void 0,
      conversations: {},
      agentExecutionMode: "manual",
      isAgentEditsCollapsed: !0,
    })
    d(this, "extensionClient")
    d(this, "_chatFlagsModel")
    d(this, "_currConversationModel")
    d(this, "subscribers", new Set())
    d(this, "idleMessageModel", new eg())
    d(this, "isAgentEditsCollapsed")
    d(this, "agentExecutionMode")
    d(this, "sortConversationsBy")
    d(this, "onLoaded", async () => {
      var onLoadedCallback, callbackResult
      const initData = await this.extensionClient.getChatInitData()
      this._chatFlagsModel.update({
        enableEditableHistory: initData.enableEditableHistory ?? !1,
        enablePreferenceCollection: initData.enablePreferenceCollection ?? !1,
        enableRetrievalDataCollection: initData.enableRetrievalDataCollection ?? !1,
        enableDebugFeatures: initData.enableDebugFeatures ?? !1,
        enableRichTextHistory: initData.useRichTextHistory ?? !0,
        modelDisplayNameToId: initData.modelDisplayNameToId ?? {},
        fullFeatured: initData.fullFeatured ?? !0,
        isRemoteAgentWindow: !1,
        remoteAgentId: void 0,
        smallSyncThreshold: initData.smallSyncThreshold ?? 15,
        bigSyncThreshold: initData.bigSyncThreshold ?? 1e3,
        enableExternalSourcesInChat: initData.enableExternalSourcesInChat ?? !1,
        enableSmartPaste: initData.enableSmartPaste ?? !1,
        enableDirectApply: initData.enableDirectApply ?? !1,
        summaryTitles: initData.summaryTitles ?? !1,
        suggestedEditsAvailable: initData.suggestedEditsAvailable ?? !1,
        enableShareService: initData.enableShareService ?? !1,
        maxTrackableFileCount: initData.maxTrackableFileCount ?? el,
        enableDesignSystemRichTextEditor:
          initData.enableDesignSystemRichTextEditor ?? !1,
        enableSources: initData.enableSources ?? !1,
        enableChatMermaidDiagrams: initData.enableChatMermaidDiagrams ?? !1,
        smartPastePrecomputeMode: initData.smartPastePrecomputeMode ?? Jc.visibleHover,
        useNewThreadsMenu: initData.useNewThreadsMenu ?? !1,
        enableChatMermaidDiagramsMinVersion:
          initData.enableChatMermaidDiagramsMinVersion ?? !1,
        idleNewSessionMessageTimeoutMs: initData.idleNewSessionMessageTimeoutMs,
        idleNewSessionNotificationTimeoutMs:
          initData.idleNewSessionNotificationTimeoutMs,
        enableChatMultimodal: initData.enableChatMultimodal ?? !1,
        enableAgentMode: initData.enableAgentMode ?? !1,
        agentMemoriesFilePathName: initData.agentMemoriesFilePathName,
        enableRichCheckpointInfo: initData.enableRichCheckpointInfo ?? !1,
        userTier: initData.userTier ?? "unknown",
        truncateChatHistory: initData.truncateChatHistory ?? !1,
        enableBackgroundAgents: initData.enableBackgroundAgents ?? !1,
        enableVirtualizedMessageList: initData.enableVirtualizedMessageList ?? !1,
        customPersonalityPrompts: initData.customPersonalityPrompts ?? {},
        enablePersonalities: initData.enablePersonalities ?? !1,
        memoryClassificationOnFirstToken:
          initData.memoryClassificationOnFirstToken ?? !1,
        enableGenerateCommitMessage: initData.enableGenerateCommitMessage ?? !1,
      }),
        (callbackResult = (onLoadedCallback = this.options).onLoaded) == null || callbackResult.call(onLoadedCallback),
        this.notifySubscribers(),
        (initData.enableBackgroundAgents ?? !1) &&
          this.extensionClient.getRemoteAgentStatus().then((agentStatus) => {
            this._chatFlagsModel.update({
              isRemoteAgentWindow: agentStatus.isRemoteAgentWindow,
              remoteAgentId: agentStatus.remoteAgentId,
            }),
              this.notifySubscribers()
          })
    })
    d(
      this,
      "subscribe",
      (subscriber) => (
        this.subscribers.add(subscriber),
        subscriber(this),
        () => {
          this.subscribers.delete(subscriber)
        }
      ),
    )
    d(this, "initialize", (initialConversation) => {
      ;(this._state = { ...this._state, ...this._host.getState() }),
        initialConversation && (this._state.conversations[initialConversation == null ? void 0 : initialConversation.id] = initialConversation),
        this._chatFlagsModel.fullFeatured &&
          (((initialConversation == null ? void 0 : initialConversation.id) !== xa &&
            this.currentConversationId !== xa) ||
            (delete this._state.conversations[xa],
            this.setCurrentConversationToWelcome())),
        this._chatFlagsModel.subscribe((flagsModel) => {
          ;(this.idleMessageModel.idleNotifyTimeout =
            flagsModel.idleNewSessionNotificationTimeoutMs),
            (this.idleMessageModel.idleMessageTimeout =
              flagsModel.idleNewSessionMessageTimeoutMs)
        }),
        (this._state.conversations = Object.fromEntries(
          Object.entries(this._state.conversations).filter(([convId, conversation]) =>
            Et.isValid(conversation),
          ),
        )),
        this.initializeIsShareableState(),
        initialConversation
          ? this.setCurrentConversation(initialConversation.id)
          : this.setCurrentConversation(this.currentConversationId),
        this.subscribe(() => this.idleMessageModel.activity()),
        this.setState(this._state)
    })
    d(this, "initializeIsShareableState", () => {
      const conversations = { ...this._state.conversations }
      for (const [convId, conversation] of Object.entries(conversations)) {
        if (conversation.isShareable) continue
        const hasResponse = conversation.chatHistory.some((item) => gs(item))
        conversations[convId] = { ...conversation, isShareable: hasResponse }
      }
      this._state.conversations = conversations
    })
    d(this, "updateChatState", (newState) => {
      this._state = { ...this._state, ...newState }
      const conversations = this._state.conversations,
        pinnedIds = new Set()
      for (const [convId, conversation] of Object.entries(conversations)) conversation.isPinned && pinnedIds.add(convId)
      this.setState(this._state), this.notifySubscribers()
    })
    d(this, "saveImmediate", () => {
      this._host.setState(this._state)
    })
    d(
      this,
      "setState",
      ff(
        (state) => {
          this._host.setState({
            ...state,
            isAgentEditsCollapsed: Us(this.isAgentEditsCollapsed),
            agentExecutionMode: Us(this.agentExecutionMode),
            sortConversationsBy: Us(this.sortConversationsBy),
          })
        },
        1e3,
        { maxWait: 15e3 },
      ),
    )
    d(this, "notifySubscribers", () => {
      this.subscribers.forEach((subscriber) => subscriber(this))
    })
    d(
      this,
      "withWebviewClientEvent",
      (eventName, callback) =>
        (...args) => (this.extensionClient.reportWebviewClientEvent(eventName), callback(...args)),
    )
    d(this, "setCurrentConversationToWelcome", () => {
      this.setCurrentConversation(),
        this._currConversationModel.setName("Welcome to Augment"),
        this._currConversationModel.addChatItem({
          chatItemType: fs.educateFeatures,
          request_id: crypto.randomUUID(),
          seen_state: zt.seen,
        })
    })
    d(this, "popCurrentConversation", async () => {
      var nextConv, prevConv
      const currentId = this.currentConversationId
      currentId &&
        (await this.deleteConversation(
          currentId,
          ((nextConv = this.nextConversation) == null ? void 0 : nextConv.id) ??
            ((prevConv = this.previousConversation) == null ? void 0 : prevConv.id),
        ))
    })
    d(this, "setCurrentConversation", async (conversationId, shouldLoadContext = !0) => {
      let conversation
      conversationId === void 0
        ? (this.deleteInvalidConversations(
            ps(this._currConversationModel) ? "agent" : "chat",
          ),
          (conversation = Et.create({
            personaType: await this._currConversationModel.decidePersonaType(),
          })))
        : (conversation =
            this._state.conversations[conversationId] ??
            Et.create({
              personaType:
                await this._currConversationModel.decidePersonaType(),
            }))
      const isNewConversation = this.conversations[this._currConversationModel.id] === void 0
      this._currConversationModel.setConversation(conversation, !isNewConversation, shouldLoadContext),
        this._currConversationModel.recoverAllExchanges(),
        this._currConversationModel.resetTotalCharactersCache()
    })
    d(this, "saveConversation", (conversation) => {
      this.updateChatState({
        conversations: { ...this._state.conversations, [conversation.id]: conversation },
        currentConversationId: conversation.id,
      })
    })
    d(this, "isConversationShareable", (conversationId) => {
      var conversation
      return (
        ((conversation = this._state.conversations[conversationId]) == null ? void 0 : conversation.isShareable) ??
        !0
      )
    })
    d(this, "setSortConversationsBy", (sortBy) => {
      this.sortConversationsBy.set(sortBy), this.updateChatState({})
    })
    d(this, "getConversationUrl", async (conversationId) => {
      const conversation = this._state.conversations[conversationId]
      if (conversation.lastUrl) return conversation.lastUrl
      Wr.set("copying")
      const chatHistory = conversation == null ? void 0 : conversation.chatHistory,
        exchanges = chatHistory.reduce(
          (result, item) => (
            gs(item) &&
              result.push({
                request_id: item.request_id || "",
                request_message: item.request_message,
                response_text: item.response_text || "",
              }),
            result
          ),
          [],
        )
      if (exchanges.length === 0) throw new Error("No chat history to share")
      const displayName = Et.getDisplayName(conversation),
        response = await this.extensionClient.saveChat(conversationId, exchanges, displayName)
      if (response.data) {
        let url = response.data.url
        return (
          this.updateChatState({
            conversations: {
              ...this._state.conversations,
              [conversationId]: { ...conversation, lastUrl: url },
            },
          }),
          url
        )
      }
      throw new Error("Failed to create URL")
    })
    d(this, "shareConversation", async (conversationId) => {
      if (conversationId !== void 0)
        try {
          const url = await this.getConversationUrl(conversationId)
          if (!url) return void Wr.set("idle")
          navigator.clipboard.writeText(url), Wr.set("copied")
        } catch {
          Wr.set("failed")
        }
    })
    d(this, "deleteConversations", async (conversationIds, nextConversationId = void 0) => {
      if (
        await this.extensionClient.openConfirmationModal({
          title: "Delete Conversation",
          message: `Are you sure you want to delete ${conversationIds.length > 1 ? "these conversations" : "this conversation"}?`,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
        })
      ) {
        const idsToDelete = new Set(conversationIds)
        this.deleteConversationIds(idsToDelete),
          this.currentConversationId &&
            idsToDelete.has(this.currentConversationId) &&
            this.setCurrentConversation(nextConversationId)
      }
    })
    d(this, "deleteConversation", async (conversationId, nextConversationId = void 0) => {
      await this.deleteConversations([conversationId], nextConversationId)
    })
    d(this, "deleteConversationIds", async (conversationIds) => {
      var conversation
      const requestIds = []
      for (const convId of conversationIds) {
        const ids =
          ((conversation = this._state.conversations[convId]) == null
            ? void 0
            : conversation.requestIds) ?? []
        requestIds.push(...ids)
      }
      for (const conversation of Object.values(this._state.conversations))
        if (conversationIds.has(conversation.id)) {
          for (const exchange of conversation.chatHistory) Ae(exchange) && this.deleteImagesInExchange(exchange)
          const draftExchange = conversation.draftExchange
          draftExchange && this.deleteImagesInExchange(draftExchange)
        }
      this.updateChatState({
        conversations: Object.fromEntries(
          Object.entries(this._state.conversations).filter(([convId]) => !conversationIds.has(convId)),
        ),
      }),
        this.extensionClient.clearMetadataFor({
          requestIds: requestIds,
          conversationIds: Array.from(conversationIds),
        })
    })
    d(this, "deleteImagesInExchange", (exchange) => {
      const imageIds = new Set([
        ...(exchange.rich_text_json_repr
          ? this.findImagesInJson(exchange.rich_text_json_repr)
          : []),
        ...(exchange.structured_request_nodes
          ? this.findImagesInStructuredRequest(exchange.structured_request_nodes)
          : []),
      ])
      for (const imageId of imageIds) this.deleteImage(imageId)
    })
    d(this, "findImagesInJson", (jsonData) => {
      const imageIds = [],
        processNode = (node) => {
          var attrs
          if (node.type === "image" && (attrs = node.attrs) != null && attrs.src)
            imageIds.push(node.attrs.src)
          else if ((node.type === "doc" || node.type === "paragraph") && node.content)
            for (const childNode of node.content) processNode(childNode)
        }
      return processNode(jsonData), imageIds
    })
    d(this, "findImagesInStructuredRequest", (nodes) =>
      nodes.reduce(
        (imageIds, node) => (
          node.type === ee.IMAGE_ID &&
            node.image_id_node &&
            imageIds.push(node.image_id_node.image_id),
          imageIds
        ),
        [],
      ),
    )
    d(this, "toggleConversationPinned", (conversationId) => {
      const conversation = this._state.conversations[conversationId],
        updatedConversation = { ...conversation, isPinned: !conversation.isPinned }
      this.updateChatState({
        conversations: { ...this._state.conversations, [conversationId]: updatedConversation },
      }),
        conversationId === this.currentConversationId &&
          this._currConversationModel.toggleIsPinned()
    })
    d(this, "renameConversation", (conversationId, newName) => {
      const updatedConversation = { ...this._state.conversations[conversationId], name: newName }
      this.updateChatState({
        conversations: { ...this._state.conversations, [conversationId]: updatedConversation },
      }),
        conversationId === this.currentConversationId &&
          this._currConversationModel.setName(newName)
    })
    d(this, "smartPaste", (requestId, generatedCode, targetFile, options) => {
      const chatHistory = this._currConversationModel
        .historyTo(requestId, !0)
        .filter((item) => gs(item))
        .map((exchange) => ({
          request_message: exchange.request_message,
          response_text: exchange.response_text || "",
          request_id: exchange.request_id || "",
        }))
      this.extensionClient.smartPaste({
        generatedCode: generatedCode,
        chatHistory: chatHistory,
        targetFile: targetFile ?? void 0,
        options: options,
      })
    })
    d(this, "saveImage", async (imageData) => await this.extensionClient.saveImage(imageData))
    d(
      this,
      "deleteImage",
      async (imageId) => await this.extensionClient.deleteImage(imageId),
    )
    d(this, "renderImage", async (imageId) => await this.extensionClient.loadImage(imageId))
    ;(this._asyncMsgSender = asyncMsgSender),
      (this._host = host),
      (this._specialContextInputModel = specialContextInputModel),
      (this.options = options),
      (this._chatFlagsModel = new Wf(options.initialFlags)),
      (this.extensionClient = new Nf(
        this._host,
        this._asyncMsgSender,
        this._chatFlagsModel,
      )),
      (this._currConversationModel = new Et(
        this.extensionClient,
        this._chatFlagsModel,
        this._specialContextInputModel,
        this.saveConversation,
      )),
      this.initialize(options.initialConversation),
      (this.isAgentEditsCollapsed = gn(this._state.isAgentEditsCollapsed)),
      (this.agentExecutionMode = gn(
        this._state.agentExecutionMode ?? "manual",
      )),
      (this.sortConversationsBy = gn(
        this._state.sortConversationsBy ?? "lastMessageTimestamp",
      )),
      this.onLoaded()
  }
  get flags() {
    return this._chatFlagsModel
  }
  get specialContextInputModel() {
    return this._specialContextInputModel
  }
  get currentConversationId() {
    return this._state.currentConversationId
  }
  get currentConversationModel() {
    return this._currConversationModel
  }
  get conversations() {
    return this._state.conversations
  }
  orderedConversations(sortBy, sortDirection = "desc", filterFn) {
    const sortField = sortBy || this._state.sortConversationsBy || "lastMessageTimestamp"
    let conversationList = Object.values(this._state.conversations)
    return (
      filterFn && (conversationList = conversationList.filter(filterFn)),
      conversationList.sort((convA, convB) => {
        const timeA = Et.getTime(convA, sortField).getTime(),
          timeB = Et.getTime(convB, sortField).getTime()
        return sortDirection === "asc" ? timeA - timeB : timeB - timeA
      })
    )
  }
  get nextConversation() {
    if (!this.currentConversationId) return
    const orderedConvs = this.orderedConversations(),
      currentIndex = orderedConvs.findIndex((conv) => conv.id === this.currentConversationId)
    return orderedConvs.length > currentIndex + 1 ? orderedConvs[currentIndex + 1] : void 0
  }
  get previousConversation() {
    if (!this.currentConversationId) return
    const orderedConvs = this.orderedConversations(),
      currentIndex = orderedConvs.findIndex((conv) => conv.id === this.currentConversationId)
    return currentIndex > 0 ? orderedConvs[currentIndex - 1] : void 0
  }
  get host() {
    return this._host
  }
  deleteInvalidConversations(type = "all") {
    const invalidIds = Object.keys(this.conversations).filter((convId) => {
      const isInvalid = !Et.isValid(this.conversations[convId]),
        c = ps(this.conversations[convId])
      return isInvalid && ((type === "agent" && isAgentConv) || (type === "chat" && !isAgentConv) || type === "all")
    })
    invalidIds.length && this.deleteConversationIds(new Set(invalidIds))
  }
  get lastMessageTimestamp() {
    const lastExchange = this.currentConversationModel.lastExchange
    return lastExchange == null ? void 0 : lastExchange.timestamp
  }
  handleMessageFromExtension(message) {
    return message.data.type === T.newThread && (this.setCurrentConversation(), !0)
  }
}
const hs =
    typeof performance == "object" &&
    performance &&
    typeof performance.now == "function"
      ? performance
      : Date,
  Uc = new Set(),
  Da = typeof process == "object" && process ? process : {},
  rl = (a, e, s, i) => {
    typeof Da.emitWarning == "function"
      ? Da.emitWarning(a, e, s, i)
      : console.error(`[${s}] ${e}: ${a}`)
  }
let Qr = globalThis.AbortController,
  Hc = globalThis.AbortSignal
var Gc
if (Qr === void 0) {
  ;(Hc = class {
    constructor() {
      d(this, "onabort")
      d(this, "_onabort", [])
      d(this, "reason")
      d(this, "aborted", !1)
    }
    addEventListener(s, i) {
      this._onabort.push(i)
    }
  }),
    (Qr = class {
      constructor() {
        d(this, "signal", new Hc())
        e()
      }
      abort(s) {
        var i, o
        if (!this.signal.aborted) {
          ;(this.signal.reason = s), (this.signal.aborted = !0)
          for (const c of this.signal._onabort) c(s)
          ;(o = (i = this.signal).onabort) == null || o.call(i, s)
        }
      }
    })
  let a =
    ((Gc = Da.env) == null ? void 0 : Gc.LRU_CACHE_IGNORE_AC_WARNING) !== "1"
  const e = () => {
    a &&
      ((a = !1),
      rl(
        "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
        "NO_ABORT_CONTROLLER",
        "ENOTSUP",
        e,
      ))
  }
}
const Mn = (a) => a && a === Math.floor(a) && a > 0 && isFinite(a),
  il = (a) =>
    Mn(a)
      ? a <= Math.pow(2, 8)
        ? Uint8Array
        : a <= Math.pow(2, 16)
          ? Uint16Array
          : a <= Math.pow(2, 32)
            ? Uint32Array
            : a <= Number.MAX_SAFE_INTEGER
              ? Jr
              : null
      : null
class Jr extends Array {
  constructor(e) {
    super(e), this.fill(0)
  }
}
var _s
const Wn = class Wn {
  constructor(e, s) {
    d(this, "heap")
    d(this, "length")
    if (!p(Wn, _s))
      throw new TypeError("instantiate Stack using Stack.create(n)")
    ;(this.heap = new s(e)), (this.length = 0)
  }
  static create(e) {
    const s = il(e)
    if (!s) return []
    V(Wn, _s, !0)
    const i = new Wn(e, s)
    return V(Wn, _s, !1), i
  }
  push(e) {
    this.heap[this.length++] = e
  }
  pop() {
    return this.heap[--this.length]
  }
}
;(_s = new WeakMap()), ct(Wn, _s, !1)
let qa = Wn
var Vc,
  Zc,
  Ne,
  Se,
  $e,
  je,
  ms,
  ys,
  Ut,
  ze,
  Dt,
  xt,
  nt,
  ie,
  we,
  Qt,
  Nt,
  We,
  $t,
  Be,
  Ge,
  Ce,
  Ve,
  Fn,
  ae,
  D,
  ka,
  Bn,
  fn,
  Ws,
  xe,
  al,
  Gn,
  vs,
  Bs,
  En,
  Tn,
  La,
  Yr,
  Kr,
  Ct,
  Ua,
  Ls,
  Rn,
  Ha
const Ba = class Ba {
  constructor(e) {
    ct(this, D)
    ct(this, Ne)
    ct(this, Se)
    ct(this, $e)
    ct(this, je)
    ct(this, ms)
    ct(this, ys)
    d(this, "ttl")
    d(this, "ttlResolution")
    d(this, "ttlAutopurge")
    d(this, "updateAgeOnGet")
    d(this, "updateAgeOnHas")
    d(this, "allowStale")
    d(this, "noDisposeOnSet")
    d(this, "noUpdateTTL")
    d(this, "maxEntrySize")
    d(this, "sizeCalculation")
    d(this, "noDeleteOnFetchRejection")
    d(this, "noDeleteOnStaleGet")
    d(this, "allowStaleOnFetchAbort")
    d(this, "allowStaleOnFetchRejection")
    d(this, "ignoreFetchAbort")
    ct(this, Ut)
    ct(this, ze)
    ct(this, Dt)
    ct(this, xt)
    ct(this, nt)
    ct(this, ie)
    ct(this, we)
    ct(this, Qt)
    ct(this, Nt)
    ct(this, We)
    ct(this, $t)
    ct(this, Be)
    ct(this, Ge)
    ct(this, Ce)
    ct(this, Ve)
    ct(this, Fn)
    ct(this, ae)
    ct(this, Bn, () => {})
    ct(this, fn, () => {})
    ct(this, Ws, () => {})
    ct(this, xe, () => !1)
    ct(this, Gn, (e) => {})
    ct(this, vs, (e, s, i) => {})
    ct(this, Bs, (e, s, i, o) => {
      if (i || o)
        throw new TypeError(
          "cannot set size without setting maxSize or maxEntrySize on cache",
        )
      return 0
    })
    d(this, Vc, "LRUCache")
    const {
      max: s = 0,
      ttl: i,
      ttlResolution: o = 1,
      ttlAutopurge: c,
      updateAgeOnGet: f,
      updateAgeOnHas: m,
      allowStale: v,
      dispose: C,
      disposeAfter: E,
      noDisposeOnSet: P,
      noUpdateTTL: X,
      maxSize: z = 0,
      maxEntrySize: H = 0,
      sizeCalculation: W,
      fetchMethod: Q,
      memoMethod: $,
      noDeleteOnFetchRejection: dt,
      noDeleteOnStaleGet: Zt,
      allowStaleOnFetchRejection: Jt,
      allowStaleOnFetchAbort: pt,
      ignoreFetchAbort: le,
    } = e
    if (s !== 0 && !Mn(s))
      throw new TypeError("max option must be a nonnegative integer")
    const Y = s ? il(s) : Array
    if (!Y) throw new Error("invalid max value: " + s)
    if (
      (V(this, Ne, s),
      V(this, Se, z),
      (this.maxEntrySize = H || p(this, Se)),
      (this.sizeCalculation = W),
      this.sizeCalculation)
    ) {
      if (!p(this, Se) && !this.maxEntrySize)
        throw new TypeError(
          "cannot set sizeCalculation without setting maxSize or maxEntrySize",
        )
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function")
    }
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("memoMethod must be a function if defined")
    if ((V(this, ys, $), Q !== void 0 && typeof Q != "function"))
      throw new TypeError("fetchMethod must be a function if specified")
    if (
      (V(this, ms, Q),
      V(this, Fn, !!Q),
      V(this, Dt, new Map()),
      V(this, xt, new Array(s).fill(void 0)),
      V(this, nt, new Array(s).fill(void 0)),
      V(this, ie, new Y(s)),
      V(this, we, new Y(s)),
      V(this, Qt, 0),
      V(this, Nt, 0),
      V(this, We, qa.create(s)),
      V(this, Ut, 0),
      V(this, ze, 0),
      typeof C == "function" && V(this, $e, C),
      typeof E == "function"
        ? (V(this, je, E), V(this, $t, []))
        : (V(this, je, void 0), V(this, $t, void 0)),
      V(this, Ve, !!p(this, $e)),
      V(this, ae, !!p(this, je)),
      (this.noDisposeOnSet = !!P),
      (this.noUpdateTTL = !!X),
      (this.noDeleteOnFetchRejection = !!dt),
      (this.allowStaleOnFetchRejection = !!Jt),
      (this.allowStaleOnFetchAbort = !!pt),
      (this.ignoreFetchAbort = !!le),
      this.maxEntrySize !== 0)
    ) {
      if (p(this, Se) !== 0 && !Mn(p(this, Se)))
        throw new TypeError("maxSize must be a positive integer if specified")
      if (!Mn(this.maxEntrySize))
        throw new TypeError(
          "maxEntrySize must be a positive integer if specified",
        )
      L(this, D, al).call(this)
    }
    if (
      ((this.allowStale = !!v),
      (this.noDeleteOnStaleGet = !!Zt),
      (this.updateAgeOnGet = !!f),
      (this.updateAgeOnHas = !!m),
      (this.ttlResolution = Mn(o) || o === 0 ? o : 1),
      (this.ttlAutopurge = !!c),
      (this.ttl = i || 0),
      this.ttl)
    ) {
      if (!Mn(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified")
      L(this, D, ka).call(this)
    }
    if (p(this, Ne) === 0 && this.ttl === 0 && p(this, Se) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required")
    if (!this.ttlAutopurge && !p(this, Ne) && !p(this, Se)) {
      const _t = "LRU_CACHE_UNBOUNDED"
      ;((ot) => !Uc.has(ot))(_t) &&
        (Uc.add(_t),
        rl(
          "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
          "UnboundedCacheWarning",
          _t,
          Ba,
        ))
    }
  }
  static unsafeExposeInternals(e) {
    return {
      starts: p(e, Ge),
      ttls: p(e, Ce),
      sizes: p(e, Be),
      keyMap: p(e, Dt),
      keyList: p(e, xt),
      valList: p(e, nt),
      next: p(e, ie),
      prev: p(e, we),
      get head() {
        return p(e, Qt)
      },
      get tail() {
        return p(e, Nt)
      },
      free: p(e, We),
      isBackgroundFetch: (s) => {
        var i
        return L((i = e), D, Ct).call(i, s)
      },
      backgroundFetch: (s, i, o, c) => {
        var f
        return L((f = e), D, Kr).call(f, s, i, o, c)
      },
      moveToTail: (s) => {
        var i
        return L((i = e), D, Ls).call(i, s)
      },
      indexes: (s) => {
        var i
        return L((i = e), D, En).call(i, s)
      },
      rindexes: (s) => {
        var i
        return L((i = e), D, Tn).call(i, s)
      },
      isStale: (s) => {
        var i
        return p((i = e), xe).call(i, s)
      },
    }
  }
  get max() {
    return p(this, Ne)
  }
  get maxSize() {
    return p(this, Se)
  }
  get calculatedSize() {
    return p(this, ze)
  }
  get size() {
    return p(this, Ut)
  }
  get fetchMethod() {
    return p(this, ms)
  }
  get memoMethod() {
    return p(this, ys)
  }
  get dispose() {
    return p(this, $e)
  }
  get disposeAfter() {
    return p(this, je)
  }
  getRemainingTTL(e) {
    return p(this, Dt).has(e) ? 1 / 0 : 0
  }
  *entries() {
    for (const e of L(this, D, En).call(this))
      p(this, nt)[e] === void 0 ||
        p(this, xt)[e] === void 0 ||
        L(this, D, Ct).call(this, p(this, nt)[e]) ||
        (yield [p(this, xt)[e], p(this, nt)[e]])
  }
  *rentries() {
    for (const e of L(this, D, Tn).call(this))
      p(this, nt)[e] === void 0 ||
        p(this, xt)[e] === void 0 ||
        L(this, D, Ct).call(this, p(this, nt)[e]) ||
        (yield [p(this, xt)[e], p(this, nt)[e]])
  }
  *keys() {
    for (const e of L(this, D, En).call(this)) {
      const s = p(this, xt)[e]
      s === void 0 || L(this, D, Ct).call(this, p(this, nt)[e]) || (yield s)
    }
  }
  *rkeys() {
    for (const e of L(this, D, Tn).call(this)) {
      const s = p(this, xt)[e]
      s === void 0 || L(this, D, Ct).call(this, p(this, nt)[e]) || (yield s)
    }
  }
  *values() {
    for (const e of L(this, D, En).call(this))
      p(this, nt)[e] === void 0 ||
        L(this, D, Ct).call(this, p(this, nt)[e]) ||
        (yield p(this, nt)[e])
  }
  *rvalues() {
    for (const e of L(this, D, Tn).call(this))
      p(this, nt)[e] === void 0 ||
        L(this, D, Ct).call(this, p(this, nt)[e]) ||
        (yield p(this, nt)[e])
  }
  [((Zc = Symbol.iterator), (Vc = Symbol.toStringTag), Zc)]() {
    return this.entries()
  }
  find(e, s = {}) {
    for (const i of L(this, D, En).call(this)) {
      const o = p(this, nt)[i],
        c = L(this, D, Ct).call(this, o) ? o.__staleWhileFetching : o
      if (c !== void 0 && e(c, p(this, xt)[i], this))
        return this.get(p(this, xt)[i], s)
    }
  }
  forEach(e, s = this) {
    for (const i of L(this, D, En).call(this)) {
      const o = p(this, nt)[i],
        c = L(this, D, Ct).call(this, o) ? o.__staleWhileFetching : o
      c !== void 0 && e.call(s, c, p(this, xt)[i], this)
    }
  }
  rforEach(e, s = this) {
    for (const i of L(this, D, Tn).call(this)) {
      const o = p(this, nt)[i],
        c = L(this, D, Ct).call(this, o) ? o.__staleWhileFetching : o
      c !== void 0 && e.call(s, c, p(this, xt)[i], this)
    }
  }
  purgeStale() {
    let e = !1
    for (const s of L(this, D, Tn).call(this, { allowStale: !0 }))
      p(this, xe).call(this, s) &&
        (L(this, D, Rn).call(this, p(this, xt)[s], "expire"), (e = !0))
    return e
  }
  info(e) {
    const s = p(this, Dt).get(e)
    if (s === void 0) return
    const i = p(this, nt)[s],
      o = L(this, D, Ct).call(this, i) ? i.__staleWhileFetching : i
    if (o === void 0) return
    const c = { value: o }
    if (p(this, Ce) && p(this, Ge)) {
      const f = p(this, Ce)[s],
        m = p(this, Ge)[s]
      if (f && m) {
        const v = f - (hs.now() - m)
        ;(c.ttl = v), (c.start = Date.now())
      }
    }
    return p(this, Be) && (c.size = p(this, Be)[s]), c
  }
  dump() {
    const e = []
    for (const s of L(this, D, En).call(this, { allowStale: !0 })) {
      const i = p(this, xt)[s],
        o = p(this, nt)[s],
        c = L(this, D, Ct).call(this, o) ? o.__staleWhileFetching : o
      if (c === void 0 || i === void 0) continue
      const f = { value: c }
      if (p(this, Ce) && p(this, Ge)) {
        f.ttl = p(this, Ce)[s]
        const m = hs.now() - p(this, Ge)[s]
        f.start = Math.floor(Date.now() - m)
      }
      p(this, Be) && (f.size = p(this, Be)[s]), e.unshift([i, f])
    }
    return e
  }
  load(e) {
    this.clear()
    for (const [s, i] of e) {
      if (i.start) {
        const o = Date.now() - i.start
        i.start = hs.now() - o
      }
      this.set(s, i.value, i)
    }
  }
  set(e, s, i = {}) {
    var X, z, H, W, Q
    if (s === void 0) return this.delete(e), this
    const {
      ttl: o = this.ttl,
      start: c,
      noDisposeOnSet: f = this.noDisposeOnSet,
      sizeCalculation: m = this.sizeCalculation,
      status: v,
    } = i
    let { noUpdateTTL: C = this.noUpdateTTL } = i
    const E = p(this, Bs).call(this, e, s, i.size || 0, m)
    if (this.maxEntrySize && E > this.maxEntrySize)
      return (
        v && ((v.set = "miss"), (v.maxEntrySizeExceeded = !0)),
        L(this, D, Rn).call(this, e, "set"),
        this
      )
    let P = p(this, Ut) === 0 ? void 0 : p(this, Dt).get(e)
    if (P === void 0)
      (P =
        p(this, Ut) === 0
          ? p(this, Nt)
          : p(this, We).length !== 0
            ? p(this, We).pop()
            : p(this, Ut) === p(this, Ne)
              ? L(this, D, Yr).call(this, !1)
              : p(this, Ut)),
        (p(this, xt)[P] = e),
        (p(this, nt)[P] = s),
        p(this, Dt).set(e, P),
        (p(this, ie)[p(this, Nt)] = P),
        (p(this, we)[P] = p(this, Nt)),
        V(this, Nt, P),
        $r(this, Ut)._++,
        p(this, vs).call(this, P, E, v),
        v && (v.set = "add"),
        (C = !1)
    else {
      L(this, D, Ls).call(this, P)
      const $ = p(this, nt)[P]
      if (s !== $) {
        if (p(this, Fn) && L(this, D, Ct).call(this, $)) {
          $.__abortController.abort(new Error("replaced"))
          const { __staleWhileFetching: dt } = $
          dt === void 0 ||
            f ||
            (p(this, Ve) &&
              ((X = p(this, $e)) == null || X.call(this, dt, e, "set")),
            p(this, ae) &&
              ((z = p(this, $t)) == null || z.push([dt, e, "set"])))
        } else
          f ||
            (p(this, Ve) &&
              ((H = p(this, $e)) == null || H.call(this, $, e, "set")),
            p(this, ae) && ((W = p(this, $t)) == null || W.push([$, e, "set"])))
        if (
          (p(this, Gn).call(this, P),
          p(this, vs).call(this, P, E, v),
          (p(this, nt)[P] = s),
          v)
        ) {
          v.set = "replace"
          const dt =
            $ && L(this, D, Ct).call(this, $) ? $.__staleWhileFetching : $
          dt !== void 0 && (v.oldValue = dt)
        }
      } else v && (v.set = "update")
    }
    if (
      (o === 0 || p(this, Ce) || L(this, D, ka).call(this),
      p(this, Ce) &&
        (C || p(this, Ws).call(this, P, o, c),
        v && p(this, fn).call(this, v, P)),
      !f && p(this, ae) && p(this, $t))
    ) {
      const $ = p(this, $t)
      let dt
      for (; (dt = $ == null ? void 0 : $.shift()); )
        (Q = p(this, je)) == null || Q.call(this, ...dt)
    }
    return this
  }
  pop() {
    var e
    try {
      for (; p(this, Ut); ) {
        const s = p(this, nt)[p(this, Qt)]
        if ((L(this, D, Yr).call(this, !0), L(this, D, Ct).call(this, s))) {
          if (s.__staleWhileFetching) return s.__staleWhileFetching
        } else if (s !== void 0) return s
      }
    } finally {
      if (p(this, ae) && p(this, $t)) {
        const s = p(this, $t)
        let i
        for (; (i = s == null ? void 0 : s.shift()); )
          (e = p(this, je)) == null || e.call(this, ...i)
      }
    }
  }
  has(e, s = {}) {
    const { updateAgeOnHas: i = this.updateAgeOnHas, status: o } = s,
      c = p(this, Dt).get(e)
    if (c !== void 0) {
      const f = p(this, nt)[c]
      if (L(this, D, Ct).call(this, f) && f.__staleWhileFetching === void 0)
        return !1
      if (!p(this, xe).call(this, c))
        return (
          i && p(this, Bn).call(this, c),
          o && ((o.has = "hit"), p(this, fn).call(this, o, c)),
          !0
        )
      o && ((o.has = "stale"), p(this, fn).call(this, o, c))
    } else o && (o.has = "miss")
    return !1
  }
  peek(e, s = {}) {
    const { allowStale: i = this.allowStale } = s,
      o = p(this, Dt).get(e)
    if (o === void 0 || (!i && p(this, xe).call(this, o))) return
    const c = p(this, nt)[o]
    return L(this, D, Ct).call(this, c) ? c.__staleWhileFetching : c
  }
  async fetch(e, s = {}) {
    const {
      allowStale: i = this.allowStale,
      updateAgeOnGet: o = this.updateAgeOnGet,
      noDeleteOnStaleGet: c = this.noDeleteOnStaleGet,
      ttl: f = this.ttl,
      noDisposeOnSet: m = this.noDisposeOnSet,
      size: v = 0,
      sizeCalculation: C = this.sizeCalculation,
      noUpdateTTL: E = this.noUpdateTTL,
      noDeleteOnFetchRejection: P = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: X = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: z = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: H = this.allowStaleOnFetchAbort,
      context: W,
      forceRefresh: Q = !1,
      status: $,
      signal: dt,
    } = s
    if (!p(this, Fn))
      return (
        $ && ($.fetch = "get"),
        this.get(e, {
          allowStale: i,
          updateAgeOnGet: o,
          noDeleteOnStaleGet: c,
          status: $,
        })
      )
    const Zt = {
      allowStale: i,
      updateAgeOnGet: o,
      noDeleteOnStaleGet: c,
      ttl: f,
      noDisposeOnSet: m,
      size: v,
      sizeCalculation: C,
      noUpdateTTL: E,
      noDeleteOnFetchRejection: P,
      allowStaleOnFetchRejection: X,
      allowStaleOnFetchAbort: H,
      ignoreFetchAbort: z,
      status: $,
      signal: dt,
    }
    let Jt = p(this, Dt).get(e)
    if (Jt === void 0) {
      $ && ($.fetch = "miss")
      const pt = L(this, D, Kr).call(this, e, Jt, Zt, W)
      return (pt.__returned = pt)
    }
    {
      const pt = p(this, nt)[Jt]
      if (L(this, D, Ct).call(this, pt)) {
        const ot = i && pt.__staleWhileFetching !== void 0
        return (
          $ && (($.fetch = "inflight"), ot && ($.returnedStale = !0)),
          ot ? pt.__staleWhileFetching : (pt.__returned = pt)
        )
      }
      const le = p(this, xe).call(this, Jt)
      if (!Q && !le)
        return (
          $ && ($.fetch = "hit"),
          L(this, D, Ls).call(this, Jt),
          o && p(this, Bn).call(this, Jt),
          $ && p(this, fn).call(this, $, Jt),
          pt
        )
      const Y = L(this, D, Kr).call(this, e, Jt, Zt, W),
        _t = Y.__staleWhileFetching !== void 0 && i
      return (
        $ &&
          (($.fetch = le ? "stale" : "refresh"),
          _t && le && ($.returnedStale = !0)),
        _t ? Y.__staleWhileFetching : (Y.__returned = Y)
      )
    }
  }
  async forceFetch(e, s = {}) {
    const i = await this.fetch(e, s)
    if (i === void 0) throw new Error("fetch() returned undefined")
    return i
  }
  memo(e, s = {}) {
    const i = p(this, ys)
    if (!i) throw new Error("no memoMethod provided to constructor")
    const { context: o, forceRefresh: c, ...f } = s,
      m = this.get(e, f)
    if (!c && m !== void 0) return m
    const v = i(e, m, { options: f, context: o })
    return this.set(e, v, f), v
  }
  get(e, s = {}) {
    const {
        allowStale: i = this.allowStale,
        updateAgeOnGet: o = this.updateAgeOnGet,
        noDeleteOnStaleGet: c = this.noDeleteOnStaleGet,
        status: f,
      } = s,
      m = p(this, Dt).get(e)
    if (m !== void 0) {
      const v = p(this, nt)[m],
        C = L(this, D, Ct).call(this, v)
      return (
        f && p(this, fn).call(this, f, m),
        p(this, xe).call(this, m)
          ? (f && (f.get = "stale"),
            C
              ? (f &&
                  i &&
                  v.__staleWhileFetching !== void 0 &&
                  (f.returnedStale = !0),
                i ? v.__staleWhileFetching : void 0)
              : (c || L(this, D, Rn).call(this, e, "expire"),
                f && i && (f.returnedStale = !0),
                i ? v : void 0))
          : (f && (f.get = "hit"),
            C
              ? v.__staleWhileFetching
              : (L(this, D, Ls).call(this, m),
                o && p(this, Bn).call(this, m),
                v))
      )
    }
    f && (f.get = "miss")
  }
  delete(e) {
    return L(this, D, Rn).call(this, e, "delete")
  }
  clear() {
    return L(this, D, Ha).call(this, "delete")
  }
}
;(Ne = new WeakMap()),
  (Se = new WeakMap()),
  ($e = new WeakMap()),
  (je = new WeakMap()),
  (ms = new WeakMap()),
  (ys = new WeakMap()),
  (Ut = new WeakMap()),
  (ze = new WeakMap()),
  (Dt = new WeakMap()),
  (xt = new WeakMap()),
  (nt = new WeakMap()),
  (ie = new WeakMap()),
  (we = new WeakMap()),
  (Qt = new WeakMap()),
  (Nt = new WeakMap()),
  (We = new WeakMap()),
  ($t = new WeakMap()),
  (Be = new WeakMap()),
  (Ge = new WeakMap()),
  (Ce = new WeakMap()),
  (Ve = new WeakMap()),
  (Fn = new WeakMap()),
  (ae = new WeakMap()),
  (D = new WeakSet()),
  (ka = function () {
    const e = new Jr(p(this, Ne)),
      s = new Jr(p(this, Ne))
    V(this, Ce, e),
      V(this, Ge, s),
      V(this, Ws, (c, f, m = hs.now()) => {
        if (
          ((s[c] = f !== 0 ? m : 0), (e[c] = f), f !== 0 && this.ttlAutopurge)
        ) {
          const v = setTimeout(() => {
            p(this, xe).call(this, c) &&
              L(this, D, Rn).call(this, p(this, xt)[c], "expire")
          }, f + 1)
          v.unref && v.unref()
        }
      }),
      V(this, Bn, (c) => {
        s[c] = e[c] !== 0 ? hs.now() : 0
      }),
      V(this, fn, (c, f) => {
        if (e[f]) {
          const m = e[f],
            v = s[f]
          if (!m || !v) return
          ;(c.ttl = m), (c.start = v), (c.now = i || o())
          const C = c.now - v
          c.remainingTTL = m - C
        }
      })
    let i = 0
    const o = () => {
      const c = hs.now()
      if (this.ttlResolution > 0) {
        i = c
        const f = setTimeout(() => (i = 0), this.ttlResolution)
        f.unref && f.unref()
      }
      return c
    }
    ;(this.getRemainingTTL = (c) => {
      const f = p(this, Dt).get(c)
      if (f === void 0) return 0
      const m = e[f],
        v = s[f]
      return !m || !v ? 1 / 0 : m - ((i || o()) - v)
    }),
      V(this, xe, (c) => {
        const f = s[c],
          m = e[c]
        return !!m && !!f && (i || o()) - f > m
      })
  }),
  (Bn = new WeakMap()),
  (fn = new WeakMap()),
  (Ws = new WeakMap()),
  (xe = new WeakMap()),
  (al = function () {
    const e = new Jr(p(this, Ne))
    V(this, ze, 0),
      V(this, Be, e),
      V(this, Gn, (s) => {
        V(this, ze, p(this, ze) - e[s]), (e[s] = 0)
      }),
      V(this, Bs, (s, i, o, c) => {
        if (L(this, D, Ct).call(this, i)) return 0
        if (!Mn(o)) {
          if (!c)
            throw new TypeError(
              "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.",
            )
          if (typeof c != "function")
            throw new TypeError("sizeCalculation must be a function")
          if (((o = c(i, s)), !Mn(o)))
            throw new TypeError(
              "sizeCalculation return invalid (expect positive integer)",
            )
        }
        return o
      }),
      V(this, vs, (s, i, o) => {
        if (((e[s] = i), p(this, Se))) {
          const c = p(this, Se) - e[s]
          for (; p(this, ze) > c; ) L(this, D, Yr).call(this, !0)
        }
        V(this, ze, p(this, ze) + e[s]),
          o && ((o.entrySize = i), (o.totalCalculatedSize = p(this, ze)))
      })
  }),
  (Gn = new WeakMap()),
  (vs = new WeakMap()),
  (Bs = new WeakMap()),
  (En = function* ({ allowStale: e = this.allowStale } = {}) {
    if (p(this, Ut))
      for (
        let s = p(this, Nt);
        L(this, D, La).call(this, s) &&
        ((!e && p(this, xe).call(this, s)) || (yield s), s !== p(this, Qt));

      )
        s = p(this, we)[s]
  }),
  (Tn = function* ({ allowStale: e = this.allowStale } = {}) {
    if (p(this, Ut))
      for (
        let s = p(this, Qt);
        L(this, D, La).call(this, s) &&
        ((!e && p(this, xe).call(this, s)) || (yield s), s !== p(this, Nt));

      )
        s = p(this, ie)[s]
  }),
  (La = function (e) {
    return e !== void 0 && p(this, Dt).get(p(this, xt)[e]) === e
  }),
  (Yr = function (e) {
    var c, f
    const s = p(this, Qt),
      i = p(this, xt)[s],
      o = p(this, nt)[s]
    return (
      p(this, Fn) && L(this, D, Ct).call(this, o)
        ? o.__abortController.abort(new Error("evicted"))
        : (p(this, Ve) || p(this, ae)) &&
          (p(this, Ve) &&
            ((c = p(this, $e)) == null || c.call(this, o, i, "evict")),
          p(this, ae) &&
            ((f = p(this, $t)) == null || f.push([o, i, "evict"]))),
      p(this, Gn).call(this, s),
      e &&
        ((p(this, xt)[s] = void 0),
        (p(this, nt)[s] = void 0),
        p(this, We).push(s)),
      p(this, Ut) === 1
        ? (V(this, Qt, V(this, Nt, 0)), (p(this, We).length = 0))
        : V(this, Qt, p(this, ie)[s]),
      p(this, Dt).delete(i),
      $r(this, Ut)._--,
      s
    )
  }),
  (Kr = function (e, s, i, o) {
    const c = s === void 0 ? void 0 : p(this, nt)[s]
    if (L(this, D, Ct).call(this, c)) return c
    const f = new Qr(),
      { signal: m } = i
    m == null ||
      m.addEventListener("abort", () => f.abort(m.reason), { signal: f.signal })
    const v = { signal: f.signal, options: i, context: o },
      C = (z, H = !1) => {
        const { aborted: W } = f.signal,
          Q = i.ignoreFetchAbort && z !== void 0
        if (
          (i.status &&
            (W && !H
              ? ((i.status.fetchAborted = !0),
                (i.status.fetchError = f.signal.reason),
                Q && (i.status.fetchAbortIgnored = !0))
              : (i.status.fetchResolved = !0)),
          W && !Q && !H)
        )
          return E(f.signal.reason)
        const $ = P
        return (
          p(this, nt)[s] === P &&
            (z === void 0
              ? $.__staleWhileFetching
                ? (p(this, nt)[s] = $.__staleWhileFetching)
                : L(this, D, Rn).call(this, e, "fetch")
              : (i.status && (i.status.fetchUpdated = !0),
                this.set(e, z, v.options))),
          z
        )
      },
      E = (z) => {
        const { aborted: H } = f.signal,
          W = H && i.allowStaleOnFetchAbort,
          Q = W || i.allowStaleOnFetchRejection,
          $ = Q || i.noDeleteOnFetchRejection,
          dt = P
        if (
          (p(this, nt)[s] === P &&
            (!$ || dt.__staleWhileFetching === void 0
              ? L(this, D, Rn).call(this, e, "fetch")
              : W || (p(this, nt)[s] = dt.__staleWhileFetching)),
          Q)
        )
          return (
            i.status &&
              dt.__staleWhileFetching !== void 0 &&
              (i.status.returnedStale = !0),
            dt.__staleWhileFetching
          )
        if (dt.__returned === dt) throw z
      }
    i.status && (i.status.fetchDispatched = !0)
    const P = new Promise((z, H) => {
        var Q
        const W = (Q = p(this, ms)) == null ? void 0 : Q.call(this, e, c, v)
        W &&
          W instanceof Promise &&
          W.then(($) => z($ === void 0 ? void 0 : $), H),
          f.signal.addEventListener("abort", () => {
            ;(i.ignoreFetchAbort && !i.allowStaleOnFetchAbort) ||
              (z(void 0), i.allowStaleOnFetchAbort && (z = ($) => C($, !0)))
          })
      }).then(
        C,
        (z) => (
          i.status &&
            ((i.status.fetchRejected = !0), (i.status.fetchError = z)),
          E(z)
        ),
      ),
      X = Object.assign(P, {
        __abortController: f,
        __staleWhileFetching: c,
        __returned: void 0,
      })
    return (
      s === void 0
        ? (this.set(e, X, { ...v.options, status: void 0 }),
          (s = p(this, Dt).get(e)))
        : (p(this, nt)[s] = X),
      X
    )
  }),
  (Ct = function (e) {
    if (!p(this, Fn)) return !1
    const s = e
    return (
      !!s &&
      s instanceof Promise &&
      s.hasOwnProperty("__staleWhileFetching") &&
      s.__abortController instanceof Qr
    )
  }),
  (Ua = function (e, s) {
    ;(p(this, we)[s] = e), (p(this, ie)[e] = s)
  }),
  (Ls = function (e) {
    e !== p(this, Nt) &&
      (e === p(this, Qt)
        ? V(this, Qt, p(this, ie)[e])
        : L(this, D, Ua).call(this, p(this, we)[e], p(this, ie)[e]),
      L(this, D, Ua).call(this, p(this, Nt), e),
      V(this, Nt, e))
  }),
  (Rn = function (e, s) {
    var o, c, f, m
    let i = !1
    if (p(this, Ut) !== 0) {
      const v = p(this, Dt).get(e)
      if (v !== void 0)
        if (((i = !0), p(this, Ut) === 1)) L(this, D, Ha).call(this, s)
        else {
          p(this, Gn).call(this, v)
          const C = p(this, nt)[v]
          if (
            (L(this, D, Ct).call(this, C)
              ? C.__abortController.abort(new Error("deleted"))
              : (p(this, Ve) || p(this, ae)) &&
                (p(this, Ve) &&
                  ((o = p(this, $e)) == null || o.call(this, C, e, s)),
                p(this, ae) &&
                  ((c = p(this, $t)) == null || c.push([C, e, s]))),
            p(this, Dt).delete(e),
            (p(this, xt)[v] = void 0),
            (p(this, nt)[v] = void 0),
            v === p(this, Nt))
          )
            V(this, Nt, p(this, we)[v])
          else if (v === p(this, Qt)) V(this, Qt, p(this, ie)[v])
          else {
            const E = p(this, we)[v]
            p(this, ie)[E] = p(this, ie)[v]
            const P = p(this, ie)[v]
            p(this, we)[P] = p(this, we)[v]
          }
          $r(this, Ut)._--, p(this, We).push(v)
        }
    }
    if (p(this, ae) && (f = p(this, $t)) != null && f.length) {
      const v = p(this, $t)
      let C
      for (; (C = v == null ? void 0 : v.shift()); )
        (m = p(this, je)) == null || m.call(this, ...C)
    }
    return i
  }),
  (Ha = function (e) {
    var s, i, o
    for (const c of L(this, D, Tn).call(this, { allowStale: !0 })) {
      const f = p(this, nt)[c]
      if (L(this, D, Ct).call(this, f))
        f.__abortController.abort(new Error("deleted"))
      else {
        const m = p(this, xt)[c]
        p(this, Ve) && ((s = p(this, $e)) == null || s.call(this, f, m, e)),
          p(this, ae) && ((i = p(this, $t)) == null || i.push([f, m, e]))
      }
    }
    if (
      (p(this, Dt).clear(),
      p(this, nt).fill(void 0),
      p(this, xt).fill(void 0),
      p(this, Ce) && p(this, Ge) && (p(this, Ce).fill(0), p(this, Ge).fill(0)),
      p(this, Be) && p(this, Be).fill(0),
      V(this, Qt, 0),
      V(this, Nt, 0),
      (p(this, We).length = 0),
      V(this, ze, 0),
      V(this, Ut, 0),
      p(this, ae) && p(this, $t))
    ) {
      const c = p(this, $t)
      let f
      for (; (f = c == null ? void 0 : c.shift()); )
        (o = p(this, je)) == null || o.call(this, ...f)
    }
  })
let Oa = Ba
class ContextManager {
  constructor() {
    d(this, "_syncStatus", { status: Ff.done, foldersProgress: [] })
    d(this, "_syncEnabledState", Fc.initializing)
    d(this, "_workspaceGuidelines", [])
    d(this, "_openUserGuidelinesInput", !1)
    d(this, "_userGuidelines")
    d(this, "_contextStore", new sg())
    d(this, "_prevOpenFiles", [])
    d(this, "_disableContext", !1)
    d(this, "_enableAgentMemories", !1)
    d(this, "subscribers", new Set())
    d(
      this,
      "subscribe",
      (callback) => (
        this.subscribers.add(callback),
        callback(this),
        () => {
          this.subscribers.delete(callback)
        }
      ),
    )
    d(this, "handleMessageFromExtension", (message) => {
      const data = message.data
      switch (data.type) {
        case T.sourceFoldersUpdated:
          this.onSourceFoldersUpdated(data.data.sourceFolders)
          break
        case T.sourceFoldersSyncStatus:
          this.onSyncStatusUpdated(data.data)
          break
        case T.fileRangesSelected:
          this.updateSelections(data.data)
          break
        case T.currentlyOpenFiles:
          this.setCurrentlyOpenFiles(data.data)
          break
        case T.syncEnabledState:
          this.onSyncEnabledStateUpdate(data.data)
          break
        case T.updateGuidelinesState:
          this.onGuidelinesStateUpdate(data.data)
          break
        default:
          return !1
      }
      return !0
    })
    d(this, "onSourceFoldersUpdated", (folders) => {
      const prevFolders = this.sourceFolders
      ;(folders = this.updateSourceFoldersWithGuidelines(folders)),
        this._contextStore.update(
          folders.map((folder) => ({
            sourceFolder: folder,
            status: jt.active,
            label: folder.folderRoot,
            showWarning: folder.guidelinesOverLimit,
            id:
              folder.folderRoot +
              String(folder.guidelinesEnabled) +
              String(folder.guidelinesOverLimit),
          })),
          prevFolders,
          (item) => item.id,
        ),
        this.notifySubscribers()
    })
    d(this, "onSyncStatusUpdated", (status) => {
      ;(this._syncStatus = status), this.notifySubscribers()
    })
    d(this, "disableContext", () => {
      ;(this._disableContext = !0), this.notifySubscribers()
    })
    d(this, "enableContext", () => {
      ;(this._disableContext = !1), this.notifySubscribers()
    })
    d(this, "addFile", (file) => {
      this.addFiles([file])
    })
    d(this, "addFiles", (files) => {
      this.updateFiles(files, [])
    })
    d(this, "removeFile", (file) => {
      this.removeFiles([file])
    })
    d(this, "removeFiles", (files) => {
      this.updateFiles([], files)
    })
    d(this, "updateItems", (newItems, oldItems) => {
      this.updateItemsInplace(newItems, oldItems), this.notifySubscribers()
    })
    d(this, "updateItemsInplace", (newItems, oldItems) => {
      this._contextStore.update(newItems, oldItems, (item) => item.id)
    })
    d(this, "updateFiles", (filesToAdd, filesToRemove) => {
      const createFileItem = (file) => ({ file: file, ...Zr(file) }),
        newFileItems = filesToAdd.map(createFileItem),
        oldFileItems = filesToRemove.map(createFileItem)
      this._contextStore.update(newFileItems, oldFileItems, (item) => item.id), this.notifySubscribers()
    })
    d(this, "enableAgentMemories", () => {
      ;(this._enableAgentMemories = !0), this.notifySubscribers()
    })
    d(this, "disableAgentMemories", () => {
      ;(this._enableAgentMemories = !1), this.notifySubscribers()
    })
    d(this, "setCurrentlyOpenFiles", (files) => {
      const newOpenFiles = files.map((file) => ({ recentFile: file, ...Zr(file) })),
        prevOpenFiles = this._prevOpenFiles
      ;(this._prevOpenFiles = newOpenFiles),
        this._contextStore.update(newOpenFiles, prevOpenFiles, (item) => item.id),
        prevOpenFiles.forEach((prevFile) => {
          const contextItem = this._contextStore.peekKey(prevFile.id)
          contextItem != null &&
            contextItem.recentFile &&
            ((contextItem.file = contextItem.recentFile), delete contextItem.recentFile)
        }),
        newOpenFiles.forEach((newFile) => {
          const contextItem = this._contextStore.peekKey(newFile.id)
          contextItem != null && contextItem.file && ((contextItem.recentFile = contextItem.file), delete contextItem.file)
        }),
        this.notifySubscribers()
    })
    d(this, "onSyncEnabledStateUpdate", (state) => {
      ;(this._syncEnabledState = state), this.notifySubscribers()
    })
    d(this, "updateUserGuidelines", (guidelines) => {
      const prevGuidelines = this.userGuidelines,
        newGuidelineItem = {
          userGuidelines: guidelines,
          label: "User Guidelines",
          id: "userGuidelines",
          status: jt.active,
          referenceCount: 1,
          showWarning: guidelines.overLimit,
        }
      this._contextStore.update([newGuidelineItem], prevGuidelines, (item) => {
        var guidelinesEnabled, guidelinesOverLimit
        return (
          item.id +
          String((guidelinesEnabled = item.userGuidelines) == null ? void 0 : guidelinesEnabled.enabled) +
          String((guidelinesOverLimit = item.userGuidelines) == null ? void 0 : guidelinesOverLimit.overLimit)
        )
      }),
        this.notifySubscribers()
    })
    d(this, "onGuidelinesStateUpdate", (state) => {
      ;(this._userGuidelines = state.userGuidelines),
        (this._workspaceGuidelines = state.workspaceGuidelines ?? [])
      const userGuidelines = state.userGuidelines
      userGuidelines && this.updateUserGuidelines(userGuidelines),
        this.onSourceFoldersUpdated(
          this.sourceFolders.map((folder) => folder.sourceFolder),
        )
    })
    d(this, "updateSourceFoldersWithGuidelines", (folders) =>
      folders.map((folder) => {
        const guideline = this._workspaceGuidelines.find(
          (wsGuideline) => wsGuideline.workspaceFolder === folder.folderRoot,
        )
        return {
          ...folder,
          guidelinesEnabled: (guideline == null ? void 0 : guideline.enabled) ?? !1,
          guidelinesOverLimit: (guideline == null ? void 0 : guideline.overLimit) ?? !1,
          guidelinesLengthLimit: (guideline == null ? void 0 : guideline.lengthLimit) ?? 2e3,
        }
      }),
    )
    d(this, "toggleStatus", (item) => {
      this._contextStore.toggleStatus(item.id), this.notifySubscribers()
    })
    d(this, "updateExternalSources", (newSources, oldSources) => {
      this._contextStore.update(newSources, oldSources, (item) => item.id), this.notifySubscribers()
    })
    d(this, "clearFiles", () => {
      this._contextStore.update([], this.files, (file) => file.id),
        this.notifySubscribers()
    })
    d(this, "updateSelections", (selections) => {
      const prevSelections = this._contextStore.values.filter(Dc)
      this._contextStore.update(
        selections.map((selection) => ({ selection: selection, ...Zr(selection) })),
        prevSelections,
        (item) => item.id,
      ),
        this.notifySubscribers()
    })
    d(this, "maybeHandleDelete", ({ editor: editor }) => {
      if (
        editor.state.selection.empty &&
        editor.state.selection.$anchor.pos === 1 &&
        this.recentActiveItems.length > 0
      ) {
        const firstActiveItem = this.recentActiveItems[0]
        return this.markInactive(firstActiveItem), !0
      }
      return !1
    })
    d(this, "markInactive", (item) => {
      this.markItemsInactive([item])
    })
    d(this, "markItemsInactive", (items) => {
      items.forEach((item) => {
        this._contextStore.setStatus(item.id, jt.inactive)
      }),
        this.notifySubscribers()
    })
    d(this, "markAllInactive", () => {
      this.markItemsInactive(this.recentActiveItems)
    })
    d(this, "markActive", (item) => {
      this.markItemsActive([item])
    })
    d(this, "markItemsActive", (items) => {
      items.forEach((item) => {
        this._contextStore.setStatus(item.id, jt.active)
      }),
        this.notifySubscribers()
    })
    d(this, "markAllActive", () => {
      this.markItemsActive(this.recentInactiveItems)
    })
    d(this, "unpin", (item) => {
      this._contextStore.unpin(item.id), this.notifySubscribers()
    })
    d(this, "togglePinned", (item) => {
      this._contextStore.togglePinned(item.id), this.notifySubscribers()
    })
    d(this, "notifySubscribers", () => {
      this.subscribers.forEach((subscriber) => subscriber(this))
    })
    this.clearFiles()
  }
  get files() {
    return this._disableContext
      ? []
      : this._contextStore.values.filter((item) => Xc(item) && !Ra(item))
  }
  get recentFiles() {
    return this._disableContext ? [] : this._contextStore.values.filter(Ra)
  }
  get userGuidelinesText() {
    var guidelines
    return ((guidelines = this._userGuidelines) == null ? void 0 : guidelines.contents) ?? ""
  }
  get selections() {
    return this._disableContext ? [] : this._contextStore.values.filter(Dc)
  }
  get folders() {
    return this._disableContext ? [] : this._contextStore.values.filter(Qc)
  }
  get sourceFolders() {
    return this._disableContext ? [] : this._contextStore.values.filter(Fa)
  }
  get externalSources() {
    return this._disableContext ? [] : this._contextStore.values.filter(tl)
  }
  get userGuidelines() {
    return this._contextStore.values.filter(qc)
  }
  get agentMemories() {
    return [
      {
        ...Hf,
        status: this._enableAgentMemories ? jt.active : jt.inactive,
        referenceCount: 1,
      },
    ]
  }
  get activeFiles() {
    return this._disableContext
      ? []
      : this.files.filter((item) => item.status === jt.active)
  }
  get activeRecentFiles() {
    return this._disableContext
      ? []
      : this.recentFiles.filter((item) => item.status === jt.active)
  }
  get activeExternalSources() {
    return this._disableContext
      ? []
      : this.externalSources.filter((item) => item.status === jt.active)
  }
  get activeSelections() {
    return this._disableContext
      ? []
      : this.selections.filter((item) => item.status === jt.active)
  }
  get activeSourceFolders() {
    return this._disableContext
      ? []
      : this.sourceFolders.filter((item) => item.status === jt.active)
  }
  get syncStatus() {
    return this._syncStatus.status
  }
  get syncEnabledState() {
    return this._syncEnabledState
  }
  get syncProgress() {
    var progressData
    if (
      this.syncEnabledState === Fc.disabled ||
      !this._syncStatus.foldersProgress
    )
      return
    const foldersWithProgress = this._syncStatus.foldersProgress.filter(
      (folder) => folder.progress !== void 0,
    )
    if (foldersWithProgress.length === 0) return
    const totalTrackedFiles = foldersWithProgress.reduce((sum, folder) => {
        var progress
        return (
          sum +
          (((progress = folder == null ? void 0 : folder.progress) == null
            ? void 0
            : progress.trackedFiles) ?? 0)
        )
      }, 0),
      totalBacklogSize = foldersWithProgress.reduce((sum, folder) => {
        var progress
        return (
          sum +
          (((progress = folder == null ? void 0 : folder.progress) == null
            ? void 0
            : progress.backlogSize) ?? 0)
        )
      }, 0),
      totalFiles = Math.max(totalTrackedFiles, 0),
      backlogSize = Math.min(Math.max(totalBacklogSize, 0), totalFiles),
      syncedCount = totalFiles - backlogSize,
      newlyTrackedFolders = []
    for (const folder of foldersWithProgress)
      (progressData = folder == null ? void 0 : folder.progress) != null &&
        progressData.newlyTracked &&
        newlyTrackedFolders.push(folder.folderRoot)
    return {
      status: this._syncStatus.status,
      totalFiles: totalFiles,
      syncedCount: syncedCount,
      backlogSize: backlogSize,
      newlyTrackedFolders: newlyTrackedFolders,
    }
  }
  get contextCounts() {
    return this._contextStore.values.length ?? 0
  }
  get chatActiveContext() {
    return {
      userSpecifiedFiles: this.activeFiles.map((item) => ({
        rootPath: item.file.repoRoot,
        relPath: item.file.pathName,
      })),
      recentFiles: this.activeRecentFiles.map((item) => ({
        rootPath: item.recentFile.repoRoot,
        relPath: item.recentFile.pathName,
      })),
      externalSources: this.activeExternalSources.map((item) => item.externalSource),
      selections: this.activeSelections.map((item) => item.selection),
      sourceFolders: this.activeSourceFolders.map((item) => ({
        rootPath: item.sourceFolder.folderRoot,
        relPath: "",
      })),
    }
  }
  get recentItems() {
    return this._disableContext
      ? this.userGuidelines
      : [
          ...this._contextStore.values.filter(
            (item) => !Fa(item) && !qc(item) && !za(item),
          ),
          ...this.sourceFolders,
          ...this.userGuidelines,
          ...this.agentMemories,
        ]
  }
  get recentActiveItems() {
    return this.recentItems.filter((item) => item.status === jt.active)
  }
  get recentInactiveItems() {
    return this.recentItems.filter((item) => item.status === jt.inactive)
  }
  get isContextDisabled() {
    return this._disableContext
  }
}
class sg {
  constructor() {
    d(this, "_cache", new Oa({ max: 1e3 }))
    d(this, "peekKey", (e) => this._cache.get(e, { updateAgeOnGet: !1 }))
    d(this, "clear", () => {
      this._cache.clear()
    })
    d(this, "update", (e, s, i) => {
      e.forEach((o) => this.addInPlace(o, i)),
        s.forEach((o) => this.removeInPlace(o, i))
    })
    d(this, "removeFromStore", (e, s) => {
      const i = s(e)
      this._cache.delete(i)
    })
    d(this, "addInPlace", (e, s) => {
      const i = s(e),
        o = e.referenceCount ?? 1,
        c = this._cache.get(i),
        f = e.status ?? (c == null ? void 0 : c.status) ?? jt.active
      c
        ? ((c.referenceCount += o),
          (c.status = f),
          (c.pinned = e.pinned ?? c.pinned),
          (c.showWarning = e.showWarning ?? c.showWarning))
        : this._cache.set(i, {
            ...e,
            pinned: void 0,
            referenceCount: o,
            status: f,
          })
    })
    d(this, "removeInPlace", (e, s) => {
      const i = s(e),
        o = this._cache.get(i)
      o &&
        ((o.referenceCount -= 1),
        o.referenceCount === 0 && this._cache.delete(i))
    })
    d(this, "setStatus", (e, s) => {
      const i = this._cache.get(e)
      i && (i.status = s)
    })
    d(this, "togglePinned", (e) => {
      const s = this._cache.peek(e)
      s && (s.pinned ? this.unpin(e) : this.pin(e))
    })
    d(this, "pin", (e) => {
      const s = this._cache.peek(e)
      s && !s.pinned && ((s.pinned = !0), (s.referenceCount += 1))
    })
    d(this, "unpin", (e) => {
      const s = this._cache.peek(e)
      s &&
        s.pinned &&
        ((s.pinned = !1),
        (s.referenceCount -= 1),
        s.referenceCount === 0 && this._cache.delete(e))
    })
    d(this, "toggleStatus", (e) => {
      const s = this._cache.get(e)
      s && (s.status = s.status === jt.active ? jt.inactive : jt.active)
    })
  }
  get store() {
    return Object.fromEntries(this._cache.entries())
  }
  get values() {
    return [...this._cache.values()]
  }
}
function bp(a) {
  try {
    const e = new Date(a)
    if (isNaN(e.getTime())) return "Unknown time"
    const s = new Date().getTime() - e.getTime(),
      i = Math.floor(s / 1e3),
      o = Math.floor(i / 60),
      c = Math.floor(o / 60),
      f = Math.floor(c / 24)
    return i < 60
      ? `${i}s ago`
      : o < 60
        ? `${o}m ago`
        : c < 24
          ? `${c}h ago`
          : f < 30
            ? `${f}d ago`
            : e.toLocaleDateString()
  } catch (e) {
    return console.error("Error formatting date:", e), "Unknown time"
  }
}
function Sp(a) {
  switch (a) {
    case Ze.agentStarting:
      return "Starting"
    case Ze.agentRunning:
      return "Running"
    case Ze.agentIdle:
      return "Idle"
    case Ze.agentFailed:
      return "Failed"
    default:
      return "Unknown"
  }
}
const ol = (a) => {
    let e = {}
    for (const s of a) {
      const i = e[s.new_path]
      e[s.new_path] = i
        ? { ...i, new_contents: s.new_contents, new_path: s.new_path }
        : s
    }
    return Object.values(e)
  },
  Xr = (a) => {
    const e = a.flatMap((s) => s.changed_files)
    return ol(e)
  },
  wp = (a, e) => {
    const s = a.slice(0, e).findLastIndex((o) => o.exchange.request_message),
      i = a.slice(s + 1, e + 1).flatMap((o) => o.changed_files)
    return ol(i)
  },
  Ma = (a, e) => {
    var i
    const s = a.slice(0, e).findLastIndex((o) => o.exchange.request_message)
    return ((i = a[s]) == null ? void 0 : i.exchange.request_message) ?? ""
  }
class Wa {
  constructor(e) {
    d(this, "_applyingFilePaths", gn([]))
    d(this, "_appliedFilePaths", gn([]))
    this._asyncMsgSender = e
  }
  get applyingFilePaths() {
    let e = []
    return (
      this._applyingFilePaths.subscribe((s) => {
        e = s
      })(),
      e
    )
  }
  get appliedFilePaths() {
    let e = []
    return (
      this._appliedFilePaths.subscribe((s) => {
        e = s
      })(),
      e
    )
  }
  async getDiffExplanation(e, s, i = 3e4) {
    try {
      return (
        await this._asyncMsgSender.send(
          {
            type: T.diffExplanationRequest,
            data: { changedFiles: e, apikey: s },
          },
          i,
        )
      ).data.explanation
    } catch (o) {
      return console.error("Failed to get diff explanation:", o), []
    }
  }
  async groupChanges(e, s = !1, i) {
    try {
      return (
        await this._asyncMsgSender.send({
          type: T.diffGroupChangesRequest,
          data: { changedFiles: e, changesById: s, apikey: i },
        })
      ).data.groupedChanges
    } catch (o) {
      return console.error("Failed to group changes:", o), []
    }
  }
  async getDescriptions(e, s) {
    try {
      return (
        await this._asyncMsgSender.send({
          type: T.diffDescriptionsRequest,
          data: { groupedChanges: e, apikey: s },
        })
      ).data.explanation
    } catch (i) {
      return console.error("Failed to get descriptions:", i), []
    }
  }
  async applyChanges(e, s, i) {
    this._applyingFilePaths.update((o) => [...o.filter((c) => c !== e), e])
    try {
      ;(
        await this._asyncMsgSender.send({
          type: T.applyChangesRequest,
          data: { path: e, originalCode: s, newCode: i },
        })
      ).data.success &&
        this._appliedFilePaths.update((o) => [...o.filter((c) => c !== e), e])
    } catch (o) {
      console.error("applyChanges error", o)
    } finally {
      this._applyingFilePaths.update((o) => o.filter((c) => c !== e))
    }
  }
  handleMessageFromExtension(e) {
    return !1
  }
}
d(Wa, "key", "remoteAgentsDiffOpsModel")
class ul {
  constructor(e) {
    d(this, "_asyncMsgSender")
    this._asyncMsgSender = e
  }
  async sshToRemoteAgent(e) {
    const s = await this._asyncMsgSender.send(
      { type: T.remoteAgentSshRequest, data: { agentId: e } },
      1e4,
    )
    return (
      !!s.data.success ||
      (console.error("Failed to connect to remote agent:", s.data.error), !1)
    )
  }
  async deleteRemoteAgent(e) {
    return (
      await this._asyncMsgSender.send(
        { type: T.deleteRemoteAgentRequest, data: { agentId: e } },
        1e4,
      )
    ).data.success
  }
  async showRemoteAgentHomePanel() {
    await this._asyncMsgSender.send({ type: T.showRemoteAgentHomePanel })
  }
  async closeRemoteAgentHomePanel() {
    await this._asyncMsgSender.send({ type: T.closeRemoteAgentHomePanel })
  }
  async getRemoteAgentNotificationEnabled(e) {
    return (
      await this._asyncMsgSender.send({
        type: T.getRemoteAgentNotificationEnabledRequest,
        data: { agentIds: e },
      })
    ).data
  }
  async setRemoteAgentNotificationEnabled(e, s) {
    await this._asyncMsgSender.send({
      type: T.setRemoteAgentNotificationEnabled,
      data: { agentId: e, enabled: s },
    })
  }
  async deleteRemoteAgentNotificationEnabled(e) {
    await this._asyncMsgSender.send({
      type: T.deleteRemoteAgentNotificationEnabled,
      data: { agentId: e },
    })
  }
  async notifyRemoteAgentReady(e) {
    await this._asyncMsgSender.send({
      type: T.remoteAgentNotifyReady,
      data: { agentId: e },
    })
  }
  async showRemoteAgentDiffPanel(e) {
    await this._asyncMsgSender.send({
      type: T.showRemoteAgentDiffPanel,
      data: e,
    })
  }
  async closeRemoteAgentDiffPanel() {
    await this._asyncMsgSender.send({ type: T.closeRemoteAgentDiffPanel })
  }
  async getRemoteAgentChatHistory(e, s, i = 1e4) {
    return await this._asyncMsgSender.send(
      {
        type: T.getRemoteAgentChatHistoryRequest,
        data: { agentId: e, lastProcessedSequenceId: s },
      },
      i,
    )
  }
  async sendRemoteAgentChatRequest(e, s, i = 1e4) {
    await this._asyncMsgSender.send(
      {
        type: T.remoteAgentChatRequest,
        data: { agentId: e, requestDetails: s },
      },
      i,
    )
  }
  async interruptRemoteAgent(e, s = 1e4) {
    return await this._asyncMsgSender.send(
      { type: T.remoteAgentInterruptRequest, data: { agentId: e } },
      s,
    )
  }
  async createRemoteAgent(e, s, i, o, c = 1e4) {
    return await this._asyncMsgSender.send(
      {
        type: T.createRemoteAgentRequest,
        data: {
          prompt: e,
          workspaceSetup: s,
          setupScript: i,
          isSetupScriptAgent: o,
        },
      },
      c,
    )
  }
  async getRemoteAgentOverviews(e = 1e4) {
    return await this._asyncMsgSender.send(
      { type: T.getRemoteAgentOverviewsRequest },
      e,
    )
  }
  async listSetupScripts(e = 5e3) {
    return await this._asyncMsgSender.send(
      { type: T.listSetupScriptsRequest },
      e,
    )
  }
  async saveSetupScript(e, s, i, o = 5e3) {
    return await this._asyncMsgSender.send(
      {
        type: T.saveSetupScriptRequest,
        data: { name: e, content: s, location: i },
      },
      o,
    )
  }
  async deleteSetupScript(e, s, i = 5e3) {
    return await this._asyncMsgSender.send(
      { type: T.deleteSetupScriptRequest, data: { name: e, location: s } },
      i,
    )
  }
  async renameSetupScript(e, s, i, o = 5e3) {
    return await this._asyncMsgSender.send(
      {
        type: T.renameSetupScriptRequest,
        data: { oldName: e, newName: s, location: i },
      },
      o,
    )
  }
  async getRemoteAgentWorkspaceLogs(e, s = 1e4) {
    return await this._asyncMsgSender.send(
      { type: T.remoteAgentWorkspaceLogsRequest, data: { agentId: e } },
      s,
    )
  }
  async saveLastRemoteAgentSetup(e, s) {
    return await this._asyncMsgSender.send({
      type: T.saveLastRemoteAgentSetupRequest,
      data: { lastRemoteAgentGitBranch: e, lastRemoteAgentSetupScript: s },
    })
  }
  async getLastRemoteAgentSetup() {
    return await this._asyncMsgSender.send({
      type: T.getLastRemoteAgentSetupRequest,
    })
  }
}
d(ul, "key", "remoteAgentsClient")
function cl(a) {
  return a.sort((e, s) => {
    const i = new Date(e.updated_at || e.started_at)
    return new Date(s.updated_at || s.started_at).getTime() - i.getTime()
  })
}
class Ea {
  constructor(e) {
    d(this, "_pollingTimers", new Map())
    d(this, "_pollingInterval")
    d(this, "_failedAttempts", 0)
    d(this, "_lastSuccessfulFetch", 0)
    ;(this._config = e), (this._pollingInterval = e.defaultInterval)
  }
  start(e) {
    e && this._pollingTimers.has(e)
      ? this.stop(e)
      : !e && this._pollingTimers.has("global") && this.stop("global"),
      this.refresh(e)
    const s = setInterval(() => {
      this.refresh(e)
    }, this._pollingInterval)
    e ? this._pollingTimers.set(e, s) : this._pollingTimers.set("global", s)
  }
  stop(e) {
    if (e) {
      const s = this._pollingTimers.get(e)
      s && (clearInterval(s), this._pollingTimers.delete(e))
    } else
      for (const [s, i] of this._pollingTimers.entries())
        clearInterval(i), this._pollingTimers.delete(s)
  }
  async refresh(e) {
    try {
      const s = await this._config.refreshFn(e)
      return (
        (this._failedAttempts = 0),
        (this._lastSuccessfulFetch = Date.now()),
        (this._pollingInterval = this._config.defaultInterval),
        this._config.stopCondition &&
          e &&
          this._config.stopCondition(s, e) &&
          this.stop(e),
        s
      )
    } catch {
      return (
        this._failedAttempts++,
        this._failedAttempts > 3
          ? (this._pollingInterval = 1e4)
          : (this._pollingInterval = Math.min(
              1e3 * Math.pow(2, this._failedAttempts),
              1e4,
            )),
        null
      )
    }
  }
  isPolling(e) {
    return e ? this._pollingTimers.has(e) : this._pollingTimers.size > 0
  }
  get timeSinceLastSuccessfulFetch() {
    return Date.now() - this._lastSuccessfulFetch
  }
  get failedAttempts() {
    return this._failedAttempts
  }
  resetFailedAttempts() {
    this._failedAttempts = 0
  }
}
class rg {
  constructor(e, s) {
    d(this, "_state", {
      agentOverviews: [],
      agentConversations: new Map(),
      agentLogs: new Map(),
      maxRemoteAgents: 0,
      overviewError: void 0,
      conversationError: void 0,
      logsError: void 0,
      isOverviewsLoading: !1,
      isConversationLoading: !1,
      isLogsLoading: !1,
      logPollFailedCount: 0,
    })
    d(this, "_loggingMaxRetries", 8)
    d(this, "_overviewsPollingManager")
    d(this, "_conversationPollingManager")
    d(this, "_logsPollingManager")
    d(this, "_isInitialOverviewFetch", !0)
    d(this, "_stateUpdateSubscribers", new Set())
    ;(this._flagsModel = e),
      (this._remoteAgentsClient = s),
      (this._overviewsPollingManager = new Ea({
        defaultInterval: 5e3,
        refreshFn: async () => this.refreshAgentOverviews(),
      })),
      (this._conversationPollingManager = new Ea({
        defaultInterval: 1e3,
        refreshFn: async (i) => {
          if (!i)
            throw new Error("Agent ID is required for conversation polling")
          await this.refreshCurrentAgent(i)
        },
      })),
      (this._logsPollingManager = new Ea({
        defaultInterval: 1e3,
        refreshFn: async (i) => {
          if (!i) throw new Error("Agent ID is required for logs polling")
          return this.refreshAgentLogs(i)
        },
        stopCondition: (i, o) => {
          const c = this._state.agentOverviews.find(
            (m) => m.remote_agent_id === o,
          )
          if (!c)
            return (
              this._state.logPollFailedCount++,
              this._state.logPollFailedCount > this._loggingMaxRetries &&
                ((this._state.logPollFailedCount = 0), !0)
            )
          const f = (c == null ? void 0 : c.status) !== Ze.agentStarting
          return f && (this._state.logPollFailedCount = 0), f
        },
      })),
      this._flagsModel.subscribe((i) => {
        const o =
            this._overviewsPollingManager.isPolling() ||
            this._conversationPollingManager.isPolling() ||
            this._logsPollingManager.isPolling(),
          c = i.enableBackgroundAgents
        c && !o ? this.startStateUpdates() : !c && o && this.stopStateUpdates()
      })
  }
  get state() {
    return this._state
  }
  startStateUpdates(e) {
    var s, i
    this._flagsModel.enableBackgroundAgents &&
      (e
        ? (e.overviews && this._overviewsPollingManager.start(),
          (s = e.conversation) != null &&
            s.agentId &&
            this._conversationPollingManager.start(e.conversation.agentId),
          (i = e.logs) != null &&
            i.agentId &&
            ((this._state.logPollFailedCount = 0),
            this._logsPollingManager.start(e.logs.agentId)))
        : this._overviewsPollingManager.start())
  }
  stopStateUpdates(e) {
    var s, i
    if (!e)
      return (
        this._overviewsPollingManager.stop(),
        this._conversationPollingManager.stop(),
        void this._logsPollingManager.stop()
      )
    e.overviews && this._overviewsPollingManager.stop(),
      (s = e.conversation) != null &&
        s.agentId &&
        this._conversationPollingManager.stop(e.conversation.agentId),
      (i = e.logs) != null &&
        i.agentId &&
        this._logsPollingManager.stop(e.logs.agentId)
  }
  async refreshCurrentAgent(e) {
    try {
      const s = this._state.agentConversations.get(e) || [],
        i = s[s.length - 1],
        o = (i == null ? void 0 : i.sequence_id) ?? 0,
        c = o === 0 ? 0 : o - 1,
        f = await this._remoteAgentsClient.getRemoteAgentChatHistory(e, c)
      if (f.data.error)
        return (
          (this._state.conversationError = f.data.error),
          void this.notifySubscribers({
            type: "conversation",
            agentId: e,
            data: s,
            error: f.data.error,
          })
        )
      const m = f.data.chatHistory.filter((C) => C.exchange !== null),
        v =
          s.length > 0
            ? (function (C, E) {
                if (C.length === 0) return E
                if (E.length === 0) return C
                const P = []
                let X = 0,
                  z = 0
                for (; X < C.length && z < E.length; ) {
                  const H = C[X].sequence_id,
                    W = E[z].sequence_id
                  W !== void 0
                    ? H !== void 0
                      ? H < W
                        ? (P.push(C[X]), X++)
                        : H > W
                          ? (P.push(E[z]), z++)
                          : (P.push(E[z]), X++, z++)
                      : (console.warn(
                          "Existing history has an exchange with an undefined sequence ID",
                        ),
                        X++)
                    : (console.warn(
                        "New history has an exchange with an undefined sequence ID",
                      ),
                      z++)
                }
                for (; X < C.length; ) P.push(C[X]), X++
                for (; z < E.length; ) P.push(E[z]), z++
                return P
              })(s, m)
            : m
      this._state.agentConversations.set(e, v),
        (this._state.conversationError = void 0),
        this.notifySubscribers({ type: "conversation", agentId: e, data: v })
    } catch (s) {
      const i = s instanceof Error ? s.message : String(s)
      ;(this._state.conversationError = i),
        this.notifySubscribers({
          type: "conversation",
          agentId: e,
          data: this._state.agentConversations.get(e) || [],
          error: i,
        })
    }
  }
  async refreshAgentOverviews() {
    this._isInitialOverviewFetch &&
      ((this._state.overviewError = void 0),
      (this._state.isOverviewsLoading = !0),
      (this._isInitialOverviewFetch = !1))
    try {
      const e = await this._remoteAgentsClient.getRemoteAgentOverviews()
      if (e.data.error) throw new Error(e.data.error)
      e.data.maxRemoteAgents !== void 0 &&
        (this._state.maxRemoteAgents = e.data.maxRemoteAgents)
      const s = cl(e.data.overviews)
      return (
        (this._state.agentOverviews = s),
        (this._state.overviewError = void 0),
        (this._state.isOverviewsLoading = !1),
        this.notifySubscribers({ type: "overviews", data: s }),
        s
      )
    } catch (e) {
      this._state.isOverviewsLoading = !1
      const s = e instanceof Error ? e.message : String(e)
      return (
        this._isInitialOverviewFetch || this._state.agentOverviews.length === 0
          ? (this._state.overviewError = s)
          : (console.warn("Background refresh failed:", e),
            this._overviewsPollingManager.timeSinceLastSuccessfulFetch > 3e4 &&
              this._overviewsPollingManager.failedAttempts > 1 &&
              (this._state.overviewError ||
                (this._state.overviewError = `Using cached data. Refresh failed: ${s}`))),
        this.notifySubscribers({
          type: "overviews",
          data: this._state.agentOverviews,
          error: this._state.overviewError,
        }),
        this._state.agentOverviews
      )
    }
  }
  async refreshAgentLogs(e) {
    var i
    try {
      const o = await this._remoteAgentsClient.getRemoteAgentWorkspaceLogs(e)
      if (!o.data.workspaceSetupStatus) return
      const c = o.data.workspaceSetupStatus,
        f = {
          steps:
            ((s = c),
            (i = s == null ? void 0 : s.steps) != null && i.length
              ? s.steps.reduce((m, v) => {
                  const C = m[m.length - 1]
                  return (
                    C && C.step_number === v.step_number
                      ? ((C.logs += `
${v.logs}`),
                        (C.status = v.status))
                      : m.push(v),
                    m
                  )
                }, [])
              : []),
        }
      if (c) {
        let m = !1
        const v = this.state.agentLogs.get(e)
        if (v && f.steps.length === v.steps.length) {
          for (let C = 0; C < f.steps.length; C++) {
            if (f.steps[C].status !== v.steps[C].status) {
              m = !0
              break
            }
            if (f.steps[C].logs.length !== v.steps[C].logs.length) {
              m = !0
              break
            }
          }
          m || (JSON.stringify(f) !== JSON.stringify(v) && (m = !0))
        } else m = !0
        if (!m) return v
        m &&
          (this._state.agentLogs.set(e, f),
          (this._state.logsError = void 0),
          this.notifySubscribers({ type: "logs", agentId: e, data: f }))
      }
      return f
    } catch (o) {
      const c = o instanceof Error ? o.message : String(o)
      return (
        (this._state.logsError = c),
        this.notifySubscribers({
          type: "logs",
          agentId: e,
          data: this._state.agentLogs.get(e) || { steps: [] },
          error: c,
        }),
        this._state.agentLogs.get(e)
      )
    }
    var s
  }
  onStateUpdate(e) {
    return (
      this._stateUpdateSubscribers.add(e),
      e({ type: "all", data: this._state }),
      () => {
        this._stateUpdateSubscribers.delete(e)
      }
    )
  }
  dispose() {
    this.stopStateUpdates(), this._stateUpdateSubscribers.clear()
  }
  notifySubscribers(e) {
    this._stateUpdateSubscribers.forEach((s) => s(e))
  }
}
class ll {
  constructor(e, s, i, o) {
    d(this, "_state", {
      isActive: !1,
      isPanelFocused: !1,
      currentAgentId: void 0,
      currentConversation: void 0,
      currentAgent: void 0,
      agentOverviews: [],
      isLoading: !1,
      lastSuccessfulOverviewFetch: 0,
      failedRefreshAttempts: 0,
      maxRemoteAgents: 0,
      isDiffPanelOpen: !1,
      diffPanelAgentId: void 0,
      isCreatingAgent: !1,
      error: void 0,
      agentThreadsError: void 0,
      remoteAgentCreationError: null,
      newAgentDraft: null,
      notificationSettings: {},
      setCurrentAgent: this.setCurrentAgent.bind(this),
      clearCurrentAgent: this.clearCurrentAgent.bind(this),
      sendMessage: this.sendMessage.bind(this),
      interruptAgent: this.interruptAgent.bind(this),
      createRemoteAgent: this.createRemoteAgent.bind(this),
      createRemoteAgentFromDraft: this.createRemoteAgentFromDraft.bind(this),
      deleteAgent: this.deleteAgent.bind(this),
      setNewAgentDraft: this.setNewAgentDraft.bind(this),
      setRemoteAgentCreationError: this.setRemoteAgentCreationError.bind(this),
      hasFetchedOnce: !1,
      showRemoteAgentDiffPanel: this.showRemoteAgentDiffPanel.bind(this),
      closeRemoteAgentDiffPanel: this.closeRemoteAgentDiffPanel.bind(this),
      setIsCreatingAgent: this.setIsCreatingAgent.bind(this),
    })
    d(this, "_agentConversations", new Map())
    d(this, "_initialPrompts", new Map())
    d(this, "_agentSetupLogsCache", new Map())
    d(this, "_preloadedDiffExplanations", new Map())
    d(this, "maxCacheEntries", 10)
    d(this, "maxCacheSizeBytes", 10485760)
    d(this, "_diffOpsModel")
    d(this, "subscribers", new Set())
    d(this, "agentSetupLogs")
    d(this, "_remoteAgentsClient")
    d(this, "_stateModel")
    d(this, "dispose", () => {
      this._stateModel.dispose(),
        this._agentConversations.clear(),
        this._agentSetupLogsCache.clear(),
        this._preloadedDiffExplanations.clear(),
        this.subscribers.clear()
    })
    ;(this._flagsModel = i),
      (this._state.isActive = s),
      (this._diffOpsModel = new Wa(e)),
      (this._remoteAgentsClient = new ul(e)),
      (this._stateModel =
        o || new rg(this._flagsModel, this._remoteAgentsClient)),
      this._stateModel.onStateUpdate(this.handleStateUpdate.bind(this)),
      s && this._stateModel.startStateUpdates()
  }
  handleOverviewsUpdate(e) {
    const s = e.data,
      i = this._state.agentOverviews,
      o = s
    this._state.currentAgentId &&
      (this._state.currentAgent = this._state.agentOverviews.find(
        (f) => f.remote_agent_id === this._state.currentAgentId,
      )),
      this.maybeSendNotifications(o, i)
    const c = cl(o)
    ;(this._state.agentOverviews = c),
      (this._state.hasFetchedOnce = !0),
      (this._state.agentThreadsError = e.error),
      (this._state.lastSuccessfulOverviewFetch = e.error
        ? this._state.lastSuccessfulOverviewFetch
        : Date.now()),
      c.findIndex((f) => f.remote_agent_id === this._state.currentAgentId) ===
        -1 && this.clearCurrentAgent()
  }
  handleConversationUpdate(e) {
    if (e.agentId === this._state.currentAgentId) {
      const s = { exchanges: e.data, lastFetched: new Date() }
      this._agentConversations.set(e.agentId, s),
        (this._state.currentConversation = s),
        (this._state.error = e.error)
    }
  }
  handleLogsUpdate(e) {
    e.agentId === this._state.currentAgentId &&
      ((this.agentSetupLogs = e.data),
      this._agentSetupLogsCache.set(e.agentId, e.data))
  }
  handleStateUpdate(e) {
    switch (
      ((this._state.maxRemoteAgents = this._stateModel.state.maxRemoteAgents),
      e.type)
    ) {
      case "overviews":
        this.handleOverviewsUpdate(e)
        break
      case "conversation":
        this.handleConversationUpdate(e)
        break
      case "logs":
        this.handleLogsUpdate(e)
        break
      case "all":
        this.handleOverviewsUpdate({
          type: "overviews",
          data: e.data.agentOverviews,
          error: e.data.overviewError,
        }),
          e.data.agentConversations.forEach((s, i) => {
            this._agentConversations.set(i, {
              exchanges: s,
              lastFetched: new Date(),
            })
          }),
          e.data.agentLogs.forEach((s, i) => {
            s &&
              (this._agentSetupLogsCache.set(i, s),
              i === this._state.currentAgentId && (this.agentSetupLogs = s))
          }),
          (this._state.hasFetchedOnce = !0),
          (this._state.agentThreadsError = e.data.overviewError),
          (this._state.error = e.data.conversationError || e.data.logsError)
    }
    this.notifySubscribers()
  }
  subscribe(e) {
    return (
      this.subscribers.add(e),
      e(this),
      () => {
        this.subscribers.delete(e)
      }
    )
  }
  notifySubscribers() {
    this.subscribers.forEach((e) => e(this))
  }
  showRemoteAgentDiffPanel(e) {
    const s = this._state.currentAgentId
    if (
      s &&
      e.changedFiles.length > 0 &&
      e.turnIdx === -1 &&
      e.isShowingAggregateChanges
    ) {
      const i = `${s}-${this.generateChangedFilesHash(e.changedFiles)}`,
        o = this._preloadedDiffExplanations.get(i)
      if (o)
        return (
          (o.lastAccessed = Date.now()),
          this._preloadedDiffExplanations.set(i, o),
          this._remoteAgentsClient.showRemoteAgentDiffPanel({
            ...e,
            preloadedExplanation: o.explanation,
          }),
          (this._state.isDiffPanelOpen = !0),
          (this._state.diffPanelAgentId = s),
          void this.notifySubscribers()
        )
    }
    this._remoteAgentsClient.showRemoteAgentDiffPanel(e),
      (this._state.isDiffPanelOpen = !0),
      (this._state.diffPanelAgentId = s),
      this.notifySubscribers()
  }
  closeRemoteAgentDiffPanel() {
    this._remoteAgentsClient.closeRemoteAgentDiffPanel(),
      (this._state.isDiffPanelOpen = !1),
      (this._state.diffPanelAgentId = void 0),
      this.notifySubscribers()
  }
  getCurrentChatHistory() {
    var o
    const e =
        ((o = this.currentConversation) == null ? void 0 : o.exchanges) ?? [],
      s = this.isCurrentAgentRunning,
      i = this.agentSetupLogs
    if (
      (this.currentAgentId &&
        !i &&
        ((this.agentSetupLogs = { steps: [] }),
        this._stateModel.startStateUpdates({
          logs: { agentId: this.currentAgentId },
        })),
      e.length === 0 && this.currentAgentId)
    ) {
      const c = this.getInitialPrompt(this.currentAgentId)
      if (c)
        return [
          {
            seen_state: zt.seen,
            structured_request_nodes: [
              { id: 0, type: ee.TEXT, text_node: { content: c } },
            ],
            status: lt.sent,
            request_message: c,
            response_text: "Waiting for agent to start...",
            structured_output_nodes: [],
            request_id: "remote-agent-initial",
          },
        ]
    }
    return e.map(({ exchange: c }, f) => {
      const m = c.request_id.startsWith("pending-")
      return {
        seen_state: zt.seen,
        structured_request_nodes: c.request_nodes ?? [],
        status: m || (f === e.length - 1 && s) ? lt.sent : lt.success,
        request_message: c.request_message,
        response_text: m ? "" : c.response_text,
        structured_output_nodes: c.response_nodes ?? [],
        request_id: c.request_id ?? `remote-agent-${f}`,
      }
    })
  }
  getToolStates() {
    var m, v, C
    const e = new Map(),
      s = new Set(),
      i = new Map()
    ;(m = this.currentConversation) == null ||
      m.exchanges.forEach((E) => {
        var P, X
        ;(P = E.exchange.response_nodes) == null ||
          P.forEach((z) => {
            z.tool_use && s.add(z.tool_use.tool_use_id)
          }),
          (X = E.exchange.request_nodes) == null ||
            X.forEach((z) => {
              z.type === ee.TOOL_RESULT &&
                z.tool_result_node &&
                i.set(z.tool_result_node.tool_use_id, z.tool_result_node)
            })
      })
    const o =
      (v = this.currentConversation) == null
        ? void 0
        : v.exchanges[this.currentConversation.exchanges.length - 1]
    let c = 0,
      f = null
    return (
      (C = o == null ? void 0 : o.exchange.response_nodes) == null ||
        C.forEach((E) => {
          var P
          E.id > c &&
            ((c = E.id),
            (f =
              (P = E.tool_use) != null && P.tool_use_id
                ? E.tool_use.tool_use_id
                : null))
        }),
      s.forEach((E) => {
        const P = i.get(E)
        if (P)
          e.set(E, {
            phase: P.is_error ? ue.error : ue.completed,
            result: { isError: P.is_error, text: P.content },
            requestId: "",
            toolUseId: E,
          })
        else {
          const X = this.isCurrentAgentRunning
          E === f
            ? e.set(E, {
                phase: X ? ue.running : ue.cancelled,
                requestId: "",
                toolUseId: E,
              })
            : e.set(E, { phase: ue.cancelled, requestId: "", toolUseId: E })
        }
      }),
      e
    )
  }
  getToolUseState(e) {
    const s = e
    return (
      this.getToolStates().get(s) ?? {
        phase: ue.completed,
        requestId: "",
        toolUseId: e,
      }
    )
  }
  async setCurrentAgent(e) {
    this._state.currentAgentId &&
      this._stateModel.stopStateUpdates({
        conversation: { agentId: this._state.currentAgentId },
        logs: { agentId: this._state.currentAgentId },
      }),
      (this._state.currentAgentId = e),
      e && this._agentSetupLogsCache.has(e)
        ? (this.agentSetupLogs = this._agentSetupLogsCache.get(e))
        : (this.agentSetupLogs = void 0),
      this.notifySubscribers(),
      e &&
        (this._stateModel.startStateUpdates({
          conversation: { agentId: e },
          logs: { agentId: e },
        }),
        this.preloadDiffExplanation(e))
  }
  clearCurrentAgent() {
    this._state.currentAgentId &&
      this._stateModel.stopStateUpdates({
        conversation: { agentId: this._state.currentAgentId },
        logs: { agentId: this._state.currentAgentId },
      }),
      (this._state.currentAgentId = void 0),
      (this.agentSetupLogs = void 0),
      this.notifySubscribers()
  }
  async preloadDiffExplanation(e) {
    const s = this._agentConversations.get(e)
    if (!s || s.exchanges.length === 0) return
    const i = Xr(s.exchanges)
    if (i.length === 0) return
    const o = `${e}-${this.generateChangedFilesHash(i)}`
    if (this._preloadedDiffExplanations.get(o) || i.length > 12) return
    let c = 0
    if (
      (i.forEach((f) => {
        var m, v
        c +=
          (((m = f.old_contents) == null ? void 0 : m.length) || 0) +
          (((v = f.new_contents) == null ? void 0 : v.length) || 0)
      }),
      !(c > 512e3))
    )
      try {
        const f = await this._diffOpsModel.getDiffExplanation(i, void 0, 6e4)
        if (f && f.length > 0) {
          const m = this.generateChangedFilesHash(i),
            v = `${e}-${m}`
          this._preloadedDiffExplanations.set(v, {
            explanation: f,
            changedFiles: i,
            userPrompt: this.getUserMessagePrecedingTurn(s.exchanges, 0),
            timestamp: Date.now(),
            lastAccessed: Date.now(),
            changedFilesHash: m,
            turnIdx: -1,
          }),
            this.manageCacheSize()
        }
      } catch (f) {
        console.error("Failed to preload diff explanation:", f)
      }
  }
  getUserMessagePrecedingTurn(e, s) {
    return e.length === 0 || s < 0 || s >= e.length
      ? ""
      : e[s].exchange.request_message || ""
  }
  generateChangedFilesHash(e) {
    const s = e.map((i) => {
      var o, c
      return {
        oldPath: i.old_path,
        newPath: i.new_path,
        oldSize: ((o = i.old_contents) == null ? void 0 : o.length) || 0,
        newSize: ((c = i.new_contents) == null ? void 0 : c.length) || 0,
        oldHash: this.simpleHash(i.old_contents || ""),
        newHash: this.simpleHash(i.new_contents || ""),
      }
    })
    return this.simpleHash(JSON.stringify(s))
  }
  simpleHash(e) {
    let s = 0
    for (let i = 0; i < e.length; i++)
      (s = (s << 5) - s + e.charCodeAt(i)), (s |= 0)
    return s.toString(36)
  }
  manageCacheSize() {
    if (this._preloadedDiffExplanations.size <= this.maxCacheEntries) return
    const e = Array.from(this._preloadedDiffExplanations.entries())
      .map(([i, o]) => ({
        key: i,
        value: o,
        accessTime: o.lastAccessed || o.timestamp,
      }))
      .sort((i, o) => i.accessTime - o.accessTime)
    let s = 0
    for (
      e.forEach((i) => {
        const o = JSON.stringify(i.value.explanation).length,
          c = i.value.changedFiles.reduce((f, m) => {
            var v, C
            return (
              f +
              (((v = m.old_contents) == null ? void 0 : v.length) || 0) +
              (((C = m.new_contents) == null ? void 0 : C.length) || 0)
            )
          }, 0)
        s += o + c
      });
      e.length > 0 &&
      (e.length > this.maxCacheEntries || s > this.maxCacheSizeBytes);

    ) {
      const i = e.shift()
      if (i) {
        this._preloadedDiffExplanations.delete(i.key)
        const o = JSON.stringify(i.value.explanation).length,
          c = i.value.changedFiles.reduce((f, m) => {
            var v, C
            return (
              f +
              (((v = m.old_contents) == null ? void 0 : v.length) || 0) +
              (((C = m.new_contents) == null ? void 0 : C.length) || 0)
            )
          }, 0)
        s -= o + c
      }
    }
  }
  async sendMessage(e) {
    const s = this._state.currentAgentId
    if (!s)
      return (
        (this._state.error = "No active remote agent"),
        this.notifySubscribers(),
        !1
      )
    ;(this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      const i = this._agentConversations.get(s) || {
          exchanges: [],
          lastFetched: new Date(),
        },
        o = (this.getfinalSequenceId(s) || 0) + 1,
        c = {
          exchange: {
            request_message: e,
            response_text: "",
            request_id: "pending-" + Date.now(),
            response_nodes: [],
            request_nodes: [],
          },
          changed_files: [],
          sequence_id: o,
        }
      i.exchanges.push(c),
        this._agentConversations.set(s, i),
        (this._state.currentConversation = i),
        this.notifySubscribers()
      const f = {
        request_nodes: [{ id: 1, type: ee.TEXT, text_node: { content: e } }],
      }
      return (
        await this._remoteAgentsClient.sendRemoteAgentChatRequest(s, f),
        await this._stateModel.refreshCurrentAgent(s),
        await this._stateModel.refreshAgentOverviews(),
        this.preloadDiffExplanation(s),
        !0
      )
    } catch (i) {
      return (
        (this._state.error = i instanceof Error ? i.message : String(i)),
        this.notifySubscribers(),
        !1
      )
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async interruptAgent() {
    const e = this._state.currentAgentId
    if (!e)
      return (
        (this._state.error = "No active remote agent"),
        void this.notifySubscribers()
      )
    ;(this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      await this._remoteAgentsClient.interruptRemoteAgent(e),
        await this._stateModel.refreshCurrentAgent(e),
        await this._stateModel.refreshAgentOverviews()
    } catch (s) {
      this._state.error = s instanceof Error ? s.message : String(s)
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async createRemoteAgent(e, s, i, o) {
    var c
    if (!e || !e.trim())
      return (
        (this._state.error =
          "Cannot create a remote agent with an empty prompt"),
        void this.notifySubscribers()
      )
    ;(this.agentSetupLogs = void 0),
      (this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      const f = await this._remoteAgentsClient.createRemoteAgent(e, s, i, o)
      return f.data.agentId
        ? (this._initialPrompts.set(f.data.agentId, e),
          await this.setNotificationEnabled(
            f.data.agentId,
            ((c = this.newAgentDraft) == null
              ? void 0
              : c.enableNotification) ?? !1,
          ),
          await this.setCurrentAgent(f.data.agentId),
          f.data.agentId)
        : ((this._state.error = "Failed to create remote agent"),
          void this.notifySubscribers())
    } catch (f) {
      return (
        (this._state.error = f instanceof Error ? f.message : String(f)),
        void this.notifySubscribers()
      )
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async createRemoteAgentFromDraft(e) {
    var o
    if (
      (this.setRemoteAgentCreationError(null),
      (this.agentSetupLogs = void 0),
      !e || !e.trim())
    )
      return void this.setRemoteAgentCreationError(
        "Cannot create a remote agent with an empty prompt",
      )
    const s = this._state.newAgentDraft
    if (!s)
      return void this.setRemoteAgentCreationError(
        "No workspace selected. Please select a workspace first.",
      )
    if (s.isDisabled)
      return void this.setRemoteAgentCreationError(
        "Cannot create agent with current workspace selection. Please resolve the issues with your workspace selection.",
      )
    const i = { starting_files: s.commitRef }
    ;(this._state.isLoading = !0), this.notifySubscribers()
    try {
      let c = (o = s.setupScript) == null ? void 0 : o.content
      if (s.setupScript) {
        const m = (await this.listSetupScripts()).find(
          (v) => v.path === s.setupScript.path,
        )
        m && (c = m.content)
      }
      const f = await this.createRemoteAgent(e, i, c, s.isSetupScriptAgent)
      return (
        f ||
          this.setRemoteAgentCreationError(
            "Failed to create remote agent. Please try again.",
          ),
        f
      )
    } catch {
      this.setRemoteAgentCreationError(
        "Failed to create remote agent. Please try again.",
      )
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async deleteAgent(e) {
    ;(this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      if (!(await this._remoteAgentsClient.deleteRemoteAgent(e)))
        return (
          (this._state.error = "Failed to delete remote agent"),
          void this.notifySubscribers()
        )
      this._agentConversations.delete(e),
        this._agentSetupLogsCache.delete(e),
        (this._state.agentOverviews = this._state.agentOverviews.filter(
          (s) => s.remote_agent_id !== e,
        )),
        this.removeNotificationEnabled(e),
        this._state.currentAgentId === e && this.clearCurrentAgent()
    } catch (s) {
      this._state.error = s instanceof Error ? s.message : String(s)
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async sshToRemoteAgent(e) {
    ;(this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      return await this._remoteAgentsClient.sshToRemoteAgent(e.remote_agent_id)
    } catch (s) {
      return (
        (this._state.error = s instanceof Error ? s.message : String(s)),
        this.notifySubscribers(),
        !1
      )
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  async maybeSendNotifications(e, s) {
    const i = new Map(s.map((c) => [c.remote_agent_id, c])),
      o = await this._remoteAgentsClient.getRemoteAgentNotificationEnabled(
        e.map((c) => c.remote_agent_id),
      )
    e.forEach((c) => {
      const f = i.get(c.remote_agent_id),
        m = o[c.remote_agent_id],
        v = (f == null ? void 0 : f.status) === Ze.agentRunning,
        C = c.status === Ze.agentIdle || c.status === Ze.agentFailed,
        E = c.remote_agent_id !== this._state.currentAgentId,
        P = this._state.isPanelFocused
      m &&
        v &&
        C &&
        (E || !P) &&
        this._remoteAgentsClient.notifyRemoteAgentReady(c.remote_agent_id)
    })
  }
  async setNotificationEnabled(e, s) {
    await this._remoteAgentsClient.setRemoteAgentNotificationEnabled(e, s),
      (this._state = {
        ...this._state,
        notificationSettings: { ...this._state.notificationSettings, [e]: s },
      }),
      this.notifySubscribers()
  }
  async removeNotificationEnabled(e) {
    await this._remoteAgentsClient.deleteRemoteAgentNotificationEnabled(e)
    const { [e]: s, ...i } = this._state.notificationSettings
    ;(this._state = { ...this._state, notificationSettings: i }),
      this.notifySubscribers()
  }
  get hasFetchedOnce() {
    return this._state.hasFetchedOnce
  }
  handleMessageFromExtension(e) {
    const s = e.data.type === T.asyncWrapper ? e.data.baseMsg.type : e.data.type
    if (!e || !s) return !1
    switch (s) {
      case T.remoteAgentChatResponse:
        return (
          this._state.currentAgentId &&
            setTimeout(() => {
              this.preloadDiffExplanation(this._state.currentAgentId)
            }, 0),
          !0
        )
      case T.getRemoteAgentChatHistoryResponse:
      case T.remoteAgentInterruptResponse:
      case T.createRemoteAgentResponse:
      case T.getRemoteAgentOverviewsResponse:
        return !0
      case T.showRemoteAgentDiffPanel:
        return (this._state.isDiffPanelOpen = !0), !0
      case T.closeRemoteAgentDiffPanel:
        return (this._state.isDiffPanelOpen = !1), !0
      default:
        return !1
    }
  }
  get currentAgentId() {
    return this._state.currentAgentId
  }
  get currentConversation() {
    return (
      this._agentConversations.get(this._state.currentAgentId ?? "") ?? void 0
    )
  }
  get currentExchanges() {
    var s
    const e = this._state.currentAgentId
    return (
      (e &&
        ((s = this._agentConversations.get(e)) == null
          ? void 0
          : s.exchanges)) ||
      []
    )
  }
  get currentStatus() {
    var s
    const e = this._state.currentAgentId
    return (
      (e &&
        ((s = this._state.agentOverviews.find(
          (i) => i.remote_agent_id === e,
        )) == null
          ? void 0
          : s.status)) ||
      Ze.agentIdle
    )
  }
  get currentAgent() {
    const e = this._state.currentAgentId
    return e
      ? this._state.agentOverviews.find((s) => s.remote_agent_id === e)
      : void 0
  }
  get agentOverviews() {
    return this._state.agentOverviews
  }
  get isLoading() {
    return this._state.isLoading
  }
  get lastSuccessfulOverviewFetch() {
    return this._state.lastSuccessfulOverviewFetch
  }
  get error() {
    return this._state.error
  }
  get agentThreadsError() {
    return this._state.agentThreadsError
  }
  get isCurrentAgentRunning() {
    if (
      this.currentStatus === Ze.agentRunning ||
      this.currentStatus === Ze.agentStarting
    )
      return !0
    const e = this.currentExchanges
    return !!(
      e.length > 0 && e[e.length - 1].exchange.request_id.startsWith("pending-")
    )
  }
  get maxRemoteAgents() {
    return this._state.maxRemoteAgents
  }
  getInitialPrompt(e) {
    return this._initialPrompts.get(e)
  }
  clearInitialPrompt(e) {
    this._initialPrompts.delete(e)
  }
  get notificationSettings() {
    return this._state.notificationSettings
  }
  getfinalSequenceId(e) {
    var o
    const s = this._agentConversations.get(e),
      i = s == null ? void 0 : s.exchanges
    if (i)
      return ((o = i[i.length - 1]) == null ? void 0 : o.sequence_id) ?? void 0
  }
  async listSetupScripts() {
    try {
      return (await this._remoteAgentsClient.listSetupScripts()).data.scripts
    } catch (e) {
      return (
        (this._state.error = e instanceof Error ? e.message : String(e)),
        this.notifySubscribers(),
        []
      )
    }
  }
  async saveSetupScript(e, s, i) {
    try {
      const o = await this._remoteAgentsClient.saveSetupScript(e, s, i)
      return (
        o.data.success ||
          ((this._state.error = o.data.error || "Failed to save setup script"),
          this.notifySubscribers()),
        o.data
      )
    } catch (o) {
      return (
        (this._state.error = o instanceof Error ? o.message : String(o)),
        this.notifySubscribers(),
        { success: !1, error: o instanceof Error ? o.message : String(o) }
      )
    }
  }
  async deleteSetupScript(e, s) {
    try {
      const i = await this._remoteAgentsClient.deleteSetupScript(e, s)
      return (
        i.data.success ||
          ((this._state.error =
            i.data.error || "Failed to delete setup script"),
          this.notifySubscribers()),
        i.data
      )
    } catch (i) {
      return (
        (this._state.error = i instanceof Error ? i.message : String(i)),
        this.notifySubscribers(),
        { success: !1, error: i instanceof Error ? i.message : String(i) }
      )
    }
  }
  async renameSetupScript(e, s, i) {
    try {
      const o = await this._remoteAgentsClient.renameSetupScript(e, s, i)
      return (
        o.data.success ||
          ((this._state.error =
            o.data.error || "Failed to rename setup script"),
          this.notifySubscribers()),
        o.data
      )
    } catch (o) {
      return (
        (this._state.error = o instanceof Error ? o.message : String(o)),
        this.notifySubscribers(),
        { success: !1, error: o instanceof Error ? o.message : String(o) }
      )
    }
  }
  get isActive() {
    return this._state.isActive
  }
  setIsActive(e) {
    ;(this._state.isActive = e),
      e
        ? this._stateModel.startStateUpdates()
        : this._stateModel.stopStateUpdates(),
      this.notifySubscribers()
  }
  get isPanelFocused() {
    return this._state.isPanelFocused
  }
  setIsPanelFocused(e) {
    ;(this._state.isPanelFocused = e), this.notifySubscribers()
  }
  setRemoteAgentCreationError(e) {
    ;(this._state.remoteAgentCreationError = e), this.notifySubscribers()
  }
  get isDiffPanelOpen() {
    return this._state.isDiffPanelOpen
  }
  get diffPanelAgentId() {
    return this._state.diffPanelAgentId
  }
  get remoteAgentCreationError() {
    return this._state.remoteAgentCreationError
  }
  setNewAgentDraft(e) {
    ;(this._state.newAgentDraft = e), this.notifySubscribers()
  }
  get newAgentDraft() {
    return this._state.newAgentDraft
  }
  async getAgentLogs(e) {
    ;(this._state.isLoading = !0),
      (this._state.error = void 0),
      this.notifySubscribers()
    try {
      const s = await this._remoteAgentsClient.getRemoteAgentWorkspaceLogs(e)
      return s.data.workspaceSetupStatus ? s.data.workspaceSetupStatus : void 0
    } catch (s) {
      const i = s instanceof Error ? s.message : String(s)
      return (this._state.error = i), void this.notifySubscribers()
    } finally {
      ;(this._state.isLoading = !1), this.notifySubscribers()
    }
  }
  setIsCreatingAgent(e) {
    ;(this._state.isCreatingAgent = e), this.notifySubscribers()
  }
  get isCreatingAgent() {
    return this._state.isCreatingAgent
  }
  async showRemoteAgentHomePanel() {
    await this._remoteAgentsClient.showRemoteAgentHomePanel()
  }
  async closeRemoteAgentHomePanel() {
    await this._remoteAgentsClient.closeRemoteAgentHomePanel()
  }
  async saveLastRemoteAgentSetup(e, s) {
    try {
      await this._remoteAgentsClient.saveLastRemoteAgentSetup(e, s)
    } catch (i) {
      console.error("Failed to save last remote agent setup:", i)
    }
  }
  async getLastRemoteAgentSetup() {
    try {
      return (await this._remoteAgentsClient.getLastRemoteAgentSetup()).data
    } catch (e) {
      return (
        console.error("Failed to get last remote agent setup:", e),
        { lastRemoteAgentGitBranch: null, lastRemoteAgentSetupScript: null }
      )
    }
  }
}
d(ll, "key", "remoteAgentsModel")
var Br,
  Gr,
  Na = { exports: {} }
;(Br = Na),
  (Gr = Na.exports),
  function () {
    var a,
      e = "Expected a function",
      s = "__lodash_hash_undefined__",
      i = "__lodash_placeholder__",
      o = 16,
      c = 32,
      f = 64,
      m = 128,
      v = 256,
      C = 1 / 0,
      E = 9007199254740991,
      P = NaN,
      X = 4294967295,
      z = [
        ["ary", m],
        ["bind", 1],
        ["bindKey", 2],
        ["curry", 8],
        ["curryRight", o],
        ["flip", 512],
        ["partial", c],
        ["partialRight", f],
        ["rearg", v],
      ],
      H = "[object Arguments]",
      W = "[object Array]",
      Q = "[object Boolean]",
      $ = "[object Date]",
      dt = "[object Error]",
      Zt = "[object Function]",
      Jt = "[object GeneratorFunction]",
      pt = "[object Map]",
      le = "[object Number]",
      Y = "[object Object]",
      _t = "[object Promise]",
      ot = "[object RegExp]",
      qt = "[object Set]",
      _e = "[object String]",
      Pn = "[object Symbol]",
      pn = "[object WeakMap]",
      _n = "[object ArrayBuffer]",
      sn = "[object DataView]",
      Yn = "[object Float32Array]",
      ei = "[object Float64Array]",
      ni = "[object Int8Array]",
      si = "[object Int16Array]",
      ri = "[object Int32Array]",
      ii = "[object Uint8Array]",
      ai = "[object Uint8ClampedArray]",
      oi = "[object Uint16Array]",
      ui = "[object Uint32Array]",
      hl = /\b__p \+= '';/g,
      dl = /\b(__p \+=) '' \+/g,
      fl = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Ga = /&(?:amp|lt|gt|quot|#39);/g,
      Va = /[&<>"']/g,
      gl = RegExp(Ga.source),
      pl = RegExp(Va.source),
      _l = /<%-([\s\S]+?)%>/g,
      ml = /<%([\s\S]+?)%>/g,
      Za = /<%=([\s\S]+?)%>/g,
      yl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      vl = /^\w*$/,
      bl =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ci = /[\\^$.*+?()[\]{}|]/g,
      Sl = RegExp(ci.source),
      li = /^\s+/,
      wl = /\s/,
      Cl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      xl = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Al = /,? & /,
      Il = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Ml = /[()=,{}\[\]\/\s]/,
      El = /\\(\\)?/g,
      Tl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ja = /\w*$/,
      Rl = /^[-+]0x[0-9a-f]+$/i,
      Fl = /^0b[01]+$/i,
      Pl = /^\[object .+?Constructor\]$/,
      Dl = /^0o[0-7]+$/i,
      ql = /^(?:0|[1-9]\d*)$/,
      Ol = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Gs = /($^)/,
      kl = /['\n\r\u2028\u2029\\]/g,
      Vs = "\\ud800-\\udfff",
      Ya = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
      Ka = "\\u2700-\\u27bf",
      Xa = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Qa = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      to = "\\ufe0e\\ufe0f",
      eo =
        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Ll = "['’]",
      Ul = "[" + Vs + "]",
      no = "[" + eo + "]",
      Zs = "[" + Ya + "]",
      so = "\\d+",
      Hl = "[" + Ka + "]",
      ro = "[" + Xa + "]",
      io = "[^" + Vs + eo + so + Ka + Xa + Qa + "]",
      hi = "\\ud83c[\\udffb-\\udfff]",
      ao = "[^" + Vs + "]",
      di = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      fi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Kn = "[" + Qa + "]",
      oo = "\\u200d",
      uo = "(?:" + ro + "|" + io + ")",
      Nl = "(?:" + Kn + "|" + io + ")",
      co = "(?:['’](?:d|ll|m|re|s|t|ve))?",
      lo = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
      ho = "(?:" + Zs + "|" + hi + ")?",
      fo = "[" + to + "]?",
      go =
        fo +
        ho +
        "(?:" +
        oo +
        "(?:" +
        [ao, di, fi].join("|") +
        ")" +
        fo +
        ho +
        ")*",
      $l = "(?:" + [Hl, di, fi].join("|") + ")" + go,
      jl = "(?:" + [ao + Zs + "?", Zs, di, fi, Ul].join("|") + ")",
      zl = RegExp(Ll, "g"),
      Wl = RegExp(Zs, "g"),
      gi = RegExp(hi + "(?=" + hi + ")|" + jl + go, "g"),
      Bl = RegExp(
        [
          Kn + "?" + ro + "+" + co + "(?=" + [no, Kn, "$"].join("|") + ")",
          Nl + "+" + lo + "(?=" + [no, Kn + uo, "$"].join("|") + ")",
          Kn + "?" + uo + "+" + co,
          Kn + "+" + lo,
          "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
          "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
          so,
          $l,
        ].join("|"),
        "g",
      ),
      Gl = RegExp("[" + oo + Vs + Ya + to + "]"),
      Vl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Zl = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      Jl = -1,
      bt = {}
    ;(bt[Yn] =
      bt[ei] =
      bt[ni] =
      bt[si] =
      bt[ri] =
      bt[ii] =
      bt[ai] =
      bt[oi] =
      bt[ui] =
        !0),
      (bt[H] =
        bt[W] =
        bt[_n] =
        bt[Q] =
        bt[sn] =
        bt[$] =
        bt[dt] =
        bt[Zt] =
        bt[pt] =
        bt[le] =
        bt[Y] =
        bt[ot] =
        bt[qt] =
        bt[_e] =
        bt[pn] =
          !1)
    var yt = {}
    ;(yt[H] =
      yt[W] =
      yt[_n] =
      yt[sn] =
      yt[Q] =
      yt[$] =
      yt[Yn] =
      yt[ei] =
      yt[ni] =
      yt[si] =
      yt[ri] =
      yt[pt] =
      yt[le] =
      yt[Y] =
      yt[ot] =
      yt[qt] =
      yt[_e] =
      yt[Pn] =
      yt[ii] =
      yt[ai] =
      yt[oi] =
      yt[ui] =
        !0),
      (yt[dt] = yt[Zt] = yt[pn] = !1)
    var Yl = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Kl = parseFloat,
      Xl = parseInt,
      po = typeof Os == "object" && Os && Os.Object === Object && Os,
      Ql = typeof self == "object" && self && self.Object === Object && self,
      Wt = po || Ql || Function("return this")(),
      pi = Gr && !Gr.nodeType && Gr,
      Dn = pi && Br && !Br.nodeType && Br,
      _o = Dn && Dn.exports === pi,
      _i = _o && po.process,
      Ee = (function () {
        try {
          var S = Dn && Dn.require && Dn.require("util").types
          return S || (_i && _i.binding && _i.binding("util"))
        } catch {}
      })(),
      mo = Ee && Ee.isArrayBuffer,
      yo = Ee && Ee.isDate,
      vo = Ee && Ee.isMap,
      bo = Ee && Ee.isRegExp,
      So = Ee && Ee.isSet,
      wo = Ee && Ee.isTypedArray
    function me(S, I, M) {
      switch (M.length) {
        case 0:
          return S.call(I)
        case 1:
          return S.call(I, M[0])
        case 2:
          return S.call(I, M[0], M[1])
        case 3:
          return S.call(I, M[0], M[1], M[2])
      }
      return S.apply(I, M)
    }
    function th(S, I, M, O) {
      for (var tt = -1, ut = S == null ? 0 : S.length; ++tt < ut; ) {
        var Ot = S[tt]
        I(O, Ot, M(Ot), S)
      }
      return O
    }
    function Te(S, I) {
      for (
        var M = -1, O = S == null ? 0 : S.length;
        ++M < O && I(S[M], M, S) !== !1;

      );
      return S
    }
    function eh(S, I) {
      for (var M = S == null ? 0 : S.length; M-- && I(S[M], M, S) !== !1; );
      return S
    }
    function Co(S, I) {
      for (var M = -1, O = S == null ? 0 : S.length; ++M < O; )
        if (!I(S[M], M, S)) return !1
      return !0
    }
    function mn(S, I) {
      for (
        var M = -1, O = S == null ? 0 : S.length, tt = 0, ut = [];
        ++M < O;

      ) {
        var Ot = S[M]
        I(Ot, M, S) && (ut[tt++] = Ot)
      }
      return ut
    }
    function Js(S, I) {
      return !(S == null || !S.length) && Xn(S, I, 0) > -1
    }
    function mi(S, I, M) {
      for (var O = -1, tt = S == null ? 0 : S.length; ++O < tt; )
        if (M(I, S[O])) return !0
      return !1
    }
    function At(S, I) {
      for (var M = -1, O = S == null ? 0 : S.length, tt = Array(O); ++M < O; )
        tt[M] = I(S[M], M, S)
      return tt
    }
    function yn(S, I) {
      for (var M = -1, O = I.length, tt = S.length; ++M < O; ) S[tt + M] = I[M]
      return S
    }
    function yi(S, I, M, O) {
      var tt = -1,
        ut = S == null ? 0 : S.length
      for (O && ut && (M = S[++tt]); ++tt < ut; ) M = I(M, S[tt], tt, S)
      return M
    }
    function nh(S, I, M, O) {
      var tt = S == null ? 0 : S.length
      for (O && tt && (M = S[--tt]); tt--; ) M = I(M, S[tt], tt, S)
      return M
    }
    function vi(S, I) {
      for (var M = -1, O = S == null ? 0 : S.length; ++M < O; )
        if (I(S[M], M, S)) return !0
      return !1
    }
    var sh = bi("length")
    function xo(S, I, M) {
      var O
      return (
        M(S, function (tt, ut, Ot) {
          if (I(tt, ut, Ot)) return (O = ut), !1
        }),
        O
      )
    }
    function Ys(S, I, M, O) {
      for (var tt = S.length, ut = M + (O ? 1 : -1); O ? ut-- : ++ut < tt; )
        if (I(S[ut], ut, S)) return ut
      return -1
    }
    function Xn(S, I, M) {
      return I == I
        ? (function (O, tt, ut) {
            for (var Ot = ut - 1, Je = O.length; ++Ot < Je; )
              if (O[Ot] === tt) return Ot
            return -1
          })(S, I, M)
        : Ys(S, Ao, M)
    }
    function rh(S, I, M, O) {
      for (var tt = M - 1, ut = S.length; ++tt < ut; )
        if (O(S[tt], I)) return tt
      return -1
    }
    function Ao(S) {
      return S != S
    }
    function Io(S, I) {
      var M = S == null ? 0 : S.length
      return M ? wi(S, I) / M : P
    }
    function bi(S) {
      return function (I) {
        return I == null ? a : I[S]
      }
    }
    function Si(S) {
      return function (I) {
        return S == null ? a : S[I]
      }
    }
    function Mo(S, I, M, O, tt) {
      return (
        tt(S, function (ut, Ot, Je) {
          M = O ? ((O = !1), ut) : I(M, ut, Ot, Je)
        }),
        M
      )
    }
    function wi(S, I) {
      for (var M, O = -1, tt = S.length; ++O < tt; ) {
        var ut = I(S[O])
        ut !== a && (M = M === a ? ut : M + ut)
      }
      return M
    }
    function Ci(S, I) {
      for (var M = -1, O = Array(S); ++M < S; ) O[M] = I(M)
      return O
    }
    function Eo(S) {
      return S && S.slice(0, Po(S) + 1).replace(li, "")
    }
    function ye(S) {
      return function (I) {
        return S(I)
      }
    }
    function xi(S, I) {
      return At(I, function (M) {
        return S[M]
      })
    }
    function bs(S, I) {
      return S.has(I)
    }
    function To(S, I) {
      for (var M = -1, O = S.length; ++M < O && Xn(I, S[M], 0) > -1; );
      return M
    }
    function Ro(S, I) {
      for (var M = S.length; M-- && Xn(I, S[M], 0) > -1; );
      return M
    }
    var ih = Si({
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      }),
      ah = Si({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })
    function oh(S) {
      return "\\" + Yl[S]
    }
    function Qn(S) {
      return Gl.test(S)
    }
    function Ai(S) {
      var I = -1,
        M = Array(S.size)
      return (
        S.forEach(function (O, tt) {
          M[++I] = [tt, O]
        }),
        M
      )
    }
    function Fo(S, I) {
      return function (M) {
        return S(I(M))
      }
    }
    function vn(S, I) {
      for (var M = -1, O = S.length, tt = 0, ut = []; ++M < O; ) {
        var Ot = S[M]
        ;(Ot !== I && Ot !== i) || ((S[M] = i), (ut[tt++] = M))
      }
      return ut
    }
    function Ks(S) {
      var I = -1,
        M = Array(S.size)
      return (
        S.forEach(function (O) {
          M[++I] = O
        }),
        M
      )
    }
    function uh(S) {
      var I = -1,
        M = Array(S.size)
      return (
        S.forEach(function (O) {
          M[++I] = [O, O]
        }),
        M
      )
    }
    function ts(S) {
      return Qn(S)
        ? (function (I) {
            for (var M = (gi.lastIndex = 0); gi.test(I); ) ++M
            return M
          })(S)
        : sh(S)
    }
    function Le(S) {
      return Qn(S)
        ? (function (I) {
            return I.match(gi) || []
          })(S)
        : (function (I) {
            return I.split("")
          })(S)
    }
    function Po(S) {
      for (var I = S.length; I-- && wl.test(S.charAt(I)); );
      return I
    }
    var ch = Si({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      }),
      es = (function S(I) {
        var M,
          O = (I =
            I == null ? Wt : es.defaults(Wt.Object(), I, es.pick(Wt, Zl)))
            .Array,
          tt = I.Date,
          ut = I.Error,
          Ot = I.Function,
          Je = I.Math,
          St = I.Object,
          Ii = I.RegExp,
          lh = I.String,
          Re = I.TypeError,
          Xs = O.prototype,
          hh = Ot.prototype,
          ns = St.prototype,
          Qs = I["__core-js_shared__"],
          tr = hh.toString,
          gt = ns.hasOwnProperty,
          dh = 0,
          Do = (M = /[^.]+$/.exec((Qs && Qs.keys && Qs.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + M
            : "",
          er = ns.toString,
          fh = tr.call(St),
          gh = Wt._,
          ph = Ii(
            "^" +
              tr
                .call(gt)
                .replace(ci, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          nr = _o ? I.Buffer : a,
          bn = I.Symbol,
          sr = I.Uint8Array,
          qo = nr ? nr.allocUnsafe : a,
          rr = Fo(St.getPrototypeOf, St),
          Oo = St.create,
          ko = ns.propertyIsEnumerable,
          ir = Xs.splice,
          Lo = bn ? bn.isConcatSpreadable : a,
          Ss = bn ? bn.iterator : a,
          qn = bn ? bn.toStringTag : a,
          ar = (function () {
            try {
              var t = Hn(St, "defineProperty")
              return t({}, "", {}), t
            } catch {}
          })(),
          _h = I.clearTimeout !== Wt.clearTimeout && I.clearTimeout,
          mh = tt && tt.now !== Wt.Date.now && tt.now,
          yh = I.setTimeout !== Wt.setTimeout && I.setTimeout,
          or = Je.ceil,
          ur = Je.floor,
          Mi = St.getOwnPropertySymbols,
          vh = nr ? nr.isBuffer : a,
          Uo = I.isFinite,
          bh = Xs.join,
          Sh = Fo(St.keys, St),
          kt = Je.max,
          Yt = Je.min,
          wh = tt.now,
          Ch = I.parseInt,
          Ho = Je.random,
          xh = Xs.reverse,
          Ei = Hn(I, "DataView"),
          ws = Hn(I, "Map"),
          Ti = Hn(I, "Promise"),
          ss = Hn(I, "Set"),
          Cs = Hn(I, "WeakMap"),
          xs = Hn(St, "create"),
          cr = Cs && new Cs(),
          rs = {},
          Ah = Nn(Ei),
          Ih = Nn(ws),
          Mh = Nn(Ti),
          Eh = Nn(ss),
          Th = Nn(Cs),
          lr = bn ? bn.prototype : a,
          As = lr ? lr.valueOf : a,
          No = lr ? lr.toString : a
        function h(t) {
          if (Mt(t) && !st(t) && !(t instanceof at)) {
            if (t instanceof Fe) return t
            if (gt.call(t, "__wrapped__")) return $u(t)
          }
          return new Fe(t)
        }
        var is = (function () {
          function t() {}
          return function (n) {
            if (!It(n)) return {}
            if (Oo) return Oo(n)
            t.prototype = n
            var r = new t()
            return (t.prototype = a), r
          }
        })()
        function hr() {}
        function Fe(t, n) {
          ;(this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = a)
        }
        function at(t) {
          ;(this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = X),
            (this.__views__ = [])
        }
        function On(t) {
          var n = -1,
            r = t == null ? 0 : t.length
          for (this.clear(); ++n < r; ) {
            var u = t[n]
            this.set(u[0], u[1])
          }
        }
        function rn(t) {
          var n = -1,
            r = t == null ? 0 : t.length
          for (this.clear(); ++n < r; ) {
            var u = t[n]
            this.set(u[0], u[1])
          }
        }
        function an(t) {
          var n = -1,
            r = t == null ? 0 : t.length
          for (this.clear(); ++n < r; ) {
            var u = t[n]
            this.set(u[0], u[1])
          }
        }
        function kn(t) {
          var n = -1,
            r = t == null ? 0 : t.length
          for (this.__data__ = new an(); ++n < r; ) this.add(t[n])
        }
        function Ue(t) {
          var n = (this.__data__ = new rn(t))
          this.size = n.size
        }
        function $o(t, n) {
          var r = st(t),
            u = !r && $n(t),
            l = !r && !u && An(t),
            g = !r && !u && !l && cs(t),
            _ = r || u || l || g,
            y = _ ? Ci(t.length, lh) : [],
            b = y.length
          for (var x in t)
            (!n && !gt.call(t, x)) ||
              (_ &&
                (x == "length" ||
                  (l && (x == "offset" || x == "parent")) ||
                  (g &&
                    (x == "buffer" ||
                      x == "byteLength" ||
                      x == "byteOffset")) ||
                  ln(x, b))) ||
              y.push(x)
          return y
        }
        function jo(t) {
          var n = t.length
          return n ? t[Ni(0, n - 1)] : a
        }
        function Rh(t, n) {
          return Ar(he(t), Ln(n, 0, t.length))
        }
        function Fh(t) {
          return Ar(he(t))
        }
        function Ri(t, n, r) {
          ;((r !== a && !He(t[n], r)) || (r === a && !(n in t))) && on(t, n, r)
        }
        function Is(t, n, r) {
          var u = t[n]
          ;(gt.call(t, n) && He(u, r) && (r !== a || n in t)) || on(t, n, r)
        }
        function dr(t, n) {
          for (var r = t.length; r--; ) if (He(t[r][0], n)) return r
          return -1
        }
        function Ph(t, n, r, u) {
          return (
            Sn(t, function (l, g, _) {
              n(u, l, r(l), _)
            }),
            u
          )
        }
        function zo(t, n) {
          return t && Ke(n, Ht(n), t)
        }
        function on(t, n, r) {
          n == "__proto__" && ar
            ? ar(t, n, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0,
              })
            : (t[n] = r)
        }
        function Fi(t, n) {
          for (var r = -1, u = n.length, l = O(u), g = t == null; ++r < u; )
            l[r] = g ? a : ha(t, n[r])
          return l
        }
        function Ln(t, n, r) {
          return (
            t == t &&
              (r !== a && (t = t <= r ? t : r),
              n !== a && (t = t >= n ? t : n)),
            t
          )
        }
        function Pe(t, n, r, u, l, g) {
          var _,
            y = 1 & n,
            b = 2 & n,
            x = 4 & n
          if ((r && (_ = l ? r(t, u, l, g) : r(t)), _ !== a)) return _
          if (!It(t)) return t
          var w = st(t)
          if (w) {
            if (
              ((_ = (function (A) {
                var F = A.length,
                  Z = new A.constructor(F)
                return (
                  F &&
                    typeof A[0] == "string" &&
                    gt.call(A, "index") &&
                    ((Z.index = A.index), (Z.input = A.input)),
                  Z
                )
              })(t)),
              !y)
            )
              return he(t, _)
          } else {
            var R = Kt(t),
              U = R == Zt || R == Jt
            if (An(t)) return fu(t, y)
            if (R == Y || R == H || (U && !l)) {
              if (((_ = b || U ? {} : Pu(t)), !y))
                return b
                  ? (function (A, F) {
                      return Ke(A, Ru(A), F)
                    })(
                      t,
                      (function (A, F) {
                        return A && Ke(F, fe(F), A)
                      })(_, t),
                    )
                  : (function (A, F) {
                      return Ke(A, ta(A), F)
                    })(t, zo(_, t))
            } else {
              if (!yt[R]) return l ? t : {}
              _ = (function (A, F, Z) {
                var q,
                  et = A.constructor
                switch (F) {
                  case _n:
                    return Vi(A)
                  case Q:
                  case $:
                    return new et(+A)
                  case sn:
                    return (function (K, ht) {
                      var j = ht ? Vi(K.buffer) : K.buffer
                      return new K.constructor(j, K.byteOffset, K.byteLength)
                    })(A, Z)
                  case Yn:
                  case ei:
                  case ni:
                  case si:
                  case ri:
                  case ii:
                  case ai:
                  case oi:
                  case ui:
                    return gu(A, Z)
                  case pt:
                    return new et()
                  case le:
                  case _e:
                    return new et(A)
                  case ot:
                    return (function (K) {
                      var ht = new K.constructor(K.source, Ja.exec(K))
                      return (ht.lastIndex = K.lastIndex), ht
                    })(A)
                  case qt:
                    return new et()
                  case Pn:
                    return (q = A), As ? St(As.call(q)) : {}
                }
              })(t, R, y)
            }
          }
          g || (g = new Ue())
          var N = g.get(t)
          if (N) return N
          g.set(t, _),
            ic(t)
              ? t.forEach(function (A) {
                  _.add(Pe(A, n, r, A, t, g))
                })
              : sc(t) &&
                t.forEach(function (A, F) {
                  _.set(F, Pe(A, n, r, F, t, g))
                })
          var B = w ? a : (x ? (b ? Ki : Yi) : b ? fe : Ht)(t)
          return (
            Te(B || t, function (A, F) {
              B && (A = t[(F = A)]), Is(_, F, Pe(A, n, r, F, t, g))
            }),
            _
          )
        }
        function Wo(t, n, r) {
          var u = r.length
          if (t == null) return !u
          for (t = St(t); u--; ) {
            var l = r[u],
              g = n[l],
              _ = t[l]
            if ((_ === a && !(l in t)) || !g(_)) return !1
          }
          return !0
        }
        function Bo(t, n, r) {
          if (typeof t != "function") throw new Re(e)
          return Ds(function () {
            t.apply(a, r)
          }, n)
        }
        function Ms(t, n, r, u) {
          var l = -1,
            g = Js,
            _ = !0,
            y = t.length,
            b = [],
            x = n.length
          if (!y) return b
          r && (n = At(n, ye(r))),
            u
              ? ((g = mi), (_ = !1))
              : n.length >= 200 && ((g = bs), (_ = !1), (n = new kn(n)))
          t: for (; ++l < y; ) {
            var w = t[l],
              R = r == null ? w : r(w)
            if (((w = u || w !== 0 ? w : 0), _ && R == R)) {
              for (var U = x; U--; ) if (n[U] === R) continue t
              b.push(w)
            } else g(n, R, u) || b.push(w)
          }
          return b
        }
        ;(h.templateSettings = {
          escape: _l,
          evaluate: ml,
          interpolate: Za,
          variable: "",
          imports: { _: h },
        }),
          (h.prototype = hr.prototype),
          (h.prototype.constructor = h),
          (Fe.prototype = is(hr.prototype)),
          (Fe.prototype.constructor = Fe),
          (at.prototype = is(hr.prototype)),
          (at.prototype.constructor = at),
          (On.prototype.clear = function () {
            ;(this.__data__ = xs ? xs(null) : {}), (this.size = 0)
          }),
          (On.prototype.delete = function (t) {
            var n = this.has(t) && delete this.__data__[t]
            return (this.size -= n ? 1 : 0), n
          }),
          (On.prototype.get = function (t) {
            var n = this.__data__
            if (xs) {
              var r = n[t]
              return r === s ? a : r
            }
            return gt.call(n, t) ? n[t] : a
          }),
          (On.prototype.has = function (t) {
            var n = this.__data__
            return xs ? n[t] !== a : gt.call(n, t)
          }),
          (On.prototype.set = function (t, n) {
            var r = this.__data__
            return (
              (this.size += this.has(t) ? 0 : 1),
              (r[t] = xs && n === a ? s : n),
              this
            )
          }),
          (rn.prototype.clear = function () {
            ;(this.__data__ = []), (this.size = 0)
          }),
          (rn.prototype.delete = function (t) {
            var n = this.__data__,
              r = dr(n, t)
            return !(
              r < 0 ||
              (r == n.length - 1 ? n.pop() : ir.call(n, r, 1), --this.size, 0)
            )
          }),
          (rn.prototype.get = function (t) {
            var n = this.__data__,
              r = dr(n, t)
            return r < 0 ? a : n[r][1]
          }),
          (rn.prototype.has = function (t) {
            return dr(this.__data__, t) > -1
          }),
          (rn.prototype.set = function (t, n) {
            var r = this.__data__,
              u = dr(r, t)
            return u < 0 ? (++this.size, r.push([t, n])) : (r[u][1] = n), this
          }),
          (an.prototype.clear = function () {
            ;(this.size = 0),
              (this.__data__ = {
                hash: new On(),
                map: new (ws || rn)(),
                string: new On(),
              })
          }),
          (an.prototype.delete = function (t) {
            var n = xr(this, t).delete(t)
            return (this.size -= n ? 1 : 0), n
          }),
          (an.prototype.get = function (t) {
            return xr(this, t).get(t)
          }),
          (an.prototype.has = function (t) {
            return xr(this, t).has(t)
          }),
          (an.prototype.set = function (t, n) {
            var r = xr(this, t),
              u = r.size
            return r.set(t, n), (this.size += r.size == u ? 0 : 1), this
          }),
          (kn.prototype.add = kn.prototype.push =
            function (t) {
              return this.__data__.set(t, s), this
            }),
          (kn.prototype.has = function (t) {
            return this.__data__.has(t)
          }),
          (Ue.prototype.clear = function () {
            ;(this.__data__ = new rn()), (this.size = 0)
          }),
          (Ue.prototype.delete = function (t) {
            var n = this.__data__,
              r = n.delete(t)
            return (this.size = n.size), r
          }),
          (Ue.prototype.get = function (t) {
            return this.__data__.get(t)
          }),
          (Ue.prototype.has = function (t) {
            return this.__data__.has(t)
          }),
          (Ue.prototype.set = function (t, n) {
            var r = this.__data__
            if (r instanceof rn) {
              var u = r.__data__
              if (!ws || u.length < 199)
                return u.push([t, n]), (this.size = ++r.size), this
              r = this.__data__ = new an(u)
            }
            return r.set(t, n), (this.size = r.size), this
          })
        var Sn = yu(Ye),
          Go = yu(Di, !0)
        function Dh(t, n) {
          var r = !0
          return (
            Sn(t, function (u, l, g) {
              return (r = !!n(u, l, g))
            }),
            r
          )
        }
        function fr(t, n, r) {
          for (var u = -1, l = t.length; ++u < l; ) {
            var g = t[u],
              _ = n(g)
            if (_ != null && (y === a ? _ == _ && !be(_) : r(_, y)))
              var y = _,
                b = g
          }
          return b
        }
        function Vo(t, n) {
          var r = []
          return (
            Sn(t, function (u, l, g) {
              n(u, l, g) && r.push(u)
            }),
            r
          )
        }
        function Bt(t, n, r, u, l) {
          var g = -1,
            _ = t.length
          for (r || (r = Bh), l || (l = []); ++g < _; ) {
            var y = t[g]
            n > 0 && r(y)
              ? n > 1
                ? Bt(y, n - 1, r, u, l)
                : yn(l, y)
              : u || (l[l.length] = y)
          }
          return l
        }
        var Pi = vu(),
          Zo = vu(!0)
        function Ye(t, n) {
          return t && Pi(t, n, Ht)
        }
        function Di(t, n) {
          return t && Zo(t, n, Ht)
        }
        function gr(t, n) {
          return mn(n, function (r) {
            return hn(t[r])
          })
        }
        function Un(t, n) {
          for (var r = 0, u = (n = Cn(n, t)).length; t != null && r < u; )
            t = t[Xe(n[r++])]
          return r && r == u ? t : a
        }
        function Jo(t, n, r) {
          var u = n(t)
          return st(t) ? u : yn(u, r(t))
        }
        function ne(t) {
          return t == null
            ? t === a
              ? "[object Undefined]"
              : "[object Null]"
            : qn && qn in St(t)
              ? (function (n) {
                  var r = gt.call(n, qn),
                    u = n[qn]
                  try {
                    n[qn] = a
                    var l = !0
                  } catch {}
                  var g = er.call(n)
                  return l && (r ? (n[qn] = u) : delete n[qn]), g
                })(t)
              : (function (n) {
                  return er.call(n)
                })(t)
        }
        function qi(t, n) {
          return t > n
        }
        function qh(t, n) {
          return t != null && gt.call(t, n)
        }
        function Oh(t, n) {
          return t != null && n in St(t)
        }
        function Oi(t, n, r) {
          for (
            var u = r ? mi : Js,
              l = t[0].length,
              g = t.length,
              _ = g,
              y = O(g),
              b = 1 / 0,
              x = [];
            _--;

          ) {
            var w = t[_]
            _ && n && (w = At(w, ye(n))),
              (b = Yt(w.length, b)),
              (y[_] =
                !r && (n || (l >= 120 && w.length >= 120)) ? new kn(_ && w) : a)
          }
          w = t[0]
          var R = -1,
            U = y[0]
          t: for (; ++R < l && x.length < b; ) {
            var N = w[R],
              B = n ? n(N) : N
            if (((N = r || N !== 0 ? N : 0), !(U ? bs(U, B) : u(x, B, r)))) {
              for (_ = g; --_; ) {
                var A = y[_]
                if (!(A ? bs(A, B) : u(t[_], B, r))) continue t
              }
              U && U.push(B), x.push(N)
            }
          }
          return x
        }
        function Es(t, n, r) {
          var u = (t = ku(t, (n = Cn(n, t)))) == null ? t : t[Xe(qe(n))]
          return u == null ? a : me(u, t, r)
        }
        function Yo(t) {
          return Mt(t) && ne(t) == H
        }
        function Ts(t, n, r, u, l) {
          return (
            t === n ||
            (t == null || n == null || (!Mt(t) && !Mt(n))
              ? t != t && n != n
              : (function (g, _, y, b, x, w) {
                  var R = st(g),
                    U = st(_),
                    N = R ? W : Kt(g),
                    B = U ? W : Kt(_),
                    A = (N = N == H ? Y : N) == Y,
                    F = (B = B == H ? Y : B) == Y,
                    Z = N == B
                  if (Z && An(g)) {
                    if (!An(_)) return !1
                    ;(R = !0), (A = !1)
                  }
                  if (Z && !A)
                    return (
                      w || (w = new Ue()),
                      R || cs(g)
                        ? Tu(g, _, y, b, x, w)
                        : (function (j, J, Lt, Pt, re, wt, Xt) {
                            switch (Lt) {
                              case sn:
                                if (
                                  j.byteLength != J.byteLength ||
                                  j.byteOffset != J.byteOffset
                                )
                                  return !1
                                ;(j = j.buffer), (J = J.buffer)
                              case _n:
                                return !(
                                  j.byteLength != J.byteLength ||
                                  !wt(new sr(j), new sr(J))
                                )
                              case Q:
                              case $:
                              case le:
                                return He(+j, +J)
                              case dt:
                                return (
                                  j.name == J.name && j.message == J.message
                                )
                              case ot:
                              case _e:
                                return j == J + ""
                              case pt:
                                var Qe = Ai
                              case qt:
                                var In = 1 & Pt
                                if ((Qe || (Qe = Ks), j.size != J.size && !In))
                                  return !1
                                var qr = Xt.get(j)
                                if (qr) return qr == J
                                ;(Pt |= 2), Xt.set(j, J)
                                var Sa = Tu(Qe(j), Qe(J), Pt, re, wt, Xt)
                                return Xt.delete(j), Sa
                              case Pn:
                                if (As) return As.call(j) == As.call(J)
                            }
                            return !1
                          })(g, _, N, y, b, x, w)
                    )
                  if (!(1 & y)) {
                    var q = A && gt.call(g, "__wrapped__"),
                      et = F && gt.call(_, "__wrapped__")
                    if (q || et) {
                      var K = q ? g.value() : g,
                        ht = et ? _.value() : _
                      return w || (w = new Ue()), x(K, ht, y, b, w)
                    }
                  }
                  return (
                    !!Z &&
                    (w || (w = new Ue()),
                    (function (j, J, Lt, Pt, re, wt) {
                      var Xt = 1 & Lt,
                        Qe = Yi(j),
                        In = Qe.length,
                        qr = Yi(J),
                        Sa = qr.length
                      if (In != Sa && !Xt) return !1
                      for (var Or = In; Or--; ) {
                        var jn = Qe[Or]
                        if (!(Xt ? jn in J : gt.call(J, jn))) return !1
                      }
                      var vc = wt.get(j),
                        bc = wt.get(J)
                      if (vc && bc) return vc == J && bc == j
                      var kr = !0
                      wt.set(j, J), wt.set(J, j)
                      for (var wa = Xt; ++Or < In; ) {
                        var Lr = j[(jn = Qe[Or])],
                          Ur = J[jn]
                        if (Pt)
                          var Sc = Xt
                            ? Pt(Ur, Lr, jn, J, j, wt)
                            : Pt(Lr, Ur, jn, j, J, wt)
                        if (
                          !(Sc === a ? Lr === Ur || re(Lr, Ur, Lt, Pt, wt) : Sc)
                        ) {
                          kr = !1
                          break
                        }
                        wa || (wa = jn == "constructor")
                      }
                      if (kr && !wa) {
                        var Hr = j.constructor,
                          Nr = J.constructor
                        Hr == Nr ||
                          !("constructor" in j) ||
                          !("constructor" in J) ||
                          (typeof Hr == "function" &&
                            Hr instanceof Hr &&
                            typeof Nr == "function" &&
                            Nr instanceof Nr) ||
                          (kr = !1)
                      }
                      return wt.delete(j), wt.delete(J), kr
                    })(g, _, y, b, x, w))
                  )
                })(t, n, r, u, Ts, l))
          )
        }
        function ki(t, n, r, u) {
          var l = r.length,
            g = l,
            _ = !u
          if (t == null) return !g
          for (t = St(t); l--; ) {
            var y = r[l]
            if (_ && y[2] ? y[1] !== t[y[0]] : !(y[0] in t)) return !1
          }
          for (; ++l < g; ) {
            var b = (y = r[l])[0],
              x = t[b],
              w = y[1]
            if (_ && y[2]) {
              if (x === a && !(b in t)) return !1
            } else {
              var R = new Ue()
              if (u) var U = u(x, w, b, t, n, R)
              if (!(U === a ? Ts(w, x, 3, u, R) : U)) return !1
            }
          }
          return !0
        }
        function Ko(t) {
          return (
            !(!It(t) || ((n = t), Do && Do in n)) &&
            (hn(t) ? ph : Pl).test(Nn(t))
          )
          var n
        }
        function Xo(t) {
          return typeof t == "function"
            ? t
            : t == null
              ? ge
              : typeof t == "object"
                ? st(t)
                  ? eu(t[0], t[1])
                  : tu(t)
                : yc(t)
        }
        function Li(t) {
          if (!Ps(t)) return Sh(t)
          var n = []
          for (var r in St(t)) gt.call(t, r) && r != "constructor" && n.push(r)
          return n
        }
        function kh(t) {
          if (!It(t))
            return (function (l) {
              var g = []
              if (l != null) for (var _ in St(l)) g.push(_)
              return g
            })(t)
          var n = Ps(t),
            r = []
          for (var u in t)
            (u != "constructor" || (!n && gt.call(t, u))) && r.push(u)
          return r
        }
        function Ui(t, n) {
          return t < n
        }
        function Qo(t, n) {
          var r = -1,
            u = de(t) ? O(t.length) : []
          return (
            Sn(t, function (l, g, _) {
              u[++r] = n(l, g, _)
            }),
            u
          )
        }
        function tu(t) {
          var n = Qi(t)
          return n.length == 1 && n[0][2]
            ? qu(n[0][0], n[0][1])
            : function (r) {
                return r === t || ki(r, t, n)
              }
        }
        function eu(t, n) {
          return ea(t) && Du(n)
            ? qu(Xe(t), n)
            : function (r) {
                var u = ha(r, t)
                return u === a && u === n ? da(r, t) : Ts(n, u, 3)
              }
        }
        function pr(t, n, r, u, l) {
          t !== n &&
            Pi(
              n,
              function (g, _) {
                if ((l || (l = new Ue()), It(g)))
                  (function (b, x, w, R, U, N, B) {
                    var A = sa(b, w),
                      F = sa(x, w),
                      Z = B.get(F)
                    if (Z) Ri(b, w, Z)
                    else {
                      var q = N ? N(A, F, w + "", b, x, B) : a,
                        et = q === a
                      if (et) {
                        var K = st(F),
                          ht = !K && An(F),
                          j = !K && !ht && cs(F)
                        ;(q = F),
                          K || ht || j
                            ? st(A)
                              ? (q = A)
                              : Ft(A)
                                ? (q = he(A))
                                : ht
                                  ? ((et = !1), (q = fu(F, !0)))
                                  : j
                                    ? ((et = !1), (q = gu(F, !0)))
                                    : (q = [])
                            : qs(F) || $n(F)
                              ? ((q = A),
                                $n(A)
                                  ? (q = uc(A))
                                  : (It(A) && !hn(A)) || (q = Pu(F)))
                              : (et = !1)
                      }
                      et && (B.set(F, q), U(q, F, R, N, B), B.delete(F)),
                        Ri(b, w, q)
                    }
                  })(t, n, _, r, pr, u, l)
                else {
                  var y = u ? u(sa(t, _), g, _ + "", t, n, l) : a
                  y === a && (y = g), Ri(t, _, y)
                }
              },
              fe,
            )
        }
        function nu(t, n) {
          var r = t.length
          if (r) return ln((n += n < 0 ? r : 0), r) ? t[n] : a
        }
        function su(t, n, r) {
          n = n.length
            ? At(n, function (g) {
                return st(g)
                  ? function (_) {
                      return Un(_, g.length === 1 ? g[0] : g)
                    }
                  : g
              })
            : [ge]
          var u = -1
          n = At(n, ye(G()))
          var l = Qo(t, function (g, _, y) {
            var b = At(n, function (x) {
              return x(g)
            })
            return { criteria: b, index: ++u, value: g }
          })
          return (function (g, _) {
            var y = g.length
            for (g.sort(_); y--; ) g[y] = g[y].value
            return g
          })(l, function (g, _) {
            return (function (y, b, x) {
              for (
                var w = -1,
                  R = y.criteria,
                  U = b.criteria,
                  N = R.length,
                  B = x.length;
                ++w < N;

              ) {
                var A = pu(R[w], U[w])
                if (A) return w >= B ? A : A * (x[w] == "desc" ? -1 : 1)
              }
              return y.index - b.index
            })(g, _, r)
          })
        }
        function ru(t, n, r) {
          for (var u = -1, l = n.length, g = {}; ++u < l; ) {
            var _ = n[u],
              y = Un(t, _)
            r(y, _) && Rs(g, Cn(_, t), y)
          }
          return g
        }
        function Hi(t, n, r, u) {
          var l = u ? rh : Xn,
            g = -1,
            _ = n.length,
            y = t
          for (t === n && (n = he(n)), r && (y = At(t, ye(r))); ++g < _; )
            for (
              var b = 0, x = n[g], w = r ? r(x) : x;
              (b = l(y, w, b, u)) > -1;

            )
              y !== t && ir.call(y, b, 1), ir.call(t, b, 1)
          return t
        }
        function iu(t, n) {
          for (var r = t ? n.length : 0, u = r - 1; r--; ) {
            var l = n[r]
            if (r == u || l !== g) {
              var g = l
              ln(l) ? ir.call(t, l, 1) : zi(t, l)
            }
          }
          return t
        }
        function Ni(t, n) {
          return t + ur(Ho() * (n - t + 1))
        }
        function $i(t, n) {
          var r = ""
          if (!t || n < 1 || n > E) return r
          do n % 2 && (r += t), (n = ur(n / 2)) && (t += t)
          while (n)
          return r
        }
        function it(t, n) {
          return ra(Ou(t, n, ge), t + "")
        }
        function Lh(t) {
          return jo(ls(t))
        }
        function Uh(t, n) {
          var r = ls(t)
          return Ar(r, Ln(n, 0, r.length))
        }
        function Rs(t, n, r, u) {
          if (!It(t)) return t
          for (
            var l = -1, g = (n = Cn(n, t)).length, _ = g - 1, y = t;
            y != null && ++l < g;

          ) {
            var b = Xe(n[l]),
              x = r
            if (b === "__proto__" || b === "constructor" || b === "prototype")
              return t
            if (l != _) {
              var w = y[b]
              ;(x = u ? u(w, b, y) : a) === a &&
                (x = It(w) ? w : ln(n[l + 1]) ? [] : {})
            }
            Is(y, b, x), (y = y[b])
          }
          return t
        }
        var au = cr
            ? function (t, n) {
                return cr.set(t, n), t
              }
            : ge,
          Hh = ar
            ? function (t, n) {
                return ar(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: ga(n),
                  writable: !0,
                })
              }
            : ge
        function Nh(t) {
          return Ar(ls(t))
        }
        function De(t, n, r) {
          var u = -1,
            l = t.length
          n < 0 && (n = -n > l ? 0 : l + n),
            (r = r > l ? l : r) < 0 && (r += l),
            (l = n > r ? 0 : (r - n) >>> 0),
            (n >>>= 0)
          for (var g = O(l); ++u < l; ) g[u] = t[u + n]
          return g
        }
        function $h(t, n) {
          var r
          return (
            Sn(t, function (u, l, g) {
              return !(r = n(u, l, g))
            }),
            !!r
          )
        }
        function _r(t, n, r) {
          var u = 0,
            l = t == null ? u : t.length
          if (typeof n == "number" && n == n && l <= 2147483647) {
            for (; u < l; ) {
              var g = (u + l) >>> 1,
                _ = t[g]
              _ !== null && !be(_) && (r ? _ <= n : _ < n)
                ? (u = g + 1)
                : (l = g)
            }
            return l
          }
          return ji(t, n, ge, r)
        }
        function ji(t, n, r, u) {
          var l = 0,
            g = t == null ? 0 : t.length
          if (g === 0) return 0
          for (
            var _ = (n = r(n)) != n, y = n === null, b = be(n), x = n === a;
            l < g;

          ) {
            var w = ur((l + g) / 2),
              R = r(t[w]),
              U = R !== a,
              N = R === null,
              B = R == R,
              A = be(R)
            if (_) var F = u || B
            else
              F = x
                ? B && (u || U)
                : y
                  ? B && U && (u || !N)
                  : b
                    ? B && U && !N && (u || !A)
                    : !N && !A && (u ? R <= n : R < n)
            F ? (l = w + 1) : (g = w)
          }
          return Yt(g, 4294967294)
        }
        function ou(t, n) {
          for (var r = -1, u = t.length, l = 0, g = []; ++r < u; ) {
            var _ = t[r],
              y = n ? n(_) : _
            if (!r || !He(y, b)) {
              var b = y
              g[l++] = _ === 0 ? 0 : _
            }
          }
          return g
        }
        function uu(t) {
          return typeof t == "number" ? t : be(t) ? P : +t
        }
        function ve(t) {
          if (typeof t == "string") return t
          if (st(t)) return At(t, ve) + ""
          if (be(t)) return No ? No.call(t) : ""
          var n = t + ""
          return n == "0" && 1 / t == -1 / 0 ? "-0" : n
        }
        function wn(t, n, r) {
          var u = -1,
            l = Js,
            g = t.length,
            _ = !0,
            y = [],
            b = y
          if (r) (_ = !1), (l = mi)
          else if (g >= 200) {
            var x = n ? null : zh(t)
            if (x) return Ks(x)
            ;(_ = !1), (l = bs), (b = new kn())
          } else b = n ? [] : y
          t: for (; ++u < g; ) {
            var w = t[u],
              R = n ? n(w) : w
            if (((w = r || w !== 0 ? w : 0), _ && R == R)) {
              for (var U = b.length; U--; ) if (b[U] === R) continue t
              n && b.push(R), y.push(w)
            } else l(b, R, r) || (b !== y && b.push(R), y.push(w))
          }
          return y
        }
        function zi(t, n) {
          return (t = ku(t, (n = Cn(n, t)))) == null || delete t[Xe(qe(n))]
        }
        function cu(t, n, r, u) {
          return Rs(t, n, r(Un(t, n)), u)
        }
        function mr(t, n, r, u) {
          for (
            var l = t.length, g = u ? l : -1;
            (u ? g-- : ++g < l) && n(t[g], g, t);

          );
          return r
            ? De(t, u ? 0 : g, u ? g + 1 : l)
            : De(t, u ? g + 1 : 0, u ? l : g)
        }
        function lu(t, n) {
          var r = t
          return (
            r instanceof at && (r = r.value()),
            yi(
              n,
              function (u, l) {
                return l.func.apply(l.thisArg, yn([u], l.args))
              },
              r,
            )
          )
        }
        function Wi(t, n, r) {
          var u = t.length
          if (u < 2) return u ? wn(t[0]) : []
          for (var l = -1, g = O(u); ++l < u; )
            for (var _ = t[l], y = -1; ++y < u; )
              y != l && (g[l] = Ms(g[l] || _, t[y], n, r))
          return wn(Bt(g, 1), n, r)
        }
        function hu(t, n, r) {
          for (var u = -1, l = t.length, g = n.length, _ = {}; ++u < l; ) {
            var y = u < g ? n[u] : a
            r(_, t[u], y)
          }
          return _
        }
        function Bi(t) {
          return Ft(t) ? t : []
        }
        function Gi(t) {
          return typeof t == "function" ? t : ge
        }
        function Cn(t, n) {
          return st(t) ? t : ea(t, n) ? [t] : Nu(ft(t))
        }
        var jh = it
        function xn(t, n, r) {
          var u = t.length
          return (r = r === a ? u : r), !n && r >= u ? t : De(t, n, r)
        }
        var du =
          _h ||
          function (t) {
            return Wt.clearTimeout(t)
          }
        function fu(t, n) {
          if (n) return t.slice()
          var r = t.length,
            u = qo ? qo(r) : new t.constructor(r)
          return t.copy(u), u
        }
        function Vi(t) {
          var n = new t.constructor(t.byteLength)
          return new sr(n).set(new sr(t)), n
        }
        function gu(t, n) {
          var r = n ? Vi(t.buffer) : t.buffer
          return new t.constructor(r, t.byteOffset, t.length)
        }
        function pu(t, n) {
          if (t !== n) {
            var r = t !== a,
              u = t === null,
              l = t == t,
              g = be(t),
              _ = n !== a,
              y = n === null,
              b = n == n,
              x = be(n)
            if (
              (!y && !x && !g && t > n) ||
              (g && _ && b && !y && !x) ||
              (u && _ && b) ||
              (!r && b) ||
              !l
            )
              return 1
            if (
              (!u && !g && !x && t < n) ||
              (x && r && l && !u && !g) ||
              (y && r && l) ||
              (!_ && l) ||
              !b
            )
              return -1
          }
          return 0
        }
        function _u(t, n, r, u) {
          for (
            var l = -1,
              g = t.length,
              _ = r.length,
              y = -1,
              b = n.length,
              x = kt(g - _, 0),
              w = O(b + x),
              R = !u;
            ++y < b;

          )
            w[y] = n[y]
          for (; ++l < _; ) (R || l < g) && (w[r[l]] = t[l])
          for (; x--; ) w[y++] = t[l++]
          return w
        }
        function mu(t, n, r, u) {
          for (
            var l = -1,
              g = t.length,
              _ = -1,
              y = r.length,
              b = -1,
              x = n.length,
              w = kt(g - y, 0),
              R = O(w + x),
              U = !u;
            ++l < w;

          )
            R[l] = t[l]
          for (var N = l; ++b < x; ) R[N + b] = n[b]
          for (; ++_ < y; ) (U || l < g) && (R[N + r[_]] = t[l++])
          return R
        }
        function he(t, n) {
          var r = -1,
            u = t.length
          for (n || (n = O(u)); ++r < u; ) n[r] = t[r]
          return n
        }
        function Ke(t, n, r, u) {
          var l = !r
          r || (r = {})
          for (var g = -1, _ = n.length; ++g < _; ) {
            var y = n[g],
              b = u ? u(r[y], t[y], y, r, t) : a
            b === a && (b = t[y]), l ? on(r, y, b) : Is(r, y, b)
          }
          return r
        }
        function yr(t, n) {
          return function (r, u) {
            var l = st(r) ? th : Ph,
              g = n ? n() : {}
            return l(r, t, G(u, 2), g)
          }
        }
        function as(t) {
          return it(function (n, r) {
            var u = -1,
              l = r.length,
              g = l > 1 ? r[l - 1] : a,
              _ = l > 2 ? r[2] : a
            for (
              g = t.length > 3 && typeof g == "function" ? (l--, g) : a,
                _ && se(r[0], r[1], _) && ((g = l < 3 ? a : g), (l = 1)),
                n = St(n);
              ++u < l;

            ) {
              var y = r[u]
              y && t(n, y, u, g)
            }
            return n
          })
        }
        function yu(t, n) {
          return function (r, u) {
            if (r == null) return r
            if (!de(r)) return t(r, u)
            for (
              var l = r.length, g = n ? l : -1, _ = St(r);
              (n ? g-- : ++g < l) && u(_[g], g, _) !== !1;

            );
            return r
          }
        }
        function vu(t) {
          return function (n, r, u) {
            for (var l = -1, g = St(n), _ = u(n), y = _.length; y--; ) {
              var b = _[t ? y : ++l]
              if (r(g[b], b, g) === !1) break
            }
            return n
          }
        }
        function bu(t) {
          return function (n) {
            var r = Qn((n = ft(n))) ? Le(n) : a,
              u = r ? r[0] : n.charAt(0),
              l = r ? xn(r, 1).join("") : n.slice(1)
            return u[t]() + l
          }
        }
        function os(t) {
          return function (n) {
            return yi(_c(pc(n).replace(zl, "")), t, "")
          }
        }
        function Fs(t) {
          return function () {
            var n = arguments
            switch (n.length) {
              case 0:
                return new t()
              case 1:
                return new t(n[0])
              case 2:
                return new t(n[0], n[1])
              case 3:
                return new t(n[0], n[1], n[2])
              case 4:
                return new t(n[0], n[1], n[2], n[3])
              case 5:
                return new t(n[0], n[1], n[2], n[3], n[4])
              case 6:
                return new t(n[0], n[1], n[2], n[3], n[4], n[5])
              case 7:
                return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
            }
            var r = is(t.prototype),
              u = t.apply(r, n)
            return It(u) ? u : r
          }
        }
        function Su(t) {
          return function (n, r, u) {
            var l = St(n)
            if (!de(n)) {
              var g = G(r, 3)
              ;(n = Ht(n)),
                (r = function (y) {
                  return g(l[y], y, l)
                })
            }
            var _ = t(n, r, u)
            return _ > -1 ? l[g ? n[_] : _] : a
          }
        }
        function wu(t) {
          return cn(function (n) {
            var r = n.length,
              u = r,
              l = Fe.prototype.thru
            for (t && n.reverse(); u--; ) {
              var g = n[u]
              if (typeof g != "function") throw new Re(e)
              if (l && !_ && Cr(g) == "wrapper") var _ = new Fe([], !0)
            }
            for (u = _ ? u : r; ++u < r; ) {
              var y = Cr((g = n[u])),
                b = y == "wrapper" ? Xi(g) : a
              _ =
                b && na(b[0]) && b[1] == 424 && !b[4].length && b[9] == 1
                  ? _[Cr(b[0])].apply(_, b[3])
                  : g.length == 1 && na(g)
                    ? _[y]()
                    : _.thru(g)
            }
            return function () {
              var x = arguments,
                w = x[0]
              if (_ && x.length == 1 && st(w)) return _.plant(w).value()
              for (var R = 0, U = r ? n[R].apply(this, x) : w; ++R < r; )
                U = n[R].call(this, U)
              return U
            }
          })
        }
        function vr(t, n, r, u, l, g, _, y, b, x) {
          var w = n & m,
            R = 1 & n,
            U = 2 & n,
            N = 24 & n,
            B = 512 & n,
            A = U ? a : Fs(t)
          return function F() {
            for (var Z = arguments.length, q = O(Z), et = Z; et--; )
              q[et] = arguments[et]
            if (N)
              var K = us(F),
                ht = (function (Pt, re) {
                  for (var wt = Pt.length, Xt = 0; wt--; ) Pt[wt] === re && ++Xt
                  return Xt
                })(q, K)
            if (
              (u && (q = _u(q, u, l, N)),
              g && (q = mu(q, g, _, N)),
              (Z -= ht),
              N && Z < x)
            ) {
              var j = vn(q, K)
              return Au(t, n, vr, F.placeholder, r, q, j, y, b, x - Z)
            }
            var J = R ? r : this,
              Lt = U ? J[t] : t
            return (
              (Z = q.length),
              y
                ? (q = (function (Pt, re) {
                    for (
                      var wt = Pt.length, Xt = Yt(re.length, wt), Qe = he(Pt);
                      Xt--;

                    ) {
                      var In = re[Xt]
                      Pt[Xt] = ln(In, wt) ? Qe[In] : a
                    }
                    return Pt
                  })(q, y))
                : B && Z > 1 && q.reverse(),
              w && b < Z && (q.length = b),
              this && this !== Wt && this instanceof F && (Lt = A || Fs(Lt)),
              Lt.apply(J, q)
            )
          }
        }
        function Cu(t, n) {
          return function (r, u) {
            return (function (l, g, _, y) {
              return (
                Ye(l, function (b, x, w) {
                  g(y, _(b), x, w)
                }),
                y
              )
            })(r, t, n(u), {})
          }
        }
        function br(t, n) {
          return function (r, u) {
            var l
            if (r === a && u === a) return n
            if ((r !== a && (l = r), u !== a)) {
              if (l === a) return u
              typeof r == "string" || typeof u == "string"
                ? ((r = ve(r)), (u = ve(u)))
                : ((r = uu(r)), (u = uu(u))),
                (l = t(r, u))
            }
            return l
          }
        }
        function Zi(t) {
          return cn(function (n) {
            return (
              (n = At(n, ye(G()))),
              it(function (r) {
                var u = this
                return t(n, function (l) {
                  return me(l, u, r)
                })
              })
            )
          })
        }
        function Sr(t, n) {
          var r = (n = n === a ? " " : ve(n)).length
          if (r < 2) return r ? $i(n, t) : n
          var u = $i(n, or(t / ts(n)))
          return Qn(n) ? xn(Le(u), 0, t).join("") : u.slice(0, t)
        }
        function xu(t) {
          return function (n, r, u) {
            return (
              u && typeof u != "number" && se(n, r, u) && (r = u = a),
              (n = dn(n)),
              r === a ? ((r = n), (n = 0)) : (r = dn(r)),
              (function (l, g, _, y) {
                for (
                  var b = -1, x = kt(or((g - l) / (_ || 1)), 0), w = O(x);
                  x--;

                )
                  (w[y ? x : ++b] = l), (l += _)
                return w
              })(n, r, (u = u === a ? (n < r ? 1 : -1) : dn(u)), t)
            )
          }
        }
        function wr(t) {
          return function (n, r) {
            return (
              (typeof n == "string" && typeof r == "string") ||
                ((n = Oe(n)), (r = Oe(r))),
              t(n, r)
            )
          }
        }
        function Au(t, n, r, u, l, g, _, y, b, x) {
          var w = 8 & n
          ;(n |= w ? c : f), 4 & (n &= ~(w ? f : c)) || (n &= -4)
          var R = [
              t,
              n,
              l,
              w ? g : a,
              w ? _ : a,
              w ? a : g,
              w ? a : _,
              y,
              b,
              x,
            ],
            U = r.apply(a, R)
          return na(t) && Lu(U, R), (U.placeholder = u), Uu(U, t, n)
        }
        function Ji(t) {
          var n = Je[t]
          return function (r, u) {
            if (((r = Oe(r)), (u = u == null ? 0 : Yt(rt(u), 292)) && Uo(r))) {
              var l = (ft(r) + "e").split("e")
              return +(
                (l = (ft(n(l[0] + "e" + (+l[1] + u))) + "e").split("e"))[0] +
                "e" +
                (+l[1] - u)
              )
            }
            return n(r)
          }
        }
        var zh =
          ss && 1 / Ks(new ss([, -0]))[1] == C
            ? function (t) {
                return new ss(t)
              }
            : ma
        function Iu(t) {
          return function (n) {
            var r = Kt(n)
            return r == pt
              ? Ai(n)
              : r == qt
                ? uh(n)
                : (function (u, l) {
                    return At(l, function (g) {
                      return [g, u[g]]
                    })
                  })(n, t(n))
          }
        }
        function un(t, n, r, u, l, g, _, y) {
          var b = 2 & n
          if (!b && typeof t != "function") throw new Re(e)
          var x = u ? u.length : 0
          if (
            (x || ((n &= -97), (u = l = a)),
            (_ = _ === a ? _ : kt(rt(_), 0)),
            (y = y === a ? y : rt(y)),
            (x -= l ? l.length : 0),
            n & f)
          ) {
            var w = u,
              R = l
            u = l = a
          }
          var U = b ? a : Xi(t),
            N = [t, n, r, u, l, w, R, g, _, y]
          if (
            (U &&
              (function (A, F) {
                var Z = A[1],
                  q = F[1],
                  et = Z | q,
                  K = et < 131,
                  ht =
                    (q == m && Z == 8) ||
                    (q == m && Z == v && A[7].length <= F[8]) ||
                    (q == 384 && F[7].length <= F[8] && Z == 8)
                if (!K && !ht) return A
                1 & q && ((A[2] = F[2]), (et |= 1 & Z ? 0 : 4))
                var j = F[3]
                if (j) {
                  var J = A[3]
                  ;(A[3] = J ? _u(J, j, F[4]) : j),
                    (A[4] = J ? vn(A[3], i) : F[4])
                }
                ;(j = F[5]) &&
                  ((J = A[5]),
                  (A[5] = J ? mu(J, j, F[6]) : j),
                  (A[6] = J ? vn(A[5], i) : F[6])),
                  (j = F[7]) && (A[7] = j),
                  q & m && (A[8] = A[8] == null ? F[8] : Yt(A[8], F[8])),
                  A[9] == null && (A[9] = F[9]),
                  (A[0] = F[0]),
                  (A[1] = et)
              })(N, U),
            (t = N[0]),
            (n = N[1]),
            (r = N[2]),
            (u = N[3]),
            (l = N[4]),
            !(y = N[9] = N[9] === a ? (b ? 0 : t.length) : kt(N[9] - x, 0)) &&
              24 & n &&
              (n &= -25),
            n && n != 1)
          )
            B =
              n == 8 || n == o
                ? (function (A, F, Z) {
                    var q = Fs(A)
                    return function et() {
                      for (
                        var K = arguments.length, ht = O(K), j = K, J = us(et);
                        j--;

                      )
                        ht[j] = arguments[j]
                      var Lt =
                        K < 3 && ht[0] !== J && ht[K - 1] !== J ? [] : vn(ht, J)
                      return (K -= Lt.length) < Z
                        ? Au(A, F, vr, et.placeholder, a, ht, Lt, a, a, Z - K)
                        : me(
                            this && this !== Wt && this instanceof et ? q : A,
                            this,
                            ht,
                          )
                    }
                  })(t, n, y)
                : (n != c && n != 33) || l.length
                  ? vr.apply(a, N)
                  : (function (A, F, Z, q) {
                      var et = 1 & F,
                        K = Fs(A)
                      return function ht() {
                        for (
                          var j = -1,
                            J = arguments.length,
                            Lt = -1,
                            Pt = q.length,
                            re = O(Pt + J),
                            wt =
                              this && this !== Wt && this instanceof ht ? K : A;
                          ++Lt < Pt;

                        )
                          re[Lt] = q[Lt]
                        for (; J--; ) re[Lt++] = arguments[++j]
                        return me(wt, et ? Z : this, re)
                      }
                    })(t, n, r, u)
          else
            var B = (function (A, F, Z) {
              var q = 1 & F,
                et = Fs(A)
              return function K() {
                return (
                  this && this !== Wt && this instanceof K ? et : A
                ).apply(q ? Z : this, arguments)
              }
            })(t, n, r)
          return Uu((U ? au : Lu)(B, N), t, n)
        }
        function Mu(t, n, r, u) {
          return t === a || (He(t, ns[r]) && !gt.call(u, r)) ? n : t
        }
        function Eu(t, n, r, u, l, g) {
          return (
            It(t) && It(n) && (g.set(n, t), pr(t, n, a, Eu, g), g.delete(n)), t
          )
        }
        function Wh(t) {
          return qs(t) ? a : t
        }
        function Tu(t, n, r, u, l, g) {
          var _ = 1 & r,
            y = t.length,
            b = n.length
          if (y != b && !(_ && b > y)) return !1
          var x = g.get(t),
            w = g.get(n)
          if (x && w) return x == n && w == t
          var R = -1,
            U = !0,
            N = 2 & r ? new kn() : a
          for (g.set(t, n), g.set(n, t); ++R < y; ) {
            var B = t[R],
              A = n[R]
            if (u) var F = _ ? u(A, B, R, n, t, g) : u(B, A, R, t, n, g)
            if (F !== a) {
              if (F) continue
              U = !1
              break
            }
            if (N) {
              if (
                !vi(n, function (Z, q) {
                  if (!bs(N, q) && (B === Z || l(B, Z, r, u, g)))
                    return N.push(q)
                })
              ) {
                U = !1
                break
              }
            } else if (B !== A && !l(B, A, r, u, g)) {
              U = !1
              break
            }
          }
          return g.delete(t), g.delete(n), U
        }
        function cn(t) {
          return ra(Ou(t, a, Wu), t + "")
        }
        function Yi(t) {
          return Jo(t, Ht, ta)
        }
        function Ki(t) {
          return Jo(t, fe, Ru)
        }
        var Xi = cr
          ? function (t) {
              return cr.get(t)
            }
          : ma
        function Cr(t) {
          for (
            var n = t.name + "", r = rs[n], u = gt.call(rs, n) ? r.length : 0;
            u--;

          ) {
            var l = r[u],
              g = l.func
            if (g == null || g == t) return l.name
          }
          return n
        }
        function us(t) {
          return (gt.call(h, "placeholder") ? h : t).placeholder
        }
        function G() {
          var t = h.iteratee || pa
          return (
            (t = t === pa ? Xo : t),
            arguments.length ? t(arguments[0], arguments[1]) : t
          )
        }
        function xr(t, n) {
          var r,
            u,
            l = t.__data__
          return (
            (u = typeof (r = n)) == "string" ||
            u == "number" ||
            u == "symbol" ||
            u == "boolean"
              ? r !== "__proto__"
              : r === null
          )
            ? l[typeof n == "string" ? "string" : "hash"]
            : l.map
        }
        function Qi(t) {
          for (var n = Ht(t), r = n.length; r--; ) {
            var u = n[r],
              l = t[u]
            n[r] = [u, l, Du(l)]
          }
          return n
        }
        function Hn(t, n) {
          var r = (function (u, l) {
            return u == null ? a : u[l]
          })(t, n)
          return Ko(r) ? r : a
        }
        var ta = Mi
            ? function (t) {
                return t == null
                  ? []
                  : ((t = St(t)),
                    mn(Mi(t), function (n) {
                      return ko.call(t, n)
                    }))
              }
            : ya,
          Ru = Mi
            ? function (t) {
                for (var n = []; t; ) yn(n, ta(t)), (t = rr(t))
                return n
              }
            : ya,
          Kt = ne
        function Fu(t, n, r) {
          for (var u = -1, l = (n = Cn(n, t)).length, g = !1; ++u < l; ) {
            var _ = Xe(n[u])
            if (!(g = t != null && r(t, _))) break
            t = t[_]
          }
          return g || ++u != l
            ? g
            : !!(l = t == null ? 0 : t.length) &&
                Fr(l) &&
                ln(_, l) &&
                (st(t) || $n(t))
        }
        function Pu(t) {
          return typeof t.constructor != "function" || Ps(t) ? {} : is(rr(t))
        }
        function Bh(t) {
          return st(t) || $n(t) || !!(Lo && t && t[Lo])
        }
        function ln(t, n) {
          var r = typeof t
          return (
            !!(n = n ?? E) &&
            (r == "number" || (r != "symbol" && ql.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < n
          )
        }
        function se(t, n, r) {
          if (!It(r)) return !1
          var u = typeof n
          return (
            !!(u == "number"
              ? de(r) && ln(n, r.length)
              : u == "string" && n in r) && He(r[n], t)
          )
        }
        function ea(t, n) {
          if (st(t)) return !1
          var r = typeof t
          return (
            !(
              r != "number" &&
              r != "symbol" &&
              r != "boolean" &&
              t != null &&
              !be(t)
            ) ||
            vl.test(t) ||
            !yl.test(t) ||
            (n != null && t in St(n))
          )
        }
        function na(t) {
          var n = Cr(t),
            r = h[n]
          if (typeof r != "function" || !(n in at.prototype)) return !1
          if (t === r) return !0
          var u = Xi(r)
          return !!u && t === u[0]
        }
        ;((Ei && Kt(new Ei(new ArrayBuffer(1))) != sn) ||
          (ws && Kt(new ws()) != pt) ||
          (Ti && Kt(Ti.resolve()) != _t) ||
          (ss && Kt(new ss()) != qt) ||
          (Cs && Kt(new Cs()) != pn)) &&
          (Kt = function (t) {
            var n = ne(t),
              r = n == Y ? t.constructor : a,
              u = r ? Nn(r) : ""
            if (u)
              switch (u) {
                case Ah:
                  return sn
                case Ih:
                  return pt
                case Mh:
                  return _t
                case Eh:
                  return qt
                case Th:
                  return pn
              }
            return n
          })
        var Gh = Qs ? hn : va
        function Ps(t) {
          var n = t && t.constructor
          return t === ((typeof n == "function" && n.prototype) || ns)
        }
        function Du(t) {
          return t == t && !It(t)
        }
        function qu(t, n) {
          return function (r) {
            return r != null && r[t] === n && (n !== a || t in St(r))
          }
        }
        function Ou(t, n, r) {
          return (
            (n = kt(n === a ? t.length - 1 : n, 0)),
            function () {
              for (
                var u = arguments, l = -1, g = kt(u.length - n, 0), _ = O(g);
                ++l < g;

              )
                _[l] = u[n + l]
              l = -1
              for (var y = O(n + 1); ++l < n; ) y[l] = u[l]
              return (y[n] = r(_)), me(t, this, y)
            }
          )
        }
        function ku(t, n) {
          return n.length < 2 ? t : Un(t, De(n, 0, -1))
        }
        function sa(t, n) {
          if (
            (n !== "constructor" || typeof t[n] != "function") &&
            n != "__proto__"
          )
            return t[n]
        }
        var Lu = Hu(au),
          Ds =
            yh ||
            function (t, n) {
              return Wt.setTimeout(t, n)
            },
          ra = Hu(Hh)
        function Uu(t, n, r) {
          var u = n + ""
          return ra(
            t,
            (function (l, g) {
              var _ = g.length
              if (!_) return l
              var y = _ - 1
              return (
                (g[y] = (_ > 1 ? "& " : "") + g[y]),
                (g = g.join(_ > 2 ? ", " : " ")),
                l.replace(
                  Cl,
                  `{
/* [wrapped with ` +
                    g +
                    `] */
`,
                )
              )
            })(
              u,
              (function (l, g) {
                return (
                  Te(z, function (_) {
                    var y = "_." + _[0]
                    g & _[1] && !Js(l, y) && l.push(y)
                  }),
                  l.sort()
                )
              })(
                (function (l) {
                  var g = l.match(xl)
                  return g ? g[1].split(Al) : []
                })(u),
                r,
              ),
            ),
          )
        }
        function Hu(t) {
          var n = 0,
            r = 0
          return function () {
            var u = wh(),
              l = 16 - (u - r)
            if (((r = u), l > 0)) {
              if (++n >= 800) return arguments[0]
            } else n = 0
            return t.apply(a, arguments)
          }
        }
        function Ar(t, n) {
          var r = -1,
            u = t.length,
            l = u - 1
          for (n = n === a ? u : n; ++r < n; ) {
            var g = Ni(r, l),
              _ = t[g]
            ;(t[g] = t[r]), (t[r] = _)
          }
          return (t.length = n), t
        }
        var Nu = (function (t) {
          var n = Tr(t, function (u) {
              return r.size === 500 && r.clear(), u
            }),
            r = n.cache
          return n
        })(function (t) {
          var n = []
          return (
            t.charCodeAt(0) === 46 && n.push(""),
            t.replace(bl, function (r, u, l, g) {
              n.push(l ? g.replace(El, "$1") : u || r)
            }),
            n
          )
        })
        function Xe(t) {
          if (typeof t == "string" || be(t)) return t
          var n = t + ""
          return n == "0" && 1 / t == -1 / 0 ? "-0" : n
        }
        function Nn(t) {
          if (t != null) {
            try {
              return tr.call(t)
            } catch {}
            try {
              return t + ""
            } catch {}
          }
          return ""
        }
        function $u(t) {
          if (t instanceof at) return t.clone()
          var n = new Fe(t.__wrapped__, t.__chain__)
          return (
            (n.__actions__ = he(t.__actions__)),
            (n.__index__ = t.__index__),
            (n.__values__ = t.__values__),
            n
          )
        }
        var Vh = it(function (t, n) {
            return Ft(t) ? Ms(t, Bt(n, 1, Ft, !0)) : []
          }),
          Zh = it(function (t, n) {
            var r = qe(n)
            return (
              Ft(r) && (r = a), Ft(t) ? Ms(t, Bt(n, 1, Ft, !0), G(r, 2)) : []
            )
          }),
          Jh = it(function (t, n) {
            var r = qe(n)
            return Ft(r) && (r = a), Ft(t) ? Ms(t, Bt(n, 1, Ft, !0), a, r) : []
          })
        function ju(t, n, r) {
          var u = t == null ? 0 : t.length
          if (!u) return -1
          var l = r == null ? 0 : rt(r)
          return l < 0 && (l = kt(u + l, 0)), Ys(t, G(n, 3), l)
        }
        function zu(t, n, r) {
          var u = t == null ? 0 : t.length
          if (!u) return -1
          var l = u - 1
          return (
            r !== a && ((l = rt(r)), (l = r < 0 ? kt(u + l, 0) : Yt(l, u - 1))),
            Ys(t, G(n, 3), l, !0)
          )
        }
        function Wu(t) {
          return t != null && t.length ? Bt(t, 1) : []
        }
        function Bu(t) {
          return t && t.length ? t[0] : a
        }
        var Yh = it(function (t) {
            var n = At(t, Bi)
            return n.length && n[0] === t[0] ? Oi(n) : []
          }),
          Kh = it(function (t) {
            var n = qe(t),
              r = At(t, Bi)
            return (
              n === qe(r) ? (n = a) : r.pop(),
              r.length && r[0] === t[0] ? Oi(r, G(n, 2)) : []
            )
          }),
          Xh = it(function (t) {
            var n = qe(t),
              r = At(t, Bi)
            return (
              (n = typeof n == "function" ? n : a) && r.pop(),
              r.length && r[0] === t[0] ? Oi(r, a, n) : []
            )
          })
        function qe(t) {
          var n = t == null ? 0 : t.length
          return n ? t[n - 1] : a
        }
        var Qh = it(Gu)
        function Gu(t, n) {
          return t && t.length && n && n.length ? Hi(t, n) : t
        }
        var td = cn(function (t, n) {
          var r = t == null ? 0 : t.length,
            u = Fi(t, n)
          return (
            iu(
              t,
              At(n, function (l) {
                return ln(l, r) ? +l : l
              }).sort(pu),
            ),
            u
          )
        })
        function ia(t) {
          return t == null ? t : xh.call(t)
        }
        var ed = it(function (t) {
            return wn(Bt(t, 1, Ft, !0))
          }),
          nd = it(function (t) {
            var n = qe(t)
            return Ft(n) && (n = a), wn(Bt(t, 1, Ft, !0), G(n, 2))
          }),
          sd = it(function (t) {
            var n = qe(t)
            return (
              (n = typeof n == "function" ? n : a), wn(Bt(t, 1, Ft, !0), a, n)
            )
          })
        function aa(t) {
          if (!t || !t.length) return []
          var n = 0
          return (
            (t = mn(t, function (r) {
              if (Ft(r)) return (n = kt(r.length, n)), !0
            })),
            Ci(n, function (r) {
              return At(t, bi(r))
            })
          )
        }
        function Vu(t, n) {
          if (!t || !t.length) return []
          var r = aa(t)
          return n == null
            ? r
            : At(r, function (u) {
                return me(n, a, u)
              })
        }
        var rd = it(function (t, n) {
            return Ft(t) ? Ms(t, n) : []
          }),
          id = it(function (t) {
            return Wi(mn(t, Ft))
          }),
          ad = it(function (t) {
            var n = qe(t)
            return Ft(n) && (n = a), Wi(mn(t, Ft), G(n, 2))
          }),
          od = it(function (t) {
            var n = qe(t)
            return (n = typeof n == "function" ? n : a), Wi(mn(t, Ft), a, n)
          }),
          ud = it(aa),
          cd = it(function (t) {
            var n = t.length,
              r = n > 1 ? t[n - 1] : a
            return (r = typeof r == "function" ? (t.pop(), r) : a), Vu(t, r)
          })
        function Zu(t) {
          var n = h(t)
          return (n.__chain__ = !0), n
        }
        function Ir(t, n) {
          return n(t)
        }
        var ld = cn(function (t) {
            var n = t.length,
              r = n ? t[0] : 0,
              u = this.__wrapped__,
              l = function (g) {
                return Fi(g, t)
              }
            return !(n > 1 || this.__actions__.length) &&
              u instanceof at &&
              ln(r)
              ? ((u = u.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                  func: Ir,
                  args: [l],
                  thisArg: a,
                }),
                new Fe(u, this.__chain__).thru(function (g) {
                  return n && !g.length && g.push(a), g
                }))
              : this.thru(l)
          }),
          hd = yr(function (t, n, r) {
            gt.call(t, r) ? ++t[r] : on(t, r, 1)
          }),
          dd = Su(ju),
          fd = Su(zu)
        function Ju(t, n) {
          return (st(t) ? Te : Sn)(t, G(n, 3))
        }
        function Yu(t, n) {
          return (st(t) ? eh : Go)(t, G(n, 3))
        }
        var gd = yr(function (t, n, r) {
            gt.call(t, r) ? t[r].push(n) : on(t, r, [n])
          }),
          pd = it(function (t, n, r) {
            var u = -1,
              l = typeof n == "function",
              g = de(t) ? O(t.length) : []
            return (
              Sn(t, function (_) {
                g[++u] = l ? me(n, _, r) : Es(_, n, r)
              }),
              g
            )
          }),
          _d = yr(function (t, n, r) {
            on(t, r, n)
          })
        function Mr(t, n) {
          return (st(t) ? At : Qo)(t, G(n, 3))
        }
        var md = yr(
            function (t, n, r) {
              t[r ? 0 : 1].push(n)
            },
            function () {
              return [[], []]
            },
          ),
          yd = it(function (t, n) {
            if (t == null) return []
            var r = n.length
            return (
              r > 1 && se(t, n[0], n[1])
                ? (n = [])
                : r > 2 && se(n[0], n[1], n[2]) && (n = [n[0]]),
              su(t, Bt(n, 1), [])
            )
          }),
          Er =
            mh ||
            function () {
              return Wt.Date.now()
            }
        function Ku(t, n, r) {
          return (
            (n = r ? a : n),
            (n = t && n == null ? t.length : n),
            un(t, m, a, a, a, a, n)
          )
        }
        function Xu(t, n) {
          var r
          if (typeof n != "function") throw new Re(e)
          return (
            (t = rt(t)),
            function () {
              return (
                --t > 0 && (r = n.apply(this, arguments)), t <= 1 && (n = a), r
              )
            }
          )
        }
        var oa = it(function (t, n, r) {
            var u = 1
            if (r.length) {
              var l = vn(r, us(oa))
              u |= c
            }
            return un(t, u, n, r, l)
          }),
          Qu = it(function (t, n, r) {
            var u = 3
            if (r.length) {
              var l = vn(r, us(Qu))
              u |= c
            }
            return un(n, u, t, r, l)
          })
        function tc(t, n, r) {
          var u,
            l,
            g,
            _,
            y,
            b,
            x = 0,
            w = !1,
            R = !1,
            U = !0
          if (typeof t != "function") throw new Re(e)
          function N(q) {
            var et = u,
              K = l
            return (u = l = a), (x = q), (_ = t.apply(K, et))
          }
          function B(q) {
            var et = q - b
            return b === a || et >= n || et < 0 || (R && q - x >= g)
          }
          function A() {
            var q = Er()
            if (B(q)) return F(q)
            y = Ds(
              A,
              (function (et) {
                var K = n - (et - b)
                return R ? Yt(K, g - (et - x)) : K
              })(q),
            )
          }
          function F(q) {
            return (y = a), U && u ? N(q) : ((u = l = a), _)
          }
          function Z() {
            var q = Er(),
              et = B(q)
            if (((u = arguments), (l = this), (b = q), et)) {
              if (y === a)
                return (function (K) {
                  return (x = K), (y = Ds(A, n)), w ? N(K) : _
                })(b)
              if (R) return du(y), (y = Ds(A, n)), N(b)
            }
            return y === a && (y = Ds(A, n)), _
          }
          return (
            (n = Oe(n) || 0),
            It(r) &&
              ((w = !!r.leading),
              (g = (R = "maxWait" in r) ? kt(Oe(r.maxWait) || 0, n) : g),
              (U = "trailing" in r ? !!r.trailing : U)),
            (Z.cancel = function () {
              y !== a && du(y), (x = 0), (u = b = l = y = a)
            }),
            (Z.flush = function () {
              return y === a ? _ : F(Er())
            }),
            Z
          )
        }
        var vd = it(function (t, n) {
            return Bo(t, 1, n)
          }),
          bd = it(function (t, n, r) {
            return Bo(t, Oe(n) || 0, r)
          })
        function Tr(t, n) {
          if (typeof t != "function" || (n != null && typeof n != "function"))
            throw new Re(e)
          var r = function () {
            var u = arguments,
              l = n ? n.apply(this, u) : u[0],
              g = r.cache
            if (g.has(l)) return g.get(l)
            var _ = t.apply(this, u)
            return (r.cache = g.set(l, _) || g), _
          }
          return (r.cache = new (Tr.Cache || an)()), r
        }
        function Rr(t) {
          if (typeof t != "function") throw new Re(e)
          return function () {
            var n = arguments
            switch (n.length) {
              case 0:
                return !t.call(this)
              case 1:
                return !t.call(this, n[0])
              case 2:
                return !t.call(this, n[0], n[1])
              case 3:
                return !t.call(this, n[0], n[1], n[2])
            }
            return !t.apply(this, n)
          }
        }
        Tr.Cache = an
        var Sd = jh(function (t, n) {
            var r = (n =
              n.length == 1 && st(n[0])
                ? At(n[0], ye(G()))
                : At(Bt(n, 1), ye(G()))).length
            return it(function (u) {
              for (var l = -1, g = Yt(u.length, r); ++l < g; )
                u[l] = n[l].call(this, u[l])
              return me(t, this, u)
            })
          }),
          ua = it(function (t, n) {
            var r = vn(n, us(ua))
            return un(t, c, a, n, r)
          }),
          ec = it(function (t, n) {
            var r = vn(n, us(ec))
            return un(t, f, a, n, r)
          }),
          wd = cn(function (t, n) {
            return un(t, v, a, a, a, n)
          })
        function He(t, n) {
          return t === n || (t != t && n != n)
        }
        var Cd = wr(qi),
          xd = wr(function (t, n) {
            return t >= n
          }),
          $n = Yo(
            (function () {
              return arguments
            })(),
          )
            ? Yo
            : function (t) {
                return Mt(t) && gt.call(t, "callee") && !ko.call(t, "callee")
              },
          st = O.isArray,
          Ad = mo
            ? ye(mo)
            : function (t) {
                return Mt(t) && ne(t) == _n
              }
        function de(t) {
          return t != null && Fr(t.length) && !hn(t)
        }
        function Ft(t) {
          return Mt(t) && de(t)
        }
        var An = vh || va,
          Id = yo
            ? ye(yo)
            : function (t) {
                return Mt(t) && ne(t) == $
              }
        function ca(t) {
          if (!Mt(t)) return !1
          var n = ne(t)
          return (
            n == dt ||
            n == "[object DOMException]" ||
            (typeof t.message == "string" &&
              typeof t.name == "string" &&
              !qs(t))
          )
        }
        function hn(t) {
          if (!It(t)) return !1
          var n = ne(t)
          return (
            n == Zt ||
            n == Jt ||
            n == "[object AsyncFunction]" ||
            n == "[object Proxy]"
          )
        }
        function nc(t) {
          return typeof t == "number" && t == rt(t)
        }
        function Fr(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= E
        }
        function It(t) {
          var n = typeof t
          return t != null && (n == "object" || n == "function")
        }
        function Mt(t) {
          return t != null && typeof t == "object"
        }
        var sc = vo
          ? ye(vo)
          : function (t) {
              return Mt(t) && Kt(t) == pt
            }
        function rc(t) {
          return typeof t == "number" || (Mt(t) && ne(t) == le)
        }
        function qs(t) {
          if (!Mt(t) || ne(t) != Y) return !1
          var n = rr(t)
          if (n === null) return !0
          var r = gt.call(n, "constructor") && n.constructor
          return typeof r == "function" && r instanceof r && tr.call(r) == fh
        }
        var la = bo
            ? ye(bo)
            : function (t) {
                return Mt(t) && ne(t) == ot
              },
          ic = So
            ? ye(So)
            : function (t) {
                return Mt(t) && Kt(t) == qt
              }
        function Pr(t) {
          return typeof t == "string" || (!st(t) && Mt(t) && ne(t) == _e)
        }
        function be(t) {
          return typeof t == "symbol" || (Mt(t) && ne(t) == Pn)
        }
        var cs = wo
            ? ye(wo)
            : function (t) {
                return Mt(t) && Fr(t.length) && !!bt[ne(t)]
              },
          Md = wr(Ui),
          Ed = wr(function (t, n) {
            return t <= n
          })
        function ac(t) {
          if (!t) return []
          if (de(t)) return Pr(t) ? Le(t) : he(t)
          if (Ss && t[Ss])
            return (function (r) {
              for (var u, l = []; !(u = r.next()).done; ) l.push(u.value)
              return l
            })(t[Ss]())
          var n = Kt(t)
          return (n == pt ? Ai : n == qt ? Ks : ls)(t)
        }
        function dn(t) {
          return t
            ? (t = Oe(t)) === C || t === -1 / 0
              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
              : t == t
                ? t
                : 0
            : t === 0
              ? t
              : 0
        }
        function rt(t) {
          var n = dn(t),
            r = n % 1
          return n == n ? (r ? n - r : n) : 0
        }
        function oc(t) {
          return t ? Ln(rt(t), 0, X) : 0
        }
        function Oe(t) {
          if (typeof t == "number") return t
          if (be(t)) return P
          if (It(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t
            t = It(n) ? n + "" : n
          }
          if (typeof t != "string") return t === 0 ? t : +t
          t = Eo(t)
          var r = Fl.test(t)
          return r || Dl.test(t)
            ? Xl(t.slice(2), r ? 2 : 8)
            : Rl.test(t)
              ? P
              : +t
        }
        function uc(t) {
          return Ke(t, fe(t))
        }
        function ft(t) {
          return t == null ? "" : ve(t)
        }
        var Td = as(function (t, n) {
            if (Ps(n) || de(n)) Ke(n, Ht(n), t)
            else for (var r in n) gt.call(n, r) && Is(t, r, n[r])
          }),
          cc = as(function (t, n) {
            Ke(n, fe(n), t)
          }),
          Dr = as(function (t, n, r, u) {
            Ke(n, fe(n), t, u)
          }),
          Rd = as(function (t, n, r, u) {
            Ke(n, Ht(n), t, u)
          }),
          Fd = cn(Fi),
          Pd = it(function (t, n) {
            t = St(t)
            var r = -1,
              u = n.length,
              l = u > 2 ? n[2] : a
            for (l && se(n[0], n[1], l) && (u = 1); ++r < u; )
              for (var g = n[r], _ = fe(g), y = -1, b = _.length; ++y < b; ) {
                var x = _[y],
                  w = t[x]
                ;(w === a || (He(w, ns[x]) && !gt.call(t, x))) && (t[x] = g[x])
              }
            return t
          }),
          Dd = it(function (t) {
            return t.push(a, Eu), me(lc, a, t)
          })
        function ha(t, n, r) {
          var u = t == null ? a : Un(t, n)
          return u === a ? r : u
        }
        function da(t, n) {
          return t != null && Fu(t, n, Oh)
        }
        var qd = Cu(function (t, n, r) {
            n != null && typeof n.toString != "function" && (n = er.call(n)),
              (t[n] = r)
          }, ga(ge)),
          Od = Cu(function (t, n, r) {
            n != null && typeof n.toString != "function" && (n = er.call(n)),
              gt.call(t, n) ? t[n].push(r) : (t[n] = [r])
          }, G),
          kd = it(Es)
        function Ht(t) {
          return de(t) ? $o(t) : Li(t)
        }
        function fe(t) {
          return de(t) ? $o(t, !0) : kh(t)
        }
        var Ld = as(function (t, n, r) {
            pr(t, n, r)
          }),
          lc = as(function (t, n, r, u) {
            pr(t, n, r, u)
          }),
          Ud = cn(function (t, n) {
            var r = {}
            if (t == null) return r
            var u = !1
            ;(n = At(n, function (g) {
              return (g = Cn(g, t)), u || (u = g.length > 1), g
            })),
              Ke(t, Ki(t), r),
              u && (r = Pe(r, 7, Wh))
            for (var l = n.length; l--; ) zi(r, n[l])
            return r
          }),
          Hd = cn(function (t, n) {
            return t == null
              ? {}
              : (function (r, u) {
                  return ru(r, u, function (l, g) {
                    return da(r, g)
                  })
                })(t, n)
          })
        function hc(t, n) {
          if (t == null) return {}
          var r = At(Ki(t), function (u) {
            return [u]
          })
          return (
            (n = G(n)),
            ru(t, r, function (u, l) {
              return n(u, l[0])
            })
          )
        }
        var dc = Iu(Ht),
          fc = Iu(fe)
        function ls(t) {
          return t == null ? [] : xi(t, Ht(t))
        }
        var Nd = os(function (t, n, r) {
          return (n = n.toLowerCase()), t + (r ? gc(n) : n)
        })
        function gc(t) {
          return fa(ft(t).toLowerCase())
        }
        function pc(t) {
          return (t = ft(t)) && t.replace(Ol, ih).replace(Wl, "")
        }
        var $d = os(function (t, n, r) {
            return t + (r ? "-" : "") + n.toLowerCase()
          }),
          jd = os(function (t, n, r) {
            return t + (r ? " " : "") + n.toLowerCase()
          }),
          zd = bu("toLowerCase"),
          Wd = os(function (t, n, r) {
            return t + (r ? "_" : "") + n.toLowerCase()
          }),
          Bd = os(function (t, n, r) {
            return t + (r ? " " : "") + fa(n)
          }),
          Gd = os(function (t, n, r) {
            return t + (r ? " " : "") + n.toUpperCase()
          }),
          fa = bu("toUpperCase")
        function _c(t, n, r) {
          return (
            (t = ft(t)),
            (n = r ? a : n) === a
              ? (function (u) {
                  return Vl.test(u)
                })(t)
                ? (function (u) {
                    return u.match(Bl) || []
                  })(t)
                : (function (u) {
                    return u.match(Il) || []
                  })(t)
              : t.match(n) || []
          )
        }
        var mc = it(function (t, n) {
            try {
              return me(t, a, n)
            } catch (r) {
              return ca(r) ? r : new ut(r)
            }
          }),
          Vd = cn(function (t, n) {
            return (
              Te(n, function (r) {
                ;(r = Xe(r)), on(t, r, oa(t[r], t))
              }),
              t
            )
          })
        function ga(t) {
          return function () {
            return t
          }
        }
        var Zd = wu(),
          Jd = wu(!0)
        function ge(t) {
          return t
        }
        function pa(t) {
          return Xo(typeof t == "function" ? t : Pe(t, 1))
        }
        var Yd = it(function (t, n) {
            return function (r) {
              return Es(r, t, n)
            }
          }),
          Kd = it(function (t, n) {
            return function (r) {
              return Es(t, r, n)
            }
          })
        function _a(t, n, r) {
          var u = Ht(n),
            l = gr(n, u)
          r != null ||
            (It(n) && (l.length || !u.length)) ||
            ((r = n), (n = t), (t = this), (l = gr(n, Ht(n))))
          var g = !(It(r) && "chain" in r && !r.chain),
            _ = hn(t)
          return (
            Te(l, function (y) {
              var b = n[y]
              ;(t[y] = b),
                _ &&
                  (t.prototype[y] = function () {
                    var x = this.__chain__
                    if (g || x) {
                      var w = t(this.__wrapped__)
                      return (
                        (w.__actions__ = he(this.__actions__)).push({
                          func: b,
                          args: arguments,
                          thisArg: t,
                        }),
                        (w.__chain__ = x),
                        w
                      )
                    }
                    return b.apply(t, yn([this.value()], arguments))
                  })
            }),
            t
          )
        }
        function ma() {}
        var Xd = Zi(At),
          Qd = Zi(Co),
          tf = Zi(vi)
        function yc(t) {
          return ea(t)
            ? bi(Xe(t))
            : (function (n) {
                return function (r) {
                  return Un(r, n)
                }
              })(t)
        }
        var ef = xu(),
          nf = xu(!0)
        function ya() {
          return []
        }
        function va() {
          return !1
        }
        var ba,
          sf = br(function (t, n) {
            return t + n
          }, 0),
          rf = Ji("ceil"),
          af = br(function (t, n) {
            return t / n
          }, 1),
          of = Ji("floor"),
          uf = br(function (t, n) {
            return t * n
          }, 1),
          cf = Ji("round"),
          lf = br(function (t, n) {
            return t - n
          }, 0)
        return (
          (h.after = function (t, n) {
            if (typeof n != "function") throw new Re(e)
            return (
              (t = rt(t)),
              function () {
                if (--t < 1) return n.apply(this, arguments)
              }
            )
          }),
          (h.ary = Ku),
          (h.assign = Td),
          (h.assignIn = cc),
          (h.assignInWith = Dr),
          (h.assignWith = Rd),
          (h.at = Fd),
          (h.before = Xu),
          (h.bind = oa),
          (h.bindAll = Vd),
          (h.bindKey = Qu),
          (h.castArray = function () {
            if (!arguments.length) return []
            var t = arguments[0]
            return st(t) ? t : [t]
          }),
          (h.chain = Zu),
          (h.chunk = function (t, n, r) {
            n = (r ? se(t, n, r) : n === a) ? 1 : kt(rt(n), 0)
            var u = t == null ? 0 : t.length
            if (!u || n < 1) return []
            for (var l = 0, g = 0, _ = O(or(u / n)); l < u; )
              _[g++] = De(t, l, (l += n))
            return _
          }),
          (h.compact = function (t) {
            for (
              var n = -1, r = t == null ? 0 : t.length, u = 0, l = [];
              ++n < r;

            ) {
              var g = t[n]
              g && (l[u++] = g)
            }
            return l
          }),
          (h.concat = function () {
            var t = arguments.length
            if (!t) return []
            for (var n = O(t - 1), r = arguments[0], u = t; u--; )
              n[u - 1] = arguments[u]
            return yn(st(r) ? he(r) : [r], Bt(n, 1))
          }),
          (h.cond = function (t) {
            var n = t == null ? 0 : t.length,
              r = G()
            return (
              (t = n
                ? At(t, function (u) {
                    if (typeof u[1] != "function") throw new Re(e)
                    return [r(u[0]), u[1]]
                  })
                : []),
              it(function (u) {
                for (var l = -1; ++l < n; ) {
                  var g = t[l]
                  if (me(g[0], this, u)) return me(g[1], this, u)
                }
              })
            )
          }),
          (h.conforms = function (t) {
            return (function (n) {
              var r = Ht(n)
              return function (u) {
                return Wo(u, n, r)
              }
            })(Pe(t, 1))
          }),
          (h.constant = ga),
          (h.countBy = hd),
          (h.create = function (t, n) {
            var r = is(t)
            return n == null ? r : zo(r, n)
          }),
          (h.curry = function t(n, r, u) {
            var l = un(n, 8, a, a, a, a, a, (r = u ? a : r))
            return (l.placeholder = t.placeholder), l
          }),
          (h.curryRight = function t(n, r, u) {
            var l = un(n, o, a, a, a, a, a, (r = u ? a : r))
            return (l.placeholder = t.placeholder), l
          }),
          (h.debounce = tc),
          (h.defaults = Pd),
          (h.defaultsDeep = Dd),
          (h.defer = vd),
          (h.delay = bd),
          (h.difference = Vh),
          (h.differenceBy = Zh),
          (h.differenceWith = Jh),
          (h.drop = function (t, n, r) {
            var u = t == null ? 0 : t.length
            return u ? De(t, (n = r || n === a ? 1 : rt(n)) < 0 ? 0 : n, u) : []
          }),
          (h.dropRight = function (t, n, r) {
            var u = t == null ? 0 : t.length
            return u
              ? De(t, 0, (n = u - (n = r || n === a ? 1 : rt(n))) < 0 ? 0 : n)
              : []
          }),
          (h.dropRightWhile = function (t, n) {
            return t && t.length ? mr(t, G(n, 3), !0, !0) : []
          }),
          (h.dropWhile = function (t, n) {
            return t && t.length ? mr(t, G(n, 3), !0) : []
          }),
          (h.fill = function (t, n, r, u) {
            var l = t == null ? 0 : t.length
            return l
              ? (r && typeof r != "number" && se(t, n, r) && ((r = 0), (u = l)),
                (function (g, _, y, b) {
                  var x = g.length
                  for (
                    (y = rt(y)) < 0 && (y = -y > x ? 0 : x + y),
                      (b = b === a || b > x ? x : rt(b)) < 0 && (b += x),
                      b = y > b ? 0 : oc(b);
                    y < b;

                  )
                    g[y++] = _
                  return g
                })(t, n, r, u))
              : []
          }),
          (h.filter = function (t, n) {
            return (st(t) ? mn : Vo)(t, G(n, 3))
          }),
          (h.flatMap = function (t, n) {
            return Bt(Mr(t, n), 1)
          }),
          (h.flatMapDeep = function (t, n) {
            return Bt(Mr(t, n), C)
          }),
          (h.flatMapDepth = function (t, n, r) {
            return (r = r === a ? 1 : rt(r)), Bt(Mr(t, n), r)
          }),
          (h.flatten = Wu),
          (h.flattenDeep = function (t) {
            return t != null && t.length ? Bt(t, C) : []
          }),
          (h.flattenDepth = function (t, n) {
            return t != null && t.length ? Bt(t, (n = n === a ? 1 : rt(n))) : []
          }),
          (h.flip = function (t) {
            return un(t, 512)
          }),
          (h.flow = Zd),
          (h.flowRight = Jd),
          (h.fromPairs = function (t) {
            for (var n = -1, r = t == null ? 0 : t.length, u = {}; ++n < r; ) {
              var l = t[n]
              u[l[0]] = l[1]
            }
            return u
          }),
          (h.functions = function (t) {
            return t == null ? [] : gr(t, Ht(t))
          }),
          (h.functionsIn = function (t) {
            return t == null ? [] : gr(t, fe(t))
          }),
          (h.groupBy = gd),
          (h.initial = function (t) {
            return t != null && t.length ? De(t, 0, -1) : []
          }),
          (h.intersection = Yh),
          (h.intersectionBy = Kh),
          (h.intersectionWith = Xh),
          (h.invert = qd),
          (h.invertBy = Od),
          (h.invokeMap = pd),
          (h.iteratee = pa),
          (h.keyBy = _d),
          (h.keys = Ht),
          (h.keysIn = fe),
          (h.map = Mr),
          (h.mapKeys = function (t, n) {
            var r = {}
            return (
              (n = G(n, 3)),
              Ye(t, function (u, l, g) {
                on(r, n(u, l, g), u)
              }),
              r
            )
          }),
          (h.mapValues = function (t, n) {
            var r = {}
            return (
              (n = G(n, 3)),
              Ye(t, function (u, l, g) {
                on(r, l, n(u, l, g))
              }),
              r
            )
          }),
          (h.matches = function (t) {
            return tu(Pe(t, 1))
          }),
          (h.matchesProperty = function (t, n) {
            return eu(t, Pe(n, 1))
          }),
          (h.memoize = Tr),
          (h.merge = Ld),
          (h.mergeWith = lc),
          (h.method = Yd),
          (h.methodOf = Kd),
          (h.mixin = _a),
          (h.negate = Rr),
          (h.nthArg = function (t) {
            return (
              (t = rt(t)),
              it(function (n) {
                return nu(n, t)
              })
            )
          }),
          (h.omit = Ud),
          (h.omitBy = function (t, n) {
            return hc(t, Rr(G(n)))
          }),
          (h.once = function (t) {
            return Xu(2, t)
          }),
          (h.orderBy = function (t, n, r, u) {
            return t == null
              ? []
              : (st(n) || (n = n == null ? [] : [n]),
                st((r = u ? a : r)) || (r = r == null ? [] : [r]),
                su(t, n, r))
          }),
          (h.over = Xd),
          (h.overArgs = Sd),
          (h.overEvery = Qd),
          (h.overSome = tf),
          (h.partial = ua),
          (h.partialRight = ec),
          (h.partition = md),
          (h.pick = Hd),
          (h.pickBy = hc),
          (h.property = yc),
          (h.propertyOf = function (t) {
            return function (n) {
              return t == null ? a : Un(t, n)
            }
          }),
          (h.pull = Qh),
          (h.pullAll = Gu),
          (h.pullAllBy = function (t, n, r) {
            return t && t.length && n && n.length ? Hi(t, n, G(r, 2)) : t
          }),
          (h.pullAllWith = function (t, n, r) {
            return t && t.length && n && n.length ? Hi(t, n, a, r) : t
          }),
          (h.pullAt = td),
          (h.range = ef),
          (h.rangeRight = nf),
          (h.rearg = wd),
          (h.reject = function (t, n) {
            return (st(t) ? mn : Vo)(t, Rr(G(n, 3)))
          }),
          (h.remove = function (t, n) {
            var r = []
            if (!t || !t.length) return r
            var u = -1,
              l = [],
              g = t.length
            for (n = G(n, 3); ++u < g; ) {
              var _ = t[u]
              n(_, u, t) && (r.push(_), l.push(u))
            }
            return iu(t, l), r
          }),
          (h.rest = function (t, n) {
            if (typeof t != "function") throw new Re(e)
            return it(t, (n = n === a ? n : rt(n)))
          }),
          (h.reverse = ia),
          (h.sampleSize = function (t, n, r) {
            return (
              (n = (r ? se(t, n, r) : n === a) ? 1 : rt(n)),
              (st(t) ? Rh : Uh)(t, n)
            )
          }),
          (h.set = function (t, n, r) {
            return t == null ? t : Rs(t, n, r)
          }),
          (h.setWith = function (t, n, r, u) {
            return (
              (u = typeof u == "function" ? u : a),
              t == null ? t : Rs(t, n, r, u)
            )
          }),
          (h.shuffle = function (t) {
            return (st(t) ? Fh : Nh)(t)
          }),
          (h.slice = function (t, n, r) {
            var u = t == null ? 0 : t.length
            return u
              ? (r && typeof r != "number" && se(t, n, r)
                  ? ((n = 0), (r = u))
                  : ((n = n == null ? 0 : rt(n)), (r = r === a ? u : rt(r))),
                De(t, n, r))
              : []
          }),
          (h.sortBy = yd),
          (h.sortedUniq = function (t) {
            return t && t.length ? ou(t) : []
          }),
          (h.sortedUniqBy = function (t, n) {
            return t && t.length ? ou(t, G(n, 2)) : []
          }),
          (h.split = function (t, n, r) {
            return (
              r && typeof r != "number" && se(t, n, r) && (n = r = a),
              (r = r === a ? X : r >>> 0)
                ? (t = ft(t)) &&
                  (typeof n == "string" || (n != null && !la(n))) &&
                  !(n = ve(n)) &&
                  Qn(t)
                  ? xn(Le(t), 0, r)
                  : t.split(n, r)
                : []
            )
          }),
          (h.spread = function (t, n) {
            if (typeof t != "function") throw new Re(e)
            return (
              (n = n == null ? 0 : kt(rt(n), 0)),
              it(function (r) {
                var u = r[n],
                  l = xn(r, 0, n)
                return u && yn(l, u), me(t, this, l)
              })
            )
          }),
          (h.tail = function (t) {
            var n = t == null ? 0 : t.length
            return n ? De(t, 1, n) : []
          }),
          (h.take = function (t, n, r) {
            return t && t.length
              ? De(t, 0, (n = r || n === a ? 1 : rt(n)) < 0 ? 0 : n)
              : []
          }),
          (h.takeRight = function (t, n, r) {
            var u = t == null ? 0 : t.length
            return u
              ? De(t, (n = u - (n = r || n === a ? 1 : rt(n))) < 0 ? 0 : n, u)
              : []
          }),
          (h.takeRightWhile = function (t, n) {
            return t && t.length ? mr(t, G(n, 3), !1, !0) : []
          }),
          (h.takeWhile = function (t, n) {
            return t && t.length ? mr(t, G(n, 3)) : []
          }),
          (h.tap = function (t, n) {
            return n(t), t
          }),
          (h.throttle = function (t, n, r) {
            var u = !0,
              l = !0
            if (typeof t != "function") throw new Re(e)
            return (
              It(r) &&
                ((u = "leading" in r ? !!r.leading : u),
                (l = "trailing" in r ? !!r.trailing : l)),
              tc(t, n, { leading: u, maxWait: n, trailing: l })
            )
          }),
          (h.thru = Ir),
          (h.toArray = ac),
          (h.toPairs = dc),
          (h.toPairsIn = fc),
          (h.toPath = function (t) {
            return st(t) ? At(t, Xe) : be(t) ? [t] : he(Nu(ft(t)))
          }),
          (h.toPlainObject = uc),
          (h.transform = function (t, n, r) {
            var u = st(t),
              l = u || An(t) || cs(t)
            if (((n = G(n, 4)), r == null)) {
              var g = t && t.constructor
              r = l ? (u ? new g() : []) : It(t) && hn(g) ? is(rr(t)) : {}
            }
            return (
              (l ? Te : Ye)(t, function (_, y, b) {
                return n(r, _, y, b)
              }),
              r
            )
          }),
          (h.unary = function (t) {
            return Ku(t, 1)
          }),
          (h.union = ed),
          (h.unionBy = nd),
          (h.unionWith = sd),
          (h.uniq = function (t) {
            return t && t.length ? wn(t) : []
          }),
          (h.uniqBy = function (t, n) {
            return t && t.length ? wn(t, G(n, 2)) : []
          }),
          (h.uniqWith = function (t, n) {
            return (
              (n = typeof n == "function" ? n : a),
              t && t.length ? wn(t, a, n) : []
            )
          }),
          (h.unset = function (t, n) {
            return t == null || zi(t, n)
          }),
          (h.unzip = aa),
          (h.unzipWith = Vu),
          (h.update = function (t, n, r) {
            return t == null ? t : cu(t, n, Gi(r))
          }),
          (h.updateWith = function (t, n, r, u) {
            return (
              (u = typeof u == "function" ? u : a),
              t == null ? t : cu(t, n, Gi(r), u)
            )
          }),
          (h.values = ls),
          (h.valuesIn = function (t) {
            return t == null ? [] : xi(t, fe(t))
          }),
          (h.without = rd),
          (h.words = _c),
          (h.wrap = function (t, n) {
            return ua(Gi(n), t)
          }),
          (h.xor = id),
          (h.xorBy = ad),
          (h.xorWith = od),
          (h.zip = ud),
          (h.zipObject = function (t, n) {
            return hu(t || [], n || [], Is)
          }),
          (h.zipObjectDeep = function (t, n) {
            return hu(t || [], n || [], Rs)
          }),
          (h.zipWith = cd),
          (h.entries = dc),
          (h.entriesIn = fc),
          (h.extend = cc),
          (h.extendWith = Dr),
          _a(h, h),
          (h.add = sf),
          (h.attempt = mc),
          (h.camelCase = Nd),
          (h.capitalize = gc),
          (h.ceil = rf),
          (h.clamp = function (t, n, r) {
            return (
              r === a && ((r = n), (n = a)),
              r !== a && (r = (r = Oe(r)) == r ? r : 0),
              n !== a && (n = (n = Oe(n)) == n ? n : 0),
              Ln(Oe(t), n, r)
            )
          }),
          (h.clone = function (t) {
            return Pe(t, 4)
          }),
          (h.cloneDeep = function (t) {
            return Pe(t, 5)
          }),
          (h.cloneDeepWith = function (t, n) {
            return Pe(t, 5, (n = typeof n == "function" ? n : a))
          }),
          (h.cloneWith = function (t, n) {
            return Pe(t, 4, (n = typeof n == "function" ? n : a))
          }),
          (h.conformsTo = function (t, n) {
            return n == null || Wo(t, n, Ht(n))
          }),
          (h.deburr = pc),
          (h.defaultTo = function (t, n) {
            return t == null || t != t ? n : t
          }),
          (h.divide = af),
          (h.endsWith = function (t, n, r) {
            ;(t = ft(t)), (n = ve(n))
            var u = t.length,
              l = (r = r === a ? u : Ln(rt(r), 0, u))
            return (r -= n.length) >= 0 && t.slice(r, l) == n
          }),
          (h.eq = He),
          (h.escape = function (t) {
            return (t = ft(t)) && pl.test(t) ? t.replace(Va, ah) : t
          }),
          (h.escapeRegExp = function (t) {
            return (t = ft(t)) && Sl.test(t) ? t.replace(ci, "\\$&") : t
          }),
          (h.every = function (t, n, r) {
            var u = st(t) ? Co : Dh
            return r && se(t, n, r) && (n = a), u(t, G(n, 3))
          }),
          (h.find = dd),
          (h.findIndex = ju),
          (h.findKey = function (t, n) {
            return xo(t, G(n, 3), Ye)
          }),
          (h.findLast = fd),
          (h.findLastIndex = zu),
          (h.findLastKey = function (t, n) {
            return xo(t, G(n, 3), Di)
          }),
          (h.floor = of),
          (h.forEach = Ju),
          (h.forEachRight = Yu),
          (h.forIn = function (t, n) {
            return t == null ? t : Pi(t, G(n, 3), fe)
          }),
          (h.forInRight = function (t, n) {
            return t == null ? t : Zo(t, G(n, 3), fe)
          }),
          (h.forOwn = function (t, n) {
            return t && Ye(t, G(n, 3))
          }),
          (h.forOwnRight = function (t, n) {
            return t && Di(t, G(n, 3))
          }),
          (h.get = ha),
          (h.gt = Cd),
          (h.gte = xd),
          (h.has = function (t, n) {
            return t != null && Fu(t, n, qh)
          }),
          (h.hasIn = da),
          (h.head = Bu),
          (h.identity = ge),
          (h.includes = function (t, n, r, u) {
            ;(t = de(t) ? t : ls(t)), (r = r && !u ? rt(r) : 0)
            var l = t.length
            return (
              r < 0 && (r = kt(l + r, 0)),
              Pr(t) ? r <= l && t.indexOf(n, r) > -1 : !!l && Xn(t, n, r) > -1
            )
          }),
          (h.indexOf = function (t, n, r) {
            var u = t == null ? 0 : t.length
            if (!u) return -1
            var l = r == null ? 0 : rt(r)
            return l < 0 && (l = kt(u + l, 0)), Xn(t, n, l)
          }),
          (h.inRange = function (t, n, r) {
            return (
              (n = dn(n)),
              r === a ? ((r = n), (n = 0)) : (r = dn(r)),
              (function (u, l, g) {
                return u >= Yt(l, g) && u < kt(l, g)
              })((t = Oe(t)), n, r)
            )
          }),
          (h.invoke = kd),
          (h.isArguments = $n),
          (h.isArray = st),
          (h.isArrayBuffer = Ad),
          (h.isArrayLike = de),
          (h.isArrayLikeObject = Ft),
          (h.isBoolean = function (t) {
            return t === !0 || t === !1 || (Mt(t) && ne(t) == Q)
          }),
          (h.isBuffer = An),
          (h.isDate = Id),
          (h.isElement = function (t) {
            return Mt(t) && t.nodeType === 1 && !qs(t)
          }),
          (h.isEmpty = function (t) {
            if (t == null) return !0
            if (
              de(t) &&
              (st(t) ||
                typeof t == "string" ||
                typeof t.splice == "function" ||
                An(t) ||
                cs(t) ||
                $n(t))
            )
              return !t.length
            var n = Kt(t)
            if (n == pt || n == qt) return !t.size
            if (Ps(t)) return !Li(t).length
            for (var r in t) if (gt.call(t, r)) return !1
            return !0
          }),
          (h.isEqual = function (t, n) {
            return Ts(t, n)
          }),
          (h.isEqualWith = function (t, n, r) {
            var u = (r = typeof r == "function" ? r : a) ? r(t, n) : a
            return u === a ? Ts(t, n, a, r) : !!u
          }),
          (h.isError = ca),
          (h.isFinite = function (t) {
            return typeof t == "number" && Uo(t)
          }),
          (h.isFunction = hn),
          (h.isInteger = nc),
          (h.isLength = Fr),
          (h.isMap = sc),
          (h.isMatch = function (t, n) {
            return t === n || ki(t, n, Qi(n))
          }),
          (h.isMatchWith = function (t, n, r) {
            return (r = typeof r == "function" ? r : a), ki(t, n, Qi(n), r)
          }),
          (h.isNaN = function (t) {
            return rc(t) && t != +t
          }),
          (h.isNative = function (t) {
            if (Gh(t))
              throw new ut(
                "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
              )
            return Ko(t)
          }),
          (h.isNil = function (t) {
            return t == null
          }),
          (h.isNull = function (t) {
            return t === null
          }),
          (h.isNumber = rc),
          (h.isObject = It),
          (h.isObjectLike = Mt),
          (h.isPlainObject = qs),
          (h.isRegExp = la),
          (h.isSafeInteger = function (t) {
            return nc(t) && t >= -9007199254740991 && t <= E
          }),
          (h.isSet = ic),
          (h.isString = Pr),
          (h.isSymbol = be),
          (h.isTypedArray = cs),
          (h.isUndefined = function (t) {
            return t === a
          }),
          (h.isWeakMap = function (t) {
            return Mt(t) && Kt(t) == pn
          }),
          (h.isWeakSet = function (t) {
            return Mt(t) && ne(t) == "[object WeakSet]"
          }),
          (h.join = function (t, n) {
            return t == null ? "" : bh.call(t, n)
          }),
          (h.kebabCase = $d),
          (h.last = qe),
          (h.lastIndexOf = function (t, n, r) {
            var u = t == null ? 0 : t.length
            if (!u) return -1
            var l = u
            return (
              r !== a && (l = (l = rt(r)) < 0 ? kt(u + l, 0) : Yt(l, u - 1)),
              n == n
                ? (function (g, _, y) {
                    for (var b = y + 1; b--; ) if (g[b] === _) return b
                    return b
                  })(t, n, l)
                : Ys(t, Ao, l, !0)
            )
          }),
          (h.lowerCase = jd),
          (h.lowerFirst = zd),
          (h.lt = Md),
          (h.lte = Ed),
          (h.max = function (t) {
            return t && t.length ? fr(t, ge, qi) : a
          }),
          (h.maxBy = function (t, n) {
            return t && t.length ? fr(t, G(n, 2), qi) : a
          }),
          (h.mean = function (t) {
            return Io(t, ge)
          }),
          (h.meanBy = function (t, n) {
            return Io(t, G(n, 2))
          }),
          (h.min = function (t) {
            return t && t.length ? fr(t, ge, Ui) : a
          }),
          (h.minBy = function (t, n) {
            return t && t.length ? fr(t, G(n, 2), Ui) : a
          }),
          (h.stubArray = ya),
          (h.stubFalse = va),
          (h.stubObject = function () {
            return {}
          }),
          (h.stubString = function () {
            return ""
          }),
          (h.stubTrue = function () {
            return !0
          }),
          (h.multiply = uf),
          (h.nth = function (t, n) {
            return t && t.length ? nu(t, rt(n)) : a
          }),
          (h.noConflict = function () {
            return Wt._ === this && (Wt._ = gh), this
          }),
          (h.noop = ma),
          (h.now = Er),
          (h.pad = function (t, n, r) {
            t = ft(t)
            var u = (n = rt(n)) ? ts(t) : 0
            if (!n || u >= n) return t
            var l = (n - u) / 2
            return Sr(ur(l), r) + t + Sr(or(l), r)
          }),
          (h.padEnd = function (t, n, r) {
            t = ft(t)
            var u = (n = rt(n)) ? ts(t) : 0
            return n && u < n ? t + Sr(n - u, r) : t
          }),
          (h.padStart = function (t, n, r) {
            t = ft(t)
            var u = (n = rt(n)) ? ts(t) : 0
            return n && u < n ? Sr(n - u, r) + t : t
          }),
          (h.parseInt = function (t, n, r) {
            return (
              r || n == null ? (n = 0) : n && (n = +n),
              Ch(ft(t).replace(li, ""), n || 0)
            )
          }),
          (h.random = function (t, n, r) {
            if (
              (r && typeof r != "boolean" && se(t, n, r) && (n = r = a),
              r === a &&
                (typeof n == "boolean"
                  ? ((r = n), (n = a))
                  : typeof t == "boolean" && ((r = t), (t = a))),
              t === a && n === a
                ? ((t = 0), (n = 1))
                : ((t = dn(t)), n === a ? ((n = t), (t = 0)) : (n = dn(n))),
              t > n)
            ) {
              var u = t
              ;(t = n), (n = u)
            }
            if (r || t % 1 || n % 1) {
              var l = Ho()
              return Yt(t + l * (n - t + Kl("1e-" + ((l + "").length - 1))), n)
            }
            return Ni(t, n)
          }),
          (h.reduce = function (t, n, r) {
            var u = st(t) ? yi : Mo,
              l = arguments.length < 3
            return u(t, G(n, 4), r, l, Sn)
          }),
          (h.reduceRight = function (t, n, r) {
            var u = st(t) ? nh : Mo,
              l = arguments.length < 3
            return u(t, G(n, 4), r, l, Go)
          }),
          (h.repeat = function (t, n, r) {
            return (n = (r ? se(t, n, r) : n === a) ? 1 : rt(n)), $i(ft(t), n)
          }),
          (h.replace = function () {
            var t = arguments,
              n = ft(t[0])
            return t.length < 3 ? n : n.replace(t[1], t[2])
          }),
          (h.result = function (t, n, r) {
            var u = -1,
              l = (n = Cn(n, t)).length
            for (l || ((l = 1), (t = a)); ++u < l; ) {
              var g = t == null ? a : t[Xe(n[u])]
              g === a && ((u = l), (g = r)), (t = hn(g) ? g.call(t) : g)
            }
            return t
          }),
          (h.round = cf),
          (h.runInContext = S),
          (h.sample = function (t) {
            return (st(t) ? jo : Lh)(t)
          }),
          (h.size = function (t) {
            if (t == null) return 0
            if (de(t)) return Pr(t) ? ts(t) : t.length
            var n = Kt(t)
            return n == pt || n == qt ? t.size : Li(t).length
          }),
          (h.snakeCase = Wd),
          (h.some = function (t, n, r) {
            var u = st(t) ? vi : $h
            return r && se(t, n, r) && (n = a), u(t, G(n, 3))
          }),
          (h.sortedIndex = function (t, n) {
            return _r(t, n)
          }),
          (h.sortedIndexBy = function (t, n, r) {
            return ji(t, n, G(r, 2))
          }),
          (h.sortedIndexOf = function (t, n) {
            var r = t == null ? 0 : t.length
            if (r) {
              var u = _r(t, n)
              if (u < r && He(t[u], n)) return u
            }
            return -1
          }),
          (h.sortedLastIndex = function (t, n) {
            return _r(t, n, !0)
          }),
          (h.sortedLastIndexBy = function (t, n, r) {
            return ji(t, n, G(r, 2), !0)
          }),
          (h.sortedLastIndexOf = function (t, n) {
            if (t != null && t.length) {
              var r = _r(t, n, !0) - 1
              if (He(t[r], n)) return r
            }
            return -1
          }),
          (h.startCase = Bd),
          (h.startsWith = function (t, n, r) {
            return (
              (t = ft(t)),
              (r = r == null ? 0 : Ln(rt(r), 0, t.length)),
              (n = ve(n)),
              t.slice(r, r + n.length) == n
            )
          }),
          (h.subtract = lf),
          (h.sum = function (t) {
            return t && t.length ? wi(t, ge) : 0
          }),
          (h.sumBy = function (t, n) {
            return t && t.length ? wi(t, G(n, 2)) : 0
          }),
          (h.template = function (t, n, r) {
            var u = h.templateSettings
            r && se(t, n, r) && (n = a), (t = ft(t)), (n = Dr({}, n, u, Mu))
            var l,
              g,
              _ = Dr({}, n.imports, u.imports, Mu),
              y = Ht(_),
              b = xi(_, y),
              x = 0,
              w = n.interpolate || Gs,
              R = "__p += '",
              U = Ii(
                (n.escape || Gs).source +
                  "|" +
                  w.source +
                  "|" +
                  (w === Za ? Tl : Gs).source +
                  "|" +
                  (n.evaluate || Gs).source +
                  "|$",
                "g",
              ),
              N =
                "//# sourceURL=" +
                (gt.call(n, "sourceURL")
                  ? (n.sourceURL + "").replace(/\s/g, " ")
                  : "lodash.templateSources[" + ++Jl + "]") +
                `
`
            t.replace(U, function (F, Z, q, et, K, ht) {
              return (
                q || (q = et),
                (R += t.slice(x, ht).replace(kl, oh)),
                Z &&
                  ((l = !0),
                  (R +=
                    `' +
__e(` +
                    Z +
                    `) +
'`)),
                K &&
                  ((g = !0),
                  (R +=
                    `';
` +
                    K +
                    `;
__p += '`)),
                q &&
                  (R +=
                    `' +
((__t = (` +
                    q +
                    `)) == null ? '' : __t) +
'`),
                (x = ht + F.length),
                F
              )
            }),
              (R += `';
`)
            var B = gt.call(n, "variable") && n.variable
            if (B) {
              if (Ml.test(B))
                throw new ut(
                  "Invalid `variable` option passed into `_.template`",
                )
            } else
              R =
                `with (obj) {
` +
                R +
                `
}
`
            ;(R = (g ? R.replace(hl, "") : R)
              .replace(dl, "$1")
              .replace(fl, "$1;")),
              (R =
                "function(" +
                (B || "obj") +
                `) {
` +
                (B
                  ? ""
                  : `obj || (obj = {});
`) +
                "var __t, __p = ''" +
                (l ? ", __e = _.escape" : "") +
                (g
                  ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                  : `;
`) +
                R +
                `return __p
}`)
            var A = mc(function () {
              return Ot(y, N + "return " + R).apply(a, b)
            })
            if (((A.source = R), ca(A))) throw A
            return A
          }),
          (h.times = function (t, n) {
            if ((t = rt(t)) < 1 || t > E) return []
            var r = X,
              u = Yt(t, X)
            ;(n = G(n)), (t -= X)
            for (var l = Ci(u, n); ++r < t; ) n(r)
            return l
          }),
          (h.toFinite = dn),
          (h.toInteger = rt),
          (h.toLength = oc),
          (h.toLower = function (t) {
            return ft(t).toLowerCase()
          }),
          (h.toNumber = Oe),
          (h.toSafeInteger = function (t) {
            return t ? Ln(rt(t), -9007199254740991, E) : t === 0 ? t : 0
          }),
          (h.toString = ft),
          (h.toUpper = function (t) {
            return ft(t).toUpperCase()
          }),
          (h.trim = function (t, n, r) {
            if ((t = ft(t)) && (r || n === a)) return Eo(t)
            if (!t || !(n = ve(n))) return t
            var u = Le(t),
              l = Le(n)
            return xn(u, To(u, l), Ro(u, l) + 1).join("")
          }),
          (h.trimEnd = function (t, n, r) {
            if ((t = ft(t)) && (r || n === a)) return t.slice(0, Po(t) + 1)
            if (!t || !(n = ve(n))) return t
            var u = Le(t)
            return xn(u, 0, Ro(u, Le(n)) + 1).join("")
          }),
          (h.trimStart = function (t, n, r) {
            if ((t = ft(t)) && (r || n === a)) return t.replace(li, "")
            if (!t || !(n = ve(n))) return t
            var u = Le(t)
            return xn(u, To(u, Le(n))).join("")
          }),
          (h.truncate = function (t, n) {
            var r = 30,
              u = "..."
            if (It(n)) {
              var l = "separator" in n ? n.separator : l
              ;(r = "length" in n ? rt(n.length) : r),
                (u = "omission" in n ? ve(n.omission) : u)
            }
            var g = (t = ft(t)).length
            if (Qn(t)) {
              var _ = Le(t)
              g = _.length
            }
            if (r >= g) return t
            var y = r - ts(u)
            if (y < 1) return u
            var b = _ ? xn(_, 0, y).join("") : t.slice(0, y)
            if (l === a) return b + u
            if ((_ && (y += b.length - y), la(l))) {
              if (t.slice(y).search(l)) {
                var x,
                  w = b
                for (
                  l.global || (l = Ii(l.source, ft(Ja.exec(l)) + "g")),
                    l.lastIndex = 0;
                  (x = l.exec(w));

                )
                  var R = x.index
                b = b.slice(0, R === a ? y : R)
              }
            } else if (t.indexOf(ve(l), y) != y) {
              var U = b.lastIndexOf(l)
              U > -1 && (b = b.slice(0, U))
            }
            return b + u
          }),
          (h.unescape = function (t) {
            return (t = ft(t)) && gl.test(t) ? t.replace(Ga, ch) : t
          }),
          (h.uniqueId = function (t) {
            var n = ++dh
            return ft(t) + n
          }),
          (h.upperCase = Gd),
          (h.upperFirst = fa),
          (h.each = Ju),
          (h.eachRight = Yu),
          (h.first = Bu),
          _a(
            h,
            ((ba = {}),
            Ye(h, function (t, n) {
              gt.call(h.prototype, n) || (ba[n] = t)
            }),
            ba),
            { chain: !1 },
          ),
          (h.VERSION = "4.17.21"),
          Te(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (t) {
              h[t].placeholder = h
            },
          ),
          Te(["drop", "take"], function (t, n) {
            ;(at.prototype[t] = function (r) {
              r = r === a ? 1 : kt(rt(r), 0)
              var u = this.__filtered__ && !n ? new at(this) : this.clone()
              return (
                u.__filtered__
                  ? (u.__takeCount__ = Yt(r, u.__takeCount__))
                  : u.__views__.push({
                      size: Yt(r, X),
                      type: t + (u.__dir__ < 0 ? "Right" : ""),
                    }),
                u
              )
            }),
              (at.prototype[t + "Right"] = function (r) {
                return this.reverse()[t](r).reverse()
              })
          }),
          Te(["filter", "map", "takeWhile"], function (t, n) {
            var r = n + 1,
              u = r == 1 || r == 3
            at.prototype[t] = function (l) {
              var g = this.clone()
              return (
                g.__iteratees__.push({ iteratee: G(l, 3), type: r }),
                (g.__filtered__ = g.__filtered__ || u),
                g
              )
            }
          }),
          Te(["head", "last"], function (t, n) {
            var r = "take" + (n ? "Right" : "")
            at.prototype[t] = function () {
              return this[r](1).value()[0]
            }
          }),
          Te(["initial", "tail"], function (t, n) {
            var r = "drop" + (n ? "" : "Right")
            at.prototype[t] = function () {
              return this.__filtered__ ? new at(this) : this[r](1)
            }
          }),
          (at.prototype.compact = function () {
            return this.filter(ge)
          }),
          (at.prototype.find = function (t) {
            return this.filter(t).head()
          }),
          (at.prototype.findLast = function (t) {
            return this.reverse().find(t)
          }),
          (at.prototype.invokeMap = it(function (t, n) {
            return typeof t == "function"
              ? new at(this)
              : this.map(function (r) {
                  return Es(r, t, n)
                })
          })),
          (at.prototype.reject = function (t) {
            return this.filter(Rr(G(t)))
          }),
          (at.prototype.slice = function (t, n) {
            t = rt(t)
            var r = this
            return r.__filtered__ && (t > 0 || n < 0)
              ? new at(r)
              : (t < 0 ? (r = r.takeRight(-t)) : t && (r = r.drop(t)),
                n !== a &&
                  (r = (n = rt(n)) < 0 ? r.dropRight(-n) : r.take(n - t)),
                r)
          }),
          (at.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
          }),
          (at.prototype.toArray = function () {
            return this.take(X)
          }),
          Ye(at.prototype, function (t, n) {
            var r = /^(?:filter|find|map|reject)|While$/.test(n),
              u = /^(?:head|last)$/.test(n),
              l = h[u ? "take" + (n == "last" ? "Right" : "") : n],
              g = u || /^find/.test(n)
            l &&
              (h.prototype[n] = function () {
                var _ = this.__wrapped__,
                  y = u ? [1] : arguments,
                  b = _ instanceof at,
                  x = y[0],
                  w = b || st(_),
                  R = function (Z) {
                    var q = l.apply(h, yn([Z], y))
                    return u && U ? q[0] : q
                  }
                w &&
                  r &&
                  typeof x == "function" &&
                  x.length != 1 &&
                  (b = w = !1)
                var U = this.__chain__,
                  N = !!this.__actions__.length,
                  B = g && !U,
                  A = b && !N
                if (!g && w) {
                  _ = A ? _ : new at(this)
                  var F = t.apply(_, y)
                  return (
                    F.__actions__.push({ func: Ir, args: [R], thisArg: a }),
                    new Fe(F, U)
                  )
                }
                return B && A
                  ? t.apply(this, y)
                  : ((F = this.thru(R)), B ? (u ? F.value()[0] : F.value()) : F)
              })
          }),
          Te(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (t) {
              var n = Xs[t],
                r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                u = /^(?:pop|shift)$/.test(t)
              h.prototype[t] = function () {
                var l = arguments
                if (u && !this.__chain__) {
                  var g = this.value()
                  return n.apply(st(g) ? g : [], l)
                }
                return this[r](function (_) {
                  return n.apply(st(_) ? _ : [], l)
                })
              }
            },
          ),
          Ye(at.prototype, function (t, n) {
            var r = h[n]
            if (r) {
              var u = r.name + ""
              gt.call(rs, u) || (rs[u] = []), rs[u].push({ name: n, func: r })
            }
          }),
          (rs[vr(a, 2).name] = [{ name: "wrapper", func: a }]),
          (at.prototype.clone = function () {
            var t = new at(this.__wrapped__)
            return (
              (t.__actions__ = he(this.__actions__)),
              (t.__dir__ = this.__dir__),
              (t.__filtered__ = this.__filtered__),
              (t.__iteratees__ = he(this.__iteratees__)),
              (t.__takeCount__ = this.__takeCount__),
              (t.__views__ = he(this.__views__)),
              t
            )
          }),
          (at.prototype.reverse = function () {
            if (this.__filtered__) {
              var t = new at(this)
              ;(t.__dir__ = -1), (t.__filtered__ = !0)
            } else (t = this.clone()).__dir__ *= -1
            return t
          }),
          (at.prototype.value = function () {
            var t = this.__wrapped__.value(),
              n = this.__dir__,
              r = st(t),
              u = n < 0,
              l = r ? t.length : 0,
              g = (function (ht, j, J) {
                for (var Lt = -1, Pt = J.length; ++Lt < Pt; ) {
                  var re = J[Lt],
                    wt = re.size
                  switch (re.type) {
                    case "drop":
                      ht += wt
                      break
                    case "dropRight":
                      j -= wt
                      break
                    case "take":
                      j = Yt(j, ht + wt)
                      break
                    case "takeRight":
                      ht = kt(ht, j - wt)
                  }
                }
                return { start: ht, end: j }
              })(0, l, this.__views__),
              _ = g.start,
              y = g.end,
              b = y - _,
              x = u ? y : _ - 1,
              w = this.__iteratees__,
              R = w.length,
              U = 0,
              N = Yt(b, this.__takeCount__)
            if (!r || (!u && l == b && N == b)) return lu(t, this.__actions__)
            var B = []
            t: for (; b-- && U < N; ) {
              for (var A = -1, F = t[(x += n)]; ++A < R; ) {
                var Z = w[A],
                  q = Z.iteratee,
                  et = Z.type,
                  K = q(F)
                if (et == 2) F = K
                else if (!K) {
                  if (et == 1) continue t
                  break t
                }
              }
              B[U++] = F
            }
            return B
          }),
          (h.prototype.at = ld),
          (h.prototype.chain = function () {
            return Zu(this)
          }),
          (h.prototype.commit = function () {
            return new Fe(this.value(), this.__chain__)
          }),
          (h.prototype.next = function () {
            this.__values__ === a && (this.__values__ = ac(this.value()))
            var t = this.__index__ >= this.__values__.length
            return { done: t, value: t ? a : this.__values__[this.__index__++] }
          }),
          (h.prototype.plant = function (t) {
            for (var n, r = this; r instanceof hr; ) {
              var u = $u(r)
              ;(u.__index__ = 0),
                (u.__values__ = a),
                n ? (l.__wrapped__ = u) : (n = u)
              var l = u
              r = r.__wrapped__
            }
            return (l.__wrapped__ = t), n
          }),
          (h.prototype.reverse = function () {
            var t = this.__wrapped__
            if (t instanceof at) {
              var n = t
              return (
                this.__actions__.length && (n = new at(this)),
                (n = n.reverse()).__actions__.push({
                  func: Ir,
                  args: [ia],
                  thisArg: a,
                }),
                new Fe(n, this.__chain__)
              )
            }
            return this.thru(ia)
          }),
          (h.prototype.toJSON =
            h.prototype.valueOf =
            h.prototype.value =
              function () {
                return lu(this.__wrapped__, this.__actions__)
              }),
          (h.prototype.first = h.prototype.head),
          Ss &&
            (h.prototype[Ss] = function () {
              return this
            }),
          h
        )
      })()
    Dn ? (((Dn.exports = es)._ = es), (pi._ = es)) : (Wt._ = es)
  }.call(Os)
var Cp = Na.exports
const xp = "messageRenderOptions",
  ig = {
    doHideThreadSelector: !1,
    doHideStatusBars: !1,
    doHideSlashActions: !1,
    doHideAtMentions: !1,
    doHideAgentSwitcher: !1,
    doHideNewThreadButton: !1,
    doHideMultimodalActions: !1,
    doHideContextBar: !1,
    doShowTurnSelector: !1,
    doHideFloatingButtons: !1,
  },
  ag = {
    doHideThreadSelector: !0,
    doHideStatusBars: !0,
    doHideSlashActions: !0,
    doHideAtMentions: !0,
    doHideAgentSwitcher: !1,
    doHideNewThreadButton: !0,
    doHideMultimodalActions: !0,
    doHideContextBar: !0,
    doShowTurnSelector: !0,
    doHideFloatingButtons: !0,
  },
  og = "selectedTurnIndex"
function Ap(a, e) {
  a.update(() => (e.isActive ? ag : ig))
}
function Ip() {
  const a = Vr("chatModel")
  return a || console.warn("ChatModel not found in context"), a
}
function Mp(a) {
  return gf("chatModel", a), a
}
function Nc(a) {
  let e, s
  return (
    (e = new $a({
      props: {
        class: "edit-item__added-lines",
        size: 1,
        $$slots: { default: [ug] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        Vn(e.$$.fragment)
      },
      m(i, o) {
        Zn(e, i, o), (s = !0)
      },
      p(i, o) {
        const c = {}
        5 & o && (c.$$scope = { dirty: o, ctx: i }), e.$set(c)
      },
      i(i) {
        s || (Tt(e.$$.fragment, i), (s = !0))
      },
      o(i) {
        Gt(e.$$.fragment, i), (s = !1)
      },
      d(i) {
        Jn(e, i)
      },
    }
  )
}
function ug(a) {
  let e, s
  return {
    c() {
      ;(e = Ie("+")), (s = Ie(a[0]))
    },
    m(i, o) {
      vt(i, e, o), vt(i, s, o)
    },
    p(i, o) {
      1 & o && Ns(s, i[0])
    },
    d(i) {
      i && (mt(e), mt(s))
    },
  }
}
function $c(a) {
  let e, s
  return (
    (e = new $a({
      props: {
        class: "edit-item__removed-lines",
        size: 1,
        $$slots: { default: [cg] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        Vn(e.$$.fragment)
      },
      m(i, o) {
        Zn(e, i, o), (s = !0)
      },
      p(i, o) {
        const c = {}
        6 & o && (c.$$scope = { dirty: o, ctx: i }), e.$set(c)
      },
      i(i) {
        s || (Tt(e.$$.fragment, i), (s = !0))
      },
      o(i) {
        Gt(e.$$.fragment, i), (s = !1)
      },
      d(i) {
        Jn(e, i)
      },
    }
  )
}
function cg(a) {
  let e, s
  return {
    c() {
      ;(e = Ie("-")), (s = Ie(a[1]))
    },
    m(i, o) {
      vt(i, e, o), vt(i, s, o)
    },
    p(i, o) {
      2 & o && Ns(s, i[1])
    },
    d(i) {
      i && (mt(e), mt(s))
    },
  }
}
function lg(a) {
  let e,
    s,
    i,
    o = a[0] > 0 && Nc(a),
    c = a[1] > 0 && $c(a)
  return {
    c() {
      ;(e = ds("div")),
        o && o.c(),
        (s = Hs()),
        c && c.c(),
        k(e, "class", "edit-item__changes svelte-1k8sltp")
    },
    m(f, m) {
      vt(f, e, m), o && o.m(e, null), oe(e, s), c && c.m(e, null), (i = !0)
    },
    p(f, [m]) {
      f[0] > 0
        ? o
          ? (o.p(f, m), 1 & m && Tt(o, 1))
          : ((o = Nc(f)), o.c(), Tt(o, 1), o.m(e, s))
        : o &&
          (js(),
          Gt(o, 1, 1, () => {
            o = null
          }),
          zs()),
        f[1] > 0
          ? c
            ? (c.p(f, m), 2 & m && Tt(c, 1))
            : ((c = $c(f)), c.c(), Tt(c, 1), c.m(e, null))
          : c &&
            (js(),
            Gt(c, 1, 1, () => {
              c = null
            }),
            zs())
    },
    i(f) {
      i || (Tt(o), Tt(c), (i = !0))
    },
    o(f) {
      Gt(o), Gt(c), (i = !1)
    },
    d(f) {
      f && mt(e), o && o.d(), c && c.d()
    },
  }
}
function hg(a, e, s) {
  let { totalAddedLines: i = 0 } = e,
    { totalRemovedLines: o = 0 } = e
  return (
    (a.$$set = (c) => {
      "totalAddedLines" in c && s(0, (i = c.totalAddedLines)),
        "totalRemovedLines" in c && s(1, (o = c.totalRemovedLines))
    }),
    [i, o]
  )
}
class dg extends tn {
  constructor(e) {
    super(),
      en(this, e, hg, lg, nn, { totalAddedLines: 0, totalRemovedLines: 1 })
  }
}
function fg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738",
        ),
        k(s, "fill", "currentColor"),
        k(e, "class", a[0]),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p(i, [o]) {
      1 & o && k(e, "class", i[0])
    },
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
function gg(a, e, s) {
  let { class: i = "" } = e
  return (
    (a.$$set = (o) => {
      "class" in o && s(0, (i = o.class))
    }),
    [i]
  )
}
class Ep extends tn {
  constructor(e) {
    super(), en(this, e, gg, fg, nn, { class: 0 })
  }
}
function pg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M3.5 2.82672C3.5 2.55058 3.72386 2.32672 4 2.32672H9.79289L12.5 5.03383V12.8267C12.5 13.1028 12.2761 13.3267 12 13.3267H4C3.72386 13.3267 3.5 13.1028 3.5 12.8267V2.82672ZM4 1.32672C3.17157 1.32672 2.5 1.99829 2.5 2.82672V12.8267C2.5 13.6551 3.17157 14.3267 4 14.3267H12C12.8284 14.3267 13.5 13.6551 13.5 12.8267V4.93027C13.5 4.73136 13.421 4.5406 13.2803 4.39994L10.3535 1.47317C10.2598 1.3794 10.1326 1.32672 10 1.32672H4ZM10.25 6.6595C10.5261 6.6595 10.75 6.43564 10.75 6.1595C10.75 5.88336 10.5261 5.6595 10.25 5.6595H8.49996L8.49996 3.9095C8.49996 3.6334 8.2761 3.4095 7.99996 3.4095C7.72382 3.4095 7.49996 3.6334 7.49996 3.9095V5.6595H5.74996C5.47386 5.6595 5.24996 5.88336 5.24996 6.1595C5.24996 6.43564 5.47386 6.6595 5.74996 6.6595L7.49996 6.6595V8.4095C7.49996 8.68564 7.72382 8.9095 7.99996 8.9095C8.2761 8.9095 8.49996 8.68564 8.49996 8.4095V6.6595H10.25ZM10.4999 11.4188C10.4999 11.695 10.2761 11.9188 9.99993 11.9188H5.99993C5.72379 11.9188 5.49993 11.695 5.49993 11.4188C5.49993 11.1427 5.72379 10.9188 5.99993 10.9188H9.99993C10.2761 10.9188 10.4999 11.1427 10.4999 11.4188Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class Tp extends tn {
  constructor(e) {
    super(), en(this, e, null, pg, nn, {})
  }
}
function _g(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class Rp extends tn {
  constructor(e) {
    super(), en(this, e, null, _g, nn, {})
  }
}
function mg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class Fp extends tn {
  constructor(e) {
    super(), en(this, e, null, mg, nn, {})
  }
}
function yg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class Pp extends tn {
  constructor(e) {
    super(), en(this, e, null, yg, nn, {})
  }
}
function vg(a) {
  let e,
    s,
    i = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "data-ds-icon": "fa" },
      { viewBox: "0 0 448 512" },
      a[0],
    ],
    o = {}
  for (let c = 0; c < i.length; c += 1) o = Ta(o, i[c])
  return {
    c() {
      ;(e = ce("svg")), (s = new pf(!0)), this.h()
    },
    l(c) {
      e = _f(c, "svg", { xmlns: !0, "data-ds-icon": !0, viewBox: !0 })
      var f = mf(e)
      ;(s = yf(f, !0)), f.forEach(mt), this.h()
    },
    h() {
      ;(s.a = null), Cc(e, o)
    },
    m(c, f) {
      vf(c, e, f),
        s.m(
          '<!--! Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M448 128c0 53-43 96-96 96-28.9 0-54.8-12.8-72.4-33l-89.7 44.9c1.4 6.5 2.1 13.2 2.1 20.1s-.7 13.6-2.1 20.1l89.7 44.9c17.6-20.2 43.5-33 72.4-33 53 0 96 43 96 96s-43 96-96 96-96-43-96-96c0-6.9.7-13.6 2.1-20.1L168.4 319c-17.6 20.2-43.5 33-72.4 33-53 0-96-43-96-96s43-96 96-96c28.9 0 54.8 12.8 72.4 33l89.7-44.9c-1.4-6.5-2.1-13.2-2.1-20.1 0-53 43-96 96-96s96 43 96 96M96 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m304-176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96"/>',
          e,
        )
    },
    p(c, [f]) {
      Cc(
        e,
        (o = bf(i, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "data-ds-icon": "fa" },
          { viewBox: "0 0 448 512" },
          1 & f && c[0],
        ])),
      )
    },
    i: Rt,
    o: Rt,
    d(c) {
      c && mt(e)
    },
  }
}
function bg(a, e, s) {
  return (
    (a.$$set = (i) => {
      s(0, (e = Ta(Ta({}, e), xc(i))))
    }),
    [(e = xc(e))]
  )
}
class Dp extends tn {
  constructor(e) {
    super(), en(this, e, bg, vg, nn, {})
  }
}
function Sg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class qp extends tn {
  constructor(e) {
    super(), en(this, e, null, Sg, nn, {})
  }
}
function wg(a) {
  let e, s
  return {
    c() {
      ;(e = ce("svg")),
        (s = ce("path")),
        k(s, "fill-rule", "evenodd"),
        k(s, "clip-rule", "evenodd"),
        k(
          s,
          "d",
          "M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM3.85768 3.15057C4.84311 2.32448 6.11342 1.82708 7.49991 1.82708C10.6329 1.82708 13.1727 4.36689 13.1727 7.49991C13.1727 8.88638 12.6753 10.1567 11.8492 11.1421L3.85768 3.15057ZM3.15057 3.85768C2.32448 4.84311 1.82708 6.11342 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C8.88638 13.1727 10.1567 12.6753 11.1421 11.8492L3.15057 3.85768Z",
        ),
        k(s, "fill", "currentColor"),
        k(e, "width", "15"),
        k(e, "height", "15"),
        k(e, "viewBox", "0 0 15 15"),
        k(e, "fill", "none"),
        k(e, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(i, o) {
      vt(i, e, o), oe(e, s)
    },
    p: Rt,
    i: Rt,
    o: Rt,
    d(i) {
      i && mt(e)
    },
  }
}
class Op extends tn {
  constructor(e) {
    super(), en(this, e, null, wg, nn, {})
  }
}
class jc {
  static generateDiff(e, s, i, o) {
    return qf(e, s, i, o)
  }
  static generateDiffs(e) {
    return Of(e)
  }
  static getDiffStats(e) {
    return Pc(e)
  }
  static getDiffObjectStats(e) {
    return Pc(e.diff)
  }
  static isNewFile(e) {
    return kf(e)
  }
  static isDeletedFile(e) {
    return Lf(e)
  }
}
function zc(a) {
  let e, s, i, o, c, f, m, v, C, E, P, X, z
  ;(c = new $a({
    props: {
      size: 1,
      weight: "medium",
      truncate: !0,
      $$slots: { default: [Cg] },
      $$scope: { ctx: a },
    },
  })),
    (m = new dg({ props: { totalAddedLines: a[8], totalRemovedLines: a[7] } })),
    (C = new Df({}))
  let H = a[0] && Wc(a)
  return {
    c() {
      ;(e = ds("div")),
        (s = ds("div")),
        (i = ds("div")),
        (o = ds("div")),
        Vn(c.$$.fragment),
        (f = Hs()),
        Vn(m.$$.fragment),
        (v = Hs()),
        Vn(C.$$.fragment),
        (E = Hs()),
        H && H.c(),
        k(o, "class", "file-changes-info__text svelte-1j09i4t"),
        k(i, "class", "file-changes-info svelte-1j09i4t"),
        k(i, "role", "button"),
        k(i, "tabindex", "0"),
        jr(i, "active", a[9]),
        k(s, "class", "file-changes-header svelte-1j09i4t"),
        k(e, "class", "file-changes-summary svelte-1j09i4t"),
        jr(e, "file-changes-summary--has-actions", a[0])
    },
    m(W, Q) {
      vt(W, e, Q),
        oe(e, s),
        oe(s, i),
        oe(i, o),
        Zn(c, o, null),
        oe(o, f),
        Zn(m, o, null),
        oe(i, v),
        Zn(C, i, null),
        oe(e, E),
        H && H.m(e, null),
        (P = !0),
        X || ((z = [Ic(i, "click", a[14]), Ic(i, "keydown", a[21])]), (X = !0))
    },
    p(W, Q) {
      const $ = {}
      8388620 & Q && ($.$$scope = { dirty: Q, ctx: W }), c.$set($)
      const dt = {}
      256 & Q && (dt.totalAddedLines = W[8]),
        128 & Q && (dt.totalRemovedLines = W[7]),
        m.$set(dt),
        (!P || 512 & Q) && jr(i, "active", W[9]),
        W[0]
          ? H
            ? (H.p(W, Q), 1 & Q && Tt(H, 1))
            : ((H = Wc(W)), H.c(), Tt(H, 1), H.m(e, null))
          : H &&
            (js(),
            Gt(H, 1, 1, () => {
              H = null
            }),
            zs()),
        (!P || 1 & Q) && jr(e, "file-changes-summary--has-actions", W[0])
    },
    i(W) {
      P ||
        (Tt(c.$$.fragment, W),
        Tt(m.$$.fragment, W),
        Tt(C.$$.fragment, W),
        Tt(H),
        (P = !0))
    },
    o(W) {
      Gt(c.$$.fragment, W),
        Gt(m.$$.fragment, W),
        Gt(C.$$.fragment, W),
        Gt(H),
        (P = !1)
    },
    d(W) {
      W && mt(e), Jn(c), Jn(m), Jn(C), H && H.d(), (X = !1), Sf(z)
    },
  }
}
function Cg(a) {
  let e,
    s,
    i,
    o,
    c,
    f = a[3] === 1 ? "" : "s"
  return {
    c() {
      ;(e = Ie(a[3])),
        (s = Ie(" file")),
        (i = Ie(f)),
        (o = Ie(" changed")),
        (c = Ie(a[2]))
    },
    m(m, v) {
      vt(m, e, v), vt(m, s, v), vt(m, i, v), vt(m, o, v), vt(m, c, v)
    },
    p(m, v) {
      8 & v && Ns(e, m[3]),
        8 & v && f !== (f = m[3] === 1 ? "" : "s") && Ns(i, f),
        4 & v && Ns(c, m[2])
    },
    d(m) {
      m && (mt(e), mt(s), mt(i), mt(o), mt(c))
    },
  }
}
function Wc(a) {
  let e, s, i, o
  ;(s = new Kc({
    props: {
      variant: "ghost",
      color: "neutral",
      size: 1,
      disabled: a[4],
      $$slots: { default: [Ig] },
      $$scope: { ctx: a },
    },
  })),
    s.$on("click", a[13])
  let c = a[1] && Bc(a)
  return {
    c() {
      ;(e = ds("div")),
        Vn(s.$$.fragment),
        (i = Hs()),
        c && c.c(),
        k(e, "class", "file-changes-actions svelte-1j09i4t")
    },
    m(f, m) {
      vt(f, e, m), Zn(s, e, null), oe(e, i), c && c.m(e, null), (o = !0)
    },
    p(f, m) {
      const v = {}
      16 & m && (v.disabled = f[4]),
        8388624 & m && (v.$$scope = { dirty: m, ctx: f }),
        s.$set(v),
        f[1]
          ? c
            ? (c.p(f, m), 2 & m && Tt(c, 1))
            : ((c = Bc(f)), c.c(), Tt(c, 1), c.m(e, null))
          : c &&
            (js(),
            Gt(c, 1, 1, () => {
              c = null
            }),
            zs())
    },
    i(f) {
      o || (Tt(s.$$.fragment, f), Tt(c), (o = !0))
    },
    o(f) {
      Gt(s.$$.fragment, f), Gt(c), (o = !1)
    },
    d(f) {
      f && mt(e), Jn(s), c && c.d()
    },
  }
}
function xg(a) {
  let e
  return {
    c() {
      e = Ie("Apply locally")
    },
    m(s, i) {
      vt(s, e, i)
    },
    d(s) {
      s && mt(e)
    },
  }
}
function Ag(a) {
  let e
  return {
    c() {
      e = Ie("Applied")
    },
    m(s, i) {
      vt(s, e, i)
    },
    d(s) {
      s && mt(e)
    },
  }
}
function Ig(a) {
  let e
  function s(c, f) {
    return c[4] ? Ag : xg
  }
  let i = s(a),
    o = i(a)
  return {
    c() {
      o.c(), (e = ja())
    },
    m(c, f) {
      o.m(c, f), vt(c, e, f)
    },
    p(c, f) {
      i !== (i = s(c)) &&
        (o.d(1), (o = i(c)), o && (o.c(), o.m(e.parentNode, e)))
    },
    d(c) {
      c && mt(e), o.d(c)
    },
  }
}
function Bc(a) {
  let e, s
  return (
    (e = new Kc({
      props: {
        variant: "ghost",
        color: "neutral",
        size: 1,
        disabled: a[5],
        $$slots: { default: [Tg] },
        $$scope: { ctx: a },
      },
    })),
    e.$on("click", a[12]),
    {
      c() {
        Vn(e.$$.fragment)
      },
      m(i, o) {
        Zn(e, i, o), (s = !0)
      },
      p(i, o) {
        const c = {}
        32 & o && (c.disabled = i[5]),
          8388640 & o && (c.$$scope = { dirty: o, ctx: i }),
          e.$set(c)
      },
      i(i) {
        s || (Tt(e.$$.fragment, i), (s = !0))
      },
      o(i) {
        Gt(e.$$.fragment, i), (s = !1)
      },
      d(i) {
        Jn(e, i)
      },
    }
  )
}
function Mg(a) {
  let e
  return {
    c() {
      e = Ie("Create PR")
    },
    m(s, i) {
      vt(s, e, i)
    },
    d(s) {
      s && mt(e)
    },
  }
}
function Eg(a) {
  let e
  return {
    c() {
      e = Ie("Creating PR...")
    },
    m(s, i) {
      vt(s, e, i)
    },
    d(s) {
      s && mt(e)
    },
  }
}
function Tg(a) {
  let e
  function s(c, f) {
    return c[5] ? Eg : Mg
  }
  let i = s(a),
    o = i(a)
  return {
    c() {
      o.c(), (e = ja())
    },
    m(c, f) {
      o.m(c, f), vt(c, e, f)
    },
    p(c, f) {
      i !== (i = s(c)) &&
        (o.d(1), (o = i(c)), o && (o.c(), o.m(e.parentNode, e)))
    },
    d(c) {
      c && mt(e), o.d(c)
    },
  }
}
function Rg(a) {
  let e,
    s,
    i = a[6] && zc(a)
  return {
    c() {
      i && i.c(), (e = ja())
    },
    m(o, c) {
      i && i.m(o, c), vt(o, e, c), (s = !0)
    },
    p(o, [c]) {
      o[6]
        ? i
          ? (i.p(o, c), 64 & c && Tt(i, 1))
          : ((i = zc(o)), i.c(), Tt(i, 1), i.m(e.parentNode, e))
        : i &&
          (js(),
          Gt(i, 1, 1, () => {
            i = null
          }),
          zs())
    },
    i(o) {
      s || (Tt(i), (s = !0))
    },
    o(o) {
      Gt(i), (s = !1)
    },
    d(o) {
      o && mt(e), i && i.d(o)
    },
  }
}
function Fg(a, e, s) {
  let i,
    o,
    c,
    f,
    m,
    v,
    C,
    E,
    P,
    { hasActions: X = !0 } = e,
    { changedFiles: z } = e,
    { canMakePR: H = !1 } = e,
    { suffix: W = "" } = e,
    { turnIndex: Q = -1 } = e
  const $ = Vr(ll.key)
  Ac(a, $, (Y) => s(19, (E = Y)))
  const dt = Vr(Wa.key),
    Zt = Vr(og)
  Ac(a, Zt, (Y) => s(20, (P = Y)))
  let Jt = !1,
    pt = !1
  function le() {
    var Pn, pn, _n, sn, Yn
    if (i) return E.closeRemoteAgentDiffPanel(), void Zt.set(-1)
    let Y = [],
      _t = "",
      ot = !0,
      qt = -1
    z
      ? ((Y = z),
        Q !== void 0
          ? ((qt = Q),
            (ot = !1),
            Zt.set(Q),
            (_t = Ma(
              ((Pn = E.currentConversation) == null ? void 0 : Pn.exchanges) ??
                [],
              Q,
            )))
          : ((ot = !0),
            Zt.set(-1),
            (_t = Ma(
              ((pn = E.currentConversation) == null ? void 0 : pn.exchanges) ??
                [],
              1,
            ))))
      : ((Y = Xr(
          ((_n = E.currentConversation) == null ? void 0 : _n.exchanges) ?? [],
        )),
        (ot = !0),
        Zt.set(-1),
        (_t = Ma(
          ((sn = E.currentConversation) == null ? void 0 : sn.exchanges) ?? [],
          1,
        )))
    const _e = qt
    E.showRemoteAgentDiffPanel({
      turnIdx: _e,
      changedFiles: Y,
      userPrompt: _t,
      sessionSummary:
        ((Yn = E.currentAgent) == null ? void 0 : Yn.session_summary) ?? "",
      isShowingAggregateChanges: ot,
    })
  }
  return (
    (a.$$set = (Y) => {
      "hasActions" in Y && s(0, (X = Y.hasActions)),
        "changedFiles" in Y && s(15, (z = Y.changedFiles)),
        "canMakePR" in Y && s(1, (H = Y.canMakePR)),
        "suffix" in Y && s(2, (W = Y.suffix)),
        "turnIndex" in Y && s(16, (Q = Y.turnIndex))
    }),
    (a.$$.update = () => {
      var Y
      1638400 & a.$$.dirty &&
        s(
          9,
          (i =
            E.isDiffPanelOpen &&
            E.currentAgentId === E.diffPanelAgentId &&
            ((Q === void 0 && P === -1) || (Q !== void 0 && P === Q))),
        ),
        557056 & a.$$.dirty &&
          s(
            18,
            (o =
              z ||
              Xr(
                ((Y = E.currentConversation) == null ? void 0 : Y.exchanges) ??
                  [],
              )),
          ),
        262144 & a.$$.dirty && s(3, (c = o.length)),
        262144 & a.$$.dirty &&
          s(
            17,
            (f = o.map((_t) => {
              const ot = jc.generateDiff(
                _t.old_path,
                _t.new_path,
                _t.old_contents || "",
                _t.new_contents || "",
              )
              return jc.getDiffObjectStats(ot)
            })),
          ),
        131072 & a.$$.dirty &&
          s(8, (m = f.reduce((_t, ot) => _t + ot.additions, 0))),
        131072 & a.$$.dirty &&
          s(7, (v = f.reduce((_t, ot) => _t + ot.deletions, 0))),
        8 & a.$$.dirty && s(6, (C = c > 0))
    }),
    [
      X,
      H,
      W,
      c,
      Jt,
      pt,
      C,
      v,
      m,
      i,
      $,
      Zt,
      function () {
        var Y
        ;(Y = E.currentAgent) != null && Y.remote_agent_id
          ? (s(5, (pt = !0)),
            E.sendMessage(
              "Please create a pull request with the changes you've made.",
            )
              .then(() => {
                s(5, (pt = !1))
              })
              .catch((_t) => {
                console.error("Error sending PR creation request:", _t),
                  s(5, (pt = !1))
              }))
          : console.error("No current agent ID found")
      },
      function () {
        var _t
        let Y = []
        ;(Y =
          z ||
          Xr(
            ((_t = E.currentConversation) == null ? void 0 : _t.exchanges) ??
              [],
          )),
          (function (ot, qt) {
            ot.length &&
              qt &&
              ot.forEach((_e) => {
                qt(_e.path, _e.originalCode, _e.newCode)
              })
          })(
            Y.map((ot) => ({
              path: ot.new_path || ot.old_path,
              originalCode: ot.old_contents || "",
              newCode: ot.new_contents || "",
            })).filter((ot) => ot.path && ot.newCode),
            (ot, qt, _e) => {
              dt.applyChanges(ot, qt, _e)
            },
          ),
          s(4, (Jt = !0))
      },
      le,
      z,
      Q,
      f,
      o,
      E,
      P,
      (Y) => Y.key === "Enter" && le(),
    ]
  )
}
class kp extends tn {
  constructor(e) {
    super(),
      en(this, e, Fg, Rg, nn, {
        hasActions: 0,
        changedFiles: 15,
        canMakePR: 1,
        suffix: 2,
        turnIndex: 16,
      })
  }
}
export {
  qc as $,
  zn as A,
  dp as B,
  ChatManager as C,
  ig as D,
  lt as E,
  gp as F,
  ti as G,
  pp as H,
  gs as I,
  Xf as J,
  mp as K,
  Tp as L,
  xp as M,
  Rp as N,
  Ep as O,
  Fp as P,
  _p as Q,
  ll as R,
  zt as S,
  ue as T,
  Kg as U,
  Pp as V,
  Xc as W,
  Ra as X,
  Qc as Y,
  tl as Z,
  Fa as _,
  Gg as a,
  Dc as a0,
  za as a1,
  Ip as a2,
  np as a3,
  ip as a4,
  jt as a5,
  lp as a6,
  cp as a7,
  sp as a8,
  ap as a9,
  op as aa,
  up as ab,
  rp as ac,
  jf as ad,
  Dp as ae,
  qp as af,
  Op as ag,
  kp as ah,
  Wa as ai,
  og as aj,
  zf as ak,
  nl as al,
  hp as am,
  wp as an,
  Vg as b,
  Jg as c,
  Zg as d,
  zg as e,
  Wg as f,
  Bg as g,
  Yg as h,
  Ae as i,
  $s as j,
  tp as k,
  ep as l,
  ContextManager as m,
  Qg as n,
  Xg as o,
  dg as p,
  fs as q,
  Sp as r,
  Mp as s,
  Cp as t,
  bp as u,
  Ap as v,
  ng as w,
  ps as x,
  fp as y,
  Et as z,
}
