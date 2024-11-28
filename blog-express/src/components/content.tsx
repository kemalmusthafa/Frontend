import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import React from "react";
import ShareButton from "./share";

interface IContent {
  title: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
  content: Document;
  slug: string;
}

export default function Content({
  title,
  category,
  author,
  date,
  thumbnail,
  content,
  slug,
}: IContent) {
  return (
    <div className="flex flex-col justify-items-start items-start h-[100vh] w-screen max-w-screen-lg mx-auto p-4 sm:p-4 lg:p-4 gap-5">
      <div className="flex">
        <h1 className="font-bold text-xl sm:text-2xl">
          Category: <span className="text-blue-500">{category}</span>
        </h1>
      </div>
      <div className="flex">
        <h1 className="font-bold text-3xl sm:text-4xl">{title}</h1>
      </div>
      <div className="md:hidden w-full">
        <ShareButton slug={slug} />
      </div>
      <div className="flex flex-row gap-3 sm:gap-5 text-gray-600">
        <h3 className="text-sm font-semibold">{author}</h3>
        <h3 className="text-sm font-mono">{date}</h3>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src={thumbnail}
          alt="thumbnail"
          layout="responsive"
          width={1000}
          height={600}
          className="rounded-md"
        />
      </div>
      <div className="prose lg:prose-lg">
        {documentToReactComponents(content)}
      </div>
    </div>
  );
}