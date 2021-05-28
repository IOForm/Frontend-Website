import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

export default function App() {
    return (
        <div className="flex">
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
