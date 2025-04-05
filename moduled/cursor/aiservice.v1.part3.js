// @ts-check

// 165141
export function createAIServiceV1Part3(params) {
  const {v, _, Ho, rl, Sf, zr, Cf, ed, ZHe, JRi, EAi, Zc, _$i, B1n, gt, _1n, U1n, H1n, M1n, $1n, B$i, F1n, ZN, dI, evn, tvn, jB, RVe, O$i, Qxn, LEn, NEn, a2i, l2i, Dxn, Txn, Exn, Ixn, xxn, kxn, Sxn, Jxn, Kxn, tkn, ikn, skn, rkn, jxn, zxn, Gxn, Bxn, _xn, Q$i, Hxn, Vxn, Wxn, qxn, akn, ckn, hkn, ukn, CSn, ISn, vSn, ySn, K$i, G$i, Z$i, Zxn, W$i, exn, txn, V$i, Z1n, V1n, J1n, AVe, K1n, Y1n, Fvn, Ovn, W1n, G1n, q1n, j1n, Y$i, Fxn, Mxn, $xn, dkn, e2i, bkn, wkn, epn, P1n, L1n, nVe, USt, rAi, cpn, hpn, rVe, Lbn, Nbn, R1n, A1n, eEn, tEn, nEn, rEn, f1n, g1n, F$i, k1n, u1n, d1n, PVe, o1n, l1n, JSn, KSn, $$i, r1n, WSn, jSn, M$i, qSn, ASn, MSn, StreamCppRequest, Bvn, T1t, Hvn, KMi, YMi, Ewn, Iwn, zSn, GSn, uxn, mxn, dxn, fxn, gxn, q$i, pxn, sxn, cxn, hxn, nxn, rxn, oxn, axn, oEn, vEn, A$i, VSn, r2i, z$i, R$i, _Sn, USn, HSn, t2i, Ckn, Dkn, Lkn, Nkn, Rkn, wEn, CEn, SEn, xEn, OSn, BSn, q1t, Akn, s2i, Mkn, $kn, Fkn, Okn, zkn, Gkn, jkn, n2i, _kn, Jkn, Qkn, Bkn, Ykn, Xkn, ZRi, qgn, eAi, jgn, _St, Zkn, zgn, sVe, tAi, Zgn, iAi, npn, $Sn, FSn, cSn, hSn, NSn, RSn, PSn, LSn, DSn, TSn, HMi, zvn, GCn, JCn, pSn, mSn, dSn, fSn, bSn, sSn, iSn, lSn, HT, S$i, QCn, C$i, XCn, y$i, jCn, WCn, v$i, VCn, JMi, Dwn, _Cn, HCn, kEn, EEn, OCn, BCn, ACn, MCn, b$i, pCn, mCn, $Cn, FCn, o2i, IEn, NCn, RCn, wCn, SCn, TEn, PEn, p1t, LCn, xCn, kCn, ECn, ICn, DCn, TCn, bCn, vCn, REn, $En, CMi, n$i, a$i, s$i, B1t, w0n, o$i, E0n, C0n, S0n, R0n, A0n, Re, U, mpn, bpn, kpn, Epn, Lpn, Rpn, gAi, pAi, fAi, jpn, vpn, wpn, Dpn, Tpn, Apn, $pn, Spn, xpn, mAi, vAi, gpn, ppn, upn, fpn, Vpn, Wpn, Fpn, Opn, Bpn, _pn, Upn, Hpn, amn, lmn, V, R, wkt, Ckt, vkt, ykt, Skt, xkt, QTn, MG, SWe, TOi, __decorate, __param, ei, Ve, Jf, gCn} = params;

  var oko = class y4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.InlineGPT4PromptProtoV1"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "current_file", kind: "message", T: Ho },
      ])
    }
    static fromBinary(e, t) {
      return new y4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new y4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new y4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(y4e, e, t)
    }
  },
  W3i = class w4e extends _ {
    constructor(e) {
      super(),
        (this.repositories = []),
        (this.contextBlocks = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamInlineLongCompletionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "current_file", kind: "message", T: Ho },
        { no: 6, name: "repositories", kind: "message", T: rl, repeated: !0 },
        {
          no: 7,
          name: "context_blocks",
          kind: "message",
          T: i4n,
          repeated: !0,
        },
        { no: 13, name: "explicit_context", kind: "message", T: Sf },
        { no: 14, name: "model_details", kind: "message", T: zr },
        { no: 15, name: "linter_errors", kind: "message", T: Cf },
      ])
    }
    static fromBinary(e, t) {
      return new w4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new w4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new w4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(w4e, e, t)
    }
  },
  i4n = class C4e extends _ {
    constructor(e) {
      super(),
        (this.contextType = WJ.UNSPECIFIED),
        (this.blocks = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "context_type", kind: "enum", T: v.getEnumType(WJ) },
        { no: 2, name: "blocks", kind: "message", T: ed, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new C4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new C4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new C4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(C4e, e, t)
    }
  },
  WJ
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.RECENT_LOCATIONS = 1)] = "RECENT_LOCATIONS")
})(WJ || (WJ = {})),
  v.util.setEnumType(
    WJ,
    "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType",
    [
      { no: 0, name: "CONTEXT_TYPE_UNSPECIFIED" },
      { no: 1, name: "CONTEXT_TYPE_RECENT_LOCATIONS" },
    ],
  )
