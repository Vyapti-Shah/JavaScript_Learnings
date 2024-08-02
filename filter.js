//.filter() - creates a new array by filtering out elements

let num= [1, 2, 3, 4, 5];
//it filters out other elements in the array and keeps only those satisfying the consition
let even= num.filter(isEven);
let odd= num.filter(isOdd);

console.log(even);
console.log(odd);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const ages=[16, 17, 18, 18, 19, 60];

const adults= ages.filter(isAdult);
const child= ages.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element){
    return element>=18;
}

function isChild(element){
    return element<18;
}


const words=["apple", "orange", "aesthetic", "javaScript"];

const shorty=words.filter(getShortWords);
const long=words.filter(getLongWords);

console.log(shorty);
console.log(long);

function getShortWords(element){
    return element.length<=6;
}

function getLongWords(element){
    return element.length>6;
}