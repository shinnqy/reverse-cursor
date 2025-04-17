// @ts-check



var MIN_DIFF_LENGTH = 6,
  SIMILARITY_THRESHOLD = 0.2,
  uf
;(function (i) {
  ;(i.INIT = "init"),
    (i.NON_STREAMING = "non_streaming"),
    (i.MAYBE_LINE_MATCH = "maybe_line_match"),
    (i.DONE = "done")
})(uf || (uf = {}))

function longestCommonPrefix(str1, str2) {
  let index = 0
  for (; index < str1.length && index < str2.length && str1[index] === str2[index]; ) index++
  return index
}

export async function handleChunkedStream(stream, expectedText, maxLines) {
  let fullText = "",
    currentText = "",
    state = uf.INIT
  for (;;) {
    const nextValue = await stream.next()
    if (nextValue.done) break
    if (nextValue.value.case !== "text")
      throw new Error(
        `nextValue.value is not a string in chunkedStreaming (${nextValue.value.case})`,
      )
    const chunk = nextValue.value.text
    if (((fullText += chunk), state !== uf.NON_STREAMING))
      for (const char of chunk) {
        currentText += char
        const result = processStreamState(state, expectedText, maxLines, currentText)
        if (((state = result.state), result.state === uf.DONE))
          return [result.diffText, consumeRemainingStream(stream).then((remainingText) => fullText + remainingText)]
        if (result.state === uf.NON_STREAMING) break
      }
  }
  return [fullText, undefined]
}

export async function consumeRemainingStream(stream) {
  let text = ""
  for (;;) {
    const nextValue = await stream.next()
    if (nextValue.done) break
    if (nextValue.value.case !== "text")
      throw new Error(
        `nextValue.value is not a string in vanillaHandleStream (${nextValue.value.case})`,
      )
    text += nextValue.value.text
  }
  return text
}

function createDeferred() {
  let resolve
  const promise = new Promise((resolver) => {
    resolve = resolver
  })
  if (resolve === undefined) throw new Error("unreachable")
  return { resolve, promise }
}

export function handleStreamWithPredictions(stream, expectedText, maxLines) {
  const { resolve: resolveText, promise: textPromise } = createDeferred(),
    { resolve: resolvePrediction, promise: predictionPromise } = createDeferred(),
    { resolve: resolveFullText, promise: fullTextPromise } = createDeferred()
  return (
    (async () => {
      let fullText = "",
        currentText = "",
        state = uf.INIT
      const finalize = (text) => {
        resolveText({ firstChunk: text, fullText: undefined }), resolveFullText(text)
      }
      for (;;) {
        const nextValue = await stream.next()
        if (nextValue.done) break
        if (nextValue.value.case === "text") {
          if (((fullText += nextValue.value.text), state !== uf.NON_STREAMING))
            for (const p of nextValue.value.text) {
              currentText += p
              const result = processStreamState(state, expectedText, maxLines, currentText)
              if (((state = result.state), result.state === uf.DONE)) {
                resolveText({ firstChunk: result.diffText, fullText: fullTextPromise }),
                  (state = uf.NON_STREAMING)
                break
              } else if (result.state === uf.NON_STREAMING) break
            }
        } else if (nextValue.value.case === "fusedCursorPrediction")
          resolvePrediction(nextValue.value.prediction)
        else if (nextValue.value.case === "doneEdit") finalize(fullText)
        else if (
          !(
            nextValue.value.case === "rangeToReplaceOneIndexed" ||
            nextValue.value.case === "modelInfo"
          )
        ) {
          const value = nextValue.value
        }
      }
      finalize(fullText), resolvePrediction(null)
    })(),
    { text: textPromise, fusedCursorPrediction: predictionPromise }
  )
}

function isPrefixMatch(prefix, text) {
  let prefixIndex = 0,
    textIndex = 0
  for (; prefixIndex < prefix.length && textIndex < text.length; ) prefix[prefixIndex] === text[textIndex] && prefixIndex++, textIndex++
  return prefixIndex === prefix.length
}

function isSimilarWithSuffix(prefix, text, suffix) {
  if (!text.startsWith(prefix)) return false
  const remainingText = text.slice(prefix.length)
  return remainingText.length > MIN_DIFF_LENGTH && remainingText === suffix
}
function processStreamState(state, expectedText, maxLines, currentText) {
  switch (state) {
    case uf.INIT: {
      if (expectedText.startsWith(currentText)) return { state: uf.INIT }
      if (
        currentText.split(`
`).length <= maxLines
      )
        return { state: uf.NON_STREAMING }
      state = uf.MAYBE_LINE_MATCH
    }
    case uf.MAYBE_LINE_MATCH:
      if (
        currentText.endsWith(`
`)
      ) {
        const lines = currentText.split(`
`),
          expectedLines = expectedText.split(`
`),
          lastLineIndex = lines.length - 2,
          currentLine = lines[lastLineIndex].trim(),
          expectedLine = expectedLines[lastLineIndex].trim(),
          nextExpectedLine = expectedLines
            .slice(lastLineIndex + 1)
            .map((d) => d.trim())
            .filter((d) => d !== "")[0]
        if (nextExpectedLine !== undefined && nextExpectedLine === currentLine) return { state: uf.MAYBE_LINE_MATCH }
        if (!isPrefixMatch(expectedLine, currentLine)) return { state: uf.NON_STREAMING }
        if (isSimilarWithSuffix(expectedLine, currentLine, nextExpectedLine)) return { state: uf.NON_STREAMING }
        if (currentLine.length - expectedLine.length < MIN_DIFF_LENGTH) return { state: uf.NON_STREAMING }
        const commonPrefixLength = longestCommonPrefix(expectedLine, currentLine)
        return expectedLine.length <= 2 || commonPrefixLength / Math.min(expectedLine.length, currentLine.length) > SIMILARITY_THRESHOLD
          ? {
              state: uf.DONE,
              diffText: [...lines.slice(0, lastLineIndex + 1), ...expectedLines.slice(lastLineIndex + 1)].join(`
`),
            }
          : { state: uf.NON_STREAMING }
      } else return { state: uf.MAYBE_LINE_MATCH }
    case uf.NON_STREAMING:
      return { state: uf.NON_STREAMING }
    case uf.DONE:
      throw new Error("Unexpected state: DONE")
  }
}