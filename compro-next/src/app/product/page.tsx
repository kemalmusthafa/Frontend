import Divider from "@/components/divider";
import NewCollection from "@/components/newcollection";
import ProductMan from "@/components/productman";
import ProductWomen from "@/components/productwomen";
import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <div className="hero bg-white dark:bg-black min-h-screen">
        <div className="hero-content flex-col lg:flex-row items-center w-full max-w-screen-lg mx-auto">
          <div className="w-full shadow-2xl">
            <Image src="/banner2.png" alt="banner" layout="responsive" width={1600} height={900} />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20">
        <h1 className="text-center text-xl lg:text-2xl font-bold">
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
        <div className="flex flex-col h-auto gap-5 p-5 md:p-10 lg:p-20">
          <h1 className="text-center text-xl lg:text-2xl font-bold">
            OUR PRODUCT
          </h1>
          <div className="flex justify-center">
            <Divider />
          </div>
          <p className="text-center text-sm md:text-base lg:text-md font-mono">
            Fashion Essentials. Our men’s and women’s collections combine style
            and quality, making it easy to mix, match, and stand out. Explore
            the looks made for you!
          </p>
          <h1 className="text-center text-xl lg:text-2xl font-bold">MENS</h1>
          <div className="flex justify-center">
            <Divider />
          </div>
          <ProductMan />
          <h1 className="text-center text-xl lg:text-2xl font-bold">WOMENS</h1>
          <div className="flex justify-center">
            <Divider />
          </div>
          <ProductWomen />
        </div>
      </div>
    </div>
  );
}