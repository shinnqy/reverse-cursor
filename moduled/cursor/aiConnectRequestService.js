// @ts-check

export function createAIConnectRequestService(params) {
  const {_, v, __decorate, __param, V, Re, Ve, R, gt, du, Tg, LSt, ei} = params;

  function RNn(i, e) {
    const t = {}
    for (const [s, n] of Object.entries(i.methods)) {
      const r = e({ ...n, localName: s, service: i })
      r != null && (t[s] = r)
    }
    return t
  }
  function d_(i = 0) {
    return new Uint8Array(i)
  }
  function PEt(i = 0) {
    return new Uint8Array(i)
  }
  function a1o(i) {
    return i
  }
  function VBi(i, e) {
    e == null && (e = i.reduce((n, r) => n + r.length, 0))
    const t = PEt(e)
    let s = 0
    for (const n of i) t.set(n, s), (s += n.length)
    return t
  }
  function ANn(i, e) {
    if (i === e) return !0
    if (i.byteLength !== e.byteLength) return !1
    for (let t = 0; t < i.byteLength; t++) if (i[t] !== e[t]) return !1
    return !0
  }
  var WBi,
    qBi = Symbol.for("@achingbrain/uint8arraylist")
  function jBi(i, e) {
    if (e == null || e < 0) throw new RangeError("index is out of bounds")
    let t = 0
    for (const s of i) {
      const n = t + s.byteLength
      if (e < n) return { buf: s, index: e - t }
      t = n
    }
    throw new RangeError("index is out of bounds")
  }
  function iqe(i) {
    return !!i?.[qBi]
  }
  var l1o = class Gft {
    constructor(...e) {
      ;(this[WBi] = !0),
        (this.bufs = []),
        (this.length = 0),
        e.length > 0 && this.appendAll(e)
    }
    *[((WBi = qBi), Symbol.iterator)]() {
      yield* this.bufs
    }
    get byteLength() {
      return this.length
    }
    append(...e) {
      this.appendAll(e)
    }
    appendAll(e) {
      let t = 0
      for (const s of e)
        if (s instanceof Uint8Array) (t += s.byteLength), this.bufs.push(s)
        else if (iqe(s)) (t += s.byteLength), this.bufs.push(...s.bufs)
        else
          throw new Error(
            "Could not append value, must be an Uint8Array or a Uint8ArrayList",
          )
      this.length += t
    }
    prepend(...e) {
      this.prependAll(e)
    }
    prependAll(e) {
      let t = 0
      for (const s of e.reverse())
        if (s instanceof Uint8Array) (t += s.byteLength), this.bufs.unshift(s)
        else if (iqe(s)) (t += s.byteLength), this.bufs.unshift(...s.bufs)
        else
          throw new Error(
            "Could not prepend value, must be an Uint8Array or a Uint8ArrayList",
          )
      this.length += t
    }
    get(e) {
      const t = jBi(this.bufs, e)
      return t.buf[t.index]
    }
    set(e, t) {
      const s = jBi(this.bufs, e)
      s.buf[s.index] = t
    }
    write(e, t = 0) {
      if (e instanceof Uint8Array)
        for (let s = 0; s < e.length; s++) this.set(t + s, e[s])
      else if (iqe(e))
        for (let s = 0; s < e.length; s++) this.set(t + s, e.get(s))
      else
        throw new Error(
          "Could not write value, must be an Uint8Array or a Uint8ArrayList",
        )
    }
    consume(e) {
      if (((e = Math.trunc(e)), !(Number.isNaN(e) || e <= 0))) {
        if (e === this.byteLength) {
          ;(this.bufs = []), (this.length = 0)
          return
        }
        for (; this.bufs.length > 0; )
          if (e >= this.bufs[0].byteLength)
            (e -= this.bufs[0].byteLength),
              (this.length -= this.bufs[0].byteLength),
              this.bufs.shift()
          else {
            ;(this.bufs[0] = this.bufs[0].subarray(e)), (this.length -= e)
            break
          }
      }
    }
    slice(e, t) {
      const { bufs: s, length: n } = this._subList(e, t)
      return VBi(s, n)
    }
    subarray(e, t) {
      const { bufs: s, length: n } = this._subList(e, t)
      return s.length === 1 ? s[0] : VBi(s, n)
    }
    sublist(e, t) {
      const { bufs: s, length: n } = this._subList(e, t),
        r = new Gft()
      return (r.length = n), (r.bufs = [...s]), r
    }
    _subList(e, t) {
      if (
        ((e = e ?? 0),
        (t = t ?? this.length),
        e < 0 && (e = this.length + e),
        t < 0 && (t = this.length + t),
        e < 0 || t > this.length)
      )
        throw new RangeError("index is out of bounds")
      if (e === t) return { bufs: [], length: 0 }
      if (e === 0 && t === this.length)
        return { bufs: this.bufs, length: this.length }
      const s = []
      let n = 0
      for (let r = 0; r < this.bufs.length; r++) {
        const o = this.bufs[r],
          a = n,
          l = a + o.byteLength
        if (((n = l), e >= l)) continue
        const c = e >= a && e < l,
          h = t > a && t <= l
        if (c && h) {
          if (e === a && t === l) {
            s.push(o)
            break
          }
          const u = e - a
          s.push(o.subarray(u, u + (t - e)))
          break
        }
        if (c) {
          if (e === 0) {
            s.push(o)
            continue
          }
          s.push(o.subarray(e - a))
          continue
        }
        if (h) {
          if (t === l) {
            s.push(o)
            break
          }
          s.push(o.subarray(0, t - a))
          break
        }
        s.push(o)
      }
      return { bufs: s, length: t - e }
    }
    indexOf(e, t = 0) {
      if (!iqe(e) && !(e instanceof Uint8Array))
        throw new TypeError(
          'The "value" argument must be a Uint8ArrayList or Uint8Array',
        )
      const s = e instanceof Uint8Array ? e : e.subarray()
      if (
        ((t = Number(t ?? 0)),
        isNaN(t) && (t = 0),
        t < 0 && (t = this.length + t),
        t < 0 && (t = 0),
        e.length === 0)
      )
        return t > this.length ? this.length : t
      const n = s.byteLength
      if (n === 0) throw new TypeError("search must be at least 1 byte long")
      const r = 256,
        o = new Int32Array(r)
      for (let u = 0; u < r; u++) o[u] = -1
      for (let u = 0; u < n; u++) o[s[u]] = u
      const a = o,
        l = this.byteLength - s.byteLength,
        c = s.byteLength - 1
      let h
      for (let u = t; u <= l; u += h) {
        h = 0
        for (let d = c; d >= 0; d--) {
          const g = this.get(u + d)
          if (s[d] !== g) {
            h = Math.max(1, d - a[g])
            break
          }
        }
        if (h === 0) return u
      }
      return -1
    }
    getInt8(e) {
      const t = this.subarray(e, e + 1)
      return new DataView(t.buffer, t.byteOffset, t.byteLength).getInt8(0)
    }
    setInt8(e, t) {
      const s = PEt(1)
      new DataView(s.buffer, s.byteOffset, s.byteLength).setInt8(0, t),
        this.write(s, e)
    }
    getInt16(e, t) {
      const s = this.subarray(e, e + 2)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getInt16(0, t)
    }
    setInt16(e, t, s) {
      const n = d_(2)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setInt16(0, t, s),
        this.write(n, e)
    }
    getInt32(e, t) {
      const s = this.subarray(e, e + 4)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getInt32(0, t)
    }
    setInt32(e, t, s) {
      const n = d_(4)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setInt32(0, t, s),
        this.write(n, e)
    }
    getBigInt64(e, t) {
      const s = this.subarray(e, e + 8)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getBigInt64(0, t)
    }
    setBigInt64(e, t, s) {
      const n = d_(8)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setBigInt64(0, t, s),
        this.write(n, e)
    }
    getUint8(e) {
      const t = this.subarray(e, e + 1)
      return new DataView(t.buffer, t.byteOffset, t.byteLength).getUint8(0)
    }
    setUint8(e, t) {
      const s = PEt(1)
      new DataView(s.buffer, s.byteOffset, s.byteLength).setUint8(0, t),
        this.write(s, e)
    }
    getUint16(e, t) {
      const s = this.subarray(e, e + 2)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getUint16(0, t)
    }
    setUint16(e, t, s) {
      const n = d_(2)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setUint16(0, t, s),
        this.write(n, e)
    }
    getUint32(e, t) {
      const s = this.subarray(e, e + 4)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getUint32(0, t)
    }
    setUint32(e, t, s) {
      const n = d_(4)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(0, t, s),
        this.write(n, e)
    }
    getBigUint64(e, t) {
      const s = this.subarray(e, e + 8)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getBigUint64(0, t)
    }
    setBigUint64(e, t, s) {
      const n = d_(8)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setBigUint64(0, t, s),
        this.write(n, e)
    }
    getFloat32(e, t) {
      const s = this.subarray(e, e + 4)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getFloat32(0, t)
    }
    setFloat32(e, t, s) {
      const n = d_(4)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat32(0, t, s),
        this.write(n, e)
    }
    getFloat64(e, t) {
      const s = this.subarray(e, e + 8)
      return new DataView(s.buffer, s.byteOffset, s.byteLength).getFloat64(0, t)
    }
    setFloat64(e, t, s) {
      const n = d_(8)
      new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat64(0, t, s),
        this.write(n, e)
    }
    equals(e) {
      if (e == null || !(e instanceof Gft) || e.bufs.length !== this.bufs.length)
        return !1
      for (let t = 0; t < this.bufs.length; t++)
        if (!ANn(this.bufs[t], e.bufs[t])) return !1
      return !0
    }
    static fromUint8Arrays(e, t) {
      const s = new Gft()
      return (
        (s.bufs = e),
        t == null && (t = e.reduce((n, r) => n + r.byteLength, 0)),
        (s.length = t),
        s
      )
    }
  }
  async function* MNn(i) {
    yield* i
  }
  function $Nn(i, e) {
    return RNn(i, (t) => {
      switch (t.kind) {
        case gt.Unary:
          return ONn(e, i, t)
        case gt.ServerStreaming:
          return BNn(e, i, t)
        case gt.ClientStreaming:
          return _Nn(e, i, t)
        case gt.BiDiStreaming:
          return UNn(e, i, t)
        default:
          return null
      }
    })
  }
  function FNn(i, e) {
    return $Nn(i, e)
  }
  function ONn(i, e, t) {
    return async function (s, n) {
      const r = await i.unary(
        e,
        t,
        n?.signal,
        n?.timeoutMs,
        n?.headers,
        s,
        n?.contextValues,
      )
      return n?.onHeader?.(r.header), n?.onTrailer?.(r.trailer), r.message
    }
  }
  function BNn(i, e, t) {
    return function (s, n) {
      return zBi(
        i.stream(
          e,
          t,
          n?.signal,
          n?.timeoutMs,
          n?.headers,
          MNn([s]),
          n?.contextValues,
        ),
        n,
      )
    }
  }
  function _Nn(i, e, t) {
    return async function (s, n) {
      const r = await i.stream(
        e,
        t,
        n?.signal,
        n?.timeoutMs,
        n?.headers,
        s,
        n?.contextValues,
      )
      n?.onHeader?.(r.header)
      let o,
        a = 0
      for await (const l of r.message) (o = l), a++
      if (!o)
        throw new du("protocol error: missing response message", Tg.Unimplemented)
      if (a > 1)
        throw new du(
          "protocol error: received extra messages for client streaming method",
          Tg.Unimplemented,
        )
      return n?.onTrailer?.(r.trailer), o
    }
  }
  function UNn(i, e, t) {
    return function (s, n) {
      return zBi(
        i.stream(e, t, n?.signal, n?.timeoutMs, n?.headers, s, n?.contextValues),
        n,
      )
    }
  }
  function zBi(i, e) {
    const t = (async function* () {
      const s = await i
      e?.onHeader?.(s.header), yield* s.message, e?.onTrailer?.(s.trailer)
    })()[Symbol.asyncIterator]()
    return { [Symbol.asyncIterator]: () => ({ next: () => t.next() }) }
  }
  var c1o = class p4e extends _ {
    constructor(e) {
      super(),
        (this.code = 0),
        (this.message = ""),
        (this.details = []),
        v.util.initPartial(e, this)
    }
    static {
      this.runtime = v
    }
    static {
      this.typeName = "google.rpc.Status"
    }
    static {
      this.fields = v.util.newFieldList(() => [
        { no: 1, name: "code", kind: "scalar", T: 5 },
        { no: 2, name: "message", kind: "scalar", T: 9 },
        { no: 3, name: "details", kind: "message", T: LSt, repeated: !0 },
      ])
    }
    static fromBinary(e, t) {
      return new p4e().fromBinary(e, t)
    }
    static fromJson(e, t) {
      return new p4e().fromJson(e, t)
    }
    static fromJsonString(e, t) {
      return new p4e().fromJsonString(e, t)
    }
    static equals(e, t) {
      return v.util.equals(p4e, e, t)
    }
  },
  sqe = Re("aiConnectRequestService"),
  HNn = class extends V {
    constructor() {
      super(),
        (this.a = this.D(new R())),
        (this.onDidChangeTransport = this.a.event)
    }
    registerConnectTransportProvider(i) {
      ;(this.b = i), this.a.fire()
    }
    async transport() {
      let i = 0,
        e = 4 * 60 * 2
      for (; !this.b; ) {
        if (i >= e) throw new Error("No Connect transport provider registered.")
        await new Promise((t) => setTimeout(t, 250)), i++
      }
      return this.b
    }
  }
  Ve(sqe, HNn, 1)
  var fu = class extends V {
    constructor(e, t, s) {
      super(),
        (this.c = e),
        (this.f = t),
        (this.g = s),
        (this.b = !1),
        (this.a = this.D(this.f.createScoped(this))),
        this.D(
          this.g.onDidChangeTransport(() => {
            this.createServer()
          }),
        )
    }
    async get() {
      const e = this.h
      ;(!this.b || e === void 0) && (this.createServer(), (this.b = !0))
      const t = await this.h
      if (t === void 0)
        throw new Error("Invariant violated! server did not get created.")
      return t
    }
    createServer() {
      this.h = this.createSingleServer()
    }
    async createSingleServer() {
      const e = await this.g.transport()
      return FNn(this.c.service, e)
    }
  }
  fu = __decorate([__param(1, ei), __param(2, sqe)], fu);

  return {
    sqe,
    fu,
  };
}
