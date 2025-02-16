const http = require('http');
http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      console.log('Received:', data);
      res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
      res.end();
    });
  }
}).listen(3000);