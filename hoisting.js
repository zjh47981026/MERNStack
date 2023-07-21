//var - gets hoisted with default value: undefined
//functions get hoisted with their definition

console.log(print)
//console.log(print(20, 21)) // TypeError:  print is not a function
console.log(var1) //undefined
console.log(name) //function with definition
console.log(name())

var var1 = 1
var var2 = 2

function name(params) {
    console.log("This is hoisted function")
}

var print = function(a,  b) {
    return a + b
}



var var3 = 3


var var4 = 4

var var5 = 5