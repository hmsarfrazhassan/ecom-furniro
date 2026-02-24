import React from "react";
import OurPride from "../components/common/OurPride";
import Header from "../components/common/Header";
import Products from "../components/Shop/Products";
import Pagination from "../components/common/Pagination";
import Filter from "../components/common/Filter";

function Shop() {
  return (
    <div>
      <Header title={"shop"} />
      <Filter />
      <div className="pt-20  pb-10">
        <Products />
      </div>
      <Pagination />
      <OurPride />
    </div>
  );
}

export default Shop;
