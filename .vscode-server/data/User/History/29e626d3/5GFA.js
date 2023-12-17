const { application } = require("express");

if (process.env.NODE_ENV ==='production'){
    app.use(morgan('conbined')); //배포환경이면
}else{
    app.use(morgan('dev')); //개발 환경이면
}