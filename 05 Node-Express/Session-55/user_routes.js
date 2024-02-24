const UserModel=require('./users_model');
const express=require('express');

const router=express.Router();


router.post("/register",async(req,res)=>{
    const {name,email,password,username}=req.body;
    const newUser=new UserModel({name,email,username,password});
    try {
        
        const resp= await newUser.save();
        res.send({message:"Registered Successfully"},resp)
    } catch (error) {
        res.send({message:"Error Occured"},error)
    }
})


module.exports=router