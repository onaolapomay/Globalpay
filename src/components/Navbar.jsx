import React, { useState } from 'react';
import { Menu, X, UserCheck } from 'lucide-react';
import LoginModal from './Auth/LoginModal'
import SignUpModal from './Auth/SignUpModal';
import { handleLogout } from '../../src/Firebase/authService';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../src/Firebase/FirebaseConfig'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe();
  }, [])




  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <p className='bg-gray-700 p-3 text-center py-2 text-white text-lg font-bold font-[roboto]'>
        Contact Sales:{" "}
        <span className='text-yellow-400'>813-160-8262</span>
      </p>

      <div className='bg-gray-900 flex items-center justify-between p-10 space-x-16'>
        <img src='/images/logo.png' alt="Logo"
        className='h-10 w-30' />


        {user ? (
          <>
          <div className='flex space-x-4 '>
            <UserCheck className='fill-current text-amber-400' />
            <p className='text-white text-sm'>Logged in as {user?.email}</p>
            <button className='px-4 py-2 bg-red-600 text-white rounded-lg font-medium transition cursor-pointer' onClick={handleLogout}>Logout</button>
          </div>
          <p className='text-white text-sm'>Not logged in</p>
            
          </>
        ) : (
          
            <button onClick={() => setIsLoginOpen(true)} className='bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>
              Login
            </button>
          
        )}

                {/* Desktop menu */}
        <ul className='hidden md:flex text-white text-lg font-sans space-x-8'>
          <li className='relative group'>
            <a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Payment Solution</a>
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-48'>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>For businesses</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>For software platform</a>
              </li>
            </ul>
          </li>



          <li className='relative group'>
            <a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Products</a>
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-48'>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Global Pay</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Global Connect</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Gblobal Bill</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Global CardX</a>
              </li>
            </ul>
            </li>
          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Pricing</a></li>

          <li className='relative group'>
            <a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Company</a>
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-48'>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>About Us</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Leadership</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Career</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Press</a>
              </li>
            </ul>
          </li>

          <li className='relative group'>
            <a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Resources</a>
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-48'>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Insights</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>API Reference</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Documentation</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Support</a>
              </li>
            </ul>
          </li>

          <li className='relative group'>
            <a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Contact Us</a>
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-48'>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Talk to sales</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Talk to support</a>
              </li>
              <li className='px-6 py-2 hover:bg-gray-300 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className='font-mono'>Partner with us</a>
              </li>
            </ul>
          </li>
          
        </ul>

        <button
          className='md:hidden text-white hover:text-purple-950 focus:text-purple-950 active:text-purple-950'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>



        
          <div className='md:hidden'>
            {user ? (
          <>
            <UserCheck className='fill-current text-amber-400' />
            <p className='text-white text-sm'>Logged in as {user?.email}</p>
            <button className='px-4 py-2 bg-red-600 text-white rounded-lg font-medium transition cursor-pointer' onClick={handleLogout}>Logout</button>
          
          </>
        ) : (
          <div className='md:hidden'>
            <p className='text-white text-sm'>Not logged in</p>
            <button onClick={() => setIsLoginOpen(true)} className='bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>
              Login
            </button>
          </div>
          
        )}
        </div>
      {/* smaller screen menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 bg-gray-900 text-white text-lg font-sans p-5'>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Payment Solution</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Products</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Pricing</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Company</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Resources</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Contact Us</a></li>


          <li>
          
          </li>
        </ul>
      )}
      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} setIsSignUpOpen={setIsSignUpOpen} />
      <SignUpModal isSignUpOpen={isSignUpOpen} setIsSignUpOpen={setIsSignUpOpen} setIsLoginOpen={setIsLoginOpen} />
    </nav>
  );
};

export default Navbar;