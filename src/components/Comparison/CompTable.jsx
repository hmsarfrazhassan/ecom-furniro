import React from "react";

import "./table.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

import img1 from "@/assets/images/comp-1.png";
import img2 from "@/assets/images/comp-2.png";
const CompTable = () => {
  return (
    <div className="comparison w-11/12 mx-auto overflow-auto py-10">
      <table>
        <thead>
          <tr>
            <th className="min-w-70 max-w-80">
              <div className="text-start">
                <h2 className="text-xl font-medium lg:text-3xl">
                  Go to Product page for more Products
                </h2>
                <Link to={"/shop"} className="text-[#727272] border-b-2 ">
                  View More
                </Link>
              </div>
            </th>
            <th>
              <div className="w-70 h-44 p-1 bg-[#F9F1E7] overflow-hidden mb-3">
                <img
                  src={img1}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl font-medium">Asgaard Sofa</p>
              <p className="text-lg font-medium mb-2">Rs. 250,000.00</p>
              <div className="flex gap-5 mb-2">
                <span className="flex gap-1 justify-start items-center">
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                </span>
                <span className="border-s ps-5 text-sm text-[#9F9F9F] font-normal">
                  5 customer reviews
                </span>
              </div>
            </th>
            <th>
              <div className="w-70 h-44 p-1 bg-[#F9F1E7] overflow-hidden mb-3">
                <img
                  src={img2}
                  alt="image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl font-medium">Outdoor Sofa Set</p>
              <p className="text-lg font-medium mb-2">Rs. 250,000.00</p>
              <div className="flex gap-5 mb-2">
                <span className="flex gap-1 justify-start items-center">
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                  <FaStar className="text-[#FFC700]" />
                </span>
                <span className="border-s ps-5 text-sm font-normal text-[#9F9F9F]">
                  5 customer reviews
                </span>
              </div>
            </th>
            <th>
              <h3 className="text-xl lg:text-2xl mb-3.5">Add a product</h3>
              <div>
                <select
                  name=""
                  id=""
                  className="h-10 rounded-md bg-[#B88E2F] w-60 text-white px-2"
                >
                  <option value="">Choose a product</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xl lg:text-3xl font-medium">General</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sales Package</td>
            <td>1 sectional sofa</td>
            <td>1 Three Seater, 2 Single Seater</td>
            <td></td>
          </tr>
          <tr>
            <td>Model Number</td>
            <td>TFCBLIGRBL6SRHS</td>
            <td>DTUBLIGRBL568</td>
            <td></td>
          </tr>
          <tr>
            <td>Secondary Material</td>
            <td>Solid Wood</td>
            <td>Solid Wood</td>
            <td></td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>L-shaped</td>
            <td>L-shaped</td>
            <td></td>
          </tr>
          <tr>
            <td>Upholstery Material</td>
            <td>Fabric + Cotton</td>
            <td>Fabric + Cotton</td>
            <td></td>
          </tr>
          <tr>
            <td>Upholstery Color</td>
            <td>Bright Grey & Lion</td>
            <td>Bright Grey & Lion</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompTable;
