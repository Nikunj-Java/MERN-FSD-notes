
var fs= require('fs');
var data='This is My data, My Name is Nikunj and i am MEAN|MEARN|JAVA FSD Trainer ';
//create a WRITABLE Stream
//createFileStream opens the file in background and queses writes until the file is ready
var writestream=fs.createWriteStream('./file/file.txt');
writestream.write(data);
writestream.end();
writestream.on('finish',function(){
    console.log("Write Completed.");
});
writestream.on('error',function(err){
    console.log(err.stack);
});
console.log("Program Finished");

// goto the file ,open cmd, the type: node name_of_file.js
