var fs = require('fs');

/*
fs.mkdir('Test', function(){
    fs.readFile('readME.txt', 'utf8', function(err, data){
        fs.writeFile('./Test/writeME.txt', data , (err)=>{})
    });

});
*/

fs.unlink('./Test/writeME.txt', function(){

    fs.rmdir('Test', (err)=>{});

});