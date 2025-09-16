import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'

const SafeRoute = ({ children }) => {
    const { user, loading } = useAuth()



    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p className='text-xl'>Loading...</p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default SafeRoute