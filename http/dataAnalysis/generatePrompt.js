// @ts-check

const path = require('path');
const { modifyCode } = require('./modifyCode');

const Language2SystemPromptPrefix = {
  '.ts': 'an expert in TypeScript',
  '.ets': 'an expert in ArkTS',
  '.java': 'an expert in Java',
};

/**
 * @param {Array<{ fileName: string; diffHistory: string[]; diffHistoryTimestamps: any[] }>} fileDiffHistories
 * @param {string} currentFileContents
 * @param {{ line: number; column: number }} currentCursorPosition
 * @returns
 */
function generatePrompt(fileDiffHistories, currentFileContents, currentCursorPosition, currentFilePath) {
  const fileExtension = path.extname(currentFilePath);
  const systemPromptPrefix = Language2SystemPromptPrefix[fileExtension] || "a code assistant";

  const formattedDiffHistoryByFiles = fileDiffHistories.map(fileDiff => {
    const { fileName, diffHistory } = fileDiff;
    const explainedDiffHistory = diffHistory.map(diffAtOnce => {
      const diffListAtOnce = diffAtOnce.split('\n');
      const explainedOnceDiff = diffListAtOnce.map(diff => {
        if (!diff) {
          return;
        }

        const [lineAndAction, content] = diff.split('|');
        const lineNumber = lineAndAction.slice(0, lineAndAction.length - 1);
        const action = lineAndAction.slice(-1);
        const explainedAction = action === '+' ? 'added' : 'deleted';
        return `${explainedAction} the code \`${content}\` in line ${lineNumber}`;
      });
      return explainedOnceDiff.join('\n');
    });
    return `File: ${fileName}\n${explainedDiffHistory.join('\n')}`;
  }).join('-----------------------------------------------\n\n');
  // const fimCode = '<|fim_prefix|>' + modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '<|fim_suffix|>') + '<|fim_middle|>';
  const fimCode = modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '<|current_cursor_position|>');

const a = `
We represent user's recent actions in the following format:
<line number><add action of delete action>|<content in this line>

For example:
1-|import { foo } from 'foo';
1+|import { bar } from 'bar';

This means the user has deleted the code "import { foo } from 'foo';" in line 1 and added then add code "import { bar } from 'bar';" in line 1.
`

// ================ prompt template ================
  const prompt =
`You're ${systemPromptPrefix}. Your task is to help the user update the code around current cursor position.

## Recent Actions
Here is what the user has been doing from the earliest to the latest:

${formattedDiffHistoryByFiles}

## Current Code
Here is the current code file path:
${currentFilePath}

Here is the current code around the cursor position:

\`\`\`
${fimCode}
\`\`\`

## Task
Rewrite the code from the first column of the line of <|current_cursor_position|> according to the following requirements:
1. Enforce PascalCase naming for all enum members
2. Propagate naming convention changes to all related cases
3. Preserve original functionality
4. Apply changes to entire code regardless of cursor position
5. Focus on code after cursor position

# Output Format
Return ONLY the rewritten code from the first column of the line of cursor position without any other words.
Do NOT include unchanged code before cursor.`;
// As ${systemPromptPrefix}, your role is to analyze what the user has been doing and then to output the code from the first column of the line of <|current_cursor_position|> with the updated changes without any other words:`;
// ================ prompt template ================

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