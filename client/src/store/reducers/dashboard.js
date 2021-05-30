import {
    SET_DASHBOARD,
    SET_DASHBOARD_ERROR,
    SET_DASHBOARD_LOADING
} from '../actions/dashboardAction'

const initialState = {
    data: [],
    loading: true,
    error: false
}

function dashboard (state = initialState, { type, payload }) {
    switch (type) {
    case SET_DASHBOARD:
        return { ...state, data: payload }
    case SET_DASHBOARD_ERROR:
        return { ...state, error: payload }
    case SET_DASHBOARD_LOADING:
        return { ...state, loading: payload }
    default:
        return state
    }
}

export default dashboard