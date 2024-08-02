class Car{
    constructor(model, year, colour){
        this.model = model;
        this.year = year;
        this.colour = colour;
    }
}

const car1 = new Car("Mercedes", 2024, "grey");
const car2 = new Car("BMW", 2025, "black");
const car3 = new Car("Porsche", 2027, "pink");

displayInfo(car1);
function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.colour);
}

function changeColour(car, colour){
    car.colour = colour;
}

changeColour(car3, "misty rose");
displayInfo(car3);