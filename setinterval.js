//setInterval() - invokes a function repeatedly after a number of milliseconds 
//              - asynchronous function (does not pause the execution)

let count = 0;
let max = window.prompt(`Count upto what number?`);
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count++;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}