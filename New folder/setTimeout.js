//setTimeout() - function in javaScript that allows to schedule the execution of a funciton after an amount of time (milliseconds)
//             - setTimeout(callback, delay)
//clearTimeout(timeoutId) - can cancel a timeout before triggers 

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

const timeoutId = setTimeout(function(){ window.alert("GoodBye")}, 3000);
clearTimeout(timeoutId); //cleares the goodbye output

let timeoutid;
function startTimer(){
    timeoutid = setTimeout(() => window.alert("NICE TO MEET YOU"));
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutid);
    console.log("CLEARED");
}
