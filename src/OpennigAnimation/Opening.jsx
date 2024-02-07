import React from 'react'
import { motion, spring } from "framer-motion"
import Logo from "../assets/Logo/Logo.png";
const Opening = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <motion.img 
      src={Logo}
      
      animate={{
        x:[100,100,100,0,-70],
        // y:[-200,0],
        // scale:[0,2,2,2],
        // opacity:[0,1],
        rotate:[360,0,0,0],
      }}
      transition={{
        delay:0,
        duration:2,
        
        type: "spring",
    }}
    />
    <div className='overflow-hidden'>

    <motion.div 
    className='text-3xl text-white'
    animate={{
        opacity:[0,1],
        x:[200,0]
    }}
    transition={{
        delay:2,
        duration:1
    }}
    >
        Your Bank
    </motion.div>
    </div>
    </div>
  )
}

export default Opening
