const express = require('express');
const router = express.Router();
let app = express();
const jwt = require('jsonwebtoken');




const secret = 'ZF';
router.post('/', (req, res) => {

    let {
        user,
        pw
    } = req.body;
    // console.log(req);

    let o = req.sql.find(ele => ele.user === user)
    if (o) {
        res.json({
            code: 0,
            msg: '登录成功',
        
        //登录成功种token
        token: jwt.sign({
            user: user
        }, secret, {
            expiresIn: 20
        })

        
        })

    

    }
    else {
        res.json({
            code: 1,
            msg: '登录失败'
        })
    }
})

module.exports = router;