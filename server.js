const PORT = process.env.PORT || 3000;

//creates an http server for me
const io = require('socket.io')(PORT);
// I listen on the 'connection' event for incoming sockets and console.log a message and ID
// make a connection with the user from server side.
io.on('connection', socket => {

  console.log('socket.io connection', socket.id);

  // listen for words from user
  socket.on('words', (payload) => {
     //emit message from server to user
    io.emit('incoming', payload);
  });

});


/// ALSO, do a q server on 3333...
const Q = require('@nmq/q/server');
Q.start();

const chat = new Q('deeds');
chat.monitorEvent('work');