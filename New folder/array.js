//array- a variable like structure that can hold more than one value

let fruit=["apple","mango","strawberry","banana"];
console.log(fruit[1]);

/*
console.log(fruit.pop());//removes the last element from the array
console.log(fruit.push("orange"));//puts a new element at the end of the array
console.log(fruit.unshift("pear"));//puts an element in the start of the arrary
console.log(fruit.shift());//removes the begining element 
*/
console.log(fruit.length);
console.log(fruit.indexOf("mango"));
fruit.sort();//arranges in alphabetical order
for(let fr of fruit){ //shortcut of above code//
    console.log(fr);
}

fruit.sort().reverse();//arranges in reverse alphabetical order
for(let f of fruit){ //shortcut of above code//
    console.log(f);
}


for(let i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}

for(let fru of fruit){ //shortcut of above code//
    console.log(fru);
}

for(let j=0; j<fruit.length; j+=2){
    console.log(fruit[j]);
}

for(let k=fruit.length; k>=0; k--){
    console.log(fruit[k]);
} //as it prints values at place 0 1 2 3 but then starting place will be undefined so let i=fruit.length-1 is required

for(let l=fruit.length-1; l>=0; l--){
    console.log(fruit[l]);
}