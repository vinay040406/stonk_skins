"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CATEGORY_DATA } from "@/utils/helper";
import Category from "./Category";

const Navbar = () => {
  const inputRef = useRef();
  const arrowRef = useRef();
  const [isActive, setIsActive] = useState(null);

  const [hamburgerState, setHamburgerState] = useState(false);

  useEffect(() => {
    setIsActive(null);
  }, []);

  const handleSearch = () => {
    inputRef.current.focus();
  };

  const handleLiClick = (index) => {
    setIsActive((prev) => (prev === index ? null : index));
  };

  const handleArrow = () => {
    arrowRef.current.style.transform =
      arrowRef.current.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  };

  const handleHamburger = () => setHamburgerState(!hamburgerState);

  return (
    <div
      className={`w-full fixed top-0 z-50 backdrop-blur-[10px] px-4 py-2 md:py-3 border-b border-b-white/15`}
    >
      <div className="max-w-287 w-full flex flex-col mx-auto gap-4 relative font-dm-sans">
        <div className="flex justify-between mx-auto w-full items-center">
          <div className="flex gap-7.75 items-center">
            <Link
              href={"/"}
              className="z-20"
              onClick={() => setHamburgerState(false)}
            >
              <Image
                src={"/images/webp/logo.webp"}
                height={55}
                width={116}
                alt="logo"
                className="object-contain h-10 w-15 md:h-13.75 md:w-29"
              />
            </Link>
            <div className="md:flex hidden  relative w-[320px] text-white">
              <Image
                src="/images/svg/input-bg.svg"
                height={52}
                width={352}
                className="w-full h-auto"
                alt="nav-search"
              />

              <input
                ref={inputRef}
                type="text"
                placeholder="Search Skins..."
                className="absolute inset-0 w-full h-full bg-transparent outline-none pl-8 pr-20 text-white font-medium  leading-100"
              />
              <Icons
                icon={"search"}
                onClick={handleSearch}
                className="absolute right-[5%] h-4.5 w-4.5 top-[35%] cursor-pointer"
              />
            </div>
          </div>
          <div
            className={` w-full lg:flex flex-col items-center lg:flex-row hidden menu justify-between text-white  ${hamburgerState ? "show opacity-100" : "max-w-83.75 opacity-0 lg:opacity-100"}`}
          >
            <span
              onClick={() => setHamburgerState(false)}
              className="font-medium cursor-pointer"
            >
              Market
            </span>
            <div className="flex lg:flex-row flex-col lg:gap-8 gap-2">
              <p
                onClick={() => setHamburgerState(false)}
                className="flex items-center gap-2 cursor-pointer justify-center"
              >
                <Icons icon={"wallet"} />
                <span className="font-bold leading-150">$0</span>
              </p>
              <div
                onClick={() => setHamburgerState(false)}
                className={`flex items-center cursor-pointer ${hamburgerState ? "text-white text" : "text-white flex-row"}`}
              >
                <span className="leading-90 mr-2">John Doe</span>
                <Icons
                  icon={"user"}
                  className={`h-4.5 w-4.5 ${hamburgerState ? "fill-black" : "fill-white"}  `}
                />
                <Icons
                  onClick={handleArrow}
                  ref={arrowRef}
                  icon={"arrow"}
                  className="ml-1 duration-200 ease-in"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden flex  relative w-auto z-20">
            <Image
              src={"/images/webp/Union.webp"}
              height={52}
              width={103}
              className=""
              alt="union"
            />
            <Icons
              icon={"search"}
              onClick={handleSearch}
              className="md:hidden flex  absolute cursor-pointer left-[15%] top-[25%] z-10 "
            />
            {hamburgerState ? (
              <RxCross2
                onClick={handleHamburger}
                className="lg:hidden block absolute text-white right-[15%] top-[28%] md:top-[25%] text-xl md:text-2xl  z-20"
              />
            ) : (
              <GiHamburgerMenu
                onClick={handleHamburger}
                className="lg:hidden block absolute text-xl md:text-2xl right-[15%] top-[28%] md:top-[25%] text-white"
              />
            )}
          </div>
        </div>
        <div className="mx-auto  w-full flex overflow-scroll lg:overflow-auto border-t border-t-[#43344C8C] py-1 md:pt-3.5 md:pb-1.5">
          <ul className={`flex   w-full gap-8.25`}>
            {CATEGORY_DATA.map((item, index) => (
              <li
                onClick={() => handleLiClick(index)}
                key={index}
                className="max-w-27.75 w-full group transition-all 0.3s flex gap-2.75 items-center font-medium leading-100 cursor-pointer"
              >
                <span
                  className={`${
                    isActive === index
                      ? "bg-linear-to-r from-linear to-gradient bg-clip-text text-transparent"
                      : "text-white group-hover:text-linear"
                  }`}
                >
                  {item.text}
                </span>
                <span className="text-sm px-2.5 py-0.75 bg-dark-violet border-2 rounded-lg border-category-border shadow-[0px_3.5px_0px_0px_rgba(59,33,75,1)]">
                  <span
                    className={`${
                      isActive === index
                        ? "bg-linear-to-r from-linear to-gradient bg-clip-text text-transparent"
                        : "text-white  group-hover:text-gradient"
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
              </li>
            ))}
            {isActive !== null && (
              <div className="p-[1.5px] rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] absolute top-full  mt-2.5  max-w-screen xl:max-w-none -translate-x-4 lg:translate-x-0 ">
                <div className="lg:w-auto rounded-3xl bg-[#2C1638E5] py-2 px-3 lg:py-5.75 lg:pl-9.75  lg:pr-6.5 overflow-x-scroll xl:overflow-auto ">
                  <Category />
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
