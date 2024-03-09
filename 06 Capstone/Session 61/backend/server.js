const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const User=require('./User');


const app=express();
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/capstone")
.then(resp=>console.log("Connected....!"))
.catch(err=>console.log("Error: ",err));


app.post('/signup',async (req,res)=>{
    const {username,password}=req.body;
    try {
        
        const newUser=new User({username,password});
        await newUser.save();
        res.json({success:true,message:'User Registered Successfully'})
    } catch (error) {
        console.error("Error Signing up:",error.message);
        res.json({success:false,message:'Error While Sihning up'})
    }
})

app.post('/signup',async (req,res)=>{
    const {username,password}=req.body;
    try {
        
        const newUser=new User({username,password});
        await newUser.save();
        res.json({success:true,message:'User Registered Successfully'})
    } catch (error) {
        console.error("Error Signing up:",error.message);
        res.json({success:false,message:'Error While Sihning up'})
    }
});
app.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    try {
        
        const findUser=await User.findOne({username,password});
        if(findUser){
            res.json({success:true,message:'Login Successful'})
        }
    } catch (error) {
        console.error("Error in Login:",error.message);
        res.json({success:false,message:'Invald Username and Password'})
    }
});


app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
});
