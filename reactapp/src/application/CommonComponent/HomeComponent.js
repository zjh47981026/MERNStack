import React, {Component} from "react";

export default class HomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            uName : "Jason",
            uState : "Chicago"
        }

        //Ref - elements work out of scope of react renderer, as free html element
        this.userNameRef = React.createRef();
        this.userAddressRef = React.createRef();

        this.counter = 1;
        this.counterInterval;
        this.initializeTicks();
    }

    textChange = (evt)=>{

        let target = evt.target;
        let value = target.value;
        let classList = target.classList;
        console.log(classList)

        if (classList.contains("userName")) {
            this.setState({
                uName : value
            })    
        } else {
            this.setState({
                uState : value
            })
        }
        


        evt.preventDefault();
    }

    // textChangeAddress = (evt)=>{

    //     let target = evt.target;
    //     let value = target.value;
    //     console.log(value)
    //     this.setState({
    //         uState : value
    //     })


    //     evt.preventDefault();
    // }

    formSubmit = (evt)=>{
        let userName = this.userNameRef.current.value;
        let userAddress = this.userAddressRef.current.value;

        //alert(userName + userAddress)
        this.setState({
            uName : userName,
            uState : userAddress
        })


        evt.preventDefault();
    }

    initializeTicks = ()=>{
        this.counterInterval = setInterval(() => {
            console.log("Logging the counter "+ this.counter++)
        }, 2000);
    }

    //destruction life cycle method
    componentWillUnmount(){
        //delete all subscriptions from the component
        //stop any api call
        console.log("Component Will Unmount!!!")

        clearInterval(this.counterInterval)
    }

    render(){
        
        return(
            <>
                <h1>Home Component</h1>

                {/* controlled component using div based structure */}
                <div className="form col-md-12">
                    <div className="col-md-8">
                        <label>User Name </label>
                        <input type="text" className="userName" value={this.state.uName} onChange={this.textChange}></input>
                    </div>
                    <div className="col-md-8">
                        <label>Home Address </label>
                        <input type="text" className="address" value={this.state.uState} onChange={this.textChange}></input>
                    </div>
                </div>

                {/* uncontrolled component where we update the state at the end */}
                <form action="/saveUser" onSubmit={this.formSubmit}>
                    <b>User Name</b>
                    <input type="text" ref={this.userNameRef} ></input>
                    <b>Address</b>
                    <input type="text" ref={this.userAddressRef} ></input>

                    <button type="submit" >Save</button>
                </form>
            </>
        )
    }
}