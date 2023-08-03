//JS is single threaded prog. langauge

//console.log("Execution Starts!!!")

function Foo(params) {
    throw new Error("This is callstack execution!!!");
}

function Bar(params) {
    Foo();
}

function Bazz(params) {
    Bar();
}

//Bazz();

//console.log("Execution Ends!!")

//Blowing up the stack
function BlowupStack(params) {
    BlowupStack()
}

//BlowupStack()  Maximum call stack size exceeded