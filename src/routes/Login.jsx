import React from "react";
import Signin from "../components/auth/Signin";
import heroImg from "@/assets/images/hero-img.png";

function Login() {
  return (
    <div
      className="flex justify-center items-center py-20 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Signin />
    </div>
  );
}

export default Login;
