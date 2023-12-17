const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    fs.readFile('./server2',function(err, data){

        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end(err.toString())
        }
        res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
        res.write(data)
        res.end()
    })
})

server.on('connection', (code)=>{
    console.log('Connection!')
})

server.on('request',(code)=>{
    console.log('Request!')
})

server.listen(8080, ()=>{
    console.log('8080포트에 서버 연결!')
})