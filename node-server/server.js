const express = require("express");

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
    console.log(req.rawHeaders[11]);
    let deviceType = req.rawHeaders[11]
    res.json({
        "Name" : "Jason",
        "Status" : 2000,
        "Session" : "MERNStack"
    })
})

console.log("We are listening at 9000")
app.listen(9000) // localhost:9000

//nodemon - node monitoring module, which listens to change and restarts api when needed
