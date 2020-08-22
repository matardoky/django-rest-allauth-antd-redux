import { authUrls } from "../../Constants"
import axios from 'axios'
const { authType } = require("./actionTypes")




const chechAuthTimeout = (expirationDate) => {
    return dispatch => {
        setTimeout( () => { 
            dispatch(authLogout()) 
        }, expirationDate*1000 )
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem("user"))
        if ( user === undefined || user === null) {
            dispatch(authLogout())
        }else{
            const expirationDate = new Date(user.expirationDate)
            if(expirationDate <= new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authSuccess(user))
                dispatch( chechAuthTimeout( ( expirationDate.getTime() - new Date().getTime() )/1000 ) )
            }

        }

    }
}


const authStart = () => {
    return {
        type:authType.AUTH_START, 
    }
}

const authSuccess = (user) => {
    return {
        type:authType.AUTH_SUCCESS, 
        user
    }
}

const authFail = (error) => {
    return {
        type:authType.AUTH_FAIL, 
        error,
    }
}

export const authLogout = () => {
    localStorage.removeItem("user")
    return {
        type:authType.AUTH_LOGOUT
    }
}

export const authLogin =  (email, password) => {
    return dispatch => {
        dispatch(authStart)
        axios.post(authUrls.LOGIN, {
            email, 
            password
        })
        .then(res => {
            const user = {
                token: res.data.key, 
                userId: res.data.user, 
                first_name: res.data.user_type.first_name, 
                last_name: res.data.user_type.last_name, 
                isAdmin: res.data.user_type.is_staff,
                expirationDate: new Date(new Date().getTime()+3600*1000)
            }
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(authSuccess(user))
            dispatch(chechAuthTimeout(3600))
        })
        .catch(error => {
            dispatch(authFail(error.response.data.non_field_errors[0]))
        })
    }
}