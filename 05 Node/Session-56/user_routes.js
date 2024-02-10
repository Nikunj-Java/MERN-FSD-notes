const UserModel= require('./user_model');
const express=require('express');

const router=express.Router();

router.post("/register",async(req,res)=>{
    const{name,email,username,password}=req.body;
    const newUser=new UserModel({name,email,username,password});
    try {
        
        const resp=await newUser.save();
        res.send({message:"Registered Successfully",resp});
    } catch (error) {
        res.send({message:"Error Occured",error});
    }
});

router.post("/login",async(req,res)=>{
    const{username,password}=req.body;
   
    try {
        
        const user=await UserModel.findOne({username});
        if(user){
            if(password==user.password){
                res.cookie("user_name",user.username);
                res.send("Logged In");
            }else{
                res.send("Inccorect Password");
            }
        }
        else{
            res.send("Unregistered User")
        }
       
    } catch (error) {
        res.send({message:"Error Occured",error});
    }
});

router.get("/profile",async(req,res)=>
{
    const username=req.cookies.user_name;
    if(username){
        res.send({message:"Welcome to your profile page",username});
    }else{
        res.send({message:"Not Logged IN...,Log in First"});
    }
});

router.get("/logout",async(req,res)=>{
    res.clearCookie("user_name");
    res.send("logged out Successfully");
});


module.exports=router;