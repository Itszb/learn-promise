'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200,{
               "Access-Control-Allow-Origin":"*",    //如果要允许带cookie跨域这里就得改成null  而不是 *
              // "Access-Control-Allow-Methods":"OPTIONS, GET, POST",// 允许 option , get , post 请求头
              // "Access-Control-Allow-Headers":"x-requested-with", // 允许x-requested-with 请求头
              // // "Access-Control-Max-Age":"86400"  //允许访问的有效期
              // "Access-Control-Allow-Credentials":"true"
              // 'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
              // 'Access-Control-Allow-Headers':'x-requested-with',
              // 'Access-Control-Max-Age':'86400',
              // 'Access-Control-Allow-Credentials':'true',
              // 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
              // 'Access-Control-Allow-Headers':'*',
              // 'Access-Control-Allow-Headers':'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified,Cache-Control, Expires, Content-Type, X-E4M-With'
              "Content-Type": "application/json; charset=UTF-8"
            });
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');