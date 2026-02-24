import React from "react";
import ProductCard from "./common/ProductCard";
import { products } from "@/assets/productData";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <div>
      <h1 className="font-bold text-[40px] text-center mb-10 text-black">
        Related Products
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 xl:w-10/12 mx-auto">
        {products.map((prod, index) =>
          index < 4 ? (
            <ProductCard
              key={prod.id}
              name={prod.name}
              image={prod.image}
              category={prod.category}
              originalPrice={prod.originalPrice}
              discountedPrice={prod.discountedPrice}
            />
          ) : null,
        )}
      </div>

      <Link to="/shop" className="flex justify-center items-center mt-6">
        <button className="h-12 w-60 flex justify-center items-center cursor-pointer bg-white text-[#B88E2F] border border-[#B88E2F] font-semibold hover:border-[#B88E2F]/70 hover:text-[#B88E2F]/70  active:text-[#B88E2F] active:border-[#B88E2F]">
          Show more
        </button>
      </Link>
    </div>
  );
};

export default RelatedProducts;
