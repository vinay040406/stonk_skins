import InputBg from "./common/InputBg";
import { Title } from "./common/Title";

const Trading = () => {
  return (
    <div className="px-4 w-full">
      <div
        style={{
          backgroundImage: `url('/images/webp/trading-section-bg-img.webp')`,
        }}
        className="max-w-287 w-full mx-auto bg-cover bg-center flex justify-center items-center py-9.5 rounded-[41px] mt-25 lg:mt-58.25 lg:px-0 px-2"
      >
        <div className="max-w-150.25 flex flex-col space-y-4 text-center items-center text-white">
          <Title
            text={"Start Trading Smarter with StonksSkins Today!"}
            className={"text-2xl sm:text-custom-3xl md:text-4xl lg:text-5xl "}
          />
          <p className="-tracking-6 text-sm md:text-base max-w-112.5 w-full font-bold font-dm-sans">
            Join thousands of gamers already buying, selling, and trading skins
            securely and hassle-free.
          </p>
          <InputBg />
        </div>
      </div>
    </div>
  );
};

export default Trading;
