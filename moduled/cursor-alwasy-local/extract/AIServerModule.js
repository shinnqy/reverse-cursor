// @ts-check

module.exports = {
  createAIServerModule,
}

function createAIServerModule(module, exports, require) {
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.Edit =
      exports.CppRejectEventNew =
      exports.FinishedCppGenerationEvent =
      exports.CppTriggerEvent =
      exports.CppSuggestEvent =
      exports.RecoverableCppData =
      exports.CppAcceptEventNew =
      exports.CurrentlyShownCppSuggestion =
      exports.ModelChange =
      exports.CursorSelection =
      exports.OneIndexedPosition =
      exports.IRange =
      exports.MarkCppResponse =
      exports.CppParameterHint =
      exports.MarkCppRequest_RangeTransformation =
      exports.MarkCppRequest_CppResponseTypes =
      exports.MarkCppRequest =
      exports.CppContextItem =
      exports.CppFileDiffHistory =
      exports.StreamHoldCppResponse =
      exports.StreamHoldCppRequest =
      exports.AvailableCppModelsResponse =
      exports.AvailableCppModelsRequest =
      exports.RecordCppFateResponse =
      exports.RecordCppFateRequest =
      exports.AdditionalFile =
      exports.GetCppEditClassificationResponse_ScoredEdit =
      exports.GetCppEditClassificationResponse_LogProbs =
      exports.GetCppEditClassificationResponse =
      exports.GetCppEditClassificationRequest =
      exports.SuggestedEdit =
      exports.CppConfigResponse_SuggestionHintConfig =
      exports.CppConfigResponse_RecentlyRejectedEditThresholds =
      exports.CppConfigResponse_MergeBehavior =
      exports.CppConfigResponse_ImportPredictionConfig =
      exports.CppConfigResponse_Heuristic =
      exports.CppConfigResponse =
      exports.CppConfigRequest =
      exports.StreamCppResponse_ModelInfo =
      exports.StreamCppResponse_CursorPredictionTarget =
      exports.StreamCppResponse =
      exports.StreamCppRequest_ControlToken =
      exports.StreamCppRequest =
      exports.ShouldTurnOnCppOnboardingResponse =
      exports.ShouldTurnOnCppOnboardingRequest =
      exports.LspSuggestedItems =
      exports.LspSuggestion =
      exports.CppIntentInfo =
      exports.CppSource =
      exports.CppFate =
        void 0),
    (exports.BugBotEvent_PressedFixInComposer =
      exports.BugBotEvent_ReportsGenerated =
      exports.BugBotEvent_Started =
      exports.BugBotEvent_BackgroundIntervalInterruptedReason =
      exports.BugBotEvent =
      exports.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic =
      exports.BugBotLinterEvent_NotShownBecauseHeuristic =
      exports.BugBotLinterEvent_UnviewedReport =
      exports.BugBotLinterEvent_ViewedReport =
      exports.BugBotLinterEvent_UserFeedback =
      exports.BugBotLinterEvent_LintDismissed =
      exports.BugBotLinterEvent_LintGenerated =
      exports.BugBotLinterEvent_Started =
      exports.BugBotLinterEvent =
      exports.ChatEvent_EndOfUninterruptedGeneration =
      exports.ChatEvent_EndOfAnyGeneration =
      exports.ChatEvent_SubmitPrompt =
      exports.ChatEvent =
      exports.CmdKEvent_RejectPartialDiff =
      exports.CmdKEvent_AcceptPartialDiff =
      exports.CmdKEvent_RejectDiffs =
      exports.CmdKEvent_AcceptDiffs =
      exports.CmdKEvent_InterruptGeneration =
      exports.CmdKEvent_EndOfGeneration =
      exports.CmdKEvent_SubmitPrompt =
      exports.CmdKEvent =
      exports.CppTerminalEvent_CommandFinished =
      exports.CppTerminalEvent_CommandStarted =
      exports.CppTerminalEvent_TerminalInput =
      exports.CppTerminalEvent =
      exports.CppQuickActionFireEvent =
      exports.CppChangeQuickActionEvent =
      exports.CppQuickAction_Edit =
      exports.CppQuickAction =
      exports.CppQuickActionCommand =
      exports.CppCopyEvent =
      exports.CppEditorChangedEvent =
      exports.CppDebouncedCursorMovementEvent =
      exports.CppLinterErrorEvent =
      exports.CppStoppedTrackingModelEvent_StoppedTrackingModelReason =
      exports.CppStoppedTrackingModelEvent =
      exports.CppManualTriggerEventNew =
      exports.PointInTimeModel =
      exports.MaybeDefinedPointInTimeModel =
      exports.RejectCursorPredictionEvent =
      exports.AcceptCursorPredictionEvent =
      exports.SuggestCursorPredictionEvent =
      exports.CursorPrediction_CursorPredictionSource =
      exports.CursorPrediction =
      exports.CppPartialAcceptEvent =
        void 0),
    (exports.CppTimelineEvent =
      exports.ModelWithHistory =
      exports.CppSuggestion =
      exports.CppRejectEvent =
      exports.CppAcceptEvent =
      exports.CppManualTriggerEvent =
      exports.CppHistoryAppendEvent =
      exports.BlockDiffPatch_ModelWindow =
      exports.BlockDiffPatch_Change =
      exports.BlockDiffPatch =
      exports.StartingModel =
      exports.CppEditHistoryStatusResponse =
      exports.CppEditHistoryStatusRequest =
      exports.EditHistoryAppendChangesResponse =
      exports.EditHistoryAppendChangesRequest_PrivacyModeStatus =
      exports.EditHistoryAppendChangesRequest =
      exports.CppAppendResponse =
      exports.CppAppendRequest =
      exports.CppSessionEvent =
      exports.LspSuggestionEvent =
      exports.AnythingQuickAccessSelectionEvent =
      exports.AnythingQuickAccessItem_Resource =
      exports.AnythingQuickAccessItem =
      exports.CppGitContextEvent_Change =
      exports.CppGitContextEvent_Commit_CommitShortStat =
      exports.CppGitContextEvent_Commit =
      exports.CppGitContextEvent_Submodule =
      exports.CppGitContextEvent_Remote =
      exports.CppGitContextEvent_Ref =
      exports.CppGitContextEvent_Head_UpstreamRef =
      exports.CppGitContextEvent_Head =
      exports.CppGitContextEvent =
      exports.ModelAddedEvent =
      exports.TabCloseEvent =
      exports.EditorCloseEvent =
      exports.ScrollEvent =
      exports.BackgroundFilesEvent_BackgroundFile =
      exports.BackgroundFilesEvent =
      exports.ModelOpenedEvent =
      exports.AiRequestEvent_RequestType =
      exports.AiRequestEvent =
      exports.BugBotEvent_BackgroundIntervalErrored =
      exports.BugBotEvent_BackgroundIntervalInterrupted =
      exports.BugBotEvent_BackgroundIntervalEnded =
      exports.BugBotEvent_BackgroundIntervalStarted =
      exports.BugBotEvent_UserFeedback =
      exports.BugBotEvent_ViewedReport_ReportView =
      exports.BugBotEvent_ViewedReport =
      exports.BugBotEvent_PressedOpenInEditor =
      exports.BugBotEvent_PressedAddToChat =
        void 0),
    (exports.CppTimelineEvent_Change_Status = exports.CppTimelineEvent_Change =
      void 0)
  const r = require(8271),
    s = require(3975),
    i = require(5434),
    o = require(5146),
    a = require(9457)
  var l, u, c, A, m, d, p, g, h, f, E, C
  // @ts-ignore
  !(function (e) {
    ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
      (e[(e.ACCEPT = 1)] = "ACCEPT"),
      (e[(e.REJECT = 2)] = "REJECT"),
      (e[(e.PARTIAL_ACCEPT = 3)] = "PARTIAL_ACCEPT")
  })((l = exports.CppFate || (exports.CppFate = {}))),
    r.proto3.util.setEnumType(l, "aiserver.v1.CppFate", [
      { no: 0, name: "CPP_FATE_UNSPECIFIED" },
      { no: 1, name: "CPP_FATE_ACCEPT" },
      { no: 2, name: "CPP_FATE_REJECT" },
      { no: 3, name: "CPP_FATE_PARTIAL_ACCEPT" },
    ]),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.LINE_CHANGE = 1)] = "LINE_CHANGE"),
        (e[(e.TYPING = 2)] = "TYPING"),
        (e[(e.OPTION_HOLD = 3)] = "OPTION_HOLD"),
        (e[(e.LINTER_ERRORS = 4)] = "LINTER_ERRORS"),
        (e[(e.PARAMETER_HINTS = 5)] = "PARAMETER_HINTS"),
        (e[(e.CURSOR_PREDICTION = 6)] = "CURSOR_PREDICTION"),
        (e[(e.MANUAL_TRIGGER = 7)] = "MANUAL_TRIGGER"),
        (e[(e.EDITOR_CHANGE = 8)] = "EDITOR_CHANGE"),
        (e[(e.LSP_SUGGESTIONS = 9)] = "LSP_SUGGESTIONS")
    })((u = exports.CppSource || (exports.CppSource = {}))),
    r.proto3.util.setEnumType(u, "aiserver.v1.CppSource", [
      { no: 0, name: "CPP_SOURCE_UNSPECIFIED" },
      { no: 1, name: "CPP_SOURCE_LINE_CHANGE" },
      { no: 2, name: "CPP_SOURCE_TYPING" },
      { no: 3, name: "CPP_SOURCE_OPTION_HOLD" },
      { no: 4, name: "CPP_SOURCE_LINTER_ERRORS" },
      { no: 5, name: "CPP_SOURCE_PARAMETER_HINTS" },
      { no: 6, name: "CPP_SOURCE_CURSOR_PREDICTION" },
      { no: 7, name: "CPP_SOURCE_MANUAL_TRIGGER" },
      { no: 8, name: "CPP_SOURCE_EDITOR_CHANGE" },
      { no: 9, name: "CPP_SOURCE_LSP_SUGGESTIONS" },
    ])
  class y extends r.Message {
    constructor(e) {
      super(), (this.source = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new y().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new y().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new y().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(y, e, t)
    }
  }
  ;(exports.CppIntentInfo = y),
    (y.runtime = r.proto3),
    (y.typeName = "aiserver.v1.CppIntentInfo"),
    (y.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "source", kind: "scalar", T: 9 },
    ]))
  class I extends r.Message {
    constructor(e) {
      super(), (this.label = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new I().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new I().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new I().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(I, e, t)
    }
  }
  ;(exports.LspSuggestion = I),
    (I.runtime = r.proto3),
    (I.typeName = "aiserver.v1.LspSuggestion"),
    (I.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "label", kind: "scalar", T: 9 },
    ]))
  class B extends r.Message {
    constructor(e) {
      super(), (this.suggestions = []), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new B().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new B().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new B().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(B, e, t)
    }
  }
  ;(exports.LspSuggestedItems = B),
    (B.runtime = r.proto3),
    (B.typeName = "aiserver.v1.LspSuggestedItems"),
    (B.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "suggestions", kind: "message", T: I, repeated: !0 },
    ]))
  class k extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new k().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new k().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new k().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(k, e, t)
    }
  }
  ;(exports.ShouldTurnOnCppOnboardingRequest = k),
    (k.runtime = r.proto3),
    (k.typeName = "aiserver.v1.ShouldTurnOnCppOnboardingRequest"),
    (k.fields = r.proto3.util.newFieldList(() => []))
  class w extends r.Message {
    constructor(e) {
      super(),
        (this.shouldTurnOnCppOnboarding = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new w().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new w().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new w().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(w, e, t)
    }
  }
  ;(exports.ShouldTurnOnCppOnboardingResponse = w),
    (w.runtime = r.proto3),
    (w.typeName = "aiserver.v1.ShouldTurnOnCppOnboardingResponse"),
    (w.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "should_turn_on_cpp_onboarding",
        kind: "scalar",
        T: 8,
      },
    ]))
  class S extends r.Message {
    constructor(e) {
      super(),
        (this.diffHistory = []),
        (this.contextItems = []),
        (this.diffHistoryKeys = []),
        (this.fileDiffHistories = []),
        (this.mergedDiffHistories = []),
        (this.blockDiffPatches = []),
        (this.parameterHints = []),
        (this.lspContexts = []),
        (this.additionalFiles = []),
        (this.filesyncUpdates = []),
        (this.timeSinceRequestStart = 0),
        (this.timeAtRequestSend = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new S().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new S().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new S().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(S, e, t)
    }
  }
  ;(exports.StreamCppRequest = S),
    (S.runtime = r.proto3),
    (S.typeName = "aiserver.v1.StreamCppRequest"),
    (S.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "current_file",
        kind: "message",
        T: s.CurrentFileInfo,
      },
      { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: !0 },
      { no: 3, name: "model_name", kind: "scalar", T: 9, opt: !0 },
      {
        no: 4,
        name: "linter_errors",
        kind: "message",
        T: s.LinterErrors,
        opt: !0,
      },
      {
        no: 13,
        name: "context_items",
        kind: "message",
        T: W,
        repeated: !0,
      },
      {
        no: 5,
        name: "diff_history_keys",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
      { no: 6, name: "give_debug_output", kind: "scalar", T: 8, opt: !0 },
      {
        no: 7,
        name: "file_diff_histories",
        kind: "message",
        T: j,
        repeated: !0,
      },
      {
        no: 8,
        name: "merged_diff_histories",
        kind: "message",
        T: j,
        repeated: !0,
      },
      {
        no: 9,
        name: "block_diff_patches",
        kind: "message",
        T: Ut,
        repeated: !0,
      },
      { no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: !0 },
      { no: 11, name: "is_debug", kind: "scalar", T: 8, opt: !0 },
      { no: 12, name: "immediately_ack", kind: "scalar", T: 8, opt: !0 },
      {
        no: 17,
        name: "enable_more_context",
        kind: "scalar",
        T: 8,
        opt: !0,
      },
      {
        no: 14,
        name: "parameter_hints",
        kind: "message",
        T: Z,
        repeated: !0,
      },
      {
        no: 15,
        name: "lsp_contexts",
        kind: "message",
        T: i.LspSubgraphFullContext,
        repeated: !0,
      },
      { no: 16, name: "cpp_intent_info", kind: "message", T: y, opt: !0 },
      { no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: !0 },
      {
        no: 19,
        name: "additional_files",
        kind: "message",
        T: q,
        repeated: !0,
      },
      {
        no: 20,
        name: "control_token",
        kind: "enum",
        T: r.proto3.getEnumType(c),
        opt: !0,
      },
      { no: 21, name: "client_time", kind: "scalar", T: 1, opt: !0 },
      {
        no: 22,
        name: "filesync_updates",
        kind: "message",
        T: o.FilesyncUpdateWithModelVersion,
        repeated: !0,
      },
      { no: 23, name: "time_since_request_start", kind: "scalar", T: 1 },
      { no: 24, name: "time_at_request_send", kind: "scalar", T: 1 },
      {
        no: 25,
        name: "client_timezone_offset",
        kind: "scalar",
        T: 1,
        opt: !0,
      },
      {
        no: 26,
        name: "lsp_suggested_items",
        kind: "message",
        T: B,
        opt: !0,
      },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.QUIET = 1)] = "QUIET"),
        (e[(e.LOUD = 2)] = "LOUD"),
        (e[(e.OP = 3)] = "OP")
    })(
      (c =
        exports.StreamCppRequest_ControlToken ||
        (exports.StreamCppRequest_ControlToken = {})),
    ),
    r.proto3.util.setEnumType(
      c,
      "aiserver.v1.StreamCppRequest.ControlToken",
      [
        { no: 0, name: "CONTROL_TOKEN_UNSPECIFIED" },
        { no: 1, name: "CONTROL_TOKEN_QUIET" },
        { no: 2, name: "CONTROL_TOKEN_LOUD" },
        { no: 3, name: "CONTROL_TOKEN_OP" },
      ],
    )
  class T extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new T().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new T().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new T().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(T, e, t)
    }
  }
  ;(exports.StreamCppResponse = T),
    (T.runtime = r.proto3),
    (T.typeName = "aiserver.v1.StreamCppResponse"),
    (T.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
      {
        no: 2,
        name: "suggestion_start_line",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      {
        no: 3,
        name: "suggestion_confidence",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      { no: 4, name: "done_stream", kind: "scalar", T: 8, opt: !0 },
      {
        no: 5,
        name: "debug_model_output",
        kind: "scalar",
        T: 9,
        opt: !0,
      },
      { no: 6, name: "debug_model_input", kind: "scalar", T: 9, opt: !0 },
      { no: 7, name: "debug_stream_time", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "debug_total_time", kind: "scalar", T: 9, opt: !0 },
      { no: 9, name: "debug_ttft_time", kind: "scalar", T: 9, opt: !0 },
      {
        no: 10,
        name: "debug_server_timing",
        kind: "scalar",
        T: 9,
        opt: !0,
      },
      {
        no: 11,
        name: "range_to_replace",
        kind: "message",
        T: s.LineRange,
        opt: !0,
      },
      {
        no: 12,
        name: "cursor_prediction_target",
        kind: "message",
        T: _,
        opt: !0,
      },
      { no: 13, name: "done_edit", kind: "scalar", T: 8, opt: !0 },
      { no: 14, name: "model_info", kind: "message", T: v, opt: !0 },
    ]))
  class _ extends r.Message {
    constructor(e) {
      super(),
        (this.relativePath = ""),
        (this.lineNumberOneIndexed = 0),
        (this.expectedContent = ""),
        (this.shouldRetriggerCpp = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new _().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(_, e, t)
    }
  }
  ;(exports.StreamCppResponse_CursorPredictionTarget = _),
    (_.runtime = r.proto3),
    (_.typeName = "aiserver.v1.StreamCppResponse.CursorPredictionTarget"),
    (_.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "relative_path", kind: "scalar", T: 9 },
      { no: 2, name: "line_number_one_indexed", kind: "scalar", T: 5 },
      { no: 3, name: "expected_content", kind: "scalar", T: 9 },
      { no: 4, name: "should_retrigger_cpp", kind: "scalar", T: 8 },
    ]))
  class v extends r.Message {
    constructor(e) {
      super(),
        (this.isFusedCursorPredictionModel = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new v().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new v().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new v().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(v, e, t)
    }
  }
  ;(exports.StreamCppResponse_ModelInfo = v),
    (v.runtime = r.proto3),
    (v.typeName = "aiserver.v1.StreamCppResponse.ModelInfo"),
    (v.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "is_fused_cursor_prediction_model",
        kind: "scalar",
        T: 8,
      },
    ]))
  class R extends r.Message {
    constructor(e) {
      super(), (this.model = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new R().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new R().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new R().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(R, e, t)
    }
  }
  ;(exports.CppConfigRequest = R),
    (R.runtime = r.proto3),
    (R.typeName = "aiserver.v1.CppConfigRequest"),
    (R.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "is_nightly", kind: "scalar", T: 8, opt: !0 },
      { no: 2, name: "model", kind: "scalar", T: 9 },
    ]))
  class Q extends r.Message {
    constructor(e) {
      super(),
        (this.heuristics = []),
        (this.excludeRecentlyViewedFilesPatterns = []),
        (this.enableRvfTracking = !1),
        (this.globalDebounceDurationMillis = 0),
        (this.clientDebounceDurationMillis = 0),
        (this.cppUrl = ""),
        (this.useWhitespaceDiffHistory = !1),
        (this.enableFilesyncDebounceSkipping = !1),
        (this.checkFilesyncHashPercent = 0),
        (this.geoCppBackendUrl = ""),
        (this.isFusedCursorPredictionModel = !1),
        (this.includeUnchangedLines = !1),
        (this.shouldFetchRvfText = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Q().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Q().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Q().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Q, e, t)
    }
  }
  ;(exports.CppConfigResponse = Q),
    (Q.runtime = r.proto3),
    (Q.typeName = "aiserver.v1.CppConfigResponse"),
    (Q.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "above_radius", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "below_radius", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "merge_behavior", kind: "message", T: N, opt: !0 },
      { no: 5, name: "is_on", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "is_ghost_text", kind: "scalar", T: 8, opt: !0 },
      {
        no: 7,
        name: "should_let_user_enable_cpp_even_if_not_pro",
        kind: "scalar",
        T: 8,
        opt: !0,
      },
      {
        no: 8,
        name: "heuristics",
        kind: "enum",
        T: r.proto3.getEnumType(A),
        repeated: !0,
      },
      {
        no: 9,
        name: "exclude_recently_viewed_files_patterns",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
      { no: 10, name: "enable_rvf_tracking", kind: "scalar", T: 8 },
      {
        no: 11,
        name: "global_debounce_duration_millis",
        kind: "scalar",
        T: 5,
      },
      {
        no: 12,
        name: "client_debounce_duration_millis",
        kind: "scalar",
        T: 5,
      },
      { no: 13, name: "cpp_url", kind: "scalar", T: 9 },
      {
        no: 14,
        name: "use_whitespace_diff_history",
        kind: "scalar",
        T: 8,
      },
      { no: 15, name: "import_prediction_config", kind: "message", T: b },
      {
        no: 16,
        name: "enable_filesync_debounce_skipping",
        kind: "scalar",
        T: 8,
      },
      {
        no: 17,
        name: "check_filesync_hash_percent",
        kind: "scalar",
        T: 2,
      },
      { no: 18, name: "geo_cpp_backend_url", kind: "scalar", T: 9 },
      {
        no: 19,
        name: "recently_rejected_edit_thresholds",
        kind: "message",
        T: F,
        opt: !0,
      },
      {
        no: 20,
        name: "is_fused_cursor_prediction_model",
        kind: "scalar",
        T: 8,
      },
      { no: 21, name: "include_unchanged_lines", kind: "scalar", T: 8 },
      { no: 22, name: "should_fetch_rvf_text", kind: "scalar", T: 8 },
      {
        no: 23,
        name: "max_number_of_cleared_suggestions_since_last_accept",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      {
        no: 24,
        name: "suggestion_hint_config",
        kind: "message",
        T: D,
        opt: !0,
      },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.LOTS_OF_ADDED_TEXT = 1)] = "LOTS_OF_ADDED_TEXT"),
        (e[(e.DUPLICATING_LINE_AFTER_SUGGESTION = 2)] =
          "DUPLICATING_LINE_AFTER_SUGGESTION"),
        (e[(e.DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION = 3)] =
          "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"),
        (e[(e.REVERTING_USER_CHANGE = 4)] = "REVERTING_USER_CHANGE"),
        (e[(e.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED = 5)] =
          "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"),
        (e[(e.SUGGESTING_RECENTLY_REJECTED_EDIT = 6)] =
          "SUGGESTING_RECENTLY_REJECTED_EDIT")
    })(
      (A =
        exports.CppConfigResponse_Heuristic ||
        (exports.CppConfigResponse_Heuristic = {})),
    ),
    r.proto3.util.setEnumType(
      A,
      "aiserver.v1.CppConfigResponse.Heuristic",
      [
        { no: 0, name: "HEURISTIC_UNSPECIFIED" },
        { no: 1, name: "HEURISTIC_LOTS_OF_ADDED_TEXT" },
        { no: 2, name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION" },
        {
          no: 3,
          name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION",
        },
        { no: 4, name: "HEURISTIC_REVERTING_USER_CHANGE" },
        {
          no: 5,
          name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED",
        },
        { no: 6, name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT" },
      ],
    )
  class b extends r.Message {
    constructor(e) {
      super(),
        (this.isDisabledByBackend = !1),
        (this.shouldTurnOnAutomatically = !1),
        (this.pythonEnabled = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new b().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new b().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new b().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(b, e, t)
    }
  }
  ;(exports.CppConfigResponse_ImportPredictionConfig = b),
    (b.runtime = r.proto3),
    (b.typeName = "aiserver.v1.CppConfigResponse.ImportPredictionConfig"),
    (b.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "is_disabled_by_backend", kind: "scalar", T: 8 },
      {
        no: 2,
        name: "should_turn_on_automatically",
        kind: "scalar",
        T: 8,
      },
      { no: 3, name: "python_enabled", kind: "scalar", T: 8 },
    ]))
  class N extends r.Message {
    constructor(e) {
      super(), (this.type = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new N().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new N().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new N().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(N, e, t)
    }
  }
  ;(exports.CppConfigResponse_MergeBehavior = N),
    (N.runtime = r.proto3),
    (N.typeName = "aiserver.v1.CppConfigResponse.MergeBehavior"),
    (N.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "type", kind: "scalar", T: 9 },
      { no: 2, name: "limit", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "radius", kind: "scalar", T: 5, opt: !0 },
    ]))
  class F extends r.Message {
    constructor(e) {
      super(),
        (this.hardRejectThreshold = 0),
        (this.softRejectThreshold = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new F().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new F().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new F().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(F, e, t)
    }
  }
  ;(exports.CppConfigResponse_RecentlyRejectedEditThresholds = F),
    (F.runtime = r.proto3),
    (F.typeName =
      "aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds"),
    (F.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "hard_reject_threshold", kind: "scalar", T: 5 },
      { no: 2, name: "soft_reject_threshold", kind: "scalar", T: 5 },
    ]))
  class D extends r.Message {
    constructor(e) {
      super(),
        (this.importantLspExtensions = []),
        (this.enabledForPathExtensions = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new D().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new D().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new D().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(D, e, t)
    }
  }
  ;(exports.CppConfigResponse_SuggestionHintConfig = D),
    (D.runtime = r.proto3),
    (D.typeName = "aiserver.v1.CppConfigResponse.SuggestionHintConfig"),
    (D.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "important_lsp_extensions",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
      {
        no: 2,
        name: "enabled_for_path_extensions",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
    ]))
  class J extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new J().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new J().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new J().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(J, e, t)
    }
  }
  ;(exports.SuggestedEdit = J),
    (J.runtime = r.proto3),
    (J.typeName = "aiserver.v1.SuggestedEdit"),
    (J.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "edit_range", kind: "message", T: s.SimpleRange },
      { no: 2, name: "text", kind: "scalar", T: 9 },
    ]))
  class L extends r.Message {
    constructor(e) {
      super(),
        (this.suggestedEdits = []),
        (this.markerTouchesGreen = !1),
        (this.currentFileContentsForLinterErrors = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new L().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new L().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new L().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(L, e, t)
    }
  }
  ;(exports.GetCppEditClassificationRequest = L),
    (L.runtime = r.proto3),
    (L.typeName = "aiserver.v1.GetCppEditClassificationRequest"),
    (L.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_request", kind: "message", T: S },
      {
        no: 25,
        name: "suggested_edits",
        kind: "message",
        T: J,
        repeated: !0,
      },
      { no: 26, name: "marker_touches_green", kind: "scalar", T: 8 },
      {
        no: 27,
        name: "current_file_contents_for_linter_errors",
        kind: "scalar",
        T: 9,
      },
    ]))
  class x extends r.Message {
    constructor(e) {
      super(), (this.scoredEdits = []), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new x().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new x().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new x().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(x, e, t)
    }
  }
  ;(exports.GetCppEditClassificationResponse = x),
    (x.runtime = r.proto3),
    (x.typeName = "aiserver.v1.GetCppEditClassificationResponse"),
    (x.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "scored_edits",
        kind: "message",
        T: M,
        repeated: !0,
      },
      { no: 2, name: "noop_edit", kind: "message", T: M },
      { no: 3, name: "should_noop", kind: "scalar", T: 8, opt: !0 },
      { no: 4, name: "generation_edit", kind: "message", T: M },
    ]))
  class P extends r.Message {
    constructor(e) {
      super(),
        (this.tokens = []),
        (this.tokenLogprobs = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new P().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new P().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new P().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(P, e, t)
    }
  }
  ;(exports.GetCppEditClassificationResponse_LogProbs = P),
    (P.runtime = r.proto3),
    (P.typeName =
      "aiserver.v1.GetCppEditClassificationResponse.LogProbs"),
    (P.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "tokens", kind: "scalar", T: 9, repeated: !0 },
      {
        no: 2,
        name: "token_logprobs",
        kind: "scalar",
        T: 1,
        repeated: !0,
      },
    ]))
  class M extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new M().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new M().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new M().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(M, e, t)
    }
  }
  ;(exports.GetCppEditClassificationResponse_ScoredEdit = M),
    (M.runtime = r.proto3),
    (M.typeName =
      "aiserver.v1.GetCppEditClassificationResponse.ScoredEdit"),
    (M.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "edit", kind: "message", T: J },
      { no: 2, name: "log_probs", kind: "message", T: P },
    ]))
  class q extends r.Message {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.isOpen = !1),
        (this.visibleRangeContent = []),
        (this.startLineNumberOneIndexed = []),
        (this.visibleRanges = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new q().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new q().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new q().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(q, e, t)
    }
  }
  ;(exports.AdditionalFile = q),
    (q.runtime = r.proto3),
    (q.typeName = "aiserver.v1.AdditionalFile"),
    (q.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
      { no: 2, name: "is_open", kind: "scalar", T: 8 },
      {
        no: 3,
        name: "visible_range_content",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
      { no: 4, name: "last_viewed_at", kind: "scalar", T: 1, opt: !0 },
      {
        no: 5,
        name: "start_line_number_one_indexed",
        kind: "scalar",
        T: 5,
        repeated: !0,
      },
      {
        no: 6,
        name: "visible_ranges",
        kind: "message",
        T: s.LineRange,
        repeated: !0,
      },
    ]))
  class U extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.performanceNowTime = 0),
        (this.fate = l.UNSPECIFIED),
        (this.extension = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new U().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new U().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new U().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(U, e, t)
    }
  }
  ;(exports.RecordCppFateRequest = U),
    (U.runtime = r.proto3),
    (U.typeName = "aiserver.v1.RecordCppFateRequest"),
    (U.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      { no: 2, name: "performance_now_time", kind: "scalar", T: 2 },
      { no: 3, name: "fate", kind: "enum", T: r.proto3.getEnumType(l) },
      { no: 4, name: "extension", kind: "scalar", T: 9 },
    ]))
  class O extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new O().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new O().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new O().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(O, e, t)
    }
  }
  ;(exports.RecordCppFateResponse = O),
    (O.runtime = r.proto3),
    (O.typeName = "aiserver.v1.RecordCppFateResponse"),
    (O.fields = r.proto3.util.newFieldList(() => []))
  class G extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new G().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new G().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new G().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(G, e, t)
    }
  }
  ;(exports.AvailableCppModelsRequest = G),
    (G.runtime = r.proto3),
    (G.typeName = "aiserver.v1.AvailableCppModelsRequest"),
    (G.fields = r.proto3.util.newFieldList(() => []))
  class H extends r.Message {
    constructor(e) {
      super(), (this.models = []), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new H().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new H().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new H().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(H, e, t)
    }
  }
  ;(exports.AvailableCppModelsResponse = H),
    (H.runtime = r.proto3),
    (H.typeName = "aiserver.v1.AvailableCppModelsResponse"),
    (H.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "models", kind: "scalar", T: 9, repeated: !0 },
      { no: 2, name: "default_model", kind: "scalar", T: 9, opt: !0 },
    ]))
  class Y extends r.Message {
    constructor(e) {
      super(),
        (this.contextItems = []),
        (this.fileDiffHistories = []),
        (this.mergedDiffHistories = []),
        (this.blockDiffPatches = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Y().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Y().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Y().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Y, e, t)
    }
  }
  ;(exports.StreamHoldCppRequest = Y),
    (Y.runtime = r.proto3),
    (Y.typeName = "aiserver.v1.StreamHoldCppRequest"),
    (Y.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "current_file",
        kind: "message",
        T: s.CurrentFileInfo,
      },
      {
        no: 4,
        name: "linter_errors",
        kind: "message",
        T: s.LinterErrors,
        opt: !0,
      },
      {
        no: 13,
        name: "context_items",
        kind: "message",
        T: W,
        repeated: !0,
      },
      {
        no: 7,
        name: "file_diff_histories",
        kind: "message",
        T: j,
        repeated: !0,
      },
      {
        no: 8,
        name: "merged_diff_histories",
        kind: "message",
        T: j,
        repeated: !0,
      },
      {
        no: 9,
        name: "block_diff_patches",
        kind: "message",
        T: Ut,
        repeated: !0,
      },
      {
        no: 10,
        name: "model_details",
        kind: "message",
        T: s.ModelDetails,
      },
    ]))
  class V extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new V().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new V().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new V().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(V, e, t)
    }
  }
  ;(exports.StreamHoldCppResponse = V),
    (V.runtime = r.proto3),
    (V.typeName = "aiserver.v1.StreamHoldCppResponse"),
    (V.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
    ]))
  class j extends r.Message {
    constructor(e) {
      super(),
        (this.fileName = ""),
        (this.diffHistory = []),
        (this.diffHistoryTimestamps = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new j().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new j().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new j().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(j, e, t)
    }
  }
  ;(exports.CppFileDiffHistory = j),
    (j.runtime = r.proto3),
    (j.typeName = "aiserver.v1.CppFileDiffHistory"),
    (j.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "file_name", kind: "scalar", T: 9 },
      { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: !0 },
      {
        no: 3,
        name: "diff_history_timestamps",
        kind: "scalar",
        T: 1,
        repeated: !0,
      },
    ]))
  class W extends r.Message {
    constructor(e) {
      super(),
        (this.contents = ""),
        (this.relativeWorkspacePath = ""),
        (this.score = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new W().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new W().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new W().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(W, e, t)
    }
  }
  ;(exports.CppContextItem = W),
    (W.runtime = r.proto3),
    (W.typeName = "aiserver.v1.CppContextItem"),
    (W.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "contents", kind: "scalar", T: 9 },
      { no: 2, name: "symbol", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
      { no: 4, name: "score", kind: "scalar", T: 2 },
    ]))
  class z extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.sessionId = ""),
        (this.responseType = m.UNSPECIFIED),
        (this.modelCodeName = ""),
        (this.modelOpenaiName = ""),
        (this.currentPerformanceNowTime = 0),
        (this.sessionPerformanceOriginTime = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new z().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new z().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new z().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(z, e, t)
    }
  }
  ;(exports.MarkCppRequest = z),
    (z.runtime = r.proto3),
    (z.typeName = "aiserver.v1.MarkCppRequest"),
    (z.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      { no: 2, name: "session_id", kind: "scalar", T: 9 },
      {
        no: 3,
        name: "response_type",
        kind: "enum",
        T: r.proto3.getEnumType(m),
      },
      {
        no: 4,
        name: "desired_completion",
        kind: "scalar",
        T: 9,
        opt: !0,
      },
      { no: 5, name: "range_transformation", kind: "message", T: K },
      { no: 10, name: "model_code_name", kind: "scalar", T: 9 },
      { no: 11, name: "model_openai_name", kind: "scalar", T: 9 },
      {
        no: 12,
        name: "current_performance_now_time",
        kind: "scalar",
        T: 1,
      },
      {
        no: 13,
        name: "session_performance_origin_time",
        kind: "scalar",
        T: 1,
      },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.GOOD = 1)] = "GOOD"),
        (e[(e.BAD = 2)] = "BAD"),
        (e[(e.BAD_CONTEXT = 3)] = "BAD_CONTEXT"),
        (e[(e.BAD_REASONING = 4)] = "BAD_REASONING"),
        (e[(e.BAD_STUPID_MISTAKE = 5)] = "BAD_STUPID_MISTAKE"),
        (e[(e.BAD_FORMATTING = 6)] = "BAD_FORMATTING"),
        (e[(e.BAD_RANGE = 7)] = "BAD_RANGE"),
        (e[(e.GOOD_PREDICTION = 8)] = "GOOD_PREDICTION"),
        (e[(e.BAD_FALSE_POSITIVE_TRIGGER = 9)] =
          "BAD_FALSE_POSITIVE_TRIGGER"),
        (e[(e.BAD_FALSE_NEGATIVE_TRIGGER = 10)] =
          "BAD_FALSE_NEGATIVE_TRIGGER")
    })(
      (m =
        exports.MarkCppRequest_CppResponseTypes ||
        (exports.MarkCppRequest_CppResponseTypes = {})),
    ),
    r.proto3.util.setEnumType(
      m,
      "aiserver.v1.MarkCppRequest.CppResponseTypes",
      [
        { no: 0, name: "CPP_RESPONSE_TYPES_UNSPECIFIED" },
        { no: 1, name: "CPP_RESPONSE_TYPES_GOOD" },
        { no: 2, name: "CPP_RESPONSE_TYPES_BAD" },
        { no: 3, name: "CPP_RESPONSE_TYPES_BAD_CONTEXT" },
        { no: 4, name: "CPP_RESPONSE_TYPES_BAD_REASONING" },
        { no: 5, name: "CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE" },
        { no: 6, name: "CPP_RESPONSE_TYPES_BAD_FORMATTING" },
        { no: 7, name: "CPP_RESPONSE_TYPES_BAD_RANGE" },
        { no: 8, name: "CPP_RESPONSE_TYPES_GOOD_PREDICTION" },
        { no: 9, name: "CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER" },
        { no: 10, name: "CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER" },
      ],
    )
  class K extends r.Message {
    constructor(e) {
      super(),
        (this.startLineNumber = 0),
        (this.endLineNumber = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new K().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new K().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new K().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(K, e, t)
    }
  }
  ;(exports.MarkCppRequest_RangeTransformation = K),
    (K.runtime = r.proto3),
    (K.typeName = "aiserver.v1.MarkCppRequest.RangeTransformation"),
    (K.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "start_line_number", kind: "scalar", T: 5 },
      { no: 2, name: "end_line_number", kind: "scalar", T: 5 },
    ]))
  class Z extends r.Message {
    constructor(e) {
      super(), (this.label = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Z().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Z().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Z().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Z, e, t)
    }
  }
  ;(exports.CppParameterHint = Z),
    (Z.runtime = r.proto3),
    (Z.typeName = "aiserver.v1.CppParameterHint"),
    (Z.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "label", kind: "scalar", T: 9 },
      { no: 2, name: "documentation", kind: "scalar", T: 9, opt: !0 },
    ]))
  class X extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new X().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new X().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new X().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(X, e, t)
    }
  }
  ;(exports.MarkCppResponse = X),
    (X.runtime = r.proto3),
    (X.typeName = "aiserver.v1.MarkCppResponse"),
    (X.fields = r.proto3.util.newFieldList(() => []))
  class $ extends r.Message {
    constructor(e) {
      super(),
        (this.startLineNumber = 0),
        (this.startColumn = 0),
        (this.endLineNumber = 0),
        (this.endColumn = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new $().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals($, e, t)
    }
  }
  ;(exports.IRange = $),
    ($.runtime = r.proto3),
    ($.typeName = "aiserver.v1.IRange"),
    ($.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "start_line_number", kind: "scalar", T: 5 },
      { no: 2, name: "start_column", kind: "scalar", T: 5 },
      { no: 3, name: "end_line_number", kind: "scalar", T: 5 },
      { no: 4, name: "end_column", kind: "scalar", T: 5 },
    ]))
  class ee extends r.Message {
    constructor(e) {
      super(),
        (this.lineNumberOneIndexed = 0),
        (this.columnOneIndexed = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ee().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ee().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ee().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ee, e, t)
    }
  }
  ;(exports.OneIndexedPosition = ee),
    (ee.runtime = r.proto3),
    (ee.typeName = "aiserver.v1.OneIndexedPosition"),
    (ee.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 },
      { no: 2, name: "column_one_indexed", kind: "scalar", T: 5 },
    ]))
  class te extends r.Message {
    constructor(e) {
      super(),
        (this.selectionStartLineNumber = 0),
        (this.selectionStartColumn = 0),
        (this.positionLineNumber = 0),
        (this.positionColumn = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new te().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new te().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new te().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(te, e, t)
    }
  }
  ;(exports.CursorSelection = te),
    (te.runtime = r.proto3),
    (te.typeName = "aiserver.v1.CursorSelection"),
    (te.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "selection_start_line_number",
        kind: "scalar",
        T: 5,
      },
      { no: 2, name: "selection_start_column", kind: "scalar", T: 5 },
      { no: 3, name: "position_line_number", kind: "scalar", T: 5 },
      { no: 4, name: "position_column", kind: "scalar", T: 5 },
    ]))
  class ne extends r.Message {
    constructor(e) {
      super(),
        (this.text = ""),
        (this.modelIsAttachedToEditor = !1),
        (this.modelIsAttachedToTheActiveEditor = !1),
        (this.cursorSelections = []),
        (this.modelVersionAtMetadataRetrievalTime = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ne().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ne().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ne().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ne, e, t)
    }
  }
  ;(exports.ModelChange = ne),
    (ne.runtime = r.proto3),
    (ne.typeName = "aiserver.v1.ModelChange"),
    (ne.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
      { no: 2, name: "range", kind: "message", T: $ },
      { no: 3, name: "final_model_hash", kind: "scalar", T: 9, opt: !0 },
      {
        no: 4,
        name: "model_version_immediately_after_this_change",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      {
        no: 5,
        name: "performance_now_timestamp",
        kind: "scalar",
        T: 1,
        opt: !0,
      },
      { no: 7, name: "is_undoing", kind: "scalar", T: 8, opt: !0 },
      { no: 8, name: "is_redoing", kind: "scalar", T: 8, opt: !0 },
      {
        no: 9,
        name: "model_is_attached_to_editor",
        kind: "scalar",
        T: 8,
      },
      {
        no: 10,
        name: "model_is_attached_to_the_active_editor",
        kind: "scalar",
        T: 8,
      },
      {
        no: 11,
        name: "cursor_selections",
        kind: "message",
        T: te,
        repeated: !0,
      },
      {
        no: 12,
        name: "model_version_at_metadata_retrieval_time",
        kind: "scalar",
        T: 5,
      },
    ]))
  class re extends r.Message {
    constructor(e) {
      super(),
        (this.suggestionId = 0),
        (this.suggestionText = ""),
        (this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0),
        (this.originalText = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new re().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new re().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new re().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(re, e, t)
    }
  }
  ;(exports.CurrentlyShownCppSuggestion = re),
    (re.runtime = r.proto3),
    (re.typeName = "aiserver.v1.CurrentlyShownCppSuggestion"),
    (re.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "suggestion_id", kind: "scalar", T: 5 },
      { no: 2, name: "suggestion_text", kind: "scalar", T: 9 },
      {
        no: 3,
        name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
        kind: "scalar",
        T: 5,
      },
      {
        no: 4,
        name: "range_of_suggestion_in_current_model",
        kind: "message",
        T: $,
        opt: !0,
      },
      { no: 5, name: "original_text", kind: "scalar", T: 9 },
    ]))
  class se extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new se().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new se().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new se().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(se, e, t)
    }
  }
  ;(exports.CppAcceptEventNew = se),
    (se.runtime = r.proto3),
    (se.typeName = "aiserver.v1.CppAcceptEventNew"),
    (se.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: re },
      { no: 7, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class ie extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.suggestionText = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ie().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ie().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ie().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ie, e, t)
    }
  }
  ;(exports.RecoverableCppData = ie),
    (ie.runtime = r.proto3),
    (ie.typeName = "aiserver.v1.RecoverableCppData"),
    (ie.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      { no: 2, name: "suggestion_text", kind: "scalar", T: 9 },
      { no: 3, name: "suggestion_range", kind: "message", T: $ },
      { no: 4, name: "position", kind: "message", T: ee },
    ]))
  class oe extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new oe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new oe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new oe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(oe, e, t)
    }
  }
  ;(exports.CppSuggestEvent = oe),
    (oe.runtime = r.proto3),
    (oe.typeName = "aiserver.v1.CppSuggestEvent"),
    (oe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: re },
      { no: 2, name: "point_in_time_model", kind: "message", T: fe },
      { no: 3, name: "recoverable_cpp_data", kind: "message", T: ie },
    ]))
  class ae extends r.Message {
    constructor(e) {
      super(),
        (this.generationUuid = ""),
        (this.modelVersion = 0),
        (this.source = u.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ae().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ae().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ae().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ae, e, t)
    }
  }
  ;(exports.CppTriggerEvent = ae),
    (ae.runtime = r.proto3),
    (ae.typeName = "aiserver.v1.CppTriggerEvent"),
    (ae.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "generation_uuid", kind: "scalar", T: 9 },
      { no: 2, name: "model_version", kind: "scalar", T: 5 },
      { no: 3, name: "cursor_position", kind: "message", T: ee },
      { no: 4, name: "point_in_time_model", kind: "message", T: fe },
      { no: 5, name: "source", kind: "enum", T: r.proto3.getEnumType(u) },
    ]))
  class le extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new le().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new le().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new le().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(le, e, t)
    }
  }
  ;(exports.FinishedCppGenerationEvent = le),
    (le.runtime = r.proto3),
    (le.typeName = "aiserver.v1.FinishedCppGenerationEvent"),
    (le.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      { no: 2, name: "recoverable_cpp_data", kind: "message", T: ie },
    ]))
  class ue extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ue().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ue().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ue().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ue, e, t)
    }
  }
  ;(exports.CppRejectEventNew = ue),
    (ue.runtime = r.proto3),
    (ue.typeName = "aiserver.v1.CppRejectEventNew"),
    (ue.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: re },
      { no: 7, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class ce extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ce().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ce().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ce().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ce, e, t)
    }
  }
  ;(exports.Edit = ce),
    (ce.runtime = r.proto3),
    (ce.typeName = "aiserver.v1.Edit"),
    (ce.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
      { no: 2, name: "range", kind: "message", T: $ },
    ]))
  class Ae extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ae().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ae().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ae().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ae, e, t)
    }
  }
  ;(exports.CppPartialAcceptEvent = Ae),
    (Ae.runtime = r.proto3),
    (Ae.typeName = "aiserver.v1.CppPartialAcceptEvent"),
    (Ae.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: re },
      { no: 2, name: "edit", kind: "message", T: ce },
      { no: 3, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class me extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.predictionId = 0),
        (this.lineNumber = 0),
        (this.source = d.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new me().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new me().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new me().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(me, e, t)
    }
  }
  ;(exports.CursorPrediction = me),
    (me.runtime = r.proto3),
    (me.typeName = "aiserver.v1.CursorPrediction"),
    (me.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      { no: 2, name: "prediction_id", kind: "scalar", T: 5 },
      { no: 3, name: "line_number", kind: "scalar", T: 5 },
      { no: 4, name: "source", kind: "enum", T: r.proto3.getEnumType(d) },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.ALWAYS_ON = 1)] = "ALWAYS_ON"),
        (e[(e.ACCEPT = 2)] = "ACCEPT"),
        (e[(e.UNDO = 3)] = "UNDO"),
        (e[(e.EDITOR_CHANGE = 4)] = "EDITOR_CHANGE")
    })(
      (d =
        exports.CursorPrediction_CursorPredictionSource ||
        (exports.CursorPrediction_CursorPredictionSource = {})),
    ),
    r.proto3.util.setEnumType(
      d,
      "aiserver.v1.CursorPrediction.CursorPredictionSource",
      [
        { no: 0, name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED" },
        { no: 1, name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON" },
        { no: 2, name: "CURSOR_PREDICTION_SOURCE_ACCEPT" },
        { no: 3, name: "CURSOR_PREDICTION_SOURCE_UNDO" },
        { no: 4, name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE" },
      ],
    )
  class de extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new de().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new de().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new de().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(de, e, t)
    }
  }
  ;(exports.SuggestCursorPredictionEvent = de),
    (de.runtime = r.proto3),
    (de.typeName = "aiserver.v1.SuggestCursorPredictionEvent"),
    (de.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cursor_prediction", kind: "message", T: me },
      { no: 2, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class pe extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new pe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new pe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new pe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(pe, e, t)
    }
  }
  ;(exports.AcceptCursorPredictionEvent = pe),
    (pe.runtime = r.proto3),
    (pe.typeName = "aiserver.v1.AcceptCursorPredictionEvent"),
    (pe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cursor_prediction", kind: "message", T: me },
      { no: 2, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class ge extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ge().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ge().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ge().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ge, e, t)
    }
  }
  ;(exports.RejectCursorPredictionEvent = ge),
    (ge.runtime = r.proto3),
    (ge.typeName = "aiserver.v1.RejectCursorPredictionEvent"),
    (ge.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cursor_prediction", kind: "message", T: me },
      { no: 2, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class he extends r.Message {
    constructor(e) {
      super(),
        (this.modelVersion = 0),
        (this.relativePath = ""),
        (this.modelId = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new he().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new he().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new he().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(he, e, t)
    }
  }
  ;(exports.MaybeDefinedPointInTimeModel = he),
    (he.runtime = r.proto3),
    (he.typeName = "aiserver.v1.MaybeDefinedPointInTimeModel"),
    (he.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "model_uuid", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "model_version", kind: "scalar", T: 5 },
      { no: 3, name: "relative_path", kind: "scalar", T: 9 },
      { no: 4, name: "model_id", kind: "scalar", T: 9 },
    ]))
  class fe extends r.Message {
    constructor(e) {
      super(),
        (this.modelUuid = ""),
        (this.modelVersion = 0),
        (this.relativePath = ""),
        (this.modelId = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new fe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new fe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new fe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(fe, e, t)
    }
  }
  ;(exports.PointInTimeModel = fe),
    (fe.runtime = r.proto3),
    (fe.typeName = "aiserver.v1.PointInTimeModel"),
    (fe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 2, name: "model_version", kind: "scalar", T: 5 },
      { no: 3, name: "relative_path", kind: "scalar", T: 9 },
      { no: 4, name: "model_id", kind: "scalar", T: 9 },
    ]))
  class Ee extends r.Message {
    constructor(e) {
      super(),
        (this.lineNumberOneIndexed = 0),
        (this.columnNumberOneIndexed = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ee().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ee().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ee().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ee, e, t)
    }
  }
  ;(exports.CppManualTriggerEventNew = Ee),
    (Ee.runtime = r.proto3),
    (Ee.typeName = "aiserver.v1.CppManualTriggerEventNew"),
    (Ee.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 },
      { no: 2, name: "column_number_one_indexed", kind: "scalar", T: 5 },
      { no: 7, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class Ce extends r.Message {
    constructor(e) {
      super(),
        (this.modelUuid = ""),
        (this.relativePath = ""),
        (this.reason = p.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ce().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ce().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ce().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ce, e, t)
    }
  }
  ;(exports.CppStoppedTrackingModelEvent = Ce),
    (Ce.runtime = r.proto3),
    (Ce.typeName = "aiserver.v1.CppStoppedTrackingModelEvent"),
    (Ce.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 2, name: "relative_path", kind: "scalar", T: 9 },
      { no: 3, name: "reason", kind: "enum", T: r.proto3.getEnumType(p) },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.FILE_TOO_BIG = 1)] = "FILE_TOO_BIG"),
        (e[(e.FILE_DISPOSED = 2)] = "FILE_DISPOSED"),
        (e[(e.CHANGE_TOO_BIG = 3)] = "CHANGE_TOO_BIG")
    })(
      (p =
        exports.CppStoppedTrackingModelEvent_StoppedTrackingModelReason ||
        (exports.CppStoppedTrackingModelEvent_StoppedTrackingModelReason = {})),
    ),
    r.proto3.util.setEnumType(
      p,
      "aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason",
      [
        { no: 0, name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED" },
        { no: 1, name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG" },
        { no: 2, name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED" },
        { no: 3, name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG" },
      ],
    )
  class ye extends r.Message {
    constructor(e) {
      super(),
        (this.addedErrors = []),
        (this.removedErrors = []),
        (this.errors = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ye().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ye().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ye().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ye, e, t)
    }
  }
  ;(exports.CppLinterErrorEvent = ye),
    (ye.runtime = r.proto3),
    (ye.typeName = "aiserver.v1.CppLinterErrorEvent"),
    (ye.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      {
        no: 2,
        name: "added_errors",
        kind: "message",
        T: s.LinterError,
        repeated: !0,
      },
      {
        no: 3,
        name: "removed_errors",
        kind: "message",
        T: s.LinterError,
        repeated: !0,
      },
      {
        no: 4,
        name: "errors",
        kind: "message",
        T: s.LinterError,
        repeated: !0,
      },
    ]))
  class Ie extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ie().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ie().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ie().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ie, e, t)
    }
  }
  ;(exports.CppDebouncedCursorMovementEvent = Ie),
    (Ie.runtime = r.proto3),
    (Ie.typeName = "aiserver.v1.CppDebouncedCursorMovementEvent"),
    (Ie.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      { no: 2, name: "cursor_position", kind: "message", T: ee },
    ]))
  class Be extends r.Message {
    constructor(e) {
      super(),
        (this.visibleRanges = []),
        (this.editorId = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Be().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Be().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Be().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Be, e, t)
    }
  }
  ;(exports.CppEditorChangedEvent = Be),
    (Be.runtime = r.proto3),
    (Be.typeName = "aiserver.v1.CppEditorChangedEvent"),
    (Be.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      { no: 2, name: "cursor_position", kind: "message", T: ee },
      {
        no: 3,
        name: "visible_ranges",
        kind: "message",
        T: $,
        repeated: !0,
      },
      { no: 4, name: "editor_id", kind: "scalar", T: 9 },
    ]))
  class ke extends r.Message {
    constructor(e) {
      super(),
        (this.clipboardContents = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ke().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ke().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ke().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ke, e, t)
    }
  }
  ;(exports.CppCopyEvent = ke),
    (ke.runtime = r.proto3),
    (ke.typeName = "aiserver.v1.CppCopyEvent"),
    (ke.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "clipboard_contents", kind: "scalar", T: 9 },
    ]))
  class we extends r.Message {
    constructor(e) {
      super(),
        (this.title = ""),
        (this.id = ""),
        (this.arguments = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new we().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new we().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new we().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(we, e, t)
    }
  }
  ;(exports.CppQuickActionCommand = we),
    (we.runtime = r.proto3),
    (we.typeName = "aiserver.v1.CppQuickActionCommand"),
    (we.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "title", kind: "scalar", T: 9 },
      { no: 2, name: "id", kind: "scalar", T: 9 },
      { no: 3, name: "arguments", kind: "scalar", T: 9, repeated: !0 },
    ]))
  class Se extends r.Message {
    constructor(e) {
      super(),
        (this.title = ""),
        (this.edits = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Se().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Se().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Se().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Se, e, t)
    }
  }
  ;(exports.CppQuickAction = Se),
    (Se.runtime = r.proto3),
    (Se.typeName = "aiserver.v1.CppQuickAction"),
    (Se.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "title", kind: "scalar", T: 9 },
      { no: 2, name: "edits", kind: "message", T: Te, repeated: !0 },
      { no: 3, name: "is_preferred", kind: "scalar", T: 8, opt: !0 },
      { no: 4, name: "command", kind: "message", T: we },
    ]))
  class Te extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Te().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Te().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Te().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Te, e, t)
    }
  }
  ;(exports.CppQuickAction_Edit = Te),
    (Te.runtime = r.proto3),
    (Te.typeName = "aiserver.v1.CppQuickAction.Edit"),
    (Te.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
      { no: 2, name: "range", kind: "message", T: $ },
    ]))
  class _e extends r.Message {
    constructor(e) {
      super(),
        (this.added = []),
        (this.removed = []),
        (this.actions = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new _e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(_e, e, t)
    }
  }
  ;(exports.CppChangeQuickActionEvent = _e),
    (_e.runtime = r.proto3),
    (_e.typeName = "aiserver.v1.CppChangeQuickActionEvent"),
    (_e.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      { no: 2, name: "added", kind: "message", T: Se, repeated: !0 },
      { no: 3, name: "removed", kind: "message", T: Se, repeated: !0 },
      { no: 4, name: "actions", kind: "message", T: Se, repeated: !0 },
    ]))
  class ve extends r.Message {
    constructor(e) {
      super(),
        (this.actionIdentifier = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ve().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ve().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ve().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ve, e, t)
    }
  }
  ;(exports.CppQuickActionFireEvent = ve),
    (ve.runtime = r.proto3),
    (ve.typeName = "aiserver.v1.CppQuickActionFireEvent"),
    (ve.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      {
        no: 2,
        name: "quick_action_command",
        kind: "message",
        T: we,
        oneof: "action_identifier",
      },
      {
        no: 3,
        name: "quick_action_event",
        kind: "message",
        T: Se,
        oneof: "action_identifier",
      },
    ]))
  class Re extends r.Message {
    constructor(e) {
      super(),
        (this.terminalId = 0),
        (this.terminalPath = ""),
        (this.event = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Re().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Re().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Re().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Re, e, t)
    }
  }
  ;(exports.CppTerminalEvent = Re),
    (Re.runtime = r.proto3),
    (Re.typeName = "aiserver.v1.CppTerminalEvent"),
    (Re.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "terminal_id", kind: "scalar", T: 5 },
      { no: 2, name: "terminal_path", kind: "scalar", T: 9 },
      { no: 6, name: "terminal_cwd", kind: "scalar", T: 9, opt: !0 },
      {
        no: 3,
        name: "terminal_input",
        kind: "message",
        T: Qe,
        oneof: "event",
      },
      {
        no: 4,
        name: "command_started",
        kind: "message",
        T: be,
        oneof: "event",
      },
      {
        no: 5,
        name: "command_finished",
        kind: "message",
        T: Ne,
        oneof: "event",
      },
    ]))
  class Qe extends r.Message {
    constructor(e) {
      super(),
        (this.bufferedKeypresses = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Qe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Qe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Qe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Qe, e, t)
    }
  }
  ;(exports.CppTerminalEvent_TerminalInput = Qe),
    (Qe.runtime = r.proto3),
    (Qe.typeName = "aiserver.v1.CppTerminalEvent.TerminalInput"),
    (Qe.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "buffered_keypresses",
        kind: "scalar",
        T: 9,
        repeated: !0,
      },
    ]))
  class be extends r.Message {
    constructor(e) {
      super(),
        (this.command = ""),
        (this.startedTimestampUnixMs = 0),
        (this.commandWasTrimmed = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new be().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new be().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new be().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(be, e, t)
    }
  }
  ;(exports.CppTerminalEvent_CommandStarted = be),
    (be.runtime = r.proto3),
    (be.typeName = "aiserver.v1.CppTerminalEvent.CommandStarted"),
    (be.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "command", kind: "scalar", T: 9 },
      { no: 2, name: "started_timestamp_unix_ms", kind: "scalar", T: 1 },
      { no: 3, name: "command_was_trimmed", kind: "scalar", T: 8 },
    ]))
  class Ne extends r.Message {
    constructor(e) {
      super(),
        (this.command = ""),
        (this.output = ""),
        (this.finishedTimestampUnixMs = 0),
        (this.commandWasTrimmed = !1),
        (this.outputWasTrimmed = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ne().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ne().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ne().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ne, e, t)
    }
  }
  ;(exports.CppTerminalEvent_CommandFinished = Ne),
    (Ne.runtime = r.proto3),
    (Ne.typeName = "aiserver.v1.CppTerminalEvent.CommandFinished"),
    (Ne.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "command", kind: "scalar", T: 9 },
      { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "output", kind: "scalar", T: 9 },
      { no: 4, name: "finished_timestamp_unix_ms", kind: "scalar", T: 1 },
      { no: 5, name: "command_was_trimmed", kind: "scalar", T: 8 },
      { no: 6, name: "output_was_trimmed", kind: "scalar", T: 8 },
    ]))
  class Fe extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.eventType = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Fe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Fe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Fe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Fe, e, t)
    }
  }
  ;(exports.CmdKEvent = Fe),
    (Fe.runtime = r.proto3),
    (Fe.typeName = "aiserver.v1.CmdKEvent"),
    (Fe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      { no: 2, name: "request_id", kind: "scalar", T: 9 },
      { no: 20, name: "prompt_bar_id", kind: "scalar", T: 9, opt: !0 },
      {
        no: 3,
        name: "submit_prompt",
        kind: "message",
        T: De,
        oneof: "event_type",
      },
      {
        no: 4,
        name: "end_of_generation",
        kind: "message",
        T: Je,
        oneof: "event_type",
      },
      {
        no: 5,
        name: "interrupt_generation",
        kind: "message",
        T: Le,
        oneof: "event_type",
      },
      {
        no: 6,
        name: "accept_all",
        kind: "message",
        T: xe,
        oneof: "event_type",
      },
      {
        no: 7,
        name: "reject_all",
        kind: "message",
        T: Pe,
        oneof: "event_type",
      },
      {
        no: 8,
        name: "reject_partial_diff",
        kind: "message",
        T: qe,
        oneof: "event_type",
      },
      {
        no: 9,
        name: "accept_partial_diff",
        kind: "message",
        T: Me,
        oneof: "event_type",
      },
    ]))
  class De extends r.Message {
    constructor(e) {
      super(),
        (this.originalText = ""),
        (this.prompt = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new De().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new De().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new De().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(De, e, t)
    }
  }
  ;(exports.CmdKEvent_SubmitPrompt = De),
    (De.runtime = r.proto3),
    (De.typeName = "aiserver.v1.CmdKEvent.SubmitPrompt"),
    (De.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "original_range", kind: "message", T: $ },
      { no: 2, name: "original_text", kind: "scalar", T: 9 },
      { no: 3, name: "prompt", kind: "scalar", T: 9 },
    ]))
  class Je extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Je().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Je().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Je().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Je, e, t)
    }
  }
  ;(exports.CmdKEvent_EndOfGeneration = Je),
    (Je.runtime = r.proto3),
    (Je.typeName = "aiserver.v1.CmdKEvent.EndOfGeneration"),
    (Je.fields = r.proto3.util.newFieldList(() => []))
  class Le extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Le().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Le().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Le().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Le, e, t)
    }
  }
  ;(exports.CmdKEvent_InterruptGeneration = Le),
    (Le.runtime = r.proto3),
    (Le.typeName = "aiserver.v1.CmdKEvent.InterruptGeneration"),
    (Le.fields = r.proto3.util.newFieldList(() => []))
  class xe extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new xe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new xe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new xe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(xe, e, t)
    }
  }
  ;(exports.CmdKEvent_AcceptDiffs = xe),
    (xe.runtime = r.proto3),
    (xe.typeName = "aiserver.v1.CmdKEvent.AcceptDiffs"),
    (xe.fields = r.proto3.util.newFieldList(() => []))
  class Pe extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Pe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Pe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Pe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Pe, e, t)
    }
  }
  ;(exports.CmdKEvent_RejectDiffs = Pe),
    (Pe.runtime = r.proto3),
    (Pe.typeName = "aiserver.v1.CmdKEvent.RejectDiffs"),
    (Pe.fields = r.proto3.util.newFieldList(() => []))
  class Me extends r.Message {
    constructor(e) {
      super(),
        (this.greenLines = []),
        (this.redLines = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Me().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Me().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Me().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Me, e, t)
    }
  }
  ;(exports.CmdKEvent_AcceptPartialDiff = Me),
    (Me.runtime = r.proto3),
    (Me.typeName = "aiserver.v1.CmdKEvent.AcceptPartialDiff"),
    (Me.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "green_range", kind: "message", T: $ },
      { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: !0 },
      { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: !0 },
    ]))
  class qe extends r.Message {
    constructor(e) {
      super(),
        (this.greenLines = []),
        (this.redLines = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new qe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new qe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new qe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(qe, e, t)
    }
  }
  ;(exports.CmdKEvent_RejectPartialDiff = qe),
    (qe.runtime = r.proto3),
    (qe.typeName = "aiserver.v1.CmdKEvent.RejectPartialDiff"),
    (qe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "green_range", kind: "message", T: $ },
      { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: !0 },
      { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: !0 },
    ]))
  class Ue extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.eventType = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ue().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ue().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ue().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ue, e, t)
    }
  }
  ;(exports.ChatEvent = Ue),
    (Ue.runtime = r.proto3),
    (Ue.typeName = "aiserver.v1.ChatEvent"),
    (Ue.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      {
        no: 2,
        name: "submit_prompt",
        kind: "message",
        T: Oe,
        oneof: "event_type",
      },
      {
        no: 3,
        name: "end_of_any_generation",
        kind: "message",
        T: Ge,
        oneof: "event_type",
      },
      {
        no: 4,
        name: "end_of_uninterrupted_generation",
        kind: "message",
        T: He,
        oneof: "event_type",
      },
    ]))
  class Oe extends r.Message {
    constructor(e) {
      super(), (this.prompt = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Oe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Oe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Oe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Oe, e, t)
    }
  }
  ;(exports.ChatEvent_SubmitPrompt = Oe),
    (Oe.runtime = r.proto3),
    (Oe.typeName = "aiserver.v1.ChatEvent.SubmitPrompt"),
    (Oe.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "prompt", kind: "scalar", T: 9 },
    ]))
  class Ge extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ge().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ge().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ge().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ge, e, t)
    }
  }
  ;(exports.ChatEvent_EndOfAnyGeneration = Ge),
    (Ge.runtime = r.proto3),
    (Ge.typeName = "aiserver.v1.ChatEvent.EndOfAnyGeneration"),
    (Ge.fields = r.proto3.util.newFieldList(() => []))
  class He extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new He().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new He().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new He().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(He, e, t)
    }
  }
  ;(exports.ChatEvent_EndOfUninterruptedGeneration = He),
    (He.runtime = r.proto3),
    (He.typeName = "aiserver.v1.ChatEvent.EndOfUninterruptedGeneration"),
    (He.fields = r.proto3.util.newFieldList(() => []))
  class Ye extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.eventType = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ye().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ye().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ye().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ye, e, t)
    }
  }
  ;(exports.BugBotLinterEvent = Ye),
    (Ye.runtime = r.proto3),
    (Ye.typeName = "aiserver.v1.BugBotLinterEvent"),
    (Ye.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      { no: 2, name: "point_in_time_model", kind: "message", T: fe },
      {
        no: 3,
        name: "lint_generated",
        kind: "message",
        T: je,
        oneof: "event_type",
      },
      {
        no: 4,
        name: "lint_dismissed",
        kind: "message",
        T: We,
        oneof: "event_type",
      },
      {
        no: 5,
        name: "user_feedback",
        kind: "message",
        T: ze,
        oneof: "event_type",
      },
      {
        no: 6,
        name: "viewed_report",
        kind: "message",
        T: Ke,
        oneof: "event_type",
      },
      {
        no: 7,
        name: "unviewed_report",
        kind: "message",
        T: Ze,
        oneof: "event_type",
      },
      {
        no: 8,
        name: "started",
        kind: "message",
        T: Ve,
        oneof: "event_type",
      },
      {
        no: 9,
        name: "not_shown_because_heuristic",
        kind: "message",
        T: Xe,
        oneof: "event_type",
      },
    ]))
  class Ve extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ve().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ve().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ve().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ve, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_Started = Ve),
    (Ve.runtime = r.proto3),
    (Ve.typeName = "aiserver.v1.BugBotLinterEvent.Started"),
    (Ve.fields = r.proto3.util.newFieldList(() => []))
  class je extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new je().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new je().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new je().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(je, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_LintGenerated = je),
    (je.runtime = r.proto3),
    (je.typeName = "aiserver.v1.BugBotLinterEvent.LintGenerated"),
    (je.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report", kind: "message", T: a.BugReport },
    ]))
  class We extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new We().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new We().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new We().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(We, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_LintDismissed = We),
    (We.runtime = r.proto3),
    (We.typeName = "aiserver.v1.BugBotLinterEvent.LintDismissed"),
    (We.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class ze extends r.Message {
    constructor(e) {
      super(),
        (this.bugReportId = ""),
        (this.feedback = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ze().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ze().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ze().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ze, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_UserFeedback = ze),
    (ze.runtime = r.proto3),
    (ze.typeName = "aiserver.v1.BugBotLinterEvent.UserFeedback"),
    (ze.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
      { no: 2, name: "feedback", kind: "scalar", T: 9 },
    ]))
  class Ke extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ke().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ke().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ke().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ke, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_ViewedReport = Ke),
    (Ke.runtime = r.proto3),
    (Ke.typeName = "aiserver.v1.BugBotLinterEvent.ViewedReport"),
    (Ke.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class Ze extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ze().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ze().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ze().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ze, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_UnviewedReport = Ze),
    (Ze.runtime = r.proto3),
    (Ze.typeName = "aiserver.v1.BugBotLinterEvent.UnviewedReport"),
    (Ze.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class Xe extends r.Message {
    constructor(e) {
      super(),
        (this.heuristic = g.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Xe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Xe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Xe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Xe, e, t)
    }
  }
  ;(exports.BugBotLinterEvent_NotShownBecauseHeuristic = Xe),
    (Xe.runtime = r.proto3),
    (Xe.typeName =
      "aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic"),
    (Xe.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "heuristic",
        kind: "enum",
        T: r.proto3.getEnumType(g),
      },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.LINT_OVERLAP = 1)] = "LINT_OVERLAP"),
        (e[(e.LINES_MISMATCH = 2)] = "LINES_MISMATCH")
    })(
      (g =
        exports.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic ||
        (exports.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic = {})),
    ),
    r.proto3.util.setEnumType(
      g,
      "aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic",
      [
        { no: 0, name: "HEURISTIC_UNSPECIFIED" },
        { no: 1, name: "HEURISTIC_LINT_OVERLAP" },
        { no: 2, name: "HEURISTIC_LINES_MISMATCH" },
      ],
    )
  class $e extends r.Message {
    constructor(e) {
      super(),
        (this.requestId = ""),
        (this.eventType = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new $e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals($e, e, t)
    }
  }
  ;(exports.BugBotEvent = $e),
    ($e.runtime = r.proto3),
    ($e.typeName = "aiserver.v1.BugBotEvent"),
    ($e.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "request_id", kind: "scalar", T: 9 },
      {
        no: 2,
        name: "started",
        kind: "message",
        T: et,
        oneof: "event_type",
      },
      {
        no: 3,
        name: "reports_generated",
        kind: "message",
        T: tt,
        oneof: "event_type",
      },
      {
        no: 4,
        name: "pressed_fix_in_composer",
        kind: "message",
        T: nt,
        oneof: "event_type",
      },
      {
        no: 5,
        name: "pressed_open_in_editor",
        kind: "message",
        T: st,
        oneof: "event_type",
      },
      {
        no: 6,
        name: "viewed_report",
        kind: "message",
        T: it,
        oneof: "event_type",
      },
      {
        no: 7,
        name: "user_feedback",
        kind: "message",
        T: at,
        oneof: "event_type",
      },
      {
        no: 8,
        name: "pressed_add_to_chat",
        kind: "message",
        T: rt,
        oneof: "event_type",
      },
      {
        no: 9,
        name: "background_interval_started",
        kind: "message",
        T: lt,
        oneof: "event_type",
      },
      {
        no: 10,
        name: "background_interval_ended",
        kind: "message",
        T: ut,
        oneof: "event_type",
      },
      {
        no: 11,
        name: "background_interval_interrupted",
        kind: "message",
        T: ct,
        oneof: "event_type",
      },
      {
        no: 12,
        name: "background_interval_errored",
        kind: "message",
        T: At,
        oneof: "event_type",
      },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.DISABLED = 1)] = "DISABLED"),
        (e[(e.TOO_RECENT = 2)] = "TOO_RECENT"),
        (e[(e.UNVIEWED_BUG_REPORTS = 3)] = "UNVIEWED_BUG_REPORTS"),
        (e[(e.NOT_IN_GIT_REPO = 4)] = "NOT_IN_GIT_REPO"),
        (e[(e.DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH = 5)] =
          "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"),
        (e[(e.NO_GIT_USER = 6)] = "NO_GIT_USER"),
        (e[(e.NO_LAST_COMMIT = 7)] = "NO_LAST_COMMIT"),
        (e[(e.LAST_COMMIT_NOT_MADE_BY_USER = 8)] =
          "LAST_COMMIT_NOT_MADE_BY_USER"),
        (e[(e.LAST_COMMIT_TOO_OLD = 9)] = "LAST_COMMIT_TOO_OLD"),
        (e[(e.DIFF_TOO_LONG = 10)] = "DIFF_TOO_LONG"),
        (e[(e.DIFF_TOO_SHORT = 11)] = "DIFF_TOO_SHORT"),
        (e[(e.TELEMETRY_UNHEALTHY = 12)] = "TELEMETRY_UNHEALTHY")
    })(
      (h =
        exports.BugBotEvent_BackgroundIntervalInterruptedReason ||
        (exports.BugBotEvent_BackgroundIntervalInterruptedReason = {})),
    ),
    r.proto3.util.setEnumType(
      h,
      "aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason",
      [
        {
          no: 0,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED",
        },
        {
          no: 1,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED",
        },
        {
          no: 2,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT",
        },
        {
          no: 3,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS",
        },
        {
          no: 4,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO",
        },
        {
          no: 5,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH",
        },
        {
          no: 6,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER",
        },
        {
          no: 7,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT",
        },
        {
          no: 8,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER",
        },
        {
          no: 9,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD",
        },
        {
          no: 10,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG",
        },
        {
          no: 11,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT",
        },
        {
          no: 12,
          name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY",
        },
      ],
    )
  class et extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new et().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new et().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new et().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(et, e, t)
    }
  }
  ;(exports.BugBotEvent_Started = et),
    (et.runtime = r.proto3),
    (et.typeName = "aiserver.v1.BugBotEvent.Started"),
    (et.fields = r.proto3.util.newFieldList(() => []))
  class tt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new tt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new tt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new tt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(tt, e, t)
    }
  }
  ;(exports.BugBotEvent_ReportsGenerated = tt),
    (tt.runtime = r.proto3),
    (tt.typeName = "aiserver.v1.BugBotEvent.ReportsGenerated"),
    (tt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_reports", kind: "message", T: a.BugReports },
    ]))
  class nt extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new nt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new nt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new nt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(nt, e, t)
    }
  }
  ;(exports.BugBotEvent_PressedFixInComposer = nt),
    (nt.runtime = r.proto3),
    (nt.typeName = "aiserver.v1.BugBotEvent.PressedFixInComposer"),
    (nt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class rt extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new rt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new rt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new rt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(rt, e, t)
    }
  }
  ;(exports.BugBotEvent_PressedAddToChat = rt),
    (rt.runtime = r.proto3),
    (rt.typeName = "aiserver.v1.BugBotEvent.PressedAddToChat"),
    (rt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class st extends r.Message {
    constructor(e) {
      super(), (this.bugReportId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new st().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new st().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new st().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(st, e, t)
    }
  }
  ;(exports.BugBotEvent_PressedOpenInEditor = st),
    (st.runtime = r.proto3),
    (st.typeName = "aiserver.v1.BugBotEvent.PressedOpenInEditor"),
    (st.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_location", kind: "message", T: a.BugLocation },
      { no: 2, name: "bug_report_id", kind: "scalar", T: 9 },
    ]))
  class it extends r.Message {
    constructor(e) {
      super(),
        (this.secondsViewed = 0),
        (this.reportViews = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new it().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new it().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new it().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(it, e, t)
    }
  }
  ;(exports.BugBotEvent_ViewedReport = it),
    (it.runtime = r.proto3),
    (it.typeName = "aiserver.v1.BugBotEvent.ViewedReport"),
    (it.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "seconds_viewed", kind: "scalar", T: 5 },
      {
        no: 2,
        name: "report_views",
        kind: "message",
        T: ot,
        repeated: !0,
      },
    ]))
  class ot extends r.Message {
    constructor(e) {
      super(),
        (this.bugReportId = ""),
        (this.viewPercentage = 0),
        (this.textPercentage = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ot().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ot().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ot().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ot, e, t)
    }
  }
  ;(exports.BugBotEvent_ViewedReport_ReportView = ot),
    (ot.runtime = r.proto3),
    (ot.typeName = "aiserver.v1.BugBotEvent.ViewedReport.ReportView"),
    (ot.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
      { no: 2, name: "view_percentage", kind: "scalar", T: 1 },
      { no: 3, name: "text_percentage", kind: "scalar", T: 1 },
    ]))
  class at extends r.Message {
    constructor(e) {
      super(),
        (this.bugReportId = ""),
        (this.feedback = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new at().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new at().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new at().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(at, e, t)
    }
  }
  ;(exports.BugBotEvent_UserFeedback = at),
    (at.runtime = r.proto3),
    (at.typeName = "aiserver.v1.BugBotEvent.UserFeedback"),
    (at.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
      { no: 2, name: "feedback", kind: "scalar", T: 9 },
    ]))
  class lt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new lt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new lt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new lt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(lt, e, t)
    }
  }
  ;(exports.BugBotEvent_BackgroundIntervalStarted = lt),
    (lt.runtime = r.proto3),
    (lt.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalStarted"),
    (lt.fields = r.proto3.util.newFieldList(() => []))
  class ut extends r.Message {
    constructor(e) {
      super(), (this.success = !1), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ut().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ut().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ut().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ut, e, t)
    }
  }
  ;(exports.BugBotEvent_BackgroundIntervalEnded = ut),
    (ut.runtime = r.proto3),
    (ut.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalEnded"),
    (ut.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "success", kind: "scalar", T: 8 },
    ]))
  class ct extends r.Message {
    constructor(e) {
      super(),
        (this.reason = h.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ct().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ct().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ct().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ct, e, t)
    }
  }
  ;(exports.BugBotEvent_BackgroundIntervalInterrupted = ct),
    (ct.runtime = r.proto3),
    (ct.typeName =
      "aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted"),
    (ct.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "reason", kind: "enum", T: r.proto3.getEnumType(h) },
    ]))
  class At extends r.Message {
    constructor(e) {
      super(),
        (this.errorMessage = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new At().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new At().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new At().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(At, e, t)
    }
  }
  ;(exports.BugBotEvent_BackgroundIntervalErrored = At),
    (At.runtime = r.proto3),
    (At.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalErrored"),
    (At.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "error_message", kind: "scalar", T: 9 },
    ]))
  class mt extends r.Message {
    constructor(e) {
      super(),
        (this.requestType = f.UNSPECIFIED),
        (this.requestId = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new mt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new mt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new mt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(mt, e, t)
    }
  }
  ;(exports.AiRequestEvent = mt),
    (mt.runtime = r.proto3),
    (mt.typeName = "aiserver.v1.AiRequestEvent"),
    (mt.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "request_type",
        kind: "enum",
        T: r.proto3.getEnumType(f),
      },
      { no: 2, name: "request_id", kind: "scalar", T: 9 },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.START = 1)] = "START"),
        (e[(e.END = 2)] = "END")
    })(
      (f =
        exports.AiRequestEvent_RequestType ||
        (exports.AiRequestEvent_RequestType = {})),
    ),
    r.proto3.util.setEnumType(
      f,
      "aiserver.v1.AiRequestEvent.RequestType",
      [
        { no: 0, name: "REQUEST_TYPE_UNSPECIFIED" },
        { no: 1, name: "REQUEST_TYPE_START" },
        { no: 2, name: "REQUEST_TYPE_END" },
      ],
    )
  class dt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new dt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new dt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new dt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(dt, e, t)
    }
  }
  ;(exports.ModelOpenedEvent = dt),
    (dt.runtime = r.proto3),
    (dt.typeName = "aiserver.v1.ModelOpenedEvent"),
    (dt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class pt extends r.Message {
    constructor(e) {
      super(), (this.files = []), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new pt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new pt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new pt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(pt, e, t)
    }
  }
  ;(exports.BackgroundFilesEvent = pt),
    (pt.runtime = r.proto3),
    (pt.typeName = "aiserver.v1.BackgroundFilesEvent"),
    (pt.fields = r.proto3.util.newFieldList(() => [
      { no: 2, name: "files", kind: "message", T: gt, repeated: !0 },
    ]))
  class gt extends r.Message {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.contents = ""),
        (this.hash = ""),
        (this.fullPath = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new gt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new gt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new gt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(gt, e, t)
    }
  }
  ;(exports.BackgroundFilesEvent_BackgroundFile = gt),
    (gt.runtime = r.proto3),
    (gt.typeName = "aiserver.v1.BackgroundFilesEvent.BackgroundFile"),
    (gt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
      { no: 2, name: "contents", kind: "scalar", T: 9 },
      { no: 3, name: "hash", kind: "scalar", T: 9 },
      { no: 4, name: "full_path", kind: "scalar", T: 9 },
    ]))
  class ht extends r.Message {
    constructor(e) {
      super(),
        (this.visibleRanges = []),
        (this.editorId = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ht().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ht().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ht().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ht, e, t)
    }
  }
  ;(exports.ScrollEvent = ht),
    (ht.runtime = r.proto3),
    (ht.typeName = "aiserver.v1.ScrollEvent"),
    (ht.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: fe },
      {
        no: 2,
        name: "visible_ranges",
        kind: "message",
        T: $,
        repeated: !0,
      },
      { no: 3, name: "editor_id", kind: "scalar", T: 9 },
    ]))
  class ft extends r.Message {
    constructor(e) {
      super(), (this.editorId = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new ft().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ft().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ft().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(ft, e, t)
    }
  }
  ;(exports.EditorCloseEvent = ft),
    (ft.runtime = r.proto3),
    (ft.typeName = "aiserver.v1.EditorCloseEvent"),
    (ft.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "editor_id", kind: "scalar", T: 9 },
    ]))
  class Et extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Et().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Et().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Et().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Et, e, t)
    }
  }
  ;(exports.TabCloseEvent = Et),
    (Et.runtime = r.proto3),
    (Et.typeName = "aiserver.v1.TabCloseEvent"),
    (Et.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: he },
    ]))
  class Ct extends r.Message {
    constructor(e) {
      super(),
        (this.fullUri = ""),
        (this.modelId = ""),
        (this.uriScheme = ""),
        (this.isTooLargeForSyncing = !1),
        (this.isTooLargeForTokenization = !1),
        (this.isTooLargeForHeapOperation = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ct().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ct().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ct().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ct, e, t)
    }
  }
  ;(exports.ModelAddedEvent = Ct),
    (Ct.runtime = r.proto3),
    (Ct.typeName = "aiserver.v1.ModelAddedEvent"),
    (Ct.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "point_in_time_model", kind: "message", T: he },
      { no: 2, name: "full_uri", kind: "scalar", T: 9 },
      { no: 3, name: "model_id", kind: "scalar", T: 9 },
      { no: 4, name: "uri_scheme", kind: "scalar", T: 9 },
      { no: 5, name: "is_too_large_for_syncing", kind: "scalar", T: 8 },
      {
        no: 6,
        name: "is_too_large_for_tokenization",
        kind: "scalar",
        T: 8,
      },
      {
        no: 7,
        name: "is_too_large_for_heap_operation",
        kind: "scalar",
        T: 8,
      },
    ]))
  class yt extends r.Message {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.rootFsPath = ""),
        (this.refs = []),
        (this.remotes = []),
        (this.submodules = []),
        (this.mergeChanges = []),
        (this.indexChanges = []),
        (this.workingTreeChanges = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new yt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new yt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new yt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(yt, e, t)
    }
  }
  ;(exports.CppGitContextEvent = yt),
    (yt.runtime = r.proto3),
    (yt.typeName = "aiserver.v1.CppGitContextEvent"),
    (yt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
      { no: 2, name: "root_fs_path", kind: "scalar", T: 9 },
      { no: 3, name: "head", kind: "message", T: It, opt: !0 },
      { no: 4, name: "refs", kind: "message", T: kt, repeated: !0 },
      { no: 5, name: "remotes", kind: "message", T: wt, repeated: !0 },
      { no: 6, name: "submodules", kind: "message", T: St, repeated: !0 },
      { no: 7, name: "rebase_commit", kind: "message", T: Tt, opt: !0 },
      {
        no: 8,
        name: "merge_changes",
        kind: "message",
        T: vt,
        repeated: !0,
      },
      {
        no: 9,
        name: "index_changes",
        kind: "message",
        T: vt,
        repeated: !0,
      },
      {
        no: 10,
        name: "working_tree_changes",
        kind: "message",
        T: vt,
        repeated: !0,
      },
    ]))
  class It extends r.Message {
    constructor(e) {
      super(), (this.type = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new It().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new It().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new It().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(It, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Head = It),
    (It.runtime = r.proto3),
    (It.typeName = "aiserver.v1.CppGitContextEvent.Head"),
    (It.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "type", kind: "scalar", T: 9 },
      { no: 2, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "remote", kind: "scalar", T: 9, opt: !0 },
      { no: 5, name: "upstream_ref", kind: "message", T: Bt, opt: !0 },
      { no: 6, name: "ahead", kind: "scalar", T: 5, opt: !0 },
      { no: 7, name: "behind", kind: "scalar", T: 5, opt: !0 },
    ]))
  class Bt extends r.Message {
    constructor(e) {
      super(),
        (this.remote = ""),
        (this.name = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Bt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Bt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Bt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Bt, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Head_UpstreamRef = Bt),
    (Bt.runtime = r.proto3),
    (Bt.typeName = "aiserver.v1.CppGitContextEvent.Head.UpstreamRef"),
    (Bt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "remote", kind: "scalar", T: 9 },
      { no: 2, name: "name", kind: "scalar", T: 9 },
      { no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
    ]))
  class kt extends r.Message {
    constructor(e) {
      super(), (this.type = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new kt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new kt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new kt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(kt, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Ref = kt),
    (kt.runtime = r.proto3),
    (kt.typeName = "aiserver.v1.CppGitContextEvent.Ref"),
    (kt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "type", kind: "scalar", T: 9 },
      { no: 2, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "remote", kind: "scalar", T: 9, opt: !0 },
    ]))
  class wt extends r.Message {
    constructor(e) {
      super(),
        (this.name = ""),
        (this.isReadOnly = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new wt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new wt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new wt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(wt, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Remote = wt),
    (wt.runtime = r.proto3),
    (wt.typeName = "aiserver.v1.CppGitContextEvent.Remote"),
    (wt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "fetch_url", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "push_url", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "is_read_only", kind: "scalar", T: 8 },
    ]))
  class St extends r.Message {
    constructor(e) {
      super(),
        (this.name = ""),
        (this.path = ""),
        (this.url = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new St().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new St().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new St().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(St, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Submodule = St),
    (St.runtime = r.proto3),
    (St.typeName = "aiserver.v1.CppGitContextEvent.Submodule"),
    (St.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "path", kind: "scalar", T: 9 },
      { no: 3, name: "url", kind: "scalar", T: 9 },
    ]))
  class Tt extends r.Message {
    constructor(e) {
      super(),
        (this.hash = ""),
        (this.message = ""),
        (this.parents = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Tt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Tt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Tt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Tt, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Commit = Tt),
    (Tt.runtime = r.proto3),
    (Tt.typeName = "aiserver.v1.CppGitContextEvent.Commit"),
    (Tt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "hash", kind: "scalar", T: 9 },
      { no: 2, name: "message", kind: "scalar", T: 9 },
      { no: 3, name: "parents", kind: "scalar", T: 9, repeated: !0 },
      { no: 4, name: "author_date", kind: "scalar", T: 9, opt: !0 },
      { no: 5, name: "author_name", kind: "scalar", T: 9, opt: !0 },
      { no: 6, name: "author_email", kind: "scalar", T: 9, opt: !0 },
      { no: 7, name: "commit_date", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "short_stat", kind: "message", T: _t, opt: !0 },
    ]))
  class _t extends r.Message {
    constructor(e) {
      super(),
        (this.files = 0),
        (this.insertions = 0),
        (this.deletions = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new _t().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _t().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _t().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(_t, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Commit_CommitShortStat = _t),
    (_t.runtime = r.proto3),
    (_t.typeName =
      "aiserver.v1.CppGitContextEvent.Commit.CommitShortStat"),
    (_t.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "files", kind: "scalar", T: 5 },
      { no: 2, name: "insertions", kind: "scalar", T: 5 },
      { no: 3, name: "deletions", kind: "scalar", T: 5 },
    ]))
  class vt extends r.Message {
    constructor(e) {
      super(),
        (this.uri = ""),
        (this.originalUri = ""),
        (this.status = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new vt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new vt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new vt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(vt, e, t)
    }
  }
  ;(exports.CppGitContextEvent_Change = vt),
    (vt.runtime = r.proto3),
    (vt.typeName = "aiserver.v1.CppGitContextEvent.Change"),
    (vt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "uri", kind: "scalar", T: 9 },
      { no: 2, name: "original_uri", kind: "scalar", T: 9 },
      { no: 3, name: "rename_uri", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "status", kind: "scalar", T: 9 },
    ]))
  class Rt extends r.Message {
    constructor(e) {
      super(),
        (this.item = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Rt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Rt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Rt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Rt, e, t)
    }
  }
  ;(exports.AnythingQuickAccessItem = Rt),
    (Rt.runtime = r.proto3),
    (Rt.typeName = "aiserver.v1.AnythingQuickAccessItem"),
    (Rt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "resource", kind: "message", T: Qt, oneof: "item" },
      { no: 2, name: "separator", kind: "scalar", T: 9, oneof: "item" },
    ]))
  class Qt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Qt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Qt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Qt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Qt, e, t)
    }
  }
  ;(exports.AnythingQuickAccessItem_Resource = Qt),
    (Qt.runtime = r.proto3),
    (Qt.typeName = "aiserver.v1.AnythingQuickAccessItem.Resource"),
    (Qt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "model", kind: "message", T: fe, opt: !0 },
      { no: 2, name: "range", kind: "message", T: $, opt: !0 },
      { no: 3, name: "uri", kind: "scalar", T: 9, opt: !0 },
    ]))
  class bt extends r.Message {
    constructor(e) {
      super(),
        (this.query = ""),
        (this.items = []),
        (this.selectedIndices = []),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new bt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new bt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new bt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(bt, e, t)
    }
  }
  ;(exports.AnythingQuickAccessSelectionEvent = bt),
    (bt.runtime = r.proto3),
    (bt.typeName = "aiserver.v1.AnythingQuickAccessSelectionEvent"),
    (bt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "query", kind: "scalar", T: 9 },
      { no: 2, name: "items", kind: "message", T: Rt, repeated: !0 },
      {
        no: 3,
        name: "selected_indices",
        kind: "scalar",
        T: 5,
        repeated: !0,
      },
    ]))
  class Nt extends r.Message {
    constructor(e) {
      super(), (this.suggestions = []), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Nt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Nt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Nt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Nt, e, t)
    }
  }
  ;(exports.LspSuggestionEvent = Nt),
    (Nt.runtime = r.proto3),
    (Nt.typeName = "aiserver.v1.LspSuggestionEvent"),
    (Nt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "suggestions", kind: "scalar", T: 9, repeated: !0 },
      { no: 2, name: "request_id", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "editor_id", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "point_in_time_model", kind: "message", T: fe },
    ]))
  class Ft extends r.Message {
    constructor(e) {
      super(),
        (this.event = { case: void 0 }),
        (this.performanceNowTimestamp = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ft().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ft().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ft().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ft, e, t)
    }
  }
  ;(exports.CppSessionEvent = Ft),
    (Ft.runtime = r.proto3),
    (Ft.typeName = "aiserver.v1.CppSessionEvent"),
    (Ft.fields = r.proto3.util.newFieldList(() => [
      {
        no: 2,
        name: "accept_event",
        kind: "message",
        T: se,
        oneof: "event",
      },
      {
        no: 3,
        name: "reject_event",
        kind: "message",
        T: ue,
        oneof: "event",
      },
      {
        no: 4,
        name: "manual_trigger_event",
        kind: "message",
        T: Ee,
        oneof: "event",
      },
      {
        no: 6,
        name: "stopped_tracking_model_event",
        kind: "message",
        T: Ce,
        oneof: "event",
      },
      {
        no: 7,
        name: "suggest_event",
        kind: "message",
        T: oe,
        oneof: "event",
      },
      {
        no: 8,
        name: "linter_error_event",
        kind: "message",
        T: ye,
        oneof: "event",
      },
      {
        no: 9,
        name: "debounced_cursor_movement_event",
        kind: "message",
        T: Ie,
        oneof: "event",
      },
      {
        no: 10,
        name: "editor_changed_event",
        kind: "message",
        T: Be,
        oneof: "event",
      },
      {
        no: 11,
        name: "copy_event",
        kind: "message",
        T: ke,
        oneof: "event",
      },
      {
        no: 13,
        name: "quick_action_event",
        kind: "message",
        T: _e,
        oneof: "event",
      },
      {
        no: 14,
        name: "quick_action_fire_event",
        kind: "message",
        T: ve,
        oneof: "event",
      },
      {
        no: 15,
        name: "model_opened_event",
        kind: "message",
        T: dt,
        oneof: "event",
      },
      {
        no: 17,
        name: "cmd_k_event",
        kind: "message",
        T: Fe,
        oneof: "event",
      },
      {
        no: 18,
        name: "chat_event",
        kind: "message",
        T: Ue,
        oneof: "event",
      },
      {
        no: 19,
        name: "ai_event",
        kind: "message",
        T: mt,
        oneof: "event",
      },
      {
        no: 21,
        name: "scroll_event",
        kind: "message",
        T: ht,
        oneof: "event",
      },
      {
        no: 22,
        name: "editor_close_event",
        kind: "message",
        T: ft,
        oneof: "event",
      },
      {
        no: 23,
        name: "tab_close_event",
        kind: "message",
        T: Et,
        oneof: "event",
      },
      {
        no: 33,
        name: "model_added_event",
        kind: "message",
        T: Ct,
        oneof: "event",
      },
      {
        no: 26,
        name: "partial_accept_event",
        kind: "message",
        T: Ae,
        oneof: "event",
      },
      {
        no: 27,
        name: "accept_cursor_prediction_event",
        kind: "message",
        T: pe,
        oneof: "event",
      },
      {
        no: 28,
        name: "reject_cursor_prediction_event",
        kind: "message",
        T: ge,
        oneof: "event",
      },
      {
        no: 29,
        name: "suggest_cursor_prediction_event",
        kind: "message",
        T: de,
        oneof: "event",
      },
      {
        no: 30,
        name: "cpp_trigger_event",
        kind: "message",
        T: ae,
        oneof: "event",
      },
      {
        no: 31,
        name: "finished_cpp_generation_event",
        kind: "message",
        T: le,
        oneof: "event",
      },
      {
        no: 32,
        name: "bug_bot_event",
        kind: "message",
        T: $e,
        oneof: "event",
      },
      {
        no: 34,
        name: "bug_bot_linter_event",
        kind: "message",
        T: Ye,
        oneof: "event",
      },
      {
        no: 35,
        name: "anything_quick_access_selection_event",
        kind: "message",
        T: bt,
        oneof: "event",
      },
      {
        no: 36,
        name: "lsp_suggestion_event",
        kind: "message",
        T: Nt,
        oneof: "event",
      },
      {
        no: 16,
        name: "background_files_event",
        kind: "message",
        T: pt,
        oneof: "event",
      },
      {
        no: 20,
        name: "terminal_event",
        kind: "message",
        T: Re,
        oneof: "event",
      },
      {
        no: 24,
        name: "git_context_event",
        kind: "message",
        T: yt,
        oneof: "event",
      },
      { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1 },
      {
        no: 25,
        name: "performance_time_origin",
        kind: "scalar",
        T: 1,
        opt: !0,
      },
    ]))
  class Dt extends r.Message {
    constructor(e) {
      super(),
        (this.changes = new Uint8Array(0)),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Dt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Dt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Dt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Dt, e, t)
    }
  }
  ;(exports.CppAppendRequest = Dt),
    (Dt.runtime = r.proto3),
    (Dt.typeName = "aiserver.v1.CppAppendRequest"),
    (Dt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "changes", kind: "scalar", T: 12 },
    ]))
  class Jt extends r.Message {
    constructor(e) {
      super(), (this.success = !1), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Jt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Jt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Jt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Jt, e, t)
    }
  }
  ;(exports.CppAppendResponse = Jt),
    (Jt.runtime = r.proto3),
    (Jt.typeName = "aiserver.v1.CppAppendResponse"),
    (Jt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "success", kind: "scalar", T: 8 },
    ]))
  class Lt extends r.Message {
    constructor(e) {
      super(),
        (this.sessionId = ""),
        (this.modelUuid = ""),
        (this.relativePath = ""),
        (this.uri = ""),
        (this.clientVersion = ""),
        (this.changes = []),
        (this.sessionEvents = []),
        (this.modelChangesMayBeOutOfOrder = !1),
        (this.privacyModeStatus = E.UNSPECIFIED),
        (this.events = []),
        (this.timeOrigin = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Lt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Lt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Lt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Lt, e, t)
    }
  }
  ;(exports.EditHistoryAppendChangesRequest = Lt),
    (Lt.runtime = r.proto3),
    (Lt.typeName = "aiserver.v1.EditHistoryAppendChangesRequest"),
    (Lt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "session_id", kind: "scalar", T: 9 },
      { no: 2, name: "model_uuid", kind: "scalar", T: 9 },
      {
        no: 3,
        name: "starting_model_value",
        kind: "scalar",
        T: 9,
        opt: !0,
      },
      {
        no: 10,
        name: "starting_model_version",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      { no: 5, name: "relative_path", kind: "scalar", T: 9 },
      { no: 14, name: "uri", kind: "scalar", T: 9 },
      { no: 6, name: "client_version", kind: "scalar", T: 9 },
      { no: 8, name: "client_commit", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "changes", kind: "message", T: ne, repeated: !0 },
      {
        no: 9,
        name: "session_events",
        kind: "message",
        T: Ft,
        repeated: !0,
      },
      {
        no: 11,
        name: "model_changes_may_be_out_of_order",
        kind: "scalar",
        T: 8,
      },
      {
        no: 12,
        name: "privacy_mode_status",
        kind: "enum",
        T: r.proto3.getEnumType(E),
      },
      { no: 7, name: "events", kind: "message", T: Ht, repeated: !0 },
      { no: 13, name: "time_origin", kind: "scalar", T: 2 },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.PRIVACY_ENABLED = 1)] = "PRIVACY_ENABLED"),
        (e[(e.IMPLICIT_NO_PRIVACY = 2)] = "IMPLICIT_NO_PRIVACY"),
        (e[(e.EXPLICIT_NO_PRIVACY = 3)] = "EXPLICIT_NO_PRIVACY")
    })(
      (E =
        exports.EditHistoryAppendChangesRequest_PrivacyModeStatus ||
        (exports.EditHistoryAppendChangesRequest_PrivacyModeStatus = {})),
    ),
    r.proto3.util.setEnumType(
      E,
      "aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus",
      [
        { no: 0, name: "PRIVACY_MODE_STATUS_UNSPECIFIED" },
        { no: 1, name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED" },
        { no: 2, name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY" },
        { no: 3, name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY" },
      ],
    )
  class xt extends r.Message {
    constructor(e) {
      super(), (this.success = !1), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new xt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new xt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new xt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(xt, e, t)
    }
  }
  ;(exports.EditHistoryAppendChangesResponse = xt),
    (xt.runtime = r.proto3),
    (xt.typeName = "aiserver.v1.EditHistoryAppendChangesResponse"),
    (xt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "success", kind: "scalar", T: 8 },
    ]))
  class Pt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Pt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Pt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Pt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Pt, e, t)
    }
  }
  ;(exports.CppEditHistoryStatusRequest = Pt),
    (Pt.runtime = r.proto3),
    (Pt.typeName = "aiserver.v1.CppEditHistoryStatusRequest"),
    (Pt.fields = r.proto3.util.newFieldList(() => []))
  class Mt extends r.Message {
    constructor(e) {
      super(),
        (this.on = !1),
        (this.onlyIfExplicit = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Mt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Mt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Mt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Mt, e, t)
    }
  }
  ;(exports.CppEditHistoryStatusResponse = Mt),
    (Mt.runtime = r.proto3),
    (Mt.typeName = "aiserver.v1.CppEditHistoryStatusResponse"),
    (Mt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "on", kind: "scalar", T: 8 },
      { no: 2, name: "only_if_explicit", kind: "scalar", T: 8 },
    ]))
  class qt extends r.Message {
    constructor(e) {
      super(),
        (this.relativePath = ""),
        (this.startingContents = ""),
        (this.beforeStartModelChanges = []),
        (this.clientVersion = ""),
        (this.modelUuid = ""),
        (this.sessionId = ""),
        (this.uri = ""),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new qt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new qt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new qt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(qt, e, t)
    }
  }
  ;(exports.StartingModel = qt),
    (qt.runtime = r.proto3),
    (qt.typeName = "aiserver.v1.StartingModel"),
    (qt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "relative_path", kind: "scalar", T: 9 },
      { no: 2, name: "starting_contents", kind: "scalar", T: 9 },
      {
        no: 3,
        name: "starting_model_version",
        kind: "scalar",
        T: 5,
        opt: !0,
      },
      {
        no: 4,
        name: "before_start_model_changes",
        kind: "message",
        T: ne,
        repeated: !0,
      },
      { no: 5, name: "client_version", kind: "scalar", T: 9 },
      { no: 6, name: "client_commit", kind: "scalar", T: 9, opt: !0 },
      { no: 7, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 8, name: "session_id", kind: "scalar", T: 9 },
      { no: 9, name: "uri", kind: "scalar", T: 9 },
    ]))
  class Ut extends r.Message {
    constructor(e) {
      super(),
        (this.changes = []),
        (this.relativePath = ""),
        (this.modelUuid = ""),
        (this.startFromChangeIndex = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ut().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ut().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ut().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ut, e, t)
    }
  }
  ;(exports.BlockDiffPatch = Ut),
    (Ut.runtime = r.proto3),
    (Ut.typeName = "aiserver.v1.BlockDiffPatch"),
    (Ut.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "start_model_window", kind: "message", T: Gt },
      { no: 3, name: "changes", kind: "message", T: Ot, repeated: !0 },
      { no: 4, name: "relative_path", kind: "scalar", T: 9 },
      { no: 7, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 5, name: "start_from_change_index", kind: "scalar", T: 5 },
    ]))
  class Ot extends r.Message {
    constructor(e) {
      super(), (this.text = ""), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ot().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ot().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ot().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ot, e, t)
    }
  }
  ;(exports.BlockDiffPatch_Change = Ot),
    (Ot.runtime = r.proto3),
    (Ot.typeName = "aiserver.v1.BlockDiffPatch.Change"),
    (Ot.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "text", kind: "scalar", T: 9 },
      { no: 2, name: "range", kind: "message", T: $ },
    ]))
  class Gt extends r.Message {
    constructor(e) {
      super(),
        (this.lines = []),
        (this.startLineNumber = 0),
        (this.endLineNumber = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Gt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Gt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Gt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Gt, e, t)
    }
  }
  ;(exports.BlockDiffPatch_ModelWindow = Gt),
    (Gt.runtime = r.proto3),
    (Gt.typeName = "aiserver.v1.BlockDiffPatch.ModelWindow"),
    (Gt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "lines", kind: "scalar", T: 9, repeated: !0 },
      { no: 2, name: "start_line_number", kind: "scalar", T: 5 },
      { no: 3, name: "end_line_number", kind: "scalar", T: 5 },
    ]))
  class Ht extends r.Message {
    constructor(e) {
      super(),
        (this.event = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Ht().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Ht().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Ht().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Ht, e, t)
    }
  }
  ;(exports.CppHistoryAppendEvent = Ht),
    (Ht.runtime = r.proto3),
    (Ht.typeName = "aiserver.v1.CppHistoryAppendEvent"),
    (Ht.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "model_change",
        kind: "message",
        T: ne,
        oneof: "event",
      },
      {
        no: 2,
        name: "accept_event",
        kind: "message",
        T: Vt,
        oneof: "event",
      },
      {
        no: 3,
        name: "reject_event",
        kind: "message",
        T: jt,
        oneof: "event",
      },
      {
        no: 4,
        name: "manual_trigger_event",
        kind: "message",
        T: Yt,
        oneof: "event",
      },
      { no: 10, name: "final_model_hash", kind: "scalar", T: 9, opt: !0 },
    ]))
  class Yt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Yt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Yt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Yt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Yt, e, t)
    }
  }
  ;(exports.CppManualTriggerEvent = Yt),
    (Yt.runtime = r.proto3),
    (Yt.typeName = "aiserver.v1.CppManualTriggerEvent"),
    (Yt.fields = r.proto3.util.newFieldList(() => [
      { no: 2, name: "position", kind: "message", T: s.CursorPosition },
    ]))
  class Vt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Vt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Vt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Vt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Vt, e, t)
    }
  }
  ;(exports.CppAcceptEvent = Vt),
    (Vt.runtime = r.proto3),
    (Vt.typeName = "aiserver.v1.CppAcceptEvent"),
    (Vt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: Wt },
    ]))
  class jt extends r.Message {
    constructor(e) {
      super(), r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new jt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new jt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new jt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(jt, e, t)
    }
  }
  ;(exports.CppRejectEvent = jt),
    (jt.runtime = r.proto3),
    (jt.typeName = "aiserver.v1.CppRejectEvent"),
    (jt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "cpp_suggestion", kind: "message", T: Wt },
    ]))
  class Wt extends r.Message {
    constructor(e) {
      super(),
        (this.suggestionText = ""),
        (this.seen = !1),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Wt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Wt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Wt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Wt, e, t)
    }
  }
  ;(exports.CppSuggestion = Wt),
    (Wt.runtime = r.proto3),
    (Wt.typeName = "aiserver.v1.CppSuggestion"),
    (Wt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "suggestion_text", kind: "scalar", T: 9 },
      { no: 2, name: "range", kind: "message", T: $ },
      { no: 5, name: "seen", kind: "scalar", T: 8 },
      {
        no: 6,
        name: "editor_selection_before_peek",
        kind: "message",
        T: s.SelectionWithOrientation,
      },
    ]))
  class zt extends r.Message {
    constructor(e) {
      super(),
        (this.changes = []),
        (this.modelUuid = ""),
        (this.numCorrectChanges = 0),
        (this.numUnvalidatedChanges = 0),
        (this.numIncorrectChanges = 0),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new zt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new zt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new zt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(zt, e, t)
    }
  }
  ;(exports.ModelWithHistory = zt),
    (zt.runtime = r.proto3),
    (zt.typeName = "aiserver.v1.ModelWithHistory"),
    (zt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "changes", kind: "message", T: ne, repeated: !0 },
      { no: 2, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 3, name: "starting_model", kind: "message", T: qt },
      { no: 4, name: "num_correct_changes", kind: "scalar", T: 5 },
      { no: 5, name: "num_unvalidated_changes", kind: "scalar", T: 5 },
      { no: 6, name: "num_incorrect_changes", kind: "scalar", T: 5 },
    ]))
  class Kt extends r.Message {
    constructor(e) {
      super(),
        (this.timestamp = 0),
        (this.v = { case: void 0 }),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Kt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Kt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Kt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Kt, e, t)
    }
  }
  ;(exports.CppTimelineEvent = Kt),
    (Kt.runtime = r.proto3),
    (Kt.typeName = "aiserver.v1.CppTimelineEvent"),
    (Kt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "timestamp", kind: "scalar", T: 1 },
      { no: 2, name: "event", kind: "message", T: Ft, oneof: "v" },
      { no: 3, name: "change", kind: "message", T: Zt, oneof: "v" },
    ]))
  class Zt extends r.Message {
    constructor(e) {
      super(),
        (this.modelUuid = ""),
        (this.changeIndex = 0),
        (this.status = C.UNSPECIFIED),
        r.proto3.util.initPartial(e, this)
    }
    static fromBinary(e, t) {
      return new Zt().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Zt().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Zt().fromJsonString(e, t)
    }
    static equals(e, t) {
      return r.proto3.util.equals(Zt, e, t)
    }
  }
  ;(exports.CppTimelineEvent_Change = Zt),
    (Zt.runtime = r.proto3),
    (Zt.typeName = "aiserver.v1.CppTimelineEvent.Change"),
    (Zt.fields = r.proto3.util.newFieldList(() => [
      { no: 1, name: "model_uuid", kind: "scalar", T: 9 },
      { no: 2, name: "change_index", kind: "scalar", T: 5 },
      { no: 3, name: "change", kind: "message", T: ne },
      { no: 4, name: "status", kind: "enum", T: r.proto3.getEnumType(C) },
    ])),
    (function (e) {
      ;(e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.CORRECT = 1)] = "CORRECT"),
        (e[(e.UNVALIDATED = 2)] = "UNVALIDATED"),
        (e[(e.INCORRECT = 3)] = "INCORRECT")
    })(
      (C =
        exports.CppTimelineEvent_Change_Status ||
        (exports.CppTimelineEvent_Change_Status = {})),
    ),
    r.proto3.util.setEnumType(
      C,
      "aiserver.v1.CppTimelineEvent.Change.Status",
      [
        { no: 0, name: "STATUS_UNSPECIFIED" },
        { no: 1, name: "STATUS_CORRECT" },
        { no: 2, name: "STATUS_UNVALIDATED" },
        { no: 3, name: "STATUS_INCORRECT" },
      ],
    )
}
