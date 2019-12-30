var events = require('events');

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');

var marry = new Person('Marry');

var Ashok = new Person('Ashok');

var Muskan = new Person('Muskan');

var people = [james , marry , Ashok , Muskan];

people.forEach(function(person){
person.on ('speak', function(msg){
console.log(person.name+ ' said ' + msg);

});

});

james.emit('speak', 'Hey dude');
Muskan.emit('speak', 'Baccha')