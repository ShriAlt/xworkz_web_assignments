// function onClick(a,b){
//  alert("hi ani")
// }
function submitForm() {
    let val = true;
    let nameInput = document.formName.namename.value;
    let numberInput = document.formName.numbernumber.value;
    let ageInput = document.formName.ageage.value;
    // if (nameInput.length < 3 || nameInput.length > 20) {
    //     val = false;

    // }

    // if (nameInput.length>3 || nameInput.length <20) {
    //     val=true
    // } else {
    //     val=false

    // }

    if (3<=nameInput.length<=20 && ageInput>=18 && numberInput.length == 10 ) {
    }
    else val=false;

    return val;
}