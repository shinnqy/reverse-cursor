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

  // ======== perf data ========
  const requestStartISOTime = data.find((i) => !!i.partialData)?.timestamp;
  const requestStartTimestamp = new Date(requestStartISOTime || '').getTime();
  const firstChunkResponseISOTime = data.find((i) => !!i.firstChunkValue)?.timestamp;
  const firstChunkResponseTimestamp = new Date(firstChunkResponseISOTime || '').getTime();

  const duration = firstChunkResponseTimestamp - requestStartTimestamp;

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
    firstChunkDuration: duration,
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

const data =
(`${JSON.stringify(currentCursorPosition)}

-------------------------------[        currentFileContentsWithToFill        ]--------------------------------
${currentFileContentsWithToFill}
-------------------------------[               firstChunkValue               ]--------------------------------
${firstChunkValue}`)
+ (replacedContentsWithFirstChunk ?
`
-------------------------------[       replacedContentsWithFirstChunk        ]--------------------------------
${replacedContentsWithFirstChunk}`
: '')
+ (fullText ?
`
-------------------------------[                   fullText                  ]--------------------------------
${fullText}`
: '')
+ (replacedContentsWithFullText ?
`
-------------------------------[         replacedContentsWithFullText         ]--------------------------------
${replacedContentsWithFullText}`
: '')
+ (fusedCursorPrediction ?
`
-------------------------------[             fusedCursorPrediction            ]--------------------------------
${JSON.stringify(fusedCursorPrediction, null, 2)}`
: '')
+ (displayedFusedCursorPrediction ?
`
--------------------------------[        displayedFusedCursorPrediction       ]---------------------------------
${JSON.stringify(displayedFusedCursorPrediction, null, 2)}`
: '');

    fs.writeFileSync(previewFilePath, data, { encoding: 'utf-8' });
}

module.exports = {
  generateDataset
};