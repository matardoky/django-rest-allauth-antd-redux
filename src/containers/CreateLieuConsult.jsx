import React from 'react'
import LocalisationForm from './LocalisationForm'
import ContactForm from './ContactForm'
import HoraireForm from './HoraireForm'

import {Form} from 'antd'


class CreateLieuConsult extends React.Component {
    render(){
        return(
            <>
                <Form
                colon={false}
                hideRequiredMark={true}
                >   
                <LocalisationForm/>

                <HoraireForm/>

                <ContactForm/>
                </Form>

    
            </>
        )
    }
}

export default CreateLieuConsult