const Student=require('./model');

const addUser=()=>{

    const newStudent=new Student({
        name:"ABCD",
        email:"abcd@gmail.com",
        country:"INDIA",
        marks:99
    })

    newStudent.save()
    .then((resp)=>console.log("Student  Created: ",resp))
    .catch((err)=>console.log("Error",err));
}

module.exports={addUser}