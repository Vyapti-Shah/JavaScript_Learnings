//constructors - special method for defining the properties and method of objects

function Car(make, model, year, colour){
    this.make=make,
    this.model=model,
    this.year=year,
    this.colour=colour
    this.drive = () => {console.log(`Drift the ${this.model} in your way`)} //in constructors the this keyword for arrow function works
}

const car1 = new Car("Ford", "Mustang", 2024, "white");
const car2 = new Car("BMW", "M5", 2025, "black");
const car3 = new Car("Mercedes", "S-class", 2026, "grey");
const car4 = new Car("Porsche", "911", 2027, "pink");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.colour);

car2.drive();
