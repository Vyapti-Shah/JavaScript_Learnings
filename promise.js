//Promise - An Object that manages asynchronous operations
//        - Wrap a Promise Object around {asynchronous code}
//        - "I promise to return a value"
//        - PENDING -> RESOLVE or REJECTED
//        - new promise((resolve, reject) => {asynchronous code})

//DO THESE CHORES IN ORDER
//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

function walkDog(/* callback */){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkthedog = true;

            if(walkthedog){
                resolve("Walk the dog");
            }
            else {
                reject("Did not walk the dog"); //if this was false the program will not go further and throw an error printing the reject statement
            }
            //callback();

        }, 1500);
    });
}

function cleanKitchen(/* callback */){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanthekitchen = true;

            if(cleanthekitchen){
                resolve("Clean the kitchen");
            }
            else{
                reject("Did not clean the kitchen"); //if this was false the program will not go further and throw an error printing the reject statement
            }
            //callback();

        }, 2500);
    });
}

function takeOutTrash(/* callback */){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takethetrashout = false; //if this was false then it would throw an error printing the reject statement
            if(takethetrashout){
                resolve("Take out the trash");
            }
            else {
                reject("Did not take the trash out");
            }
            //callback();
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); return console.log("Finished!")})
         .catch(error => {console.error(error)});



/* //Callback Hell//
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {console.log("Finished!")})
    })
});
*/