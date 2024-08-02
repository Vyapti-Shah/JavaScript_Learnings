// 2D array = An array of arrays

let fruits = ["apple", "banana", "orange"];
let vegies = ["capsicum", "cabage", "green peas"];
let junk = ["burger", "pizza", "pasta"];

let groceryList = [fruits, vegies, junk];

groceryList[0][2]= "mango"; //[rows][columns] //here it will replace orange with mangoes

for(let list of groceryList){
    console.log(list);
    for(let food of list){
        console.log(food);
    }
}