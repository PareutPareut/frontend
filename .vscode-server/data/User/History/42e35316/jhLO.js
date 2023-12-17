const express = require('express');
const app = express();

app.set("port", process.env.PORT || 3030);
app.set("host", process.env.HOST || "0.0.0.0");


app.get('/', function(req, res){
    res.send("접속된 아이피 : "+req.ip);
})

app.get('/main', function(req, res){
    res.send("접속된 아이피 : "+req.ip);
})

//const port = process.env.PORT || 3030;
//app.set("port", process.env.PORT || 3030) 포트 설정

app.listen(port, function(){
    console.log(`server is listening at ${port}`);
})