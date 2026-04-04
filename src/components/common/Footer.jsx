import {
  PAYMENT_ICONS_DATA,
  PAYMENT_TEXT_DATA,
  SOCIAL_LINKS,
  USEFUL_LINKS_FIRST,
  USEFUL_LINKS_SECOND,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url('/images/webp/footer-bg-img.webp')` }}
      className="w-full flex flex-col space-y-12 md:space-y-10.25 text-white pt-21.25 lg:pt-28.25 bg-cover bg-center"
    >
      <div className="max-w-284 w-full flex flex-col gap-8 md:gap-0 md:flex-row mx-auto justify-between px-4 ">
        <div className="flex flex-col gap-5.5 max-w-50 lg:max-w-75.25 w-full">
          <Link href={"/"}>
            <Image
              src={"/images/webp/logo.webp"}
              height={74}
              width={157}
              alt="logo"
            />
          </Link>
          <p className="font-medium -tracking-6 font-dm-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            lorem.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link, index) => (
              <Link href={"/"} key={index}>
                <span className="h-8 w-8 rounded-full bg-linear-to-r from-linear to-gradient flex justify-center items-center group hover:scale-120 duration-300 ease-in">
                  <Icons
                    icon={link}
                    className={"group-hover:scale-120 duration-300 ease-in"}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h5 className="text-xl font-poppins font-semibold -tracking-6 leading-118 ">
            Useful Links
          </h5>
          <div className="flex gap-16 md:gap-8 lg:gap-20.25">
            <div className="flex flex-col gap-3">
              {USEFUL_LINKS_FIRST.map((link, index) => (
                <Link href={"/"} key={index}>
                  <span className="font-dm-sans li font-medium -tracking-6 leading-100">
                    {link}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {USEFUL_LINKS_SECOND.map((link, index) => (
                <Link href={"/"} key={index}>
                  <span className="font-dm-sans li font-medium -tracking-6 leading-100">
                    {link}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-45 justify-between">
          <h5 className="text-xl font-poppins font-semibold -tracking-6 leading-118 ">
            Subscribe Newsletter
          </h5>
          <p className="max-w-60 font-medium font-dm-sans -tracking-6">
            Enter your email to receive our valuable newsletters.
          </p>
          <div className="relative w-fit">
            <Image
              src={"/images/webp/subscribe-newsletter-input-bg-img.webp"}
              alt="subscribe-newsletter-input-bg-img"
              height={52}
              width={320}
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="absolute inset-0 w-full pl-8 pr-23 outline-none font-dm-sans leading-100 -tracking-6 font-medium"
            />
            <Icons
              icon={"newsletter"}
              className={"absolute right-[3.8%] top-[35%] cursor-pointer"}
            />
          </div>
        </div>
      </div>
      <div className="w-full backdrop-blur-[10px] flex bg-[#FFFFFF0D] py-5.5 ">
        <div className="flex justify-between max-w-284 flex-col gap-8 md:flex-row w-full items-center mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-7.25">
            {PAYMENT_TEXT_DATA.map((item, index) => (
              <span
                key={index}
                className="font-dm-sans -tracking-6 leading-100 text-white/34"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5 sm:gap-3 md:gap-3.75 items-center">
            {PAYMENT_ICONS_DATA.map((item, index) => (
              <span
                key={index}
                className="font-dm-sans -tracking-6 leading-100 text-white/34"
              >
                <Icons icon={item} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
