import React, { useState } from 'react'
import { updateProfile } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { Eye, EyeOff, ChevronRight, ClockFading, CreditCard, Headset, ShieldCheck } from 'lucide-react'
import { useAuth } from '../../components/AuthContext'
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'


const Settings = () => {
    const { user } = useAuth()
    const auth = getAuth()
    const firebaseUser = auth.currentUser
    

    const [newName, setNewName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleChangeName = async () => {
        if (!newName.trim()) return alert('Please enter a valid name.')
            try{
        setLoading(true)

        await updateProfile(firebaseUser, { displayName: newName.toUpperCase()})
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
        alert('Password must be at least 6 characters long')
        return
    }
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match')
        return
    }

    try {
        setLoading(true)

        const credential = EmailAuthProvider.credential(
            firebaseUser.email, currentPassword
        )

        await reauthenticateWithCredential(firebaseUser, credential)

        await updatePassword(firebaseUser, newPassword)

        alert('Password updated successfully!')
        setNewPassword('')
        setConfirmPassword('')
        setCurrentPassword('')
    } catch (error) {
        console.error(error)
        
        if (error.code === 'auth/wrong-password') {
            alert('Current password is incorrect')
        } else if (error.code === 'auth/requires-recent-login') {
            alert('Please log in again and try')
        } else {
            alert(error.message)
        }
    } finally {
        setLoading(false)
    }
}

    return (

        
        <div className='mt-8  text-left'>
            <div className=' bg-gray-300 px-4 py-5 space-y-2 rounded-2xl'>
                <div className='group flex items-center justify-center px-3 py-4 rounded-xl cursor-painter hover:bg-white hover:shadow-sm transition-all duration-200'>
                    <div className='flex items-center gap-3'>
                        <ClockFading className='text-gray-700 group-hover:text-indigo-600 transition' />
                        <span className=' text-lg md:text-xl font-mono font-light text-gray-800'>Account Limit</span>
                    </div>  
                    <ChevronRight className='size-6 text-gray-400 group-hover:text-indigo-600 transition' ></ChevronRight>
                </div>

                <div className='group flex items-center justify-center px-3 py-4 rounded-xl cursor-painter hover:bg-white hover:shadow-sm transition-all duration-200'>
                    <div className='flex items-center gap-3'>
                        <CreditCard className='text-gray-700 group-hover:text-indigo-600 transition' />
                        <span className=' text-lg md:text-xl font-mono font-light text-gray-800'>Bank Card/Account</span>
                    </div>  
                    <ChevronRight className='size-6 text-gray-400 group-hover:text-indigo-600 transition' ></ChevronRight>
                </div>

                <div className='group flex items-center justify-center px-3 py-4 rounded-xl cursor-painter hover:bg-white hover:shadow-sm transition-all duration-200'>
                    <div className='flex items-center gap-3'>
                        <Headset className='text-gray-700 group-hover:text-indigo-600 transition' />
                        <span className=' text-lg md:text-xl font-mono font-light text-gray-800'>Customer Service Center</span>
                    </div>  
                    <ChevronRight className='size-6 text-gray-400 group-hover:text-indigo-600 transition' ></ChevronRight>
                </div>

                <div className='group flex items-center justify-center px-3 py-4 rounded-xl cursor-painter hover:bg-white hover:shadow-sm transition-all duration-200'>
                    <div className='flex items-center gap-3'>
                        <ShieldCheck className='text-gray-700 group-hover:text-indigo-600 transition' />
                        <span className=' text-lg md:text-xl font-mono font-light text-gray-800'>Security</span>
                    </div>
                    <ChevronRight className='size-6 text-gray-400 group-hover:text-indigo-600 transition' ></ChevronRight>
                </div>
            </div>
            
            <h2 className='text-xl font-semibold mt-4 mb-2'>
                Account Settings
            </h2>
            {user ? (
                <>
            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-2'>Change Display Name</label>
                <input type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder='Enter a new name'
                className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                <button onClick={handleChangeName}
                disabled={loading}
                className='mt-3 mx-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition'>
                    {loading ? 'Updating...' : 'Update Name'}
                </button>
            </div>

            <div className='mt-4'>
                    <label className='block text-gray-700 font-medium mb-2'>
                        Current Password
                    </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder='Enter current password'
                        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        <button type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-2.5 text-gray-800'>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                    </button>
                    </div>
            </div>

            <div className='mt-4'>
                <label className='block text-gray-700 font-medium mb-2'>Change Password</label>
                <div className='relative'>
                    <input type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder='Enter new password'
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                    <button type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-2.5 text-gray-800'>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                    </button>
                </div>

                <div className='mt-4'>
                    <label className='block text-gray-700 font-medium mb-2'>
                        Confirm Password
                    </label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm new password'
                        className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        <button type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-2.5 text-gray-800'>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                    </button>
                    </div>
                </div>

                <button onClick={handleChangePassword}
                type='button'
                disabled={loading}
                className='mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 disabled:opacity-50 transistion'>
                    {loading ? 'Updating...' : 'Update Password'}
                </button>
            </div>
            </>
            ) : (
                <p className='text-lg text-rose-950'>Loading user information...</p>
            )}

        </div>
    )
}






export default Settings