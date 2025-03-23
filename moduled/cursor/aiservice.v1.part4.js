// @ts-check

// 162977
export function createAIServiceV1Part4(params) {
  const {v, _, Ha, Sf, zr, im, hI, eVe, Ho, gt, _B, $C, t7, f$i, XN} = params;

  var P1
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.PYTHON = 1)] = "PYTHON"),
    (i[(i.SHELL = 2)] = "SHELL")
})(P1 || (P1 = {})),
  v.util.setEnumType(P1, "aiserver.v1.InterpreterTool", [
    { no: 0, name: "INTERPRETER_TOOL_UNSPECIFIED" },
    { no: 1, name: "INTERPRETER_TOOL_PYTHON" },
    { no: 2, name: "INTERPRETER_TOOL_SHELL" },
  ])
var a5n = class a5e extends _ {
    constructor(e) {
      super(),
        (this.conversationUuid = ""),
        (this.userFeedback = Jle.UNSPECIFIED),
        (this.userFeedbackDetails = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.LogInterpreterExplicitUserFeedbackRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "conversation_uuid", kind: "scalar", T: 9 },
        { no: 3, name: "user_feedback", kind: "enum", T: v.getEnumType(Jle) },
        { no: 4, name: "user_feedback_details", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new a5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new a5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new a5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(a5e, e, t)
    }
  },
  Jle
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.GOOD = 1)] = "GOOD"),
    (i[(i.OKAY = 2)] = "OKAY"),
    (i[(i.BAD = 3)] = "BAD")
})(Jle || (Jle = {})),
  v.util.setEnumType(
    Jle,
    "aiserver.v1.LogInterpreterExplicitUserFeedbackRequest.Feedback",
    [
      { no: 0, name: "FEEDBACK_UNSPECIFIED" },
      { no: 1, name: "FEEDBACK_GOOD" },
      { no: 2, name: "FEEDBACK_OKAY" },
      { no: 3, name: "FEEDBACK_BAD" },
    ],
  )
