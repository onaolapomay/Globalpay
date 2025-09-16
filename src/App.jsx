import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage.jsx'
import SafeRoute from './components/SafeRoute.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import Overview from './pages/Dashboard/Overview.jsx'
import Transactions from './pages/Dashboard/Transactions.jsx'
import Profile from './pages/Dashboard/Profile.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />



      <Route path='/dashboard' element={<SafeRoute><DashboardLayout /></SafeRoute>} >

        <Route index element={<Overview />} />
        <Route path='overview' element={<Overview />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
