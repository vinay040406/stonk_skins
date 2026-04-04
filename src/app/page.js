import Accordian from "@/components/Accordian";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SliderWrapper from "@/components/SliderWrapper";
import Testimonial from "@/components/Testimonial";
import Trading from "@/components/Trading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <div
        style={{ backgroundImage: `url('/images/webp/bg lines.webp')` }}
        className="h-full relative"
      >
        <SliderWrapper
          className={"px-4 xl:pl-[10%]"}
          bgImage="/images/webp/slider-bg.webp"
          slidesPerView={{ slidesPerView: 3.2 }}
        />
        <SliderWrapper
          className={"px-4 ml-0 xl:-ml-65"}
          bgImage="/images/webp/slider-bg-img2.webp"
          slidesPerView={{ slidesPerView: 3.5 }}
          image1={
            <Image
              src={"/images/webp/shining-ellipse.webp"}
              height={437}
              width={437}
              className="absolute -top-[35%]"
              alt="shining-ellipse"
            />
          }
          image2={
            <Image
              src={"/images/webp/category2-layer.webp"}
              height={65}
              width={333}
              className="absolute  hidden md:block   left-[31%] top-[21% lg:z-20 "
              alt="shining-ellipse"
            />
          }
        />
        <SliderWrapper
          className={"px-4 pb-15.75"}
          bgImage="/images/webp/slider-bg-img3.webp"
          slidesPerView={{ slidesPerView: 3.1 }}
          image1={
            <Image
              src={"/images/webp/shining-ellipse.webp"}
              height={437}
              width={437}
              className="absolute  -top-[20%] right-0 rotate-180"
              alt="shining-ellipse"
            />
          }
          image2={
            <Image
              src={"/images/webp/category3-layer.webp"}
              height={87}
              width={323}
              className="absolute hidden md:block left-[5%] top-[15%] lg:z-20"
              alt="shining-ellipse"
            />
          }
        />
        <HowItWorks />
        <Testimonial />
        <Accordian />
        <Trading />
        <Image
          src={"/images/webp/bottom-main-layer.webp"}
          className="absolute bottom-32.25 left-0 w-screen md:z-0 -z-1 pointer-none:"
          height={657}
          width={1440}
          alt="bottom-main-layer"
        />
      </div>
    </div>
  );
}
