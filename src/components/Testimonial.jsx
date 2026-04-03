"use client";
import { useRef } from "react";
import { Title } from "./common/Title";
import Icons from "./common/Icons";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const prevRef = useRef();
  const nextRef = useRef();
  return (
    <div className="max-w-360 w-full mx-auto overflow-hidden text-white mt-15.75 lg:px-0 px-4">
      <div className="flex w-full px-0 lg:px-4 xl:px-37 justify-between items-center ">
        <Title text={"Testimonials"} />
        <div className="flex gap-2 md:gap-2.75">
          <div
            ref={prevRef}
            className="p-[1.5px] hidden sm:block bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] rounded-[19px]"
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
            className="p-[1.5px] hidden sm:block bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] rounded-[19px]"
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
      <div className="w-full flex justify-end mb-6 md:mb-7.5 mt-8.75">
        <div className="max-w-7xl w-full flex flex-col items-center md:flex-row gap-8.25 md:gap-5.25">
          <div className="flex flex-col text-center max-w-79.25 md:min-w-79.75 w-full items-center py-12.5 px-4.75 bg-linear-to-b from-linear to-gradient rounded-[19px] gap-3.75">
            <h6 className="text-custom-3xl font-poppins -tracking-6 leading-118 font-medium">
              Excellent
            </h6>
            <Image
              src={"/images/webp/testimonial-icon.webp"}
              height={107}
              width={104}
              alt="testimonial-icon"
            />
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <Icons
                    key={index}
                    icon={"star"}
                    className={"h-8.5 w-8.5 md-h-10 md-w-10 "}
                  />
                ))}
              </div>
              <span className="-tracking-6 leading-100 font-medium font-dm-sans">
                Based on
                <Link href={"/"} className="font-bold underline">
                  {" "}
                  456 reviews
                </Link>
              </span>
              <span className="flex gap-1 items-center font-medium leading-150 justify-center">
                <Icons icon={"star"} />
                Trustpilot
              </span>
            </div>
          </div>
          <div className="w-full">
            <TestimonialSlider prevRef={prevRef} nextRef={nextRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
