import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import Navbar from "../components/common/Navbar";
import OurPride from "../components/common/OurPride";
import DetailTopSection from "../components/ProductDetail/DetailTopSection";

function ProductDetail() {
  return (
    <div>
      <DetailTopSection />
      <RelatedProducts />
      <OurPride />
    </div>
  );
}

export default ProductDetail;