var s4n = class S4e extends _ {
    constructor(e) {
      super(),
        (this.mainSymbolsToAnalyzeFromGoToDef = []),
        (this.relatedSymbols = []),
        (this.mainSymbolsToAnalyzeFromImplementations = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamAiPreviewsIntent"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "main_symbols_to_analyze_from_go_to_def",
          kind: "message",
          T: ZHe,
          repeated: !0,
        },
        { no: 4, name: "main_symbol_hover_details", kind: "message", T: JRi },
        {
          no: 3,
          name: "related_symbols",
          kind: "message",
          T: ZHe,
          repeated: !0,
        },
        {
          no: 6,
          name: "main_symbols_to_analyze_from_implementations",
          kind: "message",
          T: ZHe,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new S4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new S4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new S4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(S4e, e, t)
    }
  },
  q3i = class x4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamAiPreviewsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "current_file", kind: "message", T: Ho },
        { no: 2, name: "intent", kind: "message", T: s4n },
        { no: 14, name: "model_details", kind: "message", T: zr },
        { no: 15, name: "is_detailed", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new x4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new x4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new x4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(x4e, e, t)
    }
  },
  n4n = class k4e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamAiPreviewsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new k4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new k4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new k4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(k4e, e, t)
    }
  },
  r4n = class E4e extends _ {
    constructor(e) {
      super(),
        (this.action = ""),
        (this.generationUuid = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportInlineActionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "action", kind: "scalar", T: 9 },
        { no: 2, name: "generation_uuid", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new E4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new E4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new E4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(E4e, e, t)
    }
  },
  o4n = class I4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportInlineActionResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new I4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new I4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new I4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(I4e, e, t)
    }
  },
  Oje = class D4e extends _ {
    constructor(e) {
      super(), (this.metrics = {}), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportMetricsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "metrics",
          kind: "map",
          K: 9,
          V: { kind: "message", T: a4n },
        },
      ])
    }
    static fromBinary(e, t) {
      return new D4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new D4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new D4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(D4e, e, t)
    }
  },
  a4n = class T4e extends _ {
    constructor(e) {
      super(), (this.tags = {}), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportMetricsRequest.Metric"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "value", kind: "scalar", T: 1, opt: !0 },
        { no: 2, name: "tags", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
      ])
    }
    static fromBinary(e, t) {
      return new T4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new T4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new T4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(T4e, e, t)
    }
  },
  Bje = class P4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ReportMetricsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new P4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new P4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new P4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(P4e, e, t)
    }
  },
  l4n = class L4e extends _ {
    constructor(e) {
      super(), (this.generateTheWholeThing = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Specedits1Request"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "generate_the_whole_thing", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new L4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new L4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new L4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(L4e, e, t)
    }
  },
  c4n = class N4e extends _ {
    constructor(e) {
      super(), (this.fullFile = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Specedits1Response"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "full_file", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new N4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new N4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new N4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(N4e, e, t)
    }
  },
  h4n = class R4e extends _ {
    constructor(e) {
      super(), (this.name = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SimpleRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new R4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new R4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new R4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(R4e, e, t)
    }
  },
  u4n = class A4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SimpleResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new A4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new A4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new A4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(A4e, e, t)
    }
  },
  ako = class M4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.EmptyRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new M4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new M4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new M4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(M4e, e, t)
    }
  },
  d4n = class $4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.EmptyResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new $4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals($4e, e, t)
    }
  },
  f4n = class F4e extends _ {
    constructor(e) {
      super(),
        (this.text = ""),
        (this.fileSelections = []),
        (this.fileAttachments = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
        {
          no: 2,
          name: "file_selections",
          kind: "message",
          T: g4n,
          repeated: !0,
        },
        {
          no: 3,
          name: "file_attachments",
          kind: "message",
          T: p4n,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new F4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new F4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new F4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(F4e, e, t)
    }
  },
  g4n = class O4e extends _ {
    constructor(e) {
      super(), (this.relativeWorkspacePath = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt.FileSelection"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new O4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new O4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new O4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(O4e, e, t)
    }
  },
  p4n = class B4e extends _ {
    constructor(e) {
      super(),
        (this.name = ""),
        (this.contents = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HeadlessAgenticComposerPrompt.FileAttachment"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
        { no: 2, name: "contents", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new B4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new B4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new B4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(B4e, e, t)
    }
  },
  m4n = class _4e extends _ {
    constructor(e) {
      super(), (this.chatModelName = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HeadlessAgenticComposerConfig"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 2, name: "chat_model_name", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new _4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(_4e, e, t)
    }
  },
  b4n = class U4e extends _ {
    constructor(e) {
      super(),
        (this.pathEncryptionKey = ""),
        (this.repositoryInfoShouldQueryStaging = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.HeadlessAgenticComposerRepositoryInfo"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "repository_info", kind: "message", T: rl },
        { no: 2, name: "path_encryption_key", kind: "scalar", T: 9 },
        {
          no: 3,
          name: "repository_info_should_query_staging",
          kind: "scalar",
          T: 8,
        },
      ])
    }
    static fromBinary(e, t) {
      return new U4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new U4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new U4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(U4e, e, t)
    }
  },
  v4n = class H4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamHeadlessAgenticComposerRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "prompt", kind: "message", T: f4n },
        { no: 2, name: "config", kind: "message", T: m4n },
        { no: 3, name: "repository_info", kind: "message", T: b4n },
      ])
    }
    static fromBinary(e, t) {
      return new H4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new H4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new H4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(H4e, e, t)
    }
  },
  y4n = class V4e extends _ {
    constructor(e) {
      super(), (this.text = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.StreamHeadlessAgenticComposerResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "text", kind: "scalar", T: 9 },
        { no: 2, name: "tool_call", kind: "message", T: EAi, opt: !0 },
        { no: 3, name: "final_tool_result", kind: "message", T: w4n, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new V4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new V4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new V4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(V4e, e, t)
    }
  },
  w4n = class W4e extends _ {
    constructor(e) {
      super(), (this.toolCallId = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName =
        "aiserver.v1.StreamHeadlessAgenticComposerResponse.FinalToolResult"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "tool_call_id", kind: "scalar", T: 9 },
        { no: 2, name: "result", kind: "message", T: Zc },
      ])
    }
    static fromBinary(e, t) {
      return new W4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new W4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new W4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(W4e, e, t)
    }
  },
  Va = {
    typeName: "aiserver.v1.AiService",
    methods: {
      healthCheck: { name: "HealthCheck", I: _$i, O: B1n, kind: gt.Unary },
      privacyCheck: { name: "PrivacyCheck", I: _1n, O: U1n, kind: gt.Unary },
      timeLeftHealthCheck: {
        name: "TimeLeftHealthCheck",
        I: _$i,
        O: H1n,
        kind: gt.Unary,
      },
      throwErrorCheck: {
        name: "ThrowErrorCheck",
        I: M1n,
        O: $1n,
        kind: gt.Unary,
      },
      availableModels: {
        name: "AvailableModels",
        I: B$i,
        O: F1n,
        kind: gt.Unary,
      },
      streamChatTryReallyHard: {
        name: "StreamChatTryReallyHard",
        I: ZN,
        O: dI,
        kind: gt.ServerStreaming,
      },
      rerankDocuments: {
        name: "RerankDocuments",
        I: evn,
        O: tvn,
        kind: gt.Unary,
      },
      streamComposer: {
        name: "StreamComposer",
        I: jB,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamComposerContext: {
        name: "StreamComposerContext",
        I: RVe,
        O: O$i,
        kind: gt.ServerStreaming,
      },
      warmComposerCache: {
        name: "WarmComposerCache",
        I: jB,
        O: Qxn,
        kind: gt.Unary,
      },
      keepComposerCacheWarm: {
        name: "KeepComposerCacheWarm",
        I: LEn,
        O: NEn,
        kind: gt.Unary,
      },
      countTokens: { name: "CountTokens", I: a2i, O: l2i, kind: gt.Unary },
      streamPotentialLocs: {
        name: "StreamPotentialLocs",
        I: Dxn,
        O: Txn,
        kind: gt.ServerStreaming,
      },
      streamPotentialLocsUnderneath: {
        name: "StreamPotentialLocsUnderneath",
        I: Exn,
        O: Ixn,
        kind: gt.ServerStreaming,
      },
      streamPotentialLocsInitialQueries: {
        name: "StreamPotentialLocsInitialQueries",
        I: xxn,
        O: kxn,
        kind: gt.ServerStreaming,
      },
      streamNotepadChat: {
        name: "StreamNotepadChat",
        I: Sxn,
        O: dI,
        kind: gt.ServerStreaming,
      },
      getChatTitle: { name: "GetChatTitle", I: Jxn, O: Kxn, kind: gt.Unary },
      getCompletion: { name: "GetCompletion", I: tkn, O: ikn, kind: gt.Unary },
      getSearch: { name: "GetSearch", I: skn, O: rkn, kind: gt.Unary },
      streamInlineEdits: {
        name: "StreamInlineEdits",
        I: jxn,
        O: zxn,
        kind: gt.ServerStreaming,
      },
      summarizeConversation: {
        name: "SummarizeConversation",
        I: ZN,
        O: Gxn,
        kind: gt.Unary,
      },
      isolatedTreesitter: {
        name: "IsolatedTreesitter",
        I: Bxn,
        O: _xn,
        kind: gt.Unary,
      },
      getSimplePrompt: {
        name: "GetSimplePrompt",
        I: Q$i,
        O: Hxn,
        kind: gt.Unary,
      },
      checkLongFilesFit: {
        name: "CheckLongFilesFit",
        I: ZN,
        O: Vxn,
        kind: gt.Unary,
      },
      getEvaluationPrompt: {
        name: "GetEvaluationPrompt",
        I: Wxn,
        O: qxn,
        kind: gt.Unary,
      },
      getUserInfo: { name: "GetUserInfo", I: akn, O: ckn, kind: gt.Unary },
      clearAndRedoEntireBucket: {
        name: "ClearAndRedoEntireBucket",
        I: hkn,
        O: ukn,
        kind: gt.Unary,
      },
      streamBranchGemini: {
        name: "StreamBranchGemini",
        I: CSn,
        O: ISn,
        kind: gt.ServerStreaming,
      },
      streamBranchFileSelections: {
        name: "StreamBranchFileSelections",
        I: vSn,
        O: ySn,
        kind: gt.ServerStreaming,
      },
      streamBackgroundEdit: {
        name: "StreamBackgroundEdit",
        I: K$i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamGPTFourEdit: {
        name: "StreamGPTFourEdit",
        I: G$i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamChat: {
        name: "StreamChat",
        I: ZN,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamChatWeb: {
        name: "StreamChatWeb",
        I: ZN,
        O: dI,
        kind: gt.ServerStreaming,
      },
      warmChatCache: { name: "WarmChatCache", I: Z$i, O: Zxn, kind: gt.Unary },
      streamEdit: {
        name: "StreamEdit",
        I: W$i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      preloadEdit: { name: "PreloadEdit", I: exn, O: txn, kind: gt.Unary },
      streamFastEdit: {
        name: "StreamFastEdit",
        I: V$i,
        O: Z1n,
        kind: gt.ServerStreaming,
      },
      streamGenerate: {
        name: "StreamGenerate",
        I: V1n,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamInlineLongCompletion: {
        name: "StreamInlineLongCompletion",
        I: W3i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      slashEdit: {
        name: "SlashEdit",
        I: J1n,
        O: AVe,
        kind: gt.ServerStreaming,
      },
      slashEditFollowUpWithPreviousEdits: {
        name: "SlashEditFollowUpWithPreviousEdits",
        I: K1n,
        O: Y1n,
        kind: gt.ServerStreaming,
      },
      streamAiPreviews: {
        name: "StreamAiPreviews",
        I: q3i,
        O: n4n,
        kind: gt.ServerStreaming,
      },
      shouldTurnOnCppOnboarding: {
        name: "ShouldTurnOnCppOnboarding",
        I: Fvn,
        O: Ovn,
        kind: gt.Unary,
      },
      streamReview: {
        name: "StreamReview",
        I: W1n,
        O: G1n,
        kind: gt.ServerStreaming,
      },
      streamReviewChat: {
        name: "StreamReviewChat",
        I: q1n,
        O: j1n,
        kind: gt.ServerStreaming,
      },
      checkQueuePosition: {
        name: "CheckQueuePosition",
        I: Y$i,
        O: Fxn,
        kind: gt.Unary,
      },
      checkUsageBasedPrice: {
        name: "CheckUsageBasedPrice",
        I: Mxn,
        O: $xn,
        kind: gt.Unary,
      },
      doThisForMeCheck: {
        name: "DoThisForMeCheck",
        I: dkn,
        O: e2i,
        kind: gt.Unary,
      },
      streamDoThisForMe: {
        name: "StreamDoThisForMe",
        I: bkn,
        O: wkn,
        kind: gt.ServerStreaming,
      },
      streamChatToolformer: {
        name: "StreamChatToolformer",
        I: ZN,
        O: t2i,
        kind: gt.ServerStreaming,
      },
      streamChatToolformerContinue: {
        name: "StreamChatToolformerContinue",
        I: Ckn,
        O: t2i,
        kind: gt.ServerStreaming,
      },
      pushAiThought: { name: "PushAiThought", I: Dkn, O: Lkn, kind: gt.Unary },
      checkDoableAsTask: {
        name: "CheckDoableAsTask",
        I: Nkn,
        O: Rkn,
        kind: gt.Unary,
      },
      reportGroundTruthCandidate: {
        name: "ReportGroundTruthCandidate",
        I: wEn,
        O: CEn,
        kind: gt.Unary,
      },
      reportCmdKFate: {
        name: "ReportCmdKFate",
        I: SEn,
        O: xEn,
        kind: gt.Unary,
      },
      showWelcomeScreen: {
        name: "ShowWelcomeScreen",
        I: OSn,
        O: BSn,
        kind: gt.Unary,
      },
      interfaceAgentInit: {
        name: "InterfaceAgentInit",
        I: q1t,
        O: Akn,
        kind: gt.Unary,
      },
      streamInterfaceAgentStatus: {
        name: "StreamInterfaceAgentStatus",
        I: s2i,
        O: Mkn,
        kind: gt.ServerStreaming,
      },
      taskGetInterfaceAgentStatus: {
        name: "TaskGetInterfaceAgentStatus",
        I: $kn,
        O: Fkn,
        kind: gt.ServerStreaming,
      },
      taskInit: { name: "TaskInit", I: Okn, O: Bkn, kind: gt.Unary },
      taskPause: { name: "TaskPause", I: zkn, O: Gkn, kind: gt.Unary },
      taskInfo: { name: "TaskInfo", I: jkn, O: n2i, kind: gt.Unary },
      taskStreamLog: {
        name: "TaskStreamLog",
        I: _kn,
        O: Jkn,
        kind: gt.ServerStreaming,
      },
      taskSendMessage: {
        name: "TaskSendMessage",
        I: Qkn,
        O: Zkn,
        kind: gt.Unary,
      },
      taskProvideResult: {
        name: "TaskProvideResult",
        I: Ykn,
        O: Xkn,
        kind: gt.Unary,
      },
      createExperimentalIndex: {
        name: "CreateExperimentalIndex",
        I: ZRi,
        O: qgn,
        kind: gt.Unary,
      },
      listExperimentalIndexFiles: {
        name: "ListExperimentalIndexFiles",
        I: eAi,
        O: jgn,
        kind: gt.Unary,
      },
      listenExperimentalIndex: {
        name: "ListenExperimentalIndex",
        I: _St,
        O: zgn,
        kind: gt.ServerStreaming,
      },
      registerFileToIndex: {
        name: "RegisterFileToIndex",
        I: sVe,
        O: USt,
        kind: gt.Unary,
      },
      setupIndexDependencies: {
        name: "SetupIndexDependencies",
        I: tAi,
        O: Zgn,
        kind: gt.Unary,
      },
      computeIndexTopoSort: {
        name: "ComputeIndexTopoSort",
        I: iAi,
        O: epn,
        kind: gt.Unary,
      },
      streamChatDeepContext: {
        name: "StreamChatDeepContext",
        I: P1n,
        O: L1n,
        kind: gt.ServerStreaming,
      },
      chooseCodeReferences: {
        name: "ChooseCodeReferences",
        I: nVe,
        O: USt,
        kind: gt.Unary,
      },
      registerCodeReferences: {
        name: "RegisterCodeReferences",
        I: rAi,
        O: npn,
        kind: gt.Unary,
      },
      extractPaths: { name: "ExtractPaths", I: cpn, O: hpn, kind: gt.Unary },
      summarizeWithReferences: {
        name: "SummarizeWithReferences",
        I: rVe,
        O: USt,
        kind: gt.Unary,
      },
      documentationQuery: {
        name: "DocumentationQuery",
        I: Lbn,
        O: Nbn,
        kind: gt.Unary,
      },
      availableDocs: { name: "AvailableDocs", I: R1n, O: A1n, kind: gt.Unary },
      reportFeedback: {
        name: "ReportFeedback",
        I: eEn,
        O: tEn,
        kind: gt.Unary,
      },
      reportBug: { name: "ReportBug", I: nEn, O: rEn, kind: gt.Unary },
      streamChatContext: {
        name: "StreamChatContext",
        I: RVe,
        O: O$i,
        kind: gt.ServerStreaming,
      },
      generateTldr: { name: "GenerateTldr", I: f1n, O: g1n, kind: gt.Unary },
      taskStreamChatContext: {
        name: "TaskStreamChatContext",
        I: F$i,
        O: k1n,
        kind: gt.ServerStreaming,
      },
      rerankResults: { name: "RerankResults", I: u1n, O: d1n, kind: gt.Unary },
      modelQuery: { name: "ModelQuery", I: PVe, O: o1n, kind: gt.Unary },
      modelQueryV2: {
        name: "ModelQueryV2",
        I: PVe,
        O: l1n,
        kind: gt.ServerStreaming,
      },
      intentPrediction: {
        name: "IntentPrediction",
        I: JSn,
        O: KSn,
        kind: gt.Unary,
      },
      streamCursorTutor: {
        name: "StreamCursorTutor",
        I: $$i,
        O: r1n,
        kind: gt.ServerStreaming,
      },
      checkFeatureStatus: {
        name: "CheckFeatureStatus",
        I: WSn,
        O: jSn,
        kind: gt.Unary,
      },
      getEffectiveTokenLimit: {
        name: "GetEffectiveTokenLimit",
        I: M$i,
        O: qSn,
        kind: gt.Unary,
      },
      getContextScores: {
        name: "GetContextScores",
        I: ASn,
        O: MSn,
        kind: gt.Unary,
      },
      streamCpp: {
        name: "StreamCpp",
        I: StreamCppRequest,
        O: Bvn,
        kind: gt.ServerStreaming,
      },
      cppConfig: { name: "CppConfig", I: T1t, O: Hvn, kind: gt.Unary },
      cppEditHistoryStatus: {
        name: "CppEditHistoryStatus",
        I: KMi,
        O: YMi,
        kind: gt.Unary,
      },
      cppAppend: { name: "CppAppend", I: Ewn, O: Iwn, kind: gt.Unary },
      checkNumberConfig: {
        name: "CheckNumberConfig",
        I: zSn,
        O: GSn,
        kind: gt.Unary,
      },
      streamTerminalAutocomplete: {
        name: "StreamTerminalAutocomplete",
        I: uxn,
        O: mxn,
        kind: gt.ServerStreaming,
      },
      streamPseudocodeGenerator: {
        name: "StreamPseudocodeGenerator",
        I: dxn,
        O: fxn,
        kind: gt.ServerStreaming,
      },
      streamPseudocodeMapper: {
        name: "StreamPseudocodeMapper",
        I: gxn,
        O: pxn,
        kind: gt.ServerStreaming,
      },
      streamAiLintBug: {
        name: "StreamAiLintBug",
        I: q$i,
        O: sxn,
        kind: gt.ServerStreaming,
      },
      streamAiCursorHelp: {
        name: "StreamAiCursorHelp",
        I: cxn,
        O: hxn,
        kind: gt.ServerStreaming,
      },
      logUserLintReply: {
        name: "LogUserLintReply",
        I: nxn,
        O: rxn,
        kind: gt.Unary,
      },
      logLinterExplicitUserFeedback: {
        name: "LogLinterExplicitUserFeedback",
        I: oxn,
        O: axn,
        kind: gt.Unary,
      },
      streamFixMarkers: {
        name: "StreamFixMarkers",
        I: oEn,
        O: vEn,
        kind: gt.ServerStreaming,
      },
      reportInlineAction: {
        name: "ReportInlineAction",
        I: r4n,
        O: o4n,
        kind: gt.Unary,
      },
      streamPriomptPrompt: {
        name: "StreamPriomptPrompt",
        I: A$i,
        O: VSn,
        kind: gt.ServerStreaming,
      },
      streamLint: {
        name: "StreamLint",
        I: r2i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      streamNewLintRule: {
        name: "StreamNewLintRule",
        I: z$i,
        O: dI,
        kind: gt.ServerStreaming,
      },
      aiProject: {
        name: "AiProject",
        I: R$i,
        O: _Sn,
        kind: gt.ServerStreaming,
      },
      toCamelCase: { name: "ToCamelCase", I: USn, O: HSn, kind: gt.Unary },
      reportGenerationFeedback: {
        name: "ReportGenerationFeedback",
        I: $Sn,
        O: FSn,
        kind: gt.Unary,
      },
      getThoughtAnnotation: {
        name: "GetThoughtAnnotation",
        I: cSn,
        O: hSn,
        kind: gt.Unary,
      },
      streamWebCmdKV1: {
        name: "StreamWebCmdKV1",
        I: NSn,
        O: RSn,
        kind: gt.ServerStreaming,
      },
      streamNextCursorPrediction: {
        name: "StreamNextCursorPrediction",
        I: PSn,
        O: LSn,
        kind: gt.ServerStreaming,
      },
      isCursorPredictionEnabled: {
        name: "IsCursorPredictionEnabled",
        I: DSn,
        O: TSn,
        kind: gt.Unary,
      },
      getCppEditClassification: {
        name: "GetCppEditClassification",
        I: HMi,
        O: zvn,
        kind: gt.Unary,
      },
      getTerminalCompletion: {
        name: "GetTerminalCompletion",
        I: GCn,
        O: JCn,
        kind: gt.Unary,
      },
      takeNotesOnCommitDiff: {
        name: "TakeNotesOnCommitDiff",
        I: pSn,
        O: mSn,
        kind: gt.Unary,
      },
      bulkEmbed: { name: "BulkEmbed", I: dSn, O: fSn, kind: gt.Unary },
      continueChatRequestWithCommits: {
        name: "ContinueChatRequestWithCommits",
        I: bSn,
        O: d4n,
        kind: gt.Unary,
      },
      backgroundCmdKEval: {
        name: "BackgroundCmdKEval",
        I: sSn,
        O: lSn,
        kind: gt.ServerStreaming,
      },
      backgroundCmdK: {
        name: "BackgroundCmdK",
        I: HT,
        O: iSn,
        kind: gt.ServerStreaming,
      },
      streamCursorMotion: {
        name: "StreamCursorMotion",
        I: S$i,
        O: QCn,
        kind: gt.ServerStreaming,
      },
      calculateAutoSelection: {
        name: "CalculateAutoSelection",
        I: C$i,
        O: XCn,
        kind: gt.Unary,
      },
      getAtSymbolSuggestions: {
        name: "GetAtSymbolSuggestions",
        I: y$i,
        O: jCn,
        kind: gt.Unary,
      },
      getCodebaseQuestions: {
        name: "GetCodebaseQuestions",
        I: ZN,
        O: WCn,
        kind: gt.Unary,
      },
      getRankedContextFromContextBank: {
        name: "GetRankedContextFromContextBank",
        I: v$i,
        O: VCn,
        kind: gt.ServerStreaming,
      },
      cppEditHistoryAppend: {
        name: "CppEditHistoryAppend",
        I: JMi,
        O: Dwn,
        kind: gt.Unary,
      },
      devOnlyGetPastRequestIds: {
        name: "DevOnlyGetPastRequestIds",
        I: _Cn,
        O: HCn,
        kind: gt.Unary,
      },
      getFilesForComposer: {
        name: "GetFilesForComposer",
        I: kEn,
        O: EEn,
        kind: gt.Unary,
      },
      tryParseTypeScriptTreeSitter: {
        name: "TryParseTypeScriptTreeSitter",
        I: OCn,
        O: BCn,
        kind: gt.Unary,
      },
      nameTab: { name: "NameTab", I: ACn, O: MCn, kind: gt.Unary },
      isTerminalFinished: {
        name: "IsTerminalFinished",
        I: b$i,
        O: pCn,
        kind: gt.Unary,
      },
      isTerminalFinishedV2: {
        name: "IsTerminalFinishedV2",
        I: b$i,
        O: mCn,
        kind: gt.Unary,
      },
      testModelStatus: {
        name: "TestModelStatus",
        I: $Cn,
        O: FCn,
        kind: gt.Unary,
      },
      findBugs: { name: "FindBugs", I: o2i, O: IEn, kind: gt.Unary },
      contextReranking: {
        name: "ContextReranking",
        I: NCn,
        O: RCn,
        kind: gt.Unary,
      },
      autoContext: { name: "AutoContext", I: wCn, O: SCn, kind: gt.Unary },
      writeGitCommitMessage: {
        name: "WriteGitCommitMessage",
        I: TEn,
        O: PEn,
        kind: gt.Unary,
      },
      streamBugBot: {
        name: "StreamBugBot",
        I: p1t,
        O: LCn,
        kind: gt.ServerStreaming,
      },
      checkBugBotPrice: {
        name: "CheckBugBotPrice",
        I: xCn,
        O: kCn,
        kind: gt.Unary,
      },
      checkBugBotTelemetryHealthy: {
        name: "CheckBugBotTelemetryHealthy",
        I: ECn,
        O: ICn,
        kind: gt.Unary,
      },
      getSuggestedBugBotIterations: {
        name: "GetSuggestedBugBotIterations",
        I: DCn,
        O: TCn,
        kind: gt.Unary,
      },
      testBidi: { name: "TestBidi", I: bCn, O: vCn, kind: gt.BiDiStreaming },
      streamDiffReview: {
        name: "StreamDiffReview",
        I: REn,
        O: $En,
        kind: gt.ServerStreaming,
      },
    },
  },
  _je
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.IN_PROGRESS = 1)] = "IN_PROGRESS"),
    (i[(i.SUCCEEDED = 2)] = "SUCCEEDED"),
    (i[(i.FAILED = 3)] = "FAILED"),
    (i[(i.NOT_FOUND = 4)] = "NOT_FOUND")
})(_je || (_je = {})),
  v.util.setEnumType(_je, "aiserver.v1.UploadStatus", [
    { no: 0, name: "UPLOAD_STATUS_UNSPECIFIED" },
    { no: 1, name: "UPLOAD_STATUS_IN_PROGRESS" },
    { no: 2, name: "UPLOAD_STATUS_SUCCEEDED" },
    { no: 3, name: "UPLOAD_STATUS_FAILED" },
    { no: 4, name: "UPLOAD_STATUS_NOT_FOUND" },
  ])
var C4n = class q4e extends _ {
    constructor(e) {
      super(), (this.docIdentifier = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RescrapeDocsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
        { no: 2, name: "force_reupload", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new q4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new q4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new q4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(q4e, e, t)
    }
  },
  S4n = class j4e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RescrapeDocsRequestV2"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "new_doc_req", kind: "message", T: rTt },
        { no: 2, name: "force_reupload", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new j4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new j4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new j4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(j4e, e, t)
    }
  },
  j3i = class z4e extends _ {
    constructor(e) {
      super(), (this.success = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RescrapeDocsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "success", kind: "scalar", T: 8 },
        { no: 2, name: "new_doc_identifier", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new z4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new z4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new z4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(z4e, e, t)
    }
  },
  x4n = class G4e extends _ {
    constructor(e) {
      super(), (this.docIdentifier = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UploadedStatusRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new G4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new G4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new G4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(G4e, e, t)
    }
  },
  k4n = class J4e extends _ {
    constructor(e) {
      super(), (this.docIdentifier = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UploadDocumentationRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new J4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new J4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new J4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(J4e, e, t)
    }
  },
  z3i = class K4e extends _ {
    constructor(e) {
      super(), (this.docIdentifier = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetPagesRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new K4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new K4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new K4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(K4e, e, t)
    }
  },
  E4n = class Y4e extends _ {
    constructor(e) {
      super(), (this.docIdentifier = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetDocRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new Y4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Y4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Y4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Y4e, e, t)
    }
  },
  I4n = class X4e extends _ {
    constructor(e) {
      super(),
        (this.id = 0),
        (this.uuid = ""),
        (this.docIdentifier = ""),
        (this.docName = ""),
        (this.docUrlRoot = ""),
        (this.docUrlPrefix = ""),
        (this.isDifferentPrefix = !1),
        (this.createdAt = ""),
        (this.updatedAt = ""),
        (this.lastUploadedAt = ""),
        (this.showToAllUsers = !1),
        (this.teamId = 0),
        (this.customInstructions = ""),
        (this.pages = []),
        (this.publishToTeam = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ProtoDoc"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 5 },
        { no: 2, name: "uuid", kind: "scalar", T: 9 },
        { no: 3, name: "doc_identifier", kind: "scalar", T: 9 },
        { no: 4, name: "doc_name", kind: "scalar", T: 9 },
        { no: 5, name: "doc_url_root", kind: "scalar", T: 9 },
        { no: 6, name: "doc_url_prefix", kind: "scalar", T: 9 },
        { no: 7, name: "is_different_prefix", kind: "scalar", T: 8 },
        { no: 8, name: "created_at", kind: "scalar", T: 9 },
        { no: 9, name: "updated_at", kind: "scalar", T: 9 },
        { no: 10, name: "last_uploaded_at", kind: "scalar", T: 9 },
        { no: 11, name: "upload_status", kind: "message", T: Uje },
        { no: 12, name: "show_to_all_users", kind: "scalar", T: 8 },
        { no: 13, name: "team_id", kind: "scalar", T: 5 },
        { no: 14, name: "custom_instructions", kind: "scalar", T: 9 },
        { no: 15, name: "pages", kind: "message", T: D4n, repeated: !0 },
        { no: 16, name: "publish_to_team", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new X4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new X4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new X4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(X4e, e, t)
    }
  },
  D4n = class Q4e extends _ {
    constructor(e) {
      super(), (this.url = ""), (this.title = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ProtoDocPage"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "url", kind: "scalar", T: 9 },
        { no: 2, name: "title", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new Q4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Q4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Q4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Q4e, e, t)
    }
  },
  T4n = class Z4e extends _ {
    constructor(e) {
      super(),
        (this.pages = []),
        (this.pageUrls = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Pages"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "pages", kind: "scalar", T: 9, repeated: !0 },
        { no: 2, name: "page_urls", kind: "scalar", T: 9, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new Z4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Z4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Z4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Z4e, e, t)
    }
  },
  P4n = class eBe extends _ {
    constructor(e) {
      super(),
        (this.docIdentifier = ""),
        (this.password = ""),
        (this.docName = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.MarkAsPublicRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
        { no: 2, name: "password", kind: "scalar", T: 9 },
        { no: 3, name: "doc_name", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new eBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new eBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new eBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(eBe, e, t)
    }
  },
  rTt = class tBe extends _ {
    constructor(e) {
      super(),
        (this.docIdentifier = ""),
        (this.ignorePrefixes = []),
        (this.ignoreUrls = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.NewDocumentationRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
        { no: 2, name: "metadata", kind: "message", T: CMi },
        { no: 4, name: "ignore_prefixes", kind: "scalar", T: 9, repeated: !0 },
        { no: 5, name: "ignore_urls", kind: "scalar", T: 9, repeated: !0 },
        { no: 6, name: "custom_instructions", kind: "scalar", T: 9, opt: !0 },
        { no: 7, name: "publish_to_team", kind: "scalar", T: 8, opt: !0 },
        { no: 8, name: "client_handles_uuid", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new tBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new tBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new tBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(tBe, e, t)
    }
  },
  G3i = class iBe extends _ {
    constructor(e) {
      super(),
        (this.status = cP.UNSPECIFIED),
        (this.progress = 0),
        (this.similarDocIdentifier = ""),
        (this.uploadedPages = []),
        (this.docUuid = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UploadResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "status", kind: "enum", T: v.getEnumType(cP) },
        { no: 2, name: "progress", kind: "scalar", T: 2 },
        { no: 3, name: "similar_doc_identifier", kind: "scalar", T: 9 },
        { no: 4, name: "uploaded_pages", kind: "scalar", T: 9, repeated: !0 },
        { no: 5, name: "doc_uuid", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new iBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new iBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new iBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(iBe, e, t)
    }
  },
  cP
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.SUCCESS = 1)] = "SUCCESS"),
    (i[(i.FAILURE = 2)] = "FAILURE"),
    (i[(i.ALREADY_EXISTS = 3)] = "ALREADY_EXISTS"),
    (i[(i.SIMILAR_ALREADY_EXISTS = 4)] = "SIMILAR_ALREADY_EXISTS")
})(cP || (cP = {})),
  v.util.setEnumType(cP, "aiserver.v1.UploadResponse.Status", [
    { no: 0, name: "STATUS_UNSPECIFIED" },
    { no: 1, name: "STATUS_SUCCESS" },
    { no: 2, name: "STATUS_FAILURE" },
    { no: 3, name: "STATUS_ALREADY_EXISTS" },
    { no: 4, name: "STATUS_SIMILAR_ALREADY_EXISTS" },
  ])
var Uje = class sBe extends _ {
    constructor(e) {
      super(),
        (this.status = f0.UNSPECIFIED),
        (this.uploadedPages = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UploadedStatus"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "status", kind: "enum", T: v.getEnumType(f0) },
        { no: 2, name: "uploaded_pages", kind: "scalar", T: 9, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new sBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new sBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new sBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(sBe, e, t)
    }
  },
  f0
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.IN_PROGRESS = 1)] = "IN_PROGRESS"),
    (i[(i.SUCCEEDED = 2)] = "SUCCEEDED"),
    (i[(i.FAILED = 3)] = "FAILED"),
    (i[(i.NOT_FOUND = 4)] = "NOT_FOUND")
})(f0 || (f0 = {})),
  v.util.setEnumType(f0, "aiserver.v1.UploadedStatus.Status", [
    { no: 0, name: "STATUS_UNSPECIFIED" },
    { no: 1, name: "STATUS_IN_PROGRESS" },
    { no: 2, name: "STATUS_SUCCEEDED" },
    { no: 3, name: "STATUS_FAILED" },
    { no: 4, name: "STATUS_NOT_FOUND" },
  ])
var L4n = class nBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpsertDocsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "upload_status",
          kind: "enum",
          T: v.getEnumType(_je),
          opt: !0,
        },
        { no: 2, name: "ignore_index_prefix", kind: "scalar", T: 9, opt: !0 },
        { no: 3, name: "doc_id", kind: "scalar", T: 5, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new nBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new nBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new nBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(nBe, e, t)
    }
  },
  N4n = class rBe extends _ {
    constructor(e) {
      super(), (this.responses = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpsertDocsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "responses", kind: "message", T: G3i, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new rBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new rBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new rBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(rBe, e, t)
    }
  },
  X7 = {
    typeName: "aiserver.v1.UploadService",
    methods: {
      uploadDocumentation: {
        name: "UploadDocumentation",
        I: rTt,
        O: G3i,
        kind: gt.Unary,
      },
      uploadDocumentationStatus: {
        name: "UploadDocumentationStatus",
        I: k4n,
        O: Uje,
        kind: gt.Unary,
      },
      markAsPublic: { name: "MarkAsPublic", I: P4n, O: Uje, kind: gt.Unary },
      uploadStatus: { name: "UploadStatus", I: x4n, O: Uje, kind: gt.Unary },
      getPages: { name: "GetPages", I: z3i, O: T4n, kind: gt.Unary },
      getDoc: { name: "GetDoc", I: E4n, O: I4n, kind: gt.Unary },
      rescrapeDocs: { name: "RescrapeDocs", I: C4n, O: j3i, kind: gt.Unary },
      rescrapeDocsV2: {
        name: "RescrapeDocsV2",
        I: S4n,
        O: j3i,
        kind: gt.Unary,
      },
      upsertAllDocs: { name: "UpsertAllDocs", I: L4n, O: N4n, kind: gt.Unary },
    },
  },
  Q7 = {
    typeName: "aiserver.v1.CmdKService",
    methods: {
      streamCmdK: {
        name: "StreamCmdK",
        I: n$i,
        O: a$i,
        kind: gt.ServerStreaming,
      },
      streamHypermode: {
        name: "StreamHypermode",
        I: s$i,
        O: a$i,
        kind: gt.ServerStreaming,
      },
      rerankCmdKContext: {
        name: "RerankCmdKContext",
        I: B1t,
        O: w0n,
        kind: gt.Unary,
      },
      streamTerminalCmdK: {
        name: "StreamTerminalCmdK",
        I: o$i,
        O: E0n,
        kind: gt.ServerStreaming,
      },
      rerankTerminalCmdKContext: {
        name: "RerankTerminalCmdKContext",
        I: C0n,
        O: S0n,
        kind: gt.Unary,
      },
      getRelevantChunks: {
        name: "GetRelevantChunks",
        I: R0n,
        O: A0n,
        kind: gt.ServerStreaming,
      },
    },
  },
  Ti = Re("productService"),
  R4n = "vscode://schemas/vscode-product"
function A4n(i, e) {
  return U.joinPath(i.userHome, e.dataFolderName, "shadow-workspaces")
}
var JC
;(function (i) {
  ;(i[(i.GENERATE = 0)] = "GENERATE"),
    (i[(i.EDIT = 1)] = "EDIT"),
    (i[(i.CHAT = 2)] = "CHAT"),
    (i[(i.GPT_FOUR_EDIT = 3)] = "GPT_FOUR_EDIT"),
    (i[(i.COMPOSER = 4)] = "COMPOSER")
})(JC || (JC = {}))
var oTt = {
    typeName: "aiserver.v1.RepositoryService",
    methods: {
      fastRepoInitHandshake: {
        name: "FastRepoInitHandshake",
        I: mpn,
        O: bpn,
        kind: gt.Unary,
      },
      syncMerkleSubtree: {
        name: "SyncMerkleSubtree",
        I: kpn,
        O: Epn,
        kind: gt.Unary,
      },
      fastUpdateFile: {
        name: "FastUpdateFile",
        I: Lpn,
        O: Rpn,
        kind: gt.Unary,
      },
      searchRepositoryV2: {
        name: "SearchRepositoryV2",
        I: gAi,
        O: pAi,
        kind: gt.Unary,
      },
      removeRepositoryV2: {
        name: "RemoveRepositoryV2",
        I: fAi,
        O: jpn,
        kind: gt.Unary,
      },
      fastRepoInitHandshakeV2: {
        name: "FastRepoInitHandshakeV2",
        I: vpn,
        O: wpn,
        kind: gt.Unary,
      },
      syncMerkleSubtreeV2: {
        name: "SyncMerkleSubtreeV2",
        I: Dpn,
        O: Tpn,
        kind: gt.Unary,
      },
      fastUpdateFileV2: {
        name: "FastUpdateFileV2",
        I: Apn,
        O: $pn,
        kind: gt.Unary,
      },
      fastRepoSyncComplete: {
        name: "FastRepoSyncComplete",
        I: Spn,
        O: xpn,
        kind: gt.Unary,
      },
      semSearchFast: {
        name: "SemSearchFast",
        I: mAi,
        O: vAi,
        kind: gt.ServerStreaming,
      },
      semSearch: {
        name: "SemSearch",
        I: mAi,
        O: vAi,
        kind: gt.ServerStreaming,
      },
      ensureIndexCreated: {
        name: "EnsureIndexCreated",
        I: gpn,
        O: ppn,
        kind: gt.Unary,
      },
      getHighLevelFolderDescription: {
        name: "GetHighLevelFolderDescription",
        I: upn,
        O: fpn,
        kind: gt.Unary,
      },
      getEmbeddings: { name: "GetEmbeddings", I: Vpn, O: Wpn, kind: gt.Unary },
      getUploadLimits: {
        name: "GetUploadLimits",
        I: Fpn,
        O: Opn,
        kind: gt.Unary,
      },
      getNumFilesToSend: {
        name: "GetNumFilesToSend",
        I: Bpn,
        O: _pn,
        kind: gt.Unary,
      },
      getAvailableChunkingStrategies: {
        name: "GetAvailableChunkingStrategies",
        I: Upn,
        O: Hpn,
        kind: gt.Unary,
      },
      getLineNumberClassifications: {
        name: "GetLineNumberClassifications",
        I: amn,
        O: lmn,
        kind: gt.ServerStreaming,
      },
    },
  },
  cl = Re("statusbarService"),
  J3i
;(function (i) {
  ;(i[(i.LEFT = 0)] = "LEFT"), (i[(i.RIGHT = 1)] = "RIGHT")
})(J3i || (J3i = {}))
function Ble(i) {
  const e = i
  return typeof e?.id == "string" && typeof e.alignment == "number"
}
function M4n(i) {
  const e = i
  return (
    (typeof e?.primary == "number" || Ble(e?.primary)) &&
    typeof e?.secondary == "number"
  )
}
var Hje = { id: "statusBar.entry.showTooltip", title: "" },
  $4n = ["standard", "warning", "error", "prominent", "remote", "offline"],
  cursorCredsService = Re("cursorCredsService"),
  cw = "https://staging.cursor.sh",
  aTt = "https://dev-staging.cursor.sh",
  Z7 = "https://dev-staging.cursor.sh",
  eU = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE",
  tU = "dev.authentication.cursor.sh",
  ry = "https://localhost:",
  K3i = 8e3,
  iU = "http://localhost:4000",
  ab = {
    PROD: "Prod",
    STAGING: "Staging",
    DEV_STAGING: "DevStaging(w/local-website)`",
    STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
    LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
    STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS:
      "StagingLocal(cpp/embeddings on Staging)",
    LOCAL_EXCEPT_CPP: "Local(except cpp)",
    FULL_LOCAL: "FullLocal",
    LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)",
  },
  lTt = class extends V {
    constructor(e, t) {
      super(),
        (this.c = e),
        (this.f = t),
        (this.a = new R()),
        (this.onDidRequestRelogin = this.a.event),
        (this.b = wkt),
        (this.namingMap = {
          [ab.PROD]: () => this.switchToProdServer,
          [ab.LOCAL_EXCEPT_CPP]: () => this.switchToLocalExceptCppServer,
          [ab.FULL_LOCAL]: () => this.switchToFullLocalServer,
          [ab.STAGING]: () => this.switchToStagingServer,
          [ab.DEV_STAGING]: () => this.switchToDevStagingServer,
          [ab.STAGING_LOCAL_WEBSITE]: () =>
            this.switchToStagingServerLocalWebsite,
          [ab.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
            this.switchToLocalExceptCppAndEmbeddingsServer,
          [ab.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
            this.switchToLocalExceptCppAndEmbeddingsServerStagingProd,
          [ab.LOCAL_EXCEPT_EMBEDDINGS]: () =>
            this.switchToLocalExceptEmbeddingsServer,
        }),
        this.switchToProdServer(),
        this.h()
    }
    h() {}
    getAuth0ClientId() {
      return this.c.applicationUserPersistentStorage.cursorCreds.authClientId
    }
    reloginIfNeeded(e) {
      const t = this.getAuth0ClientId()
      e !== t && this.a.fire()
    }
    hallucinatedFunctionsDebugUrl() {
      return this.c.workspaceUserPersistentStorage
        .hallucinatedFunctionsWorkspaceState
        ?.hallucinatedFunctionsLocalBackend === !0
        ? ry + this.localBackendPort()
        : Ckt
    }
    localBackendPort() {
      return this.c.applicationUserPersistentStorage.localBackendPort || K3i
    }
    switchToProdServer() {
      const e = this.getAuth0ClientId()
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: vkt,
        backendUrl: ykt,
        authClientId: Skt,
        authDomain: xkt,
        repoBackendUrl: QTn,
        telemBackendUrl: MG,
        geoCppBackendUrl: this.b,
        cppConfigBackendUrl: SWe,
        cmdkBackendUrl: TOi,
        hfUrl: Ckt,
        credentialsDisplayName: ab.PROD,
      }),
        this.reloginIfNeeded(e),
        this.h()
    }
    switchToLocalExceptCppServer() {
      const e = this.localBackendPort()
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: ry + e,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: ry + e,
        telemBackendUrl: MG,
        geoCppBackendUrl: this.b,
        cppConfigBackendUrl: SWe,
        cmdkBackendUrl: ry + e,
        hfUrl: this.hallucinatedFunctionsDebugUrl(),
        credentialsDisplayName: ab.LOCAL_EXCEPT_CPP,
      }),
        this.h()
    }
    switchToFullLocalServer() {
      const e = this.localBackendPort()
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: ry + e,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: ry + e,
        telemBackendUrl: ry + e,
        geoCppBackendUrl: ry + e,
        cppConfigBackendUrl: ry + e,
        cmdkBackendUrl: ry + e,
        hfUrl: this.hallucinatedFunctionsDebugUrl(),
        credentialsDisplayName: ab.FULL_LOCAL,
      }),
        this.h()
    }
    switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
      const e = this.localBackendPort()
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: ry + e,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: aTt,
        telemBackendUrl: cw,
        geoCppBackendUrl: cw,
        cppConfigBackendUrl: cw,
        cmdkBackendUrl: ry + e,
        hfUrl: this.hallucinatedFunctionsDebugUrl(),
        credentialsDisplayName: ab.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
      }),
        this.h()
    }
    switchToLocalExceptCppAndEmbeddingsServer() {
      const e = this.localBackendPort()
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: ry + e,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: aTt,
        telemBackendUrl: MG,
        geoCppBackendUrl: this.b,
        cppConfigBackendUrl: SWe,
        cmdkBackendUrl: ry + e,
        hfUrl: this.hallucinatedFunctionsDebugUrl(),
        credentialsDisplayName: ab.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
      }),
        this.h()
    }
    switchToStagingServer() {
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: vkt,
        backendUrl: cw,
        authClientId: Skt,
        authDomain: xkt,
        repoBackendUrl: cw,
        telemBackendUrl: cw,
        geoCppBackendUrl: cw,
        cppConfigBackendUrl: cw,
        cmdkBackendUrl: cw,
        hfUrl: cw,
        credentialsDisplayName: ab.STAGING,
      }),
        this.h()
    }
    switchToDevStagingServer() {
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: Z7,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: Z7,
        telemBackendUrl: Z7,
        geoCppBackendUrl: Z7,
        cppConfigBackendUrl: Z7,
        cmdkBackendUrl: Z7,
        hfUrl: Z7,
        credentialsDisplayName: ab.DEV_STAGING,
      })
    }
    switchToStagingServerLocalWebsite() {
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: cw,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: cw,
        telemBackendUrl: cw,
        geoCppBackendUrl: cw,
        cppConfigBackendUrl: cw,
        cmdkBackendUrl: cw,
        hfUrl: cw,
        credentialsDisplayName: ab.STAGING_LOCAL_WEBSITE,
      }),
        this.h()
    }
    switchToLocalExceptEmbeddingsServer() {
      const e = this.c.applicationUserPersistentStorage.localBackendPort || K3i
      this.c.setApplicationUserPersistentStorage("cursorCreds", {
        websiteUrl: iU,
        backendUrl: ry + e,
        authClientId: eU,
        authDomain: tU,
        repoBackendUrl: aTt,
        telemBackendUrl: MG,
        geoCppBackendUrl: ry + e,
        cppConfigBackendUrl: ry + e,
        cmdkBackendUrl: ry + e,
        hfUrl: this.hallucinatedFunctionsDebugUrl(),
        credentialsDisplayName: ab.LOCAL_EXCEPT_EMBEDDINGS,
      }),
        this.h()
    }
    getCredentials() {
      return this.c.applicationUserPersistentStorage.cursorCreds
    }
    getLoginUrl() {
      return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/loginDeepControl`
    }
    getLogoutUrl() {
      return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/logout`
    }
    getSettingsUrl() {
      return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/settings`
    }
    getCheckoutUrl() {
      return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/pricing`
    }
    getPollingEndpoint() {
      return `${this.c.applicationUserPersistentStorage.cursorCreds.backendUrl}/auth/poll`
    }
    getBackendUrl() {
      return this.c.applicationUserPersistentStorage.cursorCreds.backendUrl
    }
    getRepoBackendUrl() {
      return this.c.applicationUserPersistentStorage.cursorCreds.repoBackendUrl
    }
    getTelemBackendUrl() {
      return this.c.applicationUserPersistentStorage.cursorCreds.telemBackendUrl
    }
    getGeoCppBackendUrl() {
      return this.c.applicationUserPersistentStorage.cursorCreds
        .geoCppBackendUrl
    }
    getCppConfigBackendUrl() {
      return this.c.applicationUserPersistentStorage.cursorCreds
        .cppConfigBackendUrl
    }
    setGeoCppBackendUrl(e) {
      ;(e === "" || !e.includes("cursor.sh")) && (e = wkt),
        (this.b = e),
        this.c.setApplicationUserPersistentStorage("cursorCreds", (t) =>
          t.credentialsDisplayName !== ab.LOCAL_EXCEPT_EMBEDDINGS &&
          t.credentialsDisplayName !== ab.FULL_LOCAL
            ? { ...t, geoCppBackendUrl: e }
            : t,
        )
    }
  }
