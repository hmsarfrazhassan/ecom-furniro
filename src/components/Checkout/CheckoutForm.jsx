import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold text-black mb-6">
          Billing details
        </h1>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input title={"First name"} type={"text"} />
            <Input title={"Last name"} type={"text"} />
          </div>
          <Input type={"text"} title={"Company name (Optinal)"} />
          <Input type={"text"} title={"Country / Region"} />
          <Input type={"text"} title={"Street address"} />
          <Input type={"text"} title={"City / Town"} />
          <Input type={"text"} title={"Province"} />
          <Input type={"text"} title={"Zip code"} />
          <Input type={"text"} title={"Phone"} />
          <Input type={"text"} title={"Email"} />
          <Input type={"text"} placeholder={"Additional information"} />
        </div>
      </div>
      <div className="py-20 px-4 lg:w-10/12 mx-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start text-2xl font-medium py-3">Product</th>
              <th className="text-end text-2xl font-medium py-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-start text-[#9F9F9F] py-2">
                Asgaard sofa x 1
              </td>
              <td className="text-end font-light py-2">Rs. {totalPrice}.00</td>
            </tr>
            <tr>
              <td className="text-start py-2">Subtotal</td>
              <td className="text-end font-light py-2"> Rs. {totalPrice}.00</td>
            </tr>
            <tr>
              <td className="text-start py-2">Total</td>
              <td className="text-end font-bold text-2xl text-[#B88E2F] py-2">
                Rs. {totalPrice}.00
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="text-[#D9D9D9] my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center gap-2">
            <input type="radio" name="paymentMethod" />
            <label htmlFor="">Direct bank transfer</label>
          </div>
          <p className="font-light text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          <div className="flex justify-start items-center gap-2">
            <input type="radio" name="paymentMethod" />
            <label htmlFor="">Master / Visa Card</label>
          </div>

          <div className="flex justify-start items-center gap-2">
            <input type="radio" name="paymentMethod" />
            <label htmlFor="">Cash on Delivery</label>
          </div>
          <p className="font-light text-[#9F9F9F]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <Link className="font-semibold underline underline-offset-4 text-black">
              Privacy policy
            </Link>
            .
          </p>

          <div className="w-9/12 mx-auto mt-10">
            <Button
              label={"Proceed"}
              type="submit"
              variant="outline"
              size="md"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
