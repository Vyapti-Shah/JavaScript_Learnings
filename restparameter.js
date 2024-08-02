// rest parameter (...rest)- allow a function work with a variable number of arguements by bundling them into an array
//                         - bundles separate elements in an array
function openFridge(...foods){ // rest operators are used as parameters
    console.log(...foods); //spread operators for used as array or string
} 
function getFood(...foods){
    return foods;
}
const food1= "pizza";
const food2= "burger";
const food3= "bhaji";
const food4= "noodles";
const food5= "maggie";

openFridge(food1,food2,food3,food4,food5);

let foods=getFood(food1,food2,food3,food4,food5);
console.log(foods);

function sum(...numbs){
    let result=0;
    for(let num of numbs){
        result+=num;
    }
    return result;
}
const tot=sum(1,2,3);
console.log(`Your total is ${tot}`);

function avg(...numb){
    let res=0;
    for(let num of numb){
        res+=num;
    }
    return res/numb.length;
}
const average=avg(1,2,3,4,5);
console.log(average);

function combineString(...strings){
    return strings.join(" ");
}
const fullname=combineString("Miss","Vyapti","Sanjay","Shah");
console.log(fullname);