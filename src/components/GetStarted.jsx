import React, { useState } from 'react';

const GetStarted = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;


  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  }



  return (
    <section className='w-full bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-screen mt-5'>
        <div className='p-6 sm:p-8 md:p-12 lg:p-20'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[roboto] font-semibold leading-tight mb-6'>
            Turn transactions into experiences with a global leader in payment processing, offering:
          </h1>
          <ol className='list-disc list-inside text-lg sm:text-xl md:text-2xl leading-relaxed space-y-4 font-[roboto] mt-4'>
            <li>A simpler, smarter way to process payments</li>
            <li>Live reps available <span className='text-black font-bold'>NOW</span> to take your phone call</li>
            <li>Accounts tailored to your specific needs</li>
            <li>A team committed to the success of your business</li>
            <li>Top of the line merchant processing solutions</li>
          </ol>
        </div>

        <div className='px-6 sm:px-8 md:px-12 lg:px-20 shadow-2xl rounded-lg py-10'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-[roboto] font-semibold leading-tight mb-8'>
            Let's get started
          </h1>
          <div>
            <p className='text-lg sm:text-xl md:text-2xl mb-2 font-mono'>Monthly Processing Volume *</p>
            <div
              className='inline-flex w-full justify-between items-center rounded-md border-2 border-blue-800 px-4 py-3 text-lg font-semibold text-black cursor-pointer hover:bg-blue-50 transition'
              onClick={() => setOpen(!open)}
            >
              <span>Monthly Processing Volume</span>
              <svg
                viewBox='0 0 20 20' fill='currentColor'
                className={`w-6 h-6 text-gray-600 transform transition-transform ${open ? 'rotate-180' : ''}`}
              >
                <path
                  d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z' clipRule='evenodd' fillRule='evenodd'
                />
              </svg>
            </div>
            {open && (
              <div className='mt-2 w-full rounded-md bg-gray-100 shadow-md border border-gray-200'>
                <div className='py-2'>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded'>$0 - $5,000</a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded'>$5,001 - $20,000</a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded'>$20,001+</a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded'>$20,001+</a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded'>
                    New Business
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className='mt-5'>
            <p className='text-lg sm:text-xl md:text-2xl mb-2 font-mono'>Business Name *</p>
            <form action="">
              <input type="text" className='border border-gray-300 rounded-md p-3 w-full' />
            </form>
          </div>
           <div className='mt-5'>
            <p className='text-lg sm:text-xl md:text-2xl mb-2 font-mono'>First Name *</p>
            <form action="">
              <input type="text" className='border border-gray-300 rounded-md p-3 w-full' />
            </form>
          </div>
           <div className='mt-5'>
            <p className='text-lg sm:text-xl md:text-2xl mb-2 font-mono'>Last Name *</p>
            <form action="">
              <input type="text" className='border border-gray-300 rounded-md p-3 w-full' />
            </form>
          </div>

          <div className='mt-5'>
                <button className='bg-indigo-600 text-white font-[roboto] text-lg py-4 px-4 hover:bg-black transition duration-400 rounded-md'>
                    Next step
                </button>
                <p className='pt-15'>steps</p>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;