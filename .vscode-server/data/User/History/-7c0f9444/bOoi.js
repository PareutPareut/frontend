import 'dotenv/config' 
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use()

app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다.');
    next();
})

app.get('/',(req,res)=>{
    res.send("hello, node..");
})

app.listen(process.env.SECRET_PORT, ()=>{
    console.log('server is running~')
})