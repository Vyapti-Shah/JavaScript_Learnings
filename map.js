//.map() - accepts a callback and applies that function to each element of an array, then return a new array

const num= [1, 2, 3, 4, 5];
//unlike forEach() method the result will not be power  2×3=6 
//the .map() method will print separate output for both square and cube
const sq= num.map(square);
const cu= num.map(cube);

console.log(sq);
console.log(cu);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}


const names=["vyapti", "sejal", "sanjay"];

const upper= names.map(upperCase);
const lower= names.map(lowerCase);
const all= names.map(allCase);

console.log(upper);
console.log(lower);
console.log(all);

function upperCase(element){
    return element.toUpperCase();
 }

function lowerCase(element){
    return element.toLowerCase();
}

function allCase(element){
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}


const dates=["2024/04/13", "2024/04/1", "2024/01/2"];

const forDates = dates.map(formatDates);
console.log(forDates);

for(let i=0; i <=2; i++){
   console.log(`${forDates[i]} - Happy Birthday ${names[i]}`); 
}


function formatDates(element){
    const parts= element.split("/");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}