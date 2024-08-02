//Canvas API - a means of drawing graphics  - it is a box here
//           - used for animations, games, data visualization


const myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");

context.lineWidth = 3; //for extra thick lines
context.strokeStyle = "darkblue"; //for changine the colour of the lines drawn
context.beginPath(); // to began drawing the line
context.moveTo(0, 0); //top left corner of canvas is 0,0 //moveTO used to pick a starting position //moves the brush from one place to other
context.lineTo(250, 250); //lineTo method used to draw a line by the brush //bottom right corner of canvas is 500,500
context.lineTo(250, 500); //makes a standing line from middle
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke(); // to draw a line from the moveTo point to lineTo point 



//DRAW TRIANGLE
const myCanvas1 = document.getElementById("myCanvas1");
let context1 = myCanvas1.getContext("2d");

context1.strokeStyle = "grey";
context1.fillStyle = "green"
context1.lineWidth = 10;
context1.beginPath();
context1.moveTo(250, 0);
context1.lineTo(0, 250);
context1.lineTo(500, 250);
context1.lineTo(250, 0);
context1.stroke();
context1.fill(); //to fill coulour inside the triangle //fill+strokes gives us border and colour within



//DRAW RECTANGLE

const myCanvas2 = document.getElementById("myCanvas2");
let context2 = myCanvas2.getContext("2d");

context2.fillStyle = "rgb(211, 103, 121)";
context2.fillRect(0, 0, 250, 250);
context2.strokeStyle = "grey";
context2.strokeRect(0, 0, 250, 250);  // 0,0 are coordinates and 250 250 are width height respectively

context2.fillStyle = "green";
context2.fillRect(0, 250, 250, 250);
context2.strokeStyle = "grey";
context2.strokeRect(0, 250, 250, 250);

context2.fillStyle = "blue";
context2.fillRect(250, 250, 250, 250);
context2.strokeStyle = "grey";
context2.strokeRect(250, 250, 250, 250);

context2.fillStyle = "pink";
context2.fillRect(250, 0, 250, 250);
context2.strokeStyle = "grey";
context2.strokeRect(250, 0, 250, 250);



//DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
const myCanvas3 = document.getElementById("myCanvas3");
let context3 = myCanvas3.getContext("2d");

context3.beginPath();
context3.fillStyle = "rgb(173, 171, 240)";
context3.lineWidth = 10;
context3.strokeStyle = "grey"
context3.arc(250, 250, 200, 0/*1*/ , 2 * Math.PI /*,true*/); //0,0 are coordinates //100 is radius 0,2 are the starting & ending angle 
                                                             //in radians respectively 
context3.stroke();
context3.fill();



//DRAW TEXT
const myCanvas4 = document.getElementById("myCanvas4");
let context4 = myCanvas4.getContext("2d");

context4.font = "50px MV Boli";
context4.fillStyle = "orange";
context4.textAlign = "center";
context4.fillText("YOU WIN", myCanvas.width / 2, myCanvas.width / 2);
