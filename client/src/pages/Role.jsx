import React from 'react'

export default function Role() {
    return (
        <div className="overflow-auto">
            <div className="flex">
                <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
                    <p className="font-semibold text-2xl">Role</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center">
                <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105">
                    <div class="px-6 pt-4 pb-2 mb-2 text-xl font-bold">
                        <span>Stakeholder</span>
                    </div>
                </div>
                <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105">
                    <div class="px-6 pt-4 pb-2 mb-2 text-xl font-bold">
                        <span>Finance</span>
                    </div>
                </div>
                <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105">
                    <div class="px-6 pt-4 pb-2 mb-2 text-xl font-bold">
                        <span>Head Devisi</span>
                    </div>
                </div>
            </div>
            <div className="relative w-1/2 m-8">
                <div className="border-r-2 border-gray-500 absolute h-full top-0" style={{left: '19px'}}></div>
                <ul className="list-none m-0 p-0">
                    <li className="mb-2">
                        <div className="flex items-center mb-20">
                            <div className="bg-gray-500 rounded-full z-10 h-10 w-10 flex justify-center items-center">
                                <h3 className="text-xl font-bold text-white text-center">1</h3>
                            </div>
                            <div className="flex-1 ml-4 text-2xl font-medium">Stakeholder</div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div className="flex items-center mb-20">
                            <div className="bg-gray-500 rounded-full z-10 h-10 w-10 flex justify-center items-center">
                                <h3 className="text-xl font-bold text-white text-center">2</h3>
                            </div>
                            <div className="flex-1 ml-4 text-2xl font-medium">Finance</div>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div className="flex items-center mb-20">
                            <div className="bg-gray-500 rounded-full z-10 h-10 w-10 flex justify-center items-center">
                                <h3 className="text-xl font-bold text-white text-center">3</h3>
                            </div>
                            <div className="flex-1 ml-4 text-2xl font-medium">Head Devisi</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
