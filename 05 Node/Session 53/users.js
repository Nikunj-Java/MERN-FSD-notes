const Student=require('./model');

const addUser=()=>{

    const newStudent=new Student({
        name:"EduonixUser2",
        email:"eu2@gmail.com",
        country:"INDIA",
        marks:95
    })

    newStudent.save()
    .then((resp)=>console.log("Student  Created: ",resp))
    .catch((err)=>console.log("Error",err));
}

const getALLUsers=()=>{
    Student.find()
    .then((resp)=>console.log(resp))
    .catch((err)=>console.log(err))
}

module.exports={addUser,getALLUsers}