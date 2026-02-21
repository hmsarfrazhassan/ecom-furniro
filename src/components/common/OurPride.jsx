import React from "react";
import trophy from "@/assets/images/icons/trophy.svg";
import shipping from "@/assets/images/icons/shipping.svg";
import guarantee from "@/assets/images/icons/guarantee.svg";
import customerSupport from "@/assets/images/icons/customer-support.svg";
import PrideItem from "./PrideItem";
const prideItems = [
  {
    icon: trophy,
    heading: "High Quality",
    text: "crafted from top materials",
  },
  {
    icon: guarantee,
    heading: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    icon: shipping,
    heading: "Free shipping",
    text: "crafted from top materials",
  },
  {
    icon: customerSupport,
    heading: "24 / 7 Support",
    text: "Dedicated support",
  },
];

const OurPride = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-end items-center gap-2 bg-[#FAF3EA] py-25 px-6 lg:px-10 xl:px-13">
      {prideItems.map((item, index) => (
        <PrideItem
          key={index}
          icon={item.icon}
          heading={item.heading}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default OurPride;
