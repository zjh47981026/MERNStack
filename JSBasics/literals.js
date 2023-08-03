//Global and Local - variables/scope

globalThis.connectionString = "sngergisticit.com/api/getpractionerdata"


//object literal
var AccountUser = {
    Name : "Jeffrey",
    Age : 22,
    AccountBalance : "$50000"
}

console.log(AccountUser.AccountBalance)
console.log(AccountUser.Name)

//update value
AccountUser.Name = "Jon"

console.log(AccountUser.Name)

var Vehicle = {
    Type : 5,
    AitBags : 4
}

module.exports = {AccountUser, Vehicle}