import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-white w-screen h-16 flex shadow-md top-0 px-4 md:px-8 lg:px-20 fixed z-50 mt-7">
      {/* Logo Section */}
      <div className="flex flex-1 justify-start items-center">
        <img
          className="shadow-md p-1 cursor-pointer"
          src="logok.png"
          alt="Logo"
          style={{ width: 40, height: "auto" }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-10 me-4">
        <button className="hover:text-slate-400">Home</button>
        <button className="hover:text-slate-400">About</button>
        <button className="hover:text-slate-400">Services</button>
        <button className="hover:text-slate-400">Teams</button>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="flex md:hidden flex-1 justify-end items-center">
        <button className="text-3xl">☰</button>
      </div>
    </div>
  );
}

export default Navbar;
