let socketIo = require('socket.io');
let express = require('express');

let httpPort = 9001;

let app = express();

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
