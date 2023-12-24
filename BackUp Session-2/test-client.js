const WebSocket= require('ws');

const socket=new WebSocket ('ws://localhost:3000');

socket.on('open',()=>{
    console.log('Connected to the server');

    socket.send('Hello Server...!!');
});

socket.on('message',(message)=>{
    console.log(`Received From Server:${message}`);

    socket.close();
});

socket.on('close',()=>{
    console.log('Connections Closed');
})
