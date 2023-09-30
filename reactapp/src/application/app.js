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