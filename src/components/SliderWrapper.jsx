"use client";
import { useRef } from "react";
import Icons from "./common/Icons";
import Slider from "./common/Slider";


const SliderWrapper = ({ className, slidesPerView, image }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="text-white pt-12 md:pt-20 lg:pt-28.25 relative">
      <div className="max-w-360 w-full mx-auto ">
        <div className="flex w-full px-4 xl:px-37 justify-between items-center mb-6 md:mb-7.5 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-poppins leading-118 -tracking-6">
            Category Name
          </h2>
          <div className="flex gap-2 md:gap-2.75">
            <div
              ref={prevRef}
              className="p-[1.5px] hidden sm:block bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] rounded-[19px] z-20"
            >
              <div className="rounded-[19px] bg-[#2C1638E5] h-11 w-11 md:h-15 md:w-15 flex justify-center items-center group cursor-pointer">
                <Icons
                  icon={"categoryArrow"}
                  className={"rotate-180 duration-300 ease"}
                  pathClass={"group-hover:fill-linear"}
                />
              </div>
            </div>
            <div
              ref={nextRef}
              className="p-[1.5px] hidden sm:block bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] rounded-[19px] z-20"
            >
              <div className="rounded-[19px] cursor-pointer bg-[#2C1638E5] h-11 w-11 md:h-15 md:w-15 flex justify-center items-center group">
                <Icons
                  pathClass={"group-hover:fill-gradient duration-300 ease"}
                  icon={"categoryArrow"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${className}`}>
          <Slider
            prevRef={prevRef}
            nextRef={nextRef}
            slidesPerView={slidesPerView}
          />
        </div>
      </div>
      {image}
    </div>
  );
};

export default SliderWrapper;
