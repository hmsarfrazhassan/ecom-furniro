import React from "react";
import logo from "@/assets/images/logo.svg";
import search from "@/assets/images/icons/search.svg";
import user from "@/assets/images/icons/user.svg";
import like from "@/assets/images/icons/like.svg";
import cart from "@/assets/images/icons/cart.svg";
import menu from "@/assets/images/icons/menu.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? "font-semibold " : "font-normal";
  return (
    <nav className="h-25 flex justify-between items-center gap-12 px-14 bg-white sticky top-0">
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
        <img src={user} alt="user" />
        <img src={search} alt="search" />
        <img src={like} alt="like" />
        <img src={cart} alt="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
