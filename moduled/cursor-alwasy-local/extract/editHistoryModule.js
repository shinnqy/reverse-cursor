// @ts-check

module.exports = {
  createEditHistoryModule,
}

function createEditHistoryModule(e, t, n) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getJoinedDiffRange =
      t.computePatchString =
      t.EditHistoryFormatter =
        void 0)
  const r = n(7520),
    s = n(1242),
    i = n(3282),
    o = n(1490),
    a = n(65);

  class l {
    constructor(e) {
      ;(this.diffHistorySizeLimit = 90),
        (this.patchStringSizeLimit = 40),
        (this.whitespacePatchStringSizeLimit = 5),
        (this.keepRecentModelHashCount = 20),
        (this.keepRecentlyRejectedEditModelHashCount = 5),
        (this.timeoutCount = 0),
        (this.useFullFileDiffsTilUnmerged = !1),
        (this.includeUnchangedLines = !0),
        (this.previousCompiledGlobalDiffTrajectories = []),
        (this.latestCompiledGlobalDiffTrajectoriesVersion = void 0),
        (this.version = void 0),
        (this._diffStateByIdentifier = {}),
        (this.latestRangeByIdentifier = {}),
        (this.processModelChangeLoopRunning = !1),
        (this.changesToProcessArgs = []),
        (this.MAX_LOOP_DURATION_MS = 5e3),
        (this.lock = new o.Lock()),
        (this.numModelChangesToSave = e.numModelChangesToSave),
        (this.diffHistorySizeLimit =
          e.diffHistorySizeLimit ?? this.diffHistorySizeLimit),
        (this.patchStringSizeLimit =
          e.patchStringSizeLimit ?? this.patchStringSizeLimit),
        (this.recentModelHashes = e.skipModelHash ? void 0 : {}),
        (this.recentlyRejectedEditModelHashes = e.skipModelHash
          ? void 0
          : {}),
        (this.saveOneBeforeLastModelValue =
          e.saveOneBeforeLastModelValue ?? !1),
        (this.keepWhitespaceOnlyChanges =
          e.keepWhitespaceOnlyChanges ?? !1),
        (this.alwaysUseFullFileDiff = e.alwaysUseFullFileDiff ?? !1),
        (this.gitDiffExtraContextRadius =
          e.gitDiffExtraContextRadius ?? 0),
        (this.mergingBehavior = e.mergingBehavior),
        (this.changeIndex = 0),
        (this.includeUnchangedLines = e.includeUnchangedLines ?? !0),
        (this.modelLockManager = new o.ModelLockManager(10))
    }
    async holdFileLock(e) {
      return this.modelLockManager.acquireLock(e)
    }
    initModel(e, t, n) {
      var r
      void 0 !== this.recentModelHashes &&
        ((r = this.recentModelHashes)[e] ?? (r[e] = []),
        this.recentModelHashes[e].push((0, a.cppModelHash)(t, 1)),
        (this.recentModelHashes[e] = this.recentModelHashes[e].slice(
          -this.keepRecentModelHashCount,
        ))),
        (this._diffStateByIdentifier[e] = {
          oneBeforeLastModel: this.saveOneBeforeLastModelValue
            ? t
            : void 0,
          oldestModel: t,
          newModel: t,
          diffHistory: [],
          lastEditTime: ++this.changeIndex,
          modelVersion: n,
        })
    }
    getOneBeforeLastModelValue(e) {
      return this._diffStateByIdentifier[e]?.oneBeforeLastModel
    }
    getModelValue(e) {
      return this._diffStateByIdentifier[e]?.newModel
    }
    getModelVersion(e) {
      return this._diffStateByIdentifier[e]?.modelVersion
    }
    updateModelVersion(e, t) {
      const n = this._diffStateByIdentifier[e]
      void 0 !== n && (n.modelVersion = t)
    }
    getTimeoutCount() {
      return this.timeoutCount
    }
    filterPatch(e) {
      const t = e?.string.split("\n").length ?? 0
      return (
        void 0 !== e &&
        "" !== e.string.trim() &&
        t <= this.patchStringSizeLimit &&
        (!e.isWhitespaceChange ||
          t <= this.whitespacePatchStringSizeLimit)
      )
    }
    closeCurrentPatch() {
      return (
        this.changeIndex++,
        (this._diffStateByIdentifier["<close-patch>"] = {
          oneBeforeLastModel: "",
          oldestModel: "",
          newModel: "",
          diffHistory: [],
          lastEditTime: this.changeIndex,
        }),
        this.changeIndex
      )
    }
    async compileGlobalDiffTrajectories(e, t) {
      if (
        void 0 !== this.version &&
        this.latestCompiledGlobalDiffTrajectoriesVersion === this.version
      )
        return this.previousCompiledGlobalDiffTrajectories
      const n = e ?? {}
      let s = []
      for (const e in this._diffStateByIdentifier) {
        const n = this._diffStateByIdentifier[e].diffHistory
        s = s.concat(n.map((t) => ({ ...t, modelIdentifier: e })))
        const r =
            this._diffStateByIdentifier[e].addedRangeInNewModelOneIndexed,
          i = this._diffStateByIdentifier[e].lastEditTime
        if (void 0 !== r && void 0 !== i)
          try {
            const n = await this.getPatchOfActiveDiff(e, t, !0)
            s.push({ modelIdentifier: e, lastEditTime: i, patch: n })
          } catch (t) {
            if (
              (this.updateOldestModel(
                e,
                this._diffStateByIdentifier[e].newModel,
              ),
              !(
                t instanceof Error &&
                t.message.toLowerCase().includes("timeout")
              ))
            )
              throw t
            this.timeoutCount++
          }
      }
      s.sort((e, t) => e.lastEditTime - t.lastEditTime)
      const i = s
        .filter((e) => this.filterPatch(e.patch))
        .slice(-this.diffHistorySizeLimit)
        .map(
          (e, t) =>
            new r.CppFileDiffHistory({
              fileName: n[e.modelIdentifier] ?? e.modelIdentifier,
              diffHistory: [e.patch.string],
              diffHistoryTimestamps: [],
            }),
        )
        .reduce((e, t) => {
          if (0 === e.length) return [t]
          const n = e[e.length - 1]
          return (
            n.fileName === t.fileName
              ? (n.diffHistory.push(...t.diffHistory),
                n.diffHistoryTimestamps.push(...t.diffHistoryTimestamps))
              : e.push(t),
            e
          )
        }, [])
      return (
        (this.latestCompiledGlobalDiffTrajectoriesVersion = this.version),
        (this.previousCompiledGlobalDiffTrajectories = i),
        i
      )
    }
    isRevertingToRecentModel(e, t) {
      if (null == this.recentModelHashes)
        throw new Error("Model history tracking is disabled")
      return (
        this.recentModelHashes[e]?.includes((0, a.cppModelHash)(t, 1)) ??
        !1
      )
    }
    isSuggestingRecentlyRejectedEdit(e, t, n, r) {
      if (null == this.recentlyRejectedEditModelHashes)
        throw new Error("Model history tracking is disabled")
      const s = this.recentlyRejectedEditModelHashes[e] ?? [],
        i = (0, a.cppModelHash)(t, 1),
        o = s.find((e) => e.modelHash === i)
      return (
        (void 0 !== o?.numberOfTimesSoftRejected &&
          o.numberOfTimesSoftRejected >= n) ||
        (void 0 !== o?.numberOfTimesHardRejected &&
          o.numberOfTimesHardRejected >= r)
      )
    }
    recordRejectedEdit(e, t, n) {
      var r
      if (null == this.recentlyRejectedEditModelHashes) return
      ;(r = this.recentlyRejectedEditModelHashes)[e] ?? (r[e] = [])
      const s = (0, a.cppModelHash)(t, 1),
        i = this.recentlyRejectedEditModelHashes[e].find(
          (e) => e.modelHash === s,
        )
      i
        ? (i.numberOfTimesSoftRejected++,
          n || i.numberOfTimesHardRejected++)
        : this.recentlyRejectedEditModelHashes[e].push({
            modelHash: s,
            numberOfTimesSoftRejected: 1,
            numberOfTimesHardRejected: n ? 0 : 1,
          }),
        this.recentlyRejectedEditModelHashes[e].length >
          this.keepRecentlyRejectedEditModelHashCount &&
          this.recentlyRejectedEditModelHashes[e].shift()
    }
    async processModelChangesLoopWithTimeout() {
      if (this.processModelChangeLoopRunning) return
      let e
      const t = new Promise((t) => {
        e = setTimeout(() => {
          console.warn("processModelChangesLoop timed out"), t()
        }, this.MAX_LOOP_DURATION_MS)
      })
      try {
        ;(this.processModelChangeLoopRunning = !0),
          await Promise.race([
            this.processModelChangesLoop().then(() => clearTimeout(e)),
            t,
          ])
      } catch (e) {
        console.error("Error in processModelChangesLoop:", e)
      } finally {
        this.processModelChangeLoopRunning = !1
      }
    }
    async processModelChangesLoop() {
      for (; this.changesToProcessArgs.length > 0; ) {
        const e = this.changesToProcessArgs.shift()
        if (void 0 === e) break
        const {
          useFullFileDiffForThisCall: t,
          uniqueModelIdentifier: n,
          newModelValue: r,
          addedRangeInNewModelOneIndexed: s,
          deletedRangeInOldModelOneIndexed: i,
        } = e
        if (
          (t && (this.useFullFileDiffsTilUnmerged = !0),
          void 0 === this._diffStateByIdentifier[n])
        )
          return void this.initModel(n, r)
        const {
          addedRangeInNewModelOneIndexed: o,
          newModel: l,
          lastEditTime: u,
        } = this._diffStateByIdentifier[n]
        if (void 0 === o || void 0 === u)
          t || (this.useFullFileDiffsTilUnmerged = !1),
            (this._diffStateByIdentifier[
              n
            ].addedRangeInNewModelOneIndexed = s),
            (this._diffStateByIdentifier[n].rangesOfAccumulatedChanges = {
              currentRange: s,
              pastRange: i,
            })
        else {
          const e = this.shouldMerge({
              lastDiffRange: o,
              replacedChangeRange: i,
              uniqueModelIdentifier: n,
            }),
            r = this._diffStateByIdentifier[n].rangesOfAccumulatedChanges
          if (e && this.newestModelIdentifier() === n) {
            const { startLineNumber: e, endLineNumberExclusive: t } = (0,
            a.applyChangeToRange)(o, i, s)
            if (
              ((this._diffStateByIdentifier[
                n
              ].addedRangeInNewModelOneIndexed = {
                startLineNumber: e,
                endLineNumberExclusive: t,
              }),
              void 0 === r)
            );
            else {
              const e = c({
                firstAddedRange: r.currentRange,
                firstRemovedRange: r.pastRange,
                secondAddedRange: s,
                secondRemovedRange: i,
              })
              this._diffStateByIdentifier[n].rangesOfAccumulatedChanges =
                e
            }
          } else {
            try {
              const e = await this.getPatchOfActiveDiff(n, t, !1)
              this._diffStateByIdentifier[n].diffHistory.push({
                patch: e,
                lastEditTime: u,
              }),
                this.cleanDiffTrajectories()
            } catch (e) {
              if (
                !(
                  e instanceof Error &&
                  e.message.toLowerCase().includes("timeout")
                )
              )
                throw e
              this.timeoutCount++
            }
            this.updateOldestModel(n, l),
              (this._diffStateByIdentifier[
                n
              ].addedRangeInNewModelOneIndexed = s),
              t || (this.useFullFileDiffsTilUnmerged = !1),
              (this._diffStateByIdentifier[n].rangesOfAccumulatedChanges =
                { currentRange: s, pastRange: i })
          }
        }
        ;(this._diffStateByIdentifier[n].lastEditTime = ++this
          .changeIndex),
          this.updateNewModel(n, r),
          e.callback && e.callback()
      }
    }
    async acquireLock() {
      return this.lock.acquire()
    }
    async processModelChange(e) {
      var t, n
      this.changesToProcessArgs.push(e),
        void 0 !== this.recentModelHashes &&
          ((t = this.recentModelHashes)[(n = e.uniqueModelIdentifier)] ??
            (t[n] = []),
          this.recentModelHashes[e.uniqueModelIdentifier].push(
            (0, a.cppModelHash)(e.newModelValue, 1),
          ),
          (this.recentModelHashes[e.uniqueModelIdentifier] =
            this.recentModelHashes[e.uniqueModelIdentifier].slice(
              -this.keepRecentModelHashCount,
            ))),
        await this.processModelChangesLoopWithTimeout()
    }
    removeOldestDiffTrajectory() {
      let e = 1 / 0,
        t = null
      for (const n in this._diffStateByIdentifier) {
        const r = this._diffStateByIdentifier[n].diffHistory
        if (r.length > 0) {
          const s = r[0].lastEditTime
          s < e && ((e = s), (t = n))
        }
      }
      null !== t && this._diffStateByIdentifier[t].diffHistory.shift()
    }
    isEmptyHistory() {
      for (const e in this._diffStateByIdentifier)
        if (this._diffStateByIdentifier[e].diffHistory.length > 0)
          return !1
      return !0
    }
    copyAtPointInTime(e) {
      const t = new l({
        numModelChangesToSave: this.numModelChangesToSave,
        diffHistorySizeLimit: this.diffHistorySizeLimit,
        patchStringSizeLimit: this.patchStringSizeLimit,
        gitDiffExtraContextRadius: this.gitDiffExtraContextRadius,
      })
      for (const n in this._diffStateByIdentifier)
        if (e) {
          const e = this._diffStateByIdentifier[n].newModel
          t.initModel(n, e)
        } else {
          const e = this._diffStateByIdentifier[n],
            r = {
              ...e,
              oneBeforeLastModel: e.oneBeforeLastModel
                ? e.oneBeforeLastModel
                : void 0,
              newModel: e.newModel,
              oldestModel: e.oldestModel,
              rangesOfAccumulatedChanges: e.rangesOfAccumulatedChanges
                ? {
                    currentRange:
                      e.rangesOfAccumulatedChanges.currentRange,
                    pastRange: e.rangesOfAccumulatedChanges.pastRange,
                  }
                : void 0,
              addedRangeInNewModelOneIndexed:
                e.addedRangeInNewModelOneIndexed
                  ? { ...e.addedRangeInNewModelOneIndexed }
                  : void 0,
              cachedPatchString: e.cachedPatchString
                ? { ...e.cachedPatchString }
                : void 0,
              lastEditTime: e.lastEditTime,
              modelVersion: e.modelVersion,
              diffHistory: e.diffHistory.map((e) => ({ ...e })),
            }
          ;(t._diffStateByIdentifier[n] = r),
            (t.latestRangeByIdentifier[n] =
              this.latestRangeByIdentifier[n])
        }
      return t
    }
    rangesIntersect(e, t) {
      return (
        e.startLineNumber <= t.endLineNumberExclusive &&
        e.endLineNumberExclusive >= t.startLineNumber
      )
    }
    shouldMerge({
      lastDiffRange: e,
      replacedChangeRange: t,
      uniqueModelIdentifier: n,
    }) {
      const r =
          t.startLineNumber === e.startLineNumber &&
          t.endLineNumberExclusive === e.endLineNumberExclusive,
        s = t.endLineNumberExclusive - t.startLineNumber == 1,
        o = this.mergingBehavior
      if (void 0 === o || "single line" === o.type)
        return (s && e.startLineNumber === t.endLineNumberExclusive) || r
      if ("whitespace compatible" === o.type)
        return (
          r ||
          (s && e.startLineNumber === t.endLineNumberExclusive) ||
          (s && e.endLineNumberExclusive == t.startLineNumber) ||
          (t.endLineNumberExclusive - t.startLineNumber <= 2 &&
            e.endLineNumberExclusive == t.endLineNumberExclusive)
        )
      if ("merged diff history" === o.type) {
        const r =
            this.latestRangeByIdentifier[n] ??
            new i.Range(
              e.startLineNumber,
              0,
              e.endLineNumberExclusive - 1,
              1e4,
            ),
          s = new i.Range(
            t.startLineNumber,
            0,
            t.endLineNumberExclusive - 1,
            1e4,
          )
        if (
          i.Range.getRangeExpandedByLines(
            r,
            o.radius,
            o.radius,
          ).getOverlap(s) !== i.OverlapBehaviour.None
        ) {
          const e = i.Range.merge(r, s)
          return (this.latestRangeByIdentifier[n] = e), !0
        }
        return (this.latestRangeByIdentifier[n] = s), !1
      }
      {
        const n = this.rangesIntersect(e, t),
          r = Math.min(
            Math.abs(e.startLineNumber - t.startLineNumber),
            Math.abs(e.endLineNumberExclusive - t.endLineNumberExclusive),
            Math.abs(e.startLineNumber - t.endLineNumberExclusive),
            Math.abs(e.endLineNumberExclusive - t.startLineNumber),
          ),
          s = n || r <= o.radius
        if ("include if in radius with upper limit" === o.type) {
          const n =
              Math.max(
                e.endLineNumberExclusive,
                t.endLineNumberExclusive,
              ) - Math.min(e.startLineNumber, t.startLineNumber),
            r = t.endLineNumberExclusive - t.startLineNumber
          return s && (n === r || n <= o.limit)
        }
        return s
      }
    }
    cleanDiffTrajectories() {
      let e = 0
      for (const t in this._diffStateByIdentifier)
        (this._diffStateByIdentifier[t].diffHistory =
          this._diffStateByIdentifier[t].diffHistory.filter((e) =>
            this.filterPatch(e.patch),
          )),
          (e += this._diffStateByIdentifier[t].diffHistory.length)
      for (let t = e; t > this.diffHistorySizeLimit; t--)
        this.removeOldestDiffTrajectory()
    }
    async getPatchOfActiveDiff(e, t, n) {
      const {
        oldestModel: r,
        newModel: s,
        cachedPatchString: i,
        rangesOfAccumulatedChanges: o,
      } = this._diffStateByIdentifier[e]
      if (void 0 !== i) return i
      const a =
          this.alwaysUseFullFileDiff ||
          t ||
          this.useFullFileDiffsTilUnmerged
            ? void 0
            : o,
        l = await u({
          past: r,
          current: s,
          radius: this.gitDiffExtraContextRadius,
          keepWhitespaceChanges: this.keepWhitespaceOnlyChanges && n,
          rangesOfPastAndCurrent: a,
          includeUnchangedLines: this.includeUnchangedLines,
        })
      return (
        (!1 !== n && !1 !== l?.isWhitespaceChange) ||
          (this._diffStateByIdentifier[e].cachedPatchString = l),
        l
      )
    }
    newestModelIdentifier() {
      let e = null,
        t = -1 / 0
      for (const n in this._diffStateByIdentifier) {
        const r = this._diffStateByIdentifier[n].lastEditTime
        r > t && ((e = n), (t = r))
      }
      return e
    }
    updateNewModel(e, t) {
      this.saveOneBeforeLastModelValue &&
        (this._diffStateByIdentifier[e].oneBeforeLastModel =
          this._diffStateByIdentifier[e].newModel),
        (this._diffStateByIdentifier[e].newModel = t),
        delete this._diffStateByIdentifier[e].cachedPatchString
    }
    updateOldestModel(e, t) {
      ;(this._diffStateByIdentifier[e].oldestModel = t),
        delete this._diffStateByIdentifier[e].cachedPatchString
    }
    setKeepWhitespaceOnlyChanges(e) {
      this.keepWhitespaceOnlyChanges = e
    }
    setIncludeUnchangedLines(e) {
      this.includeUnchangedLines = e
    }
    setMergingBehavior(e) {
      this.mergingBehavior = e
    }
    compareEditTimes(e) {
      if (e.firstModelIdentifier === e.secondModelIdentifier) return 0
      const t =
          this._diffStateByIdentifier[e.firstModelIdentifier]
            ?.lastEditTime,
        n =
          this._diffStateByIdentifier[e.secondModelIdentifier]
            ?.lastEditTime
      if (void 0 === t || void 0 === n)
        throw new Error(
          `Edit time is undefined for model identifier: ${e.firstModelIdentifier} or ${e.secondModelIdentifier}`,
        )
      return t - n
    }
  }
  async function u({
    past: e,
    current: t,
    radius: n,
    keepWhitespaceChanges: r,
    rangesOfPastAndCurrent: i,
    includeUnchangedLines: o = !0,
    timeout: a = 2e3,
  }) {
    const {
      past: l,
      current: u,
      currentOffsetLineNumber: c,
      pastOffsetLineNumber: A,
    } = (function ({
      origPast: e,
      origCurrent: t,
      rangesOfPastAndCurrent: n,
    }) {
      if (void 0 === n)
        return {
          past: e,
          current: t,
          currentOffsetLineNumber: 0,
          pastOffsetLineNumber: 0,
        }
      const { pastRange: r, currentRange: s } = n,
        i = { ...s },
        o = { ...r },
        a = t.split("\n"),
        l = e.split("\n")
      i.endLineNumberExclusive < a.length &&
        o.endLineNumberExclusive < l.length &&
        ((i.endLineNumberExclusive += 1),
        (o.endLineNumberExclusive += 1)),
        i.startLineNumber > 1 &&
          o.startLineNumber > 1 &&
          ((i.startLineNumber -= 1), (o.startLineNumber -= 1))
      const u = Math.max(
          Math.min(i.startLineNumber - 1, o.startLineNumber - 1, 25),
          0,
        ),
        c = Math.max(
          Math.min(
            a.length + 1 - i.endLineNumberExclusive,
            l.length + 1 - o.endLineNumberExclusive,
            25,
          ),
          0,
        )
      ;(i.startLineNumber -= u),
        (o.startLineNumber -= u),
        (i.endLineNumberExclusive += c),
        (o.endLineNumberExclusive += c)
      const A = a
        .slice(i.startLineNumber - 1, i.endLineNumberExclusive - 1)
        .join("\n")
      return {
        past: l
          .slice(o.startLineNumber - 1, o.endLineNumberExclusive - 1)
          .join("\n"),
        current: A,
        currentOffsetLineNumber: i.startLineNumber - 1,
        pastOffsetLineNumber: o.startLineNumber - 1,
      }
    })({ origPast: e, origCurrent: t, rangesOfPastAndCurrent: i })
    let m
    m =
      l.split("\n").length > 100 || u.split("\n").length > 100
        ? await new Promise((e, t) => {
            ;(0, s.diffLines)(l, u, {
              callback: (n, r) => {
                void 0 !== r ? e(r) : t(new Error("Timeout exceeded"))
              },
              timeout: a,
            })
          })
        : (0, s.diffLines)(l, u)
    let d = 1 / 0,
      p = -1 / 0,
      g = -1 / 0,
      h = 1
    if (
      (m.forEach((e) => {
        ;(!0 !== e.added && !0 !== e.removed) ||
          ((d = Math.min(d, h)),
          "" !== e.value.trim() && (p = Math.max(p, h + e.count - 1)),
          (g = Math.max(g, h + e.count - 1))),
          (h += e.count)
      }),
      (d = Math.max(0, d - n)),
      p === -1 / 0 && (p = g),
      (p += n),
      d === 1 / 0 || p === -1 / 0)
    )
      return
    const f = l.replace(/\s/g, "") === u.replace(/\s/g, "")
    if (f && !0 !== r) return
    let E = "",
      C = d - 1,
      y = d - 1
    for (let e = d; e <= p; e++) {
      h = 1
      const t = m.find((t, n) => {
        const r = h + t.count,
          s = h <= e && e < r
        return (h = r), s
      })
      if (void 0 !== t) {
        const n = e - (h - t.count)
        !0 === t.added
          ? (y++,
            (E +=
              `${(y + c).toString().padStart(0, " ")}+|` +
              t.value.split("\n")[n] +
              "\n"))
          : !0 === t.removed
            ? (C++,
              (E +=
                `${(C + A).toString().padStart(0, " ")}-|` +
                t.value.split("\n")[n] +
                "\n"))
            : o
              ? (C++,
                y++,
                (E +=
                  `${(y + c).toString().padStart(0, " ")} |` +
                  t.value.split("\n")[n] +
                  "\n"))
              : (C++, y++)
      }
    }
    return { string: E, isWhitespaceChange: f }
  }
  function c({
    firstAddedRange: e,
    secondAddedRange: t,
    firstRemovedRange: n,
    secondRemovedRange: r,
  }) {
    if (n.startLineNumber !== e.startLineNumber)
      throw new Error(
        "firstRemovedRange.startLineNumber !== firstAddedRange.startLineNumber",
      )
    if (r.startLineNumber !== t.startLineNumber)
      throw new Error(
        "secondRemovedRange.startLineNumber !== secondAddedRange.startLineNumber",
      )
    const s = Math.min(n.startLineNumber, r.startLineNumber),
      i = Math.max(
        0,
        r.endLineNumberExclusive - e.endLineNumberExclusive,
      ),
      o = {
        startLineNumber: s,
        endLineNumberExclusive: n.endLineNumberExclusive + i,
      },
      l = s,
      u = (0, a.numIntersectingLines)(r, { ...e, startLineNumber: 1 }),
      c = (0, a.numIntersectingLines)(t, { ...e, startLineNumber: 1 }) - u
    return {
      pastRange: o,
      currentRange: {
        startLineNumber: l,
        endLineNumberExclusive:
          Math.max(e.endLineNumberExclusive, t.endLineNumberExclusive) +
          c,
      },
    }
  }
  ;(t.EditHistoryFormatter = l),
    (t.computePatchString = u),
    (t.getJoinedDiffRange = c)
}
