const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
app.use(session({
    secret: '12期',
    name: 'session_id',
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: true,
    rolling:true //刷新cookie重置时间
}))
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

app.listen(80,function(){
    console.log('80 go!go!go'); 
})