import React from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { authLogout } from '../store/actions/auth';


const { Header, Content } = Layout
const { SubMenu } = Menu;

class CustomLayout extends React.Component {
    
    render() {
        const { isAdmin, first_name, last_name, onLogout} = this.props
        return ( 
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                      
                    <SubMenu key="sub1" title={`${first_name} ${last_name}`}>
                        {
                            isAdmin ? (
                                <Menu.Item key="0">  
                                    <Link to ='/dashboard'> Paramétres</Link>
                                </Menu.Item>
                            ):null
                        }
                        <Menu.Item key="1">Patient</Menu.Item>
                        <Menu.Item key="2">Profil DokyDoc</Menu.Item>
                        
                        <Menu.Item key="3"> <span onClick={()=>onLogout()}> Déconnexion </span> </Menu.Item>

                        
                    </SubMenu>

                    </Menu>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                {/* <Footer >DokyDoc</Footer> */}
                <DocumentTitle title="Optez pour le logiciel de gestion des consultations et des patients le plus complet"/>
            </Layout>     
            
        )
    }
}

const mapStateToProps = (state) => {
   return {
       first_name: state.auth.first_name,
       last_name: state.auth.last_name, 
       isAdmin: state.auth.isAdmin, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(CustomLayout);

CustomLayout.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string, 
    isAdmin: PropTypes.bool, 
    onLogout: PropTypes.func 

}