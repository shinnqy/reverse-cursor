// @ts-check

module.exports = {
  createDiffModule,
};

function createDiffModule(module, exports, require) {
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.diffTrimmedLines =
      exports.diffWithPrefixPostfix =
      exports.diffLines =
      exports.lineDiff =
        void 0)
  const r = require(6469),
    s = require(6955)
  ;(exports.lineDiff = new r.Diff()),
    (exports.lineDiff.tokenize = function (e) {
      this.options.stripTrailingCr && (e = e.replace(/\r\n/g, "\n"))
      let t = [],
        n = e.split(/(\n|\r\n)/)
      n[n.length - 1] || n.pop()
      for (let e = 0; e < n.length; e++) {
        let r = n[e]
        e % 2 && !this.options.newlineIsToken
          ? (t[t.length - 1] += r)
          : (this.options.ignoreWhitespace && (r = r.trim()), t.push(r))
      }
      return t
    }),
    (exports.diffLines = function (e, n, r) {
      return exports.lineDiff.diff(e, n, r)
    }),
    (exports.diffWithPrefixPostfix = function (e, t, n) {
      let r = 0
      e.endsWith("\n") || ((e += "\n"), r++),
        t.endsWith("\n") || (r++, (t += "\n"))
      let s = [],
        i = [],
        o = e.split("\n"),
        a = t.split("\n")
      for (
        let e = 0;
        e < Math.min(o.length, a.length) && o[e] === a[e];
        e++
      )
        s.push({ value: o[e], count: 1 }),
          (o = o.slice(1)),
          (a = a.slice(1))
      for (
        let e = 0;
        e < Math.min(o.length, a.length) &&
        (o[o.length - 1 - e] === a[a.length - 1 - e] || "" === a[e]);
        e++
      )
        i.unshift({ value: o[o.length - 1 - e], count: 1 }),
          (o = o.slice(0, o.length - 1 - e)),
          (a = a.slice(0, a.length - 1 - e))
      const l = [...s, ...n.diff(e, t), ...i],
        u = l.slice(-1)[0]
      return (
        1 !== r || "" !== u.value || u.added || u.removed || l.pop(), l
      )
    }),
    (exports.diffTrimmedLines = function (e, n, r = {}) {
      let i = (0, s.generateOptions)(r, { ignoreWhitespace: !0 })
      return exports.lineDiff.diff(e, n, i)
    })
}
