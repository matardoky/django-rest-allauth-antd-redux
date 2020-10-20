import React from 'react'
import { Row, Col, Input, Form, Card, Select} from 'antd'

const { Option } = Select
export default function LocalisationForm({data}){
    const regions = data.map(el => <Option key={el.id}> {el.name}</Option>)
        
    return (
        <Card title="Localisation" bordered >
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item
                    label="Région"
                    name="region"
                    rules={[
                        {
                            required: true, 
                            message:"Région de l'établissement",
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Select>
                            {regions}
                        </Select>
            
                    </Form.Item>
            
                </Col>
            
                <Col span={12} >
                    <Form.Item
                    label="Département"
                    name="deps"
                    rules={[
                        {
                            required: true, 
                            message:"Département de l'établissement"
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Input/>
            
                    </Form.Item>
            
                </Col>
            </Row>
            
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item
                    label="Ville"
                    name="ville"
                    rules={[
                        {
                            required: true, 
                            message:"Ville de l'établissement"
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Input/>
            
                    </Form.Item>
            
                </Col>
            
                <Col span={12}>
                    <Form.Item
                    label="BP"
                    name="bp"
                    rules={[
                        {
                            required: true, 
                            message:"Boite postale de l'établissement"
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Input/>
            
                    </Form.Item>
            
                </Col>
            </Row>
            
            <Row gutter={32}>
                <Col span={12}>
                    <Form.Item
                    label="Nom de l'établissement"
                    name="nom"
                    rules={[
                        {
                            required: true, 
                            message:"Nom de l'établissement"
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Input/>
            
                    </Form.Item>
            
                </Col>
            
                <Col span={12}>
                    <Form.Item
                    label="Affiliation de l'établissement"
                    name="affiliation"
                    rules={[
                        {
                            required: true, 
                            message:"Affiliation de l'établissement"
                        }
                    ]}
                    style={{
                        display:"block"
                    }}
                    >
                        <Input/>
            
                    </Form.Item>
            
                </Col>
            </Row>
            
        </Card>
    )
}

