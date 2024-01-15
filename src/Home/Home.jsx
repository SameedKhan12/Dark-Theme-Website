import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../HeroSection/Hero";

import Navbar from "../Navbar/Navbar";
import Ad from "./Ad";
import FAQ from "./FAQ";
import Features from "./Features";
import Ourproduct from "./Ourproduct";
import Testemonials from "./Testemonials";
import UseCases from "./UseCases";
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
