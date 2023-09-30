import React from "react";
import { useParams } from "react-router-dom";
let City = () => {
    let params = useParams();
    let param = params["zipcode"] ? params["zipcode"] : "No zipcode!";


    return (
        <>
            <h4>ZipCode is - {param}</h4>
        </>
    )
}

export default City