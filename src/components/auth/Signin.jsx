import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-[#F9F1E7] p-20">
      <h1 className="font-bold text-5xl text-center mb-10">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <Input
          type={"email"}
          title={"Email"}
          placeholder={"Enter email address"}
        />

        <Input
          type={"password"}
          title={"Password"}
          placeholder={"Enter password"}
        />

        <Button type="submit" label={"Login"} size="lg" variant="outline" />
      </form>
      <div className="mt-10">
        Don't have account? Create account{" "}
        <Link className="text-[#B88E2F] font-semibold" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Signin;
