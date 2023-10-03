import * as ActionTypes from "../actionTypes";

const Initial_State = {
    products:[],
    defaultProduct : {
        name : "default name",
        category: "default category",
        price : 0,
        description : "default desciption",
        rating : 0
    }
}


let ProductReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ActionTypes.AddProductToStore :
            return {...state, Product : action.payload.products}
        default : 
            return state
    }
}
export default ProductReducer;