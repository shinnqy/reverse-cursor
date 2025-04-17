// @ts-check

module.exports = {
  calculateAllKindsDiff
};

/**
   * 计算并返回富文本差异结果
   * @param {string} oldText - 原始文本
   * @param {string} newText - 新文本
   * @param {number} startLineNumber - 分隔符
   * @param {Object} eol - 配置选项
   * @returns {Object} 差异结果对象
   */
function calculateAllKindsDiff(oldText, newText, startLineNumber, eol) {
  let { wordDiffs, charDiffs } = computeDiffs(oldText, newText, eol)
  const enhancedWordDiffs = enhanceSplitDiffs(wordDiffs, eol)
  let isOnlyAddingToEachWord = true
  for (let i = 0; i < enhancedWordDiffs.length; i++)
    if (enhancedWordDiffs[i].added !== true && enhancedWordDiffs[i].removed === true && enhancedWordDiffs[i].value !== eol) {
      isOnlyAddingToEachWord = false
      break
    }
  const enhancedCharDiffs = enhanceSplitDiffs(charDiffs, eol)
  let isOnlyAddingToEachChar = true
  for (let i = 0; i < enhancedCharDiffs.length; i++)
    if (enhancedCharDiffs[i].added !== true && enhancedCharDiffs[i].removed === true && enhancedCharDiffs[i].value !== eol) {
      isOnlyAddingToEachChar = false
      break
    }
  return {
    singleLineCharChanges: enhancedCharDiffs,
    singleLineWordChanges: enhancedWordDiffs,
    charChanges: charDiffs,
    wordChanges: wordDiffs,
    isOnlyAddingToEachChar,
    isOnlyAddingToEachWord,
  }
}

/**
   * 处理差异数组，按指定分隔符拆分
   * @param {Array} diffArray - 差异数组
   * @param {string} separator - 分隔符
   * @returns {Array} 处理后的差异数组
   */
function enhanceSplitDiffs(diffArray, separator) {
  const enhancedDiffs = diffArray
    .map((diff) => {
      const parts = diff.value.split(separator)
      return parts
        .map((part, index) =>
          index < parts.length - 1
            ? [
                { value: part, added: diff.added, removed: diff.removed },
                { value: separator, added: diff.added, removed: diff.removed },
              ]
            : { value: part, added: diff.added, removed: diff.removed },
        )
        .flat()
    })
    .flat()
    .filter((diff) => diff.value !== "")
  // 优化相邻的删除和添加操作
  for (let i = 0; i < enhancedDiffs.length - 1; i++)
    enhancedDiffs[i].removed &&
      enhancedDiffs[i + 1].added &&
      enhancedDiffs[i + 1].value.startsWith(enhancedDiffs[i].value) &&
      ((enhancedDiffs[i].added = true), (enhancedDiffs[i].removed = true))
  return enhancedDiffs
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
        wordLevelDiffs = diffWords(removedText, addedText, {}, false),
        charLevelDiffs = diffChars(removedText, addedText, {})
      wordDiffs.push(...wordLevelDiffs), charDiffs.push(...charLevelDiffs), (currentGroup = [])
    }
  }
  for (const diff of lineDiffs)
    diff.added || diff.removed ? currentGroup.push(diff) : (flushGroup(), wordDiffs.push(diff), charDiffs.push(diff))
  return flushGroup(), { wordDiffs: wordDiffs, charDiffs: charDiffs }
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

