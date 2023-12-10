import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Services from '../components/Services'
import AddNewService from '../components/AddNewService'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
    <Navbar/>
    <Landing />
    <Services />
    <AddNewService />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home