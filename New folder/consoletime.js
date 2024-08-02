//console.time() - Starts a timer you can use to track how long an operation takes 
//               - Gives each timer a unique name

//start
console.time("Response Time");
 
alert("Click the OK button!");

setTimeout(() => {console.log("Hello!")}, 3000);

//end
console.timeEnd("Response Time");