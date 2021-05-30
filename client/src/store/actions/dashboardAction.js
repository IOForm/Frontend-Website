import axios from './axios'

export const SET_DASHBOARD = 'dashboard/setData'
export const SET_DASHBOARD_LOADING = 'dashboard/setLoading'
export const SET_DASHBOARD_ERROR = 'dashboard/setError'

export function fetchDashboard() {
    return function(dispatch) {
        dispatch(setDashboardLoading(true))
        axios('/admin/dashboard')
            .then(({ data }) => dispatch(setDashboardData(data)))
            .catch(err => dispatch(setDashboardError(err)))
            .finally(() => dispatch(setDashboardLoading(false)))
    }
}

export function setDashboardData(payload) {
    return { type: SET_DASHBOARD, payload }
}

export function setDashboardLoading(payload) {
    return { type: SET_DASHBOARD_LOADING, payload }
}

export function setDashboardError(payload) {
    return { type: SET_DASHBOARD_ERROR, payload }
}