import axios from './axios'

export const SET_FORMS = 'forms/setData'
export const SET_FORMS_LOADING = 'forms/setLoading'
export const SET_FORMS_ERROR = 'forms/setError'

export function fetchForms() {
    return function(dispatch) {
        dispatch(setFormLoading(true))
        axios('/forms')
            .then(({ data }) => dispatch(setFormData(data)))
            .catch(err => dispatch(setFormError(err)))
            .finally(() => dispatch(setFormLoading(false)))
    }
}

export function addForm(data) {
    return function(dispatch) {
        axios.post('/forms', data)
            .then(() => console.log('posted'))
            .catch((err) => console.log(err))
    }
}

export function setFormData(payload) {
    return { type: SET_FORMS, payload }
}

export function setFormLoading(payload) {
    return { type: SET_FORMS_LOADING, payload }
}

export function setFormError(payload) {
    return { type: SET_FORMS_ERROR, payload }
}