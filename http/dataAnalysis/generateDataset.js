// @ts-check

const fs = require('fs');
const path = require('path');
const { modifyCode } = require('./modifyCode');
const { replaceStringFromPosition, replaceStringBasedOnSuggestion } = require('./replaceCode');
const { generatePredictionPrompt, generatePrompt } = require('./generatePrompt');

/**
 * @typedef {{ generateUuid?: string; generationUUID?: string; timestamp: string; partialData?: any; firstChunkValue?: string; fullText?: string; fusedCursorPrediction?: any, isFusedCursorPredictionModel?: boolean, predictionId?: string, action?: string, suggestion?: any }} ICursorPayload
 */
/**
 * @param {{ data: Array<ICursorPayload>; byUUIDFolder: string; key: string;deprecatedCompleteDatasetJSONLFilePath: string; predictionDatasetJSONLFilePath: string }} params
 * @returns
 */
function generateDataset(params) {
  const { data, byUUIDFolder, key, deprecatedCompleteDatasetJSONLFilePath, predictionDatasetJSONLFilePath } = params;

  const previewFilePath = path.join(byUUIDFolder, `${key}.preview`);
  const promptFilePath = path.join(byUUIDFolder, `${key}.prompt`);

  const partialData = data.find((i) => !!i.partialData)?.partialData;
  const isFusedCursorPredictionModel = data.find((i) => !!i.isFusedCursorPredictionModel)?.isFusedCursorPredictionModel;
  const firstChunkValue = data.find((i) => !!i.firstChunkValue)?.firstChunkValue;
  const fullText = data.find((i) => !!i.fullText)?.fullText;
  const fusedCursorPrediction = data.find((i) => !!i.fusedCursorPrediction)?.fusedCursorPrediction;
  const displayedFusedCursorPrediction = data.find(
    (i) => i.action === 'displayFusedCursorPrediction'
  )?.fusedCursorPrediction;
  const fusedCursorPredictionPredictionId = data.find((i) => !!i.predictionId)?.predictionId;
  const acceptedSuggestionList = data.filter((i) => i.action === 'press Tab to acceptFullSuggestion and succeed');
  const firstChunkAcceptSuggestion = acceptedSuggestionList[0]?.suggestion;
  const fullTextAcceptSuggestion = acceptedSuggestionList[1]?.suggestion;

  if (!firstChunkValue) {
    console.log('No response for this request');
    return { promptFilePath: '' };
  }

  //
  const fileDiffHistories = partialData.fileDiffHistories; // 同一个文件会有多个item in this Array，如果中间夹杂别的文件的改动的话
  const additionalFiles = partialData.additionalFiles;

  //
  const currentFileContents = partialData.currentFile.contents;
  const currentFilePath = partialData.currentFile.relativeWorkspacePath;
  const currentCursorPosition = partialData.currentFile.cursorPosition;
  const cppIntent = partialData.cppIntentInfo.source;
  const additionalFilesWhichHasContents = additionalFiles.filter(
    (i) => i.visibleRangeContent.length && i.visibleRangeContent[0].length
  );

  // const replacedContents = replaceStringFromPosition(currentFileContents, currentCursorPosition.line, currentCursorPosition.column, firstChunkValue);
  const { replacedContents: replacedContentsWithFirstChunk, lastAcceptLine: lastAcceptLineWithFirstChunk, lastAcceptColumn: lastAcceptColumnWithFirstChunk } = replaceStringBasedOnSuggestion(
    currentFileContents,
    firstChunkAcceptSuggestion
  );
  const { replacedContents: replacedContentsWithFullText } = replaceStringBasedOnSuggestion(
    replacedContentsWithFirstChunk || '',
    fullTextAcceptSuggestion
  );

  if (replacedContentsWithFirstChunk) {
    // prompt
    const prompt = generatePrompt(fileDiffHistories, currentFileContents, currentCursorPosition, currentFilePath, cppIntent);
    fs.writeFileSync(promptFilePath, prompt, { encoding: 'utf-8' });
  }

  if (displayedFusedCursorPrediction) {
    // ======== prediction dataset jsonl ========
    const processedCurrentFileContents = modifyCode({
      code: currentFileContents,
      lineNumberZeroIndexed: currentCursorPosition.line,
      columnNumberZeroIndexed: currentCursorPosition.column,
      insertString: '<|current_cursor_position|>'
    });
    const datasetPredictionJSONL = {
      latestAcceptedContentWithCurrentCursorPosition: replacedContentsWithFirstChunk || processedCurrentFileContents,
      ground_truth: displayedFusedCursorPrediction,
    };

    fs.appendFileSync(predictionDatasetJSONLFilePath, JSON.stringify(datasetPredictionJSONL) + '\n');

    // prompt
    const predictionPrompt = generatePredictionPrompt(fileDiffHistories);
  }

  // ======== log content ========
  const diffHistory = partialData.diffHistory;

  const currentFileContentsWithToFill = modifyCode({
    code: currentFileContents,
    lineNumberZeroIndexed: currentCursorPosition.line,
    columnNumberZeroIndexed: currentCursorPosition.column,
    insertString: '[ToFill]'
  });
  // const replacedContentsWithFirstChunkWithCursorPosition = modifyCode({
  //   code: replacedContentsWithFirstChunk,
  //   lineNumberZeroIndexed: lastAcceptLineWithFirstChunk,
  //   columnNumberZeroIndexed: lastAcceptColumnWithFirstChunk,
  //   insertString: '<|current_cursor_position|>'
  // });

  outputPreview({
    previewFilePath,
    currentFileContentsWithToFill,
    currentCursorPosition,
    fileDiffHistories,
    fusedCursorPrediction,
    displayedFusedCursorPrediction,
    firstChunkValue,
    replacedContentsWithFirstChunk,
    // replacedContentsWithFirstChunkWithCursorPosition,
    replacedContentsWithFullText,
    fullText,
  });

  return {
    promptFilePath: fs.existsSync(promptFilePath) ? promptFilePath : '',
  }
}


