import React from 'react'
import { Menu, Row, Col } from 'antd'
import { NavLink} from 'react-router-dom'


class Asider extends React.Component {
    render() { 
        return (
            <Row id="asider">
                <Col span={4}>
                    <Menu>
                        <Menu.Item key='4'>
                            <NavLink to ='/login'> Lieu de consultation</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='5'>
                            <NavLink to ='/login'> Agenda</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='6'>
                            <NavLink to ='/users'> Utilisateurs</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='7' >
                            <NavLink to ='/login'> Motif de consultation</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='8'>
                            <NavLink to ='/login'> Remplacants</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='9'>
                            <NavLink to ='/login'> Consignes patient</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='10'>
                            <NavLink to ='/login'> Autres rubriques</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='11'>
                            <NavLink to = '/login'> RDV internet</NavLink>
                        </Menu.Item>
                    </Menu>

    
                </Col>
                <Col span={20}>
                    {this.props.children}
                </Col>
    
            </Row>

        )
    }
}

export default Asider