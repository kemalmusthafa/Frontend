import Category from "@/components/category";
import Content from "@/components/content";
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

export async function generateMetadata({params} : {params: {slug : string}}){
    const blog: IBlog = await getBlogsSlug (params.slug)

    return {
        title : blog.fields.title,
        description: blog.fields.title,
        authors : blog.fields.author.fields.name,
        openGraph: {
            images: [`https:${blog.fields.thumbnail.fields.file.url}`]
        }
    }
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogsSlug(params.slug);
  console.log(blog.fields.content);
  return (
    <div className="container flex flex-1 w-screen h-screen justify-between">
      <Wrapper>
        <div className="flex gap-10 my-10">
          <div className="text-green">
            <Category
              title={blog.fields.title}
              category={blog.fields.category}
            />
          </div>
          <div>
            <Content
              title={blog.fields.title}
              category={blog.fields.category}
              author={blog.fields.author.fields.name}
              date={blog.fields.date}
              thumbnail={blog.fields.thumbnail.fields.file.url}
              content={blog.fields.content}
            />
          </div>
          <div>kanan</div>
        </div>
      </Wrapper>
    </div>
  );
}
