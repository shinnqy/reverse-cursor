// @ts-check

const { evaluatePartialOutput } = require('./evaluateDataset');

{
  const partialOutput = 'function changeLight(light: TrafficLight) {';
  const originalText = 'function<|current_cursor_position|>';
  evaluatePartialOutput(partialOutput, originalText);
}

{
  const partialOutput =
`function changeLight(light: TrafficLight) {
  switch (light) {
    case light.RED:
      console.log('RED');
      break;
  }
}`;
  const originalText = 'function<|current_cursor_position|>';
  evaluatePartialOutput(partialOutput, originalText);
}

