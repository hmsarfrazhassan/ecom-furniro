import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import location from "@/assets/images/icons/pin.svg";
import phone from "@/assets/images/icons/phone.svg";
import clock from "@/assets/images/icons/clock.svg";
import Textarea from "../common/Textarea";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "username") {
      if (!isNaN(value)) {
        error = "Username must not be a number";
      }

      if (value.length < 3) {
        error = "Username must not be atleast 3 characters";
      }
    }

    if (name === "email" && !emailRegex.test(value)) {
      error = "Email format is invalid";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let newErrors = {};
    // Required fields check
    Object.keys(contactForm).forEach((key) => {
      if (!contactForm[key]) {
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

    alert(JSON.stringify(contactForm));
  };
  return (
    <div className="w-10/12 lg:w-8/12 md:w-9/12 xl:w-7/12 py-10 mx-auto">
      <div className="mb-10">
        <h2 className="font-semibold text-4xl text-center">
          Get In Touch With Us
        </h2>
        <p className="font-normal text-[#9F9F9F] text-center md:w-1/2 mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 order-2 flex flex-col gap-10 mt-5">
          <div className="flex justify-start items-start gap-4">
            <div>
              <img src={location} alt="pin" />
            </div>
            <div>
              <h3 className="font-medium text-2xl mb-3">Address</h3>
              <p>
                236 5th SE Avenue, <br />
                New York NY10000, <br />
                United States
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div>
              <img src={phone} alt="pin" />
            </div>
            <div>
              <h3 className="font-medium text-2xl mb-3">Phone</h3>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div>
              <img src={clock} alt="pin" />
            </div>
            <div>
              <h3 className="font-medium text-2xl mb-3">Working time</h3>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="col-span-12 md:col-span-6 order-1 md:order-2 flex flex-col gap-y-6"
        >
          <Input
            type={"text"}
            title={"Username"}
            name={"username"}
            placeholder={"Enter username"}
            value={contactForm.username.value}
            onchange={handleChange}
            error={errors.username}
          />

          <Input
            type={"email"}
            title={"Email"}
            name={"email"}
            placeholder={"Enter email address"}
            value={contactForm.email.value}
            onchange={handleChange}
            error={errors.email}
          />

          <Input
            type={"text"}
            title={"Subject"}
            name={"subject"}
            placeholder={"Enter message subject here"}
            value={contactForm.subject.value}
            onchange={handleChange}
            error={errors.subject}
          />

          <Textarea
            title={"Message"}
            name={"message"}
            placeholder={"Enter message subject here"}
            value={contactForm.message.value}
            onchange={handleChange}
            error={errors.message}
          />

          <Button
            type="submit"
            label={"Submit"}
            size="lg"
            variant={"primary"}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
