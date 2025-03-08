// @ts-check

const fs = require('fs');
const path = require('path');
const http = require('http');

const fileName = 'smartRewrite2';
const folderName = `logV2/${fileName}`;

ensureFolder(folderName);
const jsonlFilePath = path.join(__dirname, `${folderName}/${fileName}.jsonl`);
const textFilePath = path.resolve(__dirname, `${folderName}/${fileName}.txt`);// timestamp
emptyFileContent(jsonlFilePath);

http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      const formattedJSON = JSON.stringify(JSON.parse(data), null, 2);
      // console.log('Received:\n', formattedJSON + '\n');
      console.log('Received:\n', data + '\n');
      fs.appendFileSync(textFilePath, `${new Date().toISOString()}: ${data}\n`);
      fs.appendFileSync(jsonlFilePath, formattedJSON + '\n', { encoding: 'utf-8' });
      res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
      res.end();
    });
  }
}).listen(3000);

function ensureFolder(folderName) {
  const subItemFolderPath = path.resolve(__dirname, `./${folderName}`);
  if (!fs.existsSync(subItemFolderPath)) {
    fs.mkdirSync(subItemFolderPath, {recursive: true });
  }
}

function emptyFileContent(filePath) {
  fs.writeFileSync(filePath, '');
}