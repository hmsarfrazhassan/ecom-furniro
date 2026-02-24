import React from "react";
import Hero from "../components/Home/Hero";
import Category from "../components/Home/Category";
import ShowRoom from "../components/Home/ShowRoom";
import OurProducts from "../components/Home/OurProducts";
import sliderImg from "@/assets/images/inspiration.png";

function Home() {
  return (
    <div className="">
      <Hero />
      <Category />
      <OurProducts />
      <div className="h-150 w-11/12 mx-auto my-10">
        <img
          src={sliderImg}
          alt="inspirations"
          className="h-full w-full object-cover"
        />
      </div>
      <ShowRoom />
    </div>
  );
}

export default Home;
