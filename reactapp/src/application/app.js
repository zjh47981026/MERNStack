import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent"
import MyComponent from "./CommonComponent/MyComponent";
//component named export
export default class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerValue: "Default Header"
        }
        //dynamic object
        
        this.number = 0;
    }

    changeText = (event) => {

        console.log(event);
        //this.state.headerValue = "New Title" will not work as render will not be invoked
        //api to update the virtual dom by calling react rerender
        //batch process to update multiple states in concurrent using callback
        //1. first and recommended way
        this.setState({
            headerValue: "New Title MERNStack -" + this.number
        })
        this.number++;
        //2. force update: not recommended as it skips lifecycle methods like-should component update
        /*
            this.state.headerValue = "New Title MernStack " + this.number
            this.forceUpdate() // forcefully invoke render, should be avoided.
        */
       event.preventDefault(); //to stop the default behavior of event bubbling
    }

    render() {
        let name = "Jiahao"
        console.log("Creating virtual dom");
        //JSX - code, html + JS creating ta virtual dom
        return (
            //when data is changed, a new Virtual DOM is created
            //React will compare the old Virtual DOM and new Vitual DOM
            //to rerender the page
            <>
                <Header/>
                <h3>{this.state.headerValue}</h3>
                <button onClick={this.changeText}>Change Text</button>
                <h4>Hello! {name}</h4>
                <MyComponent/>
            </>
        )
    }
}