;(lTt = __decorate([__param(0, ei), __param(1, cl)], lTt)), Ve(cursorCredsService, lTt, 1)
var hP
;(function (i) {
  ;(i.Prod = "prod"),
    (i.Staging = "staging"),
    (i.DevStaging = "devStagingEverything"),
    (i.StagingLocalWebsite = "stagingLocalWebsite"),
    (i.LocalExceptCppAndEmbeddings = "local"),
    (i.LocalExceptCppAndEmbeddingsStaging = "localStaging"),
    (i.LocalExceptCPP = "fullLocal"),
    (i.LocalExceptEmbeddings = "localExceptEmbeddings"),
    (i.FullLocal = "fullLocalincludingcpp")
})(hP || (hP = {}))
var cko = {
    [hP.Prod]: 1814,
    [hP.Staging]: 1815,
    [hP.StagingLocalWebsite]: 1816,
    [hP.LocalExceptCppAndEmbeddings]: 1817,
    [hP.LocalExceptCPP]: 1818,
    [hP.FullLocal]: 1819,
    [hP.LocalExceptEmbeddings]: 1820,
    [hP.DevStaging]: 1821,
    [hP.LocalExceptCppAndEmbeddingsStaging]: 1822,
  },
  uP = Re("urlService"),
  LI
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.OWNER = 1)] = "OWNER"),
    (i[(i.MEMBER = 2)] = "MEMBER"),
    (i[(i.FREE_OWNER = 3)] = "FREE_OWNER")
})(LI || (LI = {})),
  v.util.setEnumType(LI, "aiserver.v1.TeamRole", [
    { no: 0, name: "TEAM_ROLE_UNSPECIFIED" },
    { no: 1, name: "TEAM_ROLE_OWNER" },
    { no: 2, name: "TEAM_ROLE_MEMBER" },
    { no: 3, name: "TEAM_ROLE_FREE_OWNER" },
  ])
