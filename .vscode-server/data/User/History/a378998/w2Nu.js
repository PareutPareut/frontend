const http = require('http')
const cookie = require('cookie')

server = http.createServer((req,res)=>{ 

    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
    
    let cookies = {}
    if(req.headers.cookie !==undefined){
        cookies = cookie.parse(req.headers.cookie)
    }else{
        console.log('no cookie')
    }

    res.end('<h1>hello!'+cookies.myname+'</h1>')
})

server.on('connection', function(){
    console.timeLog('connection!')
})

server.listen(3001, ()=>{
    console.log('server is running aat 3001')
})