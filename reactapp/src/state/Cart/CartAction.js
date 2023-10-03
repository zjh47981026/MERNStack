import * as ActionTypes from "../actionTypes";


export const addItemToCart = (item) => {
    return (
        {
            type : ActionTypes.AddItem,
            payload : {item}
        }
    )
}

export const emptyTheCart = () => {
    return (
        {
            type : ActionTypes.EmptyCart,    
        }
    )
}


export const removeItem = (id) => {
    return ({
        type : ActionTypes.RemoveItem,
        payload: id
    })
}

export const updateItem = (id, qty) => {
    return ({
        type : ActionTypes.UpdateItem,
        payload : {
            id, 
            qty : parseInt(qty)
        }
    })
}

export const saveCartToDb = (cart, userid) => {
    console.log("Items To Be Saved", cart);

    return (dispatch) => {
        
    }
}