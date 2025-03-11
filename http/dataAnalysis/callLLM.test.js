// @ts-check
const path = require('path');
const fs = require('fs');
const { completion } = require('./callLLM');

// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_51_26.791Z____605959bf-9dfd-4480-b204-8d2fa0b0117d.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_50_45.219Z____5982eb3e-e9cf-47e1-9d58-3c8cea05460c.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight4/byUUID/2025-03-09T13_12_20.325Z____1326056f-aad3-4f87-a214-78270e950f50.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight4/byUUID/2025-03-09T13_12_32.110Z____965d0a11-82af-42cb-891c-887939aa4307.prompt')
const editSample = path.resolve(__dirname, '../logV2/trafficLight5/byUUID/2025-03-10T17_28_08.119Z____5cf408bb-95f0-4fcd-9eaa-e8dee13be466.prompt')
const input = fs.readFileSync(editSample, { encoding: 'utf-8' });
completion(input).then(output => {
  console.log({output})
});