var Y3i = class oBe extends _ {
    constructor(e) {
      super(), (this.requestQuota = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpdateFastRequestsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "request_quota", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new oBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new oBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new oBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(oBe, e, t)
    }
  },
  F4n = class aBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpdateFastRequestsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new aBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new aBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new aBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(aBe, e, t)
    }
  },
  X3i = class lBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetFastRequestsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new lBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new lBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new lBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(lBe, e, t)
    }
  },
  O4n = class cBe extends _ {
    constructor(e) {
      super(), (this.requestQuota = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetFastRequestsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "request_quota", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new cBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new cBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new cBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(cBe, e, t)
    }
  },
  B4n = class hBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DeleteAccountRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new hBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new hBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new hBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(hBe, e, t)
    }
  },
  _4n = class uBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DeleteAccountResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new uBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new uBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new uBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(uBe, e, t)
    }
  },
  U4n = class dBe extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.privacyModeForced = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SwitchTeamPrivacyModeRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "privacy_mode_forced", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new dBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new dBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new dBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(dBe, e, t)
    }
  },
  H4n = class fBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SwitchTeamPrivacyModeResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new fBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new fBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new fBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(fBe, e, t)
    }
  },
  Q3i = class gBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamPrivacyModeForcedRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new gBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new gBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new gBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(gBe, e, t)
    }
  },
  V4n = class pBe extends _ {
    constructor(e) {
      super(), (this.privacyModeForced = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamPrivacyModeForcedResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "privacy_mode_forced", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new pBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new pBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new pBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(pBe, e, t)
    }
  },
  W4n = class mBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamHasValidPaymentMethodRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new mBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new mBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new mBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(mBe, e, t)
    }
  },
  q4n = class bBe extends _ {
    constructor(e) {
      super(),
        (this.hasValidPaymentMethod = !1),
        (this.trialDaysRemaining = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamHasValidPaymentMethodResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "has_valid_payment_method", kind: "scalar", T: 8 },
        { no: 2, name: "trial_days_remaining", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new bBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new bBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new bBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(bBe, e, t)
    }
  },
  j4n = class vBe extends _ {
    constructor(e) {
      super(), (this.name = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamWithFreeTrialRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
        { no: 2, name: "privacy_mode_forced", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new vBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new vBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new vBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(vBe, e, t)
    }
  },
  z4n = class yBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamWithFreeTrialResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new yBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new yBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new yBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(yBe, e, t)
    }
  },
  G4n = class wBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetPricingHistoryRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new wBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new wBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new wBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(wBe, e, t)
    }
  },
  J4n = class CBe extends _ {
    constructor(e) {
      super(), (this.pricingHistory = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetPricingHistoryResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "pricing_history",
          kind: "message",
          T: K4n,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new CBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new CBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new CBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(CBe, e, t)
    }
  },
  K4n = class SBe extends _ {
    constructor(e) {
      super(),
        (this.description = ""),
        (this.id = ""),
        (this.changelog = ""),
        (this.createdAt = Jf.zero),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetPricingHistoryResponse.PricingDescription"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "description", kind: "scalar", T: 9 },
        { no: 2, name: "id", kind: "scalar", T: 9 },
        { no: 3, name: "changelog", kind: "scalar", T: 9 },
        { no: 4, name: "created_at", kind: "scalar", T: 3 },
      ])
    }
    static fromBinary(e, t) {
      return new SBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new SBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new SBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(SBe, e, t)
    }
  },
  Y4n = class xBe extends _ {
    constructor(e) {
      super(), (this.month = 0), (this.year = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetMonthlyInvoiceRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
        { no: 2, name: "month", kind: "scalar", T: 5 },
        { no: 3, name: "year", kind: "scalar", T: 5 },
        { no: 4, name: "include_usage_events", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new xBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new xBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new xBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(xBe, e, t)
    }
  },
  X4n = class kBe extends _ {
    constructor(e) {
      super(),
        (this.items = []),
        (this.usageEvents = []),
        (this.isUsageEventsMaybeCutoff = !1),
        (this.hasUnpaidMidMonthInvoice = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetMonthlyInvoiceResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "items", kind: "message", T: Q4n, repeated: !0 },
        { no: 2, name: "pricing_description", kind: "message", T: Z4n },
        { no: 3, name: "usage_events", kind: "message", T: gCn, repeated: !0 },
        { no: 4, name: "is_usage_events_maybe_cutoff", kind: "scalar", T: 8 },
        { no: 5, name: "has_unpaid_mid_month_invoice", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new kBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new kBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new kBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(kBe, e, t)
    }
  },
  Q4n = class EBe extends _ {
    constructor(e) {
      super(),
        (this.description = ""),
        (this.cents = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetMonthlyInvoiceResponse.InvoiceItem"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "description", kind: "scalar", T: 9 },
        { no: 2, name: "cents", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new EBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new EBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new EBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(EBe, e, t)
    }
  },
  Z4n = class IBe extends _ {
    constructor(e) {
      super(),
        (this.description = ""),
        (this.id = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetMonthlyInvoiceResponse.PricingDescription"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "description", kind: "scalar", T: 9 },
        { no: 2, name: "id", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new IBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new IBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new IBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(IBe, e, t)
    }
  },
  eBn = class DBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetHardLimitRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new DBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new DBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new DBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(DBe, e, t)
    }
  },
  tBn = class TBe extends _ {
    constructor(e) {
      super(),
        (this.hardLimit = 0),
        (this.noUsageBasedAllowed = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetHardLimitResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "hard_limit", kind: "scalar", T: 5 },
        { no: 2, name: "no_usage_based_allowed", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new TBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new TBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new TBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(TBe, e, t)
    }
  },
  iBn = class PBe extends _ {
    constructor(e) {
      super(),
        (this.hardLimit = 0),
        (this.noUsageBasedAllowed = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetHardLimitRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5, opt: !0 },
        { no: 2, name: "hard_limit", kind: "scalar", T: 5 },
        { no: 3, name: "no_usage_based_allowed", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new PBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new PBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new PBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(PBe, e, t)
    }
  },
  sBn = class LBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetHardLimitResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new LBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new LBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new LBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(LBe, e, t)
    }
  },
  nBn = class NBe extends _ {
    constructor(e) {
      super(),
        (this.name = ""),
        (this.id = 0),
        (this.role = LI.UNSPECIFIED),
        (this.seats = 0),
        (this.hasBilling = !1),
        (this.requestQuotaPerSeat = 0),
        (this.privacyModeForced = !1),
        (this.allowSso = !1),
        (this.adminOnlyUsagePricing = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.Team"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
        { no: 2, name: "id", kind: "scalar", T: 5 },
        { no: 3, name: "role", kind: "enum", T: v.getEnumType(LI) },
        { no: 4, name: "seats", kind: "scalar", T: 5 },
        { no: 5, name: "has_billing", kind: "scalar", T: 8 },
        { no: 6, name: "request_quota_per_seat", kind: "scalar", T: 5 },
        { no: 7, name: "privacy_mode_forced", kind: "scalar", T: 8 },
        { no: 8, name: "allow_sso", kind: "scalar", T: 8 },
        { no: 9, name: "admin_only_usage_pricing", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new NBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new NBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new NBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(NBe, e, t)
    }
  },
  Z3i = class RBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new RBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new RBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new RBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(RBe, e, t)
    }
  },
  rBn = class ABe extends _ {
    constructor(e) {
      super(), (this.teams = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "teams", kind: "message", T: nBn, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new ABe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ABe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ABe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(ABe, e, t)
    }
  },
  oBn = class MBe extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.seats = 0),
        (this.yearly = !1),
        (this.requestQuotaPerSeat = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetActivationCheckoutUrlRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "seats", kind: "scalar", T: 5 },
        { no: 3, name: "yearly", kind: "scalar", T: 8 },
        { no: 4, name: "request_quota_per_seat", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new MBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new MBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new MBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(MBe, e, t)
    }
  },
  aBn = class $Be extends _ {
    constructor(e) {
      super(), (this.checkoutUrl = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetActivationCheckoutUrlResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "checkout_url", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new $Be().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $Be().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $Be().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals($Be, e, t)
    }
  },
  lBn = class FBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamCustomerPortalUrlRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new FBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new FBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new FBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(FBe, e, t)
    }
  },
  cBn = class OBe extends _ {
    constructor(e) {
      super(), (this.portalUrl = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamCustomerPortalUrlResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "portal_url", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new OBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new OBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new OBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(OBe, e, t)
    }
  },
  hBn = class BBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamMembersRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new BBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new BBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new BBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(BBe, e, t)
    }
  },
  uBn = class _Be extends _ {
    constructor(e) {
      super(),
        (this.name = ""),
        (this.email = ""),
        (this.id = 0),
        (this.role = LI.UNSPECIFIED),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.TeamMember"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
        { no: 4, name: "email", kind: "scalar", T: 9 },
        { no: 2, name: "id", kind: "scalar", T: 5 },
        { no: 3, name: "role", kind: "enum", T: v.getEnumType(LI) },
      ])
    }
    static fromBinary(e, t) {
      return new _Be().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new _Be().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new _Be().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(_Be, e, t)
    }
  },
  dBn = class UBe extends _ {
    constructor(e) {
      super(),
        (this.teamMembers = []),
        (this.userId = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamMembersResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_members", kind: "message", T: uBn, repeated: !0 },
        { no: 2, name: "user_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new UBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new UBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new UBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(UBe, e, t)
    }
  },
  fBn = class HBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamInviteLinkRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new HBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new HBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new HBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(HBe, e, t)
    }
  },
  gBn = class VBe extends _ {
    constructor(e) {
      super(), (this.inviteLink = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamInviteLinkResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "invite_link", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new VBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new VBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new VBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(VBe, e, t)
    }
  },
  pBn = class WBe extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.email = ""),
        (this.role = LI.UNSPECIFIED),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SendTeamInviteRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "email", kind: "scalar", T: 9 },
        { no: 3, name: "role", kind: "enum", T: v.getEnumType(LI) },
      ])
    }
    static fromBinary(e, t) {
      return new WBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new WBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new WBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(WBe, e, t)
    }
  },
  mBn = class qBe extends _ {
    constructor(e) {
      super(), (this.validUntil = Jf.zero), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SendTeamInviteResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "valid_until", kind: "scalar", T: 3 },
      ])
    }
    static fromBinary(e, t) {
      return new qBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new qBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new qBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(qBe, e, t)
    }
  },
  bBn = class jBe extends _ {
    constructor(e) {
      super(), (this.inviteCode = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.AcceptInviteRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "invite_code", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new jBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new jBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new jBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(jBe, e, t)
    }
  },
  vBn = class zBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.AcceptInviteResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new zBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new zBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new zBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(zBe, e, t)
    }
  },
  yBn = class GBe extends _ {
    constructor(e) {
      super(), (this.name = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "name", kind: "scalar", T: 9 },
        { no: 2, name: "privacy_mode_forced", kind: "scalar", T: 8, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new GBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new GBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new GBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(GBe, e, t)
    }
  },
  wBn = class JBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new JBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new JBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new JBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(JBe, e, t)
    }
  },
  CBn = class KBe extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.userId = 0),
        (this.role = LI.UNSPECIFIED),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpdateRoleRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "user_id", kind: "scalar", T: 5 },
        { no: 3, name: "role", kind: "enum", T: v.getEnumType(LI) },
      ])
    }
    static fromBinary(e, t) {
      return new KBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new KBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new KBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(KBe, e, t)
    }
  },
  SBn = class YBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpdateRoleResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new YBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new YBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new YBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(YBe, e, t)
    }
  },
  xBn = class XBe extends _ {
    constructor(e) {
      super(), (this.teamId = 0), (this.userId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RemoveMemberRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "user_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new XBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new XBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new XBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(XBe, e, t)
    }
  },
  kBn = class QBe extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RemoveMemberResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new QBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new QBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new QBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(QBe, e, t)
    }
  },
  EBn = class ZBe extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.newSeats = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChangeSeatRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "new_seats", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new ZBe().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new ZBe().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new ZBe().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(ZBe, e, t)
    }
  },
  IBn = class e_e extends _ {
    constructor(e) {
      super(), (this.success = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChangeSeatResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "success", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new e_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new e_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new e_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(e_e, e, t)
    }
  },
  DBn = class t_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.newNumSeats = 0),
        (this.newRequestQuotaPerSeat = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChangeTeamSubscriptionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "new_num_seats", kind: "scalar", T: 5 },
        { no: 3, name: "new_request_quota_per_seat", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new t_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new t_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new t_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(t_e, e, t)
    }
  },
  TBn = class i_e extends _ {
    constructor(e) {
      super(), (this.success = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ChangeTeamSubscriptionResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "success", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new i_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new i_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new i_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(i_e, e, t)
    }
  },
  PBn = class s_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamUsageRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new s_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new s_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new s_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(s_e, e, t)
    }
  },
  LBn = class n_e extends _ {
    constructor(e) {
      super(), (this.teamMemberUsage = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamUsageResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "team_member_usage",
          kind: "message",
          T: NBn,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new n_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new n_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new n_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(n_e, e, t)
    }
  },
  NBn = class r_e extends _ {
    constructor(e) {
      super(), (this.id = 0), (this.usageData = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.TeamMemberUsage"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 5 },
        { no: 2, name: "usage_data", kind: "message", T: RBn, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new r_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new r_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new r_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(r_e, e, t)
    }
  },
  RBn = class o_e extends _ {
    constructor(e) {
      super(),
        (this.modelType = ""),
        (this.numRequests = 0),
        (this.numTokens = 0),
        (this.maxTokenUsage = 0),
        (this.maxRequestUsage = 0),
        (this.lastUsage = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.TeamMemberUsageData"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "model_type", kind: "scalar", T: 9 },
        { no: 2, name: "num_requests", kind: "scalar", T: 5 },
        { no: 3, name: "num_tokens", kind: "scalar", T: 5 },
        { no: 4, name: "max_token_usage", kind: "scalar", T: 5 },
        { no: 5, name: "max_request_usage", kind: "scalar", T: 5 },
        { no: 6, name: "last_usage", kind: "scalar", T: 9 },
        { no: 7, name: "copilot_usage", kind: "scalar", T: 5, opt: !0 },
        { no: 8, name: "docs_count", kind: "scalar", T: 5, opt: !0 },
        {
          no: 9,
          name: "copilot_accepted_usage",
          kind: "scalar",
          T: 5,
          opt: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new o_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new o_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new o_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(o_e, e, t)
    }
  },
  ABn = class a_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSignUpTypeRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new a_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new a_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new a_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(a_e, e, t)
    }
  },
  MBn = class l_e extends _ {
    constructor(e) {
      super(), (this.signUpType = _le.UNSPECIFIED), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSignUpTypeResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "sign_up_type", kind: "enum", T: v.getEnumType(_le) },
      ])
    }
    static fromBinary(e, t) {
      return new l_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new l_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new l_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(l_e, e, t)
    }
  },
  _le
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.AUTH_0 = 1)] = "AUTH_0"),
    (i[(i.GOOGLE = 2)] = "GOOGLE"),
    (i[(i.GITHUB = 3)] = "GITHUB"),
    (i[(i.WORKOS = 4)] = "WORKOS")
})(_le || (_le = {})),
  v.util.setEnumType(_le, "aiserver.v1.GetSignUpTypeResponse.SignUpType", [
    { no: 0, name: "SIGN_UP_TYPE_UNSPECIFIED" },
    { no: 1, name: "SIGN_UP_TYPE_AUTH_0" },
    { no: 2, name: "SIGN_UP_TYPE_GOOGLE" },
    { no: 3, name: "SIGN_UP_TYPE_GITHUB" },
    { no: 4, name: "SIGN_UP_TYPE_WORKOS" },
  ])
