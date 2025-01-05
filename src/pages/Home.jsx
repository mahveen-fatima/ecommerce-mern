import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Trending from '../components/Trending'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Trending />
      <NewArrivals />
      <Footer />
    </div>
  )
}

export default Home