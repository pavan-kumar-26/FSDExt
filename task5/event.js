const event = require('events')

class MyEmitter extends event{}

const myev = new MyEmitter();

myev.on('greet',(name)=>{
    console.log('hello',name)
})

myev.emit('greet','user')