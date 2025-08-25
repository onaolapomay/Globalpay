import React from 'react'

const Industries = () => {
    return (
        <div className='mt-10'>
            <p className='text-center text-6xl font-black text-gray-700 tracking-wider font-[roboto]'>Industries Served</p>
            <p className='text-center text-4xl text-gray-700 mt-3 font-[roboto]'>Get state-of-the-art solutions for your business.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-10 px-10 md:px-20 lg:px-32'>
                
                <div>
                    <img src='images/png/1.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>Retail</p>
                </div>
                <div>
                    <img src='images/png/2.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>E-commerce</p>
                </div>
                <div>
                    <img src='images/png/3.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>Trade Shows & Events</p>
                </div>
                <div>
                    <img src='images/png/4.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>Hospitality</p>
                </div>
                <div>
                    <img src='images/png/5.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>Restaurants</p>
                </div>
                <div>
                    <img src='images/png/6.png' className='h-28' alt='' />
                    <p className='mt-6 text-xl font-[roboto]'>B2B</p>
                </div>
            </div>
        </div>
    )
}




export default Industries;