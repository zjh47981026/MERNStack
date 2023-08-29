const express = require("express"); //importing the express module references
 
//4 Major pillars of express
//1. Application
//2. Request
//3. Response
//4. Router

//instantiating express top method which returns application
const app = express(); 

console.log("We are in server.js")

app.get('/', function(req, res) {
    res.send('Hello World')
})

//query params
app.get('/queryparam', function(req, res) {
    let query = req.query['name'];
    res.send(`This is the name sent in query ${query}`);
})   

//route params:/name - of the param

app.get('/routeprm/:name/info', function(req, res) {
    let routeParam = req.params["name"];
    res.send(`This is the name sent to Route ${routeParam}`);
})  

app.get('/helloapi', function (req, res) {
   // console.log(req);
    console.log(req.rawHeaders[1]);
 //   let deviceType = req.rawHeaders[11]
    res.json({
        "Name" : "Jason",
        "Status" : 2000,
        "Session" : "MERNStack"
    })
})

console.log("We are listening at 9000")

//open the port for api to start listening the requests / web requests
app.listen(9000) // localhost:9000



//nodemon - node monitoring module, which listens to change and restarts api when needed
