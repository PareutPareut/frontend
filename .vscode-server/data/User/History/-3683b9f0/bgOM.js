//req가 가장 처음 도달하는 js

import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello, express');
});

module.exprots = router;