// @ts-check

const fs = require('fs');
const path = require('path');
const { modifyCode } = require('./modifyCode');
const { replaceStringFromPosition, replaceStringBasedOnSuggestion } = require('./replaceCode');

// const logFileName = 'arkui_log3';
const logFileName = 'trafficLight3';

main(logFileName);

function main(logFileName) {
  const logPath = path.resolve(__dirname, `./${logFileName}.txt`);
  ensureFolder(`./${logFileName}`);
  const processedFilePath = path.resolve(__dirname, `./${logFileName}/${logFileName}_formatted.json`);

  formatLogIntoJSON(logPath, processedFilePath);

  formatByGeneratedUUID(processedFilePath);
}

function ensureFolder(folderName) {
  const subItemFolderPath = path.resolve(__dirname, `./${folderName}`);
  if (!fs.existsSync(subItemFolderPath)) {
    fs.mkdirSync(subItemFolderPath, {recursive: true });
  }
}

function formatLogIntoJSON(logPath, processedFilePath) {
  if (fs.existsSync(processedFilePath)) {
    console.log('Already processed: ' + logPath);
    return;
  }

  const timestampRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]*Z/;

  const logValue = fs.readFileSync(logPath, { encoding: 'utf-8' });
  const logValueList = logValue.split('\n');

  fs.writeFileSync(processedFilePath, '', { encoding: 'utf-8' });
  fs.appendFileSync(processedFilePath, '[');
  (logValueList || []).forEach((item, index) => {
    if (!item) {
      console.log('This log item is empty.');
      return;
    }
    const matchResult = item.match(timestampRegex);
    if (matchResult) {
      const timestamp = matchResult[0];
      const jsonStr = item.split(`${timestamp}: `)[1];

      const json = JSON.parse(jsonStr);
      json.timestamp = timestamp;
      const needTrailingComma = index !== logValueList.length - 1;
      fs.appendFileSync(processedFilePath, `${JSON.stringify(json)}${needTrailingComma ? ',\n' : ''}`);
    } else {
      console.log({item})
      throw new Error('Invalid log')
    }
  });
  fs.appendFileSync(processedFilePath, ']');
}

