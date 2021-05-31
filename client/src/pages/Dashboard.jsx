import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDashboard } from '../store/actions/dashboardAction'
import LoadingPlaceholder from '../components/LoadingPlaceholder'

export default function Home() {
    const dispatch = useDispatch()

    const dashboardData = useSelector(state => state.dashboard.data)
    const dashboardLoading = useSelector(state => state.dashboard.loading)
    const dashboardError = useSelector(state => state.dashboard.error)
    
    useEffect(() => {
        dispatch(fetchDashboard())
    }, [])

    if (dashboardLoading) {
        return <LoadingPlaceholder />
    }

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
                        <h3 className="text-3xl text-white font-sans font-semibold">{dashboardData.formData.filter(item => !item.formComplete).length} Active Forms</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 opacity-70" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                </div>
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 bg-gray-100">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-gray-800 font-sans font-semibold">{dashboardData.staffData.length} Registered Staff</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 mr-10 bg-green-300">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-gray-800 font-sans font-semibold">{dashboardData.formData.filter(item => item.formComplete).length} Completed Forms</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                </div>
                <div className="flex-grow shadow-lg rounded-2xl w-1/2 bg-gray-800">
                    <div className="flex justify-between items-center py-3 px-10">
                        <h3 className="text-3xl text-white font-sans font-semibold">{dashboardData.roleData.length} Registered Roles</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 opacity-70" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
