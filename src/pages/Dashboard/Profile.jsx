import React from 'react'
import { useAuth } from '../../components/AuthContext'
import { User, Mail, IdCard } from 'lucide-react'

const Profile = () => {
    const { user } = useAuth()

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Profile</h1>

        
            {user ? (
                <div className='bg-white shadow-md rounded-xl p-6 max-w-md text-center mx-auto'>
                   <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-700 to-teal-600 text-white text-3xl font-medium'>
                        {user.DisplayName ? user.DisplayName.charAt(0).toUpperCase() 
                        : user.email ? user.email.charAt(0).toUpperCase() : "U"}
                    </div>
                   </div>

                   {/* user info */}

                   <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                        <User className='text-indigo-600' size={30} />
                        <p className='font-medium'>
                            Name:{''}
                            <span className='text-gray-700'>
                                {user.DisplayName || 'Not Provided'}
                            </span>
                        </p>
                    </div>


                    <div className='flex items-center gap-3'>
                        <Mail className='text-indigo-600' size={30} />
                        <p className='font-medium'>
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
            ) : (
                <p className='text-lg text-rose-950'>Loading user information...</p>
            )}
        </div>
    )
}

export default Profile