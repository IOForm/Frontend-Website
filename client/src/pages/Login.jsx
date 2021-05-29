import React, { useState } from 'react'
import BannerLogo from '../assets/img/banner.svg'


function Login() {
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: ''
  })

  function handleChangeLogin(e) {
    const value = e.target.value
    setInputLogin({
      ...inputLogin, [e.target.name]: value
    })
  }

  function submitForm(e) {
    e.preventDefault()
  }

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-gray-800">
        <div className="w-full h-screen bg-white sm:w-11/12 sm:h-5/6 flex items-center shadow-2xl sm:rounded-3xl">
          <div className="w-2/5 sm:w-3/5 h-full flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <img src={BannerLogo} className="w-2/3 h-2/3 mt-32"/>
            </div>
            <h1 className="text-3xl text-center font-mono font-bold mt-12">IOForm</h1>
          </div>
          <div className="w-3/5 sm:w-2/5 h-full bg-blue-100 flex justify-center items-center sm:rounded-r-3xl">
            <form className="w-3/4"
              onSubmit={submitForm}
            >
              <h1 className="text-3xl text-black text-center font-mono font-bold mb-10">
                Login
              </h1>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"
                  name="email"
                  onChange={handleChangeLogin}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******"
                  name="password"
                  onChange={handleChangeLogin}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login