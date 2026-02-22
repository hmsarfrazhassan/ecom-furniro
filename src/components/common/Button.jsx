import React from "react";
import "./button.css";

const sizeClasses = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const variantClasses = {
  primary: "btn-primary",
  outline: "btn-outline",
};

const Button = ({
  label,
  type = "button",
  size = "md",
  variant = "normal",
  onclick,
}) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`btn ${sizeClasses[size]} ${variantClasses[variant]} w-full`}
    >
      {label}
    </button>
  );
};

export default Button;
