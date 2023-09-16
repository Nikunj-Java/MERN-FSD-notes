document.getElementById("registrationForm").addEventListener("submit", function(event) {
    
    var isValid = true;

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phoneNo = document.getElementById("phoneNo").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var phoneNoError = document.getElementById("phoneNoError");

    var phoneNoSuccess = document.getElementById("phoneNoSuccess");

     
    // Clear previous error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    phoneNoError.textContent = "";

    phoneNoSuccess.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    }
    if (username.length < 5) {
        usernameError.textContent = "Enter Valid username";
        isValid = false;
    }
     
    if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Valid email is required";
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    if ((phoneNo.length < 10)||(phoneNo.length > 10)) {
        phoneNoError.textContent = "Mobile Number must be at least 10 characters";
        isValid = false;
    }
    else{
        phoneNoSuccess.textContent = "Mobile Number Verified";
         
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

/*This code is contibuted By NIKUNJ SONI */
