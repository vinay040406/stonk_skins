import { HERO_DATA } from "@/utils/helper";
import Heading from "./common/Heading";
import Icons from "./common/Icons";
import InputBg from "./common/InputBg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('/images/webp/hero-bg-img.webp')` }}
      className="min-h-203.25 w-full bg-cover lg:bg-center bg-position-[80%] relative "
    >
      <div className="absolute inset-0 bg-black/1 flex flex-col w-full md:justify-end px-4">
        <div className="flex flex-col max-w-287 w-full mx-auto gap-40 sm:gap-69 md:gap-20.5 pt-32.75 lg:pt-0 mb-2">
          <div className="flex flex-col text-white max-w-181.75 lg:px-0 w-full backdrop-blur-md sm:backdrop-blur-none">
            <Heading
              className={
                "text-custom-4xl font-medium  md:text-custom-6xl leading-110 -tracking-6 "
              }
            />
            <p className="leading-125 mt-3.25 font-dm-sans -tracking-6">
              Buy, sell, and trade skins securely with unbeatable prices and
              transparency
            </p>
            <InputBg className={"mt-6 md:mt-10.25 "} />
          </div>
          <div className="p-[1.5px] rounded-3xl  bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_100%)] ">
            <div className="backdrop-blur-[50px] border-[1.5px] border-white/35 w-full py-3 lg:py-6.75 lg:px-8 px-4 rounded-3xl">
              <div className="max-w-241.25 w-full lg:flex grid grid-cols-2 sm:grid-cols-4 gap-6 justify-between">
                {HERO_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="flex md:gap-4 gap-2 items-center font-dm-sans"
                  >
                    <span className="p-3 md:p-0 md:h-15 md:w-15 rounded-lg md:rounded-[19px] flex justify-center items-center bg-linear-to-r from-linear to-gradient cursor-pointer duration-200 ease-in hover:-translate-y-1">
                      <Icons
                        icon={item.svg}
                        className={" h-5 md:h-6 w-5 md:w-6"}
                      />
                    </span>
                    <h3 className="text-white font-medium text-sm md:text-base leading-100 -tracking-6">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
