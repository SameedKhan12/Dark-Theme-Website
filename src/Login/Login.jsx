import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useResponsive from "../Hooks/useResponsive";
import { Icon } from "@iconify/react";
import Testemonials from "../Home/Testemonials.jsx";
import Ab4 from "../assets/Abstract design/Abstract Design4.png"
import BgImg from '../assets/2903964_25862.jpg'
const Login = () => {
  const [res] = useResponsive();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="font-lexend text-white">
      <Navbar />
      <div className="flex justify-center w-full relative z-50 mb-[80px] lg:mb-[120px] 2xl:mb-[150px]">
        <div className="relative flex flex-col items-center w-[90%] lg:w-[80%] px-[30px] md:px-10 lg:px-0 py-[30px] md:py-[60px] lg:py-[80px] 2xl:py-[100px]  bg-[#1C1C1C] gap-[40px] lg:gap-[60px] 2xl:gap-[80px] rounded-3xl border border-[#262626]">
          <img className="w-[167px] lg:w-[256px] 2xl:w-[342px] absolute top-0 right-0" src={Ab4} alt="" />
          <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] text-center relative z-10">
            <h1 className="text-[#caff33] 2xl:text-[48px] lg:text-[38px] text-[28px]">
              Login
            </h1>
            <p
              className={`text-[#B3B3B3] ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )} pt-[20px]`}
            >
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] flex flex-col items-center gap-[24px] lg:gap-[30px] 2xl:gap-[40px]">
            <form
              className="relative z-20 flex w-full lg:flex-row flex-col justify-between gap-[20px] lg:gap-[24px] 2xl:gap-[30px]"
              action=""
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="bg-[#1A1A1A] border-[#262626] border rounded-full p-[16px] lg:p-[20px] 2xl:p-[24px] placeholder:text-[#59595A] text-[#B3B3B3] outline-none w-full focus:outline-2 focus:outline-[#B3B3B3] focus:border-none"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name=""
                id=""
                placeholder="password"
                className="bg-[#1A1A1A] border-[#262626] border rounded-full p-[16px] lg:p-[20px] 2xl:p-[24px] placeholder:text-[#59595A] text-[#B3B3B3] w-full focus:outline-2 focus:outline-[#B3B3B3] focus:border-none"
              />
            </form>
            <div
              className={`text-center underline ${res(
                "text-[18px]",
                "text-[16px]",
                "text-[14px]"
              )}`}
            >
              forgot password?
            </div>
            <div className="flex flex-col items-center gap-[24px] w-full px-0 lg:px-[130px] 2xl:px-[254px]">
              <button className="w-full px-[24px] py-[14px] 2xl:px-[20px] 2xl:py-[18px] bg-[#caff33] text-[#262626] rounded-full">
                {/* <div className="w-[250px] lg:w-[356px] 2xl:w-[518px]"> */}
                Login
                {/* </div> */}
              </button>
              <button className="w-full px-[24px] py-[14px] 2xl:px-[20px] 2xl:py-[18px] bg-[#262626] border border-[#333333] rounded-full">
                {/* <div className="w-[250px] lg:w-[356px] 2xl:w-[518px]"> */}
                Sign up
                {/* </div> */}
              </button>
              <div className="w-full flex flex-col gap-[24px] 2xl:gap-[30px]">
                <div className="flex gap-[16px] 2xl:gap-[20px] items-center">
                  <div className="w-full h-0 border border-[#b3b3b3]"></div>
                  <span
                    className={`text-[#B3B3B3] ${res(
                      "text-[18px]",
                      "text-[16px]",
                      "text-[14px]"
                    )} text-nowrap`}
                  >
                    Or Continue with
                  </span>
                  <div className="w-full h-0 border border-[#b3b3b3]"></div>
                </div>
                <div className="w-full flex justify-center gap-[20px] 2xl:gap-[24px]">
                  <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff321d] from-10% via-[#262626] via-50%  to-[#1c1c1c] to-80%">
                    <Icon
                      className=" text-[#caff33] text-[24px] 2xl:text-[30px]"
                      icon="ri:google-fill"
                    />
                  </div>
                  <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff321d] from-10% via-[#262626] via-50%  to-[#1c1c1c] to-80%">
                    <Icon
                      className=" text-[#caff33] text-[24px] 2xl:text-[30px]"
                      icon="ic:baseline-facebook"
                    />
                  </div>
                  <div className="inline-block p-[20px] rounded-full bg-gradient-to-b from-[#c8ff321d] from-10% via-[#262626] via-50%  to-[#1c1c1c] to-80%">
                    <Icon
                      className=" text-[#caff33] text-[24px] 2xl:text-[30px]"
                      icon="ic:baseline-apple"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testemonials/>
      <Footer />
    </div>
  );
};

export default Login;
