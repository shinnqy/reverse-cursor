// @ts-check

const { replaceStringBasedOnSuggestion } = require('./replaceCode');

const processedCurrentFileContents =
`@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })

      [ToFill]
    }
    .height('100%')
    .width('100%')
  }
}`;

const currentFileContents = "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n\n      \n    }\n    .height('100%')\n    .width('100%')\n  }\n}";
const trustedResponse = "\n      Button('Click me') {\n    }\n    .height('100%')\n    .width('100%')";

const suggestion = {
  "uniqueId": "74419e1d-b899-40d0-933b-84598fa6956e",
  "uri": {
    "$mid": 1,
    "fsPath": "/Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/Index.ets",
    "external": "file:///Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/Index.ets",
    "path": "/Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/Index.ets",
    "scheme": "file"
  },
  "modelVersionWhenInvoked": 2,
  "suggestionIsCurrentlyHidden": true,
  "modelVersionWhenCreated": 2,
  "monotonicallyIncreasingSuggestionId": 1,
  "range": {
    "startLineNumber": 16,
    "startColumn": 1,
    "endLineNumberInclusive": 20,
    "endColumn": 19
  },
  "replaceText": "\n      Button() {\n    }\n    .height('100%')\n    .width('100%')",
  "originalText": "\n\n    }\n    .height('100%')\n    .width('100%')",
  "startingSuggestionRange": {
    "startLineNumber": 16,
    "startColumn": 1,
    "endLineNumberInclusive": 20,
    "endColumn": 19
  },
  "diffText": "\n      Button() {\n    }\n    .height('100%')\n    .width('100%')",
  "fullOriginalText": "\n\n    }\n    .height('100%')\n    .width('100%')",
  "suggestionTriggerTime": 1740969279318.3,
  "greens": [],
  "source": "line_change",
  "requestId": "3ce9e1e1-13e6-4db5-b604-236337364af8",
  "selection": {
    "startLineNumber": 16,
    "startColumn": 1,
    "endLineNumberInclusive": 20,
    "endColumn": 19
  },
  "undoRedoGroup": {
    "id": 1,
    "b": 2
  },
  "immediatelySeen": false,
  "hasBeenSeen": false,
  "abortController": {},
  "trackedRange": {
    "startLineNumber": 16,
    "startColumn": 1,
    "endLineNumber": 20,
    "endColumn": 19
  },
  "trackedText": "\n      \n    }\n    .height('100%')\n    .width('100%')",
  "decorationId": "b;20",
  "onAcceptDisplayId": "bc420c2f-68b9-4703-ab05-dd60310256e4"
};

const currentFileContents2 = "@Preview\n@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n}\n";
const suggestion2 = {
  "uniqueId": "792dbb43-f9bd-41c2-8861-941577761a7c",
  "uri": {
    "$mid": 1,
    "fsPath": "/Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/AboutMe.ets",
    "external": "file:///Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/AboutMe.ets",
    "path": "/Users/shinn/DevEcoStudioProjects/MyApplication2/entry/src/main/ets/pages/AboutMe.ets",
    "scheme": "file"
  },
  "modelVersionWhenInvoked": 14,
  "suggestionIsCurrentlyHidden": true,
  "modelVersionWhenCreated": 14,
  "monotonicallyIncreasingSuggestionId": 35,
  "range": {
    "startLineNumber": 2,
    "startColumn": 1,
    "endLineNumberInclusive": 7,
    "endColumn": 1
  },
  "replaceText": "@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}",
  "originalText": "@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n}\n",
  "startingSuggestionRange": {
    "startLineNumber": 2,
    "startColumn": 1,
    "endLineNumberInclusive": 7,
    "endColumn": 1
  },
  "diffText": "@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}",
  "fullOriginalText": "@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n}\n",
  "suggestionTriggerTime": 1740969383817.2,
  "greens": [],
  "source": "line_change",
  "requestId": "09cc23a5-b10b-46fe-8179-714f96152d10",
  "selection": {
    "startLineNumber": 2,
    "startColumn": 1,
    "endLineNumberInclusive": 7,
    "endColumn": 1
  },
  "fusedCursorPredictionId": "e0f8d63d-e79f-41e3-a3b5-544081cb05af",
  "undoRedoGroup": {
    "id": 36,
    "b": 2
  },
  "immediatelySeen": false,
  "hasBeenSeen": false,
  "abortController": {},
  "trackedRange": {
    "startLineNumber": 2,
    "startColumn": 1,
    "endLineNumber": 7,
    "endColumn": 1
  },
  "trackedText": "@Component\nstruct AboutMe {\n  @State message: string = 'About Me';\n\n}\n",
  "decorationId": "d;61"
};

// const groundTruth = replaceStringFromPosition(currentFileContents, 16, 6, trustedResponse);
// console.log(groundTruth);

// const ground_truth = replaceStringBasedOnSuggestion(currentFileContents, suggestion);
// console.log(ground_truth);

// {
//   const currentFileContents =
// `enum TrafficLight {
//   Red = 'red',
//   Yellow = 'yellow',
//   Green = 'green',
// }

// function changeLight(light: TrafficLight) {
//   if (light === TrafficLight.Red) {
//     return TrafficLight.Green;
//   }
//   console.log('light', light);
// }

// `;
//   const trustedResponse = "  } else if (light === TrafficLight.Green) {\n    return TrafficLight.Yellow;\n  } else if (light === TrafficLight.Yellow) {\n    return TrafficLight.Red;\n  }\n  console.log('light', light);";
//   const groundTruth = replaceStringFromPosition(currentFileContents, 10, 5, trustedResponse);
//   console.log(groundTruth);
// }