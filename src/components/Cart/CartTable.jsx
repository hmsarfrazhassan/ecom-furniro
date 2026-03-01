import React from "react";
import deleteIcon from "@/assets/images/icons/delete.svg";
import "./table.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const CartTable = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.items);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      {cartList.length > 0 ? (
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
                  <p className="text-[#9F9F9F]">{item.name}</p>
                </td>
                <td>
                  <p className="text-[#9F9F9F]">
                    Rs. {item.discountedPrice ?? item.originalPrice}.00
                  </p>
                </td>
                <td className="">
                  <p className="mx-auto h-10 w-10 rounded-lg border border-[#9F9F9F] flex justify-center items-center">
                    {item.quantity}
                  </p>
                </td>
                <td>
                  <p>Rs. {item.discountedPrice ?? item.originalPrice}</p>
                </td>
                <td>
                  <img
                    src={deleteIcon}
                    alt="delete"
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Cart is empty</p>
      )}
    </div>
  );
};

export default CartTable;
