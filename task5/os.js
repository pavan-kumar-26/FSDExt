const os = require('os')

console.log('Uptime', os.uptime())
console.log('cpus:',os.cpus())
console.log('arch:',os.arch())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.hostname())