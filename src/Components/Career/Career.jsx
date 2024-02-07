import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react'
import { ContainerWrapper } from '../../Cpomponents'
import Footer from '../../Footer/Footer'
import Ad from '../../Home/Ad'
import FAQ from '../../Home/FAQ'
import Navbar from '../../Navbar/Navbar'
import CareerPage from './CareerPage'

const Career = () => {
  const  {scrollYProgress}  = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className='text-white font-lexend'>
      <motion.div style={{scaleX}} className={`fixed top-0  inset-x-0 h-1 bg-[#caff33] z-30`} ></motion.div>
      <Navbar selected={1}/>
      <CareerPage/>
      <FAQ/>
      <Ad/>
      <Footer/>
    </div>
  )
}

export default Career
