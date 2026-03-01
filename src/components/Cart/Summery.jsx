import React from "react";
import Button from "../common/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summery = () => {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
      {cartList.length > 0 && (
        <div className="py-5 px-3  bg-[#F9F1E7] ">
          <h2 className="text-[32px] font-semibold text-center mb-6">
            Cart Totals
          </h2>
          <div className="flex flex-col gap-8 w-10/12 mx-auto">
            <div className="grid grid-cols-2">
              <div className="font-medium">Subtotal</div>
              <div className="text-[#9F9F9F] font-normal">Rs. {totalPrice}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="font-medium">Total</div>
              <div className="text-[#B88E2F] font-medium text-xl">
                Rs. {totalPrice}
              </div>
            </div>
            <div className="">
              <Button
                type="button"
                label={"Check out"}
                variant="outline"
                size="lg"
                onclick={handleCheckout}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Summery;
