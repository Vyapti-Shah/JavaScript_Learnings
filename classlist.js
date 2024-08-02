//class list - Element property in JavaScript used to interact with an element's list of classes (CSS classes)
//           - Allows you to make reusable classes for many elements accross your webpage
//add()
//remove()
//toggle(Remove if present, add if not)
//replace(oldclass, newclass)
//contains()

const myh1 = document.getElementById("myh1");
const mybutton = document.getElementById("mybutton");
const button = document.getElementById("button");

myh1.classList.add("enabled");
mybutton.classList.add("enabled"); //to add css property of enabled 
mybutton.classList.remove("enabled"); //to remove css property of enabled 


//to add css property of hover
mybutton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});
//to remove css property of hover
mybutton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});


//to toggle css property of hover
button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
//to toggle css property of hover
button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});


//to replace css properties of enabled to disabled & to check if it contains disabled FOR BUTTONS
mybutton.classList.add("enabled");
mybutton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤕";
    } else {
        event.target.classList.replace("enabled", "disabled"); //replace(oldclass, newclass)
    }
});


//to replace css properties of enabled to disabled & to check if it contains disabled FOR H1
myh1.classList.add("enabled");
myh1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤕";
    } else {
        event.target.classList.replace("enabled", "disabled"); //replace(oldclass, newclass)
    }
});




//eg
let buttons = document.querySelectorAll(".butt");
buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤕";
        } else {
            event.target.classList.replace("enabled", "disabled"); //replace(oldclass, newclass)
        }
    });
}); 