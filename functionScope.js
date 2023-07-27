
var someVal = 2500; // global scope

function ScopedFunction(params) {
    console.log(innerVal) // 1. undefined
    var innerVal = 5000   //scope within the function
    
    console.log(someVal) // 2.

    var someVal = 7500

    innerVal =  10000
    console.log(innerVal) //3. 
}

console.log(someVal)
//console.log(innerVal) --error

ScopedFunction(); //global scope and global execution context
//differentiate variables with the same name within the function 
//and outside of the function

//var BaseClass = new BaseClass()
//BaseClass.ScopedFunction()

address = "Somewhere on Earth"

//scope is dynamic, execution context is changing
var Engineer = {
    name : "Van Duc",
    age : 21,
    getDetails : function () {
        return {
            Name : this.name,
            Age : this.age,
            address : this.address   
        }
    }
}

console.log(Engineer.getDetails());  // address undefined, since the
//scope of getDetails function is within Engineer, 
// to print address, remove this