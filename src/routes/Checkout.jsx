import React from "react";
import Header from "../components/common/Header";
import OurPride from "../components/common/OurPride";
import CheckoutForm from "../components/Checkout/CheckoutForm";

function Checkout() {
  return (
    <div>
      <Header title={"checkout"} />
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto py-10">
        <CheckoutForm />
      </div>
      <OurPride />
    </div>
  );
}

export default Checkout;
