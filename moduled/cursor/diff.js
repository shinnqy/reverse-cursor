// @ts-check

export function createDiff() {
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
    let finalComponent = components[componentsLength - 1]
    return (
      componentsLength > 1 &&
        typeof finalComponent.value == "string" &&
        (finalComponent.added || finalComponent.removed) &&
        diffInstance.equals("", finalComponent.value) &&
        ((components[componentsLength - 2].value += finalComponent.value), components.pop()),
      components
    )
  }

  return {
    DiffAlgorithm,
  }
}
