import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import Navbar from "../components/common/Navbar";
import OurPride from "../components/common/OurPride";
import DetailTopSection from "../components/ProductDetail/DetailTopSection";
import Tabs from "../components/ProductDetail/Tabs";

function ProductDetail() {
  return (
    <div>
      <DetailTopSection />
      <Tabs />
      <RelatedProducts />
      <OurPride />
    </div>
  );
}

export default ProductDetail;
