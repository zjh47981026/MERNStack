//Hook - an extract of feature that we could get from library
import React, { useState, useRef, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";


let UserHook = (props) => {
    //this.state can't be created
    //this.state = {userName : "John Doe"} //initialize the state
    //this.setState({//callback to update the state and create v-dom})
    
    //initialize one state and returns a callback to update that state
 //   let [userName, setUserName] = useState("John Doe")

   //makes our component capable of being subscriber to store like mapStatetoProps
    //initialize of default values using ref
   let userNameRef = useRef(null);

  // let user = useSelector()
   //componentDidMount
   useEffect(() => {
    //assign the values we got from reducer
        userNameRef.current.value = "David";
   })

    let onTextChange = (evt) => {
        let target = evt.target;
        setUserName(target.value);

        evt.preventDefault();
    }

    let readFormData = (evt) => {
      //  let userName = userNameRef.current.value
        alert("Learning Hooks!!! ")
        evt.preventDefault();
    }

    return (
    <>
        <h1>User Hook Component</h1>
            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
                <label>
                    <b>User Name :</b>
                     {/*<input type = "text" className={"form-control col-md-12"} value={userName}
                      onChange={onTextChange}  placeholder ="Please enter user name" maxLength={20} required/> */}
                    <input type = "text" className={"form-control col-md-12"} 
                      ref={userNameRef}  placeholder ="Please enter user name" maxLength={20} required/>

                </label>
                <br/>
                <br/>
                <input type = "submit" className={"btn btn-primary"} value = "Signin" />
            </form>
    </>
    )
}

export default UserHook;