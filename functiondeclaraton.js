// function - a selection of reusable code that performs a specific task
//            Declare code once, use it whenever you want
//            Call the function to execute that code

function happyBirthday(username, age){ //username and age are parameters
      console.log("Happy Birthday to you");
      console.log("Happy Birthday to you");
      console.log(`Happy Birthday ${username}`);
      console.log(`You are ${age} years old`);
}
happyBirthday("Vyapti",19);//username and age are arguements
happyBirthday("Sejal",20);
happyBirthday("Sanjay",21);

function add(x,y){
    let result=x+y;
    return result;
}
let ans= add(2,3);
console.log(ans);

function sub(x,y){
    return x-y;
}
console.log(sub(5,1));

function oddEven(a){
    if(a%2==0){
        return true;
    } else {
        return false;
    }
}
console.log(oddEven(12));

//odd even by ternary
function even(b){
    return b%2===0? true:false;
}
console.log(even(9));

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    } else {
        return false;
    }
}
console.log(isValidEmail("vyaps@gmail.com"));
console.log(isValidEmail("vyapsgmail.com"));