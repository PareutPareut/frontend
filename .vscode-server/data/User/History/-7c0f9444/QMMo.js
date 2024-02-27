import 'dotenv/config' 
import express from 'express';
import morgan from 'morgan';

const app = express();
const

app.use(morgan('dev')); 

app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다.');
    next();
})


app.listen(process.env.SECRET_PORT, ()=>{
    console.log('server is running~')
})