function outputPreview(params) {
  const {
    previewFilePath,
    currentFileContentsWithToFill,
    currentCursorPosition,
    fileDiffHistories,
    fusedCursorPrediction,
    displayedFusedCursorPrediction,
    firstChunkValue,
    replacedContentsWithFirstChunk,
    // replacedContentsWithFirstChunkWithCursorPosition,
    replacedContentsWithFullText,
    fullText,
  } = params;

    fs.writeFileSync(previewFilePath, '', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, JSON.stringify(currentCursorPosition), { encoding: 'utf-8' });
    // fs.appendFileSync(previewFilePath, '\n\n' + '======== fileDiffHistories ========', { encoding: 'utf-8' });
    // outputFileDiffHistories(previewFilePath, fileDiffHistories);
    fs.appendFileSync(previewFilePath, '\n\n' + '======== currentFileContentsWithToFill ========', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + currentFileContentsWithToFill, { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + '======== firstChunkValue ========', { encoding: 'utf-8' });
    fs.appendFileSync(previewFilePath, '\n' + firstChunkValue, { encoding: 'utf-8' });
    if (replacedContentsWithFirstChunk) {
      fs.appendFileSync(previewFilePath, '\n' + '======== replace replacedContentsWithFirstChunk ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + replacedContentsWithFirstChunk, { encoding: 'utf-8' });
      // fs.appendFileSync(previewFilePath, '\n' + '======== replacedContentsWithFirstChunkWithCursorPosition ========', { encoding: 'utf-8' });
      // fs.appendFileSync(previewFilePath, '\n' + replacedContentsWithFirstChunkWithCursorPosition, { encoding: 'utf-8' });
    }
    if (fullText) {
      fs.appendFileSync(previewFilePath, '\n' + '======== fullText ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + fullText, { encoding: 'utf-8' });
    }
    if (replacedContentsWithFullText) {
      fs.appendFileSync(previewFilePath, '\n' + '======== replace replacedContentsWithFullText ========', { encoding: 'utf-8' });
      fs.appendFileSync(previewFilePath, '\n' + replacedContentsWithFullText, { encoding: 'utf-8' });
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

module.exports = {
  generateDataset
};