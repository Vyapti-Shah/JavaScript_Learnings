//closure - A function defined inside another function, the inner variable has the access to variables and scope of the outer function
//        - Allow for private variables and state maintenance
//        - Used frequently in JS frameworks:React, Vue, Angular

//eg1
function outer(){//everything inside the outer function is a part of the closure
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
let message = "Bye"; //as it is declared outside of the variable so it would not show any output as closure stores private variable(message is a private variable) which cannot be accessed outside 
outer();


//eg2
let count = 0;//as it is declared outside the closure so it can be changed
count = 1000;
function increment(){
    count++;
    console.log(`The count is ${count}`);
}
increment();
increment();
increment();


//eg3
function createCounter(){
let count = 0;
count = 1000;
function increment(){
    count++;
    console.log(`The count is ${count}`);
}

function getCount(){
    return count;
}
return {increment, getCount};  
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);// undefined becoz count is hidden inside closure and cannot be accessed outside

console.log(`The current counter is ${counter.getCount()}`);


//eg4

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points ;
        console.log(`+${points} points`);
    }

    function decreaseScore(points){
        score -= points ;
        console.log(`-${points} points`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()} points`);