import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../../src/Firebase/FirebaseConfig'


const SafeRoute = ({ children }) => {
    const user = auth.currentUser

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default SafeRoute