function formatByGeneratedUUID(processedJSONFileJSONPath) {
  const jsonListStr = fs.readFileSync(processedJSONFileJSONPath, { encoding: 'utf-8'});
  const jsonList = JSON.parse(jsonListStr);
  const originDataLength = jsonList.length;
  let countProcessedData = 0;

  const byUUIDFolderName = `${logFileName}/byUUID`;
  ensureFolder(byUUIDFolderName);

  const map = {};
  const predictionIdMapGenerationUUID = {};
  const unProcessedData = [];
  for (let i = 0; i < jsonList.length; i++) {
    const item = jsonList[i];
    if (!!item.generateUuid || !!item.generationUUID) {
      const uuid = item.generateUuid || item.generationUUID;
      const key = uuid;
      if (map[key] === undefined) map[key] = [];
      map[key].push(item);
      // map predictionId
      if (!!item.predictionId) {
        if (predictionIdMapGenerationUUID[item.predictionId] && predictionIdMapGenerationUUID[item.predictionId] !== uuid) {
          console.log('Error: predictionId has multiple generation UUIDs');
        }
        predictionIdMapGenerationUUID[item.predictionId] = uuid;
      }
      // count
      countProcessedData++;
    } else if (!!item.predictionId) {
      const uuid = predictionIdMapGenerationUUID[item.predictionId];
      if (!uuid) {
        unProcessedData.push(item);
        continue;
      }
      const key = uuid;
      if (map[key] === undefined) {
        console.log('Error: this uuid should generated before.')
      }
      map[key].push(item);
      countProcessedData++;
    } else {
      unProcessedData.push(item);
    }
  }

  const completeDatasetJSONLFilePath = path.resolve(__dirname, `./${logFileName}/${logFileName}_dataset_complete.jsonl`);
  const editDatasetJSONLFilePath = path.resolve(__dirname, `./${logFileName}/${logFileName}_dataset_edit.jsonl`);
  const predictionDatasetJSONLFilePath = path.resolve(__dirname, `./${logFileName}/${logFileName}_dataset_prediction.jsonl`);
  fs.writeFileSync(completeDatasetJSONLFilePath, '', { encoding: 'utf-8' });
  fs.writeFileSync(predictionDatasetJSONLFilePath, '', { encoding: 'utf-8' });

  const mapList = Object.entries(map);
  mapList.forEach(item => {
    /**
     * @type {Array<{ generateUuid?: string; generationUUID?: string; timestamp: string; partialData?: any; firstChunkValue?: string; fullText?: string; fusedCursorPrediction?: any }>}
     */
    const data = item[1];
    const uuid = data[0].generateUuid || data[0].generationUUID;
    const timestamp = data[0].timestamp.replace(/\:/g, '_');
    const key = `${timestamp}____${uuid}`;
    const subItemPath = path.resolve(__dirname, `./${byUUIDFolderName}/${key}.json`);
    fs.writeFileSync(subItemPath, JSON.stringify(item[1], null, 2), { encoding: "utf-8" });

    const previewFilePath = path.resolve(__dirname, `./${byUUIDFolderName}/${key}.preview`);
    const promptFilePath = path.resolve(__dirname, `./${byUUIDFolderName}/${key}.prompt`);
    generateDataset({data, previewFilePath, promptFilePath, completeDatasetJSONLFilePath, predictionDatasetJSONLFilePath});
  });

  console.log('======= Summary =======');
  console.log('Total data: ' + originDataLength);
  console.log('Processed data: ' + countProcessedData);

  const dirPath = path.dirname(processedJSONFileJSONPath);
  const unProcessedDataPath = path.resolve(dirPath, `./${logFileName}_unprocessed.json`);
  fs.writeFileSync(unProcessedDataPath, JSON.stringify(unProcessedData, null, 2), { encoding: 'utf-8' });

  /**
   * @typedef {{ generateUuid?: string; generationUUID?: string; timestamp: string; partialData?: any; firstChunkValue?: string; fullText?: string; fusedCursorPrediction?: any, isFusedCursorPredictionModel?: boolean, predictionId?: string, action?: string, suggestion?: any }} ICursorPayload
   */
  /**
   * @param {{ data: Array<ICursorPayload>; previewFilePath: string; promptFilePath: string; completeDatasetJSONLFilePath: string; predictionDatasetJSONLFilePath: string }} params
   * @returns
   */
  function generateDataset(params) {
    const { data, previewFilePath, promptFilePath, completeDatasetJSONLFilePath, predictionDatasetJSONLFilePath } = params;

    const partialData = data.find(i => !!i.partialData)?.partialData;
    const isFusedCursorPredictionModel = data.find(i => !!i.isFusedCursorPredictionModel)?.isFusedCursorPredictionModel;
    const firstChunkValue = data.find(i => !!i.firstChunkValue)?.firstChunkValue;
    const fullText = data.find(i => !!i.fullText)?.fullText;
    const fusedCursorPrediction = data.find(i => !!i.fusedCursorPrediction)?.fusedCursorPrediction;
    const displayedFusedCursorPrediction = data.find(i => i.action === "displayFusedCursorPrediction")?.fusedCursorPrediction;
    const fusedCursorPredictionPredictionId = data.find(i => !!i.predictionId)?.predictionId;
    const acceptedSuggestion = data.find(i => i.action === "press Tab to acceptFullSuggestion and succeed")?.suggestion;

    if (!firstChunkValue) {
      console.log('No response for this request');
      return;
    }

    //
    const fileDiffHistories = partialData.fileDiffHistories; // 同一个文件会有多个item in this Array，如果中间夹杂别的文件的改动的话
    const additionalFiles = partialData.additionalFiles;

    //
    const currentFileContents = partialData.currentFile.contents;
    const currentFilePath = partialData.currentFile.relativeWorkspacePath;
    const currentCursorPosition = partialData.currentFile.cursorPosition;
    const additionalFilesWhichHasContents = additionalFiles.filter(i => i.visibleRangeContent.length && i.visibleRangeContent[0].length);

    const processedCurrentFileContents = modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '[ToFill]');
    // const replacedContents = replaceStringFromPosition(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, firstChunkValue);
    const { replacedContents, lastAcceptLine, lastAcceptColumn } = replaceStringBasedOnSuggestion(currentFileContents, acceptedSuggestion);
    const replacedContentsWithCursorPosition = modifyCode(replacedContents, lastAcceptLine, lastAcceptColumn, '<|current_cursor_position|>');

    if (replacedContents) {
      // ======== completion dataset jsonl ========
      const datasetV1JSONL = {
        diffHistory: fileDiffHistories,
        new_window_content: processedCurrentFileContents,
        ground_truth: replacedContents,
      };
      // fs.writeFileSync(completeDatasetJSONLFilePath, '', { encoding: 'utf-8' });

      console.log({completeDatasetJSONLFilePath});
      fs.appendFileSync(completeDatasetJSONLFilePath, JSON.stringify(datasetV1JSONL) + '\n');

      // prompt
      const prompt = generatePrompt(fileDiffHistories, currentFileContents, currentCursorPosition, currentFilePath);
      fs.writeFileSync(promptFilePath, prompt, { encoding: 'utf-8' });
    }

    if (displayedFusedCursorPrediction) {
      // ======== prediction dataset jsonl ========
      const processedCurrentFileContents = modifyCode(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, '<|current_cursor_position|>');
      const datasetPredictionJSONL = {
        latestAcceptedContentWithCurrentCursorPosition: replacedContents || processedCurrentFileContents,
        ground_truth: displayedFusedCursorPrediction,
      };

      console.log({predictionDatasetJSONLFilePath});
      fs.appendFileSync(predictionDatasetJSONLFilePath, JSON.stringify(datasetPredictionJSONL) + '\n');

      // prompt
      const predictionPrompt = generatePredictionPrompt(fileDiffHistories);
    }

    // ======== log content ========
    const diffHistory = partialData.diffHistory;

    outputPreview({
      previewFilePath,
      processedCurrentFileContents,
      currentCursorPosition,
      fileDiffHistories,
      fusedCursorPrediction,
      displayedFusedCursorPrediction,
      firstChunkValue,
      replacedContents,
      replacedContentsWithCursorPosition,
      fullText,
    });
  }
}

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

