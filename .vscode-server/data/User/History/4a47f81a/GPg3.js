const http = require('http')

http.createServer((req, res)=>{

    res.writeHead(302, {'Location' : 'https://www.naver.com'})
    res.end()
}).listen(3001, ()=>{
    console.log('server is running at 3001')
})

//코드 302 :  강제 페이지 이동에 자주 쓰이는 코드