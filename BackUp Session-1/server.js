
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

//get todos by id
app.get('/api/mytodos/:id',(req,res)=>{

    //parseint is used to convert anyvalue to IntegerValue
    //if parseInt(String)===> string is converted forcefully to  IntegerValue
   const id= parseInt(req.params.id);
   const mytodo=mytodos.find( mytodo=>mytodo.id===id)

   if(!mytodo){
    res.status(404).json({error: 'No Todo Found'});
    return;
   }
    res.json(mytodo);
});

//insert record 

app.post('/api/mytodos',(req,res)=>{

    const newTodo={
        id:mytodos.length+1,
        text:req.body.text,
        done:false,
    };

    mytodos.push(newTodo);
    res.status(201).json(newTodo);
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
