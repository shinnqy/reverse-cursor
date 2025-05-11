var W = Object.defineProperty
var O = (t, e, r) =>
  e in t
    ? W(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r)
var $ = (t, e, r) => O(t, typeof e != "symbol" ? e + "" : e, r)
import { W as v, B } from "./BaseButton-C5Me6mfC.js"
import {
  S as z,
  i as E,
  s as P,
  a as g,
  A as D,
  B as _,
  c as M,
  a0 as I,
  e as U,
  C as q,
  g as T,
  Z as k,
  u as b,
  t as x,
  h as L,
  D as F,
  E as w,
  j,
  N as m,
  V as A,
  W as N,
  X as R,
  Y as S,
} from "./SpinnerAugment-DI4IM-MA.js"
class AsyncMessageSender {
  constructor(postMessageFunction, timeoutMs = 1e3) {
    $(this, "_idToPromiseFns", new Map())
    $(
      this,
      "registerPromiseContext",
      (message) =>
        new Promise((resolve, reject) => {
          this._idToPromiseFns.set(message.requestId, { resolve: resolve, reject: reject })
        }),
    )
    $(this, "resolveAsyncMsg", (message) => {
      if (message.type !== v.asyncWrapper) return !1
      const asyncMessage = message,
        promiseFns = this._idToPromiseFns.get(asyncMessage.requestId)
      return (
        !!promiseFns &&
        (this._idToPromiseFns.delete(asyncMessage.requestId),
        asyncMessage.error ? promiseFns.reject(new Error(asyncMessage.error)) : promiseFns.resolve(asyncMessage),
        !0)
      )
    })
    $(this, "rejectAsyncMsg", (message, error) => {
      const promiseFns = this._idToPromiseFns.get(message.requestId)
      promiseFns &&
        (this._idToPromiseFns.delete(message.requestId),
        console.debug(`AsyncMsgSender: Rejecting request, reason: ${error}`, message),
        promiseFns.reject(error))
    })
    $(this, "sendOrTimeout", (message, timeout = this._timeoutMs) => {
      this._postMsgFn(message),
        timeout > 0 &&
          setTimeout(() => {
            var baseMsg
            return this.rejectAsyncMsg(
              message,
              new Error(
                `Request timed out: ${(baseMsg = message == null ? void 0 : message.baseMsg) == null ? void 0 : baseMsg.type}, id: ${message == null ? void 0 : message.requestId}`,
              ),
            )
          }, timeout)
    })
    $(this, "send", async (message, timeout = this._timeoutMs) => {
      const wrappedMessage = C(message),
        responsePromise = this.registerPromiseContext(wrappedMessage)
      this.sendOrTimeout(wrappedMessage, timeout)
      const response = await responsePromise
      if (response.error) throw new Error(response.error)
      if (!response.baseMsg) throw new Error("No response or error message")
      return response.baseMsg
    })
    $(this, "sendToSidecar", async (message, timeout = this._timeoutMs) => {
      const wrappedMessage = C(message, "sidecar"),
        responsePromise = this.registerPromiseContext(wrappedMessage)
      this.sendOrTimeout(wrappedMessage, timeout)
      const response = await responsePromise
      if (response.error) throw new Error(response.error)
      if (!response.baseMsg) throw new Error("No response or error message")
      return response.baseMsg
    })
    ;(this._postMsgFn = postMessageFunction),
      (this._timeoutMs = timeoutMs),
      window.addEventListener("message", (event) => {
        this.resolveAsyncMsg(event.data)
      })
  }
  async *stream(message, timeout = this._timeoutMs, streamTimeout = this._timeoutMs) {
    let wrappedMessage = C(message)
    wrappedMessage.streamCtx = { streamMsgIdx: 0, streamNextRequestId: "" }
    let expectedIndex = 0,
      isCancelled = !1
    try {
      let responsePromise = this.registerPromiseContext(wrappedMessage)
      this.sendOrTimeout(wrappedMessage, timeout)
      const timeoutPromise = new Promise((resolve, reject) => {
        streamTimeout <= 0 || setTimeout(() => reject(new Error("Stream timed out")), streamTimeout)
      })
      for (; !isCancelled; ) {
        const response = await Promise.race([responsePromise, timeoutPromise])
        if ((response == null ? void 0 : response.type) !== v.asyncWrapper)
          throw new Error(`Received unexpected message: ${response}`)
        if (response.error) throw new Error(response.error)
        if (!response.streamCtx || response.streamCtx.isStreamComplete) return
        if (!response.baseMsg) throw new Error("No response or error message")
        if (response.streamCtx.streamMsgIdx !== expectedIndex) {
          const receivedIndex = response.streamCtx.streamMsgIdx
          throw new Error(
            `Received out of order stream chunk. Expected ${expectedIndex} but got ${receivedIndex}`,
          )
        }
        ;(expectedIndex = response.streamCtx.streamMsgIdx + 1),
          (wrappedMessage = {
            ...wrappedMessage,
            streamCtx: { streamMsgIdx: expectedIndex, streamNextRequestId: "" },
            requestId: response.streamCtx.streamNextRequestId,
          }),
          (responsePromise = this.registerPromiseContext(wrappedMessage)),
          yield response.baseMsg
      }
    } finally {
      if (!isCancelled) {
        isCancelled = !0
        try {
          this._idToPromiseFns.delete(wrappedMessage.requestId)
        } catch (error) {
          console.warn("Error sending stream cancellation message:", error)
        }
      }
    }
  }
}
function C(t, e = "host") {
  return {
    type: v.asyncWrapper,
    requestId: crypto.randomUUID(),
    error: null,
    baseMsg: t,
    destination: e,
  }
}
function V(t) {
  let e
  const r = t[8].default,
    o = A(r, t, t[18], null)
  return {
    c() {
      o && o.c()
    },
    m(n, i) {
      o && o.m(n, i), (e = !0)
    },
    p(n, i) {
      o &&
        o.p &&
        (!e || 262144 & i) &&
        N(o, r, n, n[18], e ? S(r, n[18], i, null) : R(n[18]), null)
    },
    i(n) {
      e || (b(o, n), (e = !0))
    },
    o(n) {
      x(o, n), (e = !1)
    },
    d(n) {
      o && o.d(n)
    },
  }
}
function X(t) {
  let e, r, o, n
  const i = [
    { size: t[0] },
    { variant: t[1] },
    { color: t[2] },
    { highContrast: t[3] },
    { disabled: t[4] },
    { radius: t[5] },
    { class: t[7] },
    t[6],
  ]
  let l = { $$slots: { default: [V] }, $$scope: { ctx: t } }
  for (let a = 0; a < i.length; a += 1) l = g(l, i[a])
  return (
    (r = new B({ props: l })),
    r.$on("click", t[9]),
    r.$on("keyup", t[10]),
    r.$on("keydown", t[11]),
    r.$on("mousedown", t[12]),
    r.$on("mouseover", t[13]),
    r.$on("focus", t[14]),
    r.$on("mouseleave", t[15]),
    r.$on("blur", t[16]),
    r.$on("contextmenu", t[17]),
    {
      c() {
        ;(e = D("div")),
          _(r.$$.fragment),
          M(
            e,
            "class",
            (o = I(`c-icon-btn c-icon-btn--size-${t[0]}`) + " svelte-1f69byk"),
          )
      },
      m(a, u) {
        U(a, e, u), q(r, e, null), (n = !0)
      },
      p(a, [u]) {
        const d =
          255 & u
            ? T(i, [
                1 & u && { size: a[0] },
                2 & u && { variant: a[1] },
                4 & u && { color: a[2] },
                8 & u && { highContrast: a[3] },
                16 & u && { disabled: a[4] },
                32 & u && { radius: a[5] },
                128 & u && { class: a[7] },
                64 & u && k(a[6]),
              ])
            : {}
        262144 & u && (d.$$scope = { dirty: u, ctx: a }),
          r.$set(d),
          (!n ||
            (1 & u &&
              o !==
                (o =
                  I(`c-icon-btn c-icon-btn--size-${a[0]}`) +
                  " svelte-1f69byk"))) &&
            M(e, "class", o)
      },
      i(a) {
        n || (b(r.$$.fragment, a), (n = !0))
      },
      o(a) {
        x(r.$$.fragment, a), (n = !1)
      },
      d(a) {
        a && L(e), F(r)
      },
    }
  )
}
function Y(t, e, r) {
  let o, n
  const i = ["size", "variant", "color", "highContrast", "disabled", "radius"]
  let l = w(e, i),
    { $$slots: a = {}, $$scope: u } = e,
    { size: d = 2 } = e,
    { variant: h = "solid" } = e,
    { color: f = "accent" } = e,
    { highContrast: p = !1 } = e,
    { disabled: s = !1 } = e,
    { radius: y = "medium" } = e
  return (
    (t.$$set = (c) => {
      ;(e = g(g({}, e), j(c))),
        r(19, (l = w(e, i))),
        "size" in c && r(0, (d = c.size)),
        "variant" in c && r(1, (h = c.variant)),
        "color" in c && r(2, (f = c.color)),
        "highContrast" in c && r(3, (p = c.highContrast)),
        "disabled" in c && r(4, (s = c.disabled)),
        "radius" in c && r(5, (y = c.radius)),
        "$$scope" in c && r(18, (u = c.$$scope))
    }),
    (t.$$.update = () => {
      r(7, ({ class: o, ...n } = l), o, (r(6, n), r(19, l)))
    }),
    [
      d,
      h,
      f,
      p,
      s,
      y,
      n,
      o,
      a,
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      function (c) {
        m.call(this, t, c)
      },
      u,
    ]
  )
}
class Z extends z {
  constructor(e) {
    super(),
      E(this, e, Y, X, P, {
        size: 0,
        variant: 1,
        color: 2,
        highContrast: 3,
        disabled: 4,
        radius: 5,
      })
  }
}
function G(t) {
  let e
  const r = t[7].default,
    o = A(r, t, t[17], null)
  return {
    c() {
      o && o.c()
    },
    m(n, i) {
      o && o.m(n, i), (e = !0)
    },
    p(n, i) {
      o &&
        o.p &&
        (!e || 131072 & i) &&
        N(o, r, n, n[17], e ? S(r, n[17], i, null) : R(n[17]), null)
    },
    i(n) {
      e || (b(o, n), (e = !0))
    },
    o(n) {
      x(o, n), (e = !1)
    },
    d(n) {
      o && o.d(n)
    },
  }
}
function H(t) {
  let e, r
  const o = [
    { size: t[0] },
    { variant: t[1] },
    { color: t[2] },
    { highContrast: t[3] },
    { disabled: t[4] },
    { radius: t[5] },
    t[6],
  ]
  let n = { $$slots: { default: [G] }, $$scope: { ctx: t } }
  for (let i = 0; i < o.length; i += 1) n = g(n, o[i])
  return (
    (e = new Z({ props: n })),
    e.$on("click", t[8]),
    e.$on("keyup", t[9]),
    e.$on("keydown", t[10]),
    e.$on("mousedown", t[11]),
    e.$on("mouseover", t[12]),
    e.$on("focus", t[13]),
    e.$on("mouseleave", t[14]),
    e.$on("blur", t[15]),
    e.$on("contextmenu", t[16]),
    {
      c() {
        _(e.$$.fragment)
      },
      m(i, l) {
        q(e, i, l), (r = !0)
      },
      p(i, [l]) {
        const a =
          127 & l
            ? T(o, [
                1 & l && { size: i[0] },
                2 & l && { variant: i[1] },
                4 & l && { color: i[2] },
                8 & l && { highContrast: i[3] },
                16 & l && { disabled: i[4] },
                32 & l && { radius: i[5] },
                64 & l && k(i[6]),
              ])
            : {}
        131072 & l && (a.$$scope = { dirty: l, ctx: i }), e.$set(a)
      },
      i(i) {
        r || (b(e.$$.fragment, i), (r = !0))
      },
      o(i) {
        x(e.$$.fragment, i), (r = !1)
      },
      d(i) {
        F(e, i)
      },
    }
  )
}
function J(t, e, r) {
  const o = ["size", "variant", "color", "highContrast", "disabled", "radius"]
  let n = w(e, o),
    { $$slots: i = {}, $$scope: l } = e,
    { size: a = 2 } = e,
    { variant: u = "solid" } = e,
    { color: d = "accent" } = e,
    { highContrast: h = !1 } = e,
    { disabled: f = !1 } = e,
    { radius: p = "medium" } = e
  return (
    (t.$$set = (s) => {
      ;(e = g(g({}, e), j(s))),
        r(6, (n = w(e, o))),
        "size" in s && r(0, (a = s.size)),
        "variant" in s && r(1, (u = s.variant)),
        "color" in s && r(2, (d = s.color)),
        "highContrast" in s && r(3, (h = s.highContrast)),
        "disabled" in s && r(4, (f = s.disabled)),
        "radius" in s && r(5, (p = s.radius)),
        "$$scope" in s && r(17, (l = s.$$scope))
    }),
    [
      a,
      u,
      d,
      h,
      f,
      p,
      n,
      i,
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      function (s) {
        m.call(this, t, s)
      },
      l,
    ]
  )
}
class re extends z {
  constructor(e) {
    super(),
      E(this, e, J, H, P, {
        size: 0,
        variant: 1,
        color: 2,
        highContrast: 3,
        disabled: 4,
        radius: 5,
      })
  }
}
export { AsyncMessageSender as A, Z as C, re as I }
