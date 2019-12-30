var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readME.txt', 'utf8');
var myWriteStream = fs .createWriteStream(__dirname + '/writeME.txt');
myReadStream.pipe(myWriteStream);