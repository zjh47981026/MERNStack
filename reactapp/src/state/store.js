import { combineReducers, applyMiddleware} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk"; //is used to pipeline the dispatched objects
// gives us a feeling of sync execution by being async

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers ({
    userReducer, //userReducer : userReducer // - using short hand
    productReducer 
});

//create cofigure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//initial state if we want to set from store instead from reducer
    applyMiddleware(thunk)
)
