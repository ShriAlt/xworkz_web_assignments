function validate() {
    let val = true;
  
    let name = document.PracticeForm.name.value.trim();
    let email = document.PracticeForm.email.value.trim();
    let phone = document.PracticeForm.phone.value.trim();
    let password = document.PracticeForm.password.value;
    let confirmPassword = document.PracticeForm.confirmPassword.value;
    let course = document.getElementById("courseId").value;
  
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "";
  
    if (name.length < 2 || name.length > 20) {
      setError("nameErrorId", "Name must be between 2 and 20 characters.");
      val = false;
    } else {
      clearError("nameErrorId");
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      setError("emailErrorId", "Email must contain '@' and '.'");
      val = false;
    } else {
      clearError("emailErrorId");
    }
  

    if (phone.length !== 10 || isNaN(phone)) {
      setError("phoneErrorId", "Phone number must be a 10-digit number.");
      val = false;
    } else {
      clearError("phoneErrorId");
    }
  

    if (password.length < 6 || password.length > 20) {
      setError("passwordErrorId", "Password must be between 6 and 20 characters.");
      val = false;
    } else {
      clearError("passwordErrorId");
    }
  
 
    if (password !== confirmPassword) {
      setError("confirmPasswordErrorId", "Passwords do not match.");
      val = false;
    } else {
      clearError("confirmPasswordErrorId");
    }
 
    if (!gender) {
      setError("genderErrorId", "Please select your gender.");
      val = false;
    } else {
      clearError("genderErrorId");
    }
  
    if (course === "") {
      setError("courseErrorId", "Please select a course.");
      val = false;
    } else {
      clearError("courseErrorId");
    }
  
    return val;
  }
  
  function setError(id, error) {
    document.getElementById(id).innerHTML = error;
  }
  
  function clearError(id) {
    document.getElementById(id).innerHTML = "";
  }
  
  function clearAllErrors() {
    clearError("nameErrorId");
    clearError("emailErrorId");
    clearError("phoneErrorId");
    clearError("passwordErrorId");
    clearError("confirmPasswordErrorId");
    clearError("genderErrorId");
    clearError("courseErrorId");
  }
  
  function submitForm() {
    if (validate()) {
      alert("Form submitted successfully!");
      return true;
    } else {
      alert("Please correct the errors in the form.");
      return false;
    }
  }
  