import React from 'react'

const Hero = () => {
  return (
    <section className='w-full bg-gray-900 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-screen mt-30'>

        <div className='p-6 sm:p-8 md:p-12 lg:p-20'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6'>
            Payments built <br /> for your business
          </h1>
          <p className='text-xl font-[roboto] font text-gray-300 mb-8'>
            GlobalPay empowers software platforms, small businesses, and large businesses,
            through simplified, industry-leading integrated payment and recurring billing solutions.
          </p>
          <button className='bg-yellow-400 text-black text-lg font-[roboto] cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition'>
            Get started
          </button>
        </div>

        <div className='w-full h-full'>
          <img
            src='/images/hero.jpg'
            alt='hero'
            className='w-full h-full object-cover'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero