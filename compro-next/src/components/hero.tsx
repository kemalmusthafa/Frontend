"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container max-w-screen-2xl flex flex-col">
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: isMobile
            ? `url("/bannermb.png")`
            : `url("/banner.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero justify-end items-end text-neutral-content text-end p-10 md:p-24 md:py-[400px]">
          <div className="max-w-md m-5 mt-[400px] md:mt-[90px]">
            <h1 className="text-3xl lg:text-5xl font-extrabold">MSTH.</h1>
            <p className="mb-5 text-lg font-mono">
              Find The Best Fashion Style For You.
            </p>
            <Link
              href="/product"
              className="bg-transparent hover:bg-teal-800 border-2 text-neutral-content p-2 font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
