import express from "express";

const app = express();

app.get('/', function(req, res){
    res.send("접속된 아이피 : "+req.ip);
})

app.listen(65020, function(){
    console.log('server is running on : ');
})