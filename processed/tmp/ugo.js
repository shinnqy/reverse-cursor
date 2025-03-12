// @ts-check

async function handleChunkedStream(stream, expectedText, maxLines) {
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
        const result = jMs(state, expectedText, maxLines, currentText)
        if (((state = result.state), result.state === uf.DONE))
          return [result.diffText, qMs(stream).then((remainingText) => fullText + remainingText)]
        if (result.state === uf.NON_STREAMING) break
      }
  }
  return [fullText, void 0]
}

