import { UpdateObject } from "../utility"
import { authType } from "../actions/actionTypes"

const initialState = {
    token:null, 
    userId:null,
    isAdmin:null,
    first_name:null,
    last_name:null,
    loading:false, 
    error:null, 
}

const authStart = (state, action) => {
    return UpdateObject(state, {
        loading:true
    })
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authType.AUTH_START: return authStart(state, action)
        default: return state
    }
}


