import React from 'react'
import { Menu, Row, Col } from 'antd'
import { NavLink} from 'react-router-dom'
import { 
    HomeOutlined, 
    DesktopOutlined, 
    UserOutlined, 
    CalendarOutlined, 
    NodeIndexOutlined,
    ApiOutlined,
    PushpinOutlined,
    ShakeOutlined
} from '@ant-design/icons'

class Asider extends React.Component {
    render() { 
        return (
            <Row id="asider">
                <Col span={4}>
                    <Menu>
                        <Menu.Item key='4'>
                            <NavLink to ='/lieu-de-consultation'> <HomeOutlined />Lieu de consultation</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='5'>
                            <NavLink to ='/agenda'> <DesktopOutlined/> Agenda</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='6'>
                            <NavLink to ='/users'> <UserOutlined/> Utilisateurs</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='7' >
                            <NavLink to ='/motid-de-consultation'> <CalendarOutlined/> Motif de consultation</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='8'>
                            <NavLink to ='/remplacant'> <NodeIndexOutlined/> Remplacants</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='9'>
                            <NavLink to ='/consignes-patient'> <ApiOutlined/> Consignes patient</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='10'>
                            <NavLink to ='/autres-rubriques'> <PushpinOutlined/>Autres rubriques</NavLink>
                        </Menu.Item>
    
                        <Menu.Item key='11'>
                            <NavLink to = '/rdv-internet'> <ShakeOutlined/> RDV internet</NavLink>
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