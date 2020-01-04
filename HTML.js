var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readME.txt', 'utf8');
var myWriteStream = fs .createWriteStream(__dirname + '/writeME.txt');


var server =http.createServer(function(req, res){
    console.log('A request was made by: ' + req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/index.html', 'utf8');
    myReadStream.pipe(res);
});
var port = 4000;
server.listen(port, '127.0.0.1');
console.log('Server is listening to Port : '+port);