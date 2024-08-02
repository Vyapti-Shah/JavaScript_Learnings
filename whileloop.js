//while loop - executes a code in infinitely

/* //it gives an infinite loop until we stop it//
let user="";
while(user===""){
    console.log(`You did not enter your name`);
}
console.log(`Hello ${user}`);
*/


let user1="Vyapti";
while(user1===""){
    console.log(`You did not enter your name`);
}
console.log(`Hello ${user1}`);

// if we click cancel then it will print null (when {|| user2===null} is not present in the code)
let user2="";
while(user2==="" || user2===null){ //strictly equality operator makes it compulsary for user to type an input we cannot leave it blank 
    user2=window.prompt(`Enter your name2:`);
}
console.log(`Hello ${user2}`);

let user3;//undefined variable gives undefined output
while(user3==="" || user3===null){ 
    user3=window.prompt(`Enter your name3:`);
}
console.log(`Hello ${user3}`);

// if we click cancel then it will print null (when {|| user2===null} is not present in the code)
let user4="";
while(user4===""){ 
    user4=window.prompt(`Enter your name4:`);
}
console.log(`Hello ${user4}`);

let loggedin=false; //if here it is true then we will execute the code as log as it becomes false
let username;
let password;
while(!loggedin){ //as the while loop haqs condition not equals loggedin so which means the code will repeat until the condition is true 
    username=window.prompt(`Enter you username:`);
    password=window.prompt(`Enter you password:`);
    if(username==="myV" && password==="myS"){
        loggedin=true;
      console.log(`You're logged in!`);
    } else {
        console.log(`Invalid credentials!`);
    }
}


