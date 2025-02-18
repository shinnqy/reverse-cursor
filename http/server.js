const fs = require('fs');
const path = require('path');
const http = require('http');

const filePath = path.resolve(__dirname, './log/log1.txt');// timestamp

http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      console.log('Received:', data);
      fs.appendFileSync(filePath, `${new Date().toISOString()}: ${data}\n`);
      res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
      res.end();
    });
  }
}).listen(3000);