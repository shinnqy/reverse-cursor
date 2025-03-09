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

const useDeepSeek = true;
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

  const res = await fetchRes.json();

  const endTime = performance.now();
  console.log('Duration LLM call: ', endTime - startTime);

  const data = res.choices[0].message.content;
  return data
}

module.exports = {
  completion,
};

// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_51_26.791Z____605959bf-9dfd-4480-b204-8d2fa0b0117d.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_50_45.219Z____5982eb3e-e9cf-47e1-9d58-3c8cea05460c.prompt')
// const input = fs.readFileSync(editSample, { encoding: 'utf-8' });
// completion(input).then(output => {
//   console.log({output})
// });
