//STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1"); //eg1

const newlist = document.createElement("li");  //eg2


//STEP 2 ADD ATRIBUTES/PROPERTIES

newH1.textContent = "I love my family";
newH1.id="myH1";
newH1.style.color = "grey";
newH1.style.textAlign = "center";  //eg1

newlist.textContent = "coconut";   //eg2
newlist.id = "coconut";
newlist.style.fontWeight = "bold";
newlist.style.backgroundColor = "lightgreen";


//STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1); = for printing it at last 
// document.body.prepend(newH1); = for printing it at beginging
//document.getElementById("box1").append(newH1); //for printing it in box1
//document.getElementById("box2").append(newH1); //for printing it in box2 at the end
//document.getElementById("box2").prepend(newH1); //for printing it in box2 in the begining   //eg1

//document.body.append(newlist);
//document.body.prepend(newlist);
//document.getElementById("fruits").append(newlist);  //eg2


/*const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);  //insertBefore(newelement, currentelement) //will print i love my family before box2
*/   //eg1

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]); //will print i love my family after box2    //eg1

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newlist, banana);  //insertBefore(newelement, currentelement) //will print   //eg2


//REMOVE HTML ELEMENT

//document.body.removeChild(newH1); //removes the printed output   //eg1

//for id's the above body method does not work (line 27) so we use getElementById():-
//document.getElementById("box1").removeChild(newH1); //for removing lines 14 15 16 19      //eg1


