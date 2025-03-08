// @ts-check

function modifyCode(code, lineNumber, columnNumber, insertString) {
  if (!code) {
    return '';
  }

  try {
    // start from 0
    lineNumber = lineNumber;
    columnNumber = columnNumber;

    const lines = code.split('\n');

    if (lineNumber < 0 || lineNumber > lines.length - 1) {
      throw new Error('Invalid line number');
    }

    const targetLine = lines[lineNumber];

    if (columnNumber < 0 || columnNumber > targetLine.length - 1) {

      const needColumnCount = columnNumber - targetLine.length;
      const newLine = targetLine + (new Array(needColumnCount)).fill('').join(' ') + insertString;
      lines[lineNumber] = newLine;
      return lines.join('\n');
    }

    const newLine = targetLine.slice(0, columnNumber) + insertString + targetLine.slice(columnNumber);
    lines[lineNumber] = newLine;

    return lines.join('\n');
  } catch (e) {
    console.error(e)
  }
}

exports.modifyCode = modifyCode;

const code =
`Entry
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


    }
    .height('100%')
    .width('100%')
  }
}`;

const lineNumber = 16;
const columnNumber = 6;
const insertString = "<|current_cursor_position|>";

// const updatedCode = modifyCode(code, lineNumber, columnNumber, insertString);
// console.log(updatedCode);