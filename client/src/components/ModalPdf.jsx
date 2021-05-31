import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

export default function ModalPdf({ setModal, formInfo }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
    },[])

    return (
        <>
            <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
                <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-sm">
                                {formInfo.clientName}
                            </h3>
                            <h5 className="font-semibold text-gray-500 text-sm">
                                {formInfo.formDetail}
                            </h5>
                        </div>
                        <button className="text-black close-modal"
                            onClick={() => setModal(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="red">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-3 w-full flex justify-center items-center flex-wrap overflow-auto">
                        <Document
                            file={formInfo.fileAttachment}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} scale={0.65}/>
                        </Document>
                        <div className="flex justify-center">
                            <button onClick={() => pageNumber != 1 && setPageNumber(pageNumber - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                </svg>
                            </button>
                            <p className="mx-3">Page {pageNumber} of {numPages}</p>
                            <button onClick={() => pageNumber < numPages && setPageNumber(pageNumber + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


