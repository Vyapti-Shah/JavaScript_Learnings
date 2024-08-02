//equality operator : = assignment operator
//                   == comparison operator (compare if its equal or not)
//                  === strictly equality operator
//                   != inequality operator
//                  !== strictly inequality operator
const PI=3.14;//datatype is number
if(PI == "3.14"){ //datatype is string // as commparison operator used so the datatype does not make any difference if the data is same or not
    console.log(`That is PI`);
} 
else if(PI === "3.14"){//as strictly equality operator used the datatype matters (here datatype different so not PI)
    console.log(`Yes that is PI`);
}
else {
    console.log(`That is not PI`);
}

//similar to != and !==
const num=24;
if(num != "24"){
    console.log(`That is false`);
}
else if(num!=="24"){
    console.log(`Yes that is true`);
}
else{
    console.log(`That is true`);
}