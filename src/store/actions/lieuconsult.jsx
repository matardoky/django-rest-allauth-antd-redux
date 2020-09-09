import axios from 'axios'
import { lieuUrls } from "../../Constants"
import LieuConsult from '../../components/LieuConsult'

const { lieuConsult } = require("./actionTypes")

export const lieuConsultStart = () => {
    return {
        type: LieuConsult.CREATE_LIEUCONSULT_START,
    }
}

export const lieuConsultSuccess = (payload) => {
    return {
        type: lieuConsult.CREATE_LIEUCONSULT_SUCCESS,
        payload
    }
}

export const createLieuConsult = (cons) => {
    return dispatch => {
        dispatch(lieuConsultStart())
        const user = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${user.token}`
        }
        axios.post(lieuUrls.CREATE_LIEUCONSULT, cons)
        .then(res => {
            const payload = res.data
            dispatch(lieuConsultSuccess(payload))
        })
        .catch(err => {
 
        })

    }
     
}
 