var $Bn = class c_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetDailyTeamUsageRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new c_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new c_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new c_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(c_e, e, t)
    }
  },
  FBn = class h_e extends _ {
    constructor(e) {
      super(), (this.dailyTeamMemberUsage = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetDailyTeamUsageResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        {
          no: 1,
          name: "daily_team_member_usage",
          kind: "message",
          T: OBn,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new h_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new h_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new h_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(h_e, e, t)
    }
  },
  OBn = class u_e extends _ {
    constructor(e) {
      super(),
        (this.id = 0),
        (this.dailyUsageData = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DailyTeamMemberUsage"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 5 },
        {
          no: 2,
          name: "daily_usage_data",
          kind: "message",
          T: BBn,
          repeated: !0,
        },
        { no: 3, name: "last_usage", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new u_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new u_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new u_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(u_e, e, t)
    }
  },
  BBn = class d_e extends _ {
    constructor(e) {
      super(),
        (this.date = ""),
        (this.modelUsageData = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DailyUsageData"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "date", kind: "scalar", T: 9 },
        { no: 4, name: "copilot_usage", kind: "scalar", T: 5, opt: !0 },
        {
          no: 2,
          name: "model_usage_data",
          kind: "message",
          T: _Bn,
          repeated: !0,
        },
      ])
    }
    static fromBinary(e, t) {
      return new d_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new d_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new d_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(d_e, e, t)
    }
  },
  _Bn = class f_e extends _ {
    constructor(e) {
      super(),
        (this.modelType = ""),
        (this.numRequests = 0),
        (this.numTokens = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.ModelUsageData"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "model_type", kind: "scalar", T: 9 },
        { no: 2, name: "num_requests", kind: "scalar", T: 5 },
        { no: 3, name: "num_tokens", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new f_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new f_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new f_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(f_e, e, t)
    }
  },
  UBn = class g_e extends _ {
    constructor(e) {
      super(), (this.platform = Ule.UNSPECIFIED), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetDownloadLinkRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "platform", kind: "enum", T: v.getEnumType(Ule) },
      ])
    }
    static fromBinary(e, t) {
      return new g_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new g_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new g_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(g_e, e, t)
    }
  },
  Ule
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.MAC_APPLE_SILICON = 1)] = "MAC_APPLE_SILICON"),
    (i[(i.MAC_INTEL = 2)] = "MAC_INTEL"),
    (i[(i.MAC_UNIVERSAL = 3)] = "MAC_UNIVERSAL"),
    (i[(i.WINDOWS = 4)] = "WINDOWS"),
    (i[(i.LINUX = 5)] = "LINUX")
})(Ule || (Ule = {})),
  v.util.setEnumType(Ule, "aiserver.v1.GetDownloadLinkRequest.Platform", [
    { no: 0, name: "PLATFORM_UNSPECIFIED" },
    { no: 1, name: "PLATFORM_MAC_APPLE_SILICON" },
    { no: 2, name: "PLATFORM_MAC_INTEL" },
    { no: 3, name: "PLATFORM_MAC_UNIVERSAL" },
    { no: 4, name: "PLATFORM_WINDOWS" },
    { no: 5, name: "PLATFORM_LINUX" },
  ])
