import React, { useState } from 'react'
import { User, Mail, IdCard } from 'lucide-react'
import { useAuth } from '../../components/AuthContext'




const Profile = () => {
    const { user } = useAuth()

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Profile</h1>

        
            {user &&  (
                <div className='bg-white shadow-md rounded-xl p-6 max-w-md text-center mx-auto'>
                   <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-700 to-teal-600 text-white text-3xl font-medium'>
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() 
                        : user.email ? user.email.charAt(0).toUpperCase() : ""}
                    </div>
                    {/* <p className='mt-3 text-lg font-medium text-gray-800'> {User.displayName || User.email?.split('@')[0] || 'guest User'}</p> */}
                   </div>


                   {/* user info */}

                   <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                        <User className='text-indigo-600' size={30} />
                        <p className='uppercase text-lg font-mono'>
                            Name:{''}
                            <span className='text-gray-700'>
                                {user.displayName.toUpperCase() || 'Not Provided'}
                            </span>
                        </p>
                    </div>


                    <div className='flex items-center gap-3'>
                        <Mail className='text-indigo-600' size={30} />
                        <p className='uppercase text-lg font-mono'>
                            Email:{''}
                            <span className='text-gray-700'>
                                {user.email || 'Not Provided'}
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IdCard className='text-indigo-600' size={30} />
                        <p className='font-medium'>
                            User ID:{''}
                            <span className='text-gray-700'>
                                {user.uid || 'Not Provided'}
                            </span>
                        </p>
                    </div>

                    

                   </div>
                </div>
            )}
        </div>
    )
}

export default Profile