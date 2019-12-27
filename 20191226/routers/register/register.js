const express = require('express');
const router = express.Router();
// const sql = require('../sql/sql');
// let sql = [{
//     user :'tfz',
//     pw : '123'
// }]

router.post('/',(req,res)=>{
    
    let {user,pw} = req.body;
    console.log(user);
    
    let obj ={};
    let o = req.sql.find(ele=>ele.user === user )

    if(o){
      res.json({
         code:0,
         msg:'注册失败,用户名重复' 
      })
    }else{
        obj.user = user;
        obj.pw = pw;
        res.json({
            code:1,
            msg:'注册成功'
        })
       req.sql.push(obj); 
    } 
console.log(req.sql);
})



module.exports = router;
