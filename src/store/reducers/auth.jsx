import { UpdateObject } from "../utility"
import { authType } from "../actions/actionTypes"

const initialState = {}

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
        expirationDate:action.user.expirationDate,
        loading:false
    })
}

const authFail = (state, action) => {
    return UpdateObject(state, {
        error:action.error, 
        loading:false, 

    })
}

const authLogout = (state, action) => {
    return UpdateObject(state, {
        token: null, 
        userId:null,
        isAdmin:false, 
        first_name:null,
        last_name:null, 
        expirationDate:null
    })
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authType.AUTH_START: return authStart(state, action)
        case authType.AUTH_SUCCESS: return authSuccess(state, action)
        case authType.AUTH_FAIL: return authFail(state, action)
        case authType.AUTH_LOGOUT: return authLogout(state, action)
        default: return state
    }
}


