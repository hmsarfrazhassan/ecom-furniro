import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import search from "@/assets/images/icons/search.svg";
import user from "@/assets/images/icons/user.svg";
import like from "@/assets/images/icons/like.svg";
import cart from "@/assets/images/icons/cart.svg";
import menu from "@/assets/images/icons/menu.svg";
import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    isActive ? "font-semibold " : "font-normal";
  return (
    <>
      <nav className="z-30 h-25 flex justify-between items-center gap-12 px-14 bg-white sticky top-0">
        <Link to={"/"}>
          <img src={logo} alt="app logo" />
        </Link>

        <div className="block md:hidden cursor-pointer">
          <img src={menu} alt="menu" className="h-7 w-7 " />
        </div>

        <div className="md:flex gap-6 lg:gap-10 xl:gap-18 hidden font-medium ">
          <NavLink className={linkClasses} to={""}>
            Home
          </NavLink>
          <NavLink className={linkClasses} to={"shop"}>
            Shop
          </NavLink>
          <NavLink className={linkClasses} to={"blog"}>
            Blog
          </NavLink>
          <NavLink className={linkClasses} to={"contact"}>
            Contact
          </NavLink>
        </div>

        <div className="md:flex gap-4 lg:gap-6 xl:gap-11 hidden">
          <Link to={"/login"}>
            <img src={user} alt="user" />
          </Link>
          <img src={search} alt="search" />
          <img src={like} alt="like" />

          <button
            className="cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <img src={cart} alt="cart" />
          </button>
        </div>
      </nav>

      {isCartOpen && (
        <div className="h-full fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-150 w-100 flex flex-col bg-white shadow-xl p-6 transition-transform duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
              <button
                className="cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                <IoCloseOutline className="h-8 w-8 " />
              </button>
            </div>

            <div className="space-y-4 h-full overflow-auto ">
              <div className="flex justify-between items-center gap-3">
                <div className="size-28 p-1 bg-[#F9F1E7] rounded-md">
                  <img src="" alt="" />
                </div>
                <div>
                  <p>Asgaard sofa</p>
                  <p>
                    1 x{" "}
                    <span className="text-[#B88E2F] text-xs">Rs. 200,000</span>
                  </p>
                </div>
                <div className="bg-[#D9D9D9] text-white rounded-full">
                  <IoCloseOutline className="size-5" />
                </div>
              </div>
            </div>

            <div className="mt-auto bottom-0">
              <hr className="py-3" />
              <div className="flex gap-3">
                <Link
                  to={"/cart"}
                  onClick={() => setIsCartOpen(false)}
                  className="h-7 w-full rounded-full border text-sm flex justify-center items-center hover:border/70 active:border-[#B88E2F] active:text-[#B88E2F]"
                >
                  Cart
                </Link>

                <Link
                  to={"/checkout"}
                  onClick={() => setIsCartOpen(false)}
                  className="h-7 w-full rounded-full border text-sm flex justify-center items-center hover:border/70 active:border-[#B88E2F] active:text-[#B88E2F]"
                >
                  Checkout
                </Link>

                <Link
                  to={"/comparison"}
                  onClick={() => setIsCartOpen(false)}
                  className="h-7 w-full rounded-full border text-sm flex justify-center items-center hover:border/70 active:border-[#B88E2F] active:text-[#B88E2F]"
                >
                  Comparison
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
