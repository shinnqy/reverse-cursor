// @ts-check

class _A {
  updateSuggestionGreenHighlights(editorModel, suggestion, diffs, shouldUpdateUI = true) {
    const suggestionRange = F_(editorModel, suggestion)
    if (suggestionRange === null) return
    const { greenRanges: greenRanges } = OFt(diffs, suggestionRange, "post-change")
    this.getCurrentSuggestion() &&
      (this.updateSuggestionStateHalfSilently({ greens: greenRanges }),
      this.Ob().cppAutoImportEnabled && this.Ib.handleNewGreens(editorModel, greenRanges),
      shouldUpdateUI &&
        ((this.didShowGreenHighlights = true),
        (this.decIdsThatAreNotInReactiveStorage.green = editorModel.deltaDecorations(
          this.decIdsThatAreNotInReactiveStorage.green,
          greenRanges.map((range) => ({
            range: {
              startLineNumber: range.startLineNumber,
              startColumn: range.startColumn,
              endLineNumber: range.endLineNumber,
              endColumn: range.endColumn,
            },
            options: { description: "green", className: RKi, stickiness: 1 },
          })),
        )),
        this.lb.assert(
          this.decIdsThatAreNotInReactiveStorage.green.length < 50,
          "Too many green decorations from cpp",
        )))
  }
}
