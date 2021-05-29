import React from 'react'

export default function ComposeFormRolesCard({ item, approvalList, setApprovalList }) {
    const removeFromList = () => {
        const fileteredList = approvalList.filter(approval => approval !== item.id)
        setApprovalList(fileteredList)
    }

    const addToList = () => {
        setApprovalList(approvalList.concat(item.id))
    }

    return (
        <div className="flex">
            {
                approvalList.includes(item.id) ? (
                    <div onClick={() => removeFromList()} className="bg-gray-100 hover:shadow-lg transition duration-500 cursor-pointer text-gray-500 p-3 rounded-lg flex space-x-3">
                        <div className="bg-blue-500 rounded-lg border-blue-200 border-2 h-6 w-6 justify-center items-center transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                        <p className="font-semibold">{item.name}</p>
                    </div>
                ) : (
                    <div onClick={() => addToList()} className="bg-gray-100 hover:shadow-lg opacity-70 transition duration-500 cursor-pointer text-gray-500 p-3 rounded-lg flex space-x-3">
                        <div className="bg-gray-50 rounded-lg border-gray-200 border-2 h-6 w-6 justify-center items-center transition duration-300">
                        </div>
                        <p className="font-semibold">{item.name}</p>
                    </div>
                )
            }
        </div>
    )
}
