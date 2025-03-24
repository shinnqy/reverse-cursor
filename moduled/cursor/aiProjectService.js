// @ts-check

// 240224
export function createAIProjectService(params) {
  const {v, _, zr, K9, D$, Re, V, wn, Ka, ho, dc, TR, rt, n6n, __decorate, __param, $h, CR, ei, eg, g2, p0, Br, cv, Ti, Ve } = params;

  var _g
  ;(function (i) {
    ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
      (i[(i.READ_WRITE_FILE = 1)] = "READ_WRITE_FILE"),
      (i[(i.RUN_TERM = 2)] = "RUN_TERM"),
      (i[(i.CREATE_RM_FILES = 3)] = "CREATE_RM_FILES")
  })(_g || (_g = {})),
    v.util.setEnumType(_g, "aiserver.v1.AiProjectStepType", [
      { no: 0, name: "AI_PROJECT_STEP_TYPE_UNSPECIFIED" },
      { no: 1, name: "AI_PROJECT_STEP_TYPE_READ_WRITE_FILE" },
      { no: 2, name: "AI_PROJECT_STEP_TYPE_RUN_TERM" },
      { no: 3, name: "AI_PROJECT_STEP_TYPE_CREATE_RM_FILES" },
    ])
  var NKn = class h6e extends _ {
      constructor(e) {
        super(), (this.prompt = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectAgentInitRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          { no: 2, name: "prompt", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new h6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new h6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new h6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(h6e, e, t)
      }
    },
    aue = class u6e extends _ {
      constructor(e) {
        super(),
          (this.fullUserMessage = ""),
          (this.fullBotMessage = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.MessagePayload"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "full_user_message", kind: "scalar", T: 9 },
          { no: 2, name: "full_bot_message", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new u6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new u6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new u6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(u6e, e, t)
      }
    },
    RKn = class d6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectClarification"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "output", kind: "scalar", T: 9, oneof: "response" },
          { no: 2, name: "thought", kind: "scalar", T: 9, oneof: "response" },
          {
            no: 3,
            name: "message_payload",
            kind: "message",
            T: aue,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new d6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new d6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new d6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(d6e, e, t)
      }
    },
    AKn = class f6e extends _ {
      constructor(e) {
        super(),
          (this.clarificationResponse = ""),
          (this.previousMessages = []),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectClarificationRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          { no: 2, name: "clarification_response", kind: "scalar", T: 9 },
          {
            no: 3,
            name: "previous_messages",
            kind: "message",
            T: K9,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new f6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new f6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new f6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(f6e, e, t)
      }
    },
    vKi = class g6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectClarificationResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "clarification",
            kind: "message",
            T: RKn,
            oneof: "response",
          },
          {
            no: 2,
            name: "repeat_clarification",
            kind: "scalar",
            T: 8,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new g6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new g6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new g6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(g6e, e, t)
      }
    },
    MKn = class p6e extends _ {
      constructor(e) {
        super(), (this.previousMessages = []), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectAgentPlanRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          {
            no: 3,
            name: "previous_messages",
            kind: "message",
            T: K9,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new p6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new p6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new p6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(p6e, e, t)
      }
    },
    yKi = class m6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectAgentPlanResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
          { no: 2, name: "output", kind: "scalar", T: 9, oneof: "response" },
          {
            no: 3,
            name: "message_payload",
            kind: "message",
            T: aue,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new m6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new m6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new m6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(m6e, e, t)
      }
    },
    $Kn = class b6e extends _ {
      constructor(e) {
        super(),
          (this.previousMessages = []),
          (this.feedbackOrProgress = ""),
          (this.forceMoveToNextStep = !1),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectPlanFeedbackRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          {
            no: 2,
            name: "previous_messages",
            kind: "message",
            T: K9,
            repeated: !0,
          },
          { no: 3, name: "feedback_or_progress", kind: "scalar", T: 9 },
          { no: 4, name: "force_move_to_next_step", kind: "scalar", T: 8 },
        ])
      }
      static fromBinary(e, t) {
        return new b6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new b6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new b6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(b6e, e, t)
      }
    },
    FKn = class v6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectPlanFeedbackResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "revised_plan",
            kind: "message",
            T: yKi,
            oneof: "response",
          },
          {
            no: 2,
            name: "repeat_feedback",
            kind: "scalar",
            T: 8,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new v6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new v6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new v6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(v6e, e, t)
      }
    },
    OKn = class y6e extends _ {
      constructor(e) {
        super(),
          (this.description = ""),
          (this.spec = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectBreakdownRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          { no: 2, name: "description", kind: "scalar", T: 9 },
          { no: 3, name: "spec", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new y6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new y6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new y6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(y6e, e, t)
      }
    },
    wKi = class w6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectBreakdownResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
          { no: 2, name: "step", kind: "message", T: BKn, oneof: "response" },
          {
            no: 3,
            name: "message_payload",
            kind: "message",
            T: aue,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new w6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new w6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new w6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(w6e, e, t)
      }
    },
    BKn = class C6e extends _ {
      constructor(e) {
        super(),
          (this.stepNumber = 0),
          (this.stepDescription = ""),
          (this.stepType = _g.UNSPECIFIED),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectBreakdownResponse.Step"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "step_number", kind: "scalar", T: 5 },
          { no: 2, name: "step_description", kind: "scalar", T: 9 },
          { no: 3, name: "step_type", kind: "enum", T: v.getEnumType(_g) },
        ])
      }
      static fromBinary(e, t) {
        return new C6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new C6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new C6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(C6e, e, t)
      }
    },
    _Kn = class S6e extends _ {
      constructor(e) {
        super(),
          (this.previousMessages = []),
          (this.feedbackOrProgress = ""),
          (this.forceMoveToNextStep = !1),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectBreakdownFeedbackRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          {
            no: 2,
            name: "previous_messages",
            kind: "message",
            T: K9,
            repeated: !0,
          },
          { no: 3, name: "feedback_or_progress", kind: "scalar", T: 9 },
          { no: 4, name: "force_move_to_next_step", kind: "scalar", T: 8 },
        ])
      }
      static fromBinary(e, t) {
        return new S6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new S6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new S6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(S6e, e, t)
      }
    },
    UKn = class x6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectBreakdownFeedbackResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "revised_breakdown",
            kind: "message",
            T: wKi,
            oneof: "response",
          },
          {
            no: 2,
            name: "repeat_feedback",
            kind: "scalar",
            T: 8,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new x6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new x6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new x6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(x6e, e, t)
      }
    },
    HKn = class k6e extends _ {
      constructor(e) {
        super(),
          (this.stepDescription = ""),
          (this.projectPlan = ""),
          (this.projectBreakdown = []),
          (this.stepType = _g.UNSPECIFIED),
          (this.shellType = D$.UNSPECIFIED),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          { no: 2, name: "step_description", kind: "scalar", T: 9 },
          { no: 3, name: "project_plan", kind: "scalar", T: 9 },
          {
            no: 4,
            name: "project_breakdown",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          { no: 5, name: "step_type", kind: "enum", T: v.getEnumType(_g) },
          { no: 6, name: "shell_type", kind: "enum", T: v.getEnumType(D$) },
        ])
      }
      static fromBinary(e, t) {
        return new k6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new k6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new k6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(k6e, e, t)
      }
    },
    CKi = class E6e extends _ {
      constructor(e) {
        super(),
          (this.response = { case: void 0 }),
          (this.stepType = _g.UNSPECIFIED),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
          { no: 2, name: "output", kind: "scalar", T: 9, oneof: "response" },
          {
            no: 3,
            name: "message_payload",
            kind: "message",
            T: aue,
            oneof: "response",
          },
          {
            no: 5,
            name: "step_payload",
            kind: "message",
            T: zKn,
            oneof: "response",
          },
          { no: 4, name: "step_type", kind: "enum", T: v.getEnumType(_g) },
        ])
      }
      static fromBinary(e, t) {
        return new E6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new E6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new E6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(E6e, e, t)
      }
    },
    VKn = class I6e extends _ {
      constructor(e) {
        super(), (this.filename = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.WriteCode"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "filename", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new I6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new I6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new I6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(I6e, e, t)
      }
    },
    WKn = class D6e extends _ {
      constructor(e) {
        super(), (this.thought = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.ReviseCode"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "thought", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new D6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new D6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new D6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(D6e, e, t)
      }
    },
    qKn = class T6e extends _ {
      constructor(e) {
        super(),
          (this.commandBatchUuid = ""),
          (this.command = ""),
          (this.response = ""),
          (this.text = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.RunTerm"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "command_batch_uuid", kind: "scalar", T: 9 },
          { no: 2, name: "command", kind: "scalar", T: 9 },
          { no: 3, name: "response", kind: "scalar", T: 9 },
          { no: 4, name: "text", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new T6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new T6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new T6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(T6e, e, t)
      }
    },
    jKn = class P6e extends _ {
      constructor(e) {
        super(), (this.payload = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.CreatingFiles"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "filename", kind: "scalar", T: 9, oneof: "payload" },
          { no: 2, name: "directory", kind: "scalar", T: 9, oneof: "payload" },
        ])
      }
      static fromBinary(e, t) {
        return new P6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new P6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new P6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(P6e, e, t)
      }
    },
    iAo = class L6e extends _ {
      constructor(e) {
        super(), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.Nothing"
      }
      static {
        this.fields = v.util.newFieldList(() => [])
      }
      static fromBinary(e, t) {
        return new L6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new L6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new L6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(L6e, e, t)
      }
    },
    zKn = class N6e extends _ {
      constructor(e) {
        super(), (this.payload = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponse.StepPayload"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 5,
            name: "write_code",
            kind: "message",
            T: VKn,
            oneof: "payload",
          },
          { no: 6, name: "run_term", kind: "message", T: qKn, oneof: "payload" },
          {
            no: 7,
            name: "creating_files",
            kind: "message",
            T: jKn,
            oneof: "payload",
          },
          {
            no: 8,
            name: "revise_code",
            kind: "message",
            T: WKn,
            oneof: "payload",
          },
        ])
      }
      static fromBinary(e, t) {
        return new N6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new N6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new N6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(N6e, e, t)
      }
    },
    GKn = class R6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepResponseWrapped"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "real_response",
            kind: "message",
            T: CKi,
            oneof: "response",
          },
          {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new R6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new R6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new R6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(R6e, e, t)
      }
    },
    JKn = class A6e extends _ {
      constructor(e) {
        super(),
          (this.stepDescription = ""),
          (this.projectPlan = ""),
          (this.projectBreakdown = []),
          (this.stepType = _g.UNSPECIFIED),
          (this.shellType = D$.UNSPECIFIED),
          (this.previousFeedbackMessages = []),
          (this.forceMoveToNextStep = !1),
          (this.feedbackPayload = { case: void 0 }),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepFeedbackRequest"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "model_details", kind: "message", T: zr },
          { no: 2, name: "step_description", kind: "scalar", T: 9 },
          { no: 3, name: "project_plan", kind: "scalar", T: 9 },
          {
            no: 4,
            name: "project_breakdown",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          { no: 5, name: "step_type", kind: "enum", T: v.getEnumType(_g) },
          { no: 6, name: "shell_type", kind: "enum", T: v.getEnumType(D$) },
          {
            no: 7,
            name: "previous_feedback_messages",
            kind: "message",
            T: K9,
            repeated: !0,
          },
          { no: 8, name: "force_move_to_next_step", kind: "scalar", T: 8 },
          {
            no: 9,
            name: "modify_code_payload",
            kind: "message",
            T: KKn,
            oneof: "feedback_payload",
          },
        ])
      }
      static fromBinary(e, t) {
        return new A6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new A6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new A6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(A6e, e, t)
      }
    },
    KKn = class M6e extends _ {
      constructor(e) {
        super(),
          (this.filesToModify = []),
          (this.feedbackText = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName =
          "aiserver.v1.AiProjectStepFeedbackRequest.ModifyCodePayload"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "files_to_modify", kind: "scalar", T: 9, repeated: !0 },
          { no: 2, name: "feedback_text", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new M6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new M6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new M6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(M6e, e, t)
      }
    },
    YKn = class $6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepFeedbackResponse"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "response_from_feedback",
            kind: "message",
            T: CKi,
            oneof: "response",
          },
          {
            no: 2,
            name: "repeat_feedback",
            kind: "scalar",
            T: 8,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new $6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new $6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new $6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals($6e, e, t)
      }
    },
    XKn = class F6e extends _ {
      constructor(e) {
        super(), (this.response = { case: void 0 }), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectStepFeedbackResponseWrapped"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "real_response",
            kind: "message",
            T: YKn,
            oneof: "response",
          },
          {
            no: 2,
            name: "background_task_uuid",
            kind: "scalar",
            T: 9,
            oneof: "response",
          },
        ])
      }
      static fromBinary(e, t) {
        return new F6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new F6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new F6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(F6e, e, t)
      }
    },
    sAo = class O6e extends _ {
      constructor(e) {
        super(), (this.code = ""), (this.path = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "aiserver.v1.AiProjectAgentWriteCode"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 2, name: "code", kind: "scalar", T: 9 },
          { no: 3, name: "path", kind: "scalar", T: 9 },
          { no: 4, name: "message_payload", kind: "message", T: aue },
        ])
      }
      static fromBinary(e, t) {
        return new O6e().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new O6e().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new O6e().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(O6e, e, t)
      }
    },
    k5 = "\u26E2Thought\u2624",
    eA = "\u26E2/Thought\u2624",
    PFt = "<MIRRORED_FILE>",
    LFt = "</MIRRORED_FILE>",
    SKi = Re("aiProjectService"),
    NFt = class extends V {
      constructor(e, t, s, n, r, o, a, l, c, h) {
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
          (this.r = h)
      }
      createProject(e, t) {
        throw new Error("Method not implemented.")
      }
      s({ currentTabId: e, assistantBubbleId: t }) {
        const s = { type: "codeInterpreter", bubbleId: t, tabId: e },
          [n, r] = this.m.registerNewGeneration({ metadata: s })
        return { generationUUID: n, abortController: r }
      }
      async createAiProjectClient(e) {
        throw new Error(
          "DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED. DEPRECATED.",
        )
      }
      getModelDetails() {
        let e = this.g.getModel() ?? void 0,
          t = this.b.getApiKeyForModel(e)
        const s = this.g.getUseApiKeyForModel(e),
          n = this.b.reactivePrivacyMode(),
          r = this.f.applicationUserPersistentStorage.azureState
        return (
          (!s || !t) && (t = void 0),
          new zr({
            apiKey: t,
            modelName: e,
            azureState: r,
            openaiApiBaseUrl:
              this.f.applicationUserPersistentStorage.openAIBaseUrl,
          })
        )
      }
      appendToSolidStore(e, t, s) {
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: n }) => n === e,
          "bubbles",
          ({ id: n }) => n === t,
          "text",
          (n) => (n ? n + s : s),
        )
      }
      replaceStringSolidStore(e, t, s) {
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: n }) => n === e,
          "bubbles",
          ({ id: n }) => n === t,
          "text",
          s,
        )
      }
      replaceServerChat(e, t, s) {
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: n, tabState: r }) => n === e && r === "codeInterpreter",
          "bubbles",
          ({ id: n }) => n === t,
          "serverMessages",
          s,
        )
      }
      getHelperMods({ currentTabId: e, userBubbleId: t, assistantBubbleId: s }) {
        return {
          appendAssistant: (a) => this.appendToSolidStore(e, s, a),
          replaceUserServer: (...a) => this.replaceServerChat(e, t, a),
          replaceAssistantServer: (...a) => this.replaceServerChat(e, s, a),
        }
      }
      async *streamWithGenerationHandler(e, t) {
        try {
          for await (const s of e) yield s
        } catch (s) {
          console.error(s)
        } finally {
          this.f.setNonPersistentStorage("inprogressAIGenerations", (s) =>
            s.filter((n) => n.generationUUID !== t),
          ),
            this.q.persistSelectedChat(!0)
        }
      }
      async startProject(
        e,
        { currentTabId: t, userBubbleId: s, assistantBubbleId: n },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const r = await this.a,
          { generationUUID: o, abortController: a } = this.s({
            assistantBubbleId: n,
            currentTabId: t,
          }),
          l = this.streamWithGenerationHandler(
            r.aiProjectAgentInit(
              { prompt: e, modelDetails: this.getModelDetails() },
              { signal: a.signal, headers: wn(o) },
            ),
            o,
          ),
          {
            appendAssistant: c,
            replaceUserServer: h,
            replaceAssistantServer: u,
          } = this.getHelperMods({
            currentTabId: t,
            userBubbleId: s,
            assistantBubbleId: n,
          })
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: g }) => g === t,
          "additionalData",
          "simpleDescription",
          e,
        )
        let d = !1
        try {
          for await (const g of l)
            if (g.response.case === "clarification") {
              const p = g.response.value.response
              p.case === "thought"
                ? (d || (c(k5), (d = !0)), c(p.value))
                : p.case === "output"
                  ? (d && (c(eA), (d = !1)), c(p.value))
                  : p.case === "messagePayload" &&
                    (h({
                      messageType: Ka.USER,
                      content: p.value.fullUserMessage,
                    }),
                    u({
                      messageType: Ka.ASSISTANT,
                      content: p.value.fullBotMessage,
                    }))
            } else if (g.response.case === "repeatClarification")
              return { clarify: g.response.value }
          return { clarify: !1 }
        } finally {
          this.f.setNonPersistentStorage("inprogressAIGenerations", (g) =>
            g.filter((p) => p.generationUUID !== o),
          )
        }
      }
      getPreviousMessages({ currentTabId: e, lastBubbleId: t }, s) {
        const n = this.q.chatData.codeInterpreterTabs.find(
          ({ tabId: o }) => o === e,
        )?.bubbles
        if (n === void 0)
          throw new Error(
            `Could not find bubbles when getting previous project messages! - ${e} - ${t}`,
          )
        const r = []
        for (const o of n) {
          if (o.id === t) break
          ;(s !== void 0 && !s(o)) || r.push(...o.serverMessages)
        }
        return r
      }
      async clarifyProject(
        e,
        { currentTabId: t, userBubbleId: s, assistantBubbleId: n },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const r = this.getPreviousMessages({ currentTabId: t, lastBubbleId: s }),
          o = await this.a,
          { generationUUID: a, abortController: l } = this.s({
            assistantBubbleId: n,
            currentTabId: t,
          }),
          c = this.streamWithGenerationHandler(
            o.aiProjectClarification(
              {
                modelDetails: this.getModelDetails(),
                previousMessages: r,
                clarificationResponse: e,
              },
              { signal: l.signal, headers: wn(a) },
            ),
            a,
          ),
          {
            appendAssistant: h,
            replaceUserServer: u,
            replaceAssistantServer: d,
          } = this.getHelperMods({
            currentTabId: t,
            userBubbleId: s,
            assistantBubbleId: n,
          })
        let g = !1
        for await (const p of c)
          if (p.response.case === "clarification") {
            const m = p.response.value.response
            m.case === "thought"
              ? (g || (h(k5), (g = !0)), h(m.value))
              : m.case === "output"
                ? (g && (h(eA), (g = !1)), h(m.value))
                : m.case === "messagePayload" &&
                  (u({ messageType: Ka.USER, content: m.value.fullUserMessage }),
                  d({
                    messageType: Ka.ASSISTANT,
                    content: m.value.fullBotMessage,
                  }))
          } else if (p.response.case === "repeatClarification")
            return { clarify: p.response.value }
        return { clarify: !1 }
      }
      async getProjectPlan(e, t) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const s = this.getPreviousMessages({ currentTabId: e, lastBubbleId: t }),
          { appendAssistant: n, replaceAssistantServer: r } = this.getHelperMods({
            currentTabId: e,
            userBubbleId: t,
            assistantBubbleId: t,
          }),
          o = await this.a,
          { generationUUID: a, abortController: l } = this.s({
            assistantBubbleId: t,
            currentTabId: e,
          }),
          c = this.streamWithGenerationHandler(
            o.aiProjectPlan(
              { modelDetails: this.getModelDetails(), previousMessages: s },
              { signal: l.signal, headers: wn(a) },
            ),
            a,
          )
        let h = "",
          u = !1
        for await (const d of c) {
          const g = d.response
          g.case === "thought"
            ? (u || (n(k5), (u = !0)), n(g.value))
            : g.case === "output"
              ? (u && (n(eA), (u = !1)), n(g.value), (h += g.value))
              : g.case === "messagePayload" &&
                r(
                  { messageType: Ka.USER, content: g.value.fullUserMessage },
                  { messageType: Ka.ASSISTANT, content: g.value.fullBotMessage },
                )
        }
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: d }) => d === e,
          "additionalData",
          "aiProjectPlan",
          h,
        ),
          u && n(eA),
          n(`

  Any feedback/suggestions on the spec?

  `)
      }
      async getProjectPlanFeedback(
        e,
        { currentTabId: t, assistantBubbleId: s, userBubbleId: n },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const r = this.getPreviousMessages({ currentTabId: t, lastBubbleId: n }),
          o = await this.a,
          { generationUUID: a, abortController: l } = this.s({
            assistantBubbleId: s,
            currentTabId: t,
          }),
          c = this.streamWithGenerationHandler(
            o.aiProjectPlanFeedback(
              {
                modelDetails: this.getModelDetails(),
                previousMessages: r,
                feedbackOrProgress: e,
              },
              { signal: l.signal, headers: wn(a) },
            ),
            a,
          )
        let h = !1
        const {
          appendAssistant: u,
          replaceUserServer: d,
          replaceAssistantServer: g,
        } = this.getHelperMods({
          currentTabId: t,
          userBubbleId: n,
          assistantBubbleId: s,
        })
        let p = !1,
          m = ""
        for await (const b of c)
          if (b.response.case === "revisedPlan") {
            const y = b.response.value.response
            y.case === "thought"
              ? (p || (u(k5), (p = !0)), u(y.value))
              : y.case === "output"
                ? (p && (u(eA), (p = !1)), u(y.value), (m += y.value))
                : y.case === "messagePayload" &&
                  (d({ messageType: Ka.USER, content: y.value.fullUserMessage }),
                  g({
                    messageType: Ka.ASSISTANT,
                    content: y.value.fullBotMessage,
                  }))
          } else b.response.case === "repeatFeedback" && (h = b.response.value)
        return (
          h &&
            (this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: b }) => b === t,
              "additionalData",
              "aiProjectPlan",
              (b) =>
                b
                  ? b +
                    `

  _____

  After incorporating feedback:

  ` +
                    m
                  : m,
            ),
            u(`

  Any further feedback on the revised plan?

  `)),
          console.log(
            "FULL PLAN",
            this.q.chatData.codeInterpreterTabs.find(({ tabId: b }) => b === t)
              ?.additionalData.aiProjectPlan,
          ),
          { repeatStep: h }
        )
      }
      async getBreakdown(e, t) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        let s = 0
        const {
            appendAssistant: n,
            replaceAssistantServer: r,
            replaceUserServer: o,
          } = this.getHelperMods({
            currentTabId: e,
            userBubbleId: t,
            assistantBubbleId: t,
          }),
          a = (b) =>
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: y }) => y === e,
              "additionalData",
              "aiProjectSteps",
              (y) => ((s = y.length), [...y, { description: "", stepType: b }]),
            ),
          l = (b) =>
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: y }) => y === e,
              "additionalData",
              "aiProjectSteps",
              s,
              "description",
              (y) => y + b,
            ),
          c = this.q.chatData.codeInterpreterTabs.find(({ tabId: b }) => b === e)
        if (c === void 0) throw new Error(`No tab details found for tab ${e}`)
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: b }) => b === e,
          "additionalData",
          "aiProjectSteps",
          [],
        )
        const h = await this.a,
          { generationUUID: u, abortController: d } = this.s({
            assistantBubbleId: t,
            currentTabId: e,
          }),
          g = this.streamWithGenerationHandler(
            h.aiProjectBreakdown(
              {
                modelDetails: this.getModelDetails(),
                description: c.additionalData.simpleDescription,
                spec: c.additionalData.aiProjectPlan,
              },
              { signal: d.signal, headers: wn(u) },
            ),
            u,
          )
        let p = !1,
          m = -1
        for await (const b of g) {
          const y = b.response
          y.case === "thought"
            ? (p || (n(k5), (p = !0)), n(y.value))
            : y.case === "step"
              ? (p && (n(eA), (p = !1)),
                y.value.stepNumber !== m &&
                  (a(y.value.stepType), (m = y.value.stepNumber)),
                l(y.value.stepDescription),
                n(y.value.stepDescription))
              : y.case === "messagePayload" &&
                (o({ messageType: Ka.USER, content: y.value.fullUserMessage }),
                r({ messageType: Ka.ASSISTANT, content: y.value.fullBotMessage }))
        }
      }
      async getBreakdownFeedback(
        e,
        { currentTabId: t, assistantBubbleId: s, userBubbleId: n },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        let r = 0
        const {
            appendAssistant: o,
            replaceAssistantServer: a,
            replaceUserServer: l,
          } = this.getHelperMods({
            currentTabId: t,
            userBubbleId: s,
            assistantBubbleId: s,
          }),
          c = (x) =>
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: k }) => k === t,
              "additionalData",
              "aiProjectSteps",
              (k) => ((r = k.length), [...k, { description: "", stepType: x }]),
            ),
          h = () =>
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: x }) => x === t,
              "additionalData",
              "aiProjectSteps",
              [],
            ),
          u = (x) =>
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: k }) => k === t,
              "additionalData",
              "aiProjectSteps",
              r,
              "description",
              (k) => k + x,
            )
        if (
          this.q.chatData.codeInterpreterTabs.find(({ tabId: x }) => x === t) ===
          void 0
        )
          throw new Error(`No tab details found for tab ${t}`)
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: x }) => x === t,
          "additionalData",
          "aiProjectSteps",
          [],
        )
        const g = this.getPreviousMessages(
            { currentTabId: t, lastBubbleId: n },
            (x) =>
              x.bubbleState === ho.breakdown ||
              x.bubbleState === ho.breakdownFeedback,
          ),
          p = await this.a,
          { generationUUID: m, abortController: b } = this.s({
            assistantBubbleId: s,
            currentTabId: t,
          }),
          y = this.streamWithGenerationHandler(
            p.aiProjectBreakdownFeedback(
              {
                modelDetails: this.getModelDetails(),
                previousMessages: g,
                feedbackOrProgress: e,
              },
              { signal: b.signal, headers: wn(m) },
            ),
            m,
          )
        let w = !1,
          C = !1,
          S = -1
        for await (const x of y) {
          const k = x.response
          if (k.case === "revisedBreakdown") {
            const E = k.value.response
            E.case === "thought"
              ? (C || (o(k5), (C = !0)), o(E.value))
              : E.case === "step"
                ? (C && (o(eA), (C = !1)),
                  S === -1 && h(),
                  E.value.stepNumber !== S &&
                    (c(E.value.stepType), (S = E.value.stepNumber)),
                  u(E.value.stepDescription),
                  o(E.value.stepDescription))
                : E.case === "messagePayload" &&
                  (l({ messageType: Ka.USER, content: E.value.fullUserMessage }),
                  a({
                    messageType: Ka.ASSISTANT,
                    content: E.value.fullBotMessage,
                  }))
          } else k.case === "repeatFeedback" && (w = k.value)
        }
        return { repeatStep: w }
      }
      async performStep(
        e,
        { currentTabId: t, userBubbleId: s, assistantBubbleId: n },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const r = this.q.chatData.codeInterpreterTabs.find(
          ({ tabId: w }) => w === t,
        )
        if (r === void 0) throw new Error(`No tab data found for tab ${t}`)
        const { appendAssistant: o, replaceAssistantServer: a } =
          this.getHelperMods({
            currentTabId: t,
            userBubbleId: s,
            assistantBubbleId: n,
          })
        if (
          this.q.chatData.codeInterpreterTabs
            .find(({ tabId: w }) => w === t)
            ?.bubbles.find(
              ({ id: w, type: C, bubbleState: S }) =>
                w === n && C === dc.AI_CODE_INTERPRETER && S === ho.steps,
            ) === void 0
        )
          throw new Error(`No bubble found for bubble ${n}`)
        const c = r.additionalData.aiProjectSteps,
          h = await this.a,
          { generationUUID: u, abortController: d } = this.s({
            assistantBubbleId: n,
            currentTabId: t,
          })
        console.log("RUNNING STEP", c[e].description)
        const g = h.aiProjectStep(
            {
              modelDetails: this.getModelDetails(),
              stepDescription: c[e].description,
              stepType: c[e].stepType,
              shellType: D$.BASH,
              projectBreakdown: r.additionalData.aiProjectSteps.map(
                (w) => w.description,
              ),
              projectPlan: r.additionalData.aiProjectPlan,
            },
            { signal: d.signal, headers: wn(u) },
          ),
          { stream: p, toolformerSessionFuture: m } =
            this.h.handleTaskWithSessionData(g, d.signal)
        m.then((w) => {
          w.onDidTerminalChangeEvent((C) => {
            console.log("HANDLING PAYLOAD", C),
              C.type === TR.newTerminal
                ? (o(`

  ### Terminal

  `),
                  o("```"))
                : C.type === TR.writingCommand
                  ? o(`
  $ ${C.value}
  `)
                  : C.type === TR.writingResponse
                    ? o(C.value)
                    : C.type === TR.endTerminal && o("\n```\n\n")
          })
        })
        let b = !1,
          y = !0
        for await (const w of p)
          if (w.response.case === "thought")
            b || (o(k5), (b = !0)), o(w.response.value)
          else if (w.response.case === "output")
            b && (o(eA), (b = !1)), o(w.response.value)
          else if (w.response.case === "messagePayload")
            a(
              new K9({
                messageType: Ka.USER,
                content: w.response.value.fullUserMessage,
              }),
              new K9({
                messageType: Ka.ASSISTANT,
                content: w.response.value.fullBotMessage,
              }),
            )
          else if (w.response.case === "stepPayload") {
            const C = w.response.value
            if (C.payload.case !== "runTerm") {
              if (C.payload.case === "writeCode")
                this.q.setChatData(
                  "codeInterpreterTabs",
                  ({ tabId: S }) => S === t,
                  "additionalData",
                  "aiProjectSteps",
                  e,
                  "stepPayload",
                  {
                    type: _g.READ_WRITE_FILE,
                    fileName: C.payload.value.filename,
                  },
                ),
                  o(PFt + C.payload.value.filename + LFt)
              else if (C.payload.case === "creatingFiles") {
                const S = C.payload.value.payload
                this.q.setChatData(
                  "codeInterpreterTabs",
                  ({ tabId: x }) => x === t,
                  "additionalData",
                  "aiProjectSteps",
                  e,
                  "stepPayload",
                  (x) => {
                    let k
                    if (x === void 0 || y)
                      console.log("resetting!!"),
                        (k = {
                          type: _g.CREATE_RM_FILES,
                          fileNames: [],
                          directories: [],
                        })
                    else if (x?.type === _g.CREATE_RM_FILES) k = { ...x }
                    else throw new Error(`Expected creatingFiles, got ${x?.type}`)
                    return S.case === "directory"
                      ? (console.log("ADDING DIRECTORY", S.value),
                        { ...k, directories: [...k.directories, S.value] })
                      : S.case === "filename"
                        ? { ...k, fileNames: [...k.fileNames, S.value] }
                        : k
                  },
                )
              }
            }
            y = !1
          }
        b && o(eA),
          o(`

  Any feedback/suggestions on this step?

  `)
      }
      async currentStepFeedback(
        e,
        t,
        s,
        { currentTabId: n, userBubbleId: r, assistantBubbleId: o },
      ) {
        if (this.a === void 0)
          throw new Error("DEPRECATED. AiProjectServicePromise is undefined")
        const a = this.q.chatData.codeInterpreterTabs.find(
          ({ tabId: x }) => x === n,
        )
        if (a === void 0) throw new Error(`No tab data found for tab ${n}`)
        const {
            appendAssistant: l,
            replaceAssistantServer: c,
            replaceUserServer: h,
          } = this.getHelperMods({
            currentTabId: n,
            userBubbleId: o,
            assistantBubbleId: o,
          }),
          u = await this.a,
          { generationUUID: d, abortController: g } = this.s({
            assistantBubbleId: o,
            currentTabId: n,
          }),
          p = this.getPreviousMessages(
            { currentTabId: n, lastBubbleId: r },
            (x) =>
              x.bubbleState === ho.steps || x.bubbleState === ho.stepsFeedback
                ? x.stepIndex === t
                : !1,
          )
        console.log("USING CURRENT STEP", t, s)
        let m
        if (s.stepPayload?.type === _g.READ_WRITE_FILE) m = s.stepPayload.fileName
        else
          throw new Error(`Expected READ_WRITE_FILE, got ${s.stepPayload?.type}`)
        const b = u.aiProjectStepFeedback(
            {
              modelDetails: this.getModelDetails(),
              stepDescription: s.description,
              stepType: s.stepType,
              shellType: D$.BASH,
              projectBreakdown: a.additionalData.aiProjectSteps.map(
                (x) => x.description,
              ),
              projectPlan: a.additionalData.aiProjectPlan,
              previousFeedbackMessages: p,
              feedbackPayload: {
                case: "modifyCodePayload",
                value: { feedbackText: e, filesToModify: [m] },
              },
            },
            { signal: g.signal, headers: wn(d) },
          ),
          { stream: y, toolformerSessionFuture: w } =
            this.h.handleTaskWithSessionData(b, g.signal)
        w.then((x) => {
          x.onDidTerminalChangeEvent((k) => {
            console.log("HANDLING PAYLOAD", k),
              k.type === TR.newTerminal
                ? (l(`

  ### Terminal

  `),
                  l("```"))
                : k.type === TR.writingCommand
                  ? l(`
  $ ${k.value}
  `)
                  : k.type === TR.writingResponse
                    ? l(k.value)
                    : k.type === TR.endTerminal && l("\n```\n\n")
          })
        })
        let C = !1,
          S = !0
        console.log("going to stream now")
        for await (const x of y)
          if (
            (console.log("GOTTT", x), x.response.case === "responseFromFeedback")
          ) {
            const k = x.response.value
            if (k.response.case === "thought")
              C || (l(k5), (C = !0)), l(k.response.value)
            else if (k.response.case === "output")
              C && (l(eA), (C = !1)), l(k.response.value)
            else if (k.response.case === "stepPayload") {
              const E = k.response.value
              if (E.payload.case !== "runTerm") {
                if (E.payload.case === "writeCode")
                  l(PFt + E.payload.value.filename + LFt)
                else if (E.payload.case === "creatingFiles") {
                  const D = E.payload.value.payload
                  console.log("GOT PAYLOAD", D),
                    this.q.setChatData(
                      "codeInterpreterTabs",
                      ({ tabId: P }) => P === n,
                      "additionalData",
                      "aiProjectSteps",
                      t,
                      "stepPayload",
                      (P) => {
                        let L
                        if (P === void 0 || S)
                          console.log("resetting!!"),
                            (L = {
                              type: _g.CREATE_RM_FILES,
                              fileNames: [],
                              directories: [],
                            })
                        else if (P?.type === _g.CREATE_RM_FILES) L = { ...P }
                        else
                          throw new Error(
                            `Expected creatingFiles, got ${P?.type}`,
                          )
                        return D.case === "directory"
                          ? (console.log("ADDING DIRECTORY", D.value),
                            { ...L, directories: [...L.directories, D.value] })
                          : D.case === "filename"
                            ? { ...L, fileNames: [...L.fileNames, D.value] }
                            : L
                      },
                    )
                }
              }
              S = !1
            }
          } else if (x.response.case === "repeatFeedback")
            return (
              x.response.value &&
                l(`

  Any additional feedback/suggestions?

  `),
              { repeatStep: x.response.value }
            )
        return { repeatStep: !1 }
      }
      async nextStep(e, t, s) {
        console.log("CALLING NEXT STEP WITH", s)
        const n = this.q.chatData.codeInterpreterTabs.find(
          ({ tabId: p }) => p === e,
        )
        if (n === void 0) throw new Error(`No tab data found for tab ${e}`)
        const r = s ?? n.additionalData.stepIndex
        console.log("RUNNING NEXT STEP")
        let o = 0
        const a = n.bubbles.find((p, m) => (p.id === t ? ((o = m), !0) : !1))
        if (a === void 0)
          throw new Error(`No bubble data found for tab ${e} and bubble ${t}`)
        this.q.setChatData(
          "codeInterpreterTabs",
          ({ tabId: p }) => p === e,
          "bubbles",
          (p) => p.slice(0, o + 1),
        )
        const l = ({
            type: p,
            state: m = a.nextBubbleState,
            nextBubbleState: b = ho.undecided,
            stepIndex: y = r,
            origUUID: w,
          }) => {
            let C
            return (
              w === void 0 ? (C = rt()) : (C = w),
              this.q.setChatData(
                "codeInterpreterTabs",
                ({ tabId: S }) => S === e,
                "bubbles",
                (S) => {
                  let x
                  if (p === Ka.ASSISTANT) {
                    let k = {
                      id: C,
                      bubbleState: m,
                      nextBubbleState: b,
                      messageType: p,
                      type: dc.AI_CODE_INTERPRETER,
                      text: "",
                      modelType: this.g.getModel(),
                      serverMessages: [],
                      aiType: "newProject",
                    }
                    m === ho.breakdown || m === ho.breakdownFeedback
                      ? (x = { ...k, bubbleState: m, steps: [] })
                      : m === ho.plan || m === ho.planFeedback
                        ? (x = { ...k, bubbleState: m, plan: "" })
                        : m === ho.steps || m === ho.stepsFeedback
                          ? (x = { ...k, bubbleState: m, stepIndex: y })
                          : (x = { ...k, bubbleState: m })
                  } else if (p === Ka.USER)
                    x = n6n(this.q.setChatData, e, m, b, void 0, void 0, y)
                  else return S
                  return [...S, x]
                },
              ),
              C
            )
          },
          c = (p) => {
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: m }) => m === e,
              "additionalData",
              "stepIndex",
              p,
            )
          },
          h = (p) => {
            const m = this.q.chatData.codeInterpreterTabs.find(
              ({ tabId: y }) => y === e,
            )?.bubbles
            if (m === void 0 || m.length === 0)
              throw new Error(`No bubbles found for tab ${e}`)
            const b = m[m.length - 1]
            this.q.setChatData(
              "codeInterpreterTabs",
              ({ tabId: y }) => y === e,
              "bubbles",
              ({ id: y }) => y === b.id,
              "nextBubbleState",
              p,
            )
          },
          u = rt(),
          d = { currentTabId: e, userBubbleId: t, assistantBubbleId: u }
        console.log("NEXT STEP", a.bubbleState, d)
        const g = a.nextBubbleState
        if (g === ho.initial) {
          const p = l({
              type: Ka.ASSISTANT,
              state: ho.initial,
              nextBubbleState: ho.clarification,
              origUUID: u,
            }),
            { clarify: m } = await this.startProject(a.text ?? "", d)
          m
            ? l({
                type: Ka.USER,
                state: ho.clarification,
                nextBubbleState: ho.clarification,
              })
            : (h(ho.plan), await this.nextStep(e, p))
        } else if (g === ho.clarification) {
          const p = l({
              type: Ka.ASSISTANT,
              state: ho.clarification,
              nextBubbleState: ho.clarification,
              origUUID: u,
            }),
            { clarify: m } = await this.clarifyProject(a.text ?? "", d)
          m
            ? l({
                type: Ka.USER,
                state: ho.clarification,
                nextBubbleState: ho.clarification,
              })
            : (h(ho.plan), await this.nextStep(e, p))
        } else if (g === ho.plan)
          l({
            type: Ka.ASSISTANT,
            state: ho.plan,
            nextBubbleState: ho.breakdown,
            origUUID: u,
          }),
            await this.getProjectPlan(e, u),
            l({
              type: Ka.USER,
              state: ho.planFeedback,
              nextBubbleState: ho.planFeedback,
            })
        else if (g === ho.planFeedback) {
          console.log("IN PLAN FEEDBACK STEP!!")
          const p = l({
              type: Ka.ASSISTANT,
              state: ho.planFeedback,
              nextBubbleState: ho.planFeedback,
              origUUID: u,
            }),
            { repeatStep: m } = await this.getProjectPlanFeedback(a.text ?? "", d)
          m
            ? l({
                type: Ka.USER,
                state: ho.planFeedback,
                nextBubbleState: ho.planFeedback,
              })
            : (h(ho.breakdown), await this.nextStep(e, p))
        } else if (g === ho.breakdown)
          l({
            type: Ka.ASSISTANT,
            state: ho.breakdown,
            nextBubbleState: ho.steps,
            origUUID: u,
          }),
            await this.getBreakdown(e, u),
            c(0),
            await this.nextStep(e, u)
        else if (g === ho.steps) {
          const p = r
          if (p >= n.additionalData.aiProjectSteps.length) return
          n.additionalData.aiProjectSteps[p].stepType === _g.READ_WRITE_FILE
            ? (l({
                type: Ka.ASSISTANT,
                state: ho.steps,
                nextBubbleState: ho.stepsFeedback,
                stepIndex: p,
                origUUID: u,
              }),
              await this.performStep(p, d),
              l({
                type: Ka.USER,
                state: ho.stepsFeedback,
                nextBubbleState: ho.stepsFeedback,
                stepIndex: p,
                origUUID: u,
              }),
              console.log("CREATING FEEDBACK STEP", p))
            : (l({
                type: Ka.ASSISTANT,
                state: ho.steps,
                nextBubbleState: ho.steps,
                stepIndex: p,
                origUUID: u,
              }),
              await this.performStep(p, d),
              c(p + 1),
              await this.nextStep(e, u))
        } else if (g === ho.stepsFeedback) {
          const p = r
          if (
            (console.log("running steps feedback step", p),
            p >= n.additionalData.aiProjectSteps.length)
          )
            return
          const m = n.additionalData.aiProjectSteps[p]
          console.log("ALL STEPS", n.additionalData.aiProjectSteps),
            console.log("step index", p)
          const b = l({
            type: Ka.ASSISTANT,
            state: ho.stepsFeedback,
            nextBubbleState: ho.stepsFeedback,
            stepIndex: p,
            origUUID: u,
          })
          console.log("Created bubble!")
          const { repeatStep: y } = await this.currentStepFeedback(
            a.text ?? "",
            r,
            m,
            d,
          )
          console.log("FINISHED REPEAT STEP!"),
            console.log("got repeated step!"),
            y
              ? l({
                  type: Ka.USER,
                  state: ho.stepsFeedback,
                  nextBubbleState: ho.stepsFeedback,
                  stepIndex: p,
                })
              : (c(p + 1), h(ho.steps), await this.nextStep(e, b))
        }
      }
    }
  ;(NFt = __decorate(
    [
      __param(0, $h),
      __param(1, CR),
      __param(2, ei),
      __param(3, eg),
      __param(4, g2),
      __param(5, p0),
      __param(6, Br),
      __param(7, eg),
      __param(8, cv),
      __param(9, Ti),
    ],
    NFt,
  )),
    Ve(SKi, NFt, 1);

  return {
    _g,
    NKn,
    AKn,
    vKi,
    MKn,
    yKi,
    $Kn,
    FKn,
    OKn,
    wKi,
    _Kn,
    UKn,
    HKn,
    GKn,
    JKn,
    XKn,
    PFt,
    LFt,
    SKi,
  };
}
