"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";

function Skills() {
  return (
    <div className="relative w-screen h-screen bg-[#d414e4]">
      {/* SVG Wave at the Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,53.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content Section Below */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-yellow-200 text-4xl font-bold">SKILLS</h1>
        <div className="w-full max-w-3xl mt-20">
          <Marquee
            pauseOnHover
            speed={80}
            gradient={false}
            className="flex items-center"
          >
            {[
              "/img/logo-html-5-256.png",
              "/img/logo-css-3-256.png",
              "/img/logo-javascript-256.png",
              "/img/logo-php-256.png",
              "/img/typescript-256.png",
              "/img/logo-laravel-256.png",
              "/img/logo-react-256.png",
              "/img/bootstrap-256.png",
              "/img/codeigniter-logo_brandlogos.net_ydmii.png",
              "/img/nextjs.512x512.png"
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Skill ${index + 1}`}
                width={120}
                height={120}
                className="marquee-image"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
