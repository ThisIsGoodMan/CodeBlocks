"use client"

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "CodeBlocks", href: "/codeblocks/" },
  { name: "Contact", href: "/contact" },
  { name: "GitHub", href: "https://github.com/thisisgoodman" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsVisible(false); // Start the fade-out
      setTimeout(() => {
        setIsOpen(false);
      }, 300); // Duration of the fade-out
    } else {
      setIsOpen(true); // Make the menu open
      setTimeout(() => {
        setIsVisible(true); // Start the fade-in
      }, 10); // Small delay after click to ensure transition is applied
    }
  };

  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="flex flex-col justify-center items-center">
        <div className="z-20">
          <span
            className={`block bg-white h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`block bg-white h-0.5 w-6 rounded-sm my-0.5 transition-all duration-200 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block bg-white h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </div>
      </button>

      {(isOpen || isVisible) && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-[94%] z-10 transition-opacity duration-300 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center h-full space-y-4 pb-[200px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-400 text-xl"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
