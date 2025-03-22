const fs = require('fs');
const path = require('path');

const workbenchPath = path.resolve(__dirname, './workbench.desktop.main.js');
const aiservicev1Path = path.resolve(__dirname, './cursor/aiservice.v1.js');

const aiserviceContent = fs.readFileSync(aiservicev1Path, {encoding: 'utf-8'});
const workbenchContent = fs.readFileSync(workbenchPath, {encoding: 'utf-8'});

// const aiServiceClassNameList = aiserviceContent.split('\n').filter(line => line.includes('extends _ {')).map(line => {
//   const ex = /\s*(var)?\s+([A-Za-z0-9_$]+)\s+=\s+class\s+([A-Za-z0-9_$]+)\s+extends\s+_\s+{/;
//   const result = line.match(ex);
//   if (Array.isArray(result) && result.length > 3) {
//     const name = result[2];
//     if (workbenchContent.includes(name)) {
//       return name
//     } else {
//       return null
//     }
//   } else {
//     return line
//   }
// }).filter(i => !!i);
// console.log(aiServiceClassNameList)

// fs.writeFileSync(
//   path.resolve(__dirname, './className.log'),
//   aiServiceClassNameList.join(',\n'),
//   {encoding: 'utf-8'}
// );

const list = aiserviceContent.split('\n');
const aiServiceConstantsNameList = list.filter((line, index) => list[index + 1]?.includes(';(function (')).map(line => {
  const ex = /\s*(var)?\s+([A-Za-z0-9_$]+)(;)?/;
  const result = line.match(ex);
    if (Array.isArray(result) && result.length > 3) {
    const name = result[2];
    if (workbenchContent.includes(name)) {
      return name
    } else {
      return null
    }
  } else {
    return line
  }
}).filter(i => !!i);
console.log(aiServiceConstantsNameList);

fs.writeFileSync(
  path.resolve(__dirname, './varName.log'),
  aiServiceConstantsNameList.join(',\n'),
  {encoding: 'utf-8'}
);
