// @ts-check

export class _A {
  async *streamCpp(signal, cppHandler, context) {
    let hasYieldedRange = false,
      hasYieldedDoneEdit = false,
      hasYieldedModelInfo = false,
      hasSeenEndMarker = false
    for (;;) {
      if (signal.signal.aborted) return
      const cppResult = await cppHandler.flushCpp(context)
      if (cppResult.type === "failure") throw new Error(cppResult.reason)
      !hasYieldedModelInfo &&
        cppResult.modelInfo !== undefined &&
        ((hasYieldedModelInfo = true), yield { case: "modelInfo", modelInfo: cppResult.modelInfo }),
        !hasYieldedRange &&
          cppResult.rangeToReplaceOneIndexed !== undefined &&
          ((hasYieldedRange = true),
          yield {
            case: "rangeToReplaceOneIndexed",
            range: cppResult.rangeToReplaceOneIndexed,
          })
      const buffer = cppResult.buffer
      for (const chunk of buffer) {
        if (chunk === Mgo) {
          hasSeenEndMarker = true
          break
        }
        yield { case: "text", text: chunk }
      }
      if (
        (!hasYieldedDoneEdit && cppResult.doneEdit && ((hasYieldedDoneEdit = true), yield { case: "doneEdit" }),
        cppResult.cursorPredictionTarget !== undefined &&
          (yield {
            case: "fusedCursorPrediction",
            prediction: cppResult.cursorPredictionTarget,
          }),
        hasSeenEndMarker)
      )
        return
      await new Promise((resolve) => setTimeout(resolve, 5))
    }
  }
}