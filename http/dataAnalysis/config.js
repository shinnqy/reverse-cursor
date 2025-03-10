const EndPoint = {
  DeepSeek: 'DeepSeek',
  GPT35: 'GPT35',
  Qwen25Coder7BInstructGPTQInt4: 'Qwen25Coder7BInstructGPTQInt4',
  aliQwen7BQuant: 'aliQwen7BQuant'
};

const config = {
  endpointType: EndPoint.aliQwen7BQuant,
};

module.exports = {
  EndPoint,
  config,
};
