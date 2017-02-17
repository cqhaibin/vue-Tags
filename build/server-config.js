let socketIo = require('socket.io');
let express = require('express'); 
let cxt = require('../src/services-server');

let httpPort = 9001;
let channelId = 1
let app = express();

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});
 
let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection',function(socket){ 
    console.log('有客户端连接');
    cxt.createChannel(channelId++,socket)
});
server.listen(httpPort); //用server连接
console.log('io listen success !! ' + httpPort);
