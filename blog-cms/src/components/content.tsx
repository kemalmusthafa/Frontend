import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import React from "react";

interface IContent {
  title: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
  content: Document;
}

export default function Content({
  title,
  category,
  author,
  date,
  thumbnail,
  content,
}: IContent) {
  return (
    <div className="flex flex-col justify-items-start items-start h-screen w-[800px] gap-10">
      <div className="flex">
        <h1 className="font-bold text-2xl">Category : {`${category}`}</h1>
      </div>
      <div className="flex">
        <h1 className="font-bold text-4xl">{`${title}`}</h1>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <h3 className="text-sm font-semibold ">{`${author}`}</h3>
        </div>
        <div>
          <h3 className="text-sm font-mono">{`${date}`}</h3>
        </div>
      </div>
      <div className="flex">
        <Image
          src={`https:${thumbnail}`}
          alt="thumbnail"
          width={1000}
          height={600}
        />
      </div>
      <div className="">
        {documentToReactComponents(content)}
        </div>
    </div>
  );
}
