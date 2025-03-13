// @ts-check

/**
 * @typedef {Object} StreamResponse
 * @property {string} text
 * @property {{ startLineNumber: number; endLineNumberInclusive: number }} rangeToReplace
 * @property {{ isFusedCursorPredictionModel: boolean }} modelInfo
 * @property {{ relativePath: string; lineNumberOneIndexed: number; expectedContent: string; shouldRetriggerCpp: boolean }} cursorPredictionTarget
 * @property {boolean} doneEdit
 * @property {boolean} doneStream
 */

const streamExample = `
// 第一个stream chunk
{"cursorRetrieval":{"text":"function","rangeToReplace":{"startLineNumber":1,"endLineNumberInclusive":1},"modelInfo":{"isFusedCursorPredictionModel":true}}}
// 后续的chunk
{"cursorRetrieval":{"text":" change"}}
{"cursorRetrieval":{"text":"Light"}}
{"cursorRetrieval":{"text":"("}}
{"cursorRetrieval":{"text":"light"}}
{"cursorRetrieval":{"text":":"}}
{"cursorRetrieval":{"text":" Traffic"}}
{"cursorRetrieval":{"text":"Light"}}
......
// 结束stream，满了第一行会截断返回为firstChunk，如果还有后续text就会返回fullText
......
//
{"cursorRetrieval":{"text":"","doneEdit":true}}
{"cursorRetrieval":{"text":"","cursorPredictionTarget":{"relativePath":"src/components/test2.ts","lineNumberOneIndexed":6,"expectedContent":"","shouldRetriggerCpp":false}}}
{"cursorRetrieval":{"text":"","doneStream":true}}
`;

const a = `
We represent user's recent actions in the following format:
<line number><add action of delete action>|<content in this line>

For example:
1-|import { foo } from 'foo';
1+|import { bar } from 'bar';

This means the user has deleted the code "import { foo } from 'foo';" in line 1 and added then add code "import { bar } from 'bar';" in line 1.
`
const a1 = `
1. Enforce code format strictly matching existing code style.
`; // 新增了这个 