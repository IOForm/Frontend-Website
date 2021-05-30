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
            <div>
                {/* <p>{JSON.stringify(dashboardData)}</p> */}
                {/* <div className="flex p-5 space-x-3">
                    <div className="bg-gray-50 p-5 rounded-lg">
                        <p>2 Active Forms</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                        <p>2 Completed Forms</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                        <p>3 Registered Staff</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                        <p>3 Role</p>
                    </div>
                </div> */}
                {/* <p>{JSON.stringify(formData)}</p> */}
                <div className="flex justify-start items-center mt-6 overflow-auto flex-wrap">
                <div class="shadow-lg my-4 mx-4 rounded-2xl w-60 p-4 py-7 bg-white">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-gray-900 rounded-full flex justify-center items-center relative">
                            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p class="text-gray-800 text-xl font-medium mb-4 mt-4">
                            PT. Baja Makmur
                        </p>
                        <div className="bg-yellow-300 p-1 rounded-lg">
                            <p class="text-gray-900 text-center text-xs px-2">
                                Pending
                            </p>
                        </div>
                    </div>
                </div>
                <div class="shadow-lg my-4 mx-4 rounded-2xl w-60 p-4 py-7 bg-white">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-gray-900 rounded-full flex justify-center items-center relative">
                            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p class="text-gray-800 text-xl font-medium mb-4 mt-4">
                            PT. Baja Makmur
                        </p>
                        <div className="bg-yellow-300 p-1 rounded-lg">
                            <p class="text-gray-900 text-center text-xs px-2">
                                Pending
                            </p>
                        </div>
                    </div>
                </div>
                <div class="shadow-lg my-4 mx-4 rounded-2xl w-60 p-4 py-7 bg-white">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-gray-900 rounded-full flex justify-center items-center relative">
                            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p class="text-gray-800 text-xl font-medium mb-4 mt-4">
                            PT. Baja Makmur
                        </p>
                        <div className="bg-yellow-300 p-1 rounded-lg">
                            <p class="text-gray-900 text-center text-xs px-2">
                                Pending
                            </p>
                        </div>
                    </div>
                </div>
                <div class="shadow-lg my-4 mx-4 rounded-2xl w-60 p-4 py-7 bg-white">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-gray-900 rounded-full flex justify-center items-center relative">
                            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p class="text-gray-800 text-xl font-medium mb-4 mt-4">
                            PT. Beton Nusantara
                        </p>
                        <div className="bg-green-300 p-1 rounded-lg">
                            <p class="text-gray-900 text-center text-xs px-2">
                                Approved
                            </p>
                        </div>
                    </div>
                </div>
                <div class="shadow-lg my-4 mx-4 rounded-2xl w-60 p-4 py-7 bg-white">
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-gray-900 rounded-full flex justify-center items-center relative">
                            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p class="text-gray-800 text-xl font-medium mb-4 mt-4">
                            PT. Beton Nusantara
                        </p>
                        <div className="bg-green-300 p-1 rounded-lg">
                            <p class="text-gray-900 text-center text-xs px-2">
                                Approved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
