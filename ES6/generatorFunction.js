//A generator funciotn is a function that can be yielded as many
//times as possible upon single invocation
//Generator Function: Allows us to get multiple yields (or kind of returns) 
// for the indefinite number of times without creating and invocation of the function

function MyFunc(params) {console.log(params)}


console.log(MyFunc("Gustavo")) // output
console.log(MyFunc("Jiahao"))
console.log(MyFunc("Steven"))
console.log(MyFunc("Sai"))

//let arry = 20

//yield - not the end of execution but can return the value

function *PrintData(num) {
    //do any async operation to read the value
    let updateValue = 300;
    //here we can call other days stats
    yield num+updateValue;

    yield num-updateValue;

    yield num*updateValue;

    yield num/updateValue;

    return "something returned" //returned true  execution ends

    yield "Last Yield";
}

let pointerToYield = PrintData(900);

console.log(pointerToYield)
console.log(pointerToYield.next());
console.log(pointerToYield.next());
console.log(pointerToYield.next());
console.log(pointerToYield.next());
console.log(pointerToYield.next());

console.log(pointerToYield.next()); //undefined
