import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SafeRoute from './components/SafeRoute.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/dashboard' element={<SafeRoute><Dashboard /></SafeRoute>} />
    </Routes>
  )
}

export default App
