const ProductCard = ({
  id,
  name,
  image,
  category,
  originalPrice,
  discountedPrice,
  onclick,
}) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="h-60 lg:h-80 w-full overflow-hidden">
        <img src={image} alt="product" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 bg-[#F4F5F7] px-4 pt-4 pb-5">
        <p className="font-semibold text-2xl text-black">{name}</p>
        <p className="text-[#898989]">{category}</p>
        <div className="flex justify-between items-center">
          <p className="text-black text-xl">Rs. {originalPrice}</p>
          {discountedPrice && (
            <p className="text-[#B0B0B0] line-through">Rs. {discountedPrice}</p>
          )}
        </div>
      </div>

      <div className="absolute top-5 right-5 h-12 w-12 rounded-full flex justify-center items-center text-white bg-rose-400 z-10">
        -50%
      </div>

      <div className="z-20 absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
        <button
          onClick={onclick}
          className="bg-white text-[#B88E2F] px-6 py-2 font-semibold hover:bg-white/90 active:bg-[#B88E2F] active:text-white transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
