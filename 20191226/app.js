const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
//中间件
app.use(multer({ dest: 'uploads/'}).array('filename'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))


 let get =require(path.join(__dirname,'routers/haha/get.js'))
 let upload = require('./routers/upload/upload.js')
app.use('/get',get)
//上传
app.use('/upload',upload)
app.listen(80,function () {
    console.log('80 is running');   
})
