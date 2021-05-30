import React from 'react'

export default function StaffCard({ staffInfo }) {
    return (
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
            {/* <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
            </div> */}
            <div className="">
                <div className="text-sm font-medium text-gray-900">
                {staffInfo.name}
                </div>
                <div className="text-sm text-gray-500">
                {staffInfo.email}
                </div>
            </div>
            </div>
        </td>
        {/* <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
            <div className="text-sm text-gray-500">Optimization</div>
        </td> */}
        <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {staffInfo.Role.name}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
            {staffInfo.createdAt.split('T')[0]}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-3 flex items-center justify-center">
            <div className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                <a href="/#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </div>
            <a href="/#" className="text-red-600 hover:text-red-900">Delete</a>
        </td>
        </tr>
    )
}
