function functionClick(){
    let fullname='harsha';
    console.log(fullname);
    console.log(lastname)
    let lastname='km'
}


let emp = new Object();
emp.id=1;
emp.salary=1999;
emp.name='harsha';

function emp2(id,empName,salary){
    this.id=id;
    this.empName=empName;
    this.salary=salary;

}

function empFunction(){
    console.log(emp);
}
function harsha(){
    let pvalue=document.getElementsByTagName('p')[0].innerHTML;
    let nameValue=document.getElementsByName('para')[0].innerHTML;
    let classValue=document.getElementsByClassName('para')[0].innerHTML;
    let idValue=document.getElementById('para').innerHTML;
    console.log(pvalue);
    console.log(nameValue);
    console.log(idValue);
    console.log(classValue);
}