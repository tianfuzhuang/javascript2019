let http = require('http');
const fs = require('fs');
http.createServer(function(req,res){
//    if(req.url !== 'favicon.ico'){
//       console.log(req.url);  
//    }    
  
//    res.write('1');
//    res.end();

try{
    let url = req.url;
    if(url === '/'){
        url = '/index.html';
    }
    let data = fs.readFileSync('public/'+ url );
    res.write(data.toString());
    res.end();
}catch(error){
    let data = fs.readFileSync('public/404.html');
    res.write(data.toString());
    res.end();
}

//    let url = req.url;
//    console.log(url);
   
//    let data = fs.readFileSync('public/'+ url);
//    res.write(data.toString());
//    res.end();


}).listen(80);