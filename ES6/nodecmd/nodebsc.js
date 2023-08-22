//we have 99000+ package in node js which we use for various tasks 
//console.log("This is going to log information we want!!")

const { log } = require("console");

log("This is through module import!!!")
//log(_dirname)  complete path with directory 
//log(_filename) complete path with filename

const os = require("os")
const path = require("path") //will be helpful to rectify the correct path to file and directory
const util = require("util")
const v8 = require("v8") //gives access to v8 engine of node 

let userInputFromConsole = "";

//event emitter - on is custom event 
//data - insert data
//callback with data inserted 
//node js process module
/*
process.stdin.on('data', data => {
    userInputFromConsole = data;
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    process.exit();
})  */

/*
process.stdin.on('exit', data => {
    log("We are exiting!")
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
}) */


const cpucount = os.cpus().length
log("CPU Count ", cpucount)

console.log(os.userInfo());
console.log(os.hostname());
console.log(os.release());
console.log(`The file name is ${path.basename(__filename)}`);
console.log(`The process cpu usage ${JSON.stringify(process.cpuUsage())}`);
console.log(`The process id ${process.pid}`);
console.log(`The process id ${process.versions.node}`);

log(v8.getHeapSnapshot())
log(v8.getHeapStatistics())

//utility module
util.log(path.basename(__filename));
util.log(path.basename(__dirname));


process.nextTick(() => {log("Next Tick Called!!")})

let intervalCounter = 1;

let myInterval = setInterval(() => {
    //console.log("Test me")
    clearInterval(myInterval) //clearing the interval loop

    intervalCounter++
    log(`incremented value ${intervalCounter}`)
}, 500);