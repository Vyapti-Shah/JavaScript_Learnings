//accept user input
//1.EASY WAY= window prompt
//2.PROFESSIONAL WAY= HTML textbox
let username;
username = window.prompt("Username=");
console.log(username);

let user;
document.getElementById("mySubmit").onclick = function(){
    user=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Welcome ${user}`
    console.log(user);
}