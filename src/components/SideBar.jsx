import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='bg-gray-800 text-white w-72 min-h-screen p-6 space-y-4'>
            <h2 className='text-2xl font-bold mb-8'>Dashboard</h2>

            <ul className='space-y-6'>
                <li>
                    <Link to="/dashboard/Overview" className='hover:text-gray-300'>Overview</Link>
                </li>

                <li>
                    <Link to="/dashboard/transactions" className='hover:text-gray-300'>Transactions</Link>
                </li>

                <li>
                    <Link to="/dashboard/profile" className='hover:text-gray-300'>Profile</Link>
                </li>

            </ul>

        </div>
    )
}


export default SideBar