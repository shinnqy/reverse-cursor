// @ts-check

const fs = require('fs');
const path = require('path');
const { completion } = require('./callLLM');
const { config } = require('./config');
const { replaceStringBasedOnSuggestion } = require('./replaceCode');
const { getCode } = require('./getCode');

const endpoint = config.endpointType;
const id = new Date().toISOString().replace(/:/g, '_');

/**
 * @param {string[]} promptFilePathList
 */
function batchInvokeLLM(promptFilePathList, specificLogFolderPath) {
  const outputFolderPath = path.join(specificLogFolderPath, `${endpoint}_${id}_output.log`);
  fs.writeFileSync(outputFolderPath, '', { encoding: 'utf-8' });


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
    const firstChunkValue = json.find(i => !!i.firstChunkValue).firstChunkValue;
    const fullText = json.find(i => !!i.fullText)?.fullText;
    const acceptedSuggestion = json.find((i) => i.action === 'press Tab to acceptFullSuggestion and succeed')?.suggestion;
    const partialData = json.find((i) => !!i.partialData)?.partialData;

    const currentFileContents = partialData.currentFile.contents;
    const cursorPosition = partialData.currentFile.cursorPosition;

    // =========== generate code after accepting ===========
    const { replacedContents } = replaceStringBasedOnSuggestion(
      currentFileContents,
      acceptedSuggestion
    );

    const input = fs.readFileSync(promptFilePath, { encoding: 'utf-8' });
    completion(input).then(output => {
      const lineCountOfOutput = output.split('\n');
      const startLineNumber = cursorPosition.line + 1;
      const endLineNumberInclusive = cursorPosition.line + lineCountOfOutput.length + 1;
      const originalText = getCode(currentFileContents, startLineNumber, endLineNumberInclusive);

      // =========== generate code by merging originalCode with output snippet ===========
      const { replacedContents: replacedOutput } = replaceStringBasedOnSuggestion(
        currentFileContents,
        {
          range: {
            startLineNumber,
            startColumn: 0,
            endLineNumberInclusive,
            endColumn: 0,
          },
          replaceText: output,
          originalText,
        }
      );

      console.log({output});

      const data =
`============================
----promptFilePath----:
${promptFilePath}

----output----:
${output}

-----replacedOutput-----
${replacedOutput}

----firstChunkValue----:
${firstChunkValue}

----replacedContents(firstChunkValue)----
${replacedContents}

----fullText----:
${fullText}
`;
      fs.appendFileSync(outputFolderPath, data, { encoding: 'utf-8' });
      const dependentLogPath = path.join(path.dirname(promptFilePath), `${fileName}.result_${endpoint}.log`);
      fs.writeFileSync(dependentLogPath, data, { encoding: 'utf-8' });
    });
  });
}

module.exports = {
  batchInvokeLLM,
}