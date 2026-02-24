import React from "react";

const RecentBlogCard = ({ imgUrl, postedOn, title }) => {
  return (
    <div className="mb-5">
      <div className="flex flex-row justify-start items-center gap-3">
        <img src={imgUrl} alt="img" className="size-20 rounded-md" />
        <div>
          <p className="text-sm">{title}n</p>
          <p className="text-xs font-normal text-[#9F9F9F]">{postedOn}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
