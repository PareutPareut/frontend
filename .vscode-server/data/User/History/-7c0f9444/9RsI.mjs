import 'dotenv/config' 
import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("hello, node..");
    res.sendFile('/home/by1094/testRepo/scr/public/index.html')
})

app.listen(process.env.SECRET_PORT, ()=>{
    console.log('server is running~')
})