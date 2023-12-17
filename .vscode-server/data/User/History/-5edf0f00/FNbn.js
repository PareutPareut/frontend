const http = require('http')
const fs = require('fs')
const url= require('url')

http.createServer((req, res)=>{

    let path = url.parse(req.url).pathname //url을 받아올 변수를 선언

    if(path=='/'){ //페이지 구분

        //re_index.html로 응답합니다.
        fs.readFile('./re_index.html', function (err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })

        //re_otherPage.html로 응답합니다.
    }else if (path=='/re_otherPage.html'){ 

        //
    }

})