import React from 'react';
import { createContext, useContext, useState, useEffect} from 'react'
import { auth } from '../Firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { loginUser, signUpUser, logoutUser } from '../Firebase/authService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                await firebaseUser.reload()
            }
            setUser(firebaseUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const login = async (email, password) => {
        const loggedinUser = await loginUser(email, password)
        setUser(loggedinUser)
        return loggedinUser
    }


    const register = async (email, password, name) => {
        const newUser = await signUpUser(email, password, name)
        await newUser.reload()
        setUser({...newUser})
        return newUser
    }
    const logout = async () => {
        await logoutUser()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)