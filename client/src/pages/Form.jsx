import React from 'react'
import ComposeForm from '../components/ComposeForm'

export default function Form() {
    return (
        <div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Compose Form</p>
                </div>
            </div>
            <div className="mt-12">
                <ComposeForm />
            </div>
        </div>
    )
}
