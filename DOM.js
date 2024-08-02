//DOM - DOCUMENT OBJECT MODEL
//    - object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//    - Web browser constructs the DOM when it loads an HTML document and structures all the elements in a tree-like representation. 
//    - JavaScript can access the DOM to dynamically change the content, structure and style of a web page.

document.title = "Website"; //changes the name of the website from variable to website

document.body.style.background= "hsl(0, 0%, 80%)"//0=hue , 0%=saturation , 80%=lightness

const user = window.prompt("Enter your name");
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += user === "" ? `Guest` : user;

console.dir(document); //shows all the info of the document