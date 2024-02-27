const http =require('http');

const server = http.createServer(function(req, res){

    //쿠키의 유효기간 변수
    let date = new Date()
    date.setDate(date.getDate()+7)

    //쿠키를 입력
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie': ['myname = miffy; Expires=' +date.toUTCString(),
        'mygoal= good developer'
        ]
    })

    res.end('<h1>' +req.headers.cookie +'</h1>')
})

server.listen(3001, ()=>{
    console.log("server is running at 3001")
})