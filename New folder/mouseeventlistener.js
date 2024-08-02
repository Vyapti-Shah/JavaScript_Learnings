//event listener = Listens for specific events to create interactive web pages
//               = events: click, mouseover,mouseout
//               = .addEventListener(event, callback)

//MOUSE EVENTS 

const mybox = document.getElementById("mybox");

/*
//eg1
for only managing box

const mybox = document.getElementById("mybox");
//event is an object provide3d to us automatically when something occurs

function changeColour(event){  //click is event that runs when we click the box
    console.log(event);
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Ouch!🤕";
}

mybox.addEventListener("click", changeColour);  //.addEventListener(event, callback) here event=click and callback=changeColour

mybox.addEventListener("mouseover", event => { //mouseover is event that runs when the cursor is on the box
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Do it Again! 😙";
});


mybox.addEventListener("mouseout", event => { //mouseout is event that runs when the cursor is out of the box
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Click Me 😊";
});




//eg2
for only managing buttons

const mybutton =document.getElementById("mybutton");

mybutton.addEventListener("click", event => { //mouseover is event that runs when the cursor is on the box
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Ouch!🤕";
});


mybutton.addEventListener("mouseover", event => { //mouseover is event that runs when the cursor is on the box
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Do it Again! 😙";
});


mybutton.addEventListener("mouseout", event => { //mouseout is event that runs when the cursor is out of the box
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Click Me 😊";
});
*/




const mybutton =document.getElementById("mybutton");

mybutton.addEventListener("click", event => { //mouseover is event that runs when the cursor is on the box
    mybox.style.backgroundColor = "pink";
    mybox.textContent = "Ouch!🤕";
});


mybutton.addEventListener("mouseover", event => { //mouseover is event that runs when the cursor is on the box
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Do it Again! 😙";
});


mybutton.addEventListener("mouseout", event => { //mouseout is event that runs when the cursor is out of the box
    mybox.style.backgroundColor = "lightblue";
    mybox.textContent = "Click Me 😊";
});