var l5n = class l5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.LogInterpreterExplicitUserFeedbackResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new l5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new l5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new l5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(l5e, e, t)
    }
  },
  N9i = class c5e extends _ {
    constructor(e) {
      super(),
        (this.openFiles = []),
        (this.conversation = []),
        (this.documentationIdentifiers = []),
        (this.scoredCodebaseContext = []),
        (this.conversationUuid = ""),
        (this.quotes = []),
        (this.supportsShellTool = !1),
        (this.globalDescription = ""),
        (this.terminalCwd = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamInterpreterRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "open_files", kind: "message", T: c5n, repeated: !0 },
        { no: 2, name: "conversation", kind: "message", T: Ha, repeated: !0 },
        { no: 4, name: "explicit_context", kind: "message", T: Sf },
        { no: 7, name: "model_details", kind: "message", T: zr },
        {
          no: 8,
          name: "documentation_identifiers",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
        { no: 11, name: "summary", kind: "scalar", T: 9, opt: !0 },
        {
          no: 12,
          name: "summary_up_until_index",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        { no: 13, name: "retry_instructions", kind: "scalar", T: 9, opt: !0 },
        {
          no: 14,
          name: "retry_previous_attempt",
          kind: "scalar",
          T: 9,
          opt: !0,
        },
        {
          no: 15,
          name: "scored_codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
        {
          no: 16,
          name: "high_level_folder_description",
          kind: "scalar",
          T: 9,
          opt: !0,
        },
        { no: 17, name: "conversation_uuid", kind: "scalar", T: 9 },
        { no: 18, name: "cmd_k_debug_info", kind: "message", T: hI },
        { no: 19, name: "quotes", kind: "message", T: eVe, repeated: !0 },
        { no: 20, name: "supports_shell_tool", kind: "scalar", T: 8 },
        { no: 21, name: "global_description", kind: "scalar", T: 9 },
        { no: 22, name: "terminal_cwd", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new c5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new c5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new c5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(c5e, e, t)
    }
  },
  c5n = class h5e extends _ {
    constructor(e) {
      super(), (this.scrollTopLineNumber = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamInterpreterRequest.FileInfo"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file", kind: "message", T: Ho },
        { no: 2, name: "scroll_top_line_number", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new h5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new h5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new h5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(h5e, e, t)
    }
  },
  h5n = class u5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamInterpreterResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new u5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new u5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new u5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(u5e, e, t)
    }
  },
  Kle = {
    typeName: "aiserver.v1.InterpreterService",
    methods: {
      streamInterpreter: {
        name: "StreamInterpreter",
        I: N9i,
        O: h5n,
        kind: gt.ServerStreaming,
      },
      logInterpreterExplicitUserFeedback: {
        name: "LogInterpreterExplicitUserFeedback",
        I: a5n,
        O: l5n,
        kind: gt.Unary,
      },
    },
  },
  u5n = class d5e extends _ {
    constructor(e) {
      super(), (this.mode = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportModeSelectionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "mode", kind: "scalar", T: 9 },
        { no: 2, name: "debug_info", kind: "message", T: hI },
      ])
    }
    static fromBinary(e, t) {
      return new d5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new d5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new d5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(d5e, e, t)
    }
  },
  d5n = class f5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportModeSelectionResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new f5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new f5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new f5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(f5e, e, t)
    }
  },
  f5n = class g5e extends _ {
    constructor(e) {
      super(),
        (this.patchUuid = ""),
        (this.patchString = ""),
        (this.source = ""),
        (this.reflection = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RecordAcceptedPatchRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "patch_uuid", kind: "scalar", T: 9 },
        { no: 2, name: "patch_string", kind: "scalar", T: 9 },
        { no: 3, name: "source", kind: "scalar", T: 9 },
        { no: 4, name: "reflection", kind: "scalar", T: 9 },
        { no: 5, name: "debug_info", kind: "message", T: hI },
      ])
    }
    static fromBinary(e, t) {
      return new g5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new g5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new g5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(g5e, e, t)
    }
  },
  g5n = class p5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RecordAcceptedPatchResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new p5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new p5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new p5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(p5e, e, t)
    }
  },
  p5n = class m5e extends _ {
    constructor(e) {
      super(), (this.ans = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetFilePathsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "ans", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new m5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new m5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new m5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(m5e, e, t)
    }
  },
  m5n = class b5e extends _ {
    constructor(e) {
      super(), (this.paths = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetFilePathsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "paths", kind: "message", T: b5n, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new b5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new b5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new b5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(b5e, e, t)
    }
  },
  b5n = class v5e extends _ {
    constructor(e) {
      super(),
        (this.rawPath = ""),
        (this.interestingLines = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetFilePathsResponse.Path"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "raw_path", kind: "scalar", T: 9 },
        {
          no: 2,
          name: "interesting_lines",
          kind: "scalar",
          T: 5,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new v5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new v5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new v5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(v5e, e, t)
    }
  },
  v5n = class y5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.oldFileContents = ""),
        (this.newFileContents = ""),
        (this.patchString = ""),
        (this.branchNotes = ""),
        (this.branchName = ""),
        (this.highLevelAiAnswer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainReflectRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "old_file_contents", kind: "scalar", T: 9 },
        { no: 3, name: "new_file_contents", kind: "scalar", T: 9 },
        { no: 9, name: "patch_string", kind: "scalar", T: 9 },
        { no: 4, name: "branch_notes", kind: "scalar", T: 9 },
        { no: 5, name: "branch_name", kind: "scalar", T: 9 },
        { no: 6, name: "high_level_ai_answer", kind: "scalar", T: 9 },
        { no: 7, name: "override_model", kind: "scalar", T: 9, opt: !0 },
        { no: 8, name: "override_token_limit", kind: "scalar", T: 5, opt: !0 },
        { no: 10, name: "lints", kind: "message", T: _B },
      ])
    }
    static fromBinary(e, t) {
      return new y5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new y5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new y5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(y5e, e, t)
    }
  },
  y5n = class w5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainReflectResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
        { no: 2, name: "decision", kind: "message", T: x5n },
      ])
    }
    static fromBinary(e, t) {
      return new w5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new w5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new w5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(w5e, e, t)
    }
  },
  w5n = class C5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainReflectResponse.AcceptDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new C5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new C5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new C5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(C5e, e, t)
    }
  },
  C5n = class S5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.OpusChainReflectResponse.RetryWithoutMoreInformationDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new S5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new S5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new S5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(S5e, e, t)
    }
  },
  S5n = class x5e extends _ {
    constructor(e) {
      super(), (this.codebaseQuestions = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.OpusChainReflectResponse.RetryWithCodebaseQuestionDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "codebase_questions",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new x5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new x5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new x5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(x5e, e, t)
    }
  },
  x5n = class k5e extends _ {
    constructor(e) {
      super(), (this.decision = { case: void 0 }), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainReflectResponse.Decision"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "accept", kind: "message", T: w5n, oneof: "decision" },
        {
          no: 2,
          name: "retry_without_more_information",
          kind: "message",
          T: C5n,
          oneof: "decision",
        },
        {
          no: 3,
          name: "retry_with_codebase_question",
          kind: "message",
          T: S5n,
          oneof: "decision",
        },
      ])
    }
    static fromBinary(e, t) {
      return new k5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new k5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new k5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(k5e, e, t)
    }
  },
  k5n = class E5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.highLevelAiAnswer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetFileInstructionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "high_level_ai_answer", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new E5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new E5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new E5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(E5e, e, t)
    }
  },
  E5n = class I5e extends _ {
    constructor(e) {
      super(), (this.fileInstruction = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetFileInstructionResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file_instruction", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new I5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new I5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new I5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(I5e, e, t)
    }
  },
  I5n = class D5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.fileContents = ""),
        (this.branchNotes = ""),
        (this.branchName = ""),
        (this.highLevelAiAnswer = ""),
        (this.originatingReflection = ""),
        (this.scoredCodebaseContext = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetPlanRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "file_contents", kind: "scalar", T: 9 },
        { no: 3, name: "branch_notes", kind: "scalar", T: 9 },
        { no: 4, name: "branch_name", kind: "scalar", T: 9 },
        { no: 5, name: "high_level_ai_answer", kind: "scalar", T: 9 },
        { no: 9, name: "originating_reflection", kind: "scalar", T: 9 },
        { no: 6, name: "override_model", kind: "scalar", T: 9, opt: !0 },
        { no: 7, name: "override_token_limit", kind: "scalar", T: 5, opt: !0 },
        {
          no: 15,
          name: "scored_codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
        {
          no: 8,
          name: "codebase_information",
          kind: "message",
          T: D5n,
          opt: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new D5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new D5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new D5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(D5e, e, t)
    }
  },
  D5n = class T5e extends _ {
    constructor(e) {
      super(), (this.files = []), (this.qa = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "files", kind: "message", T: T5n, repeated: !0 },
        { no: 2, name: "qa", kind: "message", T: P5n, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new T5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new T5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new T5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(T5e, e, t)
    }
  },
  T5n = class P5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.contents = ""),
        (this.interestingLines = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation.File"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "interesting_lines",
          kind: "scalar",
          T: 5,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new P5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new P5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new P5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(P5e, e, t)
    }
  },
  P5n = class L5e extends _ {
    constructor(e) {
      super(),
        (this.question = ""),
        (this.answer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation.QA"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "question", kind: "scalar", T: 9 },
        { no: 2, name: "answer", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new L5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new L5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new L5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(L5e, e, t)
    }
  },
  L5n = class N5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.OpusChainGetPlanResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new N5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new N5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new N5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(N5e, e, t)
    }
  },
  OTt = {
    typeName: "aiserver.v1.AiBranchService",
    methods: {
      opusChainGetPlan: {
        name: "OpusChainGetPlan",
        I: I5n,
        O: L5n,
        kind: gt.ServerStreaming,
      },
      opusChainGetFileInstruction: {
        name: "OpusChainGetFileInstruction",
        I: k5n,
        O: E5n,
        kind: gt.Unary,
      },
      opusChainReflect: {
        name: "OpusChainReflect",
        I: v5n,
        O: y5n,
        kind: gt.ServerStreaming,
      },
      opusChainGetFilePaths: {
        name: "OpusChainGetFilePaths",
        I: p5n,
        O: m5n,
        kind: gt.Unary,
      },
      recordAcceptedPatch: {
        name: "RecordAcceptedPatch",
        I: f5n,
        O: g5n,
        kind: gt.Unary,
      },
      reportModeSelection: {
        name: "ReportModeSelection",
        I: u5n,
        O: d5n,
        kind: gt.Unary,
      },
    },
  },
  BTt = class R5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.startLine = 0),
        (this.text = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UsefulType"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "start_line", kind: "scalar", T: 5 },
        { no: 3, name: "text", kind: "scalar", T: 9 },
        { no: 4, name: "score", kind: "scalar", T: 1, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new R5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new R5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new R5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(R5e, e, t)
    }
  },
  N5n = class A5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.fileContents = ""),
        (this.implementationStartLineInclusive = 0),
        (this.implementationEndLineInclusive = 0),
        (this.applyPlan = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainApplyPlanRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "file_contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "implementation_start_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        {
          no: 4,
          name: "implementation_end_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        { no: 5, name: "apply_plan", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new A5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new A5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new A5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(A5e, e, t)
    }
  },
  R5n = class M5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainApplyPlanResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new M5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new M5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new M5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(M5e, e, t)
    }
  },
  A5n = class $5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.fileContents = ""),
        (this.usefulTypes = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SortUsefulTypesNaiveRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "file_contents", kind: "scalar", T: 9 },
        { no: 3, name: "query_range", kind: "message", T: M5n },
        { no: 4, name: "useful_types", kind: "message", T: BTt, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new $5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals($5e, e, t)
    }
  },
  M5n = class F5e extends _ {
    constructor(e) {
      super(),
        (this.startLineNumber = 0),
        (this.startColumn = 0),
        (this.endLineNumber = 0),
        (this.endColumn = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SortUsefulTypesNaiveRequest.IRange"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "start_line_number", kind: "scalar", T: 5 },
        { no: 2, name: "start_column", kind: "scalar", T: 5 },
        { no: 3, name: "end_line_number", kind: "scalar", T: 5 },
        { no: 4, name: "end_column", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new F5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new F5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new F5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(F5e, e, t)
    }
  },
  $5n = class O5e extends _ {
    constructor(e) {
      super(), (this.usefulTypes = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SortUsefulTypesNaiveResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "useful_types", kind: "message", T: BTt, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new O5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new O5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new O5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(O5e, e, t)
    }
  },
  F5n = class B5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.oldFileContents = ""),
        (this.implementationStartLineInclusive = 0),
        (this.implementationEndLineInclusive = 0),
        (this.newImplementationLines = []),
        (this.callSiteLines = []),
        (this.functionName = ""),
        (this.branchNotes = ""),
        (this.branchName = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainReflectRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "old_file_contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "implementation_start_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        {
          no: 4,
          name: "implementation_end_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        {
          no: 5,
          name: "new_implementation_lines",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
        { no: 6, name: "call_site_lines", kind: "scalar", T: 5, repeated: !0 },
        { no: 7, name: "function_name", kind: "scalar", T: 9 },
        { no: 8, name: "branch_notes", kind: "scalar", T: 9 },
        { no: 9, name: "branch_name", kind: "scalar", T: 9 },
        { no: 10, name: "lints", kind: "message", T: _B },
      ])
    }
    static fromBinary(e, t) {
      return new B5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new B5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new B5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(B5e, e, t)
    }
  },
  O5n = class _5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainReflectResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
        { no: 2, name: "decision", kind: "message", T: H5n },
      ])
    }
    static fromBinary(e, t) {
      return new _5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(_5e, e, t)
    }
  },
  B5n = class U5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainReflectResponse.AcceptDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new U5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new U5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new U5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(U5e, e, t)
    }
  },
  _5n = class H5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.Opus2ChainReflectResponse.RetryWithoutMoreInformationDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new H5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new H5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new H5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(H5e, e, t)
    }
  },
  U5n = class V5e extends _ {
    constructor(e) {
      super(), (this.codebaseQuestions = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.Opus2ChainReflectResponse.RetryWithCodebaseQuestionDecision"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "codebase_questions",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new V5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new V5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new V5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(V5e, e, t)
    }
  },
  H5n = class W5e extends _ {
    constructor(e) {
      super(), (this.decision = { case: void 0 }), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainReflectResponse.Decision"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "accept", kind: "message", T: B5n, oneof: "decision" },
        {
          no: 2,
          name: "retry_without_more_information",
          kind: "message",
          T: _5n,
          oneof: "decision",
        },
        {
          no: 3,
          name: "retry_with_codebase_question",
          kind: "message",
          T: U5n,
          oneof: "decision",
        },
      ])
    }
    static fromBinary(e, t) {
      return new W5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new W5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new W5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(W5e, e, t)
    }
  },
  V5n = class q5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.fileContents = ""),
        (this.implementationStartLineInclusive = 0),
        (this.implementationEndLineInclusive = 0),
        (this.diffHistory = []),
        (this.callSiteLines = []),
        (this.functionName = ""),
        (this.usefulTypes = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.V0ChainRunRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "file_contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "implementation_start_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        {
          no: 4,
          name: "implementation_end_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        { no: 5, name: "diff_history", kind: "message", T: $C, repeated: !0 },
        { no: 6, name: "call_site_lines", kind: "scalar", T: 5, repeated: !0 },
        { no: 7, name: "function_name", kind: "scalar", T: 9 },
        { no: 8, name: "useful_types", kind: "message", T: BTt, repeated: !0 },
        { no: 10, name: "prompt", kind: "message", T: R9i },
        { no: 9, name: "debug_info", kind: "message", T: hI },
      ])
    }
    static fromBinary(e, t) {
      return new q5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new q5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new q5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(q5e, e, t)
    }
  },
  W5n = class j5e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.V0ChainRunResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new j5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new j5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new j5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(j5e, e, t)
    }
  },
  R9i = class z5e extends _ {
    constructor(e) {
      super(),
        (this.text = ""),
        (this.contextItems = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HallucinatedFunctionsProtoPrompt"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
        { no: 2, name: "context_items", kind: "message", T: t7, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new z5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new z5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new z5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(z5e, e, t)
    }
  },
  A9i = class G5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.fileContents = ""),
        (this.implementationStartLineInclusive = 0),
        (this.implementationEndLineInclusive = 0),
        (this.diffHistory = []),
        (this.callSiteLines = []),
        (this.functionName = ""),
        (this.branchNotes = ""),
        (this.branchName = ""),
        (this.scoredCodebaseContext = []),
        (this.branchDiffFiles = []),
        (this.diffHistoryFiles = []),
        (this.planVersion = Yle.UNSPECIFIED),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "file_contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "implementation_start_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        {
          no: 4,
          name: "implementation_end_line_inclusive",
          kind: "scalar",
          T: 5,
        },
        { no: 5, name: "diff_history", kind: "message", T: $C, repeated: !0 },
        { no: 6, name: "call_site_lines", kind: "scalar", T: 5, repeated: !0 },
        { no: 7, name: "function_name", kind: "scalar", T: 9 },
        { no: 9, name: "debug_info", kind: "message", T: hI },
        { no: 20, name: "prompt", kind: "message", T: R9i },
        { no: 10, name: "branch_notes", kind: "scalar", T: 9 },
        { no: 11, name: "branch_name", kind: "scalar", T: 9 },
        {
          no: 12,
          name: "scored_codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
        { no: 13, name: "diff_to_base_branch", kind: "message", T: q5n },
        {
          no: 16,
          name: "branch_diff_files",
          kind: "message",
          T: M9i,
          repeated: !0,
        },
        {
          no: 14,
          name: "diff_history_files",
          kind: "message",
          T: M9i,
          repeated: !0,
        },
        {
          no: 8,
          name: "codebase_information",
          kind: "message",
          T: z5n,
          opt: !0,
        },
        { no: 15, name: "plan_version", kind: "enum", T: v.getEnumType(Yle) },
        { no: 17, name: "context_ast", kind: "message", T: f$i },
      ])
    }
    static fromBinary(e, t) {
      return new G5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new G5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new G5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(G5e, e, t)
    }
  },
  Yle
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.V0 = 1)] = "V0"),
    (i[(i.V1_MORE_CONTEXT_AND_GUIDELINES = 2)] =
      "V1_MORE_CONTEXT_AND_GUIDELINES")
})(Yle || (Yle = {})),
  v.util.setEnumType(Yle, "aiserver.v1.Opus2ChainPlanRequest.OpusPlanVersion", [
    { no: 0, name: "OPUS_PLAN_VERSION_UNSPECIFIED" },
    { no: 1, name: "OPUS_PLAN_VERSION_V0" },
    { no: 2, name: "OPUS_PLAN_VERSION_V1_MORE_CONTEXT_AND_GUIDELINES" },
  ])
