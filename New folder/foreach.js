// forEach() - method uszed to iterate(loop through) the elements of an array and apply specified function(callback) to each element
//           - array.forEach(callback)
//           - element(ie 1, 2, 3, 4, 5), index(ie where is the current index nums located) and array(ie nums) are provided

//eg1
let nums= [1, 2, 3, 4, 5];
//when both triple and double are executed then table of 2×3=6 will be printed
nums.forEach(triple);//if only triple is executed then table of 3 will be printed
nums.forEach(double);//if only double is executed then table of 2 will be printed
nums.forEach(display);

function triple(element, index, array){
    array[index]=element*3;
}

function double(element, index, array){
    array[index]=element*2;
}

function display(element){
    console.log(element);
}


//eg2
let num=[1, 2, 3];
//when both square and cube are executed then power of 2×3=6 will be printed
num.forEach(square);//if only squre is executed then power of 2 will be printed
num.forEach(cube);//if only cube is executed then power of 3 will be printed
num.forEach(dis);

function square(element, index, array){
    array[index]= Math.pow(element,2);
}

function cube(element, index, array){
    array[index]= Math.pow(element,3);
}

function dis(element){
    console.log(element);
}


//eg3
let fruits=["apple", "orange", "mango", "banana"];

fruits.forEach(upperCase);
fruits.forEach(disp);

function upperCase(element, index, array){
   array[index]=element.toUpperCase();
}

function disp(element){
    console.log(element);
}


//eg4
let fruit=["APPLE", "ORANGE", "MANGO", "BANANA"];

fruit.forEach(lowerCase);
fruit.forEach(disp);

function lowerCase(element, index, array){
    array[index]=element.toLowerCase();
 }

function disp(element){
    console.log(element);
}


//eg5
let fr=["APPLE", "ORANGE", "MANGO", "BANANA"];

fr.forEach(allCase);
fr.forEach(disp);

function allCase(element, index, array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
 }

function disp(element){
    console.log(element);
}
