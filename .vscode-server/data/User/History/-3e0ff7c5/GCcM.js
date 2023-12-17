const fs = require('fs')
const http= require('http')

const server = http.createServer((req, res)=>{

    fs.readFile('./server2',function(err, data){

        writeHead()
    })
})