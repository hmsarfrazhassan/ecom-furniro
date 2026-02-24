import React from "react";

const Pagination = () => {
  return (
    <div className="py-5">
      <div className="flex justify-center items-center gap-4">
        <button
          className={`h-15 rounded-lg w-15 flex justify-center items-center bg-[#B88E2F] text-white text-xl`}
        >
          1
        </button>
        <button
          className={`h-15 rounded-lg w-15 flex justify-center items-center bg-[#F9F1E7] text-black font-light text-xl `}
        >
          2
        </button>
        <button
          className={`h-15 rounded-lg w-15 flex justify-center items-center bg-[#F9F1E7] text-black font-light text-xl`}
        >
          3
        </button>
        <button
          className={`h-15 rounded-lg px-4 flex justify-center items-center bg-[#F9F1E7] text-black font-light text-xl`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
