import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent"
//component named export
export default class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerValue: "My First React App Page"
        }
        //dynamic object
    }

    changeText = () => {
        this.setState({
            headerValue: "New Title MERNStack"
        })
    }

    render() {
        let name = "Van Duc Phan"
        console.log("Creating virtual dom");
        //JSX - code, html + JS creating ta virtual dom
        return (
            //when data is changed, a new Virtual DOM is created
            //React will compare the old Virtual DOM and new Vitual DOM
            //to rerender the page
            <>
                <Header/>
                <h1>{this.state.headerValue}</h1>
                <button onClick={this.changeText}>Change Text</button>
                <h2>Hello React {name}</h2>
            </>
        )
    }
}