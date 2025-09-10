import React, { useState, useEffect } from 'react'
import { Menu, X, UserCheck } from 'lucide-react'
import LoginModal from './Auth/LoginModal'
import SignUpModal from './Auth/SignUpModal'
import { handleLogout } from '../../src/Firebase/authService'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../src/Firebase/FirebaseConfig'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <p className='bg-gray-700 p-3 text-center py-2 text-white text-lg font-bold font-[roboto]'>
        Contact Sales: <span className='text-yellow-400'>813-160-8262</span>
      </p>

      <div className='bg-gray-900 flex items-center justify-between p-4 md:p-10'>
        <img src='/images/logo.png' alt='Logo' className='h-10' />

        <div className='hidden md:flex items-center space-x-8'>
          <ul className='flex items-center space-x-8 text-white text-lg'>
            <li className='relative group'>
              <a href='#' className='hover:text-amber-700'>Payment Solution</a>
            </li>
            <li className='relative group'>
              <a href='#' className='hover:text-amber-700'>Products</a>
            </li>
            <li><a href='#' className='hover:text-amber-700'>Pricing</a></li>
            <li><a href='#' className='hover:text-amber-700'>Company</a></li>
            <li><a href='#' className='hover:text-amber-700'>Resources</a></li>
            <li><a href='#' className='hover:text-amber-700'>Contact Us</a></li>
          </ul>

          {user ? (
            <div className='flex items-center space-x-4'>
              <p className='text-white text-sm flex items-center gap-2'>
                {user?.email}
                <UserCheck className='text-amber-400' />
              </p>
              <button
                onClick={handleLogout}
                className='px-4 py-2 bg-red-600 text-white rounded-lg font-medium transition'
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setIsLoginOpen(true)}
                className='bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200'
              >
                Login
              </button>
            </div>
          )}
        </div>

        <div className='flex items-center gap-3 md:hidden'>
          {user ? (
            <div className='text-white text-sm flex items-center gap-2 truncate max-w-[140px]'>
              <span className='truncate'>{user?.email}</span>
              <UserCheck className='text-amber-400' />
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className='bg-yellow-400 text-black font-medium px-3 py-2 rounded-lg text-sm'
            >
              Login
            </button>
          )}

          <button
            className='text-white'
            onClick={() => setIsOpen((v) => !v)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 bg-gray-900 text-white text-lg font-sans p-5'>
          <li><a href='#' className='hover:text-amber-700'>Payment Solution</a></li>
          <li><a href='#' className='hover:text-amber-700'>Products</a></li>
          <li><a href='#' className='hover:text-amber-700'>Pricing</a></li>
          <li><a href='#' className='hover:text-amber-700'>Company</a></li>
          <li><a href='#' className='hover:text-amber-700'>Resources</a></li>
          <li><a href='#' className='hover:text-amber-700'>Contact Us</a></li>

          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout()
                  setIsOpen(false)
                }}
                className='w-full bg-red-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-red-700'
              >
                Logout
              </button>
            ) : (
              <div className='flex flex-col gap-2'>
                <button
                  onClick={() => {
                    setIsSignUpOpen(true)
                    setIsOpen(false)
                  }}
                  className='w-full bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200'
                >
                  Sign up
                </button>
              </div>
            )}
          </li>
        </ul>
      )}

      <LoginModal
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        setIsSignUpOpen={setIsSignUpOpen}
      />
      <SignUpModal
        isSignUpOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
    </nav>
  )
}

export default Navbar