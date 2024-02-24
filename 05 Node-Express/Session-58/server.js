const mongoose=require('mongoose');
const express=require('express');

const app=express();

app.use(express.json());


//db connect();

mongoose.connect("mongodb://127.0.0.1:27017/restapi")
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err));

app.use("/api/product",require('./routes'));


//global error handler

app.use((err,req,res,next)=>{
    res.status(500).json({error:'something went wrong'})
    console.log(err);
    
})

app.listen(5000,()=>{
    console.log("Server Connected");
})


