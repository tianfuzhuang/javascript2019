const express = require('express');
const router = express.Router();
let app = express()
router.get('/',(req,res)=>{
    if(req.session.userinfo){ //登录过
        res.json({
            code:0,
            msg:'欢迎回来',
            user:req.session.userinfo
        })
    }else{
        res.json({
            code:1,
            msg:'没有登录'
        })
    }
     console.log(req.session);
    //  console.log(req.session.userinfo);
});
   
module.exports = router;

