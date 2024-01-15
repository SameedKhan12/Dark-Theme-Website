import React from "react";
import useResponsive from "../Hooks/useResponsive";
import Ab3 from "../assets/Abstract design/Abstract Design 3.png";
import { Button } from "@material-tailwind/react";

const Ad = () => {
    const [res] = useResponsive();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#262626] flex max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px] 2xl:gap-y-[80px] lg:gap-y-[60px] gap-y-[50px] p-[80px]">
      <div
        id="top"
        className="flex lg:flex-row flex-col w-full justify-between items-center  max-sm:gap-[20px]"
      >
        <div className="lg:w-[70%] lg:text-start text-center flex flex-col lg:items-start items-center">
          <p className={`${res("text-[48px]", "text-[38px]", "text-[28px]")}`}>
            Start your financial journey with{" "}
            <span className="text-[#CAFF33]">YourBank today!</span>
          </p>
          <p
            className={`text-[#B3B3B3] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}  pt-[20px]`}
          >
          Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service
          </p>
        </div>
       
          <button className="text-[#1c1c1c] bg-[#CAFF33] px-[24px] py-[14px] rounded-full lg:text-[14px] hover:scale-105 transition-all">
            Open Account
          </button>
          <img className="absolute top-0 left-0 z-0" src={Ab3} alt="" />
        
      </div>
    </div>
  );
};

export default Ad;
