"use client";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Pastikan hanya klien yang berinteraksi
  useEffect(() => {
    // Klien siap, state dapat berubah
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className={`fixed top-4 left-4 w-6 h-8 flex flex-col justify-center items-center gap-2 z-50 ${
          isOpen ? "text-white" : "text-black"
        }`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div
          className={`w-full h-[2px] bg-current transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[5px] bg-white" : "bg-black"
          }`}
        />
        <div
          className={`w-full h-[2px] bg-current transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[5px] bg-white" : "bg-black"
          }`}
        />
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-screen bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-xl font-semibold">
          <li>
            <a href="#" className="hover:text-gray-300">
              Menu 1
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Menu 2
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Menu 3
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Menu 4
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
