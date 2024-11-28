import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecommendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blogs.map((item, idx) => {
        return (
          <Link key={idx} href={item.slug}>
            <div className="flex flex-row gap-2 text-sm relative">
              <Image
                className="object-contain hover:scale-110"
                src={item.thumbnail}
                alt="thumbnail"
                height={100}
                width={100}
              />
              <div className="flex flex-col">
                <p className="flex flex-1 text-xs font-semibold">
                  {item.title}
                </p>
                <p className="flex flex-1 text-xs">
                  {item.user.username}
                </p>
                <p className="flex flex-1 text-xs font-mono">
                  {item.createdAt}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}