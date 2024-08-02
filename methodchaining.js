//method chaining - calling one method after another in one continous line of code

// NO METHOD CHAINING
let user= window.prompt(`Enter your username=`);
user=user.trim();
let letter=user.charAt(0);
letter=letter.toUpperCase();
let extraChar=user.slice(1);
extraChar=extraChar.toLowerCase();
user=letter+extraChar;
console.log(user);
//it converts the output to first letter upper case and other in small letters

// METHOD CHAINING
let user1= window.prompt(`Enter your username=`);
user1=user1.trim().charAt(0).toUpperCase() + user1.trim().slice(1).toLowerCase();
console.log(user1);