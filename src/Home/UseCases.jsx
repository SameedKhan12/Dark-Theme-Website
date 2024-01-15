import React from "react";
import useResponsive from "../Hooks/useResponsive";
import Ab3 from "../assets/Abstract design/Abstract Design 3.png";
import Ab4 from "../assets/Abstract design/Abstract Design4.png";
import Moneybag from "../assets/Group.svg";
import BankH from "../assets/Bank-hand.svg";
import { Icon } from "@iconify/react";
const UseCases = () => {
  const [res] = useResponsive();
  return (
    <div className="max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px] ">
      {/* first Container */}
      <div className="lg:text-start text-center flex flex-col lg:items-start items-center">

      <h3
        className={`${res(
          "text-[48px]",
          "text-[38px]",
          "text-[28px]"
        )} text-[#caff33] lg:text-start text-center`}
      >
        Use Cases
      </h3>
      <p
        className={`text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px] lg:text-start text-center w-[90%] sm:w-[80%]  md:w-[70%] pt-[20px]`}
      >
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p>
      </div>
      {/* Second Container */}
      <div className="grid lg:grid-rows-2 lg:grid-cols-2 grid-rows-4 grid-cols-1 gap-x-[100px] gap-y-[80px] mt-[60px] 2xl:mt-[80px] ">
        <div className="bg-[#1c1c1c] rounded-3xl 2xl:p-[50px] lg:p-[40px] p-[20px] relative ">
            <img className="absolute top-0 left-0 z-0" src={Ab3} alt="" />
          <div className="relative z-10 lg:h-full grid grid-rows-2 grid-cols-2  gap-[10px] 2xl:gap-[20px]">
            <div className="row-auto p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl h-fit">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <img className=" w-[25px]" src={Moneybag} alt="" />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Managing Personal Finances</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl h-fit">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <img className=" w-[25px]" src={BankH} alt="" />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Saving for the Future</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl h-fit">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <Icon
                  className=" text-[#caff33]  text-[25px]"
                  icon="heroicons:building-library-solid"
                />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Homeownership</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl h-fit">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <Icon className=" text-[#caff33]  text-[25px]" icon="ion:book" />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Education Funding</h3>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-start">
          <div>
            <h3 className="2xl:text-[30px] lg:text-[26px] text-[20px]">
              For Individuals
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[100px] gap-[60px] 2xl:my-[62px] my-[50px]">
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">78%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Secure Retirement Planning
              </p>
            </div>
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">63%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Manageable Debt Consolidation
              </p>
            </div>
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">91%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Reducing financial burdens
              </p>
            </div>
          </div>
          <button className="border border-[#262626] bg-[#1C1C1C] text-[#ffffff] text-[14px] lg:text-[16px] 2xl:text-[18px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] rounded-full ">
            Learn More
          </button>
        </div>
        <div className="text-center lg:text-start">
          <div>
            <h3 className="2xl:text-[30px] lg:text-[26px] text-[20px]">
              For Business
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              For individuals, our mortgage For businesses, we empower growth
              with working capital solutions that optimize cash flow, and our
              tailored financing options fuel business expansion. Whatever your
              financial aspirations, YourBank is committed to providing the
              right tools and support to achieve them
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[100px] gap-[60px] 2xl:my-[62px] my-[50px]">
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">65%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Cash Flow Management
              </p>
            </div>
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">70%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Drive Business Expansion
              </p>
            </div>
            <div>
              <h4 className="tex-[40px] xl:text-[58px] text-[#caff33]">45%</h4>
              <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                Streamline payroll processing
              </p>
            </div>
          </div>
          <button className="border border-[#262626] bg-[#1C1C1C] text-[#ffffff] text-[14px] lg:text-[16px] 2xl:text-[18px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] rounded-full ">
            Learn More
          </button>
        </div>
        <div className="bg-[#1c1c1c] rounded-3xl 2xl:p-[50px] lg:p-[40px] p-[20px] relative">
            <img className="absolute top-0 right-0 z-0" src={Ab4} alt="" />
          <div className="relative z-10 h-full grid lg:grid-rows-2 lg:grid-cols-2 grid-rows-4 grid-cols-1 gap-[10px] 2xl:gap-[20px]">
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
              <Icon className=" text-[#caff33] text-[25px]" icon="heroicons:building-office-2-solid" />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Startups and Entrepreneurs</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
              <Icon
              icon="heroicons:banknotes-solid"
              className="text-[#caff33] text-[25px]"
            />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Cash Flow Management</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <Icon
                  className=" text-[#caff33] text-[25px]"
                  icon="heroicons:presentation-chart-bar-solid"
                />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Business Expansion</h3>
            </div>
            <div className="p-[14px] lg:p-[24px] 2xl:p-[30px] text-center bg-[#1A1A1A] rounded-xl">
              <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff320f] from-0% via-[#262626] via-50%  to-[#1c1c1c] to-90% mb-[14px] 2xl:mb-[24px]">
                <Icon className=" text-[#caff33] text-[25px]" icon="solar:dollar-bold" />
              </div>
              <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px]">Payment Solutions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
