var http = require('http');

//commento per vedere modifica
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Worldn');
})
 
server.listen(8080);
 
console.log('Server running at 8080');