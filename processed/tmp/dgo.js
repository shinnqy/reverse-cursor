// @ts-check

function dgo(stream, expectedText, maxLines) {
  const { resolve: resolveText, promise: textPromise } = createDeferred(),
    { resolve: resolvePrediction, promise: predictionPromise } = createDeferred(),
    { resolve: resolveFullText, promise: fullTextPromise } = createDeferred()
  return (
    (async () => {
      let fullText = "",
        currentText = "",
        state = uf.INIT
      const finalize = (text) => {
        resolveText({ firstChunk: text, fullText: void 0 }), resolveFullText(text)
      }
      for (;;) {
        const nextValue = await stream.next()
        if (nextValue.done) break
        if (nextValue.value.case === "text") {
          if (((fullText += nextValue.value.text), state !== uf.NON_STREAMING))
            for (const p of nextValue.value.text) {
              currentText += p
              const result = jMs(state, expectedText, maxLines, currentText)
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