//var functional scoped, hoisted
//let and const - lexical scope {}
//1. var is funciontal scoped, let and const are block scoped and do not support 
//hoisting
{
    var my_var = "new value"
    let my_let = "new value"
    const my_const = "new value const"
}   

//console.log(my_var)
//console.log(my_let)
//console.log(my_const)

//2. initialization and re-declaration
//let and const can not be redeclared
//let can be re-assigned
//const can not be re-assigned
/*
var my_var = "new value"  //initialized 
let my_let = "new value"
const my_const = "new value const"  */

//3. const needs to be assigned a value along with declaration
var my_var;
let my_let;
const my_const = "new value const"; // assignment of value is mandatory

my_var = "new value"
my_let = "new value let"

//constants are immutable but their's references can be changed
const user = {
    name : "Jeffrey",
    session: "ES6"
}

//user = {name : "Nhi", session: "Ecmascript 2015"}  not allowed

user.name = "Thanh"
console.log(user)

//Problems with functional scope variable
/*
for (var index = 1; index < 5; index++) {
    setTimeout(() => {
        console.log("Increment value " + index)  //access index when it executes
    }, 1000);
}

console.log("Last Incremented Value " + index)
  
*/

for (let index = 1; index < 5; index++) {
    setTimeout(() => {
        console.log("Incremented value " + index)
    }, 1000);
}

//console.log("Last Incremented Value " + index)

//using IIFE

for (var index =1; index < 5; index++) {
    (function(params) {
        setTimeout(() => {
            console.log("Incremented value " + params)
        }, 1000);
    }) (index)
}
