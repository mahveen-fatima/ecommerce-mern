import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Trending from '../components/Trending'
import NewArrivals from '../components/NewArrivals'
import Latest from '../components/Latest'
import ClassicSpotlight from '../components/ClassicSpotlight'
import DontMiss from '../components/DontMiss'
import ShopBySport from '../components/ShopBySport'
import MemberBenefits from '../components/MemberBenefits'
import MegaMenu from '../components/MegaMenu'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Trending />
      <NewArrivals />
      <Latest />
      <ClassicSpotlight />
      <DontMiss />
      <ShopBySport />
      <MemberBenefits />
      <MegaMenu />
      <Footer />
    </div>
  )
}

export default Home