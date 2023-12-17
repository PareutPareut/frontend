const fs = require('fs');
const http= require('http');

const server = http.createServer((req, res)=>{

    fs.filewrite((err, data)=>{

        headwrite(200,{'Content-Type':'text/html; charset=utf-8'})
        

    })
})