
const WebSocket= require('ws');

const server= new WebSocket.Server({port:3000});

server.on('connection',(socket)=>{
    console.log('Client Connected');

    socket.on('message',(message)=>{
        console.log(`Received:${message}`);
        
         //send a responce back to the client
        socket.send(`Received: ${message}`);
    });

   
    socket.on('close',()=>{
        console.log('Client Disconnected');
    });
});


