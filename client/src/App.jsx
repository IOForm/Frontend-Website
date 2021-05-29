import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
