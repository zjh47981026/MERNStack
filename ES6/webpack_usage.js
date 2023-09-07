//webpack is used for below purposes in react application -

//webpack as webserver-
//1. to host the application at http://localhost:9090
//2. expose the end point at 9090 port 

//webpack as faster loading of react application on browser (minification)
//1. helps to remove extra spaces 
//2. helps to remove commented code 
//3. redundant logic/ loigc optimization


let getValueFromGoogleMap = true;

if (getValueFromGoogleMap) {
    console.log("Load google api's");
} else {
    console.log("Check local servers");
}


//after webpack minification or optimization
let mp_vl1 = true;mp_vl1 ? console.log("Load google api's") : console.log("Check local servers");

//c. resolves issues with file references or file dependencies
//1.Home.js, About.js, Cart.js -> header.js, footer.js, Cart.js => User.js

//d. bundling and hot reloading (nodemon)
//After dependency resolution - bundle all files - .js .png  .jpg, etc.. ->
// => bundle.js (optimized and minified file)

//e. hot reloading (nodemon)
//while in development if we have change in some files so it caches the previous
//values but reloads the new updated values on browser


//f. uses babel configurations to do transpilation
//async/ await => ES8 : firefox doesn't 

//babel will read ES6/ES8 code and convert it in ES5 equivalent or 
//add wrappers for browser

//JSX - javascript like xml code -> html + javascript 