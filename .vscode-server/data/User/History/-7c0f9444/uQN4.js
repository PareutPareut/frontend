import 'dotenv/config' 
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use('/',static('/home/by1094/testRepo/src/public/index.html'));
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser(process,env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure : false,
    },
    name: 'session-cookie',
}))

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