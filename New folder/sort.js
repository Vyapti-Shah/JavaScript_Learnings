//sort() - methods used to sort elements of an array in place
//       - sorts elements as a string in lexicographic order, not alphabetical
//       - lexicographic → (slphabets + numbers + symbols) as string

let fruits = ["apple", "mango", "banana", "orange", "coconut"];
fruits.sort();
console.log(fruits);


let fruit = [1, 10, 7, 2, 4, 3, 5, 8, 6, 9];
fruit.sort((a, b) => a - b);
console.log(fruit);


const people = [{name: "Vyapti", age: 19, gpa: 9.7},
                {name: "Vaishnavi", age: 18, gpa: 9},
                {name: "Shalmalee", age: 20, gpa: 9.5},
                {name: "Payal", age: 21, gpa: 8.9}];
people.sort((a, b) => a.age - b.age);
console.log(people);

const peop = [{name: "Vyapti", age: 19, gpa: 9.7},
    {name: "Vaishnavi", age: 18, gpa: 9},
    {name: "Shalmalee", age: 20, gpa: 9.5},
    {name: "Payal", age: 21, gpa: 8.9}];
peop.sort((a, b) => b.age - a.age);
console.log(peop);

const p = [{name: "Vyapti", age: 19, gpa: 9.7},
    {name: "Vaishnavi", age: 18, gpa: 9},
    {name: "Payal", age: 21, gpa: 8.9},
    {name: "Shalmalee", age: 20, gpa: 9.5}];
    
p.sort((a, b) => b.name.localeCompare(a.name));
console.log(p);