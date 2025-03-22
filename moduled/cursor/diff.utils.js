// @ts-check

export function createZXe(params) {
  // FFt: computeWordLevelDiffs, WBt: computeCharLevelDiffs
  const { FFt, WBt } = params;

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
          wordLevelDiffs = FFt(removedText, addedText, {}, false),
          charLevelDiffs = WBt(removedText, addedText, {})
        wordDiffs.push(...wordLevelDiffs), charDiffs.push(...charLevelDiffs), (currentGroup = [])
      }
    }
    for (const diff of lineDiffs)
      diff.added || diff.removed ? currentGroup.push(diff) : (flushGroup(), wordDiffs.push(diff), charDiffs.push(diff))
    return flushGroup(), { wordDiffs: wordDiffs, charDiffs: charDiffs }
  }

  return computeDiffs;
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
        ? (diffs.unshift({ added: !0, value: newLines[newLinesLength - 1] }), newLinesLength--)
        : oldLinesLength > 0 &&
          (newLinesLength === 0 || lcsMatrix[oldLinesLength][newLinesLength - 1] < lcsMatrix[oldLinesLength - 1][newLinesLength]) &&
          (diffs.unshift({ removed: !0, value: oldLines[oldLinesLength - 1] }), oldLinesLength--)
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