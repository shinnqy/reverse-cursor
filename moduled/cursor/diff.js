// @ts-check

export function createDiff() {
  function CYe() {}
  CYe.prototype = {
    diff(i, e, t = {}) {
      let s = t.callback
      typeof t == "function" && ((s = t), (t = {})), (this.options = t)
      let n = this
      function r(y) {
        return s
          ? (setTimeout(function () {
              s(void 0, y)
            }, 0),
            !0)
          : y
      }
      ;(i = this.castInput(i)),
        (e = this.castInput(e)),
        (i = this.removeEmpty(this.tokenize(i))),
        (e = this.removeEmpty(this.tokenize(e)))
      let o = e.length,
        a = i.length,
        l = 1,
        c = o + a
      t.maxEditLength && (c = Math.min(c, t.maxEditLength))
      const h = t.timeout ?? 1 / 0,
        u = Date.now() + h
      let d = [{ oldPos: -1, lastComponent: void 0 }],
        g = this.extractCommon(d[0], e, i, 0)
      if (d[0].oldPos + 1 >= a && g + 1 >= o)
        return r([{ value: this.join(e), count: e.length }])
      let p = -1 / 0,
        m = 1 / 0
      function b() {
        for (let y = Math.max(p, -l); y <= Math.min(m, l); y += 2) {
          let w,
            C = d[y - 1],
            S = d[y + 1]
          C && (d[y - 1] = void 0)
          let x = !1
          if (S) {
            const E = S.oldPos - y
            x = S && 0 <= E && E < o
          }
          let k = C && C.oldPos + 1 < a
          if (!x && !k) {
            d[y] = void 0
            continue
          }
          if (
            (!k || (x && C.oldPos + 1 < S.oldPos)
              ? (w = n.addToPath(S, !0, void 0, 0))
              : (w = n.addToPath(C, void 0, !0, 1)),
            (g = n.extractCommon(w, e, i, y)),
            w.oldPos + 1 >= a && g + 1 >= o)
          )
            return r(kKn(n, w.lastComponent, e, i, n.useLongestToken))
          ;(d[y] = w),
            w.oldPos + 1 >= a && (m = Math.min(m, y - 1)),
            g + 1 >= o && (p = Math.max(p, y + 1))
        }
        l++
      }
      if (s)
        (function y() {
          setTimeout(function () {
            if (l > c || Date.now() > u) return s()
            b() || y()
          }, 0)
        })()
      else
        for (; l <= c && Date.now() <= u; ) {
          let y = b()
          if (y) return y
        }
    },
    addToPath(i, e, t, s) {
      let n = i.lastComponent
      return n && n.added === e && n.removed === t
        ? {
            oldPos: i.oldPos + s,
            lastComponent: {
              count: n.count + 1,
              added: e,
              removed: t,
              previousComponent: n.previousComponent,
            },
          }
        : {
            oldPos: i.oldPos + s,
            lastComponent: {
              count: 1,
              added: e,
              removed: t,
              previousComponent: n,
            },
          }
    },
    extractCommon(i, e, t, s) {
      let n = e.length,
        r = t.length,
        o = i.oldPos,
        a = o - s,
        l = 0
      for (; a + 1 < n && o + 1 < r && this.equals(e[a + 1], t[o + 1]); )
        a++, o++, l++
      return (
        l && (i.lastComponent = { count: l, previousComponent: i.lastComponent }),
        (i.oldPos = o),
        a
      )
    },
    equals(i, e) {
      return this.options.comparator
        ? this.options.comparator(i, e)
        : i === e ||
            (this.options.ignoreCase && i.toLowerCase() === e.toLowerCase())
    },
    removeEmpty(i) {
      let e = []
      for (let t = 0; t < i.length; t++) i[t] && e.push(i[t])
      return e
    },
    castInput(i) {
      return i
    },
    tokenize(i) {
      return i.split("")
    },
    join(i) {
      return i.join("")
    },
  }
  function kKn(i, e, t, s, n) {
    const r = []
    let o
    for (; e; )
      r.push(e), (o = e.previousComponent), delete e.previousComponent, (e = o)
    r.reverse()
    let a = 0,
      l = r.length,
      c = 0,
      h = 0
    for (; a < l; a++) {
      let d = r[a]
      if (d.removed) {
        if (
          ((d.value = i.join(s.slice(h, h + d.count))),
          (h += d.count),
          a && r[a - 1].added)
        ) {
          let g = r[a - 1]
          ;(r[a - 1] = r[a]), (r[a] = g)
        }
      } else {
        if (!d.added && n) {
          let g = t.slice(c, c + d.count)
          ;(g = g.map(function (p, m) {
            let b = s[h + m]
            return b.length > p.length ? b : p
          })),
            (d.value = i.join(g))
        } else d.value = i.join(t.slice(c, c + d.count))
        ;(c += d.count), d.added || (h += d.count)
      }
    }
    let u = r[l - 1]
    return (
      l > 1 &&
        typeof u.value == "string" &&
        (u.added || u.removed) &&
        i.equals("", u.value) &&
        ((r[l - 2].value += u.value), r.pop()),
      r
    )
  }

  return {
    CYe,
  }
}
