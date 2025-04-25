const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Home</h1>')
    }
    else if(req.url==='/html'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Html ep<h1/>')
    }
    else if(req.url==='/json'){
        res.writeHead(200,{'Content-Type':'application/json'})
        var data={
            message:'hello'
        }
        res.end(JSON.stringify({'message':'Hello'}))
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('<h1>Page not FOund<h1/>')
    }
})

server.listen(2000,()=>{
    console.log('listingig to port 2000')
})