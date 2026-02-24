import React from "react";
import admin from "@/assets/images/icons/admin.svg";
import calender from "@/assets/images/icons/calender.svg";
import tag from "@/assets/images/icons/tag.svg";

const TopBlog = ({ imgUrl, title, date, category, postedBy, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-125 w-full overflow-hidden">
        <img
          src={imgUrl}
          alt="blog image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-start items-center gap-8.75">
        <div className="flex justify-start items-center gap-1.75">
          <img src={admin} alt="admin" />
          <p className="font-normal text-[#9F9F9F]">{postedBy}</p>
        </div>

        <div className="flex justify-start items-center gap-1.75">
          <img src={calender} alt="calender" />
          <p className="font-normal text-[#9F9F9F]">{date}</p>
        </div>

        <div className="flex justify-start items-center gap-1.75">
          <img src={tag} alt="tag" />
          <p className="font-normal text-[#9F9F9F]">{category}</p>
        </div>
      </div>

      <h1 className="font-medium text-black text-3xl">{title}</h1>

      <p className="text-sm text-[#9F9F9F] font-normal text-justify">
        {description}
      </p>

      <button className="text-start underline underline-offset-4 text-black">
        Read more
      </button>
    </div>
  );
};

export default TopBlog;
