let socketIo = require('socket.io');
let express = require('express'); 
let cxt = require('../src/services-server');

let defaultRoom = cxt.room.find(1);
let httpPort = 9001;
let userId = 1
let app = express();

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});
 
let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection',function(socket){
    console.log('有客户端连接');
    socket.emit('init.room', defaultRoom)
    cxt.createChannel(userId++,socket)
});
server.listen(httpPort); //用server连接
console.log('io listen success !! ' + httpPort);
