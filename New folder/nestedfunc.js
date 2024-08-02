// Nested Functions - Functions inside other functions
//                  - Other functions have access to inner function
//                  - Inner functions are hidden from outside the outer functions
//                  - used in closures

let userName = "Vyapti";
let userInbox = 10;

login();  //having displayuserName() and displayuserInbox() inside the login() function adds extra safety due to which the display functions 
          //can only be display when login is called 

function login(){
    displayuserName();
    displayuserInbox();
    
    function displayuserName(){
        console.log(`Welcome ${userName}`);
    }

    function displayuserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
