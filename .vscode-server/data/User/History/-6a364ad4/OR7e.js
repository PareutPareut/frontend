const express = require('express');
const path =require('path')

const app =express();

dotenv.config();
const indexRouter = require('./routes')
const userRouter = require('./routes/user')


