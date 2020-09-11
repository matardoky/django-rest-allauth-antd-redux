import React from 'react'
import LocalisationForm from './LocalisationForm'
import { Divider } from 'antd'
import ContactForm from './ContactForm'
import HoraireForm from './HoraireForm'

class CreateLieuConsult extends React.Component {
    render(){
        return(
            <>
            <LocalisationForm/>
            <Divider/>
            <ContactForm/>
            <Divider/>
            <HoraireForm/>
            </>
        )
    }
}

export default CreateLieuConsult