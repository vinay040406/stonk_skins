import Image from "next/image";
import React from "react";
import { Title } from "./common/Title";
import { HOW_IT_WORKS_DATA } from "@/utils/helper";
import InputBg from "./common/InputBg";

const HowItWorks = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/webp/how-it-works-bg-img.webp")`,
      }}
      className="w-full bg-center bg-cover flex flex-col justify-center items-center text-white relative pt-20 md:pt-42.25 pb-23.25 md:pb-56.75 px-4 before:absolute before:inset-0 before:bg-linear-to-b before:from-black/25 before:via-transparent before:to-black/25 before:z-10"
    >
      <Image
        src={"/images/webp/how-it-works1.webp"}
        height={115}
        width={503}
        className="absolute left-0 top-0 w-1/3 sm:w-2/5 md:w-1/2 lg:w-127.75 h-auto"
        alt="how-it-works1"
      />
      <Image
        src={"/images/webp/how-it-works2.webp"}
        height={147}
        width={589}
        className="absolute right-0 bottom-0 w-1/3 sm:w-2/5 md:w-1/2 lg:w-147.25 h-auto"
        alt="how-it-works2"
      />
      <Title text={"How It Works"} className={"text-custom-3xl md:text-4xl lg:text-5xl z-20"} />
      <div className="flex md:flex-row flex-col gap-7.75 md:gap-0 items-center justify-between max-w-285 w-full mx-auto mt-5.5 font-poppins z-30 relative overflow-hidden">
        <span
          className="border border-dashed border-[#FFFFFF4F] absolute 
          left-5.75 sm:left-[26%] top-14 sm:top-17.25 h-[calc(100%-120px)] sm:h-[calc(100%-138px)] w-0
          md:h-0 md:w-auto md:top-[15%] md:left-[15%] md:right-[15%]"
        ></span>
        {HOW_IT_WORKS_DATA.map((item, index) => (
          <div
            className="flex flex-row md:flex-col items-center gap-3.75 md:gap-0 md:min-h-61.25 mb-8 md:mb-0 "
            key={index}
          >
            <span className="flex justify-center items-center h-13 w-14 sm:h-17.25 sm:w-17.25 rounded-4xl bg-linear-to-r from-linear to-gradient text-xl sm:text-custom-3xl font-medium text-center  -tracking-6 leading-118 z-20">
              0{index + 1}
            </span>
            <div className="flex flex-col max-w-[320px] w-full items-start md:text-center md:items-center ">
              <h4 className="text-xl md:text-custom-3xl font-medium leading-118 -tracking-6 mt-6.25">
                {item.heading}
              </h4>
              <p className="font-dm-sans font-medium leading-5  md:px-3 mt-3 sm:mt-7.25 md:mt-3.25">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <InputBg />
    </div>
  );
};

export default HowItWorks;
