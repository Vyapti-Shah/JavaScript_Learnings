//window - interface used to talk to the web browser
//       - DOM is a property of the window

console.dir(window);

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(window.scrollX);
console.log(window.scrollY);
console.log(window.location.href);
// window.location.href = "https://google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);

const mybutton = document.getElementById("mybutton");
const mybutton1 = document.getElementById("mybutton1");
const mybutton2 = document.getElementById("mybutton2");
mybutton.addEventListener("click", () => window.open("https://google.com"));
mybutton1.addEventListener("click", () => window.close());
mybutton2.addEventListener("click", () => window.print());

window.alert("Hello!");
window.confirm("Press OK to continue!");

let age = window.prompt("Enter your age!");
if(age < 18){
    window.alert("You have to be 18+ to vote");
    window.close();
}
