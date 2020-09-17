import React from 'react'
import { PageHeader, Row, Col, Input, Form, Button } from 'antd'

class ContactForm extends React.Component {
    render(){
        return(
            <PageHeader
            title="Information pratiques publiques"
            >
                <Row>
                    <Col span={24}>
                    <Form
                    colon={false}
                    hideRequiredMark={true}
                    >
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
                                    <Input placeholder="ex:Dakar"/>

                                </Form.Item>

                            </Col>

                            <Col span={12}>
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
                        <Row>
                            <Col span={12}>
                            <Form.Item>
                                <Button htmlType="submit"> Valider</Button>
                            </Form.Item>
                            </Col>
                        </Row>
                            
                    </Form>

                    </Col>
                </Row>
            </PageHeader>
        )
    }
}
export default ContactForm