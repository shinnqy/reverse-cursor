// @ts-check
const path = require('path');

const EndPoint = {
  DeepSeek: 'DeepSeek',
  GPT35: 'GPT35',
  Qwen25Coder7BInstructGPTQInt4: 'Qwen25Coder7BInstructGPTQInt4',
  aliQwen7BInstruct: 'aliQwen7BInstruct'
};

const config = {
  useEditableRange: true,
  editableRangeFromCursorLine: 2,
  endpointType: EndPoint.DeepSeek,
  logContainerFolder: path.resolve(__dirname, '../logV2'),
  // logFileName: 'arkui_log3',
  // logFileName: 'mutliLine',
  logFileName: 'trafficLight4',
  // logFileName: 'test_insert_in_middle_1',
};

module.exports = {
  EndPoint,
  config,
};
