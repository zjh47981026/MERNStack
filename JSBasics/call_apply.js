
//name = "Arit"
//age = 23   //global scope
var user = {name:"Thahn Le", age : 21 , session:"JavaScript"}
var user2 = {name : "Liam Le", age : 20, session: "OOJS"}
//properties are inside the object
function GetDetails(concept, session1, session2, session3, session4, session5) {
    console.log(`Call Extension - ${concept}`)

    console.log(`${session1} ${session2} ${session3} ${session4} 
    ${session5}`) // not a good way

    console.log(`The User Details are as below
            Name is - ${this.name} 
            Age is - ${this.age}
            Session is - ${this.session}`)    // undefined
}

GetDetails("params") //this takes global scope

//first parameter is used to set the scope of function,
//next we can pass parameters of the function
GetDetails.call(user, "Basic JS Concepts")
GetDetails.call(user2, "Advanced JS Concepts")

//apply is used to set scope and pass parameters in the form of array
GetDetails.apply(user, ["JS", "ES6", "NODEJS", "Express", "React", "Redux"])

//to set some delay in execution we use- setTimeout function from JS

setTimeout(function(params) {
    console.log("Printed after two seconds!!!")
    console.log(this)
}, 2000); //the millisesonds after which we want to execute


// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object