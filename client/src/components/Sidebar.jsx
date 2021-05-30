import React from 'react'
import Logo from '../assets/logo.png'
import { useHistory, useLocation } from 'react-router-dom'
export default function Sidebar() {
    const navigation = useHistory()
    const location = useLocation()

    const logout = () => {
        console.log('Clear localStorage')
        navigation.push('/login')
    }

    return (
        <div className="h-full space-y-5 justify-between">
            <div className="justify-center flex p-5">
                <img src={Logo} className="rounded-full w-20" alt='ioForm' />
            </div>
            <div className="space-y-5">
                <div onClick={() => navigation.push('/')} className={
                    location.pathname === "/" ? (
                        "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
                    ) : (
                        "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
                    )
                }>
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <p className="font-semibold text-xl">Dashboard</p>
                    </div>
                </div>
                <div onClick={() => navigation.push('/form')} className={
                    location.pathname === "/form" ? (
                        "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
                    ) : (
                        "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
                    )
                }>
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <p className="font-semibold text-xl">Add Form</p>
                    </div>
                </div>
                <div onClick={() => navigation.push('/staff')} className={
                    location.pathname === "/staff" ? (
                        "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
                    ) : (
                        "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
                    )
                }>
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="font-semibold text-xl">Staff</p>
                    </div>
                </div>
                <div onClick={() => navigation.push('/role')} className={
                    location.pathname === "/role" ? (
                        "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
                    ) : (
                        "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
                    )
                }>
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <p className="font-semibold text-xl">Role</p>
                    </div>
                </div>
                <div onClick={() => navigation.push('/history')} className={
                    location.pathname === "/history" ? (
                        "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
                    ) : (
                        "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
                    )
                }>
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <p className="font-semibold text-xl">History</p>
                    </div>
                </div>
                <div onClick={() => logout()} className="text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500">
                    <div className="flex space-x-3 p-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <p className="font-semibold text-xl">Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