var HBn = class p_e extends _ {
    constructor(e) {
      super(), (this.cachedDownloadLink = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetDownloadLinkResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "cached_download_link", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new p_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new p_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new p_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(p_e, e, t)
    }
  },
  VBn = class m_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSsoConfigurationLinksRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new m_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new m_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new m_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(m_e, e, t)
    }
  },
  WBn = class b_e extends _ {
    constructor(e) {
      super(),
        (this.ssoUrl = ""),
        (this.domainVerificationUrl = ""),
        (this.ssoStatus = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSsoConfigurationLinksResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "sso_url", kind: "scalar", T: 9 },
        { no: 2, name: "domain_verification_url", kind: "scalar", T: 9 },
        { no: 3, name: "sso_status", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new b_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new b_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new b_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(b_e, e, t)
    }
  },
  qBn = class v_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.adminOnlyUsagePricing = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetAdminOnlyUsagePricingRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "admin_only_usage_pricing", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new v_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new v_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new v_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(v_e, e, t)
    }
  },
  jBn = class y_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetAdminOnlyUsagePricingResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new y_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new y_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new y_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(y_e, e, t)
    }
  },
  zBn = class w_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetYearlyUpgradeEligibilityRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new w_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new w_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new w_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(w_e, e, t)
    }
  },
  GBn = class C_e extends _ {
    constructor(e) {
      super(), (this.eligible = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetYearlyUpgradeEligibilityResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "eligible", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new C_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new C_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new C_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(C_e, e, t)
    }
  },
  JBn = class S_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpgradeToYearlyRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new S_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new S_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new S_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(S_e, e, t)
    }
  },
  KBn = class x_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.UpgradeToYearlyResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new x_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new x_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new x_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(x_e, e, t)
    }
  },
  YBn = class k_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetUsageBasedPremiumRequestsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new k_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new k_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new k_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(k_e, e, t)
    }
  },
  XBn = class E_e extends _ {
    constructor(e) {
      super(),
        (this.usageBasedPremiumRequests = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetUsageBasedPremiumRequestsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "usage_based_premium_requests", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new E_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new E_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new E_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(E_e, e, t)
    }
  },
  QBn = class I_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.usageBasedPremiumRequests = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetUsageBasedPremiumRequestsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "usage_based_premium_requests", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new I_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new I_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new I_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(I_e, e, t)
    }
  },
  ZBn = class D_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SetUsageBasedPremiumRequestsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new D_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new D_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new D_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(D_e, e, t)
    }
  },
  e_n = class T_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetReferralsRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new T_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new T_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new T_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(T_e, e, t)
    }
  },
  t_n = class P_e extends _ {
    constructor(e) {
      super(),
        (this.numReferrals = 0),
        (this.referralCode = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetReferralsResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "num_referrals", kind: "scalar", T: 5 },
        { no: 2, name: "referral_code", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new P_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new P_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new P_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(P_e, e, t)
    }
  },
  i_n = class L_e extends _ {
    constructor(e) {
      super(),
        (this.referralCode = ""),
        (this.authId = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CheckReferralCodeRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "referral_code", kind: "scalar", T: 9 },
        { no: 2, name: "auth_id", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new L_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new L_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new L_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(L_e, e, t)
    }
  },
  s_n = class N_e extends _ {
    constructor(e) {
      super(),
        (this.isValid = !1),
        (this.userIsEligible = !1),
        (this.maxRedemptions = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CheckReferralCodeResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "is_valid", kind: "scalar", T: 8 },
        { no: 2, name: "user_is_eligible", kind: "scalar", T: 8 },
        { no: 3, name: "max_redemptions", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new N_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new N_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new N_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(N_e, e, t)
    }
  },
  n_n = class R_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamReposRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new R_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new R_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new R_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(R_e, e, t)
    }
  },
  r_n = class A_e extends _ {
    constructor(e) {
      super(), (this.repos = []), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamReposResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "repos", kind: "message", T: o_n, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new A_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new A_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new A_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(A_e, e, t)
    }
  },
  o_n = class M_e extends _ {
    constructor(e) {
      super(),
        (this.id = 0),
        (this.url = ""),
        (this.patterns = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamReposResponse.Repo"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 5 },
        { no: 2, name: "url", kind: "scalar", T: 9 },
        { no: 3, name: "patterns", kind: "message", T: a_n, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new M_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new M_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new M_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(M_e, e, t)
    }
  },
  a_n = class $_e extends _ {
    constructor(e) {
      super(), (this.id = 0), (this.pattern = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetTeamReposResponse.Pattern"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "id", kind: "scalar", T: 5 },
        { no: 2, name: "pattern", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new $_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new $_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new $_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals($_e, e, t)
    }
  },
  l_n = class F_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.repoUrl = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamRepoRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "repo_url", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new F_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new F_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new F_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(F_e, e, t)
    }
  },
  c_n = class O_e extends _ {
    constructor(e) {
      super(), (this.repoId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CreateTeamRepoResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "repo_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new O_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new O_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new O_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(O_e, e, t)
    }
  },
  h_n = class B_e extends _ {
    constructor(e) {
      super(), (this.teamId = 0), (this.repoId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DeleteTeamRepoRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "repo_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new B_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new B_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new B_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(B_e, e, t)
    }
  },
  u_n = class __e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DeleteTeamRepoResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new __e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new __e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new __e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(__e, e, t)
    }
  },
  d_n = class U_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.repoId = 0),
        (this.pattern = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.AddRepoPatternRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "repo_id", kind: "scalar", T: 5 },
        { no: 3, name: "pattern", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new U_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new U_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new U_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(U_e, e, t)
    }
  },
  f_n = class H_e extends _ {
    constructor(e) {
      super(), (this.patternId = 0), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.AddRepoPatternResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "pattern_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new H_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new H_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new H_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(H_e, e, t)
    }
  },
  g_n = class V_e extends _ {
    constructor(e) {
      super(),
        (this.teamId = 0),
        (this.repoId = 0),
        (this.patternId = 0),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RemoveRepoPatternRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "team_id", kind: "scalar", T: 5 },
        { no: 2, name: "repo_id", kind: "scalar", T: 5 },
        { no: 3, name: "pattern_id", kind: "scalar", T: 5 },
      ])
    }
    static fromBinary(e, t) {
      return new V_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new V_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new V_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(V_e, e, t)
    }
  },
  p_n = class W_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.RemoveRepoPatternResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new W_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new W_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new W_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(W_e, e, t)
    }
  },
  Vje = {
    typeName: "aiserver.v1.DashboardService",
    methods: {
      getTeams: { name: "GetTeams", I: Z3i, O: rBn, kind: gt.Unary },
      getActivationCheckoutUrl: {
        name: "GetActivationCheckoutUrl",
        I: oBn,
        O: aBn,
        kind: gt.Unary,
      },
      getTeamCustomerPortalUrl: {
        name: "GetTeamCustomerPortalUrl",
        I: lBn,
        O: cBn,
        kind: gt.Unary,
      },
      getTeamMembers: {
        name: "GetTeamMembers",
        I: hBn,
        O: dBn,
        kind: gt.Unary,
      },
      sendTeamInvite: {
        name: "SendTeamInvite",
        I: pBn,
        O: mBn,
        kind: gt.Unary,
      },
      getTeamInviteLink: {
        name: "GetTeamInviteLink",
        I: fBn,
        O: gBn,
        kind: gt.Unary,
      },
      acceptInvite: { name: "AcceptInvite", I: bBn, O: vBn, kind: gt.Unary },
      createTeam: { name: "CreateTeam", I: yBn, O: wBn, kind: gt.Unary },
      changeSeat: { name: "ChangeSeat", I: EBn, O: IBn, kind: gt.Unary },
      changeTeamSubscription: {
        name: "ChangeTeamSubscription",
        I: DBn,
        O: TBn,
        kind: gt.Unary,
      },
      updateRole: { name: "UpdateRole", I: CBn, O: SBn, kind: gt.Unary },
      removeMember: { name: "RemoveMember", I: xBn, O: kBn, kind: gt.Unary },
      getTeamUsage: { name: "GetTeamUsage", I: PBn, O: LBn, kind: gt.Unary },
      getDailyTeamUsage: {
        name: "GetDailyTeamUsage",
        I: $Bn,
        O: FBn,
        kind: gt.Unary,
      },
      getSignUpType: { name: "GetSignUpType", I: ABn, O: MBn, kind: gt.Unary },
      getHardLimit: { name: "GetHardLimit", I: eBn, O: tBn, kind: gt.Unary },
      setHardLimit: { name: "SetHardLimit", I: iBn, O: sBn, kind: gt.Unary },
      deleteAccount: { name: "DeleteAccount", I: B4n, O: _4n, kind: gt.Unary },
      getMonthlyInvoice: {
        name: "GetMonthlyInvoice",
        I: Y4n,
        O: X4n,
        kind: gt.Unary,
      },
      getPricingHistory: {
        name: "GetPricingHistory",
        I: G4n,
        O: J4n,
        kind: gt.Unary,
      },
      createTeamWithFreeTrial: {
        name: "CreateTeamWithFreeTrial",
        I: j4n,
        O: z4n,
        kind: gt.Unary,
      },
      getTeamHasValidPaymentMethod: {
        name: "GetTeamHasValidPaymentMethod",
        I: W4n,
        O: q4n,
        kind: gt.Unary,
      },
      getTeamPrivacyModeForced: {
        name: "GetTeamPrivacyModeForced",
        I: Q3i,
        O: V4n,
        kind: gt.Unary,
      },
      switchTeamPrivacyMode: {
        name: "SwitchTeamPrivacyMode",
        I: U4n,
        O: H4n,
        kind: gt.Unary,
      },
      updateFastRequests: {
        name: "UpdateFastRequests",
        I: Y3i,
        O: F4n,
        kind: gt.Unary,
      },
      getFastRequests: {
        name: "GetFastRequests",
        I: X3i,
        O: O4n,
        kind: gt.Unary,
      },
      getDownloadLink: {
        name: "GetDownloadLink",
        I: UBn,
        O: HBn,
        kind: gt.Unary,
      },
      getSsoConfigurationLinks: {
        name: "GetSsoConfigurationLinks",
        I: VBn,
        O: WBn,
        kind: gt.Unary,
      },
      setAdminOnlyUsagePricing: {
        name: "SetAdminOnlyUsagePricing",
        I: qBn,
        O: jBn,
        kind: gt.Unary,
      },
      getYearlyUpgradeEligibility: {
        name: "GetYearlyUpgradeEligibility",
        I: zBn,
        O: GBn,
        kind: gt.Unary,
      },
      upgradeToYearly: {
        name: "UpgradeToYearly",
        I: JBn,
        O: KBn,
        kind: gt.Unary,
      },
      getUsageBasedPremiumRequests: {
        name: "GetUsageBasedPremiumRequests",
        I: YBn,
        O: XBn,
        kind: gt.Unary,
      },
      setUsageBasedPremiumRequests: {
        name: "SetUsageBasedPremiumRequests",
        I: QBn,
        O: ZBn,
        kind: gt.Unary,
      },
      getReferrals: { name: "GetReferrals", I: e_n, O: t_n, kind: gt.Unary },
      checkReferralCode: {
        name: "CheckReferralCode",
        I: i_n,
        O: s_n,
        kind: gt.Unary,
      },
      getTeamRepos: { name: "GetTeamRepos", I: n_n, O: r_n, kind: gt.Unary },
      createTeamRepo: {
        name: "CreateTeamRepo",
        I: l_n,
        O: c_n,
        kind: gt.Unary,
      },
      deleteTeamRepo: {
        name: "DeleteTeamRepo",
        I: h_n,
        O: u_n,
        kind: gt.Unary,
      },
      addRepoPattern: {
        name: "AddRepoPattern",
        I: d_n,
        O: f_n,
        kind: gt.Unary,
      },
      removeRepoPattern: {
        name: "RemoveRepoPattern",
        I: g_n,
        O: p_n,
        kind: gt.Unary,
      },
    },
  },
  e9i = class q_e extends _ {
    constructor(e) {
      super(), (this.id = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.User"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 2, name: "id", kind: "scalar", T: 9 },
        { no: 3, name: "email", kind: "scalar", T: 9, opt: !0 },
        { no: 4, name: "email_verified", kind: "scalar", T: 8, opt: !0 },
        { no: 5, name: "first_name", kind: "scalar", T: 9, opt: !0 },
        { no: 6, name: "last_name", kind: "scalar", T: 9, opt: !0 },
        { no: 7, name: "created_at", kind: "scalar", T: 9, opt: !0 },
        { no: 8, name: "updated_at", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new q_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new q_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new q_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(q_e, e, t)
    }
  },
  m_n = class j_e extends _ {
    constructor(e) {
      super(), (this.destination = Hle.UNSPECIFIED), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSessionTokenRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "user", kind: "message", T: e9i },
        { no: 2, name: "destination", kind: "enum", T: v.getEnumType(Hle) },
        { no: 3, name: "stub", kind: "scalar", T: 9, opt: !0 },
        { no: 4, name: "code", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new j_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new j_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new j_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(j_e, e, t)
    }
  },
  Hle
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.PORTAL = 1)] = "PORTAL"),
    (i[(i.AISERVER = 2)] = "AISERVER"),
    (i[(i.AUTH_PROXY = 3)] = "AUTH_PROXY")
})(Hle || (Hle = {})),
  v.util.setEnumType(Hle, "aiserver.v1.GetSessionTokenRequest.Destination", [
    { no: 0, name: "DESTINATION_UNSPECIFIED" },
    { no: 1, name: "DESTINATION_PORTAL" },
    { no: 2, name: "DESTINATION_AISERVER" },
    { no: 3, name: "DESTINATION_AUTH_PROXY" },
  ])
