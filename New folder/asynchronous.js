//synchronous - Executes line by line consecutively in a sequential manner
//            - code that wait for an operation to complete  
//asynchronous - allows multiple operations to be performed concurrenty without waiting
//             - Doesn't block the execution flow and allows the program to continue 
//             - (I/O operations, network requests, fetching, etc)
//             - Handles with = Callbacks, Promises, Async/Assign

function func1(callback){
    setTimeout(() => {console.log("Task 1"); 
                     callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);