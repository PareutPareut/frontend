import 'dotenv/config' 
import express from "express";

const app = express();

app.get('/', function(req, res){
    res.send("접속된 아이피 : "+req.ip);
})

app.listen(process.env.SERV_PORT, function(){
    console.log('server is running on : ');
})