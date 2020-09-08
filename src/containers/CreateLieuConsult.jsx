import React from 'react'
import { PageHeader, Row, Col, Divider, Input, Form } from 'antd'

class CreateLieuConsult extends React.Component {
    render(){
        return(
            <PageHeader
            title="Ajouter un lieu de consultation"
            >
                <Row>
                    <Col span={20} offset={4}>
                        <Form>
                            <Form.Item
                            label="Région"
                            name="region"
                            rules={[
                                {
                                    required: true, 
                                    message:"Région de l'établissement"
                                }
                            ]}
                            >
                                <Input/>

                            </Form.Item>
                        </Form>

                    </Col>
                </Row>
                <Divider/>


            </PageHeader>
        )
    }
}

export default CreateLieuConsult