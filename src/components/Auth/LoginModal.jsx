import React, { useState } from 'react'
import { X } from 'lucide-react'
import { login } from '../../Firebase/authService'


const LoginModal = ({isLoginOpen, setIsLoginOpen, setIsSignUpOpen}) => {
    if (!isLoginOpen) return null

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            alert('Login successful!')
            setIsLoginOpen(false)
        } catch (error) {
            console.error('Error logging in:', error)
            alert(error.message)
        }
    }

    return (
        <>
    {isLoginOpen && (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4'>
    <div className='relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md text-white overflow-y-auto'>
      <button
        onClick={() => setIsLoginOpen(false)}
        className='absolute top-4 right-4 text-gray-400 hover:text-white transition'
      >
        <X className='w-6 h-6' />
      </button>

      <div className='px-6 pt-8 text-center'>
        <h2 className='text-3xl font-bold font-[roboto]'>Welcome back</h2>
        <p className='mt-2 text-gray-300 text-sm'>
          Start your website in seconds. Don’t have an account?{' '}
          <span onClick={() => { setIsLoginOpen(false); setIsSignUpOpen(true); }} className='text-amber-400 hover:underline cursor-pointer'>
            Sign up
          </span>
        </p>
      </div>

      <div className='px-6 mt-8 space-y-5'>
        <div>
          <label className='block mb-2 text-sm font-medium'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='name@company.com'
            className='w-full rounded-lg bg-gray-700 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=''
            className='w-full rounded-lg bg-gray-700 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
      </div>

      <div className='flex items-center justify-between px-6 mt-4 text-sm'>
        <label className='flex items-center space-x-2 cursor-pointer'>
          <input type='checkbox' className='accent-blue-600' />
          <span>Remember me</span>
        </label>
        <a href='#' className='text-blue-400 hover:underline'>
          Forgot password?
        </a>
      </div>

      <form className='px-6 mt-6' onSubmit={handleSubmit}>
        <button
          type='submit'
          className='w-full py-3 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 font-medium transition focus:bg-blue-800 active:bg-blue-900'
        >
          Sign in to your account
        </button>
      </form>

      <div className='flex items-center my-6 px-6'>
        <div className='flex-grow border-t border-gray-700'></div>
        <span className='px-3 text-gray-400 text-sm'>or</span>
        <div className='flex-grow border-t border-gray-700'></div>
      </div>

      <div className='px-6 space-y-3 mb-8'>
        <button className='w-full flex items-center justify-center py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition'>
          <img src='./images/google1.png' alt='Google' className='h-5 mr-2' />
          Continue with Google
        </button>

        <button className='w-full flex items-center justify-center py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition'>
          <img src='./images/apple.png' alt='Apple' className='h-5 mr-2' />
          Continue with Apple
        </button>
      </div>
    </div>
  </div>
            )}
        </>
    )
}

export default LoginModal