var events = require("events");

var eventEmitter = new events.EventEmitter();


var connectHandler = function connected(){
	console.log('connect ok!');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.emit('connection');

console.log('end!!!!!');

