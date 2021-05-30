import React, { useState } from 'react'
import ComposeFormRolesCard from './ComposeFormRolesCard'
import { useDispatch } from 'react-redux'
import { addForm } from '../store/actions/formAction'

export default function ComposeForm({ roleList }) {
    const dispatch = useDispatch()

    const [companyTitle, setCompanyTitle] = useState('')
    const [approvalDocs, setApprovalDocs] = useState('')
    const [approvalList, setApprovalList] = useState([])

    const submitForm = () => {
        const submitFormData = {
            clientName: companyTitle,
            formDetail: approvalDocs,
            approvalList 
        }
        dispatch(addForm(submitFormData))
        sendPushNotification('ExponentPushToken[8ouZI2DmDe3PBM67v2_ViY]')
    }

    const sendPushNotification = async(expoPushToken) => {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'halo',
            body: 'bismillah',
            data: { someData: 'goes here' }
        }

        await fetch('https://exp.host/--/api/v2/push/send', {
            mode: 'no-cors',  
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })

    const handleFileUpload = async (e) => {
        const result = await toBase64(e.target.files[0]).catch(e => Error(e));
        if(result instanceof Error) {
           console.log('Error: ', result.message);
           return;
        }
        setApprovalDocs(result)
    }

    return (
        <div className="flex w-full justify-center">
            <div className="dark:bg-gray-800 bg-white w-full md:w-11/12 px-10 z-50 rounded-2xl">
                <div className="container flex flex-col w-full h-full justify-between">
                    <div>
                        <div className="mt-10 border-b border-gray-400 flex items-center space-x-3 pb-2">
                            <input value={companyTitle} onChange={(e) => setCompanyTitle(e.target.value)} className="w-full text-2xl bg-transparent font-bold pb-2 focus:outline-none placeholder-gray-400" placeholder="Customer Name" type="text" />
                            {
                                approvalDocs ? (
                                    (
                                        <div onClick={() => setApprovalDocs(null)} className="cursor-pointer bg-green-100 hover:bg-red-100 hover:text-red-500 text-green-500 p-2 rounded-lg opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    )
                                ) : (
                                    <label className="bg-gray-100 p-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <input value={approvalDocs} onChange={(e) => handleFileUpload(e)} accept='.pdf' type='file' className="hidden" />
                                    </label>
                                )
                            }
                        </div>
                        <div className="mt-6 mb-12 space-y-4">
                            <div>
                                <p className="text-2xl font-bold text-gray-700">Approvals :</p>
                            </div>
                            {
                                roleList.map(item => <ComposeFormRolesCard key={item.id} item={item} approvalList={approvalList} setApprovalList={setApprovalList} />)
                            }
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="md:flex justify-between w-full py-4 border-t border-gray-400">
                            <div className="mt-4 md:mt-0 flex-1">
                                <button onClick={() => submitForm()} className="w-full text-gray-100 font-bold focus:outline-none py-3 px-6 hover:bg-opacity-70 bg-opacity-100 transition-colors duration-300 bg-yellow-500 rounded-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}