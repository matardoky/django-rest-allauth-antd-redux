import axios from 'axios'
import { lieuUrls } from "../../Constants"
import LieuConsult from '../../components/LieuConsult'

const { lieuConsult } = require("./actionTypes")

const lieuConsultStart = () => {
    return {
        type: LieuConsult.CREATE_LIEUCONSULT_START,
    }
}

const lieuConsultSuccess = (lieu) => {
    return {
        type: lieuConsult.CREATE_LIEUCONSULT_SUCCESS,
        lieu
    }
}

const lieuConsultFail = (error) => {
    return {
        type:lieuConsult.CREATE_LIEUCONSULT_FAIL, 
        error
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
            const error = err.data
            dispatch(lieuConsultFail(error))
        })

    }
     
}
 