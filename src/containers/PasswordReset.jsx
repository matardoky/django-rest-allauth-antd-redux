import React from 'react'
import axios from 'axios'
import { authUrls } from '../Constants'
import { Form, Input, Button, Row, Col, Badge } from 'antd'

class PasswordReset extends React.Component {

    state = {
        notifSuccess: null, 
        notifFail: null,
        error:false, 
        success: false
    }

    passwordReset = (email) => {
        axios.post(authUrls.RESET_PASSWORD, {
            email
        })
        .then( res => {
            this.setState({
                notifSuccess: res.data, 
                success:true
            })
        })
        .catch( err => {
            this.setState({
                notifFail: err.response.message, 
                error: true
            })
        })

    }

    onFinish = (value) => {
        this.passwordReset(value.email)
    }
    
    render(){
        return(
            <main id="passwordReset">
                <div className="passwordReset">
                    <h1>Réinitialiser le mot de passe de votre compte DokyDoc</h1>

                    <Row gutter={[16,16]}>
                        <Col span={1}>
                            <Badge count={1}  style={{ backgroundColor: '#001529' }} />
                        </Col>
                        <Col span={12} >
                           <p>Entrez votre adresse mail ci-dessous.</p> 
                        </Col>

                    </Row>

                    <Row gutter={[16,16]}>
                        <Col span={1}>
                            <Badge count={2}  style={{ backgroundColor: '#001529' }} />
                        </Col>
                        <Col span={12} >
                           <p>Vous recevrez un mail.</p> 
                        </Col>

                    </Row>

                    <Row gutter={[16,16]}>
                        <Col span={1}>
                            <Badge count={3}  style={{ backgroundColor: '#001529' }} />
                        </Col>
                        <Col span={23} >
                           <p>Cliquez sur le lien dans le mail, vous pourrez choisir votre nouveau mot de passe.</p> 
                        </Col>

                    </Row>

                    <Row gutter={[16,16]}>
                        <Col span={1}>
                            <Badge count={4}  style={{ backgroundColor: '#001529' }} />
                        </Col>
                        <Col span={23} >
                           <p>Après la validation de votre nouveau mot de passe, vous pouvez vous connecter !</p> 
                        </Col>

                    </Row>
                   
                    
                    <Form onFinish={this.onFinish}>
                        <Form.Item
                        name="email"
                        rules={[
                            {
                                required:true,
                                message:"Enter votre addresse e-mail de votre compte DokyDoc"
                            },
                        ]}
                        >
                            <Input placeholder="Adresse e-mail de votre compte DokyDoc"/>
                        </Form.Item>
    
                        <Form.Item>
                            <Button htmlType="submit" block>
                                envoyer
                            </Button>
                        </Form.Item>
                    </Form>

                    <h1>Je n’ai pas reçu de mail, pourquoi ?</h1>
                    <p>La réception du mail peut se faire dans les minutes qui suivent, pensez également à vérifier vos spams. Si le problème persiste, merci de consulter notre FAQ.</p>
                </div>
            </main>
        )
    }
}

export default PasswordReset