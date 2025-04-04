// @ts-check

export function createGeneralConfig() {
  var _En = "x-client-key",
    pG = "x-ghost-mode",
    UEn = "x-session-id"
  function o7(i) {
    if (i === !0) return "true"
    if (i === !1) return "false"
    if (i === void 0) return "implicit-false"
    {
      let e = i
      return (e = e), "true"
    }
  }
  function HEn(i) {
    let e = 165
    for (let t = 0; t < i.length; t++) (i[t] = (i[t] ^ e) + (t % 256)), (e = i[t])
    return i
  }
  function VEn({
    req: i,
    machineId: e,
    macMachineId: t,
    base64Fn: s,
    cursorVersion: n,
    privacyMode: r,
    backupRequestId: o,
    clientKey: a,
    sessionId: l,
  }) {
    try {
      const c = Math.floor(Date.now() / 1e6),
        h = new Uint8Array([
          (c >> 40) & 255,
          (c >> 32) & 255,
          (c >> 24) & 255,
          (c >> 16) & 255,
          (c >> 8) & 255,
          c & 255,
        ]),
        u = HEn(h),
        d = s(u)
      i.header.set(
        "x-cursor-checksum",
        t === void 0 ? `${d}${e}` : `${d}${e}/${t}`,
      )
    } catch {}
    i.header.set("x-cursor-client-version", n),
      l !== void 0 && i.header.set(UEn, l),
      i.header.set(pG, o7(r)),
      a !== void 0 && i.header.set(_En, a)
    try {
      const c = Intl.DateTimeFormat().resolvedOptions().timeZone
      i.header.set("x-cursor-timezone", c)
    } catch {}
    try {
      o &&
        (i.header.has("x-request-id") || i.header.set("x-request-id", o),
        i.header.has("x-amzn-trace-id") ||
          i.header.set("x-amzn-trace-id", `Root=${o}`))
    } catch {}
  }
  var G1t
  ;(function (i) {
    i.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig"
  })(G1t || (G1t = {}))
  var EditHistoryDiffFormatter
  ;(function (i) {
    ;(i.Ack = "editHistoryDiffFormatter.ack"),
      (i.GetModelValueInRanges =
        "editHistoryDiffFormatter.getModelValueInRanges"),
      (i.GetModelValue = "editHistoryDiffFormatter.getModelValue"),
      (i.ProcessModelChange = "editHistoryDiffFormatter.processModelChange"),
      (i.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory"),
      (i.CloseCurrentCmdkDiffHistoryPatch =
        "editHistoryDiffFormatter.closeCurrentCmdkDiffHistoryPatch"),
      (i.InitModel = "editHistoryDiffFormatter.initModel"),
      (i.CompileGlobalDiffTrajectories =
        "editHistoryDiffFormatter.compileGlobalDiffTrajectories"),
      (i.CompileGlobalDiffTrajectoriesForCmdk =
        "editHistoryDiffFormatter.compileGlobalDiffTrajectoriesForCmdk"),
      (i.IsRevertingToRecentModel =
        "editHistoryDiffFormatter.isRevertingToRecentModel"),
      (i.IsSuggestingRecentlyRejectedEdit =
        "editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit"),
      (i.RecordRejectedEdit = "editHistoryDiffFormatter.recordRejectedEdit"),
      (i.ProcessModelChangeLoop =
        "editHistoryDiffFormatter.processModelChangeLoop"),
      (i.SetEnableCppWhitespaceDiffHistoryMode =
        "editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode"),
      (i.SetEnableCppIncludeUnchangedLines =
        "editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines")
  })(EditHistoryDiffFormatter || (EditHistoryDiffFormatter = {}))
  var J1t
  ;(function (i) {
    i.GetExtHostInfo = "extHostInfo.getExtHostInfo"
  })(J1t || (J1t = {}))
  var GB
  ;(function (i) {
    ;(i.GetFileSyncUpdates = "fileSync.getFileSyncUpdates"),
      (i.ShouldRelyOnFileSyncForFile = "fileSync.shouldRelyOnFileSyncForFile"),
      (i.GetFileSyncEncryptionHeader = "fileSync.getFileSyncEncryptionHeader"),
      (i.ResetSequentialSuccessfulSync = "fileSync.resetSequentialSuccessfulSync")
  })(GB || (GB = {}))
  var K1t
  ;(function (i) {
    ;(i.GetCommitNotes = "commitNotesService.getCommitNotes"),
      (i.SearchCommitNotes = "commitNotesService.searchCommitNotes"),
      (i.InitializeNotes = "commitNotesService.initialiezNotes")
  })(K1t || (K1t = {}))
  var mG
  ;(function (i) {
    ;(i.GetRelatedFiles = "contextGraph.getRelatedFiles"),
      (i.InitializeWorkspace = "contextGraph.initializeWorkspace"),
      (i.GetWorkspaceSyncStatus = "contextGraph.getWorkspaceSyncStatus"),
      (i.ResetWorkspace = "contextGraph.resetWorkspace"),
      (i.GetRelatedFilesForLine = "contextGraph.getRelatedFilesForLine"),
      (i.GetRelatedFilesForRange = "contextGraph.getRelatedFilesForRange")
  })(mG || (mG = {}))
  var zoe
  ;(function (i) {
    i.GetDirectory = "fileRetrievalActions.readDirectory"
  })(zoe || (zoe = {}))
  var FVe
  ;(function (i) {
    ;(i.CheckClaudeAPIKey = "misc.checkClaudeAPIKey"),
      (i.CheckGoogleAPIKey = "misc.checkGoogleAPIKey")
  })(FVe || (FVe = {}))
  var Y1t
  ;(function (i) {
    ;(i.GetReferencedSymbols = "treesitter.getReferencedSymbols"),
      (i.GetDefinedSymbols = "treesitter.getDefinedSymbols"),
      (i.GetImportantDefinitionNames = "treesitter.getImportantDefinitionNames")
  })(Y1t || (Y1t = {}))
  var X1t
  ;(function (i) {
    ;(i.GetRecentCommits = "git.getRecentCommits"),
      (i.GetRecentCommitHashesTouchingFile =
        "git.getRecentCommitHashesTouchingFile"),
      (i.GetCommitByHash = "git.getCommitByHash"),
      (i.GetCommitDetailsByHashes = "git.getCommitDetailsByHashes"),
      (i.GetCurrentIndexAndRecentCommits = "git.getCurrentIndexAndRecentCommits")
  })(X1t || (X1t = {}))
  var f2i
  ;(function (i) {
    i.GetFileImports = "lsp.getFileImports"
  })(f2i || (f2i = {}))
  var g2i
  ;(function (i) {
    ;(i.Get = "devOnlyRedis.get"),
      (i.Set = "devOnlyRedis.set"),
      (i.SubscribeToChannelForKey = "devOnlyRedis.subscribeToChannelForKey"),
      (i.UnsubscribeFromChannelForKey =
        "devOnlyRedis.unsubscribeFromChannelForKey")
  })(g2i || (g2i = {}))
  var p2i
  ;(function (i) {
    i.ValueChanged = "devOnlyRedis.valueChanged"
  })(p2i || (p2i = {}))
  var Q1t
  ;(function (i) {
    i.TakeScreenshot = "puppeteer.takeScreenshot"
  })(Q1t || (Q1t = {}))
  var a7
  ;(function (i) {
    ;(i.ListTools = "mcp.listTools"),
      (i.CallTool = "mcp.callTool"),
      (i.CreateClient = "mcp.createClient"),
      (i.DeleteClient = "mcp.deleteClient")
  })(a7 || (a7 = {}))
  var CppIntent
  ;(function (i) {
    ;(i.Unknown = "unknown"),
      (i.LineChange = "line_change"),
      (i.Typing = "typing"),
      (i.OptionHold = "option_hold"),
      (i.LinterErrors = "lint_errors"),
      (i.ParameterHints = "parameter_hints"),
      (i.CursorPrediction = "cursor_prediction"),
      (i.ManualTrigger = "manual_trigger"),
      (i.EditorChange = "editor_change"),
      (i.LspSuggestions = "lsp_suggestions")
  })(CppIntent || (CppIntent = {}))
  var _n
  ;(function (i) {
    ;(i.FREE = "free"),
      (i.PRO = "pro"),
      (i.ENTERPRISE = "enterprise"),
      (i.FREE_TRIAL = "free_trial")
  })(_n || (_n = {}))
  function m2i(i) {
    return i === _n.PRO || i === _n.ENTERPRISE || i === _n.FREE_TRIAL
  }
  var JB = "cursor.cpp.disabledLanguages"
  function WEn(i, e, t) {
    return i === void 0 || i.isOn === !1
      ? !1
      : !(e === !1 || (t === !1 && !i.shouldLetUserEnableCppEvenIfNotPro))
  }
  function qEn(i, e, t) {
    if (e !== void 0) {
      const s = [
        ".env",
        ".env.local",
        ".env.development",
        ".env.production",
        ".env.test",
        ".env.testing",
        ".env.development.local",
        ".env.production.local",
        ".env.test.local",
        ".env.testing.local",
      ]
      if (
        (e.languageId === "plaintext" && s.some((n) => e.fsPath.endsWith(n))) ||
        b2i(e.languageId, t)
      )
        return !1
    }
    return i === !0
  }
  function b2i(i, e) {
    return !!(Array.isArray(e) && e.includes(i))
  }
  var v2i = "cursor.general.disableHttp2",
    y2i = "cursor.general.gitGraphIndexing",
    l7
  ;(function (i) {
    ;(i.Ack = "composerEditHistoryDiffFormatter.ack"),
      (i.CompileGlobalDiffTrajectories =
        "composerEditHistoryDiffFormatter.compileGlobalDiffTrajectories"),
      (i.FormatDiffHistory =
        "composerEditHistoryDiffFormatter.formatDiffHistory"),
      (i.InitModel = "composerEditHistoryDiffFormatter.initModel"),
      (i.ResetModel = "composerEditHistoryDiffFormatter.resetModel"),
      (i.ProcessModelChange =
        "composerEditHistoryDiffFormatter.processModelChange"),
      (i.GetModelValue = "composerEditHistoryDiffFormatter.getModelValue")
  })(l7 || (l7 = {}))

  return {
    pG,
    o7,
    VEn,
    G1t,
    EditHistoryDiffFormatter,
    J1t,
    GB,
    K1t,
    mG,
    zoe,
    FVe,
    Y1t,
    X1t,
    Q1t,
    a7,
    CppIntent,
    _n,
    JB,
    WEn,
    qEn,
    b2i,
    m2i,
    v2i,
    y2i,
    l7,
  }
}
