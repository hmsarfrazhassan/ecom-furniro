import React from "react";
import Header from "../components/common/Header";
import OurPride from "../components/common/OurPride";
import CartTable from "../components/Cart/CartTable";
import Summery from "../components/Cart/Summery";
function Cart() {
  return (
    <div>
      <Header title={"cart"} />
      <div className="xl:w-10/12 mx-auto grid grid-cols-12 gap-3 py-10">
        <div className="col-span-8">
          <CartTable />
        </div>
        <div className="col-span-4">
          <Summery />
        </div>
      </div>
      <OurPride />
    </div>
  );
}

export default Cart;
