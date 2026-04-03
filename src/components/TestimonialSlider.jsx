import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Icons from "./common/Icons";

const TestimonialSlider = ({ prevRef, nextRef }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      slidesPerView={1}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1.8 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 2.8 },
        1280: { slidesPerView: 2.2 },
      }}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      onSwiper={(swiper) => {
        setTimeout(() => {
          if (swiper && !swiper.destroyed) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }, 0);
      }}
    >
      {[1, 2, 3, 4].map((index) => (
        <SwiperSlide key={index}>
          <div className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)]">
            {/* hover:border-linear border border-transparent duration-300 ease-in */}

            <div className="rounded-3xl min-h-76 md:min-h-91.5 h-full cursor-pointer group text-left duration-200 ease-in bg-[#2C1638]/85 p-5 flex flex-col justify-between max-w-92 w-full">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <span key={idx}>
                      <Icons icon={"violetStar"} className={"h-5 w-5"} />
                    </span>
                  ))}
                </div>
                <span className="leading-125 text-sm md:text-base -tracking-6 font-dm-sans font-medium ">
                  2 days ago
                </span>
              </div>
              <div className="flex flex-col gap-2 font-medium font-dm-sans -tracking-6">
                <h6 className="font-poppins text-custom-2xl md:text-custom-3xl ">
                  Best on the market
                </h6>
                <p className="max-w-67.75 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Sed nunc sem sed.
                </p>
              </div>
              <span className="-tracking-6 leading-100 text-lg md:text-xl font-bold font-dm-sans">
                John Doe
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
