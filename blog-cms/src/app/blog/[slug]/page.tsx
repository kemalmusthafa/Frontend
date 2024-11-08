import Category from "@/components/category";
import Content from "@/components/content";
import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogsSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import React from "react";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogsSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogsSlug(params.slug);

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen justify-between px-4 lg:px-0">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 my-10">
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
            <div className="hidden lg:flex">
              <Category title={blog.fields.title} category={blog.fields.category} />
            </div>
            <div className="hidden lg:flex mt-5">
              <ShareButton slug={blog.fields.slug} />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-2/4 px-4">
            <Content
              title={blog.fields.title}
              category={blog.fields.category}
              author={blog.fields.author.fields.name}
              date={blog.fields.date}
              thumbnail={blog.fields.thumbnail.fields.file.url}
              content={blog.fields.content}
              slug={blog.fields.slug}
            />
          </div>

          <div className="hidden lg:flex lg:w-1/4"></div>
        </div>
      </Wrapper>
    </div>
  );
}
