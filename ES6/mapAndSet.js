//                   0     1       2          3
//let arrNames = ['Arit','Nhi', 'Anant', 'Jefferey'];

//[{key : "value"}]

let myMap = new Map();

//let user = [{Name : "Dillon"}, {Address: {Address1}}, {}]

let keyString = 'a string', keyObj = {}, keyFunc = function(){}, keyNum = 2000;

myMap.set(keyString, "This is a string key")
myMap.set(keyObj, "This is a object key")
myMap.set(keyFunc, "This is a function key")
myMap.set(keyNum, "This is a number key")

console.log(myMap.get('a string'));
console.log(myMap.get(keyNum));
console.log(myMap);
console.log(myMap.entries());
console.log(myMap.get({}));  //undefined
console.log(myMap.get(keyObj))
//console.log(myMap.clear());
console.log(myMap.delete(keyObj));
console.log(myMap.has(keyString));
console.log(myMap.entries());


//when we need a iterable/collection with unique values
//Set: this maintains a set of unique collection with additional properties and method like map

let StudentSet = new Set(["Liam Le", "Jason", "Anant", "David", "Nhi"]);

console.log(StudentSet.values());
console.log(StudentSet.add("Nhi"));
console.log(StudentSet.values());