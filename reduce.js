//.reduce() - reduces the elements of an array to a single value

const price= [5, 30, 10, 25, 15, 20];

const total= price.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator,element){ //accumulator=previous element(here 5) and element=next element(here 30) and it continues
    return accumulator + element;
}


const grades=[75, 50, 99, 81, 65, 90];

const max=grades.reduce(getMax);
const min=grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}