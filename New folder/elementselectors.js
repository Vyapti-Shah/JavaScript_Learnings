//element selectors - Methods used to target and manipulate HTML elements. 
//                  - They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()         =   // ELEMENT OR NULL
// 2. document.getElementsByClassName() =   // HTML COLLECTION  //HTML collection do not have a built in forEach method so array is used
// 3. document.getElementsByTagName()   =   // HTML COLLECTION
// 4. document.querySelector()          =   // ELEMENT OR NULL
// 5. document.querySelectorAll()       =   // NODELIST


//eg1= document.getElementById() 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "hsl(200, 70%, 73%)";
myHeading.style.textAlign = "center";

console.log(myHeading);


//eg2= document.getElementsByClassName()
const membs = document.getElementsByClassName("members");

/* method1
  membs[0].style.backgroundColor = "pink";
  membs[1].style.backgroundColor = "plum";
  membs[2].style.backgroundColor = "grey";
*/
console.log(membs);

/* method2
    for(let memb of membs){
        memb.style.backgroundColor = "pink";
    }
*/

/* method3 */
Array.from(membs).forEach(memb => {memb.style.backgroundColor = "pink"});


//eg3= document.getElementsByTagName()
const h4Elements = document.getElementsByTagName("h4");
const  liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
  h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
  liElement.style.backgroundColor = "lightgreen"
}

console.log(h4Elements);


//eg4= document.querySelector()  
const element = document.querySelector(".members");  //members = classname
/* element.style.backgroundColor = "blue" */ //it will select the 1st member only (first element) and in case of no valid class it will be null(null)
console.log(element);


//eg5= document.querySelectorAll()
const m = document.querySelectorAll(".members"); //members = classname
console.log(m);