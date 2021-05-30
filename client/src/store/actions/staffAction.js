import axios from './axios'

export const SET_STAFF = 'staff/setData'
export const SET_STAFF_LOADING = 'staff/setLoading'
export const SET_STAFF_ERROR = 'staff/setError'

export function fetchStaff() {
    return function(dispatch) {
        dispatch(setStaffLoading(true))
        axios('/admin/staff')
            .then(({ data }) => dispatch(setStaffData(data)))
            .catch(err => dispatch(setStaffError(err)))
            .finally(() => dispatch(setStaffLoading(false)))
    }
}

// export function addForm(data) {
//     return function(dispatch) {
//         axios.post('/staff', data)
//             .then(() => console.log('posted'))
//             .catch((err) => console.log(err))
//     }
// }

export function setStaffData(payload) {
    return { type: SET_STAFF, payload }
}

export function setStaffLoading(payload) {
    return { type: SET_STAFF_LOADING, payload }
}

export function setStaffError(payload) {
    return { type: SET_STAFF_ERROR, payload }
}