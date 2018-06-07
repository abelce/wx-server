var express = require('express');

const hostName = '127.0.0.1';
const port = '9002';
var app = express();

app.all('*', function(res, res, next){
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
})

app.get('/get', function(req, res){
    console.log("请求url：",req.path)
    console.log("请求参数：",req.query)
    res.send("这是get请求");
})

app.post('/post', function(req, res){
    console.log("请求参数：",req.body);
    var result = {code:200,msg:"post请求成功"};
    res.send(result);
})


app.listen(port, hostName,function(){

    console.log(`服务器运行在http://${hostName}:${port}`);

 });