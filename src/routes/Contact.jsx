import React from "react";
import Header from "../components/common/Header";
import OurPride from "../components/common/OurPride";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <div>
      <Header title={"Contact"} />
      <ContactForm />
      <OurPride />
    </div>
  );
}

export default Contact;
