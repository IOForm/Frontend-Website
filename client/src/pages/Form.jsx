import React, { useEffect } from 'react'
import ComposeForm from '../components/ComposeForm'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRole } from '../store/actions/roleAction'
import LoadingPlaceholder from '../components/LoadingPlaceholder'

export default function Form() {
    const dispatch = useDispatch()

    const roleData = useSelector(state => state.role.data)
    const roleLoading = useSelector(state => state.role.loading)
    const roleError = useSelector(state => state.role.error)

    useEffect(() => {
        dispatch(fetchRole())
    }, [])

    if (roleLoading) {
        return <LoadingPlaceholder />
    }

    return (
        <div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Compose Form</p>
                </div>
            </div>
            <div className="mt-12">
                <ComposeForm roleList={roleData} />
            </div>
        </div>
    )
}
