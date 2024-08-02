//function expression - a way to define function as values or variables
//no need to give function name 

const hello = function(){
    console.log("Hello!");
}
setTimeout(hello,3000); //hello=callback


setTimeout(function(){
    console.log("Bye!");
},3000);


const num=[1, 2, 3, 4, 5];

const square = num.map(function(element){
    return Math.pow(element, 2);
});
console.log(square);

const cube = num.map(function(element){
    return Math.pow(element, 3);
});
console.log(cube);

const even=num.map(function(element){
    return element % 2 === 0;
});
console.log(even);

const evenNums=num.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);

const oddNums=num.filter(function(element){
    return element % 2 !== 0;
});
console.log(oddNums);

const total=num.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(total);


