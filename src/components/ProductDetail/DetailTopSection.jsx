import React, { useState } from "react";
import { Link } from "react-router-dom";
import rightIcon from "@/assets/images/icons/fwd-icon.png";
import detail1 from "@/assets/images/detail1.png";
import detail2 from "@/assets/images/detail2.png";
import detail3 from "@/assets/images/detail3.png";
import detail4 from "@/assets/images/detail4.png";
import detail5 from "@/assets/images/detail5.png";
import Button from "@/components/common/Button";

import { FaLinkedin, FaFacebook, FaTwitter, FaStar } from "react-icons/fa6";

const images = [
  {
    id: 1,
    imgUrl: detail1,
  },
  {
    id: 2,
    imgUrl: detail2,
  },
  {
    id: 3,
    imgUrl: detail3,
  },
  {
    id: 4,
    imgUrl: detail4,
  },
  {
    id: 5,
    imgUrl: detail5,
  },
];

const DetailTopSection = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].imgUrl);
  return (
    <div>
      <div className="h-25 bg-[#F9F1E7] px-20">
        <div className="h-full flex justify-start items-center gap-5">
          <Link to="/" className="text-[#9F9F9F]">
            Home
          </Link>
          <img src={rightIcon} alt="icon" />
          <Link to="/shop" className="text-[#9F9F9F]">
            Shop
          </Link>
          <img src={rightIcon} alt="icon" />

          <p className="h-10 border-s text-black flex items-center ps-5">
            Asgaard sofa
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 w-11/12 mx-auto py-10">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <div className="flex flex-col-reverse md:flex-row justify-start items-start gap-4">
            <div className="flex flex-row flex-wrap gap-3 md:flex-col">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="size-20 p-2 bg-[#F9F1E7] rounded-md cursor-pointer"
                  onClick={() => setSelectedImage(image.imgUrl)}
                >
                  <img
                    src={image.imgUrl}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="h-125 w-full bg-[#F9F1E7] overflow-hidden rounded-md p-2">
              <img
                src={selectedImage}
                alt="product image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-5">
          <h1 className="text-[42px] text-black mb-1">Asgaard sofa</h1>
          <p className="font-medium text-2xl text-[#9F9F9F] mb-2">
            Rs. 250,000.00
          </p>
          <div className="flex gap-5 mb-2">
            <span className="flex gap-1 justify-start items-center">
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
            </span>
            <span className="border-s ps-5 text-sm text-[#9F9F9F]">
              5 customer reviews
            </span>
          </div>
          <p className="text-black text-sm mb-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="mb-4">
            <p className="text-sm text-[#9F9F9F] mb-4">Size</p>
            <div className="flex justify-start items-center gap-3">
              <span className="size-7.5 flex justify-center items-center bg-[#B88E2F] text-white rounded-md">
                L
              </span>
              <span className="size-7.5 flex justify-center items-center bg-[#F9F1E7] text-black rounded-md">
                XL
              </span>
              <span className="size-7.5 flex justify-center items-center bg-[#F9F1E7] text-black rounded-md">
                XS
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-[#9F9F9F] mb-4">Color</p>
            <div className="flex justify-start items-center gap-3">
              <span className="size-7.5 flex justify-center items-center bg-[#816DFA] text-white rounded-full"></span>
              <span className="size-7.5 flex justify-center items-center bg-black text-white rounded-full"></span>
              <span className="size-7.5 flex justify-center items-center bg-[#B88E2F] text-white rounded-full"></span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 mb-8">
            <div className="h-16 w-full max-w-32 px-2 flex justify-between items-center border rounded-lg ">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>

            <Button
              type="button"
              size={"lg"}
              label={"Add to cart"}
              variant={"outline"}
            />

            <Button
              type="button"
              size={"lg"}
              label={"+ Compare"}
              variant={"outline"}
            />
          </div>
          <hr className="w-full text-[#9F9F9F] mb-10" />
          <table className="text-[#9F9F9F] border-separate border-spacing-4">
            <tbody>
              <tr>
                <td>SKU</td>
                <td>:</td>
                <td>55001</td>
              </tr>

              <tr>
                <td>Category</td>
                <td>:</td>
                <td>Sofas</td>
              </tr>

              <tr>
                <td>Tags</td>
                <td>:</td>
                <td>Sofa, Chair, Home, Shop</td>
              </tr>

              <tr>
                <td>Share</td>
                <td>:</td>
                <td>
                  <div className="text-black flex justify-start items-start gap-3">
                    <FaLinkedin className="h-6 w-6" />
                    <FaTwitter className="h-6 w-6" />
                    <FaFacebook className="h-6 w-6" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailTopSection;
