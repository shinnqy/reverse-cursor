// @ts-check

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
        if (nextExpectedLine !== void 0 && nextExpectedLine === currentLine) return { state: uf.MAYBE_LINE_MATCH }
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