import Category from "@/components/category";
import Content from "@/components/content";
import RecommendationBlog from "@/components/recommendations";
import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { formatDate } from "@/helpers/formatDate";
import { getBlogs, getBlogsSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import React from "react";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogsSlug(params.slug);

  return {
    title: blog.title,
    description: blog.title,
    authors: blog.user.username,
    openGraph: {
      images: [`${blog.thumbnail}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogsSlug(params.slug);
    // const blogNe: IBlog[] = await getBlogRecom(params.slug);

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen justify-between px-4 lg:px-0">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 my-10">
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
            <div className="hidden lg:flex flex-col bg-slate-50 w-auto h-auto rounded-lg gap-10 p-5">
              <Category title={blog.title} category={blog.category} />
              <div className="flex flex-1 font-semibold">Recommendation : </div>
              {/* <RecommendationBlog blogs={blogNe}/> */}
            </div>
            <div className="hidden lg:flex mt-5">
              <ShareButton slug={blog.slug} />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-2/4 px-4">
            <Content
              title={blog.title}
              category={blog.category}
              author={blog.user.username}
              date={formatDate(blog.createdAt)}
              thumbnail={blog.thumbnail}
              content={blog.content}
              slug={blog.slug}
            />
          </div>

          <div className="hidden lg:flex lg:w-1/4"></div>
        </div>
      </Wrapper>
    </div>
  );
}