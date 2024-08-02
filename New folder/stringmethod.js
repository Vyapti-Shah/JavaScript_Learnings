//string methods
let user="i Vyapti";
let user1="     Vyapti    "
console.log(user.charAt(0));
console.log(user.indexOf("i"));
console.log(user.lastIndexOf("i"));
console.log(user.length);
console.log(user1.trim());
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user.repeat(4));
console.log(user.startsWith(" "));
console.log(user.startsWith("i"));
console.log(user.endsWith(" "));
console.log(user.endsWith("i"));

let phonenum= "123-456-7890";
console.log(phonenum.replaceAll("-",""));
console.log(phonenum.padStart(15,"0"));
console.log(phonenum.padEnd("15","0"));

function isValidEmail(email){
    return email.includes("@")? true:false;
}
console.log(isValidEmail("vyaps@gmail.com"));
console.log(isValidEmail("vyapsgmail.com"));