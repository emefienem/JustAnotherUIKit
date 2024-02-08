import React from "react";
import { useScroll } from "./GlobalState";

const Footer = () => {
  const { blogRef } = useScroll();

  return (
    <footer className="py-4 text-white text-center" ref={blogRef}>
      <div className="text-white text-center justify-center items-center flex flex-col md:flex-row space-x-0 md:space-x-28">
        <ul className="text-[#D9D9D9] flex flex-row md:flex-col space-x-4 md:space-x-0 pb-5">
          <li className="text-white font-bold">Lorem</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
        </ul>
        <ul className="text-[#D9D9D9] flex flex-row md:flex-col space-x-4 md:space-x-0 pb-5">
          <li className="text-white font-bold">Lorem</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <div className="mt-0 md:mt-4 flex flex-row md:flex-col space-x-4 md:space-x-0">
            <li className="text-white font-bold">Lorem</li>
            <li>Ipsum</li>
            <li>Ipsum</li>
          </div>
        </ul>
        <ul className="text-[#D9D9D9] flex flex-row md:flex-col space-x-4 md:space-x-0 pb-5">
          <li className="text-white font-bold">Lorem</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
        </ul>
        <ul className="text-[#D9D9D9] flex flex-row md:flex-col space-x-4 md:space-x-0">
          <li className="text-white font-bold">Lorem</li>
          <li>Ipsum</li>
          <li>Ipsum</li>
          <div className="mt-0 md:mt-4 flex flex-row md:flex-col space-x-4 md:space-x-0">
            <li className="text-white font-bold">Lorem</li>
            <li>Ipsum</li>
            <li>Ipsum</li>
          </div>
        </ul>
      </div>
      <div className="mt-10">&copy; 2024</div>
    </footer>
  );
};

export default Footer;
