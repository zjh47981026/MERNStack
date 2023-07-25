var User = {
    Name: "Arit",
    Age: 22,
    Session:"MERNStack",
    getUserDetails : function (params) {
        return {
            Name : this.Name,
            Session: this.Session,
            Address: this.Address
        }
    }
}

User.Address = "Somewhere on earch";

console.log(User.getUserDetails());

// Inheritance of JS Object
//1. Using new keyword -- not a right way to inherit but 
//a good way for extention and copy


var Engineer = new Object(User);
// all changes will be reflected in User class
Engineer.Speciality = "Mechanical Engineer";

console.log(Engineer.Session);

Engineer.getSpecialityAndAddress = function (params) {
    return {
        Speciality: this.Speciality,
        Address: this.Address
    }
}
console.log(Engineer.getSpecialityAndAddress());

//override 

Engineer.getUserDetails = function () {
    return {
        Speciality : this.Speciality,
        Address : this.Address,
        Name : this.Name
    }
}
console.log(Engineer.getUserDetails());
console.log(User.getUserDetails());  //both return the same value

//2. Object.Create({}) : correct way of inheriting and overridng

var Engineer = Object.create(User);
Engineer.Name = "Dillon";
Engineer.Speciality = "Mechanical Engineer";


console.log(Engineer.Session);

Engineer.getSpecialityAndAddress = function (params) {
    return {
        Speciality: this.Speciality,  // - this is the scope, context , is dynamic object
        Address: this.Address    // will be from user class, prototype is the only way to implement inheritance
    }
}
console.log(Engineer.getSpecialityAndAddress());

//override 

Engineer.getUserDetails = function () {
    return {
        Speciality : this.Speciality,
        Address : this.Address,
        Name : this.Name
    }
}
console.log(Engineer.getUserDetails());
console.log(User.getUserDetails());  //both return the same value

console.log(Engineer.__proto__)  //user 
console.log(User.__proto__) //plain object

//3. Prototype of empty object

var emptyObj = {}


//4. object without prototype
var emptyObj = Object.create(null); // null prototype

// 5. Object.Assign

var obj1 = {name : "Anant", add1 : "Lake City 1"}

var obj2 = {name : "Anant", add2 : "Lake City 2"}

var obj3 = {name : "Anant", add3 : "Lake City 3"}

var actualObj = {obj1, obj2, obj3}

obj1.session = "Object Session" //copying of data //mutability
console.log(actualObj)

var actualObj2 = {};
Object.assign(actualObj2, obj1, obj2, obj3) //object creation

//this preserves the immutatbility
obj1.session2 = "Session 2 on object"

console.log(actualObj2);