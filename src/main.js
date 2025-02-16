
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// const fileName = 'workbench.desktop.main.js';
const fileName = 'cursor-always-local-main.js';

const sourceCode = fs.readFileSync(path.resolve(__dirname, `../minified/${fileName}`), 'utf8');
const destinationFilePath = path.resolve(__dirname, `../processed/${fileName}`);
console.log('start prettifying');
prettier.format(sourceCode, { semi: false, parser: 'babel' })
  .then((formatted) => {
    console.log('formatted done, now write file: \n');
    fs.writeFile(destinationFilePath, formatted, { encoding: 'utf8' }, (err) => {
      if (err) {
        console.log('error writing file', err);
      } else {
        console.log('file written successfully');
      }
    });
  })
  .catch((error) => {
    console.log('error', error);
  });


function jsNice() {
  //
}