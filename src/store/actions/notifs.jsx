import axios from "axios"
import { authUrls } from "../../Constants"

const { notifs } = require("./actionTypes")


export const notifReset = () => {
    return {
        type: notifs.NOTIF_RESET,
    }
}

const notifSuccess = (payload) => {
    return {
        type: notifs.NOTIF_SUCCESS, 
        payload
    }
}

const notifFail = (error) => {
    return {
        type:notifs.NOTIF_FAIL, 
        error
    }
}


export const passwordChange = (old_password, new_password1, new_password2 ) => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers = {
            'Content-Type' : 'application/json', 
            'Authorization':`Token ${user.token}`
        }
        axios.post(authUrls.CHANGE_PASSWORD, {
            old_password, 
            new_password1,
            new_password2
        })
        .then(res => {
            const payload = res.data.detail
            dispatch(notifSuccess(payload))
        })
        .catch(err => {
            const error = err.response.data
            if(error.old_password){
                dispatch(notifFail(error.old_password[0]))
            }
            if(error.new_password2){
                dispatch(notifFail(error.new_password2[0]))
            }
           
        })
    }
}

