import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddProductToStore = (products) => {
    return {
        type : ActionTypes.AddProductToStore,
        payload : {products}
    }
}

export const saveProductToDb = (product)=>{
    // thunk - makes it behave synchronously
    return (dispatch)=>{
       // here we go with ajax call : to save data to the server or fetch it from the server
       // using fetch method of react
       console.log("called by dispatch and synced by thunk");
       //dispatch(loading(true)); //Jquery - ajax
       axios.post("http://localhost:9000/product/api/saveProduct",
               product
           )
           .then((savedProduct)=>{
               let productSaved = savedProduct.data;
               console.log(productSaved)

               dispatch(AddProductToStore(productSaved))
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}

export const fetchProducts = () => { 
    console.log("Product ");

    return (dispatch) => {
        axios.get("http://localhost:9000/product/api/getProducts")
        .then((products) => {
            dispatch(AddProductToStore(products));
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
