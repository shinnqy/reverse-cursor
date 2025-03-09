// @ts-check

const fs = require('fs');
const path = require('path');
const { completion } = require('./callLLM');

/**
 * @param {string[]} promptFilePathList
 */
function batchInvokeLLM(promptFilePathList, specificLogFolderPath) {
  const outputFolderPath = path.join(specificLogFolderPath, 'output.log');
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

    const firstChunkValue = json.find(i => !!i.firstChunkValue).firstChunkValue;
    const fullText = json.find(i => !!i.fullText)?.fullText;

    const input = fs.readFileSync(promptFilePath, { encoding: 'utf-8' });
    completion(input).then(output => {
      console.log({output})
      const data =
`============================
----promptFilePath----:
${promptFilePath}

----output----:
${output}

----firstChunkValue----:
${firstChunkValue}

----fullText----:
${fullText}
`;
      fs.appendFileSync(outputFolderPath, data, { encoding: 'utf-8' });
    });
  });
}

module.exports = {
  batchInvokeLLM,
}