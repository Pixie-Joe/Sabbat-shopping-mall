import React from 'react'
import Body from './pages/Body'
import Appointment from './pages/Appointment'
import OtherService from './pages/OtherService'
import Plan from './pages/Plan'
import MainAbout from './pages/MainAbout'
import Social from './pages/Social'
import OtherContact from './pages/OtherContact'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'

const Home = () => {
  return (

    <div className="rounded-lg  lg:w-[1250px] lg:ml-[44px] lg:h-[2000px] w-[700px] h-[2000px] bg-purple-200 absolute"> 
    <Navbar />
      <Body />
      <OtherService />
      <Appointment />
      <Plan />
      <MainAbout />
      <Social />
      <OtherContact />
      <Footer />
    </div>
  )
}

export default Home