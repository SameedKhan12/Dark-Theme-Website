import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/Logo/Logo.png";
import AbstractD from "../assets/Abstract design/Abstract Design 2.png";
import { Link } from "react-router-dom";

const Navbar = ({ selected }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] ">
      <img
        className="absolute -top-20 -left-10  w-[760px] "
        src={AbstractD}
        alt=""
      />
      <nav className="flex relative z-20 rounded-[100px] items-center justify-between bg-[#1c1c1c]  xl:max-w-[1280px] 2xl:max-w-[1580px] mx-6 sm:mx-12 xl:mx-auto py-[20px] px-[34px]">
        <img className="" src={Logo} alt="" />
        <ul className="lg:flex hidden">
          <li
            className={`py-[12px] px-[24px] ${
              selected === 0 ? "rounded-[82px] bg-[#262626]" : ""
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`py-[12px] px-[24px] ${
              selected === 1 ? "rounded-[82px] bg-[#262626]" : ""
            }`}
          >
            <Link to={"/career"}>Career</Link>
          </li>
          <li
            className={`py-[12px] px-[24px] ${
              selected === 2 ? "rounded-[82px] bg-[#262626]" : ""
            }`}
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li
            className={`py-[12px] px-[24px] ${
              selected === 3 ? "rounded-[82px] bg-[#262626]" : ""
            }`}
          >
            <Link to={"/security"}>Security</Link>
          </li>
        </ul>
        <div className="lg:inline hidden">
          <Link to={"/signup"}>
            <button className="mr-[30px]">Sign up</button>
          </Link>
          <Link to={"/login"}>
            <button className="py-[14px] px-[30px] text-black bg-[#CAFF33] rounded-[82px]">
              Login
            </button>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline py-[14px] px-[30px] text-black bg-[#CAFF33] rounded-[82px]"
        >
          {isOpen ? (
            <Icon icon="material-symbols:close" />
          ) : (
            <Icon icon="eva:menu-2-outline" />
          )}
        </button>
      </nav>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "block" : "hidden"
        } delay-700 transition-all fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] backdrop-blur-3xl`}
      ></div>
      <div
        id="mobile-menu"
        className={`fixed top-0 w-full z-40 h-screen lg:hidden  transition-all duration-500 ease-in-out transform text-[14px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={` transition-all absolute inset-0 z-40 `}
        ></div>
        <div className="relative left-0 z-50 w-[70%] sm:w-[75%] md:w-[60%] h-full bg-[#1a1a1a] flex flex-col justify-start items-center px-10 py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] ">
          <img className="py-[20px]" src={Logo} alt="" />
          <ul className="block w-full pb-[20px]">
            <li
              className={`py-[12px] w-full text-center ${
                selected === 0 ? "rounded-[82px] bg-[#262626]" : ""
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`py-[12px] w-full text-center ${
                selected === 1 ? "rounded-[82px] bg-[#262626]" : ""
              }`}
            >
              <Link to={"/career"}>Career</Link>
            </li>
            <li
              className={`py-[12px] w-full text-center ${
                selected === 2 ? "rounded-[82px] bg-[#262626]" : ""
              }`}
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              className={`py-[12px] w-full text-center ${
                selected === 3 ? "rounded-[82px] bg-[#262626]" : ""
              }`}
            >
              <Link to={'/security'}>Security</Link>
              
            </li>
          </ul>
          <div className="flex flex-col gap-7 w-full">
            <button className="py-[14px] w-full  text-black bg-[#CAFF33] rounded-[82px]">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="">
              <Link to={"/signup"}>Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
