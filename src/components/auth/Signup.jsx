import React from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-[#F9F1E7] p-20">
      <h1 className="font-bold text-5xl text-center mb-10">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <Input type={"text"} title={"First name"} placeholder={"First name"} />

        <Input type={"text"} title={"Last name"} placeholder={"Last name"} />

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

        <Input
          type={"text"}
          title={"Confirm password"}
          placeholder={"Confirm password"}
        />

        <Button type="submit" label={"Signup"} size="lg" variant="outline" />
      </form>
      <div className="mt-10">
        Already have an account?{" "}
        <Link className="font-semibold text-[#B88E2F]" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
