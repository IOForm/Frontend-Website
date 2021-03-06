import React, { useState } from 'react'
import ComposeFormRolesCard from './ComposeFormRolesCard'
import { useDispatch } from 'react-redux'
import { addForm } from '../store/actions/formAction'
import ModalPdf from './ModalPdf'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  })

export default function ComposeForm({ roleList }) {
    const dispatch = useDispatch()

    const [companyTitle, setCompanyTitle] = useState('')
    const [formDetail, setFormDetail] = useState('')
    const [approvalDocs, setApprovalDocs] = useState('')
    const [approvalList, setApprovalList] = useState([])
    const [modal, setModal] = useState(false)

    function openModal(e) {
        e.preventDefault()
        setModal(true)
    }

    const dataForPdf = {
        clientName: companyTitle,
        formDetail: formDetail,
        fileAttachment: approvalDocs,
    }

    const submitForm = () => {
        const submitFormData = {
            clientName: companyTitle,
            formDetail: formDetail,
            fileAttachment: approvalDocs,
            approvalList: approvalList.sort((a, b) => a - b)
        }

        let errorMsg = []
        for(let key in submitFormData) {
            if(key === 'clientName' && !submitFormData.clientName) {
                errorMsg.push('⚠️ customer name must be required!')
            } else if (key === 'formDetail' && !submitFormData.formDetail) {
                errorMsg.push('⚠️ form detail must be required!')
            } else if (key === 'fileAttachment' && !submitFormData.fileAttachment) {
                errorMsg.push('⚠️ pdf attachment must be required!')
            } else if (key === 'approvalList' && !submitFormData.approvalList.length) {
                errorMsg.push('⚠️ approvalList must be required!')
            }
        }
        
        if(errorMsg.length) {
            errorMsg.map((msg) => errorAlert(msg))
        } else {
            dispatch(addForm(submitFormData))
            successAlert()
            clearState()
            sendPushNotification()
        }
    }

    function errorAlert(msg) {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) 
    }

    function successAlert() {
        Toast.fire({
            icon: 'success',
            title: `Form Submited`
        })
    }

    function clearState() {
        setCompanyTitle('')
        setFormDetail('')
        setApprovalDocs('')
        setApprovalList([])
    }

    const sendPushNotification = async(expoPushToken) => {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'New Approval Request',
            body: 'You receieved new approval request',
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
        <>  
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex w-full justify-center">
                <div className="dark:bg-gray-800 bg-white w-full md:w-11/12 px-10 z-50 rounded-2xl">
                    <div className="container flex flex-col w-full h-full justify-between">
                        <div>
                            <div className="mt-10 border-b border-gray-400 flex items-center space-x-3 pb-2">
                                <input value={companyTitle} onChange={(e) => setCompanyTitle(e.target.value)} className="w-full text-gray-700 text-2xl bg-transparent font-bold pb-2 focus:outline-none placeholder-gray-400" placeholder="Customer Name" type="text" />
                            </div>
                            <div className="border-b border-gray-400 mt-5 flex pb-2">
                                <input value={formDetail} onChange={(e) => setFormDetail(e.target.value)} maxLength={50} className="w-full text-xl text-gray-500 bg-transparent font-bold pb-2 focus:outline-none placeholder-gray-400" placeholder="Additional Detail" type="text" />
                                {
                                    approvalDocs ? (
                                        (
                                            <div onClick={() => setApprovalDocs(null)} className="cursor-pointer p-2 bg-green-100 hover:bg-red-100 hover:text-red-500 text-green-500 rounded-lg opacity-100">
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
                            <div className="w-full flex justify-between items-start">
                                <div className="mt-6 mb-12 space-y-4">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-700">Approvals :</p>
                                    </div>
                                    <div className="flex space-x-3">
                                        {
                                            roleList.map(item => <ComposeFormRolesCard key={item.id} item={item} approvalList={approvalList} setApprovalList={setApprovalList} />)
                                        }
                                    </div>
                                </div>
                                <div className="mt-7">
                                    {
                                        approvalDocs && (
                                            <button onClick={(e) => openModal(e)} className="bg-gray-800 p-1 px-3 flex rounded-lg focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                <a className="text-white">
                                                    View Attachment
                                                </a>
                                            </button>
                                        )
                                    }
                                    {
                                        modal && (
                                            <ModalPdf setModal={setModal} formInfo={dataForPdf}/>
                                        )
                                    }
                                </div>
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
        </>
    )
}