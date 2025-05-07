// @ts-check

module.exports = {
  createDiffProviderModule,
}

function createDiffProviderModule(module, exports, require) {
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.numIntersectingLines =
      exports.rangeForUndoChange =
      exports.isRangeEmpty =
      exports.areChangesEqual =
      exports.getValueInRangeLines =
      exports.changeModelWindowInPlaceAndComputeUndoChange =
      exports.changeModelWindowInPlace =
      exports.computeDeletedAddedRanges =
      exports.getGreensAndRedsRangesFromChanges =
      exports.getExpandedRangeOneIndexed =
      exports.applyChangeToRange =
      exports.applyChangeToArbitraryRange =
      exports.getValueInRange =
      exports.getNewLineRange =
      exports.getOldLineRange =
      exports.numberHash =
      exports.stringHash =
      exports.cppModelHash =
      exports.getCppModelHashVersion =
      exports.changeModel =
      exports.changeModelLinesInPlace =
      exports.DefaultDiffProvider =
        void 0)
  const r = require(1242),
    s = require(8528)
  function i(e, t, n) {
    try {
      const { range: r, text: s } = t
      if (
        r.startLineNumber > e.length + 1 ||
        (r.startLineNumber === e.length + 1 && 1 !== r.startColumn)
      )
        throw new Error("Start of the range is outside the file.")
      const {
          startLineNumber: i,
          startColumn: o,
          endLineNumber: a,
          endColumn: l,
        } = r,
        u = (e[i - 1] ?? "").substring(0, o - 1),
        c = e[a - 1] ?? "",
        A = 1 === l ? c : c.substring(l - 1)
      !0 === n?.noNeedToMakeSureLinesAreLines
        ? e.splice(i - 1, a - i + 1, u + s + A)
        : e.splice(i - 1, a - i + 1, ...(u + s + A).split("\n"))
    } catch (e) {
      throw e
    }
  }
  ;(exports.DefaultDiffProvider = class {
    async diffLines(e, t, n, s) {
      const i = { ...s }
      delete i.singleLineChanges
      const o = (0, r.diffLines)(t, e, i)
      return s?.singleLineChanges
        ? o
            .map((e) => {
              const t = e.value.split("\n")
              return t
                .map((n, r) =>
                  r < t.length - 1
                    ? [
                        { value: n, added: e.added, removed: e.removed },
                        {
                          value: "\n",
                          added: e.added,
                          removed: e.removed,
                        },
                      ]
                    : { value: n, added: e.added, removed: e.removed },
                )
                .flat()
            })
            .flat()
            .filter((e) => "" !== e.value)
        : o
    }
    async diffWords(e, t, n) {
      const r = { ...n }
      delete r.singleLineChanges
      const i = (0, s.diffWords)(t, e, r)
      return n?.singleLineChanges
        ? i
            .map((e) => {
              const t = e.value.split(" ")
              return t
                .map((n, r) =>
                  r < t.length - 1
                    ? [
                        { value: n, added: e.added, removed: e.removed },
                        {
                          value: " ",
                          added: e.added,
                          removed: e.removed,
                        },
                      ]
                    : { value: n, added: e.added, removed: e.removed },
                )
                .flat()
            })
            .flat()
            .filter((e) => "" !== e.value)
        : i
    }
  }),
    (exports.changeModelLinesInPlace = i),
    (exports.changeModel = function (e, t) {
      const n = e.split("\n")
      return i(n, t, { noNeedToMakeSureLinesAreLines: !0 }), n.join("\n")
    })
  const o = "cursorhashversionC7wtBsDmlFaPg4ToTvIlm"
  function a(e, t) {
    t = l(149417, t)
    for (let n = 0, r = e.length; n < r; n++) t = l(e.charCodeAt(n), t)
    return t
  }
  function l(e, t) {
    return ((t << 5) - t + e) | 0
  }
  function u(e, t) {
    if (t.range.startLineNumber < e.startLineNumber)
      throw new Error("change is not contained in model window")
    if (
      t.range.endLineNumber > e.endLineNumber &&
      (t.range.endLineNumber !== e.endLineNumber + 1 ||
        1 !== t.range.endColumn ||
        !t.text.endsWith("\n"))
    )
      throw new Error("change is not contained in model window")
    i(e.lines, {
      range: {
        startLineNumber: t.range.startLineNumber - e.startLineNumber + 1,
        startColumn: t.range.startColumn,
        endLineNumber: t.range.endLineNumber - e.startLineNumber + 1,
        endColumn: t.range.endColumn,
      },
      text: t.text,
    }),
      (e.endLineNumber = e.startLineNumber + e.lines.length - 1)
  }
  function c(e, t) {
    let n = ""
    for (
      let r = t.startLineNumber - 1;
      r < t.endLineNumber &&
      (r !== t.endLineNumber - 1 || 1 !== t.endColumn);
      r++
    ) {
      const s = r === t.startLineNumber - 1 ? t.startColumn - 1 : 0,
        i = r === t.endLineNumber - 1 ? t.endColumn - 1 : e[r].length
      ;(n += e[r].substring(s, i)), r < t.endLineNumber - 1 && (n += "\n")
    }
    return n
  }
  function A(e) {
    return {
      startLineNumber: e.range.startLineNumber,
      startColumn: e.range.startColumn,
      endLineNumber:
        e.range.startLineNumber + e.text.split("\n").length - 1,
      endColumn:
        -1 === e.text.lastIndexOf("\n")
          ? e.range.startColumn + e.text.length
          : e.text.length - e.text.lastIndexOf("\n"),
    }
  }
  ;(exports.getCppModelHashVersion = function (e) {
    if (e.startsWith(o)) {
      const t = e.split(":")
      if (t[0] !== o) throw new Error("Unexpected hash version split")
      return parseInt(t[1], 10)
    }
    return 0
  }),
    (exports.cppModelHash = function (e, t) {
      if (void 0 === t || 0 === t) return `${a(e, 0)}`
      if (1 === t) {
        const t = `${o}:1:`
        return e.length > 1e4 ? `${t}${a(e, 0)}` : `${t}${e}`
      }
      throw new Error("Unsupported hash version")
    }),
    (exports.stringHash = a),
    (exports.numberHash = l),
    (exports.getOldLineRange = function (e) {
      return {
        startLineNumber: e.range.startLineNumber,
        endLineNumberExclusive: e.range.endLineNumber + 1,
      }
    }),
    (exports.getNewLineRange = function (e) {
      return {
        startLineNumber: e.range.startLineNumber,
        endLineNumberExclusive:
          e.range.startLineNumber + e.text.split("\n").length,
      }
    }),
    (exports.getValueInRange = function (e, t) {
      return e
        .split("\n")
        .slice(t.startLineNumber - 1, t.endLineNumberExclusive - 1)
        .join("\n")
    }),
    (exports.applyChangeToArbitraryRange = function (e, t, n) {
      const r = (e) =>
        e > t.startLineNumber
          ? e > t.endLineNumberExclusive
            ? n.endLineNumberExclusive - t.endLineNumberExclusive
            : n.endLineNumberExclusive - e
          : 0
      return {
        startLineNumber: e.startLineNumber + r(e.startLineNumber),
        endLineNumberExclusive:
          e.endLineNumberExclusive + r(e.endLineNumberExclusive),
      }
    }),
    (exports.applyChangeToRange = function (e, t, n) {
      const r = (e) =>
        e > t.startLineNumber
          ? e > t.endLineNumberExclusive
            ? n.endLineNumberExclusive - t.endLineNumberExclusive
            : n.endLineNumberExclusive - e
          : 0
      return {
        startLineNumber: Math.min(
          n.startLineNumber,
          e.startLineNumber + r(e.startLineNumber),
        ),
        endLineNumberExclusive: Math.max(
          n.endLineNumberExclusive,
          e.endLineNumberExclusive + r(e.endLineNumberExclusive),
        ),
      }
    }),
    (exports.getExpandedRangeOneIndexed = function (e, t, n, r, s) {
      const i = e.split("\n"),
        o = Math.floor(
          (t.startLineNumber + t.endLineNumberExclusive) / 2,
        ),
        a = {
          startLineNumber: Math.max(1, o - (r ?? n)),
          endLineNumberExclusive: Math.min(i.length + 1, o + n + 1),
        }
      if (!1 !== s) {
        for (
          ;
          a.startLineNumber < a.endLineNumberExclusive &&
          "" === i[a.startLineNumber - 1].trim() &&
          a.startLineNumber > 1;

        )
          a.startLineNumber += 1
        for (
          ;
          a.startLineNumber < a.endLineNumberExclusive &&
          "" === i[a.endLineNumberExclusive - 2].trim() &&
          a.endLineNumberExclusive - 2 < i.length;

        )
          a.endLineNumberExclusive -= 1
      }
      return a
    }),
    (exports.getGreensAndRedsRangesFromChanges = function (e, t, n) {
      const r = []
      let s = "",
        i = !1
      for (const t of e)
        if (t.added) (i = !0), (s += t.value)
        else if (!t.removed) break
      const o = i ? s.split("\n").length : 0
      let a = 1,
        l = 1
      for (const s of e) {
        const e = s.value.split("\n"),
          i = a + e.length - 1,
          u =
            e.length > 1 ? e[e.length - 1].length + 1 : l + s.value.length
        if (!0 === s.added) {
          const e = {
            startLineNumber: a,
            startColumn: l,
            endLineNumber: i,
            endColumn: u,
          }
          r.push({
            startLineNumber:
              e.startLineNumber +
              t.startLineNumber -
              1 -
              ("pre-change" === n ? o : 0),
            startColumn: e.startColumn,
            endLineNumber:
              e.endLineNumber +
              t.startLineNumber -
              1 -
              ("pre-change" === n ? o : 0),
            endColumn: e.endColumn,
          }),
            (l = u),
            (a = i)
        }
        !0 !== s.removed && ((l = u), (a = i))
      }
      return { greenRanges: r, redRanges: [] }
    }),
    (exports.computeDeletedAddedRanges = async function ({
      past: e,
      current: t,
      diffingProvider: n,
    }) {
      const s = await new Promise((s, i) => {
        void 0 !== n
          ? n.diffLines(t, e, void 0, void 0).then((e) => s(e))
          : (0, r.diffLines)(e, t, {
              timeout: 2e3,
              callback: (e, t) => {
                void 0 !== t ? s(t) : i(new Error("Timeout exceeded"))
              },
            })
      })
      let i = 1 / 0,
        o = -1 / 0,
        a = -1 / 0,
        l = 1
      s.forEach((e, t) => {
        ;(!0 !== e.added && !0 !== e.removed) ||
          ((i = Math.min(i, l)),
          "" !== e.value.trim() && (o = Math.max(o, l + e.count - 1)),
          (a = Math.max(a, l + e.count - 1))),
          (l += e.count)
      }),
        (i = Math.max(0, i)),
        o === -1 / 0 && (o = a)
      let u = i - 1,
        c = i - 1,
        A = 1 / 0,
        m = -1 / 0,
        d = 1 / 0,
        p = -1 / 0
      for (let e = i; e <= o; e++) {
        l = 1
        const t = s.find((t, n) => {
          const r = l + t.count,
            s = l <= e && e < r
          return (l = r), s
        })
        void 0 !== t &&
          (!0 === t.added
            ? (c++, (A = Math.min(A, c)), (m = Math.max(m, c)))
            : !0 === t.removed
              ? (u++, (d = Math.min(d, u)), (p = Math.max(p, u)))
              : (u++, c++))
      }
      if (A !== 1 / 0 || d !== 1 / 0)
        return (
          A === 1 / 0 && ((A = d), (m = d)),
          d === 1 / 0 && ((d = A), (p = m)),
          {
            oldRange: {
              startLineNumber: d,
              endLineNumberExclusive: p + 1,
            },
            newRange: {
              startLineNumber: A,
              endLineNumberExclusive: m + 1,
            },
          }
        )
    }),
    (exports.changeModelWindowInPlace = u),
    (exports.changeModelWindowInPlaceAndComputeUndoChange = function (e, t) {
      if (t.range.startLineNumber < e.startLineNumber)
        throw new Error("change is not contained in model window")
      if (
        t.range.endLineNumber > e.endLineNumber &&
        (t.range.endLineNumber !== e.endLineNumber + 1 ||
          1 !== t.range.endColumn ||
          !t.text.endsWith("\n"))
      )
        throw new Error("change is not contained in model window")
      const n = {
        range: A(t),
        text: c(e.lines, {
          startLineNumber:
            t.range.startLineNumber - e.startLineNumber + 1,
          startColumn: t.range.startColumn,
          endLineNumber: t.range.endLineNumber - e.startLineNumber + 1,
          endColumn: t.range.endColumn,
        }),
      }
      return u(e, t), n
    }),
    (exports.getValueInRangeLines = c),
    (exports.areChangesEqual = function (e, t) {
      return (
        e.range.startLineNumber === t.range.startLineNumber &&
        e.range.startColumn === t.range.startColumn &&
        e.range.endLineNumber === t.range.endLineNumber &&
        e.range.endColumn === t.range.endColumn &&
        e.text === t.text
      )
    }),
    (exports.isRangeEmpty = function (e) {
      return (
        e.startLineNumber === e.endLineNumber &&
        e.startColumn === e.endColumn
      )
    }),
    (exports.rangeForUndoChange = A),
    (exports.numIntersectingLines = function (e, t) {
      const n = (function (e, t) {
        const n = Math.max(e.startLineNumber, t.startLineNumber)
        let r = Math.min(
          e.endLineNumberExclusive,
          t.endLineNumberExclusive,
        )
        return (
          n > r && (r = n),
          { startLineNumber: n, endLineNumberExclusive: r }
        )
      })(e, t)
      return n.endLineNumberExclusive - n.startLineNumber
    })
}
