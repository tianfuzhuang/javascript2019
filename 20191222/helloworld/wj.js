const http = require('http');
http.createServer(function(req,res){
    //  res.write('haha');
    //  res.end();



var fs = require('fs');
//同步读取
var data = fs.readFileSync('www'+haha.html);
console.log('同步');
res.write('haha.html');

}).listen(80);












