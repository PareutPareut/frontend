const http = require('http')
const fs = require('fs')

const server = createServer((req, res)=>{

    fs.readFile('./server2',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
        res.write(data)
        res.(end)
    })
})

server.on('connection', ())