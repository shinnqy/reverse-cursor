// @ts-check

export function createCppTypeService(params) {
  const { Re, V, Ve, __decorate, __param, cppEventLoggerService, Ob } = params;

  var cppTypeService = Re("cppTypeService"),
    CppTypeService = class extends V {
      constructor(e) {
        super(),
          (this.f = e),
          (this.a = new FMs(100)),
          (this.b = new FMs(100)),
          (this.c = { enabledForPathExtensions: [], importantLspExtensions: [] }),
          (this._cppEventLogger = e)
      }
      setSuggestionHintsConfig(e) {
        e === void 0
          ? (this.c = {
              enabledForPathExtensions: [],
              importantLspExtensions: [],
            })
          : (this.c = e)
      }
      onChangedParameterHints(e, t) {
        const s =
          t?.signatures
            .filter((n) => n.label.length < 5e3)
            .slice(0, 2)
            .map((n) => ({
              label: n.label,
              documentation:
                typeof n.documentation == "string"
                  ? n.documentation
                  : n.documentation?.value,
            })) ?? []
        this.a.add(e.getId(), s)
      }
      getRelevantParameterHints(e) {
        const t = this.a.get(e.getId())
        return t === void 0 ? [] : t
      }
      g(e, t) {
        const s = this.b.remove(t.id)
        t !== null &&
          s &&
          this._cppEventLogger.recordLspSuggestionEvent(t, e.getId(), [], void 0)
      }
      h(e, t) {
        const s = []
        let n = 0
        for (const r of e) {
          if (n + r.length > t) break
          s.push(r), (n += r.length)
        }
        return s
      }
      j(e) {
        const t = e.textLabel
        return !t.startsWith("__") && !t.endsWith("__")
      }
      m(e, t) {
        const s = e
          .filter(
            (n) =>
              n.extensionId === void 0 ||
              n.extensionId.value !== "vscode.typescript",
          )
          .filter(this.j)
        return t ? s.filter((n) => this.t(n)) : s
      }
      n(e, t, s, n, r) {
        const o = this.m(s.items, n),
          a = this.h(
            o.map((l) => l.textLabel),
            1e4,
          )
        if (a.length === 0) {
          this.g(e, t)
          return
        }
        t !== null &&
          this._cppEventLogger.recordLspSuggestionEvent(t, e.getId(), a, void 0),
          this.b.add(t.id, {
            suggestions: a,
            leadingLineContent: s.lineContext.leadingLineContent,
          }),
          a.length > 0 && r?.()
      }
      q(e) {
        const t = e.lineContext.leadingLineContent,
          s = e.items.slice(0, 5).map((a) => a.textLabel)
        if (t.endsWith("console.") && s.some((a) => a === "Console")) return !0
        const n = s.slice(0, 5).toString(),
          r = [
            "at,charAt,charCodeAt,codePointAt",
            "at,concat,copyWithin,entries",
            "apply,bind,call,toString",
            "apply,arguments,bind,call",
            "capitalize,casefold,center,count",
          ],
          o = ["toExponential,toFixed,toLocaleString,toPrecision,toString"]
        return !!(r.some((a) => n.includes(a)) || o.some((a) => n === a))
      }
      r(e) {
        const t = Ob(e)
        return t === void 0 ? !1 : this.c.enabledForPathExtensions.includes(t)
      }
      registerCancelListener(e, t, s, n) {
        return n.model.onDidCancel((r) => {
          this.r(s) && this.g(e, t)
        })
      }
      t(e) {
        return !!(
          e.extensionId?.value &&
          this.c.importantLspExtensions.includes(e.extensionId.value)
        )
      }
      u(e, t, s, n) {
        if (this.q(s)) {
          this.g(e, t)
          return
        }
        this.n(e, t, s, !1, n)
      }
      w(e, t, s) {
        s.items.length < 20 ? this.n(e, t, s, !0, null) : this.g(e, t)
      }
      registerSuggestListener(e, t, s, n, r) {
        return n.model.onDidSuggest((o) => {
          if (!this.r(s)) return
          const a = o.completionModel,
            l = o.triggerOptions.triggerKind === 1
          if ((a.items.length === 0 && this.g(e, t), l)) {
            this.u(e, t, a, r)
            return
          }
          if (a.items.length > 100) {
            this.g(e, t)
            return
          }
          const c = this.b.get(t.id)
          if (c === void 0) {
            this.w(e, t, a)
            return
          }
          if (o.triggerOptions.auto !== !0 || o.triggerOptions.refilter !== !0) {
            this.g(e, t)
            return
          }
          const { leadingLineContent: h } = c,
            u = a.lineContext.leadingLineContent
          u.startsWith(h) || h.startsWith(u)
            ? this.n(e, t, a, !1, null)
            : this.g(e, t)
        })
      }
      getRelevantSuggestions(e, t) {
        if (!this.r(t)) return { suggestions: [] }
        const s = this.b.get(e.id)
        return s === void 0
          ? { suggestions: [] }
          : { suggestions: s.suggestions.map((n) => ({ label: n })) }
      }
    }
  CppTypeService = __decorate([__param(0, cppEventLoggerService)], CppTypeService)
  var FMs = class {
    constructor(i) {
      ;(this.a = []), (this.b = i)
    }
    add(i, e) {
      this.remove(i),
        this.a.length >= this.b && this.a.shift(),
        this.a.push({ key: i, value: e })
    }
    get(i) {
      return this.a.find((t) => t.key === i)?.value
    }
    remove(i) {
      const e = this.a.findIndex((t) => t.key === i)
      return e !== -1 ? (this.a.splice(e, 1), !0) : !1
    }
    clear() {
      this.a.length = 0
    }
  }
  Ve(cppTypeService, CppTypeService, 1);

  return {
    cppTypeService
  }
}
