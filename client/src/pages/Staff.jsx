import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStaff } from '../store/actions/staffAction'
import StaffCard from '../components/StaffCard'

export default function Staff() {
    const dispatch = useDispatch()

    const staffData = useSelector(state => state.staff.data)
    const staffLoading = useSelector(state => state.staff.loading)
    const staffError = useSelector(state => state.staff.error)

    useEffect(() => {
        dispatch(fetchStaff())
    }, [])

    return (
        <div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Staff</p>
                </div>
            </div>
            <div className="mt-10 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Registered At
                            </th>
                            <th scope="col" className="px-6 py-3 bg text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                staffData.map(item => <StaffCard key={item.id} staffInfo={item} />)
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
