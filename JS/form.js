function validate(){
    let val=true;
    let name = document.PracticeForm.name.value;
    let email = document.PracticeForm.email.value;
    let phone = document.PracticeForm.phone.value;
    let password = document.PracticeForm.password.value;
    let confirmPassword = document.PracticeForm.confirmPassword.value;


    if(name.length <2 || name.length > 20){
        setError("nameErrorId", "Name must be between 2 and 20 characters.");
        val = false;
    }
    else clearError("nameErrorId");
     if(!email.includes("@") || !email.includes(".")){
        setError("emailErrorId", "Email must contain '@' and '.'");
        val = false;
    }
    else clearError("emailErrorId");
     if(phone.length !== 10){
        setError("phoneErrorId", "Phone number must be a 10-digit number");
        val = false;
    }
    else clearError("phoneErrorId");
     if(password.length < 6 || password.length > 20){
        setError("passwordErrorId", "Password must be between 6 and 20 characters.");
        val = false;
    }
    else clearError("passwordErrorId");
     if(password !== confirmPassword){
        val = false;
        setError("confirmPasswordErrorId", "Password must match.");
    }
    else clearError("confirmPasswordErrorId");
    return val;

}

function setError(id, error){
    document.getElementById(id).innerHTML = error;

}

function clearError(id){
    document.getElementById(id).innerHTML = '';

}
function submitForm() {
    if(validate()){
        alert("Form submitted successfully!");
    }
    else{
        alert("Please correct the errors in the form.");
    }
}