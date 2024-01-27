import React from 'react'
import { ContainerWrapper } from '../../Cpomponents'
import Footer from '../../Footer/Footer'
import Ad from '../../Home/Ad'
import FAQ from '../../Home/FAQ'
import Navbar from '../../Navbar/Navbar'
import CareerPage from './CareerPage'

const Career = () => {
  return (
    <div className='text-white font-lexend'>
      <Navbar selected={1}/>
      <CareerPage/>
      <FAQ/>
      <Ad/>
      <Footer/>
    </div>
  )
}

export default Career
