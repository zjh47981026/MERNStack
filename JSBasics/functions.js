//1. named function
function printSum (a, b) {
    return a + b
}
console.log(printSum(5, 9))


//2. Function Expression
var DoSum = function Func(a, b) {
    return a + b
}
console.log(DoSum(5, 9));

//3. Immediately Invocable function Expression 
(function IIFE(params) {
    console.log(params)
})("Van Duc")


//IIFE("Jeffrey") - as soon as execution is DONE IIFE will not be accessible again


//4. Constructor function - used as class object
function Vehicle(numofSeats, numOfAirbags) {
    this.Seats = numofSeats
    this.Airbags = numOfAirbags
    this.GetDetails = function () {
        return {
            "Seats" : this.Seats,
            "Airbags" : this.Airbags
        }
    }
}

var vehObj = new Vehicle(6, 5)

console.log(vehObj.GetDetails())

//5. Nested Function
function Login(params) {
    function AuthenticateUser(params) {
        function AuthorizeUser(params) {
            function CreateSession(params) {
                function NavigateUser(params) {

                }
            }
        }
    }
}
