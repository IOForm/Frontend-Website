import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import BannerLogo from '../assets/img/banner.svg'
import axios from '../store/actions/axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const history = useHistory()

  useEffect(() => {
      if(localStorage.access_token) {
      history.push('/')
      }
  }, [])

  const [isLoginPage, setIsLoginPage] = useState(true)
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: ''
  })
  const [inputRegister, setInputRegister] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChangeLogin(e) {
    const value = e.target.value
    setInputLogin({
      ...inputLogin, [e.target.name]: value
    })
  }

  function handleChangeRegister(e) {
    const value = e.target.value
    setInputRegister({
      ...inputRegister, [e.target.name]: value
    })
  }

  function submitFormLogin(e) {
    e.preventDefault()
    let errorMsg = []
    for(let key in inputLogin) {
      if(key === 'email' && !inputLogin.email) {
        errorMsg.push('⚠️ email must be required!')
      } else if (key === 'password' && !inputLogin.password) {
        errorMsg.push('⚠️ password must be required!')
      }
    }

    if(errorMsg.length) {
      errorMsg.map((msg) => errorAlert(msg))
    } else {
      axios.post('/login', inputLogin)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          successAlert()
          history.push('/')
        })
        .catch(({ response }) => {
          if(response.data.message === 'fail login') {
            errorAlert('⚠️ email or password wrong!')
          }
        })
    }
  }

  function successAlert() {
    Swal.fire(
      'Welcome!',
      'IOForm dashboard',
      'success'
    )
  }

  function submitFormRegister(e) {
    e.preventDefault()

  }

  function errorAlert(msg) {
    toast.error(msg, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }) 
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="h-screen w-full flex justify-center items-center bg-gray-800">
        <div className="w-full h-screen bg-white sm:w-11/12 sm:h-5/6 flex items-center shadow-2xl sm:rounded-3xl">
          <div className="w-2/5 sm:w-3/5 h-full flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <img src={BannerLogo} className="w-2/3 h-2/3 mt-24"/>
            </div>
            <h1 className="text-3xl text-center font-mono font-bold mt-12">IOForm</h1>
            <div className="flex mt-4 justify-center items-center">
              <p className="w-1/2 text-center">
                IOform is a proof of concept that is designed to reduce cost and time internally within the organization
              </p>
            </div>
          </div>
          <div className="w-3/5 sm:w-2/5 h-full bg-blue-100 flex justify-center items-center sm:rounded-r-3xl flex-wrap">
            <form className="w-3/4"
              onSubmit={isLoginPage ? submitFormLogin : submitFormRegister}
            >
              <h1 className="text-3xl text-black text-center font-mono font-bold mb-10">
                { isLoginPage ? 'Login' : 'Register' }
              </h1>
              {
                !isLoginPage && (
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username"
                      name="username" onChange={handleChangeRegister}
                      value={inputRegister.username}
                    />
                  </div>
                )
              }
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"
                  name="email"
                  onChange={isLoginPage ? handleChangeLogin: handleChangeRegister}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******"
                  name="password"
                  onChange={isLoginPage ? handleChangeLogin: handleChangeRegister}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Submit
                </button>
              </div>
              <div className="mt-3 flex">
                <p className="text-xs">
                  {
                    isLoginPage ? 'Not registered yet?' : 'Already have an account?'
                  }
                </p>
                <p className="text-xs ml-2 text-blue-500"
                  style={{cursor: 'pointer'}}
                  onClick={() => isLoginPage ? setIsLoginPage(false) : setIsLoginPage(true)}
                >
                  { isLoginPage ? 'create an account' : 'please login here' }
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login