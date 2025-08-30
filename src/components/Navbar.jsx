import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <ul className='absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg'>
              <li className='px-4 py-2 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className=''>Sub-item 1</a>
              </li>
              <li className='px-4 py-2 hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>
                <a href='#' className=''>Sub-item 2</a>
              </li>
            </ul>
          </li>



          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Products</a></li>
          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Pricing</a></li>
          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Company</a></li>
          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Resources</a></li>
          <li><a href='#' className='hover:text-amber-700 focus:text-amber-700 active:text-amber-900'>Contact Us</a></li>
          <li><a href='#' className='hover:text-amber-700'>Login</a></li>
          <li className='bg-yellow-400 text-black font-medium px-6 py-2 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>
            <a href="#">Contact Sales</a>
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
          <li className='bg-yellow-400 text-black font-medium px-6 py-2 rounded-xl hover:bg-yellow-200 focus:text-yellow-200 active:text-yellow-600 cursor-pointer'>
            <a href="#">Contact Sales</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;