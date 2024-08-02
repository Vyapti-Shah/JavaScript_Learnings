//NodeLists - Static collection of HTML elements by (id, class, element)
//          - Can be created by using querySelectorAll()
//          - Similar to an array, but no (map, filter, reduce), they have forEach method
//          - NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".mybutton");
console.log(buttons); //we have 5 buttons but the nodelist shows 4 as one was added in js 

/*
//ADD HTML/CSS PROPERTIES
buttons.forEach(button => {
    button.style.backgroundColor = "lightblue";
    button.textContent += "😊";
});
*/


/*
//CLICK event listener
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "blue";
    });
});
*/



//MOUSEOVER/MOUSEOUT event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "grey";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(240, 74%, 67%)";
    });
});


let butt = document.querySelectorAll(".mybutton");
//ADD AN ELEMENT
const newbutt = document.createElement("button");  //STEP 1
newbutt.textContent = "Button 5";  //STEP 2    
newbutt.classList = "mybutton";  //while working with element class we use classList //this gives it all the css properties of the 
document.body.appendChild(newbutt);  // STEP 3

butt =  document.querySelectorAll(".mybutton"); //to show nodelist all 5 buttons
console.log(butt);


//REMOVE AN ELEMENT
buttons.forEach(button => {     //removes the button on which we click 
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".mybutton");  //by adding this line we remove the button from the console nodelist also if this line was not added then the nodelist will show all the buttons
        console.log(buttons);
    });
});