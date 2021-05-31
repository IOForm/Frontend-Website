import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchForms } from '../store/actions/formAction'
import FormHistoryCard from '../components/FormHistoryCard'

export default function History() {
    const dispatch = useDispatch()

    const formData = useSelector(state => state.form.data)
    const formLoading = useSelector(state => state.form.loading)
    const formError = useSelector(state => state.form.error)
    
    useEffect(() => {
        dispatch(fetchForms())
    }, [])

    return (
        <div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">History</p>
                </div>
            </div>
            <div className="my-10">
                <table className="min-w-full table-auto">
                    <thead className="justify-between">
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2 text-left">
                                <span className="text-gray-300">ID</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Company</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Detail</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Attachment</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Request Date</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {
                            formData.map(item => <FormHistoryCard key={item.id} formInfo={item  } />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
