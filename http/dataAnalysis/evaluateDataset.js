// @ts-check

const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');
const { completion } = require('./callLLM');
const { config, EndPoint } = require('./config');
const { replaceStringBasedOnSuggestion, replaceEditableRangeContent } = require('./replaceCode');
const { getCode } = require('./getCode');
const { normalizeOutput } = require('./string.utils');
const { getFileName } = require('./path.utils');

const endpoint = config.endpointType;
const id = new Date().toISOString().replace(/:/g, '_');

/**
 * 先inference拿到结果，再和ground truth进行比较
 * @param {string[]} promptFilePathList
 */
async function batchInvokeLLMAndEvaluate(promptFilePathList, specificLogFolderPath) {
  const summaryFolderPath = path.join(specificLogFolderPath, `${endpoint}_${id}_output.log`);
  // fs.writeFileSync(summaryFolderPath, '', { encoding: 'utf-8' });

  const promiseList = promptFilePathList.map(async (promptFilePath) => {
    if (!fs.existsSync(promptFilePath)) {
      return;
    }

    const tmp = path.basename(promptFilePath).split('.');
    tmp.pop();
    const fileName = tmp.join('.');
    const relatedJSONFilePath = path.join(path.dirname(promptFilePath), `${fileName}.json`);
    const jsonStr = fs.readFileSync(relatedJSONFilePath, { encoding: 'utf-8' });
    const json = JSON.parse(jsonStr);

    // =========== read preview file ===========
    const previewFilePath = path.join(path.dirname(promptFilePath), `${fileName}.preview`);
    const previewContent = fs.readFileSync(previewFilePath, { encoding: 'utf-8' });
    const _tmp = previewContent.split(
      '-------------------------------[       replacedContentsWithFirstChunk        ]--------------------------------\n'
    )[1];
    const replacedContentsWithFirstChunk = _tmp.split('\n---')[0];
    const _tmp2 = _tmp.split(
      '-------------------------------[         replacedContentsWithFullText         ]--------------------------------\n'
    )[1];
    const replacedContentsWithFullText = (_tmp2 || '').split('\n---')[0];
    const _tmp3_split = _tmp2.split(
      '-------------------------------[                  afterCode                  ]--------------------------------\n'
    );
    const _tmp3 = _tmp3_split[_tmp3_split.length - 1];
    const lastAfterCode = (_tmp3 || '').split('\n---')[0];

    if (!lastAfterCode) {
      return;
    }

    // =========== prepare data ===========
    const partialData = json.find((i) => !!i.partialData)?.partialData;

    const currentFileContents = partialData.currentFile.contents;
    const cursorPosition = partialData.currentFile.cursorPosition;

    const input = fs.readFileSync(promptFilePath, { encoding: 'utf-8' });
    const rawOutput = await completion(input);
    if (!rawOutput) {
      return;
    }
    const output = normalizeOutput(rawOutput);

    const replacedOutput = applyOutputIntoRawContent(output, cursorPosition, currentFileContents);

    const metricsRes = await calculateMetrics({ groundTruth: lastAfterCode, output: replacedOutput });
    const { em, es } = metricsRes;

    // ====================== DATA ======================
    const data =
      `------------------------------------------[        output        ]-------------------------------------------
${output}
------------------------------------------[    replacedOutput    ]-------------------------------------------
${replacedOutput}
------------------------------------------[    lastAfterCode    ]-------------------------------------------
${lastAfterCode}
------------------------------------------[       em & es       ]-------------------------------------------
em: ${em}
es: ${es}
-------------------------------[ groundTruth (replacedContentsWithFirstChunk) ]--------------------------------
${replacedContentsWithFirstChunk}
` +
      (replacedContentsWithFullText
        ? `-------------------------------[  groundTruth (replacedContentsWithFullText)  ]--------------------------------
${replacedContentsWithFullText}`
        : '');
    // ====================== DATA ======================

    const dependentLogPath = path.join(path.dirname(promptFilePath), `${fileName}.result_${endpoint}.log`);
    fs.writeFileSync(dependentLogPath, data, { encoding: 'utf-8' });
    // fs.appendFileSync(summaryFolderPath, data, { encoding: 'utf-8' });
  });
}

/**
 *
 * @param {string} output
 * @param {{ line: number; }} cursorPosition
 * @param {string} currentFileContents
 */
function applyOutputIntoRawContent(output, cursorPosition, currentFileContents) {
  const res = replaceEditableRangeContent(currentFileContents, output, cursorPosition.line);
  return res;
}

/**
 *
 * @param {string} output
 * @param {{ line: number; }} cursorPosition
 * @param {string} currentFileContents
 */
