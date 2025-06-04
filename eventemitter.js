
const EventEmitter = require("events");

const event = new EventEmitter();

event.on('listen', (msg) => {
    console.log(`printing value of msg ${msg}`);
})

event.emit('listen', 'message');