import { lieuConsult } from "../actions/actionTypes"
import { UpdateObject } from "../utility"

const initialState = {}

const lieuConsultStart = (state, action) => {
    return UpdateObject(state, {
        loading: true
    })
}

const lieuConsultSuccess = (state, action) => {
    return UpdateObject(state, {
        lieu:action.lieu, 
        loading:false
    })
}

const lieuConsultFail = (state, action) => {
    return UpdateObject(state, {
        error: action.error, 
        loading:false
    })
}

export const lieuReducer = (state=initialState, action) => {
    switch(action.type) {
        case lieuConsult.CREATE_LIEUCONSULT_START:return lieuConsultStart(state, action)
        case lieuConsult.CREATE_LIEUCONSULT_SUCCESS: return lieuConsultSuccess(state, action)
        case lieuConsult.CREATE_LIEUCONSULT_FAIL:return lieuConsultFail(state, action)
        default: return state
    }
}