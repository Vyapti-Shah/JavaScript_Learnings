const mybutton = document.getElementById("mybutton");
const myDiv = document.getElementById("myDiv");

mybutton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x>=200 || y>=200){
            clearInterval(timerId);
        }
        else{
            x += 1;
            y += 1;
            myDiv.style.left = x + "px";
            myDiv.style.top = y + "px";
        }
    }
}

mybutton.addEventListener("click", begin1);
function begin1(){
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees>=360){
            clearInterval(timerId);
        }
        else{
            degrees += 1;
            myDiv.style.transform = "rotateX("+degrees+"deg)"; //to rotate through x axis
            myDiv.style.transform = "rotateY("+degrees+"deg)"; //to rotate through y axis
            myDiv.style.transform = "rotateZ("+degrees+"deg)"; //to rotate through z axis

        }
    }
}


const mybutton1 = document.getElementById("mybutton1");
const myDiv1 = document.getElementById("myDiv1");
mybutton1.addEventListener("click", begin2);
function begin2(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 2 || scaleY >= 2){  //it increases the size of box // for decreasing the case will be (scaleX <= 0.1 || scaleY <= 0.1)
            clearInterval(timerId);
        }
        else{
            scaleX += 0.1; //it increases the size of box // for decreasing the case will be (scaleX -= 0.1)
            scaleY += 0.1; //it increases the size of box // for decreasing the case will be (scaleY -= 0.1)
            myDiv1.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}