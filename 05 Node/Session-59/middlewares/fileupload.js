const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now()+'-'+Math.random(Math.random()*1e9);
        const fileExtension=file.originalname.split('.').pop();
        cb(null,file.originalname.split('.')[0]+'-'+uniqueSuffix+'.'+fileExtension)
    }
});

const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5 //5mb
    }
})

module.exports=upload