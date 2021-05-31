import axios from './axios'

export const SET_ROLE = 'role/setData'
export const SET_ROLE_LOADING = 'role/setLoading'
export const SET_ROLE_ERROR = 'role/setError'

export function fetchRole() {
    return function(dispatch) {
        dispatch(setRoleLoading(true))
        axios('/role', {
            headers: {
                access_token: localStorage.access_token
            }
        })
            .then(({ data }) => dispatch(setRoleData(data)))
            .catch(err => dispatch(setRoleError(err)))
            .finally(() => dispatch(setRoleLoading(false)))
    }
}

export function setRoleData(payload) {
    return { type: SET_ROLE, payload }
}

export function setRoleLoading(payload) {
    return { type: SET_ROLE_LOADING, payload }
}

export function setRoleError(payload) {
    return { type: SET_ROLE_ERROR, payload }
}