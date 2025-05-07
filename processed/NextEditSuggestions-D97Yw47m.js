import {
  S as U,
  i as X,
  s as Y,
  A as w,
  c as m,
  I as L,
  e as y,
  n as J,
  h as x,
  a9 as W,
  $ as F,
  R as It,
  aa as Ot,
  O as G,
  K as R,
  a3 as it,
  L as zt,
  M as ut,
  B as k,
  a6 as st,
  C as M,
  f as K,
  a7 as pt,
  u as h,
  t as v,
  D as P,
  q as Q,
  r as tt,
  a4 as Dt,
  a5 as rt,
  au as _,
  V as Lt,
  W as Nt,
  X as qt,
  Y as Wt,
  av as Bt,
  F as Tt,
  ar as Jt,
  as as Ut,
  ai as Xt,
} from "./SpinnerAugment-DI4IM-MA.js"
import { g as gt } from "./globals-D0QH3NT1.js"
import { S as lt } from "./next-edit-types-904A5ehg.js"
import {
  e as N,
  u as dt,
  d as Yt,
  o as jt,
  h as D,
  W as C,
} from "./BaseButton-C5Me6mfC.js"
import {
  a as B,
  g as ft,
  b as mt,
  f as at,
  c as O,
  S as Zt,
  d as $t,
  I as Gt,
  i as Ht,
  e as Ft,
  s as Qt,
  h as ht,
  j as te,
} from "./IconFilePath-CSDRu0cP.js"
import { A as ee } from "./IconButtonAugment-CSa0eDCh.js"
import { D as ne } from "./Drawer-CyImpMJF.js"
import {
  g as et,
  s as H,
  a as Rt,
  b as T,
  P as se,
  c as vt,
  D as oe,
  d as ot,
  e as ie,
  f as re,
  C as ae,
} from "./file-reader-DHzC9Wkz.js"
import { o as ct } from "./keypress-DD1aQVr0.js"
import { B as ce } from "./ButtonAugment-CajD5BpY.js"
import { M as le } from "./index-UCrRExsK.js"
import "./LanguageIcon-B3sLS5QQ.js"
import "./index-CC6xBPZJ.js"
import "./resize-observer-DdAtcrRr.js"
import "./ellipsis-K6lZ1ba5.js"
import "./VSCodeCodicon-BXZlAcvg.js"
import "./toggleHighContrast-jdnxapE8.js"
import "./preload-helper-Dv6uf1Os.js"
import "./isObjectLike-Bgjf2ORz.js"
const { Map: ue } = gt
function yt(o, t, n) {
  const e = o.slice()
  return (e[9] = t[n][0]), (e[10] = t[n][1]), e
}
function xt(o, t, n) {
  const e = o.slice()
  e[13] = t[n]
  const s = H(e[13], e[4], !0)
  return (e[14] = s), e
}
function St(o) {
  let t, n, e, s, r, c, i
  function a() {
    return o[6](o[13])
  }
  function l() {
    return o[7](o[13])
  }
  return {
    c() {
      ;(t = w("div")),
        m(t, "role", "button"),
        m(t, "tabindex", "0"),
        m(
          t,
          "title",
          (n =
            o[13].lineRange.start + 1 + ": " + o[13].result.changeDescription),
        ),
        m(
          t,
          "class",
          (e = "c-suggestion-tree__tick-mark " + o[14] + " svelte-ffrg54"),
        ),
        m(t, "style", (s = wt(o[14])))
    },
    m(u, p) {
      y(u, t, p),
        c ||
          ((i = [
            R(t, "click", a),
            R(t, "keydown", function () {
              it(ct("Space", l)) && ct("Space", l).apply(this, arguments)
            }),
            zt(
              (r = Rt.call(null, t, {
                scrollContainer: o[3],
                doScroll: B(o[13], T(o[4])),
                scrollIntoView: { behavior: "smooth", block: "nearest" },
              })),
            ),
          ]),
          (c = !0))
    },
    p(u, p) {
      ;(o = u),
        2 & p &&
          n !==
            (n =
              o[13].lineRange.start +
              1 +
              ": " +
              o[13].result.changeDescription) &&
          m(t, "title", n),
        18 & p &&
          e !==
            (e = "c-suggestion-tree__tick-mark " + o[14] + " svelte-ffrg54") &&
          m(t, "class", e),
        18 & p && s !== (s = wt(o[14])) && m(t, "style", s),
        r &&
          it(r.update) &&
          26 & p &&
          r.update.call(null, {
            scrollContainer: o[3],
            doScroll: B(o[13], T(o[4])),
            scrollIntoView: { behavior: "smooth", block: "nearest" },
          })
    },
    d(u) {
      u && x(t), (c = !1), ut(i)
    },
  }
}
function At(o, t) {
  let n,
    e,
    s,
    r,
    c = N(t[10]),
    i = []
  for (let a = 0; a < c.length; a += 1) i[a] = St(xt(t, c, a))
  return {
    key: o,
    first: null,
    c() {
      ;(n = w("div")), (s = F())
      for (let a = 0; a < i.length; a += 1) i[a].c()
      ;(r = It()),
        m(n, "class", "c-suggestion-tree__file-divider svelte-ffrg54"),
        m(n, "title", (e = t[9])),
        (this.first = n)
    },
    m(a, l) {
      y(a, n, l), y(a, s, l)
      for (let u = 0; u < i.length; u += 1) i[u] && i[u].m(a, l)
      y(a, r, l)
    },
    p(a, l) {
      if (((t = a), 2 & l && e !== (e = t[9]) && m(n, "title", e), 27 & l)) {
        let u
        for (c = N(t[10]), u = 0; u < c.length; u += 1) {
          const p = xt(t, c, u)
          i[u]
            ? i[u].p(p, l)
            : ((i[u] = St(p)), i[u].c(), i[u].m(r.parentNode, r))
        }
        for (; u < i.length; u += 1) i[u].d(1)
        i.length = c.length
      }
    },
    d(a) {
      a && (x(n), x(s), x(r)), Ot(i, a)
    },
  }
}
function ge(o) {
  let t,
    n = [],
    e = new ue(),
    s = N(o[1].entries())
  const r = (c) => c[9]
  for (let c = 0; c < s.length; c += 1) {
    let i = yt(o, s, c),
      a = r(i)
    e.set(a, (n[c] = At(a, i)))
  }
  return {
    c() {
      t = w("div")
      for (let c = 0; c < n.length; c += 1) n[c].c()
      m(t, "class", "c-suggestion-tree__minimized svelte-ffrg54"),
        L(t, "hidden", !o[2])
    },
    m(c, i) {
      y(c, t, i)
      for (let a = 0; a < n.length; a += 1) n[a] && n[a].m(t, null)
      o[8](t)
    },
    p(c, [i]) {
      27 & i &&
        ((s = N(c[1].entries())),
        (n = dt(n, i, r, 1, c, s, e, t, Yt, At, null, yt))),
        4 & i && L(t, "hidden", !c[2])
    },
    i: J,
    o: J,
    d(c) {
      c && x(t)
      for (let i = 0; i < n.length; i += 1) n[i].d()
      o[8](null)
    },
  }
}
function wt(o) {
  let t = "var(--ds-color-neutral-7, currentColor)"
  return (
    o === "active" &&
      (t = "var(--augment-code-roll-item-background-active, currentColor)"),
    o === "select" && (t = "currentColor"),
    o === "next" && (t = "var(--ds-color-neutral-10, currentColor)"),
    `--augment-code-roll-selection-background: ${t}`
  )
}
function de(o, t, n) {
  let e,
    { onCodeAction: s } = t,
    { sortedPathSuggestionsMap: r = new Map() } = t,
    { show: c = !0 } = t
  const i = et()
  let a
  return (
    W(o, i, (l) => n(4, (e = l))),
    (o.$$set = (l) => {
      "onCodeAction" in l && n(0, (s = l.onCodeAction)),
        "sortedPathSuggestionsMap" in l &&
          n(1, (r = l.sortedPathSuggestionsMap)),
        "show" in l && n(2, (c = l.show))
    }),
    [
      s,
      r,
      c,
      a,
      e,
      i,
      (l) => s("select", l),
      (l) => s("select", l),
      function (l) {
        G[l ? "unshift" : "push"](() => {
          ;(a = l), n(3, a)
        })
      },
    ]
  )
}
class pe extends U {
  constructor(t) {
    super(),
      X(this, t, de, ge, Y, {
        onCodeAction: 0,
        sortedPathSuggestionsMap: 1,
        show: 2,
      })
  }
}
function fe(o) {
  let t,
    n,
    e,
    s,
    r,
    c,
    i,
    a,
    l,
    u,
    p,
    d,
    g,
    S,
    A,
    E = o[0].lineRange.start + 1 + "",
    b = o[0].result.changeDescription + ""
  return (
    (n = new se({ props: { mask: o[2] !== "none", suggestion: o[0] } })),
    {
      c() {
        ;(t = w("button")),
          k(n.$$.fragment),
          (e = F()),
          (s = w("span")),
          (r = w("span")),
          (c = st(E)),
          (i = st(":")),
          (a = F()),
          (l = w("span")),
          (u = st(b)),
          m(r, "class", "c-suggestion-tree-item__description__linenumber"),
          m(
            l,
            "class",
            "c-suggestion-tree-item__description__path svelte-hekzdv",
          ),
          m(
            s,
            "class",
            "c-suggestion-tree-item-button__description svelte-hekzdv",
          ),
          m(t, "tabindex", 0),
          m(t, "title", (p = ft(o[0], !0) + ":" + mt(o[0]))),
          m(
            t,
            "class",
            (d = "c-suggestion-tree-item-button " + o[2] + " svelte-hekzdv"),
          )
      },
      m(I, j) {
        y(I, t, j),
          M(n, t, null),
          K(t, e),
          K(t, s),
          K(s, r),
          K(r, c),
          K(r, i),
          K(s, a),
          K(s, l),
          K(l, u),
          (g = !0),
          S ||
            ((A = [
              R(t, "click", o[5]),
              R(t, "dblclick", o[4]),
              R(t, "keydown", function () {
                it(ct("Space", o[7])) &&
                  ct("Space", o[7]).apply(this, arguments)
              }),
            ]),
            (S = !0))
      },
      p(I, [j]) {
        o = I
        const Z = {}
        4 & j && (Z.mask = o[2] !== "none"),
          1 & j && (Z.suggestion = o[0]),
          n.$set(Z),
          (!g || 1 & j) &&
            E !== (E = o[0].lineRange.start + 1 + "") &&
            pt(c, E),
          (!g || 1 & j) &&
            b !== (b = o[0].result.changeDescription + "") &&
            pt(u, b),
          (!g || (1 & j && p !== (p = ft(o[0], !0) + ":" + mt(o[0])))) &&
            m(t, "title", p),
          (!g ||
            (4 & j &&
              d !==
                (d =
                  "c-suggestion-tree-item-button " +
                  o[2] +
                  " svelte-hekzdv"))) &&
            m(t, "class", d)
      },
      i(I) {
        g || (h(n.$$.fragment, I), (g = !0))
      },
      o(I) {
        v(n.$$.fragment, I), (g = !1)
      },
      d(I) {
        I && x(t), P(n), (S = !1), ut(A)
      },
    }
  )
}
function me(o, t, n) {
  let e,
    { suggestion: s } = t,
    { onCodeAction: r } = t
  const c = et()
  W(o, c, (a) => n(6, (e = a)))
  let i = H(s, e, !0)
  return (
    (o.$$set = (a) => {
      "suggestion" in a && n(0, (s = a.suggestion)),
        "onCodeAction" in a && n(1, (r = a.onCodeAction))
    }),
    (o.$$.update = () => {
      65 & o.$$.dirty && n(2, (i = H(s, e, !0)))
    }),
    [
      s,
      r,
      i,
      c,
      function () {
        B(s, e.activeSuggestion) ? r("dismiss") : r("active", s)
      },
      function () {
        r("select", s)
      },
      e,
      () => r("select", s),
    ]
  )
}
class $e extends U {
  constructor(t) {
    super(), X(this, t, me, fe, Y, { suggestion: 0, onCodeAction: 1 })
  }
}
function Ct(o) {
  let t, n
  return (
    (t = new Zt({
      props: { onCodeAction: o[2], codeActions: o[6], value: o[1] },
    })),
    {
      c() {
        k(t.$$.fragment)
      },
      m(e, s) {
        M(t, e, s), (n = !0)
      },
      p(e, s) {
        const r = {}
        4 & s && (r.onCodeAction = e[2]),
          64 & s && (r.codeActions = e[6]),
          2 & s && (r.value = e[1]),
          t.$set(r)
      },
      i(e) {
        n || (h(t.$$.fragment, e), (n = !0))
      },
      o(e) {
        v(t.$$.fragment, e), (n = !1)
      },
      d(e) {
        P(t, e)
      },
    }
  )
}
function he(o) {
  let t, n, e, s, r, c, i, a, l
  n = new $e({ props: { suggestion: o[1], onCodeAction: o[2] } })
  let u = o[5] && Ct(o)
  return {
    c() {
      ;(t = w("li")),
        k(n.$$.fragment),
        (e = F()),
        u && u.c(),
        m(t, "class", "c-suggestion-tree-item__suggestion svelte-3abz9e"),
        m(t, "style", (s = vt(o[0])))
    },
    m(p, d) {
      y(p, t, d),
        M(n, t, null),
        K(t, e),
        u && u.m(t, null),
        (i = !0),
        a ||
          ((l = [
            zt(
              (r = Rt.call(null, t, {
                scrollContainer: o[4],
                doScroll: o[3],
                scrollIntoView: { behavior: "smooth", block: "nearest" },
              })),
            ),
            R(t, "mouseenter", o[9]),
            R(t, "mouseleave", o[10]),
          ]),
          (a = !0))
    },
    p(p, [d]) {
      const g = {}
      2 & d && (g.suggestion = p[1]),
        4 & d && (g.onCodeAction = p[2]),
        n.$set(g),
        p[5]
          ? u
            ? (u.p(p, d), 32 & d && h(u, 1))
            : ((u = Ct(p)), u.c(), h(u, 1), u.m(t, null))
          : u &&
            (Q(),
            v(u, 1, 1, () => {
              u = null
            }),
            tt()),
        (!i || (1 & d && s !== (s = vt(p[0])))) && m(t, "style", s),
        r &&
          it(r.update) &&
          24 & d &&
          r.update.call(null, {
            scrollContainer: p[4],
            doScroll: p[3],
            scrollIntoView: { behavior: "smooth", block: "nearest" },
          })
    },
    i(p) {
      i ||
        (h(n.$$.fragment, p),
        h(u),
        p &&
          Dt(() => {
            i && (c || (c = rt(t, at, {}, !0)), c.run(1))
          }),
        (i = !0))
    },
    o(p) {
      v(n.$$.fragment, p),
        v(u),
        p && (c || (c = rt(t, at, {}, !1)), c.run(0)),
        (i = !1)
    },
    d(p) {
      p && x(t), P(n), u && u.d(), p && c && c.end(), (a = !1), ut(l)
    },
  }
}
function ve(o, t, n) {
  let e,
    s,
    { suggestion: r } = t,
    { onCodeAction: c } = t,
    { shouldScrollIntoView: i = !1 } = t,
    { scrollContainer: a } = t,
    l = !1,
    u = et()
  W(o, u, (d) => n(8, (s = d)))
  let { state: p = H(r, s, !0) } = t
  return (
    (o.$$set = (d) => {
      "suggestion" in d && n(1, (r = d.suggestion)),
        "onCodeAction" in d && n(2, (c = d.onCodeAction)),
        "shouldScrollIntoView" in d && n(3, (i = d.shouldScrollIntoView)),
        "scrollContainer" in d && n(4, (a = d.scrollContainer)),
        "state" in d && n(0, (p = d.state))
    }),
    (o.$$.update = () => {
      258 & o.$$.dirty && n(0, (p = H(r, s, !0))),
        2 & o.$$.dirty &&
          n(
            6,
            (e =
              r.state === lt.accepted
                ? O("reject", "undo")
                : O("reject", "accept")),
          )
    }),
    [p, r, c, i, a, l, e, u, s, () => n(5, (l = !0)), () => n(5, (l = !1))]
  )
}
class ye extends U {
  constructor(t) {
    super(),
      X(this, t, ve, he, Y, {
        suggestion: 1,
        onCodeAction: 2,
        shouldScrollIntoView: 3,
        scrollContainer: 4,
        state: 0,
      })
  }
}
const { Map: Vt } = gt
function bt(o, t, n) {
  const e = o.slice()
  return (e[8] = t[n][0]), (e[9] = t[n][1]), e
}
function _t(o, t, n) {
  const e = o.slice()
  return (e[12] = t[n]), e
}
function kt(o, t) {
  let n, e, s
  return (
    (e = new ye({
      props: {
        onCodeAction: t[0],
        suggestion: t[12],
        shouldScrollIntoView: B(t[12], T(t[4])),
        scrollContainer: t[3],
      },
    })),
    {
      key: o,
      first: null,
      c() {
        ;(n = It()), k(e.$$.fragment), (this.first = n)
      },
      m(r, c) {
        y(r, n, c), M(e, r, c), (s = !0)
      },
      p(r, c) {
        t = r
        const i = {}
        1 & c && (i.onCodeAction = t[0]),
          2 & c && (i.suggestion = t[12]),
          18 & c && (i.shouldScrollIntoView = B(t[12], T(t[4]))),
          8 & c && (i.scrollContainer = t[3]),
          e.$set(i)
      },
      i(r) {
        s || (h(e.$$.fragment, r), (s = !0))
      },
      o(r) {
        v(e.$$.fragment, r), (s = !1)
      },
      d(r) {
        r && x(n), P(e, r)
      },
    }
  )
}
function xe(o) {
  let t,
    n,
    e = [],
    s = new Vt(),
    r = N(o[9])
  const c = (i) => i[12].result.suggestionId
  for (let i = 0; i < r.length; i += 1) {
    let a = _t(o, r, i),
      l = c(a)
    s.set(l, (e[i] = kt(l, a)))
  }
  return {
    c() {
      t = w("ul")
      for (let i = 0; i < e.length; i += 1) e[i].c()
      m(t, "class", "c-suggestion-tree-item__inner svelte-bnynfs")
    },
    m(i, a) {
      y(i, t, a)
      for (let l = 0; l < e.length; l += 1) e[l] && e[l].m(t, null)
      n = !0
    },
    p(i, a) {
      27 & a &&
        ((r = N(i[9])),
        Q(),
        (e = dt(e, a, c, 1, i, r, s, t, jt, kt, null, _t)),
        tt())
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1) h(e[a])
        n = !0
      }
    },
    o(i) {
      for (let a = 0; a < e.length; a += 1) v(e[a])
      n = !1
    },
    d(i) {
      i && x(t)
      for (let a = 0; a < e.length; a += 1) e[a].d()
    },
  }
}
function Se(o) {
  let t, n
  return (
    (t = new Gt({
      props: {
        filepath: o[8],
        slot: "summary",
        class: "c-suggestion-tree-item__lang-summary",
        value: o[9],
        onCodeAction: o[0],
        codeActions: o[9].every(Pt)
          ? O("rejectAllInFile")
          : O("rejectAllInFile", "acceptAllInFile"),
      },
    })),
    {
      c() {
        k(t.$$.fragment)
      },
      m(e, s) {
        M(t, e, s), (n = !0)
      },
      p(e, s) {
        const r = {}
        2 & s && (r.filepath = e[8]),
          2 & s && (r.value = e[9]),
          1 & s && (r.onCodeAction = e[0]),
          2 & s &&
            (r.codeActions = e[9].every(Pt)
              ? O("rejectAllInFile")
              : O("rejectAllInFile", "acceptAllInFile")),
          t.$set(r)
      },
      i(e) {
        n || (h(t.$$.fragment, e), (n = !0))
      },
      o(e) {
        v(t.$$.fragment, e), (n = !1)
      },
      d(e) {
        P(t, e)
      },
    }
  )
}
function Mt(o, t) {
  var a
  let n, e, s, r, c
  function i(...l) {
    return t[6](t[8], ...l)
  }
  return (
    (e = new oe({
      props: {
        duration: $t(t[9].length),
        class: "c-suggestion-tree-item",
        open: ((a = t[4].isOpen) == null ? void 0 : a[t[8]]) ?? !0,
        onChangeOpen: i,
        $$slots: { summary: [Se], default: [xe] },
        $$scope: { ctx: t },
      },
    })),
    {
      key: o,
      first: null,
      c() {
        ;(n = w("li")),
          k(e.$$.fragment),
          (s = F()),
          m(n, "class", "svelte-bnynfs"),
          (this.first = n)
      },
      m(l, u) {
        y(l, n, u), M(e, n, null), K(n, s), (c = !0)
      },
      p(l, u) {
        var d
        t = l
        const p = {}
        2 & u && (p.duration = $t(t[9].length)),
          18 & u &&
            (p.open = ((d = t[4].isOpen) == null ? void 0 : d[t[8]]) ?? !0),
          18 & u && (p.onChangeOpen = i),
          32795 & u && (p.$$scope = { dirty: u, ctx: t }),
          e.$set(p)
      },
      i(l) {
        c ||
          (h(e.$$.fragment, l),
          l &&
            Dt(() => {
              c && (r || (r = rt(n, at, {}, !0)), r.run(1))
            }),
          (c = !0))
      },
      o(l) {
        v(e.$$.fragment, l),
          l && (r || (r = rt(n, at, {}, !1)), r.run(0)),
          (c = !1)
      },
      d(l) {
        l && x(n), P(e), l && r && r.end()
      },
    }
  )
}
function Ae(o) {
  let t,
    n,
    e = [],
    s = new Vt(),
    r = N(o[1])
  const c = (i) => i[8]
  for (let i = 0; i < r.length; i += 1) {
    let a = bt(o, r, i),
      l = c(a)
    s.set(l, (e[i] = Mt(l, a)))
  }
  return {
    c() {
      t = w("ul")
      for (let i = 0; i < e.length; i += 1) e[i].c()
      m(t, "class", "c-suggestion-tree__maximized svelte-bnynfs"),
        L(t, "hidden", !o[2])
    },
    m(i, a) {
      y(i, t, a)
      for (let l = 0; l < e.length; l += 1) e[l] && e[l].m(t, null)
      o[7](t), (n = !0)
    },
    p(i, [a]) {
      27 & a &&
        ((r = N(i[1])),
        Q(),
        (e = dt(e, a, c, 1, i, r, s, t, jt, Mt, null, bt)),
        tt()),
        (!n || 4 & a) && L(t, "hidden", !i[2])
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1) h(e[a])
        n = !0
      }
    },
    o(i) {
      for (let a = 0; a < e.length; a += 1) v(e[a])
      n = !1
    },
    d(i) {
      i && x(t)
      for (let a = 0; a < e.length; a += 1) e[a].d()
      o[7](null)
    },
  }
}
const Pt = (o) => o.state === "accepted"
function we(o, t, n) {
  let e,
    s,
    { onCodeAction: r } = t,
    { sortedPathSuggestionsMap: c = new Map() } = t,
    { show: i = !0 } = t
  const a = et()
  return (
    W(o, a, (l) => n(4, (e = l))),
    (o.$$set = (l) => {
      "onCodeAction" in l && n(0, (r = l.onCodeAction)),
        "sortedPathSuggestionsMap" in l &&
          n(1, (c = l.sortedPathSuggestionsMap)),
        "show" in l && n(2, (i = l.show))
    }),
    [
      r,
      c,
      i,
      s,
      e,
      a,
      (l, u) => _(a, (e.isOpen = { ...e.isOpen, [l]: u }), e),
      function (l) {
        G[l ? "unshift" : "push"](() => {
          ;(s = l), n(3, s)
        })
      },
    ]
  )
}
class Ce extends U {
  constructor(t) {
    super(),
      X(this, t, we, Ae, Y, {
        onCodeAction: 0,
        sortedPathSuggestionsMap: 1,
        show: 2,
      })
  }
}
const be = (o) => ({}),
  Kt = (o) => ({})
