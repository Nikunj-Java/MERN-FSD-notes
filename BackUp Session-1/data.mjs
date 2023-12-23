
//declared required varibale
import  fetch from 'node-fetch';
import express from 'express';


const app=express();
const port=3000;//port no to listen request


app.use(express.json()); ///parsing JSON request Here


 

// get all todos
app.get('/api/mytodos',async(req,res)=>{
    //res.json(mytodos);
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users/')
    
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const mydata= await response.json();
        res.json(mydata);
    } catch (error) {
        console.log('Fetch Error :', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

 


//start the server to particular port
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})
 
//try to fetch data using id;
//localhost:3000/api/mytodos/1


//notes: 
//1. install express: npm install express
//2. start the server: node server.js
//3. localhost:3000/api/mytodos
