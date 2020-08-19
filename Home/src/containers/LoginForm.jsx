import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link} from 'react-router-dom'

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Row, Col, Spin} from 'antd';
import { authLogin } from '../store/actions/auth';

class LoginForm extends React.Component {

  onFinish = values => {
    this.props.onAuth(values.email, values.password)
  }

  render(){
    const { isAuthenticated, loading, error } = this.props
    if(isAuthenticated){
      return <Redirect to ="/"/>
    }

    return(
      <React.Fragment>
        <main id="main-layout">
          {
            loading ? (
              <Spin/>
              ):(
                <Row>
                <Col className="form">
                  <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  >
                    <h2 className="titre">Identifiez-vous</h2>
                    <p> {error}</p>
    
                    <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Adresse e-mail" />
                    </Form.Item>
                      
                    <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                      <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Mot de passe"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button block htmlType="submit" loading={this.props.loading}>
                        connectez-vous
                      </Button>
                    </Form.Item>
                    <Link to="/">mot de passe oublié ?</Link>
                  </Form>
                </Col>
                </Row>
            )
          }
        </main>
    </React.Fragment>    
        
      )
  }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.token !==null, 
        error: state.auth.error, 
        loading : state.auth.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email , password) => dispatch(authLogin(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)




