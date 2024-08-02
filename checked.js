//checked-property that determines the checked state of an HTML checkbox or radio button element
const my1=document.getElementById("my1");
const my2=document.getElementById("my2");
const my3=document.getElementById("my3");
const my4=document.getElementById("my4");
const my5=document.getElementById("my5");
const myButton=document.getElementById("myButton");
const myP=document.getElementById("myP");
myButton.onclick=function(){
    if((my1.checked&&my2.checked&&my3.checked&&my4.checked&&my5.checked)||my5.checked){
        myP.textContent=`Nice to know you liked it. Thankyou!`;
    }
    else if((my1.checked&&my2.checked&&my3.checked&&my4.checked)||my4.checked){
        myP.textContent=`Your Rate is 4. Let us know your feedback!`;
    }
    else if((my1.checked&&my2.checked&&my3.checked)||my3.checked){
        myP.textContent=`Your Rate is 3. Let us know your feedback!`;
    }
    else if((my1.checked&&my2.checked)||my2.checked){
        myP.textContent=`Your Rate is 2. Sorry for inconvenience. Let us know your feedback!`;
        }
    else if (my1.checked){
     myP.textContent=`Your Rate is 1. Sorry for inconvenience. Let us know your feedback!?`;
    }
    else{
        myP.textContent=`I hope you like it. Don't forget to give your feedback`;
    }
}

const myPan=document.getElementById("myPan");
const myPass=document.getElementById("myPass");
const myAdhaar=document.getElementById("myAdhaar");
const myButton1=document.getElementById("myButton1");
const myP1=document.getElementById("myP1");
const myText=document.getElementById("myText");
const myB0=document.getElementById("myB0");
const Pan=document.getElementById("myPara0");
const Pass=document.getElementById("myPara0");
const Adhaar=document.getElementById("myPara0");
let user;
myB0.style.display="none";
myText.style.display="none";
myButton1.onclick=function(){
if(myPan.checked){
 myP1.textContent=`Enter your Pancard Number:`
myB0.style.display="block";
myText.style.display="block";
 myB0.onclick=function(){
    user=myText.value;
    Pan.textContent=`Pancard Number= ${user}`;
  }
}
else if(myPass.checked){
    myP1.textContent=`Enter your Passport id:`
    myB0.style.display="block";
    myText.style.display="block";
    myB0.onclick=function(){
        user=myText.value; 
        Pass.textContent=`Passport id= ${user}`;
      }
}
else if(myAdhaar.checked){
    myP1.textContent=`Enter your Adhaar Number:`
    myB0.style.display="block";
    myText.style.display="block";
    myB0.onclick=function(){
        user=myText.value; 
        Adhaar.textContent=`Adhaar Number= ${user}`;
      } 
}
else{
    myP1.textContent=`Your identification?`;
}
}

const myPaytm=document.getElementById("myPan");
const myGP=document.getElementById("myGP");
const myCC=document.getElementById("myCC");
const myCash=document.getElementById("myCash");
const myButton2=document.getElementById("myButton2");
const myP2=document.getElementById("myP2");
const myT=document.getElementById("myT");
const myB=document.getElementById("myB");
const myPara=document.getElementById("myPara");
let userinput;
myB.style.display="none";
myT.style.display="none";
myButton2.onclick=function(){
    if(myPaytm.checked){
        myP2.textContent=`Enter your id:`
        myB.style.display="block";
        myT.style.display="block";
        myB.onclick=function(){
            userinput=myT.value;
            myPara.textContent=`Id= ${userinput}`;
        }
    }
    else if(myGP.checked){
           myP2.textContent=`Enter your id:`
           myB.style.display="block";
           myT.style.display="block";
           myB.onclick=function(){
           userinput=myT.value;
           myPara.textContent=`Id= ${userinput}`;
           }
    }
    else if(myCC.checked){
           myP2.textContent=`Enter your id:`
           myB.style.display="block";
           myT.style.display="block";
           myB.onclick=function(){
           userinput=myT.value;
           myPara.textContent=`Id= ${userinput}`;
           }
    }
    else if(myCash.checked){
        myP2.textContent=`Cash on Delivery`
        myB.style.display="none";
        myT.style.display="none";
        myPara.style.display="none";
    }
    else{
           myP1.textContent=`How would you like to pay?`;
    }
}