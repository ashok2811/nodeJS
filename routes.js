var http = require('http');
var fs = require('fs');

var myObj = {
    name: 'Ashok',
    job: 'Student',
    age: 23
};

var server =http.createServer(function(req, res){
    console.log('A request was made by: ' + req.url);    
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);        
    }

    else if(req.url === '/user') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(myObj));
    }

    else if(req.url === '/article'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    fs.createReadStream(__dirname+'/readME.txt', 'utf8').pipe(res);

    }

});


var port = 4000;
server.listen(port, '127.0.0.1');
console.log('Server is listening to Port : '+port);