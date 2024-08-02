//arrow functions - a concise way to write function expressions 
//                - good for simple functions that are used only once
//        formula - (parameters) => some code

const hello = () => console.log("Hello!");
hello();


const n= (names, age) => {console.log(`Hello ${names}`)
                          console.log(`You are ${age} years old`)};
n("Vyapti", 25);   

setTimeout(() => console.log("Hello"),3000);
  

const num=[1, 2, 3, 4, 5, 6];
const square= num.map((element) => Math.pow(element, 2));
const cube= num.map((element) => Math.pow(element, 3));
const evenNum= num.filter((element) => element % 2 ===0);
const oddNum= num.filter((element) => element % 2 !==0);
const tot= num.reduce((accumulator, element) => accumulator + element);

console.log(square);
console.log(cube);
console.log(evenNum);
console.log(oddNum);
console.log(tot);