import Hero from "@/components/Hero";
import SliderWrapper from "@/components/SliderWrapper";

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden pb-10">
      <Hero />
      <SliderWrapper
        className={"px-4 xl:pl-[10%]"}
        bgImage="/images/webp/slider-bg.webp"
      />
      <SliderWrapper
        className={"px-4 ml-0 xl:-ml-65"}
        bgImage="/images/webp/slider-bg-img2.webp"
      />
      <SliderWrapper
      className={"px-4"}
       bgImage="/images/webp/slider-bg-img3.webp" />
    </div>
  );
}
