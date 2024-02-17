const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
});

const ProductModel=mongoose.model('ProductModel',productSchema);
module.exports=ProductModel;