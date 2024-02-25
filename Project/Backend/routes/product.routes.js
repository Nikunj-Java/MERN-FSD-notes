const express=require('express');

const upload=require('../middlewares/fileupload');

//upload can be prepared using middle ware
//middle ware is nothing but a kind of filter
const {addProduct,getAllProducts,getProductById}=require('../controller/product.controller');


const router=express.Router();


router.post('/',upload.single('picture'),addProduct);
router.get('/',getAllProducts);
router.get('/:id',getProductById);

//to get the image
//http://localhost:portno/foldername/imagename.png
//eg: http://localhost:5000/uploads/rate-1708267337413-0.4902616183566526.png


module.exports=router;