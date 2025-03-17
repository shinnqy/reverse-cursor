// @ts-check
const path = require('path');

const EndPoint = {
  DeepSeek: 'DeepSeek',
  GPT35: 'GPT35',
  Qwen25Coder7BInstructGPTQInt4: 'Qwen25Coder7BInstructGPTQInt4',
  aliQwen7BInstruct: 'aliQwen7BInstruct',
  aliQwen14BInstruct: 'aliQwen14BInstruct',
  aliQwen32BInstruct: 'aliQwen32BInstruct',
};

const config = {
  useEditableRange: true,
  editableRangeFromCursorLine: 10,
  endpointType: EndPoint.aliQwen32BInstruct,
  logContainerFolder: path.resolve(__dirname, '../logV2'),
  // logFileName: 'arkui_log3',
  // logFileName: 'mutliLine',
  logFileName: 'trafficLight3',
  // logFileName: 'test_insert_in_middle_1',
};

module.exports = {
  EndPoint,
  config,
};
