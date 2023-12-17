

if (process.env.NODE_ENV ==='production'){
    app.use(morgan('conbined')); //배포환경 : 가장 많은 정보 제공
}else{
    app.use(morgan('dev')); //개발환경
}