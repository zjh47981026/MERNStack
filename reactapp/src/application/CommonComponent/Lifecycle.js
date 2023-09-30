import React, { Component } from "react";


export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : "Jason",
            Age : 20
        }
        this.nameRef = React.createRef();
        this.ageRef = React.createRef();
    }

    componentDidMount() {
        console.log("component is mounted on browser/dom created");
       // this.nameRef.current.value = "Jackson Wang";
       // this.ageRef.current.value = 27;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("GetSnapShotBeforeUpdate");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate!!!!");
        console.log(prevProps);
        console.log(prevState);
        if (this.nameRef.current.value != prevState.Name) {
            this.setState({
                Name : this.nameRef.current.value
            })
            console.log("Name has changed");
        } else if (this.ageRef.current.value != prevState.Age) {
            this.setState({
                Age : this.ageRef.current.value
            })
            console.log("Age has changed");
        }
        
    }
    /*
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.Name === this.state.Name && nextState.Age === this.state.Age) {
            return false;
        } else {
            return true;
        }
    }    */

    textChange=(event) => {
        let target = event.target;
        let value = target.value;
        let classList = target.classList;
        console.log(classList);

        if (classList.contains("name")) {
            this.setState({
                Name : value
            })
        } else if (classList.contains("age")) {
            this.setState({
                Age : value
            })
        }
        event.preventDefault();
    }

    
    render() {
        return(
            <>
                <h4>Value is - {this.props.value}</h4>
                <h4>The name is {this.state.Name} </h4>
                <h4>The age is {this.state.Age} </h4>
                <input type = "text" value = {this.state.Name} /> 
                <input type = "text" value = {this.state.Age}/>
                <label>Name : </label>
                <input type = "text" ref = {this.nameRef} className="name"/>
                <br></br>
                <label>Age : </label>
                <input type ="text" ref = {this.ageRef} className="age"/>
                <input type="button" value="Submit" /> 
            </>
        )
    }
}