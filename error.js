//Error Handling = Error - An object that is created to represent a problem that occurs 
//                       - Occurs often with user input or eshtablishing a connection

//try {} - encloses code that might potentially throw an error
//catch {} - catches or handles any thrown errors from try{}
//finally {} - (optional) Always executes. Used mostly for cleanup
//           - close files, close connections, release resources


//eg1
try {
    //NETWORK ERRORS
    //PROMISE REJECTION
    //SECURITY ERRORS    
    console.log(x);
}

catch(error){
    console.error(error);
}

finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!");


//eg2 
try{
    const dividend = window.prompt("Dividend = ");
    const divisor = window.prompt("Divisor = ");

    if(divisor == 0){
        throw new Error("You cannot divide by zero");  //purposely introduced error
    }
    
    const result = dividend / divisor;
    console.lag(result);    //lag is an error here
}
catch(error){
    console.error(error);
}

console.log("END!");

//eg3
try{
    const dividend1 = Number(window.prompt("Dividend = "));
    const divisor1 = Number(window.prompt("Divisor = "));

    if(divisor1 == 0){
        throw new Error("You cannot divide by zero");  //purposely introduced error
    }

    if(isNaN(dividend1) || isNaN(divisor1)){
        throw new Error("Values must be a number");
    }
    
    const result = dividend1 / divisor1;
    console.lag(result);    //lag is an error here
}
catch(error){
    console.error(error);
}

console.log("ENDED!");