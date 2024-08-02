// HYPOTENUSE CALCULATOR PROJECT

let side1;
let side2;
let side3;

function hypoCalc(){
    side1 = document.getElementById("side1").value;
    side1 = Number(side1);
    side2 = document.getElementById("side2").value;
    side2 = Number(side2);
    side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2)); 
    side3 = Number(side3);
    document.getElementById("side3Label").innerHTML = `Value of side 3 of triangle: ${side3}`;
}