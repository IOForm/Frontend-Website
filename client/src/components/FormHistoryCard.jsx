import React, { useState } from 'react'
import ModalPdf from '../components/ModalPdf'

export default function FormHistoryCard({ formInfo }) {
    const [modal, setModal] = useState(false)

    function openModal(e) {
        e.preventDefault()
        setModal(true)
    }

    return (
        <>
            {
                modal && (
                    <ModalPdf setModal={setModal} formInfo={formInfo}/>
                )
            }
            <tr className="bg-white border-4 border-gray-200">
                <td className="px-4 py-2 text-left">
                    <span>{ formInfo.id }</span>
                </td>
                <td className="px-16 text-left py-2">
                    <span>{formInfo.clientName}</span>
                </td>
                <td className="px-16 text-left py-2">
                    <p>{formInfo.formDetail}</p>
                </td>
                <td className="px-16 text-center py-2">
                    <a href="/" onClick={(e) => openModal(e)}>
                        Review
                    </a>
                </td>
                <td className="px-16 text-center py-2">
                    <span>{formInfo.createdAt.split('T')[0]}</span>
                </td>
                <td className="px-8 py-2 flex justify-center items-center">
                    {
                        formInfo.formComplete ? (
                            <div className="bg-green-100 px-4 py-2 rounded-lg uppercase w-full text-center">
                                <p className="text-green-500 font-bold">Completed</p>
                            </div>
                            ) : (
                            <div className="bg-yellow-100 px-4 py-2 rounded-lg uppercase w-full text-center">
                                <p className="text-yellow-500 font-bold">Pending</p>
                            </div>
                            )
                    }
                </td>
            </tr>
        </>
    )
}
