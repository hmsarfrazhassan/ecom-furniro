import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D9D9D9]">
      <div className="w-11/12 mx-auto grid grid-cols-12 border-b border-[#D9D9D9] py-20">
        <div className="col-span-6 md:col-span-4  flex flex-col gap-12.5">
          <h3 className="text-2xl font-bold">Funrio.</h3>
          <p className="text-[#9F9F9F] font-normal">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-12.5">
          <p className="text-[#9F9F9F] font-normal">Links</p>
          <div className="font-medium text-black flex flex-col gap-11.5 ">
            <Link to={""}>Home</Link>
            <Link to={"shop"}>Shop</Link>
            <Link to={"blog"}>Blog</Link>
            <Link to={"contact"}>Contact</Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-12.5">
          <p className="text-[#9F9F9F] font-normal">Help</p>
          <div className="font-medium text-black flex flex-col gap-11.5 ">
            <Link to={""}>Payment options</Link>
            <Link to={"shop"}>Returns</Link>
            <Link to={"blog"}>Privacy Policies</Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col gap-12.5">
          <p className="text-[#9F9F9F] font-normal">Newsletter</p>
          <div className="flex justify-start items-center gap-3">
            <input
              type="text"
              className="border-b text-sm font-normal min-w-50 focus:outline-none focus:border-b-[#B88E2F]"
              placeholder="Enter your email address"
            />
            <button className="border-b text-sm font-normal uppercase">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="w-11/12 mx-auto font-normal py-9">
        2026 furino. All rights reverved
      </p>
    </footer>
  );
};

export default Footer;
