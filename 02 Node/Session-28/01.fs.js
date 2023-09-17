var fs= require('fs');


//to uncomment the code press ctr+/

//01 file writting
// fs.writeFile('file/file.txt',"Welcome to File Writting!!",(err)=>{
//     if(err)
//         console.log("Error",err);
//     else
//         console.log("File Saved!");
// })

//02 Read File

// fs.readFile('file/file.txt',function(err,data){
//     if(err)
//         throw err;
//     else
//         console.log("Data:",data.toString());
// })

//03 Append Data

// fs.appendFile('file/file.txt',"My New Data12345",function(err){
//     if(err)
//         throw err;
//     else
//         console.log("File Updated Successfully...!!!!");
// })

//04 Delete File
fs.unlink('file/file1.txt',function(err){
    if(err)
        throw err;
    else
        console.log("File Deleted Successfully...!!!!");
})