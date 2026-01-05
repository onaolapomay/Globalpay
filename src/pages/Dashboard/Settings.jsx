import React, { useState } from 'react'
import { getAuth, updateProfile, updatePassword } from 'firebase/auth'
import { Eye, EyeOff } from 'lucide-react'

const Settings = () => {

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
    
        await updateProfile(currentUser, { displayName: newName.toUpperCase()})
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
        <div className='mt-8 border-t pt-6 text-left'>
            <h2 className='text-xl font-semibold mt-4 mb-2'>
                Account Settings
            </h2>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-2'>Change Display Name</label>
                <input type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder='Enter a new name'
                className='w-xl p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                <button onClick={handleChangeName}
                disabled={loading}
                className='mt-3 mx-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition'>
                    {loading ? 'Updating...' : 'Update Name'}
                </button>
            </div>

            <div>
                <label className='block text-gray-700 font-medium mb-2'>change Password</label>
                <div className='relative'>
                    <input type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder='Enter new password'
                    className='w-full p-2 border rounded-lg focus:outline-none focus-ring-2 focus:ring-indigo-500'/>
                    <button type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-2.5 text-gray-800'>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                    </button>
                </div>

                <button onClick={handleChangePassword}
                type='button'
                disabled={loading}
                className='mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 disabled:opacity-50 transistion'>
                    {loading ? 'Updating...' : 'Update Password'}
                </button>
            </div>

        </div>
    )
}






export default Settings