const express = require("express");

const app = express();

console.log("We are in server.js")

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/helloapi', function (req, res) {
    res.json({
        "Name" : "Jason",
        "Status" : 2000,
        "Session" : "MERNStack"
    })
})

console.log("We are listening at 9000")
app.listen(9000) // localhost:9000

//nodemon - node monitoring module, which listens to change and restarts api when needed
