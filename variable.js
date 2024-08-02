//variable= a container that stores a value, behaves as the value it contains
//1.declaration  let x;
//2.assignment x=5;
let x;
x=5;
let y=24;
console.log(x);
console.log(y);
let age=19;
let price=10.99;
let cgpa=8.55;
console.log(typeof age);//it is a number
console.log(typeof price);
console.log(typeof cgpa);
console.log(`Age is ${age} years old`);
console.log(`The proce is $${price}`);
console.log(`1st year cgpa is ${cgpa}`);
let firstname="Vyapti";
console.log(typeof firstname);
console.log(firstname);
console.log(`My name is ${firstname}`);
let email="vyaptishah94@gmail.com";
console.log(`Email is ${email}`);
let online=true;
console.log(`Status online: ${online}`);

window.alert(`Humari details chahiye? aao bata dege`);
document.getElementById(`Details`).textContent="IT'S ME";
document.getElementById(`p1`).textContent=`Name: ${firstname}`;
document.getElementById(`p2`).textContent=`Age: ${age} years`;
document.getElementById(`p3`).textContent=`Cgpa: ${cgpa}`;