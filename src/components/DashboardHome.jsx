import React from 'react'
import { useAuth } from '../components/AuthContext'

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                        Welcome to Dashboard
                      </h1>
                      {user ? (
                        <p className="mt-4 text-lg">Hello, {user.displayName}</p>
                      ) : (
                        <p className="mt-4 text-lg">You are not logged in.</p>
                      )}
        </div>
    )
}

export default DashboardHome