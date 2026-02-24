import React from "react";

const Filter = () => {
  return (
    <div className="h-25 bg-[#F9F1E7] flex justify-between items-center px-25">
      <div>Showing 1-16 of 32 results</div>
      <div className="flex justify-end items-center gap-5">
        <div className="flex  justify-end items-center gap-2">
          <span>Show</span>
          <span className="h-14 w-14 flex justify-center items-center text-xl text-[#9F9F9F] bg-white">
            1
          </span>
        </div>
        <div className="flex  justify-end items-center gap-2">
          <span>Show</span>
          <input
            type="text"
            className="h-14 px-2 bg-white"
            placeholder="Default"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
