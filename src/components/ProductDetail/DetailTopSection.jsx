import React, { useState } from "react";
import { Link } from "react-router-dom";
import rightIcon from "@/assets/images/icons/fwd-icon.png";
import detail1 from "@/assets/images/detail1.png";
import detail2 from "@/assets/images/detail2.png";
import detail3 from "@/assets/images/detail3.png";
import detail4 from "@/assets/images/detail4.png";
import detail5 from "@/assets/images/detail5.png";

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
          <Link to="/">Home</Link>
          <img src={rightIcon} alt="icon" />
          <Link to="/shop">Shop</Link>
          <img src={rightIcon} alt="icon" />

          <p className="h-10 border-s"></p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-11/12 mx-auto py-10">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="flex flex-col-reverse md:flex-row justify-start items-start gap-4">
            <div className="flex flex-row gap-3 md:flex-col">
              {images.map((image) => (
                <div
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
        <div className="col-span-12 md:col-span-6 lg:col-span-6"></div>
      </div>
    </div>
  );
};

export default DetailTopSection;
