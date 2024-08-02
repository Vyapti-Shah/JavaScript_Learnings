//   this - reference to the object where THIS is used (the object depends on immediate context)
//formula - person.name = this.name

const person1 = {
    name: "Vyapti",
    favFood: "burger",
    sayHello: function(){console.log(`I am ${this.name} ✌🏻`)}, //if we are using function expression method then this.name used
    eat: () => console.log(`${person1.name} is eating ${person1.favFood}`) //if we are using arrow function method then variable(person1).name used //whereas for constructor the this.name works for arrow functions
}

const person2 = {
    name: "Iron Man",
    favFood: "cheese burger",
    sayHello: () => console.log(`I am ${person2.name} 🫰🏻`),
    eat: () => console.log(`${person2.name} is eating ${person2.favFood}`) 
}
person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

//console.log(this) - it will return window object which has its properties