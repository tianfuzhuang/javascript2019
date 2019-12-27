const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/',(req,res)=>{
    console.log(req.files);
    let files = req.files;
    files.forEach(ele => {
        let oldpath = path.resolve(ele.path);
        let newpath = path.resolve(ele.destination,ele.originalname);
        fs.renameSync(oldpath,newpath);
    });
    res.json({code:1,msg:'成功'})
})
module.exports = router;//导出路由