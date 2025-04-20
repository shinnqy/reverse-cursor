// @ts-check

module.exports = {
  createEditHistoryModule,
}

function createEditHistoryModule(module, exports, require) {
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.getJoinedDiffRange =
      exports.computePatchString =
      exports.EditHistoryFormatter =
        void 0)
  const AIServerModule = require(7520),
    diffModule = require(1242),
    positionModule = require(3282),
    modelLockManagerModule = require(1490),
    diffProviderModule = require(65);

    class EditHistoryFormatter {
      constructor(options) {
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
          (this.lock = new modelLockManagerModule.Lock()),
          (this.numModelChangesToSave = options.numModelChangesToSave),
          (this.diffHistorySizeLimit =
            options.diffHistorySizeLimit ?? this.diffHistorySizeLimit),
          (this.patchStringSizeLimit =
            options.patchStringSizeLimit ?? this.patchStringSizeLimit),
          (this.recentModelHashes = options.skipModelHash ? void 0 : {}),
          (this.recentlyRejectedEditModelHashes = options.skipModelHash
            ? void 0
            : {}),
          (this.saveOneBeforeLastModelValue =
            options.saveOneBeforeLastModelValue ?? !1),
          (this.keepWhitespaceOnlyChanges =
            options.keepWhitespaceOnlyChanges ?? !1),
          (this.alwaysUseFullFileDiff = options.alwaysUseFullFileDiff ?? !1),
          (this.gitDiffExtraContextRadius =
            options.gitDiffExtraContextRadius ?? 0),
          (this.mergingBehavior = options.mergingBehavior),
          (this.changeIndex = 0),
          (this.includeUnchangedLines = options.includeUnchangedLines ?? !0),
          (this.modelLockManager = new modelLockManagerModule.ModelLockManager(10))
      }
      async holdFileLock(identifier) {
        return this.modelLockManager.acquireLock(identifier)
      }
      initModel(identifier, modelValue, modelVersion) {
        var recentModelHashes
        void 0 !== this.recentModelHashes &&
          ((recentModelHashes = this.recentModelHashes)[identifier] ?? (recentModelHashes[identifier] = []),
          this.recentModelHashes[identifier].push((0, diffProviderModule.cppModelHash)(modelValue, 1)),
          (this.recentModelHashes[identifier] = this.recentModelHashes[identifier].slice(
            -this.keepRecentModelHashCount,
          ))),
          (this._diffStateByIdentifier[identifier] = {
            oneBeforeLastModel: this.saveOneBeforeLastModelValue
              ? modelValue
              : void 0,
            oldestModel: modelValue,
            newModel: modelValue,
            diffHistory: [],
            lastEditTime: ++this.changeIndex,
            modelVersion: modelVersion,
          })
      }
      getOneBeforeLastModelValue(identifier) {
        return this._diffStateByIdentifier[identifier]?.oneBeforeLastModel
      }
      getModelValue(identifier) {
        return this._diffStateByIdentifier[identifier]?.newModel
      }
      getModelVersion(identifier) {
        return this._diffStateByIdentifier[identifier]?.modelVersion
      }
      updateModelVersion(identifier, modelVersion) {
        const diffState = this._diffStateByIdentifier[identifier]
        void 0 !== diffState && (diffState.modelVersion = modelVersion)
      }
      getTimeoutCount() {
        return this.timeoutCount
      }
      filterPatch(patch) {
        const patchLineCount = patch?.string.split("\n").length ?? 0
        return (
          void 0 !== patch &&
          "" !== patch.string.trim() &&
          patchLineCount <= this.patchStringSizeLimit &&
          (!patch.isWhitespaceChange ||
            patchLineCount <= this.whitespacePatchStringSizeLimit)
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
      // 编译全局差异轨迹
      async compileGlobalDiffTrajectories(fileNameMap, useFullFileDiff) {
        if (
          void 0 !== this.version &&
          this.latestCompiledGlobalDiffTrajectoriesVersion === this.version
        )
          return this.previousCompiledGlobalDiffTrajectories
        const fileNameMapping = fileNameMap ?? {}
        let diffTrajectories = []
        for (const identifier in this._diffStateByIdentifier) {
          const diffHistory = this._diffStateByIdentifier[identifier].diffHistory
          diffTrajectories = diffTrajectories.concat(diffHistory.map((t) => ({ ...t, modelIdentifier: identifier })))
          const addedRange =
              this._diffStateByIdentifier[identifier].addedRangeInNewModelOneIndexed,
            lastEditTime = this._diffStateByIdentifier[identifier].lastEditTime
          if (void 0 !== addedRange && void 0 !== lastEditTime)
            try {
              const patch = await this.getPatchOfActiveDiff(identifier, useFullFileDiff, !0)
              diffTrajectories.push({ modelIdentifier: identifier, lastEditTime: lastEditTime, patch: patch })
            } catch (error) {
              if (
                (this.updateOldestModel(
                  identifier,
                  this._diffStateByIdentifier[identifier].newModel,
                ),
                !(
                  error instanceof Error &&
                  error.message.toLowerCase().includes("timeout")
                ))
              )
                throw error
              this.timeoutCount++
            }
        }
        diffTrajectories.sort((a, b) => a.lastEditTime - b.lastEditTime)
        const filteredDiffTrajectories = diffTrajectories
          .filter((diff) => this.filterPatch(diff.patch))
          .slice(-this.diffHistorySizeLimit)
          .map(
            (diff, index) =>
              new AIServerModule.CppFileDiffHistory({
                fileName: fileNameMapping[diff.modelIdentifier] ?? diff.modelIdentifier,
                diffHistory: [diff.patch.string],
                diffHistoryTimestamps: [],
              }),
          )
          .reduce((total, diff) => {
            if (0 === total.length) return [diff]
            const lastDiff = total[total.length - 1]
            return (
              lastDiff.fileName === diff.fileName
                ? (lastDiff.diffHistory.push(...diff.diffHistory),
                  lastDiff.diffHistoryTimestamps.push(...diff.diffHistoryTimestamps))
                : total.push(diff),
              total
            )
          }, [])
        return (
          (this.latestCompiledGlobalDiffTrajectoriesVersion = this.version),
          (this.previousCompiledGlobalDiffTrajectories = filteredDiffTrajectories),
          filteredDiffTrajectories
        )
      }
      // 检查是否恢复到最近的模型
      isRevertingToRecentModel(identifier, modelValue) {
        if (null == this.recentModelHashes)
          throw new Error("Model history tracking is disabled")
        return (
          this.recentModelHashes[identifier]?.includes((0, diffProviderModule.cppModelHash)(modelValue, 1)) ??
          !1
        )
      }
      // 检查是否建议最近被拒绝的编辑
      isSuggestingRecentlyRejectedEdit(identifier, modelValue, softRejectThreshold, hardRejectThreshold) {
        if (null == this.recentlyRejectedEditModelHashes)
          throw new Error("Model history tracking is disabled")
        const rejectedEdits = this.recentlyRejectedEditModelHashes[identifier] ?? [],
          modelHash = (0, diffProviderModule.cppModelHash)(modelValue, 1),
          rejectedEdit = rejectedEdits.find((edit) => edit.modelHash === modelHash)
        return (
          (void 0 !== rejectedEdit?.numberOfTimesSoftRejected &&
            rejectedEdit.numberOfTimesSoftRejected >= softRejectThreshold) ||
          (void 0 !== rejectedEdit?.numberOfTimesHardRejected &&
            rejectedEdit.numberOfTimesHardRejected >= hardRejectThreshold)
        )
      }
      // 记录被拒绝的编辑
      recordRejectedEdit(identifier, modelValue, isSoftReject) {
        var recentlyRejectedEditModelHashes
        if (null == this.recentlyRejectedEditModelHashes) return
        ;(recentlyRejectedEditModelHashes = this.recentlyRejectedEditModelHashes)[identifier] ?? (recentlyRejectedEditModelHashes[identifier] = [])
        const modelHash = (0, diffProviderModule.cppModelHash)(modelValue, 1),
          existingRejectedEdit = this.recentlyRejectedEditModelHashes[identifier].find(
            (edit) => edit.modelHash === modelHash,
          )
        existingRejectedEdit
          ? (existingRejectedEdit.numberOfTimesSoftRejected++,
            isSoftReject || existingRejectedEdit.numberOfTimesHardRejected++)
          : this.recentlyRejectedEditModelHashes[identifier].push({
              modelHash: modelHash,
              numberOfTimesSoftRejected: 1,
              numberOfTimesHardRejected: isSoftReject ? 0 : 1,
            }),
          this.recentlyRejectedEditModelHashes[identifier].length >
            this.keepRecentlyRejectedEditModelHashCount &&
            this.recentlyRejectedEditModelHashes[identifier].shift()
      }
      // 带超时的模型变化处理循环
      async processModelChangesLoopWithTimeout() {
        if (this.processModelChangeLoopRunning) return
        let timeoutId
        const timeoutPromise = new Promise((resolve) => {
          timeoutId = setTimeout(() => {
            console.warn("processModelChangesLoop timed out"), resolve()
          }, this.MAX_LOOP_DURATION_MS)
        })
        try {
          ;(this.processModelChangeLoopRunning = !0),
            await Promise.race([
              this.processModelChangesLoop().then(() => clearTimeout(timeoutId)),
              timeoutPromise,
            ])
        } catch (error) {
          console.error("Error in processModelChangesLoop:", error)
        } finally {
          this.processModelChangeLoopRunning = !1
        }
      }
      // 处理模型变化的循环
      async processModelChangesLoop() {
        for (; this.changesToProcessArgs.length > 0; ) {
          const changeArgs = this.changesToProcessArgs.shift()
          if (void 0 === changeArgs) break
          const {
            useFullFileDiffForThisCall: useFullFileDiff,
            uniqueModelIdentifier: identifier,
            newModelValue: newModelValue,
            addedRangeInNewModelOneIndexed: addedRange,
            deletedRangeInOldModelOneIndexed: deletedRange,
          } = changeArgs
          if (
            (useFullFileDiff && (this.useFullFileDiffsTilUnmerged = !0),
            void 0 === this._diffStateByIdentifier[identifier])
          )
            return void this.initModel(identifier, newModelValue)
          const {
            addedRangeInNewModelOneIndexed: lastAddedRange,
            newModel: currentModelValue,
            lastEditTime: lastEditTime,
          } = this._diffStateByIdentifier[identifier]
          if (void 0 === lastAddedRange || void 0 === lastEditTime)
            useFullFileDiff || (this.useFullFileDiffsTilUnmerged = !1),
              (this._diffStateByIdentifier[
                identifier
              ].addedRangeInNewModelOneIndexed = addedRange),
              (this._diffStateByIdentifier[identifier].rangesOfAccumulatedChanges = {
                currentRange: addedRange,
                pastRange: deletedRange,
              })
          else {
            const shouldMerge = this.shouldMerge({
                lastDiffRange: lastAddedRange,
                replacedChangeRange: deletedRange,
                uniqueModelIdentifier: identifier,
              }),
              accumulatedRanges = this._diffStateByIdentifier[identifier].rangesOfAccumulatedChanges
            if (shouldMerge && this.newestModelIdentifier() === identifier) {
              const { startLineNumber: mergedStartLine, endLineNumberExclusive: mergedEndLine } = (0,
                diffProviderModule.applyChangeToRange)(lastAddedRange, deletedRange, addedRange)
              if (
                ((this._diffStateByIdentifier[
                  identifier
                ].addedRangeInNewModelOneIndexed = {
                  startLineNumber: mergedStartLine,
                  endLineNumberExclusive: mergedEndLine,
                }),
                void 0 === accumulatedRanges)
              );
              else {
                const mergedRange = getJoinedDiffRange({
                  firstAddedRange: accumulatedRanges.currentRange,
                  firstRemovedRange: accumulatedRanges.pastRange,
                  secondAddedRange: addedRange,
                  secondRemovedRange: deletedRange,
                })
                this._diffStateByIdentifier[identifier].rangesOfAccumulatedChanges =
                  mergedRange
              }
            } else {
              try {
                const patch = await this.getPatchOfActiveDiff(identifier, useFullFileDiff, !1)
                this._diffStateByIdentifier[identifier].diffHistory.push({
                  patch: patch,
                  lastEditTime: lastEditTime,
                }),
                  this.cleanDiffTrajectories()
              } catch (error) {
                if (
                  !(
                    error instanceof Error &&
                    error.message.toLowerCase().includes("timeout")
                  )
                )
                  throw error
                this.timeoutCount++
              }
              this.updateOldestModel(identifier, currentModelValue),
                (this._diffStateByIdentifier[
                  identifier
                ].addedRangeInNewModelOneIndexed = addedRange),
                useFullFileDiff || (this.useFullFileDiffsTilUnmerged = !1),
                (this._diffStateByIdentifier[identifier].rangesOfAccumulatedChanges =
                  { currentRange: addedRange, pastRange: deletedRange })
            }
          }
          ;(this._diffStateByIdentifier[identifier].lastEditTime = ++this
            .changeIndex),
            this.updateNewModel(identifier, newModelValue),
            changeArgs.callback && changeArgs.callback()
        }
      }
      // 获取锁
      async acquireLock() {
        return this.lock.acquire()
      }
      // 处理模型变化
      async processModelChange(changeArgs) {
        var recentModelHashes, identifier
        this.changesToProcessArgs.push(changeArgs),
          void 0 !== this.recentModelHashes &&
            ((recentModelHashes = this.recentModelHashes)[(identifier = changeArgs.uniqueModelIdentifier)] ??
              (recentModelHashes[identifier] = []),
            this.recentModelHashes[changeArgs.uniqueModelIdentifier].push(
              (0, diffProviderModule.cppModelHash)(changeArgs.newModelValue, 1),
            ),
            (this.recentModelHashes[changeArgs.uniqueModelIdentifier] =
              this.recentModelHashes[changeArgs.uniqueModelIdentifier].slice(
                -this.keepRecentModelHashCount,
              ))),
          await this.processModelChangesLoopWithTimeout()
      }
      // 移除最旧的差异轨迹
      removeOldestDiffTrajectory() {
        let oldestEditTime = 1 / 0,
          oldestIdentifier = null
        for (const identifier in this._diffStateByIdentifier) {
          const diffHistory = this._diffStateByIdentifier[identifier].diffHistory
          if (diffHistory.length > 0) {
            const editTime = diffHistory[0].lastEditTime
            editTime < oldestEditTime && ((oldestEditTime = editTime), (oldestIdentifier = identifier))
          }
        }
        null !== oldestIdentifier && this._diffStateByIdentifier[oldestIdentifier].diffHistory.shift()
      }
      // 检查差异历史是否为空
      isEmptyHistory() {
        for (const identifier in this._diffStateByIdentifier)
          if (this._diffStateByIdentifier[identifier].diffHistory.length > 0)
            return !1
        return !0
      }
      // 在某个时间点复制当前状态
      copyAtPointInTime(shouldCopyHistory) {
        const copy = new EditHistoryFormatter({
          numModelChangesToSave: this.numModelChangesToSave,
          diffHistorySizeLimit: this.diffHistorySizeLimit,
          patchStringSizeLimit: this.patchStringSizeLimit,
          gitDiffExtraContextRadius: this.gitDiffExtraContextRadius,
        })
        for (const identifier in this._diffStateByIdentifier)
          if (shouldCopyHistory) {
            const modelValue = this._diffStateByIdentifier[identifier].newModel
            copy.initModel(identifier, modelValue)
          } else {
            const diffState = this._diffStateByIdentifier[identifier],
              copiedDiffState = {
                ...diffState,
                oneBeforeLastModel: diffState.oneBeforeLastModel
                  ? diffState.oneBeforeLastModel
                  : void 0,
                newModel: diffState.newModel,
                oldestModel: diffState.oldestModel,
                rangesOfAccumulatedChanges: diffState.rangesOfAccumulatedChanges
                  ? {
                      currentRange:
                        diffState.rangesOfAccumulatedChanges.currentRange,
                      pastRange: diffState.rangesOfAccumulatedChanges.pastRange,
                    }
                  : void 0,
                addedRangeInNewModelOneIndexed:
                  diffState.addedRangeInNewModelOneIndexed
                    ? { ...diffState.addedRangeInNewModelOneIndexed }
                    : void 0,
                cachedPatchString: diffState.cachedPatchString
                  ? { ...diffState.cachedPatchString }
                  : void 0,
                lastEditTime: diffState.lastEditTime,
                modelVersion: diffState.modelVersion,
                diffHistory: diffState.diffHistory.map((diff) => ({ ...diff })),
              }
            ;(copy._diffStateByIdentifier[identifier] = copiedDiffState),
              (copy.latestRangeByIdentifier[identifier] =
                this.latestRangeByIdentifier[identifier])
          }
        return copy
      }
      // 检查两个范围是否相交
      rangesIntersect(range1, range2) {
        return (
          range1.startLineNumber <= range2.endLineNumberExclusive &&
          range1.endLineNumberExclusive >= range2.startLineNumber
        )
      }
      // 判断是否应该合并两个差异范围
      shouldMerge({
        lastDiffRange: lastRange,
        replacedChangeRange: newRange,
        uniqueModelIdentifier: uniqueModelIdentifier,
      }) {
        const isExactMatch =
            newRange.startLineNumber === lastRange.startLineNumber &&
            newRange.endLineNumberExclusive === lastRange.endLineNumberExclusive,
          isSingleLine = newRange.endLineNumberExclusive - newRange.startLineNumber == 1,
          mergingBehavior = this.mergingBehavior
        if (void 0 === mergingBehavior || "single line" === mergingBehavior.type)
          return (isSingleLine && lastRange.startLineNumber === newRange.endLineNumberExclusive) || isExactMatch
        if ("whitespace compatible" === mergingBehavior.type)
          return (
            isExactMatch ||
            (isSingleLine && lastRange.startLineNumber === newRange.endLineNumberExclusive) ||
            (isSingleLine && lastRange.endLineNumberExclusive == newRange.startLineNumber) ||
            (newRange.endLineNumberExclusive - newRange.startLineNumber <= 2 &&
              lastRange.endLineNumberExclusive == newRange.endLineNumberExclusive)
          )
        if ("merged diff history" === mergingBehavior.type) {
          const lastRangeExpanded =
              this.latestRangeByIdentifier[uniqueModelIdentifier] ??
              new positionModule.Range(
                lastRange.startLineNumber,
                0,
                lastRange.endLineNumberExclusive - 1,
                1e4,
              ),
            newRangeExpanded = new positionModule.Range(
              newRange.startLineNumber,
              0,
              newRange.endLineNumberExclusive - 1,
              1e4,
            )
          if (
            positionModule.Range.getRangeExpandedByLines(
              lastRangeExpanded,
              mergingBehavior.radius,
              mergingBehavior.radius,
            ).getOverlap(newRangeExpanded) !== positionModule.OverlapBehaviour.None
          ) {
            const mergedRange = positionModule.Range.merge(lastRangeExpanded, newRangeExpanded)
            return (this.latestRangeByIdentifier[uniqueModelIdentifier] = mergedRange), !0
          }
          return (this.latestRangeByIdentifier[uniqueModelIdentifier] = newRangeExpanded), !1
        }
        {
          const rangesOverlap = this.rangesIntersect(lastRange, newRange),
            minDistance = Math.min(
              Math.abs(lastRange.startLineNumber - newRange.startLineNumber),
              Math.abs(lastRange.endLineNumberExclusive - newRange.endLineNumberExclusive),
              Math.abs(lastRange.startLineNumber - newRange.endLineNumberExclusive),
              Math.abs(lastRange.endLineNumberExclusive - newRange.startLineNumber),
            ),
            shouldMerge = rangesOverlap || minDistance <= mergingBehavior.radius
          if ("include if in radius with upper limit" === mergingBehavior.type) {
            const n =
                Math.max(
                  lastRange.endLineNumberExclusive,
                  newRange.endLineNumberExclusive,
                ) - Math.min(lastRange.startLineNumber, newRange.startLineNumber),
              r = newRange.endLineNumberExclusive - newRange.startLineNumber
            return shouldMerge && (n === r || n <= mergingBehavior.limit)
          }
          return shouldMerge
        }
      }
      // 清理差异轨迹
      cleanDiffTrajectories() {
        let totalDiffCount = 0
        for (const identifier in this._diffStateByIdentifier)
          (this._diffStateByIdentifier[identifier].diffHistory =
            this._diffStateByIdentifier[identifier].diffHistory.filter((diff) =>
              this.filterPatch(diff.patch),
            )),
            (totalDiffCount += this._diffStateByIdentifier[identifier].diffHistory.length)
        for (let i = totalDiffCount; i > this.diffHistorySizeLimit; i--)
          this.removeOldestDiffTrajectory()
      }
      // 获取当前差异的补丁
      async getPatchOfActiveDiff(identifier, useFullFileDiff, isWhitespaceCheck) {
        const {
          oldestModel: oldModel,
          newModel: newModel,
          cachedPatchString: cachedPatch,
          rangesOfAccumulatedChanges: accumulatedRanges,
        } = this._diffStateByIdentifier[identifier]
        if (void 0 !== cachedPatch) return cachedPatch
        const rangesToUse =
            this.alwaysUseFullFileDiff ||
            useFullFileDiff ||
            this.useFullFileDiffsTilUnmerged
              ? void 0
              : accumulatedRanges,
          patch = await computePatchString({
            past: oldModel,
            current: newModel,
            radius: this.gitDiffExtraContextRadius,
            keepWhitespaceChanges: this.keepWhitespaceOnlyChanges && isWhitespaceCheck,
            rangesOfPastAndCurrent: rangesToUse,
            includeUnchangedLines: this.includeUnchangedLines,
          })
        return (
          (!1 !== isWhitespaceCheck && !1 !== patch?.isWhitespaceChange) ||
            (this._diffStateByIdentifier[identifier].cachedPatchString = patch),
          patch
        )
      }
      // 获取最新模型的标识符
      newestModelIdentifier() {
        let newestIdentifier = null,
          latestEditTime = -1 / 0
        for (const identifier in this._diffStateByIdentifier) {
          const editTime = this._diffStateByIdentifier[identifier].lastEditTime
          editTime > latestEditTime && ((newestIdentifier = identifier), (latestEditTime = editTime))
        }
        return newestIdentifier
      }
      // 更新新模型
      updateNewModel(identifier, newModelValue) {
        this.saveOneBeforeLastModelValue &&
          (this._diffStateByIdentifier[identifier].oneBeforeLastModel =
            this._diffStateByIdentifier[identifier].newModel),
          (this._diffStateByIdentifier[identifier].newModel = newModelValue),
          delete this._diffStateByIdentifier[identifier].cachedPatchString
      }
      // 更新旧模型
      updateOldestModel(identifier, oldModelValue) {
        ;(this._diffStateByIdentifier[identifier].oldestModel = oldModelValue),
          delete this._diffStateByIdentifier[identifier].cachedPatchString
      }
      // 设置是否保留仅空白字符的变化
      setKeepWhitespaceOnlyChanges(shouldKeep) {
        this.keepWhitespaceOnlyChanges = shouldKeep;
      }
      // 设置是否包含未变化的行
      setIncludeUnchangedLines(shouldInclude) {
        this.includeUnchangedLines = shouldInclude;
      }
      // 设置合并行为
      setMergingBehavior(behavior) {
        this.mergingBehavior = behavior;
      }
      // 比较两个模型的编辑时间
      compareEditTimes(compareObject) {
        if (compareObject.firstModelIdentifier === compareObject.secondModelIdentifier) return 0
        const firstEditTime =
            this._diffStateByIdentifier[compareObject.firstModelIdentifier]
              ?.lastEditTime,
          secondEditTime =
            this._diffStateByIdentifier[compareObject.secondModelIdentifier]
              ?.lastEditTime
        if (void 0 === firstEditTime || void 0 === secondEditTime)
          throw new Error(
            `Edit time is undefined for model identifier: ${compareObject.firstModelIdentifier} or ${compareObject.secondModelIdentifier}`,
          )
        return firstEditTime - secondEditTime
      }
    }
  async function computePatchString({
    past: pastContent,
    current: currentContent,
    radius,
    keepWhitespaceChanges, // 是否保留空白字符变化
    rangesOfPastAndCurrent, // 新旧文本的范围信息
    includeUnchangedLines: includeUnchangedLines = !0, // 是否包含未变化的行
    timeout: timeout = 2000, // diff操作超时时间
  }) {
    const {
      past: trimmedPast,
      current: trimmedCurrent,
      currentOffsetLineNumber,
      pastOffsetLineNumber,
    } = (function ({
      origPast: pastContent,
      origCurrent: currentContent,
      rangesOfPastAndCurrent,
    }) {
      if (void 0 === rangesOfPastAndCurrent)
        return {
          past: pastContent,
          current: currentContent,
          currentOffsetLineNumber: 0,
          pastOffsetLineNumber: 0,
        }
      const { pastRange, currentRange } = rangesOfPastAndCurrent,
        adjustedCurrentRange = { ...currentRange },
        adjustedPastRange = { ...pastRange },
        currentLines = currentContent.split("\n"),
        pastLines = pastContent.split("\n")
      adjustedCurrentRange.endLineNumberExclusive < currentLines.length &&
        adjustedPastRange.endLineNumberExclusive < pastLines.length &&
        ((adjustedCurrentRange.endLineNumberExclusive += 1),
        (adjustedPastRange.endLineNumberExclusive += 1)),
        adjustedCurrentRange.startLineNumber > 1 &&
          adjustedPastRange.startLineNumber > 1 &&
          ((adjustedCurrentRange.startLineNumber -= 1), (adjustedPastRange.startLineNumber -= 1))
      const contextBefore = Math.max(
          Math.min(adjustedCurrentRange.startLineNumber - 1, adjustedPastRange.startLineNumber - 1, 25),
          0,
        ),
        contextAfter = Math.max(
          Math.min(
            currentLines.length + 1 - adjustedCurrentRange.endLineNumberExclusive,
            pastLines.length + 1 - adjustedPastRange.endLineNumberExclusive,
            25,
          ),
          0,
        )
      ;(adjustedCurrentRange.startLineNumber -= contextBefore),
        (adjustedPastRange.startLineNumber -= contextBefore),
        (adjustedCurrentRange.endLineNumberExclusive += contextAfter),
        (adjustedPastRange.endLineNumberExclusive += contextAfter)
      const trimmedCurrentContent = currentLines
        .slice(adjustedCurrentRange.startLineNumber - 1, adjustedCurrentRange.endLineNumberExclusive - 1)
        .join("\n")
      return {
        past: pastLines
          .slice(adjustedPastRange.startLineNumber - 1, adjustedPastRange.endLineNumberExclusive - 1)
          .join("\n"),
        current: trimmedCurrentContent,
        currentOffsetLineNumber: adjustedCurrentRange.startLineNumber - 1,
        pastOffsetLineNumber: adjustedPastRange.startLineNumber - 1,
      }
    })({ origPast: pastContent, origCurrent: currentContent, rangesOfPastAndCurrent: rangesOfPastAndCurrent })
    let diffResult
    // 如果内容较大，使用异步diff操作
    diffResult =
      trimmedPast.split("\n").length > 100 || trimmedCurrent.split("\n").length > 100
        ? await new Promise((resolve, reject) => {
            ;(0, diffModule.diffLines)(trimmedPast, trimmedCurrent, {
              callback: (error, result) => {
                void 0 !== result ? resolve(result) : reject(new Error("Timeout exceeded"))
              },
              timeout: timeout,
            })
          })
        : (0, diffModule.diffLines)(trimmedPast, trimmedCurrent)
    let firstChangeLine = 1 / 0,
      lastNonEmptyChangeLine = -1 / 0,
      lastChangeLine = -1 / 0,
      currentLine = 1
    if (
      (diffResult.forEach((change) => {
        ;(!0 !== change.added && !0 !== change.removed) ||
          ((firstChangeLine = Math.min(firstChangeLine, currentLine)),
          "" !== change.value.trim() && (lastNonEmptyChangeLine = Math.max(lastNonEmptyChangeLine, currentLine + change.count - 1)),
          (lastChangeLine = Math.max(lastChangeLine, currentLine + change.count - 1))),
          (currentLine += change.count)
      }),
      (firstChangeLine = Math.max(0, firstChangeLine - radius)),
      lastNonEmptyChangeLine === -1 / 0 && (lastNonEmptyChangeLine = lastChangeLine),
      (lastNonEmptyChangeLine += radius),
      firstChangeLine === 1 / 0 || lastNonEmptyChangeLine === -1 / 0)
    )
      return
    const isWhitespaceOnlyChange = trimmedPast.replace(/\s/g, "") === trimmedCurrent.replace(/\s/g, "")
    if (isWhitespaceOnlyChange && !0 !== keepWhitespaceChanges) return
    let patchString = "",
      pastLineNumber = firstChangeLine - 1,
      currentLineNumber = firstChangeLine - 1
    for (let line = firstChangeLine; line <= lastNonEmptyChangeLine; line++) {
      currentLine = 1
      const change = diffResult.find((change, index) => {
        const endLine = currentLine + change.count,
          isInRange = currentLine <= line && line < endLine
        return (currentLine = endLine), isInRange
      })
      if (void 0 !== change) {
        const lineInChange = line - (currentLine - change.count)
        !0 === change.added
          ? (currentLineNumber++,
            (patchString +=
              `${(currentLineNumber + currentOffsetLineNumber).toString().padStart(0, " ")}+|` +
              change.value.split("\n")[lineInChange] +
              "\n"))
          : !0 === change.removed
            ? (pastLineNumber++,
              (patchString +=
                `${(pastLineNumber + pastOffsetLineNumber).toString().padStart(0, " ")}-|` +
                change.value.split("\n")[lineInChange] +
                "\n"))
            : includeUnchangedLines
              ? (pastLineNumber++,
                currentLineNumber++,
                (patchString +=
                  `${(currentLineNumber + currentOffsetLineNumber).toString().padStart(0, " ")} |` +
                  change.value.split("\n")[lineInChange] +
                  "\n"))
              : (pastLineNumber++, currentLineNumber++)
      }
    }
    return { string: patchString, isWhitespaceChange: isWhitespaceOnlyChange }
  }
  function getJoinedDiffRange({
    firstAddedRange, // 第一个添加的范围
    secondAddedRange, // 第二个添加的范围
    firstRemovedRange, // 第一个删除的范围
    secondRemovedRange, // 第二个删除的范围
  }) {
    // 检查第一个删除和添加范围的起始行是否一致
    if (firstRemovedRange.startLineNumber !== firstAddedRange.startLineNumber)
      throw new Error(
        "firstRemovedRange.startLineNumber !== firstAddedRange.startLineNumber",
      )
    // 检查第二个删除和添加范围的起始行是否一致
    if (secondRemovedRange.startLineNumber !== secondAddedRange.startLineNumber)
      throw new Error(
        "secondRemovedRange.startLineNumber !== secondAddedRange.startLineNumber",
      )
    // 计算合并后的起始行号
    const startLineNumber = Math.min(firstRemovedRange.startLineNumber, secondRemovedRange.startLineNumber),
      // 计算第二个删除范围与第一个添加范围之间的行数差异
      lineDifference = Math.max(
        0,
        secondRemovedRange.endLineNumberExclusive - firstAddedRange.endLineNumberExclusive,
      ),
      // 生成合并后的过去范围
      pastRange = {
        startLineNumber,
        endLineNumberExclusive: firstRemovedRange.endLineNumberExclusive + lineDifference,
      },
      // 当前范围的起始行号与过去范围一致
      currentStartLineNumber = startLineNumber,
      // 计算第二个删除范围与第一个添加范围的重叠行数
      overlappingRemovedLines = (0, diffProviderModule.numIntersectingLines)(secondRemovedRange, { ...firstAddedRange, startLineNumber: 1 }),
      // 计算第二个添加范围与第一个添加范围的重叠行数，并减去删除的重叠行数
      additionalLines = (0, diffProviderModule.numIntersectingLines)(secondAddedRange, { ...firstAddedRange, startLineNumber: 1 }) - overlappingRemovedLines
    // 返回合并后的范围
    return {
      pastRange,
      currentRange: {
        startLineNumber: currentStartLineNumber,
        endLineNumberExclusive:
          Math.max(firstAddedRange.endLineNumberExclusive, secondAddedRange.endLineNumberExclusive) +
          additionalLines,
      },
    }
  }
  ;(exports.EditHistoryFormatter = EditHistoryFormatter),
    (exports.computePatchString = computePatchString),
    (exports.getJoinedDiffRange = getJoinedDiffRange)
}
