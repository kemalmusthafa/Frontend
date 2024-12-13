const base_url = process.env.NEXT_BASE_URL_BE;

export const getBlogs = async () => {
  const res = await fetch(`${base_url}/blogs`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.blogs;
};
export const getBlogsSlug = async (slug: string) => {
  const res = await fetch(`${base_url}/blogs/${slug}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.blog;
};

// export const getBlogRecom = async (slug: string) => {
//   const res = await fetch(
//     `http://localhost:8000/api/blogs/${slug}&limit=3`,
//     { next: { revalidate: 60 } }
//   );

//   const data = await res.json();
//   return data?.blog;
// };
