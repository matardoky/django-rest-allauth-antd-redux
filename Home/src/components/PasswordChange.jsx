import React from 'react' 
import { connect } from 'react-redux'
import { notifReset, passwordChange } from '../store/actions/notifs'
import { authLogout } from '../store/actions/auth'
import PropTypes, { func } from 'prop-types'


class PasswordChange extends React.Component {
    render(){
        return(
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messageSuccess: state.notifs.messageSuccess, 
        messageFail: state.notifs.messageFail, 
        notifSendSuccess: state.notifs.notifSendSuccess, 
        notifSendFail:state.notifs.notifSendFail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPasswordChange : (old_password, new_password1, new_password2) => dispatch(passwordChange(old_password, new_password1, new_password2)),
        onReset: () => dispatch (notifReset()), 
        authLogout: () => dispatch(authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChange)

PasswordChange.protoType = {
    messageSuccess : PropTypes.string, 
    messageFail: PropTypes.string, 
    notifSendSuccess: PropTypes.string,
    notifSendFail: PropTypes.string,
    onPasswordChange:PropTypes.func.isRequired, 
    onReset: PropTypes.func.isRequired, 
    authLogout:PropTypes.func.isRequired
}