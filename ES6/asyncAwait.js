//stack1 - 200mb (300 request/sec)
//-> if requests increases 600 request/sec
//(async)
//(await)  // whenever the thread is done, send it back to the main thread
//stack2(thread) - 100 mb (100 request/sec) 
//stack3(thread) - 100 mb (100 request/sec)
//stack4(thread) - 100 mb (100 request/sec)


function resolveAfter2Seconds() {
    return new Promise((resolve, rejct) => {
        setTimeout(() => {
            resolve({
                "statuscode" : 200,
                "statusmsg" : "resolved"
            });
        }, 2000);
    });
}


console.log("async Execution starts");

//execute on another thread 
async function asyncCall() {
    console.log("Before await");
    //wait the execution to complete
    await resolveAfter2Seconds()   //this is a blocking execution in a separate thread
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)})

    console.log("After await");

    await resolveAfter2Seconds()   //this is a blocking execution in a separate thread
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)})

    console.log("Afer await twice");
}

asyncCall()


console.log("async execution ends");

//create an example of account reporting system to generate report at 10 PM
//print user info like - name, address, account number after 3 seconds using async and await
//also check when it rejects 2 seconds 
//analyze how await works as blocking execution

//create one set of map using different types of keys and at least show the 4 functions of (get, set, clear...)
//create a list using set and show the usage of 5 functions (.add, .clear);

//create an example of arithmetic operations (addition, subtraction, multiply, division) using
//generator function 