// @ts-check

const fs = require('fs');
const path = require('path');
const { completion } = require('./callLLM');
const { config } = require('./config');
const { replaceStringBasedOnSuggestion } = require('./replaceCode');
const { getCode } = require('./getCode');
const { normalizeOutput } = require('./string.utils')

const endpoint = config.endpointType;
const id = new Date().toISOString().replace(/:/g, '_');

/**
 * @param {string[]} promptFilePathList
 */
function batchInvokeLLMAndEvaluate(promptFilePathList, specificLogFolderPath) {
  const summaryFolderPath = path.join(specificLogFolderPath, `${endpoint}_${id}_output.log`);
  fs.writeFileSync(summaryFolderPath, '', { encoding: 'utf-8' });

  const promiseList = promptFilePathList.map(promptFilePath => {
    if (!fs.existsSync(promptFilePath)) {
      return;
    }

    const tmp = path.basename(promptFilePath).split('.');
    tmp.pop();
    const fileName = tmp.join('.');
    const relatedJSONFilePath = path.join(path.dirname(promptFilePath), `${fileName}.json`);
    const jsonStr = fs.readFileSync(relatedJSONFilePath, { encoding: 'utf-8' });
    const json = JSON.parse(jsonStr);

    // =========== prepare data ===========
    const partialData = json.find((i) => !!i.partialData)?.partialData;

    const currentFileContents = partialData.currentFile.contents;
    const cursorPosition = partialData.currentFile.cursorPosition;

    const input = fs.readFileSync(promptFilePath, { encoding: 'utf-8' });
    completion(input).then(rawOutput => {
      const output = normalizeOutput(rawOutput);

      const lineCountOfOutput = output.split('\n');
      const startLineNumber = cursorPosition.line + 1; // zero indexed => one indexed
      const endLineNumberInclusive = cursorPosition.line + lineCountOfOutput.length + 1;  // zero indexed => one indexed
      const originalText = getCode(currentFileContents, startLineNumber, endLineNumberInclusive);

      // =========== generate code by merging originalCode with output snippet ===========
      const { replacedContents: replacedOutput } = replaceStringBasedOnSuggestion(
        currentFileContents,
        {
          range: {
            startLineNumber: startLineNumber,
            startColumn: 0,
            endLineNumberInclusive: endLineNumberInclusive,
            endColumn: 0,
          },
          replaceText: output,
          originalText,
        },
        config.useEditableRange,
      );

      console.log({output});

      const data =
`------------------------------------------[        output        ]-------------------------------------------
${output}
------------------------------------------[    replacedOutput    ]-------------------------------------------
${replacedOutput}
`;
      const dependentLogPath = path.join(path.dirname(promptFilePath), `${fileName}.result_${endpoint}.log`);
      fs.writeFileSync(dependentLogPath, data, { encoding: 'utf-8' });
      fs.appendFileSync(summaryFolderPath, data, { encoding: 'utf-8' });
    });
  });
}

module.exports = {
  batchInvokeLLMAndEvaluate,
}