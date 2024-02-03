import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Ab4 from "../../assets/Abstract design/Abstract Design4.png";
import Ab5 from "../../assets/Abstract design/Ab5.png";
import AboutImg from "../../assets/AboutImg.png";
import plant from "../../assets/plant.png";
import eye from "../../assets/eye.png";
import img from "../../assets/Image.png";
import img1 from "../../assets/Image (1).png";
import img2 from "../../assets/Image (2).png";
import img3 from "../../assets/Image (3).png";
const About = () => {
  return (
    <div className="font-lexend text-white">
      <Navbar selected={2} />
      <div className="xl:max-w-[1280px] 2xl:max-w-[1580px] mx-5 lg:mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row justify-end  p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px] 2xl:p-[50px]  bg-[#1C1C1C] relative w-full 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
          <img
            src={Ab4}
            className="absolute top-0 right-0 w-[199px] h-[189px] lg:w-[334px] lg:h-[317px] 2xl:w-[505px] 2xl:h-[480px]"
            alt=""
          />
          <div className="bg-[#1a1a1a] flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[60px] 2xl:p-[80px] rounded-3xl lg:rounded-br-[100px] lg:rounded-none text-center lg:text-start w-[100%] lg:w-[60%] relative z-10 -mt-[41px] lg:-mt-[0px] lg:-mr-[174px] 2xl:-mr-[260px] h-fit">
            <div className="">
              <div className="text-[20px]">Welcome to YourBank</div>
              <div className=" max-lg:text-center ">
                <p className="text-[28px] md:text-[48px] lg:text-[58px]">
                  Where Banking Meets{" "}
                  <span className="max-lg:block text-[#CAFF33]">
                    Excellence!{" "}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-[#E4E4E7] text-[14px] md:text-[16px] lg:text-[18px] max-md:px-[15px] max-lg:px-[20px]">
              At YourBank, we believe that banking should be more than just
              transactions. It should be an experience that empowers individuals
              and businesses to thrive and reach their financial goals. As a
              trusted financial institution, we are committed to delivering
              exceptional banking services that go beyond expectations. With a
              focus on innovation, personalized solutions, and unwavering
              integrity, we strive to provide the best banking experience for
              our valued customers. Join us on this exciting journey and
              discover a new level of banking excellence.
            </p>
          </div>
          <img
            className="h-[253px] lg:h-[568px] 2xl:h-[716px] relative right-0 z-0"
            src={AboutImg}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[60px] 2xl:gap-[80px] mb-[80px] lg:mb-[120px] 2xl:mb-[150px]">
          <div className="lg:text-start text-center w-full lg:w-[80%]">
            <h3 className="text-[28px] lg:text-[38px] 2xl:text-[48px] text-[#caff33]">
              Mission & Vision
            </h3>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC]">
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              a strong commitment to customer satisfaction and community
              development
            </p>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-start object-contain">
              <div
                id="img"
                className="w-fit border border-[#262626] relative px-[20px] pt-[20px] lg:px-[60px] lg:pt-[60px] flex items-center overflow-hidden rounded-t-[60px] rounded-b-xl justify-center"
              >
                <img
                  className="absolute z-10 w-[412px] lg:w-[526px] 2xl:w-[634px] h-[392px] lg:h-[500px] 2xl:h-[602px]"
                  src={Ab5}
                  alt=""
                />
                <img
                  className="relative z-20 lg:max-w-max mx-[20px] mt-[20px] lg:mx-[60px] lg:mt-[60px]"
                  src={plant}
                  alt=""
                />
              </div>
              <div className="flex flex-col max-lg:border-t max-lg:border-t-[#caff33] lg:border-l-2 lg:border-l-[#caff33]  lg:pl-[40px] 2xl:pl-[50px] gap-[10px] 2xl:gap-[14px] lg:basis-3/5 max-lg:pt-[30px]">
                <h3 className="text-[26px] lg:text-[32px] 2xl:text-[38px]">
                  Mission
                </h3>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px] max-lg:text-center">
                  At YourBank, our mission is to empower our customers to
                  achieve financial success. We are dedicated to delivering
                  innovative banking solutions that cater to their unique needs.
                  Through personalized services, expert guidance, and
                  cutting-edge technology, we aim to build strong, lasting
                  relationships with our customers. Our mission is to be their
                  trusted partner, helping them navigate their financial journey
                  and realize their dreams.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-start object-contain mt-[50px] lg:-mt-[84px] 2xl:-mt-[100px]">
              <div
                id="img"
                className="w-fit border border-[#262626] relative px-[20px] pt-[20px] lg:px-[60px] lg:pt-[60px] flex items-center overflow-hidden rounded-t-[60px] rounded-b-xl justify-center"
              >
                <img
                  className="absolute z-10 w-[412px] lg:w-[526px] 2xl:w-[634px] h-[392px] lg:h-[500px] 2xl:h-[602px]"
                  src={Ab5}
                  alt=""
                />
                <img
                  className="relative z-20 lg:max-w-fit mx-[20px] mt-[20px] lg:mx-[60px] lg:mt-[60px]"
                  src={eye}
                  alt=""
                />
              </div>
              <div className="flex flex-col max-lg:border-t max-lg:border-t-[#caff33] lg:border-r-2 lg:border-r-[#caff33]  lg:pl-[40px] 2xl:pl-[50px] gap-[10px] 2xl:gap-[14px] lg:basis-3/5 max-lg:pt-[30px]">
                <h3 className="text-[26px] lg:text-[32px] 2xl:text-[38px]">
                  Vision
                </h3>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Our vision at YourBank is to redefine banking by creating a
                  seamless and personalized experience for our customers. We
                  envision a future where banking is accessible, transparent,
                  and tailored to individual preferences. Through continuous
                  innovation and collaboration, we strive to be at the forefront
                  of the industry, setting new standards for customer-centric
                  banking. Our vision is to be the preferred financial
                  institution, known for our unwavering commitment to
                  excellence, trust, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[60px] 2xl:gap-[80px] mb-[80px] lg:mb-[120px] 2xl:mb-[150px]">
          <div className="lg:text-start text-center w-full lg:w-[80%]">
            <h3 className="text-[28px] lg:text-[38px] 2xl:text-[48px] text-[#caff33]">
              Press Releases{" "}
            </h3>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC]">
              Stay updated with the latest happenings and exciting developments
              at YourBank through our press releases.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 2xl:gap-[30px]">
            {/* Card 1 */}
            <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[51px] p-[20px] lg:p-[24px] 2xl:p-[30px] bg-[#1C1C1C] border border-[#262626] rounded-3xl">
              <img src={img} alt="" />
              <div className="flex flex-col lg:px-[24px] 2xl:px-[30px] gap-[24px] 2xl:gap-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-[20px] ">
                  <h3 className=" text-[18px] lg:text-[20px] 2xl:text-[24px] text-white">
                    YourBank Launches New Rewards Program to Enhance Customer
                    Loyalty and Satisfaction
                  </h3>
                  <span>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Location: India
                    </button>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Date: 06/11/2024
                    </button>
                  </span>
                </div>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[51px] p-[20px] lg:p-[24px] 2xl:p-[30px] bg-[#1C1C1C] border border-[#262626] rounded-3xl">
              <img src={img1} alt="" />
              <div className="flex flex-col lg:px-[24px] 2xl:px-[30px] gap-[24px] 2xl:gap-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-[20px] ">
                  <h3 className=" text-[18px] lg:text-[20px] 2xl:text-[24px] text-white">
                    YourBank Expands Branch Network with Opening of New Location
                    in Chennai
                  </h3>
                  <span>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Location: India
                    </button>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Date: 12/11/2024
                    </button>
                  </span>
                </div>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  YourBank is excited to announce the grand opening of our
                  newest branch in [City]. This expansion is a testament to our
                  continued commitment to serving our customers and providing
                  them with convenient access to our comprehensive range of
                  banking services. The new branch will feature state-of-the-art
                  facilities, a team of dedicated professionals, and a
                  personalized approach to banking, further strengthening our
                  presence in the local community.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[51px] p-[20px] lg:p-[24px] 2xl:p-[30px] bg-[#1C1C1C] border border-[#262626] rounded-3xl">
              <img src={img2} alt="" />
              <div className="flex flex-col lg:px-[24px] 2xl:px-[30px] gap-[24px] 2xl:gap-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-[20px] ">
                  <h3 className=" text-[18px] lg:text-[20px] 2xl:text-[24px] text-white">
                    YourBank Partners with Local Nonprofit to Support Financial
                    Education Initiatives
                  </h3>
                  <span>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Location: India
                    </button>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Date: 24/11/2024
                    </button>
                  </span>
                </div>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative, demonstrating our commitment to environmental
                  responsibility. This initiative includes a range of
                  sustainable banking products and services, such as green
                  loans, eco-friendly investment options, and paperless banking
                  solutions. By incorporating sustainable practices into our
                  operations, we aim to contribute to a greener future while
                  providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[51px] p-[20px] lg:p-[24px] 2xl:p-[30px] bg-[#1C1C1C] border border-[#262626] rounded-3xl">
              <img src={img3} alt="" />
              <div className="flex flex-col lg:px-[24px] 2xl:px-[30px] gap-[24px] 2xl:gap-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-[20px] ">
                  <h3 className=" text-[18px] lg:text-[20px] 2xl:text-[24px] text-white">
                    YourBank Launches Sustainable Banking Initiative to Promote
                    Environmental Responsibility
                  </h3>
                  <span>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Location: India
                    </button>
                    <button className="px-[12px] lg:px-[14px] 2xl:px-[16px] py-[4px] lg:py-[6px] 2xl:py-[8px] rounded-full text-[14px] lg:text-[16px] 2xl:text-[18px] text-[#CCCCCC] border border-[#262626]">
                      Date: 06/11/2024
                    </button>
                  </span>
                </div>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  YourBank is excited to unveil our new Sustainable Banking
                  Initiative, demonstrating our commitment to environmental
                  responsibility. This initiative includes a range of
                  sustainable banking products and services, such as green
                  loans, eco-friendly investment options, and paperless banking
                  solutions. By incorporating sustainable practices into our
                  operations, we aim to contribute to a greener future while
                  providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
