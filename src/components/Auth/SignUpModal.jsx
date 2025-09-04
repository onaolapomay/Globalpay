import React from 'react'
import { X } from 'lucide-react'

const SignUpModal = ({ isSignUpOpen, setIsSignUpOpen, setIsLoginOpen }) => {
  if (!isSignUpOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign up submitted')
    setIsSignUpOpen(false)
  }

  return (
    isSignUpOpen && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4'>
        <div className='relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md text-white overflow-y-auto'>
          <button
            onClick={() => setIsSignUpOpen(false)}
            className='absolute top-4 right-4 text-gray-400 hover:text-white transition'
          >
            <X className='w-6 h-6' />
          </button>

          <div className='px-6 pt-8 text-center'>
            <h2 className='text-3xl font-bold font-[roboto]'>Create an account</h2>
            <p className='mt-2 text-gray-400'>
              Already have an account?{' '}
              <span
                onClick={() => {
                  setIsSignUpOpen(false)
                  setIsLoginOpen(true)
                }}
                className='text-amber-400 hover:underline cursor-pointer'
              >
                Sign in
              </span>
            </p>
          </div>

          <div className='px-6 pb-8'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-medium'>
                  First name
                  <input
                    type='text'
                    placeholder='John'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>

                <label className='block text-sm font-medium mt-4'>
                  Last name
                  <input
                    type='text'
                    placeholder='Doe'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>

                <label className='block text-sm font-medium mt-4'>
                  Email
                  <input
                    type='email'
                    placeholder='john.doe@example.com'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>
              </div>

              <div className='mb-4'>
                <label className='block text-sm font-medium'>
                  Password
                </label>
                <input
                  type='password'
                  className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600'
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default SignUpModal