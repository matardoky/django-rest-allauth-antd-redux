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
    expirationDate:null
}

const authStart = (state, action) => {
    return UpdateObject(state, {
        loading:true
    })
}

const authSuccess = (state, action) => {
    return UpdateObject(state, {
        token:action.user.token, 
        userId: action.user.userId, 
        isAdmin:action.user.isAdmin,
        first_name:action.user.first_name,
        last_name:action.user.last_name, 
        loading:false, 
        expirationDate:action.user.expirationDate
    })
}

const authFail = (state, action) => {
    return UpdateObject(state, {
        error:action.error, 
        loading:false, 

    })
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authType.AUTH_START: return authStart(state, action)
        case authType.AUTH_SUCCESS: return authSuccess(state, action)
        case authType.AUTH_FAIL: return authFail(state, action)
        default: return state
    }
}


