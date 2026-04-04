import Icons from "./Icons";

const InputBg = ({ className }) => {
  return (
    <button
      style={{ backgroundImage: `url('/images/webp/input-bg.webp')` }}
      className={`flex
     relative cursor-pointer z-30 w-full transition-all h-13 px-5 lg:pr-5.25 lg:pl-8.5 items-center justify-between duration-300 hover:-translate-y-1 max-w-61.25  font-dm-sans ${className}`}
    >
      <span
        className=" left-[15%] top-[30%] font-dm-sans
       font-medium leading-125 -tracking-6 text-white 
       "
      >
        Login with Steam
      </span>
      <Icons
        icon={"arrow2"}
        className=" right-[8%]  top-[40%] cursor-pointer"
      />
    </button>
  );
};

export default InputBg;
