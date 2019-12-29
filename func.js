// Normal function statement

function sayHi(){
    console.log('Hi');
}

sayHi();

//Function Expression

var sayBye = function(){
console.log('Bye');

};

sayBye();


function callFunction(fun){
    fun();
}

callFunction(sayHi);