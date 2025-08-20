import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import Stax from './components/Stax.jsx'
import Blogs from './components/Blogs.jsx'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Stax />
      <Blogs />
    </>
  )
}

export default Homepage
