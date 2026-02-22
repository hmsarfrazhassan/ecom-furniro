import React from "react";
import deleteIcon from "@/assets/images/icons/delete.svg";
import "./table.css";
import cartImg from "@/assets/images/cart1.png";

const cartList = [
  {
    id: 1,
    image: cartImg,
    productName: "Asgaard sofa",
    productPrice: "250000",
    quantity: 1,
  },
];
const CartTable = () => {
  return (
    <div>
      <table className="w-full text-center">
        <thead className="bg-[#F9F1E7]">
          <tr>
            <th className="py-7"></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => (
            <tr>
              <td className="pt-7">
                <img
                  src={item.image}
                  alt=""
                  className="h-25 w-25 bg-[#F9F1E7]"
                />
              </td>
              <td>
                <p className="text-[#9F9F9F]">{item.productName}</p>
              </td>
              <td>
                <p className="text-[#9F9F9F]">Rs. {item.productPrice}.00</p>
              </td>
              <td className="">
                <p className="mx-auto h-10 w-10 rounded-lg border border-[#9F9F9F] flex justify-center items-center">
                  {item.quantity}
                </p>
              </td>
              <td>
                <p>Rs. 250, 000</p>
              </td>
              <td>
                <img src={deleteIcon} alt="delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
