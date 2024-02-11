const UserModel= require('./user_model');
const express=require('express');
const bcrypt=require('bcrypt');

const router=express.Router();

router.post("/register",async(req,res)=>{

    const{name,email,username,password}=req.body;
    const dbPassword=generateHashPassword(password);
    
    const newUser=new UserModel({name,email,username,dbPassword});
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


async function generateHashPassword(password){
    try {
        
        const hasPassword=await bcrypt.hash(password,12);
        console.log(hasPassword);
         //validateUser("Nikunj@123",hasPassword);
        return hasPassword;
        
    } catch (error) {
        console.log(error);
    }
}

async function validateUser(password,hasPassword){
    try {
        
        const resp=await bcrypt.compare(password,hasPassword);
        if(resp){
            console.log("Correct Password");
        }else{
            console.log("Invalid Password");
        }
        
    } catch (error) {
        console.log(error);
    }
}




module.exports=router;