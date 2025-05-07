// @ts-check

module.exports = {
  createPositionModule,
}

function createPositionModule(module, exports) {
  var n
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.Range = exports.Position = exports.OverlapBehaviour = void 0),
    (function (e) {
      ;(e[(e.None = 0)] = "None"),
        (e[(e.PartialTop = 1)] = "PartialTop"),
        (e[(e.PartialBottom = 2)] = "PartialBottom"),
        (e[(e.ContainedWithin = 3)] = "ContainedWithin"),
        (e[(e.Containing = 4)] = "Containing")
    })((n = exports.OverlapBehaviour || (exports.OverlapBehaviour = {})))
  class r {
    constructor(e, t) {
      ;(this.lineNumber = e), (this.column = t)
    }
    isAfterOrEqual(e) {
      return (
        this.lineNumber > e.lineNumber ||
        (this.lineNumber === e.lineNumber && this.column >= e.column)
      )
    }
    isAfter(e) {
      return (
        this.lineNumber > e.lineNumber ||
        (this.lineNumber === e.lineNumber && this.column > e.column)
      )
    }
    isBeforeOrEqual(e) {
      return (
        this.lineNumber < e.lineNumber ||
        (this.lineNumber === e.lineNumber && this.column <= e.column)
      )
    }
    isBefore(e) {
      return (
        this.lineNumber < e.lineNumber ||
        (this.lineNumber === e.lineNumber && this.column < e.column)
      )
    }
    isLineAfterOrEqual(e) {
      return this.lineNumber >= e
    }
    isLineAfter(e) {
      return this.lineNumber > e
    }
    isLineBeforeOrEqual(e) {
      return this.lineNumber <= e
    }
    isLineBefore(e) {
      return this.lineNumber < e
    }
    copy() {
      return new r(this.lineNumber, this.column)
    }
    min(e) {
      return this.isBefore(e) ? this : e
    }
    max(e) {
      return this.isAfter(e) ? this : e
    }
  }
  exports.Position = r
  class s {
    constructor(e, t, n, s) {
      if (
        "number" == typeof e &&
        "number" == typeof t &&
        "number" == typeof n &&
        "number" == typeof s
      )
        (this.start = new r(e, t)), (this.end = new r(n, s))
      else {
        if ("object" != typeof e || "object" != typeof t)
          throw new Error("Invalid arguments for Range constructor")
        ;(this.start = e), (this.end = t)
      }
    }
    numberOfLines() {
      return this.end.lineNumber - this.start.lineNumber + 1
    }
    getOverlap(e) {
      if (this.start.isAfter(e.end) || this.end.isBefore(e.start))
        return n.None
      if (
        this.start.isBeforeOrEqual(e.start) &&
        this.end.isBeforeOrEqual(e.end)
      )
        return n.PartialTop
      if (
        this.start.isAfterOrEqual(e.start) &&
        this.end.isAfterOrEqual(e.end)
      )
        return n.PartialBottom
      if (
        this.start.isAfterOrEqual(e.start) &&
        this.end.isBeforeOrEqual(e.end)
      )
        return n.ContainedWithin
      if (
        this.start.isBeforeOrEqual(e.start) &&
        this.end.isAfterOrEqual(e.end)
      )
        return n.Containing
      throw new Error("Invalid overlap behaviour")
    }
    getOverlapByLines(e) {
      if (
        this.start.isLineAfter(e.end.lineNumber) ||
        this.end.isLineBefore(e.start.lineNumber)
      )
        return n.None
      if (
        this.start.isLineBeforeOrEqual(e.start.lineNumber) &&
        this.end.isLineBeforeOrEqual(e.end.lineNumber)
      )
        return n.PartialTop
      if (
        this.start.isLineAfterOrEqual(e.start.lineNumber) &&
        this.end.isLineAfterOrEqual(e.end.lineNumber)
      )
        return n.PartialBottom
      if (
        this.start.isLineAfterOrEqual(e.start.lineNumber) &&
        this.end.isLineBeforeOrEqual(e.end.lineNumber)
      )
        return n.ContainedWithin
      if (
        this.start.isLineBeforeOrEqual(e.start.lineNumber) &&
        this.end.isLineAfterOrEqual(e.end.lineNumber)
      )
        return n.Containing
      throw new Error("Invalid overlap behaviour")
    }
    static merge(e, t) {
      if (null == e && null == t)
        throw new Error("Cannot merge two null ranges")
      return null == e && t
        ? t.copy()
        : null == t && e
          ? e.copy()
          : new s(
              e.copy().start.min(t.copy().start),
              e.end.max(t.copy().end),
            )
    }
    static getRangeExpandedByLines(e, t, n) {
      return new s(
        new r(e.start.lineNumber - t, e.start.column),
        new r(e.end.lineNumber + n, e.end.column),
      )
    }
    static getRNGRangeOfSizeContainingRange(e, t, n = 100) {
      if (t < e.numberOfLines()) return new s(e.start, e.end)
      const r = t - e.numberOfLines()
      let i = Math.round(Math.random() * r),
        o = r - i
      return (
        i < 0 && ((o += Math.abs(i)), (i = 0)),
        o > n && (o = n),
        (i = Math.max(0, i)),
        (o = Math.min(n, o)),
        {
          range: s.getRangeExpandedByLines(e, i, o),
          extraLinesOnTop: i,
          extraLinesOnBottom: o,
        }
      )
    }
    static getRNGRangesOfSizeContainingRanges(e, t, n, r, i) {
      const o = e.copy(),
        a = t.copy()
      if (n < o.numberOfLines() || n < a.numberOfLines())
        return {
          range1: new s(o.start, o.end),
          range2: new s(a.start, a.end),
        }
      const l = n - o.numberOfLines()
      let u = Math.round(Math.random() * l),
        c = l - u
      return (
        u < 0 && ((c += Math.abs(u)), (u = 0)),
        (c > r || c > i) && (c = Math.min(r, i)),
        {
          range1: s.getRangeExpandedByLines(o, u, c),
          range2: s.getRangeExpandedByLines(a, u, c),
        }
      )
    }
    asZeroIndexed() {
      return (
        (this.start.lineNumber -= 1),
        (this.start.column -= 1),
        (this.end.lineNumber -= 1),
        (this.end.column -= 1),
        this
      )
    }
    print() {
      console.log(
        `[${this.start.lineNumber}-${this.start.column}:${this.end.lineNumber}-${this.end.column}]`,
      )
    }
    toString() {
      return `[${this.start.lineNumber}-${this.start.column}:${this.end.lineNumber}-${this.end.column}]`
    }
    static createFromIRange(e) {
      return new s(
        e.startLineNumber,
        e.startColumn,
        e.endLineNumber,
        e.endColumn,
      )
    }
    copy() {
      return new s(
        this.start.lineNumber,
        this.start.column,
        this.end.lineNumber,
        this.end.column,
      )
    }
    moveDownByLines(e) {
      return (
        (this.start.lineNumber += e), (this.end.lineNumber += e), this
      )
    }
  }
  exports.Range = s
}
