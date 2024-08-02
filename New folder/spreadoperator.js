//spread operator(...) - allows iterable such as array or string to be expanded into separate elements(unpacks the elements)
//                     - expands array into separate elements
let num=[1,2,3,4,5];
let min=Math.min(...num);
console.log(min); 
let max=Math.max(...num);
console.log(max); 

let user= "Vyapti";
let l=[...user];
console.log(l);
let letters=[...user].join("-");
console.log(letters);

let fruit=["apple","mango","orange"];
console.log(fruit);//by using ... we can make a shallow copy(shallow copy is a different data structure with identical value) of array fruit 
let newfruit=[...fruit];
console.log(newfruit);
let vegies=["bitter gourd","cabage","capsicum"];
let food= [...fruit,...vegies,"milk"];
console.log(food);