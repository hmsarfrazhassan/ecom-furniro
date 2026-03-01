import React from "react";
import topBgImage from "@/assets/images/sections-top-img.png";
import appLogo from "@/assets/images/app-logo.png";
import fwdIcon from "@/assets/images/icons/fwd-icon.png";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div
      className="h-80 w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${topBgImage})` }}
    >
      <img src={appLogo} alt="logo" />
      <h1 className="font-medium text-3xl md:text-4 lg:text-5xl capitalize">
        {title}
      </h1>
      <div className="flex justify-center items-center">
        <Link to="/" className="font-medium">
          Home
        </Link>
        <img src={fwdIcon} alt="icon" />
        <p className="font-light capitalize"> {title}</p>
      </div>
    </div>
  );
};

export default Header;