var b_n = class z_e extends _ {
    constructor(e) {
      super(), (this.sessionToken = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetSessionTokenResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "session_token", kind: "scalar", T: 9 },
        { no: 2, name: "id", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new z_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new z_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new z_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(z_e, e, t)
    }
  },
  v_n = class G_e extends _ {
    constructor(e) {
      super(), (this.sessionToken = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CheckSessionTokenRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "session_token", kind: "scalar", T: 9 },
        { no: 2, name: "user", kind: "message", T: e9i },
      ])
    }
    static fromBinary(e, t) {
      return new G_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new G_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new G_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(G_e, e, t)
    }
  },
  y_n = class J_e extends _ {
    constructor(e) {
      super(), (this.valid = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CheckSessionTokenResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "valid", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new J_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new J_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new J_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(J_e, e, t)
    }
  },
  w_n = class K_e extends _ {
    constructor(e) {
      super(), (this.email = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CustomerIdRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "email", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new K_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new K_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new K_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(K_e, e, t)
    }
  },
  C_n = class Y_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.CustomerIdResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "customer_id", kind: "scalar", T: 9, opt: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new Y_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Y_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Y_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Y_e, e, t)
    }
  },
  S_n = class X_e extends _ {
    constructor(e) {
      super(),
        (this.isUsingCurrentAndOnboardingFormat = !1),
        (this.privacy = !1),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.MarkPrivacyRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 2, name: "current_privacy_mode", kind: "scalar", T: 8, opt: !0 },
        {
          no: 3,
          name: "onboarding_privacy_mode",
          kind: "scalar",
          T: 8,
          opt: !0,
        },
        {
          no: 4,
          name: "is_using_current_and_onboarding_format",
          kind: "scalar",
          T: 8,
        },
        { no: 1, name: "privacy", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new X_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new X_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new X_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(X_e, e, t)
    }
  },
  x_n = class Q_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.MarkPrivacyResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new Q_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Q_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Q_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Q_e, e, t)
    }
  },
  k_n = class Z_e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetEmailRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new Z_e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new Z_e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new Z_e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(Z_e, e, t)
    }
  },
  E_n = class e5e extends _ {
    constructor(e) {
      super(),
        (this.email = ""),
        (this.signUpType = R_.UNSPECIFIED),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.GetEmailResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "email", kind: "scalar", T: 9 },
        { no: 2, name: "sign_up_type", kind: "enum", T: v.getEnumType(R_) },
      ])
    }
    static fromBinary(e, t) {
      return new e5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new e5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new e5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(e5e, e, t)
    }
  },
  R_
