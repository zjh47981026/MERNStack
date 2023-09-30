//Assessment #4
//1. Create a class component and show all the life cycle hooks
import  React, { Component } from "react";
export default class MyComponent3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "default value"
        }
    }

    componentDidMount() {
        console.log("componentDidMount!!!!");
        
    }

    getSnapshotBeforeUpdate(prevState, prevProps) {
        console.log("getSnapShotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    } 

    componentDidUpdate(prevState, prevProps) {
        console.log("ComponentDidUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should componet update")
        console.log(nextProps, nextState);
        if (nextState.value === this.state.value) {
            return false;
        } else {
            return true;
        }
    }

    textChange = (evt) => {
        let target = evt.target;
        let val = target.value;
        console.log(value);
        this.setState({
            value : val
        })
        evt.preventDefault();
    }


    componentWillUnmount() {
        console.log("Component Will Unmount !!!");
    }

    render () {
        return (<>
            <h1>MyComponent3</h1>
            <label>Value: </label>
            <input type = "text" className="value" onChange={this.textChange}></input>
        </>)
    }
}



//2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
    //please refer to the above class component

//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
/*
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from  "react-redux";
import { saveProductToDb } from "../../../state/Product/ProductAction";

let Product = (props) => {
    let productDetail = useSelector((store) => store.productReducer.Product)
    let [productName, setProductName] = useState(productDetail.name);
    let [productPrice, setProductPrice] = useState(productDetail.price);
    let [productDesc, setProductDesc] = useState(productDetail.desc);
    let [productRating, setProductRating] = useState(productDetail.rating);

    let dispatchToDb = useDispatch();

onTextChange = (evt) => {
    let target = evt.target;
    let classList = target.classList;
    let val = target.value;

    if (classList.contains("name")) {
        setProductName(val);
    } else if (classList.contains("price")) {
        setProductPrice(val);
    } else if (classList.contains("desc")) {
        setProductDesc(val);
    } else if (classList.contains("rating")) {
        setProductRating(val);
    }

    evt.preventDefault();
}

let readFormData = (evt) => {
      let product = {
        name : productName,
        price : productPrice,
        desc : productDesc,
        rating : productRating
      }

      dispatchToDb(saveProductToDb(product));
        
        evt.preventDefault();
    }

    return (
        <>
            <h1>Product Component</h1>
            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
                <label>
                    <b>Name :</b>
                    <input type = "text" className={"form-control col-md-12 name"} value={productName}
                      onChange={onTextChange}  placeholder ="Please enter product name" maxLength={20} required/>
                 </label>  
                 <br/>
                 <label>
                     <b>Price : </b>
                     <input type = "text" className={"form-control col-md-12 price"} value={productPrice}
                      onChange={onTextChange}  placeholder ="Please enter product price" maxLength={20} required/>
                </label>
                <br/>
                <label>
                     <b>Desc :</b>
                     <input type = "text" className={"form-control col-md-12 desc"} value={productDesc}
                      onChange={onTextChange}  placeholder ="Please enter product desc" maxLength={20} required/>
                </label>
                <br/>
                <label>
                      <b>Rating :</b>
                      <input type = "text" className={"form-control col-md-12 rating"} value={productRating}
                      onChange={onTextChange}  placeholder ="Please enter product rating" maxLength={20} required/>  
                </label>  
            </form>
        </>)  
}

export default Product

*/

// 	 Create a form to allow user to submit Product Details - name, price, desc, rating
//  please refer to the above Product component 

// 	 Create an action method to add the detail to database using a server api
/*
import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddProductToStore = (newProduct) => {
    return {
        type : ActionTypes.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDb = (product)=>{
    // thunk - makes it behave synchronously
    return (dispatch)=>{
       // here we go with ajax call : to save data to the server or fetch it from the server
       // using fetch method of react
       console.log("called by dispatch and synced by thunk");
       //dispatch(loading(true)); //Jquery - ajax
       axios.post("http://localhost:9000/product/api/saveProduct",
               product
           )
           .then((savedProduct)=>{
               let productSaved = savedProduct.data;
               console.log(productSaved)

               dispatch(AddProductToStore(productSaved))
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}
*/

// 	 Server Side - Create product router and api to save the product using productdatamodel
/* productDataModel.js
let mongooseObj = require("mongoose");

schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let productSchema = new schemaObj({
    name : {type : String, required : true},
    price : {type : Number, required : true},
    desc : {type : String, required : true},
    rating : Number
});

let ProductModel = mongooseObj.model("product", productSchema);

module.exports = ProductModel;
*/

/* product_route.js
let express = require("express");
let productRoute = express.Router();

const productDataModel = require("../data-model/productDataModel");

productRoute.post("/api/saveProduct", (req, res) => {
    let product = req.body;
    console.log(product);

    productDataModel.findOne({name : req.body.name}).then((existingProduct) => {
        if (existingProduct) {
            res.status(200).send(existingProduct);
        } else {
            let newProduct = new productDataModel(product);
            newProduct.save().then((newProduct) => {
                console.log("product saved!", newProduct);
                res.send(newProduct);
            }).catch((err1) => {
                console.log("Failed to save Product", err1);
                res.status(500).send("error while saving product");
            })
        }
    }).catch((err) => {
        console.log(err);
        res.send("Product existed!");
    })
})

*/


//4. Create a route and navigation to show product component
/* app.js
import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

import Header from "./CommonComponent/HeaderComponent";
//import ChildComponent from "./CommonComponent/ChildComponent";
import Home from "./CommonComponent/HomeComponent";
import Footer from "./CommonComponent/FooterComponent";
import About from "./CommonComponent/AboutComponent";
import NotFound from "./CommonComponent/NotFound";
import MyComponent from "./CommonComponent/MyComponent";
import MyComponent2 from "./CommonComponent/MyComponent2";
import City from "./CommonComponent/City";
import Lifecycle from "./CommonComponent/Lifecycle";
//import User from "./AppComponents/User/UserComponent";
import User from "./AppComponents/User/UserContainer";
import UserHook from "./AppComponents/User/UserHook";
import Product from "./AppComponents/Product/ProductHook";

export default class Application extends Component {

        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={"User"} userName={"Boubacar"} />}/>
                            <Route path="/home" element={<Home user={"User"} userName={"Boubacar"} component = {<MyComponent />}/>}/>
                            <Route path="/about" element={<About />} />
                            <Route path="/user" element={<User />} />
                            <Route path="/about/:id" element={<About />} />
                            <Route path="/name" element={<MyComponent2 />}/>
                            <Route path="/city/:zipcode" element ={<City />}/>
                            <Route path = "/city" element={<City />}/>
                            <Route path = "/hook" element={<UserHook />}/>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/lifecycle" element={<Lifecycle value = {10}/>} />
                            <Route path="/product" element={<Product />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}
*/
/*  server.js
const express = require('express') // importing the express module reference
const app = express(); // instantiating express top method which returns application
const cors = require('cors');

//we can use multiple express application by mounting them on main app
const userRoute = require("./router/user_route");
const userApp = express();

const productRoute = require("./router/product_route");
const productApp = express();

console.log('We are in server.js')

app.use(cors()); //middleware to expose api for other users as public
//setting up the middleware static to handle all the static files we need to serve to client
//serve static files like images css using static middleware
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit: '2mb', extended:false}));

//redirects all request with/admin path to userApp
app.use('/user', userRoute);

//mounted admin app
userApp.use('/', userRoute);

app.use('/product', productRoute);
productApp.use('/', productRoute);

//wild card operator / default api
app.get('*', (req, res) => {
    res.send("<h2> API you're looking for is not ready yet!!!</h2>");
})

console.log("We are listening port 9000");

//open the port for api to start listening the request/web-request
app.listen(9000); //localhost:9000
*/
//5. Explain various hooks in functional component (at least 5)
/*
  1. useState: this hook lets you add states to functional components
  2. useEffect: it allows us to perform side-effects in functional component,
   it can mimic the componnetDidMount, componnetDidUpdate and componentWillUnmount lifecycle
   methods.
   3. useRef: returns a mutable ref object. Useful for accessing DOM elements directly and for 
   keeping a mutable reference to a value without triggering re-redner
   4. useSelector: allows us to extract data from the Redux store state, using a selector function
   5. useDispatch : allows us to dispatch actions to Redux store 
*/