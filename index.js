var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended: true
}))

var cats = require('./cats.js')(app);

var server = app.listen(3000, function () {
    console.log('Server Running at local 3000');
});



/*var http = require('http');

http.createServer(function(req, res) {
      res.writeHead(200, {
            'Content-Type': 'text/plain'
      });
      res.end('Hello Edgar\n');
}).listen(3000, '127.0.0.01');

console.log('Server Running at ');
*/
