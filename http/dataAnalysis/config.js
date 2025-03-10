// @ts-check
const path = require('path');

const EndPoint = {
  DeepSeek: 'DeepSeek',
  GPT35: 'GPT35',
  Qwen25Coder7BInstructGPTQInt4: 'Qwen25Coder7BInstructGPTQInt4',
  aliQwen7BQuant: 'aliQwen7BQuant'
};

const config = {
  endpointType: EndPoint.aliQwen7BQuant,
  logContainerFolder: path.resolve(__dirname, '../logV2'),
  // logFileName: 'arkui_log3',
  // logFileName: 'mutliLine',
  logFileName: 'trafficLight5',
};

module.exports = {
  EndPoint,
  config,
};
