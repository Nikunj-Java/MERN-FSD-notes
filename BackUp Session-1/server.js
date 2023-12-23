
//declared required varibale
const express=require('express');
const app=express();
const port=3000;//port no to listen request


app.use(express.json()); ///parsing JSON request Here


//your sample data
const mytodos= [
    {id:1,text:"Hello World",done:false},
    {id:2,text:"Welcome to Express",done:true},
    {id:3,text:"I am MERN Stack Develper",done:false},
];


// get all todos
app.get('/api/mytodos',(req,res)=>{
    res.json(mytodos);
});
//start the server to particular port
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})
 
//try to fetch data using id;
//localhost:3000/api/mytodos/1