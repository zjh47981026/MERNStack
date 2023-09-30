import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from  "react-redux";
import { saveProductToDb } from "../../../state/Product/ProductAction";

let Product = (props) => {
    let productDetail = useSelector((store) => store.productReducer.Product)
    let [productName, setProductName] = useState(productDetail.name);
    let [productPrice, setProductPrice] = useState(productDetail.price);
    let [productDesc, setProductDesc] = useState(productDetail.desc);
    let [productRating, setProductRating] = useState(productDetail.rating);

    let dispatchToDb = useDispatch();

onTextChange = (evt) => {
    let target = evt.target;
    let classList = target.classList;
    let val = target.value;

    if (classList.contains("name")) {
        setProductName(val);
    } else if (classList.contains("price")) {
        setProductPrice(val);
    } else if (classList.contains("desc")) {
        setProductDesc(val);
    } else if (classList.contains("rating")) {
        setProductRating(val);
    }

    evt.preventDefault();
}

let readFormData = (evt) => {
      let product = {
        name : productName,
        price : productPrice,
        desc : productDesc,
        rating : productRating
      }

      dispatchToDb(saveProductToDb(product));
        
        evt.preventDefault();
    }

    return (
        <>
            <h1>Product Component</h1>
            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
                <label>
                    <b>Name :</b>
                    <input type = "text" className={"form-control col-md-12 name"} value={productName}
                      onChange={onTextChange}  placeholder ="Please enter product name" maxLength={20} required/>
                 </label>  
                 <br/>
                 <label>
                     <b>Price : </b>
                     <input type = "text" className={"form-control col-md-12 price"} value={productPrice}
                      onChange={onTextChange}  placeholder ="Please enter product price" maxLength={20} required/>
                </label>
                <br/>
                <label>
                     <b>Desc :</b>
                     <input type = "text" className={"form-control col-md-12 desc"} value={productDesc}
                      onChange={onTextChange}  placeholder ="Please enter product desc" maxLength={20} required/>
                </label>
                <br/>
                <label>
                      <b>Rating :</b>
                      <input type = "text" className={"form-control col-md-12 rating"} value={productRating}
                      onChange={onTextChange}  placeholder ="Please enter product rating" maxLength={20} required/>  
                </label>  
            </form>
        </>)  
}

export default Product