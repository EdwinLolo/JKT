import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-6 mx-auto bg-white bg-opacity-90 rounded-b-4xl sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a
            href="#"
            className="mr-4 lg:block cursor-pointer hidden py-1.5 text-base text-slate-800 font-semibold"
          >
            JEJAK KARIER TRANS
          </a>
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
          >
            JKT
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <a href="#" className="flex items-center">
                  Home
                </a>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <a href="#" className="flex items-center">
                  Daftar Istilah
                </a>
              </li>
            </ul>
          </div>

          {/* Burger Button */}
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-inherit transition-all lg:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-4 mt-2">
            <ul className="flex flex-col gap-2">
              <li className="p-2 text-sm text-slate-800">
                <a href="#">Home</a>
              </li>
              <li className="p-2 text-sm text-slate-800">
                <a href="#">Daftar Istilah</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
