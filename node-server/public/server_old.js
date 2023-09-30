
const express = require("express"); //importing the express module references
 
//We can use multiple express applications by mounting them on main app
const adminApp = express();
const adminRoute = require("./router/admin_route");
//instantiating express top method which returns application
const app = express(); 

const hostApp = express();
const hostRoute = require("./router/host_router");


//4 Major pillars of express
//1. Application
//2. Request
//3. Response
//4. Router

//setting up the middleware static to handle all the static files we need to
//serve to the client 
//serve static files like images css using static middleware
app.use("/static", express.static('public'));



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

//can return html
app.get('/html', function(req, res) {
    res.send('<h1>Welcome to MERNStack session <h1>');
})



app.get('/file', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/alert.js', function(req, res) {
    res.sendFile(__dirname+"/public/alert.js");
})


app.get('/myapi', function(req, res) {
    let firstName = req.query['firstname'];
    let lastName = req.query['lastname'];
    let addr = req.query['address'];
    res.json({
        "firstname" : firstName,
        "lastname" : lastName,
        "address" : addr
    });
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

//redirect all requests with /admin path to adminApp
app.use('/admin', adminApp);

app.use('/host', hostApp);

hostApp.use('/', hostRoute);

//mounted admin app
/*
adminApp.get('/hello', (req, res) => {
    res.send("<h1>Hello From Admin<h1>")
}) */

//redirects any requests to adminRouter
adminApp.use('/', adminRoute)

//wild card operator/default api 
app.get('*', (req, res) => {
    res.send("<h2>API you'are looking for is not ready yet!!!");
})



console.log("We are listening at 9000")

//open the port for api to start listening the requests / web requests
app.listen(9000) // localhost:9000



//nodemon - node monitoring module, which listens to change and restarts api when needed
