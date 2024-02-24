const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

mongoose.connect(process.env.MONGI_URI)
.then(()=>{console.log("Connected")})
.catch(err=>{console.log(err)})


const app=express();
app.use(express.json());
app.use('/uploads',express.static('uploads'))
app.use('/api/product',require('./routes/product.routes'))


app.listen(process.env.PORT,()=>{
    console.log("Server Started")
})