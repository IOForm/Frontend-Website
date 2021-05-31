import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDashboard } from '../store/actions/dashboardAction'

export default function Home() {
    const dispatch = useDispatch()

    const dashboardData = useSelector(state => state.dashboard.data)
    const dashboardLoading = useSelector(state => state.dashboard.loading)
    const dashboardError = useSelector(state => state.dashboard.error)
    
    useEffect(() => {
        dispatch(fetchDashboard())
    }, [])

    return (
        <div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Dashboard</p>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 mr-10 bg-yellow-400">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-white font-sans">0 Actived Forms</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                </div>
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 bg-gray-100">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-gray-800 font-sans">0 Actived Staff</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 mr-10 bg-green-300">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-gray-800 font-sans">0 Completed Forms</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                </div>
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 bg-gray-800">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-white font-sans">0 Actived Roles</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
