// 推荐使用nodemon: https://github.com/remy/nodemon启动本脚本
var http = require('http')

http.createServer(function(req, res){
    res.writeHead(301, {
        'Content-Type': 'text/plain',
        'eTag':'asdasdas'
    })
    res.end('hi nice to meet sss')
    
}).listen(9999)