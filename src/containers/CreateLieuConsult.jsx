import React from 'react'
import LocalisationForm from './LocalisationForm'
import ContactForm from './ContactForm'
import HoraireForm from './HoraireForm'
import {Form} from 'antd'
import { authAxios, lieuUrls } from '../Constants'

class CreateLieuConsult extends React.Component {

    state = {
        data:[]
    }

    async componentDidMount(){
        await authAxios.get(lieuUrls.REGION)
        .then( res => {
            this.setState({
                data:res.data
            })
            
        })
    }
    render(){
        const { data } = this.state
        console.log(data)
        return(
            <Form
            colon={false}
            hideRequiredMark={true}
            >   
            <LocalisationForm {...this.state}/>

            <HoraireForm {...this.state}/>

            <ContactForm {...this.state}/>
            </Form>
        )
    }
}

export default CreateLieuConsult