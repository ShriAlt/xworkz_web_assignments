// function onClick() {
//     // document.getElementsByClassName('nameErrorClass')[0].innerHTML="ahhhh";
//     // alert("hiii")
//     // document.getElementsByName('error')[0].innerHTML="hbjg";
//     // document.getElementsByTagName('span')[0].innerHTML="hiiii";

//     // console.log('doThis>>doThis',doThis)  
//     document.getElementById('nameErrorId').innerHTML = "yo";
// }
function submitForm() {
    let val = true;
    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numNumber.value;
    let emailInput = document.formName.emailEmail.value;
    let passwordInput = document.formName.passwordPassword.value;


if(nameInput.length<3 || nameInput.length>20){
    val =false;
    setError('nameErrorId','name should be min 3 and max 20')
}else {
    clearError('nameErrorId')
}

if(ageInput<18){
    val = false;
    setError('ageErrorId','number should be 10 digits')
}
else{
    clearError('ageErrorId')
}
if(numberInput.length!=10){
    val=false;
    setError('numberErrorId','age should be 18+')
}
else{
    clearError('numberErrorId')
}
if(emailInput.length<3){
    val=false;
    setError('emailErrorId','email should be min 3')
}

else{
    clearError('emailErrorId')
}
if(passwordInput.length<8){
    val=false;
    setError('passwordErrorId','password should be min 8')
}
else{
    clearError('passwordErrorId')
}
    return val;
}

function setError(id,message){
    console.log(id)
    console.log(message)
    document.getElementById(id).innerHTML = message;

}
function clearform(){
    document.getElementsByName('formName').innerHTML='';

}
function clearError(id){
document.getElementById(id).innerHTML='';
}

