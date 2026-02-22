import React from "react";
import Button from "../common/Button";

const Summery = () => {
  return (
    <div className="py-5 px-3  bg-[#F9F1E7] ">
      <h2 className="text-[32px] font-semibold text-center mb-6">
        Cart Totals
      </h2>
      <div className="flex flex-col gap-8 w-10/12 mx-auto">
        <div className="grid grid-cols-2">
          <div className="font-medium">Subtotal</div>
          <div className="text-[#9F9F9F] font-normal">Rs. 250,000.00</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="font-medium">Total</div>
          <div className="text-[#B88E2F] font-medium text-xl">
            Rs. 250,000.00
          </div>
        </div>
        <div className="">
          <Button
            type="button"
            label={"Check out"}
            variant="outline"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Summery;
