const { UpdateObject } = require("../utility")
const { notifs } = require("../actions/actionTypes")

const initialState = {

}


const notifSuccess = (state, action) => {
    return UpdateObject(state, {
        notifSendSuccess: action.payload, 
        messageSuccess: true
    })
}

const notifFail = (state, action) => {
    return UpdateObject(state, {
        notifSendFail: action.error, 
        messageFail: true
    })
}

const notifReset = (state, action) => {
    return UpdateObject(state, {
        messageSucess:false, 
        messageFail:false
    })
}



export const notifReducer = (state=initialState, action) => {
    switch(action.type){
        case notifs.NOTIF_SUCCESS: return notifSuccess(state, action)
        case notifs.NOTIF_FAIL: return notifFail(state, action)
        case notifs.NOTIF_RESET: return notifReset(state, action)
        default: return state
    }
    
}