const fs = require('fs')
const path= require('path')

const fn ='myFolder'

if(!fs.existsSync(fn)){
    fs.mkdirSync(fn)
    console.log("file created")
}

fs.writeFileSync(path.join(fn,'file.txt'),"this is text")

fs.writeFileSync(path.join(fn,'test.json'),JSON.stringify({msg:"hello"}))

fs.writeFileSync(path.join(fn,'test.html'),'<h1>h1</h1>')