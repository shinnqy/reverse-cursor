// @ts-check

const { calculateAllKindsDiff } = require('./diffing');

const originalText = '  switch (light) {\n    case light.red:\n      return "green";\n    case light.Green:\n      return "yellow";\n    case light.Yellow:\n      return "red";\n  }';
const replacementText = '  switch (light) {\n    case "red":\n      return "green";\n    case "green":\n      return "yellow";\n    case "yellow":\n      return "red";\n  }';
const startLineNumber = 1;
const eol = `
`;

const { singleLineCharChanges, charChanges, wordChanges, isOnlyAddingToEachChar } = calculateAllKindsDiff(originalText, replacementText, startLineNumber, eol);
// console.log({ singleLineCharChanges, charChanges, wordChanges, isOnlyAddingToEachChar });
console.log({singleLineCharChanges})

const isOnlyAddingText = singleLineCharChanges.every((D) => D.removed !== true);
let hasComplexMultilineChanges = false;
let hasNonEmptyLine = false;
let hasLineBreak = false;

for (let i = 0; i < singleLineCharChanges.length; i++) {
  if (
    (singleLineCharChanges[i].added === true && singleLineCharChanges[i].value === eol && (hasLineBreak = true),
    !singleLineCharChanges[i].added && !singleLineCharChanges[i].removed)
  ) {
    if (singleLineCharChanges[i].value === eol) {
      hasNonEmptyLine = false;
      hasLineBreak = false;
    }
    else {
      if (hasNonEmptyLine && hasLineBreak) {
        hasComplexMultilineChanges = true
        break
      }
      hasNonEmptyLine = true
    }
  }
}

const cursorPosition = {
  column: 18,
  lineNumber: 4,
};

const options = {
  //
};

if (
  cursorPosition &&
  isOnlyAddingText &&
  isOnlyAddingToEachChar &&
  !hasComplexMultilineChanges &&
  charChanges.length <= 20 &&
  wordChanges.length <= 20 &&
  options?.forceDiffBox !== true
) {
  console.log('使用ghost-text');
} else {
  console.log('使用preview-box');
}