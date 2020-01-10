const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'ZF';
router.post('/',(req,res)=>{
    const token = req.headers.authorization;
     //如果携带token请求说明已经登录多
     if(token){
        jwt.verify(token,secret,(error,data)=>{
            if(error){
                res.json({
                    code:2,
                    msg:'失效'
                })
                return;
            }
            res.json({
                code:0,
                msg:'有权限',
                //每次请求验证的时候，都发一个新的令牌给前端，保证令牌持久化操作
                token:jwt.sign({user:data.user},secret,{
                    expiresIn:20
                })
            })
            
        });
    }else{
        res.json({
            code:1,
            msg:'未登录'
        })
    } 
});
   
module.exports = router;

