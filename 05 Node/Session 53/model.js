
const mongoose= require('mongoose');
const schema=mongoose.Schema({
    name:String,
    email:String,
    country:String,
    marks:Number
});

const Student=mongoose.model('student',schema);

module.exports=Student;
