import React from "react";
import Hero from "../components/Home/Hero";
import Category from "../components/Home/Category";
import ShowRoom from "../components/Home/ShowRoom";
import OurProducts from "../components/Home/OurProducts";

function Home() {
  return (
    <div className="">
      <Hero />
      <Category />
      <OurProducts />
      <ShowRoom />
    </div>
  );
}

export default Home;
