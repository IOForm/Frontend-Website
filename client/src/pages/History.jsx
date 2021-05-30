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
                        {/* <tr className="bg-white border-4 border-gray-200">
                            <td className="px-16 text-center py-2">
                                <span>Lakers</span>
                            </td>
                            <td className="px-16 text-center py-2">
                                <span>Preview</span>
                            </td>
                            <td className="px-16 text-center py-2">
                                <span>Review</span>
                            </td>
                            <td className="px-16 py-2 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="green">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
