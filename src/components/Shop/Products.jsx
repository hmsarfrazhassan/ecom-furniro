import React from "react";
import ProductCard from "../common/ProductCard";
import { products } from "../../assets/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const handleDispatch = (prod) => {
    dispatch(addToCart(prod));
    alert(JSON.stringify(prod));
  };
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 xl:w-10/12 mx-auto">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            image={prod.image}
            category={prod.category}
            originalPrice={prod.originalPrice}
            discountedPrice={prod.discountedPrice}
            onclick={() => handleDispatch(prod)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
