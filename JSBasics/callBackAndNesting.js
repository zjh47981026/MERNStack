var sessionName = "MERNStack Session"

function printSession(sessionNumber, studentName) {
    console.log(`Printing callback info - 
    ${sessionNumber} ${studentName}  ${sessionName}`) //template literals
} 

function GetDetails(callbackPrint, sessionNumber, studentName) {
    callbackPrint(sessionNumber, studentName);
}

GetDetails(printSession, 1, "David")
GetDetails(printSession, 2, "Jeffery")
GetDetails(printSession, 3, "Sai")

//nested function and javascript currying
var number1 = 20;

//closure
function A (a) {
    //console.log(d) - scope of functions decreases when we go up
    return function B (b) {

        return function C (c) {

            return function D (d) { //can access a, b, c
                return a + b + c + d + number1
            }
        }
    }
}

var _a = A(1)
var _b = _a(2)
var _c = _b(3)
var _d = _c(4)
console.log(_d)

//chain execution
var output = A(1)(2)(3)(4)

console.log(output)