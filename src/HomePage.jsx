import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import Stax from './components/Stax.jsx'
import Blogs from './components/Blogs.jsx'
import GetStarted from './components/GetStarted.jsx'
import Industries from './components/Industries.jsx'
import Reviews from './components/Reviews.jsx'
import ReviewsCard from './components/ReviewsCard.jsx'
import Footer from './components/Footer.jsx'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Stax />
      <Blogs />
      <GetStarted />
      <Industries />
      <Reviews />
      <ReviewsCard />
      <Footer />
    </>
  )
}

export default Homepage
