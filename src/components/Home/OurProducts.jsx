import React from "react";
import ProductCard from "../common/ProductCard";
import { products } from "../../assets/productData";

const OurProducts = () => {
  return (
    <div className="">
      <h1 className="font-bold text-[40px] text-center mb-10 text-black">
        Our Products
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 xl:w-10/12 mx-auto">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            image={prod.image}
            category={prod.category}
            originalPrice={prod.originalPrice}
            discountedPrice={prod.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
