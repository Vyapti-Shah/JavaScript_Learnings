//toLocaleString() - returns a string with a language sensitive representation of this number
//                 - number.toLocaleString(locale, {options})
//locale = specifies the language (undefined - default set in the browser)
//options = object with formatting options

let myNum = 123456.789;
myNum = myNum.toLocaleString("en-IN");  //en-IN english in india
console.log(myNum);

let meraNum = 123456.789;
meraNum = meraNum.toLocaleString("hi-IN");  //hi-IN hindi in india
console.log(meraNum);

let meraNum1 = 123456.789;
meraNum1 = meraNum1.toLocaleString("hi-IN", {style:"currency", currency:"INR"});  //adds ₹ sign infront of the number 
console.log(meraNum1);



let num = 123456.789;
num = num.toLocaleString("en-us");  //en-us english in US
console.log(num);

let num1 = 123456.789;
num1 = num1.toLocaleString("en-us", {style:"currency", currency:"USD"});  //adds $ sign infront of the number 
console.log(num1);



let numGer = 123456.789;
numGer = numGer.toLocaleString("de-DE");  //standard german format
console.log(numGer);

let numGer1 = 123456.789;
numGer1 = numGer1.toLocaleString("de-DE", {style:"currency", currency:"EUR"});  //adds € sign in the end of the number 
console.log(numGer1);



let n = 10;
n = n.toLocaleString(undefined, {style:"percent"});  //converts to % with its sign
console.log(n);
let a = .5;
a = a.toLocaleString(undefined, {style:"percent"});  //converts to % with its sign
console.log(a);

let un = 100;
un = un.toLocaleString(undefined, {style:"unit", unit:"celsius"});  //adds unit 
console.log(un);