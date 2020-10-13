const ROOT_URL = "http://127.0.0.1:8000/";

export const authUrls = {
    LOGIN: `${ROOT_URL}rest-auth/login/`,
    SIGNUP: `${ROOT_URL}rest-auth/registration/`,
    CHANGE_PASSWORD: `${ROOT_URL}rest-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}rest-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}rest-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}rest-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}rest-auth/user/`
}

export const lieuUrls = {
    REGION:`${ROOT_URL}apiScheduler/regions/`,
    DEPS:`${ROOT_URL}apiScheduler/departements/`,
    VILLE:`${ROOT_URL}apiScheduler/villes/`,
    ETABLISSEMENT:`${ROOT_URL}apiScheduler/etablissements/`,
    SPECIALITE:`${ROOT_URL}apiScheduler/specialites/`,
    CREATE_LIEUCONSULT:`${ROOT_URL}apiScheduler/lieu-consult/`,
    DELETE_LIEUCONSULT:`${ROOT_URL}apiScheduler/lieu-consult/id`,
}