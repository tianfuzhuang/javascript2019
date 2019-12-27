const express = require('express');
const router = express.Router();
let app=express()
// const session = require("express-session");
// app.use(session({
//     secret: '12期',
//     name: 'session_id',
//     cookie: {maxAge: 60000},
//     resave: false,
//     saveUninitialized: true,
//     rolling:true //刷新cookie重置时间
// }))
router.post('/',(req,res)=>{
    
    let {user,pw} = req.body;
    // console.log(req);
    
    let o = req.sql.find(ele=>ele.user === user )
    if(o){
      res.json({
         code:0,
         msg:'登录成功' 
      })
     req.session.userinfo = user;
     console.log( req.session);
      
    }else{
        res.json({
            code:1,
            msg:'登录失败'
        })   
    } 
})

module.exports = router;

