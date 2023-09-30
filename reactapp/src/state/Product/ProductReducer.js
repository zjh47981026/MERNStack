import * as ActionTypes from "../actionTypes";

const Initial_State = {
    product : {
        name : "default name",
        price : 0,
        desc : "default desciption",
        rating : 0
    }
}


let ProductReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ActionTypes.AddProductToStore :
            return {...state, Product : action.payload}
        default : 
            return state
    }
}
export default ProductReducer;