var q5n = class J5e extends _ {
    constructor(e) {
      super(),
        (this.fileDiffs = []),
        (this.commits = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest.BranchDiff"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file_diffs", kind: "message", T: j5n, repeated: !0 },
        { no: 2, name: "commits", kind: "message", T: XN, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new J5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new J5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new J5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(J5e, e, t)
    }
  },
  j5n = class K5e extends _ {
    constructor(e) {
      super(),
        (this.fileName = ""),
        (this.diff = ""),
        (this.tooBig = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest.BranchDiff.FileDiff"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file_name", kind: "scalar", T: 9 },
        { no: 2, name: "diff", kind: "scalar", T: 9 },
        { no: 3, name: "too_big", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new K5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new K5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new K5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(K5e, e, t)
    }
  },
  M9i = class Y5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.text = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest.File"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new Y5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Y5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Y5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Y5e, e, t)
    }
  },
  z5n = class X5e extends _ {
    constructor(e) {
      super(), (this.files = []), (this.qa = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "files", kind: "message", T: G5n, repeated: !0 },
        { no: 2, name: "qa", kind: "message", T: J5n, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new X5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new X5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new X5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(X5e, e, t)
    }
  },
  G5n = class Q5e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.contents = ""),
        (this.interestingLines = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation.File"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "contents", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "interesting_lines",
          kind: "scalar",
          T: 5,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new Q5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Q5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Q5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Q5e, e, t)
    }
  },
  J5n = class Z5e extends _ {
    constructor(e) {
      super(),
        (this.question = ""),
        (this.answer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation.QA"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "question", kind: "scalar", T: 9 },
        { no: 2, name: "answer", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new Z5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Z5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Z5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Z5e, e, t)
    }
  },
  Cko = class e6e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.ExtractFunctionNameFromImplementationPromptProps"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new e6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new e6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new e6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(e6e, e, t)
    }
  },
  K5n = class t6e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new t6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new t6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new t6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(t6e, e, t)
    }
  },
  Sko = class i6e extends _ {
    constructor(e) {
      super(),
        (this.examples = []),
        (this.tokenLimit = 0),
        (this.tokenizer = ""),
        (this.chainOfThought = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.CodebaseKnowledgeCmdKInstructionFewShotPromptProps"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "examples", kind: "message", T: Y5n, repeated: !0 },
        { no: 2, name: "current", kind: "message", T: $9i },
        { no: 8, name: "token_limit", kind: "scalar", T: 5 },
        { no: 9, name: "tokenizer", kind: "scalar", T: 9 },
        { no: 10, name: "chain_of_thought", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new i6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new i6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new i6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(i6e, e, t)
    }
  },
  Y5n = class s6e extends _ {
    constructor(e) {
      super(),
        (this.instruction = ""),
        (this.reasoning = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.CodebaseKnowledgeCmdKInstructionFewShotPromptProps.Example"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "props", kind: "message", T: $9i },
        { no: 2, name: "instruction", kind: "scalar", T: 9 },
        { no: 3, name: "reasoning", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new s6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new s6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new s6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(s6e, e, t)
    }
  },
  $9i = class n6e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.currentFileLines = []),
        (this.startLineOneIndexedInclusive = 0),
        (this.endLineOneIndexedExclusive = 0),
        (this.groundTruthLines = []),
        (this.prHistory = []),
        (this.scoredCodebaseContext = []),
        (this.tokenLimit = 0),
        (this.tokenizer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CodebaseKnowledgeCmdKInstructionPromptProps"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        {
          no: 2,
          name: "current_file_lines",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
        {
          no: 3,
          name: "start_line_one_indexed_inclusive",
          kind: "scalar",
          T: 5,
        },
        { no: 4, name: "end_line_one_indexed_exclusive", kind: "scalar", T: 5 },
        {
          no: 5,
          name: "ground_truth_lines",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
        { no: 6, name: "pr_history", kind: "message", T: F9i, repeated: !0 },
        {
          no: 7,
          name: "scored_codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
        { no: 8, name: "token_limit", kind: "scalar", T: 5 },
        { no: 9, name: "tokenizer", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new n6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new n6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new n6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(n6e, e, t)
    }
  },
  xko = class r6e extends _ {
    constructor(e) {
      super(), (this.codebaseContext = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ScoredCodebaseContext"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new r6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new r6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new r6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(r6e, e, t)
    }
  },
  F9i = class o6e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.originalLines = []),
        (this.newLines = []),
        (this.startLineOneIndexed = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.PrHistoryItem"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "original_lines", kind: "scalar", T: 9, repeated: !0 },
        { no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
        { no: 5, name: "start_line_one_indexed", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new o6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new o6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new o6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(o6e, e, t)
    }
  },
  kko = class a6e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.currentFileLines = []),
        (this.startLineOneIndexedInclusive = 0),
        (this.endLineOneIndexedExclusive = 0),
        (this.instruction = ""),
        (this.prHistory = []),
        (this.scoredCodebaseContext = []),
        (this.tokenLimit = 0),
        (this.tokenizer = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CodebaseKnowledgeCmdKPromptProps"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        {
          no: 2,
          name: "current_file_lines",
          kind: "scalar",
          T: 9,
          repeated: !0,
        },
        {
          no: 3,
          name: "start_line_one_indexed_inclusive",
          kind: "scalar",
          T: 5,
        },
        { no: 4, name: "end_line_one_indexed_exclusive", kind: "scalar", T: 5 },
        { no: 5, name: "instruction", kind: "scalar", T: 9 },
        { no: 6, name: "pr_history", kind: "message", T: F9i, repeated: !0 },
        {
          no: 7,
          name: "scored_codebase_context",
          kind: "message",
          T: im,
          repeated: !0,
        },
        { no: 8, name: "token_limit", kind: "scalar", T: 5 },
        { no: 9, name: "tokenizer", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new a6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new a6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new a6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(a6e, e, t)
    }
  },
  Eko = class l6e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Opus2ChainPlanPromptProps"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "request", kind: "message", T: A9i },
        { no: 2, name: "plan", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new l6e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new l6e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new l6e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(l6e, e, t)
    }
  },
  _Tt = {
    typeName: "aiserver.v1.HallucinatedFunctionsService",
    methods: {
      v0ChainRun: {
        name: "V0ChainRun",
        I: V5n,
        O: W5n,
        kind: gt.ServerStreaming,
      },
      opus2ChainPlan: {
        name: "Opus2ChainPlan",
        I: A9i,
        O: K5n,
        kind: gt.ServerStreaming,
      },
      opus2ChainApplyPlan: {
        name: "Opus2ChainApplyPlan",
        I: N5n,
        O: R5n,
        kind: gt.ServerStreaming,
      },
      opus2ChainReflect: {
        name: "Opus2ChainReflect",
        I: F5n,
        O: O5n,
        kind: gt.ServerStreaming,
      },
      sortUsefulTypesNaive: {
        name: "SortUsefulTypesNaive",
        I: A5n,
        O: $5n,
        kind: gt.Unary,
      },
    },
  };

  return {
    P1,
    N9i,
    Kle,
    OTt,
    _Tt,
  }
}
