import 'dotenv/config' 
import express from 'express';
import morgan from 'morgan';

import indexRouter from '../routers/index.js';
import userRouter from '../routers/user';

const app = express();

app.use(morgan('dev')); 

app.use('/', indexRouter);
app.use('/user',userRouter);


app.use((err,req,res,next)=>{
    
    try{}
        if(res.status()===404){
            res.send('Not Found');
        }

    } catch(err){
        console.log('404가 아닌 err 실행됨.')
    }
});

app.listen(process.env.SECRET_PORT, ()=>{
    console.log('server is running~')
})