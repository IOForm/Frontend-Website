import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import BannerLogo from '../assets/img/illustration.svg'
import axios from '../store/actions/axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import IOFormLogo from '../assets/img/ioform-logo-text.png'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

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
        .catch((response) => {
          if(response.data.message === 'fail login') {
            errorAlert('⚠️ email or password wrong!')
          }
        })
    }
  }

  function successAlert() {
    Toast.fire({
      icon: 'success',
      title: `Welcome, admin`
    })
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
        <div className="w-full h-screen bg-gray-700 sm:w-11/12 sm:h-5/6 flex items-center shadow-2xl sm:rounded-3xl">
          <div className="w-2/5 sm:w-3/5 h-full flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <img src={BannerLogo} className="w-2/3 h-2/3 mt-16"/>
            </div>
            {/* <h1 className="text-3xl text-center font-mono font-bold mt-12">IOForm</h1> */}
            {/* <div className="flex mt-4 justify-center items-center">
              <p className="w-1/2 text-center">
                IOform is a proof of concept that is designed to reduce cost and time internally within the organization
              </p>
            </div> */}
          </div>
          <div className="w-3/5 sm:w-2/5 h-full bg-blue-50 flex justify-center items-center sm:rounded-r-3xl flex-wrap">
            <form className="w-3/4"
              onSubmit={isLoginPage ? submitFormLogin : submitFormRegister}
            >
          <div>
            {/* <div className="mx-auto bg-yellow-500 flex">
              <p className="mx-auto text-blue-50 font-extrabold text-2xl">IOForm</p>
            </div> */}
            <img src={IOFormLogo} className="w-32 mx-auto" alt="web-logo" />
          </div>
              <h1 className="text-3xl text-black text-left font-mono font-bold mb-5">
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
              <div className="flex items-center bg-yellow-500 text-white rounded-lg overflow-hidden opacity-100 hover:opacity-75 transition-opacity duration-300">
                  <div className="bg-yellow-600 bg-opacity-70 py-2 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  </div>
                <button className="font-bold py-2 px-4 flex-1" type="submit" >LOGIN</button>
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