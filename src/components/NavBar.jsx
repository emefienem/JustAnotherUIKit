import React, { useState } from "react";
import { useScroll } from "./GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { scrollToSection, homeRef, aboutRef, contactRef, blogRef } =
    useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex justify-between items-center py-4 px-28 text-white">
      <div>JustAnotherUIKit</div>

      <div className="md:hidden flex items-center">
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-10 "
          onClick={toggleMenu}
        ></div>
      )}
      <ul
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "-translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex-col md:flex-row md:flex md:space-x-7 space-y-7 md:space-y-0 list-none bg-white md:bg-transparent md:text-white text-black `}
      >
        <div onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <li
          onClick={() => {
            scrollToSection(homeRef);
            toggleMenu();
          }}
          className="cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(aboutRef);
            toggleMenu();
          }}
          className="cursor-pointer text-black md:text-[#D9D9D9] "
        >
          About
        </li>
        <li
          onClick={() => {
            scrollToSection(contactRef);
            toggleMenu();
          }}
          className="cursor-pointer text-black md:text-[#D9D9D9]"
        >
          Contact
        </li>
        <li
          onClick={() => {
            scrollToSection(blogRef);
            toggleMenu();
          }}
          className="cursor-pointer text-black md:text-[#D9D9D9]"
        >
          Blog
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
