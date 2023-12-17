import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('/home/by1094/testRepo/src/public/main.ejs', function(err, html) {
        if(err) console.log(err)
        res.send(html)
    } 
    
    );
});

export default router;