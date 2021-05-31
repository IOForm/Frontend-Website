import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRole } from '../store/actions/roleAction'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import LoadingPlaceholder from '../components/LoadingPlaceholder'

const initialRoles = [
    {
        id: 1,
        title: 'Stakeholder' 
    },
    {
        id: 2,
        title: 'Finance' 
    },
    {
        id: 3,
        title: 'Head of Devision' 
    }
]

export default function Role() {
    const dispatch = useDispatch()
    const roleData = useSelector(state => state.role.data)
    const roleLoading = useSelector(state => state.role.loading)
    const roleError = useSelector(state => state.role.error)
    const [roles, setRoles] = useState(initialRoles);

    useEffect(() => {
        dispatch(fetchRole())
    }, [])

    if (roleLoading) {
        return <LoadingPlaceholder />
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(roles);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setRoles(items);
    }

    return (
        <div className="space-y-8">
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Role</p>
                </div>
            </div>
            <div className="flex space-x-3 mt-10 mb-10">
                {
                    roleData.map(role => {
                        return (
                            <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105">
                                <div className="px-6 pt-4 pb-2 mb-2 text-xl font-bold">
                                    <span>{role.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="relative w-1/2 m-8">
                <div className="border-r-4 border-gray-500 absolute h-full top-0" style={{left: '22px'}}></div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="roles">
                    {(provided) => (
                        <ul className="list-none m-0 p-0" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                roles.map(({id, title}, idx) => {
                                    return (
                                        <Draggable key={id} draggableId={id.toString()} index={idx}>
                                            {(provided) => (
                                                <li className="mb-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="flex items-center mb-20">
                                                        <div className="bg-gray-800 rounded-full z-10 w-12 h-12 flex justify-center items-center">
                                                            <h3 className="text-xl font-bold text-white text-center">
                                                                {idx+1}
                                                            </h3>
                                                        </div>
                                                        <div className="w-60 py-2 px-3 ml-4 bg-gray-800 rounded-lg text-white text-2xl font-medium">
                                                            {title}
                                                        </div>
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                        {provided.placeholder}
                        </ul>
                    )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg cursor-pointer">
                    <p className="font-semibold text-xl">Save Changes</p>
                </div>
            </div>
        </div>
    )
}
