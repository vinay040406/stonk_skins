"use client";
import { useState } from "react";
import { Title } from "./common/Title";
import { ACCORDIAN_DATA } from "@/utils/helper";
import Icons from "./common/Icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Accordian = () => {
  const [isActive, setIsActive] = useState(0);
  const handleAccordian = (index) => {
    setIsActive(() => (isActive === index ? null : index));
  };
  return (
    <div className="w-full relative px-4">
      <Image
        src={"/images/webp/shining-ellipse.webp"}
        height={435}
        width={435}
        alt="shining-ellipse"
        className="absolute right-0 rotate-180 -top-[25%]"
      />
      <div className="max-w-287 w-full mx-auto mt-15 lg:mt-43.25 flex flex-col gap-8 md:gap-0 md:flex-row  text-white">
        <div className="flex flex-col max-w-64.5 md:max-w-97.25 w-full space-y-3">
          <Title
            text={"Any Questions? Look Here"}
            className={
              "font-poppins text-custom-3xl md:text-4xl lg:text-5xl z-20"
            }
          />
          <span className="-tracking-6 leading-125 font-dm-sans font-medium z-20">
            Get answers to all your questions
          </span>
        </div>
        <div className="w-full flex flex-col space-y-3.25 min-h-127 z-20">
          {ACCORDIAN_DATA.map((acc, index) => (
            <div
              key={index}
              className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[50px]"
            >
              <motion.div
                layout
                onClick={() => handleAccordian(index)}
                className="flex bg-[#2C1638]/85 items-start cursor-pointer py-4.75 pl-7.75 pr-4 rounded-3xl justify-between font-medium font-poppins leading-118 -tracking-6"
              >
                <div className="flex flex-col space-y-2.75">
                  <h3 className="text-xl md:text-2xl lg:text-custom-3xl">
                    {acc.title}
                  </h3>
                  <AnimatePresence>
                    {isActive === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="font-dm-sans opacity-80 md:opacity-100 font-medium -tracking-6 max-w-169 w-full overflow-hidden"
                      >
                        {acc.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  key={index}
                  className="p-[1.5px] rounded-[19px] bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)]"
                >
                  <span
                    className={`h-10 md:h-12.25 w-10 md:w-12.25 rounded-[19px] ${isActive === index ? "bg-linear-to-r from-linear to-gradient backdrop-blur-2xl" : "backdrop-blur-none"} flex justify-center items-center self-start`}
                  >
                    <Icons
                      icon={"accordianArrow"}
                      className={`${isActive === index ? "rotate-180" : "rotate-0"} duration-200 ease-in`}
                    />
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
