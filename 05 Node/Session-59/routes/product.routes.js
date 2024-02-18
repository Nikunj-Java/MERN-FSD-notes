const express=require('express');

const upload=require('../middlewares/fileupload');

//upload can be prepared using middle ware
//middle ware is nothing but a kind of filter
const {addProduct}=require('../controller/product.controller');


const router=express.Router();


router.post('/',upload.single('picture'),addProduct);

module.exports=router;