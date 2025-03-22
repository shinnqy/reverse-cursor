// @ts-check

const { modifyCode } = require('./modifyCode');


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