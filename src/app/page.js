import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SliderWrapper from "@/components/SliderWrapper";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full pb-10 ">
      <Hero />
      <div
        style={{ backgroundImage: `url('/images/webp/bg lines.webp')` }}
        className="h-full"
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
          image={
            <Image
              src={"/images/webp/shining-ellipse.webp"}
              height={437}
              width={437}
              className="absolute -top-[35%]"
              alt="shining-ellipse"
            />
          }
        />
        <SliderWrapper
          className={"px-4 pb-15.75"}
          bgImage="/images/webp/slider-bg-img3.webp"
          slidesPerView={{ slidesPerView: 3.1 }}
          image={
            <Image
              src={"/images/webp/shining-ellipse.webp"}
              height={437}
              width={437}
              className="absolute -top-[20%] right-0 rotate-180"
              alt="shining-ellipse"
            />
          }
        />
        <HowItWorks />
        <Testimonial />
      </div>
    </div>
  );
}
