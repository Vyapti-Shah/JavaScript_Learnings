//events - 1. onclick()
//       - 2. onload()
//       - 3. onchange()
//       - 4. onmouseover()
//       - 5. onmouseout()
//       - 6. onmousedown()
//       - 7. onmouseup()


//const mybutton = document.getElementById("mybutton");
//mybutton.onclick = doSomething();

//const element = document.body;
//element.onload = doSomething; //when the website(body) loads it shows the doSomething function before clicking the button

const elem = document.getElementById("myText");
elem.onchange = doSomething;  //when you enter anything in the textbox it will show doSomething program

function doSomething(){
    alert("You did something");
}


const myDiv = document.getElementById("myDiv");
myDiv.onmouseover = doThis;
function doThis(){
    myDiv.style.backgroundColor = "pink";
}

myDiv.onmouseout = doThat;
function doThat(){
    myDiv.style.backgroundColor = "lightblue";
}

myDiv.onmousedown = doIt; //similar to onclick
function doIt(){
    myDiv.style.backgroundColor = "green";
}

myDiv.onmouseup = doElse;  //then the button is unclicked but cursor is on the box
function doElse(){
    myDiv.style.backgroundColor = "lightgreen";
}