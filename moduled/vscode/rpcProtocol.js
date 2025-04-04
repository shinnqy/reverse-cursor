// @ts-check

// 700425
export function createRpcProtocol(params) {
  var {Yt, V, aMs, R, mss, Ps, NE, mge, SQe, oi, ndo, Ze, oMs, J, jP, wie } = params;

  function dui(i, e) {
    try {
      return JSON.stringify(i, e)
    } catch {
      return "null"
    }
  }
  var fui = "$$ref$$",
    rdo = { [fui]: -1 }
  function lMs(i, e = null, t = !1) {
    const s = []
    return {
      jsonString: (t ? dui : JSON.stringify)(i, (r, o) => {
        if (typeof o > "u") return rdo
        if (typeof o == "object") {
          if (o instanceof Yt) {
            const a = s.push(o) - 1
            return { [fui]: a }
          }
          if (e) return e(r, o)
        }
        return o
      }),
      referencedBuffers: s,
    }
  }
  function cMs(i, e, t) {
    return JSON.parse(i, (s, n) => {
      if (n) {
        const r = n[fui]
        if (typeof r == "number") return e[r]
        if (t && n.$mid === 1) return t.transformIncoming(n)
      }
      return n
    })
  }
  function hMs(i, e) {
    return JSON.stringify(i, e)
  }
  function odo(i) {
    return i ? (e, t) => (t && t.$mid === 1 ? i.transformOutgoing(t) : t) : null
  }
  var uMs
  ;(function (i) {
    ;(i[(i.LocalSide = 0)] = "LocalSide"), (i[(i.OtherSide = 1)] = "OtherSide")
  })(uMs || (uMs = {}))
  var dMs
  ;(function (i) {
    ;(i[(i.Responsive = 0)] = "Responsive"),
      (i[(i.Unresponsive = 1)] = "Unresponsive")
  })(dMs || (dMs = {}))
  var ado = () => {},
    rpcProtocol = Symbol.for("rpcProtocol"),
    rpcProxySymbol = Symbol.for("rpcProxy"),
    RPCProtocol = class Bmi extends V {
      static {
        aMs = rpcProtocol
      }
      static {
        this.a = 3 * 1e3
      }
      constructor(e, t = null, s = null) {
        super(),
          (this[aMs] = !0),
          (this.b = this.D(new R())),
          (this.onDidChangeResponsiveState = this.b.event),
          (this.c = e),
          (this.f = t),
          (this.g = s),
          (this.h = odo(this.g)),
          (this.j = !1),
          (this.m = []),
          (this.q = [])
        for (let n = 0, r = mss.count; n < r; n++)
          (this.m[n] = null), (this.q[n] = null)
        ;(this.s = 0),
          (this.t = Object.create(null)),
          (this.u = {}),
          (this.w = 0),
          (this.y = 0),
          (this.z = 0),
          (this.C = this.D(new Ps(() => this.H(), 1e3))),
          this.D(this.c.onMessage((n) => this.L(n)))
      }
      dispose() {
        ;(this.j = !0),
          Object.keys(this.u).forEach((e) => {
            const t = this.u[e]
            delete this.u[e], t.resolveErr(NE())
          }),
          super.dispose()
      }
      drain() {
        return typeof this.c.drain == "function"
          ? this.c.drain()
          : Promise.resolve()
      }
      F(e) {
        this.y === 0 && (this.z = Date.now() + Bmi.a),
          this.y++,
          this.C.isScheduled() || this.C.schedule()
      }
      G(e) {
        ;(this.z = Date.now() + Bmi.a),
          this.y--,
          this.y === 0 && this.C.cancel(),
          this.I(0)
      }
      H() {
        this.y !== 0 && (Date.now() > this.z ? this.I(1) : this.C.schedule())
      }
      I(e) {
        this.w !== e && ((this.w = e), this.b.fire(this.w))
      }
      get responsiveState() {
        return this.w
      }
      transformIncomingURIs(e) {
        return this.g ? mge(e, this.g) : e
      }
      getProxy(e) {
        const { nid: t, sid: s } = e
        return this.q[t] || (this.q[t] = this.J(t, s)), this.q[t]
      }
      J(actorId, actorName) {
        const handler = {
          get: (target, methodName) => (
            typeof methodName == "string" &&
              !target[methodName] &&
              methodName.charCodeAt(0) === 36 &&
              (target[methodName] = (...o) => this.U(actorId, methodName, o)),
            methodName === rpcProxySymbol ? actorName : target[methodName]
          ),
        }
        return new Proxy(Object.create(null), handler)
      }
      set(e, t) {
        return (this.m[e.nid] = t), t
      }
      assertRegistered(e) {
        for (let t = 0, s = e.length; t < s; t++) {
          const n = e[t]
          if (!this.m[n.nid]) throw new Error(`Missing proxy instance ${n.sid}`)
        }
      }
      L(e) {
        if (this.j) return
        const t = e.byteLength,
          s = MessageBuffer.read(e, 0),
          n = s.readUInt8(),
          r = s.readUInt32()
        switch (n) {
          case 1:
          case 2: {
            let {
              rpcId: o,
              method: a,
              args: l,
            } = MessageIO.deserializeRequestJSONArgs(s)
            this.g && (l = mge(l, this.g)), this.M(t, r, o, a, l, n === 2)
            break
          }
          case 3:
          case 4: {
            let {
              rpcId: o,
              method: a,
              args: l,
            } = MessageIO.deserializeRequestMixedArgs(s)
            this.g && (l = mge(l, this.g)), this.M(t, r, o, a, l, n === 4)
            break
          }
          case 5: {
            this.f?.logIncoming(t, r, 0, "ack"), this.G(r)
            break
          }
          case 6: {
            this.N(t, r)
            break
          }
          case 7: {
            this.O(t, r, void 0)
            break
          }
          case 9: {
            let o = MessageIO.deserializeReplyOKJSON(s)
            this.g && (o = mge(o, this.g)), this.O(t, r, o)
            break
          }
          case 10: {
            const o = MessageIO.deserializeReplyOKJSONWithBuffers(s, this.g)
            this.O(t, r, o)
            break
          }
          case 8: {
            const o = MessageIO.deserializeReplyOKVSBuffer(s)
            this.O(t, r, o)
            break
          }
          case 11: {
            let o = MessageIO.deserializeReplyErrError(s)
            this.g && (o = mge(o, this.g)), this.P(t, r, o)
            break
          }
          case 12: {
            this.P(t, r, void 0)
            break
          }
          default:
            console.error("received unexpected message"), console.error(e)
        }
      }
      M(e, t, s, n, r, o) {
        this.f?.logIncoming(e, t, 1, `receiveRequest ${SQe(s)}.${n}(`, r)
        const a = String(t)
        let l, c
        if (o) {
          const u = new oi()
          r.push(u.token), (l = this.Q(s, n, r)), (c = () => u.cancel())
        } else (l = this.Q(s, n, r)), (c = ado)
        this.t[a] = c
        const h = MessageIO.serializeAcknowledged(t)
        this.f?.logOutgoing(h.byteLength, t, 1, "ack"),
          this.c.send(h),
          l.then(
            (u) => {
              delete this.t[a]
              const d = MessageIO.serializeReplyOK(t, u, this.h)
              this.f?.logOutgoing(d.byteLength, t, 1, "reply:", u), this.c.send(d)
            },
            (u) => {
              delete this.t[a]
              const d = MessageIO.serializeReplyErr(t, u)
              this.f?.logOutgoing(d.byteLength, t, 1, "replyErr:", u),
                this.c.send(d)
            },
          )
      }
      N(e, t) {
        this.f?.logIncoming(e, t, 1, "receiveCancel")
        const s = String(t)
        this.t[s]?.()
      }
      O(e, t, s) {
        this.f?.logIncoming(e, t, 0, "receiveReply:", s)
        const n = String(t)
        if (!this.u.hasOwnProperty(n)) return
        const r = this.u[n]
        delete this.u[n], r.resolveOk(s)
      }
      P(e, t, s) {
        this.f?.logIncoming(e, t, 0, "receiveReplyErr:", s)
        const n = String(t)
        if (!this.u.hasOwnProperty(n)) return
        const r = this.u[n]
        delete this.u[n]
        let o
        s &&
          (s.$isError
            ? ((o = new Error()),
              (o.name = s.name),
              (o.message = s.message),
              (o.stack = s.stack))
            : (o = s)),
          r.resolveErr(o)
      }
      Q(e, t, s) {
        try {
          return Promise.resolve(this.S(e, t, s))
        } catch (n) {
          return Promise.reject(n)
        }
      }
      S(e, t, s) {
        const n = this.m[e]
        if (!n) throw new Error("Unknown actor " + SQe(e))
        const r = n[t]
        if (typeof r != "function")
          throw new Error("Unknown method " + t + " on actor " + SQe(e))
        return r.apply(n, s)
      }
      U(requestType, methodName, args) {
        if (this.j) return new ndo()
        let cancellationToken = null
        if (
          (args.length > 0 &&
            Ze.isCancellationToken(args[args.length - 1]) &&
            (cancellationToken = args.pop()),
          cancellationToken && cancellationToken.isCancellationRequested)
        )
          return Promise.reject(NE())
        const serializedArgs = MessageIO.serializeRequestArguments(args, this.h),
          requestId = ++this.s,
          requestIdStr = String(requestId),
          responsePromise = new oMs(),
          disposables = new J()
        cancellationToken &&
          disposables.add(
            cancellationToken.onCancellationRequested(() => {
              const u = MessageIO.serializeCancel(requestId)
              this.f?.logOutgoing(u.byteLength, requestId, 0, "cancel"), this.c.send(u)
            }),
          ),
          (this.u[requestIdStr] = new PendingRPCReply(responsePromise, disposables)),
          this.F(requestId)
        const serializedRequest = MessageIO.serializeRequest(requestId, requestType, methodName, serializedArgs, !!cancellationToken)
        return (
          this.f?.logOutgoing(serializedRequest.byteLength, requestId, 0, `request: ${SQe(requestType)}.${methodName}(`, args),
          this.c.send(serializedRequest),
          responsePromise
        )
      }
    },
    PendingRPCReply = class {
      constructor(i, e) {
        ;(this.a = i), (this.b = e)
      }
      resolveOk(i) {
        this.a.resolveOk(i), this.b.dispose()
      }
      resolveErr(i) {
        this.a.resolveErr(i), this.b.dispose()
      }
    },
    MessageBuffer = class _mi {
      static alloc(e, t, s) {
        const n = new _mi(Yt.alloc(s + 1 + 4), 0)
        return n.writeUInt8(e), n.writeUInt32(t), n
      }
      static read(e, t) {
        return new _mi(e, t)
      }
      get buffer() {
        return this.a
      }
      constructor(e, t) {
        ;(this.a = e), (this.b = t)
      }
      static sizeUInt8() {
        return 1
      }
      static {
        this.sizeUInt32 = 4
      }
      writeUInt8(e) {
        this.a.writeUInt8(e, this.b), (this.b += 1)
      }
      readUInt8() {
        const e = this.a.readUInt8(this.b)
        return (this.b += 1), e
      }
      writeUInt32(e) {
        this.a.writeUInt32BE(e, this.b), (this.b += 4)
      }
      readUInt32() {
        const e = this.a.readUInt32BE(this.b)
        return (this.b += 4), e
      }
      static sizeShortString(e) {
        return 1 + e.byteLength
      }
      writeShortString(e) {
        this.a.writeUInt8(e.byteLength, this.b),
          (this.b += 1),
          this.a.set(e, this.b),
          (this.b += e.byteLength)
      }
      readShortString() {
        const e = this.a.readUInt8(this.b)
        this.b += 1
        const s = this.a.slice(this.b, this.b + e).toString()
        return (this.b += e), s
      }
      static sizeLongString(e) {
        return 4 + e.byteLength
      }
      writeLongString(e) {
        this.a.writeUInt32BE(e.byteLength, this.b),
          (this.b += 4),
          this.a.set(e, this.b),
          (this.b += e.byteLength)
      }
      readLongString() {
        const e = this.a.readUInt32BE(this.b)
        this.b += 4
        const s = this.a.slice(this.b, this.b + e).toString()
        return (this.b += e), s
      }
      writeBuffer(e) {
        this.a.writeUInt32BE(e.byteLength, this.b),
          (this.b += 4),
          this.a.set(e, this.b),
          (this.b += e.byteLength)
      }
      static sizeVSBuffer(e) {
        return 4 + e.byteLength
      }
      writeVSBuffer(e) {
        this.a.writeUInt32BE(e.byteLength, this.b),
          (this.b += 4),
          this.a.set(e, this.b),
          (this.b += e.byteLength)
      }
      readVSBuffer() {
        const e = this.a.readUInt32BE(this.b)
        this.b += 4
        const t = this.a.slice(this.b, this.b + e)
        return (this.b += e), t
      }
      static sizeMixedArray(e) {
        let t = 0
        t += 1
        for (let s = 0, n = e.length; s < n; s++) {
          const r = e[s]
          switch (((t += 1), r.type)) {
            case 1:
              t += this.sizeLongString(r.value)
              break
            case 2:
              t += this.sizeVSBuffer(r.value)
              break
            case 3:
              ;(t += this.sizeUInt32), (t += this.sizeLongString(r.value))
              for (let o = 0; o < r.buffers.length; ++o)
                t += this.sizeVSBuffer(r.buffers[o])
              break
            case 4:
              break
          }
        }
        return t
      }
      writeMixedArray(e) {
        this.a.writeUInt8(e.length, this.b), (this.b += 1)
        for (let t = 0, s = e.length; t < s; t++) {
          const n = e[t]
          switch (n.type) {
            case 1:
              this.writeUInt8(1), this.writeLongString(n.value)
              break
            case 2:
              this.writeUInt8(2), this.writeVSBuffer(n.value)
              break
            case 3:
              this.writeUInt8(3),
                this.writeUInt32(n.buffers.length),
                this.writeLongString(n.value)
              for (let r = 0; r < n.buffers.length; ++r)
                this.writeBuffer(n.buffers[r])
              break
            case 4:
              this.writeUInt8(4)
              break
          }
        }
      }
      readMixedArray() {
        const e = this.a.readUInt8(this.b)
        this.b += 1
        const t = new Array(e)
        for (let s = 0; s < e; s++)
          switch (this.readUInt8()) {
            case 1:
              t[s] = this.readLongString()
              break
            case 2:
              t[s] = this.readVSBuffer()
              break
            case 3: {
              const r = this.readUInt32(),
                o = this.readLongString(),
                a = []
              for (let l = 0; l < r; ++l) a.push(this.readVSBuffer())
              t[s] = new jP(cMs(o, a, null))
              break
            }
            case 4:
              t[s] = void 0
              break
          }
        return t
      }
    },
    fMs
  ;(function (i) {
    ;(i[(i.Simple = 0)] = "Simple"), (i[(i.Mixed = 1)] = "Mixed")
  })(fMs || (fMs = {}))
  var MessageIO = class {
      static a(i) {
        for (let e = 0, t = i.length; e < t; e++)
          if (i[e] instanceof Yt || i[e] instanceof jP || typeof i[e] > "u")
            return !0
        return !1
      }
      static serializeRequestArguments(i, e) {
        if (this.a(i)) {
          const t = []
          for (let s = 0, n = i.length; s < n; s++) {
            const r = i[s]
            if (r instanceof Yt) t[s] = { type: 2, value: r }
            else if (typeof r > "u") t[s] = { type: 4 }
            else if (r instanceof jP) {
              const { jsonString: o, referencedBuffers: a } = lMs(r.value, e)
              t[s] = { type: 3, value: Yt.fromString(o), buffers: a }
            } else t[s] = { type: 1, value: Yt.fromString(hMs(r, e)) }
          }
          return { type: 1, args: t }
        }
        return { type: 0, args: hMs(i, e) }
      }
      static serializeRequest(i, e, t, s, n) {
        switch (s.type) {
          case 0:
            return this.b(i, e, t, s.args, n)
          case 1:
            return this.c(i, e, t, s.args, n)
        }
      }
      static b(i, e, t, s, n) {
        const r = Yt.fromString(t),
          o = Yt.fromString(s)
        let a = 0
        ;(a += MessageBuffer.sizeUInt8()),
          (a += MessageBuffer.sizeShortString(r)),
          (a += MessageBuffer.sizeLongString(o))
        const l = MessageBuffer.alloc(n ? 2 : 1, i, a)
        return (
          l.writeUInt8(e), l.writeShortString(r), l.writeLongString(o), l.buffer
        )
      }
      static deserializeRequestJSONArgs(i) {
        const e = i.readUInt8(),
          t = i.readShortString(),
          s = i.readLongString()
        return { rpcId: e, method: t, args: JSON.parse(s) }
      }
      static c(i, e, t, s, n) {
        const r = Yt.fromString(t)
        let o = 0
        ;(o += MessageBuffer.sizeUInt8()),
          (o += MessageBuffer.sizeShortString(r)),
          (o += MessageBuffer.sizeMixedArray(s))
        const a = MessageBuffer.alloc(n ? 4 : 3, i, o)
        return (
          a.writeUInt8(e), a.writeShortString(r), a.writeMixedArray(s), a.buffer
        )
      }
      static deserializeRequestMixedArgs(i) {
        const e = i.readUInt8(),
          t = i.readShortString(),
          s = i.readMixedArray(),
          n = new Array(s.length)
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r]
          typeof a == "string" ? (n[r] = JSON.parse(a)) : (n[r] = a)
        }
        return { rpcId: e, method: t, args: n }
      }
      static serializeAcknowledged(i) {
        return MessageBuffer.alloc(5, i, 0).buffer
      }
      static serializeCancel(i) {
        return MessageBuffer.alloc(6, i, 0).buffer
      }
      static serializeReplyOK(i, e, t) {
        if (typeof e > "u") return this.d(i)
        if (e instanceof Yt) return this.e(i, e)
        if (e instanceof jP) {
          const { jsonString: s, referencedBuffers: n } = lMs(e.value, t, !0)
          return this.g(i, s, n)
        } else return this.f(i, dui(e, t))
      }
      static d(i) {
        return MessageBuffer.alloc(7, i, 0).buffer
      }
      static e(i, e) {
        let t = 0
        t += MessageBuffer.sizeVSBuffer(e)
        const s = MessageBuffer.alloc(8, i, t)
        return s.writeVSBuffer(e), s.buffer
      }
      static deserializeReplyOKVSBuffer(i) {
        return i.readVSBuffer()
      }
      static f(i, e) {
        const t = Yt.fromString(e)
        let s = 0
        s += MessageBuffer.sizeLongString(t)
        const n = MessageBuffer.alloc(9, i, s)
        return n.writeLongString(t), n.buffer
      }
      static g(i, e, t) {
        const s = Yt.fromString(e)
        let n = 0
        ;(n += MessageBuffer.sizeUInt32), (n += MessageBuffer.sizeLongString(s))
        for (const o of t) n += MessageBuffer.sizeVSBuffer(o)
        const r = MessageBuffer.alloc(10, i, n)
        r.writeUInt32(t.length), r.writeLongString(s)
        for (const o of t) r.writeBuffer(o)
        return r.buffer
      }
      static deserializeReplyOKJSON(i) {
        const e = i.readLongString()
        return JSON.parse(e)
      }
      static deserializeReplyOKJSONWithBuffers(i, e) {
        const t = i.readUInt32(),
          s = i.readLongString(),
          n = []
        for (let r = 0; r < t; ++r) n.push(i.readVSBuffer())
        return new jP(cMs(s, n, e))
      }
      static serializeReplyErr(i, e) {
        const t = e ? dui(wie(e), null) : void 0
        if (typeof t != "string") return this.h(i)
        const s = Yt.fromString(t)
        let n = 0
        n += MessageBuffer.sizeLongString(s)
        const r = MessageBuffer.alloc(11, i, n)
        return r.writeLongString(s), r.buffer
      }
      static deserializeReplyErrError(i) {
        const e = i.readLongString()
        return JSON.parse(e)
      }
      static h(i) {
        return MessageBuffer.alloc(12, i, 0).buffer
      }
    },
    gMs
  ;(function (i) {
    ;(i[(i.RequestJSONArgs = 1)] = "RequestJSONArgs"),
      (i[(i.RequestJSONArgsWithCancellation = 2)] =
        "RequestJSONArgsWithCancellation"),
      (i[(i.RequestMixedArgs = 3)] = "RequestMixedArgs"),
      (i[(i.RequestMixedArgsWithCancellation = 4)] =
        "RequestMixedArgsWithCancellation"),
      (i[(i.Acknowledged = 5)] = "Acknowledged"),
      (i[(i.Cancel = 6)] = "Cancel"),
      (i[(i.ReplyOKEmpty = 7)] = "ReplyOKEmpty"),
      (i[(i.ReplyOKVSBuffer = 8)] = "ReplyOKVSBuffer"),
      (i[(i.ReplyOKJSON = 9)] = "ReplyOKJSON"),
      (i[(i.ReplyOKJSONWithBuffers = 10)] = "ReplyOKJSONWithBuffers"),
      (i[(i.ReplyErrError = 11)] = "ReplyErrError"),
      (i[(i.ReplyErrEmpty = 12)] = "ReplyErrEmpty")
  })(gMs || (gMs = {}))
  var pMs
  ;(function (i) {
    ;(i[(i.String = 1)] = "String"),
      (i[(i.VSBuffer = 2)] = "VSBuffer"),
      (i[(i.SerializedObjectWithBuffers = 3)] = "SerializedObjectWithBuffers"),
      (i[(i.Undefined = 4)] = "Undefined")
  })(pMs || (pMs = {}));

  return {
    RPCProtocol,
  }
}