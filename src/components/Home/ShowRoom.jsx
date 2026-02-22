import React from "react";
import furniture from "@/assets/images/furniture-bg.png";

const ShowRoom = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center flex-col gap-2">
        <p>Share your setup with</p>
        <h2 className="text-[40px] font-bold text-[#3A3A3A]">
          #FuniroFurniture
        </h2>
      </div>
      <img
        src={furniture}
        alt="furniture"
        className="h-190 w-11/12 mx-auto object-cover"
      />
    </div>
  );
};

export default ShowRoom;
