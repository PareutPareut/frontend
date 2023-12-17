const http = require('http');
const fs = require('fs');

const server = createServer((req,res)=>{
    res.writeHead(200,'Content Type'='text/html charset=utf-8')
    res.write('fs module을 활용해보아요')

})