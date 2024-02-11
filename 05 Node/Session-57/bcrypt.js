const bcrypt=require('bcrypt');
const password="Nikunj@123";


async function generateHashPassword(password){
    try {
        
        const hasPassword=await bcrypt.hash(password,12);
        console.log(hasPassword);
         validateUser("Nikunj@123",hasPassword);
        return hasPassword;
        
    } catch (error) {
        console.log(error);
    }
}

async function validateUser(password,hasPassword){
    try {
        
        const resp=await bcrypt.compare(password,hasPassword);
        if(resp){
            console.log("Correct Password");
        }else{
            console.log("Invalid Password");
        }
        
    } catch (error) {
        console.log(error);
    }
}

const dbPassword=generateHashPassword(password);