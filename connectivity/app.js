var io = require('socket.io').listen(5000);

io.sockets.on('connection', function(socket){
	socket.on('message', function(data){
		io.sockets.send(data);
	});
});