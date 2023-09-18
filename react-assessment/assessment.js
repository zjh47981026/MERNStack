//Assessment #3 react and its fundamentals - 15/09/2023

//1. what is react and its role for single page application
/*
React is a popular open-source JavaScript library used for building user
interfaces, particularly for single-page applications. It makes the web application
fast and efficient. It can be combined with libraries like React Router to manager
the navigation in the application without page reloads, providing seamless user experience
*/

//2. how react is faster compared to other javascript frameworks
/*
    React uses a Virtual DOM, which is a lightweight copy of the actual DOM. This
    allows React to minimize direct manipulation of the actual DOM, which is a costly
    operation in terms of performance.
*/
//3. what is virtual dom
/*
    The virtual dom is a lightweight copy of the actual DOM. It is a virtual representation of a UI kept
    in memory
*/
//4. how react renders dom in conservative manner
/*
    React implements the Diff algorithm to compare the new Virtual DOM and the OLD DOM
    to find the optimized way to manipulate the DOM and re-renders. So the browser does
    not need to rerender the whole page everytime, and only update the components that
    changed states.
*/
//5. create a class component named - Success and show some quotes on success in its
import React, {Component} from "react";
//import SuccessChild from "/SuccessChild"
//import SuccessStory from "/SuccessStory"
export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 1
        }
    }

    executedByChild = (val) => {
        this.setState({
            value : val
        })
    }

    render() {
        return(
            <>
            <p>One of the lessons that I grew up with was to always stay true to yourself and 
                never let what somebody else says distract you from your goals
            </p>
            <SuccessChild name={"abc"} address={"somewhere"} component={<SuccessStory />}
            callBackFunc={this.executedByChild}/>
            </>
        )
    }
}

//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
let SuccessChild = (props) => {
    
    return(
        <>
            <h4>Name : {props.name}</h4>
            <h4>Address: {props.address}</h4>
            {props.component}
        </>
    )
}
//export default SuccessChild;
//please refer to the Success component and SuccessChild component

//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
let SuccessStory = (props) => {
    return (
        <>
            <h2>SuccessStory</h2>
            <button onClick={()=> {props.callBackFunc(10)}}> Send Back To Parent</button>
        </>
    )
}


//8. create UserSignIn component using uncontrolled way, should be class component
/*
export default class UserSignIn extends Component {
    constructor(props) {
        super(props)
        this.state={
            value : ""
        }
        this.valRef = React.createRef();
    }

    clickBtn = (event) => {
        let val = this.valRef.current.value;
        this.setState({
            value : val
        })
        event.preventDefault();
    }

    render() {
        return(
            <>
                <input type = "text" ref = {this.valRef}></input>
                <button type="submit" onClick={this.clickBtn}>Save</button>
                <input type = "text" value={this.state.value}></input>
            </>
        )
    }
}
*/

//9. create Product component to accept ProductName and ProductPrice
/*
    let Product = (props) => {
        return (
            <>
                <h4>{props.ProductName}</h4>
                <h4>{props.ProductPrice}</h4>
            </>
        )
    }
*/

//10. pass a random value from SuccessStory component back to Success
/*
please refer to the Success component and SuccessStory Component above
*/