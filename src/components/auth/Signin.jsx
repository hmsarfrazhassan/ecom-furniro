import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
const Signin = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

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

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let newErrors = {};
    // Required fields check
    Object.keys(loginForm).forEach((key) => {
      if (!loginForm[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) return;

    alert(JSON.stringify(loginForm));
  };
  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-[#F9F1E7] p-20">
      <h1 className="font-bold text-5xl text-center mb-10">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <Input
          type={"email"}
          title={"Email"}
          name={"email"}
          placeholder={"Enter email address"}
          value={loginForm.email.value}
          onchange={handleChange}
          error={errors.email}
        />

        <Input
          type={"password"}
          title={"Password"}
          name={"password"}
          placeholder={"Enter password"}
          value={loginForm.password.value}
          onchange={handleChange}
          error={errors.password}
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
