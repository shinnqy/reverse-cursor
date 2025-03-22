// @ts-check

export function createProtoBuf() {
  function fp(i, e) {
    if (!i) throw new Error(e)
  }
  var ufn = 34028234663852886e22,
    dfn = -34028234663852886e22,
    ffn = 4294967295,
    gfn = 2147483647,
    pfn = -2147483648
  function AHe(i) {
    if (typeof i != "number") throw new Error("invalid int 32: " + typeof i)
    if (!Number.isInteger(i) || i > gfn || i < pfn)
      throw new Error("invalid int 32: " + i)
  }
  function SSt(i) {
    if (typeof i != "number") throw new Error("invalid uint 32: " + typeof i)
    if (!Number.isInteger(i) || i > ffn || i < 0)
      throw new Error("invalid uint 32: " + i)
  }
  function iRi(i) {
    if (typeof i != "number") throw new Error("invalid float 32: " + typeof i)
    if (Number.isFinite(i) && (i > ufn || i < dfn))
      throw new Error("invalid float 32: " + i)
  }
  var sRi = Symbol("@bufbuild/protobuf/enum-type")
  function nRi(i) {
    const e = i[sRi]
    return fp(e, "missing enum type on enum object"), e
  }
  function rRi(i, e, t, s) {
    i[sRi] = oRi(
      e,
      t.map((n) => ({ no: n.no, name: n.name, localName: i[n.no] })),
      s,
    )
  }
  function oRi(i, e, t) {
    const s = Object.create(null),
      n = Object.create(null),
      r = []
    for (const o of e) {
      const a = aRi(o)
      r.push(a), (s[o.name] = a), (n[o.no] = a)
    }
    return {
      typeName: i,
      values: r,
      findName(o) {
        return s[o]
      },
      findNumber(o) {
        return n[o]
      },
    }
  }
  function mfn(i, e, t) {
    const s = {}
    for (const n of e) {
      const r = aRi(n)
      ;(s[r.localName] = r.no), (s[r.no] = r.localName)
    }
    return rRi(s, i, e, t), s
  }
  function aRi(i) {
    return "localName" in i ? i : { ...i, localName: i.name }
  }
  var _ = class {
    equals(i) {
      return this.getType().runtime.util.equals(this.getType(), this, i)
    }
    clone() {
      return this.getType().runtime.util.clone(this)
    }
    fromBinary(i, e) {
      const t = this.getType(),
        s = t.runtime.bin,
        n = s.makeReadOptions(e)
      return s.readMessage(this, n.readerFactory(i), i.byteLength, n), this
    }
    fromJson(i, e) {
      const t = this.getType(),
        s = t.runtime.json,
        n = s.makeReadOptions(e)
      return s.readMessage(t, i, n, this), this
    }
    fromJsonString(i, e) {
      let t
      try {
        t = JSON.parse(i)
      } catch (s) {
        throw new Error(
          `cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`,
        )
      }
      return this.fromJson(t, e)
    }
    toBinary(i) {
      const e = this.getType(),
        t = e.runtime.bin,
        s = t.makeWriteOptions(i),
        n = s.writerFactory()
      return t.writeMessage(this, n, s), n.finish()
    }
    toJson(i) {
      const e = this.getType(),
        t = e.runtime.json,
        s = t.makeWriteOptions(i)
      return t.writeMessage(this, s)
    }
    toJsonString(i) {
      const e = this.toJson(i)
      return JSON.stringify(e, null, i?.prettySpaces ?? 0)
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: !0 })
    }
    getType() {
      return Object.getPrototypeOf(this).constructor
    }
  }
  function bfn(i, e, t, s) {
    const n = s?.localName ?? e.substring(e.lastIndexOf(".") + 1),
      r = {
        [n]: function (o) {
          i.util.initFields(this), i.util.initPartial(o, this)
        },
      }[n]
    return (
      Object.setPrototypeOf(r.prototype, new _()),
      Object.assign(r, {
        runtime: i,
        typeName: e,
        fields: i.util.newFieldList(t),
        fromBinary(o, a) {
          return new r().fromBinary(o, a)
        },
        fromJson(o, a) {
          return new r().fromJson(o, a)
        },
        fromJsonString(o, a) {
          return new r().fromJsonString(o, a)
        },
        equals(o, a) {
          return i.util.equals(r, o, a)
        },
      }),
      r
    )
  }
  function vfn() {
    let i = 0,
      e = 0
    for (let s = 0; s < 28; s += 7) {
      let n = this.buf[this.pos++]
      if (((i |= (n & 127) << s), !(n & 128))) return this.assertBounds(), [i, e]
    }
    let t = this.buf[this.pos++]
    if (((i |= (t & 15) << 28), (e = (t & 112) >> 4), !(t & 128)))
      return this.assertBounds(), [i, e]
    for (let s = 3; s <= 31; s += 7) {
      let n = this.buf[this.pos++]
      if (((e |= (n & 127) << s), !(n & 128))) return this.assertBounds(), [i, e]
    }
    throw new Error("invalid varint")
  }
  function xSt(i, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
      const o = i >>> r,
        a = !(!(o >>> 7) && e == 0),
        l = (a ? o | 128 : o) & 255
      if ((t.push(l), !a)) return
    }
    const s = ((i >>> 28) & 15) | ((e & 7) << 4),
      n = !!(e >> 3)
    if ((t.push((n ? s | 128 : s) & 255), !!n)) {
      for (let r = 3; r < 31; r = r + 7) {
        const o = e >>> r,
          a = !!(o >>> 7),
          l = (a ? o | 128 : o) & 255
        if ((t.push(l), !a)) return
      }
      t.push((e >>> 31) & 1)
    }
  }
  var MHe = 4294967296
  function lRi(i) {
    const e = i[0] === "-"
    e && (i = i.slice(1))
    const t = 1e6
    let s = 0,
      n = 0
    function r(o, a) {
      const l = Number(i.slice(o, a))
      ;(n *= t),
        (s = s * t + l),
        s >= MHe && ((n = n + ((s / MHe) | 0)), (s = s % MHe))
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), e ? hRi(s, n) : kSt(s, n)
  }
  function yfn(i, e) {
    let t = kSt(i, e)
    const s = t.hi & 2147483648
    s && (t = hRi(t.lo, t.hi))
    const n = cRi(t.lo, t.hi)
    return s ? "-" + n : n
  }
  function cRi(i, e) {
    if ((({ lo: i, hi: e } = wfn(i, e)), e <= 2097151)) return String(MHe * e + i)
    const t = i & 16777215,
      s = ((i >>> 24) | (e << 8)) & 16777215,
      n = (e >> 16) & 65535
    let r = t + s * 6777216 + n * 6710656,
      o = s + n * 8147497,
      a = n * 2
    const l = 1e7
    return (
      r >= l && ((o += Math.floor(r / l)), (r %= l)),
      o >= l && ((a += Math.floor(o / l)), (o %= l)),
      a.toString() + uRi(o) + uRi(r)
    )
  }
  function wfn(i, e) {
    return { lo: i >>> 0, hi: e >>> 0 }
  }
  function kSt(i, e) {
    return { lo: i | 0, hi: e | 0 }
  }
  function hRi(i, e) {
    return (e = ~e), i ? (i = ~i + 1) : (e += 1), kSt(i, e)
  }
  var uRi = (i) => {
    const e = String(i)
    return "0000000".slice(e.length) + e
  }
  function dRi(i, e) {
    if (i >= 0) {
      for (; i > 127; ) e.push((i & 127) | 128), (i = i >>> 7)
      e.push(i)
    } else {
      for (let t = 0; t < 9; t++) e.push((i & 127) | 128), (i = i >> 7)
      e.push(1)
    }
  }
  function Cfn() {
    let i = this.buf[this.pos++],
      e = i & 127
    if (!(i & 128)) return this.assertBounds(), e
    if (((i = this.buf[this.pos++]), (e |= (i & 127) << 7), !(i & 128)))
      return this.assertBounds(), e
    if (((i = this.buf[this.pos++]), (e |= (i & 127) << 14), !(i & 128)))
      return this.assertBounds(), e
    if (((i = this.buf[this.pos++]), (e |= (i & 127) << 21), !(i & 128)))
      return this.assertBounds(), e
    ;(i = this.buf[this.pos++]), (e |= (i & 15) << 28)
    for (let t = 5; i & 128 && t < 10; t++) i = this.buf[this.pos++]
    if (i & 128) throw new Error("invalid varint")
    return this.assertBounds(), e >>> 0
  }
  function Sfn() {
    const i = new DataView(new ArrayBuffer(8))
    if (
      typeof BigInt == "function" &&
      typeof i.getBigInt64 == "function" &&
      typeof i.getBigUint64 == "function" &&
      typeof i.setBigInt64 == "function" &&
      typeof i.setBigUint64 == "function" &&
      (typeof process != "object" ||
        typeof process.env != "object" ||
        process.env.BUF_BIGINT_DISABLE !== "1")
    ) {
      const n = BigInt("-9223372036854775808"),
        r = BigInt("9223372036854775807"),
        o = BigInt("0"),
        a = BigInt("18446744073709551615")
      return {
        zero: BigInt(0),
        supported: !0,
        parse(l) {
          const c = typeof l == "bigint" ? l : BigInt(l)
          if (c > r || c < n) throw new Error(`int64 invalid: ${l}`)
          return c
        },
        uParse(l) {
          const c = typeof l == "bigint" ? l : BigInt(l)
          if (c > a || c < o) throw new Error(`uint64 invalid: ${l}`)
          return c
        },
        enc(l) {
          return (
            i.setBigInt64(0, this.parse(l), !0),
            { lo: i.getInt32(0, !0), hi: i.getInt32(4, !0) }
          )
        },
        uEnc(l) {
          return (
            i.setBigInt64(0, this.uParse(l), !0),
            { lo: i.getInt32(0, !0), hi: i.getInt32(4, !0) }
          )
        },
        dec(l, c) {
          return i.setInt32(0, l, !0), i.setInt32(4, c, !0), i.getBigInt64(0, !0)
        },
        uDec(l, c) {
          return i.setInt32(0, l, !0), i.setInt32(4, c, !0), i.getBigUint64(0, !0)
        },
      }
    }
    const t = (n) => fp(/^-?[0-9]+$/.test(n), `int64 invalid: ${n}`),
      s = (n) => fp(/^[0-9]+$/.test(n), `uint64 invalid: ${n}`)
    return {
      zero: "0",
      supported: !1,
      parse(n) {
        return typeof n != "string" && (n = n.toString()), t(n), n
      },
      uParse(n) {
        return typeof n != "string" && (n = n.toString()), s(n), n
      },
      enc(n) {
        return typeof n != "string" && (n = n.toString()), t(n), lRi(n)
      },
      uEnc(n) {
        return typeof n != "string" && (n = n.toString()), s(n), lRi(n)
      },
      dec(n, r) {
        return yfn(n, r)
      },
      uDec(n, r) {
        return cRi(n, r)
      },
    }
  }
  var Jf = Sfn(),
    ds
  ;(function (i) {
    ;(i[(i.DOUBLE = 1)] = "DOUBLE"),
      (i[(i.FLOAT = 2)] = "FLOAT"),
      (i[(i.INT64 = 3)] = "INT64"),
      (i[(i.UINT64 = 4)] = "UINT64"),
      (i[(i.INT32 = 5)] = "INT32"),
      (i[(i.FIXED64 = 6)] = "FIXED64"),
      (i[(i.FIXED32 = 7)] = "FIXED32"),
      (i[(i.BOOL = 8)] = "BOOL"),
      (i[(i.STRING = 9)] = "STRING"),
      (i[(i.BYTES = 12)] = "BYTES"),
      (i[(i.UINT32 = 13)] = "UINT32"),
      (i[(i.SFIXED32 = 15)] = "SFIXED32"),
      (i[(i.SFIXED64 = 16)] = "SFIXED64"),
      (i[(i.SINT32 = 17)] = "SINT32"),
      (i[(i.SINT64 = 18)] = "SINT64")
  })(ds || (ds = {}))
  var RB
  ;(function (i) {
    ;(i[(i.BIGINT = 0)] = "BIGINT"), (i[(i.STRING = 1)] = "STRING")
  })(RB || (RB = {}))
  function AB(i, e, t) {
    if (e === t) return !0
    if (i == ds.BYTES) {
      if (
        !(e instanceof Uint8Array) ||
        !(t instanceof Uint8Array) ||
        e.length !== t.length
      )
        return !1
      for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1
      return !0
    }
    switch (i) {
      case ds.UINT64:
      case ds.FIXED64:
      case ds.INT64:
      case ds.SFIXED64:
      case ds.SINT64:
        return e == t
    }
    return !1
  }
  function Qz(i, e) {
    switch (i) {
      case ds.BOOL:
        return !1
      case ds.UINT64:
      case ds.FIXED64:
      case ds.INT64:
      case ds.SFIXED64:
      case ds.SINT64:
        return e == 0 ? Jf.zero : "0"
      case ds.DOUBLE:
      case ds.FLOAT:
        return 0
      case ds.BYTES:
        return new Uint8Array(0)
      case ds.STRING:
        return ""
      default:
        return 0
    }
  }
  function fRi(i, e) {
    switch (i) {
      case ds.BOOL:
        return e === !1
      case ds.STRING:
        return e === ""
      case ds.BYTES:
        return e instanceof Uint8Array && !e.byteLength
      default:
        return e == 0
    }
  }
  function xfn(i, e, t, s) {
    let n
    return {
      typeName: e,
      extendee: t,
      get field() {
        if (!n) {
          const r = typeof s == "function" ? s() : s
          ;(r.name = e.split(".").pop()),
            (r.jsonName = `[${e}]`),
            (n = i.util.newFieldList([r]).list()[0])
        }
        return n
      },
      runtime: i,
    }
  }
  function gRi(i) {
    const e = i.field.localName,
      t = Object.create(null)
    return (t[e] = kfn(i)), [t, () => t[e]]
  }
  function kfn(i) {
    const e = i.field
    if (e.repeated) return []
    if (e.default !== void 0) return e.default
    switch (e.kind) {
      case "enum":
        return e.T.values[0].no
      case "scalar":
        return Qz(e.T, e.L)
      case "message":
        const t = e.T,
          s = new t()
        return t.fieldWrapper ? t.fieldWrapper.unwrapField(s) : s
      case "map":
        throw "map fields are not allowed to be extensions"
    }
  }
  function Efn(i, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
      for (let t = i.length - 1; t >= 0; --t) if (i[t].no == e.no) return [i[t]]
      return []
    }
    return i.filter((t) => t.no === e.no)
  }
  var C$ =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    $He = []
  for (let i = 0; i < C$.length; i++) $He[C$[i].charCodeAt(0)] = i
  ;($He[45] = C$.indexOf("+")), ($He[95] = C$.indexOf("/"))
  var pRi = {
    dec(i) {
      let e = (i.length * 3) / 4
      i[i.length - 2] == "=" ? (e -= 2) : i[i.length - 1] == "=" && (e -= 1)
      let t = new Uint8Array(e),
        s = 0,
        n = 0,
        r,
        o = 0
      for (let a = 0; a < i.length; a++) {
        if (((r = $He[i.charCodeAt(a)]), r === void 0))
          switch (i[a]) {
            case "=":
              n = 0
            case `
  `:
            case "\r":
            case "	":
            case " ":
              continue
            default:
              throw Error("invalid base64 string.")
          }
        switch (n) {
          case 0:
            ;(o = r), (n = 1)
            break
          case 1:
            ;(t[s++] = (o << 2) | ((r & 48) >> 4)), (o = r), (n = 2)
            break
          case 2:
            ;(t[s++] = ((o & 15) << 4) | ((r & 60) >> 2)), (o = r), (n = 3)
            break
          case 3:
            ;(t[s++] = ((o & 3) << 6) | r), (n = 0)
            break
        }
      }
      if (n == 1) throw Error("invalid base64 string.")
      return t.subarray(0, s)
    },
    enc(i) {
      let e = "",
        t = 0,
        s,
        n = 0
      for (let r = 0; r < i.length; r++)
        switch (((s = i[r]), t)) {
          case 0:
            ;(e += C$[s >> 2]), (n = (s & 3) << 4), (t = 1)
            break
          case 1:
            ;(e += C$[n | (s >> 4)]), (n = (s & 15) << 2), (t = 2)
            break
          case 2:
            ;(e += C$[n | (s >> 6)]), (e += C$[s & 63]), (t = 0)
            break
        }
      return t && ((e += C$[n]), (e += "="), t == 1 && (e += "=")), e
    },
  }
  function Ifn(i, e, t) {
    bRi(e, i)
    const s = e.runtime.bin.makeReadOptions(t),
      n = Efn(i.getType().runtime.bin.listUnknownFields(i), e.field),
      [r, o] = gRi(e)
    for (const a of n)
      e.runtime.bin.readField(r, s.readerFactory(a.data), e.field, a.wireType, s)
    return o()
  }
  function Dfn(i, e, t, s) {
    bRi(e, i)
    const n = e.runtime.bin.makeReadOptions(s),
      r = e.runtime.bin.makeWriteOptions(s)
    if (mRi(i, e)) {
      const c = i
        .getType()
        .runtime.bin.listUnknownFields(i)
        .filter((h) => h.no != e.field.no)
      i.getType().runtime.bin.discardUnknownFields(i)
      for (const h of c)
        i.getType().runtime.bin.onUnknownField(i, h.no, h.wireType, h.data)
    }
    const o = r.writerFactory()
    let a = e.field
    !a.opt &&
      !a.repeated &&
      (a.kind == "enum" || a.kind == "scalar") &&
      (a = { ...e.field, opt: !0 }),
      e.runtime.bin.writeField(a, t, o, r)
    const l = n.readerFactory(o.finish())
    for (; l.pos < l.len; ) {
      const [c, h] = l.tag(),
        u = l.skip(h, c)
      i.getType().runtime.bin.onUnknownField(i, c, h, u)
    }
  }
  function mRi(i, e) {
    const t = i.getType()
    return (
      e.extendee.typeName === t.typeName &&
      !!t.runtime.bin.listUnknownFields(i).find((s) => s.no == e.field.no)
    )
  }
  function bRi(i, e) {
    fp(
      i.extendee.typeName == e.getType().typeName,
      `extension ${i.typeName} can only be applied to message ${i.extendee.typeName}`,
    )
  }
  function vRi(i, e) {
    const t = i.localName
    if (i.repeated) return e[t].length > 0
    if (i.oneof) return e[i.oneof.localName].case === t
    switch (i.kind) {
      case "enum":
      case "scalar":
        return i.opt || i.req
          ? e[t] !== void 0
          : i.kind == "enum"
            ? e[t] !== i.T.values[0].no
            : !fRi(i.T, e[t])
      case "message":
        return e[t] !== void 0
      case "map":
        return Object.keys(e[t]).length > 0
    }
  }
  function yRi(i, e) {
    const t = i.localName,
      s = !i.opt && !i.req
    if (i.repeated) e[t] = []
    else if (i.oneof) e[i.oneof.localName] = { case: void 0 }
    else
      switch (i.kind) {
        case "map":
          e[t] = {}
          break
        case "enum":
          e[t] = s ? i.T.values[0].no : void 0
          break
        case "scalar":
          e[t] = s ? Qz(i.T, i.L) : void 0
          break
        case "message":
          e[t] = void 0
          break
      }
  }
  function G9(i, e) {
    if (
      i === null ||
      typeof i != "object" ||
      !Object.getOwnPropertyNames(_.prototype).every(
        (s) => s in i && typeof i[s] == "function",
      )
    )
      return !1
    const t = i.getType()
    return t === null ||
      typeof t != "function" ||
      !("typeName" in t) ||
      typeof t.typeName != "string"
      ? !1
      : e === void 0
        ? !0
        : t.typeName == e.typeName
  }
  function wRi(i, e) {
    return G9(e) || !i.fieldWrapper ? e : i.fieldWrapper.wrapField(e)
  }
  var l0o = {
      "google.protobuf.DoubleValue": ds.DOUBLE,
      "google.protobuf.FloatValue": ds.FLOAT,
      "google.protobuf.Int64Value": ds.INT64,
      "google.protobuf.UInt64Value": ds.UINT64,
      "google.protobuf.Int32Value": ds.INT32,
      "google.protobuf.UInt32Value": ds.UINT32,
      "google.protobuf.BoolValue": ds.BOOL,
      "google.protobuf.StringValue": ds.STRING,
      "google.protobuf.BytesValue": ds.BYTES,
    },
    CRi = { ignoreUnknownFields: !1 },
    SRi = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    }
  function Tfn(i) {
    return i ? { ...CRi, ...i } : CRi
  }
  function Pfn(i) {
    return i ? { ...SRi, ...i } : SRi
  }
  var FHe = Symbol(),
    OHe = Symbol()
  function Lfn() {
    return {
      makeReadOptions: Tfn,
      makeWriteOptions: Pfn,
      readMessage(i, e, t, s) {
        if (e == null || Array.isArray(e) || typeof e != "object")
          throw new Error(
            `cannot decode message ${i.typeName} from JSON: ${YN(e)}`,
          )
        s = s ?? new i()
        const n = new Map(),
          r = t.typeRegistry
        for (const [o, a] of Object.entries(e)) {
          const l = i.fields.findJsonName(o)
          if (l) {
            if (l.oneof) {
              if (a === null && l.kind == "scalar") continue
              const c = n.get(l.oneof)
              if (c !== void 0)
                throw new Error(
                  `cannot decode message ${i.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${c}", "${o}"`,
                )
              n.set(l.oneof, o)
            }
            xRi(s, a, l, t, i)
          } else {
            let c = !1
            if (r?.findExtension && o.startsWith("[") && o.endsWith("]")) {
              const h = r.findExtension(o.substring(1, o.length - 1))
              if (h && h.extendee.typeName == i.typeName) {
                c = !0
                const [u, d] = gRi(h)
                xRi(u, a, h.field, t, h), Dfn(s, h, d(), t)
              }
            }
            if (!c && !t.ignoreUnknownFields)
              throw new Error(
                `cannot decode message ${i.typeName} from JSON: key "${o}" is unknown`,
              )
          }
        }
        return s
      },
      writeMessage(i, e) {
        const t = i.getType(),
          s = {}
        let n
        try {
          for (n of t.fields.byNumber()) {
            if (!vRi(n, i)) {
              if (n.req) throw "required field not set"
              if (!e.emitDefaultValues || !Rfn(n)) continue
            }
            const o = n.oneof ? i[n.oneof.localName].value : i[n.localName],
              a = kRi(n, o, e)
            a !== void 0 && (s[e.useProtoFieldName ? n.name : n.jsonName] = a)
          }
          const r = e.typeRegistry
          if (r?.findExtensionFor)
            for (const o of t.runtime.bin.listUnknownFields(i)) {
              const a = r.findExtensionFor(t.typeName, o.no)
              if (a && mRi(i, a)) {
                const l = Ifn(i, a, e),
                  c = kRi(a.field, l, e)
                c !== void 0 && (s[a.field.jsonName] = c)
              }
            }
        } catch (r) {
          const o = n
              ? `cannot encode field ${t.typeName}.${n.name} to JSON`
              : `cannot encode message ${t.typeName} to JSON`,
            a = r instanceof Error ? r.message : String(r)
          throw new Error(o + (a.length > 0 ? `: ${a}` : ""))
        }
        return s
      },
      readScalar(i, e, t) {
        return Wre(i, e, t ?? RB.BIGINT, !0)
      },
      writeScalar(i, e, t) {
        if (e !== void 0 && (t || fRi(i, e))) return BHe(i, e)
      },
      debug: YN,
    }
  }
  function YN(i) {
    if (i === null) return "null"
    switch (typeof i) {
      case "object":
        return Array.isArray(i) ? "array" : "object"
      case "string":
        return i.length > 100 ? "string" : `"${i.split('"').join('\\"')}"`
      default:
        return String(i)
    }
  }
  function xRi(i, e, t, s, n) {
    let r = t.localName
    if (t.repeated) {
      if ((fp(t.kind != "map"), e === null)) return
      if (!Array.isArray(e))
        throw new Error(
          `cannot decode field ${n.typeName}.${t.name} from JSON: ${YN(e)}`,
        )
      const o = i[r]
      for (const a of e) {
        if (a === null)
          throw new Error(
            `cannot decode field ${n.typeName}.${t.name} from JSON: ${YN(a)}`,
          )
        switch (t.kind) {
          case "message":
            o.push(t.T.fromJson(a, s))
            break
          case "enum":
            const l = ESt(t.T, a, s.ignoreUnknownFields, !0)
            l !== OHe && o.push(l)
            break
          case "scalar":
            try {
              o.push(Wre(t.T, a, t.L, !0))
            } catch (c) {
              let h = `cannot decode field ${n.typeName}.${t.name} from JSON: ${YN(a)}`
              throw (
                (c instanceof Error &&
                  c.message.length > 0 &&
                  (h += `: ${c.message}`),
                new Error(h))
              )
            }
            break
        }
      }
    } else if (t.kind == "map") {
      if (e === null) return
      if (typeof e != "object" || Array.isArray(e))
        throw new Error(
          `cannot decode field ${n.typeName}.${t.name} from JSON: ${YN(e)}`,
        )
      const o = i[r]
      for (const [a, l] of Object.entries(e)) {
        if (l === null)
          throw new Error(
            `cannot decode field ${n.typeName}.${t.name} from JSON: map value null`,
          )
        let c
        try {
          c = Nfn(t.K, a)
        } catch (h) {
          let u = `cannot decode map key for field ${n.typeName}.${t.name} from JSON: ${YN(e)}`
          throw (
            (h instanceof Error &&
              h.message.length > 0 &&
              (u += `: ${h.message}`),
            new Error(u))
          )
        }
        switch (t.V.kind) {
          case "message":
            o[c] = t.V.T.fromJson(l, s)
            break
          case "enum":
            const h = ESt(t.V.T, l, s.ignoreUnknownFields, !0)
            h !== OHe && (o[c] = h)
            break
          case "scalar":
            try {
              o[c] = Wre(t.V.T, l, RB.BIGINT, !0)
            } catch (u) {
              let d = `cannot decode map value for field ${n.typeName}.${t.name} from JSON: ${YN(e)}`
              throw (
                (u instanceof Error &&
                  u.message.length > 0 &&
                  (d += `: ${u.message}`),
                new Error(d))
              )
            }
            break
        }
      }
    } else
      switch (
        (t.oneof && ((i = i[t.oneof.localName] = { case: r }), (r = "value")),
        t.kind)
      ) {
        case "message":
          const o = t.T
          if (e === null && o.typeName != "google.protobuf.Value") return
          let a = i[r]
          G9(a)
            ? a.fromJson(e, s)
            : ((i[r] = a = o.fromJson(e, s)),
              o.fieldWrapper &&
                !t.oneof &&
                (i[r] = o.fieldWrapper.unwrapField(a)))
          break
        case "enum":
          const l = ESt(t.T, e, s.ignoreUnknownFields, !1)
          switch (l) {
            case FHe:
              yRi(t, i)
              break
            case OHe:
              break
            default:
              i[r] = l
              break
          }
          break
        case "scalar":
          try {
            const c = Wre(t.T, e, t.L, !1)
            switch (c) {
              case FHe:
                yRi(t, i)
                break
              default:
                i[r] = c
                break
            }
          } catch (c) {
            let h = `cannot decode field ${n.typeName}.${t.name} from JSON: ${YN(e)}`
            throw (
              (c instanceof Error &&
                c.message.length > 0 &&
                (h += `: ${c.message}`),
              new Error(h))
            )
          }
          break
      }
  }
  function Nfn(i, e) {
    if (i === ds.BOOL)
      switch (e) {
        case "true":
          e = !0
          break
        case "false":
          e = !1
          break
      }
    return Wre(i, e, RB.BIGINT, !0).toString()
  }
  function Wre(i, e, t, s) {
    if (e === null) return s ? Qz(i, t) : FHe
    switch (i) {
      case ds.DOUBLE:
      case ds.FLOAT:
        if (e === "NaN") return Number.NaN
        if (e === "Infinity") return Number.POSITIVE_INFINITY
        if (e === "-Infinity") return Number.NEGATIVE_INFINITY
        if (
          e === "" ||
          (typeof e == "string" && e.trim().length !== e.length) ||
          (typeof e != "string" && typeof e != "number")
        )
          break
        const n = Number(e)
        if (Number.isNaN(n) || !Number.isFinite(n)) break
        return i == ds.FLOAT && iRi(n), n
      case ds.INT32:
      case ds.FIXED32:
      case ds.SFIXED32:
      case ds.SINT32:
      case ds.UINT32:
        let r
        if (
          (typeof e == "number"
            ? (r = e)
            : typeof e == "string" &&
              e.length > 0 &&
              e.trim().length === e.length &&
              (r = Number(e)),
          r === void 0)
        )
          break
        return i == ds.UINT32 || i == ds.FIXED32 ? SSt(r) : AHe(r), r
      case ds.INT64:
      case ds.SFIXED64:
      case ds.SINT64:
        if (typeof e != "number" && typeof e != "string") break
        const o = Jf.parse(e)
        return t ? o.toString() : o
      case ds.FIXED64:
      case ds.UINT64:
        if (typeof e != "number" && typeof e != "string") break
        const a = Jf.uParse(e)
        return t ? a.toString() : a
      case ds.BOOL:
        if (typeof e != "boolean") break
        return e
      case ds.STRING:
        if (typeof e != "string") break
        try {
          encodeURIComponent(e)
        } catch {
          throw new Error("invalid UTF8")
        }
        return e
      case ds.BYTES:
        if (e === "") return new Uint8Array(0)
        if (typeof e != "string") break
        return pRi.dec(e)
    }
    throw new Error()
  }
  function ESt(i, e, t, s) {
    if (e === null)
      return i.typeName == "google.protobuf.NullValue"
        ? 0
        : s
          ? i.values[0].no
          : FHe
    switch (typeof e) {
      case "number":
        if (Number.isInteger(e)) return e
        break
      case "string":
        const n = i.findName(e)
        if (n !== void 0) return n.no
        if (t) return OHe
        break
    }
    throw new Error(`cannot decode enum ${i.typeName} from JSON: ${YN(e)}`)
  }
  function Rfn(i) {
    return i.repeated || i.kind == "map"
      ? !0
      : !(i.oneof || i.kind == "message" || i.opt || i.req)
  }
  function kRi(i, e, t) {
    if (i.kind == "map") {
      fp(typeof e == "object" && e != null)
      const s = {},
        n = Object.entries(e)
      switch (i.V.kind) {
        case "scalar":
          for (const [o, a] of n) s[o.toString()] = BHe(i.V.T, a)
          break
        case "message":
          for (const [o, a] of n) s[o.toString()] = a.toJson(t)
          break
        case "enum":
          const r = i.V.T
          for (const [o, a] of n) s[o.toString()] = ISt(r, a, t.enumAsInteger)
          break
      }
      return t.emitDefaultValues || n.length > 0 ? s : void 0
    }
    if (i.repeated) {
      fp(Array.isArray(e))
      const s = []
      switch (i.kind) {
        case "scalar":
          for (let n = 0; n < e.length; n++) s.push(BHe(i.T, e[n]))
          break
        case "enum":
          for (let n = 0; n < e.length; n++)
            s.push(ISt(i.T, e[n], t.enumAsInteger))
          break
        case "message":
          for (let n = 0; n < e.length; n++) s.push(e[n].toJson(t))
          break
      }
      return t.emitDefaultValues || s.length > 0 ? s : void 0
    }
    switch (i.kind) {
      case "scalar":
        return BHe(i.T, e)
      case "enum":
        return ISt(i.T, e, t.enumAsInteger)
      case "message":
        return wRi(i.T, e).toJson(t)
    }
  }
  function ISt(i, e, t) {
    return (
      fp(typeof e == "number"),
      i.typeName == "google.protobuf.NullValue"
        ? null
        : t
          ? e
          : (i.findNumber(e)?.name ?? e)
    )
  }
  function BHe(i, e) {
    switch (i) {
      case ds.INT32:
      case ds.SFIXED32:
      case ds.SINT32:
      case ds.FIXED32:
      case ds.UINT32:
        return fp(typeof e == "number"), e
      case ds.FLOAT:
      case ds.DOUBLE:
        return (
          fp(typeof e == "number"),
          Number.isNaN(e)
            ? "NaN"
            : e === Number.POSITIVE_INFINITY
              ? "Infinity"
              : e === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : e
        )
      case ds.STRING:
        return fp(typeof e == "string"), e
      case ds.BOOL:
        return fp(typeof e == "boolean"), e
      case ds.UINT64:
      case ds.FIXED64:
      case ds.INT64:
      case ds.SFIXED64:
      case ds.SINT64:
        return (
          fp(
            typeof e == "bigint" || typeof e == "string" || typeof e == "number",
          ),
          e.toString()
        )
      case ds.BYTES:
        return fp(e instanceof Uint8Array), pRi.enc(e)
    }
  }
  var tm
  ;(function (i) {
    ;(i[(i.Varint = 0)] = "Varint"),
      (i[(i.Bit64 = 1)] = "Bit64"),
      (i[(i.LengthDelimited = 2)] = "LengthDelimited"),
      (i[(i.StartGroup = 3)] = "StartGroup"),
      (i[(i.EndGroup = 4)] = "EndGroup"),
      (i[(i.Bit32 = 5)] = "Bit32")
  })(tm || (tm = {}))
  var Afn = class {
      constructor(i) {
        ;(this.stack = []),
          (this.textEncoder = i ?? new TextEncoder()),
          (this.chunks = []),
          (this.buf = [])
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf))
        let i = 0
        for (let s = 0; s < this.chunks.length; s++) i += this.chunks[s].length
        let e = new Uint8Array(i),
          t = 0
        for (let s = 0; s < this.chunks.length; s++)
          e.set(this.chunks[s], t), (t += this.chunks[s].length)
        return (this.chunks = []), e
      }
      fork() {
        return (
          this.stack.push({ chunks: this.chunks, buf: this.buf }),
          (this.chunks = []),
          (this.buf = []),
          this
        )
      }
      join() {
        let i = this.finish(),
          e = this.stack.pop()
        if (!e) throw new Error("invalid state, fork stack empty")
        return (
          (this.chunks = e.chunks),
          (this.buf = e.buf),
          this.uint32(i.byteLength),
          this.raw(i)
        )
      }
      tag(i, e) {
        return this.uint32(((i << 3) | e) >>> 0)
      }
      raw(i) {
        return (
          this.buf.length &&
            (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
          this.chunks.push(i),
          this
        )
      }
      uint32(i) {
        for (SSt(i); i > 127; ) this.buf.push((i & 127) | 128), (i = i >>> 7)
        return this.buf.push(i), this
      }
      int32(i) {
        return AHe(i), dRi(i, this.buf), this
      }
      bool(i) {
        return this.buf.push(i ? 1 : 0), this
      }
      bytes(i) {
        return this.uint32(i.byteLength), this.raw(i)
      }
      string(i) {
        let e = this.textEncoder.encode(i)
        return this.uint32(e.byteLength), this.raw(e)
      }
      float(i) {
        iRi(i)
        let e = new Uint8Array(4)
        return new DataView(e.buffer).setFloat32(0, i, !0), this.raw(e)
      }
      double(i) {
        let e = new Uint8Array(8)
        return new DataView(e.buffer).setFloat64(0, i, !0), this.raw(e)
      }
      fixed32(i) {
        SSt(i)
        let e = new Uint8Array(4)
        return new DataView(e.buffer).setUint32(0, i, !0), this.raw(e)
      }
      sfixed32(i) {
        AHe(i)
        let e = new Uint8Array(4)
        return new DataView(e.buffer).setInt32(0, i, !0), this.raw(e)
      }
      sint32(i) {
        return AHe(i), (i = ((i << 1) ^ (i >> 31)) >>> 0), dRi(i, this.buf), this
      }
      sfixed64(i) {
        let e = new Uint8Array(8),
          t = new DataView(e.buffer),
          s = Jf.enc(i)
        return t.setInt32(0, s.lo, !0), t.setInt32(4, s.hi, !0), this.raw(e)
      }
      fixed64(i) {
        let e = new Uint8Array(8),
          t = new DataView(e.buffer),
          s = Jf.uEnc(i)
        return t.setInt32(0, s.lo, !0), t.setInt32(4, s.hi, !0), this.raw(e)
      }
      int64(i) {
        let e = Jf.enc(i)
        return xSt(e.lo, e.hi, this.buf), this
      }
      sint64(i) {
        let e = Jf.enc(i),
          t = e.hi >> 31,
          s = (e.lo << 1) ^ t,
          n = ((e.hi << 1) | (e.lo >>> 31)) ^ t
        return xSt(s, n, this.buf), this
      }
      uint64(i) {
        let e = Jf.uEnc(i)
        return xSt(e.lo, e.hi, this.buf), this
      }
    },
    Mfn = class {
      constructor(i, e) {
        ;(this.varint64 = vfn),
          (this.uint32 = Cfn),
          (this.buf = i),
          (this.len = i.length),
          (this.pos = 0),
          (this.view = new DataView(i.buffer, i.byteOffset, i.byteLength)),
          (this.textDecoder = e ?? new TextDecoder())
      }
      tag() {
        let i = this.uint32(),
          e = i >>> 3,
          t = i & 7
        if (e <= 0 || t < 0 || t > 5)
          throw new Error("illegal tag: field no " + e + " wire type " + t)
        return [e, t]
      }
      skip(i, e) {
        let t = this.pos
        switch (i) {
          case tm.Varint:
            for (; this.buf[this.pos++] & 128; );
            break
          case tm.Bit64:
            this.pos += 4
          case tm.Bit32:
            this.pos += 4
            break
          case tm.LengthDelimited:
            let s = this.uint32()
            this.pos += s
            break
          case tm.StartGroup:
            for (;;) {
              const [n, r] = this.tag()
              if (r === tm.EndGroup) {
                if (e !== void 0 && n !== e)
                  throw new Error("invalid end group tag")
                break
              }
              this.skip(r, n)
            }
            break
          default:
            throw new Error("cant skip wire type " + i)
        }
        return this.assertBounds(), this.buf.subarray(t, this.pos)
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF")
      }
      int32() {
        return this.uint32() | 0
      }
      sint32() {
        let i = this.uint32()
        return (i >>> 1) ^ -(i & 1)
      }
      int64() {
        return Jf.dec(...this.varint64())
      }
      uint64() {
        return Jf.uDec(...this.varint64())
      }
      sint64() {
        let [i, e] = this.varint64(),
          t = -(i & 1)
        return (
          (i = ((i >>> 1) | ((e & 1) << 31)) ^ t),
          (e = (e >>> 1) ^ t),
          Jf.dec(i, e)
        )
      }
      bool() {
        let [i, e] = this.varint64()
        return i !== 0 || e !== 0
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0)
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0)
      }
      fixed64() {
        return Jf.uDec(this.sfixed32(), this.sfixed32())
      }
      sfixed64() {
        return Jf.dec(this.sfixed32(), this.sfixed32())
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0)
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0)
      }
      bytes() {
        let i = this.uint32(),
          e = this.pos
        return (this.pos += i), this.assertBounds(), this.buf.subarray(e, e + i)
      }
      string() {
        return this.textDecoder.decode(this.bytes())
      }
    },
    Zz = Symbol("@bufbuild/protobuf/unknown-fields"),
    ERi = { readUnknownFields: !0, readerFactory: (i) => new Mfn(i) },
    IRi = { writeUnknownFields: !0, writerFactory: () => new Afn() }
  function $fn(i) {
    return i ? { ...ERi, ...i } : ERi
  }
  function Ffn(i) {
    return i ? { ...IRi, ...i } : IRi
  }
  function Ofn() {
    return {
      makeReadOptions: $fn,
      makeWriteOptions: Ffn,
      listUnknownFields(i) {
        return i[Zz] ?? []
      },
      discardUnknownFields(i) {
        delete i[Zz]
      },
      writeUnknownFields(i, e) {
        const s = i[Zz]
        if (s) for (const n of s) e.tag(n.no, n.wireType).raw(n.data)
      },
      onUnknownField(i, e, t, s) {
        const n = i
        Array.isArray(n[Zz]) || (n[Zz] = []),
          n[Zz].push({ no: e, wireType: t, data: s })
      },
      readMessage(i, e, t, s, n) {
        const r = i.getType(),
          o = n ? e.len : e.pos + t
        let a, l
        for (
          ;
          e.pos < o && (([a, l] = e.tag()), !(n === !0 && l == tm.EndGroup));

        ) {
          const c = r.fields.find(a)
          if (!c) {
            const h = e.skip(l, a)
            s.readUnknownFields && this.onUnknownField(i, a, l, h)
            continue
          }
          DRi(i, e, c, l, s)
        }
        if (n && (l != tm.EndGroup || a !== t))
          throw new Error("invalid end group tag")
      },
      readField: DRi,
      writeMessage(i, e, t) {
        const s = i.getType()
        for (const n of s.fields.byNumber()) {
          if (!vRi(n, i)) {
            if (n.req)
              throw new Error(
                `cannot encode field ${s.typeName}.${n.name} to binary: required field not set`,
              )
            continue
          }
          const r = n.oneof ? i[n.oneof.localName].value : i[n.localName]
          TRi(n, r, e, t)
        }
        return t.writeUnknownFields && this.writeUnknownFields(i, e), e
      },
      writeField(i, e, t, s) {
        e !== void 0 && TRi(i, e, t, s)
      },
    }
  }
  function DRi(i, e, t, s, n) {
    let { repeated: r, localName: o } = t
    switch (
      (t.oneof &&
        ((i = i[t.oneof.localName]),
        i.case != o && delete i.value,
        (i.case = o),
        (o = "value")),
      t.kind)
    ) {
      case "scalar":
      case "enum":
        const a = t.kind == "enum" ? ds.INT32 : t.T
        let l = UHe
        if ((t.kind == "scalar" && t.L > 0 && (l = _fn), r)) {
          let d = i[o]
          if (s == tm.LengthDelimited && a != ds.STRING && a != ds.BYTES) {
            let p = e.uint32() + e.pos
            for (; e.pos < p; ) d.push(l(e, a))
          } else d.push(l(e, a))
        } else i[o] = l(e, a)
        break
      case "message":
        const c = t.T
        r
          ? i[o].push(_He(e, new c(), n, t))
          : G9(i[o])
            ? _He(e, i[o], n, t)
            : ((i[o] = _He(e, new c(), n, t)),
              c.fieldWrapper &&
                !t.oneof &&
                !t.repeated &&
                (i[o] = c.fieldWrapper.unwrapField(i[o])))
        break
      case "map":
        let [h, u] = Bfn(t, e, n)
        i[o][h] = u
        break
    }
  }
  function _He(i, e, t, s) {
    const n = e.getType().runtime.bin,
      r = s?.delimited
    return n.readMessage(e, i, r ? s.no : i.uint32(), t, r), e
  }
  function Bfn(i, e, t) {
    const s = e.uint32(),
      n = e.pos + s
    let r, o
    for (; e.pos < n; ) {
      const [a] = e.tag()
      switch (a) {
        case 1:
          r = UHe(e, i.K)
          break
        case 2:
          switch (i.V.kind) {
            case "scalar":
              o = UHe(e, i.V.T)
              break
            case "enum":
              o = e.int32()
              break
            case "message":
              o = _He(e, new i.V.T(), t, void 0)
              break
          }
          break
      }
    }
    if (
      (r === void 0 && (r = Qz(i.K, RB.BIGINT)),
      typeof r != "string" && typeof r != "number" && (r = r.toString()),
      o === void 0)
    )
      switch (i.V.kind) {
        case "scalar":
          o = Qz(i.V.T, RB.BIGINT)
          break
        case "enum":
          o = i.V.T.values[0].no
          break
        case "message":
          o = new i.V.T()
          break
      }
    return [r, o]
  }
  function _fn(i, e) {
    const t = UHe(i, e)
    return typeof t == "bigint" ? t.toString() : t
  }
  function UHe(i, e) {
    switch (e) {
      case ds.STRING:
        return i.string()
      case ds.BOOL:
        return i.bool()
      case ds.DOUBLE:
        return i.double()
      case ds.FLOAT:
        return i.float()
      case ds.INT32:
        return i.int32()
      case ds.INT64:
        return i.int64()
      case ds.UINT64:
        return i.uint64()
      case ds.FIXED64:
        return i.fixed64()
      case ds.BYTES:
        return i.bytes()
      case ds.FIXED32:
        return i.fixed32()
      case ds.SFIXED32:
        return i.sfixed32()
      case ds.SFIXED64:
        return i.sfixed64()
      case ds.SINT64:
        return i.sint64()
      case ds.UINT32:
        return i.uint32()
      case ds.SINT32:
        return i.sint32()
    }
  }
  function TRi(i, e, t, s) {
    fp(e !== void 0)
    const n = i.repeated
    switch (i.kind) {
      case "scalar":
      case "enum":
        let r = i.kind == "enum" ? ds.INT32 : i.T
        if (n)
          if ((fp(Array.isArray(e)), i.packed)) Hfn(t, r, i.no, e)
          else for (const o of e) qre(t, r, i.no, o)
        else qre(t, r, i.no, e)
        break
      case "message":
        if (n) {
          fp(Array.isArray(e))
          for (const o of e) PRi(t, s, i, o)
        } else PRi(t, s, i, e)
        break
      case "map":
        fp(typeof e == "object" && e != null)
        for (const [o, a] of Object.entries(e)) Ufn(t, s, i, o, a)
        break
    }
  }
  function Ufn(i, e, t, s, n) {
    i.tag(t.no, tm.LengthDelimited), i.fork()
    let r = s
    switch (t.K) {
      case ds.INT32:
      case ds.FIXED32:
      case ds.UINT32:
      case ds.SFIXED32:
      case ds.SINT32:
        r = Number.parseInt(s)
        break
      case ds.BOOL:
        fp(s == "true" || s == "false"), (r = s == "true")
        break
    }
    switch ((qre(i, t.K, 1, r), t.V.kind)) {
      case "scalar":
        qre(i, t.V.T, 2, n)
        break
      case "enum":
        qre(i, ds.INT32, 2, n)
        break
      case "message":
        fp(n !== void 0), i.tag(2, tm.LengthDelimited).bytes(n.toBinary(e))
        break
    }
    i.join()
  }
  function PRi(i, e, t, s) {
    const n = wRi(t.T, s)
    t.delimited
      ? i.tag(t.no, tm.StartGroup).raw(n.toBinary(e)).tag(t.no, tm.EndGroup)
      : i.tag(t.no, tm.LengthDelimited).bytes(n.toBinary(e))
  }
  function qre(i, e, t, s) {
    fp(s !== void 0)
    let [n, r] = LRi(e)
    i.tag(t, n)[r](s)
  }
  function Hfn(i, e, t, s) {
    if (!s.length) return
    i.tag(t, tm.LengthDelimited).fork()
    let [, n] = LRi(e)
    for (let r = 0; r < s.length; r++) i[n](s[r])
    i.join()
  }
  function LRi(i) {
    let e = tm.Varint
    switch (i) {
      case ds.BYTES:
      case ds.STRING:
        e = tm.LengthDelimited
        break
      case ds.DOUBLE:
      case ds.FIXED64:
      case ds.SFIXED64:
        e = tm.Bit64
        break
      case ds.FIXED32:
      case ds.SFIXED32:
      case ds.FLOAT:
        e = tm.Bit32
        break
    }
    const t = ds[i].toLowerCase()
    return [e, t]
  }
  function Vfn() {
    return {
      setEnumType: rRi,
      initPartial(i, e) {
        if (i === void 0) return
        const t = e.getType()
        for (const s of t.fields.byMember()) {
          const n = s.localName,
            r = e,
            o = i
          if (o[n] != null)
            switch (s.kind) {
              case "oneof":
                const a = o[n].case
                if (a === void 0) continue
                const l = s.findField(a)
                let c = o[n].value
                l && l.kind == "message" && !G9(c, l.T)
                  ? (c = new l.T(c))
                  : l && l.kind === "scalar" && l.T === ds.BYTES && (c = jre(c)),
                  (r[n] = { case: a, value: c })
                break
              case "scalar":
              case "enum":
                let h = o[n]
                s.T === ds.BYTES && (h = s.repeated ? h.map(jre) : jre(h)),
                  (r[n] = h)
                break
              case "map":
                switch (s.V.kind) {
                  case "scalar":
                  case "enum":
                    if (s.V.T === ds.BYTES)
                      for (const [g, p] of Object.entries(o[n])) r[n][g] = jre(p)
                    else Object.assign(r[n], o[n])
                    break
                  case "message":
                    const d = s.V.T
                    for (const g of Object.keys(o[n])) {
                      let p = o[n][g]
                      d.fieldWrapper || (p = new d(p)), (r[n][g] = p)
                    }
                    break
                }
                break
              case "message":
                const u = s.T
                if (s.repeated) r[n] = o[n].map((d) => (G9(d, u) ? d : new u(d)))
                else {
                  const d = o[n]
                  u.fieldWrapper
                    ? u.typeName === "google.protobuf.BytesValue"
                      ? (r[n] = jre(d))
                      : (r[n] = d)
                    : (r[n] = G9(d, u) ? d : new u(d))
                }
                break
            }
        }
      },
      equals(i, e, t) {
        return e === t
          ? !0
          : !e || !t
            ? !1
            : i.fields.byMember().every((s) => {
                const n = e[s.localName],
                  r = t[s.localName]
                if (s.repeated) {
                  if (n.length !== r.length) return !1
                  switch (s.kind) {
                    case "message":
                      return n.every((o, a) => s.T.equals(o, r[a]))
                    case "scalar":
                      return n.every((o, a) => AB(s.T, o, r[a]))
                    case "enum":
                      return n.every((o, a) => AB(ds.INT32, o, r[a]))
                  }
                  throw new Error(`repeated cannot contain ${s.kind}`)
                }
                switch (s.kind) {
                  case "message":
                    return s.T.equals(n, r)
                  case "enum":
                    return AB(ds.INT32, n, r)
                  case "scalar":
                    return AB(s.T, n, r)
                  case "oneof":
                    if (n.case !== r.case) return !1
                    const o = s.findField(n.case)
                    if (o === void 0) return !0
                    switch (o.kind) {
                      case "message":
                        return o.T.equals(n.value, r.value)
                      case "enum":
                        return AB(ds.INT32, n.value, r.value)
                      case "scalar":
                        return AB(o.T, n.value, r.value)
                    }
                    throw new Error(`oneof cannot contain ${o.kind}`)
                  case "map":
                    const a = Object.keys(n).concat(Object.keys(r))
                    switch (s.V.kind) {
                      case "message":
                        const l = s.V.T
                        return a.every((h) => l.equals(n[h], r[h]))
                      case "enum":
                        return a.every((h) => AB(ds.INT32, n[h], r[h]))
                      case "scalar":
                        const c = s.V.T
                        return a.every((h) => AB(c, n[h], r[h]))
                    }
                    break
                }
              })
      },
      clone(i) {
        const e = i.getType(),
          t = new e(),
          s = t
        for (const n of e.fields.byMember()) {
          const r = i[n.localName]
          let o
          if (n.repeated) o = r.map(HHe)
          else if (n.kind == "map") {
            o = s[n.localName]
            for (const [a, l] of Object.entries(r)) o[a] = HHe(l)
          } else
            n.kind == "oneof"
              ? (o = n.findField(r.case)
                  ? { case: r.case, value: HHe(r.value) }
                  : { case: void 0 })
              : (o = HHe(r))
          s[n.localName] = o
        }
        for (const n of e.runtime.bin.listUnknownFields(i))
          e.runtime.bin.onUnknownField(s, n.no, n.wireType, n.data)
        return t
      },
    }
  }
  function HHe(i) {
    if (i === void 0) return i
    if (G9(i)) return i.clone()
    if (i instanceof Uint8Array) {
      const e = new Uint8Array(i.byteLength)
      return e.set(i), e
    }
    return i
  }
  function jre(i) {
    return i instanceof Uint8Array ? i : new Uint8Array(i)
  }
  function NRi(i, e, t) {
    return {
      syntax: i,
      json: Lfn(),
      bin: Ofn(),
      util: { ...Vfn(), newFieldList: e, initFields: t },
      makeMessageType(s, n, r) {
        return bfn(this, s, n, r)
      },
      makeEnum: mfn,
      makeEnumType: oRi,
      getEnumType: nRi,
      makeExtension(s, n, r) {
        return xfn(this, s, n, r)
      },
    }
  }
  var RRi = class {
    constructor(i, e) {
      ;(this._fields = i), (this._normalizer = e)
    }
    findJsonName(i) {
      if (!this.jsonNames) {
        const e = {}
        for (const t of this.list()) e[t.jsonName] = e[t.name] = t
        this.jsonNames = e
      }
      return this.jsonNames[i]
    }
    find(i) {
      if (!this.numbers) {
        const e = {}
        for (const t of this.list()) e[t.no] = t
        this.numbers = e
      }
      return this.numbers[i]
    }
    list() {
      return this.all || (this.all = this._normalizer(this._fields)), this.all
    }
    byNumber() {
      return (
        this.numbersAsc ||
          (this.numbersAsc = this.list()
            .concat()
            .sort((i, e) => i.no - e.no)),
        this.numbersAsc
      )
    }
    byMember() {
      if (!this.members) {
        this.members = []
        const i = this.members
        let e
        for (const t of this.list())
          t.oneof ? t.oneof !== e && ((e = t.oneof), i.push(e)) : i.push(t)
      }
      return this.members
    }
  }
  function ARi(i, e) {
    const t = MRi(i)
    return e ? t : Jfn(Gfn(t))
  }
  function Wfn(i) {
    return ARi(i, !1)
  }
  var qfn = MRi
  function MRi(i) {
    let e = !1
    const t = []
    for (let s = 0; s < i.length; s++) {
      let n = i.charAt(s)
      switch (n) {
        case "_":
          e = !0
          break
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          t.push(n), (e = !1)
          break
        default:
          e && ((e = !1), (n = n.toUpperCase())), t.push(n)
          break
      }
    }
    return t.join("")
  }
  var jfn = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    zfn = new Set([
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      "toObject",
    ]),
    $Ri = (i) => `${i}$`,
    Gfn = (i) => (zfn.has(i) ? $Ri(i) : i),
    Jfn = (i) => (jfn.has(i) ? $Ri(i) : i),
    Kfn = class {
      constructor(i) {
        ;(this.kind = "oneof"),
          (this.repeated = !1),
          (this.packed = !1),
          (this.opt = !1),
          (this.req = !1),
          (this.default = void 0),
          (this.fields = []),
          (this.name = i),
          (this.localName = Wfn(i))
      }
      addField(i) {
        fp(i.oneof === this, `field ${i.name} not one of ${this.name}`),
          this.fields.push(i)
      }
      findField(i) {
        if (!this._lookup) {
          this._lookup = Object.create(null)
          for (let e = 0; e < this.fields.length; e++)
            this._lookup[this.fields[e].localName] = this.fields[e]
        }
        return this._lookup[i]
      }
    }
  function FRi(i, e) {
    const t = []
    let s
    for (const n of typeof i == "function" ? i() : i) {
      const r = n
      if (
        ((r.localName = ARi(n.name, n.oneof !== void 0)),
        (r.jsonName = n.jsonName ?? qfn(n.name)),
        (r.repeated = n.repeated ?? !1),
        n.kind == "scalar" && (r.L = n.L ?? RB.BIGINT),
        (r.delimited = n.delimited ?? !1),
        (r.req = n.req ?? !1),
        (r.opt = n.opt ?? !1),
        n.packed === void 0 &&
          (e
            ? (r.packed =
                n.kind == "enum" ||
                (n.kind == "scalar" && n.T != ds.BYTES && n.T != ds.STRING))
            : (r.packed = !1)),
        n.oneof !== void 0)
      ) {
        const o = typeof n.oneof == "string" ? n.oneof : n.oneof.name
        ;(!s || s.name != o) && (s = new Kfn(o)), (r.oneof = s), s.addField(r)
      }
      t.push(r)
    }
    return t
  }
  var v = NRi(
      "proto3",
      (i) => new RRi(i, (e) => FRi(e, !0)),
      (i) => {
        for (const e of i.getType().fields.byMember()) {
          if (e.opt) continue
          const t = e.localName,
            s = i
          if (e.repeated) {
            s[t] = []
            continue
          }
          switch (e.kind) {
            case "oneof":
              s[t] = { case: void 0 }
              break
            case "enum":
              s[t] = 0
              break
            case "map":
              s[t] = {}
              break
            case "scalar":
              s[t] = Qz(e.T, e.L)
              break
            case "message":
              break
          }
        }
      },
    ),
    pi = NRi(
      "proto2",
      (i) => new RRi(i, (e) => FRi(e, !1)),
      (i) => {
        for (const e of i.getType().fields.byMember()) {
          const t = e.localName,
            s = i
          if (e.repeated) {
            s[t] = []
            continue
          }
          switch (e.kind) {
            case "oneof":
              s[t] = { case: void 0 }
              break
            case "map":
              s[t] = {}
              break
            case "scalar":
            case "enum":
            case "message":
              break
          }
        }
      },
    ),
    c0o = {
      NaN: Number.NaN,
      POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
      NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
    },
    gt
  ;(function (i) {
    ;(i[(i.Unary = 0)] = "Unary"),
      (i[(i.ServerStreaming = 1)] = "ServerStreaming"),
      (i[(i.ClientStreaming = 2)] = "ClientStreaming"),
      (i[(i.BiDiStreaming = 3)] = "BiDiStreaming")
  })(gt || (gt = {}))
  var ORi
  ;(function (i) {
    ;(i[(i.NoSideEffects = 1)] = "NoSideEffects"),
      (i[(i.Idempotent = 2)] = "Idempotent")
  })(ORi || (ORi = {}))
  var AT
  ;(function (i) {
    ;(i[(i.EDITION_UNKNOWN = 0)] = "EDITION_UNKNOWN"),
      (i[(i.EDITION_LEGACY = 900)] = "EDITION_LEGACY"),
      (i[(i.EDITION_PROTO2 = 998)] = "EDITION_PROTO2"),
      (i[(i.EDITION_PROTO3 = 999)] = "EDITION_PROTO3"),
      (i[(i.EDITION_2023 = 1e3)] = "EDITION_2023"),
      (i[(i.EDITION_2024 = 1001)] = "EDITION_2024"),
      (i[(i.EDITION_1_TEST_ONLY = 1)] = "EDITION_1_TEST_ONLY"),
      (i[(i.EDITION_2_TEST_ONLY = 2)] = "EDITION_2_TEST_ONLY"),
      (i[(i.EDITION_99997_TEST_ONLY = 99997)] = "EDITION_99997_TEST_ONLY"),
      (i[(i.EDITION_99998_TEST_ONLY = 99998)] = "EDITION_99998_TEST_ONLY"),
      (i[(i.EDITION_99999_TEST_ONLY = 99999)] = "EDITION_99999_TEST_ONLY"),
      (i[(i.EDITION_MAX = 2147483647)] = "EDITION_MAX")
  })(AT || (AT = {})),
    pi.util.setEnumType(AT, "google.protobuf.Edition", [
      { no: 0, name: "EDITION_UNKNOWN" },
      { no: 900, name: "EDITION_LEGACY" },
      { no: 998, name: "EDITION_PROTO2" },
      { no: 999, name: "EDITION_PROTO3" },
      { no: 1e3, name: "EDITION_2023" },
      { no: 1001, name: "EDITION_2024" },
      { no: 1, name: "EDITION_1_TEST_ONLY" },
      { no: 2, name: "EDITION_2_TEST_ONLY" },
      { no: 99997, name: "EDITION_99997_TEST_ONLY" },
      { no: 99998, name: "EDITION_99998_TEST_ONLY" },
      { no: 99999, name: "EDITION_99999_TEST_ONLY" },
      { no: 2147483647, name: "EDITION_MAX" },
    ])
  var h0o = class cye extends _ {
      constructor(e) {
        super(), (this.file = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FileDescriptorSet"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "file", kind: "message", T: DSt, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new cye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new cye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new cye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(cye, e, t)
      }
    },
    DSt = class hye extends _ {
      constructor(e) {
        super(),
          (this.dependency = []),
          (this.publicDependency = []),
          (this.weakDependency = []),
          (this.messageType = []),
          (this.enumType = []),
          (this.service = []),
          (this.extension = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FileDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "package", kind: "scalar", T: 9, opt: !0 },
          { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: !0 },
          {
            no: 10,
            name: "public_dependency",
            kind: "scalar",
            T: 5,
            repeated: !0,
          },
          { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: !0 },
          { no: 4, name: "message_type", kind: "message", T: Yfn, repeated: !0 },
          { no: 5, name: "enum_type", kind: "message", T: BRi, repeated: !0 },
          { no: 6, name: "service", kind: "message", T: ngn, repeated: !0 },
          { no: 7, name: "extension", kind: "message", T: TSt, repeated: !0 },
          { no: 8, name: "options", kind: "message", T: ogn, opt: !0 },
          { no: 9, name: "source_code_info", kind: "message", T: bgn, opt: !0 },
          { no: 12, name: "syntax", kind: "scalar", T: 9, opt: !0 },
          {
            no: 14,
            name: "edition",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new hye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new hye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new hye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(hye, e, t)
      }
    },
    Yfn = class bte extends _ {
      constructor(e) {
        super(),
          (this.field = []),
          (this.extension = []),
          (this.nestedType = []),
          (this.enumType = []),
          (this.extensionRange = []),
          (this.oneofDecl = []),
          (this.reservedRange = []),
          (this.reservedName = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.DescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "field", kind: "message", T: TSt, repeated: !0 },
          { no: 6, name: "extension", kind: "message", T: TSt, repeated: !0 },
          { no: 3, name: "nested_type", kind: "message", T: bte, repeated: !0 },
          { no: 4, name: "enum_type", kind: "message", T: BRi, repeated: !0 },
          {
            no: 5,
            name: "extension_range",
            kind: "message",
            T: Xfn,
            repeated: !0,
          },
          { no: 8, name: "oneof_decl", kind: "message", T: tgn, repeated: !0 },
          { no: 7, name: "options", kind: "message", T: agn, opt: !0 },
          {
            no: 9,
            name: "reserved_range",
            kind: "message",
            T: Qfn,
            repeated: !0,
          },
          { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new bte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new bte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new bte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(bte, e, t)
      }
    },
    Xfn = class uye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.DescriptorProto.ExtensionRange"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
          { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
          { no: 3, name: "options", kind: "message", T: Zfn, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new uye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new uye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new uye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(uye, e, t)
      }
    },
    Qfn = class dye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.DescriptorProto.ReservedRange"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
          { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new dye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new dye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new dye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(dye, e, t)
      }
    },
    Zfn = class fye extends _ {
      constructor(e) {
        super(),
          (this.uninterpretedOption = []),
          (this.declaration = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.ExtensionRangeOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
          { no: 2, name: "declaration", kind: "message", T: egn, repeated: !0 },
          { no: 50, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 3,
            name: "verification",
            kind: "enum",
            T: pi.getEnumType(zre),
            opt: !0,
            default: zre.UNVERIFIED,
          },
        ])
      }
      static fromBinary(e, t) {
        return new fye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new fye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new fye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(fye, e, t)
      }
    },
    zre
  ;(function (i) {
    ;(i[(i.DECLARATION = 0)] = "DECLARATION"),
      (i[(i.UNVERIFIED = 1)] = "UNVERIFIED")
  })(zre || (zre = {})),
    pi.util.setEnumType(
      zre,
      "google.protobuf.ExtensionRangeOptions.VerificationState",
      [
        { no: 0, name: "DECLARATION" },
        { no: 1, name: "UNVERIFIED" },
      ],
    )
  var egn = class gye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.ExtensionRangeOptions.Declaration"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "number", kind: "scalar", T: 5, opt: !0 },
          { no: 2, name: "full_name", kind: "scalar", T: 9, opt: !0 },
          { no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
          { no: 5, name: "reserved", kind: "scalar", T: 8, opt: !0 },
          { no: 6, name: "repeated", kind: "scalar", T: 8, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new gye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new gye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new gye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(gye, e, t)
      }
    },
    TSt = class pye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FieldDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 3, name: "number", kind: "scalar", T: 5, opt: !0 },
          { no: 4, name: "label", kind: "enum", T: pi.getEnumType(VHe), opt: !0 },
          { no: 5, name: "type", kind: "enum", T: pi.getEnumType(gp), opt: !0 },
          { no: 6, name: "type_name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "extendee", kind: "scalar", T: 9, opt: !0 },
          { no: 7, name: "default_value", kind: "scalar", T: 9, opt: !0 },
          { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: !0 },
          { no: 10, name: "json_name", kind: "scalar", T: 9, opt: !0 },
          { no: 8, name: "options", kind: "message", T: lgn, opt: !0 },
          { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new pye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new pye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new pye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(pye, e, t)
      }
    },
    gp
  ;(function (i) {
    ;(i[(i.DOUBLE = 1)] = "DOUBLE"),
      (i[(i.FLOAT = 2)] = "FLOAT"),
      (i[(i.INT64 = 3)] = "INT64"),
      (i[(i.UINT64 = 4)] = "UINT64"),
      (i[(i.INT32 = 5)] = "INT32"),
      (i[(i.FIXED64 = 6)] = "FIXED64"),
      (i[(i.FIXED32 = 7)] = "FIXED32"),
      (i[(i.BOOL = 8)] = "BOOL"),
      (i[(i.STRING = 9)] = "STRING"),
      (i[(i.GROUP = 10)] = "GROUP"),
      (i[(i.MESSAGE = 11)] = "MESSAGE"),
      (i[(i.BYTES = 12)] = "BYTES"),
      (i[(i.UINT32 = 13)] = "UINT32"),
      (i[(i.ENUM = 14)] = "ENUM"),
      (i[(i.SFIXED32 = 15)] = "SFIXED32"),
      (i[(i.SFIXED64 = 16)] = "SFIXED64"),
      (i[(i.SINT32 = 17)] = "SINT32"),
      (i[(i.SINT64 = 18)] = "SINT64")
  })(gp || (gp = {})),
    pi.util.setEnumType(gp, "google.protobuf.FieldDescriptorProto.Type", [
      { no: 1, name: "TYPE_DOUBLE" },
      { no: 2, name: "TYPE_FLOAT" },
      { no: 3, name: "TYPE_INT64" },
      { no: 4, name: "TYPE_UINT64" },
      { no: 5, name: "TYPE_INT32" },
      { no: 6, name: "TYPE_FIXED64" },
      { no: 7, name: "TYPE_FIXED32" },
      { no: 8, name: "TYPE_BOOL" },
      { no: 9, name: "TYPE_STRING" },
      { no: 10, name: "TYPE_GROUP" },
      { no: 11, name: "TYPE_MESSAGE" },
      { no: 12, name: "TYPE_BYTES" },
      { no: 13, name: "TYPE_UINT32" },
      { no: 14, name: "TYPE_ENUM" },
      { no: 15, name: "TYPE_SFIXED32" },
      { no: 16, name: "TYPE_SFIXED64" },
      { no: 17, name: "TYPE_SINT32" },
      { no: 18, name: "TYPE_SINT64" },
    ])
  var VHe
  ;(function (i) {
    ;(i[(i.OPTIONAL = 1)] = "OPTIONAL"),
      (i[(i.REPEATED = 3)] = "REPEATED"),
      (i[(i.REQUIRED = 2)] = "REQUIRED")
  })(VHe || (VHe = {})),
    pi.util.setEnumType(VHe, "google.protobuf.FieldDescriptorProto.Label", [
      { no: 1, name: "LABEL_OPTIONAL" },
      { no: 3, name: "LABEL_REPEATED" },
      { no: 2, name: "LABEL_REQUIRED" },
    ])
  var tgn = class mye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.OneofDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "options", kind: "message", T: hgn, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new mye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new mye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new mye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(mye, e, t)
      }
    },
    BRi = class bye extends _ {
      constructor(e) {
        super(),
          (this.value = []),
          (this.reservedRange = []),
          (this.reservedName = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.EnumDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "value", kind: "message", T: sgn, repeated: !0 },
          { no: 3, name: "options", kind: "message", T: ugn, opt: !0 },
          {
            no: 4,
            name: "reserved_range",
            kind: "message",
            T: ign,
            repeated: !0,
          },
          { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new bye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new bye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new bye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(bye, e, t)
      }
    },
    ign = class vye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
          { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new vye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new vye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new vye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(vye, e, t)
      }
    },
    sgn = class yye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.EnumValueDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "number", kind: "scalar", T: 5, opt: !0 },
          { no: 3, name: "options", kind: "message", T: dgn, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new yye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new yye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new yye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(yye, e, t)
      }
    },
    ngn = class wye extends _ {
      constructor(e) {
        super(), (this.method = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.ServiceDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "method", kind: "message", T: rgn, repeated: !0 },
          { no: 3, name: "options", kind: "message", T: fgn, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new wye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new wye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new wye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(wye, e, t)
      }
    },
    rgn = class Cye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.MethodDescriptorProto"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "input_type", kind: "scalar", T: 9, opt: !0 },
          { no: 3, name: "output_type", kind: "scalar", T: 9, opt: !0 },
          { no: 4, name: "options", kind: "message", T: ggn, opt: !0 },
          {
            no: 5,
            name: "client_streaming",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 6,
            name: "server_streaming",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Cye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Cye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Cye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Cye, e, t)
      }
    },
    ogn = class Sye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FileOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "java_package", kind: "scalar", T: 9, opt: !0 },
          { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: !0 },
          {
            no: 10,
            name: "java_multiple_files",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 20,
            name: "java_generate_equals_and_hash",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 27,
            name: "java_string_check_utf8",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 9,
            name: "optimize_for",
            kind: "enum",
            T: pi.getEnumType(Gre),
            opt: !0,
            default: Gre.SPEED,
          },
          { no: 11, name: "go_package", kind: "scalar", T: 9, opt: !0 },
          {
            no: 16,
            name: "cc_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 17,
            name: "java_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 18,
            name: "py_generic_services",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 23,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 31,
            name: "cc_enable_arenas",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !0,
          },
          { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: !0 },
          { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: !0 },
          { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: !0 },
          { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: !0 },
          { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: !0 },
          {
            no: 44,
            name: "php_metadata_namespace",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: !0 },
          { no: 50, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Sye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Sye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Sye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Sye, e, t)
      }
    },
    Gre
  ;(function (i) {
    ;(i[(i.SPEED = 1)] = "SPEED"),
      (i[(i.CODE_SIZE = 2)] = "CODE_SIZE"),
      (i[(i.LITE_RUNTIME = 3)] = "LITE_RUNTIME")
  })(Gre || (Gre = {})),
    pi.util.setEnumType(Gre, "google.protobuf.FileOptions.OptimizeMode", [
      { no: 1, name: "SPEED" },
      { no: 2, name: "CODE_SIZE" },
      { no: 3, name: "LITE_RUNTIME" },
    ])
  var agn = class xye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.MessageOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 1,
            name: "message_set_wire_format",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 2,
            name: "no_standard_descriptor_accessor",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: !0 },
          {
            no: 11,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          { no: 12, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new xye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new xye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new xye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(xye, e, t)
      }
    },
    lgn = class kye extends _ {
      constructor(e) {
        super(),
          (this.targets = []),
          (this.editionDefaults = []),
          (this.uninterpretedOption = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FieldOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 1,
            name: "ctype",
            kind: "enum",
            T: pi.getEnumType(Jre),
            opt: !0,
            default: Jre.STRING,
          },
          { no: 2, name: "packed", kind: "scalar", T: 8, opt: !0 },
          {
            no: 6,
            name: "jstype",
            kind: "enum",
            T: pi.getEnumType(Kre),
            opt: !0,
            default: Kre.JS_NORMAL,
          },
          { no: 5, name: "lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
          {
            no: 15,
            name: "unverified_lazy",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          { no: 10, name: "weak", kind: "scalar", T: 8, opt: !0, default: !1 },
          {
            no: 16,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 17,
            name: "retention",
            kind: "enum",
            T: pi.getEnumType(WHe),
            opt: !0,
          },
          {
            no: 19,
            name: "targets",
            kind: "enum",
            T: pi.getEnumType(qHe),
            repeated: !0,
          },
          {
            no: 20,
            name: "edition_defaults",
            kind: "message",
            T: cgn,
            repeated: !0,
          },
          { no: 21, name: "features", kind: "message", T: MT, opt: !0 },
          { no: 22, name: "feature_support", kind: "message", T: _Ri, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new kye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new kye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new kye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(kye, e, t)
      }
    },
    Jre
  ;(function (i) {
    ;(i[(i.STRING = 0)] = "STRING"),
      (i[(i.CORD = 1)] = "CORD"),
      (i[(i.STRING_PIECE = 2)] = "STRING_PIECE")
  })(Jre || (Jre = {})),
    pi.util.setEnumType(Jre, "google.protobuf.FieldOptions.CType", [
      { no: 0, name: "STRING" },
      { no: 1, name: "CORD" },
      { no: 2, name: "STRING_PIECE" },
    ])
  var Kre
  ;(function (i) {
    ;(i[(i.JS_NORMAL = 0)] = "JS_NORMAL"),
      (i[(i.JS_STRING = 1)] = "JS_STRING"),
      (i[(i.JS_NUMBER = 2)] = "JS_NUMBER")
  })(Kre || (Kre = {})),
    pi.util.setEnumType(Kre, "google.protobuf.FieldOptions.JSType", [
      { no: 0, name: "JS_NORMAL" },
      { no: 1, name: "JS_STRING" },
      { no: 2, name: "JS_NUMBER" },
    ])
  var WHe
  ;(function (i) {
    ;(i[(i.RETENTION_UNKNOWN = 0)] = "RETENTION_UNKNOWN"),
      (i[(i.RETENTION_RUNTIME = 1)] = "RETENTION_RUNTIME"),
      (i[(i.RETENTION_SOURCE = 2)] = "RETENTION_SOURCE")
  })(WHe || (WHe = {})),
    pi.util.setEnumType(WHe, "google.protobuf.FieldOptions.OptionRetention", [
      { no: 0, name: "RETENTION_UNKNOWN" },
      { no: 1, name: "RETENTION_RUNTIME" },
      { no: 2, name: "RETENTION_SOURCE" },
    ])
  var qHe
  ;(function (i) {
    ;(i[(i.TARGET_TYPE_UNKNOWN = 0)] = "TARGET_TYPE_UNKNOWN"),
      (i[(i.TARGET_TYPE_FILE = 1)] = "TARGET_TYPE_FILE"),
      (i[(i.TARGET_TYPE_EXTENSION_RANGE = 2)] = "TARGET_TYPE_EXTENSION_RANGE"),
      (i[(i.TARGET_TYPE_MESSAGE = 3)] = "TARGET_TYPE_MESSAGE"),
      (i[(i.TARGET_TYPE_FIELD = 4)] = "TARGET_TYPE_FIELD"),
      (i[(i.TARGET_TYPE_ONEOF = 5)] = "TARGET_TYPE_ONEOF"),
      (i[(i.TARGET_TYPE_ENUM = 6)] = "TARGET_TYPE_ENUM"),
      (i[(i.TARGET_TYPE_ENUM_ENTRY = 7)] = "TARGET_TYPE_ENUM_ENTRY"),
      (i[(i.TARGET_TYPE_SERVICE = 8)] = "TARGET_TYPE_SERVICE"),
      (i[(i.TARGET_TYPE_METHOD = 9)] = "TARGET_TYPE_METHOD")
  })(qHe || (qHe = {})),
    pi.util.setEnumType(qHe, "google.protobuf.FieldOptions.OptionTargetType", [
      { no: 0, name: "TARGET_TYPE_UNKNOWN" },
      { no: 1, name: "TARGET_TYPE_FILE" },
      { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" },
      { no: 3, name: "TARGET_TYPE_MESSAGE" },
      { no: 4, name: "TARGET_TYPE_FIELD" },
      { no: 5, name: "TARGET_TYPE_ONEOF" },
      { no: 6, name: "TARGET_TYPE_ENUM" },
      { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" },
      { no: 8, name: "TARGET_TYPE_SERVICE" },
      { no: 9, name: "TARGET_TYPE_METHOD" },
    ])
  var cgn = class Eye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FieldOptions.EditionDefault"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 3,
            name: "edition",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
          { no: 2, name: "value", kind: "scalar", T: 9, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Eye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Eye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Eye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Eye, e, t)
      }
    },
    _Ri = class Iye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FieldOptions.FeatureSupport"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 1,
            name: "edition_introduced",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
          {
            no: 2,
            name: "edition_deprecated",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
          { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: !0 },
          {
            no: 4,
            name: "edition_removed",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Iye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Iye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Iye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Iye, e, t)
      }
    },
    hgn = class Dye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.OneofOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Dye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Dye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Dye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Dye, e, t)
      }
    },
    ugn = class Tye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.EnumOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: !0 },
          {
            no: 3,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 6,
            name: "deprecated_legacy_json_field_conflicts",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          { no: 7, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Tye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Tye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Tye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Tye, e, t)
      }
    },
    dgn = class Pye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.EnumValueOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 1,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          { no: 2, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 3,
            name: "debug_redact",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          { no: 4, name: "feature_support", kind: "message", T: _Ri, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Pye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Pye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Pye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Pye, e, t)
      }
    },
    fgn = class Lye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.ServiceOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 34, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Lye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Lye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Lye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Lye, e, t)
      }
    },
    ggn = class Nye extends _ {
      constructor(e) {
        super(), (this.uninterpretedOption = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.MethodOptions"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 33,
            name: "deprecated",
            kind: "scalar",
            T: 8,
            opt: !0,
            default: !1,
          },
          {
            no: 34,
            name: "idempotency_level",
            kind: "enum",
            T: pi.getEnumType(Yre),
            opt: !0,
            default: Yre.IDEMPOTENCY_UNKNOWN,
          },
          { no: 35, name: "features", kind: "message", T: MT, opt: !0 },
          {
            no: 999,
            name: "uninterpreted_option",
            kind: "message",
            T: S$,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Nye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Nye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Nye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Nye, e, t)
      }
    },
    Yre
  ;(function (i) {
    ;(i[(i.IDEMPOTENCY_UNKNOWN = 0)] = "IDEMPOTENCY_UNKNOWN"),
      (i[(i.NO_SIDE_EFFECTS = 1)] = "NO_SIDE_EFFECTS"),
      (i[(i.IDEMPOTENT = 2)] = "IDEMPOTENT")
  })(Yre || (Yre = {})),
    pi.util.setEnumType(Yre, "google.protobuf.MethodOptions.IdempotencyLevel", [
      { no: 0, name: "IDEMPOTENCY_UNKNOWN" },
      { no: 1, name: "NO_SIDE_EFFECTS" },
      { no: 2, name: "IDEMPOTENT" },
    ])
  var S$ = class Rye extends _ {
      constructor(e) {
        super(), (this.name = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.UninterpretedOption"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 2, name: "name", kind: "message", T: pgn, repeated: !0 },
          { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: !0 },
          { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: !0 },
          { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: !0 },
          { no: 6, name: "double_value", kind: "scalar", T: 1, opt: !0 },
          { no: 7, name: "string_value", kind: "scalar", T: 12, opt: !0 },
          { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Rye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Rye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Rye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Rye, e, t)
      }
    },
    pgn = class Aye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.UninterpretedOption.NamePart"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name_part", kind: "scalar", T: 9, req: !0 },
          { no: 2, name: "is_extension", kind: "scalar", T: 8, req: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Aye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Aye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Aye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Aye, e, t)
      }
    },
    MT = class Mye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FeatureSet"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 1,
            name: "field_presence",
            kind: "enum",
            T: pi.getEnumType(jHe),
            opt: !0,
          },
          {
            no: 2,
            name: "enum_type",
            kind: "enum",
            T: pi.getEnumType(zHe),
            opt: !0,
          },
          {
            no: 3,
            name: "repeated_field_encoding",
            kind: "enum",
            T: pi.getEnumType(GHe),
            opt: !0,
          },
          {
            no: 4,
            name: "utf8_validation",
            kind: "enum",
            T: pi.getEnumType(JHe),
            opt: !0,
          },
          {
            no: 5,
            name: "message_encoding",
            kind: "enum",
            T: pi.getEnumType(KHe),
            opt: !0,
          },
          {
            no: 6,
            name: "json_format",
            kind: "enum",
            T: pi.getEnumType(YHe),
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Mye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Mye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Mye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Mye, e, t)
      }
    },
    jHe
  ;(function (i) {
    ;(i[(i.FIELD_PRESENCE_UNKNOWN = 0)] = "FIELD_PRESENCE_UNKNOWN"),
      (i[(i.EXPLICIT = 1)] = "EXPLICIT"),
      (i[(i.IMPLICIT = 2)] = "IMPLICIT"),
      (i[(i.LEGACY_REQUIRED = 3)] = "LEGACY_REQUIRED")
  })(jHe || (jHe = {})),
    pi.util.setEnumType(jHe, "google.protobuf.FeatureSet.FieldPresence", [
      { no: 0, name: "FIELD_PRESENCE_UNKNOWN" },
      { no: 1, name: "EXPLICIT" },
      { no: 2, name: "IMPLICIT" },
      { no: 3, name: "LEGACY_REQUIRED" },
    ])
  var zHe
  ;(function (i) {
    ;(i[(i.ENUM_TYPE_UNKNOWN = 0)] = "ENUM_TYPE_UNKNOWN"),
      (i[(i.OPEN = 1)] = "OPEN"),
      (i[(i.CLOSED = 2)] = "CLOSED")
  })(zHe || (zHe = {})),
    pi.util.setEnumType(zHe, "google.protobuf.FeatureSet.EnumType", [
      { no: 0, name: "ENUM_TYPE_UNKNOWN" },
      { no: 1, name: "OPEN" },
      { no: 2, name: "CLOSED" },
    ])
  var GHe
  ;(function (i) {
    ;(i[(i.REPEATED_FIELD_ENCODING_UNKNOWN = 0)] =
      "REPEATED_FIELD_ENCODING_UNKNOWN"),
      (i[(i.PACKED = 1)] = "PACKED"),
      (i[(i.EXPANDED = 2)] = "EXPANDED")
  })(GHe || (GHe = {})),
    pi.util.setEnumType(GHe, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
      { no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" },
      { no: 1, name: "PACKED" },
      { no: 2, name: "EXPANDED" },
    ])
  var JHe
  ;(function (i) {
    ;(i[(i.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
      (i[(i.VERIFY = 2)] = "VERIFY"),
      (i[(i.NONE = 3)] = "NONE")
  })(JHe || (JHe = {})),
    pi.util.setEnumType(JHe, "google.protobuf.FeatureSet.Utf8Validation", [
      { no: 0, name: "UTF8_VALIDATION_UNKNOWN" },
      { no: 2, name: "VERIFY" },
      { no: 3, name: "NONE" },
    ])
  var KHe
  ;(function (i) {
    ;(i[(i.MESSAGE_ENCODING_UNKNOWN = 0)] = "MESSAGE_ENCODING_UNKNOWN"),
      (i[(i.LENGTH_PREFIXED = 1)] = "LENGTH_PREFIXED"),
      (i[(i.DELIMITED = 2)] = "DELIMITED")
  })(KHe || (KHe = {})),
    pi.util.setEnumType(KHe, "google.protobuf.FeatureSet.MessageEncoding", [
      { no: 0, name: "MESSAGE_ENCODING_UNKNOWN" },
      { no: 1, name: "LENGTH_PREFIXED" },
      { no: 2, name: "DELIMITED" },
    ])
  var YHe
  ;(function (i) {
    ;(i[(i.JSON_FORMAT_UNKNOWN = 0)] = "JSON_FORMAT_UNKNOWN"),
      (i[(i.ALLOW = 1)] = "ALLOW"),
      (i[(i.LEGACY_BEST_EFFORT = 2)] = "LEGACY_BEST_EFFORT")
  })(YHe || (YHe = {})),
    pi.util.setEnumType(YHe, "google.protobuf.FeatureSet.JsonFormat", [
      { no: 0, name: "JSON_FORMAT_UNKNOWN" },
      { no: 1, name: "ALLOW" },
      { no: 2, name: "LEGACY_BEST_EFFORT" },
    ])
  var u0o = class $ye extends _ {
      constructor(e) {
        super(), (this.defaults = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.FeatureSetDefaults"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "defaults", kind: "message", T: mgn, repeated: !0 },
          {
            no: 4,
            name: "minimum_edition",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
          {
            no: 5,
            name: "maximum_edition",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new $ye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new $ye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new $ye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals($ye, e, t)
      }
    },
    mgn = class Fye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName =
          "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          {
            no: 3,
            name: "edition",
            kind: "enum",
            T: pi.getEnumType(AT),
            opt: !0,
          },
          {
            no: 4,
            name: "overridable_features",
            kind: "message",
            T: MT,
            opt: !0,
          },
          { no: 5, name: "fixed_features", kind: "message", T: MT, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Fye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Fye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Fye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Fye, e, t)
      }
    },
    bgn = class Oye extends _ {
      constructor(e) {
        super(), (this.location = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.SourceCodeInfo"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "location", kind: "message", T: vgn, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Oye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Oye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Oye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Oye, e, t)
      }
    },
    vgn = class Bye extends _ {
      constructor(e) {
        super(),
          (this.path = []),
          (this.span = []),
          (this.leadingDetachedComments = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.SourceCodeInfo.Location"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
          { no: 2, name: "span", kind: "scalar", T: 5, repeated: !0, packed: !0 },
          { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: !0 },
          { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: !0 },
          {
            no: 6,
            name: "leading_detached_comments",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Bye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Bye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Bye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Bye, e, t)
      }
    },
    ygn = class _ye extends _ {
      constructor(e) {
        super(), (this.annotation = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.GeneratedCodeInfo"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "annotation", kind: "message", T: wgn, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new _ye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new _ye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new _ye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(_ye, e, t)
      }
    },
    wgn = class Uye extends _ {
      constructor(e) {
        super(), (this.path = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.GeneratedCodeInfo.Annotation"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
          { no: 2, name: "source_file", kind: "scalar", T: 9, opt: !0 },
          { no: 3, name: "begin", kind: "scalar", T: 5, opt: !0 },
          { no: 4, name: "end", kind: "scalar", T: 5, opt: !0 },
          {
            no: 5,
            name: "semantic",
            kind: "enum",
            T: pi.getEnumType(XHe),
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Uye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Uye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Uye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Uye, e, t)
      }
    },
    XHe
  ;(function (i) {
    ;(i[(i.NONE = 0)] = "NONE"),
      (i[(i.SET = 1)] = "SET"),
      (i[(i.ALIAS = 2)] = "ALIAS")
  })(XHe || (XHe = {})),
    pi.util.setEnumType(
      XHe,
      "google.protobuf.GeneratedCodeInfo.Annotation.Semantic",
      [
        { no: 0, name: "NONE" },
        { no: 1, name: "SET" },
        { no: 2, name: "ALIAS" },
      ],
    )
  var d0o = {
      [gp.DOUBLE]: ds.DOUBLE,
      [gp.FLOAT]: ds.FLOAT,
      [gp.INT64]: ds.INT64,
      [gp.UINT64]: ds.UINT64,
      [gp.INT32]: ds.INT32,
      [gp.FIXED64]: ds.FIXED64,
      [gp.FIXED32]: ds.FIXED32,
      [gp.BOOL]: ds.BOOL,
      [gp.STRING]: ds.STRING,
      [gp.GROUP]: void 0,
      [gp.MESSAGE]: void 0,
      [gp.BYTES]: ds.BYTES,
      [gp.UINT32]: ds.UINT32,
      [gp.ENUM]: void 0,
      [gp.SFIXED32]: ds.SFIXED32,
      [gp.SFIXED64]: ds.SFIXED64,
      [gp.SINT32]: ds.SINT32,
      [gp.SINT64]: ds.SINT64,
    },
    URi
  ;(function (i) {
    ;(i[(i.FileDescriptorProto_Package = 2)] = "FileDescriptorProto_Package"),
      (i[(i.FileDescriptorProto_MessageType = 4)] =
        "FileDescriptorProto_MessageType"),
      (i[(i.FileDescriptorProto_EnumType = 5)] = "FileDescriptorProto_EnumType"),
      (i[(i.FileDescriptorProto_Service = 6)] = "FileDescriptorProto_Service"),
      (i[(i.FileDescriptorProto_Extension = 7)] =
        "FileDescriptorProto_Extension"),
      (i[(i.FileDescriptorProto_Syntax = 12)] = "FileDescriptorProto_Syntax"),
      (i[(i.DescriptorProto_Field = 2)] = "DescriptorProto_Field"),
      (i[(i.DescriptorProto_NestedType = 3)] = "DescriptorProto_NestedType"),
      (i[(i.DescriptorProto_EnumType = 4)] = "DescriptorProto_EnumType"),
      (i[(i.DescriptorProto_Extension = 6)] = "DescriptorProto_Extension"),
      (i[(i.DescriptorProto_OneofDecl = 8)] = "DescriptorProto_OneofDecl"),
      (i[(i.EnumDescriptorProto_Value = 2)] = "EnumDescriptorProto_Value"),
      (i[(i.ServiceDescriptorProto_Method = 2)] = "ServiceDescriptorProto_Method")
  })(URi || (URi = {}))
  var PSt = class lq extends _ {
      constructor(e) {
        super(),
          (this.seconds = Jf.zero),
          (this.nanos = 0),
          v.util.initPartial(e, this)
      }
      fromJson(e, t) {
        if (typeof e != "string")
          throw new Error(
            `cannot decode google.protobuf.Timestamp from JSON: ${v.json.debug(e)}`,
          )
        const s = e.match(
          /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
        )
        if (!s)
          throw new Error(
            "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
          )
        const n = Date.parse(
          s[1] +
            "-" +
            s[2] +
            "-" +
            s[3] +
            "T" +
            s[4] +
            ":" +
            s[5] +
            ":" +
            s[6] +
            (s[8] ? s[8] : "Z"),
        )
        if (Number.isNaN(n))
          throw new Error(
            "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
          )
        if (
          n < Date.parse("0001-01-01T00:00:00Z") ||
          n > Date.parse("9999-12-31T23:59:59Z")
        )
          throw new Error(
            "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
          )
        return (
          (this.seconds = Jf.parse(n / 1e3)),
          (this.nanos = 0),
          s[7] &&
            (this.nanos =
              parseInt("1" + s[7] + "0".repeat(9 - s[7].length)) - 1e9),
          this
        )
      }
      toJson(e) {
        const t = Number(this.seconds) * 1e3
        if (
          t < Date.parse("0001-01-01T00:00:00Z") ||
          t > Date.parse("9999-12-31T23:59:59Z")
        )
          throw new Error(
            "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
          )
        if (this.nanos < 0)
          throw new Error(
            "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
          )
        let s = "Z"
        if (this.nanos > 0) {
          const n = (this.nanos + 1e9).toString().substring(1)
          n.substring(3) === "000000"
            ? (s = "." + n.substring(0, 3) + "Z")
            : n.substring(6) === "000"
              ? (s = "." + n.substring(0, 6) + "Z")
              : (s = "." + n + "Z")
        }
        return new Date(t).toISOString().replace(".000Z", s)
      }
      toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6))
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Timestamp"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "seconds", kind: "scalar", T: 3 },
          { no: 2, name: "nanos", kind: "scalar", T: 5 },
        ])
      }
      static now() {
        return lq.fromDate(new Date())
      }
      static fromDate(e) {
        const t = e.getTime()
        return new lq({
          seconds: Jf.parse(Math.floor(t / 1e3)),
          nanos: (t % 1e3) * 1e6,
        })
      }
      static fromBinary(e, t) {
        return new lq().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new lq().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new lq().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(lq, e, t)
      }
    },
    f0o = class Hye extends _ {
      constructor(e) {
        super(),
          (this.seconds = Jf.zero),
          (this.nanos = 0),
          v.util.initPartial(e, this)
      }
      fromJson(e, t) {
        if (typeof e != "string")
          throw new Error(
            `cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`,
          )
        const s = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/)
        if (s === null)
          throw new Error(
            `cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`,
          )
        const n = Number(s[1])
        if (n > 315576e6 || n < -315576e6)
          throw new Error(
            `cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`,
          )
        if (((this.seconds = Jf.parse(n)), typeof s[2] == "string")) {
          const r = s[2] + "0".repeat(9 - s[2].length)
          ;(this.nanos = parseInt(r)),
            (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos)
        }
        return this
      }
      toJson(e) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
          throw new Error(
            "cannot encode google.protobuf.Duration to JSON: value out of range",
          )
        let t = this.seconds.toString()
        if (this.nanos !== 0) {
          let s = Math.abs(this.nanos).toString()
          ;(s = "0".repeat(9 - s.length) + s),
            s.substring(3) === "000000"
              ? (s = s.substring(0, 3))
              : s.substring(6) === "000" && (s = s.substring(0, 6)),
            (t += "." + s),
            this.nanos < 0 && Number(this.seconds) == 0 && (t = "-" + t)
        }
        return t + "s"
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Duration"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "seconds", kind: "scalar", T: 3 },
          { no: 2, name: "nanos", kind: "scalar", T: 5 },
        ])
      }
      static fromBinary(e, t) {
        return new Hye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Hye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Hye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Hye, e, t)
      }
    },
    LSt = class vte extends _ {
      constructor(e) {
        super(),
          (this.typeUrl = ""),
          (this.value = new Uint8Array(0)),
          v.util.initPartial(e, this)
      }
      toJson(e) {
        if (this.typeUrl === "") return {}
        const t = this.typeUrlToName(this.typeUrl),
          s = e?.typeRegistry?.findMessage(t)
        if (!s)
          throw new Error(
            `cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`,
          )
        let r = s.fromBinary(this.value).toJson(e)
        return (
          (t.startsWith("google.protobuf.") ||
            r === null ||
            Array.isArray(r) ||
            typeof r != "object") &&
            (r = { value: r }),
          (r["@type"] = this.typeUrl),
          r
        )
      }
      fromJson(e, t) {
        if (e === null || Array.isArray(e) || typeof e != "object")
          throw new Error(
            `cannot decode message google.protobuf.Any from JSON: expected object but got ${e === null ? "null" : Array.isArray(e) ? "array" : typeof e}`,
          )
        if (Object.keys(e).length == 0) return this
        const s = e["@type"]
        if (typeof s != "string" || s == "")
          throw new Error(
            'cannot decode message google.protobuf.Any from JSON: "@type" is empty',
          )
        const n = this.typeUrlToName(s),
          r = t?.typeRegistry?.findMessage(n)
        if (!r)
          throw new Error(
            `cannot decode message google.protobuf.Any from JSON: ${s} is not in the type registry`,
          )
        let o
        if (
          n.startsWith("google.protobuf.") &&
          Object.prototype.hasOwnProperty.call(e, "value")
        )
          o = r.fromJson(e.value, t)
        else {
          const a = Object.assign({}, e)
          delete a["@type"], (o = r.fromJson(a, t))
        }
        return this.packFrom(o), this
      }
      packFrom(e) {
        ;(this.value = e.toBinary()),
          (this.typeUrl = this.typeNameToUrl(e.getType().typeName))
      }
      unpackTo(e) {
        return this.is(e.getType()) ? (e.fromBinary(this.value), !0) : !1
      }
      unpack(e) {
        if (this.typeUrl === "") return
        const t = e.findMessage(this.typeUrlToName(this.typeUrl))
        if (t) return t.fromBinary(this.value)
      }
      is(e) {
        if (this.typeUrl === "") return !1
        const t = this.typeUrlToName(this.typeUrl)
        let s = ""
        return typeof e == "string" ? (s = e) : (s = e.typeName), t === s
      }
      typeNameToUrl(e) {
        return `type.googleapis.com/${e}`
      }
      typeUrlToName(e) {
        if (!e.length) throw new Error(`invalid type url: ${e}`)
        const t = e.lastIndexOf("/"),
          s = t >= 0 ? e.substring(t + 1) : e
        if (!s.length) throw new Error(`invalid type url: ${e}`)
        return s
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Any"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "type_url", kind: "scalar", T: 9 },
          { no: 2, name: "value", kind: "scalar", T: 12 },
        ])
      }
      static pack(e) {
        const t = new vte()
        return t.packFrom(e), t
      }
      static fromBinary(e, t) {
        return new vte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new vte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new vte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(vte, e, t)
      }
    },
    g0o = class Vye extends _ {
      constructor(e) {
        super(), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Empty"
      }
      static {
        this.fields = v.util.newFieldList(() => [])
      }
      static fromBinary(e, t) {
        return new Vye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Vye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Vye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Vye, e, t)
      }
    },
    p0o = class Wye extends _ {
      constructor(e) {
        super(), (this.paths = []), v.util.initPartial(e, this)
      }
      toJson(e) {
        function t(s) {
          let n = !1
          const r = []
          for (let o = 0; o < s.length; o++) {
            let a = s.charAt(o)
            switch (a) {
              case "_":
                n = !0
                break
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                r.push(a), (n = !1)
                break
              default:
                n && ((n = !1), (a = a.toUpperCase())), r.push(a)
                break
            }
          }
          return r.join("")
        }
        return this.paths
          .map((s) => {
            if (s.match(/_[0-9]?_/g) || s.match(/[A-Z]/g))
              throw new Error(
                'cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' +
                  s +
                  '" is irreversible',
              )
            return t(s)
          })
          .join(",")
      }
      fromJson(e, t) {
        if (typeof e != "string")
          throw new Error(
            "cannot decode google.protobuf.FieldMask from JSON: " +
              v.json.debug(e),
          )
        if (e === "") return this
        function s(n) {
          if (n.includes("_"))
            throw new Error(
              "cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase",
            )
          const r = n.replace(/[A-Z]/g, (o) => "_" + o.toLowerCase())
          return r[0] === "_" ? r.substring(1) : r
        }
        return (this.paths = e.split(",").map(s)), this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.FieldMask"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "paths", kind: "scalar", T: 9, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Wye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Wye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Wye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Wye, e, t)
      }
    },
    eG
  ;(function (i) {
    i[(i.NULL_VALUE = 0)] = "NULL_VALUE"
  })(eG || (eG = {})),
    v.util.setEnumType(eG, "google.protobuf.NullValue", [
      { no: 0, name: "NULL_VALUE" },
    ])
  var HRi = class qye extends _ {
      constructor(e) {
        super(), (this.fields = {}), v.util.initPartial(e, this)
      }
      toJson(e) {
        const t = {}
        for (const [s, n] of Object.entries(this.fields)) t[s] = n.toJson(e)
        return t
      }
      fromJson(e, t) {
        if (typeof e != "object" || e == null || Array.isArray(e))
          throw new Error(
            "cannot decode google.protobuf.Struct from JSON " + v.json.debug(e),
          )
        for (const [s, n] of Object.entries(e)) this.fields[s] = QHe.fromJson(n)
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Struct"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: { kind: "message", T: QHe },
          },
        ])
      }
      static fromBinary(e, t) {
        return new qye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new qye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new qye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(qye, e, t)
      }
    },
    QHe = class jye extends _ {
      constructor(e) {
        super(), (this.kind = { case: void 0 }), v.util.initPartial(e, this)
      }
      toJson(e) {
        switch (this.kind.case) {
          case "nullValue":
            return null
          case "numberValue":
            if (!Number.isFinite(this.kind.value))
              throw new Error("google.protobuf.Value cannot be NaN or Infinity")
            return this.kind.value
          case "boolValue":
            return this.kind.value
          case "stringValue":
            return this.kind.value
          case "structValue":
          case "listValue":
            return this.kind.value.toJson({ ...e, emitDefaultValues: !0 })
        }
        throw new Error("google.protobuf.Value must have a value")
      }
      fromJson(e, t) {
        switch (typeof e) {
          case "number":
            this.kind = { case: "numberValue", value: e }
            break
          case "string":
            this.kind = { case: "stringValue", value: e }
            break
          case "boolean":
            this.kind = { case: "boolValue", value: e }
            break
          case "object":
            e === null
              ? (this.kind = { case: "nullValue", value: eG.NULL_VALUE })
              : Array.isArray(e)
                ? (this.kind = { case: "listValue", value: VRi.fromJson(e) })
                : (this.kind = { case: "structValue", value: HRi.fromJson(e) })
            break
          default:
            throw new Error(
              "cannot decode google.protobuf.Value from JSON " + v.json.debug(e),
            )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Value"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: v.getEnumType(eG),
            oneof: "kind",
          },
          { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" },
          { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" },
          { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
          { no: 5, name: "struct_value", kind: "message", T: HRi, oneof: "kind" },
          { no: 6, name: "list_value", kind: "message", T: VRi, oneof: "kind" },
        ])
      }
      static fromBinary(e, t) {
        return new jye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new jye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new jye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(jye, e, t)
      }
    },
    VRi = class zye extends _ {
      constructor(e) {
        super(), (this.values = []), v.util.initPartial(e, this)
      }
      toJson(e) {
        return this.values.map((t) => t.toJson())
      }
      fromJson(e, t) {
        if (!Array.isArray(e))
          throw new Error(
            "cannot decode google.protobuf.ListValue from JSON " +
              v.json.debug(e),
          )
        for (let s of e) this.values.push(QHe.fromJson(s))
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.ListValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "values", kind: "message", T: QHe, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new zye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new zye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new zye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(zye, e, t)
      }
    },
    m0o = class yte extends _ {
      constructor(e) {
        super(), (this.value = 0), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.DOUBLE, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.DOUBLE, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.DoubleValue from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.DoubleValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 1 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new yte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new yte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new yte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new yte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(yte, e, t)
      }
    },
    b0o = class wte extends _ {
      constructor(e) {
        super(), (this.value = 0), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.FLOAT, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.FLOAT, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.FloatValue from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.FloatValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 2 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new wte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new wte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new wte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new wte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(wte, e, t)
      }
    },
    v0o = class Cte extends _ {
      constructor(e) {
        super(), (this.value = Jf.zero), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.INT64, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.INT64, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.Int64Value from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Int64Value"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 3 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new Cte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new Cte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Cte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Cte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Cte, e, t)
      }
    },
    y0o = class Ste extends _ {
      constructor(e) {
        super(), (this.value = Jf.zero), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.UINT64, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.UINT64, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.UInt64Value from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.UInt64Value"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 4 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new Ste({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new Ste().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Ste().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Ste().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Ste, e, t)
      }
    },
    w0o = class xte extends _ {
      constructor(e) {
        super(), (this.value = 0), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.INT32, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.INT32, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.Int32Value from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Int32Value"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 5 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new xte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new xte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new xte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new xte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(xte, e, t)
      }
    },
    C0o = class kte extends _ {
      constructor(e) {
        super(), (this.value = 0), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.UINT32, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.UINT32, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.UInt32Value from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.UInt32Value"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 13 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new kte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new kte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new kte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new kte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(kte, e, t)
      }
    },
    S0o = class Ete extends _ {
      constructor(e) {
        super(), (this.value = !1), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.BOOL, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.BOOL, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.BoolValue from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.BoolValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 8 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new Ete({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new Ete().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Ete().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Ete().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Ete, e, t)
      }
    },
    x0o = class Ite extends _ {
      constructor(e) {
        super(), (this.value = ""), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.STRING, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.STRING, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.StringValue from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.StringValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 9 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new Ite({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new Ite().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Ite().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Ite().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Ite, e, t)
      }
    },
    k0o = class Dte extends _ {
      constructor(e) {
        super(), (this.value = new Uint8Array(0)), v.util.initPartial(e, this)
      }
      toJson(e) {
        return v.json.writeScalar(ds.BYTES, this.value, !0)
      }
      fromJson(e, t) {
        try {
          this.value = v.json.readScalar(ds.BYTES, e)
        } catch (s) {
          let n = 'cannot decode message google.protobuf.BytesValue from JSON"'
          throw (
            (s instanceof Error &&
              s.message.length > 0 &&
              (n += `: ${s.message}`),
            new Error(n))
          )
        }
        return this
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.BytesValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "value", kind: "scalar", T: 12 },
        ])
      }
      static {
        this.fieldWrapper = {
          wrapField(e) {
            return new Dte({ value: e })
          },
          unwrapField(e) {
            return e.value
          },
        }
      }
      static fromBinary(e, t) {
        return new Dte().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Dte().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Dte().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Dte, e, t)
      }
    },
    E0o = [nRi(eG)],
    Cgn = class Gye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.compiler.Version"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "major", kind: "scalar", T: 5, opt: !0 },
          { no: 2, name: "minor", kind: "scalar", T: 5, opt: !0 },
          { no: 3, name: "patch", kind: "scalar", T: 5, opt: !0 },
          { no: 4, name: "suffix", kind: "scalar", T: 9, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Gye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Gye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Gye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Gye, e, t)
      }
    },
    I0o = class Jye extends _ {
      constructor(e) {
        super(),
          (this.fileToGenerate = []),
          (this.protoFile = []),
          (this.sourceFileDescriptors = []),
          pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.compiler.CodeGeneratorRequest"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: !0 },
          { no: 2, name: "parameter", kind: "scalar", T: 9, opt: !0 },
          { no: 15, name: "proto_file", kind: "message", T: DSt, repeated: !0 },
          {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: DSt,
            repeated: !0,
          },
          { no: 3, name: "compiler_version", kind: "message", T: Cgn, opt: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Jye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Jye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Jye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Jye, e, t)
      }
    },
    D0o = class Kye extends _ {
      constructor(e) {
        super(), (this.file = []), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.compiler.CodeGeneratorResponse"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "error", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: !0 },
          { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: !0 },
          { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: !0 },
          { no: 15, name: "file", kind: "message", T: Sgn, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new Kye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Kye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Kye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Kye, e, t)
      }
    },
    NSt
  ;(function (i) {
    ;(i[(i.NONE = 0)] = "NONE"),
      (i[(i.PROTO3_OPTIONAL = 1)] = "PROTO3_OPTIONAL"),
      (i[(i.SUPPORTS_EDITIONS = 2)] = "SUPPORTS_EDITIONS")
  })(NSt || (NSt = {})),
    pi.util.setEnumType(
      NSt,
      "google.protobuf.compiler.CodeGeneratorResponse.Feature",
      [
        { no: 0, name: "FEATURE_NONE" },
        { no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
        { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" },
      ],
    )
  var Sgn = class Yye extends _ {
      constructor(e) {
        super(), pi.util.initPartial(e, this)
      }
      static {
        this.runtime = pi
      }
      static {
        this.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File"
      }
      static {
        this.fields = pi.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
          { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: !0 },
          { no: 15, name: "content", kind: "scalar", T: 9, opt: !0 },
          {
            no: 16,
            name: "generated_code_info",
            kind: "message",
            T: ygn,
            opt: !0,
          },
        ])
      }
      static fromBinary(e, t) {
        return new Yye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Yye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Yye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return pi.util.equals(Yye, e, t)
      }
    },
    RSt = class Xye extends _ {
      constructor(e) {
        super(), (this.fileName = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.SourceContext"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "file_name", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new Xye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Xye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Xye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Xye, e, t)
      }
    },
    $T
  ;(function (i) {
    ;(i[(i.PROTO2 = 0)] = "PROTO2"),
      (i[(i.PROTO3 = 1)] = "PROTO3"),
      (i[(i.EDITIONS = 2)] = "EDITIONS")
  })($T || ($T = {})),
    v.util.setEnumType($T, "google.protobuf.Syntax", [
      { no: 0, name: "SYNTAX_PROTO2" },
      { no: 1, name: "SYNTAX_PROTO3" },
      { no: 2, name: "SYNTAX_EDITIONS" },
    ])
  var T0o = class Qye extends _ {
      constructor(e) {
        super(),
          (this.name = ""),
          (this.fields = []),
          (this.oneofs = []),
          (this.options = []),
          (this.syntax = $T.PROTO2),
          (this.edition = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Type"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "fields", kind: "message", T: xgn, repeated: !0 },
          { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: !0 },
          { no: 4, name: "options", kind: "message", T: tG, repeated: !0 },
          { no: 5, name: "source_context", kind: "message", T: RSt },
          { no: 6, name: "syntax", kind: "enum", T: v.getEnumType($T) },
          { no: 7, name: "edition", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new Qye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Qye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Qye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Qye, e, t)
      }
    },
    xgn = class Zye extends _ {
      constructor(e) {
        super(),
          (this.kind = Xre.TYPE_UNKNOWN),
          (this.cardinality = Qre.UNKNOWN),
          (this.number = 0),
          (this.name = ""),
          (this.typeUrl = ""),
          (this.oneofIndex = 0),
          (this.packed = !1),
          (this.options = []),
          (this.jsonName = ""),
          (this.defaultValue = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Field"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "kind", kind: "enum", T: v.getEnumType(Xre) },
          { no: 2, name: "cardinality", kind: "enum", T: v.getEnumType(Qre) },
          { no: 3, name: "number", kind: "scalar", T: 5 },
          { no: 4, name: "name", kind: "scalar", T: 9 },
          { no: 6, name: "type_url", kind: "scalar", T: 9 },
          { no: 7, name: "oneof_index", kind: "scalar", T: 5 },
          { no: 8, name: "packed", kind: "scalar", T: 8 },
          { no: 9, name: "options", kind: "message", T: tG, repeated: !0 },
          { no: 10, name: "json_name", kind: "scalar", T: 9 },
          { no: 11, name: "default_value", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new Zye().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new Zye().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new Zye().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(Zye, e, t)
      }
    },
    Xre
  ;(function (i) {
    ;(i[(i.TYPE_UNKNOWN = 0)] = "TYPE_UNKNOWN"),
      (i[(i.TYPE_DOUBLE = 1)] = "TYPE_DOUBLE"),
      (i[(i.TYPE_FLOAT = 2)] = "TYPE_FLOAT"),
      (i[(i.TYPE_INT64 = 3)] = "TYPE_INT64"),
      (i[(i.TYPE_UINT64 = 4)] = "TYPE_UINT64"),
      (i[(i.TYPE_INT32 = 5)] = "TYPE_INT32"),
      (i[(i.TYPE_FIXED64 = 6)] = "TYPE_FIXED64"),
      (i[(i.TYPE_FIXED32 = 7)] = "TYPE_FIXED32"),
      (i[(i.TYPE_BOOL = 8)] = "TYPE_BOOL"),
      (i[(i.TYPE_STRING = 9)] = "TYPE_STRING"),
      (i[(i.TYPE_GROUP = 10)] = "TYPE_GROUP"),
      (i[(i.TYPE_MESSAGE = 11)] = "TYPE_MESSAGE"),
      (i[(i.TYPE_BYTES = 12)] = "TYPE_BYTES"),
      (i[(i.TYPE_UINT32 = 13)] = "TYPE_UINT32"),
      (i[(i.TYPE_ENUM = 14)] = "TYPE_ENUM"),
      (i[(i.TYPE_SFIXED32 = 15)] = "TYPE_SFIXED32"),
      (i[(i.TYPE_SFIXED64 = 16)] = "TYPE_SFIXED64"),
      (i[(i.TYPE_SINT32 = 17)] = "TYPE_SINT32"),
      (i[(i.TYPE_SINT64 = 18)] = "TYPE_SINT64")
  })(Xre || (Xre = {})),
    v.util.setEnumType(Xre, "google.protobuf.Field.Kind", [
      { no: 0, name: "TYPE_UNKNOWN" },
      { no: 1, name: "TYPE_DOUBLE" },
      { no: 2, name: "TYPE_FLOAT" },
      { no: 3, name: "TYPE_INT64" },
      { no: 4, name: "TYPE_UINT64" },
      { no: 5, name: "TYPE_INT32" },
      { no: 6, name: "TYPE_FIXED64" },
      { no: 7, name: "TYPE_FIXED32" },
      { no: 8, name: "TYPE_BOOL" },
      { no: 9, name: "TYPE_STRING" },
      { no: 10, name: "TYPE_GROUP" },
      { no: 11, name: "TYPE_MESSAGE" },
      { no: 12, name: "TYPE_BYTES" },
      { no: 13, name: "TYPE_UINT32" },
      { no: 14, name: "TYPE_ENUM" },
      { no: 15, name: "TYPE_SFIXED32" },
      { no: 16, name: "TYPE_SFIXED64" },
      { no: 17, name: "TYPE_SINT32" },
      { no: 18, name: "TYPE_SINT64" },
    ])
  var Qre
  ;(function (i) {
    ;(i[(i.UNKNOWN = 0)] = "UNKNOWN"),
      (i[(i.OPTIONAL = 1)] = "OPTIONAL"),
      (i[(i.REQUIRED = 2)] = "REQUIRED"),
      (i[(i.REPEATED = 3)] = "REPEATED")
  })(Qre || (Qre = {})),
    v.util.setEnumType(Qre, "google.protobuf.Field.Cardinality", [
      { no: 0, name: "CARDINALITY_UNKNOWN" },
      { no: 1, name: "CARDINALITY_OPTIONAL" },
      { no: 2, name: "CARDINALITY_REQUIRED" },
      { no: 3, name: "CARDINALITY_REPEATED" },
    ])
  var P0o = class ewe extends _ {
      constructor(e) {
        super(),
          (this.name = ""),
          (this.enumvalue = []),
          (this.options = []),
          (this.syntax = $T.PROTO2),
          (this.edition = ""),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Enum"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "enumvalue", kind: "message", T: kgn, repeated: !0 },
          { no: 3, name: "options", kind: "message", T: tG, repeated: !0 },
          { no: 4, name: "source_context", kind: "message", T: RSt },
          { no: 5, name: "syntax", kind: "enum", T: v.getEnumType($T) },
          { no: 6, name: "edition", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new ewe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new ewe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new ewe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(ewe, e, t)
      }
    },
    kgn = class twe extends _ {
      constructor(e) {
        super(),
          (this.name = ""),
          (this.number = 0),
          (this.options = []),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.EnumValue"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "number", kind: "scalar", T: 5 },
          { no: 3, name: "options", kind: "message", T: tG, repeated: !0 },
        ])
      }
      static fromBinary(e, t) {
        return new twe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new twe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new twe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(twe, e, t)
      }
    },
    tG = class iwe extends _ {
      constructor(e) {
        super(), (this.name = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Option"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "value", kind: "message", T: LSt },
        ])
      }
      static fromBinary(e, t) {
        return new iwe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new iwe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new iwe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(iwe, e, t)
      }
    },
    L0o = class swe extends _ {
      constructor(e) {
        super(),
          (this.name = ""),
          (this.methods = []),
          (this.options = []),
          (this.version = ""),
          (this.mixins = []),
          (this.syntax = $T.PROTO2),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Api"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "methods", kind: "message", T: Egn, repeated: !0 },
          { no: 3, name: "options", kind: "message", T: tG, repeated: !0 },
          { no: 4, name: "version", kind: "scalar", T: 9 },
          { no: 5, name: "source_context", kind: "message", T: RSt },
          { no: 6, name: "mixins", kind: "message", T: Ign, repeated: !0 },
          { no: 7, name: "syntax", kind: "enum", T: v.getEnumType($T) },
        ])
      }
      static fromBinary(e, t) {
        return new swe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new swe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new swe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(swe, e, t)
      }
    },
    Egn = class nwe extends _ {
      constructor(e) {
        super(),
          (this.name = ""),
          (this.requestTypeUrl = ""),
          (this.requestStreaming = !1),
          (this.responseTypeUrl = ""),
          (this.responseStreaming = !1),
          (this.options = []),
          (this.syntax = $T.PROTO2),
          v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Method"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "request_type_url", kind: "scalar", T: 9 },
          { no: 3, name: "request_streaming", kind: "scalar", T: 8 },
          { no: 4, name: "response_type_url", kind: "scalar", T: 9 },
          { no: 5, name: "response_streaming", kind: "scalar", T: 8 },
          { no: 6, name: "options", kind: "message", T: tG, repeated: !0 },
          { no: 7, name: "syntax", kind: "enum", T: v.getEnumType($T) },
        ])
      }
      static fromBinary(e, t) {
        return new nwe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new nwe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new nwe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(nwe, e, t)
      }
    },
    Ign = class rwe extends _ {
      constructor(e) {
        super(), (this.name = ""), (this.root = ""), v.util.initPartial(e, this)
      }
      static {
        this.runtime = v
      }
      static {
        this.typeName = "google.protobuf.Mixin"
      }
      static {
        this.fields = v.util.newFieldList(() => [
          { no: 1, name: "name", kind: "scalar", T: 9 },
          { no: 2, name: "root", kind: "scalar", T: 9 },
        ])
      }
      static fromBinary(e, t) {
        return new rwe().fromBinary(e, t)
      }
      static fromJson(e, t) {
        return new rwe().fromJson(e, t)
      }
      static fromJsonString(e, t) {
        return new rwe().fromJsonString(e, t)
      }
      static equals(e, t) {
        return v.util.equals(rwe, e, t)
      }
    };

  return {
    v,
    _,
    gt,
  }
}
