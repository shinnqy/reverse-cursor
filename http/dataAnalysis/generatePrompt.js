// @ts-check

const { modifyCode } = require('./modifyCode');

/**
 * @param {Array<{ fileName: string; diffHistory: string[]; diffHistoryTimestamps: any[] }>} fileDiffHistories
 * @param {string} currentFileContents
 * @param {{ line: number; column: number }} currentCursorPosition
 * @returns
 */
function generatePrompt(fileDiffHistories, currentFileContents, currentCursorPosition, currentFilePath) {
  const formattedDiffHistoryByFiles = fileDiffHistories.map(fileDiff => {
    const { fileName, diffHistory } = fileDiff;
    return `File: ${fileName}\n${diffHistory.join('\n')}`;
  }).join('-----------------------------------------------\n\n');
  // const fimCode = '<|fim_prefix|>' + modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '<|fim_suffix|>') + '<|fim_middle|>';
  const fimCode = modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '<|current_cursor_position|>');

  const prompt =
`You're a code assistant. Your task is to help the user update the code around current cursor position.

## Recent Actions
Here is what the user has been doing:

${formattedDiffHistoryByFiles}

## Current Code
Here is the current code file path:
${currentFilePath}

Here is the current code around the cursor position:

\`\`\`
${fimCode}
\`\`\`

As an intelligent code assistant, your role is to analyze what the user has been doing and then to output the code from the first column of the line of <|current_cursor_position|> with the updated changes without any other words:`;

  return prompt;
}


function generatePredictionPrompt(fileDiffHistories, currentFileContents, currentCursorPosition, currentFilePath) {
  const formattedDiffHistoryByFiles = fileDiffHistories.map(fileDiff => {
    const { fileName, diffHistory } = fileDiff;
    return `File: ${fileName}\n${diffHistory.join('\n')}`;
  }).join('-----------------------------------------------\n\n');
}

module.exports = {
  generatePrompt,
  generatePredictionPrompt
};