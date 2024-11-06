import Image from "next/image";
import React from "react";

interface ICardBlog {
  title: string;
  thumbnail: string;
  avatar: string;
  email: string;
  author: string;
  slug: string;
}

export default function Cards({
  title,
  thumbnail,
  avatar,
  email,
  author,
  slug,
}: ICardBlog) {
  return (
    <div className="flex flex-col w-[300px] h-[500px] shadow-lg rounded-lg">
      <div className="flex rounded-t-lg justify-center overflow-hidden">
        <Image
          src={`https:${thumbnail}`}
          alt="image"
          height={600}
          width={400}
          style={{}}
        ></Image>
      </div>
      <div className="flex flex-col gap-10 p-4">
        <div className="flex h-[50px] font-bold justify-center text-start">{`${title}`}</div>
        <div className="flex flex-row h-[50px] gap-5">
          <div className="flex overflow-hidden rounded-full">
            <Image
              src={`https:${avatar}`}
              alt="avatar"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-[100px] h-[10px] text-xs font-bold">{`${author}`}</div>
            <div className="flex w-[100px] h-[10px] text-xs font-thin">{`${email}`}</div>
          </div>
        </div>
        <div className="flex h-[50px]"><button className="bg-green-800 w-[100px] h-[40px] text-center text-white p-1 rounded-lg text-sm hover:bg-green-700">Read more.</button></div>
      </div>
    </div>
  );
}
