const http = require('http')

http.createServer((req, res)=>{

    res.writeHead(302, {'Location' : ''})
})