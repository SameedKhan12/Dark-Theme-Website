import { Icon } from "@iconify/react";
import React from "react";
import Logo from "../assets/Logo/Logo.png";
import useResponsive from "../Hooks/useResponsive";

const Footer = () => {
  const [res] = useResponsive();
  return (
    <div className="">
      <footer className="max-w-[1580px] mx-auto max-2xl:mx-[20px] pt-[50px] pb-[30px] lg:pt-[60px] 2xl:pt-[100px] 2xl:pb-[50px] flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px]">
        <div className="flex flex-col items-center gap-[40px]">
          <img src={Logo} alt="" />
          <nav>
            <ul className="flex gap-[14px] lg:gap-[20px] 2xl:gap-[26px]">
              <li
                className={`text-[#e4e4e7] ${res(
                  "text-[18px]",
                  "text-[16px]",
                  "text-[14px]"
                )}`}
              >
                Home
              </li>
              <li
                className={`text-[#e4e4e7] ${res(
                  "text-[18px]",
                  "text-[16px]",
                  "text-[14px]"
                )}`}
              >
                Careers
              </li>
              <li
                className={`text-[#e4e4e7] ${res(
                  "text-[18px]",
                  "text-[16px]",
                  "text-[14px]"
                )}`}
              >
                About
              </li>
              <li
                className={`text-[#e4e4e7] ${res(
                  "text-[18px]",
                  "text-[16px]",
                  "text-[14px]"
                )}`}
              >
                Security
              </li>
            </ul>
          </nav>
        </div>
        <hr className="border border-[#262626]" />
        <div className="flex justify-center gap-[20px] flex-wrap">
          <button
            className={`flex gap-[6px] items-center text-[#e4e4e7] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            <Icon
              icon="fa-solid:envelope"
              className="text-[#caff33] text-[20px]"
            />
            <span>hello@skillbirdge.com</span>
          </button>
          <button
            className={`flex gap-[6px] items-center text-[#e4e4e7] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            <Icon
              icon="heroicons:phone-solid"
              className="text-[#caff33] text-[20px]"
            />
            <span>+92 333 9377777</span>
          </button>
          <button
            className={`flex gap-[6px] items-center text-[#e4e4e7] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            <Icon
              icon="fluent:location-12-filled"
              className="text-[#caff33] text-[20px]"
            />
            <span>Somewhere in the World</span>
          </button>
        </div>
        <hr className="border border-[#262626]" />
        <div className="flex justify-between items-center lg:p-[12px] 2xl:p-[14px] bg-[#1A1A1A] border border-[#262626] rounded-full">
          <div className="flex gap-[8px] 2xl:gap-[14px]">
            <div className="p-[12px] 2xl:p-[14px] bg-[#caff33] rounded-full">
              <Icon
                icon={"fa-brands:facebook"}
                className="text-[20px] 2xl:text-[24px] text-[#262626]"
              />
            </div>
            <div className="p-[12px] 2xl:p-[14px] bg-[#caff33] rounded-full">
              <Icon
                icon={"fa-brands:twitter"}
                className="text-[20px] 2xl:text-[24px] text-[#262626]"
              />
            </div>
            <div className="p-[12px] 2xl:p-[14px] bg-[#caff33] rounded-full">
              <Icon
                icon={"fa-brands:linkedin"}
                className="text-[20px] 2xl:text-[24px] text-[#262626]"
              />
            </div>
          </div>
          <span
            className={`text-[#B3B3B3] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            YourBank All Rights Reserved
          </span>
          <div
            className={`flex gap-[8px] 2xl:gap-[12px] text-[#B3B3B3] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )}`}
          >
            <span>Privacy Policy</span>
            {/* <hr className="border border-[#B3B3B3] rotate-90 "/> */}

            <div className="w-px h-6 bg-[#B3B3B3]"></div>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
