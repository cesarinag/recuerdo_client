import React from 'react'
import '../../App.css'
import Cards from './../Cards/Cards.js'
import HeroSection from './../Hero/Hero.js'
import Footer from './../Footer/Footer.js'

function Home () {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
