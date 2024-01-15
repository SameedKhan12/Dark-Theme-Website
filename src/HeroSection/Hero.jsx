import React from "react";
import ContainerWrapper from "../Cpomponents/ContainerWrapper";
import Subtract from "../assets/Subtract.png";
import Containerimg from '../assets/Container.png'
import AbImg from '../assets/Abstract design/Abstract Design.png'
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col max-lg:items-center gap-[120px] xl:max-w-[1280px] 2xl:max-w-[1580px] mx-auto py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px]">
   
        <div className="relative z-20  max-w-[825px] max-lg:flex max-lg:flex-col max-lg:items-center">
          <div className="bg-[#262626] rounded-[62px] w-fit relative flex pl-[6px] pr-[20px] py-[10px]">
            <img
              className="mx-[6px] object-contain"
              src={Subtract}
              alt=""
              width={"20px"}
              height={"20px"}
            />
            <span>No LLC Required, No Credit Check.</span>
          </div>
          <div className="mt-[20px] max-lg:text-center lg:pr-12 xl:pr-16 2xl:pr-20">
            <p className="text-[28px] md:text-[38px] lg:text-[48px]">
              Welcome to YorBank
            </p>
            <p className="text-[28px] md:text-[38px] lg:text-[48px]">
            Empowering Your{" "}
              <span className="max-lg:block text-[#CAFF33]">Financial Journey</span>
            </p>
            <p className="text-[#E4E4E7] text-[14px] md:text-[16px] lg:text-[18px] max-md:px-[15px] max-lg:px-[20px]">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
          </div>
          <div><button className="bg-[#CAFF33] text-[#1c1c1c] px-[30px] py-[18px] rounded-full mt-[50px]">Open Account</button></div>
        </div>
      
      <div className="relative ">
        <img className="relative -top-11 z-20 w-fit lg:w-[515px]" src={Containerimg} alt="" />
        <img className="absolute top-0 right-2 md:-right-10 lg:-right-20 z-10 w-full lg:w-[300px] " src={AbImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
