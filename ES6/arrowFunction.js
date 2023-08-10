// arrow function or fat arrow function or lambda expression

// 1. an easy  and shorter way of defining functions, like lambda expressions
//2. Resolves the context of a function by copying the context of 
//the immediate parent

function Add(a, b) {
    return a + b;
}

console.log(Add(9, 1))

// let AddArrow = (a = 0, b = 0) => {return a + b}

let AddArrow = (a = 0, b = 0) => a + b

console.log(AddArrow(9, 1))

//resolving context, by copying immediate parent context

let User = {
    FirstName : "David",
    Session: "Arrow Function - ES6",
    //if changed to arrow function here, this becomes global context
    //and output of both functions will be undefined
    getInfo : function () {
        console.log(`
            ${this.FirstName}
            ${this.Session}
        `)

        setTimeout(() => {
            console.log(`
            ${this.FirstName}
            ${this.Session}
        `)
        })
      //  let _this = this // copying the context of getInfo to be used in setTimeout
        // context becomes setTimeout
        /* setTimeout(function (){
            console.log(`
            ${_this.FirstName}
            ${_this.Session}
        `)
        }, 2000) 
        */ 
    }
}

User.getInfo();