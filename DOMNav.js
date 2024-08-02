//DOM Navigation - The process of navigating through the structure of an HTML document using JavaScript
//.firstElementChild
//.secondElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//eg1 = .firstElementChild
const element = document.getElementById("deserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";


//eg2 = .secondElementChild
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements => {
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "lightgreen";
});


//eg3 = .nextElementSibling
const ele = document.getElementById("apple"); //if here in place of apple fruits was there then the vegeies items would be coloured as that is the next element
const nextSibling = ele.nextElementSibling;
nextSibling.style.backgroundColor = "pink";


//eg4 = .previousElementSibling
const el = document.getElementById("capsicum"); //if here in place of capsicum vegeis was there then the fruits items would be coloured as that is the previous element
const previousSibling = el.previousElementSibling;
previousSibling.style.backgroundColor = "lightblue";


//eg5 = .parentElement
const e = document.getElementById("beti"); //li will give all elements of ul be coloured
const parent = e.parentElement;
parent.style.backgroundColor = "plum";


//eg6 = .children   //It is a HTML collection   //HTML collection do not have a built in forEach method so array is used
const elem = document.getElementById("cars"); //ul will give all the elements of li be coloured
const child = elem.children;
Array.from(child).forEach(ch => {
    ch.style.backgroundColor = "rgb(124, 124, 193)";
});

 