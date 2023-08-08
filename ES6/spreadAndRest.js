//spread: is used to spread the elements of any object or array to
//be used one by one

let arr = [1, 2, 3, 4, 5, 6]

arr[1]
arr[2]
arr[3]

console.log(...arr);


 
//spread operator is used to combine two objects and preserve the 
//immutability of each object
let User = {name : "Jason", age : 25}
let Address = {home : "Somewhere in US", office : "Virtual"}

let Employee = {...User, ...Address}; //Object.assign // also makes merge immutable

User.session = "ES6"

console.log(User)
console.log(Employee)

function Sum (p1, p2, p3, p4, p5) {
    return p1 + p2 + p3 + p4 + p5
}
let arrNum = [25, 26, 2, 7, 8, 9]
console.log(Sum.apply(null, arrNum))

console.log(Sum(...arrNum)) // using spread to pass array values

//Rest - parameter, is just setting up ... to combine multiple values 
 
/*function SumRest(p1, p2, ...restParams) {
    console.log(restParams)
    return p1 + p2;
} */

//console.log(SumRest(...arrNum))

//using Rest with Reduce function to get addition of unlimited parameters 

function SumRest(...restParams) {
   let sum = 0;
   sum = restParams.reduce((prevVal, currVal, index, arr) => {
        console.log("prevVal " + prevVal)
        console.log("currVal " + currVal)
        console.log("index " + index)
        console.log("Array " + arr)
        console.log("Next Iteration ........")
        return prevVal + currVal
   }, 0)
   return sum;
}

console.log(SumRest(1, 2, 3))
console.log(SumRest(...arrNum))