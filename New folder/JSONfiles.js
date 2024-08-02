//JSON - (JavaScript Object Notation) data-interchange format
//     - Used for exchanging data between a server and a web application
//     - JSON files (key:value) OR [value1, value2, value3]
//     - JSON.stringify() = converts a JS object to a JSON string
//     - JSON.parse() = converts a JSON string to a JS object


//STRING TO OBJECT
const names = ["Vyapti", "Jiya", "Sachi", "Dhruti"];
const jsonString = JSON.stringify(names);

console.log(names);
console.log(jsonString);



const person = {"name" : "Vyapti", "age" : 19, "isEmployed" : true, "hobbies" : ["driving", "coding", "dancing", "coooking", "painting"]};
const jsonStringperson = JSON.stringify(person);

console.log(person);
console.log(jsonStringperson);



const people = [{"name" : "Vyapti", "age" : 19, "isEmployed" : true},
                {"name" : "Jiya", "age" : 15, "isEmployed" : false},
                {"name" : "Sachi", "age" : 16, "isEmployed" : false},
                {"name" : "Dhruti", "age" : 23, "isEmployed" : true}];

const jsonStringpeople = JSON.stringify(people);

console.log(people);
console.log(jsonStringpeople);



//OBJECT TO STRING
const jsonnames = `["Vyapti", "Jiya", "Sachi", "Dhruti"]`;
const jsonperson = `{"name" : "Vyapti", "age" : 19, "isEmployed" : true, "hobbies" : ["driving", "coding", "dancing", "coooking", "painting"]}`;
const jsonpeople = `[{"name" : "Vyapti", "age" : 19, "isEmployed" : true},
                     {"name" : "Jiya", "age" : 15, "isEmployed" : false},
                     {"name" : "Sachi", "age" : 16, "isEmployed" : false},
                     {"name" : "Dhruti", "age" : 23, "isEmployed" : true}]`;

console.log(jsonnames);
const parsedDatanames = JSON.parse(jsonnames);
console.log(parsedDatanames);

console.log(jsonperson);
const parsedDataperson = JSON.parse(jsonperson);
console.log(parsedDataperson);

console.log(jsonStringpeople);
const parsedDatapeople = JSON.parse(jsonpeople);
console.log(parsedDatapeople);




//ARRAY by fetch method
fetch("JSONfilesperson.json")
    .then(response => response.json())
    .then(value => console.log(value))
    
fetch("JSONfilesnames.json")
.then(response => response.json())
.then(value => console.log(value))

fetch("JSONfilespeople.json")
    .then(response => response.json())
    .then(value => value.forEach(value => console.log(value.name))) //if .name not written then gives the whole info as different object
    .catch(error => console.error(error));