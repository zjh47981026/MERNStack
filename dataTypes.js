// Datatypes are storage type to store various type of data--int, char, string, bool, etc
//We have 6 datatypes in JavaScript
//String, Number, Boolean, Undefined, Null, Object
//in ES6 above we can have Symbol as data
var checkDataType = 1.256  // decimal
console.log("Data type is - " + typeof checkDataType)

checkDataType = 1256  
console.log("Data type is - " + typeof checkDataType)

checkDataType = "abcd"
console.log("Data type is - " + typeof checkDataType)

checkDataType = true
console.log("Data type is - " + typeof checkDataType)

checkDataType = undefined //it is a valid data type
console.log("Data type is - " + typeof checkDataType)

checkDataType = null  //it is a valid value but the type is object as null is
//nothing so default data type is assigned
console.log("Data type is - " + typeof checkDataType)


checkDataType = {}   // {} - JSON obejct or object   type: object 
console.log("Data type is - " + typeof checkDataType)

checkDataType = {
    name : "A",
    session : "B"
}
console.log("Data type is - " + typeof checkDataType);
console.log("Data is - ",  checkDataType)