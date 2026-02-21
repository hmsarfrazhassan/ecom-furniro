import React from "react";

const Textarea = ({ title, name, placeholder, value, onchange, error }) => {
  return (
    <div className="">
      <label htmlFor="message" className="block mb-4">
        {title}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e)}
        rows={"4"}
        className={`w-full border border-[#9F9F9F] rounded-[10px] focus:border-[#B88E2F] p-7 outline-none ${error ? "border-rose-600" : ""}`}
      ></textarea>
      {error && <span className="text-xs text-rose-600">{error}</span>}
    </div>
  );
};

export default Textarea;
