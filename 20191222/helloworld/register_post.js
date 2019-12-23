const http = require('http');
const fs = require('fs');
//将链接转为对象
function queryString(str){
    let obj = {};
    str.replace(/([^=])+)=([^$]+)$?/g,
    ($0,$1,$2)=>{
        obj[$1] = $2
    });
    return obj;
}
let sql = [
    {
        id:0,
        username:'孙悟空',
        password:123
    },
    {
        id:1,
        username:'猪八戒',
        password:123
    },{
        id:2,
        username:'唐僧',
        password:123
    },{
        id:3,
        username:'撒和尚',
        password:123
    }
];
http.createServer((req,res)=>{
    let url = req.url;
    if(url !=='/favicon.ico'){
        if(url.includes('/post')){
           let html='';
           req.on('data',(data)=>{
               html += data;
           });
           req.on('end',()=>{
               let opt = queryString(html);

               let msg = {
                   code:0,
                   msg:'可以注册'
               }
               let o1 = sql.find(item=>item.username === decodeURI(opt.user));
               if(o1){
                 msg.code = 1;
                 msg.msg = '有这个人了';
               }
               res.setHeader('content-type','text/html;charset=utf-8');
               res.write(JSON.stringify(msg));
               res.end();
           })
           console.log('来了');
           
        }else{
            try {
                if(url === '/'){
                    url = '/index.html';
                }
                let data = fs.readFileSync('public'+url);
                res.write(data.toString());
                res.end();
            } catch (error) {
                let data = fs.readFileSync('public/4o4.html');
                res.write(data.toString());
                res.end();
                
            }
        }



    }
}).listen(80);