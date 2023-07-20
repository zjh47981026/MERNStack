// Operators like - &&, ||, !, =, ==, ===, <, >, >=, <=, ++
// ternary operator
var age = "18"
var isValidID = "Voter ID"

if (isValidID && age == 18) { // == only compares data not type
    //=== compares data as well as type
    console.log("Is Valid Voter")
} else {
    console.log("Is Not a Valid Voter")
}

//using ternary 
// condition ? when true : when false
isValidID && age === 18 ? console.log("Is Valid Voter") : console.log("Is Not a Valid Voter")

