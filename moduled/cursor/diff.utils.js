// @ts-check

export function createDiffUtils(params) {
  const { computeWordLevelDiffs, DiffAlgorithm, KS } = params;

  var charDiffer = new DiffAlgorithm()
  function computeCharLevelDiffs(oldText, newText, options) {
    return oldText.length > 2e3 || newText.length > 2e3
      ? (console.error(
          "BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffChars received strings that were too long. Returning the trivial diff.",
          oldText.length,
          newText.length,
        ),
        [
          { value: oldText, removed: true },
          { value: newText, added: true },
        ])
      : charDiffer.diff(oldText, newText, options)
  }
  /**
   * 分析差异并提取修改信息
   * @param {Array} diffChanges - 差异变化数组
   * @returns {Object} 包含内联修改和整行修改的对象
   */
  function analyzeDiffChanges(diffChanges) {
    let originalText = "",
      combinedText = "",
      pendingAddedText = "",
      additionIndex = 0
    const inlineModifications = [],
      fullLineModifications = [],
      /**
       * 处理待添加的文本
       * @param {string} nextValue - 下一个值
       */
      processPendingText = (nextValue) => {
        let pendingLines = pendingAddedText.split(`
`),
          currentLineNumber =
            originalText.split(`
`).length - 1
        if (
          nextValue !== "" &&
          !nextValue.startsWith(`
`) &&
          pendingLines.length > 0
        ) {
          // 处理内联添加的情况
          const lastPendingLine = pendingLines.pop()
          let column
          pendingLines.length > 0
            ? (column = 1)
            : (column =
                (originalText
                  .split(
                    `
`,
                  )
                  .at(-1)?.length ?? 0) + 1),
            lastPendingLine !== undefined &&
              lastPendingLine !== "" &&
              inlineModifications.push({ lineNumber: currentLineNumber, column, value: lastPendingLine }),
            (currentLineNumber -= 1)
        } else {
          // 处理整行添加的情况
          const firstPendingLine = pendingLines.shift()
          if (firstPendingLine !== undefined && firstPendingLine !== "") {
            const column =
              originalText
                .split(
                  `
`,
                )
                .at(-1)?.length ?? 0
            inlineModifications.push({ lineNumber: currentLineNumber, column: column + 1, value: firstPendingLine })
          }
        }
        if (pendingLines.length > 0)
          for (const pendingLine of pendingLines)
            fullLineModifications.push({
              beforeLineNumber: currentLineNumber,
              indexInMultilineAddition: additionIndex++,
              value: pendingLine,
            })
      }
    for (const diffChange of diffChanges)
      diffChange.added
        ? (pendingAddedText += diffChange.value)
        : (pendingAddedText !== "" && (processPendingText(diffChange.value), (combinedText += pendingAddedText), (pendingAddedText = "")),
          (originalText += diffChange.value),
          (combinedText += diffChange.value))
    return pendingAddedText !== "" && processPendingText(""), { inlineModifications, fullLineModifications }
  }
  /**
   * 检查位置是否在修改之前
   * @param {Object} modifications - 修改信息
   * @param {Object} position - 位置信息
   * @returns {boolean} 是否在修改之前
   */
  function isPositionBeforeModifications(modifications, position) {
    return !!(
      modifications.fullLineModifications.some((modification) => modification.beforeLineNumber < position.lineNumber) ||
      modifications.inlineModifications
        .filter((s) => s.lineNumber === position.lineNumber)
        .some((s) => s.startColumn < position.column)
    )
  }
  /**
   * 处理差异变化并应用偏移
   * @param {Array} singleLineCharChanges - 差异变化数组
   * @param {number} startLineNumber - 行偏移量
   * @param {Object} cursorPosition - 光标位置
   * @param {any} selectionStart - 选择开始位置
   * @param {any} selectionEnd - 选择结束位置
   * @returns {Object} 处理结果
   */
  function calculateInlineChanges(singleLineCharChanges, startLineNumber, cursorPosition, selectionStart, selectionEnd) {
    const { inlineModifications, fullLineModifications } = analyzeDiffChanges(singleLineCharChanges),
      adjustedFullLineModifications = []
    for (const modification of fullLineModifications)
      adjustedFullLineModifications.push({
        beforeLineNumber: modification.beforeLineNumber + startLineNumber,
        indexInMultilineAddition: modification.indexInMultilineAddition,
        content: modification.value,
        decorations: [new KS(1, modification.value.length + 1, "ghost-text", 0)],
      })
    const adjustedInlineModifications = inlineModifications.map((modification) => ({
      lineNumber: modification.lineNumber + startLineNumber,
      startColumn: modification.column,
      newValue: modification.value,
      oldValue: "",
    }))
    return isPositionBeforeModifications({ inlineModifications: adjustedInlineModifications, fullLineModifications: adjustedFullLineModifications }, cursorPosition)
      ? { success: false, inlineModifications: adjustedInlineModifications, fullLineModifications: adjustedFullLineModifications }
      : { success: true, inlineModifications: adjustedInlineModifications, fullLineModifications: adjustedFullLineModifications }
  }

  function trimCommonLines(oldText, newText, lineSeparator) {
    const oldLines = oldText.split(lineSeparator),
      newLines = newText.split(lineSeparator)
    let commonPrefixLength = 0
    for (; commonPrefixLength < oldLines.length && commonPrefixLength < newLines.length && oldLines[commonPrefixLength] === newLines[commonPrefixLength]; ) commonPrefixLength++
    const trimmedOldLines = oldLines.slice(commonPrefixLength),
      trimmedNewLines = newLines.slice(commonPrefixLength)
    return {
      trimmedOldLines,
      trimmedNewLines,
      startIndex: commonPrefixLength,
      removedStartLines: oldLines.slice(0, commonPrefixLength),
    }
  }
  function computeLineDiffs(oldText, newText, lineSeparator) {
    const {
        trimmedOldLines: trimmedOldLines,
        trimmedNewLines: trimmedNewLines,
        startIndex: commonPrefixLength,
        removedStartLines: commonPrefixLines,
      } = trimCommonLines(oldText, newText, lineSeparator),
      diffs = [],
      remainingOldLines = trimmedOldLines,
      remainingNewLines = trimmedNewLines
    commonPrefixLength > 0 &&
      (diffs.push({ value: commonPrefixLines.join(lineSeparator) }),
      trimmedOldLines.length > 0 && trimmedNewLines.length > 0
        ? (diffs[0].value += lineSeparator)
        : trimmedOldLines.length > 0
          ? remainingOldLines.unshift("")
          : trimmedNewLines.length > 0 && remainingNewLines.unshift(""))
    const lcsMatrix = computeLCSMatrix(remainingOldLines, remainingNewLines),
      rawDiffs = computeRawDiffs(lcsMatrix, remainingOldLines, remainingNewLines),
      groupedDiffs = groupConsecutiveDiffs(rawDiffs)
    return diffs.push(...normalizeDiffs(groupedDiffs)), diffs
  }
  function computeLCSMatrix(oldLines, newLines) {
    const oldLength = oldLines.length + 1,
      newLength = newLines.length + 1,
      lcsMatrix = Array.from({ length: oldLength }, () => Array(newLength).fill(0))
    for (let r = 1; r < oldLength; r++)
      for (let o = 1; o < newLength; o++)
        oldLines[r - 1] === newLines[o - 1]
          ? (lcsMatrix[r][o] = lcsMatrix[r - 1][o - 1] + 1)
          : (lcsMatrix[r][o] = Math.max(lcsMatrix[r - 1][o], lcsMatrix[r][o - 1]))
    return lcsMatrix
  }
  function computeRawDiffs(lcsMatrix, oldLines, newLines) {
    const diffs = []
    let oldLinesLength = oldLines.length,
      newLinesLength = newLines.length
    for (; oldLinesLength > 0 || newLinesLength > 0; )
      oldLinesLength > 0 && newLinesLength > 0 && oldLines[oldLinesLength - 1] === newLines[newLinesLength - 1]
        ? (diffs.unshift({ value: oldLines[oldLinesLength - 1] }), oldLinesLength--, newLinesLength--)
        : newLinesLength > 0 && (oldLinesLength === 0 || lcsMatrix[oldLinesLength][newLinesLength - 1] >= lcsMatrix[oldLinesLength - 1][newLinesLength])
          ? (diffs.unshift({ added: true, value: newLines[newLinesLength - 1] }), newLinesLength--)
          : oldLinesLength > 0 &&
            (newLinesLength === 0 || lcsMatrix[oldLinesLength][newLinesLength - 1] < lcsMatrix[oldLinesLength - 1][newLinesLength]) &&
            (diffs.unshift({ removed: true, value: oldLines[oldLinesLength - 1] }), oldLinesLength--)
    return diffs
  }
  function groupConsecutiveDiffs(diffs) {
    const groupedDiffs = []
    let currentGroup = null
    for (const diff of diffs)
      currentGroup && currentGroup.added === diff.added && currentGroup.removed === diff.removed
        ? (currentGroup.value +=
            `
` + diff.value)
        : (currentGroup && groupedDiffs.push(currentGroup), (currentGroup = { ...diff }))
    return currentGroup && groupedDiffs.push(currentGroup), groupedDiffs
  }
  function normalizeDiffs(diffs) {
    const normalizedDiffs = [...diffs]
    for (let i = 0; i < diffs.length - 1; i++) {
      const currentDiff = diffs[i],
        nextNonAdded = diffs.find((diff, index) => index > i && !diff.added),
        nextNonRemoved = diffs.find((diff, index) => index > i && !diff.removed)
      currentDiff.removed
        ? nextNonAdded &&
          (normalizedDiffs[i].value += `
`)
        : currentDiff.added
          ? nextNonRemoved &&
            (normalizedDiffs[i].value += `
`)
          : nextNonAdded && nextNonRemoved
            ? (normalizedDiffs[i].value += `
`)
            : nextNonAdded
              ? (nextNonAdded.value =
                  `
` + nextNonAdded.value)
              : nextNonRemoved &&
                (nextNonRemoved.value =
                  `
` + nextNonRemoved.value)
    }
    return normalizedDiffs.filter((t) => t.value !== "")
  }

  function computeDiffs(oldText, newText, lineSeparator) {
    const lineDiffs = computeLineDiffs(oldText, newText, lineSeparator),
      wordDiffs = [],
      charDiffs = []
    let currentGroup = []
    const flushGroup = () => {
      if (currentGroup.length > 0) {
        const removedText = currentGroup
            .filter((d) => d.removed)
            .map((d) => d.value)
            .join(""),
          addedText = currentGroup
            .filter((d) => d.added)
            .map((d) => d.value)
            .join(""),
          wordLevelDiffs = computeWordLevelDiffs(removedText, addedText, {}, false),
          charLevelDiffs = computeCharLevelDiffs(removedText, addedText, {})
        wordDiffs.push(...wordLevelDiffs), charDiffs.push(...charLevelDiffs), (currentGroup = [])
      }
    }
    for (const diff of lineDiffs)
      diff.added || diff.removed ? currentGroup.push(diff) : (flushGroup(), wordDiffs.push(diff), charDiffs.push(diff))
    return flushGroup(), { wordDiffs: wordDiffs, charDiffs: charDiffs }
  }

  return {
    computeCharLevelDiffs,
    calculateInlineChanges,
    computeDiffs,
  };
}
