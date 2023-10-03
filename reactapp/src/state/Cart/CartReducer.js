import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []

let CartReducer = (state = INITIAL_STATE, action) => {
    console.log("Cart Reducer", state, action);

    switch(action.type) {
        case ActionTypes.AddItem :
            let newState = state.filter(item => item._id)
    }
}