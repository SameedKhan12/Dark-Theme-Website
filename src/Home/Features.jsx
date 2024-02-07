import React, { useRef } from "react";
import useResponsive from "../Hooks/useResponsive";
import { Icon } from "@iconify/react";
import { useInView } from "framer-motion";

const Features = () => {
  const [res] = useResponsive();
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (

    <div ref={ref} className={`max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px] transition-all duration-1000 ${isInView?'opacity-100':'opacity-0'} ${isInView?'translate-y-0':'translate-y-14'}`}>
      <div id="text-con" className="lg:text-start text-center flex flex-col lg:items-start items-center">
        <h3 className={`${res("text-[48px]", "text-[38px]", "text-[28px]")}`}>
          Our <span className="text-[#CAFF33]">Features</span>
        </h3>
        <p
          className={`text-[#B3B3B3] ${res(
            "text-[18px]",
            "text-[16px]",
            "text-[14px]"
          )} w-[90%] sm:w-[80%] md:w-[70%] pt-[20px]`}
        >
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-[20px] lg:gap-[30px] items-center lg:items-start mt-[50px] lg:mt-[60px] 2xl:mt-[80px]">
        <div className="p-[20px] min-w-fit overflow-x-auto sm:p-[30px] lg:p-[40px] 2xl:p-[50px] bg-[#1c1c1c] rounded-lg  flex flex-row lg:flex-col">
          <button className="rounded-full min-w-fit bg-[#1A1A1A] border border-[#262626] mb-[20px] 2xl:mb-[24px] py-[14px] px-[20px] 2xl:px-[24px] 2xl:py-[18px] text-[#caff33]">
            Online Banking
          </button>
          <button className="rounded-full min-w-fit bg-[#1A1A1A] border border-[#262626] mb-[20px] 2xl:mb-[24px] py-[14px] px-[20px] 2xl:px-[24px] 2xl:py-[18px]">
            Financial Tools
          </button>
          <button className="rounded-full min-w-fit bg-[#1A1A1A] border border-[#262626] mb-[20px] 2xl:mb-[24px] py-[14px] px-[20px] 2xl:px-[24px] 2xl:py-[18px]">
            Customer Support
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[30px] w-full">
          <div className="bg-[#1c1c1c] p-[30px] lg:p-[40px] 2xl:p-[50px] flex flex-col gap-y-[20px] lg:gap-y-[24px] 2xl:gap-y-[30px]">
            <div className="flex justify-between ">
              <h4 className="lg:text-[24px]">24/7 Account Access</h4>
              <Icon
                icon="mynaui:arrow-up-right"
                className="text-[34px] text-[#caff33]"
              />
            </div>
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </p>
          </div>
          <div className="bg-[#1c1c1c] p-[30px] lg:p-[40px] 2xl:p-[50px] flex flex-col gap-y-[20px] lg:gap-y-[24px] 2xl:gap-y-[30px]">
            <div className="flex justify-between ">
              <h4 className="lg:text-[24px]">Mobile Banking App</h4>
              <Icon
                icon="mynaui:arrow-up-right"
                className="text-[34px] text-[#caff33]"
              />
            </div>
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </p>
          </div>
          <div className="bg-[#1c1c1c] p-[30px] lg:p-[40px] 2xl:p-[50px] flex flex-col gap-y-[20px] lg:gap-y-[24px] 2xl:gap-y-[30px]">
            <div className="flex justify-between ">
              <h4 className="lg:text-[24px]">Secure Transactions</h4>
              <Icon
                icon="mynaui:arrow-up-right"
                className="text-[34px] text-[#caff33]"
              />
            </div>
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information.
            </p>
          </div>
          <div className="bg-[#1c1c1c] p-[30px] lg:p-[40px] 2xl:p-[50px] flex flex-col gap-y-[20px] lg:gap-y-[24px] 2xl:gap-y-[30px]">
            <div className="flex justify-between ">
              <h4 className="lg:text-[24px]">Bill Pay and Transfers</h4>
              <Icon
                icon="mynaui:arrow-up-right"
                className="text-[34px] text-[#caff33]"
              />
            </div>
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Save time and avoid late fees with our convenient bill pay
              service. Set up recurring payments or make one-time transfers
              between your accounts with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
