import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations

let Header = (props)=>{
    let userName = "John!";
    let goAboutHook = useNavigate(); //hook - an inbuilt feature to navigate at other page

    let goToAboutClick = (evt)=>{
        
        goAboutHook("/about/2023")

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
            </div>
            <button onClick={goToAboutClick} >Go To About Page</button>
        </>
    )
}

export default Header;