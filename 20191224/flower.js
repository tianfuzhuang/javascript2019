const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

//静态文件
let u = express.static('public')
app.use(u);
app.get('/get',(req,res)=>{
    console.log(req.query.flower);
    
    if(req.query.flower === '1'){
        setTimeout(function () {
           res.json({
            code:1,
            msg:'种花成功'
        })  
        },5000)
       
    }
})


//post 请求
app.post('/post',(res,req)=>{
 const {body:{zz,haha}} = req;
     if(zz =='1'& haha =='2'){
         res.json({
             code:1,
             msg:'请求成功了老弟'
         })
     }

})
app.listen(80);