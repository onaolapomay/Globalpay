import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import SideBar from './SideBar.jsx'

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="md:flex w-full">
        <aside className="hidden md:block">
          <SideBar />
        </aside>

        <div className="md:hidden px-4 py-2 flex items-center justify-between bg-gray-900">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
          <div className="text-white font-bold">Dashboard</div>
        </div>

        <main className="flex-1 p-6 md:ml-72">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Dashboard
          </h1>
          {user ? (
            <p className="mt-4 text-lg">Hello, {user.email}</p>
          ) : (
            <p className="mt-4 text-lg">You are not logged in.</p>
          )}
          <div className="mt-6">
            <Outlet />
          </div>
        </main>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileOpen(false)}
          >
            <div className="absolute left-0 top-0 h-full w-72 bg-gray-900 text-white p-5">
              <button onClick={() => setMobileOpen(false)} className="mb-5">
                Close
              </button>
              <SideBar />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout