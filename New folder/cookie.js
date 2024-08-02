//cookie - a small text file stored on your computer used to remember information about the user saved in name=value pairs
console.log(navigator.cookieEnabled);


//document.cookie = "firstName=Vyapti; expires=Sun, 1 January 2030 12:00:00 IST; path=/";
//document.cookie = "lastName=Shah; expires=Sun, 1 January 2024 12:00:00 IST; path=/";  //expired so will not be shown
//console.log(document.cookie);  //cookie can store more than 1 information


setCookie("firstName", "vyapti", 365);
setCookie("lastName", "shah", 365);

console.log(getCookie("firstname"));

/*
setCookie("lastName");
setCookie("email");
*/

console.log(document.cookie);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString(); //if this is not there then the time would be in milliseconds 
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}


function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    //console.log(cDecoded);
    const cArray = cDecoded.split("; ");
    console.log(cArray);
    let result = null;
    cArray.forEach(element => {
        if(element.indexOf(name)==0){
            result = element.substring(name.length + 1);
        }
    });
    return result;
}


const firsttext = document.getElementById("firstname");
const lasttext = document.getElementById("lastname");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.getElementById("cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firsttext.value, 365);
    setCookie("lastName", lasttext.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firsttext.value = getCookie("firstName");
    lasttext.value = getCookie("lastName");
});