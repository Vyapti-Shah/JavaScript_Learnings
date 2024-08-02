//variable scope - where a variable is accessible
// let keyword - variables are limited to block scope {}
// var keyword - variables are limited to a function(){}

//global variable - declared outside a function
//if var is declared globally it will CHANGE the browser's window properties 

for(let i=1; i<=3; i++){
    console.log(i);
}
//console.log(i) if we use let then the output will not be display ooutside of the {}

for(var j=1; j<=6; j++){
    //console.log(i);
}
console.log(j); // if we use var then we will get an output but the output displayed will be something else then the output we want (here 7)


doSomething();
function doSomething(){
    for(var k=1; k<=3; k++){
        //console.log(k);
    }
    console.log(k); //output = 4
}
//console.log(k);//the output gives error as k undefined as the var variable (var k) can be accessed only within the function brackets


let nam = "VS";
console.log(nam); //normally prints the name as output 

var name = "Vyapti"; //var keyword changes the browser property when you go to => (type)window + enter(key) >> check - name:"" 
//the name property has output as name:"Vyapti"