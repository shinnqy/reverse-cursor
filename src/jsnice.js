// const fs = require('fs');
// const path = require('path');
// const jsnice = require('jsnice');

// // const fileName = 'workbench.desktop.main.js';
// const fileName = 'cursor-always-local-main.js';

// const destPath = path.resolve(__dirname, `../jsnice/${fileName}`);
// const sourcePath = path.resolve(__dirname, `../processed/${fileName}`);
// const sourceCode = fs.readFileSync(sourcePath, 'utf8');

// jsnice.nicify(sourceCode, { pretty: true, rename: true }, (err, data) => {
//   if (err) {
//     console.error('failed: \n')
//     console.error(err);
//   } else {
//     // fs.writeFile(destPath, data, { encoding: 'utf8' }, (err) => {
//     //   if (err) {
//     //     console.log('error writing file', err);
//     //   } else {
//     //     console.log('file written successfully');
//     //   }
//     // });
//     console.log({data})
//   }
// });

