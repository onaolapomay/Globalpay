import React from 'react'

const Navbar = () => {
  return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <p className='bg-gray-700 p-3 text-center py-2 text-white text-lg top-0 font-bold font-[roboto]'>Contact Sales: <span className='text-yellow-400'>813-160-8262</span></p>

            <div className='bg-gray-900 flex  p-5'>
                <p className='text-white text-xl font-[Edu_NSW_ACT_Cursive]'>GLBP</p>
                <ul className='flex text-white text-lg font-sans space-x-18 mx-auto'>
                    <li>Payment Solution</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <li className='bg-yellow-400 text-black font-medium px-6 py-2 rounded-xl  hover:bg-yellow-200 cursor-pointer'>Contact Sales</li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
