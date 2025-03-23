// @ts-check

// 121941
export function createAIServiceV1Part2(params) {
  const {v, _, FT, Toe, AC, U$i, gt} = params;

  var gNn = class qOe extends _ {
    constructor(e) {
      super(),
        (this.telemEnabled = !1),
        (this.bugBotDismissedNotificationLast10TimesUnixMs = []),
        (this.bugBotViewedNotificationLast10TimesUnixMs = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.BugConfigRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "telem_enabled", kind: "scalar", T: 8 },
        {
          no: 2,
          name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
          kind: "scalar",
          T: 1,
          repeated: !0,
        },
        {
          no: 3,
          name: "bug_bot_viewed_notification_last_10_times_unix_ms",
          kind: "scalar",
          T: 1,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new qOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new qOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new qOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(qOe, e, t)
    }
  },
  $ae = class jOe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.BugConfigResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "linter_strategy_v1", kind: "message", T: pNn },
        { no: 2, name: "bug_bot_v1", kind: "message", T: mNn },
        { no: 3, name: "linter_strategy_v2", kind: "message", T: NBi },
      ])
    }
    static fromBinary(e, t) {
      return new jOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new jOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new jOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(jOe, e, t)
    }
  },
  pNn = class zOe extends _ {
    constructor(e) {
      super(),
        (this.enabled = !1),
        (this.tryTriggerOnSave = !1),
        (this.waitBetweenTriggersMs = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.BugConfigResponse.LinterStrategyV1"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "enabled", kind: "scalar", T: 8 },
        { no: 2, name: "try_trigger_on_save", kind: "scalar", T: 8 },
        { no: 3, name: "wait_between_triggers_ms", kind: "scalar", T: 1 },
      ])
    }
    static fromBinary(e, t) {
      return new zOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new zOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new zOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(zOe, e, t)
    }
  },
  NBi = class GOe extends _ {
    constructor(e) {
      super(),
        (this.enabled = !1),
        (this.waitBetweenTriggersMs = 0),
        (this.debounceTriggersMs = 0),
        (this.keepLinesAroundChunk = 0),
        (this.preventTriggeringForFilesWithThisManyLines = 0),
        (this.preventTriggeringWhenLints = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.BugConfigResponse.LinterStrategyV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "enabled", kind: "scalar", T: 8 },
        { no: 2, name: "wait_between_triggers_ms", kind: "scalar", T: 1 },
        { no: 3, name: "debounce_triggers_ms", kind: "scalar", T: 1 },
        { no: 4, name: "keep_lines_around_chunk", kind: "scalar", T: 5 },
        {
          no: 5,
          name: "prevent_triggering_for_files_with_this_many_lines",
          kind: "scalar",
          T: 5,
        },
        { no: 6, name: "prevent_triggering_when_lints", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new GOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new GOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new GOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(GOe, e, t)
    }
  },
  mNn = class JOe extends _ {
    constructor(e) {
      super(),
        (this.enabled = !1),
        (this.isSubsidized = !1),
        (this.backgroundCallFrequencyMs = 0),
        (this.killSwitch = !1),
        (this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.BugConfigResponse.BugBotV1"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "enabled", kind: "scalar", T: 8 },
        { no: 2, name: "is_subsidized", kind: "scalar", T: 8 },
        { no: 3, name: "background_call_frequency_ms", kind: "scalar", T: 5 },
        { no: 4, name: "kill_switch", kind: "scalar", T: 8 },
        {
          no: 5,
          name: "show_intrusive_notification_only_if_last_time_was_more_than_ms_ago",
          kind: "scalar",
          T: 1,
        },
        {
          no: 6,
          name: "background_diff_absolute_max_tokens",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 7,
          name: "background_diff_min_min_token_threshold",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 8,
          name: "background_diff_min_max_token_threshold",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 9,
          name: "background_diff_last_commit_less_than_this_many_ms_ago",
          kind: "scalar",
          T: 1,
          opt: !0,
        },
        {
          no: 15,
          name: "background_unified_context_lines",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 16,
          name: "background_diff_include_uncommitted",
          kind: "scalar",
          T: 8,
          opt: !0,
        },
        {
          no: 10,
          name: "default_diff_context_lines",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 11,
          name: "diff_absolute_max_tokens",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 12,
          name: "custom_instructions_max_char_length",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 13,
          name: "default_fallback_iterations",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 14,
          name: "threshold_for_expensive_run_modal_cents",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        { no: 17, name: "cheap_model_name", kind: "scalar", T: 9, opt: !0 },
        {
          no: 18,
          name: "cheap_absolute_max_tokens",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
        {
          no: 19,
          name: "expensive_absolute_max_tokens",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new JOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new JOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new JOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(JOe, e, t)
    }
  },
  bNn = class KOe extends _ {
    constructor(e) {
      super(),
        (this.activeFile = ""),
        (this.cursorLineNumberOneIndexed = 0),
        (this.telemEnabled = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugBotLinterRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "git_diff", kind: "message", T: FT },
        { no: 2, name: "active_file", kind: "scalar", T: 9 },
        { no: 3, name: "cursor_line_number_one_indexed", kind: "scalar", T: 5 },
        { no: 4, name: "session_id", kind: "scalar", T: 9, opt: !0 },
        { no: 5, name: "telem_enabled", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new KOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new KOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new KOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(KOe, e, t)
    }
  },
  RBi = class YOe extends _ {
    constructor(e) {
      super(), (this.bugs = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugBotLinterResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "bugs", kind: "message", T: Toe, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new YOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new YOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new YOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(YOe, e, t)
    }
  },
  vNn = class XOe extends _ {
    constructor(e) {
      super(),
        (this.diffString = ""),
        (this.oldStart = 0),
        (this.newStart = 0),
        (this.oldLines = 0),
        (this.newLines = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChunkDiff"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "diff_string", kind: "scalar", T: 9 },
        { no: 2, name: "old_start", kind: "scalar", T: 5 },
        { no: 3, name: "new_start", kind: "scalar", T: 5 },
        { no: 4, name: "old_lines", kind: "scalar", T: 5 },
        { no: 5, name: "new_lines", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new XOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new XOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new XOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(XOe, e, t)
    }
  },
  DEt = class QOe extends _ {
    constructor(e) {
      super(), (this.fileDiffs = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewRequestV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file_diffs", kind: "message", T: ABi, repeated: !0 },
        { no: 2, name: "linter_rules", kind: "scalar", T: 9, opt: !0 },
        { no: 3, name: "also_find_hard_bugs", kind: "scalar", T: 8, opt: !0 },
        { no: 4, name: "save_request_as", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new QOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new QOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new QOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(QOe, e, t)
    }
  },
  ABi = class ZOe extends _ {
    constructor(e) {
      super(), (this.chunkDiffs = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewRequestV2.FileDiff"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file", kind: "message", T: AC },
        { no: 2, name: "chunk_diffs", kind: "message", T: vNn, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new ZOe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ZOe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ZOe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(ZOe, e, t)
    }
  },
  MBi = class e4e extends _ {
    constructor(e) {
      super(),
        (this.id = ""),
        (this.chunkId = ""),
        (this.relativeWorkspacePath = ""),
        (this.startLine = 0),
        (this.endLine = 0),
        (this.description = ""),
        (this.severity = 0),
        (this.tldr = ""),
        (this.diff = ""),
        (this.fullChunkStartLine = 0),
        (this.fullChunkEndLine = 0),
        (this.fullChunkTotalLines = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewBugV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 9 },
        { no: 2, name: "chunk_id", kind: "scalar", T: 9 },
        { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 4, name: "start_line", kind: "scalar", T: 5 },
        { no: 5, name: "end_line", kind: "scalar", T: 5 },
        { no: 6, name: "description", kind: "scalar", T: 9 },
        { no: 7, name: "severity", kind: "scalar", T: 5 },
        { no: 8, name: "tldr", kind: "scalar", T: 9 },
        { no: 9, name: "diff", kind: "scalar", T: 9 },
        { no: 10, name: "full_chunk_start_line", kind: "scalar", T: 5 },
        { no: 11, name: "full_chunk_end_line", kind: "scalar", T: 5 },
        { no: 12, name: "full_chunk_total_lines", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new e4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new e4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new e4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(e4e, e, t)
    }
  },
  $Bi = class t4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewResponseV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "bug", kind: "message", T: MBi },
      ])
    }
    static fromBinary(e, t) {
      return new t4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new t4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new t4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(t4e, e, t)
    }
  },
  FBi = class i4e extends _ {
    constructor(e) {
      super(), (this.messages = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewChatRequestV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file", kind: "message", T: AC },
        { no: 2, name: "bug", kind: "message", T: MBi },
        { no: 3, name: "linter_rules", kind: "scalar", T: 9, opt: !0 },
        { no: 4, name: "messages", kind: "message", T: U$i, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new i4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new i4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new i4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(i4e, e, t)
    }
  },
  yNn = class s4e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReviewChatResponseV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new s4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new s4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new s4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(s4e, e, t)
    }
  },
  wNn = class n4e extends _ {
    constructor(e) {
      super(), (this.bugs = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "bugs", kind: "message", T: CNn, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new n4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new n4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new n4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(n4e, e, t)
    }
  },
  CNn = class r4e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.startLine = 0),
        (this.endLineInclusive = 0),
        (this.codeLines = []),
        (this.severity = 0),
        (this.confidence = 0),
        (this.description = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingResponse.Bug"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "start_line", kind: "scalar", T: 5 },
        { no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 },
        { no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: !0 },
        { no: 5, name: "severity", kind: "scalar", T: 1 },
        { no: 6, name: "confidence", kind: "scalar", T: 1 },
        { no: 7, name: "description", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new r4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new r4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new r4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(r4e, e, t)
    }
  },
  SNn = class o4e extends _ {
    constructor(e) {
      super(), (this.fileDiffs = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "file_diffs", kind: "message", T: xNn, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new o4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new o4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new o4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(o4e, e, t)
    }
  },
  xNn = class a4e extends _ {
    constructor(e) {
      super(),
        (this.relativeWorkspacePath = ""),
        (this.lines = []),
        (this.hunks = []),
        (this.notTruncated = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
        { no: 2, name: "lines", kind: "message", T: ENn, repeated: !0 },
        { no: 3, name: "hunks", kind: "message", T: kNn, repeated: !0 },
        {
          no: 4,
          name: "old_relative_workspace_path",
          kind: "scalar",
          T: 9,
          opt: !0,
        },
        { no: 5, name: "not_truncated", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new a4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new a4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new a4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(a4e, e, t)
    }
  },
  kNn = class l4e extends _ {
    constructor(e) {
      super(),
        (this.oldStartOneIndexed = 0),
        (this.newStartOneIndexed = 0),
        (this.oldLines = []),
        (this.newLines = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff.Hunk"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "old_start_one_indexed", kind: "scalar", T: 5 },
        { no: 2, name: "new_start_one_indexed", kind: "scalar", T: 5 },
        { no: 3, name: "old_lines", kind: "scalar", T: 9, repeated: !0 },
        { no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new l4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new l4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new l4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(l4e, e, t)
    }
  },
  ENn = class c4e extends _ {
    constructor(e) {
      super(),
        (this.oneIndexedLineNumber = 0),
        (this.line = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff.Line"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "one_indexed_line_number", kind: "scalar", T: 5 },
        { no: 2, name: "line", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new c4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new c4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new c4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(c4e, e, t)
    }
  },
  OBi = class h4e extends _ {
    constructor(e) {
      super(),
        (this.maxConcurrentUploads = 0),
        (this.absoluteMaxNumberFiles = 0),
        (this.maxFileRetries = 0),
        (this.syncConcurrency = 0),
        (this.autoIndexingMaxNumFiles = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.IndexingConfig"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "max_concurrent_uploads", kind: "scalar", T: 5 },
        { no: 2, name: "absolute_max_number_files", kind: "scalar", T: 5 },
        { no: 3, name: "max_file_retries", kind: "scalar", T: 5 },
        { no: 4, name: "sync_concurrency", kind: "scalar", T: 5 },
        { no: 5, name: "auto_indexing_max_num_files", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new h4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new h4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new h4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(h4e, e, t)
    }
  },
  INn = class u4e extends _ {
    constructor(e) {
      super(),
        (this.globalSampleRate = 0),
        (this.tracesSampleRate = 0),
        (this.loggerSampleRate = 0),
        (this.minidumpSampleRate = 0),
        (this.errorRateLimit = 0),
        (this.performanceUnitRateLimit = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ClientTracingConfig"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "global_sample_rate", kind: "scalar", T: 1 },
        { no: 2, name: "traces_sample_rate", kind: "scalar", T: 1 },
        { no: 3, name: "logger_sample_rate", kind: "scalar", T: 1 },
        { no: 4, name: "minidump_sample_rate", kind: "scalar", T: 1 },
        { no: 5, name: "error_rate_limit", kind: "scalar", T: 1 },
        { no: 6, name: "performance_unit_rate_limit", kind: "scalar", T: 1 },
      ])
    }
    static fromBinary(e, t) {
      return new u4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new u4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new u4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(u4e, e, t)
    }
  },
  DNn = class d4e extends _ {
    constructor(e) {
      super(),
        (this.disableUnification = !1),
        (this.fullContextTokenLimit = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChatConfig"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "disable_unification", kind: "scalar", T: 8 },
        { no: 2, name: "full_context_token_limit", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new d4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new d4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new d4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(d4e, e, t)
    }
  },
  TNn = class f4e extends _ {
    constructor(e) {
      super(),
        (this.telemEnabled = !1),
        (this.bugBotDismissedNotificationLast10TimesUnixMs = []),
        (this.bugBotViewedNotificationLast10TimesUnixMs = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetServerConfigRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "telem_enabled", kind: "scalar", T: 8 },
        {
          no: 2,
          name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
          kind: "scalar",
          T: 1,
          repeated: !0,
        },
        {
          no: 3,
          name: "bug_bot_viewed_notification_last_10_times_unix_ms",
          kind: "scalar",
          T: 1,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new f4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new f4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new f4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(f4e, e, t)
    }
  },
  eqe = class g4e extends _ {
    constructor(e) {
      super(),
        (this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetServerConfigResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "bug_config_response", kind: "message", T: $ae },
        {
          no: 2,
          name: "is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users",
          kind: "scalar",
          T: 8,
        },
        { no: 3, name: "indexing_config", kind: "message", T: OBi },
        { no: 4, name: "client_tracing_config", kind: "message", T: INn },
        { no: 5, name: "chat_config", kind: "message", T: DNn },
      ])
    }
    static fromBinary(e, t) {
      return new g4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new g4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new g4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(g4e, e, t)
    }
  },
  TEt = {
    typeName: "aiserver.v1.ServerConfigService",
    methods: {
      getServerConfig: {
        name: "GetServerConfig",
        I: TNn,
        O: eqe,
        kind: gt.Unary,
      },
    },
  };

  return {
    gNn,
    $ae,
    pNn,
    NBi,
    mNn,
    bNn,
    RBi,
    vNn,
    DEt,
    ABi,
    MBi,
    $Bi,
    FBi,
    yNn,
    wNn,
    CNn,
    SNn,
    xNn,
    kNn,
    ENn,
    OBi,
    INn,
    DNn,
    TNn,
    eqe,
    TEt
  }
}
