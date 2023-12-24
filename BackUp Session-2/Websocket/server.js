const express=require('express');
const http=require('http');
const WebSocket= require('ws');


const app= express();

const server=http.createServer(app);

const wss= new WebSocket.Server({server});


app.use(express.static('public'));

//handle the websocket connection

wss.on('connection',(conn)=>{
    console.log("Client Connected");
    conn.on('message',(msg)=>{
        console.log("Received" +msg);

        //Boradcast the message to all your clients
        wss.clients.forEach((client)=>{
            if(client !== conn && client.readyState === WebSocket.OPEN){
                client.send(msg);
            }
        })
    })

    conn.on('close',()=>{
        console.log("A Client Disconnected");
    })
})


server.listen(3000,()=>{
    console.log("Websocket Server is Listning to the Port 3000");
})