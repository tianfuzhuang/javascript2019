const express = require('express');
const router = express.Router();



router.get('/',(req,res)=> {
        let {zz,haha} =req.query;
        console.log(req);
        
        console.log(zz,haha);
        
        if(zz ==='1' && haha === '2'){
            console.log(2);
            
            res.json({
                code : 1,
                msg : 'gxn请求成功'
            })
         }
})


module.exports = router;





