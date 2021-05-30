import {
    SET_FORMS,
    SET_FORMS_ERROR,
    SET_FORMS_LOADING
} from '../actions/formAction'

const initialState = {
    data: [],
    loading: true,
    error: false
}

function form (state = initialState, { type, payload }) {
    switch (type) {
    case SET_FORMS:
        return { ...state, data: payload }
    case SET_FORMS_ERROR:
        return { ...state, error: payload }
    case SET_FORMS_LOADING:
        return { ...state, loading: payload }
    default:
        return state
    }
}

export default form