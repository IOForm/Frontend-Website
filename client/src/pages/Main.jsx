import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import Form from '../pages/Form'
import Staff from '../pages/Staff'
import Role from '../pages/Role'
import History from '../pages/History'

export default function Main() {
    const history = useHistory()

    useEffect(() => {
        if(!localStorage.access_token) {
        history.push('/login')
        }
    }, [])

    return (
        <div className="flex h-screen bg-gray-800">
                <Sidebar />
                <div className="flex-1 px-12 py-6">
                    <div className="bg-blue-100 h-full w-full rounded-3xl p-10 overflow-auto">
                        <Switch>
                            <Route exact path='/'>
                                <Dashboard />
                            </Route>
                            <Route path='/form'>
                                <Form />
                            </Route>
                            <Route path='/staff'>
                                <Staff />
                            </Route>
                            <Route path='/role'>
                                <Role />
                            </Route>
                            <Route path='/history'>
                                <History />
                            </Route>
                        </Switch>
                    </div>
                </div>
        </div>
    )
}
