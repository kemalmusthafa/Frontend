"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let scrollActive = scroll ? "py-6 bg-white shadow text-black" : "py-4";
  return (
    <div
      className={`navbar bg-base-100 fixed z-50 justify-between px-4 sm:px-20 box-border transition-all ${scrollActive}`}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <a className="btn btn-ghost text-xl font-bold" href={"/"}>
            SNCTRY. MSTH
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="btn btn-ghost text-xl font-medium sm:hidden ml-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {/* Navigation Buttons */}
      <div
        className={`flex flex-col items-center ${
          isOpen ? "block" : "hidden"
        } sm:flex sm:flex-row sm:space-x-4`}
      >
        <Link href={"#about"} className="btn btn-ghost text-xl font-medium">
          ABOUT
        </Link>
        <Link href={"#exp"} className="btn btn-ghost text-xl font-medium">
          STATS
        </Link>
        <Link href={"#connect"} className="btn btn-ghost text-xl font-medium">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
