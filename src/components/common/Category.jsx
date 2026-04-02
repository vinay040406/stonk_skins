import { CATEGORY_DATA } from "@/utils/helper";
import Image from "next/image";

const Category = () => {
  const subCategory = CATEGORY_DATA.map((item) => item.subCategory);

  return (
    <div className="flex text-white flex-col gap-0.75">
      <div className="flex gap-6.5">
        {subCategory.map((item, index) => (
          <div key={index} className="flex font-medium flex-col gap-0.75">
            <div className="flex flex-col">
              <span
                className={`${
                  index == 0
                    ? "bg-linear-to-r from-linear to-gradient bg-clip-text text-transparent"
                    : "text-white"
                } `}
              >
                {item[0].heading}
              </span>
              <span className="h-18.25 w-28.75 bg-[#1C0829] rounded-[14.63px] flex justify-center items-center opacity-70">
                <Image
                  src={item[0].image}
                  height={30}
                  width={106}
                  alt={item[0].product}
                  className={`rotate-[15.15deg] hover:-translate-y-1.5 duration-200 ease-in`}
                />
              </span>
              <span className="mt-1.5 text-custom-sm font-medium leading-120">
                {item[0].product}
              </span>
              <span className="text-custom-xs font-medium text-white/31">
                {item[0].price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
