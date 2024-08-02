//event listener = Listens for specific events to create interactive web pages
//               = events: keydown, keyup, keypress(keypress is not compatible to all web browsers so not used)
//               = document.addEventListener(event, callback)

//KEY EVENT (keyboard pe → ← ↑ ↓ vale keys)

/*
const mybox = document.getElementById("mybox");

document.addEventListener("keydown", event => {
    mybox.textContent = "😯";
    mybox.style.backgroundColor = "pink";
    //console.log(`Key down = ${event.key}`);
});


document.addEventListener("keyup", event => {
    mybox.textContent = "😊";
    mybox.style.backgroundColor = "lightblue";
    //console.log(`Key up = ${event.key}`);
});
*/

//detect key press
window.addEventListener("keydown", event => console.log(event.key)); 

const mybox = document.getElementById("mybox");
const moveAmount = 10;
let x= 0;
let y=0;

document.addEventListener("keydown", event => {
    mybox.textContent = "😯";
    mybox.style.backgroundColor = "pink";
});

document.addEventListener("keyup", event => {
    mybox.textContent = "😊";
    mybox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;            
        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
});