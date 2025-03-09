// @ts-check

const fs = require('fs');
const path = require('path');
const { modifyCode } = require('./modifyCode');
const { generateDataset } = require('./generateDataset');
const { batchInvokeLLM } = require('./evaluateDataset');

const logContainerFolder = path.resolve(__dirname, '../logV2');
// const logFileName = 'arkui_log3';
const logFileName = 'trafficLight3';
// const logFileName = 'mutliLine';

main(logFileName);

function main(logFileName) {
  const specificLogFolderPath = path.join(logContainerFolder, logFileName);
  const logPath = path.join(specificLogFolderPath, `${logFileName}.txt`);
  ensureFolder(specificLogFolderPath);

  const formattedJSONPath = path.join(specificLogFolderPath, `${logFileName}_formatted.json`);

  formatLogIntoJSON(logPath, formattedJSONPath);

  const promptFilePathList = formatByGeneratedUUID(formattedJSONPath);

  batchInvokeLLM(promptFilePathList, specificLogFolderPath);
}

function ensureFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {recursive: true });
  }
}

function formatLogIntoJSON(logPath, formattedJSONPath) {
  if (fs.existsSync(formattedJSONPath)) {
    console.log('Already processed: ' + logPath);
    return;
  }

  const timestampRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]*Z/;

  const logValue = fs.readFileSync(logPath, { encoding: 'utf-8' });
  const logValueList = logValue.split('\n');

  const formattedJSONLis = [];
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
      formattedJSONLis.push(json);
    } else {
      console.log({item})
      throw new Error('Invalid log')
    }
  });
  fs.writeFileSync(formattedJSONPath, JSON.stringify(formattedJSONLis, null, 2), { encoding: 'utf-8' });
}

function formatByGeneratedUUID(formattedJSONPath) {
  const jsonListStr = fs.readFileSync(formattedJSONPath, { encoding: 'utf-8'});
  const jsonList = JSON.parse(jsonListStr);
  const originDataLength = jsonList.length;
  let countProcessedData = 0;

  const byUUIDFolder = path.join(path.dirname(formattedJSONPath), 'byUUID');
  ensureFolder(byUUIDFolder);

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

  const deprecatedCompleteDatasetJSONLFilePath = path.join(path.dirname(formattedJSONPath), `${logFileName}_dataset_deprecated_complete.jsonl`);
  const editDatasetJSONLFilePath = path.join(path.dirname(formattedJSONPath), `${logFileName}_dataset_deprecated_edit.jsonl`);
  const predictionDatasetJSONLFilePath = path.join(path.dirname(formattedJSONPath), `${logFileName}_dataset_prediction.jsonl`);
  fs.writeFileSync(deprecatedCompleteDatasetJSONLFilePath, '', { encoding: 'utf-8' });
  fs.writeFileSync(predictionDatasetJSONLFilePath, '', { encoding: 'utf-8' });

  const promptFilePathList = [];

  const mapList = Object.entries(map);
  mapList.forEach(item => {
    /**
     * @type {Array<{ generateUuid?: string; generationUUID?: string; timestamp: string; partialData?: any; firstChunkValue?: string; fullText?: string; fusedCursorPrediction?: any }>}
     */
    const data = item[1];
    const uuid = data[0].generateUuid || data[0].generationUUID;
    const timestamp = data[0].timestamp.replace(/\:/g, '_');
    const key = `${timestamp}____${uuid}`;
    const subItemPath = path.join(byUUIDFolder, `${key}.json`);
    fs.writeFileSync(subItemPath, JSON.stringify(item[1], null, 2), { encoding: "utf-8" });

    const { promptFilePath } = generateDataset({data, byUUIDFolder, key, deprecatedCompleteDatasetJSONLFilePath, predictionDatasetJSONLFilePath});
    if (promptFilePath) {
      promptFilePathList.push(promptFilePath);
    }
  });

  console.log('======= Summary =======');
  console.log('Total data: ' + originDataLength);
  console.log('Processed data: ' + countProcessedData);

  const dirPath = path.dirname(formattedJSONPath);
  const unProcessedDataPath = path.resolve(dirPath, `./${logFileName}_unprocessed.json`);
  fs.writeFileSync(unProcessedDataPath, JSON.stringify(unProcessedData, null, 2), { encoding: 'utf-8' });

  return promptFilePathList;
}
