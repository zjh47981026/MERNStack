//project Two parts - FullStack - Service oriented Architecture

//part1 - <Backend> -> node - server (express, nodemon, mongodb by mongoose, 
//cors => are the packages or modules)
//part2 - <Frontend> -> reactapp (webpack, html5, bootstrap for css, react, redux, react-redux,
//react-router-dom, axios ...etc)

//Monolithic Arch - java(jsp), .net(aspx) (front end + backend)

//--> we now follow and be using in MERNStack
//Service Oriented Architecture - Front(html, js, css (react, angular)) 
//and Backend (rest apis (spring, mvc, node express))
//loosely coupled 

//fs, os, http, etc -- built in modules of node framework(90000+, cookies)
//npmjs.com - to host packages/modules built in node


//webserver
//1. To host service - webserver
//2. be able to expose http methods (get, post, put, delete ...)
//3. be able to integrate data types 
//4. should be able to handle caching -- cookie - parser
//5. be able to handle various authentications - oauth
//6. be able to handle file types - JSON.parse
//7. authorization/ cross origin - cors 

//express - one common package to do all the job a webserver should do using node packages
//not part of node framework, is part of npm
//requirements changes for webserver

//we can use nodejs cli - npm or yarn, to download and install these packages from npmjs.com
//npm -v

//we need to keep or build a file/meta-data which has information about packages installed
//we need to initialize the npm in our repository

//step 1 - go to folder/directory 
//step 2 - npm init (to initialize the package with npmjs.com)
//step 3 - add information to package.json 

//once package.json is created we can use npm to install external packages

//install - npm - i <PACKAGE NAME>
//install - npm uninstall <PACKAGE NAME>

//keeping for development environment only
// install - npm -i <PACKAGE NAME> -D
