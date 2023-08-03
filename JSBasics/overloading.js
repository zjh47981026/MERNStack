//polymorphism
//1. overloading -- no concept of overloading but overriding with last definition
//2. overriding

Print(1, 2, 3) //three params

function Print(a) {
    console.log("one param: " + a)
}

Print(1) // one params

function Print(a, b) {
    console.log("two Params: " + a + ", " + b)
}

Print() // error


function Print(a, b, c) {
    console.log("Three Params: " + a + ", " + b + ", " + c)
}
Print(1, 2) // two params