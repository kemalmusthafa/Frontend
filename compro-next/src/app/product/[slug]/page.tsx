import Divider from "@/components/divider";
import { getManSlug, getWomenSlug } from "@/libs/contentful";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  let product = await getManSlug(params.slug).catch(() => null);

  if (!product) {
    product = await getWomenSlug(params.slug).catch(() => null);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-10 h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-[100px]">
        <div className="flex h-[400px] w-[400px] justify-center relative">
          <Image
            src={`https:${product.fields.thumbnail.fields.file.url}`}
            alt={product.fields.title}
            fill
            className="object-cover shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            {product.fields.title}
          </h1>
          <Divider />
          <p className="text-xl font-semibold text-base-content mb-4">
            {product.fields.prices || "Price not available"}
          </p>

          <div className="text-base text-base-content mb-6 leading-relaxed">
            {product.fields.descriptions
              ? documentToReactComponents(product.fields.descriptions)
              : "No description available"}
          </div>
          <button className="bg-teal-600 text-white px-6 py-2 hover:bg-teal-700 transition-all duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
