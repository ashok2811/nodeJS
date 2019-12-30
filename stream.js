var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readME.txt', 'utf8');
var myWriteStream = fs .createWriteStream(__dirname + '/writeME.txt');
myReadStream.on('data', function(chunk){
console.log('A new chunk is received:');
myWriteStream.write(chunk);

});