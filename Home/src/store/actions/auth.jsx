const { authType } = require("./actionTypes")


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