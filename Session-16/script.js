document.getElementById("registrationForm").addEventListener("submit", function(event)
{
  //let , var, const
   var isValid = true; // boolean true value

   //getting the values
   var username = document.getElementById("username").value;
    
   //cheking the null value

   if(username.trim() === ""){
    document.getElementById("usernameError").textContent = "Username is required";
    isValid = false;
   
    
   }
   else{
    document.getElementById("usernameError").textContent= "";
     
   }

   //password validation 
   var password = document.getElementById("password").value;
   if(password.length < 8){
    document.getElementById("passwordError").textContent = "password Must Be 8 Character Long";
    isValid = false;
     
   }
   else{
    document.getElementById("passwordError").textContent= "";
    
   }





   //Email validation
   var email = document.getElementById("email").value;
   if(!/\S+@\S+\.\S+/.test(email)){

    //     (Represents string value!/)\S   
    //     +(Represents symbol @)\S
    //     +(Represents symbol .)\  (.)\S+/
    document.getElementById("emailError").textContent = "Valid Email Id is Required";
    isValid=false;
   }
   else{
    document.getElementById("emailError").textContent = "";
    
   }





   if(!isValid){
    event.preventDefault(); ///prevents the form for submittion , if it contains error
   }
});