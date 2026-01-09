import React, { useState } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../AuthContext'


const SignUpModal = ({ isSignUpOpen, setIsSignUpOpen, setIsLoginOpen }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const { register } = useAuth()
  const [showPassword, setShowPassword] = useState(false)


  const CheckPasswordStrength = (password) => {
        let strength = 0

        if (password.length >= 8) strength++
        if (/[A-Z]/.test(password)) strength++
        if (/[a-z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++


       return strength
  }

  if (!isSignUpOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (CheckPasswordStrength(password) < 6) {
        alert('Password is too weak! Please choose a stronger password.')
        return
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
const name = `${firstname} ${lastname}`.trim()

    try {
      const newUser = await register(email, password, name)
      console.log('Registered user', newUser)
      alert('Account created successfully!')
      setIsSignUpOpen(false)
      setIsLoginOpen(true)
    } catch (error) {
      console.error('Error signing up:', error)
      alert(error.message)
    }


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
            <h2 className='text-3xl font-bold font-[roboto]' >Create an account</h2>
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
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder='John'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>

                <label className='block text-sm font-medium mt-4'>
                  Last name
                  <input
                    type='text'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder='Doe'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>

                <label className='block text-sm font-medium mt-4'>
                  Email
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='john.doe@example.com'
                    className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    required
                  />
                </label>
              </div>

              <div className='relative mb-4'>
                <label className='block text-sm font-medium'>
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value
                    setPassword(value)
                    setPasswordStrength(CheckPasswordStrength(value))
                  }}
                  placeholder='Your password'
                  className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  required
                />
                <button type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-8.5 text-white'>
                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                </button>
              </div>

              <div className='mt-2'>
                    <div className='flex gap-1'>
                        <div className={`h-1 flex-1 rounded ${passwordStrength >= 1 ? 'bg-red-700' : 'bg-gray-300'}`}></div>
                        <div className={`h-1 flex-1 rounded ${passwordStrength >=2 ? 'bg-yellow-400' : 'bg-gray-400'}`}></div>
                        <div className={`h-1 flex-1 rounded ${passwordStrength >=3 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <div className={`h-1 flex-1 rounded ${passwordStrength >=4 ? 'bg-green-700' : 'bg-gray-300'}`}></div>
                    </div>

                    <p className='text-m font-bold font-mono  mt-2 text-gray-600'>
                        {passwordStrength === 0 && 'too weak'}
                        {passwordStrength === 1 && 'Weak'}
                        {passwordStrength === 2 && 'fair'}
                        {passwordStrength === 3 && 'better'}
                        {passwordStrength >= 4 && 'yes! Strong'}

                    </p>
                </div>

              <div className='relative mb-4'>
                <label className='block text-sm font-medium'>
                  Re-enter Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='Your password'
                  className='mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  required
                />
                <button type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-8.5 text-white'>
                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                </button>
              </div>

              <button
                type='submit'
                className='w-full bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl cursor-pointer hover:bg-yellow-500 focus:text-yellow-500 active:text-yellow-600'
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