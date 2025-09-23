import React from 'react'
import { useAuth } from '../../components/AuthContext'
import { Wallet, CreditCard, Settings, History, Hourglass } from 'lucide-react'

const Overview = () => {
    const { user } = useAuth()

    return (
        <div className=''>
            <h1 className='text-2xl font-bold mb-4'>Overview</h1>

            <div className='mb-6'>
                {user ? (
                    <div className='space-y-2'>
                        <p className='text-lg'>Welcome back, <span className='font-semibold'>{user.name}</span></p>
                        <p className='text-gray-600'>User ID : {user.uid}</p>
                    </div>
                ) : (
                    <p className='text-lg text-rose-900'>Please log in to see your overview.</p>
                )}
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-xl shadow flex items-center gap-6 hover:scale-105 transition'>
                    <Wallet size={32} className='text-white' />
                    <div>
                        <h2 className='text-lg font-semibold'>Wallet Balance</h2>
                        <p className='text-gray-600 font-[roboto]'>₦126,000.00</p>
                    </div>
                </div>

                {/* transactions */}

                <div className='bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow flex items-center gap-6 hover:scale-105 transition'>
                    <CreditCard size={32} className='text-white' />
                    <div>
                        <h2 className='text-lg font-semibold'>Transactions</h2>
                        <p className='text-gray-600 font-[roboto]'>58</p>
                    </div>
                </div>

                {/* Plan  */}
                <div className='bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl shadow flex items-center gap-6 hover:scale-105 transition'>
                    <Hourglass size={32} className='text-white' />
                    <div>
                        <h2 className='text-lg font-semibold'>Active Plans</h2>
                        <p className='text-gray-600 font-[roboto]'>3</p>
                    </div>
                </div>

                {/* recent activity */}

                {/* <div className='bg-white p-6 rounded-xl shadow flex items-center gap-3'>
                    <History size={32} className='text-blue-500' />
                    <div>
                        <h2 className='text-lg font-semibold'>Recent Activity</h2>
                        <ul className='space-y-4 text-gray-600'>
                            <li>Transaction of $500 on 12th Jan 2023</li>
                            <li>Transaction of $200 on 10th Jan 2023</li>
                            <li>Transaction of $100 on 5th Jan 2023</li>
                        </ul>
                    </div>
                </div> */}

                {/* setting */}

                <div className='bg-gradient-to-r from-purple-300 to-purple-500 p-6 rounded-xl shadow flex items-center gap-6 hover:scale-105 transition'>
                    <Settings size={32} className='text-white' />
                    <div>
                        <h2 className='text-lg font-semibold'>Account Settings</h2>
                        <p className='text-gray-600 font-[roboto]'>Manage your account settings</p>
                    </div>

                </div>

            </div>
        </div>
        
        
    )
}

export default Overview