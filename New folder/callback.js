// Call Back (callback)- a function that is passed as an arguement to another function
//            used to handle asynchronous(not occuring at same time) operation:
//            -Reading a file
//            -Network Requests
//            -Interacting with databases

wait(leave);//in normal case we can use callback
function wait(callback){
    console.log("Wait!");
    callback();
}
function leave(){
    console.log("Leave!");
}

hello(goodbye);//in order to get hello first and goodbye afterwards we can user callback 
function hello(callback){
    setTimeout(function(){ //here we are making hello to delay 
    console.log("Hello!");
    callback();
    },1000);
}
function goodbye(){
    console.log("GoodBye!");
}

sum(displayConsole, 1, 2)
sum(displayPage, 1, 2)
function sum(callback, x, y){
    let result=x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent=result;
}