var app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (request, response) {
  response.send('Please connect with a websocket');
});

io.on('connection', function (socket) {
    io.sockets.emit('client connected', { action: 'Client connected' });

    socket.on('recieve message', function (data) {
        io.sockets.emit('push message', data);
    });
});
