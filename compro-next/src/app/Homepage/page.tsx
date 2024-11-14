import Divider from "@/components/divider";
import HeroSection from "@/components/hero";
import NewCollection from "@/components/newcollection";
import ProductMan from "@/components/productman";
import ProductWomen from "@/components/productwomen";
import Testimonials from "@/components/testimonials";
import { getMan, getWomen } from "@/libs/contentful";
import { IMan, IWomen } from "@/types/man";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Find The Best Fashion Style For You.",
  keywords: "T-Shirt Neon, T-Shirt Neon Yellow, T-Shirt Black, T-Shirt Blacked, Hoodie Black, Hoodie Blaked, Dress, Sweaters",
  openGraph: {
    title: "Homepage | Find The Best Fashion Style For You.",
    description: "Unwrap the New Season! Presenting our new collection—bold, stylish, and made for you. Elevate your wardrobe with these must-have pieces!",
    url: "https://msth-clothing.vercel.app/",
    type: "website",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 800,
        alt: "MSTH. - Home"
      }
    ]
  }
}

export default async function Homepage() {
  const dataMan: IMan[] = await getMan();
  const dataWomen: IWomen[] = await getWomen();
  const latestDataMan = dataMan.slice(5, 6);
  const latestDataWomen = dataWomen.slice(5, 6);
  return (
    <div className="container max-w-screen-2xl flex flex-col">
      <HeroSection />
      <div className="flex flex-col h-auto md:h-auto p-7">
        <h1 className="flex flex-1 justify-center items-center text-center text-xl lg:text-2xl font-bold">
          NEW COLLECTION
        </h1>
        <div className="flex justify-center m-5">
          <Divider />
        </div>
        <p className="text-center text-sm md:text-base lg:text-md font-mono p-5">
          Unwrap the New Season! Presenting our new collection—bold, stylish,
          and made for you. Elevate your wardrobe with these must-have pieces!
        </p>
        <NewCollection />
      </div>
      <div className="flex flex-col h-auto md:h-auto justify-center items-center gap-5 md:mb-6">
        <h1 className="flex flex-1 justify-center items-center text-center text-xl lg:text-2xl font-bold">
          BEST FASHION SINCE 2024
        </h1>
        <div className="flex justify-center m-0">
          <Divider />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-5">
          <div className="flex h-[600px] w-[400px] relative justify-center overflow-hidden rounded-tl-[150px]">
            <Image
              src="/ALMZV.jpeg"
              alt="sales"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="flex flex-1 justify-start items-center text-md text-justify lg:text-md font-bold font-mono w-[400px]">
            Founded in 2024, MSTH. is a fresh, dynamic clothing brand dedicated
            to creating high-quality, trend-driven apparel that resonates with
            today’s lifestyle. Born out of a passion for design and a commitment
            to quality, MSTH. aims to provide clothing that not only looks good
            but also feels great to wear.
          </p>
        </div>
        <div className="flex flex-row bg-teal-700 h-[80px] w-[400px] md:h-[100px] md:w-[600px] justify-between px-16 md:absolute md:mt-[370px] gap-5">
          <div className="flex flex-col justify-center items-center text-center text-xs md:textarea-md font-bold">
            <div>10.000+</div>
            <div>Selling Products</div>
          </div>
          <div className="flex flex-col justify-center items-center text-center text-xs md:textarea-md font-bold">
            <div>1.000+</div>
            <div>Articles</div>
          </div>
          <div className="flex flex-col justify-center items-center text-center text-xs md:textarea-md font-bold">
            <div>10+</div>
            <div>Hiring Partners</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-base-200 text-base-content h-auto md:h-auto p-10">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-5">
          <div className="flex flex-col justify-start items-start text-start gap-5 p-[8px]">
            <h1 className="flex justify-start items-start text-start text-xl lg:text-2xl font-bold">
              BEST SELLER PRODUCT
            </h1>
            <div className="flex justify-center m-0">
              <Divider />
            </div>
            <p className="flex text-sm text-justify font-mono w-auto">
              Our Best Seller is Here to Stay! 🔥 Get the style everyone’s
              raving about. Comfort, quality, and timeless design in one piece.
              Don’t miss out!
            </p>
            <Link
              href={"/product"}
              className="flex bg-base-content text-base-300 w-[150px] h-[50px] justify-center items-center font-extrabold"
            >
              GET NOW !
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {latestDataMan.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex h-[400px] w-[400px] justify-center items-end relative"
                >
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.title}
                    fill
                  />
                  <div className="flex bg-base-300 text-base-content h-[100px] w-[400px] text-2xl font-bold font-mono justify-center items-center absolute">
                    {item.fields.title}
                  </div>
                </div>
              );
            })}
            {latestDataWomen.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex h-[400px] w-[400px] justify-center items-end relative"
                >
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.title}
                    fill
                  />
                  <div className="flex bg-base-300 text-base-content h-[100px] w-[400px] text-2xl font-bold font-mono justify-center items-center absolute">
                    {item.fields.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col h-auto lg:h-auto gap-5 p-[50px]">
        <h1 className="flex flex-1 justify-center items-center text-center text-xl lg:text-2xl font-bold">
          OUR PRODUCT
        </h1>
        <div className="flex justify-center m-0">
          <Divider />
        </div>
        <p className="flex flex-1 justify-center items-center text-start text-sm lg:text-md font-mono font-bold">
          Fashion Essentials. Our men’s and women’s collections combine style
          and quality, making it easy to mix, match, and stand out. Explore the
          looks made for you!
        </p>
        <h1 className="flex flex-1 justify-center items-center text-center text-xl lg:text-2xl font-bold">
          MENS
        </h1>
        <div className="flex justify-center m-0">
          <Divider />
        </div>
        <ProductMan />
        <h1 className="flex flex-1 justify-center items-center text-center text-xl lg:text-2xl font-bold">
          WOMENS
        </h1>
        <div className="flex justify-center m-0">
          <Divider />
        </div>
        <ProductWomen />
      </div>
      <Testimonials />
    </div>
  );
}
