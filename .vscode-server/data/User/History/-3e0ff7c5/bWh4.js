const fs = require('fs');
const http= require('http');

const server = http.createServer((req, res)=>{

    fs.readFile('./server2', (err, data)=>{

        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)

    })

}).listen(8080, ()=>{
    console.log('server is running at 8080')
})