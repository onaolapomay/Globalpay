import React, { useState } from 'react'
import { useAuth } from '../../components/AuthContext'
import { User, Mail, IdCard, Eye, EyeOff } from 'lucide-react'
import  { updateProfile, updatePassword, getAuth } from 'firebase/auth'





const Profile = () => {
    const { user } = useAuth()

const [newName, setNewName] = useState('')
const [newPassword, setNewPassword] = useState('')
const [loading, setLoading] = useState(false)
const [showPassword, setShowPassword] = useState(false);

const handleChangeName = async () => {
    if (!newName.trim()) return alert('Please enter a valid name.')
        try{
    setLoading(true)
    const auth = getAuth()
    const currentUser = auth.currentUser

    await updateProfile(currentUser, { displayName: newName})
    alert('Name updated successfully!')
    setNewName('')
    window.location.reload()
    } catch (error) {
        console.error(error)
        alert(error.message)
    } finally {
        setLoading(false)
    }
}


const handleChangePassword = async () => {
    if (newPassword.length < 6) {
    alert('password must be at least 6 characters long.')
    return
    }
    try {
        setLoading(true)
        const auth = getAuth()
        const currentUser = auth.currentUser
        await updatePassword(currentUser, newPassword)
        alert('Password updated successfully!')
        setNewPassword('')
    } catch (error) {
        console.error(error)
        alert(error.message)
    } finally {
        setLoading(false)
    }

    
}

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Profile</h1>

        
            {user ? (
                <div className='bg-white shadow-md rounded-xl p-6 max-w-md text-center mx-auto'>
                   <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-700 to-teal-600 text-white text-3xl font-medium'>
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() 
                        : user.email ? user.email.charAt(0).toUpperCase() : "U"}
                    </div>
                    <p className='mt-3 text-lg font-medium text-gray-800'> {user.displayName || user.email?.split('@')[0] || 'guest User'}</p>
                   </div>


                   {/* user info */}

                   <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                        <User className='text-indigo-600' size={30} />
                        <p className='font-medium'>
                            Name:{''}
                            <span className='text-gray-700'>
                                {user.displayName || 'Not Provided'}
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

                    <div className='mt-8 border-t pt-6 text-left'>
                        <h2 className='text-xl font-semibold mt-4 mb-2'>Account Settings</h2>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Change Display Name</label>
                        <input type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder='Enter a new name'
                        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                        <button
                        onClick={handleChangeName}
                        disabled={loading}
                         className='mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition'>
                            {loading ? 'Updating...' : 'Update Name'}
                        </button>

                    </div>

                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Change Password</label>
                        <div className='relative'>
                                <input type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder='Enter new password'
                                className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                                <button type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-2.5 text-gray-800'>
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                                </button>
                            </div>
                            <button
                            onClick={handleChangePassword}
                            type="button"
                            disabled={loading}
                            className='mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 disabled:opacity-50 transition'>
                                {loading ? 'Updating...' : 'Update Password'}
                            </button>
                        
                    </div>
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