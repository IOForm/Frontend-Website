import {
    SET_STAFF,
    SET_STAFF_ERROR,
    SET_STAFF_LOADING
} from '../actions/staffAction'

const initialState = {
    data: [],
    loading: true,
    error: false
}

function staff (state = initialState, { type, payload }) {
    switch (type) {
    case SET_STAFF:
        return { ...state, data: payload }
    case SET_STAFF_ERROR:
        return { ...state, error: payload }
    case SET_STAFF_LOADING:
        return { ...state, loading: payload }
    default:
        return state
    }
}

export default staff