import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "firstName") {
      if (value.length < 3) {
        error = "Firsname must be atleast 3 character";
      } else if (!isNaN(value)) error = "Firstname must not be number";
    }

    if (name === "lastName") {
      if (value.length < 3) {
        error = "Lasname must be atleast 3 character";
      } else if (!isNaN(value)) error = "Lastname must not be number";
    }

    if (name === "email" && !emailRegex.test(value)) {
      error = "Email format is invalid";
    }

    if (name === "password") {
      if (value.length < 8) {
        error = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(value)) {
        error = "Password must contain one uppercase letter";
      } else if (!/[0-9]/.test(value)) {
        error = "Password must contain one number";
      }
    }
    if (name === "confirmPassword" && value !== signupForm.password) {
      error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let newErrors = {};
    // Required fields check
    Object.keys(signupForm).forEach((key) => {
      if (!signupForm[key]) {
        newErrors[key] = "This field is required";
      }
    });
    if (
      signupForm.password &&
      signupForm.confirmPassword &&
      signupForm.password !== signupForm.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) return;

    alert(JSON.stringify(signupForm));
  };
  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-[#F9F1E7] p-20">
      <h1 className="font-bold text-5xl text-center mb-10">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <Input
          type={"text"}
          title={"First name"}
          placeholder={"First name"}
          name={"firstName"}
          value={signupForm.firstName}
          onchange={handleChange}
          error={errors.firstName}
        />

        <Input
          type={"text"}
          title={"Last name"}
          placeholder={"Last name"}
          name={"lastName"}
          value={signupForm.lastName}
          onchange={handleChange}
          error={errors.lastName}
        />

        <Input
          type={"email"}
          title={"Email"}
          placeholder={"Enter email address"}
          name={"email"}
          value={signupForm.email}
          onchange={handleChange}
          error={errors.email}
        />

        <Input
          type={"password"}
          title={"Password"}
          placeholder={"Enter password"}
          name={"password"}
          value={signupForm.password}
          onchange={handleChange}
          error={errors.password}
        />

        <Input
          type={"password"}
          title={"Confirm password"}
          placeholder={"Confirm password"}
          name={"confirmPassword"}
          value={signupForm.confirmPassword}
          onchange={handleChange}
          error={errors.confirmPassword}
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
