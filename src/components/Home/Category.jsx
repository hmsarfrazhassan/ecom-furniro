import React from "react";
import category1 from "@/assets/images/category-1.png";
import category2 from "@/assets/images/category-2.png";
import category3 from "@/assets/images/category-3.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    categoryImg: category1,
    title: "Dining",
  },
  {
    id: 2,
    categoryImg: category2,
    title: "Living",
  },
  {
    id: 3,
    categoryImg: category3,
    title: "Bedroom",
  },
];

const Category = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-[32px] font-bold text-[#333333]">
          Browse The Range
        </h2>
        <p className="text-xl text-[#666666] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-3 gap-5">
        {data.map((item) => (
          <Link to={""} className="flex flex-col gap-7.5" key={item.id}>
            <img
              src={item.categoryImg}
              alt={item.title}
              className="block h-full w-full"
            />

            <p className="text-center font-semibold text-2xl">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