;(function (i) {
  ;(i[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.AUTH_0 = 1)] = "AUTH_0"),
    (i[(i.GITHUB = 2)] = "GITHUB"),
    (i[(i.GOOGLE = 3)] = "GOOGLE"),
    (i[(i.WORKOS = 4)] = "WORKOS")
})(R_ || (R_ = {})),
  v.util.setEnumType(R_, "aiserver.v1.GetEmailResponse.SignUpType", [
    { no: 0, name: "SIGN_UP_TYPE_UNSPECIFIED" },
    { no: 1, name: "SIGN_UP_TYPE_AUTH_0" },
    { no: 2, name: "SIGN_UP_TYPE_GITHUB" },
    { no: 3, name: "SIGN_UP_TYPE_GOOGLE" },
    { no: 4, name: "SIGN_UP_TYPE_WORKOS" },
  ])
var I_n = class t5e extends _ {
    constructor(e) {
      super(), (this.email = ""), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.EmailValidRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "email", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new t5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new t5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new t5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(t5e, e, t)
    }
  },
  D_n = class i5e extends _ {
    constructor(e) {
      super(), (this.valid = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.EmailValidResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "valid", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new i5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new i5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new i5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(i5e, e, t)
    }
  },
  T_n = class s5e extends _ {
    constructor(e) {
      super(),
        (this.machineId = ""),
        (this.applicationName = ""),
        (this.version = ""),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DownloadUpdateRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "machine_id", kind: "scalar", T: 9 },
        { no: 2, name: "application_name", kind: "scalar", T: 9 },
        { no: 3, name: "version", kind: "scalar", T: 9 },
      ])
    }
    static fromBinary(e, t) {
      return new s5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new s5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new s5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(s5e, e, t)
    }
  },
  P_n = class n5e extends _ {
    constructor(e) {
      super(), (this.canDownload = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.DownloadUpdateResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "can_download", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new n5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new n5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new n5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(n5e, e, t)
    }
  },
  L_n = class r5e extends _ {
    constructor(e) {
      super(), (this.useTurbo = !1), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SwitchCmdKFractionRequest"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "use_turbo", kind: "scalar", T: 8 },
      ])
    }
    static fromBinary(e, t) {
      return new r5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new r5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new r5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(r5e, e, t)
    }
  },
  N_n = class o5e extends _ {
    constructor(e) {
      super(), v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "aiserver.v1.SwitchCmdKFractionResponse"
    }
    static {
      this.fields = v.util.newFieldList(() => [])
    }
    static fromBinary(e, t) {
      return new o5e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new o5e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new o5e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(o5e, e, t)
    }
  },
  cTt = {
    typeName: "aiserver.v1.AuthService",
    methods: {
      getEmail: { name: "GetEmail", I: k_n, O: E_n, kind: gt.Unary },
      emailValid: { name: "EmailValid", I: I_n, O: D_n, kind: gt.Unary },
      downloadUpdate: {
        name: "DownloadUpdate",
        I: T_n,
        O: P_n,
        kind: gt.Unary,
      },
      markPrivacy: { name: "MarkPrivacy", I: S_n, O: x_n, kind: gt.Unary },
      switchCmdKFraction: {
        name: "SwitchCmdKFraction",
        I: L_n,
        O: N_n,
        kind: gt.Unary,
      },
      getCustomerId: { name: "GetCustomerId", I: w_n, O: C_n, kind: gt.Unary },
      getSessionToken: {
        name: "GetSessionToken",
        I: m_n,
        O: b_n,
        kind: gt.Unary,
      },
      checkSessionToken: {
        name: "CheckSessionToken",
        I: v_n,
        O: y_n,
        kind: gt.Unary,
      },
    },
  };

  return {
    oko,
    W3i,
    i4n,
    s4n,
    q3i,
    n4n,
    r4n,
    o4n,
    Oje,
    a4n,
    Bje,
    l4n,
    c4n,
    h4n,
    u4n,
    ako,
    d4n,
    f4n,
    g4n,
    p4n,
    m4n,
    b4n,
    v4n,
    y4n,
    w4n,
    C4n,
    S4n,
    j3i,
    x4n,
    k4n,
    z3i,
    E4n,
    I4n,
    D4n,
    T4n,
    P4n,
    rTt,
    G3i,
    Uje,
    L4n,
    N4n,
    Y3i,
    F4n,
    X3i,
    O4n,
    B4n,
    _4n,
    U4n,
    H4n,
    Q3i,
    V4n,
    W4n,
    q4n,
    j4n,
    z4n,
    G4n,
    J4n,
    K4n,
    Y4n,
    X4n,
    Q4n,
    Z4n,
    eBn,
    tBn,
    iBn,
    sBn,
    nBn,
    Z3i,
    rBn,
    oBn,
    aBn,
    lBn,
    cBn,
    hBn,
    uBn,
    dBn,
    fBn,
    gBn,
    pBn,
    mBn,
    bBn,
    vBn,
    yBn,
    wBn,
    CBn,
    SBn,
    xBn,
    kBn,
    EBn,
    IBn,
    DBn,
    TBn,
    PBn,
    LBn,
    NBn,
    RBn,
    ABn,
    MBn,
    $Bn,
    FBn,
    OBn,
    BBn,
    _Bn,
    UBn,
    HBn,
    VBn,
    WBn,
    qBn,
    jBn,
    zBn,
    GBn,
    JBn,
    KBn,
    YBn,
    XBn,
    QBn,
    ZBn,
    e_n,
    t_n,
    i_n,
    s_n,
    n_n,
    r_n,
    o_n,
    a_n,
    l_n,
    c_n,
    h_n,
    u_n,
    d_n,
    f_n,
    g_n,
    p_n,
    e9i,
    m_n,
    b_n,
    v_n,
    y_n,
    w_n,
    C_n,
    S_n,
    x_n,
    k_n,
    E_n,
    I_n,
    D_n,
    T_n,
    P_n,
    L_n,
    N_n,
    WJ,
    _je,
    cP,
    f0,
    JC,
    J3i,
    hP,
    LI,
    _le,
    Ule,
    Hle,
    R_,
    cursorCredsService,
    $4n,
    uP,
    cl,
    Ti,
    R4n,
    Va,
    Q7,
    X7,
    cTt,
    Vje,
    oTt,
    M4n,
    Hje,
    Ble,
  };
}
