// @ts-check

export function createCppTypeService(params) {
  const { Re, V, Ve, __decorate, __param, cppEventLoggerService, Ob } = params;

  var cppTypeService = Re("cppTypeService"),
    CppTypeService = class extends V {
      constructor(e) {
        super(),
          (this.f = e),
          (this.a = new Cache(100)),
          (this.b = new Cache(100)), (this.cppEventLoggerService = this.b),
          (this.c = { enabledForPathExtensions: [], importantLspExtensions: [] }),
          (this._cppEventLogger = e)
      }
      setSuggestionHintsConfig(e) {
        e === undefined
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
        return t === undefined ? [] : t
      }
      g(e, t) {
        const s = this.cppEventLoggerService.remove(t.id)
        t !== null &&
          s &&
          this._cppEventLogger.recordLspSuggestionEvent(t, e.getId(), [], undefined)
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
              n.extensionId === undefined ||
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
          this._cppEventLogger.recordLspSuggestionEvent(t, e.getId(), a, undefined),
          this.cppEventLoggerService.add(t.id, {
            suggestions: a,
            leadingLineContent: s.lineContext.leadingLineContent,
          }),
          a.length > 0 && r?.()
      }
      q(e) {
        const t = e.lineContext.leadingLineContent,
          s = e.items.slice(0, 5).map((a) => a.textLabel)
        if (t.endsWith("console.") && s.some((a) => a === "Console")) return true
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
        return t === undefined ? false : this.c.enabledForPathExtensions.includes(t)
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
        this.n(e, t, s, false, n)
      }
      w(e, t, s) {
        s.items.length < 20 ? this.n(e, t, s, true, null) : this.g(e, t)
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
          const c = this.cppEventLoggerService.get(t.id)
          if (c === undefined) {
            this.w(e, t, a)
            return
          }
          if (o.triggerOptions.auto !== true || o.triggerOptions.refilter !== true) {
            this.g(e, t)
            return
          }
          const { leadingLineContent: h } = c,
            u = a.lineContext.leadingLineContent
          u.startsWith(h) || h.startsWith(u)
            ? this.n(e, t, a, false, null)
            : this.g(e, t)
        })
      }
      getRelevantSuggestions(e, t) {
        if (!this.r(t)) return { suggestions: [] }
        const s = this.cppEventLoggerService.get(e.id)
        return s === undefined
          ? { suggestions: [] }
          : { suggestions: s.suggestions.map((n) => ({ label: n })) }
      }
    }
  CppTypeService = __decorate([__param(0, cppEventLoggerService)], CppTypeService)
  var Cache = class {
    constructor(capacity) {
      ;(this.items = []), (this.capacity = capacity)
    }
    add(key, value) {
      this.remove(key),
        this.items.length >= this.capacity && this.items.shift(),
        this.items.push({ key, value })
    }
    get(key) {
      return this.items.find((item) => item.key === key)?.value
    }
    remove(key) {
      const index = this.items.findIndex((item) => item.key === key)
      return index !== -1 ? (this.items.splice(index, 1), true) : false
    }
    clear() {
      this.items.length = 0
    }
  }
  Ve(cppTypeService, CppTypeService, 1);

  return {
    cppTypeService
  }
}
