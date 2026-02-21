import React from "react";

const Input = ({ title, name, placeholder, type, value, onchange, error }) => {
  return (
    <div className="flex flex-col gap-y-5.5">
      <label htmlFor="" className="block text-normal font-medium ">
        {title}
      </label>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onchange(e)}
          className={`h-18.75 w-full border border-[#9F9F9F] rounded-[10px] focus:border-[#B88E2F] px-2 lg:px-7 outline-none ${error ? "border-rose-600" : ""}`}
        />
        {error && <p className="text-xs text-rose-600 ps-2">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
