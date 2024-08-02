//Array of Object

const fruit = [{name:"apple", colour:"red", calories: 95},
               {name:"orange", colour:"orange", calories: 45},
               {name: "mango", colour:"yellow", calories:105},
               {name: "coconut", colour:"white", calories:159},
               {name: "pineapple", colour:"yellow", calories:37}];
        
console.log(fruit[0].name); 
console.log(fruit[3].name); 
console.log(fruit[1].colour); 
console.log(fruit[2].calories); 
console.log(fruit[4].name); 

//.forEach()
fruit.forEach(fruits => console.log(fruits));
fruit.forEach(fruits => console.log(fruits.name));
fruit.forEach(fruits => console.log(fruits.colour));
fruit.forEach(fruits => console.log(fruits.calories));

//.push()
fruit.push({name:"grapes", colour:"green", calroies: 62});
console.log(fruit);


//.pop()
const fruit1 = [{name:"apple", colour:"red", calories: 95},
               {name:"orange", colour:"orange", calories: 45},
               {name: "mango", colour:"yellow", calories:105},
               {name: "coconut", colour:"white", calories:159},
               {name: "pineapple", colour:"yellow", calories:37}];
fruit1.pop();
console.log(fruit1);


//.splice()
const fruit2 = [{name:"apple", colour:"red", calories: 95},
    {name:"orange", colour:"orange", calories: 45},
    {name: "mango", colour:"yellow", calories:105},
    {name: "coconut", colour:"white", calories:159},
    {name: "pineapple", colour:"yellow", calories:37}];
fruit2.splice(1,3); //removes elements between those place
console.log(fruit2);

//map, filter and reduce
const fruit3 = [{name:"apple", colour:"red", calories: 95},
    {name:"orange", colour:"orange", calories: 45},
    {name: "mango", colour:"yellow", calories:105},
    {name: "coconut", colour:"white", calories:159},
    {name: "pineapple", colour:"yellow", calories:37}];
    //.map()
    const fruitNames = fruit3.map(fruitss => fruitss.name);
    const fruitColours = fruit3.map(fruitss => fruitss.colour);
    const fruitCalories = fruit3.map(fruitss => fruitss.calories);
    console.log(fruitNames);
    console.log(fruitColours);
    console.log(fruitCalories);
    //.filter()
    const fruityellow = fruit3.filter(fruitss1 => fruitss1.colour === "yellow");
    const fruitlowCal = fruit3.filter(fruitss1 => fruitss1.calories < 100);
    const fruithighCal = fruit3.filter(fruitss1 => fruitss1.calories > 100);
    console.log(fruityellow);
    console.log(fruitlowCal);
    console.log(fruithighCal);
    //.reduce()
    const maxfruit = fruit3.reduce((max, fruitss2) => fruitss2.calories > max.calories ? fruitss2 : max);
    console.log(maxfruit.calories);
    const minfruit = fruit3.reduce((min, fruitss2) => fruitss2.calories < min.calories ? fruitss2 : min);
    console.log(minfruit.calories);
