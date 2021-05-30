import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import form from './reducers/form'
import role from './reducers/role'
import staff from './reducers/staff'

const reducer = combineReducers({
    form,
    role,
    staff
})

const store = createStore(reducer, applyMiddleware(ReduxThunk))

export default store