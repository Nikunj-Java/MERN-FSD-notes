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
                //session object
                req.session.user=user;
                res.send("Logged In......");
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
    const user=req.session.user;
    if(user){
        res.send({message:"Welcome to your profile page",user});
    }else{
        res.send({message:"Not Logged IN...,Log in First"});
    }
});

router.get("/logout",async(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            res.send({message:"Error  while  logout"})
        }else{
            res.send({message:"Logged out Successfully"})
        }
    })
});


module.exports=router;