import React from "react";
import { ContainerWrapper } from "../../Cpomponents";
import CareerImg from "../../assets/CareerImg.png";
import useResponsive from "../../Hooks/useResponsive";
import { Icon } from "@iconify/react";
import Ab4 from '../../assets/Abstract design/Abstract Design4.png'

const CareerPage = () => {
  const [res] = useResponsive();
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-end  p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px] 2xl:p-[50px]  bg-[#1C1C1C] relative w-full 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
        <img src={Ab4} className="absolute top-0 right-0 w-[199px] h-[189px] lg:w-[334px] lg:h-[317px] 2xl:w-[505px] 2xl:h-[480px]" alt="" />
        <div className="bg-[#1a1a1a] flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[24px] p-[24px] lg:p-[60px] 2xl:p-[80px] rounded-3xl lg:rounded-br-[100px] lg:rounded-none text-center lg:text-start w-[100%] lg:w-[60%] relative z-10 -mt-[41px] lg:-mt-[0px] lg:-mr-[174px] 2xl:-mr-[260px] h-fit">
          <div className="">
            <div className=" max-lg:text-center ">
              <p className="text-[28px] md:text-[38px] lg:text-[48px]">
                Welcome to{" "}
                <span className="max-lg:block text-[#CAFF33]">YorBank </span>
                Careers
              </p>
            </div>
          </div>
          <p className="text-[#E4E4E7] text-[14px] md:text-[16px] lg:text-[18px] max-md:px-[15px] max-lg:px-[20px]">
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
        <img
          className="w-full lg:w-[60%] relative right-0 z-0"
          src={CareerImg}
          alt=""
        />
      </div>

      {/* Second Container Our Values */}

      <div className="flex flex-col gap-[50px] lg:gap-[60px] 2xl:gap-[80px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
        {/* Text Container */}
        <div
          id="text-con"
          className="lg:text-start text-center flex flex-col lg:items-start items-center "
        >
          <h3 className={`${res("text-[48px]", "text-[38px]", "text-[28px]")}`}>
            Our <span className="text-[#CAFF33]">Values</span>
          </h3>
          <p
            className={`text-[#B3B3B3] ${res(
              "text-[18px]",
              "text-[16px]",
              "text-[14px]"
            )} w-[90%] sm:w-[80%] md:w-[70%] pt-[20px]`}
          >
            At YourBank, we value our employees and are dedicated to their
            well-being and success. We offer a comprehensive range of benefits
            designed to support their personal and professional growth.
          </p>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[60px] 2xl:gap-[80px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[30px] 2xl:pl-[30px] border-l border-l-[#caff33]">
            <h3
              className={`text-[#4C4C4D] text-[30px] lg:text-[40px] 2xl:text-[58px] `}
            >
              Integrity
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[30px] 2xl:pl-[30px] border-l border-l-[#caff33]">
            <h3
              className={`text-[#4C4C4D] text-[30px] lg:text-[40px] 2xl:text-[58px] `}
            >
              Customer Centricity
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              Our customers are at the heart of everything we do. We are
              dedicated to understanding their needs, providing personalized
              solutions, and delivering exceptional service that exceeds
              expectations.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[30px] 2xl:pl-[30px] border-l border-l-[#caff33]">
            <h3
              className={`text-[#4C4C4D] text-[30px] lg:text-[40px] 2xl:text-[58px] `}
            >
              Collaboration
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              We foster a collaborative and inclusive work environment, where
              teamwork and diversity are celebrated. By leveraging the unique
              strengths and perspectives of our employees, we drive innovation
              and achieve greater success together.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-[14px] lg:gap-[20px] 2xl:gap-[30px] 2xl:pl-[30px] border-l border-l-[#caff33]">
            <h3
              className={`text-[#4C4C4D] text-[30px] lg:text-[40px] 2xl:text-[58px] `}
            >
              Innovation
            </h3>
            <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
              We embrace change and constantly seek innovative solutions to meet
              the evolving needs of our customers. We encourage our employees to
              think creatively, challenge conventions, and explore new ideas to
              drive the future of banking.
            </p>
          </div>
        </div>
      </div>

      {/* Forth Container Jobs Opening */}

      <div className="flex flex-col gap-[50px] lg:gap-[60px] 2xl:gap-[80px] 2xl:mb-[150px] lg:mb-[120px] mb-[80px]">
        <div className="lg:text-start text-center flex flex-col lg:items-start items-center">
          <h3 className="text-[#caff33] text-[28px] lg:text-[38px] 2xl:text-[48px]">
            Job Opening
          </h3>
          <p className="text-[#b3b3b3] text-[14px] lg:text-[16px] 2xl:text-[18px]">
            Explore exciting job openings at YourBank, where we value talent,
            innovation, and a passion for customer service. Join our team and be
            part of shaping a brighter future in the banking industry
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 2xl:gap-[30px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px] p-[24px] lg:p-[40px] 2xl:p-[50px] bg-[#1c1c1c] rounded-[16px]">
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
              <h4 className="text-white text-[20px] lg:text-[24px] 2xl:text-[30px]">
                Relation Manager
              </h4>
              <div className="flex lg:flex-row flex-col gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                <button className="w-fit bg-[#1a1a1a] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Location: India
                </button>
                <button className="w-fit bg-[#1a1a1a] text-[#CCCCCC] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Department: Retail Banking
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] lg:gap-[40px] f-full">
              <div className="flex flex-col gap-[8px] lg:gap-[16px] 2xl:gap-[20px]">
                <h5 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  About This Job
                </h5>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  As a Relationship Manager at YourBank, you will be responsible
                  for developing and maintaining relationships with our valued
                  customers. You will proactively identify their financial needs
                  and offer tailored solutions to help them achieve their goals.
                  We are seeking individuals with excellent communication
                  skills, a strong sales acumen, and a passion for delivering
                  exceptional customer service.
                </p>
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[16px] 2xl:gap-[20px]">
                <h6 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  Requirements & Qualifications
                </h6>
                <ul
                  id="specs"
                  className="flex flex-col gap-[14px] 2xl:gap-[20px]"
                >
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Bachelor's degree in Business, Finance, or a related field
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Minimum of 3 years of experience in sales or relationship
                      management in the banking industry
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Proven track record of meeting and exceeding sales targets
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Excellent interpersonal and negotiation skills
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Strong knowledge of banking products and services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-fit px-[20px] 2xl:px-[30px] py-[12px] 2xl:py-[16px] bg-[#caff33] text-[#1c1c1c] rounded-full ">
              Apply Now
            </button>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px] p-[24px] lg:p-[40px] 2xl:p-[50px] bg-[#1c1c1c] rounded-[16px]">
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
              <h4 className="text-white text-[20px] lg:text-[24px] 2xl:text-[30px]">
                Risk Analyst
              </h4>
              <div className="flex lg:flex-row flex-col gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                <button className="w-fit bg-[#1a1a1a] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Location: India
                </button>
                <button className="w-fit bg-[#1a1a1a] text-[#CCCCCC] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Department: Risk Management{" "}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] lg:gap-[40px] h-full">
              <div className="flex flex-col gap-[8px] lg:gap-[16px] 2xl:gap-[20px]">
                <h5 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  About This Job
                </h5>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  As a Risk Analyst at YourBank, you will play a vital role in
                  identifying and assessing potential risks to our organization.
                  You will analyze data, conduct risk assessments, and develop
                  strategies to mitigate risks. We are looking for
                  detail-oriented individuals with strong analytical skills and
                  a solid understanding of risk management principles.
                </p>
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[16px] 2xl:gap-[20px]">
                <h6 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  Requirements & Qualifications
                </h6>
                <ul
                  id="specs"
                  className="flex flex-col gap-[14px] 2xl:gap-[20px]"
                >
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Bachelor's degree in Finance, Economics, or a related
                      field
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Minimum of 2 years of experience in risk management or a
                      similar role
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Proficiency in risk analysis tools and techniques
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Strong analytical and problem-solving skills
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Knowledge of regulatory requirements and industry best
                      practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-fit px-[20px] 2xl:px-[30px] py-[12px] 2xl:py-[16px] bg-[#caff33] text-[#1c1c1c] rounded-full ">
              Apply Now
            </button>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px] p-[24px] lg:p-[40px] 2xl:p-[50px] bg-[#1c1c1c] rounded-[16px]">
            <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
              <h4 className="text-white text-[20px] lg:text-[24px] 2xl:text-[30px]">
                IT Security Specialist
              </h4>
              <div className="flex lg:flex-row flex-col gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                <button className="w-fit bg-[#1a1a1a] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Location: India
                </button>
                <button className="w-fit bg-[#1a1a1a] text-[#CCCCCC] border border-[#262626] rounded-3xl px-[10px] py-[6px] lg:px-[14px] 2xl:px-[16px] 2xl:py-[8px] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Department: Information Technology
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] lg:gap-[40px] h-full">
              <div className="flex flex-col gap-[8px] lg:gap-[16px] 2xl:gap-[20px]">
                <h5 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  About This Job
                </h5>
                <p className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  As an IT Security Specialist at YourBank, you will be
                  responsible for ensuring the security and integrity of our
                  information systems. You will develop and implement security
                  protocols, conduct vulnerability assessments, and respond to
                  security incidents. We are seeking individuals with a strong
                  technical background, knowledge of cybersecurity best
                  practices, and a commitment to maintaining the confidentiality
                  of customer data.
                </p>
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[16px] 2xl:gap-[20px]">
                <h6 className="text-white lg:text-[20px] 2xl:text-[24px]">
                  Requirements & Qualifications
                </h6>
                <ul
                  id="specs"
                  className="flex flex-col gap-[14px] 2xl:gap-[20px]"
                >
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Bachelor's degree in Computer Science, Information
                      Security, or a related field
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Minimum of 5 years of experience in IT security or a
                      similar role
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      In-depth knowledge of network security protocols and
                      technologies
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Familiarity with regulatory frameworks such as PCI DSS and
                      GDPR
                    </span>
                  </li>
                  <li className="flex items-center gap-[6px] lg:gap-[8px] 2xl:gap-[10px]">
                    <div className="w-20px 2xl:w-[24px]">
                      <Icon
                        icon="solar:case-bold"
                        className="text-[20px] 2xl:text-[24px] text-[#CCCCCC]"
                      />
                    </div>
                    <span className="text-[#CCCCCC] text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Professional certifications such as CISSP or CISM are
                      preferred
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-fit px-[20px] 2xl:px-[30px] py-[12px] 2xl:py-[16px] bg-[#caff33] text-[#1c1c1c] rounded-full ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWrapper(CareerPage, "careerpage");
