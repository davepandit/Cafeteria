import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Banner from '../components/Banner'
import Centres from '../components/Centres'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Banner />
      <Centres />
      <hr className='border border-black mt-16'/>
    
    </>
  )
}

export default Home