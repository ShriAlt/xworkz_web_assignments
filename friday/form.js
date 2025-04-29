function onClick() {
    // document.getElementsByClassName('nameErrorClass')[0].innerHTML="ahhhh";
    // alert("hiii")
    // document.getElementsByName('error')[0].innerHTML="hbjg";
    // document.getElementsByTagName('span')[0].innerHTML="hiiii";

    // console.log('doThis>>doThis',doThis)  
    document.getElementById('nameErrorId').innerHTML = "yo";
}
function submitForm() {
    let val = true;
    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numNumber.value;


if(nameInput.length<2 || nameInput.length>20){
    val =false;
    setError()

}
if(ageInput<18){
    val = false;
}
if(numberInput.length!=10){
    val=false;
}
    return val;
}

function setError(){

}
