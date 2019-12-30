var http = require('http');

var server =http.createServer(function(req, res){
    console.log('A request was made by: ' + req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hey Ashok !!!');
});
var port = 4000;
server.listen(port, '127.0.0.1');
console.log('Server is listening to Port : '+port);