// ================================
class DiffAlgorithm {
  diff(oldText, newText, options = {}) {
    let callback = options.callback
    typeof options == "function" && ((callback = options), (options = {})), (this.options = options)
    let self = this;
    function done(result) {
      return callback
        ? (setTimeout(function () {
            callback(undefined, result)
          }, 0),
          true)
        : result
    }
    ;(oldText = this.castInput(oldText)),
      (newText = this.castInput(newText)),
      (oldText = this.removeEmpty(this.tokenize(oldText))),
      (newText = this.removeEmpty(this.tokenize(newText)))
    let newLength = newText.length,
      oldLength = oldText.length,
      editLength = 1,
      maxEditLength = newLength + oldLength
    options.maxEditLength && (maxEditLength = Math.min(maxEditLength, options.maxEditLength))
    const timeout = options.timeout ?? 1 / 0,
      timeEnd = Date.now() + timeout
    let paths = [{ oldPos: -1, lastComponent: undefined }],
      bestCommonLength = this.extractCommon(paths[0], newText, oldText, 0)
    if (paths[0].oldPos + 1 >= oldLength && bestCommonLength + 1 >= newLength)
      return done([{ value: this.join(newText), count: newText.length }])
    let minDiagonal = -1 / 0,
      maxDiagonal = 1 / 0
    function processEditStep() {
      for (let diagonal = Math.max(minDiagonal, -editLength); diagonal <= Math.min(maxDiagonal, editLength); diagonal += 2) {
        let path,
          prevPath = paths[diagonal - 1],
          nextPath = paths[diagonal + 1]
        prevPath && (paths[diagonal - 1] = undefined)
        let canGoDown = false
        if (nextPath) {
          const nextOldPos = nextPath.oldPos - diagonal
          canGoDown = nextPath && 0 <= nextOldPos && nextOldPos < newLength
        }
        let canGoRight = prevPath && prevPath.oldPos + 1 < oldLength
        if (!canGoDown && !canGoRight) {
          paths[diagonal] = undefined
          continue
        }
        if (
          (!canGoRight || (canGoDown && prevPath.oldPos + 1 < nextPath.oldPos)
            ? (path = self.addToPath(nextPath, true, undefined, 0))
            : (path = self.addToPath(prevPath, undefined, true, 1)),
          (bestCommonLength = self.extractCommon(path, newText, oldText, diagonal)),
          path.oldPos + 1 >= oldLength && bestCommonLength + 1 >= newLength)
        )
          return done(buildResults(self, path.lastComponent, newText, oldText, self.useLongestToken))
        ;(paths[diagonal] = path),
          path.oldPos + 1 >= oldLength && (maxDiagonal = Math.min(maxDiagonal, diagonal - 1)),
          bestCommonLength + 1 >= newLength && (minDiagonal = Math.max(minDiagonal, diagonal + 1))
      }
      editLength++
    }
    if (callback)
      (function executeAsync() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > timeEnd) return callback()
          processEditStep() || executeAsync()
        }, 0)
      })()
    else
      for (; editLength <= maxEditLength && Date.now() <= timeEnd; ) {
        let result = processEditStep()
        if (result) return result
      }
  }
  addToPath(path, isAdded, isRemoved, positionShift) {
    let lastComponent = path.lastComponent
    return lastComponent && lastComponent.added === isAdded && lastComponent.removed === isRemoved
      ? {
          oldPos: path.oldPos + positionShift,
          lastComponent: {
            count: lastComponent.count + 1,
            added: isAdded,
            removed: isRemoved,
            previousComponent: lastComponent.previousComponent,
          },
        }
      : {
          oldPos: path.oldPos + positionShift,
          lastComponent: {
            count: 1,
            added: isAdded,
            removed: isRemoved,
            previousComponent: lastComponent,
          },
        }
  }
  extractCommon(path, newText, oldText, diagonal) {
    let newLength = newText.length,
      oldLength = oldText.length,
      oldPos = path.oldPos,
      newPos = oldPos - diagonal,
      commonCount = 0
    for (; newPos + 1 < newLength && oldPos + 1 < oldLength && this.equals(newText[newPos + 1], oldText[oldPos + 1]); )
      newPos++, oldPos++, commonCount++
    return (
      commonCount && (path.lastComponent = { count: commonCount, previousComponent: path.lastComponent }),
      (path.oldPos = oldPos),
      newPos
    )
  }
  equals(a, b) {
    return this.options.comparator
      ? this.options.comparator(a, b)
      : a === b ||
          (this.options.ignoreCase && a.toLowerCase() === b.toLowerCase())
  }
  removeEmpty(array) {
    let result = []
    for (let i = 0; i < array.length; i++) array[i] && result.push(array[i])
    return result
  }
  castInput(input) {
    return input;
  }
  tokenize(text) {
    return text.split("")
  }
  join(array) {
    return array.join("")
  }
}
function buildResults(diffInstance, lastComponent, newText, oldText, useLongestToken) {
  const components = []
  let previousComponent
  for (; lastComponent; )
    components.push(lastComponent), (previousComponent = lastComponent.previousComponent), delete lastComponent.previousComponent, (lastComponent = previousComponent)
  components.reverse()
  let componentIndex = 0,
    componentsLength = components.length,
    newPos = 0,
    oldPos = 0
  for (; componentIndex < componentsLength; componentIndex++) {
    let component = components[componentIndex]
    if (component.removed) {
      if (
        ((component.value = diffInstance.join(oldText.slice(oldPos, oldPos + component.count))),
        (oldPos += component.count),
        componentIndex && components[componentIndex - 1].added)
      ) {
        let temp = components[componentIndex - 1]
        ;(components[componentIndex - 1] = components[componentIndex]), (components[componentIndex] = temp)
      }
    } else {
      if (!component.added && useLongestToken) {
        let tokens = newText.slice(newPos, newPos + component.count)
        ;(tokens = tokens.map(function (token, index) {
          let oldToken = oldText[oldPos + index]
          return oldToken.length > token.length ? oldToken : token
        })),
          (component.value = diffInstance.join(tokens))
      } else component.value = diffInstance.join(newText.slice(newPos, newPos + component.count))
      ;(newPos += component.count), component.added || (oldPos += component.count)
    }
  }
  let lastComponent = components[componentsLength - 1]
  return (
    componentsLength > 1 &&
      typeof lastComponent.value == "string" &&
      (lastComponent.added || lastComponent.removed) &&
      diffInstance.equals("", lastComponent.value) &&
      ((components[componentsLength - 2].value += lastComponent.value), components.pop()),
    components
  )
}
// ================================
const wordDiffer = new DiffAlgorithm();

function diffWords(oldText, newText, options = {}, ignoreWhitespace = true) {
  return oldText.length > 2e4 ||
    newText.length > 2e4
    ||
    wordDiffer.tokenize(oldText).length > 2e3 ||
    wordDiffer.tokenize(newText).length > 2e3
    ? (console.error(
        "BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffWords received strings that were too long. Returning the trivial diff.",
        oldText.length,
        newText.length,
      ),
      [
        { value: oldText, removed: true },
        { value: newText, added: true },
      ])
    : ((options = mergeOptions(options, { ignoreWhitespace })), wordDiffer.diff(oldText, newText, options))
}

function mergeOptions(userOptions, defaultOptions) {
  if (typeof userOptions == "function") defaultOptions.callback = userOptions
  else if (userOptions) for (let key in userOptions) userOptions.hasOwnProperty(key) && (defaultOptions[key] = userOptions[key])
  return defaultOptions
}

// ================================
var charDiffer = new DiffAlgorithm();
function diffChars(oldText, newText, options) {
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
