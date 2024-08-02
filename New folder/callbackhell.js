// Callback Hell - Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read
//               - Old pattern to handle asynchronous code
//               - Use Promises + Async/Await to avoid Callback Hell


//synchronous code (tasks running one at a time in systematic order)
function syntask1(){
    console.log("Synchronous Task 1 Complete");
}

function syntask2(){
    console.log("Synchronous Task 2 Complete");
}

function syntask3(){
    console.log("Synchronous Task 3 Complete");
}

function syntask4(){
    console.log("Synchronous Task 4 Complete");
}

syntask1();
syntask2();
syntask3();
syntask4();
console.log("All Synchronous Tasks Completed");



//asynchronous code (tasks running together in non-systematic order)
function asyntask1(){
    setTimeout(() => {
        console.log("Asynchronous Task 1 Complete");
    }, 2000);
}

function asyntask2(){
    setTimeout(() => {
        console.log("Asynchronous Task 2 Complete");
    }, 1000);
}

function asyntask3(){
    setTimeout(() => {
        console.log("Asynchronous Task 3 Complete");
    }, 2000);
}

function asyntask4(){
    setTimeout(() => {
        console.log("Asynchronous Task 4 Complete");
    }, 1500);
}

asyntask1();
asyntask2();
asyntask3();
asyntask4();
console.log("All Asynchronous Tasks Completed");



//Asynchronous to Synchronous
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All Tasks Completed");
            })
        })
    })
});


