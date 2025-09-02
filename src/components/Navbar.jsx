import React, { useState } from 'react';
import { Menu, X, Minus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <p className='bg-gray-700 p-3 text-center py-2 text-white text-lg font-bold font-[roboto]'>
        Contact Sales:{" "}
        <span className='text-yellow-400'>813-160-8262</span>
      </p>

      <div className='bg-gray-900 flex items-center justify-between p-10 space-x-16'>
        <p className='text-white text-xl font-[Edu_NSW_ACT_Cursive]'>GLBP</p>

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
          <li className='relative group'>
            <button onClick={() => setIsLoginOpen(true)} className='bg-yellow-400 text-black font-medium px-6 py-3 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>Login</button>
          </li>
        </ul>

        <button
          className='md:hidden text-white hover:text-purple-950 focus:text-purple-950 active:text-purple-950'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 bg-gray-900 text-white text-lg font-sans p-5'>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Payment Solution</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Products</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Pricing</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Company</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Resources</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Contact Us</a></li>
          <li><a href="#" className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Login</a></li>


          <li><button onClick={() => setIsLoginOpen(true)} className='bg-yellow-400 text-black font-medium px-6 py-4 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>Login</button></li>
        </ul>
      )}

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
          <span className='text-amber-400 hover:underline cursor-pointer'>
            Sign up
          </span>
        </p>
      </div>

      <div className='px-6 mt-8 space-y-5'>
        <div>
          <label className='block mb-2 text-sm font-medium'>Email</label>
          <input
            type='email'
            placeholder='name@company.com'
            className='w-full rounded-lg bg-gray-700 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>Password</label>
          <input
            type='password'
            placeholder=''
            className='w-full rounded-lg bg-gray-700 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
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

      <div className='px-6 mt-6'>
        <button className='w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-medium transition'>
          Sign in to your account
        </button>
      </div>

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
    </nav>
  );
};

export default Navbar;