function _e(o) {
  let t, n, e, s, r, c, i, a, l
  ;(n = new pe({
    props: {
      sortedPathSuggestionsMap: o[1],
      onCodeAction: o[0],
      show: o[2] && !!o[1].size,
    },
  })),
    (s = new Ce({
      props: {
        sortedPathSuggestionsMap: o[1],
        onCodeAction: o[0],
        show: !o[2] && !!o[1].size,
      },
    }))
  const u = o[8]["no-suggestions"],
    p = Lt(u, o, o[7], Kt)
  return {
    c() {
      ;(t = F()),
        k(n.$$.fragment),
        (e = F()),
        k(s.$$.fragment),
        (r = F()),
        (c = w("div")),
        p && p.c(),
        m(c, "class", "c-suggestion-tree__no-suggestions svelte-l320gs"),
        L(c, "hidden", o[1].size)
    },
    m(d, g) {
      y(d, t, g),
        M(n, d, g),
        y(d, e, g),
        M(s, d, g),
        y(d, r, g),
        y(d, c, g),
        p && p.m(c, null),
        (i = !0),
        a || ((l = R(document.body, "keydown", o[4])), (a = !0))
    },
    p(d, [g]) {
      const S = {}
      2 & g && (S.sortedPathSuggestionsMap = d[1]),
        1 & g && (S.onCodeAction = d[0]),
        6 & g && (S.show = d[2] && !!d[1].size),
        n.$set(S)
      const A = {}
      2 & g && (A.sortedPathSuggestionsMap = d[1]),
        1 & g && (A.onCodeAction = d[0]),
        6 & g && (A.show = !d[2] && !!d[1].size),
        s.$set(A),
        p &&
          p.p &&
          (!i || 128 & g) &&
          Nt(p, u, d, d[7], i ? Wt(u, d[7], g, be) : qt(d[7]), Kt),
        (!i || 2 & g) && L(c, "hidden", d[1].size)
    },
    i(d) {
      i || (h(n.$$.fragment, d), h(s.$$.fragment, d), h(p, d), (i = !0))
    },
    o(d) {
      v(n.$$.fragment, d), v(s.$$.fragment, d), v(p, d), (i = !1)
    },
    d(d) {
      d && (x(t), x(e), x(r), x(c)),
        P(n, d),
        P(s, d),
        p && p.d(d),
        (a = !1),
        l()
    },
  }
}
function ke(o, t, n) {
  let e,
    s,
    { $$slots: r = {}, $$scope: c } = t,
    { onCodeAction: i } = t,
    { sortedPathSuggestionsMap: a = new Map() } = t,
    { minimized: l = !1 } = t
  const u = et()
  function p(g, S = !0) {
    g != null &&
      g.qualifiedPathName.relPath &&
      (_(u, (e.nextSuggestion = g), e),
      _(u, (e.isOpen = { ...e.isOpen, [g.qualifiedPathName.relPath]: S }), e))
  }
  function d(g, S) {
    g.preventDefault(), g.stopPropagation()
    const A = T(e),
      E = Ht(a, A),
      b = Ft(a, E + (S ? -1 : 1))
    b && b !== A && (p(b), ot(e) === "active" ? i("active", b) : i("select", b))
  }
  return (
    W(o, u, (g) => n(6, (e = g))),
    (o.$$set = (g) => {
      "onCodeAction" in g && n(0, (i = g.onCodeAction)),
        "sortedPathSuggestionsMap" in g &&
          n(1, (a = g.sortedPathSuggestionsMap)),
        "minimized" in g && n(2, (l = g.minimized)),
        "$$scope" in g && n(7, (c = g.$$scope))
    }),
    (o.$$.update = () => {
      96 & o.$$.dirty &&
        e.nextSuggestion &&
        ot(e) === "next" &&
        !B(e.nextSuggestion, s) &&
        (n(5, (s = e.nextSuggestion)), p(e.nextSuggestion))
    }),
    [
      i,
      a,
      l,
      u,
      function (g) {
        switch (g.code) {
          case "KeyZ":
            if (
              (!g.metaKey && !g.ctrlKey) ||
              (g.preventDefault(), g.stopPropagation(), !e.nextSuggestion)
            )
              return
            p(e.nextSuggestion), i("undo", e.nextSuggestion)
            break
          case "KeyK":
          case "ArrowUp":
            if (g.metaKey || g.altKey || g.ctrlKey || g.shiftKey) return
            d(g, !0)
            break
          case "KeyJ":
          case "ArrowDown":
            if (g.metaKey || g.altKey || g.ctrlKey || g.shiftKey) return
            d(g)
            break
          case "ArrowRight":
          case "Space": {
            if (g.metaKey || g.altKey || g.ctrlKey || g.shiftKey) return
            g.preventDefault(), g.stopPropagation()
            const S = T(e)
            p(S), i(ot(e) === "select" ? "active" : "select", S)
            break
          }
          case "ArrowLeft":
          case "Escape":
            if (g.metaKey || g.altKey || g.ctrlKey || g.shiftKey) return
            g.preventDefault(), g.stopPropagation(), i("dismiss")
            break
          case "Enter":
            if (
              g.metaKey ||
              g.altKey ||
              g.ctrlKey ||
              g.shiftKey ||
              !e.nextSuggestion
            )
              return
            g.preventDefault(),
              g.stopPropagation(),
              i("accept", e.nextSuggestion)
            break
          case "Backspace":
            if (
              g.metaKey ||
              g.altKey ||
              g.ctrlKey ||
              g.shiftKey ||
              !e.nextSuggestion
            )
              return
            g.preventDefault(),
              g.stopPropagation(),
              i("reject", e.nextSuggestion)
        }
      },
      s,
      e,
      c,
      r,
    ]
  )
}
class Me extends U {
  constructor(t) {
    super(),
      X(this, t, ke, _e, Y, {
        onCodeAction: 0,
        sortedPathSuggestionsMap: 1,
        minimized: 2,
      })
  }
}
function Et(o, t, n) {
  return (
    o.addEventListener(t, n),
    () => {
      o.removeEventListener(t, n)
    }
  )
}
function Pe(o) {
  o()
}
const { window: Ke } = gt
function Ee(o) {
  let t, n, e
  function s(c) {
    o[18](c)
  }
  let r = {
    showButton: !1,
    class: "c-next-edit-suggestions__drawer",
    initialWidth: 300,
    expandedMinWidth: 150,
    deadzone: 50,
    minimizedWidth: 40,
    $$slots: { right: [Re], left: [De] },
    $$scope: { ctx: o },
  }
  return (
    o[4] !== void 0 && (r.minimized = o[4]),
    (t = new ne({ props: r })),
    G.push(() => Jt(t, "minimized", s)),
    {
      c() {
        k(t.$$.fragment)
      },
      m(c, i) {
        M(t, c, i), (e = !0)
      },
      p(c, i) {
        const a = {}
        33554546 & i && (a.$$scope = { dirty: i, ctx: c }),
          !n && 16 & i && ((n = !0), (a.minimized = c[4]), Ut(() => (n = !1))),
          t.$set(a)
      },
      i(c) {
        e || (h(t.$$.fragment, c), (e = !0))
      },
      o(c) {
        v(t.$$.fragment, c), (e = !1)
      },
      d(c) {
        P(t, c)
      },
    }
  )
}
function Ie(o) {
  let t, n, e
  return (
    (n = new Xt({})),
    {
      c() {
        ;(t = w("div")),
          k(n.$$.fragment),
          m(t, "class", "c-next-edit-suggestions--empty svelte-xgtx0g")
      },
      m(s, r) {
        y(s, t, r), M(n, t, null), (e = !0)
      },
      p: J,
      i(s) {
        e || (h(n.$$.fragment, s), (e = !0))
      },
      o(s) {
        v(n.$$.fragment, s), (e = !1)
      },
      d(s) {
        s && x(t), P(n)
      },
    }
  )
}
function ze(o) {
  let t, n, e, s, r
  return (
    (s = new ce({
      props: { loading: o[3], $$slots: { default: [Ve] }, $$scope: { ctx: o } },
    })),
    s.$on("click", te(o[14], "refresh")),
    {
      c() {
        ;(t = w("div")),
          (n = w("p")),
          (n.textContent = "No Suggestions"),
          (e = F()),
          k(s.$$.fragment),
          m(t, "class", "c-next-edit-suggestions--empty svelte-xgtx0g")
      },
      m(c, i) {
        y(c, t, i), K(t, n), K(t, e), M(s, t, null), (r = !0)
      },
      p(c, i) {
        const a = {}
        8 & i && (a.loading = c[3]),
          33554432 & i && (a.$$scope = { dirty: i, ctx: c }),
          s.$set(a)
      },
      i(c) {
        r || (h(s.$$.fragment, c), (r = !0))
      },
      o(c) {
        v(s.$$.fragment, c), (r = !1)
      },
      d(c) {
        c && x(t), P(s)
      },
    }
  )
}
function De(o) {
  let t, n, e
  return (
    (n = new Me({
      props: {
        sortedPathSuggestionsMap: o[1],
        onCodeAction: o[14],
        minimized: o[4],
      },
    })),
    {
      c() {
        ;(t = w("div")),
          k(n.$$.fragment),
          m(t, "slot", "left"),
          m(t, "class", "c-next-edit-suggestions__left svelte-xgtx0g")
      },
      m(s, r) {
        y(s, t, r), M(n, t, null), (e = !0)
      },
      p(s, r) {
        const c = {}
        2 & r && (c.sortedPathSuggestionsMap = s[1]),
          16 & r && (c.minimized = s[4]),
          n.$set(c)
      },
      i(s) {
        e || (h(n.$$.fragment, s), (e = !0))
      },
      o(s) {
        v(n.$$.fragment, s), (e = !1)
      },
      d(s) {
        s && x(t), P(n)
      },
    }
  )
}
function je(o) {
  let t
  return {
    c() {
      ;(t = w("div")),
        m(t, "class", "c-next-edit-suggestions__right--empty svelte-xgtx0g")
    },
    m(n, e) {
      y(n, t, e)
    },
    p: J,
    i: J,
    o: J,
    d(n) {
      n && x(t)
    },
  }
}
function Fe(o) {
  let t, n
  return (
    (t = new ae({
      props: {
        filepath: o[6].qualifiedPathName,
        suggestions: [o[6]],
        onCodeAction: o[14],
        codeActions: o[6].state === lt.accepted ? o[12] : o[11],
        readFile: o[8],
        expandable: !1,
        scrollContainer: o[5],
      },
    })),
    {
      c() {
        k(t.$$.fragment)
      },
      m(e, s) {
        M(t, e, s), (n = !0)
      },
      p(e, s) {
        const r = {}
        64 & s && (r.filepath = e[6].qualifiedPathName),
          64 & s && (r.suggestions = [e[6]]),
          64 & s &&
            (r.codeActions = e[6].state === lt.accepted ? e[12] : e[11]),
          32 & s && (r.scrollContainer = e[5]),
          t.$set(r)
      },
      i(e) {
        n || (h(t.$$.fragment, e), (n = !0))
      },
      o(e) {
        v(t.$$.fragment, e), (n = !1)
      },
      d(e) {
        P(t, e)
      },
    }
  )
}
function Re(o) {
  let t, n, e, s
  const r = [Fe, je],
    c = []
  function i(a, l) {
    return a[6] ? 0 : 1
  }
  return (
    (n = i(o)),
    (e = c[n] = r[n](o)),
    {
      c() {
        ;(t = w("div")),
          e.c(),
          m(t, "class", "c-next-edit-suggestions__right svelte-xgtx0g"),
          m(t, "slot", "right")
      },
      m(a, l) {
        y(a, t, l), c[n].m(t, null), o[17](t), (s = !0)
      },
      p(a, l) {
        let u = n
        ;(n = i(a)),
          n === u
            ? c[n].p(a, l)
            : (Q(),
              v(c[u], 1, 1, () => {
                c[u] = null
              }),
              tt(),
              (e = c[n]),
              e ? e.p(a, l) : ((e = c[n] = r[n](a)), e.c()),
              h(e, 1),
              e.m(t, null))
      },
      i(a) {
        s || (h(e), (s = !0))
      },
      o(a) {
        v(e), (s = !1)
      },
      d(a) {
        a && x(t), c[n].d(), o[17](null)
      },
    }
  )
}
function Ve(o) {
  let t
  return {
    c() {
      t = st("Refresh")
    },
    m(n, e) {
      y(n, t, e)
    },
    d(n) {
      n && x(t)
    },
  }
}
function Oe(o) {
  let t, n, e, s, r
  const c = [ze, Ie, Ee],
    i = []
  function a(l, u) {
    return l[2].length === 0 ? 0 : l[3] ? 1 : 2
  }
  return (
    (e = a(o)),
    (s = i[e] = c[e](o)),
    {
      c() {
        ;(t = w("main")),
          (n = w("div")),
          s.c(),
          m(n, "class", "c-next-edit-suggestions__container svelte-xgtx0g"),
          m(n, "tabindex", "0"),
          m(n, "role", "button"),
          m(t, "class", "c-next-edit-suggestions svelte-xgtx0g"),
          L(t, "c-next-edit-suggestions__narrow", !o[7])
      },
      m(l, u) {
        y(l, t, u), K(t, n), i[e].m(n, null), o[19](n), (r = !0)
      },
      p(l, u) {
        let p = e
        ;(e = a(l)),
          e === p
            ? i[e].p(l, u)
            : (Q(),
              v(i[p], 1, 1, () => {
                i[p] = null
              }),
              tt(),
              (s = i[e]),
              s ? s.p(l, u) : ((s = i[e] = c[e](l)), s.c()),
              h(s, 1),
              s.m(n, null)),
          (!r || 128 & u) && L(t, "c-next-edit-suggestions__narrow", !l[7])
      },
      i(l) {
        r || (h(s), (r = !0))
      },
      o(l) {
        v(s), (r = !1)
      },
      d(l) {
        l && x(t), i[e].d(), o[19](null)
      },
    }
  )
}
function Le(o) {
  let t, n, e, s
  return (
    (t = new le.Root({
      props: { $$slots: { default: [Oe] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        k(t.$$.fragment)
      },
      m(r, c) {
        M(t, r, c), (n = !0), e || ((s = R(Ke, "message", o[13])), (e = !0))
      },
      p(r, [c]) {
        const i = {}
        33554687 & c && (i.$$scope = { dirty: c, ctx: r }), t.$set(i)
      },
      i(r) {
        n || (h(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        v(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        P(t, r), (e = !1), s()
      },
    }
  )
}
function Ne(o, t, n) {
  let e, s, r
  const c = new ee(D.postMessage, 3e3),
    i = re(c),
    a =
      ((l = "(min-width: 500px)"),
      Bt(!1, ($) => {
        const f = window.matchMedia(l)
        $((f == null ? void 0 : f.matches) ?? !1)
        const V = (z) => $(z.matches)
        return (
          f.addEventListener("change", V),
          () => {
            f.removeEventListener("change", V)
          }
        )
      }))
  var l
  W(o, a, ($) => n(7, (r = $)))
  const u = ie({})
  W(o, u, ($) => n(16, (s = $)))
  const p = O("active", "|", "reject", "accept"),
    d = O("active", "|", "reject", "undo")
  let g,
    S = new Map(),
    A = [],
    E = !0,
    b = !1
  function I($) {
    const f = (function (V) {
      if (V === -1) return -1
      let z = V
      do z--
      while (z >= 0 && A[V].state === "stale")
      if (z !== -1) return z
      z = V
      do z++
      while (z < A.length && A[V].state === "stale")
      return z === A.length ? -1 : z
    })(A.findIndex(B.bind(null, $)))
    return Ft(S, f)
  }
  function j($) {
    n(15, (nt = !0))
  }
  function Z($) {
    _(u, (s.selectedSuggestion = void 0), s), n(15, (nt = !1))
  }
  let q
  Tt(
    () => (
      D.postMessage({ type: C.nextEditLoaded }),
      (function (...$) {
        return function () {
          $.forEach(Pe)
        }
      })(Et(window, "focus", j), Et(window, "blur", Z))
    ),
  )
  let nt = !1
  return (
    (o.$$.update = () => {
      1 & o.$$.dirty && q && q.focus(),
        98304 & o.$$.dirty &&
          nt &&
          s.nextSuggestion &&
          s.selectedSuggestion === void 0 &&
          s.nextSuggestion !== s.selectedSuggestion &&
          _(u, (s.selectedSuggestion = s.nextSuggestion), s),
        65536 & o.$$.dirty && n(6, (e = T(s)))
    }),
    [
      q,
      S,
      A,
      E,
      b,
      g,
      e,
      r,
      i,
      a,
      u,
      p,
      d,
      function ($) {
        const f = $.data
        switch (f.type) {
          case C.nextEditPreviewActive:
            _(
              u,
              (s = { ...s, activeSuggestion: f.data, nextSuggestion: f.data }),
              s,
            )
            break
          case C.nextEditDismiss:
            _(u, (s = { ...s, activeSuggestion: void 0 }), s)
            break
          case C.nextEditActiveSuggestionChanged:
            _(u, (s.activeSuggestion = f.data), s)
            break
          case C.nextEditToggleSuggestionTree:
            n(4, (b = !b))
            break
          case C.nextEditRefreshStarted:
            n(3, (E = !0))
            break
          case C.nextEditRefreshFinished:
            n(3, (E = !1))
            break
          case C.nextEditSuggestionsChanged:
            n(3, (E = !1)),
              n(1, (S = new Map(Qt(f.data.suggestions ?? [])))),
              n(2, (A = [...S.values()].flat())),
              ht(A, s.nextSuggestion) ||
                _(u, (s = { ...s, nextSuggestion: void 0 }), s),
              ht(A, s.activeSuggestion) ||
                _(u, (s = { ...s, activeSuggestion: void 0 }), s)
            break
          case C.nextEditNextSuggestionChanged:
            _(u, (s = { ...s, nextSuggestion: f.data }), s)
            break
          case C.nextEditPanelFocus:
            q && q.focus()
        }
      },
      ($, f) => {
        switch ($) {
          case "acceptAllInFile":
            return Array.isArray(f)
              ? void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { acceptAllInFile: f },
                })
              : void 0
          case "rejectAllInFile":
            return Array.isArray(f)
              ? void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { rejectAllInFile: f },
                })
              : void 0
          case "undoAllInFile":
            return Array.isArray(f)
              ? void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { undoAllInFile: f },
                })
              : void 0
          case "refresh":
            return (
              n(3, (E = !0)),
              void D.postMessage({
                type: C.nextEditRefreshStarted,
                data: "refresh",
              })
            )
          case "accept":
            return !f || Array.isArray(f)
              ? void 0
              : (_(u, (s.selectedSuggestion = I(f)), s),
                void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { accept: f },
                }))
          case "reject":
            return !f || Array.isArray(f)
              ? void 0
              : void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { reject: f },
                })
          case "active":
            return !f || Array.isArray(f)
              ? void 0
              : (D.postMessage({ type: C.nextEditOpenSuggestion, data: f }),
                void _(
                  u,
                  (s = { ...s, activeSuggestion: f, selectedSuggestion: f }),
                  s,
                ))
          case "select":
            return !f || Array.isArray(f)
              ? void 0
              : void _(
                  u,
                  (s = {
                    ...s,
                    activeSuggestion: void 0,
                    selectedSuggestion: f,
                  }),
                  s,
                )
          case "dismiss":
            return ot(s) === "active"
              ? (_(u, (s = { ...s, activeSuggestion: void 0 }), s),
                void D.postMessage({ type: C.nextEditDismiss }))
              : void 0
          case "undo":
            return !f || Array.isArray(f)
              ? void 0
              : void D.postMessage({
                  type: C.nextEditSuggestionsAction,
                  data: { undo: f },
                })
        }
      },
      nt,
      s,
      function ($) {
        G[$ ? "unshift" : "push"](() => {
          ;(g = $), n(5, g)
        })
      },
      function ($) {
        ;(b = $), n(4, b)
      },
      function ($) {
        G[$ ? "unshift" : "push"](() => {
          ;(q = $), n(0, q)
        })
      },
    ]
  )
}
class cn extends U {
  constructor(t) {
    super(), X(this, t, Ne, Le, Y, {})
  }
}
export { cn as default }
