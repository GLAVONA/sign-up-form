const password = document.getElementById("password");
const confPassword = document.getElementById("confirm-password");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");


password.addEventListener("keyup", validityCheck);
confPassword.addEventListener("keyup", validityCheck);
confPassword.addEventListener("keyup", validityCheck);
email.addEventListener("keyup", validityCheck);
firstName.addEventListener("keyup", validityCheck);
lastName.addEventListener("keyup", validityCheck);

function val(){
    if(email.checkValidity() && lastName.checkValidity() && firstName.checkValidity() ){
        return true;
    }
    else{
        return false;
    }
}


function validityCheck() {
    const submitButton = document.getElementById("sub");
if (password.value!=="" && confPassword.value!==""){
    if (password.value === confPassword.value && val()){
        submitButton.style.opacity = "1";
        submitButton.removeAttribute("disabled");
    }
    else{
        submitButton.disabled = "disabled";
        submitButton.style.opacity = "0.5";        
    }
    }
    
}