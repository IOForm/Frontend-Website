import {
    SET_ROLE,
    SET_ROLE_ERROR,
    SET_ROLE_LOADING
} from '../actions/roleAction'

const initialState = {
    data: [],
    loading: true,
    error: false
}

function role (state = initialState, { type, payload }) {
    switch (type) {
    case SET_ROLE:
        return { ...state, data: payload }
    case SET_ROLE_ERROR:
        return { ...state, error: payload }
    case SET_ROLE_LOADING:
        return { ...state, loading: payload }
    default:
        return state
    }
}

export default role