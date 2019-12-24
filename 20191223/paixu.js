const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');
//中间件:功能增强
app.use(bp.urlencoded({extended:false}));
let u = express.static('zz');
app.use(u);//静态文件
//接口是 '/paixu' 参数kind:swith


数据
var data = [
    {
        'id' : 2,
        'name' : 'momo',
		'price' : 36,
		'checked':false
    },
    {
        'id' : 1,
        'name' : '小恋',
		'price' : 40,
		'checked':false
    },
    {
        'id' : 3,
        'name' : 'yaya',
		'price' : 20,
		'checked':false
    },
    {
        'id' : 4,
        'name' : 'feifei',
		'price' : 10,
		'checked':false
    },
    {
        'id' : 5,
        'name' : 'hhehe',
		'price' : 35,
		'checked':false
    }
];

// app.get('/getdata',(req,res))



app.get('/paixu',(req,res)=>{  
    switch(req.query.kind){
           case 'xuhao':
           let msg = {
               code:1,
               msg:'排序成功'
           }
           data.sort((a,b)=>{
             a.id - b.id
           })
           res.json(msg)               
    }
  
})