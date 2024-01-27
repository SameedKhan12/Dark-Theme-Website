import { Icon } from "@iconify/react";
import React, { useState } from "react";
import useResponsive from "../Hooks/useResponsive";
import Comma from "../assets/Text.svg";
import Crousal from "./Crousal";

const Testemonials = () => {
  const [res] = useResponsive();

  return (
    <div className=" flex flex-col max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px] 2xl:gap-y-[80px] lg:gap-y-[60px] gap-y-[50px]">
      <div
        id="top"
        className="flex lg:flex-row flex-col justify-between items-center  lg:items-end gap-[20px] lg:gap-[150px]  2xl:gap-[300px]"
      >
        <div className="max-w-[910px] lg:text-start text-center flex flex-col lg:items-start items-center">
          <p className={`${res("text-[48px]", "text-[38px]", "text-[28px]")}`}>
            Our <span className="text-[#CAFF33]">Testimonials</span>
          </p>
          <p
            className={`text-[#B3B3B3] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )} w-[90%] sm:w-[90%]  pt-[20px]`}
          >
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className=" flex flex-row  lg:text-[14px]">
          <button className="text-[#1c1c1c] bg-[#CAFF33] px-[24px] py-[14px] rounded-full">
            For individuals
          </button>
          <button className="px-[24px] py-[14px] rounded-full">
            For Businesses
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center lg:gap-[40px] 2xl:gap-[50px]">
        <button className="p-[12px] 2xl:p-[14px] rounded-full border border-[#262626] bg-[#1C1C1C]">
          <Icon
            icon="heroicons:arrow-small-left"
            className="text-[#caff33] lg:text-[20px] 2xl:text-[25px]"
          />
        </button>
        <div className="relative">
          <div className="flex gap-[60px] 2xl:gap-[80px]">
            <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] items-center text-center">
              <img src={Comma} className="w-[44px] 2xl:w-[60px]" alt="" />
              <p>
                YourBank has been my trusted financial partner for years. Their
                personalized service and innovative digital banking solutions
                have made managing my finances a breeze.
              </p>
              <span className="text-[#caff33]">Sara T</span>
            </div>
            <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] items-center text-center">
              <img src={Comma} className="w-[44px] 2xl:w-[60px]" alt="" />
              <p>
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </p>
              <span className="text-[#caff33]">John D</span>
            </div>
            <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] items-center text-center">
              <img src={Comma} className="w-[44px] 2xl:w-[60px]" alt="" />
              <p>
                I love the convenience of YourBank's mobile banking app. It
                allows me to stay on top of my finances and make transactions on
                the go. The app is user-friendly and secure, giving me peace of
                mind.
              </p>
              <span className="text-[#caff33]">Emily G</span>
            </div>
          </div>
          <div className="absolute top-0 z-20 left-0 w-[398px] h-[291px] 2xl:w-[556px] 2xl:h-[349px] bg-gradient-to-l from-transparent from-10% to-[#191919] to-90%"></div>
          <div className="absolute top-0 z-20 right-0 w-[398px] h-[291px] 2xl:w-[556px] 2xl:h-[349px] bg-gradient-to-r from-transparent from-10% to-[#191919] to-90%"></div>
        </div>
        <button className="p-[12px] 2xl:p-[14px] rounded-full border border-[#262626] bg-[#1C1C1C]">
          <Icon
            icon="heroicons:arrow-small-right"
            className="text-[#caff33] lg:text-[20px] 2xl:text-[25px]"
          />
        </button>
      </div>
     <Crousal/>
    </div>
  );
};

export default Testemonials;
