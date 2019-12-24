const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');
//中间件:功能增强
app.use(bp.urlencoded({extended:false}));//解析urlencoded
let u = express.static('zz');
app.use(u);//静态文件

/* app.get('/login',(req,res)=>{
    if(req.query.user === 'xxx')
    
    res.json({
        code:1,
        msg:'haha'
    })
    // res.send({
    //     code:1,
    //     msg:'哈哈'
    // })
    
}) */


app.post('/register',(req,res)=>{
    console.log(req.body.user);
    if(req.body.user === 'haha'){
    res.json({
        code:0,
        msg:'帅'
    })
  }
});

app.get('*',function(req,res){
    let a = fs.readFileSync('zz/index404.html');
    res.end(a)
})








app.listen(80);