
//for in loop - iterates over the property value, basically meant
//of json objects with key - value
//for in loop
let person = {fname: "John", lname: "Doe", age: 25, address:{}}
for (const key in person) {
    //if (Object.hasOwnProperty.call(object, key)) {
    console.log(key);
    const element = person[key];
    console.log(element)
        
   // }
}

console.log("other example")

let arr = [3, 5, 7]; //{0:3, 1:5, 2:7, newKey : "Dillon"}
arr.newKey = "Dillon";

for (const key in arr) {
    console.log(key);
    const element = arr[key];
    console.log(element);
 
}


//for of loop: Mainly for arrays, iterates over the property names, 
//more recomended for array of numbers or strings
console.log("For of loop");
let cars = ["BMW", "Volvo", "Mini"];

//cars.newCar = "Toyota";
cars[3] = "Toyota"
console.log(cars);
for (const car of cars) {
    console.log(" " + car);
}

