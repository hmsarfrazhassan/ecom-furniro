import React from "react";
import Signup from "../components/auth/Signup";
import heroImg from "@/assets/images/hero-img.png";

function Register() {
  return (
    <div
      className="flex justify-center items-center py-20 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Signup />
    </div>
  );
}

export default Register;
