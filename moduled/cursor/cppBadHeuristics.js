// @ts-check

export function createCppBadHeuristics(params) {
  const {replaceTextInRange, ZXe, VB, generateModifiedText, EditHistoryDiffFormatter} = params;

  const adi = class {
    constructor(applicationStorage, fileSystem, commandRunner) {
      ;(this.a = applicationStorage), (this.b = fileSystem), (this.c = commandRunner)
    }
    async isValidCppCase({
      model,
      modelOutputText,
      startingRange,
      notebookInfo,
      eol,
    }) {
      let { isNoOp } = replaceTextInRange(model, startingRange, modelOutputText, eol)
      if (isNoOp) return { valid: false }
      if (
        !this.a.applicationUserPersistentStorage.cppShowWhitespaceOnlyChanges
      ) {
        const oldText = model.getValueInRange({
            startLineNumber: startingRange.startLineNumber,
            startColumn: startingRange.startColumn,
            endLineNumber: startingRange.endLineNumberInclusive,
            endColumn: startingRange.endColumn,
          }),
          { charDiffs: charDiffs } = ZXe(oldText, modelOutputText, eol)
        let isWhitespaceOnly = true
        for (const diff of charDiffs)
          if ((diff.added === true || diff.removed === true) && diff.value.trim() !== "") {
            isWhitespaceOnly = false
            break
          }
        if (isWhitespaceOnly)
          return (
            console.log(
              "[Cpp] Bad Case: all changes are whitespace only but user has showWhitespaceOnlyChanges disabled",
            ),
            { valid: false }
          )
      }
      let newTextLines = modelOutputText.split(eol),
        oldTextLines = model.getValue().split(eol)
      const heuristics = this.a.applicationUserPersistentStorage.cppConfig?.heuristics
      if (heuristics === void 0) return { valid: !0, modelOutputText: modelOutputText }
      if (heuristics.includes(VB.REVERTING_USER_CHANGE)) {
        const modifiedTexts = generateModifiedText(model, startingRange, modelOutputText, eol, notebookInfo),
          relativePath = this.b.asRelativePath(model.uri)
        for (const modifiedText of modifiedTexts)
          if (
            await this.c.onlyLocalProvider?.runCommand(
              EditHistoryDiffFormatter.IsRevertingToRecentModel,
              { relativePath: relativePath, modelValue: modifiedText },
            )
          )
            return (
              console.log(
                "[Bad CPP Case 4] Reverting a change the user just made",
              ),
              { valid: false }
            )
      }
      if (heuristics.includes(VB.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED)) {
        ;(newTextLines = modelOutputText.split(eol)), (oldTextLines = model.getValue().split(eol).slice(startingRange.startLineNumber))
        let isAllSame = true
        for (
          let i = 0;
          i < newTextLines.length && !(i === newTextLines.length - 1 && newTextLines[i] === "");
          i++
        )
          if (
            newTextLines[i] === void 0 ||
            oldTextLines[i] === void 0 ||
            newTextLines[i].trim() !== oldTextLines[i].trim()
          ) {
            isAllSame = false
            break
          }
        if (isAllSame)
          return (
            console.log(
              "[Bad CPP Case 5] Output extends beyond range but is all same",
            ),
            { valid: false }
          )
      }
      if (heuristics.includes(VB.SUGGESTING_RECENTLY_REJECTED_EDIT)) {
        const modifiedTexts = generateModifiedText(model, startingRange, modelOutputText, eol, notebookInfo),
          relativePath = this.b.asRelativePath(model.uri),
          recentlyRejectedThresholds =
            this.a.applicationUserPersistentStorage.cppConfig
              ?.recentlyRejectedEditThresholds
        if (recentlyRejectedThresholds !== void 0) {
          for (const modifiedText of modifiedTexts)
            if (
              await this.c.onlyLocalProvider?.runCommand(
                EditHistoryDiffFormatter.IsSuggestingRecentlyRejectedEdit,
                {
                  relativePath,
                  modelValue: modifiedText,
                  numberOfTimesSoftRejectedThreshold: recentlyRejectedThresholds.softRejectThreshold,
                  numberOfTimesHardRejectedThreshold: recentlyRejectedThresholds.hardRejectThreshold,
                },
              )
            )
              return (
                console.log(
                  "[Bad CPP Case 6] Suggesting a recently rejected edit",
                ),
                { valid: false }
              )
        }
      }
      return { valid: true, modelOutputText }
    }
  };

  return adi;
}