import React from 'react' 
import { connect } from 'react-redux'
import { notifReset, passwordChange } from '../store/actions/notifs'
import { authLogout } from '../store/actions/auth'
import PropTypes from 'prop-types'
import { PageHeader, Alert, Form, Button, Input, message } from 'antd'


class PasswordChange extends React.Component {

    onFinish = (value) => {
        this.props.onPasswordChange(value.old_password, value.new_password1, value.new_password2)
    }
    render(){
        const { messageSuccess, messageFail, notifSendSuccess, notifSendFail} = this.props
        const description = "Choisissez un mot de passe sécurisé et ne le réutilisez pas pour d'autres comptes. Si vous modifiez ce mot de passe, vous serez déconnecté de tous vos appareils, sauf ceux que vous utilisez pour prouver votre identité lorsque vous vous connectez."

        return (
                <PageHeader
                title="Mot de passe"
                >
                    <Alert type = "info" message = {description}/>
    
                    <div>
                    <Form
                    colon={false}
                    hideRequiredMark={true}
                    onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="old_password"
                            label="Mot de passe actuel"
                            style={{
                                display:"block"
                            }}
                            rules={[
                                {
                                required: true, 
                                message :"Entrer votre mot de passe actuel"
                                },
    
                            ]}
                            >
                                <Input.Password/>
    
                            </Form.Item>
                            <Form.Item
                            name="new_password1"
                            label="Nouveau mot de passe"
                            style={{
                                display:"block"
                            }}
                            rules={[
                                {
                                required:true, 
                                message:"Entrer votre nouveau mot de passe"
                                }
                            ]}
                            extra={`Niveau de sécurité du mot de passe: Utilisez au moins 8 caractères. Ne choisissez pas un mot de passe que vous utilisez déjà sur un autre site, ni un mot de passe trop évident, tel que le nom de votre animal de compagnie. `}
                            >
                                <Input.Password/>
    
                            </Form.Item>
    
                            <Form.Item
                            name="new_password2"
                            label="Confimer le nouveau mot de passe"
                            style={{
                                display:"block"
                            }}
                            dependencies={[
                                'new_password1',
    
                            ]}
                            rules={[
                                {
                                required:true, 
                                message:"Confirmer votre mot de passe"
                                },
                                ({getFieldValue}) => ({
                                    validator(rules, value){
                                        if(!value || getFieldValue('new_password1')===value){
                                            return Promise.resolve()
    
                                        }
    
                                        return Promise.reject('les deux mots de passe ne sont pas identiques')
                                    }
                                }),
                            ]}
                            >
                                <Input.Password/>
    
                            </Form.Item>
                            
                            <Form.Item className="submitButton">
                                
                                <Button key="submit" htmlType="submit" block>
                                    Modifier le mot de passe
                                </Button>
                            </Form.Item>
    
                    </Form>
    
                    </div>
                    {
                       messageFail ? message.error({
                           content:`${notifSendFail}`, 
                           className: 'custom-message',
                           style: {
                              marginTop:'62px',
                           }
                       }
                      , 
                       ()=>this.props.onReset()): null
                    }

                    {
                       messageSuccess ? message.success({
                           content: `${notifSendSuccess}`,
                           className:'custum-message', 
                           style: {
                               marginTop:'62px'
                           }, 
                       }, 
                       ()=> this.props.authLogout() ):null
        
                    }
    
                </PageHeader>
        
            
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