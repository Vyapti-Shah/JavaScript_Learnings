//if else statement
window.alert(`FOR AGE ABOVE 18 ONLY`);
let myLabel=document.getElementById("myLabel");
let myButton=document.getElementById("myButton");
let myP1=document.getElementById("myP1");
let age;
age=Number(age);
myButton.onclick=function(){
    age=document.getElementById("myText").value;
    myH1.textContent=`age is ${age}`
    if(age>=18){
        console.log(`You can enter the site`);
        myP1.textContent=`You can enter the site as you are ${age} years old`;
    } else {
        console.log(`Sorry you're underage`);
        myP1.textContent=`Sorry you're underage as you're age is ${age} years`;
    }
}


//for boolean
let student=window.prompt(`Enter true or false:`);
if(student){
    console.log('You are a student');
} else {
    console.log('You are not a student');
}