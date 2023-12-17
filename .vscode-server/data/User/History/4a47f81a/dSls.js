const http = require('http')

http.createServer((req, res)=>{

    res.writeHead(302, {'Location' : 'https://www.naver.com'})
    res.end()
}).listen(3001, ()=>{
    console.log()
})