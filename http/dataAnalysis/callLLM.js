// @ts-check

const path = require('path');
const fs = require('fs');

const envContent = fs.readFileSync(path.resolve(__dirname, './.env'), { encoding: 'utf-8' });
const envObject = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split(': ');
  envObject[key] = value;
});

const dsUrl = 'https://api.deepseek.com/chat/completions'
const completionUrl = envObject['AZURE_OPENAI_COMPLETION_URL'];

const useDeepSeek = false;
const stream = true;
async function completion(code = "hi") {
  const startTime = performance.now();

  let fetchRes;
  if (useDeepSeek) {
    fetchRes = await fetch(dsUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': envObject['DEEPSEEK_KEY']
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'deepseek-chat',
        stream,
        temperature: 1,
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

const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_51_26.791Z____605959bf-9dfd-4480-b204-8d2fa0b0117d.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_50_45.219Z____5982eb3e-e9cf-47e1-9d58-3c8cea05460c.prompt')
const input = fs.readFileSync(editSample, { encoding: 'utf-8' });
completion(input).then(output => {
  console.log({output})
});
