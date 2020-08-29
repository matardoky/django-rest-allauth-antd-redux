import React from 'react'
import axios from 'axios'
import { Form, Input, Button, Paragraph, message, Row, Col} from 'antd'
import { authUrls } from '../Constants'

class PasswordResetConfirm extends React.Component {
    
    state = {
        notifSuccess: null,
        notifFail:null, 
        success:false, 
        error:false
    }

    passwordResetConfirm = (new_password1, new_password2) => {
        const {uid, token} = this.props.match.params
        const password = {
            new_password1,
            new_password2
        }
        const data = Object.assign(password, {uid, token})
        axios.post(
            authUrls.RESET_PASSWORD_CONFIRM, data
        )
        .then( res => {
            this.setState({
                notifSuccess: res.data,
                success:true
            })
        })
        .catch( err => {
            this.setState({
                error:true,
                notifFail: err.response.data.new_password2

            })
           
        })
    }
    onFinish =(values) => {
        this.passwordResetConfirm(
            values.new_password1, values.new_password2
        )
    }

    render(){
        const { error, success, notifSuccess, notifFail} = this.state
        return(
            <main className="passwordResetConfirm">
                {error ? notifFail.map(el => message.error({
                    content:`${el}`, 
                    duration:"5",
                    className:"custom-message",
                    key:el.id

                })):null}

                {success ? message.success({
                    content:`${notifSuccess}`,
                    className:"custom-message",
                }):null}

                <div id="passwordResetConfirm">
                    <h4>Créer votre nouveau mot de passe</h4>
                    <Paragraph>
                    Choisissez un mot de passe sécurisé et ne le réutilisez pas pour d'autres comptes.
                    </Paragraph>
                    <Form
                    hideRequiredMark
                    colon={false}
                    onFinish={this.onFinish}
                    >
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
                        label="Confirmation du nouveau mot de passe"
                        style={{
                            display:"block"
                        }}
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
                                    return Promise.reject("les deux mots de passe ne sont pas identiques")
                                }
                            })
                        ]}
                        dependencies={[
                            'new_password1'
                        ]}
                        >
                            <Input.Password/>
    
                        </Form.Item>
    
                        <Form.Item>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Button htmlType="submit" block > Valider </Button>
                                </Col>
                                <Col span={12}>
                                    <Button htmlType="submit" block onClick={()=> this.props.history.push("/")}>Annuler </Button>
                                </Col>
                            </Row>
                            
                        </Form.Item>
    
                    </Form>
    
                    
                </div>
            </main>
        )
    }
}

export default PasswordResetConfirm