// variable scope - when aq variable is recognized or accessible (local vs global)

//having 2 variables in same scope throws error
                 /* let x=1;
                    let x=2; */ //it throw error//


//But having 2 variables in different scopes is possible
//local scope- any variable declare inside of a function as in f1 and f2 below
f1();
f2();
function f1(){
    let x=1;
    console.log(x);
}                  
function f2(){
    let x=2;
    console.log(x);
}  

//global scope- any variable declare outside of a function as in fun1 and fun2 below
/*          fun1();
            fun2();
            function fun1(){
            let x=1;
            console.log(y);  here x hase no idea what y is
            }                  
            function fun2(){
            let y=2;
            console.log(x);  here y hase no idea what x is
            }                         */  
//global code cannot be initialised or declared inside the funtions it has to be outside to work for all functions                       
let x=3;
function1();
function2();
function function1(){
    console.log(x);
}                  
function function2(){
    console.log(x);
}     

//if global scope is used outside but local scopes are also used inside then the global scope value will be replaced by the local scope's value
let y=3;
func1();
func2();
function func1(){
    let y=10;
    console.log(y);
}                  
function func2(){
    let y=11;
    console.log(y);
}     
