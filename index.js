var http = require('http');

http.createServer(function(req, res) {
      res.writeHead(200, {
            'Content-Type': 'text/plain'
      });
      res.end('Hello Edgar\n');
}).listen(3000, '127.0.0.01');

console.log('Server Running at ');
