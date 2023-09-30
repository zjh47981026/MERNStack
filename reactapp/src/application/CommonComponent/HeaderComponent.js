import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect } from "react-redux";

let Header = (props)=>{
    let userName = "John!";
    let goAboutHook = useNavigate(); //hook - an inbuilt feature to navigate at other page

    let goToAboutClick = (evt)=>{
        // navigates user to certain link on the fly!!
        goAboutHook("/about/2023")
        evt.preventDefault();
    }
    let goToCity = (evt) => {
        goAboutHook("/city/16803")
        evt.preventDefault();
    }

    return(
        <>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
             
            <div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink>
            <NavLink to="/name" className="button" activeclassname="success">Name</NavLink>
            <NavLink to="/city" className="button" activeclassname="success">City</NavLink>
            <NavLink to="/lifecycle" className="button" activeclassname="success">Lifecycle</NavLink>
            <NavLink to="/hook" className="button" activeclassname="success">User Hook</NavLink>     
            </div>
            <button onClick={goToAboutClick} >Go To About Page</button>
            <button onClick={goToCity}>Go to City</button>
        </>
    )
}

let mapStateToProps = (store) => {
    return {
        User : store.userReducer.User
    }
}

export default connect(mapStateToProps, null)(Header)

//export default Header;