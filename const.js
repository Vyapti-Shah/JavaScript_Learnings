//constant(const)- a variable that cannot be changed
const PI=3.14159;// const used so that  the variable PI cannot be changed then afterwards
                //capitalising datatypes(here PI) occur only in primitive datatypes(numbers and booleans) and not in reference datatypes (strings)
let radius;
let circumference;
radius=window.prompt("Radius=");
radius=Number(radius);
circumference= 2*PI*radius;
console.log(circumference);
document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference= 2*PI*radius;
    document.getElementById("myH3").textContent= circumference+"cm";
}