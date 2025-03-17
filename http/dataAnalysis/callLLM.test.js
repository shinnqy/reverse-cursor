// @ts-check
const path = require('path');
const fs = require('fs');
const { completion } = require('./callLLM');

const errorCases = [
  path.resolve(__dirname, '../logV2/arkui_log3/byUUID/2025-03-03T02_35_18.227Z____c6b4c568-831f-484f-a8dc-8723f47d98bd.prompt'), // pushU<ToFill>
  path.resolve(__dirname, '../logV2/arkui_log3/byUUID/2025-03-03T02_37_14.458Z____3b77724c-dfc8-4e58-8cca-83b924076ad0.prompt'), // change @prop => this.title
  path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_51_44.577Z____97b128ee-8b5c-46d0-b699-de2403520525.prompt'),
  path.resolve(__dirname, '../logV2/trafficLight4/byUUID/2025-03-09T13_12_32.110Z____965d0a11-82af-42cb-891c-887939aa4307.prompt'),
  path.resolve(__dirname, '../logV2/test_insert_in_middle_1/byUUID/2025-03-11T07_14_46.458Z____38e198d6-d052-4fd1-8529-ded6bad9e2c2.prompt'),
];

// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_51_26.791Z____605959bf-9dfd-4480-b204-8d2fa0b0117d.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight3/byUUID/2025-03-02T14_50_45.219Z____5982eb3e-e9cf-47e1-9d58-3c8cea05460c.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight4/byUUID/2025-03-09T13_12_20.325Z____1326056f-aad3-4f87-a214-78270e950f50.prompt')
// const editSample = path.resolve(__dirname, '../logV2/trafficLight4/byUUID/2025-03-09T13_12_32.110Z____965d0a11-82af-42cb-891c-887939aa4307.prompt')

const editSample = errorCases[0];
const input = fs.readFileSync(editSample, { encoding: 'utf-8' });
completion(input).then(output => {
  console.log({output})
});
