//type conversion= change a datatype of value to another
//                 (string, numbers, booleans)
let age=window.prompt("Age?");
age+=1;
console.log(age, typeof age);

let age1=window.prompt("Age 2 ?");
age1=Number(age1);
age1+=1;
console.log(age1, typeof age1);

let x= "vyapti";
let y= "vyapti";
let z= "vyapti";
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);