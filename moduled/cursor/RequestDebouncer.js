// @ts-check

export function createRequestDebouncer(params) {
  const { rt } = params;

  var RequestDebouncer = class {
    constructor(i, e, t) {
      ;(this.b = i), (this.c = e), (this.d = t), (this.a = [])
    }
    setDebouncingDurations({
      clientDebounceDuration: i,
      totalDebounceDuration: e,
    }) {
      ;(this.b = i), (this.c = e)
    }
    pruneOldRequests() {
      const i = performance.now() + performance.timeOrigin,
        e = [...this.a.entries()].reverse()
      for (const [t, s] of e) i - s.startTime > this.d && this.a.splice(t, 1)
    }
    runRequest() {
      this.pruneOldRequests()
      const i = performance.now() + performance.timeOrigin,
        e = rt(),
        t = this.a.filter((n) => n.startTime + this.c > i).map((n) => n.requestId)
      this.a.push({ requestId: e, startTime: i })
      const s = new AbortController()
      return {
        generationUUID: e,
        startTime: i,
        abortController: s,
        requestIdsToCancel: t,
      }
    }
    async shouldDebounce(i, e = !1) {
      const t = [...this.a]
      let s = -1
      for (const [l, c] of t.entries()) c.requestId === i && (s = l)
      if (s === -1) return !1
      const n = performance.now() + performance.timeOrigin,
        r = t[s],
        o = n - r.startTime
      return o < this.b && !e
        ? (await new Promise((l) => setTimeout(l, this.b - o)),
          await this.shouldDebounce(i, !0))
        : s === t.length - 1
          ? !1
          : t[s + 1].startTime - r.startTime < this.b
    }
  }

  return {
    RequestDebouncer
  }
}
