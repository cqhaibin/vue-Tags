let socketIo = require('socket.io');
let express = require('express');

let httpPort = 9001;

let app = express();

app.all("/socket.io",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Header","Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.listen(httpPort);
app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});

let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection',function(socket){
    socket.emit('..........................');
});
console.log('io listen success !! ' + httpPort);
