import React from "react";

const PrideItem = ({ icon, heading, text }) => {
  return (
    <div className="flex justify-start items-center gap-2.5">
      <img src={icon} alt="icon" className="h-15 w-15" />
      <div className="flex flex-col gap-1 ">
        <h3 className="lg:text-2xl font-semibold text-black ">{heading}</h3>
        <p className="lg:text-xl font-medium text-[#898989]">{text}</p>
      </div>
    </div>
  );
};

export default PrideItem;
