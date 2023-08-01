//

console.log("Execution Starts")

setTimeout(function name (){
    console.log("First Call back")
    setTimeout(function name (){
        console.log("Inner Call back")   
    }, 0) //0 sec
}, 1000) //1 sec


setTimeout(function name (){
    console.log("Second Call back")
    
}, 2000)  //2 sec


setTimeout(function name (){
    console.log("Third Call back")
    
}, 3000) //3 sec
 
console.log("Execution Ends")