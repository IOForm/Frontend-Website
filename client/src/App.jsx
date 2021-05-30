import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/'>
                        {!localStorage.getItem('access_token') ? <Redirect to="/Login" /> : <Main />}
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
