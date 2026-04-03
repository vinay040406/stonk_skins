"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SLIDER_DATA } from "@/utils/helper";
import Image from "next/image";
import Icons from "./Icons";
import { Navigation, Autoplay } from "swiper/modules";

const Slider = ({ prevRef, nextRef, onSwiperInit, slidesPerView }) => {
  return (
    <Swiper
      slidesPerView={1.5}
      slidesPerGroup={1}
      breakpoints={{
        320: { slidesPerView: 1.1 },
        640: { slidesPerView: 1.8 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 2.8 },
        1280: slidesPerView,
      }}
      modules={[Navigation, Autoplay]}
      loop={true}
      // autoplay={{
      //   delay: 3000,
      //   pauseOnMouseEnter: true,
      //   disableOnInteraction: false,
      // }}
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
        if (onSwiperInit) onSwiperInit(swiper);
      }}
      className="mySwiper w-full"
    >
      {SLIDER_DATA.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] ">
            {/* border border-transparent hover:border-linear duration-300 ease-in  */}
            <div className="rounded-3xl cursor-pointer group w-full text-left duration-200 ease-in px-3 pt-3 pb-5.5 bg-[#2C1638]/85">
              <div className="w-full min-h-44 sm:min-h-48 md:min-h-52 lg:min-h-55.25 bg-purple flex relative justify-center items-center rounded-3xl">
                <div className="w-4/5 min-h-22.75 h-full relative">
                  <Image
                    src={item.image}
                    fill
                    alt={item.productName}
                    className="object-contain object-center rotate-15 group-hover:scale-105 duration-200 ease-in-out hover:scale-90"
                  />
                </div>
                <span className="absolute font-poppins -bottom-2 md:-bottom-4 right-5 md:right-5.75 py-0.5 md:py-1.25 md:pr-5 px-3 md:pl-3.25 font-semibold bg-linear-to-r from-linear to-gradient leading-135 text-xs md:text-sm rounded-4xl hover:scale-105 duration-300 ease-in">
                  {item.tradable}
                </span>
              </div>
              <h3 className="mt-3 font-poppins text-xl md:text-custom-3xl font-medium leading-118 -tracking-6 w-fit">
                {item.productName}
              </h3>
              <p className="font-dm-sans font-medium leading-100 -tracking-6 mt-2">
                {item.description}
              </p>
              <div className="flex justify-between w-full mt-1.5">
                <div className="flex flex-col gap-2 mt-0.5">
                  <span className="leading-125 font-medium font-dm-sans -tracking-6 text-white/31 text-sm md:text-base">
                    {item.suggestedPrice}
                  </span>
                  <div className="flex gap-4 items-center">
                    <span className="bg-linear-to-r from-linear to-gradient bg-clip-text text-transparent text-lg md:text-2xl font-medium -tracking-6 font-poppins leading-118">
                      {item.price}
                    </span>
                    <span className="text-red font-dm-sans -tracking-6 leading-125 font-medium">
                      {item.discount}
                    </span>
                  </div>
                </div>
                <div className="p-[1.5px] bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] rounded-full h-11 md:h-16 ">
                  <div className="rounded-full bg-[#2C1638E5] backdrop-blur-[50px] h-10 md:h-15.5 w-10 md:w-15.5 flex justify-center items-center group duration-300 ease hover:bg-white hover:text-gradient ">
                    <Icons
                      icon={"shoppingBag"}
                      className={"h-4 md:h-6 w-4 md:w-6 duration-200 ease-in"}
                      pathClass={"group-hover:fill-gradient"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
