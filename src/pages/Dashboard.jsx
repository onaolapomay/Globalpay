import React from 'react'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import SideBar from '../components/SideBar.jsx'

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='flex-1 p-6 bg-gray-200'>
        <h1 className='text-3xl font-bold text-gray-900'>Welcome to Dashboard</h1>
        {/* <p className='mt-2 text-lg'>Here's your secure content.</p> */}
        {user ? (
          <p className='mt-4 text-lg'>Hello, {user.email}</p>
        ) : (
          <p className='mt-4 text-lg'>You are not logged in.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
