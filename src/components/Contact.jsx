import React from "react";
import { useScroll } from "./GlobalState";

const Contact = () => {
  const { contactRef } = useScroll();

  return (
    <section className="text-white py-28 px-8 md:px-28" ref={contactRef}>
      <h3 className="text-3xl md:text-4xl pb-8">Contact</h3>
      <div className="text-center ">
        <p>Fill out this form to reach us</p>
        <div className="space-y-4 md:space-y-0 md:space-x-2 py-5">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 bg-[#D9D9D9] w-[250px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 bg-[#D9D9D9] w-[250px]"
          />
        </div>
        <div className="flex flex-col space-y-6 justify-center items-center">
          <input
            type="text"
            className="p-2 w-[250px] md:w-[calc(250px*2+0.5rem)] bg-[#D9D9D9]"
            placeholder="Email"
          />
          <input
            type="text"
            className="p-2 w-[250px] md:w-[calc(250px*2+0.5rem)] bg-[#D9D9D9]"
            placeholder="Phone (optional)"
          />
          <textarea
            className="w-[250px] md:w-[calc(250px*2+0.5rem)] p-4 text-sm bg-[#D9D9D9] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows="4"
            placeholder="Your message here..."
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
