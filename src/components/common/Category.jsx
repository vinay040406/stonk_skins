import { CATEGORY_DATA } from "@/utils/helper";
import Image from "next/image";

const Category = () => {
  const subCategory = CATEGORY_DATA.map((item) => item.subCategory);

  return (
    <div className="flex text-white flex-col gap-0.75">
      {/* <div className="flex gap-7.5 min-h-10">
        {subCategory.slice(0, 7).map((item, index) => (
          <span key={index} className="max-w-28.75">
            {item[0].heading}
          </span>
        ))}
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-6.5">
        {subCategory.map((item, index) => {
          return (
            <div key={index} className="flex font-medium flex-col gap-0.75">
              <div className="flex flex-col">
                <span>{item[0].heading}</span>
                <span className="h-18.25 w-28.75 bg-[#1C0829] rounded-[14.63px] flex justify-center items-center opacity-70  ">
                  <Image
                    src={item[0].image}
                    height={30}
                    width={106}
                    className="rotate-[15.15deg]"
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
          );
        })}
      </div>
    </div>
  );
};

export default Category;
