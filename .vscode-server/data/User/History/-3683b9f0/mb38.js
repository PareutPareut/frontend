import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('/home/by1094/testRepo/src/public/main.ejs');
});

export default router;