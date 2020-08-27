import React from 'react' 
import { PageHeader, Form, Col, Row, Radio, Input, Button, Alert } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { authUrls } from '../Constants'
class Compte extends React.Component {

    state = {
        loading : true, 
        error: null, 
        user_profil: {}
    }
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem("user"))
        axios.defaults.headers = {
            'Content-Type' : 'application/json', 
            'Authorization' : `Token ${user.token}`
        }
        axios.get(authUrls.USER_PROFILE)
        .then( res => {
            this.setState({
                user_profil: res.data, 
                loading:false
            })
        })
        .catch( err => {
            this.setState({
                error: err.data
            })
        })

    }
    render() {
        const { user_profil } = this.state
        console.log(user_profil.last_login)
        return(
            <>
               <PageHeader
               title="Informations relatives à votre compte"
               extra = {[
                    <Link to="/password/change" key="chang-profil">
                        <Button >
                            Modifier mon mot de passe
                        </Button>
                    </Link>,
                    <Link to ="/compte/profil" key="pass-chang">
                         <Button >
                            Modifier mes informations personnelles
                         </Button>
                    </Link>

               ]}
               >
                    <Alert message ="L'email sur ce formumaire est celui à utiliser pour se connecter.
                       Derniére connexion  sur le compte"
                    type="info"
                    /> 
            
                    <div>
                        <Form
                        name="accoun_form"
                        colon={false}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                    label="Civilité"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Radio.Group name="civilite" defaultValue={1} style={{ color: '#01fffd' }}>
                                            <Radio value={1}>Madame</Radio>
                                            <Radio value={2}>Monsieur</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
        
                                <Col span={12}>
                                    <Form.Item
                                    label="Fonction/Titre"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Radio.Group name="titre" value={this.props.titre}>
                                            <Radio value="Dr">Dr</Radio>
                                            <Radio value="Pr">Pr</Radio>
                                            <Radio value="Autre">Autre</Radio>
                                        </Radio.Group>
                
                                    </Form.Item>
                                </Col>
        
                            </Row>
                            
                            <Row gutter={16}>
                                <Col span={12} >
                                    <Form.Item
                                    label="Nom de famille"
                                    style={{
                                        display:"block"
                                    }}
                                   
                                    >
                                        <Input value ={this.props.last_name} />
                
                                    </Form.Item>
                                </Col>
        
                                <Col span={12} >
                                    <Form.Item
                                    label="Prénoms"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Input value ={this.props.first_name}/>
                
                                    </Form.Item>
        
                                </Col>
                            </Row>
        
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                    label="Date de naissance"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Input value={this.props.birthday}/>
                
                                    </Form.Item>
                                </Col>
                                    
                                <Col span={12}>
                                    <Form.Item
                                    label="Lieu de naissance"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Input/>
                
                                    </Form.Item>
        
                                </Col>
                            </Row>
        
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                    label="Email"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Input value={this.props.email}/>
                
                                    </Form.Item>
                                </Col>
                                    
                                <Col span={12}>
                                    <Form.Item
                                    label="Téléphone portable"
                                    style={{
                                        display:"block"
                                    }}
                                    >
                                        <Input value={this.props.phone_number}/>
                
                                    </Form.Item>
         
                                </Col>
                            </Row>
        
                        </Form>
                    </div>
                </PageHeader>

            </>
    
        )
    }
}

export default Compte 