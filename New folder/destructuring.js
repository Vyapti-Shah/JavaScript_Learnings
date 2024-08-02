//destructuring - extract values from arrays and objects, then assign then to variables in a convinient way
//              - [] = to peform array destructuring
//              - {} = to peform object destructuring 

//eg1: SWAP THE VALUE OF TWO VARIABLES
let a=1;
let b=2;

[a, b] = [b, a];

console.log(a);
console.log(b);


//eg2: ARRANGE ARRAY ELEMENTS TO VARIABLES
const colours = ["red", "green", "blue", "black", "white"];

[colours[0], colours[4]] = [colours[4], colours[0]];

console.log(colours);


//EG3: ASSIGN ARRAY ELEMENTS TO VARIABLES
const colour = ["pink", "purple", "brown", "grey", "peach"];

const [firstColour, secondColour, thirdColour, ...extraColours]= colour;
console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);


//eg4: EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstName : "Vyapti",
    lastName : "Shah",
    age : 19,
    job : "Engineering",
}

const person2 = {
    firstName : "Tony",
    lastName : "Stark",
    age : 59,
}

const {firstName, lastName, age, job="Iron Man"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//eg5: DESTRUCTURE IN FUNCTION PARAMETERS

function dispPerson({firstName1, lastName1, age1, job1="Iron Man"}){
    console.log(`Name: ${firstName1} ${lastName1}`);
    console.log(`Age: ${age1}`);
    console.log(`Job: ${job1}`);
}

const person = {
    firstName1 : "Vyapti",
    lastName1 : "Shah",
    age1 : 19,
    job1 : "Engineering",
}

const person0 = {
    firstName1 : "Tony",
    lastName1 : "Stark",
    age1 : 59,
}

console.log(person.dispPerson);
console.log(person0.dispPerson);