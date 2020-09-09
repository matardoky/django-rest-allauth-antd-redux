import { lieuConsult } from "../actions/actionTypes"
import { UpdateObject } from "../utility"


const initialState = {}

const lieuConsultSuccess = (state, action) => {
    return UpdateObject(state, {
        lieu:action.lieu
    })
}

export const lieuReducer = (state=initialState, action) => {
    switch(action.type) {
        case lieuConsult.CREATE_LIEUCONSULT_SUCCESS: return lieuConsultSuccess(state, action)
        default: return state
    }
}