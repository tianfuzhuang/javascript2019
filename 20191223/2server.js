const http = require('http'),
fs = require('fs'),
urlModel = require('url'),
qs = require('querystring');

const app = http.createServer((req,res)=>{
    const {path,query} = urlModel.parse(req.url);
    let lastName = ['\.js$','\.html$','\.css$','\.less$','\.jpg$'];;
    let re = new RegExp(lastName.join('|'));
    if(pathname === '/'){
        let data = fs.readFileSync('zz/index.html');
        res.end(data.toString())
    }
});
let port = 80;
app.listen(port);

app.on('error',(e)=>{
    //端口被占用错误
    if(e.code === 'EADDRINUSE'){
        port ++;
        app.listen(port)
    }
})