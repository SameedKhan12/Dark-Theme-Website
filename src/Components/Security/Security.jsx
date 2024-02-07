import React from "react";
import Navbar from "../../Navbar/Navbar";
import SecurityImg from "../../assets/SecurityImg.png";
import Ab4 from "../../assets/Abstract design/Abstract Design4.png";
import { Icon } from "@iconify/react";
import FAQ from "../../Home/FAQ"
import Footer from "../../Footer/Footer.jsx"
import { motion, useScroll, useSpring } from "framer-motion";
const Security = () => {
  const  {scrollYProgress}  = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="font-lexend text-white">
      <motion.div style={{scaleX}} className={`fixed top-0 inset-x-0 h-1 bg-[#caff33] z-30`} ></motion.div>
      <Navbar selected={3} />
      <div className="xl:max-w-[1280px] 2xl:max-w-[1580px] mx-5 lg:mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-end  p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px] 2xl:p-[50px]  bg-[#1C1C1C] relative w-full 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
          <img
            src={Ab4}
            className="absolute top-0 right-0 w-[199px] h-[189px] lg:w-[334px] lg:h-[317px] 2xl:w-[505px] 2xl:h-[480px]"
            alt=""
          />
          <div className="bg-[#1a1a1a] flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[60px] 2xl:p-[80px] rounded-3xl lg:rounded-br-[100px] lg:rounded-none text-center lg:text-start w-[100%] lg:w-[60%] relative z-10 -mt-[41px] lg:-mt-[0px] lg:-mr-[174px] 2xl:-mr-[260px] h-fit">
            <div className="">
              <div className=" max-lg:text-center ">
                <p className="text-[28px] md:text-[48px] lg:text-[58px]">
                  Your Security is Our{" "}
                  <span className="max-lg:block text-[#CAFF33]">
                    Top Priority{" "}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-[#CCCCCC] text-[14px] md:text-[16px] lg:text-[18px] max-md:px-[15px] max-lg:px-[20px]">
              At YourBank, we understand the importance of keeping your
              financial information secure. We employ robust security measures
              and advanced technologies to protect your personal and financial
              data. Rest assured that when you bank with us, your security is
              our utmost priority.
            </p>
          </div>
          <img
            className="w-full lg:w-[60%] relative right-0 z-0"
            src={SecurityImg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[60px] 2xl:gap-[80px] mb-[80px] lg:mb-[120px] 2xl:mb-[150px]">
          <div className="lg:text-start text-center w-full lg:w-[80%]">
            <h3 className="text-[28px] lg:text-[38px] 2xl:text-[48px] text-[#caff33]">
              <span className="text-white">How We</span> Protect You
            </h3>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC]">
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times
            </p>
          </div>
          <div className="lg:px-[80px] lg:pt-[80px] 2xl:px-[100px] 2xl:pt-[100px] lg:rounded-t-[80px] grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-[30px]">
            {/* Card 1️⃣ 👇👇👇👇👇👇👇👇👇👇👇*/}
            <div className="flex flex-col gap-[18px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[40px] 2xl:p-[50px] rounded-[20px] border border-[#262626] bg-gradient-to-r from-[#c8ff3209] from-0% via-transparent via-90%  to-transparent to-90%">
              <div className="flex items-center gap-[14px] 2xl:gap-[20px]">
                <div className="rounded-full p-[8px] 2xl:p-[12px] bg-gradient-to-b from-[#c8ff3209] from-50%  to-[#1c1c1c] to-100%">

                <div className="p-px rounded-full bg-gradient-to-b from-[#c8ff3222] from-0%  to-[#1c1c1c] to-90%">
                  <div className="p-[14px] lg:p-[16px] 2xl:p-[20px] rounded-full bg-gradient-to-b from-[#c8ff3209] from-70%  to-[#1c1c1c] to-100%">
                    <Icon
                      className="text-[#caff33] text-[24px] lg:text-[28px] 2xl:text-[34px]"
                      icon="heroicons-solid:view-grid-add"
                    />
                  </div>
                </div>
                </div>
                <h4 className="text-lg lg:text-xl 2xl:text-[24px]">Secure Online Banking Platform</h4>
              </div>
              <div>
                <p className="text-[#cccccc] text-sm lg:text-base 2xl:text-lg">
                  Our online banking platform is built with multiple layers of
                  security to safeguard your information. We utilize
                  industry-standard encryption protocols to ensure that your
                  data remains confidential and protected during transmission.
                </p>
              </div>
            </div>
            {/* Card 2️⃣ 👇👇👇👇👇👇👇👇👇👇👇*/}
            <div className="flex flex-col gap-[18px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[40px] 2xl:p-[50px] rounded-[20px] border border-[#262626] bg-gradient-to-r from-[#c8ff3209] from-0% via-transparent via-90%  to-transparent to-90%">
              <div className="flex items-center gap-[14px] 2xl:gap-[20px]">
                <div className="rounded-full p-[8px] 2xl:p-[12px] bg-gradient-to-b from-[#c8ff3209] from-50%  to-[#1c1c1c] to-100%">

                <div className="p-px rounded-full bg-gradient-to-b from-[#c8ff3222] from-0%  to-[#1c1c1c] to-90%">
                  <div className="p-[14px] lg:p-[16px] 2xl:p-[20px] rounded-full bg-gradient-to-b from-[#c8ff3209] from-70%  to-[#1c1c1c] to-100%">
                    <Icon
                      className="text-[#caff33] text-[24px] lg:text-[28px] 2xl:text-[34px]"
                      icon="bi:stack"
                    />
                  </div>
                </div>
                </div>
                <h4 className="text-lg lg:text-xl 2xl:text-[24px]">Secure Online Banking Platform</h4>
              </div>
              <div>
                <p className="text-[#cccccc] text-sm lg:text-base 2xl:text-lg">
                  Our online banking platform is built with multiple layers of
                  security to safeguard your information. We utilize
                  industry-standard encryption protocols to ensure that your
                  data remains confidential and protected during transmission.
                </p>
              </div>
            </div>
            {/* Card 3️⃣ 👇👇👇👇👇👇👇👇👇👇👇*/}
            <div className="flex flex-col gap-[18px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[40px] 2xl:p-[50px] rounded-[20px] border border-[#262626] bg-gradient-to-r from-[#c8ff3209] from-0% via-transparent via-90%  to-transparent to-90%">
              <div className="flex items-center gap-[14px] 2xl:gap-[20px]">
                <div className="rounded-full p-[8px] 2xl:p-[12px] bg-gradient-to-b from-[#c8ff3209] from-50%  to-[#1c1c1c] to-100%">

                <div className="p-px rounded-full bg-gradient-to-b from-[#c8ff3222] from-0%  to-[#1c1c1c] to-90%">
                  <div className="p-[14px] lg:p-[16px] 2xl:p-[20px] rounded-full bg-gradient-to-b from-[#c8ff3209] from-70%  to-[#1c1c1c] to-100%">
                    <Icon
                      className="text-[#caff33] text-[24px] lg:text-[28px] 2xl:text-[34px]"
                      icon="mdi:stars"
                    />
                  </div>
                </div>
                </div>
                <h4 className="text-lg lg:text-xl 2xl:text-[24px]">Secure Online Banking Platform</h4>
              </div>
              <div>
                <p className="text-[#cccccc] text-sm lg:text-base 2xl:text-lg">
                  Our online banking platform is built with multiple layers of
                  security to safeguard your information. We utilize
                  industry-standard encryption protocols to ensure that your
                  data remains confidential and protected during transmission.
                </p>
              </div>
            </div>
            {/* Card 4️⃣ 👇👇👇👇👇👇👇👇👇👇👇*/}
            <div className="flex flex-col gap-[18px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[40px] 2xl:p-[50px] rounded-[20px] border border-[#262626] bg-gradient-to-r from-[#c8ff3209] from-0% via-transparent via-90%  to-transparent to-90%">
              <div className="flex items-center gap-[14px] 2xl:gap-[20px]">
                <div className="rounded-full p-[8px] 2xl:p-[12px] bg-gradient-to-b from-[#c8ff3209] from-50%  to-[#1c1c1c] to-100%">

                <div className="p-px rounded-full bg-gradient-to-b from-[#c8ff3222] from-0%  to-[#1c1c1c] to-90%">
                  <div className="p-[14px] lg:p-[16px] 2xl:p-[20px] rounded-full bg-gradient-to-b from-[#c8ff3209] from-70%  to-[#1c1c1c] to-100%">
                    <Icon
                      className="text-[#caff33] text-[24px] lg:text-[28px] 2xl:text-[34px]"
                      icon="heroicons:currency-pound-solid"
                    />
                  </div>
                </div>
                </div>
                <h4 className="text-lg lg:text-xl 2xl:text-[24px]">Secure Online Banking Platform</h4>
              </div>
              <div>
                <p className="text-[#cccccc] text-sm lg:text-base 2xl:text-lg">
                  Our online banking platform is built with multiple layers of
                  security to safeguard your information. We utilize
                  industry-standard encryption protocols to ensure that your
                  data remains confidential and protected during transmission.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        
      </div>
      <Footer />
    </div>
  );
};

export default Security;
