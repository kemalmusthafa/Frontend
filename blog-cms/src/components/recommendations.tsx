import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecommendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blogs.map((item, idx) => {
        return (
          <Link key={idx} href={`${item.fields.slug}`}>
            <div className="flex flex-row gap-2 text-sm relative">
              <Image
                className="object-contain hover:scale-110"
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                alt="thumbnail"
                height={100}
                width={100}
              />
              <div className="flex flex-col">
                <p className="flex flex-1 text-xs font-semibold">
                  {item.fields.title}
                </p>
                <p className="flex flex-1 text-xs">
                  {item.fields.author.fields.name}
                </p>
                <p className="flex flex-1 text-xs font-mono">
                  {item.fields.date}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