function _applyOutputIntoRawContent(output, cursorPosition, currentFileContents) {
  const lineCountOfOutput = output.split('\n');
  const startLineNumber = cursorPosition.line + 1; // zero indexed => one indexed
  const endLineNumberInclusive = cursorPosition.line + lineCountOfOutput.length + 1; // zero indexed => one indexed
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
    config.useEditableRange
  );

  return replacedOutput;
}

/**
 *
 * @param {{ groundTruth: string, output: string }} params
 * @returns {Promise<{ em: string, es: string }>}
 */
function calculateMetrics(params) {
  const { output, groundTruth } = params;
  return new Promise((resolve) => {
    exec(`python ./eval_metric.py --output='${output}' --ground_truth='${groundTruth}'`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }

      const result = JSON.parse(stdout);
      resolve(result);
    });
  });
}

/**
 * @deprecated
 * @param {string} specificLogFolderPath
 */
function batchEvaluateByUUID(specificLogFolderPath) {
  const summaryFolderPath = path.join(specificLogFolderPath, `dataset_evaluation_summary_${id}.log`);
  fs.writeFileSync(summaryFolderPath, '', { encoding: 'utf-8' });

  const fileList = fs.readdirSync(path.join(specificLogFolderPath, 'byUUID'));
  const previewFileList = fileList.filter((f) => f.endsWith('.preview'));

  let totalCount = 0;
  let passCount = 0;
  const promiseList = [];

  previewFileList.forEach((p) => {
    const previewFilePath = path.join(specificLogFolderPath, 'byUUID', p);
    const content = fs.readFileSync(previewFilePath, { encoding: 'utf-8' });
    const tmp = content.split(
      '-------------------------------[        currentFileContentsWithToFill        ]--------------------------------\n'
    )[1];
    const currentFileContentsWithToFill = tmp.split('\n---')[0];
    const tmp2 = tmp.split(
      '-------------------------------[               firstChunkValue               ]--------------------------------\n'
    )[1];
    const firstChunkValue = (tmp2 || '').split('\n---')[0];
    const originalText = currentFileContentsWithToFill.replace('[ToFill]', '<|current_cursor_position|>');

    const fileName = getFileName(previewFilePath);
    const jsonPath = path.join(specificLogFolderPath, 'byUUID', `${fileName}.json`);
    const jsonContent = fs.readFileSync(jsonPath, { encoding: 'utf-8' });

    const hasDisplayCppSuggestionAction = jsonContent.includes(`"action": "displayCppSuggestion"`);
    if (!hasDisplayCppSuggestionAction) {
      return;
    }

    if (!currentFileContentsWithToFill || !firstChunkValue) {
      return;
    }
    totalCount++;

    const promise = evaluatePartialOutput(firstChunkValue, originalText).then((rawOutput) => {
      const output = normalizeOutput(rawOutput);
      try {
        const json = JSON.parse(output);

        const data = `-------------------------------[                 previewPath                 ]--------------------------------
${previewFilePath}
-------------------------------[        currentFileContentsWithToFill        ]--------------------------------
${originalText}
-------------------------------[               firstChunkValue               ]--------------------------------
${firstChunkValue}
-------------------------------[               evaluationOutput              ]--------------------------------
[Combined Code]:
${json.CombinedCode}

[Analysis]:
${json.Analysis}

[Score]:
${json.Score}
==============================================================================================================

`;

        fs.appendFileSync(summaryFolderPath, data, { encoding: 'utf-8' });

        const score = +json.Score;
        if (score > 6) {
          passCount++;
        }
      } catch (e) {
        console.error(e);
      }
    });

    promiseList.push(promise);
  });

  Promise.all(promiseList).then(() => {
    const summaryData = `Pass rate:
${passCount}/${totalCount} = ${passCount / totalCount}`;
    fs.appendFileSync(summaryFolderPath, summaryData, { encoding: 'utf-8' });
  });
}

/**
 * @param {string} partialOutput
 * @param {string} originalText
 */
function evaluatePartialOutput(partialOutput, originalText) {
  const prompt = `You are an expert in coding. Here is the original text with cursor position and the LLM generated code based on that.
'<|current_cursor_position|>' in original text is just to identify the current position of cursor.

# Original text:
${originalText}

# Partial output from LLM:
${partialOutput}

# Task
1. Since the model output is partial code, please combine the output with original text, make sure ignore <|current_cursor_position|>.
2. Check the combined code, please rate the code from 0 ~ 10, 0 means bad and 10 means great.
  2.1 Please only check the correctness.
  2.2 If the combined code is not completed, then check whether it improved the completeness of the original text. If the model output does improve the completeness of the original text. We can also give a high score.

# Output format
{
  "CombinedCode": "<combined_code>",
  "Analysis": "<analysis>",
  "Score": "<score>"
}`;

  return completion(prompt, EndPoint.DeepSeek).then((output) => {
    return output;
  });
}

module.exports = {
  batchInvokeLLMAndEvaluate,
  batchEvaluateByUUID,
  evaluatePartialOutput,
};
