import { Icon } from "@iconify/react";
import React from "react";
import useResponsive from "../Hooks/useResponsive";
import "flowbite";
import Comma from "../assets/Text.svg";
import { Carousel } from "flowbite-react";

const Crousal = () => {
  const [res] = useResponsive();
  return (
    <div className="lg:hidden block relative h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        leftControl={
          <button className="p-[12px] 2xl:p-[14px] relative z-30 rounded-full border border-[#262626] bg-[#1C1C1C]">
            <Icon
              icon="heroicons:arrow-small-left"
              className="text-[#caff33] lg:text-[20px] 2xl:text-[25px]"
            />
          </button>
        }
        rightControl={
          <button className="p-[12px] 2xl:p-[14px] relative z-30 rounded-full border border-[#262626] bg-[#1C1C1C]">
            <Icon
              icon="heroicons:arrow-small-right"
              className="text-[#caff33] lg:text-[20px] 2xl:text-[25px]"
            />
          </button>
        }
        indicators={false}
      >
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] w-[80%] items-center text-center">
          <img src={Comma} alt="" />
          <p>
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
          <span className="text-[#caff33]">John D</span>
        </div>
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] w-[80%] items-center text-center">
          <img src={Comma} alt="" />
          <p>
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
          <span className="text-[#caff33]">John D</span>
        </div>
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[50px] w-[80%] items-center text-center">
          <img src={Comma} alt="" />
          <p>
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
          <span className="text-[#caff33]">John D</span>
        </div>
      </Carousel>
      <div className="absolute top-0 z-20 left-0 w-[89px] h-[233px] lg:w-[398px] lg:h-[291px] 2xl:w-[556px] 2xl:h-[349px] bg-gradient-to-l from-transparent from-10% to-[#191919] to-90%"></div>
      <div className="absolute top-0 z-20 right-0 w-[89px] h-[233px] lg:w-[398px] lg:h-[291px] 2xl:w-[556px] 2xl:h-[349px] bg-gradient-to-r from-transparent from-10% to-[#191919] to-90%"></div>
    </div>
  );
};

export default Crousal;
