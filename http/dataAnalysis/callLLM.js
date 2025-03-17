// @ts-check

const path = require('path');
const fs = require('fs');
const { EndPoint, config } = require('./config');

const envContent = fs.readFileSync(path.resolve(__dirname, './.env'), { encoding: 'utf-8' });
const envObject = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split(': ');
  if (!key.trim()) {
    return;
  }
  envObject[key] = value.trim();
});

const completionUrl = envObject['AZURE_OPENAI_COMPLETION_URL'];

const urlMap = {
  [EndPoint.DeepSeek]: 'https://api.deepseek.com/chat/completions',
  [EndPoint.GPT35]: envObject['AZURE_OPENAI_COMPLETION_URL'],
  [EndPoint.Qwen25Coder7BInstructGPTQInt4]: 'http://7.216.58.118:8087/v1/chat/completions',
  [EndPoint.aliQwen7BInstruct]: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
  [EndPoint.aliQwen14BInstruct]: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
  [EndPoint.aliQwen32BInstruct]: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
};

const AuthorizationMap = {
  [EndPoint.DeepSeek]: envObject['DEEPSEEK_KEY'],
  [EndPoint.aliQwen7BInstruct]: 'Bearer sk-e46b06ee8bae41d1842f2b2830581942',
  [EndPoint.aliQwen14BInstruct]: 'Bearer sk-e46b06ee8bae41d1842f2b2830581942',
  [EndPoint.aliQwen32BInstruct]: 'Bearer sk-e46b06ee8bae41d1842f2b2830581942',
};

const modelMap = {
  [EndPoint.DeepSeek]: 'deepseek-chat',
  [EndPoint.Qwen25Coder7BInstructGPTQInt4]: 'Qwen2.5-Coder-7B-Instruct-GPTQ-Int4',
  [EndPoint.aliQwen7BInstruct]: 'qwen2.5-coder-7b-instruct',
  [EndPoint.aliQwen14BInstruct]: 'qwen2.5-coder-14b-instruct',
  [EndPoint.aliQwen32BInstruct]: 'qwen2.5-coder-32b-instruct',
};

const endpoint = config.endpointType;

const useOpenAICompatible = endpoint !== EndPoint.GPT35;
const stream = false;
async function completion(code = "hi") {
  const startTime = performance.now();

  let fetchRes;
  if (useOpenAICompatible) {
    fetchRes = await fetch(urlMap[endpoint], {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthorizationMap[endpoint],
      },
      method: 'POST',
      body: JSON.stringify({
        model: modelMap[endpoint],
        stream,
        temperature: 0,
        messages: [
          // {
          //   role: 'system',
          //   content: 'You are an expert of coding. Please help me to generate the next code.'
          // },
          {
            role: 'user',
            content: code
          }
        ],
      })
    });
  } else {
    fetchRes = await fetch(completionUrl, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': envObject['AZURE_OPENAI_KEY']
      },
      method: 'POST',
      body: JSON.stringify({
        temperature: 1,
        stream,
        messages: [
          // {
          //   role: 'system',
          //   content: 'You are an expert of coding. Please help me to generate the next code.'
          // },
          {
            role: 'user',
            content: code
          }
        ],
      })
    });
  }

  if (stream) {
    if (!fetchRes.body) {
      throw new Error('Stream response is not supported');
    }

    const decoder = new TextDecoder();
    let fullText = '';

    let lastDataOfPreviousChunk = null;
    for await (const chunk of fetchRes.body) {
      const rawData = decoder.decode(chunk, { stream: true });
      const dataList = rawData.split('\n').filter(i => !!i);

      for (let i = 0; i < dataList.length; i++) {
        const dataItem = dataList[i];
        const dataStr = dataItem.split('data: ')[1];
        if (dataStr === '[DONE]') {
          continue;
        }
        try {
          processDataStr(dataStr);
        } catch (e) {
          if (lastDataOfPreviousChunk != null) {
            const combinedData = lastDataOfPreviousChunk + dataItem;
            lastDataOfPreviousChunk = null;
            const dataStr = combinedData.split('data: ')[1];
            try {
              processDataStr(dataStr);
            } catch (e) {
              console.log({error: e})
            }
          } else {
            lastDataOfPreviousChunk = dataItem
          }
        }
      }
    }

    /**
     * @param {string} dataStr
     */
    function processDataStr(dataStr) {
      const dataObj= JSON.parse(dataStr);
      if (Array.isArray(dataObj.choices) && dataObj.choices.length > 0) {
        /**
         * @type {{ delta: { content: string; role: 'assistant' | 'user' | 'system' } }}
         */
        const data = dataObj.choices[0];
        const text = data.delta.content;
        if (typeof text === 'string') {
          fullText += text;
        }
        console.log({text})
      }
    }

    return fullText;
  } else {
    const res = await fetchRes.json();

    const endTime = performance.now();
    console.log('Duration LLM call: ', endTime - startTime);

    const data = res.choices[0].message.content;
    return data
  }
}

module.exports = {
  completion,
};
