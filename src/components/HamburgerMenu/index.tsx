"use client";
import Link from "next/link";
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
        className={`fixed top-4 left-4 w-6 h-8 flex flex-col justify-center items-center gap-2 z-[999] ${
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-screen bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-xl font-semibold">
          <li>
            <Link
              href="/home"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/kognitif"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Terapi Kognitif
            </Link>
          </li>
          <li>
            <Link
              href="/motorik"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Terapi Motorik
            </Link>
          </li>
          <li>
            <Link
              href="/edukasi"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Edukasi
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="bg-red-500 w-full px-4 text-center py-2 rounded-xl block mt-3 hover:bg-red-600">
                Log out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
