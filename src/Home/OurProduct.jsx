import React from "react";
import { Icon } from "@iconify/react";
import useResponsive from "../Hooks/useResponsive";

const OurProduct = () => {
  const [res]=useResponsive()
  return (
    <div className="max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
      <div id="top" className="flex lg:flex-row flex-col justify-between items-center  lg:items-end gap-[20px] lg:gap-[150px]  2xl:gap-[300px]">
        <div className="max-w-[910px] lg:text-start text-center flex flex-col lg:items-start items-center">
          <p className={`${res("text-[48px]","text-[38px]","text-[28px]")}`}>
            Our <span className="text-[#CAFF33]">Products</span>
          </p>
          <p className={`text-[#B3B3B3] ${res("text-[18px]","text-[16px]","text-[14px]")} w-[90%] sm:w-[80%]  md:w-[70%] pt-[20px]`}>
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
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
      <div className="flex lg:flex-row flex-col justify-between items-center gap-[40px] lg:gap-[80px] 2xl:gap-[100px] text-center mt-[100px]">
        <div className="flex flex-col items-center px-6">
          <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[30px]">
            <Icon icon="solar:case-bold" color="#caff33" width={"32px"} />
          </div>
          <h3 className="lg:text-[20px] 2xl:text-[24px] mb-[20px]">Checking Accounts</h3>{" "}
          <p className="text-[#B3B3B3]">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>
        <div className="flex flex-col items-center px-6">
          <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[30px]">
            <Icon
              icon="heroicons:archive-box-arrow-down-solid"
              color="#caff33"
              width={"32px"}
            />
          </div>
          <h3 className="lg:text-[20px] 2xl:text-[24px] mb-[20px]">Savings Accounts</h3>{" "}
          <p className="text-[#B3B3B3]">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you're saving for a specific goal
            or want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>
        <div className="flex flex-col items-center px-6">
        <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[30px]">
            <Icon
              icon="heroicons:banknotes-solid"
              color="#caff33"
              width={"32px"}
            />
          </div>
          <h3 className="lg:text-[20px] 2xl:text-[24px] mb-[20px]">Savings Accounts</h3>{" "}
          <p className="text-[#B3B3B3]">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you're saving for a specific goal
            or want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
