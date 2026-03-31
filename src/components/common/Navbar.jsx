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
  const [isActive, setIsActive] = useState(0);
  const [hamburgerState, setHamburgerState] = useState(false);

  // useEffect(() => {
  //   setIsActive(null);
  // }, []);

  const handleSearch = () => {
    inputRef.current.focus();
  };

  const handleLiClick = (index) => {
    setIsActive((prev) => (prev === index ? null : index));
  };

  const handleHamburger = () => setHamburgerState(!hamburgerState);
  return (
    <div className="w-full fixed top-0 bg-violet backdrop-blur-[10px] px-4 py-3 border-b border-b-white">
      <div className="max-w-287 w-full flex flex-col mx-auto gap-4">
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
            className={` w-full lg:flex flex-col items-center lg:flex-row hidden menu justify-between text-white  ${hamburgerState ? "show" : "max-w-83.75"}`}
          >
            <span className="font-medium">Market</span>
            <div className="flex lg:flex-row flex-col gap-8">
              <p className="flex items-center gap-2 cursor-pointer justify-center">
                <Icons
                  icon={"wallet"}
                  pathClass={` ${hamburgerState ? "fill-black" : ""}`}
                />
                <span className="font-bold leading-150">$0</span>
              </p>
              <div
                className={`flex items-center cursor-pointer ${hamburgerState ? "text-black flex-col text" : "text-white flex-row"}`}
              >
                <span className="leading-90 mr-2">John Doe</span>
                <Icons
                  icon={"user"}
                  pathClass={`${hamburgerState ? "fill-black" : "fill-white"}`}
                  className={`h-4.5 w-4.5 ${hamburgerState ? "fill-black" : "fill-white"}  `}
                />
                <Icons icon={"arrow"} className="ml-1" />
              </div>
            </div>
          </div>
          <Icons
            icon={"search"}
            onClick={handleSearch}
            pathClass={` ${hamburgerState ? "stroke-black" : ""}`}
            className="md:hidden flex cursor-pointer fixed right-[15%] z-10 "
          />
          {hamburgerState ? (
            <RxCross2
              onClick={handleHamburger}
              className="lg:hidden block text-2xl  z-20"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleHamburger}
              className="lg:hidden block text-2xl text-white"
            />
          )}
        </div>
        <div className="mx-auto  w-full flex flex-wrap border-t border-t-#43344C8C pt-3.5 pb-1.5">
          <ul
            className={`grid grid-cols-2 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 relative  w-full gap-8.25 `}
          >
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
              <div
                className={`absolute h-[40vh] border border-white xl:h-auto md:w-auto w-[90vw] overflow-scroll xl:overflow-auto rounded-3xl top-full mt-4.5 bg-[#2C1638E5] py-5.75 lg:pl-9.75 px-4 plg:r-6.5`}
              >
                <Category />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