function outputPreview(params) {
  const {
    previewFilePath,
    processedCurrentFileContents,
    currentCursorPosition,
    fileDiffHistories,
    fusedCursorPrediction,
    displayedFusedCursorPrediction,
    firstChunkValue,
    replacedContents,
    replacedContentsWithCursorPosition,
    fullText,
  } = params;

    fs.writeFileSync(previewFilePath, '', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, JSON.stringify(currentCursorPosition), { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n\n' + '======== fileDiffHistories ========', { encoding: 'utf-8' });
    outputFileDiffHistories(previewFilePath, fileDiffHistories);
    fs.appendFileSync(previewFilePath, '\n\n' + '======== processedCurrentFileContents ========', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + processedCurrentFileContents, { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + '======== firstChunkValue ========', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + firstChunkValue, { encoding: 'utf-8' });
    if (replacedContents) {
      fs.appendFileSync(previewFilePath, '\n' + '======== replace firstChunkValue ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + replacedContents, { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + '======== replacedContentsWithCursorPosition ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + replacedContentsWithCursorPosition, { encoding: 'utf-8' });
    }
    if (fullText) {
      fs.appendFileSync(previewFilePath, '\n' + '======== fullText ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + fullText, { encoding: 'utf-8' });
    }
    if (fusedCursorPrediction) {
      fs.appendFileSync(previewFilePath, '\n' + '======== fusedCursorPrediction ========', { encoding: 'utf-8' });
      // fs.appendFileSync(previewFilePath, '\n\n' + JSON.stringify(fusedCursorPrediction), { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\nlineNumberOneIndexed: ' + fusedCursorPrediction?.lineNumberOneIndexed + '\n\ntext: \n' + fusedCursorPrediction?.text + '\n\nshouldRetriggerCpp: ' + fusedCursorPrediction?.shouldRetriggerCpp, { encoding: 'utf-8' });
    }
    if (displayedFusedCursorPrediction) {
      fs.appendFileSync(previewFilePath, '\n' + '======== displayedFusedCursorPrediction ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\nlineNumberOneIndexed: ' + displayedFusedCursorPrediction?.lineNumberOneIndexed + '\n\ntext: \n' + fusedCursorPrediction?.text + '\n\nshouldRetriggerCpp: ' + fusedCursorPrediction?.shouldRetriggerCpp, { encoding: 'utf-8' });
    }
}

function outputFileDiffHistories(previewFilePath, fileDiffHistories) {
  fileDiffHistories.forEach(fileDiff => {
    const { fileName, diffHistory } = fileDiff;

    fs.appendFileSync(previewFilePath, '\n\n' + `File: ${fileName}`, { encoding: 'utf-8' });

    diffHistory.forEach(diff => {
      const combinedDiffHistory = diffHistory.map(diff => diff.replace(/\n/g, '\\n')).join('');
      fs.appendFileSync(previewFilePath, '\n' + combinedDiffHistory, { encoding: 'utf-8' });
    });
  });
}