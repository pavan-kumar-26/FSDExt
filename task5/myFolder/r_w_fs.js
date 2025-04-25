const fs = require('fs')
const path = require('path')

const readStream= fs.createReadStream(path.join('myFolder','sample2.txt'), { encoding: 'utf-8' })
const writeStream = fs.createWriteStream(path.join('myFolder','sample1.txt'))

readStream.pipe(writeStream)

readStream.on('data',(chunk)=>{
    console.log(chunk)
})

readStream.on('end',()=>{
    console.log("ended")
})