var fs = require('fs');

/*
fs.readFile('readME.txt', 'utf8', function(err, data){
 fs.writeFile('writeME.txt', data, (err)=>{});
});
*/

fs.unlink('writeME.txt', (err)=>{})
