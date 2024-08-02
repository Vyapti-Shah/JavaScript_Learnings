// nested loop - a loop inside of another loop

let symbol = window.prompt(`Enter symbol to be printed`); //if this line was not there then it would print 1234 in all rows
let rows = window.prompt(`Enter num for rows`);
let columns = window.prompt(`Enter num for columns`);
for(let i=1; i<=rows; i++){
    for(let j=1; j<=columns; j++){
        document.getElementById("myRect").innerHTML += symbol; //+=j; for 1234 in all rows
    }
    document.getElementById("myRect").innerHTML += "<br>";
}