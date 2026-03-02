import React from "react";
import heroImage from "@/assets/images/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-160 w-full bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full h-full  flex justify-center items-center">
        <div className="w-full grid grid-cols-12">
          <div className="col-start-2 col-span-10 col-end-12 md:col-start-6 md:col-span-6 lg:col-span-5 lg:col-start-7 py-10 px-5 bg-[#FFF3E3]">
            <p className="font-semibold tracking-wider mb-1">New Arrival</p>
            <h1 className="font-bold text-6xl text-[#B88E2F] mb-4">
              Discover Our <br /> New Collection
            </h1>
            <p className="text-lg font-medium mb-12 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <div>
              <Link
                to={"/shop"}
                className="bg-[#B88E2F] hover:bg-[#B88E2F]/70 uppercase text-white py-6 px-18 cursor-pointer active:bg-[#B88E2F]"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
