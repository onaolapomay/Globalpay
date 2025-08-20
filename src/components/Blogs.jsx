import React from 'react'

const Blogs = () => {
    return (
        <div className='mt-12 px-4'>
            <h1 className='text-left md:text-6xl font-medium mb-10 text-4xl px-6  font-[roboto]'>Blogs</h1>

            <div className='container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer'>
                <div className='p-4 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition duration-300'>
                    <img
                        src="/images/imgi_10.jpg"
                        alt="Paysafe SMB team"
                        className="w-full h-64 object-cover  rounded-lg"
                    />
                    <div className='flex flex-wrap px-1 py-3 text-sm gap-3'>
                        <span className='bg-green-500 px-4 py-2 font-mono rounded-md text-sm' style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}>Blog storage</span>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700' >August 08, 2025</p>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700'>8 minutes read</p>
                    </div>
                    <p className="px-4 py-3 text-lg md:text-xl leading-snug font-medium">
                        How to Reduce Processing Fees with Cash Discounting
                    </p>
                    <span className='px-4 pb-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed text-gray-600'>
                        Finance executive brings 35+ years of financial expertise to spearhead
                        Global Payments’ next chapter of strategic expansion, building on the…
                    </span>
                    <p className='px-4 py-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed'>Paysafe SMB team, Small business</p>
                </div>

                <div className='p-4 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition duration-300'>
                    <img
                        src="/images/imgi_9.jpg"
                        alt="Paysafe SMB team"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                     <div className='flex flex-wrap px-1 py-3 text-sm gap-3'>
                        <span className='bg-green-500 px-4 py-2 font-mono rounded-md text-sm' style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}>Blog storage</span>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700' >August 08, 2025</p>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700'>8 minutes ago</p>
                    </div>
                    <p className='px-4 py-3 text-lg md:text-xl leading-snug font-medium'>
                        Stax Acquires BlockChyp, Adding Payment Gateway and Expanding
                        End-to-End Capabilities
                    </p>
                    <span className='px-4 pb-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed text-gray-600'>
                        Acquisition of BlockChyp brings new technology and industry expertise to
                        Stax, furthering its evolution as a leading payment processor ORLANDO…
                    </span>
                    <p className='px-4 py-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed'>Paysafe SMB team, Small business</p>
                </div>

                <div className='p-4 rounded-lg shadow-lg flex flex-col hover:shadow-2xl transition duration-300'>
                    <img
                        src="/images/imgi_11.jpg"
                        alt="Paysafe SMB team"
                        className='w-full h-64 object-cover rounded-lg'
                    />
                     <div className='flex flex-wrap px-1 py-3 text-sm gap-3'>
                        <span className='bg-green-500 px-4 py-2 font-mono rounded-md text-sm' style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}>Blog storage</span>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700' >August 08, 2025</p>
                        <p className='px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-mono text-gray-700'>8 minutes ago</p>
                    </div>
                    <p className='px-4 py-3 text-lg md:text-xl leading-snug font-medium'>
                        Global Payments Celebrates 10 Years: Looking Back at a Decade of Growth and Payment
                        Innovations
                    </p>
                    <span className='px-4 pb-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed text-gray-600'>
                        To the incredible Global Payments community: allow us to take a moment to recognize
                        a milestone that we are extraordinarily proud…
                    </span>
                    <p className='px-4 py-4 text-sm md:text-base font-medium font-[roboto] leading-relaxed'>Paysafe SMB team, Small business</p>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end mt-2'>
                <button className='px-6 py-4 mt-4 md:text-1xl text-sm font-medium font-[roboto] cursor-pointer text-white bg-purple-900 rounded-md hover:bg-black transition duration-300'>Read More</button>
            </div>
        </div>
    )
}

export default Blogs