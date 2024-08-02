// do  while loop
let user; //here if the variable (ie user) is undefined there will be no difference in the code as in while loop it prints undefined but in do while loop it will not
do{
 user=window.prompt(`Enter your name:`)
} while(user==="" || user==="null")
    console.log(`Hello ${user}`);

let loggedin=true; //here if it is ture it will show the invalid credentials output but if it is false it won't show the output unless correct input is given
let username;
let password;
do{
    username=window.prompt(`Enter you username:`);
    password=window.prompt(`Enter you password:`);
    if(username==="myV" && password==="myS"){
        loggedin=true;
      console.log(`You're logged in!`);
    } else {
        console.log(`Invalid credentials!`);
    }
}while(!loggedin)
