//1. create a basic setup with npm cli, write the steps to do so, using express
//step1:  first step is to create the directory for the server
//step2: we need to use npm init to initialize the node.js project
//step3: we need to install the express library using command - npm i express
//step4: create main js file
//step5: load the express module
//step6: initialize the express top method 
//step7: define apis
const express = require("express");
const myApp = express();
//2. Create an API named getInfo with server.js as main file and configure using nodemon

myApp.get('/getInfo', (req, res) => {
    res.sendFile(__dirname+"/server.js");
})

//3. Explain the purpose of express elements - Application, Request, Response and Router
//application: this element is used to create an instance of express framework
//Request: request is an object that represents an incoming http request from the client
//Response: response is an objet that represents the server's response to the client
//Router: it is a feature that allows us to create modular, reusable sets of routes and middleware
//for the application

//4. What will happen if we don't have package.lock.json in our application
/*
The package-lock.json file is important for ensuring deterministic and consistent dependency installations,
especially in collaborative and production environments. 
Without this file, each developer may have different versions of dependencies
*/

//5. Create an api name getVaccine with get method, pass info like - vaccineName, price, doses

myApp.get('/getVaccine', function(req, res) {
    const vname = req.query['vaccineName'];
    const price = req.query['price'];
    const doses = req.query['doses'];

    res.json({
        "vaccineName" : vname,
        "price" : price,
        "doses" : doses
    });

    res.send(`vaccineName : ${vname}
                    price : ${price}
                    doses : ${doses}`);
})

//6. What is the purpose of RESTFul API and what specifications are must to make a service RESTFul
/*
    RESTful API is a design pattern and architectural style for creating web APIs that
    adhere to certain principles and constraints. It is usded for building web services that
    allow different software applications to communicate with each other on the internet

    specifications of RESTful API:
        1. it uses http protocol
        2. it has methods such as GET/POST/PATCH/DELETE
        3. it is stateless
*/

//7. Create an example of Application mounting using vaccination API's

const vaccineApp = express();

myApp.use('/vaccination', vaccineApp);

vaccineApp.get('/', (req, res) => {
    res.send("<h1>vaccineApp</h1>");
})


//8. Create an API to demonstrate route param usage like - getVaccineByID 
const router = require("router");
const vaccineRouter = require('router');
vaccineApp.use('/getVaccineByID', router);
