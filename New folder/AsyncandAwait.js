//Async/Await - Async = makes a function return a promise
//            - Await = makes an async function wait for a promise
//            - Allows you to write asynchronous code in synchronous manner
//            - Async does not have a resolve or reject parameter
//            - Everything after Await is placed in an event quene
//            - Await is only valid when asyn is used 
//            - Async requires resolve and reject unless and until it is used with await

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkthedog = true;

            if(walkthedog){
                resolve("Walk the dog");
            }
            else {
                reject("Did not walk the dog"); //if this was false the program will not go further and throw an error printing the reject statement
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanthekitchen = true;

            if(cleanthekitchen){
                resolve("Clean the kitchen");
            }
            else{
                reject("Did not clean the kitchen"); //if this was false the program will not go further and throw an error printing the reject statement
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takethetrashout = true; 
            if(takethetrashout){
                resolve("Take out the trash");
            }
            else {
                reject("Did not take the trash out"); //if this was false then it would throw an error printing the reject statement
            }
        }, 500);
    });
}


async function doChores(){
    try{
        const walkdogResult = await walkDog();
        console.log(walkdogResult);

        const cleankitchenResult = await cleanKitchen();
        console.log(cleankitchenResult);

        const trashoutResult = await takeOutTrash();
        console.log(trashoutResult);

        console.log("Finished All");
    }
    catch(error){
        console.error(error);
    }
}         

doChores();