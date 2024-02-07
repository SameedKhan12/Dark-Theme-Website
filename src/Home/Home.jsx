import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import Hero from "../HeroSection/Hero.jsx";

import Navbar from "../Navbar/Navbar.jsx";
import Ad from "./Ad.jsx";
import FAQ from "./FAQ.jsx";
import Features from "./Features.jsx";
import OurProduct from "./OurProduct";
import Testemonials from "./Testemonials.jsx";
import UseCases from "./UseCases.jsx";

const Home = () => {
  const  {scrollYProgress}  = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="font-lexend  text-white ">
      <motion.div style={{scaleX}} className={`fixed top-0 inset-x-0 h-1 bg-[#caff33] z-30`} ></motion.div>
      <Navbar selected={0} />
      <Hero />
      <OurProduct/>
      <UseCases/>
      <Features/>
      <FAQ/>
      <Testemonials/>
      <Ad />
      <Footer/>
    </div>
  );
};

export default Home;
