//OOP's fundamentals-
//1. Inheritance - constructor functin in es5 and class in ES6, prototype is the only way
//2. encapsulation - data hiding can be done through closures, with the help of access modifiers
//3. Polymorphism - Overridng(it supports in function as well in classes) and overloading(does not support overloading)
//4. abstraction - not required in js (we can crete functions with same name, not possible)

function Parent (name, age) {
    var _name = name;
    var _age = age;
    var AccountBalance = "$5000" // can be shared 
    var accPwd = "443233232" //this would be private 
    var child = function GetAccountInfo(acctNo, pwd) {
        //write the function properties that needs to be used by outer world
        return {
            Name : _name,
            Age : _age,
            AccountBalance, //short hand - AccountBalance : AccountBalance,
            acctNo : acctNo
        }
    }
    return child;
}

var acct = Parent("Lemar", 21)

console.log(acct(12345, "pass"))