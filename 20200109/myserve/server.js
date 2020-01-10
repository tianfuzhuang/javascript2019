const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

// let u = express.static('zz');
// app.use(u);//静态文件

//设置白名单
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    // 第二个参数表示允许跨域的域名，* 代表所有域名  
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, POST') // 允许的 http 请求的方法
    // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next();
    }
})


let sql = [{
    user :'tfz',
    pw : '123'
}]

app.use('*',(req,res,next)=>{
    req.sql = sql;
    next();
})

//中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/login',require('./routers/login/login.js'));
app.use('/islogin',require('./routers/islogin/islogin.js'))
app.use('/register',require('./routers/register/register.js'))

app.listen(5500,function(){
    console.log('5500 go!go!go'); 
})