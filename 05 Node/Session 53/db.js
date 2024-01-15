//include Dependency og mongoose

const mongoose= require('mongoose');
const dbURL="mongodb://localhost:27017/student";

mongoose.connect(dbURL)
.then(()=>console.log("Connected"))
.catch((err)=>{console.log(err)});