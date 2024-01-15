//include Dependency og mongoose

const mongoose= require('mongoose');
const { addUser } = require('./users');
const dbURL="mongodb://127.0.0.1:27017/classes";

mongoose.connect(dbURL)
.then(()=>console.log("Connected"))
.catch((err)=>{console.log(err)});

addUser();