//ternary operator
let age= window.prompt(`Enter your age`);
let message= age>=18? `You are an adult`:`Yor are a minor`;
console.log(message);

let time= window.prompt(`Enter time in range between 1 to 24`);
let greeting= time<12? `Gm`: `Ga`;
console.log(greeting);

let student= window.prompt(`true or false`);
let a= student? `Your are a student` : `You're not a student`;
console.log(a);

let purchase= window.prompt(`Enter your your purchase amount`);
let discount= purchase>=100? 10:0;
console.log(`Your total is $${purchase-purchase*(discount/100)}`);