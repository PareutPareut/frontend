import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./public/main.ejs');
});

export default router;