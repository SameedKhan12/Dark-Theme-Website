import React from "react";
import Footer from "../Footer/Footer.jsx";
import Hero from "../HeroSection/Hero.jsx";

import Navbar from "../Navbar/Navbar.jsx";
import Ad from "./Ad.jsx";
import FAQ from "./FAQ.jsx";
import Features from "./Features.jsx";
import Ourproduct from "./Ourproduct.jsx";
import Testemonials from "./Testemonials.jsx";
import UseCases from "./UseCases.jsx";
const Home = () => {
  return (
    <div className="font-lexend  text-white ">
      <Navbar/>
      <Hero />
      <Ourproduct/>
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
