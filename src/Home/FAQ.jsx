import { Icon } from "@iconify/react";
import React from "react";
import useResponsive from "../Hooks/useResponsive";

const FAQ = () => {
  const [res] = useResponsive();
  return (
    <div className=" flex flex-col max-w-[1580px] mx-auto max-2xl:mx-[20px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px] 2xl:gap-y-[80px] lg:gap-y-[60px] gap-y-[50px]">
      <div
        id="text-con"
        className="lg:text-start text-center flex flex-col lg:items-start items-center"
      >
        <h3 className={`${res("text-[48px]", "text-[38px]", "text-[28px]")}`}>
          <span className="text-[#CAFF33]">Frequently</span> Asked Questions
        </h3>
        <p
          className={`text-[#B3B3B3] ${res(
            "text-[18px]",
            "text-[16px]",
            "text-[14px]"
          )} w-[90%] sm:w-[80%] md:w-[70%] pt-[20px]`}
        >
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>
      <div>
        <div className="relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] lg:gap-[25px] 2xl:gap-[30px]">
          <div className="border border-[#262626] 2xl:gap-y-[30px] lg:gap-y-[25px] gap-y-[20px] flex flex-col 2xl:p-[50px] lg:p-[40px] p-[30px] rounded-2xl">
            <h3 className="2xl:text-[20px] text-[#ffffff]">
              How do I open an account with YourBank?
            </h3>
            <hr className="border-[#262626]" />
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts,
              provide the required information, and complete the application
              process. If you have any questions or need assistance, our
              customer support team is available to help.
            </p>
          </div>
          <div className="border border-[#262626] 2xl:gap-y-[30px] lg:gap-y-[25px] gap-y-[20px] flex flex-col 2xl:p-[50px] lg:p-[40px] p-[30px] rounded-2xl">
            <h3 className="2xl:text-[20px] text-[#ffffff]">
              How do I open an account with YourBank?
            </h3>
            <hr className="border-[#262626]" />
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts,
              provide the required information, and complete the application
              process. If you have any questions or need assistance, our
              customer support team is available to help.
            </p>
          </div>
          <div className="border border-[#262626] 2xl:gap-y-[30px] lg:gap-y-[25px] gap-y-[20px] flex flex-col 2xl:p-[50px] lg:p-[40px] p-[30px] rounded-2xl">
            <h3 className="2xl:text-[20px] text-[#ffffff]">
              How do I open an account with YourBank?
            </h3>
            <hr className="border-[#262626]" />
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts,
              provide the required information, and complete the application
              process. If you have any questions or need assistance, our
              customer support team is available to help.
            </p>
          </div>
          <div className="border border-[#262626] 2xl:gap-y-[30px] lg:gap-y-[25px] gap-y-[20px] flex flex-col 2xl:p-[50px] lg:p-[40px] p-[30px] rounded-2xl">
            <h3 className="2xl:text-[20px] text-[#ffffff]">
              How do I open an account with YourBank?
            </h3>
            <hr className="border-[#262626]" />
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              Opening an account with YourBank is easy. Simply visit our website
              and click on the "Open an Account" button. Follow the prompts,
              provide the required information, and complete the application
              process. If you have any questions or need assistance, our
              customer support team is available to help.
            </p>
          </div>

        </div>
        <div className="absolute z-20 bottom-0 w-full h-[275px] bg-gradient-to-b from-transparent from-10% to-[#191919] to-90%"></div>
        </div>
        <div>
          <button
            className={`px-[20px] py-[14px] 2xl:px-[23px] 2xl:py-[18px] mx-auto bg-[#1c1c1c] border border-[#262626] rounded-full flex items-center ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            Load All FAQ's <Icon  icon="icon-park-outline:down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
